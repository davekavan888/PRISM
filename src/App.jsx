import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#0f172a",
      }}
    >
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
