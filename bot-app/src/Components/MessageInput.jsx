import React, { useState } from 'react';
import { FaRocket, FaSmile } from 'react-icons/fa';
import EmojiPicker from 'emoji-picker-react';
import '../Css/MessageInput.css';

function MessageInput() {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [message, setMessage] = useState('');
  const [result, setResult] = useState('');

  const handleEmojiClick = (emojiObject) => {
    setMessage(prevMessage => prevMessage + emojiObject.emoji);
    setShowEmojiPicker(false); // Hide emoji picker after selection
  };

  const handleProcess = () => {
    const processedResult = message.toUpperCase(); // Processing: Convert input to uppercase
    setResult(processedResult); // Update the processed string state
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
        value={message} // Use message state for input value
        onChange={(e) => setMessage(e.target.value)} // Update message state on input change
      />
      <button className="send-button" onClick={handleProcess}>
        <FaRocket className="horizontal-plane-icon" />
      </button>

      {result && (
        <div>
          <h4>Processed String:</h4>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default MessageInput;
