import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MdSave, MdPreview, MdAdd } from 'react-icons/md';
import { AuthContext } from '../AuthContext/AuthContext';
import FieldPalette from '../Builder/FiledPalette';
import TemplatePreviewModal from '../Builder/TemplatePreviewModal';
import SectionBuilder from '../Builder/SectionBuilder';

const BuilderPage = () => {
  const { templateId } = useParams();
  const { saveTemplate, getTemplateById } = useContext(AuthContext);
  const [template, setTemplate] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    if (templateId) {
      const existingTemplate = getTemplateById(templateId);
      if (existingTemplate) {
        setTemplate(existingTemplate);
      }
    } else {
      setTemplate({
        id: Date.now().toString(),
        name: 'New Template',
        sections: [
          {
            id: `section-${Date.now()}`,
            title: 'Section 1',
            fields: [],
          },
        ],
      });
    }
  }, [templateId, getTemplateById]);

  const updateSection = (updatedSection) => {
    setTemplate((prev) => ({
      ...prev,
      sections: prev.sections.map((sec) =>
        sec.id === updatedSection.id ? updatedSection : sec
      ),
    }));
  };

  const handleSave = () => {
    saveTemplate(template);
    alert('Template saved successfully!');
  };
  const deleteSection = (id) => {
    setTemplate((prev) => ({
      ...prev,
      sections: prev.sections.filter((sec) => sec.id !== id),
    }));
  };

  if (!template) return <div>Loading...</div>;

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="bg-white border-b p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-sm">
        <div className="flex flex-col flex-1 max-w-full sm:max-w-[500px] mx-auto sm:mx-0">
          <label htmlFor="template-name" className="text-sm text-balck font-bold mb-1">
            Full Name
          </label>
          <input
            id="template-name"
            type="text"
            placeholder=""
            className="text-lg sm:text-xl font-semibold border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            value={template.name}
            onChange={(e) => setTemplate({ ...template, name: e.target.value })}
          />
        </div>
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
          <button
            onClick={() => setShowPreview(true)}
            className="flex items-center gap-1 px-3 py-1.5 text-sm border border-gray-300 rounded-md hover:bg-gray-100 transition"
          >
            <MdPreview className="text-gray-600" /> Preview
          </button>
          <button
            onClick={handleSave}
            className="flex items-center gap-1 px-3 py-1.5 text-sm bg-blue-600 text-white hover:text-white rounded-md hover:bg-blue-700 transition"
          >
            <MdSave /> Save
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        <div className="flex-1 overflow-auto p-4 space-y-4">
          {template.sections.map((section) => (
            <SectionBuilder
              key={section.id}
              section={section}
              updateSection={updateSection}
            />
          ))}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => {
                setTemplate({
                  ...template,
                  sections: [
                    ...template.sections,
                    {
                      id: `section-${Date.now()}`,
                      title: `Section ${template.sections.length + 1}`,
                      fields: [],
                    },
                  ],
                });
              }}
              className="
          flex items-center gap-2
          px-6 py-3
          bg-gradient-to-r from-blue-500 to-indigo-600
          text-white
          hover:text-white
          font-semibold
          rounded-full
          shadow-lg
          hover:from-blue-600 hover:to-indigo-700
          focus:outline-none focus:ring-4 focus:ring-indigo-300
          transition
          transform hover:scale-105 active:scale-95
          text-lg
          select-none
          cursor-pointer
        "
            >
              <MdAdd size={24} />
              Add Field
            </button>
          </div>
        </div>
        <div className="md:w-80 w-full border-t md:border-t-0 md:border-l p-4 bg-white overflow-auto shadow-inner">
          <FieldPalette
            onAddField={(type) => {
              const firstSection = { ...template.sections[0] };
              firstSection.fields = [
                ...firstSection.fields,
                {
                  id: `field-${Date.now()}`,
                  type,
                  label: type === 'label' ? 'New Label' : 'Field Label',
                  required: false,
                },
              ];
              updateSection(firstSection);
            }}
          />
        </div>
      </div>

      {showPreview && (
        <TemplatePreviewModal
          template={template}
          onClose={() => setShowPreview(false)}
        />
      )}
    </div>
  );
};

export default BuilderPage;
