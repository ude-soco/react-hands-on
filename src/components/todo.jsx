import React, { useState, useEffect, useContext } from "react";
import {
  Button,
  Card,
  CardHeader,
  Checkbox,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from "react-router-dom";
import AddTodo from "./add-todo";
// * Task 5.1: Starts here
import { UserTodoContext } from "../App";
// * Task 5.1: Continues below A

// * Todo component
const Todo = () => {
  const navigate = useNavigate();
  // * Task 5.1: Continues below A
  const { users, setUsers } = useContext(UserTodoContext);
  const params = useParams();
  const userId = params.userId;
  // * Task 5.1: Ends here
  const [todos, setTodos] = useState([]);

  // * Task 5.2: Starts here
  useEffect(() => {
    let foundUser = users.find((user) => user.id == userId);
    if (foundUser) {
      setTodos(foundUser.todos);
    } else {
      setTodos([]);
    }
  }, [userId]);
  // * Task 5.2: Ends here

  // * Task 7: Starts here
  useEffect(() => {
    return () => {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id == userId ? { ...user, todos: todos } : user
        )
      );
    };
  }, [todos]);
  // * Task 7: Ends here

  const handleDeleteTodo = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleAddTodo = (title) => {
    let newTodo = {
      userId: userId,
      id: Math.random(),
      title,
      completed: false,
    };
    let newTodoList = [newTodo, ...todos];
    setTodos(newTodoList);
  };

  // * Task 6: Starts here
  const handleCompleteTodo = (event, id) => {
    const checked = event.target.checked;
    const newTodoList = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: checked } : todo
    );
    setTodos(newTodoList);
  };
  // * Task 6: Continues below A

  const goBack = () => {
    navigate("/");
  };

  return (
    <>
      <Button startIcon={<ArrowBackIcon />} onClick={goBack}>
        Back
      </Button>
      <Divider />
      <AddTodo handleAddTodo={handleAddTodo} />
      {todos.length ? (
        <Typography gutterBottom>#{todos.length} to-dos found!</Typography>
      ) : (
        <Typography gutterBottom>No to-dos found!</Typography>
      )}
      {todos.map((todo, index) => {
        return (
          <Card
            key={index}
            sx={{
              mb: 1,
              borderRadius: 8,
              "&:hover": { backgroundColor: "#f5f5f5" },
            }}
          >
            <CardHeader
              title={
                <>
                  <Grid container>
                    <Grid size="auto">
                      <Checkbox
                        checked={todo.completed}
                        // * Task 6: Continues here A
                        onChange={(e) => handleCompleteTodo(e, todo.id)}
                        // * Task 6: Ends here
                      />
                    </Grid>
                    <Grid size="grow">
                      <Typography
                        sx={{
                          mt: 1,
                          textDecoration: todo.completed ? "line-through" : "",
                        }}
                      >
                        {todo.title}
                      </Typography>
                    </Grid>
                  </Grid>
                </>
              }
              action={
                <IconButton
                  color="error"
                  onClick={() => handleDeleteTodo(todo.id)}
                >
                  <DeleteIcon />
                </IconButton>
              }
            />
          </Card>
        );
      })}
    </>
  );
};

export default Todo;
