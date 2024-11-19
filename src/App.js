import React, { useState } from "react";
import StudentList from "./components/list";

// Test data - Do not modify
const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "Diana" },
  { id: 5, name: "Edward" },
];

function App() {
  // logic done before rendering the components

  // Your code here
  // Hints:~
  // 1. Use useState to keep track of attendance for each student. //done
  // 2. Initialize attendance status for all students as 'Absent'. //done
  const [attend, setAttend] = useState(false);

  // logic done before rendering
  const toggleAttendance = (id) => {
    setAttend((prevAttendance) => {
      return {
        ...prevAttendance,
        [id]: !prevAttendance[id],
      };
    });
  };

  // 3. Create a button to toggle attendance status. //done

  // 4. Use .map() to render the list of students with their attendance status and toggle button.

  return (
    <div className="container mt-5">
      <h1 className="fw-bold">Student Attendance Tracker</h1>
      <StudentList
        students={students}
        attend={attend}
        toggleAttendance={toggleAttendance}
      />
    </div>
  );
}

export default App;
