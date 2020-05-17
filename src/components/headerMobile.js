import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

import { StateContext  } from '../components/stateContext';
import {mediaTablet, mediaMobile, mediaDesktop} from '../globalStyles/mediaBreakPoints';
import {FavouriteMobBtn} from './favouriteBtn';

 export const HeaderMobile = ()=>{

  const { isActive, toggleActive } = useContext(StateContext);
  console.log(isActive)
  return (
    <Header>
    <h3>MSI 2020</h3>
    <FavouriteMobBtn/>   
    </Header>
  )
}

const Header = styled.div`
display: none;
${mediaTablet(`
display: flex;
justify-content: space-between;
& h3 {   
  width: 100%;
  margin:0;
}
`)}
${mediaMobile(`
display: flex;
justify-content: space-around;
& h3 {   
  width: 100%;
  margin:0;
}
`)}
`
