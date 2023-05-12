"use client";
import useEscapeKey from "@/hooks/useEscapeKey";
import React, { useEffect } from "react";

function Modal({
  active,
  setActive,
  children,
}: {
  active: boolean;
  setActive: () => void;
  children: React.ReactNode;
}) {
  useEscapeKey(setActive);
  useEffect(() => {
    if (active) {
      // prevent bg scroll
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [active]);

  if (active) {
    return (
      <div className="px-4 absolute w-screen h-full bg-neutral top-0 left-0 z-50 bg-opacity-70 backdrop-blur-sm flex flex-col items-center justify-center overflow-y-hidden transition duration-150">
        {children}
      </div>
    );
  }
  return null;
}

export default Modal;
