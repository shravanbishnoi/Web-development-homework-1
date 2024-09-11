import React, { useState } from 'react';
import { FaRocket, FaSmile } from 'react-icons/fa';
import EmojiPicker from 'emoji-picker-react';
import '../Css/MessageInput.css';

function MessageInput() {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [message, setMessage] = useState('');

  const handleEmojiClick = (emojiObject) => {
    setMessage(prevMessage => prevMessage + emojiObject.emoji);
    setShowEmojiPicker(false); // Hide emoji picker after selection
  };

  const handleSubmit = () => {
    console.log("Message sent:", message);
    setMessage(''); // Clear the input field after sending
  };

  return (
    <div className="input-container">
      <div className="emoji-container">
        <FaSmile className="emoji-icon" onClick={() => setShowEmojiPicker(!showEmojiPicker)} />
        {showEmojiPicker && (
          <div className="emoji-picker">
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}
      </div>
      <input
        type="text"
        className="input-field"
        placeholder="Enter your text..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="send-button" onClick={handleSubmit}>
        <FaRocket className="horizontal-plane-icon" />
      </button>
    </div>
  );
}

export default MessageInput;
