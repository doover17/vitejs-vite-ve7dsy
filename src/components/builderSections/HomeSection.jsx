import React from 'react';
import '../../styles/HomeSection.css';

const HomeSection = ({ character, updateCharacter }) => {
  const handleNameChange = (e) => {
    updateCharacter({ name: e.target.value });
  };

  return (
    <div className="home-section">
      <div className="character-name">
        <img
          src={character.image}
          alt="Character Avatar"
          className="character-avatar"
        />
        <input
          type="text"
          value={character.name}
          onChange={handleNameChange}
          placeholder="Character Name"
        />
      </div>

      <h2>Character Preferences</h2>
      {/* Add more character preferences here */}
    </div>
  );
};

export default HomeSection;