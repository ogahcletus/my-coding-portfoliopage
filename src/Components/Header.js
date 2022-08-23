import React from 'react'
import { StyledHeader, } from './Styles/Header.styled'
import Container from './Styles/Container.styled'

import { Flex } from './Styles/Flex.styles'

export default function Header() {
  return (  
    <StyledHeader>
    <Container>
    <h1>My Coding Projects PortFolio Page!</h1>
   


    <Flex>
        <div>
             
            <h3>First, UNDERTAND the PROBLEM!</h3>
            <h3>Seconldly, SOLVE the PROBLEM!!</h3> 
            <h3>LASTLY, write the CODES!!!</h3>
            <p>My name is Cletus Ogah</p>
            <p> 
            I am an engineer, banking operations executive, project managegement professional, data analyst and a Software Developer.
            I have a burning passion for learning and research which has been useful in my nitch in solving and trouble shooting problems.
            The object of this portfolio page is to create connections with prospective empoloyers, other software developers and clients so that we can engage in genuine and productive business discussions.
            </p>
            

        </div>

        

    </Flex>
    
    </Container>
    </StyledHeader>

  )
}
