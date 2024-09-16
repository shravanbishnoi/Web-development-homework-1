import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ChatPlatform from './ChatPlatform.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChatPlatform />
  </StrictMode>,
)
