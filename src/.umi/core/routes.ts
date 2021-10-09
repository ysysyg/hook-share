// @ts-nocheck
import React from "react";
import { ApplyPluginsType } from "/Users/atong/workspace/hook-share/node_modules/umi/node_modules/@umijs/runtime";
import * as umiExports from "./umiExports";
import { plugin } from "./plugin";

export function getRoutes() {
  const routes = [
    {
      path: "/",
      component: require("@/layouts/index.tsx").default,
      routes: [
        {
          path: "/",
          exact: true,
          component: require("@/pages/index.tsx").default,
        },
        {
          path: "/memo/demo1",
          exact: true,
          component: require("@/pages/memo/demo1.tsx").default,
        },
        {
          path: "/memo/demo2",
          exact: true,
          component: require("@/pages/memo/demo2.tsx").default,
        },
        {
          path: "/style/demo1",
          exact: true,
          component: require("@/pages/style/demo1.tsx").default,
        },
        {
          path: "/style/demo2",
          exact: true,
          component: require("@/pages/style/demo2.tsx").default,
        },
        {
          path: "/style/demo3",
          exact: true,
          component: require("@/pages/style/demo3.tsx").default,
        },
        {
          path: "/style/demo4",
          exact: true,
          component: require("@/pages/style/demo4.tsx").default,
        },
        {
          path: "/useCallback/demo1",
          exact: true,
          component: require("@/pages/useCallback/demo1.tsx").default,
        },
        {
          path: "/useCallback/demo2",
          exact: true,
          component: require("@/pages/useCallback/demo2.tsx").default,
        },
        {
          path: "/useEffect/demo1",
          exact: true,
          component: require("@/pages/useEffect/demo1.tsx").default,
        },
        {
          path: "/useEffect/demo2",
          exact: true,
          component: require("@/pages/useEffect/demo2.tsx").default,
        },
        {
          path: "/useEffect/demo3",
          exact: true,
          component: require("@/pages/useEffect/demo3.tsx").default,
        },
        {
          path: "/useEffect/demo4",
          exact: true,
          component: require("@/pages/useEffect/demo4.tsx").default,
        },
        {
          path: "/useMemo/demo1",
          exact: true,
          component: require("@/pages/useMemo/demo1.tsx").default,
        },
        {
          path: "/useMemo/demo2",
          exact: true,
          component: require("@/pages/useMemo/demo2.tsx").default,
        },
        {
          path: "/useRef/demo1",
          exact: true,
          component: require("@/pages/useRef/demo1.tsx").default,
        },
        {
          path: "/useRef/demo2",
          exact: true,
          component: require("@/pages/useRef/demo2.tsx").default,
        },
        {
          path: "/useRef/demo3",
          exact: true,
          component: require("@/pages/useRef/demo3.tsx").default,
        },
        {
          path: "/useState/demo1",
          exact: true,
          component: require("@/pages/useState/demo1.tsx").default,
        },
        {
          path: "/useState/demo2",
          exact: true,
          component: require("@/pages/useState/demo2.tsx").default,
        },
        {
          path: "/useState/demo3",
          exact: true,
          component: require("@/pages/useState/demo3.tsx").default,
        },
        {
          path: "/useState/demo4",
          exact: true,
          component: require("@/pages/useState/demo4.tsx").default,
        },
      ],
    },
  ];

  // allow user to extend routes
  plugin.applyPlugins({
    key: "patchRoutes",
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
