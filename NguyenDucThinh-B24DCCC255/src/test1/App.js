import { useState } from "react";
import Counter from "./Count.js";
function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Bài 1: Ứng dụng Đếm số</h2>
      
      <Counter value={count} />

      <div style={{ marginTop: "20px" }}>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
}

export default App;