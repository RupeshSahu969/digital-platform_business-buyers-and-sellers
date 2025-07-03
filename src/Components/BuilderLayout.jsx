import React from 'react';

const BuilderLayout = ({ left, center, right }) => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4 p-3">
      <div className="lg:col-span-1">
        {left}
      </div>
      <div className="lg:col-span-2">
        {center}
      </div>
      <div className="lg:col-span-1">
        {right}
      </div>
    </div>
  );
}

export default BuilderLayout;