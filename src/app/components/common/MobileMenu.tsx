import { AlignLeft } from "lucide-react";
import React from "react";

const MobileMenu = () => {
  return (
    <div>
      <button>
        <AlignLeft className="hover:text-shop-dark hoverEffect md:hidden hover:cursor-pointer" />
      </button>
    </div>
  );
};

export default MobileMenu;
