import React from 'react'
import styled from 'styled-components'
import { Heading, ImgTag } from '../page/Main';
import pet from '../images/pet360.png';
import signlan from "../images/signlan.png";
import automation from "../images/automation.png";

const MainCont=styled.div`
background-color: #000;

`;

const WorkDiv=styled.div`
    padding: 1em;
`;

const GistDiv=styled.div`
    display:flex;
    margin: 1em 1.5em;
    padding: 1em;

`;

const FirstDiv=styled.div`
    color: #fff;
    width: 45%;
    padding: 1em;
    justify-content: justify;
    

`;

const ImageDiv=styled.div`
    width: 50vw;
    height: 65vh;
    overflow: hidden; 

`;

const ImageTag=styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain; 
  object-position: center;
  display: block;

`;

const Work = () => {
  return (
    <MainCont>
        
    <WorkDiv id="automationportal">
    <Heading>Automation Portal</Heading>
        <GistDiv>
            <FirstDiv>
                <li>Design and developed an Automation Portal for reducing the manual efforts for operational efficiency. It was built on ReactJs framework, mongodb and sql for the backend storage of data, NodeJs for the backend APIs.</li>
                <li>The purpose of the knowledge base module is to view the documents, upload and download the documents. Admins were given the right to verify the upoaded documents or reject it if they find wrong contents in the uploaded SOP.</li>
                <li> The traffic data module was developed for uploading the volumetric data and to veiw the data by the timestamp.</li>
                <li>The Url Module was used by maximum users as it saved the time to find the urls that they save at different locations, as the urls were all uploaded together categorized by the application type and the enviroment, this made it easier for the user to find the url they need in less than 5sec.</li>
                <li>There were several other modules like the API flow module, viewing the logs of the table through the log module by searching based on either one of the search parameter.</li>
            </FirstDiv>
            <ImageDiv>
                <ImageTag src={automation} alt="automation portal"/>
            </ImageDiv>
        </GistDiv>  
    </WorkDiv>

    <WorkDiv id="signlan">
    <Heading>Sign Language Recognition</Heading>
        <GistDiv>
        <ImageDiv>
                <ImageTag src={signlan} alt="sign language"/>
            </ImageDiv>
            <FirstDiv>
                <li>The Sign Language Recognition model was built using the Long short term memory model. The GUI made it more effective for people to practice the signs.</li>
                <li>The LSTM model makes use of the recurrent neural networks that retains the data collected and forgets the irrelevant one using the input and the forget gate.</li>
                <li>With the help of the UI the users could learn the signs for the day and practice those signs. The model could make 5 word sentences with a accuracy of 82 percent.</li>
                <li>The dataset used was made through the signs that we signed and fed to the model for training and testing purpose.</li>
            </FirstDiv>
        </GistDiv>
        </WorkDiv>

    <WorkDiv id="pet">
    <Heading>Pet 360</Heading>
        <GistDiv>
            <FirstDiv>
                <li>Design and implemented a pet-product based E-commerce website that shows the best sellers based on the most purchased pet product.</li>
                <li>The admin had the rights to add or delete the products from the website. The users could add the products that they wished to purchase in the cart.</li>
                <li>The items newly added to the website was visible in the new seller sections. It gave the users a much better ways of navigating through the website.</li>
                <li>The website was built using the MERN stack with ReactJs as the frontend UI and Mongodb, ExpressJs as backend technologies.</li>
                <li>The users were able to login and logout of the website with the help of the JWT tokens in NodeJs, the website build was a prototype for our university project.</li>
            </FirstDiv>
            <ImageDiv>
                <ImageTag src={pet} alt="e-com website"/>
            </ImageDiv>
        </GistDiv>  
    </WorkDiv>   
    </MainCont>
  )
}

export default Work