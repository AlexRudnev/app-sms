import { useState, useEffect } from 'react';
import EmployeesListItem from './AllClientItem'
// import Axios from "axios";

import './AllClient.css'



const AllClient = ({ onDelete }) => {

   const [error, setError] = useState(null);
   const [isLoaded, setIsLoaded] = useState(false);
   const [items, setItems] = useState([]);
   // const [ColorSmile] = useState(true)

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


   // const updateEmployeeWage = (id) => {
   //    console.log(id)
   //    Axios.put(`http://localhost:3000/update`,
   //       {
   //          ColorSmile: !ColorSmile,
   //          id: id,
   //       })
   //       .then(response => response.data.ColorSmile)
   // }






   const element = items.map(item => {
      const { id, ...itemProps } = item;
      return (
         <EmployeesListItem
            key={id}
            id={id}
            {...itemProps}
            // onClick={updateEmployeeWage}
            onDelete={() => onDelete(id)}
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