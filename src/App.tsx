
import { ChangeEvent, FormEvent, useState } from "react";

import Form from "./components/Form";
import TaskList from "./components/TaskList";

import styles from './components/Form.module.css'
import { Trash } from "phosphor-react";

export default function App() {

  const [Text, setNewText] = useState("")
  const [Tasks, setNewTask] = useState <string[]> ([])

  function handleSaveTask(event: FormEvent) {
    event.preventDefault()
    setNewTask([...Tasks, Text])

    console.log(Tasks)
  }

  function handleNewText(event: ChangeEvent<HTMLInputElement>) {
    setNewText(event.target.value)
  }

  return (
    <div className="app">
      <header>
        <h1> Tasks </h1>
      </header>

      <Form  onSaveTask={handleSaveTask} >  
        <input 
          type="text"
          name="task" 
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
