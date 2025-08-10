import React from 'react';

const BuyerProfile = ({ buyer }) => {
  return (
    <div className="space-y-4">
      <div>
        <h4 className="text-lg font-semibold text-gray-800">Experience</h4>
        <p className="text-gray-600">{buyer.experience}</p>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-800">Acquisition Thesis</h4>
        <p className="text-gray-600">
          I am actively seeking profitable, established businesses in the {buyer.industry} sector with strong recurring revenue models and a clear path to growth.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-lg font-semibold text-gray-800">Location</h4>
          <p className="text-gray-600">Flexible, US-based</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-800">Funding</h4>
          <p className="text-gray-600">SBA financing and personal equity</p>
        </div>
      </div>
    </div>
  );
};

export default BuyerProfile;