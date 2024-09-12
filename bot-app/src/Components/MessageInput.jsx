import React, { useState } from 'react';
import { FaRocket, FaSmile } from 'react-icons/fa';
import EmojiPicker from 'emoji-picker-react';
import '../Css/MessageInput.css';
import CountWords from './TextProcessor/CountWords';
import CountVowelsAndConsonants from './TextProcessor/CountVowelsAndConsonants';

function MessageInput() {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [message, setMessage] = useState('');
  const [result, setResult] = useState('');

  const handleEmojiClick = (emojiObject) => {
    setMessage(prevMessage => prevMessage + emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  const handleProcess = () => {
    let text = '';
    text = CountWords(message);
    text = CountVowelsAndConsonants(message);
    setResult(text);
    setResult(text)
    setMessage('')
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleProcess();
    }
  };

  return (
    
    <div className="input-container">
      {result && (
        <div>
          <p>{result}</p>
        </div>
      )}
      <br></br>
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
        onKeyDown={handleKeyPress}
      />
      <button className="send-button" onClick={handleProcess}>
        <FaRocket className="horizontal-plane-icon" />
      </button>

      
    </div>
  );
}

export default MessageInput;
