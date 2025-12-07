import React, { useState, useEffect, useRef } from 'react';
import styles from './BookChatbot.module.css';
import { askBackend } from './api';
import ChatBubble from './ChatBubble';
import TypingIndicator from './TypingIndicator';

function BookChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: 'user' };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInput('');
      setIsTyping(true);

      try {
        const botResponse = await askBackend(userMessage.text);
        const botMessage = { text: botResponse, sender: 'bot' };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } catch (error) {
        console.error("Error fetching from chatbot:", error);
        setMessages((prevMessages) => [...prevMessages, { text: "Error: Could not get a response.", sender: 'bot' }]);
      } finally {
        setIsTyping(false);
      }
    }
  };

  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <div className={`${styles.chatbotContainer} ${isOpen ? styles.open : ''}`}>
      <button className={styles.toggleButton} onClick={toggleChatbot}>
        {isOpen ? (
          <span className={styles.toggleIcon}>✖</span>
        ) : (
          <div className={styles.openChatLabel}>
            <span className={styles.toggleIcon}>💬</span>
            <span>Open Chat</span>
          </div>
        )}
      </button>
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>Book Chatbot</div>
          <div className={styles.messagesContainer}>
            {messages.map((msg, index) => (
              <ChatBubble key={index} message={msg.text} isUser={msg.sender === 'user'} />
            ))}
            {isTyping && (
              <TypingIndicator />
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className={styles.chatInputContainer}>
            <input
              type="text"
              className={styles.chatInput}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSend();
                }
              }}
              placeholder="Ask a question..."
              disabled={isTyping}
            />
            <button className={styles.sendButton} onClick={handleSend} disabled={isTyping}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookChatbot;