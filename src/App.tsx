
import Form from "./components/Form";
import TaskList from "./components/TaskList";

export default function App() {
  return (
    <div className="app">
      <header>
        <h1> Tasks </h1>
      </header>

      <Form />
      
      <TaskList />
    </div>
  )
}
