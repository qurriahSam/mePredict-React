/* eslint-disable react/prop-types */
import React from "react";
import { Typography } from "@material-tailwind/react";

const Games = ({
  game: {
    fixture: { id },
    teams,
  },
}) => {
  return (
    <div
      id={id.toString()}
      className="container mt-3 mx-auto px-6 py-2.5 max-w-screen-sm flex justify-center bg-white"
    >
      <Typography className="font-medium">{teams.home.name}</Typography>
      <img className="w-8" src={teams.home.logo} />
      <Typography className="font-medium px-3"> - </Typography>
      <img className="w-8" src={teams.away.logo} />
      <Typography className="font-medium">{teams.away.name}</Typography>
    </div>
  );
};

export default Games;
