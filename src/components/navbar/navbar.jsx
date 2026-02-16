"use client";
import { useState } from "react";
import styles from "./navbar.module.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  return (
    <header className={styles.NavBar}>
      <div className={styles.logo}>Sports Tracer</div>

      {/* Reductino of screen issues*/}
      <ul className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <li><a className={styles.navLink} href="/" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a className={styles.navLink} href="/about" onClick={() => setIsOpen(false)}>About</a></li>
      </ul>

      {/* Hamburger */}
      <button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle menu">
        <span className="material-symbols-outlined">menu</span>
      </button>

      <div className={styles.smallBar}></div>
    </header>
  );
}