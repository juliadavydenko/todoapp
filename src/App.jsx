import React, { useState } from "react";
import Card from "./Card";
import tasks from "./tasks.js";
import "typeface-open-sans";
import "./styles.css";

function App() {
  const productivityImageURL =
    "https://clickup.com/blog/wp-content/uploads/2019/04/measuring-productivity.png";

  const [todoList, setTodoList] = useState([
    {
      id: 1,
      taskName: "Get out of bed",
    },
    {
      id: 2,
      taskName: "Brush teeth",
    },
    {
      id: 3,
      taskName: "Eat breakfast",
    },
  ]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
    scrollToElement("footer");
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <h1>First and upmost todo-List!</h1>
      <img
        src={productivityImageURL}
        alt="Productivity"
        className="rounded-image"
      />
      <div className="addTask">
        <input
          className="input-1"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />

        <button className="add-button" onClick={addTask}>
          Add task
        </button>

        <div className="List">
          {todoList.length === 0 ? (
            <h1>
              You have no tasks for today. <br></br>Create one or enjoy your
              free time! :)
            </h1>
          ) : (
            todoList.map((task) => (
              <Card
                key={task.id}
                taskName={task.taskName}
                id={task.id}
                completed={task.completed}
                deleteTask={deleteTask}
                completeTask={completeTask}
              />
            ))
          )}
        </div>
      </div>
      <footer id="footer" className="copyright">
        &copy; {new Date().getFullYear()} Yuliia Davydenko. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
