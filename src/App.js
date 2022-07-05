/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import MyNav from "./components/MyNav";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Game from "./components/Game";
import Profile from "./components/Profile";
//import { todayGames } from "./data";

function App() {
  
  // eslint-disable-next-line no-unused-vars
  const [games, setGames] = useState([
    {
      "fixture": {
        "id": 882922,
        "referee": null,
        "timezone": "UTC",
        "date": "2022-07-05T00:00:00+00:00",
        "timestamp": 1656979200,
        "periods": {
          "first": null,
          "second": null
        },
        "venue": {
          "id": 7376,
          "name": "Stadion Dr. Antoin Maduro",
          "city": "Willemstad"
        },
        "status": {
          "long": "Not Started",
          "short": "NS",
          "elapsed": null
        }
      },
      "league": {
        "id": 642,
        "name": "Curaçao Sekshon Pagá",
        "country": "Curacao",
        "logo": "https://media.api-sports.io/football/leagues/642.png",
        "flag": "https://media.api-sports.io/flags/cw.svg",
        "season": 2021,
        "round": "Regular Season - 10"
      },
      "teams": {
        "home": {
          "id": 14021,
          "name": "SUBT",
          "logo": "https://media.api-sports.io/football/teams/14021.png",
          "winner": null
        },
        "away": {
          "id": 14022,
          "name": "Scherpenheuvel",
          "logo": "https://media.api-sports.io/football/teams/14022.png",
          "winner": null
        }
      },
      "goals": {
        "home": null,
        "away": null
      },
      "score": {
        "halftime": {
          "home": null,
          "away": null
        },
        "fulltime": {
          "home": null,
          "away": null
        },
        "extratime": {
          "home": null,
          "away": null
        },
        "penalty": {
          "home": null,
          "away": null
        }
      }
    },
    {
      "fixture": {
        "id": 882923,
        "referee": null,
        "timezone": "UTC",
        "date": "2022-07-05T00:00:00+00:00",
        "timestamp": 1656979200,
        "periods": {
          "first": null,
          "second": null
        },
        "venue": {
          "id": 8760,
          "name": "Stadion Ergilio Hato",
          "city": "Willemstad"
        },
        "status": {
          "long": "Not Started",
          "short": "NS",
          "elapsed": null
        }
      },
      "league": {
        "id": 642,
        "name": "Curaçao Sekshon Pagá",
        "country": "Curacao",
        "logo": "https://media.api-sports.io/football/leagues/642.png",
        "flag": "https://media.api-sports.io/flags/cw.svg",
        "season": 2021,
        "round": "Regular Season - 10"
      },
      "teams": {
        "home": {
          "id": 14024,
          "name": "Victory Boys",
          "logo": "https://media.api-sports.io/football/teams/14024.png",
          "winner": null
        },
        "away": {
          "id": 18794,
          "name": "Jong Colombia",
          "logo": "https://media.api-sports.io/football/teams/18794.png",
          "winner": null
        }
      },
      "goals": {
        "home": null,
        "away": null
      },
      "score": {
        "halftime": {
          "home": null,
          "away": null
        },
        "fulltime": {
          "home": null,
          "away": null
        },
        "extratime": {
          "home": null,
          "away": null
        },
        "penalty": {
          "home": null,
          "away": null
        }
      }
    },
    {
      "fixture": {
        "id": 882924,
        "referee": null,
        "timezone": "UTC",
        "date": "2022-07-05T00:00:00+00:00",
        "timestamp": 1656979200,
        "periods": {
          "first": null,
          "second": null
        },
        "venue": {
          "id": null,
          "name": "Football Federation Training Ground",
          "city": "Willemstad"
        },
        "status": {
          "long": "Not Started",
          "short": "NS",
          "elapsed": null
        }
      },
      "league": {
        "id": 642,
        "name": "Curaçao Sekshon Pagá",
        "country": "Curacao",
        "logo": "https://media.api-sports.io/football/leagues/642.png",
        "flag": "https://media.api-sports.io/flags/cw.svg",
        "season": 2021,
        "round": "Regular Season - 10"
      },
      "teams": {
        "home": {
          "id": 14018,
          "name": "Centro Dominguito",
          "logo": "https://media.api-sports.io/football/teams/14018.png",
          "winner": null
        },
        "away": {
          "id": 16456,
          "name": "SITHOC",
          "logo": "https://media.api-sports.io/football/teams/16456.png",
          "winner": null
        }
      },
      "goals": {
        "home": null,
        "away": null
      },
      "score": {
        "halftime": {
          "home": null,
          "away": null
        },
        "fulltime": {
          "home": null,
          "away": null
        },
        "extratime": {
          "home": null,
          "away": null
        },
        "penalty": {
          "home": null,
          "away": null
        }
      }
    },
    {
      "fixture": {
        "id": 842618,
        "referee": null,
        "timezone": "UTC",
        "date": "2022-07-05T09:00:00+00:00",
        "timestamp": 1657011600,
        "periods": {
          "first": null,
          "second": null
        },
        "venue": {
          "id": null,
          "name": null,
          "city": null
        },
        "status": {
          "long": "Not Started",
          "short": "NS",
          "elapsed": null
        }
      },
      "league": {
        "id": 562,
        "name": "Reserve League",
        "country": "Belarus",
        "logo": "https://media.api-sports.io/football/leagues/562.png",
        "flag": "https://media.api-sports.io/flags/by.svg",
        "season": 2022,
        "round": "Regular Season - 13"
      },
      "teams": {
        "home": {
          "id": 11648,
          "name": "FK Ruh Brest Res.",
          "logo": "https://media.api-sports.io/football/teams/11648.png",
          "winner": null
        },
        "away": {
          "id": 11651,
          "name": "Minsk Res.",
          "logo": "https://media.api-sports.io/football/teams/11651.png",
          "winner": null
        }
      },
      "goals": {
        "home": null,
        "away": null
      },
      "score": {
        "halftime": {
          "home": null,
          "away": null
        },
        "fulltime": {
          "home": null,
          "away": null
        },
        "extratime": {
          "home": null,
          "away": null
        },
        "penalty": {
          "home": null,
          "away": null
        }
      }
    },
    {
      "fixture": {
        "id": 822670,
        "referee": null,
        "timezone": "UTC",
        "date": "2022-07-05T09:30:00+00:00",
        "timestamp": 1657013400,
        "periods": {
          "first": null,
          "second": null
        },
        "venue": {
          "id": 2553,
          "name": "Seymour Shaw Park",
          "city": "Sydney"
        },
        "status": {
          "long": "Not Started",
          "short": "NS",
          "elapsed": null
        }
      },
      "league": {
        "id": 192,
        "name": "New South Wales NPL",
        "country": "Australia",
        "logo": "https://media.api-sports.io/football/leagues/192.png",
        "flag": "https://media.api-sports.io/flags/au.svg",
        "season": 2022,
        "round": "Regular Season - 18"
      },
      "teams": {
        "home": {
          "id": 3771,
          "name": "Sutherland Sharks",
          "logo": "https://media.api-sports.io/football/teams/3771.png",
          "winner": null
        },
        "away": {
          "id": 3764,
          "name": "APIA Leichhardt Tigers",
          "logo": "https://media.api-sports.io/football/teams/3764.png",
          "winner": null
        }
      },
      "goals": {
        "home": null,
        "away": null
      },
      "score": {
        "halftime": {
          "home": null,
          "away": null
        },
        "fulltime": {
          "home": null,
          "away": null
        },
        "extratime": {
          "home": null,
          "away": null
        },
        "penalty": {
          "home": null,
          "away": null
        }
      }
    }
  ]);
  const [lightMode, setLightMode] = useState(true);


  const getCurrentDate = () => {
    const todayCalender = new Date();
    const date = todayCalender.getDate().toString();
    const finalDate = date.length === 1 ? "0" + date : date;
    const month = (() =>
      todayCalender.getMonth() + 1 < 10
        ? `0${(todayCalender.getMonth() + 1).toString()}`
        : todayCalender.getMonth() + 1)();
    const year = todayCalender.getFullYear().toString();

    return `${year}-${month}-${finalDate}`;
  };
  const today = getCurrentDate();

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
        const todayGames = await response.json();
        setGames(todayGames.response);
      } catch (error) {
        alert("gameFetchError", error);
      }
    };
    getGames();
  }, []); */



  /* function PrivateRoute({ children }) {
    const auth = useAuth();
    return auth ? children : <Navigate to="/login" />;
} */
  return (
    <main className={lightMode ? "light" : "dark"}>
      <div className="min-h-screen bg-[#000C1D] dark:bg-white">
        <MyNav setLightMode={setLightMode} lightMode={lightMode} />
        <Routes>
          <Route path="/" element={<Home games={games} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/:gameId" element={<Game games={games} />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
