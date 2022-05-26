import React from "react";
import { Navbar, Typography, Button } from "@material-tailwind/react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const MyNav = () => {
  return (
    <Navbar className="bg-[#44ff00]" fullWidth={true}>
      <div className="container flex justify-between items-center">
        <Link to="/">
          <Typography className="uppercase font-bold flex">
            <img className="w-14 pr-2" src={logo} />
            mepredict
          </Typography>
        </Link>
        <Link to="/signin">
          <Button variant="text" className="text-[#fff]" size="md">
            Login
          </Button>
        </Link>
      </div>
    </Navbar>
  );
};

export default MyNav;
