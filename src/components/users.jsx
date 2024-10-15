import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import { requestUserDetails } from "../utils/backend";
import { Avatar, CircularProgress, Paper, Typography } from "@mui/material";
// * Task 4: Starts here

// * Task 4: Continues below A

export default function Users() {
  // * Task 3: Starts here

  // * Task 3: Continues here A

  // * Task 4: Continues here A

  // * Task 4: Continues below B
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // * Task 4: Continues here B

  // * Task 4: Ends here

  // * Task 3: Continues here A

  // * Task 3: Continues below B

  return (
    <>
      <Grid container spacing={2} alignItems="center">
        {error ? (
          <Grid size={{ xs: 12 }}>
            <Typography align="center">Error loading data...</Typography>
          </Grid>
        ) : loading ? (
          <Grid size={{ xs: 12 }}>
            <Grid container spacing={2} direction="column" alignItems="center">
              <CircularProgress size={40} />
              <Typography align="center">Loading...</Typography>
            </Grid>
          </Grid>
        ) : (
          <>
            {users?.map((user) => {
              return (
                <Grid key={user.id} size={{ xs: 12, sm: 6 }}>
                  <Paper
                    sx={{
                      p: 2,
                      "&:hover": { boxShadow: 5 },
                      cursor: "pointer",
                    }}
                    // * Task 3: Continues here B

                    // * Task 3: End here
                  >
                    <Grid
                      container
                      spacing={2}
                      direction="column"
                      alignItems="center"
                    >
                      <Avatar
                        src={user.avatar}
                        sx={{ width: 56, height: 56 }}
                      />
                      <Typography variant="h5" align="center">
                        {user.name}
                      </Typography>
                    </Grid>
                  </Paper>
                </Grid>
              );
            })}
          </>
        )}
      </Grid>
    </>
  );
}
