import React, { useState } from "react";
import "../App.css";
function Todolist({ todos, setTodos, onToggle, onEdit }) {
  const handleDelete = ({ id }) => {
    console.log(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleEdit = (item) => {
    console.log(item.id);
    onEdit(item.name);
    console.log((item) => item.name);
    onToggle(false);
  };

  return (
    <div className="todolist">
      <ul>
        <li>
          {todos.map((item, index) => (
            <div key={index} className="todos">
              <h2>{item.name}</h2>
              <button className="btn-submit" onClick={() => handleDelete(item)}>
                Done
              </button>
              <button className="btn-edit" onClick={() => handleEdit(item)}>
                Edit
              </button>
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default Todolist;
