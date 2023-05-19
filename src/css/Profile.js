import * as React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import DefaultTheme from "../utility/theme";

export const wrap = css`
  //profile
  width: 100%;
  height: 100vh;
  & .content{
    padding-top: 50px;
  }
  & .main_wrap{
    width: 100%;
    padding-top: 50px;
    padding-left: 50px
  }
  & h2{
    padding-bottom: 20px;
  }
  //table
  & .table{
    width: 80%;
  }
`;
