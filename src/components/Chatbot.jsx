import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import styles from './Chatbot.module.css';

const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://your-production-backend.com' // Replace with your production backend URL
  : 'http://127.0.0.1:8000'; // Default to local development URL

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (text, selectedText = null) => {
    if (!text.trim()) return;

    const userMessage = { sender: 'user', text: text };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: text, selected_text: selectedText }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: data.answer || 'Sorry, I could not generate an answer.' },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: 'Error: Could not connect to the chatbot. Please try again later.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage(input);
    }
  };

  // Function to handle sending selected text
  const handleSendSelectedText = () => {
    const selection = window.getSelection().toString().trim();
    if (selection) {
      sendMessage(`Explain this text: "${selection}"`, selection);
    } else {
      alert("Please select some text on the page first.");
    }
  };


  return (
    <div className={styles.chatbotContainer}>
      <div className={styles.messagesContainer}>
        {messages.map((msg, index) => (
          <div key={index} className={clsx(styles.message, styles[msg.sender])}>
            {msg.text}
          </div>
        ))}
        {isLoading && (
          <div className={clsx(styles.message, styles.bot)}>
            <div className={styles.typingIndicator}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask me anything about the book..."
          className={styles.textInput}
          disabled={isLoading}
        />
        <button onClick={() => sendMessage(input)} className={styles.sendButton} disabled={isLoading}>
          Send
        </button>
      </div>
      <button onClick={handleSendSelectedText} className={styles.selectTextButton} disabled={isLoading}>
        Ask about selected text
      </button>
    </div>
  );
}

export default Chatbot;