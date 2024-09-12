import { useState } from 'react'
import './ChatPlatform.css'
import MessageInput from './Components/MessageInput'
import BotProfile from './Components/BotProfile'
import Message from './Components/Message'
import ChatNavbar from './Components/ChatNavbar'

function ChatPlatform() {

  return (
    <>
    <div>
    <ChatNavbar/>
    <BotProfile/>
    <Message/>
    <MessageInput />
    </div>
    </>
  )
}

export default ChatPlatform
