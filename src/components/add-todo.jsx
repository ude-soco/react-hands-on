import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";

// * AddTodo component
// * Task 6: Continues
const AddTodo = ({ handleAddTodo }) => {
  const [addTask, setAddTask] = useState("");
  // * Task 6: Continues

  // Task 7: Starts here
  const handleChange = (event) => {
    setAddTask(event.target.value);
  };
  // * Task 7: Continues

  // const handleAddTodoAndClearTextfield = () => {
  //   handleAddTodo(addTask);
  //   setAddTask("");
  // };

  return (
    <>
      <Grid container spacing={1} sx={{ py: 2 }}>
        <Grid size="grow">
          <TextField
            fullWidth
            placeholder="Add a to-do"
            size="small"
            // * Task 7: Continues
            onChange={handleChange}
            // * Task 7: Ends here
            // value={addTask}
            // onKeyDown={(e) => {
            //   if (e.key === "Enter") {
            //     handleAddTodoAndClearTextfield();
            //   }
            // }}
          />
        </Grid>

        <Button
          variant="contained"
          // * Task 6: Continue
          onClick={() => handleAddTodo(addTask)}
          // * Task 6: End
        >
          Add
        </Button>
      </Grid>
    </>
  );
};

export default AddTodo;
