import React from "react";
import "../Css/BotProfile.css";
import { format } from "date-fns";
import { FaRobot } from "react-icons/fa";

function BotProfile({botName, botUserName}) {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "dd MMM yyyy, hh:mm a");


  return (
    <div className="message-profile">
      <div className="bot-profile">
        <div className="bot-profile-image">
          <FaRobot className="bot-profile-image" size={40} />
        </div>
        <div className="bot-name">{botName}</div>
        <div className="bot-username">{botUserName}</div>
        <div className="bot-description">
        This bot processes text input by performing various operations such as converting to uppercase, 
        lowercase, and counting vowels and consonants. It's designed to simplify string manipulation with
         ease and efficiency.
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
