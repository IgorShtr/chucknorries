import React, { useState, useLayoutEffect, useEffect } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export const CategoriesList = props => {
  const {setChosenCategory} = props
  const [categoriesList, setCategoriesList] = useState([]);  
  const [activeCategories, setActiveCategories] = useState([]);
  const caterogiesInishState =[];  
  
  useLayoutEffect(() => {   
    const url = `https://api.chucknorris.io/jokes/categories`
    axios
      .get(url)
      .then(result => {
        setCategoriesList(result.data);        
      })
      .catch(err => {
        console.log(err);
      });

  }, [])

  categoriesList.length && categoriesList.forEach((item, index)=> {
    const stateItem ={
      name:item,
      isActive: (index===0) ? true : false,
    }    
     caterogiesInishState.push(stateItem);  
  });

    
 useEffect(()=>{
  setActiveCategories(caterogiesInishState);  
 }, [categoriesList]) 


  const setCategoryAct = (e) => {  
    const names = activeCategories.map(({ name }) => name);
    const newStateActivities = activeCategories.map(({ name, isActive }) => (name === e.target.parentNode.classList[2]) && (isActive = !isActive));
  
    const newState = [];
    names.forEach((item, index) => {
      const newItem = {
        name: item,
        isActive: newStateActivities[index]
      }
      newState.push(newItem)   
     
    });    
     setActiveCategories(newState)    
  }

  const categoriesVariants = activeCategories.map((item) => {
    const { name, isActive } = item; 
    isActive && setChosenCategory(name)
    return (
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
width: inherit;
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
 background-color:${props => props.isActive ? "#F8F8F8" : "none"};
 cursor: pointer;
 p {
  margin: 0;
  font-weight: 500;
  font-size: 12px; 
  color:${props => props.isActive ? "#333333" : " #ABABAB"};
  letter-spacing: 2px;
  text-transform: uppercase;
 }
`
