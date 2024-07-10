import React, { useEffect, useState } from 'react';
import '../css/Spells.css';
import { fetchSpells } from '../API/apiSpell';

const Spells = () => {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    const getSpells = async () => {
      const data = await fetchSpells();
      setSpells(data);
    };
    getSpells();
  }, []);

  return (
    <div className="spells-background">
      <h1 className="spells-title">Spells</h1>
      <div className="spells-content">
        <div className="card-grid">
          {spells.map((spell, index) => (
            <div key={index} className="card">
              <div className="card-body">
                <h5 className="card-title">{spell.spell}</h5>
                <p className="card-text">Use: {spell.use}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Spells;
