import React from "react";
import { Navbar, Typography } from "@material-tailwind/react";
import logo from "../assets/logo.png";

const MyNav = () => {
  return (
    <Navbar className="bg-[#40c50f]" fullWidth={true}>
      <div className="container flex justify-between items-center">
        <Typography className="uppercase font-bold flex">
          <img className="w-14 pr-2" src={logo} />
          mepredict
        </Typography>
        <Typography>Login</Typography>
      </div>
    </Navbar>
  );
};

export default MyNav;
