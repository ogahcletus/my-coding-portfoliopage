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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+234-8145265522</li>
            <li>info@huddle_landingpage.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

         <SocialIcons /> 

        </Flex>
        <p>&copy; 2022 Huddle_Landing_Page. All rights reserved</p>
        </Container>

    </StyledFooter>
  )
}

