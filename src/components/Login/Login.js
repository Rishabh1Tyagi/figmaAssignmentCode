// login
import React from "react";
import {
  Fab,
  TextField,
  Typography,
  Paper,
  Card,
  Box,
  Checkbox,
} from "@mui/material";
import "../Login/login.css";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    console.log("INSIDE");
  };
  const formSubmission = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div>
        <form onSubmit={formSubmission}>
          <Paper elevation={3} className="logincard image">
            <Card style={{ borderRadius:"2rem" }} className="login lcard">
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  id="input-with-sx"
                  label="Email"
                  variant="standard"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <LockIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  id="input-with-sx"
                  label="Password"
                  variant="standard"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Box>
              <div className="terms">
                <Checkbox
                  {...label}
                  defaultChecked
                  size="small"
                  style={{ color: "#af50de", marginBottom: "10%" }}
                />
                <Typography
                  className="text1"
                  variant="caption"
                  style={{ marginTop: "10px", marginBottom: "10%", cursor:"pointer" }}
                >
                  Remember me
                </Typography>
                <Typography
                  className="text1"
                  style={{
                    marginTop: "10px",
                    marginBottom: "10px",
                    color: "#af50de",
                    cursor: "pointer",
                    margin: "10px",
                    fontSize:"10.5px",
                    marginLeft:"20px"
                  }}
                  variant="caption"
                >
                  Forgot password ?
                </Typography>
              </div>
              <div className="button">
                <Fab
                  variant="extended"
                  className="login_button"
                  onClick={handleLogin}
                  style={{ color: "white" }}
                >
                  Login
                </Fab>
                <Typography
                  style={{
                    marginTop: "10px",
                    color: "#af50de",
                    cursor: "pointer",
                    fontSize:'12px'
                  }}
                >
                  Don't have an account? Sign up
                </Typography>
              </div>
            </Card>
          </Paper>
        </form>
      </div>
    </>
  );
};

export default Login;
