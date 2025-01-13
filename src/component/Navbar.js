import React from 'react'
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavBar=styled.nav`
  height:auto;
  width: 100%;
  background-color:rgba(0,0,0, 0.4);
  position:sticky;
  top:0;
`;

const FlexNav=styled.div`
display:flex;
justify-content: right;
padding: 0.5em;
`;

const NavContent=styled(HashLink)`
padding: 0.4em;
text-align:center;
text-decoration:none;
color: #fff;


&:hover{
cursor:pointer;
}
  
`;

// const AnchorLink = styled.a`
//   padding: 0.4em;
//   text-align: center;
//   text-decoration: none;
//   color: black;

//   &:hover {
//     cursor: pointer;
//     color: #fff;
//   }
// `;


const Navbar = () => {
  return (
    <>
    <NavBar> 
        <FlexNav>
          <NavContent smooth to="/myjourney" >My Journey</NavContent>
          <NavContent smooth to="/#education">Education</NavContent>
          <NavContent to="/projects">Projects</NavContent>
          <NavContent to="/connect">Connect</NavContent>
        </FlexNav>
      
    </NavBar>
    </>
  )
}

export default Navbar