import React, { useState } from 'react';
import FinancialDocumentAnalyzer from './FinancialDocumentAnalyzer';


const AcquisitionWorkflow = ({ deal }) => {
  const [currentStep, setCurrentStep] = useState(deal.progress.find(p => !p.isComplete)?.step || 1);

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Step 1: Introduction & Initial Agreement</h3>
            <p className="text-gray-600">
              Congratulations on the match! You can now use our secure messaging to exchange pleasantries and set the stage for the deal.
            </p>
            <button className="py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
              Go to Messaging
            </button>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Step 2: Document Exchange & Financial Analysis</h3>
            <p className="text-gray-600">
              Friction Point: Gathering and analyzing financial documents can be time-consuming and messy.
            </p>
            <p className="font-semibold text-indigo-600">
              Solution: Use our AI Financial Document Analyzer.
            </p>
            <FinancialDocumentAnalyzer />
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Step 3: Due Diligence</h3>
            <p className="text-gray-600">
              Friction Point: Coordinating due diligence can involve many parties and a lot of back-and-forth.
            </p>
            <p className="font-semibold text-indigo-600">
              Solution: Our platform provides a centralized data room and checklist to track progress and assign tasks.
            </p>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Step 4: Legal & Closing</h3>
            <p className="text-gray-600">
              Friction Point: Finalizing legal documents can be a maze of complexities.
            </p>
            <p className="font-semibold text-indigo-600">
              Solution: Use our integrated legal document templates and e-signature tools to streamline the final steps.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-gray-100 rounded-lg p-4">
        {deal.progress.map(step => (
          <div
            key={step.step}
            className={`flex flex-col items-center flex-1 cursor-pointer transition-transform duration-300 ${currentStep === step.step ? 'scale-105' : ''}`}
            onClick={() => setCurrentStep(step.step)}
          >
            <div className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold transition-colors duration-300 ${currentStep >= step.step ? 'bg-indigo-600' : 'bg-gray-400'}`}>
              {step.step}
            </div>
            <p className={`mt-2 text-sm text-center font-medium ${currentStep === step.step ? 'text-indigo-600' : 'text-gray-500'}`}>
              {step.title}
            </p>
          </div>
        ))}
      </div>
      <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
        {renderStepContent()}
      </div>
    </div>
  );
};

export default AcquisitionWorkflow;