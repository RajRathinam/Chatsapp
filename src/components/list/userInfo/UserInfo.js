import React from 'react'
import "./userInfo.css"
const UserInfo = () => {
  return (
    <div className='userInfo'>
      <div className="user">
        <img src="./raj.jpg" alt=""/>
        <h2>Chats</h2>
      </div>
      <div className="icons">
        <img src=".\more.png" alt="" />
        <img src=".\video.png" alt="" />
        <img src=".\edit.png" alt="" />
      </div>
    </div>
  )
}

export default UserInfo
