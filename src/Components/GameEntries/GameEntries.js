import React from "react";
import "./GameEntries.css";

function GameEntries({ setStartGame, players, setPlayers, rounds, setRounds }) {
  const gameStartHandler = (e) => {
    e.preventDefault();

    if (players < 2) {
      window.alert("Number of players can not be less than 2");
      return;
    }
    if (rounds < 1) {
      window.alert("Number of rounds can not be less than 1");
      return;
    }

    setStartGame(true);
  };

  return (
    <div className="game__home__wrapper">
      <form action="submit">
        <div className="mono_input">
          <label htmlFor="">Number of Players</label>
          <input
            type="number"
            value={players}
            onChange={(e) => setPlayers(parseInt(e.target.value))}
          />
        </div>
        <div className="mono_input">
          <label htmlFor="">Number of Rounds</label>
          <input
            type="number"
            value={rounds}
            onChange={(e) => setRounds(parseInt(e.target.value))}
          />
        </div>
          <button onClick={(e) => gameStartHandler(e)}>
            Start Game
          </button>
      </form>
    </div>
  );
}

export default GameEntries;
