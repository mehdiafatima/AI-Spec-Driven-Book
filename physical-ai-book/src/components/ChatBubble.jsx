import React from 'react';
import styles from './BookChatbot.module.css'; // Import the CSS module

const ChatBubble = ({ message, isUser }) => {
  return (
    <div className={`${styles.message} ${isUser ? styles.user : styles.bot}`}>
      {message}
    </div>
  );
};

export default ChatBubble;
