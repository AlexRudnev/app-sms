import { Component } from 'react';

import Sidebar from '../sidebar/SideBar';
import FormSearch from '../form-search/FormSearch';
import AllClient from '../all-client-item/AllClient'
import FormAddClient from '../form-add-client/FormAddClient';
import data from '../../data/clients.json'

import './App.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: data
    }
  }

  // deleteItem = (id) => {
  //   this.setState(({ data }) => {
  //     return {
  //       data: data.filter(item => item.id !== id)
  //     }
  //   })
  // }





  render() {
    return (
      <div className="app" >
        <Sidebar />
        <FormAddClient />
        <FormSearch />
        <AllClient
          // data={this.state.data}
          onDelete={this.deleteItem}
        />

      </div>
    );
  }
}

export default App;
