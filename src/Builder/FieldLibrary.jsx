import React, { useState } from 'react';
import { 
  BsTextParagraph, BsCardText 
} from 'react-icons/bs';
import { 
  BiRadioCircle, BiCheckbox, BiImage 
} from 'react-icons/bi';
import { 
  RiUploadCloudLine, RiDropdownList 
} from 'react-icons/ri';
import { AuthData } from '../AuthContext/AuthContext';

const FieldLibrary = () => {
  const { addField } = AuthData();
  const [searchTerm, setSearchTerm] = useState('');
  
  const fieldTypes = [
    { type: 'text', name: 'Short Answer', icon: <BsCardText size={18} />, group: 'TEXT ELEMENTS' },
    { type: 'textarea', name: 'Paragraph', icon: <BsTextParagraph size={18} />, group: 'TEXT ELEMENTS' },
    { type: 'dropdown', name: 'Dropdown', icon: <RiDropdownList size={18} />, group: 'MULTIPLE CHOICE' },
    { type: 'radio', name: 'Radio', icon: <BiRadioCircle size={18} />, group: 'MULTIPLE CHOICE' },
    { type: 'checkbox', name: 'Checkbox', icon: <BiCheckbox size={18} />, group: 'MULTIPLE CHOICE' },
    { type: 'file', name: 'Upload', icon: <RiUploadCloudLine size={18} />, group: 'MEDIA ELEMENT' },
    { type: 'image', name: 'Image', icon: <BiImage size={18} />, group: 'MEDIA ELEMENT' },
  ];

  const filteredFields = fieldTypes.filter(field => 
    field.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    field.group.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedFields = filteredFields.reduce((acc, field) => {
    if (!acc[field.group]) acc[field.group] = [];
    acc[field.group].push(field);
    return acc;
  }, {});

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 h-fit">

      <div className="mb-4">
        <h2 className="text-base font-semibold text-gray-800 mb-2">Search element</h2>
        <input 
          type="text" 
          placeholder="Search field types..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />
      </div>
      
      {Object.entries(groupedFields).map(([group, fields]) => (
        <div key={group} className="mb-4">
          <h3 className="text-xs font-medium text-gray-500 bg-slate-400 uppercase tracking-wider mb-2">{group}</h3>
          <div className="grid grid-cols-2 gap-2">
            {fields.map((field) => (
              <button
                key={field.type}
                onClick={() => addField(field.type)}
                className="flex flex-col items-center justify-center p-2  bg-white text-xs border border-gray-200 rounded-md hover:bg-indigo-50 hover:border-indigo-200 transition-colors"
              >
                <div className="text-black bg-white mb-1 hover:text-white">{field.icon}</div>
                <span className="text-black bg-white hover:text-white">{field.name}</span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FieldLibrary;