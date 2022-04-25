import React from "react";

{/* /////////////////////     DEFINE TYPE S OF PROPS  ///////////////   */}

interface Props {
  flexDirection?: string;
  alignItems?: string;
  className?: string;
  display?: string;
  maxWidth?: string;
  margin?: string;
  children?: React.ReactNode;
}

export const PageItemWrapper: React.FC<Props> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};
