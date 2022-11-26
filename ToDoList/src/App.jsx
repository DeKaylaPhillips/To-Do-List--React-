import { useState } from "react";
import { Task } from "./components/Task";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const HandleChange = (event) => {
    setNewTask(event.target.value);
  };

  const AddTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };

    setTodoList([...todoList, task]);
  };

  const DeleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const UpdateTask = (id) => {
    setTodoList(
      todoList.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };

  return (
    <div className="App">
      <h3>To-Do List</h3>
      <input onChange={HandleChange} />
      <br /> <br />
      <button onClick={AddTask}>Add Task</button>
      {todoList.map((task, idx) => {
        return (
          <Task
            key={idx}
            taskName={task.taskName}
            id={task.id}
            deleteTask={DeleteTask}
            completeTask={UpdateTask}
            completed={task.completed}
          />
        );
      })}
    </div>
  );
}

export default App;
