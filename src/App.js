
import "./App.css";
import MessageInput from "./components/MessageInput";
import ChatList from "./components/ChatList";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles ({
  wrapper: {
    display: "grid",
    gridTemplateColumns: "200px 1fr"
  }
});


function App() {
  const classes = useStyles();

  return (    
    <div className={classes.wrapper}>

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
