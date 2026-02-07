import "./StatsSkeleton.css";

function StatsSkeleton() {
  return (
    <div className="stats-grid">
      <div className="stat-skeleton-card">
        <div className="skeleton-title" />
        <div className="skeleton-value" />
      </div>

      <div className="stat-skeleton-card">
        <div className="skeleton-title" />
        <div className="skeleton-value" />
      </div>

      <div className="stat-skeleton-card">
        <div className="skeleton-title" />
        <div className="skeleton-value" />
      </div>
    </div>
  );
}

export default StatsSkeleton;
