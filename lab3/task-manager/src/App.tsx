import "./App.css";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <h1>Task-Manager</h1>
      <div style={{ display: "grid", gridTemplateColumns: "2 2fr" }}>
        <div>
          <Dashboard></Dashboard>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default App;
