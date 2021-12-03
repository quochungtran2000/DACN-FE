import styled, { css } from "styled-components";

export const Detail = styled.div`
  width: calc(100% - 350px);
  margin-left: 300px;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 25px;
`;

export const AuTime = styled.div`
  display: flex;
  gap: 20px;
`;

export const Author = styled.div`
  p {
    font-weight: 600;
    color: #48525c;
  }
`;

export const TimeUpdate = styled.div`
  p {
    font-weight: 600;
    color: #48525c;
  }
`;

export const DetailItem = styled.div`
  width: 50%;
  text-align: center;
  img {
    border-radius: 4px;
    width: 500px;
    height: 300px;
    object-fit: cover;
  }
`;

export const Content = styled.p`
  margin: 1.7em 0 20px;
  line-height: 1.3em;
  text-align: left;
  vertical-align: middle;
`;
