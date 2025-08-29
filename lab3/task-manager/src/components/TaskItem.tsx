import type { TaskItemProps, TaskStatus } from "../types";

const STATUS_ORDER: TaskStatus[] = ["pending", "in-progress", "completed"];
const PRIORITY_ORDER: Array<"low" | "medium" | "high"> = [
  "low",
  "medium",
  "high",
];

const STATUS_COLOR: Record<TaskStatus, string> = {
  pending: "#f0ad4e",
  "in-progress": "#5bc0de",
  completed: "#5cb85c",
};

const PRIORITY_COLOR: Record<"low" | "medium" | "high", string> = {
  low: "#5bc0de",
  medium: "#f0ad4e",
  high: "#d9534f",
};

function TaskItem({
  task,
  onStatusChange,
  onPriorityChange,
  onDelete,
}: TaskItemProps) {
  const handleStatusClick = () => {
    const currentIndex = STATUS_ORDER.indexOf(task.status);
    const nextStatus = STATUS_ORDER[(currentIndex + 1) % STATUS_ORDER.length];
    onStatusChange(task.id, nextStatus);
  };
  const getDueStatus = (dueDate: Date) => {
    return dueDate < new Date() ? "Late" : "Still have time";
  };
  const handlePriorityClick = () => {
    const currentIndex = PRIORITY_ORDER.indexOf(task.priority);
    const nextPriority =
      PRIORITY_ORDER[(currentIndex + 1) % PRIORITY_ORDER.length];
    onPriorityChange(task.id, nextPriority);
  };

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
      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
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
            gap: "12px",
            fontSize: "0.9rem",
            alignItems: "center",
          }}
        >
          <button
            onClick={handleStatusClick}
            style={{
              padding: "4px 10px",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
              backgroundColor: STATUS_COLOR[task.status],
              color: "#fff",
            }}
          >
            {task.status.toUpperCase()}
          </button>

          <p>
            <strong>Due:</strong> {task.dueDate.toLocaleDateString()} (
            {getDueStatus(task.dueDate)})
          </p>
          <button
            onClick={handlePriorityClick}
            style={{
              padding: "4px 10px",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
              backgroundColor: PRIORITY_COLOR[task.priority],
              color: "#fff",
            }}
          >
            {task.priority.toUpperCase()}
          </button>

          <span>Due: {new Date(task.dueDate).toDateString()}</span>
        </div>
      </div>

      <div>
        <button
          onClick={() => onDelete(task.id)}
          style={{
            padding: "6px 12px",
            borderRadius: "4px",
            backgroundColor: "#ff4d4f",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
