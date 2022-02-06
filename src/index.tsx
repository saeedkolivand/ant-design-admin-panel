import React from "react";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./app/i18n/i18n";
import { Provider } from "react-redux";
import { compose } from "redux";
import { ConfigProvider } from "antd";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./routes/router";
import reportWebVitals from "./reportWebVitals";
import store from "./app/store";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const queryClient = new QueryClient();

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <ConfigProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ConfigProvider>
    </Provider>
  </I18nextProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
