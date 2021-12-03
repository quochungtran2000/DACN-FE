import styled, { css } from "styled-components";

export const CardLisst = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 50px;
`;

export const Title = styled.h1`
  font-size: 20px;
`;

// export const CardItem = styled.div``;

export const CardTitle = styled.h2`
  font-size: 15px;
`;

export const CardDate = styled.span``;

export const CardItem = styled.div`
  width: 30%;
  border-radius: 8px;
  background-color: #ffff;
  box-shadow: 0 10px 20px 0 rgb(30 30 30 / 7%);
  padding: 5px;
  margin-bottom: 20px;
  height: 300px;
  cursor: pointer;
`;

export const CardImg = styled.img`
  border-radius: 8px;
  width: 100%;
  height: 50%;
`;

export const Card = styled.div`
  width: calc(100% - 350px);
  margin-left: 300px;
`;
