import { cn } from "@/lib/utils";
import React from "react";

function ProductPrice({
  value,

  className,
}: {
  value?: number;

  className?: string;
}) {
  const decemal = value?.toFixed(2);
  const [intValue, floatValue] = decemal?.split(".") ?? ["", ""];

  return (
    <p className={cn("text-2xl", className)}>
      <span className="align-super text-xs">$</span>
      {intValue}
      <span className="align-super text-xs">{floatValue}</span>
    </p>
  );
}

export default ProductPrice;
