import React from "react";
import { Navbar, Typography, Button } from "@material-tailwind/react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useAuth, logout } from "./firebase";

const MyNav = () => {
  const currentUser = useAuth();

  async function handleLogout() {
    try {
      await logout();
    } catch (error) {
      alert(error);
    }
  }

  return (
    <Navbar className="bg-[#44ff00]" fullWidth={true}>
      <div className="container flex justify-between items-center">
        <Link to="/">
          <Typography className="uppercase font-bold flex">
            <img className="w-14 pr-2" src={logo} />
            mepredict
          </Typography>
        </Link>
        {currentUser ? (
          <Button variant="text" className="text-[#fff]" size="md" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Link to="/signin">
            <Button variant="text" className="text-[#fff]" size="md">
              Login
            </Button>
          </Link>
        )}
      </div>
    </Navbar>
  );
};

export default MyNav;
