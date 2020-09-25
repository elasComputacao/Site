import React, { useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import './styles.css'

interface Properties {
    icon?: string;
    content: string;
    copy?: boolean;
    href?:string;
}
const ContactCard:React.FC<Properties> = ({content, copy, href, children}) => {

  const [status, setStatus] = useState(false)

  function showStatus(val) {
    const element = window.document.getElementById("status");
    if (val && copy) {
      element.style.visibility = "visible";
    } else if (copy){
      element.style.visibility = "hidden";
      setStatus(false);
    }
  }

  return (
      <div onMouseOver={() => showStatus(true)}
      onMouseOut={() => showStatus(false)}>
        {
          copy ? 
          <CopyToClipboard text={content} 
            onCopy={() => setStatus(true)}>
            <div id="contactcard-component">
              <div className="icon">
                {children}
              </div>
              <p id="text-content">
                {content}
              <span id="status">
                {status ? "Copiado!" : "Clique para copiar!"}
              </span>
              </p>
            </div>
          </CopyToClipboard> :
          <a href={href} target="_blank" id="contactcard-component">
            <div className="icon">
              {children}
            </div>
            <p id="text-content">
              {content}
            </p>
          </a>
        }
      </div>
  );
}

export default ContactCard;
