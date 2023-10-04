import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === "") {
      return;
    }
    setToDo("");
    setToDos((currentArray) => [toDo, ...currentArray]);
  }
  const onChange = (event) => {
    setToDo(event.target.value);
  }
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange}
          value={toDo} 
          type="text" 
          placeholder="Write your to do...">
        </input>
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;