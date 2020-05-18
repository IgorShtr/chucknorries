import React from 'react';
import styled from 'styled-components';

import { mediaTablet, mediaMobile } from '../globalStyles/mediaBreakPoints';
import { FavouriteMobBtn } from './favouriteBtn';

export const HeaderMobile = () => {
  return (
    <Header>
      <h3>MSI 2020</h3>
      <FavouriteMobBtn />
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
