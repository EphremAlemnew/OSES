import { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/common/NavBar";
import HomePage from "./pages/HomePage";
import LoginPage from "./components/auth/LoginPage";
import SchoolsPage from "./pages/SchoolsPage";
import NotificationsPage from "./pages/NotificationsPage";

import { Toaster } from "./components/ui/toaster";
import ErrorPage from "./components/common/ErrorPage";
import ForgotPasswordPage from "./components/auth/ForgotPasswordPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Flex>
      <Toaster />
      {!isLoggedIn ? (
        <>
          <Routes>
            <Route path="/" element={<LoginPage />} />

            <Route path="/forgot" element={<ForgotPasswordPage />} />
          </Routes>
        </>
      ) : (
        <Box w={"full"}>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/schools" element={<SchoolsPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/forgot" element={<ForgotPasswordPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Box>
      )}
    </Flex>
  );
}

export default App;
