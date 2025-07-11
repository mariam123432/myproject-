import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { text: "test", completed: false },
    { text: "test", completed: false }
  ]);
  const [newTodo, setNewTodo] = useState("");

  const handleAdd = () => {
    if (newTodo.trim() !== "") {
      const newTask = {
        text: newTodo.trim(),
        completed: false
      };
      setTodos([...todos, newTask]);
      setNewTodo("");
    }
  };

  const handleItemDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h2>To Do List</h2>
      <div className='to-do-container'>
        <ul>
          {todos.map((item, index) => (
            <li
              key={index}
              className={item.completed ? "done" : ""}
              onClick={() => handleItemDone(index)}
            >
              <span>{item.text}</span>
              <button className="delete-btn" onClick={(e) => {
                e.stopPropagation(); // pour ne pas déclencher handleItemDone
                handleDelete(index);
              }}>
                ✖
              </button>
            </li>
          ))}
        </ul>

        <div>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task"
          />
          <button onClick={handleAdd}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default App;