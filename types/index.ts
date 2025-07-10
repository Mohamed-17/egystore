import { z } from "zod";
import { productSchema } from "@/lib/validation";
export type Product = z.infer<typeof productSchema> & {
  id: string;
  rating: string;
  createdAt: Date;
};
