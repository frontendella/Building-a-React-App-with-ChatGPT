import { useState } from 'react';
import './App.css';

function App() {
  const [players, setPlayers] = useState([
    { id: 1, name: 'Laura', score: 0 },
    { id: 2, name: 'Dustin', score: 0 },
    { id: 3, name: 'Rachel', score: 0 },
    { id: 4, name: 'Travis', score: 0 },
  ]);

  const handleScoreChange = (id, delta) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) => {
        if (player.id === id) {
          return { ...player, score: player.score + delta };
        }
        return player;
      })
    );
  };

  const handleDeletePlayer = (id) => {
    setPlayers((prevPlayers) => prevPlayers.filter((player) => player.id !== id));
  };

  return (
    <div className="App">
      <h1>SCOREBOARD</h1>
      <h2>PLAYERS: {players.length}</h2>
      {players.map((player) => (
        <div key={player.id} className="Player">
          <button className="DeleteButton" onClick={() => handleDeletePlayer(player.id)}>
            X
          </button>
          <div className="PlayerName">{player.name}</div>
          <div className="Score">
            <button onClick={() => handleScoreChange(player.id, -1)}>-</button>
            <span>{player.score}</span>
            <button onClick={() => handleScoreChange(player.id, 1)}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
