import { useState } from "react";
import Axios from "axios";

const TasksDayItem = (props) => {
   const { id, name, mobile, date1, ord, ColorSmile } = props
   const [curentSmileColor, setCurentSmileColor] = useState(ColorSmile)

   //--------------------------- ИЗМЕНЯЕМ В БАЗЕ ДАННЫХ ТРУ НА ФОЛС ColorSmile ---------------------------------------//
   const updateEmployeeWage = (id) => {
      Axios.put(`/update`,
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

   let addOrder = ''
   if (ord) {
      addOrder = <i className="fas fa-check"></i>
   }
   return (
      <li className="flex-1 list-group-item " >
         <span className={addClass}>{name}</span>
         <span className={addClass}>{mobile}</span>
         <span className={addClass}>{date1}</span>
         <span className={addClass}>{addOrder}</span>
         <div className="fa-container">
            <i className="far fa-smile fa-lg" onClick={() => {
               updateEmployeeWage(id);
            }}></i>
            {/* <i className="fas fa-trash-alt fa-lg" onClick={() => {
               deleteEmployee(id);
            }}></i> */}
         </div>
      </li>
   )
}

export default TasksDayItem;