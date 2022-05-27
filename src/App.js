import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MyNav from "./components/MyNav";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Game from "./components/Game";
import { todayGames } from "./data";

function App() {
  const games = todayGames();
  /*   const [games, setGames] = useState([]);
  console.log(games.response);
  console.log(games);

  const getCurrentDate = () => {
    const todayCalender = new Date();
    const date = todayCalender.getDate().toString();
    const month = (() =>
      todayCalender.getMonth() + 1 < 10
        ? `0${(todayCalender.getMonth() + 1).toString()}`
        : todayCalender.getMonth() + 1)();
    const year = todayCalender.getFullYear().toString();

    return `${year}-${month}-${date}`;
  };
  const today = getCurrentDate();

  useEffect(() => {
    const getGames = async () => {
      try {
        const response = await fetch(
          `https://v3.football.api-sports.io/fixtures?date=${today}&status=NS`,
          {
            headers: {
              "x-rapidapi-key": "44db5dfec8b39bbd7f73002a79d90313",
              "x-rapidapi-host": "v3.football.api-sports.io",
            },
          }
        );
        const games = await response.json();
        setGames(games);
      } catch (error) {
        alert("gameFetchError", error);
      }
    };
    getGames();
  }, []); */

  return (
    <main className="min-h-screen bg-[#000C1D]">
      <MyNav />
      <Routes>
        <Route path="/" element={<Home games={games} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/:gameId" element={<Game games={games} />} />
      </Routes>
    </main>
  );
}

export default App;
