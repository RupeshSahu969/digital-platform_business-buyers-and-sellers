import React from 'react';

const FormRenderer = ({ template, formData, onFieldChange, readOnly = false }) => 
  {
  if (!template || !template.sections || template.sections.length === 0) {
    return <p className="text-gray-500 text-center">No sections or fields in this template to display.</p>;
  }

  const getFieldRender = (field) => {
    const commonProps = {
      id: field.id,
      name: field.id,
      value: formData[field.id] || '',
      onChange: (e) => onFieldChange(field.id, e.target.value),
      className: "mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500",
      readOnly: readOnly,
      disabled: readOnly,
    };

    switch (field.type) {
      case 'label':
        const Tag = field.style === 'H1' ? 'h1' : field.style === 'H2' ? 'h2' : 'h3';
        const textSize = field.style === 'H1' ? 'text-3xl' : field.style === 'H2' ? 'text-2xl' : 'text-xl';
        return <Tag className={`font-semibold text-gray-800 mb-2 ${textSize}`}>{field.label}</Tag>;
      case 'text':
        return (
          <input
            type="text"
            placeholder={field.helpText || field.label}
            {...commonProps}
            required={field.required}
          />
        );
      case 'textarea':
        return (
          <textarea
            rows="3"
            placeholder={field.helpText || field.label}
            {...commonProps}
            required={field.required}
          ></textarea>
        );
      case 'number':
        return (
          <input
            type="number"
            placeholder={field.helpText || field.label}
            {...commonProps}
            required={field.required}
          />
        );
      case 'boolean':
        if (field.subtype === 'checkbox') {
          return (
            <label className="flex items-center mt-2">
              <input
                type="checkbox"
                checked={!!formData[field.id]}
                onChange={(e) => onFieldChange(field.id, e.target.checked)}
                className="form-checkbox text-blue-600 h-5 w-5"
                disabled={readOnly}
              />
              <span className="ml-2 text-gray-700">{field.label}</span>
            </label>
          );
        } else if (field.subtype === 'toggle') {
          return (
            <div className="flex items-center mt-2">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={!!formData[field.id]}
                  onChange={(e) => onFieldChange(field.id, e.target.checked)}
                  className="sr-only peer"
                  disabled={readOnly}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-700">{field.label}</span>
              </label>
            </div>
          );
        }
        return null;
      case 'enum':
        return (
          <select
            {...commonProps}
            required={field.required}
          >
            <option value="">-- Select {field.label} --</option>
            {field.options.map((option, idx) => (
              <option key={idx} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case 'file':
        return (
            <input type="file" {...commonProps} onChange={(e) => onFieldChange(field.id, e.target.files[0])} />
        );
      case 'image':
        return <p className="text-gray-500">Image placeholder (not an input field)</p>;
      default:
        return <p className="text-red-500">Unsupported field type: {field.type}</p>;
    }
  };

  return (
    <div className="space-y-6">
      {template.sections.map((section) => (
        <div key={section.id} className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">{section.title}</h2>
          <div className="space-y-4">
            {section.fields.map((field) => (
              <div key={field.id}>
                {field.type !== 'label' && (
                  <label htmlFor={field.id} className="block text-sm font-medium text-gray-700">
                    {field.label} {field.required && <span className="text-red-500">*</span>}
                  </label>
                )}
                {getFieldRender(field)}
                {field.helpText && <p className="mt-1 text-sm text-gray-500">{field.helpText}</p>}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FormRenderer;