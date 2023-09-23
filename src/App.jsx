import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/index";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Box
      sx={{ backgroundColor: "#f3f3f3", minHeight: "100vh" }}
      component="main"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default App;
