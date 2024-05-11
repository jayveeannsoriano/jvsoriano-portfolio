import React from 'react';

const ToolIconCard = ({ logo: LogoComponent, label }) => {
  return (
    <div className='flex flex-col items-center justify-center text-center box-content h-32 w-32'>
      <div style={{ fontSize: '80px', color: 'white', margin:'6px'}}>
        <LogoComponent />
      </div>
      <h3>{label}</h3>
    </div>
  );
};

export default ToolIconCard;
