function MarketCard({ title, value, change }) {
  return (
    <div
      style={{
        background: "#1e293b",
        padding: "20px",
        borderRadius: "10px",
        width: "220px",
      }}
    >
      <h3>{title}</h3>

      <h2>{value}</h2>

      <p style={{ color: "#4ade80" }}>
        {change}
      </p>
    </div>
  );
}

export default MarketCard;
