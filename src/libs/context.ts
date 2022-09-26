import { createContext } from '@builder.io/qwik';
import { Products } from '~/interfaces/products.interface';
import { CONTEXT } from '~/interfaces/shared.interface';

export interface dataProducts {
  products: Products[];
}
export interface cartProducts {
  products: number;
}

export const products_context = createContext<dataProducts>(CONTEXT.PRODUCTS);
export const cart_products_context = createContext<cartProducts>(CONTEXT.CART_PRODUCTS);
