import React, { createContext, useState } from "react";
import { CssBaseline, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Todo from "./components/todo";
import Users from "./components/users";

// * Task 1: Starts here
export const UserTodoContext = createContext({
  users: [],
  setUsers: () => {},
});
// * Task 1: Continues below A

export default function App() {
  // * Task 1: Continues here A
  const [users, setUsers] = useState([]);
  // * Task 1: Continues below B

  return (
    <>
      {/* // * Task 1: Continues here B */}
      <UserTodoContext.Provider value={{ users, setUsers }}>
        {/* // * Task 1: Continues below C */}
        <CssBaseline />
        <BrowserRouter>
          <Header />
          <Grid
            container
            justifyContent="center"
            sx={{ minHeight: "90vh", py: 10, px: 2 }}
          >
            <Grid size={{ xs: 12, md: 8, lg: 5 }}>
              {/* // * Task 2: Starts here */}
              <Routes>
                <Route index element={<Users />} />
                <Route path="users/:userId/todos" element={<Todo />} />
                <Route path="*" element={<Navigate to={"/"} replace />} />
              </Routes>
              {/* // * Task 2: Ends here */}
            </Grid>
          </Grid>
        </BrowserRouter>
        <Divider />
        <Footer />
        {/* // * Task 1: Continues here C */}
      </UserTodoContext.Provider>
      {/* // * Task 1: Ends here */}
    </>
  );
}
