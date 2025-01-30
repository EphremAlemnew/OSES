import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toaster } from "../ui/toaster";
const LogoutPage = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  toaster.create({
    title: `You have successfully logged out!`,
    type: "warning",
  });
  useEffect(() => {
    setIsLoggedIn(false);
    navigate("/"); // Redirect to the login page after logout
  }, [setIsLoggedIn, navigate]);

  return null;
};

export default LogoutPage;
