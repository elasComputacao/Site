import React, { useState } from 'react';
import {css} from 'emotion';
import { useMenuState, Menu, MenuItem, MenuButton } from "reakit/Menu";
import ItemContent from '../ItemContent';
import { ChevronDown, ChevronUp } from 'react-feather';

import './styles.css'
import icons from '../../enums/icons';

const styles = css`
  display: flex;
  flex-direction: column;
  background: white;
  transition: opacity 250ms ease-in-out, transform 250ms ease-in-out;
  opacity: 0;
  transform-origin: top center;
  transform: scaleY(0);
  [data-enter] & {
    opacity: 1;
    transform: scaleY(1);
  }
`;

interface Properties {
  title: string;
  defaultImg: string;
  items: {
    src: string;
    subtitle: string;
  }[];
};

const DropDown:React.FC<Properties> = ({title, defaultImg, items}) => {
  const menu = useMenuState({ animated: 250 });

  const [click, setClick] = useState(false)
  const [select, setSelect] = useState(defaultImg);

  return (
      <div id="dropdown-component">
          <MenuButton {...menu} className="button" onClick={() => setClick(!click)}>
            <span>{title}</span>
            <img src={select} alt="Lang" className="selected"/>
            {click ? <ChevronUp className="icon"/> : <ChevronDown className="icon"/>}
          </MenuButton>
          <Menu
            {...menu}
            aria-label={title}
            style={{ border: 0, background: "none", padding: 0 }}
          >
            <div className={styles}>
              {items.map((item) => {
                return(
                <MenuItem {...menu} className="menu-item" onClick={() => setSelect(item.src)}>
                  <ItemContent
                    title={item.subtitle}
                    src={item.src}
                  />
                </MenuItem>);
              })}
            </div>
          </Menu>
      </div>
  );
}

export default DropDown;
