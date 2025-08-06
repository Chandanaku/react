import "./App.css";
import TaskItem from "./components/TaskItem";
function App() {
  const t = {
    id: "1",
    title: "task1",
    description: "string",
    status: "pending",
    priority: "low",
    dueDate: new Date(),
  };
  return (
    <>
      <section>
        <h1>Task-Manager</h1>
      </section>
      <TaskItem task={t} />
    </>
  );
}

export default App;
