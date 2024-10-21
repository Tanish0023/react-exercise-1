import React, { Component } from 'react';

class StudentListClass extends Component {
  renderStudents() {
    const students = [
      { name: "John", age: 20 },
      { name: "Emma", age: 22 },
      { name: "Michael", age: 19 }
    ];

    return students.map((student, index) => (
      <li key={index}>
        {student.name}, Age: {student.age}
      </li>
    ));
  }

  render() {
    return (
      <div>
        <h2>Students List (Class)</h2>
        <ul>{this.renderStudents()}</ul>
      </div>
    );
  }
}

export default StudentListClass;
