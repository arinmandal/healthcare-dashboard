import { Search, Bell, Plus } from "lucide-react";
import man from "../assets/man.png"
import styles from "../styles/header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles["header-left"]}>
        <div className={styles.logo}>
          <span className={styles["logo-highlight"]}>Health</span>care.
        </div>
        <div className={styles["header-middle"]}>
          <div className={styles["search-input"]}>
            <Search size={20} className={styles["search-icon"]} />
            <input type="text" placeholder="Search" />
          </div>
          <div className={`${styles["header-icon"]} ${styles["notification-icon"]}`}>
            <Bell size={20} />
          </div>
        </div>
      </div>

      <div className={styles["header-right"]}>
        <div className={styles["header-icon"]}>
          <img src={man} alt="user" className={styles.avater} />
        </div>
        <div className={`${styles["header-icon"]} ${styles["add-icon"]}`}>
          <Plus size={20} />
        </div>
      </div>
    </header>
  );
}

export default Header;
