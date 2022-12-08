import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
  Box,
  Container,
  Grid,
  Link,
  Typography,
  createTheme,
} from "@mui/material";
import { NavLink } from "react-router-dom";
const drawerWidth = 240;

const navItems = [
  <NavLink to="/">Home</NavLink>,
  <NavLink to="/about">About</NavLink>,
  <NavLink to="/contactpage">Contact Us</NavLink>,
];

export default function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center", color: "#1EB2A6" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{ backgroundColor: "#fff" }}>
        <Grid
          container
          spacing={3}
          sx={{
            color: "black",
            backgroundColor: "#F9F3F1",
            pt: "1rem",
            pb: "1rem",
          }}
        >
          <Grid
            item
            xs={8}
            sx={{
              marginLeft: "2rem",
              color: "#1EB2A6",
              fontSize: "25px",
              textDecoration: "none",
              "&:hover": {
                fontWeight: "bold",
                paddingBottom: "0.15rem",
                // borderBottom: "3px solid #ffffff",
              },
              "&:focus": {
                fontWeight: "bold",
                paddingBottom: "0.15rem",
                borderBottom: "3px solid #1EB2A6",
              },
            }}
          >
            ABC SCHOOLS
          </Grid>
          <Grid item xs={2} sx={{ alignItems: "right" }}>
            <Link
              variant="body2"
              color="inherit"
              target="_blank"
              href="#"
              marginRight="0.8rem"
            >
              <FacebookIcon
                fontSize="large"
                paddingX={{ sm: "1rem" }}
                sx={{
                  color: "#1EB2A6",
                  "&:hover,&:focus": {
                    color: "#000000",
                  },
                }}
              />
            </Link>
            <Link
              variant="body2"
              color="inherit"
              target="_blank"
              href="https://www.linkedin.com/company/epitome-beauty/"
              marginRight="0.8rem"
            >
              <Link variant="body2" color="inherit" edInIcon />
              <LinkedInIcon
                fontSize="large"
                paddingX={{ sm: "1rem" }}
                sx={{
                  color: "#1EB2A6",
                  "&:hover,&:focus": {
                    color: "#000000",
                  },
                }}
              />
            </Link>
            <Link
              variant="body2"
              color="inherit"
              target="_blank"
              href="https://www.youtube.com/channel/UC8LKCBrdIPGWSYTiMBTByhw"
              marginRight="0.8rem"
            >
              <YouTubeIcon
                fontSize="large"
                paddingX={{ sm: "1rem" }}
                sx={{
                  color: "#1EB2A6",
                  "&:hover,&:focus": {
                    color: "#000000",
                  },
                }}
              />
            </Link>
            <Link
              variant="body2"
              color="inherit"
              target="_blank"
              href="#"
              marginRight="0.8rem"
            >
              <TwitterIcon
                fontSize="large"
                paddingX={{ sm: "1rem" }}
                sx={{
                  color: "#1EB2A6",
                  "&:hover,&:focus": {
                    color: "#000000",
                  },
                }}
              />
            </Link>
          </Grid>
        </Grid>
        <Toolbar>
          <IconButton
            // color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: "#000000",
              display: { xs: "none", sm: "block" },
            }}
          >
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "#000000" }}>
                  {item}
                </Button>
              ))}
            </Box>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 5 }}>
        <Toolbar />
        <Typography></Typography>
      </Box>
    </Box>
  );
}
