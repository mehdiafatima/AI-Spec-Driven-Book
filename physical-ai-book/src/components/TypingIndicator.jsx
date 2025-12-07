import React from 'react';
import { motion } from 'framer-motion';
import styles from './BookChatbot.module.css'; // Import the CSS module

const TypingIndicator = () => {
  const dotVariants = {
    start: {
      y: "0%",
    },
    end: {
      y: "100%",
    },
  };

  return (
    <div className={`${styles.message} ${styles.bot} ${styles.typingIndicatorContainer}`}>
      <motion.span
        className={styles.typingDot}
        variants={dotVariants}
        initial="start"
        animate="end"
        transition={{
          duration: 0.6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      <motion.span
        className={styles.typingDot}
        variants={dotVariants}
        initial="start"
        animate="end"
        transition={{
          duration: 0.6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 0.15,
        }}
      />
      <motion.span
        className={styles.typingDot}
        variants={dotVariants}
        initial="start"
        animate="end"
        transition={{
          duration: 0.6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 0.3,
        }}
      />
    </div>
  );
};

export default TypingIndicator;