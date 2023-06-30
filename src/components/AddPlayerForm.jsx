import { useState } from 'react';

const AddPlayerForm = ({ onAddPlayer }) => {
  const [newPlayerName, setNewPlayerName] = useState('');

  const handleInputChange = (e) => {
    setNewPlayerName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPlayerName.trim() !== '') {
      onAddPlayer(newPlayerName);
      setNewPlayerName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='AddPlayerForm'>
      <input type="text" value={newPlayerName} onChange={handleInputChange} placeholder="Enter player name" />
      <button type="submit">Add Player</button>
    </form>
  );
};

export default AddPlayerForm;
