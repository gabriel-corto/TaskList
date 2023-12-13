
import { ChangeEvent, FormEvent, useState } from "react";

import Form from "./components/Form";
import TaskList from "./components/TaskList";

import styles from './components/Form.module.css'
import { Trash, Warning } from "phosphor-react";

export default function App() {

  const [Text, setNewText] = useState("")
  const [Tasks, setNewTask] = useState <string[]> ([])
  const [isTextEmpty, setIsTextEmpty] = useState(true)

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

  return (
    <div className="app">
      <header>
        <h1> Tasks </h1>
      </header>

      <div className={isTextEmpty ? "error" : "success"}>
         <Warning /> {isTextEmpty ? "please fill in the empty field" : "Success"}
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
              <button> <Trash size={18} weight='bold' /> </button>
            </li>
          )
        })}
      </TaskList>
    </div>
  )
}
