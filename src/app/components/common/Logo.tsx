import Link from "next/link";
import { cn } from "@/app/components/ui/utils";
import React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/">
      <h2
        className={cn(
          "text-2xl font-black text-shop-dark-green tracking-wider uppercase hover:text-shop-light-green hoverEffect group font-sans",
          className
        )}
      >
        Shop
        <span className="text-shop-light-green group-hover:text-shop-dark-green hoverEffect">
          Cart
        </span>
      </h2>
    </Link>
  );
};

export default Logo;
