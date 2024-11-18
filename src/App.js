import React, { useState } from "react";

// Test data - Do not modify
const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "Diana" },
  { id: 5, name: "Edward" },
];

function App() {
  // Your code here
  // Hints:
  // 1. Use useState to keep track of attendance for each student. //done
  const [attend, setAttend] = useState(true);
  const [studentId, setStudentId] = useState("");

  // 2. Initialize attendance status for all students as 'Absent'. //done
  // 3. Create a button to toggle attendance status. //done
  // 4. Use .map() to render the list of students with their attendance status and toggle button.

  return (
    <div className="container mt-5">
      <h1 className="fw-bold">Student Attendance Tracker</h1>
      <ul className="mt-3">
        {students.map((student) => {
          const { id, name } = student;
          return (
            <div>
              <li className="list-group-item d-flex justify-content-between align-items-center mt-2 border p-2 rounded">
                <div className="d-flex align-items-center">
                  {name}
                  {attend === true && studentId === id ? (
                    <button className="btn btn-sm btn-success ms-2">
                      Present
                    </button>
                  ) : (
                    <button className="btn btn-sm btn-danger ms-2">
                      Absent
                    </button>
                  )}
                </div>
                <div>
                  {attend === true && studentId === id ? (
                    <button
                      className="btn btn-sm btn-danger ms-2"
                      onClick={() => {
                        attend === true ? setAttend(false) : setAttend(true);
                        setStudentId(id);
                      }}
                    >
                      Mark as Absent
                    </button>
                  ) : (
                    <button
                      className="btn btn-sm btn-success ms-2"
                      onClick={() => {
                        attend === true ? setAttend(false) : setAttend(true);
                        setStudentId(id);
                      }}
                    >
                      Mark as Present
                    </button>
                  )}
                </div>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
