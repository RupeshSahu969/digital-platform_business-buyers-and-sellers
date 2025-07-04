import React from 'react';
import { 
  MdTitle, MdTextFields, MdSubject, MdOutlineNumbers,
  MdCheckBox, MdToggleOn, MdKeyboardArrowDown, 
  MdFileUpload, MdImage 
} from 'react-icons/md';

const FieldPalette = ({ onAddField }) => {
  const fieldTypes = [
    { id: 'label', name: 'Label', icon: <MdTitle /> },
    { id: 'shortAnswer', name: 'Short Answer', icon: <MdTextFields /> },
    { id: 'paragraph', name: 'Paragraph', icon: <MdSubject /> },
    { id: 'number', name: 'Number', icon: <MdOutlineNumbers /> },
    { id: 'checkbox', name: 'Checkbox', icon: <MdCheckBox /> },
    { id: 'toggle', name: 'Toggle', icon: <MdToggleOn /> },
    { id: 'dropdown', name: 'Dropdown', icon: <MdKeyboardArrowDown /> },
    { id: 'upload', name: 'Upload', icon: <MdFileUpload /> },
    { id: 'image', name: 'Image', icon: <MdImage /> }
  ];

  const renderFieldGroup = (title, ids) => (
    <div className="mb-6">
      <h3 className="text-md font-semibold text-gray-700 mb-3 flex items-center">
        <span className="bg-gray-200 w-4 h-0.5 mr-2"></span>
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-2">
        {fieldTypes.filter(f => ids.includes(f.id)).map(field => (
          <div
            key={field.id}
            className="flex flex-col items-center p-3 bg-white border border-gray-200 rounded-md cursor-pointer hover:border-blue-400 transition-colors"
            onClick={() => onAddField(field.id)}
          >
            <div className="text-blue-600">{field.icon}</div>
            <span className="text-xs text-gray-600 mt-1">{field.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Form Elements</h2>
      {renderFieldGroup('TEXT ELEMENTS', ['label', 'shortAnswer', 'paragraph'])}
      {renderFieldGroup('NUMBER ELEMENTS', ['number'])}
      {renderFieldGroup('CHOICE ELEMENTS', ['checkbox', 'toggle', 'dropdown'])}
      {renderFieldGroup('MEDIA ELEMENTS', ['upload', 'image'])}
    </div>
  );
};

export default FieldPalette;