import type { TaskListProps } from "../types";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onStatusChange, onDelete }: TaskListProps) {
  return (
    <div style={{ marginBottom: "25px" }}>
      {tasks.map((t) => (
        <TaskItem
          key={t.id}
          task={t}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;
