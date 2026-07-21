import MarketCard from "./MarketCard";

function Dashboard() {
  return (
    <div
      style={{
        flex: 1,
        padding: "30px",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ color: "#38bdf8" }}>
        PRISM Dashboard
      </h1>

      <p>AI Powered Market Intelligence Platform</p>

      <hr />

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <MarketCard
          title="📈 NIFTY 50"
          value="25,245.80"
          change="+152.30 (+0.61%)"
        />

        <MarketCard
          title="📊 SENSEX"
          value="82,731.18"
          change="+418.15 (+0.51%)"
        />

        <MarketCard
          title="🤖 AI Signal"
          value="BULLISH"
          change="Confidence: 84%"
        />
      </div>
    </div>
  );
}

export default Dashboard;

