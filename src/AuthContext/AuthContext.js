import React, { createContext, useContext, useState, useEffect } from 'react';

const FormBuilderContext = createContext();

export function AuthContextProvider({ children }) {
  const [formTitle, setFormTitle] = useState('Untitled Form');
  const [fields, setFields] = useState([]);
  const [selectedField, setSelectedField] = useState(null);
  const [templates, setTemplates] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const savedForm = localStorage.getItem('formBuilderData');
    if (savedForm) {
      const { title, fields } = JSON.parse(savedForm);
      setFormTitle(title);
      setFields(fields);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    const formData = { title: formTitle, fields };
    localStorage.setItem('formBuilderData', JSON.stringify(formData));
  }, [formTitle, fields]);

  const addField = (type) => {
    const newField = {
      id: Date.now().toString(),
      type,
      label: getDefaultLabel(type),
      required: false,
      placeholder: '',
      helpText: '',
      options: ['Option 1', 'Option 2']
    };
    
    setFields([...fields, newField]);
    setSelectedField(newField);
  };

  const getDefaultLabel = (type) => {
    switch(type) {
      case 'text': return 'Short Answer';
      case 'textarea': return 'Paragraph';
      case 'dropdown': return 'Dropdown';
      case 'radio': return 'Radio Buttons';
      case 'checkbox': return 'Checkboxes';
      case 'file': return 'File Upload';
      case 'image': return 'Image Upload';
      default: return 'Field';
    }
  };

  const updateField = (id, updates) => {
    setFields(fields.map(field => 
      field.id === id ? { ...field, ...updates } : field
    ));
    
    if (selectedField && selectedField.id === id) {
      setSelectedField({ ...selectedField, ...updates });
    }
  };

  const deleteField = (id) => {
    setFields(fields.filter(field => field.id !== id));
    if (selectedField && selectedField.id === id) {
      setSelectedField(null);
    }
  };

  const saveTemplate = () => {
    if (templates.length >= 5) return;
    const newTemplate = {
      id: Date.now().toString(),
      title: formTitle,
      fields: [...fields]
    };
    setTemplates([...templates, newTemplate]);
    alert('Template saved!');
  };

  const value = {
    formTitle,
    setFormTitle,
    fields,
    setFields,
    selectedField,
    setSelectedField,
    addField,
    updateField,
    deleteField,
    saveTemplate,
    templates
  };

  return (
    <FormBuilderContext.Provider value={value}>
      {children}
    </FormBuilderContext.Provider>
  );
}

export function useFormBuilder() {
  const context = useContext(FormBuilderContext);
  if (!context) {
    throw new Error('useFormBuilder must be used within a FormBuilderProvider');
  }
  return context;
}