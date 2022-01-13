// import { Component } from "react";

import './fromSearch.css'


const FormSearch = (props) => {
   const { setValuesMobile, setValuesName } = props
   return (

      <div className='search-client'>
         <input type="text"
            className="form-control search-input"
            placeholder="Поиск по телефону"
            onChange={(e) => setValuesMobile(e)}
         />
         <input type="text"
            className="form-control search-input"
            placeholder="Поиск по имени"
            onChange={(e) => setValuesName(e)}
         />
      </div>
   )
}


export default FormSearch;