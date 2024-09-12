import { useState } from "react";
import "./ChatPlatform.css";
import MessageInput from "./Components/MessageInput";
import BotProfile from "./Components/BotProfile";
import Message from "./Components/Message";
import ChatNavbar from "./Components/ChatNavbar";

function ChatPlatform() {
  return (
    <div className="bot">
      <div>
        <ChatNavbar />
      </div>
      <div className="message-window"></div>
      <div className="chat-input"><MessageInput /></div>
    </div>
  );
}

export default ChatPlatform;
