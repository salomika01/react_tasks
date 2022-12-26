
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

const App =() => {
  const [tasks, setTasks] = useState([
    {
        id:1,
        text:'new meeting preparation',
        day:'Monday',
        reminder:true
     },
     {
        id:2,
        text:'meetongs results conclusion',
        day:'Sunday',
        reminder:true
     },
     {
        id:3,
        text:'some other cases',
        day:'Friday',
        reminder:false
     },
     ] )

    //  add task
    const addTask =(task) => {
      const id =Math.floor(Math.random() * 10000) +
      1
 
      const newTask = { id, ...task}
      setTasks([...tasks, newTask])

    }

    //  delete task
     const deleteTask =(id) => {
      setTasks(tasks.filter((task) => task.id !== id))
     }

    //  toggle reminder
    const toggleReminder = (id) => {
      setTasks(tasks.map((task) =>task.id === id
      ? {...task, reminder: 
        !task.reminder } :task
      
        
        )
      )
    }



  return (
    <div className='container'>
      <Header  />
      <AddTask  onAdd={addTask}/>
      {tasks.length > 0 ? 
      <Tasks tasks={tasks} 
      onDelete={deleteTask}
      onToggle={toggleReminder} /> : 'No Task'}
    </div>
  );
}






export default App;
