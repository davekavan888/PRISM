function Navbar() {
  return (
    <div
      style={{
        background: "#1e293b",
        padding: "15px 25px",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "25px",
      }}
    >
      <h2 style={{ margin: 0 }}>
        Welcome to PRISM
      </h2>

      <input
        type="text"
        placeholder="Search Stock..."
        style={{
          padding: "10px",
          width: "250px",
          borderRadius: "8px",
          border: "none",
        }}
      />
    </div>
  );
}

export default Navbar;
