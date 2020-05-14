import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import {StateContext, ActionState} from '../components/stateContext';

export const CategoriesList = () =>{
  const caterogies = [
    {
      name:"animal",
      isActive: false,
     
    },
    {
      name:"career",
      isActive: false
    },
    {
      name: "celebrity",
      isActive: false
    },
    {
      name: "dev",
      isActive: false
    },
    ];

 const [activeCategories, setActiveCategories] = useState(caterogies);



  
  const setCategoryAct = (e) => {
    console.log(e.target.parentNode.classList[2]);
    const names = activeCategories.map(({name})=>name);
    const newStateActivities = activeCategories.map(({name, isActive})=>(name===e.target.parentNode.classList[2]) && (isActive = !isActive));
    const newState =names.forEach(item=>Object({name: item})) 
    console.log(newStateActivities, names,newState)
  }
  
const categoriesVariants =caterogies.map((item)=> {
  const {name, isActive} = item;
  // console.log(isActive);
return(
  
      <CategoryButton key={uuidv4()} isActive={isActive} className={name} onClick={setCategoryAct}>
          <p>{name}</p>
      </CategoryButton>

)
});
return (
<Caterogies>
  {categoriesVariants}
</Caterogies>

)
}
const Caterogies = styled.div`
margin-top: 20px; 
margin-bottom: 10px; 
display: flex;
flex-wrap:wrap;
`
const CategoryButton = styled.div`
  margin-right:10px;
 padding: 6px 15px; 
 border:2px solid #F8F8F8;
 border-radius: 6px;
 background-color:${props=>props.isActive ? "#F8F8F8" : "none"  };
 
 p {
  margin: 0;
  font-weight: 500;
  font-size: 12px; 
  color:${props=>props.isActive ? "#333333" : " #ABABAB"  };
  letter-spacing: 2px;
  text-transform: uppercase;
 }
`
