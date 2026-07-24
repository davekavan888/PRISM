function Watchlist() {
  const stocks = [
    { name: "RELIANCE", change: "+1.25%", color: "#22c55e" },
    { name: "TCS", change: "-0.84%", color: "#ef4444" },
    { name: "INFY", change: "+2.13%", color: "#22c55e" },
    { name: "HDFCBANK", change: "+0.42%", color: "#22c55e" },
    { name: "ICICIBANK", change: "+0.95%", color: "#22c55e" },
  ];

  return (
    <div
      style={{
        marginTop: "30px",
        background: "#1e293b",
        padding: "20px",
        borderRadius: "14px",
        width: "320px",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>
        ⭐ Watchlist
      </h2>

      {stocks.map((stock) => (
        <div
          key={stock.name}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "15px",
            borderBottom: "1px solid #334155",
            paddingBottom: "10px",
          }}
        >
          <span>{stock.name}</span>

          <span
            style={{
              color: stock.color,
              fontWeight: "bold",
            }}
          >
            {stock.change}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Watchlist;
