import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import ReactCardCarousel from 'react-card-carousel'
import ItemsCarousel from 'react-items-carousel'

import './styles.css'

import ProjectCard from '../ProjectCard';

const Carousel = ({array}) => {
    
    return (
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
    );
}

export default Carousel;
