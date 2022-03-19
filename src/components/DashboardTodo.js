import "../styles/Todolist.css";
import AddTodo from "./AddTodo";
import ToDoList from "./ToDoList";

function DashboardTodo() {
  return (
    <div className="content">
      <div className="add-todo">
        <div>
          <span className="todo-list-header">New task</span>
          <AddTodo />
        </div>
      </div>
      <ToDoList />
    </div>
  );
}
export default DashboardTodo;
