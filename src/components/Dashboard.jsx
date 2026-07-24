import Watchlist from "./Watchlist";
import Navbar from "./layout/Navbar";
import MarketCard from "./MarketCard";
import NewsPanel from "./NewsPanel";

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
      <Navbar />

      <h1
        style={{
          color: "#38bdf8",
          marginBottom: "10px",
        }}
      >
        PRISM Dashboard
      </h1>

      <p
        style={{
          marginBottom: "20px",
        }}
      >
        AI Powered Market Intelligence Platform
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "30px",
        }}
      >
        <div>
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

          <Watchlist />
        </div>

        <NewsPanel />
      </div>
    </div>
  );
}

export default Dashboard;
