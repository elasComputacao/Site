import React from 'react';

import './styles.css'

interface Properties {
    title: string;
    className?: string;
}
const Section:React.FC<Properties> = ({title, children, className}) => {
  return (
    <div id="section-component" className={className}>
        <h1 id={title}>{title}</h1>
        <div className="children">
            {children}
        </div>
    </div>
  );
}

export default Section;
