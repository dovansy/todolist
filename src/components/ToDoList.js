import "../styles/Todolist.css";

function ToDoList() {
  return (
    <div className="todo-list">
      <div>
        <span className="todo-list-header">To Do List</span>
        <div className="add-todo-content my-3">
          <span>Search</span>
          <input className="form-control" placeholder="Search..." />
          <div className="to-do-item px-2">
            <div className="item-side-left">
              <input type="checkbox" className="form-check-input" />
              <span className="form-check-label pl-2">Do homework</span>
            </div>
            <div className="item-side-right">
              <button className="btn btn-primary btn-action mx-2">Detail</button>
              <button className="btn btn-danger btn-action">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
