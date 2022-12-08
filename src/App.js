import React, { useState, useEffect } from "react";
import SignUp from "./SignUp.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hello from "./Hello";
import Login from "./Login";
import Home from "./Components/Home";
// import SidebarConfig from "./Layouts/Dashboard/sidebar";

function App() {
  const [storedToken, setStoredToken] = useState(localStorage.getItem("token"));
  useEffect(() => {
    console.log(storedToken);
  }, [storedToken]);

  return (
    <div>
      <Router>
        <Routes>
          {storedToken && storedToken !== "null" ? (
            <div>
              <Route
                path="/"
                element={<Hello setStoredToken={setStoredToken} />}
              />
              {/* <Route path="/Dashboard" element={<SidebarConfig />} /> */}
            </div>
          ) : (
            <Route
              path="/"
              element={<Home setStoredToken={setStoredToken} />}
            />
          )}
          <Route
            path="/login"
            element={<Login setStoredToken={setStoredToken} />}
          />
          <Route
            path="/signup"
            element={<SignUp setStoredToken={setStoredToken} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
