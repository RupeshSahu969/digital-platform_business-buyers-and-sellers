import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useFormBuilder } from '../AuthContext/AuthContext';

const PreviewPage = () => {
  const { formTitle, fields } = useFormBuilder();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b shadow-sm p-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button className="flex items-center text-xs sm:text-sm text-gray-600 hover:text-gray-800">
              <FiArrowLeft className="mr-1" size={14} /> Back to Builder
            </button>
            <h1 className="text-base sm:text-lg font-bold text-gray-800">{formTitle}</h1>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-sm p-5">
          <div className="space-y-4">
            {fields.map((field) => (
              <div key={field.id} className="mb-4">
                <label className="block text-sm font-medium text-gray-800 mb-1">
                  {field.label} {field.required && <span className="text-red-500">*</span>}
                </label>
                
                {field.type === 'text' && (
                  <input 
                    type="text" 
                    placeholder={field.placeholder} 
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                )}
                
                {field.type === 'textarea' && (
                  <textarea 
                    placeholder={field.placeholder} 
                    rows={3}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                )}
                
                {field.type === 'dropdown' && (
                  <select className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500">
                    <option value="">Select an option</option>
                    {field.options?.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                )}
                
                {field.type === 'radio' && (
                  <div className="space-y-2">
                    {field.options?.map((opt, i) => (
                      <div key={i} className="flex items-center">
                        <input 
                          type="radio" 
                          name={field.id} 
                          className="h-3.5 w-3.5 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label className="ml-2 text-sm text-gray-700">{opt}</label>
                      </div>
                    ))}
                  </div>
                )}
                
                {field.type === 'checkbox' && (
                  <div className="space-y-2">
                    {field.options?.map((opt, i) => (
                      <div key={i} className="flex items-center">
                        <input 
                          type="checkbox" 
                          className="h-3.5 w-3.5 text-indigo-600 focus:ring-indigo-500 rounded"
                        />
                        <label className="ml-2 text-sm text-gray-700">{opt}</label>
                      </div>
                    ))}
                  </div>
                )}
                
                {field.type === 'file' && (
                  <div className="border border-dashed border-gray-300 rounded-md p-5 text-center">
                    <p className="text-xs text-gray-500 mb-1">Click to upload or drag and drop</p>
                    <p className="text-2xs text-gray-400">PDF, DOC, XLS up to 10MB</p>
                  </div>
                )}
                
                {field.type === 'image' && (
                  <div className="border border-dashed border-gray-300 rounded-md p-5 text-center">
                    <p className="text-xs text-gray-500 mb-1">Click to upload or drag and drop</p>
                    <p className="text-2xs text-gray-400">JPG, PNG, GIF up to 5MB</p>
                  </div>
                )}
                
                {field.helpText && (
                  <p className="mt-1 text-xs text-gray-500">{field.helpText}</p>
                )}
              </div>
            ))}
            
            <button className="w-full py-2.5 text-sm bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700">
              Submit Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewPage;