export const fetchHouses = async () => {
    const response = await fetch('https://potterapi-fedeperin.vercel.app/en/houses'); 
    const data = await response.json();
    return data;
  };
  