import { Component } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigations from '../Navitation/Navigation';
import AllClientPage from '../pages/AllClient';
import TasksNow from '../pages/TasksNow';


import './App.css'

class App extends Component {


  render() {
    return (
      <Router>
        <div className='qwe'>
          <div><Navigations /></div>
          <div className='app1'>
            <Routes>
              <Route path="/" element={<TasksNow />} />
              <Route path="/all" element={<AllClientPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
