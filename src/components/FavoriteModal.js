import React, { useContext } from 'react';
import styled from 'styled-components';


import { mediaMobile, } from '../globalStyles/mediaBreakPoints'
import { StateContext } from './stateContext';
import { FavouriteMobBtn } from './favouriteBtn';
import { Jokes } from './jokes'

export const FavouriteModal = props => {
  const { isActive, toggleActive } = useContext(StateContext);
  const { type, setFavouritesList, favouritesList, idList, setIdList } = props;

  return (
    isActive ? (
      <FavouriteMobile
        className="modalSubstrate"
        onClick={(e) => e.target.classList.value.includes("modalSubstrate") && toggleActive()}>
        <ModalContent>
          <FavouriteMobBtn />
          <Jokes
            jokesList={favouritesList !== 'null' ? favouritesList : null}
            type={"favourite"}
            setFavouritesList={setFavouritesList}
            idList={idList}
            setIdList={setIdList} />
        </ModalContent>
      </FavouriteMobile>) : null
  )
}

const FavouriteMobile = styled.div`
width: 100%;
height: 100%;
overflow-x: auto;
top:0;
left:0;
 position: fixed;
 background: rgba(0, 0, 0, 0.3);

`
const ModalContent = styled.div`
  height: 100%;
  position: absolute;
  top:0;
  right:0;
  background: #F8F8F8;
  padding: 40px; 
  display: flex;
  flex-direction: column;
  align-items: center;  
  overflow: auto;
  z-index:3;
  max-width: 70%;
  ${mediaMobile(` 
  padding: 20px;
  max-width:99%;
`)}
`