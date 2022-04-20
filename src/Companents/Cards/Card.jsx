/* eslint-disable react/prop-types */
import React from 'react';
import './Cards.css';

function Card({ results, image }) {
  return (
    <div className="poki-card">
      <img src={image} alt="pika pika" />
      <h3>{results}</h3>
    </div>
  );
}

export default Card;
