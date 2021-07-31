import React from 'react';

const fixedFooter = {
  position: 'absolute',
  bottom: 0,
  width: '100%'
};

export default function Footer() {

  return (
    <div className="ui vertical footer segment">
      <div className="ui center aligned container">
        <p>Built by Simone Milanesio - { new Date().getFullYear() }</p>
      </div>
    </div>
  )
}