import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
// import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCommentAlt} from '@fortawesome/free-solid-svg-icons';  

export const Jokes = props =>{

const {jokesList} = props;
  const jokeContent = jokesList.map(({id, value, updated_at, categories})=>{
    console.log(!categories.length)
    const presentTime = new Date()
    const updatedTime = new Date(updated_at)
    const hoursPast =(presentTime.getTime()- updatedTime.getTime())/3600000
    console.log()
    return (
    <JokeContainer>
      <Icon>
         <FontAwesomeIcon icon={faCommentAlt} />
      </Icon>
        <Heart/>
       <div>
           <IdSection>
            <p>ID:</p>
            <p>{id}</p>
          </IdSection>
          
          <MainText>{value}</MainText>
          <BottomSection>
             <p>Last update:{Math.floor(hoursPast)} hours ago</p>
            {categories ? <div>{categories[0]}</div> : null}
          </BottomSection>
       </div>      
         
    </JokeContainer>)
})
    return (
      <>
     {jokeContent}
     </>)
  
}

const JokeContainer = styled.div`
display: flex;
align-items: center;
width: 100%;
background: #F8F8F8;
border-radius: 20px;
height: 225px;
padding: 40px 40px 46px 40px;
margin: 20px 0;
overflow: hidden;
`
const Icon = styled.div`
background: #FFFFFF;
 width: 40px;
margin-right: 20px;
border-radius: 50%;
text-align: center;
`
const Heart = styled.div`

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
p{
  color: #ABABAB;
  font-size: 10px;
  padding: 0;
}
div{
  height: fit-content;
  color: black;
  padding: 6px 20px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 10px;
  background: #FFFFFF;
  border-radius: 6px;
  letter-spacing: 2px;
  font-weight: 500;  
  color: #333333;
}
`
const MainText = styled.p`
  max-width: 100%;
  overflow: hidden;
  font-size: 18px;
  margin-bottom: 23px;
  margin-top: 5px;
`