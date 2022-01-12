

import "./app-filter.css";

const AppFilter = (props) => {
   const { handlClick, greenClick } = props


   return (
      <div className="btn-group">
         {/* {buttons} */}
         <button type="button" className={`btn btn-outline-primary`} onClick={() => handlClick('all')}>Все клиенты</button>
         <button type="button" className={`btn btn-outline-primary`} onClick={() => handlClick(true)}>Был заказ</button>
         <button type="button" className={`btn btn-outline-primary`} onClick={() => handlClick(false)}>Без заказа</button>
         <button type="button" className={`btn btn-outline-primary`} onClick={() => greenClick(true)}>Зеленые</button>
      </div>
   )
}

export default AppFilter;