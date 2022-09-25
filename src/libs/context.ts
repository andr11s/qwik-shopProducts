import { createContext } from "@builder.io/qwik";
import { Products } from "~/interfaces/products.interface";
import { CONTEXT } from "~/interfaces/shared.interface";


export const products_context = createContext<Products>(CONTEXT.PRODUCTS)
