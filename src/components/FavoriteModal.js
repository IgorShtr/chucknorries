import React, { useContext} from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import {mediaTablet, mediaMobile, mediaDesktop} from '../globalStyles/mediaBreakPoints'
import { StateContext, ActionState } from './stateContext';
import {FavouriteMobBtn} from './favouriteBtn';
import {Jokes} from './jokes'

export const FavouriteModal = props =>{
  const { isActive} = useContext(StateContext);
  const { type, setFavouritesList,favouritesList,idList, setIdList} = props;
  console.log(isActive)
return (
  isActive ? (
  <FavoriteMobile>
    <ModalContent>
    <FavouriteMobBtn/> 
      <Jokes jokesList={favouritesList!=='null' ? favouritesList : null}
              type={"favourite"} 
              setFavouritesList={setFavouritesList} 
              idList={idList} 
              setIdList={setIdList}/>
    </ModalContent>         
</FavoriteMobile>) : null
)
}

const FavoriteMobile = styled.div`
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
  ${mediaMobile(` 
  padding: 20px; 
  
`)}
`