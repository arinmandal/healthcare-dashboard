import styles from '../styles/upcoming.module.css';
import SimpleAppointmentCard from '../Components/SimpleAppointmentCard';
import { upcomingAppointments } from '../data/appointments';

const UpcomingSchedule = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>The Upcoming Schedule</h2>

      {upcomingAppointments.map((section) => (
        <div key={section.day} className={styles.daySection}>
          <h3 className={styles.dayHeader}>On {section.day}</h3>
          <div className={styles.appointmentsGrid}>
            {section.appointments.map((appointment, index) => (
              <SimpleAppointmentCard
                key={index}
                title={appointment.title}
                time={appointment.time}
                icon={appointment.icon}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
