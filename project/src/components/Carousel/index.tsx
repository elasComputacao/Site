import React, { useEffect, useState } from 'react';
import { ChevronsLeft, ChevronsRight } from 'react-feather';

import ProjectCard from '../ProjectCard'

import './styles.css'

interface Properties {
    array: {
      imageURL: string;
      title: string;
      description: string;
      href: string;
    }[];
}

const Carousel:React.FC<Properties> = ({array}) => {
  
  const [show, setShow] = useState([]);
  
  useEffect(() => {

    if (window.innerWidth > 1080) {
      setShow([0, 1, 2])
    } else {
      setShow([0])
    }
    console.log(show)
  }, [])

  function pass(direction:boolean) {
    if (direction) {
      var copy = [...show];
      for (let index = 0; index < show.length; index++) {
        if (copy[index] == array.length - 1) {
          copy[index] = 0;
        } else {
          copy[index]++;
        }
      }
      setShow(copy);
    } else if (!direction) {
      var copy = [...show];
      for (let index = 0; index < show.length; index++) {
        if (copy[index] == 0) {
          copy[index] = array.length - 1;  
        } else {
          copy[index]--;
        }
      }
      setShow(copy);
    }
    console.log(show)
  }
  
  return (
    <div id="carousel-component">
      <button className="pass-button" id="left" onClick={() => pass(false)}>
        <ChevronsLeft size={window.innerWidth > 1080 ? 64 : 24}/>
      </button>
      <div className="carousel-content">
        {show.map(element => {
          if (element < array.length && element >= 0) {
            return(
              <ProjectCard 
              key={element}
              imageURL={array[element].imageURL} 
              title={array[element].title} 
              description={array[element].description}
              href={array[element].href}
              spotlight={show.indexOf(element) == 1 ? true : false}
            />
            );
          }
        })}
      </div>
      <button className="pass-button" id="right" onClick={() => pass(true)}>
        <ChevronsRight size={window.innerWidth > 1080 ? 64 : 24}/>
      </button>
    </div>
  );
}

export default Carousel;
