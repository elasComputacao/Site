import React, { useState } from 'react';

import './styles.css'

interface Properties {
    title: string;
    day: string;
    month: string;
    year: string;
    description: string;
}
const EventCard:React.FC<Properties> = ({title, day, month, year, description}) => {
  return (
    <div id="eventcard-component">
      <h3>{title}</h3>
      <span>
        {day}/{month}/{year}
      </span>
      <p>
        {description}
      </p>
      <div className="buttons">
        <a>Adicionar à agenda</a>
        <a>Saber mais</a>
      </div>
    </div>
  );
}

export default EventCard;
