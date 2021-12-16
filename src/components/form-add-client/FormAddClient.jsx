import { useState, useEffect } from "react";
import Axios from "axios";
// import AppFilter from '../app-filter/app-filter'

import './formAdd.css'



function FormAddClient(handlClick) {
   const [name, setName] = useState("");
   const [mobile, setMobile] = useState(0);
   const [employeeList, setEmployeeList] = useState([]);
   const [clients, setClients] = useState([]);
   // const [clientsWithOrder, setClientsWithOrder] = useState([]); 
   const [hasLoaded, setHasLoaded] = useState(false);

   useEffect(() => {
      fetch("http://localhost:3000/hello")
         .then(res => res.json())
         .then(
            (result) => {
               setHasLoaded(true);
               setClients(result);
            },
         )
   }, [])

   const clientsWithOrder = clients.filter(client => client.ord === true);

   const addEmployee = () => {
      Axios.post("http://localhost:3000/create", {
         name: name,
         mobile: mobile,
      }).then(() => {
         setEmployeeList([
            ...employeeList,
            {
               name: name,
               mobile: mobile,
            },
         ]);
      });
   };


   // const handlClick = () => {

   // }



   return (
      <div className="app-add-form">
         <div>
            <h3>Добавьте нового клиента</h3>
            <form
               className="add-form d-flex"
            // onSubmit={this.onSubmit}
            >
               <input type="text"
                  className="form-control new-post-label"
                  placeholder="Имя клиента"
                  onChange={(event) => {
                     setName(event.target.value)
                  }} />
               <input type="number"
                  className="form-control new-post-label"
                  placeholder="Телефон"
                  onChange={(event) => {
                     setMobile(event.target.value)
                  }} />

               <button type="submit"
                  className="btn btn-outline-light"
                  onClick={addEmployee}>Добавить</button>
            </form>
         </div>
         {/* <AppFilter /> */}
         {hasLoaded &&
            <div>
               <p className="clients-stats">Всего клиентов: {clients.length}</p>
               <p className="clients-stats">Клиенты с заказом: {clientsWithOrder.length}</p>
            </div>
         }
      </div>
   )
}

export default FormAddClient;











// class FormAddClient extends Component {

//    constructor(props) {
//       super(props);
//       this.state = {
//          name: '',
//          mobile: ''
//       }
//    }



//    onValueChange = (e) => {
//       this.setState({
//          [e.target.name]: e.target.value
//       })
//    }

//    onSubmit = (e) => {
//       e.preventDefault();
//       // Можно еще и сообщения добавлять, подсветку, атрибуты minlength и тд.
//       if (this.state.name.length < 3 || !this.state.mobile) return;
//       this.props.onAdd(this.state.name, this.state.mobile);
//       this.setState({
//          name: '',
//          mobile: ''
//       })
//    }

//    // addEmployee = (e) => {
//    //    e.preventDefault();
//    //    Axios.post("http://localhost:3001/create", {
//    //       name: name,
//    //       mobile: mobile
//    //    }).then(() => {
//    //       setEmployeeList([
//    //          ...employeeList,
//    //          {
//    //             name: name,
//    //             mobile: mobile
//    //          },
//    //       ]);
//    //    });
//    // }

//    render() {
//       const { name, mobile } = this.state;
//       return (
//          <div className="app-add-form">
//             <h3>Добавьте нового сотрудника</h3>
//             <form
//                className="add-form d-flex"
//                onSubmit={this.onSubmit}
//             >
//                <input type="text"
//                   className="form-control new-post-label"
//                   placeholder="Как зовут?"
//                   name="name"
//                   value={name}
//                   onChange={this.onValueChange} />
//                <input type="number"
//                   className="form-control new-post-label"
//                   placeholder="Телефон?"
//                   name="mobile"
//                   value={mobile}
//                   onChange={this.onValueChange} />

//                <button type="submit"
//                   className="btn btn-outline-light"
//                   onClick={this.addEmployee}>Добавить</button>
//             </form>
//          </div>
//       )
//    }
// }


// export default FormAddClient;