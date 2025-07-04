import React from 'react';
import Navbar from '../Components/Navbar';
import BuilderLayout from '../Components/BuilderLayout';
import FieldLibrary from '../Builder/FieldLibrary';
import FormCanvas from '../Builder/FormCanvas';
import FieldSettings from '../Builder/FieldSettings';

const BuilderPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <BuilderLayout
        leftTop={<FieldSettings />}
        leftBottom={<FormCanvas />}
        right={<FieldLibrary />}
      />
    </div>
  );
};

export default BuilderPage;
