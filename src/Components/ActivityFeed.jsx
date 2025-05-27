
import styles from "../styles/activity.module.css"
import { weekdays } from "../data/appointments"
const ActivityFeed = () => {
  return (
    <div>
      <div className={styles["activity-container"]}>
        <div className={styles["activity-header"]}>
          <h4>Activity</h4>
          <span>3 appointments on this week</span>
        </div>
        <div className={styles.chart}>
          {weekdays.map((day, i) => (
            <div className={styles.day} key={i}>
              <div className={styles.bars}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
              </div>
              <span>{day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ActivityFeed