import React from "react";

{
  /* /////////////////////     DEFINE TYPE S OF PROPS  ///////////////   */
}

interface Props {
  fontSize?: any;
  children?: React.ReactNode;
  className?: string;
  color?: string;
}

export const PageText: React.FC<Props> = ({ className, children }) => {
  return <span className={className}>{children}</span>;
};
