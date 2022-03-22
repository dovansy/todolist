import { useState } from "react";
import "../styles/Todolist.css";
import "../styles/Main.css";
import AddTodo from "./AddTodo";
import ToDoList from "./ToDoList";

function DashboardTodo() {
  const [listTask, setListTask] = useState(() => {
    const dataItemTask = JSON.parse(localStorage.getItem("task"));
    return dataItemTask ?? [];
  });

  const [task, setTask] = useState({
    id: Math.floor(Date.now() / 1000),
    title: "",
    description: "",
    dueDate: new Date().toISOString().split("T")[0],
    priority: "1",
    show: false,
  });

  const removeTask = (id) => {
    const newListTask = listTask.filter((item, index) => item.id !== id);
    localStorage.setItem("task", JSON.stringify(newListTask));
    return setListTask(newListTask);
  };

  const handleUpdate = (value, fieldName) => {
    setTask((item) => ({
      ...item,
      [fieldName]: value || "",
    }));
  };

  const handleUpdateItem = (value, fieldName, index) => {
    let newListTask = [...listTask];
    newListTask[index][fieldName] = value;
    return setListTask(newListTask);
  };

  const submitForm = () => {
    setListTask((item) => {
      const newTask = [...item, task];
      const jsonTask = JSON.stringify(newTask);
      localStorage.setItem("task", jsonTask);
      return newTask;
    });
    setTask({
      id: Math.floor(Date.now() / 1000),
      title: "",
      description: "",
      dueDate: new Date().toISOString().split("T")[0],
      priority: "1",
    });
  };

  const updateItem = (id) => {
    setListTask(() => {
      const newTask = [...listTask];
      const jsonTask = JSON.stringify(newTask);
      localStorage.setItem("task", jsonTask);
      return newTask;
    });
  };

  const showDetail = (id) => {
    let newListTask = [...listTask];
    newListTask.forEach((item, index) => {
      if (item.id === id) {
        newListTask[index].show = !newListTask[index].show;
      }
    });
    localStorage.setItem("task", JSON.stringify(newListTask));
    return setListTask(newListTask);
  };

  const submitDoneTask = (checked) => {
    let newListTask = [];
    listTask.forEach((item) => {
      if (checked.includes(item.id) === false) {
        newListTask.push(item);
      }
    });
    localStorage.setItem("task", JSON.stringify(newListTask));
    return setListTask(newListTask);
  };

  return (
    <div className="content grid wide">
      <div className="row">
        <div className="add-todo col l-5 c-12">
          <div>
            <span className="todo-list-header">New task</span>
            <AddTodo task={task} handleUpdate={handleUpdate} submitForm={submitForm} form="add" />
          </div>
        </div>
        <div className="col l-7 c-12">
          <ToDoList listTask={listTask} handleUpdateInput={handleUpdateItem} removeTask={removeTask} submitDoneTask={(value) => submitDoneTask(value)} updateItem={updateItem} showDetail={(value) => showDetail(value)} />
        </div>
      </div>
    </div>
  );
}
export default DashboardTodo;
