"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
function ProductImages({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);
  return (
    <div className="space-6">
      <Image
        src={images[current]}
        alt="product image"
        width={1000}
        height={1000}
        className="object-cover object-center"
      />
      <div className="flex gap-3 mt-5">
        {images.map((image, index) => (
          <div
            className={cn(
              "border hover:border-orange-200",
              current === index && "border-orange-300"
            )}
            key={image}
            onClick={() => setCurrent(index)}
          >
            <Image
              src={image}
              alt={`image-${index}`}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductImages;
