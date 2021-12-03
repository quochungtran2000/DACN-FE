import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { CardItemType, getListCard } from "./api";
import * as S from "./Card.styled";

interface Props {}

const Card = (props: Props) => {

  const [cardList,setCardList]=useState<CardItemType[]>([])
  const history = useHistory()

  useEffect(()=>{
    getListCard().then(res => setCardList(res.data.data)).catch(console.log)
  },[])

  return (
    <S.Card >
      <S.Title>Bài đăng mới nhất</S.Title>

      <S.CardLisst>
        {cardList.map(item => (
        <S.CardItem key={item.id} onClick={() => history.push(`/detail/?id=${item.id}`)}>
          <S.CardImg src={item.image_url} alt={item.title} />
          <S.CardTitle>{item.title}</S.CardTitle>
          <S.CardDate>{item.author.username}</S.CardDate>
        </S.CardItem>
        ))}
      </S.CardLisst>
    </S.Card>
  );
};

export default Card;
