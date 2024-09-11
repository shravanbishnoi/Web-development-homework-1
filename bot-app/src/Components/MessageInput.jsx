import React from 'react';
import '../Css/MessageInput.css';

function MessageInput() {
  return (
    <div className="input-container">
        <span className="emoji">&#128515;</span> {/* Example emoji */}
        <input
            type="text"
            className="input-field"
            placeholder="Enter your text..."
        />
    </div>
  );
}

export default MessageInput;
