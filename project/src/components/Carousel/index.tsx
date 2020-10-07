import React from 'react'
import ReactCardCarousel from 'react-card-carousel'

import './styles.css'

import ProjectCard from '../ProjectCard';

const Carousel = ({array}) => {
    
    return (
      <div id="carousel-component">
      <ReactCardCarousel disable_keydown={ true } autoplay={ true } autoplay_speed={ 5500 } className={"carousel-component"}>
        {
          array.slice(0, 4).map(
            element => {
              return(
                <ProjectCard 
                key={element}
                imageURL={element.imageURL} 
                title={element.title} 
                description={element.description}
                href={element.href}
                type={"normal"}
                color={element.color}
              />);
            }
          )
        }
      </ReactCardCarousel>
      </div>
    );
}

export default Carousel;
