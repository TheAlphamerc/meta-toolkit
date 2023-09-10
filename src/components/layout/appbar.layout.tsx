import React from "react";

interface NavbarLayoutProps {
  children: React.ReactNode;
}

/**
 * NavbarLayout is a layout component that wraps navbar and content
 * @param children
 */

export const NavbarLayout = ({ children }: NavbarLayoutProps) => {
  return (
    <div className="font-medium theme-border border-b  sticky top-0 z-10">
      <div className="absolute w-full inset-0  h-14 top-0 from-amber-300  via-purple-400 to-red-400 bg-gradient-to-l blur-lg -z-10"></div>
      <div className="bg-background h-16 flex items-center z-50 px-4">
        <div className="mx-auto max-w-7xl w-full">{children}</div>
      </div>
    </div>
  );
};
