import { component$, useContext, useStylesScoped$ } from '@builder.io/qwik';
import { products_context } from '~/libs/context';
import styles from './products-card.css?inline';

export const ProductsCard = component$(() => {
  useStylesScoped$(styles);

  const products = useContext(products_context);

  return (
    <div class="cards">
      {products.products.map((d) => (
        <div class="page-wrapper card">
          <div class="page-inner">
            <div class="row">
              <div class="el-wrapper">
                <div class="box-up">
                  <img class="img" src={d.image} alt="Imagen" width="90" />
                  <div class="img-info">
                    <div class="info-inner">
                      <span class="p-name">{d.title}</span>
                      <span class="p-company">Category: {d.category}</span>
                    </div>
                    <div class="a-size">
                      Description : <span class="size">{d.description.slice(0, 60)}</span>
                    </div>
                  </div>
                </div>

                <div class="box-down">
                  <div class="h-bg">
                    <div class="h-bg-inner"></div>
                  </div>

                  <a class="cart" href="#">
                    <span class="price">Price: ${d.price}</span>
                    <span class="add-to-cart">
                      <span class="txt">Add in cart</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});
