import AnatomySection from './AnatomySection'
import HealthStatusCards from "./HealthStatusCards"
import ActivityFeed from './ActivityFeed'
import CalenderView from "./CalendarView"
import UpcomingSchedule from "./UpcomingSchedule"
import styles from "../styles/dashboardOverview.module.css";
const DashboardOverview = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardSection}>
        {/* Left Column */}
        <div className={styles.header}>
          <h2>Dashboard</h2>
          <span className={styles.weekText}>This Week</span>
        </div>
        <div className={styles.content}>
          <AnatomySection />
          <HealthStatusCards />
        </div>
        <div className={styles["activity-footer"]}>
          <ActivityFeed />
        </div>
      </div>

      <div className={`${styles.dashboardSection} ${styles.subcolor}`}>
        {/* Right Column */}
        <CalenderView />
        <UpcomingSchedule />
      </div>
    </div>
  )
}

export default DashboardOverview