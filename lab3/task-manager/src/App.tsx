import "./App.css";
import TaskItem from "./components/TaskItem";
//import type { TaskStatus } from "./types";
function App() {
  return (
    <>
      <section>
        <h1>Task-Manager</h1>
      </section>
      <TaskItem
        task={{
          id: "1",
          title: "Task1",
          description: "jbhjbdshfb",
          status: "pending",
          priority: "low",
          dueDate: new Date(),
        }}
        onStatusChange={() => {
          console.log("welcome");
        }}
        onDelete={() => {}}
      />
    </>
  );
}

export default App;
