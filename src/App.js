
import "./App.css";
import MessageInput from "./components/MessageInput";
import ChatList from "./components/ChatList";

function App() {
  


  return (

    
    <div className="classes.wrapper">

      <ChatList 
        list={[
          {
            name: "user1",
            id: "1"
          },
          {
            name: "user2",
            id: "2"
          },
          {
            name: "user3",
            id: "3"
          },
        ]}
      />
      <MessageInput />

    </div>
  )
}

export default App;
