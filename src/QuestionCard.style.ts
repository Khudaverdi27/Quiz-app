import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1100px;
  background-color: #ebfeff;
  border-radius: 10px;
  border: 2px solid #0085a3;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0, 25);
  text-align: center;

  p {
    font-size: 1rem;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    border: 3px solid white;
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0, 1);
    border-radius: 10px;
    color: #fff;
    background: ${({ correct, userClicked }) =>
      correct ? "green" : !correct && userClicked ? "red" : "blue"};
  }
`;
