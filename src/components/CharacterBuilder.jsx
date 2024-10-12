import React, { useState } from 'react'
import '../styles/CharacterBuilder.css'

// Import builder section components
import HomeSection from './builderSections/HomeSection'
import ClassSection from './builderSections/ClassSection'
import BackgroundSection from './builderSections/BackgroundSection'
import SpeciesSection from './builderSections/SpeciesSection'
import AbilitiesSection from './builderSections/AbilitiesSection'
import EquipmentSection from './builderSections/EquipmentSection'
import ViewSheetSection from './builderSections/ViewSheetSection'

const sections = [
  { name: 'Home', component: HomeSection },
  { name: 'Class', component: ClassSection },
  { name: 'Background', component: BackgroundSection },
  { name: 'Species', component: SpeciesSection },
  { name: 'Abilities', component: AbilitiesSection },
  { name: 'Equipment', component: EquipmentSection },
  { name: 'View Sheet', component: ViewSheetSection },
];

const CharacterBuilder = ({ onClose, onSave }) => {
  const [activeSection, setActiveSection] = useState('Home')
  const [character, setCharacter] = useState({
    name: 'New Character',
    image: 'https://placekitten.com/150/150', // Default image
    // Add other character properties here
  })

  const updateCharacter = (updates) => {
    setCharacter(prev => ({ ...prev, ...updates }))
  }

  const renderSection = () => {
    const Section = sections.find(section => section.name === activeSection)?.component || HomeSection;
    return <Section character={character} updateCharacter={updateCharacter} />;
  }

  const handleSave = () => {
    onSave(character)
    onClose()
  }

  return (
    <div className="character-builder">
      <header className="builder-header">
        <h1>Character Builder</h1>
        <nav>
          {sections.map((section) => (
            <button
              key={section.name}
              onClick={() => setActiveSection(section.name)}
              className={activeSection === section.name ? 'active' : ''}
            >
              {section.name}
            </button>
          ))}
        </nav>
      </header>
      <main className="builder-content">
        {renderSection()}
      </main>
      <footer className="builder-footer">
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Close</button>
      </footer>
    </div>
  )
}

export default CharacterBuilder