import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html{
    height:100%;
}

body {
    background-image: linear-gradient( 95.2deg, rgba(173,252,234,1) 26.8%, rgba(192,229,246,1) 64% );
    margin:0;
    padding:0 20px;
    display: flex;
    justify-content: center;
    box-sizing:border-box;
}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }
  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
    text-shadow: 0 1px 0px #378ab4, 1px 0 0px #5dabcd, 1px 2px 1px #378ab4;
  }
  h1 {
    font-size: 70px;
    margin: 20px;
    text-align: center;
    text-shadow: 1px 1px 1px #000, 3px 3px 5px blue;
    color: white;
  }
  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0, 25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`;
