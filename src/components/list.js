import Student from "./student";

function StudentList({ students, attend, toggleAttendance }) {
  return (
    <ul className="mt-3">
      {students.map((student) => {
        const { id, name } = student;
        return (
          <Student
            key={id}
            id={id}
            name={name}
            attend={attend}
            toggleAttendance={toggleAttendance}
          />
        );
      })}
    </ul>
  );
}

export default StudentList;
