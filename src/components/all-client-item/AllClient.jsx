import { useState, useEffect } from 'react';
import EmployeesListItem from './AllClientItem'
import Axios from "axios";

import './AllClient.css'



const AllClient = ({ deleteEmployee }) => {

   const [error, setError] = useState(null);
   const [isLoaded, setIsLoaded] = useState(false);
   const [items, setItems] = useState([]);

   useEffect(() => {
      Axios.put(`http://localhost:3000/changeOrd`)
   })


   useEffect(() => {
      fetch("http://localhost:3000/hello")
         .then(res => res.json())
         .then(
            (result) => {
               setIsLoaded(true);
               setItems(result);
            },
            (error) => {
               setIsLoaded(true);
               setError(error);
            }
         )
   }, [])





   const element = items.map(item => {
      const { id, ...itemProps } = item;

      return (
         <EmployeesListItem
            key={id}
            id={id}
            {...itemProps}

            //-------------- обработчик удаления из базы данных строк клиентов --------------------------//
            deleteEmployee={(id) => {
               console.log(id)
               var answer = window.confirm("Уверен что нужно удалить клиента из базы?");
               if (answer) {
                  Axios.delete(`http://localhost:3000/delete/${id}`).then((response) => {
                     setItems(
                        items.filter((val) => {
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
         <ul className='list-group '>
            <li className='flex-1 list-group-item first'>
               <span className='j-c '>Имя</span>
               <span className='j-c '>Телефон</span>
               <span className='j-c '>Дата регистрации</span>
               <span className='j-c '>Был заказ?</span>
               <i className="far fa-smile fa-lg"></i>
               <i className="fas fa-trash-alt fa-lg" ></i>
            </li>
            {element}
         </ul>
      )
   }


}

export default AllClient;