import React from 'react';

import './styles.css'

interface Properties {
    src: string;
    title: string;
}

const ItemContent:React.FC<Properties> = ({src, title}) => {
  return (
    <div id="itemcontent-component">
        <img src={src} alt={title}/>
        <span>{title}</span>
    </div>
  );
}

export default ItemContent;
