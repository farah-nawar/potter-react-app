export const fetchSpells = async () => {
    const response = await fetch('https://potterapi-fedeperin.vercel.app/en/spells'); 
    const data = await response.json();
    return data;
  };
  