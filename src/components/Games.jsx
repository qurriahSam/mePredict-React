import React from "react";
import { Typography } from "@material-tailwind/react";

const Games = () => {
  return (
    <div className="container mx-auto px-6 py-2.5 w-96 flex justify-center bg-white">
      <Typography className="font-medium">Guyaquail</Typography>
      <img className="w-8" src="https://media.api-sports.io/football/teams/16477.png" />
      <Typography className="font-medium px-3"> - </Typography>
      <img className="w-8" src="https://media.api-sports.io/football/teams/1150.png" />
      <Typography className="font-medium">Chicago</Typography>
    </div>
  );
};

export default Games;
