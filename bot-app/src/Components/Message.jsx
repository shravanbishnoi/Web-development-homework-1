import React from "react";
import { format } from "date-fns";
import "../Css/Message.css";

function Message({ message }) {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "h:mm a");

  return (
    <div className={`message ${message.sender !== "human" ? "bot" : "human"}`}>
      <div
        className="message-header"
        style={{ display: message.sender !== "human" ? "block" : "none" }}
      >
        {message.sender}
      </div>
      <div className="message-body">
        <p style={{ textAlign: "justify" }}>{message.text}</p>
      </div>
      <div className="message-timeline">{formattedDate}</div>
    </div>
  );
}

export default Message;
