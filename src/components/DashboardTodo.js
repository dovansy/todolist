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
    console.log(checked);
    let newListTask = [];
    listTask.forEach((item, index) => {
      if (checked.includes(item.id) === false) {
        newListTask.push(item);
      }
    });
    console.log("new", newListTask);
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
      <ToDoList listTask={listTask} handleUpdateInput={handleUpdate} removeTask={removeTask} submitDoneTask={(value) => submitDoneTask(value)} showDetail={(value) => showDetail(value)} />
    </div>
  );
}
export default DashboardTodo;
