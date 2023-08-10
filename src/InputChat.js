import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { useState ,useRef ,useEffect } from 'react';
const InputChat = (props)=>{
const [emojiVisible,setEmojiVisible] = useState(false);
const inputRef = useRef(null)

const handleEnter = (e)=>{
  if(e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    props.handleSend();
  }
}
useEffect(() => {
  if (emojiVisible) {
    return;
  }
  inputRef.current.focus();
}, [emojiVisible]);
 
    return (
        <>
         <div  className="message-input">
          
           <input 
           ref={inputRef}
           value={props.msgInput}  onChange={(e)=> props.setmsgInput(e.target.value)} type="text" className="chat-input" required
           onKeyDown={handleEnter}
           />
           <button className='emoji-btn' onClick={()=> setEmojiVisible(!emojiVisible)}><img src='https://cdn-icons-png.flaticon.com/512/3404/3404134.png' alt='emoji'/></button>         
           
           {emojiVisible && <div className="emoji-picker"><Picker data={data} onEmojiSelect={(emoji)=>{
            props.setmsgInput(props.msgInput + emoji.native);
            setEmojiVisible(false);
           }}  /> </div>  }
         </div>
        </>
    )
}
export default InputChat;