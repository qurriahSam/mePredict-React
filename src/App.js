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
        "id": 849020,
        "referee": null,
        "timezone": "UTC",
        "date": "2022-06-27T10:00:00+00:00",
        "timestamp": 1656324000,
        "periods": {
          "first": null,
          "second": null
        },
        "venue": {
          "id": 3149,
          "name": "Bahir Dar Stadium",
          "city": "Bahir Dar"
        },
        "status": {
          "long": "Not Started",
          "short": "NS",
          "elapsed": null
        }
      },
      "league": {
        "id": 363,
        "name": "Premier League",
        "country": "Ethiopia",
        "logo": "https://media.api-sports.io/football/leagues/363.png",
        "flag": "https://media.api-sports.io/flags/et.svg",
        "season": 2021,
        "round": "Regular Season - 29"
      },
      "teams": {
        "home": {
          "id": 4117,
          "name": "Fasil Ketema",
          "logo": "https://media.api-sports.io/football/teams/4117.png",
          "winner": null
        },
        "away": {
          "id": 4116,
          "name": "Ethiopia Bunna",
          "logo": "https://media.api-sports.io/football/teams/4116.png",
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
        "id": 851955,
        "referee": null,
        "timezone": "UTC",
        "date": "2022-06-27T10:00:00+00:00",
        "timestamp": 1656324000,
        "periods": {
          "first": null,
          "second": null
        },
        "venue": {
          "id": 840,
          "name": "Stadion Kapten I Wayan Dipta",
          "city": "Gianyar"
        },
        "status": {
          "long": "Not Started",
          "short": "NS",
          "elapsed": null
        }
      },
      "league": {
        "id": 18,
        "name": "AFC Cup",
        "country": "World",
        "logo": "https://media.api-sports.io/football/leagues/18.png",
        "flag": null,
        "season": 2022,
        "round": "Group Stage - 2"
      },
      "teams": {
        "home": {
          "id": 5397,
          "name": "Visakha",
          "logo": "https://media.api-sports.io/football/teams/5397.png",
          "winner": null
        },
        "away": {
          "id": 2448,
          "name": "Bali United",
          "logo": "https://media.api-sports.io/football/teams/2448.png",
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
        "id": 851958,
        "referee": null,
        "timezone": "UTC",
        "date": "2022-06-27T10:00:00+00:00",
        "timestamp": 1656324000,
        "periods": {
          "first": null,
          "second": null
        },
        "venue": {
          "id": null,
          "name": "Sân vận động Thống Nhất",
          "city": "Ho Chi Minh City"
        },
        "status": {
          "long": "Not Started",
          "short": "NS",
          "elapsed": null
        }
      },
      "league": {
        "id": 18,
        "name": "AFC Cup",
        "country": "World",
        "logo": "https://media.api-sports.io/football/leagues/18.png",
        "flag": null,
        "season": 2022,
        "round": "Group Stage - 2"
      },
      "teams": {
        "home": {
          "id": 5394,
          "name": "Phnom Penh Crown",
          "logo": "https://media.api-sports.io/football/teams/5394.png",
          "winner": null
        },
        "away": {
          "id": 3681,
          "name": "Viettel",
          "logo": "https://media.api-sports.io/football/teams/3681.png",
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
        "id": 858675,
        "referee": null,
        "timezone": "UTC",
        "date": "2022-06-27T10:00:00+00:00",
        "timestamp": 1656324000,
        "periods": {
          "first": null,
          "second": null
        },
        "venue": {
          "id": null,
          "name": "Comilla Stadium",
          "city": "Comilla"
        },
        "status": {
          "long": "Not Started",
          "short": "NS",
          "elapsed": null
        }
      },
      "league": {
        "id": 398,
        "name": "Premier League",
        "country": "Bangladesh",
        "logo": "https://media.api-sports.io/football/leagues/398.png",
        "flag": "https://media.api-sports.io/flags/bd.svg",
        "season": 2022,
        "round": "Regular Season - 17"
      },
      "teams": {
        "home": {
          "id": 5014,
          "name": "Mohammedan Dhaka",
          "logo": "https://media.api-sports.io/football/teams/5014.png",
          "winner": null
        },
        "away": {
          "id": 5019,
          "name": "Sheikh Jamal",
          "logo": "https://media.api-sports.io/football/teams/5019.png",
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
        "id": 860910,
        "referee": null,
        "timezone": "UTC",
        "date": "2022-06-27T10:00:00+00:00",
        "timestamp": 1656324000,
        "periods": {
          "first": null,
          "second": null
        },
        "venue": {
          "id": 1559,
          "name": "Chang Arena",
          "city": "Buriram"
        },
        "status": {
          "long": "Not Started",
          "short": "NS",
          "elapsed": null
        }
      },
      "league": {
        "id": 18,
        "name": "AFC Cup",
        "country": "World",
        "logo": "https://media.api-sports.io/football/leagues/18.png",
        "flag": null,
        "season": 2022,
        "round": "Group Stage - 3"
      },
      "teams": {
        "home": {
          "id": 12543,
          "name": "Tainan City",
          "logo": "https://media.api-sports.io/football/teams/12543.png",
          "winner": null
        },
        "away": {
          "id": 4207,
          "name": "Warriors",
          "logo": "https://media.api-sports.io/football/teams/4207.png",
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
        "id": 864994,
        "referee": null,
        "timezone": "UTC",
        "date": "2022-06-27T10:00:00+00:00",
        "timestamp": 1656324000,
        "periods": {
          "first": null,
          "second": null
        },
        "venue": {
          "id": 4092,
          "name": "Changlimithang National Stadium",
          "city": "Thimphu"
        },
        "status": {
          "long": "Not Started",
          "short": "NS",
          "elapsed": null
        }
      },
      "league": {
        "id": 413,
        "name": "Super League",
        "country": "Bhutan",
        "logo": "https://media.api-sports.io/football/leagues/413.png",
        "flag": "https://media.api-sports.io/flags/bt.svg",
        "season": 2022,
        "round": "Regular Season - 4"
      },
      "teams": {
        "home": {
          "id": 5590,
          "name": "Tensung",
          "logo": "https://media.api-sports.io/football/teams/5590.png",
          "winner": null
        },
        "away": {
          "id": 5433,
          "name": "Bhutan U19",
          "logo": "https://media.api-sports.io/football/teams/5433.png",
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
        "id": 870141,
        "referee": null,
        "timezone": "UTC",
        "date": "2022-06-27T10:30:00+00:00",
        "timestamp": 1656325800,
        "periods": {
          "first": null,
          "second": null
        },
        "venue": {
          "id": null,
          "name": "TBC",
          "city": "TBC"
        },
        "status": {
          "long": "Not Started",
          "short": "NS",
          "elapsed": null
        }
      },
      "league": {
        "id": 667,
        "name": "Friendlies Clubs",
        "country": "World",
        "logo": "https://media.api-sports.io/football/leagues/667.png",
        "flag": null,
        "season": 2022,
        "round": "Club Friendlies 3"
      },
      "teams": {
        "home": {
          "id": 396,
          "name": "Sonderjyske",
          "logo": "https://media.api-sports.io/football/teams/396.png",
          "winner": null
        },
        "away": {
          "id": 2061,
          "name": "FC Fredericia",
          "logo": "https://media.api-sports.io/football/teams/2061.png",
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
        "id": 832749,
        "referee": null,
        "timezone": "UTC",
        "date": "2022-06-27T11:00:00+00:00",
        "timestamp": 1656327600,
        "periods": {
          "first": null,
          "second": null
        },
        "venue": {
          "id": 1203,
          "name": "Intility Arena",
          "city": "Oslo"
        },
        "status": {
          "long": "Not Started",
          "short": "NS",
          "elapsed": null
        }
      },
      "league": {
        "id": 474,
        "name": "2. Division - Group 2",
        "country": "Norway",
        "logo": "https://media.api-sports.io/football/leagues/474.png",
        "flag": "https://media.api-sports.io/flags/no.svg",
        "season": 2022,
        "round": "Group 2 - 12"
      },
      "teams": {
        "home": {
          "id": 10114,
          "name": "Vålerenga II",
          "logo": "https://media.api-sports.io/football/teams/10114.png",
          "winner": null
        },
        "away": {
          "id": 7040,
          "name": "Træff",
          "logo": "https://media.api-sports.io/football/teams/7040.png",
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
    
  ]);

  /*   const getCurrentDate = () => {
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
    <main className="min-h-screen bg-[#000C1D]">
      <MyNav />
      <Routes>
        <Route path="/" element={<Home games={games} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/:gameId" element={<Game games={games} />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </main>
  );
}

export default App;
