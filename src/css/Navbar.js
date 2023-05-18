import * as React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import DefaultTheme from "../utility/theme";

export const wrap = css`
  //navbar
  & .main_wrap{
    height: 100vh;
    flex-grow: 1;
    overflow: auto;
  }
  & .drawer_box{
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  //navlist
  & .logo_box {
    padding:10px 0 10px 0;
    display: flex;
    justify-content: center;
  }
  & .logo {
    width:170px;
    margin-bottom: 10px;
  }
  & .logo_txt {
    text-align: center;
    position: relative;
    padding-bottom: 10px;
    & span {
      font-size: 15px;
      font-weight: 600;
      color: ${DefaultTheme.palette.primary.gray};
    }
    & ::after{
      content: "";
      position: absolute;
      left: 20%;
      right:20%;
      bottom: 0;
      height: 1px;
      background-color: ${DefaultTheme.palette.primary.gray}
    }
  }
  & .name_txt {
    text-align: center;
    font-size: 13px;
    padding-top: 10px;
    color: ${DefaultTheme.palette.primary.gray};
    & span{
      font-weight: 600;
    }
  }
  & .btn_box{
    display: flex;
    justify-content: center;
    padding-top: 20px;
    & button{
      color: ${DefaultTheme.palette.primary.gray};
      border: 1px solid ${DefaultTheme.palette.primary.gray};
    }
    & button:first-child{
      margin-right: 5px;
    }
  }
`;



// import styled from '@emotion/styled';
//
// export const wrap = styled.div`
//   font-size: ${(props) => props.fontsize};
// `;