import React from 'react';
import { FiPlus } from 'react-icons/fi';

const  HomePage=()=> {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Form Builder</h1>
        <p className="text-gray-600 mb-8">Create custom forms and surveys</p>
        
        <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center mx-auto">
          <FiPlus className="mr-2" /> Create New Form
        </button>
      </div>
    </div>
  );
}
export default HomePage