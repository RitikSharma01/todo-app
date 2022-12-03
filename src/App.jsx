import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Todolist from "./component/Todolist";

function App() {
  const [items, setItem] = useState([]);
  const [input, setInput] = useState("");
  const [toggleSubmit, setToggleSubmit] = useState(true);

  const handleItem = (e) => {
    setInput(e.target.value);
  };

  const handeAddTodo = (e) => {
    e.preventDefault();
    if (!input) {
      alert("Please enter Something");
    } else if (input && !toggleSubmit) {
    } else {
      setItem([...items, { id: uuidv4(), name: input }]);
      e.target.reset();
    }
  };
  console.log(items);
  return (
    <div className="app">
      <h1>My Todo's List</h1>
      <form onSubmit={handeAddTodo}>
        <input
          type="text"
          className="inp"
          placeholder="Note Your Task Here"
          onChange={handleItem}
        />
        <button className="btn">{toggleSubmit ? "Add" : "Edit"}</button>
      </form>
      <Todolist
        todos={items}
        setTodos={setItem}
        onToggle={setToggleSubmit}
        onEdit={handleItem}
      />
    </div>
  );
}

export default App;
