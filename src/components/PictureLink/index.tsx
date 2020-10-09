import { Octokit } from '@octokit/rest';
import React, { useEffect, useState } from 'react';
import GITHUBTOKEN from '../../GITHUB-TOKEN';
import Tooltip from '../Tooltip';


/**
 * {
    status.length !== [...status].length ?
    <div className="emoji">
      {status}
    </div> :
    <></>
  }
 */
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
      auth: GITHUBTOKEN,
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
    </div>
  );
}

export default PictureLink;
