import styled from "styled-components";



export const StyledHeader = styled.header`
    background-color: ${({theme}) => theme.colors.header};
    padding: 40px 0;
    border-radius: 5%;
    

    

    h1 {
        color: #fff
    }

    h3 {
      color: white;
      font-style: italic
    }

    p{
        font-family: 'Arial Narrow'; 
        color: white;
        font-size: 20px

    }

    &:hover {
       background-color: darkred;

    }
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;

  }
`

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  }
`

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0px 30px;
  }

  
`
