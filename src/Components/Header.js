import React from 'react'
import { StyledHeader, Nav, Logo, Image } from './Styles/Header.styled'
import Container from './Styles/Container.styled'
import { Button } from './Styles/Button.styled'
import { Flex } from './Styles/Flex.styles'

export default function Header() {
  return (  
    <StyledHeader>
    <Container>
    <h1>Hubble Landing Page</h1>
    <Nav>
    <Logo src='./images/logo.svg' alt='' />
        <Button bg='#000' color='#fff'>Try It For Free!</Button>
    
    </Nav>

    <Flex>
        <div>
            <h1>Build the Community Your Fans Will Love</h1>
            <p> 
            The Huddle Landing Page re-imaginess the way we could build better Communities.
            You have a voice so does your audience.
            The object of this Huddle Page is to create connections with your users so that all can engage in genuine discussions.
            </p>
            <Button  bg='#000'  color='#fff'>
                Get Started For Free
            </Button>

        </div>

        <Image src='./images/illustration-mockups.svg' alt=''/>

    </Flex>
    </Container>
    </StyledHeader>

  )
}
