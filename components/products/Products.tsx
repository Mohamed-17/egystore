import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/types";

function Products({
  data,
  title,
  limit,
}: {
  data: Product[];
  title?: string;
  limit?: number;
}) {
  const limitedData = data.slice(0, limit);
  return (
    <div className="my-10 flex flex-col justify-center items-center md:block">
      <h2 className="h2-bold mb-2">{title}</h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.length > 0 ? (
          limitedData.map((product: Product) => (
            <ProductCard key={product.name} data={product} />
          ))
        ) : (
          <div>
            <p>no products here</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
