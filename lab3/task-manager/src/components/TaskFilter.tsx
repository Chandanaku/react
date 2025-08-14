import React from "react";
import type { TaskStatus } from "../../src/types";

import type { TaskFilterProps } from "../../src/types";

function TaskFilter({ onFilterChange }: TaskFilterProps) {
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ status: e.target.value as TaskStatus });
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ priority: e.target.value as "low" | "medium" | "high" });
  };

  return (
    <div style={{ padding: "10px" }}>
      <label>
        Status:
        <select onChange={handleStatusChange}>
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </label>

      <label>
        Priority:
        <select onChange={handlePriorityChange}>
          <option value="">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
    </div>
  );
}

export default TaskFilter;
