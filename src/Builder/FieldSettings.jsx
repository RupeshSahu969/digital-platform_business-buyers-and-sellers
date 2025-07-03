import React, { useState } from 'react';
import { FiPlus, FiTrash2 } from 'react-icons/fi';
import { useFormBuilder } from '../AuthContext/AuthContext';

const FieldSettings = () => {
  const { selectedField, updateField } = useFormBuilder();
  const [activeTab, setActiveTab] = useState('Field');

  if (!selectedField) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-4 h-fit">
        <div className="text-center py-6 text-gray-500">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12 mx-auto mb-4" />
          <p className="text-sm">Select a field to edit its properties</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 h-fit">
      <div className="border-b border-gray-200 mb-3 pb-2">
        <nav className="flex space-x-2">
          {['Field', 'Watchow', 'Permissions'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-1 px-2 text-xs font-medium ${
                activeTab === tab
                  ? 'border-b-2 border-indigo-500 text-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
      
      <div>
        <h3 className="text-base font-medium text-gray-800 mb-3">Field Settings</h3>
        
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Label</label>
            <input
              type="text"
              value={selectedField.label}
              onChange={(e) => updateField(selectedField.id, { label: e.target.value })}
              className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          
          {['text', 'textarea', 'dropdown'].includes(selectedField.type) && (
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                {selectedField.type === 'textarea' ? 'Placeholder' : 'Short Answer'}
              </label>
              <input
                type="text"
                value={selectedField.placeholder}
                onChange={(e) => updateField(selectedField.id, { placeholder: e.target.value })}
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          )}
          
          <div className="flex items-center">
            <input
              id={`required-${selectedField.id}`}
              type="checkbox"
              checked={selectedField.required}
              onChange={(e) => updateField(selectedField.id, { required: e.target.checked })}
              className="h-3.5 w-3.5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor={`required-${selectedField.id}`} className="ml-2 block text-xs text-gray-900">
              Make as required
            </label>
          </div>
          
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Add help text</label>
            <input
              type="text"
              value={selectedField.helpText}
              onChange={(e) => updateField(selectedField.id, { helpText: e.target.value })}
              className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
              placeholder="Help text for users"
            />
          </div>
          
          {(selectedField.type === 'dropdown' || selectedField.type === 'radio' || selectedField.type === 'checkbox') && (
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Options</label>
              <div className="space-y-2">
                {selectedField.options?.map((option, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="text"
                      value={option}
                      onChange={(e) => {
                        const newOptions = [...selectedField.options];
                        newOptions[index] = e.target.value;
                        updateField(selectedField.id, { options: newOptions });
                      }}
                      className="flex-1 px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                    <button 
                      onClick={() => {
                        const newOptions = selectedField.options.filter((_, i) => i !== index);
                        updateField(selectedField.id, { options: newOptions });
                      }}
                      className="ml-1 p-1 text-red-500 hover:text-red-700"
                    >
                      <FiTrash2 size={14} />
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => {
                    const newOptions = [...selectedField.options, `Option ${selectedField.options.length + 1}`];
                    updateField(selectedField.id, { options: newOptions });
                  }}
                  className="mt-1 px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 flex items-center"
                >
                  <FiPlus className="mr-1" size={12} /> Add Option
                </button>
              </div>
            </div>
          )}
          
          <div className="pt-2">
            <button className="flex items-center text-xs text-indigo-600 hover:text-indigo-800">
              <FiPlus className="mr-1" size={12} /> Only show field when conditions are met
            </button>
          </div>

          <div className="pt-3 border-t">
            <button 
              onClick={() => updateField(selectedField.id, {})}
              className="w-full py-1.5 bg-indigo-600 text-white text-xs rounded-md hover:bg-indigo-700"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FieldSettings;