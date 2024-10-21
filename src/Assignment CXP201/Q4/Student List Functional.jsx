function StudentListFunctional() {
    const students = [
      { name: "John", age: 20 },
      { name: "Emma", age: 22 },
      { name: "Michael", age: 19 }
    ];
  
    return (
      <div>
        <h2>Students List (Functional)</h2>
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              {student.name}, Age: {student.age}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default StudentListFunctional;
  