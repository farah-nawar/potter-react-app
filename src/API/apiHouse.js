// apiHouse.js

export const fetchHouses = async () => {
  const response = await fetch('https://potterapi-fedeperin.vercel.app/en/houses');
  const data = await response.json();
  return data;
};

export const fetchHouse = async (houseIndex) => {
  const houses = await fetchHouses();
  if (houseIndex >= 0 && houseIndex < houses.length) {
    return houses[houseIndex];
  } else {
    throw new Error(`House with index ${houseIndex} not found.`);
  }
};

export const fetchCharacters = async () => {
  const response = await fetch('https://potterapi-fedeperin.vercel.app/en/characters');
  const data = await response.json();
  return data;
};
