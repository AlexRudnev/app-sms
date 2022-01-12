import { useState, useEffect } from 'react';
import TasksDayItem from "./TasksDayItem"
import AppFilter from "../app-filter/AppFilter";
import DatePicker from "react-datepicker";
import * as moment from 'moment'
import axios from "axios";

import './tasksDay.css'


const TasksDay = () => {
   const [nowItem, setNowItem] = useState([])
   const [error, setError] = useState(null);
   const [isLoaded, setIsLoaded] = useState(false);
   const [items, setItems] = useState([]);
   const [startDate, setStartDate] = useState(new Date());
   let dateCalendar = moment(startDate).format("DDMM")

   // ------------------------- при загрузке страницы выводим из mySQL базу клиентов axios--------------------------------------//
   useEffect(() => {
      axios.get("/search",
         {
            params: {
               domain: dateCalendar
            }
         }
      ).then((response) => {
         setIsLoaded(true);
         setItems(response.data);
         setNowItem(response.data)
         console.log(response.data);
      }, (error) => {
         setIsLoaded(true);
         setError(error);
      })
      // eslint-disable-next-line
   }, dateCalendar, [])


   useEffect(() => {
      setItems(items)
   }, [items])


   const element = items.map(item => {
      const { id, ...itemProps } = item;

      return (
         <TasksDayItem
            key={id}
            id={id}
            {...itemProps}
         />
      )
   })

   if (error) {
      return <div>Ошибка: {error.message}</div>;
   } else if (!isLoaded) {
      return <div>Загрузка...</div>;
   } else {
      return (
         <>
            <ul className="ulFilter">
               <li className="liFilter">
                  <div className="btn-group">
                     <AppFilter
                        handlClick={(status) => {
                           if (status === 'all') {
                              setItems(nowItem)
                           } else {
                              let newItem = nowItem.filter(item => item.ord === status)
                              setItems(newItem)
                           }
                        }}
                        greenClick={(status) => {
                           if (status === 'all') {
                              setItems(nowItem)
                              console.log(nowItem)
                           } else {
                              let newItem = nowItem.filter(item => item.ColorSmile === status)
                              setItems(newItem)
                           }
                        }}
                     />
                  </div>
               </li>
               <li className="liFilterDate">
                  <div className="btn-group right">
                     <DatePicker
                        selected={startDate}
                        onChange={(dater) => setStartDate(dater)}
                        dateFormat='dd.MM.yyyy'
                        className="red-border"
                     />
                  </div>
               </li>
            </ul>

            <ul className='list-group ' >
               <li className='flex-1 list-group-item first'>
                  <span className='j-c ' >Имя</span>
                  <span className='j-c '>Телефон</span>
                  <span className='j-c '>Последний звонок</span>
                  <span className='j-c '>Был заказ?</span>
               </li>
               {element}
            </ul >
            <div></div>
         </>
      )
   }
}
export default TasksDay