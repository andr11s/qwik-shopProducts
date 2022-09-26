import { component$, Resource, useContextProvider, useServerMount$, useStore } from "@builder.io/qwik";
import type { RequestHandler } from '@builder.io/qwik-city';
import { useEndpoint } from "@builder.io/qwik-city";
import { ProductsCard } from "~/components/products-card/products.card";
import { Products } from "~/interfaces/products.interface";
import { dataProducts, products_context } from "~/libs/context";

export interface MyCmpProps {
  step: number;
}

export const onGet: RequestHandler<Products[]> = async (): Promise<Products[]> => {
  const a = fetch('https://fakestoreapi.com/products/1', {
    method: 'GET',
  });

    const resp = await a;
  return  await resp.json(); 

} 

export default component$(() => {
  const stateProducts: dataProducts= useStore({
    products: []
  });
  
  useServerMount$(async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    stateProducts.products = await response.json();
  });
  
  useContextProvider(products_context, stateProducts);
  return (
    <div>
        <h2>Listado de productos</h2>
        <ProductsCard  />
    </div>
  );
});