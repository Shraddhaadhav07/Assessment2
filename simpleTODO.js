import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task
    };

    setList([...list, newTask]);
    setTask("");
  };

  const deleteTask = (id) => {
    setList(list.filter(item => item.id !== id));
  };

  return (
    <div>
      <h2>Todo App</h2>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>

      {list.map((item) => (
        <div key={item.id}>
          {item.text}
          <button onClick={() => deleteTask(item.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todo;