import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Image } from 'semantic-ui-react';
import logo from '../images/logo.jpg';
import { Context } from '../context/Context';
import MobileMenu from './MobileMenu';

const menuPos = {
  marginRight: '3%',
  paddingTop: '2%'
};

const menuPos2 = {
  margin: 'inherit',
  paddingTop: '2%'
};

const pos = {
  marginBottom: '5%'
};

export default function Navbar() {
const { isMobile } = useContext(Context);

  return (
    <>
    <div style={pos}>
    <div className="ui secondary menu" style={ isMobile ? menuPos2 : menuPos }>
      <Menu.Item>
        <Link to="/"><Image size='tiny' src={logo} /></Link>
      </Menu.Item>
      <Menu.Menu position="right">  
      {
        isMobile ? 
        <MobileMenu />
        :
        <>
        <Menu.Item>
          <Link to="/" className="active-item link-black item">
            Home
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link  to="/report" className="active-item link-black item">
            Send report
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link  to="/reports" className="active-item link-black item">
            All Reports
          </Link>
        </Menu.Item>
      </>
      }
      
    </Menu.Menu>
  </div>
  </div>
  </>
  );
}