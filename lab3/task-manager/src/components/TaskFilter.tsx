import { useState } from "react";
import type { TaskFilterProps } from "../types";
import type { TaskStatus } from "../types";
function TaskFilter({ onFilterChange }: TaskFilterProps) {
  const [status, setStatus] = useState<
    "pending" | "in-progress" | "completed" | ""
  >("");
  const [priority, setPriority] = useState<"low" | "medium" | "high" | "">("");

  const handleChange = (newStatus: string, newPriority: string) => {
    onFilterChange({
      status: newStatus === "" ? undefined : (newStatus as TaskStatus),
      priority:
        newPriority === ""
          ? undefined
          : (newPriority as "low" | "medium" | "high"),
    });
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <label>Status: </label>
      <select
        value={status}
        onChange={(e) => {
          setStatus(e.target.value as TaskStatus);
          handleChange(e.target.value, priority);
        }}
      >
        <option value="">All</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <label style={{ marginLeft: "10px" }}>Priority: </label>
      <select
        value={priority}
        onChange={(e) => {
          setPriority(e.target.value as "low" | "medium" | "high" | "");
          handleChange(status, e.target.value);
        }}
      >
        <option value="">All</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
}

export default TaskFilter;
