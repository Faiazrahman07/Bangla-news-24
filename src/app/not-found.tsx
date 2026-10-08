
import React from 'react';
import Link from 'next/link';

const Notfound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-200 via-base-100 to-base-200 px-6">

      <div className="text-center">

        {/* 404 */}
        <h1 className="text-8xl md:text-9xl font-black tracking-tighter text-primary">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold mt-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-base-content/60 mt-3 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist or may have been moved.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="btn btn-primary mt-7 rounded-xl px-8 shadow-lg hover:scale-105 transition-transform"
        >
          Go Back Home
        </Link>

      </div>

    </div>
  );
};

export default Notfound;
