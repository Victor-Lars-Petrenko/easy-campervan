import React from "react";
import styles from "./HomePage.module.css";
import logo from "../../assets/images/logo.png";

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <header className={styles.header}>
        <img src={logo} alt="EasyCampervan Logo" className={styles.logo} />
      </header>
      <main className={styles.mainContent}>
        <section className={styles.description}>
          <h1>Welcome to EasyCampervan</h1>
          <p>
            <b>EasyCampervan</b> is a web application for booking campervans
            across Ukraine. Similar to popular car rental services,
            EasyCampervan offers a convenient system for searching and booking
            campervans, organized in an easy-to-understand interface. Users can
            choose campervans, set rental dates, view details and reviews, and
            make reservations in real-time. With intuitive features and a
            user-friendly interface, <b>EasyCampervan</b> helps travelers easily
            plan their trips and enjoy their time on the road.
          </p>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 EasyCampervan</p>
      </footer>
    </div>
  );
};

export default HomePage;
