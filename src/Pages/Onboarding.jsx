import React, { useState } from 'react';
// import OnboardingForm from '../Components/OnboardingForm';
import OnboardingForm from '../components/OnboardingForm';

const Onboarding = () => {
  const [userType, setUserType] = useState(null);

  const renderContent = () => {
    if (!userType) {
      return (
        <div className="space-y-4">
          <p className="text-lg text-gray-600">Are you a business buyer or a seller?</p>
          <div className="flex space-x-4">
            <button
              onClick={() => setUserType('buyer')}
              className="w-1/2 py-3 px-6 bg-blue-500 text-white hover:text-white rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              I am a Buyer
            </button>
            <button
              onClick={() => setUserType('seller')}
              className="w-1/2 py-3 px-6 bg-green-500 text-white hover:text-white rounded-lg shadow-md hover:bg-green-600 transition"
            >
              I am a Seller
            </button>
          </div>
        </div>
      );
    }
    return <OnboardingForm userType={userType} />;
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Let's Get You Set Up!</h2>
      {renderContent()}
    </div>
  );
};

export default Onboarding;