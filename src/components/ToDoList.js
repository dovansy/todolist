import { useState } from "react";
import "../styles/Todolist.css";
import AddTodo from "./AddTodo";

function ToDoList() {
  const [showDetail, setShowDetail] = useState(false);
  const [listCheck, setListCheck] = useState([]);
  const checkedTodo = (item) => {
    setListCheck([...listCheck, item]);
    console.log(listCheck);
  };
  return (
    <div className="todo-list">
      <div>
        <span className="todo-list-header">To Do List</span>
        <div className="add-todo-content my-3">
          <span>Search</span>
          <input className="form-control" placeholder="Search..." />
          <div>
            <div className="to-do-item">
              <div className="to-do-item-header">
                <div className="item-side-left">
                  <input type="checkbox" className="form-check-input mr-2" id="1" onChange={(e) => checkedTodo(e.target.id)} />
                  <span className="form-check-label">Do homework</span>
                </div>
                <div className="item-side-right">
                  <button className="btn btn-primary btn-action mx-2" onClick={() => setShowDetail(!showDetail)}>
                    Detail
                  </button>
                  <button className="btn btn-danger btn-action">Remove</button>
                </div>
              </div>
            </div>
            {showDetail && (
              <div className="detail-to-do m-0">
                <AddTodo />
              </div>
            )}
          </div>
        </div>
        {listCheck.length !== 0 && (
          <div className="bulk-action px-2">
            <div className="item-side-left">
              <span className="form-check-label">Bulk action:</span>
            </div>
            <div className="item-side-right">
              <button className="btn btn-primary btn-action mx-2" onClick={() => console.log(listCheck)}>
                Done
              </button>
              <button className="btn btn-danger btn-action">Remove</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ToDoList;
