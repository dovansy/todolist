import "../styles/Todolist.css";

function AddTodo() {
  return (
    <div className="add-todo">
      <div>
        <span className="todo-list-header">New task</span>
        <div className="add-todo-content my-3">
          <span>
            Task title <span className="text-danger">*</span>
          </span>
          <input className="form-control" placeholder="Add new task..." />
          <div className="my-4">
            <span>Description</span>
            <textarea placeholder="Description" className="form-control" />
          </div>
          <div className="row my-4">
            <div className="col-6">
              <span>Due date</span>
              <input type="date" className="form-control" />
            </div>
            <div className="col-6">
              <span>Priority</span>
              <select className="form-control">
                <option>Low</option>
                <option>Normal</option>
                <option>High</option>
              </select>
            </div>
          </div>
          <button className="btn btn-success d-flex btn-add">Add</button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
