import React from "react";
import { Typography } from "@material-tailwind/react";
import Prediction from "./Prediction";

const Game = () => {
  return (
    <>
      <div className="container mx-auto px-6 py-2.5 max-w-lg mt-10 flex justify-center bg-white">
        <Typography className="font-medium">Guyaquail</Typography>
        <img className="w-8" src="https://media.api-sports.io/football/teams/16477.png" />
        <Typography className="font-medium px-3"> - </Typography>
        <img className="w-8" src="https://media.api-sports.io/football/teams/1150.png" />
        <Typography className="font-medium">Chicago</Typography>
      </div>
      <div className="grid grid-rows-4 grid-flow-col gap-4">
        <Prediction />
      </div>
    </>
  );
};

export default Game;
