import React from 'react';
import { FaUserCircle, FaThumbtack} from 'react-icons/fa';
import "../Css/ChatNavbar.css";

export default function ChatNavbar({name}) {

  return (
    <div className='chat-navbar'>
        <div className='profile'> 
            <div className='profile-logo'><FaUserCircle size={30}/></div>
            <div className='profile-name'><p>{name}</p></div>
        </div>
        <div className='pin-message'><FaThumbtack size={30} style={{ transform: 'rotate(45deg)' }}/></div>
    </div>
  )
}
