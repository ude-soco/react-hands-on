import React, { createContext, useState } from "react";
import { CssBaseline, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Todo from "./components/todo";
import Users from "./components/users";

// * Task 1
export const UserTodoContext = createContext({
  users: [],
  setUsers: () => {},
});
// * Task 1

export default function App() {
  // * Task 1
  const [users, setUsers] = useState([]);
  // * Task 1

  return (
    <>
      <UserTodoContext.Provider value={{ users, setUsers }}>
        <CssBaseline />
        {/* // * Task 2 */}
        <BrowserRouter>
          {/* // * Task 2 */}
          <Header />
          <Grid
            container
            justifyContent="center"
            sx={{ minHeight: "95vh", py: 10, px: 2 }}
          >
            <Grid size={{ xs: 12, md: 8, lg: 5 }}>
              {/* // * Task 2 */}
              <Routes>
                <Route index element={<Users />} />
                <Route path="users/:userId/todos" element={<Todo />} />
                <Route path="*" element={<Navigate to={"/"} replace />} />
              </Routes>
              {/* // * Task 2 */}
            </Grid>
          </Grid>
          {/* // * Task 2 */}
        </BrowserRouter>
        {/* // * Task 2 */}
        <Divider />
        <Footer />
      </UserTodoContext.Provider>
    </>
  );
}
