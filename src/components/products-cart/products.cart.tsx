import { component$, useContext, useStylesScoped$ } from '@builder.io/qwik';
import { cartProducts, cart_products_context } from '~/libs/context';
import styles from './products.cart.css?inline';

export const ProductsCart = component$(() => {
  useStylesScoped$(styles);
  const car = useContext(cart_products_context);

  return <div class="cart">{<h4>Productos Agregados: {car.products}</h4>}</div>;
});
