import React from 'react';
import { FiArrowLeft, FiEye, FiSave, FiShare2 } from 'react-icons/fi';
import { useFormBuilder } from '../../context/FormBuilderContext';

export default function Header() {
  const { formTitle, setFormTitle } = useFormBuilder();

  return (
    <header className="bg-white border-b shadow-sm p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="flex items-center text-gray-600 hover:text-gray-800">
            <FiArrowLeft className="mr-2" /> Back
          </button>
          <h1 className="text-2xl font-bold text-gray-800">
            <input 
              type="text" 
              value={formTitle}
              onChange={(e) => setFormTitle(e.target.value)}
              className="bg-transparent border-b border-transparent hover:border-gray-300 focus:border-indigo-500 focus:outline-none"
            />
          </h1>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 flex items-center">
            <FiSave className="mr-2" /> Save draft
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center">
            <FiEye className="mr-2" /> Preview
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center">
            <FiShare2 className="mr-2" /> Share
          </button>
        </div>
      </div>
    </header>
  );
}