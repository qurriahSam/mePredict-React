/* eslint-disable react/prop-types */
import React from "react";
import { Navbar, Typography, Button } from "@material-tailwind/react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useAuth, logout } from "./firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSun } from "@fortawesome/free-solid-svg-icons";

const MyNav = ({setLightMode, lightMode}) => {
  const currentUser = useAuth();

  async function handleLogout() {
    try {
      await logout();
    } catch (error) {
      alert(error);
    }
  }

  const handleLightMode = () => {
    setLightMode(!lightMode);
    console.log(lightMode);
  };

  return (
    <Navbar className="bg-[#44ff00] justify-center fixed top-0" fullWidth={true}>
      <div className="container flex justify-between">
        <Link to="/">
          <Typography className="uppercase font-bold flex pt-2">
            <img className="w-14 pr-2" src={logo} />
            mepredict
          </Typography>
        </Link>
        <div className="flex">
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
          <FontAwesomeIcon icon={faSun} className={lightMode ? "cursor-pointer p-3" : "cursor-pointer p-3 text-cyan-800"} onClick={handleLightMode} />
        </div>

      </div>
    </Navbar>
  );
};

export default MyNav;
