import InfoCard from "./InfoCard";
import "./StatsGrid.css";

function StatsGrid() {
  return (
    <div className="stats-grid">
      <InfoCard title="Queues" value="4 Active" />
      <InfoCard title="Time Slots" value="12 Today" />
      <InfoCard title="Shops" value="8 Connected" />
    </div>
  );
}

export default StatsGrid;