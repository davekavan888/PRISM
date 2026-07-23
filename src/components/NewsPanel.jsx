function NewsPanel() {
  const news = [
    "🇮🇳 RBI Policy Meeting Tomorrow",
    "📈 FIIs Bought ₹3,200 Cr Today",
    "🇺🇸 Nasdaq Closed Higher",
    "🛢️ Crude Oil Up 1.4%",
    "🥇 Gold Holds Above Key Support",
    "💵 Dollar Index Weakens",
  ];

  return (
    <div
      style={{
        width: "320px",
        background: "#1e293b",
        padding: "20px",
        borderRadius: "14px",
        marginLeft: "25px",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>
        📰 Top Market News
      </h2>

      {news.map((item, index) => (
        <p
          key={index}
          style={{
            marginBottom: "15px",
            borderBottom: "1px solid #334155",
            paddingBottom: "10px",
          }}
        >
          {item}
        </p>
      ))}
    </div>
  );
}

export default NewsPanel;

