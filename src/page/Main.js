/*font-family:
font-size:
background-color:
color:
*/

import React from 'react'
import Image from "../images/linkedinpro.jpg"
import styled from 'styled-components';
import Education from '../component/Education';
import Navbar from '../component/Navbar';

const MainContainer=styled.div`
// background-color: #ffffed;
background-color: #000;
min-height: 100vh;
`;



const MainDiv=styled.div`
display:flex;
background-color: #000;
justify-content:space-between;
height: 91vh;
`;

const ImageDiv=styled.div`
display:flex;
align-items:center;
justify-content:right;
 margin: 1.6em 2em;
 width: 50%;
`;

export const ImgTag=styled.img`
    display:block;
    border:1px solid #fff;
    border-radius: 50%;
    width: 50%;

    ${(props) => props.id === 'edu' && `
      border: none;
      height: auto;
      text-align: justify;
    `}
`;

const ContentDiv=styled.div`
  color: #fff;
  width: 50%;
  padding: 1.4em;
  margin-left: 1em;
`;
export const Heading=styled.h2`
color: #fff;

`;

const ParaDiv=styled.div`
padding:0;

${(props) => props.id === 'journey' && `
  height: 50vh;
  text-align: justify;
`}

`;

const MyContentDiv=styled.div`

`;

const Hrline=styled.hr`
margin: 0 1.5em;

`;


const Main = () => {
  return (
    <div>
    <MainDiv id="myjourney">
        <ContentDiv>
        <Heading>KONNICHIWA, I'm Andrea Mary</Heading>
        <ParaDiv>A Curious, Creative & Commited software developer</ParaDiv>
        <MyContentDiv>
        <Heading>My Journey</Heading>
        <ParaDiv id='journey'>
          <p>
            I am currently working for Jio Platforms Limited and have completed my bachelors of Engineering in Information Technology.
            I am responsible for automating the manual work for operational efficieny, tasked with designing and developing the UI of the automation portal. Through the projects I've worked on in my current company, I have enhanced my technical skills. Cross-collaborated with different teams in managing timelines and reaching the milestones set for the project.

          </p>

        </ParaDiv>
        </MyContentDiv>
        </ContentDiv>
        <ImageDiv>
        <ImgTag src={Image} alt="pp"/>
        </ImageDiv>
    </MainDiv>
    <Hrline/>
    <div id="education">
    <Education/>
    </div>
    </div>
  )
}

export default Main