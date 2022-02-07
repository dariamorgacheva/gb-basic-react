
function Message(props) {
  return (
    <div>
      <div> <b>{props.author} </b> says "{props.text}"</div>
{/* //      <div className="message-content"></div>   */}
    </div>
  );
}



export default Message;