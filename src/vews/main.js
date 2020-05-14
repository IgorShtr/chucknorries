import React, { useState, useLayoutEffect, useContext } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { StateContext, ActionState } from '../components/stateContext';
import { CategoriesList } from '../components/categories'




export const MainView = () => {


  const [isCategoriesShown, setIsCategoriesShown] = useState(false)
 





  const handlerChoice = (e) => {
    console.log(e.target.value)
  }

  return (
    <Container>
      <h3>MSI 2020</h3>
      <h1>Hey!</h1>
      <p>Let’s try to find a joke for you:</p>
      <SearchType onChange={handlerChoice}>
        <p><input name="SearchMethod" type="radio" value="Random" /> Random</p>
        <p><input name="SearchMethod" type="radio" value="FromCaterogies" /> From caterogies</p>
        <CategoriesList />
        <p><input name="SearchMethod" type="radio" value="Search" /> Search</p>
      </SearchType>

    </Container>
  );
};

const Container = styled.div`
margin-left: 140px;
& h3 {
  margin-top: 40px;
}
& h1 {
  margin-top: 78px;
  margin-bottom: 0px;
}
& >p {
  margin: 0;  
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 10px; 
}
`
const SearchType = styled.form`
margin-top: 43px; 
& >p {
  font-size: 18px;
  font-weight: 400;

}
`
// const Caterogies = styled.div`
// margin-top: 20px; 
// margin-bottom: 10px; 
// display: flex;
// flex-wrap:wrap;
// `

// const CategoryButton = styled.div`
// margin-right:10px;
//  padding: 6px 15px; 
//  border:2px solid #F8F8F8;
//  border-radius: 6px;
//  background-color:${props=>props.isActive ? "#F8F8F8" : "none"  };
//  & p {
//   margin: 0;
//   font-weight: 500;
//   font-size: 12px;
//   color:${props=>props.isActive ? "#333333" : " #ABABAB"  };
//   letter-spacing: 2px;
//   text-transform: uppercase;
//  }
// `
