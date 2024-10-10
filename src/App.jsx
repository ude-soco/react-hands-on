import React, { useState } from "react";
import { CssBaseline, Typography, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Header from "./components/header";
import Todo from "./components/todo";
import AddTodo from "./components/add-todo";
import Footer from "./components/footer";

function App() {
  // * Task 1: Starts here
  const [todos, setTodos] = useState([
    { id: 1, task: "Prepare the drafts of the slides" },
    { id: 2, task: "Prepare hands-on tasks" },
    { id: 3, task: "Practice speaking" },
    { id: 4, task: "Check if the demo is working" },
    { id: 5, task: "Solve issues posted by others" },
  ]);
  // * Task 1: Ends here

  // * Task 2: Starts here
  const handleDeleteTodo = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  // * Task 2: Ends here

  // * Task 5: Starts here
  const handleAddTodo = (text) => {
    // let newTodo = { id: Math.random(), task: text };
    // let newTodoList = [...todos, newTodo];
    // setTodos(newTodoList);

    setTodos((prevState) => [...prevState, { id: Math.random(), task: text }]);
  };
  // * Task 5: Ends here

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid
        container
        justifyContent="center"
        sx={{ minHeight: "95vh", py: 10, px: 2 }}
      >
        <Grid size={{ xs: 12, md: 8, lg: 5 }}>
          <Grid
            container
            direction="column"
            sx={{ p: 4, borderRadius: 6, border: "3px solid #d6d4d4" }}
            spacing={1}
          >
            <Typography variant="h5" align="center">
              A Simple To-Do List
            </Typography>
            <Divider />
            {/* // * Task 6: Starts here */}
            <AddTodo handleAddTodo={handleAddTodo} />
            {/* // * Task 6: Continues to AddTodo component */}

            {/* // * Task 3: Starts here */}
            <Todo todos={todos} handleDeleteTodo={handleDeleteTodo} />
            {/* // * Task 3: Continues to Todo component */}
          </Grid>
        </Grid>
      </Grid>
      <Divider />
      <Footer />
    </>
  );
}

export default App;
