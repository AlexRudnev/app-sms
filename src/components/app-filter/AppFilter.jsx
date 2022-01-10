

// import { useEffect } from "react";
import "./app-filter.css";

const AppFilter = (props) => {
   const { handlClick, greenClick } = props




   return (
      <>
         <ul className="ulFilter">
            <li className="liFilter">
               <div className="btn-group">
                  {/* {buttons} */}
                  <button type="button" className={`btn btn-outline-primary`} onClick={() => handlClick('all')}>Все клиенты</button>
                  <button type="button" className={`btn btn-outline-primary`} onClick={() => handlClick(1)}>Был заказ</button>
                  <button type="button" className={`btn btn-outline-primary`} onClick={() => handlClick(0)}>Без заказа</button>
                  <button type="button" className={`btn btn-outline-primary`} onClick={() => greenClick(1)}>Зеленые</button>
               </div></li>
            <li className="liFilterDate">
               <div className="btn-group right">
                  {/* {buttons} */}
                  <button type="button" className={`btn btn-outline-primary`} onClick={() => handlClick('all')}><i className="fas fa-chevron-left "></i></button>
                  <button type="button" className={`btn btn-outline-primary`} onClick={() => handlClick(1)}>10.01.2022</button>
                  <button type="button" className={`btn btn-outline-primary`} onClick={() => handlClick(0)}><i className="fas fa-chevron-right "></i></button>
               </div></li>
         </ul>

      </>
   )
}

export default AppFilter;