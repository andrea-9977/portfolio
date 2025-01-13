import React from 'react'
import styled from 'styled-components'
import icon from "../images/iconimage.png";
import { useState } from 'react';

const ConnectDiv=styled.div`
width: 100vw;
height: 40vh;
display:flex;
justify-content: center;
align-items:center;
background: linear-gradient( to right, #000000, #434343);
`; 

const Head=styled.h2`
    text-align:center;
    color: #fff;
`;

const ContactDiv=styled.div`
    display:flex;
    justify-content:space-between;
    text-align:left;
    margin: 1em;
`;

const DescDiv=styled.div`
width: 45vw;
height: 40vh;
display: flex;
justify-content:center;
align-items:center;
border: 1px solid #555555;
background-color: #f1f1f1;
padding: 0.6em 0.3em;
box-shadow: 10px 0 15px rgba(255, 255, 255, 0.8);


`;

const ContainDiv=styled.div`
margin-bottom: 0.6em;


`;

const InputTag=styled.input`
    padding: 0.3em 0.8em;
`;

const ResumeDiv=styled.div`
display:flex;
width: 30vw;
margin: 0 1.5em;
justify-content:center;
// align-items:center;
align-items: flex-start; 

`;

const Image=styled.img`
width: 60px;
height: auto;

&:hover{
cursor: pointer;

}

`;

const TextDiv=styled.div`
    margin-top: 20px;
    margin-right: 20px;
`;

const Connect = () => {
    const [email, setEmail] = useState("");
    const [desc, setDesc] = useState("");
    const handleDownload=()=>{
        const link = document.createElement("a");
        link.href = "/Resume_Andrea.pdf"; 
        link.download = "resume.pdf";  
        link.click();
    }

    const handleSubmit=(e)=>{
        e.preventDefault(); 
        alert(`Form submitted! Will get back to you`);
    }
  return (
    <div>
        <ConnectDiv>
            <Head>Connect With Me</Head>
        </ConnectDiv>

        <ContactDiv>
        <form onSubmit={handleSubmit}>
            <DescDiv>
            <div>
            <ContainDiv>
                <label for="email">Email Id:</label><br/>
                <InputTag type="email" name="email" value={email}
            onChange={(e) => setEmail(e.target.value)} id='email'/>
            </ContainDiv>
            <ContainDiv>
            <label for="desc" >Description:</label><br/>
            <InputTag type="textarea" value={desc}
            onChange={(e) => setDesc(e.target.value)} name="desc" id='desc'/>
            </ContainDiv>
            <button type="submit">Submit</button>
            </div>
            </DescDiv>
            </form>
            <ResumeDiv>
                <TextDiv>Resume Download</TextDiv>
                <div>
                    <Image onClick={handleDownload} src={icon} alt="download"/>
                </div>
            </ResumeDiv>
        </ContactDiv>
    </div>
  )
}

export default Connect