import React from 'react';
import {  Dropdown } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default function MobileMenu() {

  return (
    <div>
      <Dropdown
        floating
        labeled
        button
        icon="bars"
        className="item dropdown-menu"
        size="small"
      >
        <Dropdown.Menu style={{ fontSize: 15}}>
          <Dropdown.Header content="Menu" />
          <Dropdown.Item as={NavLink} to="/" text="Home" />
          <Dropdown.Item as={NavLink} to="/report" text="Send Report" />
          <Dropdown.Item as={NavLink} to="/reports" text="Reports" />
        </Dropdown.Menu>

      </Dropdown>
    </div>
  )
}