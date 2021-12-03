import React, { useEffect, useMemo, useState } from "react";
import * as S from "./Detail.styled";
import { useLocation } from "react-router";
import { DetailItemType, getDetailItem } from "./api";
import qs from "query-string";
import moment from "moment";

interface DetailProps {}

export const Detail: React.FC<DetailProps> = () => {
  const [detail, setDetail] = useState<DetailItemType>();
  const location = useLocation();
  const m = moment()
  const query = useMemo(() => qs.parse(location.search), [location.search]);


  console.log(m)
  useEffect(() => {
    getDetailItem(Number(query.id))
      .then((res) => setDetail(res.data))
      .catch(console.log);
  }, [query]);

  console.log("detail", detail);

  return (
    <S.Detail>
      <S.Title>{detail?.title}</S.Title>
      <S.AuTime>
        <S.Author>
          <span>Author</span>
          <p>{detail?.author.username}</p>
        </S.Author>
        <S.TimeUpdate>
          <span>Last Updated</span>
          <p>{moment(detail?.update_date).format('HH:mm:ss')}</p>
        </S.TimeUpdate>
      </S.AuTime>
      <S.DetailItem>
        <img src={detail?.image_url} alt="hinh anh" />
        <S.Content>{detail?.content}</S.Content>
      </S.DetailItem>
    </S.Detail>
  );
};

export default Detail;
