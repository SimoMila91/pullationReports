import React, { useContext } from 'react';
import { Button } from 'semantic-ui-react';
import { Context } from '../context/Context';

const fixedFooter = {
  backgroundColor: 'rgb(43, 45, 58)',
  color: 'white',
  position: 'relative'
};

const socialPos = {
  position: 'absolute',
  right: 30,
  bottom: 30
};

export default function Footer() {
  const { isMobile } = useContext(Context);

  return (
      <div className="ui vertical footer segment" style={fixedFooter}>
        <div className="ui center aligned container">
          <h2><span>Pollution</span> <span>Reports</span></h2>
          <p>This project was developed for Start2Impact</p>
          <div style={!isMobile ? socialPos : {paddingBottom: 20}}>
           <a rel="noreferrer" target="_blank" href="https://www.facebook.com/AboutMe91"> <Button circular color='facebook' icon='facebook' /></a>
            <a rel="noreferrer" target="_blank" href="https://twitter.com/SimoMilanesio"><Button circular color='twitter' icon='twitter' /></a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/simone-milanesio-917753182/"><Button circular color='linkedin' icon='linkedin' /></a>
            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/simo_milanesio/"><Button circular color='red' icon='instagram' /></a>
          </div>
          <p>Built by Simone Milanesio - { new Date().getFullYear() }</p>
        </div>
      </div>
  )
}