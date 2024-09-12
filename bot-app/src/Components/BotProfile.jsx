import React from "react";
import "../Css/BotProfile.css";
import { format } from "date-fns";
import { FaUserCircle } from "react-icons/fa";
function BotProfile() {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "dd MMM yyyy, hh:mm a");
  return (
    <div className="message-profile">
      <div className="bot-profile">
        <div className="bot-profile-image">
          <FaUserCircle className="bot-profile-image" size={40} />
        </div>
        <div className="bot-name">TextChanger</div>
        <div className="bot-username">textchanger@dev</div>
        <div className="bot-description">
          Hello this is bot which respond with random texts.
        </div>
      </div>
      <div className="date-line">
        <span className="line"></span>
        <span className="date">{formattedDate}</span>
        <span className="line"></span>
      </div>
    </div>
  );
}

export default BotProfile;
