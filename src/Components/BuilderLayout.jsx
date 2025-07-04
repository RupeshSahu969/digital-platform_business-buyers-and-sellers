import React from 'react';

const BuilderLayout = ({ leftTop, leftBottom, right }) => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4 p-3">
      <div className="lg:col-span-3 space-y-4">
        {leftTop}
        {leftBottom}
      </div>

      <div className="lg:col-span-1">
        {right}
      </div>
    </div>
  );
};

export default BuilderLayout;
