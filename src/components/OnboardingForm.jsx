import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OnboardingForm = ({ userType }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, we would send this data to a backend.
    console.log('Form Submitted:', formData);
    navigate('/discovery');
  };

  const renderBuyerForm = () => (
    <>
      {step === 1 && (
        <div className="space-y-4">
          <p className="text-lg text-gray-600">Tell us about your acquisition interests.</p>
          <label className="block">
            <span className="text-gray-700">Preferred Industry</span>
            <input
              type="text"
              name="industry"
              value={formData.industry || ''}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-2 border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 cursor-text"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Investment Range ($)</span>
            <input
              type="text"
              name="investmentRange"
              value={formData.investmentRange || ''}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-2 border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 cursor-text"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Location Preference</span>
            <input
              type="text"
              name="location"
              value={formData.location || ''}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-2 border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 cursor-text"
            />
          </label>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={nextStep}
              className="py-2 px-4 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition"
            >
              Next
            </button>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="space-y-4">
          <p className="text-lg text-gray-600">What is your background?</p>
          <label className="block">
            <span className="text-gray-700">Prior Experience</span>
            <textarea
              name="experience"
              value={formData.experience || ''}
              onChange={handleInputChange}
              rows="4"
              className="mt-1 block w-full rounded-md border-2 border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 cursor-text"
            ></textarea>
          </label>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={prevStep}
              className="py-2 px-4 bg-gray-300 text-gray-700 rounded-md shadow-md hover:bg-gray-400 transition"
            >
              Back
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="py-2 px-4 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition"
            >
              Finish
            </button>
          </div>
        </div>
      )}
    </>
  );

  const renderSellerForm = () => (
    <>
      {step === 1 && (
        <div className="space-y-4">
          <p className="text-lg text-gray-600">Tell us about your business.</p>
          <label className="block">
            <span className="text-gray-700">Business Name</span>
            <input
              type="text"
              name="businessName"
              value={formData.businessName || ''}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-2 border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 cursor-text"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Annual Revenue ($)</span>
            <input
              type="text"
              name="revenue"
              value={formData.revenue || ''}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-2 border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 cursor-text"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Reason for Selling</span>
            <textarea
              name="reason"
              value={formData.reason || ''}
              onChange={handleInputChange}
              rows="3"
              className="mt-1 block w-full rounded-md border-2 border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 cursor-text"
            ></textarea>
          </label>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={nextStep}
              className="py-2 px-4 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition"
            >
              Next
            </button>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="space-y-4">
          <p className="text-lg text-gray-600">What is your ideal buyer like?</p>
          <label className="block">
            <span className="text-gray-700">Buyer Profile (describe)</span>
            <textarea
              name="idealBuyer"
              value={formData.idealBuyer || ''}
              onChange={handleInputChange}
              rows="4"
              className="mt-1 block w-full rounded-md border-2 border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 cursor-text"
            ></textarea>
          </label>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={prevStep}
              className="py-2 px-4 bg-gray-300 text-gray-700 rounded-md shadow-md hover:bg-gray-400 transition"
            >
              Back
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="py-2 px-4 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition"
            >
              Finish
            </button>
          </div>
        </div>
      )}
    </>
  );

  return (
    <form className="space-y-6">
      <div className="flex justify-center space-x-2">
        <div
          className={`w-8 h-2 rounded-full ${step === 1 ? 'bg-indigo-600' : 'bg-gray-300'}`}
        ></div>
        <div
          className={`w-8 h-2 rounded-full ${step === 2 ? 'bg-indigo-600' : 'bg-gray-300'}`}
        ></div>
      </div>
      {userType === 'buyer' ? renderBuyerForm() : renderSellerForm()}
    </form>
  );
};

export default OnboardingForm;
