import "../styles/Todolist.css";
import AddTodo from "./AddTodo";
import ToDoList from "./ToDoList";

function DashboardTodo() {
  return (
    <div className="content">
      <AddTodo />
      <ToDoList />
    </div>
  );
}
export default DashboardTodo;
