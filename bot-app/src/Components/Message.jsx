import React from "react";
import { format } from "date-fns"; // Import format from date-fns
import "../Css/Message.css";

function Message() {

  const currentDate = new Date();
  const formattedDate = format(currentDate, "h:mm a");

  return (
    <div className="message">
      <div className="message-body"><p style={{textAlign: "justify"}}>Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan  am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan Hii I am Narayan </p></div>
      <div className="message-header">
        <div className="message-timeline">
          {formattedDate}
        </div>
      </div>
    </div>
  );
}

export default Message;
