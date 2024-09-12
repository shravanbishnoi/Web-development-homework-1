import { useState } from 'react'
import './ChatPlatform.css'
import MessageInput from './Components/MessageInput'
import BotProfile from './Components/BotProfile'
import Message from './Components/Message'

function ChatPlatform() {

  return (
    <>
    <div>
    <BotProfile/>
    <Message/>
    <MessageInput />
    </div>
    </>
  )
}

export default ChatPlatform
