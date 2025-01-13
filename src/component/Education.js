import React from 'react'
import styled from 'styled-components'
import University from '../images/universityimage.png';
import College from '../images/collegeimage.png';
import School from '../images/schoolimage.png';
import { ImgTag } from '../page/Main';
import { Heading } from '../page/Main';

const EduContainer=styled.div`
margin-top:0.6em;
padding: 1em;

`;

const EduDiv=styled.div`
    display:flex;
    justify-content: space-between;
    color: #fff;
`;

const SubDiv=styled.div`
width: 25%;
background-color: #d3d3d3;
margin: 1em;
border-radius: 25px;
padding: 0.4em;

`;
const ImageDiv=styled.div`
    display:flex;
    justify-content:center;
    align-item:center;

`;

const ParaText=styled.p`
    color: #000;
    text-align: center;
`;

const Education = () => {
  return (
    <EduContainer>
        <Heading>Education</Heading>
    <EduDiv>
        <SubDiv>
            <ImageDiv>
            <ImgTag id="edu" src={University} alt="university"/> 
            </ImageDiv>
            <ParaText>
                Fr. Conceicao Rodrigues Institute of Technology, Vashi
            </ParaText>
            <ParaText>
            CGPI=9.50
        </ParaText>
        </SubDiv>

        <SubDiv>
        <ImageDiv>
        <ImgTag id="edu" src={College} alt="college"/> 
        </ImageDiv>
        <ParaText>
                B. K. Birla College, Kalyan
        </ParaText>
        <ParaText>
            Percentage=73.85 %
        </ParaText>
        </SubDiv>

        <SubDiv>
        <ImageDiv>
        <ImgTag id="edu" src={School} alt="school"/> 
        </ImageDiv>
        <ParaText>
               Holy Cross Convent School, kalyan
        </ParaText>
        <ParaText>
            Percentage=90.0 %
        </ParaText>
        </SubDiv>

    </EduDiv>
    </EduContainer>
  )
}

export default Education