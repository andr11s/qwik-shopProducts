import { component$, Resource, useContext, useContextProvider, useServerMount$, useStore } from '@builder.io/qwik';
import { ProductsCard } from '~/components/products-card/products.card';
import { cartProducts, cart_products_context, dataProducts, products_context } from '~/libs/context';

export default component$(() => {
  const stateProducts: dataProducts = useStore({
    products: [],
  });

  useServerMount$(async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    stateProducts.products = await response.json();
  });

  useContextProvider(products_context, stateProducts);

  return (
    <div>
      <h2>Listado de productos</h2>
      <ProductsCard />
    </div>
  );
});
