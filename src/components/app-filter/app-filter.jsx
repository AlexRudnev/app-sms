

import "./app-filter.css";

const AppFilter = (props) => {
   const { handlClick, greenClick } = props
   // const buttonsData = [
   //    { name: 'all', label: 'Был заказ' },
   //    { name: 'rise', label: 'Зеленые' },
   //    { name: 'moreThen1000', label: 'Без заказа' }
   // ];

   // const buttons = buttonsData.map(({ name, label }) => {
   //    const active = props.filter === name;
   //    const clazz = active ? 'btn-light' : 'btn-outline-light';
   //    return (
   //       <button type="button"
   //          className={`btn ${clazz}`}
   //          key={name}
   //          onClick={() => props.onFilterSelect(name)}>
   //          {label}
   //       </button>
   //    )
   // })






   return (
      <div className="btn-group">
         {/* {buttons} */}
         <button type="button" className={`btn btn-outline-primary`} onClick={() => handlClick('all')}>Все клиенты</button>
         <button type="button" className={`btn btn-outline-success`} onClick={() => handlClick(true)}>Был заказ</button>
         <button type="button" className={`btn btn-outline-danger`} onClick={() => handlClick(false)}>Без заказа</button>
         <button type="button" className={`btn btn-outline-success`} onClick={() => greenClick(true)}>Зеленые</button>
      </div>
   )
}

export default AppFilter;