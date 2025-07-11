import { getSingleProduct } from "@/lib/actions/product-action";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { Button } from "@/components/ui/button";
import ProductPrice from "@/components/products/ProductPrice";
import ProductImages from "@/components/products/ProductImages";

type Props = {
  params: Promise<{ slug: string }>;
};
async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getSingleProduct(slug);
  if (!product) return notFound();

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-5 p-5">
        {/* Image section */}
        <div className="col-span-2">
          <ProductImages images={product.images} />
        </div>

        {/* Details section */}
        <div className="pt-7 pb-2 md:p-6 flex flex-col gap-6 col-span-2 md:ms-4">
          <p>
            {product.brand} {product.category}
          </p>
          <p className="font-semibold text-2xl">{product.name}</p>
          <p>
            {product.rating} of {product.numReviews} Reviewers
          </p>
          <Button className="w-20 rounded-full bg-green-100 text-green-700 cursor-pointer">
            <ProductPrice value={Number(product.price)} />
          </Button>
          <div className="flex flex-row md:flex-col gap-2 my-6">
            <p className="font-semibold">Description:</p>
            <p>{product.description}</p>
          </div>
        </div>

        {/* Action section */}
        <Card className="p-0 h-fit">
          <CardContent className="px-3 py-5">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <p className="font-semibold">Price</p>
                <ProductPrice value={Number(product.price)} />
              </div>
              <div className="flex justify-between items-center">
                <p className="font-semibold">Status</p>
                {product.stock > 0 ? (
                  <Badge variant="outline">In Stock</Badge>
                ) : (
                  <Badge variant="destructive">Out Of Stock</Badge>
                )}
              </div>
              {product.stock > 0 && (
                <Button className="w-full">Add To Cart</Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default ProductPage;
