import React, { useContext } from 'react';
import styled from 'styled-components';

import { StateContext } from './stateContext';

export const FavouriteMobBtn = () => {

  const { isActive, toggleActive } = useContext(StateContext);
  console.log(isActive)
  return (

    <HeaderFavourite>
      <OpenFavourite
        className={isActive ? "active" : ""}
        onClick={() => toggleActive()}>
        <Bar />
        <Bar />
      </OpenFavourite>
      <p>Favourite</p>
    </HeaderFavourite>

  )
}

const HeaderFavourite = styled.div`
display:flex;
align-self: flex-end;
& p{
  margin:0;
  font-weight: 500;
  font-size: 20px;
  color: #ABABAB;

}
`
const OpenFavourite = styled.div`
width: 28px;
height: 28px;
background: #333333;
border-radius: 50%;
display: flex;
flex-direction: column;
align-items: center;
cursor: pointer;
justify-content: center;
align-items: center;
margin-right: 10px;
transition: all 0.3 ease-in-out;
span {
  transition: all 0.3s ease-in-out;
}

&.active {
  span:first-child {
    transform: rotate(45deg) translate(1px, 2px);
  }
  span:last-child {
    transform: rotate(-45deg) translate(2px,-3px);
  }
}
`
const Bar = styled.span`
width: 14px;
height: 2px;
margin: 2px;
background: #FFFFFF;
border-radius: 2px;
`