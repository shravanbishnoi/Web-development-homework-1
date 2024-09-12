import React from "react";
import { format } from "date-fns"; // Import format from date-fns
import "../Css/Message.css";

function Message({message}) {

  const currentDate = new Date();
  const formattedDate = format(currentDate, "h:mm a");

  return (
    <div className={`message ${message.sender === 'bot' ? 'bot' : 'human'}`}>
      <div className="message-body"><p style={{textAlign: "justify"}}>{message.text}</p></div>
      <div className="message-header message-timeline">
          {formattedDate}
      </div>
    </div>
  );
}

export default Message;
