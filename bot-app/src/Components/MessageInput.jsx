import React, { useState, useEffect } from "react";
import { FaRocket, FaSmile } from "react-icons/fa";
import EmojiPicker from "emoji-picker-react";
import "../Css/MessageInput.css";
import { UppercaseProcess } from "./TextProcessor/ToUpperCase";
import { LowercaseProcess } from "./TextProcessor/ToLowerCase";
import CountWords from "./TextProcessor/CountWords";
import CountVowelsAndConsonants from "./TextProcessor/CountVowelsAndConsonants";
import ReverseText from "./TextProcessor/ReverseText";
import { ReplaceSpacesWithUnderscores } from "./TextProcessor/ReplaceSpaces";
import { CountCharacters } from "./TextProcessor/CountChars";

function MessageInput({ onNewMessage }) {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [message, setMessage] = useState("");
  const [processedMessage, setProcessedMessage] = useState("");

  const handleEmojiClick = (emojiObject) => {
    setMessage((prevMessage) => prevMessage + emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  const handleProcess = () => {
    if (message.trim() === '') return;

    onNewMessage({ sender: "human", text: message });
    setProcessedMessage(message);
    setMessage("");
  };

  useEffect(() => {
    if (processedMessage) {
      const timer = setTimeout(() => {
        let text = "";
        text = CountWords(processedMessage);
        text = CountVowelsAndConsonants(processedMessage);
        text = UppercaseProcess(processedMessage);
        // text = LowercaseProcess(processedMessage);
        // text = ReverseText(processedMessage);
        // text = CountCharacters(processedMessage);
        // text = ReplaceSpacesWithUnderscores(processedMessage);
        onNewMessage({ sender: "bot", text: text });
      }, 10); // 2 seconds delay
      return () => clearTimeout(timer);
    }
  }, [processedMessage]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleProcess();
    }
  };

  return (
    <div className="input-container">
      <div className="emoji-container">
        <FaSmile
          className="emoji-icon"
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        />
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
