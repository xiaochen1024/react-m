import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
// import { renderRoutes } from "react-router-config";
import renderRoutes from "utils/renderRoutes";
import { createBrowserHistory } from "history";
import { Provider } from "mobx-react";
import "moment/locale/zh-cn";
import 'lib-flexible'

import asyncComponent from "common/AsyncComponent";
import "./index.less";

import testStore from "stores/testStore";

const history = createBrowserHistory();
const stores = {
  testStore: new testStore()
};
const routes = [
  {
    path: "/",
    component: asyncComponent(() => import("pages/Home"))
  }
];

ReactDOM.render(
  <Provider {...stores}>
    <Router history={history}>{renderRoutes(routes)}</Router>
  </Provider>,
  document.getElementById("root")
);
