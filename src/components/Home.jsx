/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Search from "./Search";
import Games from "./Games";

import { Link } from "react-router-dom";

const Home = ({ games }) => {
  const [search, setSearch] = useState("");
  // fetch games
  // create state to save fetched games
  // loop through sending data as props to games component
  //const [games, setGames] = useState([]);

  /*   const getCurrentDate = () => {
    const todayCalender = new Date();
    const date = todayCalender.getDate().toString();
    const month = (() =>
      todayCalender.getMonth() + 1 < 10
        ? `0${(todayCalender.getMonth() + 1).toString()}`
        : todayCalender.getMonth() + 1)();
    const year = todayCalender.getFullYear().toString();

    return `${year}-${month}-${date}`;
  };
  const today = getCurrentDate(); */

  /*   useEffect(() => {
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

  const showGames = games
    .filter((game) => {
      if (search === "") {
        return game;
      } else if (game.teams.home.name.toLowerCase().includes(search.toLowerCase())) {
        return game;
      } else if (game.teams.away.name.toLowerCase().includes(search.toLowerCase())) {
        return game;
      }
    })
    .map((game) => (
      <Link to={`${game.fixture.id}`} key={game.fixture.id}>
        <Games game={game} />
      </Link>
    ));

  const loadGames = games.length === 0 ? <div>Loading</div> : showGames;

  return (
    <>
      <Search search={search} setSearch={setSearch} />
      {loadGames}
    </>
  );
};

export default Home;
