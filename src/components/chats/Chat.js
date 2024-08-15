import React, { useEffect, useRef, useState } from 'react'
import "./chat.css"
import EmojiPicker from 'emoji-picker-react'

const Chat = () => {

const [open, setOpen] = useState(false);
const [text, setText] = useState("");

const endRef = useRef(null)

useEffect(() => {
endRef.current?.scrollIntoView({behaviour:'smooth'})
},[])

console.log(text)
const handleEmoji = (e)=>{
setText(prev => prev + e.emoji);
setOpen(false)
}
  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Raj Rathinam</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message own">
          <div className="text">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, dolorum?</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, dolorum?</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="text">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, dolorum?</p>
            <span>1 min ago</span>
          </div>
        </div><div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, dolorum?</p>
            <span>1 min ago</span>
          </div>
        </div><div className="message own">
          <div className="text">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, dolorum?</p>
            <span>1 min ago</span>
          </div>
        </div><div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, dolorum?</p>
            <span>1 min ago</span>
          </div>
        </div><div className="message own">
          <div className="text">
            <img src="./pic.jpeg" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid molestias quo sequi modi voluptate perferendis nostrum quae unde aspernatur earum dignissimos reprehenderit, illum minus deleniti neque quis voluptas hic saepe amet? Rem veritatis reprehenderit deserunt quae neque magnam, voluptatibus quisquam quas maiores cumque itaque, voluptas ut, nisi provident totam hic?</p>
            <span>1 min ago</span>
          </div>
        </div>
      
    

     <div ref={endRef}></div>

      </div>

      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input type="text" placeholder='Type a message...' value={text} onChange={e=>setText(e.target.value)}/>
        <div className="emoji">
          <img src="./emoji.png" alt="" onClick={() => setOpen((prev) => !prev)}/>
          <div className="picker">
          <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>

    </div>
  )
}

export default Chat
