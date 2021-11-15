import "./styles.css";
import ToDoItem from "./components/ToDoItem/ToDoItem";

export default function App() {
  return (
    <div className="App">
      <ToDoItem txt="Car" />
      <ToDoItem txt="House" />
      <ToDoItem txt="Yacht" />
      <ToDoItem txt="Wife" />
    </div>
  );
}
