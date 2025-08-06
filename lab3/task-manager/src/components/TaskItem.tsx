export interface TaskItemProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}
export type TaskStatus = "pending" | "in-progress" | "completed";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: "low" | "medium" | "high";
  dueDate: string;
}

function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
  return (
    <div
      style={{
        border: "1px solid #333",
        padding: "12px",
        borderRadius: "8px",
        marginBottom: "12px",
      }}
    >
      <h4>
        <p>{task.id}</p>
        {task.title}
      </h4>

      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Due: {task.dueDate}</p>
      <select
        value={task.status}
        onChange={(e) => onStatusChange(task.id, e.target.value as TaskStatus)}
        style={{ marginRight: "12px" }}
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <button onClick={() => onDelete(task.id)} style={{ color: "red" }}>
        Delete
      </button>
    </div>
  );
}

export default TaskItem;
