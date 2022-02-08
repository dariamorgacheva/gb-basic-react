import { Input, IconButton } from "@material-ui/core";
import { useState, useEffect } from "react";
import Message from "./Message";

function MessageInput() {
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState('');

  const sendMessage = (author, text) => {
    const newMessageList = [...messageList];
    const newMessage = {
      author,
      text,    
    };
    newMessageList.push(newMessage);
    setMessageList(newMessageList);
  };

  const onSubmitMessage = (event) => {
    event.preventDefault();
    sendMessage("user", value)
  };

  const onChangeMessageInput = (event) => {
    setValue(event.target.value);
  };

// const handleClick = () => {
//   setMessageList([...messageList, {author, text: messageText, key: Date.now()}]);
// }
  useEffect(() => {
    if (messageList.length && !(messageList[messageList.length - 1].author === 'bot')) {
      setTimeout(() => {
        setMessageList([...messageList, { author: 'bot', text: 'hi i am a robot' }])
      }, 2000);
    }
  }, [messageList]);

  return (
    <div>
      <form onSubmit={onSubmitMessage}>
        <Input 
          onChange={onChangeMessageInput} 
          placeholder='Your Message'
          value={value}
          author="user"
          type="text"
        />
      </form>

      <IconButton 
      onClick={onSubmitMessage}>
        Submit
      </IconButton>

      {
        messageList.map((message, index) => 
          <Message 
            author={message.author} 
            text={message.text} 
            key={`${message}-${index}`}
          />
        )
      }
    </div>
  )
}

export default MessageInput;