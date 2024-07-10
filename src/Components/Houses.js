import React, { useEffect, useState } from 'react';
import './Houses.css';
import { Link } from 'react-router-dom';
import { fetchHouses } from '../API/apiHouse';

const Houses = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const getHouses = async () => {
      const data = await fetchHouses();
      setHouses(data);
    };
    getHouses();
  }, []);
  return (
    <div className="houses-background">
      <h1 className="houses-title">Houses</h1>
      <div className="houses-content">
        <div className="card-grid">
          {houses.map((house, index) => (
            <div key={index} className="card" style={{ backgroundColor: house.colors[0] }}>
              <div className="card-body">
                <h5 className="card-title">{house.house}</h5>
                <p className="card-text">Founder: {house.founder}</p>
                <p className="card-text">Animal: {house.animal}</p>               
                <Link to={`/houses/characters/${index}`} className="btn btn-primary">
                  View Characters
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Houses;
