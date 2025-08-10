import React from 'react';
import { useParams } from 'react-router-dom';
import AcquisitionWorkflow from '../components/AcquisitionWorkflow';

const Matched = () => {
  const { matchId } = useParams();
  const mockDeal = {
    id: matchId,
    buyerName: 'Alice Smith',
    sellerName: 'Acme LLC',
    status: 'Initial Agreement',
    progress: [
      { step: 1, title: 'Introduction', isComplete: true },
      { step: 2, title: 'Document Exchange', isComplete: false },
      { step: 3, title: 'Due Diligence', isComplete: false },
      { step: 4, title: 'Closing', isComplete: false },
    ],
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Deal with {mockDeal.buyerName}</h2>
      <p className="text-lg text-gray-600 mb-8">
        You and {mockDeal.buyerName} have matched! Let's get to work.
      </p>
      <AcquisitionWorkflow deal={mockDeal} />
    </div>
  );
};

export default Matched;