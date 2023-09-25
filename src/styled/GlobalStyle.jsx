import { css } from "@emotion/react";
import { Global } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import React from "react";

const GlobalStyle = () => {
  return (
    <>
      <CssBaseline />
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          button {
            background-color: inherit;
            border: unset;
            outline: none;
          }
          li {
            list-style: none;
          }
        `}
      />
    </>
  );
};

export default GlobalStyle;