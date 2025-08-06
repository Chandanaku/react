export interface TaskData {
  task: string;
  category: string;
  description: string;
  status: "Not Started" | "In Progress" | "Completed";
  date: Date;
}
