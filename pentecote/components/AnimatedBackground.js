import React from 'react';
import styles from './AnimatedBackground.module.css';

const AnimatedBackground = () => {
  return (
    <div className={styles.background}>
      {[...Array(20)].map((_, i) => (
        <div key={i} className={styles.ball}></div>
      ))}
    </div>
  );
};

export default AnimatedBackground;
