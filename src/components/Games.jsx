/* eslint-disable react/prop-types */
import React from "react";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Games = ({
  game: {
    fixture: { id },
    teams,
  },
}) => {
  return (
    <div id={id.toString()} className=" max-w-lg mx-auto mt-3 px-6 py-2.5 text-white border-2 border-green-500/50 hover:border-[#44ff00] dark:text-black">
      <Link to={`${id}`} className="grid grid-cols-7">
        <div className="flex col-span-3 justify-end">
          <Typography className="font-medium pt-1 pr-2">{teams.home.name}</Typography>
          <img className="w-8 h-8" src={teams.home.logo} />
        </div>
        <Typography className="font-medium px-3 text-center"> - </Typography>
        <div className="flex col-span-3">
          <img className="w-8 h-8" src={teams.away.logo} />
          <Typography className="font-medium pt-1 pl-2">{teams.away.name}</Typography>
        </div>
      </Link>
    </div>
  );
};

export default Games;
