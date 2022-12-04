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
    inputEdit(item);
    onEdit(item);
  };

  return (
    <div className="todolist">
      <ul>
        <li>
          {todos.map((item, index) => (
            <div key={index} className="todos">
              <h2 className="tododata">{item.name}</h2>
              <h3 className="tododate">{item.date}</h3>
              <h3 className="todotime">{item.time}</h3>

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
