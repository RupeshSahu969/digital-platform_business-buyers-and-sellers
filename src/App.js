import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import Onboarding from './Pages/Onboarding';
import BuyerDiscovery from './Pages/BuyerDiscovery';
import Matched from './Pages/Matched';
import Signup from './Pages/Signup';


function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} /> {/* Add the new route */}
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/discovery" element={<BuyerDiscovery />} />
          <Route path="/matched/:matchId" element={<Matched />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;