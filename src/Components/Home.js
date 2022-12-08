import React from "react";
import {
  Box,
  Container,
  Grid,
  Link,
  Typography,
  createTheme,
} from "@mui/material";
import Navbar from "./Navbar";
import { fontSize } from "@mui/system";
import logo from "../Components/Logo";

const Home = ({ setStoredToken }) => {
  return (
    <div>
      <Navbar />
      <Grid sx={{ pl: "2rem", pt: "4rem", fontSize: "20px" }}>
        <Box xs={5}>
          <Typography>Welcome to the website signup to add a school</Typography>

          <Link to="/login">Login</Link>
          <br />
          <Link to="/signup">Sign Up</Link>
        </Box>
        {/* <Box xs={5} component="img" sx={{ width: "100%", height: 40 }}>
          <img src={logo} alt="student" />
        </Box> */}
      </Grid>
    </div>
  );
};

export default Home;
