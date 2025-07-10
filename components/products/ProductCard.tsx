import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import Link from "next/link";
import ProductPrice from "./ProductPrice";
import { Product } from "@/types";

function ProductCard({ data }: { data: Product }) {
  return (
    <div>
      <Card className="w-full max-w-sm p-0">
        <CardHeader className="p-0 items-center">
          <Link href={`/product/${data.slug}`}>
            <Image
              src={data.images[0]}
              alt={data.name}
              width={500}
              height={500}
              priority
            />
          </Link>
        </CardHeader>
        <CardContent className="grid gap-4 p-4">
          <div className="text-sm">{data.brand}</div>
          <Link href={`/product/${data.slug}`}>{data.name}</Link>
          <div className="flex justify-between items-center">
            <div>{data.rating} Stars</div>
            <ProductPrice value={Number(data.price)} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductCard;
