import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import Heart from './images/heart.png';
import HeartColored from './images/heartColored.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';

export const Jokes = props => {
  const { jokesList, type, setFavouritesList, idList, setIdList } = props;

  useEffect(() => {
    let localArrey = JSON.parse(localStorage.getItem("jokes")) !== null ? JSON.parse(localStorage.getItem("jokes")) : [];
    const idArrey = localArrey.map(({ id }) => id)
    setIdList(idArrey)
  }, [jokesList])
    ;


  const jokeContent = (jokesList !== null) ? (jokesList.map(({ id, value, updated_at, categories }) => {

    const presentTime = new Date()
    const updatedTime = new Date(updated_at)
    const hoursPast = (presentTime.getTime() - updatedTime.getTime()) / 3600000

    const checkId = idList.filter((item) => item === id);
    const favorite = checkId.length ? true : false;


    const addToFavourite = () => {

      if (!favorite) {
        let localArrey = JSON.parse(localStorage.getItem("jokes")) !== null ? JSON.parse(localStorage.getItem("jokes")) : [];

        const favouriteItem = {
          id,
          value,
          updated_at,
          categories
        };

        localArrey.push(favouriteItem);

        localStorage.setItem("jokes", JSON.stringify(localArrey));
        const idArrey = localArrey.map(({ id }) => id);
        setIdList(idArrey);
        setFavouritesList(JSON.parse(localStorage.getItem("jokes")))
      }
      else {
        let localArrey = JSON.parse(localStorage.getItem("jokes")) !== null ? JSON.parse(localStorage.getItem("jokes")) : [];
        const filtredArrey = localArrey.filter((item) => item.id !== id)
        const idArrey = filtredArrey.map(({ id }) => id);
        setIdList(idArrey);
        localStorage.setItem("jokes", JSON.stringify(filtredArrey));
        setFavouritesList(JSON.parse(localStorage.getItem("jokes")))
      };
    };


    return (
      <JokeContainer type={type} key={uuidv4()}>
        <Icon type={type}>
          <FontAwesomeIcon icon={faCommentAlt} />
        </Icon>
        <MainSection>
          <HeartMarker onClick={addToFavourite} favorite={favorite} />
          <IdSection>
            <p>ID:</p>
            <p>{id}</p>
          </IdSection>

          <MainText type={type} >{value}</MainText>
          <BottomSection type={type}>
            <p>Last update:{Math.floor(hoursPast)} hours ago</p>
            {(categories != undefined) && (categories.length) ? <div>{categories[0]}</div> : null}
          </BottomSection>
        </MainSection>
      </JokeContainer>)
  })) : null;
  return (
    <>
      {jokeContent}
    </>)

}

const JokeContainer = styled.div`
width: -webkit-fill-available;
display: flex;
align-items: center;
justify-content: space-around;
background:${props => props.type ? "#FFFFFF" : "#F8F8F8"};
border-radius: 20px;
padding: ${props => props.type ? "20px" : "40px"};;
margin: 20px 0;
overflow: hidden;
`
const Icon = styled.div`
background: ${props => props.type ? "#F8F8F8" : "#FFFFFF"};
height: 40px;
width: 40px;
line-height: 40px;
margin-right: 20px;
border-radius: 50%;
text-align: center;
`
const MainSection = styled.div`
display: flex;
flex-direction: column;
width: 80%;
`
const HeartMarker = styled.div`
width: 20px;
height: 17px;
background: url(${props => props.favorite ? HeartColored : Heart}) no-repeat right center;
background-size: 20px 17px;
align-self: flex-end;
margin-bottom:10px;
padding-top: 2px;
`
const IdSection = styled.div`
display:flex;
font-weight: 500;
font-size: 10px;
color: #ABABAB;
  p{
    margin:0;
  }
`
const BottomSection = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
p{
  color: #ABABAB;
  font-size: 10px;
  padding: 0;
  margin: 0;
}
div{
  height: fit-content;
  color: black;
  padding: 6px 20px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 10px;
  background: ${props => props.type ? "#F8F8F8" : "#FFFFFF"};
  border-radius: 6px;
  letter-spacing: 2px;
  font-weight: 500;  
  color: #333333;
}
`
const MainText = styled.div`
  max-width: 610px;
  overflow: hidden;
  font-size:${props => props.type ? "14px" : "18px"}; ;
  margin-bottom: 23px;
  margin-top: 5px;
`