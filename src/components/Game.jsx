/* eslint-disable react/prop-types */
import React, {useState, useEffect} from "react";
import { Typography } from "@material-tailwind/react";
import Prediction from "./Prediction";
import PredictForm from "./PredictForm";
import { useParams } from "react-router-dom";
import { useAuth } from "./firebase";
//import { getScores } from "../scores";

const Game = ({ games }) => {
  const [predictions, setPredictions] = useState([]);
  const params = useParams();
  const { gameId } = params;
  const currentUser = useAuth();
  let logged = "";
  //const scores = getScores();

  if (currentUser) {
    logged = currentUser.email;
  }
  console.log(logged);

  useEffect(() => {
    const getPredictions = async () => {
      try {
        const response = await fetch(`https://mprdct.herokuapp.com/predictions/${gameId}`);
        const  gamePredictions = await response.json();
      
        if (gamePredictions.predictions.length > 0) {
          console.log(gamePredictions);
          setPredictions(gamePredictions.predictions);
        }
      } catch (error) {
        console.log("predictions fetch error", error);
      }
    };
    getPredictions();
  },[]);

  // eslint-disable-next-line no-unused-vars
  const addPrediction = ({home, away}) => {
    const sendPrediction = async () => {
      try {
        const response = await fetch(`https://mprdct.herokuapp.com/prediction/${gameId}`,{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "accept": "application/json"
          },
          body: JSON.stringify({
            home_name: game.teams.home.name,
            home_logo: game.teams.home.logo,
            away_name: game.teams.away.name,
            away_logo: game.teams.away.logo,
            home_score: home,
            away_score: away,
            user_email: logged
          })
        });
        const  newPrediction = await response.json();
        console.log(newPrediction);
        setPredictions(() => [...predictions, newPrediction]);
        
      
      } catch (error) {
        console.log("new prediction error", error);
      }
    };
    sendPrediction();
  };

  const placePredictions = predictions.map((score) => <Prediction key={score.id} score={score} />);

  const game = games.find((game) => game.fixture.id === parseInt(gameId));
  //console.log(game);
  return (
    <>
      <div className="container mx-auto pt-40 ">
        <div className="container mx-auto px-6 py-2.5 max-w-lg flex justify-center bg-white border-2 border-indigo-600">
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
        {placePredictions}
      </div>
      <PredictForm addPrediction = {addPrediction} />
    </>
  );
};

export default Game;
