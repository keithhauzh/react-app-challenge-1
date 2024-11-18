function Student({ id, name, attend, toggleAttendance }) {
  return (
    <div>
      <li className="list-group-item d-flex justify-content-between align-items-center mt-2 border p-2 rounded">
        <div className="d-flex align-items-center">
          {name}
          {attend[id] === true ? (
            <button className="btn btn-sm btn-success ms-2">Present</button>
          ) : (
            <button className="btn btn-sm btn-danger ms-2">Absent</button>
          )}
        </div>

        <div className="d-flex align-items-center">
          {name}
          {attend[id] === true ? (
            <button
              className="btn btn-sm btn-success ms-2"
              onClick={() => {
                toggleAttendance(id);
              }}
            >
              Mark as Present
            </button>
          ) : (
            <button
              className="btn btn-sm btn-success ms-2"
              onClick={() => {
                toggleAttendance(id);
              }}
            >
              Mark as Present
            </button>
          )}
        </div>
      </li>
    </div>
  );
}
export default Student;
