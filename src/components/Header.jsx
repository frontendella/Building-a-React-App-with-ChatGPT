import Stopwatch from './Stopwatch';

const Header = ({ players }) => {
  return (
    <div className="Header">
      <h1>SCOREBOARD</h1>
      <h2>PLAYERS: {players.length}</h2>
      <Stopwatch />
    </div>
  );
};

export default Header;
