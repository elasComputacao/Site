import React, { useState } from 'react';

import './styles.css'

interface Properties {
    title?: string;
    day?: string;
    month?: string;
    year?: string;
    description: string;
    time?: string;
    eventURL?: string;
    href?: string;
    local?: string;
    note?: boolean;
}
const EventCard:React.FC<Properties> = ({note, title, day, month, year, description, time, local, eventURL, href}) => {
  const [isOver, setIsOver] = useState(false);
  const dateTime = day != "" && month != "" && year != "" && time != "" ? `${day}/${month}/${year} - ${time}` : ""

  return (
    note ? 
    <div id="eventcard-component" onMouseOver={() => setIsOver(true)} onMouseOut={() => setIsOver(false)}>
    <div className="header-note">
      <div className="pin">
         <div className="pin-part">
         </div>
       </div>
      </div>
      <p className="note">
        {description}
      </p>
   </div>:
    <div id="eventcard-component" onMouseOver={() => setIsOver(true)} onMouseOut={() => setIsOver(false)}>
     <div className="header-note">
       <div className="pin">
          <div className="pin-part">
          </div>
        </div>
        <div className="title">
          <h3>{title}</h3>
          <div className="infos">
            <span>{dateTime}</span>
            <span>{local}</span>
          </div>
        </div>
       </div>
       <p>
         {description}
       </p>
      <div className={isOver ?  "more" : "more-hidden"}>
        {eventURL.trim() == "" ?
        <a className="block">Adicionar à agenda</a>
        :
        <a href={eventURL}>Adicionar à agenda</a>
        }

        {href.trim() == "" ?
        <a className="block">Saber mais</a>
        :
        <a href={href}>Saber mais</a>
        }
      </div> 
    </div>
  );
}

export default EventCard;
