function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        height: "100vh",
        background: "#111827",
        color: "white",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <h2 style={{ color: "#38bdf8" }}>PRISM</h2>

      <hr />

      <p>🏠 Dashboard</p>
      <p>📈 Markets</p>
      <p>📰 News</p>
      <p>💼 Portfolio</p>
      <p>⚙️ Settings</p>
    </div>
  );
}

export default Sidebar;
