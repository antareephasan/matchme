import React, { ReactNode } from "react";

const MembersLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h1>Members Layout</h1>
      {children}
    </div>
  );
};

export default MembersLayout;
