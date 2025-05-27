import styles from "../styles/healthCards.module.css";
import { healthCardsData } from "../data/healthData";
const HealthStatusCards = () => {
  return (
    <div className={styles.cardsWrapper}>
      {healthCardsData.map((card) => (
        <div key={card.title} className={styles.card}>
          <div className={styles.icon}>{card.icon}</div>
          <div className={styles.info}>
            <h4>{card.title}</h4>
            <span className={styles.date}>Date: {card.date}</span>
            <div className={styles["progress-bar"]}>
              <div className={`${styles["progress-fill"]} 
              ${card.status === "healthy" ? styles.high :
                  card.status === "needCheckup" ? styles.medium :
                    styles.low}`}></div>
          </div>
        </div>
        </div>
  ))
}
<div className={styles["details-link"]}>Details ➜</div>
    </div >
  );
};

export default HealthStatusCards;
