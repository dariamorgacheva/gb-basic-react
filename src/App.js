import { useState, useEffect } from 'react';
import './App.css';
import Message from './components/message';


function App() {
  const [messageList, setMessageList] = useState([]);
  const [author, setAuthor] = useState('');
  const [messageText, setMessageText] = useState('');

  useEffect(() => {
    if (messageList.length && messageList[messageList.length - 1].author) {
      setTimeout(() => {
        setMessageList([...messageList, { text: 'hi I am a robot' }])
      }, 1000)
    }
  }, [messageList])

  return (
    <div>
      <input 
        type="text" 
        onChange={(event) => setAuthor(event.target.value)} 
        placeholder='Your Name'
      />
      <input 
        type="text" 
        onChange={(event) => setMessageText(event.target.value)} 
        placeholder='Your Message'
      />

      <button 
        onClick={() => setMessageList([...messageList, {author, text: messageText}])}>
          Submit
      </button>
      {
        messageList.map((message, index) => 
          <Message 
            author={message.author} 
            text={message.text} 
            key={index}
          />
        )
      }
    </div>
  )
}

export default App;
