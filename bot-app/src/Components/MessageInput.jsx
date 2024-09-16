import React, { useState, useEffect, useRef } from "react";
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
  const [pendingMessage, setPendingMessage] = useState("");
  const [processedOnce, setProcessedOnce] = useState(false);
  const inputRef = useRef(null);

  const processFunctions = [
    UppercaseProcess,
    LowercaseProcess,
    CountWords,
    CountVowelsAndConsonants,
    ReverseText,
    ReplaceSpacesWithUnderscores,
    CountCharacters,
  ];

  const handleEmojiClick = (emojiObject) => {
    setMessage((prevMessage) => prevMessage + emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  const handleProcess = () => {
    if (message.trim() === "") return;

    onNewMessage({ sender: "human", text: message });

    setPendingMessage(message);
    setProcessedOnce(false);
    setMessage("");
  };

  useEffect(() => {
    if (pendingMessage && !processedOnce) {
      const randomFunction =
        processFunctions[Math.floor(Math.random() * processFunctions.length)];

      const { botName, text } = randomFunction(pendingMessage);

      onNewMessage({ sender: botName, text: text });

      setProcessedOnce(true);
    }
  }, [pendingMessage, processedOnce, processFunctions, onNewMessage]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleProcess();
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);


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
        ref={inputRef}
      />
      <button className="send-button" onClick={handleProcess}>
        <FaRocket className="horizontal-plane-icon" />
      </button>
    </div>
  );
}

export default MessageInput;
