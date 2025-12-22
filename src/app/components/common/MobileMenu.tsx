"use client";
import { AlignLeft } from "lucide-react";
import React, { useState } from "react";
import SideMenu from "./SideMenu";

const MobileMenu = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}>
        <AlignLeft className="hover:text-shop-dark hoverEffect md:hidden hover:cursor-pointer" />
      </button>
      <div className="md:hidden">
        <SideMenu
          isOpen={isSideMenuOpen}
          onClose={() => setIsSideMenuOpen(false)}
        />
      </div>
    </div>
  );
};

export default MobileMenu;
