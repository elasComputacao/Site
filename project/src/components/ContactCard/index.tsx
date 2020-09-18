import React, { useEffect, useState } from 'react';
import { Copy } from 'react-feather';

import './styles.css'

interface Properties {
    icon?: string;
    content: string;
    func: string;
}
const ContactCard:React.FC<Properties> = ({content, children}) => {

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
