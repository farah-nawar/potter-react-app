import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchCharacters } from '../API/apiChar';
import '../css/SingleCharPage.css';

const SingleCharacterPage = () => {
  const { characterIndex } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch characters data
        const charactersData = await fetchCharacters();
        const selectedCharacter = charactersData.find(char => char.index === parseInt(characterIndex));
        setCharacter(selectedCharacter);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [characterIndex]);

  if (!character) return <div>Loading...</div>;

  return (
    <div className="character-page">
      <div className="character-container">
        <img src={character.image} alt={character.fullName} className="character-image" />
        <div className="character-details">
          <h1>{character.fullName}</h1>
          <p>Nickname: {character.nickname}</p>
          <p>Hogwarts House: {character.hogwartsHouse}</p>
          <p>Birthdate: {character.birthdate}</p>
          <p>Interpreted By: {character.interpretedBy}</p>
          {character.children.length > 0 ? (
            <div>
              <p>Children:</p>
              <ul>
                {character.children.map((child, idx) => (
                  <li key={idx}>{child}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p>{character.fullName} has no children.</p>
          )}
          <Link to={`/houses/${character.hogwartsHouse}`} className="btn btn-primary">
            View {character.hogwartsHouse} House Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCharacterPage;
