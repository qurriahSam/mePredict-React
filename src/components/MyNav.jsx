import React from "react";
import { Navbar, Typography } from "@material-tailwind/react";

const MyNav = () => {
  return (
    <Navbar className="bg-[#40c50f]" fullWidth="true">
      <div className="container flex justify-between items-center">
        <Typography className="uppercase font-bold">mepredict</Typography>
        <Typography>Login</Typography>
      </div>
    </Navbar>
  );
};

export default MyNav;
