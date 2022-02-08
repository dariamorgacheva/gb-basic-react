import {List} from "@material-ui/core";
import Chat from "./Chat";

function ChatList ({list}) {
  return (
    <List>
      {list.map((item) => (

        <Chat key={item.id} {...item} />
      ))}
    </List>
  )
};

export default ChatList;