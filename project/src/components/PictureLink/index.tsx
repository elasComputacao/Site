import { Octokit } from '@octokit/rest';
import { binaryauthorization } from 'googleapis/build/src/apis/binaryauthorization';
import React, { useEffect, useState } from 'react';
import Tooltip from '../Tooltip';

import './styles.css'

interface Properties {
    pic: string;
    href: string;
    text: string;
};

const PictureLink:React.FC<Properties> = ({pic, href, text}) =>  {

  const [status, setStatus] = useState("");

  useEffect(() => {
    const octokit = new Octokit({
      auth: "",
    });

    octokit.users.getByUsername({
      username: text,
    }).then((user) => {
      const bio = user.data.bio;
      if (bio !== null) {
        setStatus(user.data.bio.split(" ")[0]);
      }
    })

  }, []) 

  return (
    <div id="picturelink-component">
        <Tooltip position="bottom" slim={true} text={`${text}`}>
            <a href={href} target="_blank">
              <img src={pic} alt={text}/>
            </a>
        </Tooltip>
        {
          status.length !== [...status].length ?
          <div className="emoji">
            {status}
          </div> :
          <></>
        }
    </div>
  );
}

export default PictureLink;
