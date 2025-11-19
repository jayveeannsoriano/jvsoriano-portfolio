import React from "react";
import { Footer } from "flowbite-react";

const PageFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Footer container className="sticky top-[100vh] bg-secondary">
      <div className="w-full items-center text-center">
        <Footer.Copyright by="Jayvee Ann Soriano" year={currentYear} />
      </div>
    </Footer>
  );
};

export default PageFooter;
