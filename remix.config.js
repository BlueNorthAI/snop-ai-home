/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverDependenciesToBundle: [/^remix-utils.*/],
  cacheDirectory: "./node_modules/.cache/remix",
  ignoredRouteFiles: ["**/.*", "**/*.test.{ts,tsx}"],
  serverModuleFormat: "cjs",
  tailwind: true,
  postcss: true,

  browserNodeBuiltinsPolyfill: {
    modules: {
      fs: true,
      path: true,
    },
  },
};
