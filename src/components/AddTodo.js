import "../styles/Todolist.css";

function AddTodo() {
  return (
    <div className="add-todo">
      <div className="todo-list-header">
        <span className="todo-list-header-content">Add todo</span>
        <div className="add-todo-content my-2">
          <input className="form-control" placeholder="Add new task..." />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>Description</span>
            <textarea placeholder="Description" className="form-control" />
          </div>
          <div>
            <input type="date" />
            <select>
              <option>Low</option>
              <option>Normal</option>
              <option>High</option>
            </select>
          </div>
          <button>Add</button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
