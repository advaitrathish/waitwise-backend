export function getCrowdStatus(current, capacity) {
  const ratio = current / capacity;

  if (ratio < 0.5) {
    return {
      label: "🟢 Calm",
      color: "#22c55e",
      message: "Great time to visit. Minimal waiting expected."
    };
  }

  if (ratio < 0.8) {
    return {
      label: "🟡 Average",
      color: "#f59e0b",
      message: "Moderate crowd. Short waiting time possible."
    };
  }

  return {
    label: "🔴 Crowded",
    color: "#ef4444",
    message: "High crowd expected. Consider another time."
  };
}
