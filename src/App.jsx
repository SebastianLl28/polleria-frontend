/** @jsxImportSource @emotion/react */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/index";
import { css } from "@emotion/react";

const App = () => {
  return (
    <main
      css={css`
        background-color: #fcfcfc;
        min-height: 100vh;
      `}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
