import React from 'react'
import "./details.css"

const Details = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="./raj.jpg" alt="" />
        <h2>Raj Rathinam</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
        </div>
        <div className="photos">
          
          
          <div className="photoItem">
            <div className="photoDetails">
              <img src="./pic.jpeg" alt="" />
              <span>picture 1</span>
            </div>
            <img src="./download.png" alt="" className='icon'/>
          </div>
          <div className="photoItem">
            <div className="photoDetails">
              <img src="./pic.jpeg" alt="" />
              <span>picture 1</span>
            </div>
            <img src="./download.png" alt="" className='icon'/>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block Users</button> 
        <button className='logOut'>Log out</button> 
      </div>
      
    </div>
  )
}

export default Details
