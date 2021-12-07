import Axios from "axios";
import { useState } from "react";

import './AllClient.css'

const EmployeesListItem = (props) => {
   const { id, name, mobile, date, ord, ColorSmile, deleteEmployee } = props
   const [curentSmileColor, setCurentSmileColor] = useState(ColorSmile)

   //--------------------------- ИЗМЕНЯЕМ В БАЗЕ ДАННЫХ ТРУ НА ФОЛС ColorSmile ---------------------------------------//
   const updateEmployeeWage = (id) => {
      Axios.put(`http://localhost:3000/update`,
         {
            ColorSmile: !ColorSmile,
            id: id,
         })
      setCurentSmileColor(!curentSmileColor)
   }



   let addClass = 'j-c'
   if (curentSmileColor) {
      addClass += ' ColorSmile';
   }

   return (
      <div >
         <li className="flex-1 list-group-item " >
            <span className={addClass}>{name}</span>
            <span className={addClass}>{mobile}</span>
            <span className={addClass}>{date}</span>
            <span className={addClass}>{ord}</span>
            <i className="far fa-smile fa-lg" onClick={() => {
               updateEmployeeWage(id);
            }}></i>
            <i className="fas fa-trash-alt fa-lg" onClick={() => {
               deleteEmployee(id);
            }}></i>

         </li>
      </div >
   )
}

export default EmployeesListItem;