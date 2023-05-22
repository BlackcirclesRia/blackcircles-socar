import * as React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import DefaultTheme from "../utility/theme";

export const wrap = css`
  & .btn_wrap{
    & button{
      padding: 1px 5px;
      margin-right:5px
    }
    & span{
      margin-right: 8px;
    }
  }
  & .detail_box{
    padding-top: 10px;
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
      padding-bottom: 5px;
    }
  }
`;
