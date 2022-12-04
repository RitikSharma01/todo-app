import React, { useState } from "react";
import "../App.css";

function Todolist({ todos, setTodos, onToggle, onEdit, inputEdit }) {
  // const [editInput, setEditInput] = useState("");

  const handleDelete = ({ id }) => {
    console.log(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (item) => {
    onToggle(false);
    console.log(item.id);
    inputEdit(item.name);
    onEdit(item);
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
