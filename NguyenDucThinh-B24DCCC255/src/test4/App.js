import StudentCard from "./StudentCard";

export default function App() {
  const students = [
    { id: 1, name: "Nguyen Duc Thinh", age: 19, clazz: "Badminton1" },
    { id: 2, name: "Ban Anh Duong",   age: 20, clazz: "Badminton2" },
  ];

  return (
    <div style={{ maxWidth: 640, margin: "28px auto" }}>
      <h3>Bài 4: Thẻ thông tin sinh viên</h3>
      {students.map(s => (
        <StudentCard key={s.id} name={s.name} age={s.age} clazz={s.clazz} />
      ))}
    </div>
  );
}



