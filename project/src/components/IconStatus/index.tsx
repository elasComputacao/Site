import React from 'react';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';

import './styles.css'

interface Properties {
    icon: string;
    status: string;
    statusText: string;
}

const IconStatus:React.FC<Properties> = ({icon, status, statusText}) => {
  return (
    <div id="iconstatus-component">
      <img className="icon" src={icon} alt="Icon"/>     
      <img src={status} className="status" alt="Status"/>
    </div>
  );
}

export default IconStatus;
