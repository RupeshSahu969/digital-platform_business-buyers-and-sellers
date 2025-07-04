import React from 'react';
import {FiTrash2 } from 'react-icons/fi';
import { AuthData } from '../AuthContext/AuthContext';

const FormField = ({ field }) => {
  const { selectedField, deleteField } = AuthData();
  const isSelected = selectedField?.id === field.id;

  const renderField = () => {
    switch(field.type) {
      case 'text':
        return (
          <input 
            type="text" 
            placeholder={field.placeholder || 'Short answer text'} 
            className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
            disabled
          />
        );
      case 'textarea':
        return (
          <textarea 
            placeholder={field.placeholder || 'Long answer text'} 
            rows={2}
            className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
            disabled
          />
        );
      case 'dropdown':
        return (
          <select className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500" disabled>
            <option value="">Select an option</option>
            {field.options?.map((opt, i) => (
              <option key={i} value={opt}>{opt}</option>
            ))}
          </select>
        );
      case 'radio':
        return (
          <div className="space-y-1">
            {field.options?.map((opt, i) => (
              <div key={i} className="flex items-center">
                <input type="radio" className="mr-2" disabled />
                <span className="text-sm">{opt}</span>
              </div>
            ))}
          </div>
        );
      case 'checkbox':
        return (
          <div className="space-y-1">
            {field.options?.map((opt, i) => (
              <div key={i} className="flex items-center">
                <input type="checkbox" className="mr-2" disabled />
                <span className="text-sm">{opt}</span>
              </div>
            ))}
          </div>
        );
      case 'file':
        return (
          <div className="border border-dashed border-gray-300 rounded-md p-4 text-center">
            <p className="text-xs text-gray-500">Click to upload or drag and drop</p>
          </div>
        );
      case 'image':
        return (
          <div className="border border-dashed border-gray-300 rounded-md p-4 text-center">
            <p className="text-xs text-gray-500">Upload image</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      className={`border rounded-md p-3 transition-all ${isSelected ? 'border-indigo-500 ring-1 ring-indigo-100' : 'border-gray-200 hover:border-gray-300'}`}
    >
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <label className="block text-xs font-medium text-gray-700 mb-1">
            {field.label} {field.required && <span className="text-red-500">*</span>}
          </label>
          
          {renderField()}
          
          {field.helpText && (
            <p className="mt-1 text-xs text-gray-500">{field.helpText}</p>
          )}
        </div>
        <button 
          className="text-white hover:text-red-500 ml-1 p-1  border-none bg-red-600 "
          onClick={(e) => {
            e.stopPropagation();
            deleteField(field.id);
          }}
        >
          <FiTrash2 size={14} />
        </button>
      </div>
    </div>
  );
}

export default FormField;