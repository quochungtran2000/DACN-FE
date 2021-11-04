import React, { useState } from "react";
import * as S from "./Loading.style";

export const Loading = () => {
  return (
    <S.Loading>
      {Array(4)
        .fill(0)
        .map((item, index) => (
          <span key={index}>{item}</span>
        ))}
    </S.Loading>
  );
};
