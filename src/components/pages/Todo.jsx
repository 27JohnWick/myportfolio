import React, { useState, useEffect } from "react";
import Todolist from "./TodoList";
import { Link } from "react-router-dom";
import backGVideo from "../assets/videoBack.mp4"; // Corrected import statement

function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [colors, setColors] = useState({});

  const Submit = () => {
    let obj = {
      id: Date.now() + task,
      task: task,
      status: false,
    };
    setTodos([...todos, obj]);
    console.log(todos);
    setTask("");
  };

  const toggleStatus = (id) => {
    const newTodos = todos.map((el) => {
      if (el.id === id) {
        const newStatus = !el.status;
        const newColor = newStatus ? "green" : "red";
        handleChangeColor(id, newColor);
        return { ...el, status: newStatus };
      }
      return el;
    });
    setTodos(newTodos);
  };

  const handleChangeColor = (id, color) => {
    setColors((prevColors) => ({
      ...prevColors,
      [id]: color,
    }));
  };

  const deleteStatus = (id) => {
    const newtodos = todos.filter((todo) => todo.id !== id);
    setTodos(newtodos);
  };

  return (
    <>
      <div className="background-video-container">
        <video className="background-video" autoPlay muted loop>
          <source src={backGVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <h1>Todo</h1>
      <Link to="/">
        <button className="button-86">Back</button>
      </Link>
      <div style={{ textAlign: "center", padding: "50px" }}>
        <input
          type="text"
          placeholder="What Todo"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button className="bn5" onClick={Submit}>
          add todo
        </button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {todos.map((el) => {
          return (
            <Todolist
              id={el.id}
              task={el.task}
              status={el.status}
              tog={toggleStatus}
              del={deleteStatus}
              color={colors[el.id] || "red"}
              key={el.id}
            />
          );
        })}
      </div>
    </>
  );
}

export default Todo;
