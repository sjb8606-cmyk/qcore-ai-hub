import React from 'react';

const MaintenanceBanner = () => {
  const isMaintenanceMode = process.env.REACT_APP_MAINTENANCE_MODE === 'true';

  if (!isMaintenanceMode) {
    return null;
  }

  return (
    <div 
      className="w-full text-center py-4 px-4"
      style={{ backgroundColor: '#FFD700' }}
      data-testid="maintenance-banner"
    >
      <p className="text-white text-base md:text-lg font-medium m-0">
        🚧 Veridact is currently undergoing upgrades. The site will be unavailable for 1-2 days. Please check back soon!
      </p>
    </div>
  );
};

export default MaintenanceBanner;
