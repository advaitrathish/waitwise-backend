import Header from '../components/Header';
import StatsGrid from '../components/StatsGrid';

function Dashboard(){
    return(
        <div style={{ padding: "24px" }}>
            <Header />
            <StatsGrid />
        </div>
    );
}
export default Dashboard;