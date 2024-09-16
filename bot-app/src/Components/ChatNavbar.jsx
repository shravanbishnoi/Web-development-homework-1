import React from 'react';
import { FaRobot, FaThumbtack} from 'react-icons/fa';
import ThemeButton from './ThemeButton';
import "../Css/ChatNavbar.css";

export default function ChatNavbar({name}) {

  return (
    <div className='chat-navbar'>
        <div className='profile'> 
            <div className='profile-logo'><FaRobot size={30}/></div>
            <div className='profile-name'><p>{name}</p></div>
        </div>
        <ThemeButton />
    </div>
  )
}
