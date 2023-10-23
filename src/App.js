import React, { useState } from "react";
import "./App.css";
import GameEntries from "./Components/GameEntries/GameEntries";
import GameLayout from "./Components/GameLayout/GameLayout";

function App() {
  const [startGame, setStartGame] = useState(false);
  const [players, setPlayers] = useState(0);
  const [rounds, setRounds] = useState(0);

  return (
    <div className="App">
      <h1>DICE GAME</h1>

      {!startGame ? (
        <>
          <GameEntries
            setStartGame={setStartGame}
            players={players}
            setPlayers={setPlayers}
            rounds={rounds}
            setRounds={setRounds}
          />
        </>
      ) : (
        <>
          <GameLayout
            players={players}
            setPlayers={setPlayers}
            rounds={rounds}
            setRounds={setRounds}
            setStartGame={setStartGame}
          />
        </>
      )}
    </div>
  );
}

export default App;
