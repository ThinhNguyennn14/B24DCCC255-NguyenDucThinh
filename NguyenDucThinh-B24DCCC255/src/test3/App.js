import { useState } from "react";
import Box from "./Box";

export default function App() {
  const colors = ["red", "green", "blue", "yellow"];
  const [color, setColor] = useState("red");

  return (
    <div style={{ maxWidth: 600, margin: "32px auto", lineHeight: 1.6 }}>
      <h3>Bài 3: Ứng dụng đổi màu nền</h3>

      <div style={{ display: "flex", gap: 8 }}>
        {colors.map((c) => (
          <button key={c} onClick={() => setColor(c)}>
            {c}
          </button>
        ))}
      </div>

      <Box color={color} />
    </div>
  );
}