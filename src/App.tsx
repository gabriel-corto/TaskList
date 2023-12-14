
import { ChangeEvent, FormEvent, useState } from "react";

import Form from "./components/Form";
import TaskList from "./components/TaskList";

import styles from './components/Form.module.css'
import { Check, Trash, Warning } from "phosphor-react";

export default function App() {

  const [Text, setNewText] = useState("")
  const [Tasks, setNewTask] = useState <string[]> ([])
  const [isTextEmpty, setIsTextEmpty] = useState(true)
  const [Message, setMessage] = useState(false)

  function handleSaveTask(event: FormEvent) {
    event.preventDefault()
    
    if(Text.length === 0){
      setIsTextEmpty(true)
    } else {
      setNewText("")
      setIsTextEmpty(false)
      setNewTask([...Tasks, Text])
    }
  }

  function handleNewText(event: ChangeEvent<HTMLInputElement>) {
    setNewText(event.target.value)
  }

  function handleDeleteTask(Task: string){

    const TasksNotDeleted = Tasks.filter((TaskToDelete) => {
      return Task !== TaskToDelete
    })
    setNewTask(TasksNotDeleted)
    setMessage(true)
  }

  return (
    <div className="app">
      <header>
        <h1> Tasks </h1>
      </header>

      <div className={isTextEmpty ? "error" : "success"}>
         {isTextEmpty ? <p>{<Warning weight="bold" size={22} />} Please fill in the empty field</p>  : <p>{<Check weight="bold" size={22}/>} new Task Added !</p>}
      </div>
      <div className={Message ? "message" : ""}>
        {Message &&  <p><Warning weight="bold" size={22} /> One Task Removed</p> }
      </div>

      <Form  onSaveTask={handleSaveTask} >  
        <input 
          type="text"
          name="task" 
          value={Text}
          className={styles.input}
          placeholder="Add new task..."
          onChange={handleNewText} />
      </Form>

      <TaskList>
        {Tasks.map((Task) => {
          return(
            <li key={Task}>
              <strong>{Task}</strong>
              <button onClick={() => handleDeleteTask(Task)}> <Trash size={18} weight='bold' /> </button>
            </li>
          )
        })}
      </TaskList>
    </div>
  )
}
