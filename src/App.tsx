
import { FormEvent } from "react";
import Form from "./components/Form";
import TaskList from "./components/TaskList";

export default function App() {

  function handleSaveTask(event: FormEvent) {
    event.preventDefault()
    console.log("Save")
  }
  return (
    <div className="app">
      <header>
        <h1> Tasks </h1>
      </header>

      <Form onSaveTask={handleSaveTask} />

      <TaskList />
    </div>
  )
}
