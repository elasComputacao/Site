import React, { useEffect, useState } from 'react';
import { ChevronsDown, ChevronsUp } from 'react-feather';

import './styles.css'

interface Properties {
    title: string;
    className?: string;
    toggle?: boolean;
}
const Section:React.FC<Properties> = ({title, children, className, toggle}) => {
  
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (toggle) {
      handleToggle();
    }
  }, [])

  function handleToggle() {
    const section = window.document.getElementById(className);
    if (hidden) {
      if (window.innerWidth > 1080) {
        section.style.height = "38vh";
      } else {
        section.style.height = "20vh";
      }
    } else {
      section.style.height = "100vh";
    }
    setHidden(!hidden);
  }

  return (
    <div id="section-component" className={className}>
        <h1 id={title}>{title}</h1>
          <div className="children" id={className}>
              {children}
          </div>
          {toggle ? 
          <button onClick={handleToggle}>
            {hidden ? <ChevronsUp /> : <ChevronsDown />}
          </button> : <></>
          }
    </div>
  );
}

export default Section;
