import React from "react";
import { format } from "date-fns"; // Import format from date-fns
import "../Css/Message.css";

function Message({message}) {

  const currentDate = new Date();
  const formattedDate = format(currentDate, "h:mm a");

  return (
    <div className="message">
      <div className="message-body"><p style={{textAlign: "justify"}}>{message.text}</p></div>
      <div className="message-header">
        <div className="message-timeline">
          {formattedDate}
        </div>
      </div>
    </div>
  );
}

export default Message;
