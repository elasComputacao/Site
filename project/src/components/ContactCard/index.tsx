import React from 'react';

import './styles.css'

interface Properties {
    icon?: string;
    content: string;
    copy?: boolean;
}
const ContactCard:React.FC<Properties> = ({content, copy, children}) => {

  return (
    <div id="contactcard-component">
      <div className="icon">
        {children}
      </div>
      <p id="text-content">
        {content}
      </p>
    </div>
  );
}

export default ContactCard;
