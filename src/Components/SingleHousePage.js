import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchHouse, fetchCharacters } from '../API/apiHouse';
import "../css/SingleHousePage.css"
const HousePage = () => {
  const { houseIndex } = useParams();
  const [house, setHouse] = useState(null);
  const [houseCharacters, setHouseCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const houseData = await fetchHouse(houseIndex);
        setHouse(houseData);
        const charactersData = await fetchCharacters();
        const filteredCharacters = charactersData.filter(character => character.house === houseData.house);
        setHouseCharacters(filteredCharacters);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [houseIndex]);

  if (!house) return <div>Loading...</div>;

  return (
    <div className="house-page">
      <div className="house-details">
        <h1>{house.house}</h1>
        <p>Founder: {house.founder}</p>
        <p>House Emoji: {house.emoji}</p>
        <p>House Colors: {house.colors && house.colors.join(', ')}</p>
        <p>House Animal: {house.animal}</p>
      </div>
      
      <div className="house-characters">
        <h2>Characters in {house.house}</h2>
        <ul>
          {houseCharacters.length > 0 ? (
            houseCharacters.map((character, index) => (
              <li key={index}>
                <p>{character.name}</p>
                <p>Nickname: {character.nickname}</p>
              </li>
            ))
          ) : (
            <p>No characters found for this house.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default HousePage;
