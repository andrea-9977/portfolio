import React from 'react'
import Navbar from './Navbar'
import { Heading } from '../page/Main'
import { PieChart } from './PieChart'
import Work from './Work'
import { HashLink } from 'react-router-hash-link'
import styled from 'styled-components'



const SubDiv=styled.div`
  display: flex;
  justify-content:center;
  align-item:center;
  gap: 4em;
  
`;
const PieDiv=styled.div`
width: 30%;


`;

const ListDiv=styled.div`
color: #000;
display: flex;
flex-direction:column;
padding: 1em;
justify-content:center;
align-items: center;

`;

const MainListDiv=styled.div`
    display:flex;
    justify-content:center;
`;

const AnchorDiv=styled(HashLink)`
text-decoration:none;
color: #fff;

`;

const SubListDiv=styled.div`
text-align:left;
color: #fff;
width: 30vw;
height: 30vh;
padding: 1em;
border: 1px solid #000;
border-radius: 10px;
background-color: rgba(0,0,0,0.6);
box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

const Projects = () => {
  return (
    <div>
        <h2>My Work</h2>
        <SubDiv>
        <PieDiv>
        <PieChart/>
        </PieDiv>
        <MainListDiv>
        <ListDiv>
            <SubListDiv>
            <h2>Table of Contents</h2>
            <div><li><AnchorDiv to="/work#automationportal">Automation Portal</AnchorDiv></li></div>
            <div><li><AnchorDiv to="/work#signlan">Sign Language Recognition</AnchorDiv></li></div>
            <div><li><AnchorDiv to="/work#pet">Pet 360</AnchorDiv></li></div>
            </SubListDiv>
            </ListDiv>
            
            </MainListDiv>
        
        </SubDiv>
    </div>
  ) 
}

export default Projects