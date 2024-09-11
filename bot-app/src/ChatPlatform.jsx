import { useState } from 'react'
import './ChatPlatform.css'
import MessageInput from './Components/MessageInput'
import BotProfile from './Components/BotProfile'

function ChatPlatform() {

  return (
    <>
    <div>
    <MessageInput />

    </div>
      <BotProfile/>
    </>
  )
}

export default ChatPlatform
