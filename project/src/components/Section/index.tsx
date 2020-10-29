import React, { useEffect, useState } from 'react';
import { ChevronsDown, ChevronsUp } from 'react-feather';
import LinkButton from '../LinkButton';

import './styles.css'

interface Properties {
    title: string;
    className?: string;
    toggle?: boolean;
    subtitle?: string;
    link?:string;
}
const Section:React.FC<Properties> = ({title, children, className, toggle, subtitle, link}) => {
  
  const [hidden, setHidden] = useState(true);
  const [text, setText] = useState("");

  useEffect(() => {
    if (toggle) {
      handleToggle();
    }
  }, [])

  function handleToggle() {
    const section = window.document.getElementById(className);
    if (hidden) {
      if (window.innerWidth > 1080) {
        section.style.maxHeight = "416px";
      } else {
        section.style.maxHeight = "246px";
      }
    } else {
      section.style.maxHeight = "600vh";
    }
    setHidden(!hidden);
  }

  return (
    <div id="section-component" className={className}>
        <div id={title}></div>
          <h1>{title}</h1>
          <div className="children" id={className}>
              {children}
          </div>
          {toggle ? 
            <button className="toggle" 
            onClick={handleToggle}
            onMouseOver={() => {hidden ? setText("Mostrar menos") : setText("Mostrar mais")}}
            onMouseOut={() => setText("")}
            >
              {hidden ? <ChevronsUp className="icon"/> : <ChevronsDown className="icon"/>}
            </button> : <></>
          }
          {toggle ? 
            <span className="status">{text}</span> : <></>
          }
          {link ? <LinkButton title={subtitle} href={link}/> : <></>}
    </div>
  );
}

export default Section;
