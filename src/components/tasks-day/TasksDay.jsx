import { useState, useEffect } from 'react';
import TasksDayItem from "./TasksDayItem"
import AppFilter from "../app-filter/AppFilter";

// import Axios from "axios";
import './tasksDay.css'


const TasksDay = () => {
   const [nowItem, setNowItem] = useState([])
   const [error, setError] = useState(null);
   const [isLoaded, setIsLoaded] = useState(false);
   const [items, setItems] = useState([]);

   // ------------------------- при загрузке страницы выводим из mySQL базу клиентов --------------------------------------//
   useEffect(() => {
      fetch("/list")
         .then(res => res.json())
         .then(
            (result) => {
               setIsLoaded(true);
               setItems(result);
               setNowItem(result)

            },
            (error) => {
               setIsLoaded(true);
               setError(error);
            }
         )
   }, [])
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
            <ul className='list-group ' >
               <li className='flex-1 list-group-item first'>
                  <span className='j-c ' >Имя</span>
                  <span className='j-c '>Телефон</span>
                  <span className='j-c '>Последний звонок</span>
                  <span className='j-c '>Был заказ?</span>
                  {/* <div>
                     <i className="far fa-smile fa-lg"></i>
                     <i className="fas fa-trash-alt fa-lg" ></i>
                  </div> */}
               </li>
               {element}

            </ul >
            <div></div>
         </>
      )
   }
}
export default TasksDay