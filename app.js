import React from "react";
import "./Info.css";

//https://jsonmock.hackerrank.com/api/football_matches?year=2011&team1=Barcelona&page=1

const Info = ({ data, team }) => {
  let id = 0;

  function calcTotal() {
    let team1Goals = 0;
    if (data && team) {
      for (const score of data) {
        if (score.team1.toLowerCase() === team) {
          team1Goals += Number(score.team1goals);
        } else if (score.team2.toLowerCase() === team) {
          team1Goals += Number(score.team2goals);
        }
      }
    }
    return team1Goals;
  }

  return (
    <div className="info-text">
      <h1>{`${calcTotal()} goals scored by ${team.toUpperCase()}`}</h1>
      <ul>
        {data &&
          data.map((game) => (
            <li key={id++}>
              {game.team1} {game.team1goals} - {game.team2goals} {game.team2}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Info;
