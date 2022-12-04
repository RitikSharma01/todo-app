import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Todolist from "./component/Todolist";

function App() {
  const [items, setItem] = useState([]);
  const [input, setInput] = useState("");
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [editItem, setEditItem] = useState({});
  const [dateValue, setDateValue] = useState("");
  const [timeValue, setTimeValue] = useState("");

  const handleItem = (e) => {
    setInput(e.target.value);
  };

  const handleDate = (e) => {
    setDateValue(e.target.value);
  };

  const handleTime = (e) => {
    setTimeValue(e.target.value);
  };
  const clearInputs = () => {
    setInput("");
    setDateValue("");
    setTimeValue("");
  };
  const callEditTodo = (props) => {
    setInput(props.name);
    setTimeValue(props.time);
    setDateValue(props.date);
  };
  const handeAddTodo = (e) => {
    e.preventDefault();
    if (!input || !timeValue || !dateValue) {
      alert("Sorry,you didn't entered all fields . Please Enter All");
    } else if (input && !toggleSubmit) {
      setItem(
        items.map((e) => {
          if (e.id == editItem.id) {
            return { ...e, name: input, time: timeValue, date: dateValue };
          }
          return e;
        })
      );
      setToggleSubmit(true);
      clearInputs();
    } else {
      setItem([
        ...items,
        { id: uuidv4(), name: input, time: timeValue, date: dateValue },
      ]);
      clearInputs();
      // e.target.reset();
    }
  };
  // console.log(input);
  // console.log(items);
  return (
    <div className="app">
      <h1>My Todo's List</h1>
      <form onSubmit={handeAddTodo}>
        <input
          type="text"
          className="inp"
          value={input}
          placeholder="Note Your Task Here"
          onChange={handleItem}
        />
        <input
          type="date"
          value={dateValue}
          className="date"
          onChange={handleDate}
        />
        <input
          type="time"
          value={timeValue}
          className="time"
          onChange={handleTime}
        />
        <button className={toggleSubmit ? "btn" : "btn-ed"}>
          {toggleSubmit ? "Add" : "Edit"}
        </button>
      </form>
      <Todolist
        todos={items}
        setTodos={setItem}
        onToggle={setToggleSubmit}
        onEdit={setEditItem}
        inputEdit={callEditTodo}
      />
    </div>
  );
}

export default App;
