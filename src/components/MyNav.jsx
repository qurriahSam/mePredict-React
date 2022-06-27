import React from "react";
import { Navbar, Typography, Button } from "@material-tailwind/react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useAuth, logout } from "./firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

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
    <Navbar className="bg-[#44ff00] justify-center fixed top-0" fullWidth={true}>
      <div className="container flex justify-between">
        <Link to="/">
          <Typography className="uppercase font-bold flex pt-2">
            <img className="w-14 pr-2" src={logo} />
            mepredict
          </Typography>
        </Link>
        {currentUser ? (
          <div>
            <Link to="/profile">
              <FontAwesomeIcon icon={faUser} className="cursor-pointer hover:animate-pulse" />
            </Link>
            <Button variant="text" className="text-[#fff] ml-5" size="md" onClick={handleLogout}>
              Logout
            </Button>
          </div>
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
