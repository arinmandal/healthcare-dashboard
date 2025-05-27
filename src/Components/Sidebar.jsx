// import styles from "../styles/sidebar.module.css"
// import { LayoutDashboard, History, CalendarDays, SquarePlus, ChartLine, MessageCircleMore, Phone, Settings } from 'lucide-react'
// const Sidebar = () => {
//   return (
//     <aside className={styles.sidebar}>
//       <section className='sidebar-section'>
//         <div className={styles["sidebar-title"]}>
//           <h4>General</h4>
//         </div>
//         <div className={styles["sidebar-items"]}>
//           <LayoutDashboard />
//           <span>Dashboard</span>
//         </div>
//         <div className={styles["sidebar-items"]}>
//           <History />
//           <span>History</span>
//         </div>
//         <div className={styles["sidebar-items"]}>
//           <CalendarDays />
//           <span>Calender</span>
//         </div>
//         <div className={styles["sidebar-items"]}>
//           <SquarePlus />
//           <span>Appointments</span>
//         </div>
//         <div className={styles["sidebar-items"]}>
//           <ChartLine />
//           <span>Statistics</span>
//         </div>
//       </section>
//       <section className={`${styles['sidebar-section']} ${styles.tools}`}>
//         <div className={styles["sidebar-title"]}>
//           <h4>Tools</h4>
//         </div>
//         <div className={styles["sidebar-items"]}>
//           <MessageCircleMore />
//           <span>Chat</span>
//         </div>
//         <div className={styles["sidebar-items"]}>
//           <Phone />
//           <span>Support</span>
//         </div>
//         <div className={`${styles["sidebar-items"]} ${styles.settings}`}>
//           <Settings />
//           <span>Settings</span>
//         </div>
//       </section>
//     </aside >
//   )
// }

// export default Sidebar

import styles from "../styles/sidebar.module.css";
import {
  LayoutDashboard,
  History,
  CalendarDays,
  SquarePlus,
  ChartLine,
  MessageCircleMore,
  Phone,
  Settings,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <section>
        <div className={styles["sidebar-title"]}>
          <h4>General</h4>
        </div>
        <div className={styles["sidebar-items"]}>
          <LayoutDashboard />
          <span>Dashboard</span>
        </div>
        <div className={styles["sidebar-items"]}>
          <History />
          <span>History</span>
        </div>
        <div className={styles["sidebar-items"]}>
          <CalendarDays />
          <span>Calendar</span>
        </div>
        <div className={styles["sidebar-items"]}>
          <SquarePlus />
          <span>Appointments</span>
        </div>
        <div className={styles["sidebar-items"]}>
          <ChartLine />
          <span>Statistics</span>
        </div>
      </section>

      <section className={styles.tools}>
        <div className={styles["sidebar-title"]}>
          <h4>Tools</h4>
        </div>
        <div className={styles["sidebar-items"]}>
          <MessageCircleMore />
          <span>Chat</span>
        </div>
        <div className={styles["sidebar-items"]}>
          <Phone />
          <span>Support</span>
        </div>
        <div className={`${styles["sidebar-items"]} ${styles.settings}`}>
          <Settings />
          <span>Settings</span>
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
