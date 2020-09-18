import React from 'react';

import Tooltip from '../Tooltip';

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
      <Tooltip position="bottom" slim={false} text={statusText}>
        <img src={status}  alt="Status" className="status"/>
      </Tooltip>
    </div>
  );
}

export default IconStatus;
