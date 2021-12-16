import { useState, useEffect } from 'react';
import EmployeesListItem from './AllClientItem'
import Pagination from './pagination';
import AppFilter from "../app-filter/app-filter";


import Axios from "axios";
import './AllClient.css'



const AllClient = () => {
   const [nowItem, setNowItem] = useState([])
   const [error, setError] = useState(null);
   const [isLoaded, setIsLoaded] = useState(false);
   const [items, setItems] = useState([]);
   const [currentPage, setCurrentPage] = useState(1)
   const [itemsPerPage] = useState(700)


   // ------------------------- при загрузке страницы отмечаем галочками клиентов, у которых был заказ ------------------//
   // useEffect(() => {
   //    Axios.put(`http://localhost:3000/changeOrd`)
   // })

   // ------------------------- при загрузке страницы выводим из mySQL базу клиентов --------------------------------------//
   useEffect(() => {
      fetch("http://localhost:3000/hello")
         .then(res => res.json())
         .then(
            (result) => {
               setIsLoaded(true);
               setItems(result);
               setNowItem(result)

            },
            (error) => {
               setIsLoaded(true);
               setError(error);
            }
         )
   }, [])

   useEffect(() => {
      setItems(items)
   }, [items])



   // --------------------------------------- Считаем страницы пагинации --------------------------------------------------//
   const lastItemIndex = currentPage * itemsPerPage;
   const firstItemIndex = lastItemIndex - itemsPerPage;
   const currentItem = items.slice(firstItemIndex, lastItemIndex)

   const paginate = pageNumbers => setCurrentPage(pageNumbers)


   // --------------------------------------- перебираем массив базы клиентов ---------------------------------------------//
   const element = currentItem.map(item => {
      const { id, ...itemProps } = item;
      // console.log(item)

      return (
         <EmployeesListItem
            key={id}
            id={id}
            {...itemProps}
            //-------------- обработчик удаления из базы данных строк клиентов --------------------------//
            deleteEmployee={(id) => {
               console.log(id)
               console.log(items)
               var answer = window.confirm("Уверен что нужно удалить клиента из базы?");
               if (answer) {
                  Axios.delete(`http://localhost:3000/delete/${id}`).then((response) => {
                     setItems(
                        currentItem.filter((val) => {
                           return val.id !== id;
                        })
                     );
                  });
               } else { }
            }}

         />
      )
   })

   if (error) {
      return <div>Ошибка: {error.message}</div>;
   } else if (!isLoaded) {
      return <div>Загрузка...</div>;
   } else {
      return (
         <div >
            <AppFilter
               handlClick={(status) => {
                  if (status === 'all') {
                     setItems(nowItem)
                  } else {
                     console.log(nowItem)
                     let newItem = nowItem.filter(item => item.ord === status)
                     setItems(newItem)
                     console.log(newItem)


                  }

               }}

               greenClick={(status) => {

                  if (status === 'all') {
                     setItems(nowItem)
                     console.log(nowItem)
                  } else {
                     let newItem = nowItem.filter(item => item.ColorSmile === status)
                     setItems(newItem)
                     console.log(newItem)
                     console.log(items)
                  }

               }}

            />
            <ul className='list-group ' >
               <li className='flex-1 list-group-item first'>
                  <span className='j-c ' >Имя</span>
                  <span className='j-c '>Телефон</span>
                  <span className='j-c '>Последний звонок</span>
                  <span className='j-c '>Был заказ?</span>
                  {/* <div>
                     <i className="far fa-smile fa-lg"></i>
                     <i className="fas fa-trash-alt fa-lg" ></i>
                  </div> */}
               </li>
               {element}

            </ul >
            <Pagination
               itemsPerPage={itemsPerPage}
               totalItems={items.length}
               paginate={paginate} />
         </div >
      )
   }


}

export default AllClient;