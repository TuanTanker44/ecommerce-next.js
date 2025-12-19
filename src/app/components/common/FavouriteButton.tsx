import { Heart } from "lucide-react";
import React from "react";

const FavouriteButton = () => {
  return (
    <div className="group relative">
      <Heart className="w-6 h-6 text-shop-light-green group-hover:text-shop-dark-green hoverEffect" />
      <span className="absolute -top-1 -right-1 bg-shop-dark-green text-white h-3.5 w-3.5 rounded-full font-semibold flex items-center justify-center text-xs">
        0
      </span>
    </div>
  );
};

export default FavouriteButton;
