import React from 'react';
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <div>
      <h2>HomePage</h2>

      <Link to='/battles'>Battles</Link>
      <Link to='/colour'>Colours</Link>
      <Link to='/overlaps'>Overlaps</Link>
    </div>
  );
};

export default HomePage;
