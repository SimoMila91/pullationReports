import React, { useState, createContext, useEffect } from 'react';

export const Context = createContext();

export const ContextProvider = props => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 720 ? true : false);
  const [large, setIsLarge] = useState(window.innerWidth > 1300 ? true : false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    if (window.innerWidth > 1300) {
      setIsLarge(true);
    } else {
      setIsLarge(false);
    }
  };

  useEffect( () => {
    window.addEventListener("resize", handleResize);
  })

  return (
    <Context.Provider
      value={{
        isMobile,
        large
      }}
    > 
    { props.children }
    </Context.Provider>
  )
}