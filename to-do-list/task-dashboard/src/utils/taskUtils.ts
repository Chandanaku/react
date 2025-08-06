// File: src/utils/taskUtils.ts
import type { TaskData } from "../types";

export const filterTasksByStatus = (
  tasks: TaskData[],
  status: string
): TaskData[] => {
  if (!status) return tasks;
  return tasks.filter((task) => task.status === status);
};

export const deleteTaskByIndex = (
  tasks: TaskData[],
  index: number
): TaskData[] => {
  return tasks.filter((_, i) => i !== index);
};

export const updateTaskAtIndex = (
  tasks: TaskData[],
  index: number,
  updatedTask: TaskData
): TaskData[] => {
  const updated = [...tasks];
  updated[index] = updatedTask;
  return updated;
};

export const resetForm = (): TaskData => ({
  task: "",
  category: "",
  description: "",
  status: "Not Started",
  date: new Date(),
});
