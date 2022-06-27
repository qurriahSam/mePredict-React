/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Search from "./Search";
import Games from "./Games";
import { useAuth } from "./firebase";

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
    .map((game) => <Games game={game} key={game.fixture.id} />);

  const loadGames =
    games.length === 0 ? (
      <div className="text-white text-center min-h-screen flex justify-center align-middle">
        Loading Games
      </div>
    ) : (
      showGames
    );
  return (
    <div className="p-12">
      {currentUser ? (
        <div className="text-white">logged in as: {currentUser.email} </div>
      ) : (
        <div className="text-white">Not logged</div>
      )}
      <Search search={search} setSearch={setSearch} />
      <div className="container mx-auto px-2">{loadGames}</div>
    </div>
  );
};

export default Home;
