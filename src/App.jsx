import { useState } from "react";

// import "./App.css";
import { Box, Flex } from "@chakra-ui/react";

import Sidebar from "./components/common/SideBar";
import NavBar from "./components/common/NavBar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <Flex>
      {!isLoggedIn ? (
        <>
          <LoginPage />
        </>
      ) : (
        <>
          <Box>
            <NavBar />
            <HomePage />
          </Box>
        </>
      )}
    </Flex>
  );
}

export default App;
