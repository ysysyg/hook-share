// @ts-nocheck
import { Plugin } from "/Users/atong/workspace/hook-share/node_modules/umi/node_modules/@umijs/runtime";

const plugin = new Plugin({
  validKeys: [
    "modifyClientRenderOpts",
    "patchRoutes",
    "rootContainer",
    "render",
    "onRouteChange",
    "__mfsu",
    "getInitialState",
    "initialStateConfig",
    "request",
  ],
});

export { plugin };
