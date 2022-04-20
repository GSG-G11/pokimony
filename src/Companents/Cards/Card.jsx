/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

import './Cards.css';

function Card({
  results,
  image,
  id,
  type,
}) {
  return (
    <Link to={`/pokemon/${id}`}>
      <div className={`poki-card ${type}`}>
        <img src={image} alt="pika pika" />
        <h3>{results}</h3>
      </div>
    </Link>
  );
}

export default Card;
