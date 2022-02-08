import { ListItem, ListItemText } from "@material-ui/core";

 function Chat({name}) {
  return (
    <ListItem>
      <ListItemText>
        {name}
      </ListItemText>
    </ListItem>
  ) 

}

export default Chat;