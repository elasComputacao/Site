import React, { useState } from 'react';

import './styles.css'

interface Properties {
    title: string;
    day: string;
    month: string;
    year: string;
    description: string;
    time: string;
}
const EventCard:React.FC<Properties> = ({title, day, month, year, description, time}) => {
  const [isOver, setIsOver] = useState(false);
  return (
    <div id="eventcard-component" onMouseOver={() => setIsOver(true)} onMouseOut={() => setIsOver(false)}>
      <h3>{title}</h3>
      <span>
        {day}/{month}/{year} às {time}
      </span>
      <p>
        {description}
      </p>
      <div className={isOver ? "buttons" : "buttons-hidden"}>
        <a target="_blank">Adicionar à agenda</a>
        <a target="_blank">Saber mais</a>
      </div> 
    </div>
  );
}

export default EventCard;
