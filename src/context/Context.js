import React, { useState, createContext, useEffect } from 'react';

export const Context = createContext();

export const ContextProvider = props => {
  const [isMobile, setIsMobile] = useState();

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
    <Context.Provider
      value={{
        isMobile
      }}
    > 
    { props.children }
    </Context.Provider>
  )
}