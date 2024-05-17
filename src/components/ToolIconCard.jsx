import React from "react";

const ToolIconCard = ({ logo: LogoComponent, label }) => {
  return (
    <div className="p-2 rounded-md flex flex-col items-center justify-center text-center box-content h-32 w-32">
      <div className="text-white hover:text-sky-800" style={{ fontSize: "65px", margin: "6px" }}>
        <LogoComponent />
      </div>
      <h3>{label}</h3>
    </div>
  );
};

export default ToolIconCard;
