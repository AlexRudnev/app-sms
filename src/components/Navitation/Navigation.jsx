import { NavLink } from 'react-router-dom'
import './sidebar.css'



const Navigations = (props) => {


   return (
      <div className="sidebar">
         <nav className="sidebar-nav">
            <div className='logo'>CRM</div>
            <div className='after-logo'>DROVA-KIEV</div>
            <hr className='hr' />
            <ul>
               <li >
                  <NavLink to="/" style={{ textDecoration: 'none' }}><i className="fas fa-tasks "></i> <span className="icon active">Задачи сегодня</span></NavLink>
                  <NavLink to="/filter" style={{ textDecoration: 'none' }}><i className="fas fa-sort-amount-down-alt"></i> <span className="icon">Фильтры</span></NavLink>
                  <ul className="nav-flyout">
                     <li>
                        <NavLink to="/filter/firewood" style={{ textDecoration: 'none' }}>Дрова</NavLink>
                     </li>
                     <li>
                        <NavLink to="/filter/pellets" style={{ textDecoration: 'none' }}>Пеллеты</NavLink>
                     </li>
                     <li>
                        <NavLink to="/filter/briquets" style={{ textDecoration: 'none' }}>Брикеты</NavLink>
                     </li>
                  </ul>
               </li>

               <li>
                  <NavLink to="/all" style={{ textDecoration: 'none' }}><i className="fas fa-address-book"></i> <span className="icon">Все клиенты</span></NavLink>

               </li>
            </ul>
         </nav>
      </div>
   )
}

export default Navigations



