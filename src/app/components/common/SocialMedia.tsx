import React from "react";
import { cn } from "../ui/utils";
import { socialMediaData } from "@/constants/socialMediaData";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../ui/tooltip";
import Link from "next/link";
interface SocialMediaProps {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const SocialMedia = ({
  className,
  iconClassName,
  tooltipClassName,
}: SocialMediaProps) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {socialMediaData.map((item) => {
          const Icon = item?.icon;
          return (
            <Tooltip key={item?.title}>
              <TooltipTrigger asChild>
                <Link
                  href={item?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "p-2 border rounded-full hover:text-white hover:bg-shop-light-green hoverEffect",
                    iconClassName
                  )}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent
                className={cn(
                  "bg-white text-shop-dark font-semibold",
                  tooltipClassName
                )}
              >
                {item?.title}
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
