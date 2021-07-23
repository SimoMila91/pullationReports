import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
const [input, setInput] = useState(0);
const [isMobile, setIsMobile] = useState(false);

const handleResize = () => {
  if (window.innerWidth < 720) {
    setIsMobile(true);
  } else {
    setIsMobile(false);
  }
};

useEffect( () => {
  window.addEventListener("resize", handleResize);
})

  return (
    <div style={pos}>
    <div className="ui secondary menu" style={ isMobile ? menuPos2 : menuPos }>
      <div className="menu right" style={isMobile ?  {margin: 'auto'} : null }>  
        <Link to="/" onClick={e => setInput(parseInt(e.target.getAttribute('value')))} className={ input === 0 ? 'item active' : 'item' } value={0}>
          Home
        </Link>
        <Link  to="/report" onClick={e => setInput(parseInt(e.target.getAttribute('value')))} className={ input === 1 ? 'item active' : 'item' } value={1}>
          Send report
        </Link>
        <Link  to="/reports" onClick={e => setInput(parseInt(e.target.getAttribute('value')))} className={ input === 2 ? 'item active' : 'item' } value={2}>
          All Reports
        </Link>
    </div>
  </div>
  </div>
  );
}