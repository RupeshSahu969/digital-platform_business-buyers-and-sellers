import React from 'react';
import { FiPlus } from 'react-icons/fi';
import FormField from './FormField';
import { AuthData } from '../AuthContext/AuthContext';

const FormCanvas = () => {
  const { fields, addField, setSelectedField } = AuthData();

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="space-y-3">
        {fields.map((field) => (
          <div 
            key={field.id}
            onClick={() => setSelectedField(field)}
            className="cursor-pointer"
          >
            <FormField field={field} />
          </div>
        ))}
        
        <button 
          onClick={() => addField('text')}
          className="w-full py-3 text-sm border-2 border-dashed border-gray-300 rounded-lg
           text-gray-500 hover:text-black bg-white flex items-center justify-center transition-colors"
        >
          <FiPlus className="mr-1" size={14} /> Add field
        </button>
      </div>
    </div>
  );
}

export default FormCanvas;