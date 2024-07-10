// src/api.js
export const fetchCharacters = async () => {
    const response = await fetch('https://potterapi-fedeperin.vercel.app/en/characters'); 
    const data = await response.json();
    return data;
  };
  