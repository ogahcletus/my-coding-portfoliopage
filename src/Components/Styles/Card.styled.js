import styled from "styled-components";

export const StyledCard = styled.div`
        display: flex;
        align-items: center;
        background-color: aquamarine;
        font-family:sans-serif;
        border-radius: 15px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
        margin: 40px 0;
        padding: 60px;
        flex-direction: ${({ layout }) => layout || 'row'};
  
  h2 {
    color: blue;
  }

  p {
    color: blue;
    font-style: italic;
    font-weight: bold;
  }

  & > div {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }

  button {
    background-color: darkblue;
    
  }

  a {
    color: white;
    font-weight: bold;
  }

`