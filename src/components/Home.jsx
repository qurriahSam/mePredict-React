/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Search from "./Search";
import Games from "./Games";
import { useAuth } from "./firebase";
import { Link } from "react-router-dom";

const Home = ({ games }) => {
  const [search, setSearch] = useState("");
  const currentUser = useAuth();

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

  const loadGames =
    games.length === 0 ? (
      <div className="text-white text-center min-h-screen flex justify-center align-middle">
        Loading Games
      </div>
    ) : (
      showGames
    );
  return (
    <>
      {currentUser ? (
        <div className="text-white">logged in as: {currentUser.email} </div>
      ) : (
        <div className="text-white">Not logged</div>
      )}
      <Search search={search} setSearch={setSearch} />
      {loadGames}
    </>
  );
};

export default Home;
