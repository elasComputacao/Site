import React from 'react';

import './styles.css'

interface Properties {
    icon?: string;
    content: string;
}
const ContactCard:React.FC<Properties> = ({content, children}) => {
  return (
    <div id="contactcard-component">
      <div className="icon">
        {children}
      </div>
      <p>
        {content}
      </p>
    </div>
  );
}

export default ContactCard;
