import React from "react";
import { Router as DefaultRouter, Route, Switch } from "react-router-dom";
import dynamic from "umi/dynamic";
import renderRoutes from "umi/lib/renderRoutes";
import history from "@tmp/history";

const Router = DefaultRouter;

const routes = [
  {
    path: "/",
    component: require("../../layouts/index.tsx").default,
    routes: [
      {
        path: "/",
        exact: true,
        component: require("../index.tsx").default,
      },
      {
        path: "/memo/demo1",
        exact: true,
        component: require("../memo/demo1.tsx").default,
      },
      {
        path: "/memo/demo2",
        exact: true,
        component: require("../memo/demo2.tsx").default,
      },
      {
        path: "/style/demo1",
        exact: true,
        component: require("../style/demo1.tsx").default,
      },
      {
        path: "/style/demo2",
        exact: true,
        component: require("../style/demo2.tsx").default,
      },
      {
        path: "/style/demo3",
        exact: true,
        component: require("../style/demo3.tsx").default,
      },
      {
        path: "/style/demo4",
        exact: true,
        component: require("../style/demo4.tsx").default,
      },
      {
        path: "/useCallback/demo1",
        exact: true,
        component: require("../useCallback/demo1.tsx").default,
      },
      {
        path: "/useCallback/demo2",
        exact: true,
        component: require("../useCallback/demo2.tsx").default,
      },
      {
        path: "/useEffect/demo1",
        exact: true,
        component: require("../useEffect/demo1.tsx").default,
      },
      {
        path: "/useEffect/demo2",
        exact: true,
        component: require("../useEffect/demo2.tsx").default,
      },
      {
        path: "/useEffect/demo3",
        exact: true,
        component: require("../useEffect/demo3.tsx").default,
      },
      {
        path: "/useEffect/demo4",
        exact: true,
        component: require("../useEffect/demo4.tsx").default,
      },
      {
        path: "/useMemo/demo1",
        exact: true,
        component: require("../useMemo/demo1.tsx").default,
      },
      {
        path: "/useMemo/demo2",
        exact: true,
        component: require("../useMemo/demo2.tsx").default,
      },
      {
        path: "/useRef/demo1",
        exact: true,
        component: require("../useRef/demo1.tsx").default,
      },
      {
        path: "/useRef/demo2",
        exact: true,
        component: require("../useRef/demo2.tsx").default,
      },
      {
        path: "/useRef/demo3",
        exact: true,
        component: require("../useRef/demo3.tsx").default,
      },
      {
        path: "/useState/demo1",
        exact: true,
        component: require("../useState/demo1.tsx").default,
      },
      {
        path: "/useState/demo2",
        exact: true,
        component: require("../useState/demo2.tsx").default,
      },
      {
        path: "/useState/demo3",
        exact: true,
        component: require("../useState/demo3.tsx").default,
      },
      {
        path: "/useState/demo4",
        exact: true,
        component: require("../useState/demo4.tsx").default,
      },
      {
        component: () =>
          React.createElement(
            require("/usr/local/lib/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js")
              .default,
            { pagesPath: "src/pages", hasRoutesInConfig: false }
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require("/usr/local/lib/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js")
          .default,
        { pagesPath: "src/pages", hasRoutesInConfig: false }
      ),
  },
];
window.g_routes = routes;
const plugins = require("umi/_runtimePlugin");
plugins.applyForEach("patchRoutes", { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach("onRouteChange", {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva ??? history.listen ?????????????????????
    // ??????????????? dva ???????????????????????? onRouteChange ????????? dva ???????????????????????????????????????
    const isDva =
      history.listen
        .toString()
        .indexOf("callback(history.location, history.action)") > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
