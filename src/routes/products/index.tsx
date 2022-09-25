import { component$, Resource, useContextProvider, useServerMount$, useStore } from "@builder.io/qwik";
import type { RequestHandler } from '@builder.io/qwik-city';
import { useEndpoint } from "@builder.io/qwik-city";
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
  useContextProvider(products_context, stateProducts);
  
  useServerMount$(async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    stateProducts.products = await response.json();
  });
    
  return (
    <div>
        <h1>Hola productos</h1>
        <>
          {stateProducts.products.map(d=> 
             <>
             <h1>Product: {d.title}</h1>
             <p>Price: {d.price}</p>
             <p>{d.description}</p>
           </>
            )}
        </>
    </div>
  );
});