import styles from '../styles/SimpleAppointment.module.css';

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className={styles.card}>
      <span className={styles.title}>{title}<span className={styles.icon}>{icon}</span></span>
      <span className={styles.footer}>
        <span className={styles.time}>{time}</span>

      </span>
    </div>
  );
};

export default SimpleAppointmentCard;
