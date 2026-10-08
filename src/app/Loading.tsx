
import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="flex flex-col items-center gap-4">

        {/* Spinner */}
        <span className="loading loading-spinner loading-lg text-primary"></span>

        {/* Text */}
        <div className="text-center">
          <h2 className="text-lg font-semibold">
            Loading
          </h2>

          <p className="text-sm text-base-content/50">
            Please wait a moment...
          </p>
        </div>

      </div>
    </div>
  );
};

export default Loading;