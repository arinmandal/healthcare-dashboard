import styles from "../styles/anatomy.module.css";
import bodyImage from "../assets/anatomy.jpg"
const AnatomySection = () => {
  return (
    <div>
      <div className={styles.anatomy}>
        <img src={bodyImage} alt="Human Anatomy" className={styles.bodyImage} />

        <div className={`${styles.indicator} ${styles.heart}`}>
          <span className={`${styles.status} ${styles.issue}`}>❤️ Healthy Heart</span>
        </div>

        <div className={`${styles.indicator} ${styles.leg}`}>
          <span className={`${styles.status} ${styles.healthy}`}>🦵 Healthy Leg</span>
        </div>
      </div>
    </div>
  )
}

export default AnatomySection