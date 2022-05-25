import React from "react";
import { Typography } from "@material-tailwind/react";
import Prediction from "./Prediction";
import PredictForm from "./PredictForm";

const Game = () => {
  return (
    <>
      <div className="container mx-auto px-6 py-2.5 max-w-lg mt-24 flex justify-center bg-white">
        <Typography className="font-medium">Guyaquail</Typography>
        <img className="w-8" src="https://media.api-sports.io/football/teams/16477.png" />
        <Typography className="font-medium px-3"> - </Typography>
        <img className="w-8" src="https://media.api-sports.io/football/teams/1150.png" />
        <Typography className="font-medium">Chicago</Typography>
      </div>
      <div className="grid grid-cols-4 gap-4 max-w-2xl mt-24 mx-auto">
        <Prediction />
      </div>
      <PredictForm />
    </>
  );
};

export default Game;
