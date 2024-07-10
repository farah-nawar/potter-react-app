export const fetchBooks = async () => {
    const response = await fetch('https://potterapi-fedeperin.vercel.app/en/books'); 
    const data = await response.json();
    return data;
  };
  