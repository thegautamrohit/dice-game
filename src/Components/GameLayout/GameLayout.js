import React from "react";
import { useState } from "react";

function GameLayout({ players, rounds, setStartGame, setRounds, setPlayers }) {
  const [playersResponses, setPlayersResponses] = useState(
    Array(players)
      .fill(0)
      .map((item, index) => new Array(rounds).fill(null))
  ); //Creating an nested array structure for each player as per the no of rounds

  const [activePlayer, setActivePlayer] = useState(1);
  const [activeRound, setActiveRound] = useState(1);
  const [showWinner, setShowWinner] = useState({
    player: null,
    score: null,
  });

  function declareWinner() {
    let arr = playersResponses;
    let res = {
      winner: null,
      score: null,
    };

    //This for loop will iterate over the plyer responses and find the largest score and winner
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      let val = element?.reduce((acc, curr) => (acc = acc + curr), 0);
      if (res.score < val) {
        res = {
          winner: `Player ${i + 1}`,
          score: val,
        };
      }
    }

    setShowWinner({
      winner: res?.winner,
      score: res.score,
    });
    setActivePlayer(0);
    setActiveRound(0);
  }

  function checkActiveStatus() {
    //It will update the status of current player and the round accordingly

    if (activePlayer === players) {
      setActivePlayer(1);
      setActiveRound((prev) => prev + 1);
      if (activeRound === rounds && activePlayer === players) {
        declareWinner();
      }
    } else {
      setActivePlayer((prev) => prev + 1);
    }
  }

  const playHandler = () => {
    if (!activeRound && !activePlayer) {
      return;
    }

    let turnOutcome = Math.floor(Math.random() * 10);
    let arr = playersResponses;

    arr[activePlayer - 1][activeRound - 1] = turnOutcome;

    setPlayersResponses(arr);
    checkActiveStatus();
  };

  return (
    <div>
      <h4>Ongoing/Current Round: {activeRound} </h4>
      <button onClick={() => playHandler()}>Player {activePlayer} turn</button>

      <div className="score_container">
        <p>Player Outcomes:-</p>
        {playersResponses?.map((item, index) => (
          <div className="single_player_score" key={index}>
            <p>Player {index + 1}: </p>
            {item
              ?.filter((i) => i !== null)
              ?.map((el, i) => (
                <span key={i}>{el}</span>
              ))}
          </div>
        ))}
      </div>

      {showWinner?.winner && (
        <div>
          <p>
            <strong>WINNER:</strong> {showWinner?.winner}
          </p>
          <p>
            <strong> SCORE: </strong> {showWinner?.score}
          </p>

          <button
            onClick={() => {
              setStartGame(false);
              setRounds(0);
              setPlayers(0);
            }}
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
}

export default GameLayout;
