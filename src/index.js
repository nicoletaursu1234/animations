import "react-hot-loader/patch";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { basename } from "config";
import AnimationContextProvider from './store/contexts';
import App from "components/App";

const renderApp = () => (
  <AnimationContextProvider>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </AnimationContextProvider>
);

const root = document.getElementById("app");
render(renderApp(), root);

if (module.hot) {
  module.hot.accept("components/App", () => {
    require("components/App");
    render(renderApp(), root);
  });
}
