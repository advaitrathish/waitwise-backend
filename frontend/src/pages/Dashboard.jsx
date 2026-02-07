import { useEffect, useState } from "react";

import Header from "../components/Header";
import HeroBlock from "../components/HeroBlock";
import StatsGrid from "../components/StatsGrid";
import StatsSkeleton from "../components/StatsSkeleton";
import SectionContainer from "../components/SectionContainer";
import InfoCard from "../components/InfoCard";
import WaveBackground from "../components/WaveBackground";

import "./Dashboard.css";

function Dashboard() {
  // ✅ 1. Loading state (TOP LEVEL)
  const [loading, setLoading] = useState(true);

  // ✅ 2. Dashboard data (PURE object)
  const statsData = {
    queues: 4,
    timeSlots: 12,
    shops: 8,
  };

  // ✅ 3. Simulated API delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // ✅ 4. Render
  return (
    <>
      <WaveBackground />
      <Header />
      <HeroBlock />

      <div className="dashboard-container">
        {loading ? (
          <StatsSkeleton />
        ) : (
          <StatsGrid stats={statsData} />
        )}

        <SectionContainer
          title="Queue Insights"
          subtitle="System-generated insights based on real-time demand patterns"
        >
          <div className="insights-grid">
            <InfoCard variant="plan">
              <h3>Peak Hours</h3>
              <p>Identify high-demand periods and traffic surges.</p>
            </InfoCard>

            <InfoCard variant="plan highlight">
              <h3>Average Wait Time</h3>
              <p>Monitor service delays and optimize throughput.</p>
            </InfoCard>

            <InfoCard variant="plan">
              <h3>Anomaly Detection</h3>
              <p>Detect unusual queue behavior and disruptions.</p>
            </InfoCard>
          </div>
        </SectionContainer>
      </div>
    </>
  );
}

export default Dashboard;
