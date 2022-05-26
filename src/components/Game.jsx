/* eslint-disable react/prop-types */
import React from "react";
import { Typography } from "@material-tailwind/react";
import Prediction from "./Prediction";
import PredictForm from "./PredictForm";
import { useParams } from "react-router-dom";

const Game = ({ games }) => {
  const params = useParams();
  const { gameId } = params;

  const game = games.find((game) => game.fixture.id === parseInt(gameId));
  console.log(game);
  return (
    <>
      <div className="container mx-auto px-6 py-2.5 max-w-lg mt-24 flex justify-center bg-white">
        <Typography className="font-medium">{game.teams.home.name}</Typography>
        <img className="w-8" src={game.teams.home.logo} />
        <Typography className="font-medium px-3"> - </Typography>
        <img className="w-8" src={game.teams.away.logo} />
        <Typography className="font-medium">{game.teams.away.name}</Typography>
      </div>
      <div className="grid grid-cols-4 gap-4 max-w-2xl mt-24 mx-auto">
        <Prediction />
      </div>
      <PredictForm />
    </>
  );
};

export default Game;
