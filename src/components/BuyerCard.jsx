import React, { useState } from 'react';
import BuyerProfile from './BuyerProfile';


const BuyerCard = ({ buyer, onAction }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold text-gray-900">{buyer.name}</h3>
        <p className="text-sm text-indigo-600 font-medium">{buyer.industry}</p>
        <p className="mt-2 text-gray-600">Investment Range: <span className="font-medium">{buyer.investmentRange}</span></p>
        {!isExpanded && (
          <p className="mt-2 text-gray-500 line-clamp-3">{buyer.experience}</p>
        )}
      </div>
      {isExpanded && (
        <div className="mt-4">
          <BuyerProfile buyer={buyer} />
        </div>
      )}
      <div className="mt-4 flex space-x-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex-1 py-2 px-4 rounded-md text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
        >
          {isExpanded ? 'Collapse' : 'Expand'}
        </button>
        <button
          onClick={() => onAction(buyer.id, 'rejected')}
          className="flex-1 py-2 px-4 rounded-md text-sm font-medium border border-red-500 text-red-500 hover:bg-red-50 transition"
        >
          Reject
        </button>
        <button
          onClick={() => onAction(buyer.id, 'accepted')}
          className="flex-1 py-2 px-4 rounded-md text-sm font-medium bg-green-500 text-white hover:bg-green-600 transition"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default BuyerCard;