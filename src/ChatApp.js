import { useState } from "react";
import InputChat from "./InputChat";

const ChatApp = ()=>{
    let [msgInput,setmsgInput] = useState('');
    let [messages,setMessages] = useState([]);
    const user_names = ["Alan", "Bob", "Carol", "Dean", "Elin"];
    let date = new Date();
    let hr =  ("0" + date.getHours()).slice(-2);
    let min = ("0"+ date.getMinutes()).slice(-2);
    let currTime = hr +":" + min;

    console.log(msgInput);
    const handleSend = (e) =>{
      if(msgInput){
        const randomUser  = user_names[Math.floor(Math.random() * user_names.length)];
        const newMsg = {
          name : randomUser,
          message  : msgInput,
          like : 0
        }
  
        setMessages([...messages,newMsg]);
        setmsgInput('');
      }
      
      console.log(messages);
}

const handleClick = (index)=>{
    const updatedMsgLikes = [...messages];
   updatedMsgLikes[index].like += 1;
   setMessages(updatedMsgLikes);
}
    return (
        <div className="outer-container">
          <div className="messages-container">
             {messages.map((message,index) =>(
                <div className="msg" key={index}>
                      <span className="user-img"><img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" /></span>
                      <span className="user-name">{message.name}</span>
                      <span className="time">{currTime}</span>
                      <div className="user-msg">
                        <span >{message.message}</span>
                       </div>
                      
                      <span className="like" onClick={()=>handleClick(index)}>{message.like} <img  src="https://cdn-icons-png.flaticon.com/512/833/833472.png"/></span>
                </div>
             ))}
          </div>
          <InputChat  msgInput = {msgInput}  
          handleSend = {handleSend}
          setmsgInput = {setmsgInput} />
        </div>
    )
}


export default ChatApp;
