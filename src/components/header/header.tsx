import { component$, useContext, useContextProvider, useStore, useStylesScoped$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="logo">
        <a href="https://qwik.builder.io/" target="_blank">
          <QwikLogo />
        </a>
      </div>
      <ul>
        <li>
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="#">Users</a>
        </li>
      </ul>
    </header>
  );
});
