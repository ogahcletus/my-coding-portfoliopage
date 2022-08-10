import React from 'react'
import {FaTwitter, FaFacebook, FaLinkedin, FaInstagram} from 'react-icons/fa';
import { StyledSocialIcons } from './Styles/SocialIcon.styled';

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
        <li>
            <a   href='https://twitter.com' >
                <FaTwitter />
            </a>

        </li>
        
        <li>
            <a   href='https://Instagram.com' >
                <FaInstagram />
            </a>
        </li>
        <li>
            <a   href='https://facebook.com' >
                <FaFacebook />
            </a>
        </li>
        <li>
            <a   href='https://linkedin.com' >
                <FaLinkedin />
            </a>

        </li>

    </StyledSocialIcons>
  )
}
