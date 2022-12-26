import React from "react";
import Typography from "../../components/atoms/Typography";

const PublicLayout = ({ children }) => {
  return (
    <div>
      <p>Public Layout</p>
     
      {children}
    </div>
  );
};

export default PublicLayout;
