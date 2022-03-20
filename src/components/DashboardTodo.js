import { useState } from "react";
import "../styles/Todolist.css";
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

  const handleUpdateItem = (value, fieldName, item) => {
    let newListTask = [...listTask];
    newListTask.forEach((ele, index) => {
      if (ele.id === item.id) {
        listTask[index].title = value;
      }
    });
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
    listTask.forEach((item, index) => {
      if (checked.includes(item.id) === false) {
        newListTask.push(item);
      }
    });
    localStorage.setItem("task", JSON.stringify(newListTask));
    return setListTask(newListTask);
  };

  return (
    <div className="content">
      <div className="add-todo">
        <div>
          <span className="todo-list-header">New task</span>
          <AddTodo task={task} handleUpdate={handleUpdate} submitForm={submitForm} form="add" />
        </div>
      </div>
      <ToDoList listTask={listTask} handleUpdateInput={handleUpdateItem} removeTask={removeTask} submitDoneTask={(value) => submitDoneTask(value)} showDetail={(value) => showDetail(value)} />
    </div>
  );
}
export default DashboardTodo;
