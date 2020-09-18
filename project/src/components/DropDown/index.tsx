import React from 'react';
import {css} from 'emotion';
import { useMenuState, Menu, MenuItem, MenuButton } from "reakit/Menu";

import './styles.css'
import ItemContent from '../ItemContent';

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
  items: {
    src: string;
    subtitle: string;
  }[];
};

const DropDown:React.FC<Properties> = ({title, items}) => {
  const menu = useMenuState({ animated: 250 });
  return (
      <div id="dropdown-component">
          <MenuButton {...menu} className="button" >
            {title}
          </MenuButton>
          <Menu
            {...menu}
            aria-label={title}
            style={{ border: 0, background: "none", padding: 0 }}
          >
            <div className={styles}>
              {items.map((item) => {
                return(
                <MenuItem {...menu} className="menu-item">
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
