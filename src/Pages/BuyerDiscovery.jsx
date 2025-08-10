import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import BuyerCard from '../components/BuyerCard';

const mockBuyers = [
  { id: 1, name: 'Alice Smith', industry: 'SaaS', investmentRange: '$5M - $10M', experience: '15 years in software development. Previously founded and sold two tech startups.' },
  { id: 2, name: 'Bob Johnson', industry: 'Manufacturing', investmentRange: '$2M - $5M', experience: '30 years in manufacturing management. Specializes in operational efficiency.' },
  { id: 3, name: 'Charlie Brown', industry: 'e-Commerce', investmentRange: '$1M - $3M', experience: 'Former Amazon executive with a passion for online retail brands.' },
];

const BuyerDiscovery = () => {
  const [buyers, setBuyers] = useState(mockBuyers);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAction = (buyerId, action) => {
    console.log(`Buyer ID ${buyerId} was ${action}`);
    if (action === 'accepted') {
      // Simulate creating a match and getting a matchId
      const newMatchId = buyerId;
      // Navigate to the matched page with the new ID
      navigate(`/matched/${newMatchId}`); 
    }
    setBuyers(buyers.filter(buyer => buyer.id !== buyerId));
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Potential Buyers for You</h2>
      <p className="text-lg text-gray-600 mb-8">
        Review these profiles. Tap "Accept" to start a conversation or "Reject" to see the next one.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {buyers.length > 0 ? (
          buyers.map(buyer => (
            <BuyerCard key={buyer.id} buyer={buyer} onAction={handleAction} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg">No more buyers for now. Check back later!</p>
        )}
      </div>
    </div>
  );
};

export default BuyerDiscovery;