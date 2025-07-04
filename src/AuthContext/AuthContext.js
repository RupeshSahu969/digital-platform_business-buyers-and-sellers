import React, { createContext, useState, useEffect } from 'react';
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [TemData, setTemData] = useState([]);
  const MAX_TemData = 5;

  useEffect(() => {
    const savedTemData = localStorage.getItem('formTemData');
    if (savedTemData) {
      setTemData(JSON.parse(savedTemData));
    }
  }, []);

  const saveTemplate = (newTemplate) => {
    setTemData(prev => {
      let updatedTemData;
      
      if (prev.some(t => t.id === newTemplate.id)) {
        updatedTemData = prev.map(t => 
          t.id === newTemplate.id ? newTemplate : t
        );
      } 
      else if (prev.length < MAX_TemData) {
        updatedTemData = [...prev, newTemplate];
      } else {
        alert(`Maximum ${MAX_TemData} Templete allowed`);
        return prev;
      }
      
      localStorage.setItem('formTemData', JSON.stringify(updatedTemData));
      return updatedTemData;
    });
  };

  const getTemplateById = (id) => {
    return TemData.find(t => t.id === id);
  };

  return (
    <AuthContext.Provider value={{ TemData, saveTemplate, getTemplateById }}>
      {children}
    </AuthContext.Provider>
  );
};