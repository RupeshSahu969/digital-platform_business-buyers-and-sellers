import React, { useState } from 'react';

const FinancialDocumentAnalyzer = () => {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setSummary(null);
  };

  const handleAnalyze = () => {
    if (!file) {
      alert('Please select a file first.');
      return;
    }
    
    setIsProcessing(true);
    // Simulate an AI analysis process with a delay
    setTimeout(() => {
      setSummary({
        keyMetrics: [
          { label: 'Revenue', value: '$1.5M' },
          { label: 'Net Profit Margin', value: '18%' },
          { label: 'Operating Expenses', value: '$1.2M' },
        ],
        highlights: 'The company has shown consistent year-over-year revenue growth. Operating expenses are well-managed. Potential areas for improvement include supply chain logistics.',
      });
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center bg-white shadow-sm">
      <div className="flex flex-col items-center justify-center">
        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L36 28v5m-4-15h.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="mt-2 text-sm text-gray-600">
          <label htmlFor="file-upload" className="relative cursor-pointer font-medium text-indigo-600 hover:text-indigo-500">
            <span>Upload a financial document</span>
            <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} />
          </label>
        </p>
        <p className="mt-1 text-xs text-gray-500">{file ? file.name : 'PDF, DOCX, or XLSX up to 10MB'}</p>
      </div>

      <button
        onClick={handleAnalyze}
        disabled={!file || isProcessing}
        className={`mt-4 w-full py-2 px-4 rounded-md text-white font-medium transition ${!file || isProcessing ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}
      >
        {isProcessing ? 'Analyzing...' : 'Analyze with AI'}
      </button>

      {summary && (
        <div className="mt-6 text-left">
          <h4 className="text-lg font-semibold text-gray-800">AI Summary & Key Metrics</h4>
          <div className="mt-2 grid grid-cols-2 gap-4">
            {summary.keyMetrics.map((metric, index) => (
              <div key={index} className="bg-gray-100 p-3 rounded-md">
                <p className="text-sm font-medium text-gray-500">{metric.label}</p>
                <p className="mt-1 text-xl font-bold text-gray-900">{metric.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <h5 className="text-md font-semibold text-gray-700">Highlights:</h5>
            <p className="mt-1 text-gray-600 text-sm">{summary.highlights}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinancialDocumentAnalyzer;