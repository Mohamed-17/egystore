import Products from "@/components/products/Products";

import { getLatesetProducts } from "@/lib/actions/product-action";
import { number } from "zod";
// import sampleData from "@/db/sampleData";

async function HomePage() {
  const latestProduct = await getLatesetProducts();

  return <Products data={latestProduct} title="Newest Products" limit={4} />;
}

export default HomePage;
