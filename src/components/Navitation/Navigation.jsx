
import { Link } from 'react-router-dom'
import './sidebar.css'



const Navigations = props => {


   return (


      <div className="sidebar">
         <header>
            Дрова Киев
         </header>
         <nav class="sidebar-nav">

            <ul className="ul">
               <li>
                  <Link to="/" style={{ textDecoration: 'none' }}><i className="fas fa-tasks "></i> <span>Задачи сегодня</span></Link>
                  <Link to="/all" style={{ textDecoration: 'none' }}><i className="fas fa-sort-amount-down-alt"></i> <span>Фильтры</span></Link>
                  <ul class="nav-flyout">
                     <li>
                        <Link to="/all" style={{ textDecoration: 'none' }}>Дрова</Link>
                     </li>
                     <li>
                        <Link to="/all" style={{ textDecoration: 'none' }}>Пеллеты</Link>
                     </li>
                     <li>
                        <Link to="/all" style={{ textDecoration: 'none' }}>Брикеты</Link>
                     </li>
                  </ul>
               </li>

               <li>
                  <Link to="/all" style={{ textDecoration: 'none' }}><i className="fas fa-address-book"></i> <span class="">Все клиенты</span></Link>

               </li>
            </ul>
         </nav>
      </div>
   )
}

export default Navigations



