import React from 'react'

const CharacterCard = ({ character, onView, onEdit, onCopy, onDelete }) => {
  return (
    <div className="character-card">
      <div className="character-info">
        <img src={character.image} alt={character.name} className="character-image" />
        <h3>{character.name}</h3>
      </div>
      <div className="character-actions">
        <button onClick={onView}>View</button>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onCopy}>Copy</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  )
}

export default CharacterCard