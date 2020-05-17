import React, { useState, createContext } from 'react';

export const StateContext = createContext({
  isActive: false,
  toggleActive: ()=>{}
});

export const ActionState = ({children}) =>{
  const [isActive, toggleIsActive] = useState(false);

  function toggleActive (){
    toggleIsActive(!isActive)
    !isActive ? document.body.style.overflow = "hidden" 
              : document.body.style.overflow = "auto"
  }
console.log(isActive)
  return (
    <StateContext.Provider value={{isActive, toggleActive}}>
        {children}
    </StateContext.Provider>
  )
}