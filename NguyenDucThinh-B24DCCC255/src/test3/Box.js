export default function Box({ color }) {
  return (
    <div
      style={{
        width: 220,
        height: 220,
        background: color,
        border: "1px solid #ccc",
        marginTop: 12
      }}
    />
  );
}