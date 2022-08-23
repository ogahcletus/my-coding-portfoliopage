import Container from './Styles/Container.styled'
import { Flex } from './Styles/Flex.styles'
import { StyledFooter } from './Styles/Footer.styled'
import SocialIcons from './SocialIcons'

import React from 'react'

export default function Footer() {
  return (
    <StyledFooter>
        <Container>
            <img src='./images/logo_white.svg'    alt='' />
        

        <Flex>

        
        <ul>

           <li>
            Experience is the name everyone gives to their past mistakes!
            <li>The lesson is to fix the causes, and not the symptoms!</li>
            </li>
           </ul>
           <ul> 
            <li>+234-8145265522</li>
            <li>+234-7030187213</li>
            
          </ul>
          <ul>
            <li>About Me</li>
            <li>What I  Do</li>
            
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Me</li>
          </ul>

         <SocialIcons /> 

        </Flex>
        <p>&copy; Cletus_Ogah@2022. All rights reserved</p>
        </Container>

    </StyledFooter>
  )
}

