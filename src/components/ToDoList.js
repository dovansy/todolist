import { memo, useEffect, useState } from "react";
import "../styles/Todolist.css";
import "../styles/Main.css";
import AddTodo from "./AddTodo";

function ToDoList({ listTask, handleUpdateInput, removeTask, submitDoneTask, showDetail, updateItem }) {
  const [checked, setChecked] = useState([]);

  const [search, setSearch] = useState("");

  const [searchResults, setSearchResults] = useState(listTask);

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

  useEffect(() => {
    const results = listTask.filter((item) => item.title.toLowerCase().includes(search.toLocaleLowerCase()));
    setSearchResults(results);
  }, [search, listTask]);

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const removeChecked = (id) => {
    const newChecked = checked.filter((item) => item !== id);
    setChecked(newChecked);
  };

  const unChecked = () => {
    setChecked([]);
  };

  return (
    <div className="todo-list">
      <div>
        <span className="todo-list-header">To Do List</span>
        <div className="add-todo-content">
          <span>Search</span>
          <input className="form-control" placeholder="Search..." value={search} onChange={(e) => handleChangeSearch(e)} />
          {searchResults.map((item, index) => (
            <div key={index}>
              <div className="to-do-item">
                <div className="to-do-item-header">
                  <div className="item-side-left">
                    <div>
                      <input type="checkbox" checked={checked.includes(item.id)} className="form-check-input" id={item.id} onChange={(e) => handleCheck(Number(e.target.id))} />
                    </div>
                    <span className="form-check-label">{item.title}</span>
                  </div>
                  <div className="item-side-right">
                    <button className="btn btn-primary btn-action" disabled={!item.title} onClick={() => showDetail(item.id)}>
                      Detail
                    </button>
                    <button
                      className="btn btn-danger btn-action"
                      onClick={() => {
                        removeTask(item.id);
                        removeChecked(item.id);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
              {item.show && (
                <div className="detail-to-do">
                  <AddTodo task={item} handleUpdateItem={handleUpdateInput} form="update" index={index} updateItem={updateItem} />
                </div>
              )}
            </div>
          ))}
        </div>
        {checked.length !== 0 && (
          <div className="bulk-action">
            <div className="item-side-left">
              <span className="form-check-label">Bulk action:</span>
            </div>
            <div className="item-side-right">
              <button
                className="btn btn-primary btn-action"
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
