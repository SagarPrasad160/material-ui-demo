import { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import TodoList from "./components/TodoList";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    setTodos([...todos, text]);
    setText("");
  };

  const handleDelete = (indexToRemove) => {
    const newTodos = todos.filter((todo, index) => {
      if (index === indexToRemove) {
        return;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <>
      <Box
        sx={{
          width: 300,
          height: 200,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <TextField
          id="filled-basic"
          label="Enter todo"
          placeholder="water plants"
          variant="filled"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button variant="contained" size="large" onClick={handleAdd}>
          Add{" "}
        </Button>
      </Box>
      <TodoList todos={todos} handleDelete={handleDelete} />
    </>
  );
}

export default App;
