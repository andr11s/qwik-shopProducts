import { createContext } from "@builder.io/qwik";
import { Products } from "~/interfaces/products.interface";
import { CONTEXT } from "~/interfaces/shared.interface";
 
export interface dataProducts{
  products: Products[]
}

export const products_context = createContext<dataProducts>(CONTEXT.PRODUCTS)
