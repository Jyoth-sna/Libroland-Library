import React, { useEffect, useState } from 'react';

const LoadingPage = ({ children, loadingDelay }) => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, loadingDelay);

    return () => clearTimeout(timeout);
  }, [loadingDelay]);

  return (
    <div className={`loader-wrapper ${showLoader ? 'show' : ''}`}>
      {showLoader ? (
        <>
          <div className="loader book">
            <figure className="page"></figure>
            <figure className="page"></figure>
            <figure className="page"></figure>
          </div>
          <div className="loading-text">
            <h1>Did you know? The largest book on record measures 1.5x2.1 meters and weighs 60 kilograms!</h1>
          </div>
        </>
      ) : (
        children
      )}
    </div>
  );
};

export default LoadingPage;
