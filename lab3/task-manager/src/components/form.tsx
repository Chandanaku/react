import { useState } from "react";
import type { Task, TaskStatus } from "../types";

interface FormProps {
  addTask: (task: Task) => void;
}

function Form({ addTask }: FormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<TaskStatus>("pending");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("low");
  const [dueDate, setDueDate] = useState(new Date());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Please fill in title and description");
      return;
    }

    addTask({
      id: Date.now().toString(),
      title,
      description,
      status,
      priority,
      dueDate,
    });

    setTitle("");
    setDescription("");
    setStatus("pending");
    setPriority("low");
    setDueDate(new Date());
  };

  return (
    <div style={{}}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "50px",
        }}
      >
        <label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            style={{
              height: "30px",
              width: "300px",
              borderColor: "black",
              borderRadius: "5px",
            }}
          />
        </label>

        <label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            style={{
              height: "30px",
              width: "300px",
              borderColor: "black",
              borderRadius: "5px",
            }}
          />
        </label>

        <label>
          Status:
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as TaskStatus)}
            style={{
              height: "20px",
              borderColor: "black",
              borderRadius: "5px",
            }}
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In-progress</option>
            <option value="completed">Completed</option>
          </select>
        </label>

        <label>
          Priority:
          <select
            style={{
              height: "20px",
              borderColor: "black",
              borderRadius: "5px",
            }}
            value={priority}
            onChange={(e) =>
              setPriority(e.target.value as "low" | "medium" | "high")
            }
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>

        <label>
          Due Date:
          <input
            style={{
              height: "15px",
              borderColor: "black",
              borderRadius: "5px",
            }}
            type="date"
            value={dueDate.toISOString().split("T")[0]}
            onChange={(e) => setDueDate(new Date(e.target.value))}
            placeholder="Due Date"
          />
        </label>

        <button
          type="submit"
          style={{
            borderRadius: "20px",
          }}
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default Form;
