import styles from "./navbar.module.css"; // adjust name if different
import AuthStatus from "../AuthStatus"; // path relative to navbar file

export default function NavBar({ onAdminChange }) {
  return (
    <header className={styles.NavBar}>
      <div className={styles.logo}> Sports Blog</div>

      <ul className={styles.menu}>
        <li><a className={styles.navLink} href="/">Home</a></li>
        <li><a className={styles.navLink} href="/about">About</a></li>
      </ul>

      <div style={{ marginLeft: 12 }}>
        <AuthStatus onAdminChange={onAdminChange} />
      </div>
    </header>
  );
}
