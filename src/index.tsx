import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { store as advancedStore } from "./advancedRedux/store";
import { store as normalizedStore } from "./normalizedRedux/store";
import App from "./App";
import ContextApp from "./ContextApp";
import ReduxApp from "./ReduxApp";
import AdvancedReduxApp from "./AdvancedReduxApp";
import NormalizedStateApp from "./NormalizedStateApp";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <>
    {/* <React.StrictMode> */}
    {/* <App />, */}
    {/* <ContextApp /> */}
    {/* <Provider store={store}>
      <ReduxApp />
    </Provider> */}
    {/* <Provider store={advancedStore}>
      <AdvancedReduxApp />
    </Provider> */}
    <Provider store={normalizedStore}>
      <NormalizedStateApp />
    </Provider>
    {/* </React.StrictMode> */}
  </>,
);
