import React from "react";
import "react-datepicker/dist/react-datepicker.css";

import "./app-filter.css";

const AppFilter = (props) => {
   const { handlClick, greenClick } = props

   return (
      <>
         <button type="button" className={`btn btn-outline-primary`} onClick={() => handlClick('all')}>Все клиенты</button>
         <button type="button" className={`btn btn-outline-primary`} onClick={() => handlClick(1)}>Был заказ</button>
         <button type="button" className={`btn btn-outline-primary`} onClick={() => handlClick(0)}>Без заказа</button>
         <button type="button" className={`btn btn-outline-primary`} onClick={() => greenClick(1)}>Зеленые</button>
      </>
   )
}

export default AppFilter;