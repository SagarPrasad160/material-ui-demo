import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import PropTypes from "prop-types";

export default function TodoList({ todos, handleDelete }) {
  const handleClick = (index) => {
    handleDelete(index);
  };
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        margin: "0 auto",
      }}
    >
      {todos.map((todo, index) => (
        <ListItem
          key={index}
          disableGutters
          sx={{ border: "1px solid gray", borderRadius: 5, margin: 1, p: 1 }}
        >
          <ListItemText primary={`${todo}`} />
          <IconButton onClick={() => handleClick(index)}>
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
