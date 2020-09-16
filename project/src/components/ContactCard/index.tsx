import React from 'react';

import './styles.css'

interface Properties {
    icon?: string;
    content: string;
}
const ContactCard:React.FC<Properties> = ({content}) => {
  return (
    <div id="contactcard-component">
      <div className="icon">
        
      </div>
      <p>
        {content}
      </p>
    </div>
  );
}

export default ContactCard;
