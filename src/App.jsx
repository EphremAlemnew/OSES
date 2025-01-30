import { useState } from "react";

// import "./App.css";
import { Box, Flex } from "@chakra-ui/react";

import Sidebar from "./components/common/SideBar";
import NavBar from "./components/common/NavBar";
import HomePage from "./pages/HomePage";
import LoginPage from "./components/auth/LoginPage";
import { Route, Routes } from "react-router-dom";
import SchoolsPage from "./pages/SchoolsPage";
import { Toaster } from "./components/ui/toaster";
import NotificationsPage from "./pages/NotificationsPage";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <Flex>
      <Toaster />
      {!isLoggedIn ? (
        <>
          <LoginPage />
        </>
      ) : (
        <>
          <Box>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/schools" element={<SchoolsPage />} />
              <Route path="/notifications" element={<NotificationsPage />} />
            </Routes>
          </Box>
        </>
      )}
    </Flex>
  );
}

export default App;
