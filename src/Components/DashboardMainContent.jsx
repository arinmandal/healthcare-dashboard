import styles from '../styles/dashboardMain.module.css'
import DashboardOverview from './DashboardOverview'
const DashboardMainContent = () => {
  return (
    <div className={styles['dashboard-main']}>
      <DashboardOverview />
    </div>
  )
}

export default DashboardMainContent