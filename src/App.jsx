function App() {
  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ color: "#38bdf8", fontSize: "40px" }}>PRISM</h1>

      <p style={{ color: "#cbd5e1" }}>
        AI Powered Market Intelligence Platform
      </p>

      <hr />

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "30px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "10px",
            width: "250px",
          }}
        >
          <h3>NIFTY 50</h3>
          <h2>25,245.80</h2>
          <p style={{ color: "lightgreen" }}>+152.30 (+0.61%)</p>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "10px",
            width: "250px",
          }}
        >
          <h3>SENSEX</h3>
          <h2>82,731.18</h2>
          <p style={{ color: "lightgreen" }}>+418.15 (+0.51%)</p>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "10px",
            width: "250px",
          }}
        >
          <h3>AI Signal</h3>
          <h2>BULLISH 📈</h2>
          <p>Confidence: 84%</p>
        </div>
      </div>
    </div>
  );
}

export default App;