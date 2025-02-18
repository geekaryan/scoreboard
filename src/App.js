import { useState } from "react";
import "./App.css";

const App = () => {
  const [team1name, setTeam1name] = useState("");
  const [team2name, setTeam2name] = useState("");
  const [team1score, setTeam1score] = useState(0);
  const [team2score, setTeam2score] = useState(0);
  const [team1caughtscore, setTeam1caughtscore] = useState(0);
  const [team2caughtscore, setTeam2caughtscore] = useState(0);
  const [start, setStart] = useState(false);

  const team1handler = () => {
    setTeam1score(team1score + 1);
  };

  const team2handler = () => {
    setTeam2score(team2score + 1);
  };

  const team1caughtscorehandler = () => {
    setTeam1caughtscore(team1caughtscore + 1);
  };

  const team2caughtscorehandler = () => {
    setTeam2caughtscore(team2caughtscore + 1);
  };

  const startHandler = () => {
    if (team1name.length > 0 && team2name.length > 0) {
      setStart(true);
    } else {
      alert("Enter both team name");
    }
  };

  return (
    <div className="container">
      <h2>Team Scoreboard</h2>
      <div className="input-section">
        <input
          type="text"
          value={team1name}
          onChange={(e) => setTeam1name(e.target.value)}
          placeholder="Enter first team name"
        />
        <input
          type="text"
          value={team2name}
          onChange={(e) => setTeam2name(e.target.value)}
          placeholder="Enter second team name"
        />
      </div>
      <div className="start-btn">
        <button onClick={startHandler}>Start Game</button>
      </div>
      {start && (
        <table className="score-table">
          <thead>
            <tr>
              <th>{team1name}</th>
              <th>{team2name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="score">{team1score}</td>
              <td className="score">{team2score}</td>
            </tr>
            <tr>
              <td>
                <button onClick={team1handler}>
                  Increase {team1name} Score
                </button>
              </td>
              <td>
                <button onClick={team2handler}>
                  Increase {team2name} Score
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      )}
      {start && (
        <table className="score-table">
          <thead>
            <tr>
              <th>{team1name} Caught Score</th>
              <th>{team2name} Caught Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="score">{team1caughtscore}</td>
              <td className="score">{team2caughtscore}</td>
            </tr>
            <tr>
              <td>
                <button onClick={team1caughtscorehandler}>
                  Increase {team1name} Score
                </button>
              </td>
              <td>
                <button onClick={team2caughtscorehandler}>
                  Increase {team2name} Score
                </button>
              </td>
            </tr>
            <tr>
              <td>
                {team1name} Total Score: {team1score + team1caughtscore}
              </td>
              <td>
                {team2name} Total Score: {team2score + team2caughtscore}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
