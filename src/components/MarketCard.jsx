function MarketCard({ title, value, change }) {
  return (
    <div
      style={{
        background: "#1e293b",
        width: "240px",
        padding: "22px",
        borderRadius: "14px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.35)",
        transition: "0.3s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0px)";
      }}
    >
      <h3 style={{ marginBottom: "15px" }}>
        {title}
      </h3>

      <h1 style={{ marginBottom: "12px" }}>
        {value}
      </h1>

      <p
        style={{
          color: "#22c55e",
          fontWeight: "bold",
        }}
      >
        {change}
      </p>
    </div>
  );
}

export default MarketCard;
