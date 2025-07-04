import React from "react";
import { Route, Routes } from "react-router-dom";
import BuilderPage from "./Pages/BuilderPage";
import PreviewPage from "./Pages/PreviewPage";
import SharePage from "./Pages/SharePage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BuilderPage />} />
        <Route path="/preview" element={<PreviewPage />} />
        <Route path="/share" element={<SharePage />} />
      </Routes>
    </>
  );
}
