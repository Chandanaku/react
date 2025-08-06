import React from "react";
import type { TaskData } from "../../types";
import { BiSolidEdit, BiSolidTrash } from "react-icons/bi";

interface TaskItemProps {
  task: TaskData;
  index: number;
  handleEdit: (index: number) => void;
  handleDelete: (index: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  index,
  handleEdit,
  handleDelete,
}) => {
  return (
    <div className="task-card" style={{ color: "black", marginLeft: "100px" }}>
      <table>
        <tbody>
          <tr>
            <td style={{ padding: "10px" }}>{task.task}</td>
            <td style={{ padding: "10px" }}>{task.category}</td>
            <td style={{ padding: "10px" }}>{task.description}</td>
            <td style={{ padding: "10px" }}>{task.status}</td>
            <td style={{ padding: "10px" }}>
              {new Date(task.date).toLocaleDateString()}
            </td>
            <td style={{ padding: "10px" }}>
              <button
                onClick={() => handleEdit(index)}
                style={{
                  padding: "1px",
                  margin: "10px",
                  backgroundColor: "blue",
                  borderRadius: "20px",
                  height: "22px",
                }}
              >
                <BiSolidEdit />
              </button>
              <button
                onClick={() => handleDelete(index)}
                style={{
                  padding: "1px",
                  margin: "10px",
                  backgroundColor: "blue",
                  borderRadius: "20px",
                  height: "22px",
                }}
              >
                <BiSolidTrash />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TaskItem;
