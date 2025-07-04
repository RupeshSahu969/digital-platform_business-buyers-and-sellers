import React, { useState } from 'react';
import { MdDelete, MdDragIndicator } from 'react-icons/md';

const SectionBuilder = ({ section, updateSection }) => {
  const [sectionTitle, setSectionTitle] = useState(section.title);
  const [draggedIndex, setDraggedIndex] = useState(null);

  const updateField = (fieldId, updates) => {
    const updatedFields = section.fields.map(field =>
      field.id === fieldId ? { ...field, ...updates } : field
    );
    updateSection({ ...section, fields: updatedFields });
  };

  const deleteField = (fieldId) => {
    updateSection({
      ...section,
      fields: section.fields.filter(f => f.id !== fieldId)
    });
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('text/plain', index);
    setDraggedIndex(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    const sourceIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
    if (sourceIndex === targetIndex) return;

    const newFields = [...section.fields];
    const [movedField] = newFields.splice(sourceIndex, 1);
    newFields.splice(targetIndex, 0, movedField);

    updateSection({ ...section, fields: newFields });
    setDraggedIndex(null);
  };

  return (
    <div className="mb-6 bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="p-4 border-b flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
        <input
          type="text"
          className="font-medium text-gray-800 bg-transparent border-none focus:ring-0 flex-1 min-w-0"
          value={sectionTitle}
          onChange={e => {
            setSectionTitle(e.target.value);
            updateSection({ ...section, title: e.target.value });
          }}
          placeholder="Section Title"
        />
        <button
          onClick={() => updateSection({ ...section, fields: [] })}
          className="text-red-500 hover:text-red-700 text-sm bg-white border-none"
        >
          Clear All
        </button>
      </div>
      <div className="p-4">
        {section.fields.length === 0 ? (
          <div className="text-center py-8 text-gray-500 text-sm">
            Drag fields here or select from the right panel
          </div>
        ) : (
          <div className="space-y-3">
            {section.fields.map((field, index) => (
              <div
                key={field.id}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={(e) => handleDragOver(e)}
                onDrop={(e) => handleDrop(e, index)}
                className={`p-3 border rounded-md flex items-start gap-3 ${draggedIndex === index ? 'border-blue-400 bg-blue-50' : 'border-gray-200 bg-gray-50'
                  }`}
              >
                <div
                  className="cursor-grab pt-1.5 text-gray-400 hover:text-gray-600"
                  draggable
                >
                  <MdDragIndicator />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <input
                      type="text"
                      value={field.label}
                      onChange={e => updateField(field.id, { label: e.target.value })}
                      className="
                                font-medium 
                                bg-white 
                                border 
                                border-gray-300 
                                rounded-md 
                                px-3 
                                py-2 
                                w-full sm:w-4/5 
                                focus:outline-none 
                                focus:ring-2 
                                focus:ring-blue-500
                                placeholder-gray-400"placeholder="Field Label" />

                    <button
                      onClick={() => deleteField(field.id)}
                      className="text-red-400 hover:text-red-600 border-none bg-white"
                    >
                      <MdDelete />
                    </button>
                  </div>

                  {field.type !== 'label' && (
                    <div className="flex items-center mt-2">
                      <input
                        type="checkbox"
                        id={`required-${field.id}`}
                        checked={field.required}
                        onChange={e => updateField(field.id, { required: e.target.checked })}
                        className="mr-2"
                      />
                      <label htmlFor={`required-${field.id}`} className="text-sm text-gray-600">
                        Required
                      </label>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        {section.fields.length > 0 && (
          <div className="mt-4 hidden md:flex justify-end">
            <button
              onClick={() => {

                console.log("Final section data:", section);
              }}
              className="px-4 py-2 bg-black text-white  hover:text-white rounded-md hover:bg-black transition"
            >
              Done
            </button>

          </div>
        )}
      </div>
    </div>
  );
};

export default SectionBuilder;
