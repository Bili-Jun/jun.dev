import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 1em;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    user-select: none;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  .container {
    margin: auto;
  }

  main {
    position: relative;
    min-height: 100vh;
  }

  button {
    margin: 0 8px;
    cursor: pointer;
    &, &:hover, &:focus, &:active, &:visited{
      outline: none;
      border: none;
      -webkit-tap-highlight-color:rgba(0,0,0,0);
      -webkit-tap-highlight-color: transparent;
      -moz-user-focus: none;
      -moz-user-select: none;
    }
    &[disabled] {
      cursor: default;
    }
  }

  a, a:hover, a:active, a:visited, a:link, a:focus{
    -webkit-tap-highlight-color:rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
    -moz-user-focus: none;
    -moz-user-select: none;
    outline:none;
    background: none;
    text-decoration: none;
  }

  .page-transition-group {
    position: relative;
    height: inherit;
  }

  .router-page {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
  }

  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 200ms;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }

  @media (min-width: 1280px) {
    .container {
      max-width: 1280px;
    }
  }
  @media (min-width: 1024px) {
    .container {
      max-width: 1024px;
    }
  }
  
  @media (min-width: 768px) {
    .container {
      max-width: 768px;
    }
  }
  
  @media (min-width: 640px) {
    .container {
      max-width: 640px;
    }
  }

  @media (min-width: 375px) {
    .container {
      max-width: 375px;
    }
  }
`