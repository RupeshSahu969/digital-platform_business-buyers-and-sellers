import React from 'react';
import { FiArrowLeft, FiEye, FiSave, FiShare2 } from 'react-icons/fi';
import { AuthData } from '../AuthContext/AuthContext';

const Navbar = () => {
  const { saveTemplate } = AuthData();

  return (
    <header className="bg-white border-b shadow-sm p-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button className="flex items-center text-xs sm:text-sm bg-white border-none text-black size-15">
            <FiArrowLeft className="mr-1 bg-white border-none" size={14} /> Back
          </button>
          
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={saveTemplate}
            className="px-2 py-1 sm:px-3 sm:py-1.5 text-xs bg-blue-600 text-white hover:text-white rounded-md hover:bg-blue-700 flex items-center"
          >
            <FiSave className="mr-1" size={12} /> Save
          </button>
          <button className="px-2 py-1 sm:px-3 sm:py-1.5 text-xs bg-indigo-600 text-white hover:text-white rounded-md hover:bg-indigo-700 flex items-center">
            <FiEye className="mr-1" size={12} /> Preview
          </button>
          <button className="px-2 py-1 sm:px-3 sm:py-1.5 text-xs bg-green-600 text-white hover:text-white rounded-md hover:bg-green-700 flex items-center">
            <FiShare2 className="mr-1" size={12} /> Share
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
