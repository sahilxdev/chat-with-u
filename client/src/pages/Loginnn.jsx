import React, { useState } from "react";
import { Button, Container, Paper, TextField, Typography } from "@mui/material";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = ()=> setIsLogin(false);

  return (
    <Container component={"main"} maxWidth="xs" sx={{
        height: "100vh",
        display:"felx",
        justifyContent: "center",
        alignItems: "center"
    }} >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form style={{
                width: "100%",

            }}>
              <TextField 
                required 
                fullWidth 
                label="Username"
                margin="normal"
                variant="outlined"
              />

                <TextField 
                required 
                fullWidth 
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
              />
                <Button 
                sx={{
                    marginTop:"1rem",
                }} 
                variant="contained" 
                color="primary"
                type="submit"
                fullWidth
                 >
                    Login
                </Button>

                <Typography textAlign={"center"} m="1rem" >OR</Typography>

                    <Button 

                    variant="text"
                    onClick={toggleLogin}
                    fullWidth
                    >
                        Sign Up Instead
                    </Button>

            </form>
          </>
        ) : (
          <span>register</span>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
