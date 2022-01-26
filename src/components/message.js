import '../App.css';

function Message(props) {
  return (
    <div className='message-box'>
      <div className="message-content">{props.text}</div> 
    </div>
  );
}

export default Message;