import { useState, useEffect, useRef} from "react";
import "./ChatPlatform.css";
import MessageInput from "./Components/MessageInput";
import BotProfile from "./Components/BotProfile";
import Message from "./Components/Message";
import ChatNavbar from "./Components/ChatNavbar";

function ChatPlatform() {
  const [messages, setMessages] = useState([{sender: "StringShaper", text: "Hi there, How can help you?"}]);
  const endOfMessageRef = useRef(null);
  const [currentBotName, setCurrentBotname] = useState(messages[0].sender);

  const handleNewMessage = (newMessage) => {
    setMessages((messages) => [...messages, newMessage])
  }

  useEffect(() => {
    endOfMessageRef.current?.scrollIntoView({behavior: "smooth"})
    if (messages[messages.length - 1].sender !== "human") {
      setCurrentBotname(messages[messages.length - 1].sender)
    }
  }, [messages]);

  return (
    <div className="bot">
      <div>
        <ChatNavbar name={currentBotName}/>
      </div>
      <div className="message-window">
        <BotProfile botName={currentBotName} botUserName={`@${currentBotName}`}/>
        {messages.map((message, index) => {
          if (message.sender !== 'human'){
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
