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
      if (league === "") {
        return game;
      } else if (game.league.name.toLowerCase() === league.toLowerCase()) {
        return game;
      }
    })
    .filter((game) => {
      if (country === "") {
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
    <div className="pt-16 h-screen">
      {currentUser ? (
        <div className="text-white pt-3 dark:text-slate-700">
          logged in as: {currentUser.email}{" "}
        </div>
      ) : (
        <div className="text-white pt-3 dark:text-slate-700">Not logged</div>
      )}
      <Search search={search} setSearch={setSearch} />
      <div className="container mx-auto">
        <div className="pb-3">
          <Filter setLeague={setLeague} setCountry={setCountry} />
        </div>
        <div className="overflow-y-auto h-[50vh] sm:h-[30rem] md:h-[58vh] w-fit mx-auto no-scrollbar">
          {loadGames}
        </div>
      </div>
    </div>
  );
};

export default Home;
