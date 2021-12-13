import TasksDay from '../tasks-day/TasksDay'
import FormAddClient from '../form-add-client/FormAddClient';
import FormSearch from '../form-search/FormSearch';



const TasksNow = () => {

   return (
      <>
         <FormAddClient />
         <FormSearch />
         <TasksDay />
      </>
   )
}
export default TasksNow