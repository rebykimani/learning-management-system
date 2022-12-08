import React, { useState, useEffect } from "react";
import SignUp from "./SignUp.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hello from "./Hello";
import Login from "./Login";
import Home from "./Components/Home";
import routes from './routes';
import { useRoutes } from 'react-router-dom';
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
import { AnimatePresence } from 'framer-motion';



// import SidebarConfig from "./Layouts/Dashboard/sidebar";

function App() {
  const [storedToken, setStoredToken] = useState(localStorage.getItem("token"));
  useEffect(() => {
    console.log(storedToken);
  }, [storedToken]);
  const isLoggedIn = false;
  const routing = useRoutes(routes(isLoggedIn));

  return (
      <ThemeConfig>
        <GlobalStyles />
        <AnimatePresence exitBeforeEnter>{routing}</AnimatePresence>
      </ThemeConfig>
  );
}

export default App;
