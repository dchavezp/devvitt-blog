import ButtonBack from "@/components/ButtonBack";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center">
      <ButtonBack />
      {children}
    </div>
  );
}

export default Layout;
