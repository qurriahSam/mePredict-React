/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Search from "./Search";
import Games from "./Games";
import { useAuth } from "./firebase";
import Filter from "./Filter";

const Home = ({ games }) => {
  const [search, setSearch] = useState("");
  const [league, setLeague] = useState("");
  const [country, setCountry] = useState("");
  const currentUser = useAuth();
  console.log(country);
 
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
    .filter((game) => {
      if (league === ""){
        return game;
      } else if (game.league.name.toLowerCase() === league.toLowerCase()) {
        return game;
      }
    })
    .filter((game) => {
      if (country === ""){
        return game;
      } else if (game.league.country.toLowerCase() === country.toLowerCase()) {
        console.log(game);
        return game;
      }
    })
    .map((game) => {
      console.log(game.league.name);
      return <Games game={game} key={game.fixture.id} />;
    });


  const loadGames =
    games.length === 0 ? (
      <div className="text-white text-center min-h-screen flex justify-center align-middle dark:text-slate-700">
        Loading Games
      </div>
    ) : (
      showGames
    );
  return (
    <div className="mt-16">
      {currentUser ? (
        <div className="text-white pt-3 dark:text-slate-700">logged in as: {currentUser.email} </div>
      ) : (
        <div className="text-white pt-3 dark:text-slate-700">Not logged</div>
      )}
      <Search search={search} setSearch={setSearch} />
      <div className="container mx-auto flex justify-center">
        <div className="p-4 fixed left-4">
          <Filter setLeague={setLeague} setCountry={setCountry}/>
        </div> 
        <div className="">{loadGames}</div>
      </div>

    </div>
  );
};

export default Home;
