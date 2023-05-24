import * as React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import DefaultTheme from "../utility/theme";

export const wrap = css`
  //manage
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
  & .table{
    width: 90%;
  }
  & tr td:first-child{
    width: 80px;
  }
  & .btn_wrap{
    & button{
      padding: 3px 5px 1px 5px;
      margin-right:5px
    }
    & span{
      margin-right: 15px;
    }
  }
  & .detail_box{
    padding-top: 20px;
    & b{
      color: ${DefaultTheme.palette.primary.main};
      font-size: 18px;
      font-weight: 800;
      padding-right:5px
    }
    & .left{
      min-width: 270px;
    }
    & .address{
      padding-bottom: 10px;
    }
  }
`;
