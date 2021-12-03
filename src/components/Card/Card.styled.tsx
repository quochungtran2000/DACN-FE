import styled, { css } from "styled-components";

export const CardLisst = styled.div`
  position: absolute;
  /* top: 0; */
  left: 20%;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 50%;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  height: 300px;
`;

export const Title = styled.h1`
  position: absolute;
  font-size: 20px;
  top: 15%;
  left: 20%;
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
`;

export const CardImg = styled.img`
  border-radius: 8px;
  width: 100%;
  height: 50%;
`;

export const Card = styled.div`
  width: 100%;
`;
