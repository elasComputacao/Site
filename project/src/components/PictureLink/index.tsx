import React, { useEffect, useState } from 'react';
import Tooltip from '../Tooltip';

import './styles.css'

interface Properties {
    pic: string;
    href: string;
    text: string;
};

const PictureLink:React.FC<Properties> = ({pic, href, text}) =>  {

  const [display, setDisplay] = useState(window.innerWidth);

  return (
    <div id="picturelink-component">
        <Tooltip position="bottom" slim={true} text={text}>
            <a href={href} target="_blank">
                <img src={pic} alt={text}/>
            </a>
        </Tooltip>
    </div>
  );
}

export default PictureLink;
