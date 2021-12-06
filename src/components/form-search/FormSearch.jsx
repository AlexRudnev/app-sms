import { Component } from "react";

import './fromSearch.css'

class FormSearch extends Component {
   render() {
      return (
         <input type="text"
            className="form-control search-input"
            placeholder="Найти клиента" />
      )
   }
}


export default FormSearch;