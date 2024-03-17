import {
  __commonJS
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/refractor/lang/roboconf.js
var require_roboconf = __commonJS({
  "node_modules/refractor/lang/roboconf.js"(exports, module) {
    module.exports = roboconf;
    roboconf.displayName = "roboconf";
    roboconf.aliases = [];
    function roboconf(Prism) {
      Prism.languages.roboconf = {
        comment: /#.*/,
        keyword: {
          pattern: /(^|\s)(?:(?:external|import)\b|(?:facet|instance of)(?=[ \t]+[\w-]+[ \t]*\{))/,
          lookbehind: true
        },
        component: {
          pattern: /[\w-]+(?=[ \t]*\{)/,
          alias: "variable"
        },
        property: /[\w.-]+(?=[ \t]*:)/,
        value: {
          pattern: /(=[ \t]*(?![ \t]))[^,;]+/,
          lookbehind: true,
          alias: "attr-value"
        },
        optional: {
          pattern: /\(optional\)/,
          alias: "builtin"
        },
        wildcard: {
          pattern: /(\.)\*/,
          lookbehind: true,
          alias: "operator"
        },
        punctuation: /[{},.;:=]/
      };
    }
  }
});

export {
  require_roboconf
};
//# sourceMappingURL=/build/_shared/chunk-5K26VJ7P.js.map
