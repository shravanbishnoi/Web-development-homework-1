import { useState } from 'react'
import './ChatPlatform.css'
import MessageInput from './Components/MessageInput'
import BotProfile from './Components/BotProfile'

function ChatPlatform() {

  return (
    <>
    <div>
    <BotProfile/>
    <MessageInput />
    </div>
      
    </>
  )
}

export default ChatPlatform
