import React from "react";
import type { TaskData } from "../../types";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: TaskData[];
  handleEdit: (index: number) => void;
  handleDelete: (index: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  handleEdit,
  handleDelete,
}) => {
  return (
    <div
      className="task-row"
      style={{ backgroundColor: "white", margin: "50px", borderRadius: "15px" }}
    >
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
