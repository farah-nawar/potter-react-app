import React, { useEffect, useState } from 'react';
import './Characters.css';
import { fetchCharacters } from '../API/apiChar';
import { useNavigate } from 'react-router-dom';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const getCharacters = async () => {
      const data = await fetchCharacters();
      setCharacters(data);
    };
    getCharacters();
  }, []);

  const filteredCharacters = characters.filter(character => 
    character.nickname?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = (index) => {
    navigate(`/characters/${index}`);
  };

  const handleHouseClick = (houseIndex) => {
    navigate(`/houses/${houseIndex}`);
  };

  return (
    <div className="characters-background">
      <h1 className="characters-title">Characters</h1>
      <div className="search-bar">
        <input 
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="characters-content">
        {filteredCharacters.length > 0 ? (
          <div className="card-grid">
            {filteredCharacters.map((character, index) => (
              <div 
                key={index} 
                className="card" 
                onClick={() => handleCardClick(index)}
              >
                {character.image && <img src={character.image} className="card-img-top" alt={character.name} />}
                <div className="card-body">
                  <h5 className="card-title">{character.name}</h5>
                  {character.nickname && <p className="card-text">Nickname: {character.nickname}</p>}
                  {character.hogwartsHouse && (
                    <p 
                      className="card-text house-link" 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleHouseClick(character.hogwartsHouse);
                      }}
                    >
                      House: {character.hogwartsHouse}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No Character found with this Nickname: {searchTerm}</p>
        )}
      </div>
    </div>
  );
};

export default Characters;
