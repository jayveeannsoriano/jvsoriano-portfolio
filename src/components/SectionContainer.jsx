import React from 'react';

const SectionContainer = ({ children, id, sectionName = null, bgColor = 'transparent' }) => {
  return (
    <div className={`w-full py-20 px-8 ${bgColor}`} id={id}>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        {sectionName && (
          <div className="flex justify-center">
            <h1 className="text-2xl font-bold">{sectionName}</h1>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default SectionContainer;
