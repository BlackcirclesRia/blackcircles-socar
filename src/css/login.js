import * as React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useTheme } from '@mui/material/styles';
import DefaultTheme from "../utility/theme";

export const wrap = css`
  // background-color: ${DefaultTheme.palette.primary.main};
  & .container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  & .logo {
    width:150px;
  }
  & .btn {
    & a {
      text-decoration: none;
    }
  }
`;



// import styled from '@emotion/styled';
//
// export const wrap = styled.div`
//   font-size: ${(props) => props.fontsize};
// `;