import styled from "styled-components";

export const SHeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 60px;
  padding: 0 30px 0 25px;
  background-color: ${({ theme }) => theme.headerColor};
  color: #161617;
  z-index: 50;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 7%);
  -webkit-transition: all 0.1s ease;
  transition: all 0.1s ease;
`;

export const SHeaderLeft = styled.div`
  display: flex;
  width: 300px;
  align-items: center;

  svg {
    width: 15px;
    height: 15px;
    fill: ${({theme}) => theme.text};
    margin-right: 20px;
  }
`;

export const SHeaderBlogTitle = styled.h1`
  font-size: 1.3rem;
  color: ${({theme}) => theme.text}
`

export const SHeaderRight = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const SHeaderSearchBar = styled.div`
  display: flex;
  width: 50%;
  max-width: 550px;
`;

export const SHeaderNaviconRight = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
`;

export const SHeaderNaviconLable = styled.span`
  color: ${({theme}) => theme.text};
  font-size: 12px;
`;

export const SHeaderMenuIcon = styled.div``

