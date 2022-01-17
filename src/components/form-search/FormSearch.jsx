// import { Component } from "react";

import './fromSearch.css'


const FormSearch = (props) => {
   const { setValuesMobile } = props
   return (

      <input type="text"
         className="form-control search-input"
         placeholder="Поиск по телефону или имени"
         onChange={(e) => setValuesMobile(e)}
      />
   )
}


export default FormSearch;