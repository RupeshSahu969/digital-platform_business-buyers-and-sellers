import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import BuilderPage from "./Pages/BuilderPage";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<BuilderPage />} />
            <Route path="/:templateId" element={<BuilderPage />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
