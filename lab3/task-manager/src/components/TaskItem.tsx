import type { TaskStatus } from "../types";
import type { TaskItemProps } from "../types";
//import type{ Task } from "../types";

function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        borderRadius: "10px",
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: "16px",
        alignItems: "center",
        maxWidth: "600px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        marginBottom: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            textAlign: "left",
          }}
        >
          <h3 style={{ margin: 0 }}>{task.title}</h3>
          <p style={{ margin: 0, color: "black" }}>{task.description}</p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            fontSize: "0.9rem",
            color: "#666",
          }}
        >
          <span>Priority: {task.priority}</span>
          <span>Due: {task.dueDate.toDateString()}</span>
        </div>
      </div>

      <div style={{ alignItems: "" }}>
        <select
          value={task.status}
          onChange={(e) =>
            onStatusChange(task.id, e.target.value as TaskStatus)
          }
          style={{
            borderRadius: "4px",
            border: "1px solid #aaa",
            backgroundColor: "yellow",
            fontSize: "0.9rem",
            height: "30px",
          }}
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <button
          onClick={() => onDelete(task.id)}
          style={{
            padding: "6px 12px",
            borderRadius: "4px",
            backgroundColor: "#ff4d4f",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            marginLeft: "10px",
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
