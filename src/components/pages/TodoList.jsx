import React from "react";

function Todolist(props) {
  const { id, task, status, tog, del, color } = props;
  return (
    <div style={{ margin: "10px" }}>
      <div
        className="todo_div"
        style={{
          boxShadow:
            "rgba(128, 128, 128, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
          color: "white", // Set the text color to white
        }}
      >
        <h4 style={{ color: "white" }}>{task}</h4> {/* Set the text color for h4 */}
        <p style={{ color: "white" }}>{status ? "completed" : "not completed"}</p> {/* Set the text color for p */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button className="bn632-hover bn20" onClick={() => { tog(id) }}>
            Toggle
          </button>
          <button className="bn632-hover bn20" onClick={() => { del(id) }}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todolist;
