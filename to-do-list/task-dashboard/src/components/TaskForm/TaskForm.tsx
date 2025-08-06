import React from "react";
import type { TaskData } from "../../types";

interface TaskFormProps {
  inputForm: TaskData;
  setInputForm: React.Dispatch<React.SetStateAction<TaskData>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setFilteredValue: React.Dispatch<React.SetStateAction<string>>;
}

const TaskForm: React.FC<TaskFormProps> = ({
  inputForm,
  setInputForm,
  handleSubmit,
  setFilteredValue,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexWrap: "wrap", margin: "20px" }}
      className="input-forms"
    >
      <input
        type="text"
        name="task"
        placeholder="Task"
        value={inputForm.task}
        onChange={(e) => setInputForm({ ...inputForm, task: e.target.value })}
        style={{ margin: "10px" }}
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={inputForm.category}
        onChange={(e) =>
          setInputForm({ ...inputForm, category: e.target.value })
        }
        style={{ margin: "10px" }}
      />

      <textarea
        name="description"
        placeholder="Description"
        value={inputForm.description}
        onChange={(e) =>
          setInputForm({ ...inputForm, description: e.target.value })
        }
        style={{ margin: "10px" }}
      ></textarea>

      <select
        name="status"
        value={inputForm.status}
        onChange={(e) => {
          const value = e.target.value as TaskData["status"];
          setInputForm({ ...inputForm, status: value });
          setFilteredValue(value);
        }}
        style={{ margin: "10px" }}
      >
        <option value="">Enter the status</option>
        <option value="Not Started">Not Started</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <input
        type="date"
        name="date"
        value={inputForm.date.toISOString().split("T")[0]}
        onChange={(e) =>
          setInputForm({
            ...inputForm,
            date: new Date(e.target.value + "T00:00:00"),
          })
        }
        style={{ margin: "10px" }}
      />

      <button type="submit" style={{ margin: "10px" }}>
        Submit
      </button>
    </form>
  );
};

export default TaskForm;
