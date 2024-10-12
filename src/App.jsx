import React, { useState, useEffect } from 'react'
import './App.css'
import CharacterCard from './components/CharacterCard'
import CharacterBuilder from './components/CharacterBuilder'

function App() {
  const [characters, setCharacters] = useState([])
  const [isBuilderOpen, setIsBuilderOpen] = useState(false)
  const [editingCharacter, setEditingCharacter] = useState(null)

  useEffect(() => {
    const savedCharacters = localStorage.getItem('characters')
    if (savedCharacters) {
      setCharacters(JSON.parse(savedCharacters))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('characters', JSON.stringify(characters))
  }, [characters])

  const handleCreateCharacter = () => {
    setEditingCharacter(null)
    setIsBuilderOpen(true)
  }

  const handleViewCharacter = (id) => {
    const character = characters.find(char => char.id === id)
    if (character) {
      setEditingCharacter(character)
      setIsBuilderOpen(true)
    }
  }

  const handleEditCharacter = (id) => {
    const character = characters.find(char => char.id === id)
    if (character) {
      setEditingCharacter(character)
      setIsBuilderOpen(true)
    }
  }

  const handleCopyCharacter = (id) => {
    const characterToCopy = characters.find(char => char.id === id)
    if (characterToCopy) {
      const copiedCharacter = {
        ...characterToCopy,
        id: Date.now(),
        name: `${characterToCopy.name} (Copy)`
      }
      setCharacters(prevCharacters => [...prevCharacters, copiedCharacter])
    }
  }

  const handleDeleteCharacter = (id) => {
    setCharacters(characters.filter(char => char.id !== id))
  }

  const handleSaveCharacter = (character) => {
    if (editingCharacter) {
      setCharacters(prevCharacters =>
        prevCharacters.map(char =>
          char.id === editingCharacter.id ? { ...char, ...character } : char
        )
      )
    } else {
      setCharacters(prevCharacters => [...prevCharacters, { ...character, id: Date.now() }])
    }
    setIsBuilderOpen(false)
    setEditingCharacter(null)
  }

  return (
    <div className="app">
      <h1>D&D Character Builder</h1>
      <div className="header">
        <h2>My Characters</h2>
        <button onClick={handleCreateCharacter}>Create A Character</button>
      </div>
      <hr />
      <div className="character-grid">
        {characters.map(character => (
          <CharacterCard
            key={character.id}
            character={character}
            onView={() => handleViewCharacter(character.id)}
            onEdit={() => handleEditCharacter(character.id)}
            onCopy={() => handleCopyCharacter(character.id)}
            onDelete={() => handleDeleteCharacter(character.id)}
          />
        ))}
      </div>
      {isBuilderOpen && (
        <CharacterBuilder
          onClose={() => setIsBuilderOpen(false)}
          onSave={handleSaveCharacter}
          character={editingCharacter}
        />
      )}
    </div>
  )
}

export default App