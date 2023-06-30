import { useState } from 'react';
import Header from './components/Header';
import Player from './components/Player';
import AddPlayerForm from './components/AddPlayerForm';
import './App.css';

const App = () => {
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

  const handleAddPlayer = (name) => {
    setPlayers((prevPlayers) => [
      ...prevPlayers,
      { id: Date.now(), name: name, score: 0 },
    ]);
  };

  const getHighestScore = () => {
    let highestScore = 0;
    players.forEach((player) => {
      if (player.score > highestScore) {
        highestScore = player.score;
      }
    });
    return highestScore;
  };

  return (
    <div className="App">
      <Header players={players} />
      <div className="Players">
        {players.map((player) => (
          <Player
            key={player.id}
            player={player}
            onScoreChange={handleScoreChange}
            onDeletePlayer={handleDeletePlayer}
            isHighestScore={player.score === getHighestScore()}
          />
        ))}
      </div>
      <AddPlayerForm onAddPlayer={handleAddPlayer} />
    </div>
  );
};

export default App;
