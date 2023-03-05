import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="logo">
        <a href="https://qwik.builder.io/" target="_blank" title="qwik">
          <QwikLogo />
        </a>
      </div>
      <ul>
        <li>
          <a href="https://qwik.builder.io/docs/components/state/" target="_blank">
            Qwik Docs
          </a>
        </li>
        <li>
          <a href="https://github.com/BuilderIO/qwik/issues/3262" target="_blank">
            My Issue (#3262)
          </a>
        </li>
      </ul>
    </header>
  );
});
