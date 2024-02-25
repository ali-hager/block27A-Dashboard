import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Snackbar, Alert } from "@mui/material";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try{
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();
      if (data.message) {
        setSuccess(null);
        setError("Login failed. Please check your credentials.");
      } else {
        setSuccess("Login successful!");
        setError(null);
      }
    } catch (error) {
      console.error(error);
      setSuccess(null);
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <>
      <h2>Sign Up</h2>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Username" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <TextField id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <Button variant="outlined" color="primary" onClick={handleSubmit}>Login</Button>
      </Box>
      <Box>
      {error && (
        <Snackbar
          open={true}
          autoHideDuration={3000}
          onClose={() => setError(null)}
        >
          <Alert severity="error">{error}</Alert>
        </Snackbar>
      )}
      {success && (
        <Snackbar
          open={true}
          autoHideDuration={3000}
          onClose={() => setSuccess(null)}
        >
          <Alert severity="success">{success}</Alert>
        </Snackbar>
      )}
      </Box>
    </>
  );
};

export default Login;
