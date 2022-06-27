/* eslint-disable react/prop-types */
import React from "react";
import { Typography } from "@material-tailwind/react";
import Prediction from "./Prediction";
import PredictForm from "./PredictForm";
import { useParams } from "react-router-dom";
import { getScores } from "../scores";

const Game = ({ games }) => {
  const params = useParams();
  const { gameId } = params;
  const scores = getScores();

  const predictions = scores.map((score) => <Prediction key={score.id} score={score} />);

  const game = games.find((game) => game.fixture.id === parseInt(gameId));
  console.log(game);
  return (
    <>
      <div className="container mx-auto px-2 ">
        <div className="container mx-auto px-6 py-2.5 max-w-lg mt-24 flex justify-center bg-white border-2 border-indigo-600">
          <div className="flex">
            <Typography className="font-medium pr-4">{game.teams.home.name}</Typography>
            <img className="w-8" src={game.teams.home.logo} />
          </div>
          <Typography className="font-medium px-4"> - </Typography>
          <div className="flex">
            <img className="w-8" src={game.teams.away.logo} />
            <Typography className="font-medium pl-3">{game.teams.away.name}</Typography>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 max-w-xs sm:max-w-md px-3 md:grid-cols-4 gap-4 md:max-w-2xl mt-24 mx-auto">
        {predictions}
      </div>
      <PredictForm />
    </>
  );
};

export default Game;
