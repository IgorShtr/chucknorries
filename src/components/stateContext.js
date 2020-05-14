import React, { useState, createContext } from 'react';

export const StateContext = createContext({
  isActive: false,
  toggleActive: ()=>{}
});

export const ActionState = ({children}) =>{
  const [isActive, toggleIsActive] = useState(false);

  function toggleActive (){
    toggleIsActive(!isActive)
  }

  return (
    <StateContext.Provider value={{isActive, toggleActive}}>
        {children}
    </StateContext.Provider>
  )
}