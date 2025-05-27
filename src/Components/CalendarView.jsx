import styles from '../styles/calenderview.module.css';
import { calendarAppointments, dates, weekdays, timeSlots, bookedSlots } from '../data/appointments';

const CalendarView = () => {
  return (
    <div className={styles.container}>
      <h3>October 2021</h3>
      <div className={styles.grid}>
        <div className={styles.calendarGrid}>
          {weekdays.map((day, index) => {
            const date = dates[index];
            const slots = timeSlots[date] || [];
            const isWeekend = index >= 5;

            return (
              <div key={date} className={styles.dayColumn}>
                {/* Day Header */}
                <div className={styles.dayHeader}>
                  <div className={`${styles.dayName} ${isWeekend ? styles.weekend : ''}`}>
                    {day}
                  </div>
                  <div className={`${styles.dayNumber} ${isWeekend ? styles.weekend : ''}`}>
                    {date}
                  </div>
                </div>

                {/* Time Slots */}
                <div className={styles.slotsContainer}>
                  {slots.map((time, slotIndex) => {
                    const isBooked = bookedSlots[date] && bookedSlots[date].includes(time);
                    return (
                      <div
                        key={slotIndex}
                        className={`${styles.timeSlot} ${isBooked ? styles.booked : styles.available}`}
                      >
                        {time}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.cards}>
        {calendarAppointments.map((app, idx) => (
          <div className={`${styles.appointmentCard} ${app.title === "Dentist" ? styles.blue : styles.default}`} key={idx}>
            <strong>{app.title}</strong>
            <div>{app.time}</div>
            <div>{app.doctor}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
