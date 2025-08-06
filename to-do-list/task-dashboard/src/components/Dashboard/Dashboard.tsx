import { useState } from "react";
import type { TaskData } from "../../types";
import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";
import TaskFilter from "../TaskFilter/TaskFilter";
import {
  filterTasksByStatus,
  deleteTaskByIndex,
  updateTaskAtIndex,
  resetForm,
} from "../../utils/taskUtils";

const Dashboard = () => {
  const [inputForm, setInputForm] = useState<TaskData>(resetForm());
  const [tasks, setTasks] = useState<TaskData[]>([]);
  const [allTasks, setAllTasks] = useState<TaskData[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [filteredValue, setFilteredValue] = useState<string>("");

  const handleFilter = () => {
    setTasks(filterTasksByStatus(allTasks, filteredValue));
  };

  const handleDelete = (index: number) => {
    const updated = deleteTaskByIndex(tasks, index);
    setTasks(updated);
    setAllTasks(updated);
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setInputForm(tasks[index]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputForm.task.trim()) {
      alert("Task title needed.");
      return;
    }
    if (editIndex !== null) {
      const updated = updateTaskAtIndex(tasks, editIndex, inputForm);
      setTasks(updated);
      setAllTasks(updated);
      setEditIndex(null);
    } else {
      const newTasks = [...tasks, inputForm];
      setTasks(newTasks);
      setAllTasks(newTasks);
    }
    setInputForm(resetForm());
  };

  return (
    <div>
      <TaskForm
        inputForm={inputForm}
        setInputForm={setInputForm}
        handleSubmit={handleSubmit}
        setFilteredValue={setFilteredValue}
      />
      <TaskFilter
        filteredValue={filteredValue}
        setFilteredValue={setFilteredValue}
        handleFilter={handleFilter}
      />
      <TaskList
        tasks={tasks}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Dashboard;
