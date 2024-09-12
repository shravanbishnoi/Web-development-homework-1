import { useState, useEffect, useRef} from "react";
import "./ChatPlatform.css";
import MessageInput from "./Components/MessageInput";
import BotProfile from "./Components/BotProfile";
import Message from "./Components/Message";
import ChatNavbar from "./Components/ChatNavbar";

function ChatPlatform() {
  const [messages, setMessages] = useState([{sender: "bot", text: "Hi there, How can help you?"}]);
  const endOfMessageRef = useRef(null);


  const handleNewMessage = (newMessage) => {
    setMessages((messages) => [...messages, newMessage])
    console.log(messages)
  }

  useEffect(() => {
    endOfMessageRef.current?.scrollIntoView({behavior: "smooth"})
  }, [messages]);


  return (
    <div className="bot">
      <div>
        <ChatNavbar />
      </div>
      <div className="message-window">
        <BotProfile/>
        {messages.map((message, index) => {
          if (message.sender === 'bot'){
            return <Message key={index} message={message}/>
          }
          else {return <Message key={index} message={message}/>}
})}
      </div>
      <div ref={endOfMessageRef} />
      <div className="chat-input"><MessageInput onNewMessage={handleNewMessage}/></div>
    </div>
  );
}

export default ChatPlatform;
