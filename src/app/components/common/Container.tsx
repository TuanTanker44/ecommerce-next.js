import React from "react";
import { cn } from "@/app/components/ui/utils";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("max-w-full mx-auto px-4 bg-white", className)}>
      {children}
    </div>
  );
};

export default Container;
