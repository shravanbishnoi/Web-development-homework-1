import React from 'react'
import "../Css/BotProfile.css";
function BotProfile() {

  return (
    <div className='bot-profile'>
        <div className='bot-profile-image'>
            <img className='bot-profile-image' src="/assets/profile.jpg"></img>
        </div>
        <div className='bot-name'>TextChanger</div>
        <div className='bot-username'>textchanger@dev</div>
        <div className='bot-description'>Hello this is bot which respond with random texts.</div>
    </div>
  )
}

export default BotProfile;