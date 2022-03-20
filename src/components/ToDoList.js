import { memo, useState } from "react";
import "../styles/Todolist.css";
import AddTodo from "./AddTodo";

function ToDoList({ listTask, handleUpdateInput, removeTask, submitDoneTask, showDetail }) {
  const [checked, setChecked] = useState([]);

  const handleCheck = (id) => {
    setChecked((item) => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        return checked.filter((ele) => ele !== id);
      } else {
        return [...item, id];
      }
    });
  };

  const unChecked = () => {
    setChecked([]);
  };

  return (
    <div className="todo-list">
      <div>
        <span className="todo-list-header">To Do List</span>
        <div className="add-todo-content my-3">
          <span>Search</span>
          <input className="form-control" placeholder="Search..." />
          {listTask.map((item, index) => (
            <div key={index}>
              <div className="to-do-item">
                <div className="to-do-item-header">
                  <div className="item-side-left">
                    <input type="checkbox" checked={checked.includes(item.id)} className="form-check-input mr-2" id={item.id} onChange={(e) => handleCheck(Number(e.target.id))} />
                    <span className="form-check-label">{item.title}</span>
                  </div>
                  <div className="item-side-right">
                    <button className="btn btn-primary btn-action mx-2" onClick={() => showDetail(item.id)}>
                      Detail
                    </button>
                    <button className="btn btn-danger btn-action" onClick={() => removeTask(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
              {item.show && (
                <div className="detail-to-do m-0">
                  <AddTodo task={item} handleUpdate={handleUpdateInput} form="update" />
                </div>
              )}
            </div>
          ))}
        </div>
        {checked.length !== 0 && (
          <div className="bulk-action px-2">
            <div className="item-side-left">
              <span className="form-check-label">Bulk action:</span>
            </div>
            <div className="item-side-right">
              <button
                className="btn btn-primary btn-action mx-2"
                onClick={() => {
                  submitDoneTask(checked);
                  setChecked([]);
                }}
              >
                Done
              </button>
              <button className="btn btn-secondary btn-action" onClick={unChecked}>
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(ToDoList);
