import React from 'react';
import Button from '../Components/Button';
import FormRenderer from '../Components/FormRenderer';

const TemplatePreviewModal = ({ template, onClose }) => {
  if (!template) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center p-4 z-50 overflow-auto">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 relative">
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Preview: {template.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            &times;
          </button>
        </div>
        <div className="p-4 border border-gray-200 rounded-md">
          <FormRenderer template={template} formData={{}} onFieldChange={() => { }} readOnly={true} />
        </div>
        <div className="mt-6 text-right">
          <Button onClick={onClose} variant="secondary">
            Close Preview
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TemplatePreviewModal;