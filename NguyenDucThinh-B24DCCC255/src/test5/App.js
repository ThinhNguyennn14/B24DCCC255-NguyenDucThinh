import { useEffect, useState } from "react";
import TimeDisplay from "./TimeDisplay";

function formatTime(date) {
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
}

export default function App() {
  const [time, setTime] = useState(formatTime(new Date()));

  useEffect(() => {
    const id = setInterval(() => {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ maxWidth: 640, margin: "32px auto" }}>
      <h3>Bài 5: Đồng hồ</h3>
      <TimeDisplay time={time} />
    </div>
  );
}
