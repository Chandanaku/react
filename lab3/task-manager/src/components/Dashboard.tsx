import { useState, useEffect } from "react";
import type { Task, TaskStatus } from "../types";
import Form from "./form";
import TaskItem from "./TaskItem";
import TaskFilter from "./TaskFilter";

function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filters, setFilters] = useState<{
    status?: TaskStatus | "";
    priority?: "low" | "medium" | "high" | "";
  }>({ status: "", priority: "" });

  // Load tasks from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      const parsed: Task[] = JSON.parse(saved).map((t: Task) => ({
        ...t,
        dueDate: t.dueDate ? new Date(t.dueDate) : new Date(),
      }));
      setTasks(parsed);
    }
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add new task
  const addTask = (task: Task) => setTasks([...tasks, task]);

  // Update task status
  const handleStatusChange = (id: string, status: TaskStatus) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, status } : t)));

  // Update task priority
  const handlePriorityChange = (
    id: string,
    priority: "low" | "medium" | "high"
  ) => setTasks(tasks.map((t) => (t.id === id ? { ...t, priority } : t)));

  // Delete task
  const handleDelete = (id: string) =>
    setTasks(tasks.filter((t) => t.id !== id));

  // Filter tasks
  const filteredTasks = tasks.filter((t) => {
    const statusMatch = !filters.status || t.status === filters.status;
    const priorityMatch = !filters.priority || t.priority === filters.priority;
    return statusMatch && priorityMatch;
  });

  return (
    <div
      style={{
        padding: "20px",
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: "10px",
        margin: "50px",
      }}
    >
      <div
        style={{
          marginTop: "15px",
          backgroundColor: "lightcyan",
          padding: "20px",
          border: "5px solid lightblue",
        }}
      >
        <Form addTask={addTask} />
      </div>
      <div
        style={{
          marginTop: "15px",
          backgroundColor: "lightcyan",
          paddingTop: "90px",
          border: "5px solid lightblue",
        }}
      >
        <h4>Filters!</h4>
        <TaskFilter onFilterChange={setFilters} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          marginTop: "20px",
        }}
      >
        {tasks.length === 0 ? (
          <p>No tasks available.</p>
        ) : filteredTasks.length === 0 ? (
          <p>No tasks match the selected filter.</p>
        ) : (
          filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onStatusChange={handleStatusChange}
              onPriorityChange={handlePriorityChange}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Dashboard;
