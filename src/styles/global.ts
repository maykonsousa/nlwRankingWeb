import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root{
    --colors-rocketseat-light: #996DFF;
    --colors-rocketseat-mid: #8257E5;
    --colors-rocketseat-dark: #633BBC;
    --colors-rocketseat-low: #271A45;
    --colors-discover-light: #6A80FF;
    --colors-discover-mid: #4863F7;
    --colors-discover-dark: #3249CB;
    --colors-discover-low: #182049;
    --colors-ignite-light: #00B37E;
    --colors-ignite-mid: #00875F;
    --colors-ignite-dark: #015F43;
    --colors-ignite-low: #00291D;
    --colors-ec-light: #FC4737;
    --colors-ec-mid: #D73628;
    --colors-ec-dark: #AD1E12;
    --colors-ec-low: #42110D;
    --colors-success-light: #04D361;
    --colors-success-base: #1B873F;
    --colors-success-low: #051B0D;
    --colors-danger-light: #F75A68;
    --colors-danger-base: #CC2937;
    --colors-danger-low: #2D090C;
    --colors-warning-light: #FBA94C;
    --colors-warning-base: #EB8A1D;
    --colors-warning-low: #2E1B06;
    --colors-new-light: #1EF7D0;
    --colors-new-base: #07847E;
    --colors-new-low: #163840;
    --colors-white: #FFFFFF;
    --colors-black: #000000;
    --colors-grey-100: #E1E1E6;
    --colors-grey-200: #C4C4CC;
    --colors-grey-300: #8D8D99;
    --colors-grey-400: #7C7C8A;
    --colors-grey-500: #505059;
    --colors-grey-600: #323238;
    --colors-grey-700: #29292E;
    --colors-grey-800: #202024;
    --colors-grey-900: #121214;
    --colors-grey-950: #09090A;
    --colors-text-title: #E1E1E6;
    --colors-text-base: #C4C4CC;
    --colors-text-support: #8D8D99;
    --colors-placeholder: #7C7C8A;
    --colors-inputs-icons: #505059;
    --colors-shape-tertiary: #323238;
    --colors-shape-secondary: #29292E;
    --colors-shape-primary: #202024;
    --colors-color-background: #121214;
    --colors-nlw-cup-primary: #F7DD43;
    --colors-nlw-cup-secondary: #185B34;
    --colors-nlw-cup-secondary-light: #047C3F;
    --colors-explorer-lab-primary-dark: #F1AB31;
    --colors-explorer-lab-secondary: #2165E3;
    --colors-explorer-lab-secondary-dark: #0045C5;
    --colors-modal-background: #080B0C;
    --colors-border-color: var(--colors-nlw-cup-primary);
    --colors-ignite-trail: #5CC0A1;
    --colors-explorer-trail: #8393F2;
    --fonts-default: Roboto;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--colors-color-background);
    color: var(--colors-text-base);
    -webkit-font-smoothing: antialiased;

  }

  body, input, textarea, button {
    font: 400 1rem var(--fonts-default);
  }

  h1, h2, h3, h4, h5, h6, strong {
    color: var(--colors-text-title);
  }

  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
