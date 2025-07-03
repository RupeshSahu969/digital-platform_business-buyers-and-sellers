import React from 'react';
import { FiLink, FiMail, FiCopy } from 'react-icons/fi';

const SharePage = () => {
  const formLink = "https://your-form-builder.com/form/12345";
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(formLink);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto py-8 px-3">
        <div className="bg-white rounded-lg shadow-sm p-5">
          <h1 className="text-lg font-bold text-gray-800 mb-4">Share Form</h1>
          
          <div className="mb-5">
            <h2 className="text-sm font-medium text-gray-700 mb-2">Form Link</h2>
            <div className="flex">
              <input
                type="text"
                value={formLink}
                readOnly
                className="flex-1 px-3 py-1.5 text-sm border border-gray-300 rounded-l-md focus:outline-none"
              />
              <button 
                onClick={copyToClipboard}
                className="px-3 py-1.5 text-sm bg-gray-100 border border-l-0 border-gray-300 rounded-r-md hover:bg-gray-200 flex items-center"
              >
                <FiCopy className="mr-1" size={14} /> Copy
              </button>
            </div>
          </div>
          
          <div className="mb-5">
            <h2 className="text-sm font-medium text-gray-700 mb-2">Share via</h2>
            <div className="grid grid-cols-2 gap-2">
              <button className="py-2 text-xs bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center justify-center">
                <FiLink className="mr-1" /> Copy Link
              </button>
              <button className="py-2 text-xs bg-red-600 text-white rounded-md hover:bg-red-700 flex items-center justify-center">
                <FiMail className="mr-1" /> Email
              </button>
            </div>
          </div>
          
          <div>
            <h2 className="text-sm font-medium text-gray-700 mb-2">Embed Form</h2>
            <textarea
              value={`<iframe src="${formLink}" width="100%" height="500"></iframe>`}
              readOnly
              rows={2}
              className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none"
            />
            <p className="mt-1 text-xs text-gray-500">
              Copy and paste this code into your website to embed the form
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SharePage;