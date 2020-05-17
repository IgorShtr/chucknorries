import React, { useState, useEffect, useContext} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import {mediaTablet, mediaMobile, mediaDesktop} from '../globalStyles/mediaBreakPoints'
import { StateContext, ActionState } from '../components/stateContext';
import {HeaderMobile} from '../components/headerMobile'
import { CategoriesList } from '../components/categories';
import {Jokes} from '../components/jokes';
// import {FavouriteMobBtn} from '../components/favouriteBtn';
import {FavouriteModal} from '../components/FavoriteModal'




export const MainView = (props) => {
  const {isActive} = useContext(StateContext);

  const [jokesList, setJokesList] = useState([]);
  const [isCategoriesShown, setIsCategoriesShown] = useState(false);
  const [isTextsearchShown, setIsTextsearchShown] = useState(false);
  const [textInputValue, setTextInputValue] = useState("");
  const [chosenCategory, setChosenCategory] = useState();
  const [favouritesList, setFavouritesList] = useState([]);
  const [idList, setIdList] = useState([]);
  
  console.log(props)

const getJokeList = ()=>{
  const form = document.querySelectorAll("input");
  let actInput = null;
  form.forEach((item)=>item.checked && (actInput =item.value));  
  const query = ()=>{
    switch(actInput){
    case "FromCaterogies":{
      return (`/random?category=${chosenCategory}`)
    }
    case "Search":{

      return (`/search?query=${textInputValue}`)
    }
    default:{
      return (`/random`)
    }      
  }
};


  const baseUrl = `https://api.chucknorris.io/jokes`  
  axios
        .get(baseUrl+query())
        .then(result => {
          console.log(result)
          for (let key in result.data){
            if (key ==="result") {
            setJokesList(result.data.result);                       
            }
            else {
             setJokesList([result.data]);
            } 
           }
          
        })
        .catch(err => {
          console.log(err);
        });  
};

const getInputQuery = (e) =>{
  e.preventDefault();
  setTextInputValue(e.target.value);
};


  const handlerChoice = (e) => {
    switch(e.target.value){
      case "FromCaterogies":{
        return (setIsCategoriesShown(true), setIsTextsearchShown(false))
      }
      case "Search":{
        return (setIsTextsearchShown(true), setIsCategoriesShown(false))
      }
      case "Random":{
        return (setIsTextsearchShown(false), setIsCategoriesShown(false))
      }
      default:{
        return (setIsCategoriesShown(false))
      }      
    } 
  };
  useEffect(()=>{
    setFavouritesList(JSON.parse(localStorage.getItem("jokes")))
  }, [])  

  return (
    <Container> 
      <ActionState>     
      <SearchSection>
          {/* <ActionState> */}
            <HeaderMobile/>  
          {/* </ActionState>          */}
        <HeaderDesktop>
          <h3>MSI 2020</h3>
        </HeaderDesktop>         
        <h1>Hey!</h1>
        <p>Let’s try to find a joke for you:</p>
        <SearchType onChange={handlerChoice}>
          <p><input name="SearchMethod" type="radio" value="Random" /> Random</p>
          <p><input name="SearchMethod" type="radio" value="FromCaterogies" /> From caterogies</p>
          {isCategoriesShown && <CategoriesList setChosenCategory={setChosenCategory}/>}
          <p><input name="SearchMethod" type="radio" value="Search" /> Search</p>
          
        </SearchType>
        {isTextsearchShown && <TextSearch 
                                  type="text" 
                                  placeholder="Free text search..."
                                  onChange={getInputQuery}/>}
        <GetJokeBtn onClick={getJokeList}>Get a joke</GetJokeBtn>
       <Jokes jokesList={jokesList} 
              setFavouritesList={setFavouritesList} 
              idList={idList} 
              setIdList={setIdList}/>
      </SearchSection>
      <FavoriteSection>
        <p>Favourite</p>
        <Jokes 
                jokesList={favouritesList!=='null' ? favouritesList : null}
                type={"favourite"} 
                setFavouritesList={setFavouritesList} 
                idList={idList} 
                setIdList={setIdList}/>
      </FavoriteSection>
      <FavouriteModal
      jokesList={favouritesList!=='null' ? favouritesList : null}
                type={"favourite"} 
                setFavouritesList={setFavouritesList}
                 favouritesList = {favouritesList}
                idList={idList} 
                setIdList={setIdList}/> 
    </ActionState>
    </Container>
  );
};

const Container = styled.div`
display: flex;
`

const HeaderDesktop = styled.div`
${mediaTablet(`
  display: none;
`)}
${mediaMobile(`
 display: none;
`)}
& h3 {  
  width: 100%;
  margin:0;
}
`
const SearchSection = styled.div`
padding: 40px 140px;
width: 65%;
${mediaTablet(`
padding: 40px;
width: 100%;
`)}
${mediaMobile(`
padding: 20px;
width: 100%;
`)}
& h1 {
  margin-top: 78px;
  margin-bottom: 0px;
  width: 100%
}
& >p {
  margin: 0;  
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 10px;
  width: 100% 
}

`
const SearchType = styled.form`
margin-top: 43px;
width: 100%;
& >p {
  font-size: 18px;
  font-weight: 400;

}
`
const GetJokeBtn = styled.div`
padding: 10px 40px; 
border-radius: 10px;
background: linear-gradient(92.01deg, #8EA7FF 0%, #7291FF 100%);
color: white;
width: fit-content;
cursor: pointer;
`

const TextSearch = styled.input`
width: -webkit-fill-available;
border: 2px solid #333333;
border-radius: 10px; 
padding: 10px 0 10px 15px;
margin-bottom: 20px;
:active, :hover, :focus {
  outline: 0;
  outline-offset: 0;
}`

const FavoriteSection = styled.div`
width: 35%;
background: #F8F8F8;
display: flex;
flex-direction: column;
align-items: center;
padding: 40px;
${mediaTablet(`
display: none;
`)}
${mediaMobile(`
display: none;
`)}

& >p { 
  width: 80%;
  color: #ABABAB;
  font-weight: 500;
  font-size: 20px;
  font-family: Roboto;
  font-style: normal;
  margin: 0;
}
`





