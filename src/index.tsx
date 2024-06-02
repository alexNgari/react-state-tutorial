import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { store as normalizedStore } from "./normalizedRedux/store";
import App from "./App";
import OtherApp from "./OtherApp";
import OtherOtherApp from "./OtherOtherApp";
import NormalizedStateApp from "./NormalizedStateApp";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />,{/* <OtherApp /> */}
    {/* <Provider store={store}>
      <OtherOtherApp />
    </Provider> */}
    {/* <Provider store={normalizedStore}>
      <NormalizedStateApp />
    </Provider> */}
  </React.StrictMode>,
);
