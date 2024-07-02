// components/Footer.js
import React from 'react';
import styles from './Footer.module.css'; // Import the CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h1>Contactez-nous</h1>
          <p><i className={`fas fa-map-marker-alt ${styles.icon}`}></i> Avenue Ngendandumwe, Bujumbura, Burundi</p>
          <p><i className={`fas fa-phone ${styles.icon}`}></i> <a href="tel:+25769653444">+257 69 65 34 44</a></p>
          <p><i className={`fas fa-envelope ${styles.icon}`}></i> <a href="mailto:contact@eglise-pentecote-burundi.bi">contact@eglise-pentecote-burundi.bi</a></p>
        </div>
        <p>&copy; 2024 Église Pentecote Du Burundi. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
