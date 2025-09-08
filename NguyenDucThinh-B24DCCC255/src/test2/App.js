import { useState } from "react";
import TodoItem from "./TodoItem.js";

export default function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    const t = task.trim();
    if (!t) return;
    setTodos([...todos, { id: Date.now(), text: t }]);
    setTask("");
  };

  return (
    <div style={{ maxWidth: 500, margin: "40px auto" }}>
      <h3>Bài 2: Danh sách công việc</h3>
      <input
        value={task}
        placeholder="Nhập công việc"
        onChange={(e) => setTask(e.target.value)}
        style={{ marginRight: 8 }}
      />
      <button onClick={handleAdd}>Thêm</button>

      <ul style={{ marginTop: 12 }}>
        {todos.map((t) => (
          <TodoItem key={t.id} text={t.text} />
        ))}
      </ul>
    </div>
  );
}