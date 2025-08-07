import "./App.css";
import TaskList from "./components/TaskList";
import type { TaskStatus } from "./types";
import TaskFilter from "./components/TaskFilter";

function App() {
  return (
    <>
      <section style={{ marginBottom: "30px" }}>
        <h1>Task-Manager</h1>
        <TaskFilter onFilterChange={() => {}} />
      </section>
      <TaskList
        tasks={[
          {
            id: "1",
            title: "Task1",
            description: "gen1",
            status: "pending" as TaskStatus,
            priority: "low",
            dueDate: new Date(),
          },
          {
            id: "2",
            title: "Task2",
            description: "gen1",
            status: "pending" as TaskStatus,
            priority: "low",
            dueDate: new Date(),
          },
        ]}
        onStatusChange={() => {}}
        onDelete={() => {}}
      />
    </>
  );
}

export default App;
