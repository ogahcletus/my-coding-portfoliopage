import React from 'react'
import { StyledCard } from './Styles/Card.styled';

export default function Card({item: {id, title, description, link}}) {
  return (
    <StyledCard>
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        
        
        <button><a href={link}>Click Here To Website Demo at my replit/ogahcletus2022</a></button>

        </div>
        
         


    </StyledCard>
  )
}
