import "./App.css";
import Student from "./Student";

function App() {
  return (
    <div className="app">
      <h1>Student Details</h1>

      <div className="student-container">
        <Student
          name="Arihant"
          course="B.Tech CSE"
          marks="92"
        />

        <Student
          name="Rahul"
          course="B.Tech AI"
          marks="85"
        />

        <Student
          name="Priya"
          course="BCA"
          marks="88"
        />
      </div>
    </div>
  );
}

export default App;