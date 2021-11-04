import styled from "styled-components";

export const Loading = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 77px;
  color: red;

  &::after {
    content: "";
    width: 50px;
    height: 50px;
    border: 4px solid transparent;
    border-top-color: #fff;
    border-bottom-color: #fff;
    border-radius: 50%;
    animation: loading 1s ease infinite;
    border-left-color: #fff;
  }

  @keyframes loading {
    to {
      transform: rotate(1turn);
    }
  }
`;
