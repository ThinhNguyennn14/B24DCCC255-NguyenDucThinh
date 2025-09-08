import { useState } from "react";

export default function StudentCard({ name, age, clazz }) {
  const [show, setShow] = useState(true);

  return (
    <div style={{ border: "1px solid #ddd", borderRadius: 8, padding: 12, marginBottom: 12 }}>
      <h4 style={{ margin: 0 }}>{name}</h4>
      <button onClick={() => setShow(!show)} style={{ margin: "6px 0" }}>
        {show ? "Ẩn chi tiết" : "Xem chi tiết"}
      </button>
      {show && <p style={{ margin: 0 }}>Tuổi: {age} · Lớp: {clazz}</p>}
    </div>
  );
}
