import React from 'react'

const CharacterSheet = ({ character }) => {
  return (
    <div className="character-sheet">
      <h2>{character.name}</h2>
      <p>Race: {character.race}</p>
      <p>Class: {character.class}</p>
      {/* Add more character details here */}
    </div>
  )
}

export default CharacterSheet