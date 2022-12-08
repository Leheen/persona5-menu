import React from 'react';

import MenuLink from './MenuLink';

import skill from '../../assets/img/menu/skill.png';
import item from '../../assets/img/menu/item.png';
import equip from '../../assets/img/menu/equip.png';
import persona from '../../assets/img/menu/persona.png';
import cooperation from '../../assets/img/menu/cooperation.png';
import request from '../../assets/img/menu/request.png';
import status from '../../assets/img/menu/status.png';
import system from '../../assets/img/menu/system.png';

import './Menu.scss';

const Menu = () => (
    <div className="menu">
        <MenuLink>
            <img src={skill} alt="Skill" />
        </MenuLink>
        <MenuLink>
            <img src={item} alt="Item" />
        </MenuLink>
        <MenuLink>
            <img src={equip} alt="Equip" />
        </MenuLink>
        <MenuLink>
            <img src={persona} alt="Persona" />
        </MenuLink>
        <MenuLink>
            <img src={cooperation} alt="Cooperation" />
        </MenuLink>
        <MenuLink>
            <img src={request} alt="Request" />
        </MenuLink>
        <MenuLink>
            <img src={status} alt="Status" />
        </MenuLink>
        <MenuLink>
            <img src={system} alt="System" />
        </MenuLink>
    </div>
);

export default Menu;