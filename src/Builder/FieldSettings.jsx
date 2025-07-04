import React from 'react';
import { FiPlus, FiTrash2 } from 'react-icons/fi';
import { AuthData } from '../AuthContext/AuthContext';

const FieldSettings = () => {
  const { selectedField, updateField, formTitle, setFormTitle } = AuthData();

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 h-fit">
      <div className="bg-white rounded-lg shadow-sm p-4 h-fit">
       
        <div className="mb-3">
          <label className="block text-xs font-bold text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            value={formTitle}
            onChange={(e) => setFormTitle(e.target.value)}
            className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
            placeholder="Enter your full name"
          />
        </div>
      </div>

      <div className="border-b border-gray-200 mb-3 pb-2" />

      <div>
        <h3 className="text-base font-medium text-gray-800 mb-3">Field Settings</h3>

        {selectedField ? (
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

            <div className="pt-3 border-t">
              <button
                onClick={() => updateField(selectedField.id, {})}
                className="w-full py-1.5 bg-white text-black text-xs rounded-md hover:text-black"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-500 text-sm">No field selected.</p>
        )}
      </div>
    </div>
  );
};

export default FieldSettings;
