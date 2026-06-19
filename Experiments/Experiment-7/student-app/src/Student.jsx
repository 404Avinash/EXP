function Student(props) {
  return (
    <div className="student-card">
      <h2>{props.name}</h2>
      <p><strong>Course:</strong> {props.course}</p>
      <p><strong>Marks:</strong> {props.marks}</p>
    </div>
  );
}

export default Student;