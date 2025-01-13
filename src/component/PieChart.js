import React from 'react'
import styled from 'styled-components';

const ChartWrapper=styled.div`
width: 300px;
height:300px;
border-radius: 50%;
border: 1px solid #000;
background: conic-gradient(
    #F8C471 0% 33.33%,  
    #85C1E9 33.33% 66.66%, 
    #D7BDE2 66.66% 100%  
);
margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label=styled.div`
font-size: 1.1rem;
color: #fff;

`;

export const PieChart = () => {
  return (
    <div>
    <ChartWrapper>
      <Label>Projects</Label>
    </ChartWrapper>
    </div>
  );
};
