import { memo } from "react";
import "../styles/Todolist.css";

function AddTodo({ task, handleUpdate, handleUpdateItem, submitForm, updateItem, form, index }) {
  return (
    <div className="add-todo-content my-3">
      <span>
        Task title <span className="text-danger">*</span>
      </span>
      <input className="form-control" value={task.title} placeholder="Add new task..." onChange={(e) => (form === "add" ? handleUpdate(e.target.value, "title") : handleUpdateItem(e.target.value, "title", index))} />
      <div className="my-4">
        <span>Description</span>
        <textarea placeholder="Description" className="form-control" value={task.description} onChange={(e) => (form === "add" ? handleUpdate(e.target.value, "description") : handleUpdateItem(e.target.value, "description", index))} />
      </div>
      <div className="row my-4">
        <div className="col-6">
          <span>Due date</span>
          <input type="date" min={task.dueDate} className="form-control" value={task.dueDate} onChange={(e) => (form === "add" ? handleUpdate(e.target.value, "dueDate") : handleUpdateItem(e.target.value, "dueDate", index))} />
        </div>
        <div className="col-6">
          <span>Priority</span>
          <select className="form-control" value={task.priority} onChange={(e) => (form === "add" ? handleUpdate(e.target.value, "priority") : handleUpdateItem(e.target.value, "priority", index))}>
            <option value="0">Low</option>
            <option value="1">Normal</option>
            <option value="2">High</option>
          </select>
        </div>
      </div>
      <button className="btn btn-success d-flex btn-add" disabled={!task.title} onClick={form === "add" ? submitForm : updateItem}>
        {form === "add" ? "Add" : "Update"}
      </button>
    </div>
  );
}
export default memo(AddTodo);
