(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, copyDefault, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toESM = (module, isNodeMode) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/cssfilter/lib/default.js
  var require_default = __commonJS({
    "node_modules/cssfilter/lib/default.js"(exports) {
      function getDefaultWhiteList() {
        var whiteList = {};
        whiteList["align-content"] = false;
        whiteList["align-items"] = false;
        whiteList["align-self"] = false;
        whiteList["alignment-adjust"] = false;
        whiteList["alignment-baseline"] = false;
        whiteList["all"] = false;
        whiteList["anchor-point"] = false;
        whiteList["animation"] = false;
        whiteList["animation-delay"] = false;
        whiteList["animation-direction"] = false;
        whiteList["animation-duration"] = false;
        whiteList["animation-fill-mode"] = false;
        whiteList["animation-iteration-count"] = false;
        whiteList["animation-name"] = false;
        whiteList["animation-play-state"] = false;
        whiteList["animation-timing-function"] = false;
        whiteList["azimuth"] = false;
        whiteList["backface-visibility"] = false;
        whiteList["background"] = true;
        whiteList["background-attachment"] = true;
        whiteList["background-clip"] = true;
        whiteList["background-color"] = true;
        whiteList["background-image"] = true;
        whiteList["background-origin"] = true;
        whiteList["background-position"] = true;
        whiteList["background-repeat"] = true;
        whiteList["background-size"] = true;
        whiteList["baseline-shift"] = false;
        whiteList["binding"] = false;
        whiteList["bleed"] = false;
        whiteList["bookmark-label"] = false;
        whiteList["bookmark-level"] = false;
        whiteList["bookmark-state"] = false;
        whiteList["border"] = true;
        whiteList["border-bottom"] = true;
        whiteList["border-bottom-color"] = true;
        whiteList["border-bottom-left-radius"] = true;
        whiteList["border-bottom-right-radius"] = true;
        whiteList["border-bottom-style"] = true;
        whiteList["border-bottom-width"] = true;
        whiteList["border-collapse"] = true;
        whiteList["border-color"] = true;
        whiteList["border-image"] = true;
        whiteList["border-image-outset"] = true;
        whiteList["border-image-repeat"] = true;
        whiteList["border-image-slice"] = true;
        whiteList["border-image-source"] = true;
        whiteList["border-image-width"] = true;
        whiteList["border-left"] = true;
        whiteList["border-left-color"] = true;
        whiteList["border-left-style"] = true;
        whiteList["border-left-width"] = true;
        whiteList["border-radius"] = true;
        whiteList["border-right"] = true;
        whiteList["border-right-color"] = true;
        whiteList["border-right-style"] = true;
        whiteList["border-right-width"] = true;
        whiteList["border-spacing"] = true;
        whiteList["border-style"] = true;
        whiteList["border-top"] = true;
        whiteList["border-top-color"] = true;
        whiteList["border-top-left-radius"] = true;
        whiteList["border-top-right-radius"] = true;
        whiteList["border-top-style"] = true;
        whiteList["border-top-width"] = true;
        whiteList["border-width"] = true;
        whiteList["bottom"] = false;
        whiteList["box-decoration-break"] = true;
        whiteList["box-shadow"] = true;
        whiteList["box-sizing"] = true;
        whiteList["box-snap"] = true;
        whiteList["box-suppress"] = true;
        whiteList["break-after"] = true;
        whiteList["break-before"] = true;
        whiteList["break-inside"] = true;
        whiteList["caption-side"] = false;
        whiteList["chains"] = false;
        whiteList["clear"] = true;
        whiteList["clip"] = false;
        whiteList["clip-path"] = false;
        whiteList["clip-rule"] = false;
        whiteList["color"] = true;
        whiteList["color-interpolation-filters"] = true;
        whiteList["column-count"] = false;
        whiteList["column-fill"] = false;
        whiteList["column-gap"] = false;
        whiteList["column-rule"] = false;
        whiteList["column-rule-color"] = false;
        whiteList["column-rule-style"] = false;
        whiteList["column-rule-width"] = false;
        whiteList["column-span"] = false;
        whiteList["column-width"] = false;
        whiteList["columns"] = false;
        whiteList["contain"] = false;
        whiteList["content"] = false;
        whiteList["counter-increment"] = false;
        whiteList["counter-reset"] = false;
        whiteList["counter-set"] = false;
        whiteList["crop"] = false;
        whiteList["cue"] = false;
        whiteList["cue-after"] = false;
        whiteList["cue-before"] = false;
        whiteList["cursor"] = false;
        whiteList["direction"] = false;
        whiteList["display"] = true;
        whiteList["display-inside"] = true;
        whiteList["display-list"] = true;
        whiteList["display-outside"] = true;
        whiteList["dominant-baseline"] = false;
        whiteList["elevation"] = false;
        whiteList["empty-cells"] = false;
        whiteList["filter"] = false;
        whiteList["flex"] = false;
        whiteList["flex-basis"] = false;
        whiteList["flex-direction"] = false;
        whiteList["flex-flow"] = false;
        whiteList["flex-grow"] = false;
        whiteList["flex-shrink"] = false;
        whiteList["flex-wrap"] = false;
        whiteList["float"] = false;
        whiteList["float-offset"] = false;
        whiteList["flood-color"] = false;
        whiteList["flood-opacity"] = false;
        whiteList["flow-from"] = false;
        whiteList["flow-into"] = false;
        whiteList["font"] = true;
        whiteList["font-family"] = true;
        whiteList["font-feature-settings"] = true;
        whiteList["font-kerning"] = true;
        whiteList["font-language-override"] = true;
        whiteList["font-size"] = true;
        whiteList["font-size-adjust"] = true;
        whiteList["font-stretch"] = true;
        whiteList["font-style"] = true;
        whiteList["font-synthesis"] = true;
        whiteList["font-variant"] = true;
        whiteList["font-variant-alternates"] = true;
        whiteList["font-variant-caps"] = true;
        whiteList["font-variant-east-asian"] = true;
        whiteList["font-variant-ligatures"] = true;
        whiteList["font-variant-numeric"] = true;
        whiteList["font-variant-position"] = true;
        whiteList["font-weight"] = true;
        whiteList["grid"] = false;
        whiteList["grid-area"] = false;
        whiteList["grid-auto-columns"] = false;
        whiteList["grid-auto-flow"] = false;
        whiteList["grid-auto-rows"] = false;
        whiteList["grid-column"] = false;
        whiteList["grid-column-end"] = false;
        whiteList["grid-column-start"] = false;
        whiteList["grid-row"] = false;
        whiteList["grid-row-end"] = false;
        whiteList["grid-row-start"] = false;
        whiteList["grid-template"] = false;
        whiteList["grid-template-areas"] = false;
        whiteList["grid-template-columns"] = false;
        whiteList["grid-template-rows"] = false;
        whiteList["hanging-punctuation"] = false;
        whiteList["height"] = true;
        whiteList["hyphens"] = false;
        whiteList["icon"] = false;
        whiteList["image-orientation"] = false;
        whiteList["image-resolution"] = false;
        whiteList["ime-mode"] = false;
        whiteList["initial-letters"] = false;
        whiteList["inline-box-align"] = false;
        whiteList["justify-content"] = false;
        whiteList["justify-items"] = false;
        whiteList["justify-self"] = false;
        whiteList["left"] = false;
        whiteList["letter-spacing"] = true;
        whiteList["lighting-color"] = true;
        whiteList["line-box-contain"] = false;
        whiteList["line-break"] = false;
        whiteList["line-grid"] = false;
        whiteList["line-height"] = false;
        whiteList["line-snap"] = false;
        whiteList["line-stacking"] = false;
        whiteList["line-stacking-ruby"] = false;
        whiteList["line-stacking-shift"] = false;
        whiteList["line-stacking-strategy"] = false;
        whiteList["list-style"] = true;
        whiteList["list-style-image"] = true;
        whiteList["list-style-position"] = true;
        whiteList["list-style-type"] = true;
        whiteList["margin"] = true;
        whiteList["margin-bottom"] = true;
        whiteList["margin-left"] = true;
        whiteList["margin-right"] = true;
        whiteList["margin-top"] = true;
        whiteList["marker-offset"] = false;
        whiteList["marker-side"] = false;
        whiteList["marks"] = false;
        whiteList["mask"] = false;
        whiteList["mask-box"] = false;
        whiteList["mask-box-outset"] = false;
        whiteList["mask-box-repeat"] = false;
        whiteList["mask-box-slice"] = false;
        whiteList["mask-box-source"] = false;
        whiteList["mask-box-width"] = false;
        whiteList["mask-clip"] = false;
        whiteList["mask-image"] = false;
        whiteList["mask-origin"] = false;
        whiteList["mask-position"] = false;
        whiteList["mask-repeat"] = false;
        whiteList["mask-size"] = false;
        whiteList["mask-source-type"] = false;
        whiteList["mask-type"] = false;
        whiteList["max-height"] = true;
        whiteList["max-lines"] = false;
        whiteList["max-width"] = true;
        whiteList["min-height"] = true;
        whiteList["min-width"] = true;
        whiteList["move-to"] = false;
        whiteList["nav-down"] = false;
        whiteList["nav-index"] = false;
        whiteList["nav-left"] = false;
        whiteList["nav-right"] = false;
        whiteList["nav-up"] = false;
        whiteList["object-fit"] = false;
        whiteList["object-position"] = false;
        whiteList["opacity"] = false;
        whiteList["order"] = false;
        whiteList["orphans"] = false;
        whiteList["outline"] = false;
        whiteList["outline-color"] = false;
        whiteList["outline-offset"] = false;
        whiteList["outline-style"] = false;
        whiteList["outline-width"] = false;
        whiteList["overflow"] = false;
        whiteList["overflow-wrap"] = false;
        whiteList["overflow-x"] = false;
        whiteList["overflow-y"] = false;
        whiteList["padding"] = true;
        whiteList["padding-bottom"] = true;
        whiteList["padding-left"] = true;
        whiteList["padding-right"] = true;
        whiteList["padding-top"] = true;
        whiteList["page"] = false;
        whiteList["page-break-after"] = false;
        whiteList["page-break-before"] = false;
        whiteList["page-break-inside"] = false;
        whiteList["page-policy"] = false;
        whiteList["pause"] = false;
        whiteList["pause-after"] = false;
        whiteList["pause-before"] = false;
        whiteList["perspective"] = false;
        whiteList["perspective-origin"] = false;
        whiteList["pitch"] = false;
        whiteList["pitch-range"] = false;
        whiteList["play-during"] = false;
        whiteList["position"] = false;
        whiteList["presentation-level"] = false;
        whiteList["quotes"] = false;
        whiteList["region-fragment"] = false;
        whiteList["resize"] = false;
        whiteList["rest"] = false;
        whiteList["rest-after"] = false;
        whiteList["rest-before"] = false;
        whiteList["richness"] = false;
        whiteList["right"] = false;
        whiteList["rotation"] = false;
        whiteList["rotation-point"] = false;
        whiteList["ruby-align"] = false;
        whiteList["ruby-merge"] = false;
        whiteList["ruby-position"] = false;
        whiteList["shape-image-threshold"] = false;
        whiteList["shape-outside"] = false;
        whiteList["shape-margin"] = false;
        whiteList["size"] = false;
        whiteList["speak"] = false;
        whiteList["speak-as"] = false;
        whiteList["speak-header"] = false;
        whiteList["speak-numeral"] = false;
        whiteList["speak-punctuation"] = false;
        whiteList["speech-rate"] = false;
        whiteList["stress"] = false;
        whiteList["string-set"] = false;
        whiteList["tab-size"] = false;
        whiteList["table-layout"] = false;
        whiteList["text-align"] = true;
        whiteList["text-align-last"] = true;
        whiteList["text-combine-upright"] = true;
        whiteList["text-decoration"] = true;
        whiteList["text-decoration-color"] = true;
        whiteList["text-decoration-line"] = true;
        whiteList["text-decoration-skip"] = true;
        whiteList["text-decoration-style"] = true;
        whiteList["text-emphasis"] = true;
        whiteList["text-emphasis-color"] = true;
        whiteList["text-emphasis-position"] = true;
        whiteList["text-emphasis-style"] = true;
        whiteList["text-height"] = true;
        whiteList["text-indent"] = true;
        whiteList["text-justify"] = true;
        whiteList["text-orientation"] = true;
        whiteList["text-overflow"] = true;
        whiteList["text-shadow"] = true;
        whiteList["text-space-collapse"] = true;
        whiteList["text-transform"] = true;
        whiteList["text-underline-position"] = true;
        whiteList["text-wrap"] = true;
        whiteList["top"] = false;
        whiteList["transform"] = false;
        whiteList["transform-origin"] = false;
        whiteList["transform-style"] = false;
        whiteList["transition"] = false;
        whiteList["transition-delay"] = false;
        whiteList["transition-duration"] = false;
        whiteList["transition-property"] = false;
        whiteList["transition-timing-function"] = false;
        whiteList["unicode-bidi"] = false;
        whiteList["vertical-align"] = false;
        whiteList["visibility"] = false;
        whiteList["voice-balance"] = false;
        whiteList["voice-duration"] = false;
        whiteList["voice-family"] = false;
        whiteList["voice-pitch"] = false;
        whiteList["voice-range"] = false;
        whiteList["voice-rate"] = false;
        whiteList["voice-stress"] = false;
        whiteList["voice-volume"] = false;
        whiteList["volume"] = false;
        whiteList["white-space"] = false;
        whiteList["widows"] = false;
        whiteList["width"] = true;
        whiteList["will-change"] = false;
        whiteList["word-break"] = true;
        whiteList["word-spacing"] = true;
        whiteList["word-wrap"] = true;
        whiteList["wrap-flow"] = false;
        whiteList["wrap-through"] = false;
        whiteList["writing-mode"] = false;
        whiteList["z-index"] = false;
        return whiteList;
      }
      function onAttr(name, value, options) {
      }
      function onIgnoreAttr(name, value, options) {
      }
      var REGEXP_URL_JAVASCRIPT = /javascript\s*\:/img;
      function safeAttrValue(name, value) {
        if (REGEXP_URL_JAVASCRIPT.test(value))
          return "";
        return value;
      }
      exports.whiteList = getDefaultWhiteList();
      exports.getDefaultWhiteList = getDefaultWhiteList;
      exports.onAttr = onAttr;
      exports.onIgnoreAttr = onIgnoreAttr;
      exports.safeAttrValue = safeAttrValue;
    }
  });

  // node_modules/cssfilter/lib/util.js
  var require_util = __commonJS({
    "node_modules/cssfilter/lib/util.js"(exports, module) {
      module.exports = {
        indexOf: function(arr, item) {
          var i, j;
          if (Array.prototype.indexOf) {
            return arr.indexOf(item);
          }
          for (i = 0, j = arr.length; i < j; i++) {
            if (arr[i] === item) {
              return i;
            }
          }
          return -1;
        },
        forEach: function(arr, fn, scope) {
          var i, j;
          if (Array.prototype.forEach) {
            return arr.forEach(fn, scope);
          }
          for (i = 0, j = arr.length; i < j; i++) {
            fn.call(scope, arr[i], i, arr);
          }
        },
        trim: function(str) {
          if (String.prototype.trim) {
            return str.trim();
          }
          return str.replace(/(^\s*)|(\s*$)/g, "");
        },
        trimRight: function(str) {
          if (String.prototype.trimRight) {
            return str.trimRight();
          }
          return str.replace(/(\s*$)/g, "");
        }
      };
    }
  });

  // node_modules/cssfilter/lib/parser.js
  var require_parser = __commonJS({
    "node_modules/cssfilter/lib/parser.js"(exports, module) {
      var _ = require_util();
      function parseStyle(css, onAttr) {
        css = _.trimRight(css);
        if (css[css.length - 1] !== ";")
          css += ";";
        var cssLength = css.length;
        var isParenthesisOpen = false;
        var lastPos = 0;
        var i = 0;
        var retCSS = "";
        function addNewAttr() {
          if (!isParenthesisOpen) {
            var source = _.trim(css.slice(lastPos, i));
            var j2 = source.indexOf(":");
            if (j2 !== -1) {
              var name = _.trim(source.slice(0, j2));
              var value = _.trim(source.slice(j2 + 1));
              if (name) {
                var ret = onAttr(lastPos, retCSS.length, name, value, source);
                if (ret)
                  retCSS += ret + "; ";
              }
            }
          }
          lastPos = i + 1;
        }
        for (; i < cssLength; i++) {
          var c = css[i];
          if (c === "/" && css[i + 1] === "*") {
            var j = css.indexOf("*/", i + 2);
            if (j === -1)
              break;
            i = j + 1;
            lastPos = i + 1;
            isParenthesisOpen = false;
          } else if (c === "(") {
            isParenthesisOpen = true;
          } else if (c === ")") {
            isParenthesisOpen = false;
          } else if (c === ";") {
            if (isParenthesisOpen) {
            } else {
              addNewAttr();
            }
          } else if (c === "\n") {
            addNewAttr();
          }
        }
        return _.trim(retCSS);
      }
      module.exports = parseStyle;
    }
  });

  // node_modules/cssfilter/lib/css.js
  var require_css = __commonJS({
    "node_modules/cssfilter/lib/css.js"(exports, module) {
      var DEFAULT = require_default();
      var parseStyle = require_parser();
      var _ = require_util();
      function isNull(obj) {
        return obj === void 0 || obj === null;
      }
      function shallowCopyObject(obj) {
        var ret = {};
        for (var i in obj) {
          ret[i] = obj[i];
        }
        return ret;
      }
      function FilterCSS(options) {
        options = shallowCopyObject(options || {});
        options.whiteList = options.whiteList || DEFAULT.whiteList;
        options.onAttr = options.onAttr || DEFAULT.onAttr;
        options.onIgnoreAttr = options.onIgnoreAttr || DEFAULT.onIgnoreAttr;
        options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
        this.options = options;
      }
      FilterCSS.prototype.process = function(css) {
        css = css || "";
        css = css.toString();
        if (!css)
          return "";
        var me = this;
        var options = me.options;
        var whiteList = options.whiteList;
        var onAttr = options.onAttr;
        var onIgnoreAttr = options.onIgnoreAttr;
        var safeAttrValue = options.safeAttrValue;
        var retCSS = parseStyle(css, function(sourcePosition, position, name, value, source) {
          var check = whiteList[name];
          var isWhite = false;
          if (check === true)
            isWhite = check;
          else if (typeof check === "function")
            isWhite = check(value);
          else if (check instanceof RegExp)
            isWhite = check.test(value);
          if (isWhite !== true)
            isWhite = false;
          value = safeAttrValue(name, value);
          if (!value)
            return;
          var opts = {
            position,
            sourcePosition,
            source,
            isWhite
          };
          if (isWhite) {
            var ret = onAttr(name, value, opts);
            if (isNull(ret)) {
              return name + ":" + value;
            } else {
              return ret;
            }
          } else {
            var ret = onIgnoreAttr(name, value, opts);
            if (!isNull(ret)) {
              return ret;
            }
          }
        });
        return retCSS;
      };
      module.exports = FilterCSS;
    }
  });

  // node_modules/cssfilter/lib/index.js
  var require_lib = __commonJS({
    "node_modules/cssfilter/lib/index.js"(exports, module) {
      var DEFAULT = require_default();
      var FilterCSS = require_css();
      function filterCSS(html, options) {
        var xss = new FilterCSS(options);
        return xss.process(html);
      }
      exports = module.exports = filterCSS;
      exports.FilterCSS = FilterCSS;
      for (i in DEFAULT)
        exports[i] = DEFAULT[i];
      var i;
      if (typeof window !== "undefined") {
        window.filterCSS = module.exports;
      }
    }
  });

  // node_modules/xss/lib/util.js
  var require_util2 = __commonJS({
    "node_modules/xss/lib/util.js"(exports, module) {
      module.exports = {
        indexOf: function(arr, item) {
          var i, j;
          if (Array.prototype.indexOf) {
            return arr.indexOf(item);
          }
          for (i = 0, j = arr.length; i < j; i++) {
            if (arr[i] === item) {
              return i;
            }
          }
          return -1;
        },
        forEach: function(arr, fn, scope) {
          var i, j;
          if (Array.prototype.forEach) {
            return arr.forEach(fn, scope);
          }
          for (i = 0, j = arr.length; i < j; i++) {
            fn.call(scope, arr[i], i, arr);
          }
        },
        trim: function(str) {
          if (String.prototype.trim) {
            return str.trim();
          }
          return str.replace(/(^\s*)|(\s*$)/g, "");
        },
        spaceIndex: function(str) {
          var reg = /\s|\n|\t/;
          var match = reg.exec(str);
          return match ? match.index : -1;
        }
      };
    }
  });

  // node_modules/xss/lib/default.js
  var require_default2 = __commonJS({
    "node_modules/xss/lib/default.js"(exports) {
      var FilterCSS = require_lib().FilterCSS;
      var getDefaultCSSWhiteList = require_lib().getDefaultWhiteList;
      var _ = require_util2();
      function getDefaultWhiteList() {
        return {
          a: ["target", "href", "title"],
          abbr: ["title"],
          address: [],
          area: ["shape", "coords", "href", "alt"],
          article: [],
          aside: [],
          audio: [
            "autoplay",
            "controls",
            "crossorigin",
            "loop",
            "muted",
            "preload",
            "src"
          ],
          b: [],
          bdi: ["dir"],
          bdo: ["dir"],
          big: [],
          blockquote: ["cite"],
          br: [],
          caption: [],
          center: [],
          cite: [],
          code: [],
          col: ["align", "valign", "span", "width"],
          colgroup: ["align", "valign", "span", "width"],
          dd: [],
          del: ["datetime"],
          details: ["open"],
          div: [],
          dl: [],
          dt: [],
          em: [],
          figcaption: [],
          figure: [],
          font: ["color", "size", "face"],
          footer: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          header: [],
          hr: [],
          i: [],
          img: ["src", "alt", "title", "width", "height"],
          ins: ["datetime"],
          li: [],
          mark: [],
          nav: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          section: [],
          small: [],
          span: [],
          sub: [],
          summary: [],
          sup: [],
          strong: [],
          strike: [],
          table: ["width", "border", "align", "valign"],
          tbody: ["align", "valign"],
          td: ["width", "rowspan", "colspan", "align", "valign"],
          tfoot: ["align", "valign"],
          th: ["width", "rowspan", "colspan", "align", "valign"],
          thead: ["align", "valign"],
          tr: ["rowspan", "align", "valign"],
          tt: [],
          u: [],
          ul: [],
          video: [
            "autoplay",
            "controls",
            "crossorigin",
            "loop",
            "muted",
            "playsinline",
            "poster",
            "preload",
            "src",
            "height",
            "width"
          ]
        };
      }
      var defaultCSSFilter = new FilterCSS();
      function onTag(tag, html, options) {
      }
      function onIgnoreTag(tag, html, options) {
      }
      function onTagAttr(tag, name, value) {
      }
      function onIgnoreTagAttr(tag, name, value) {
      }
      function escapeHtml(html) {
        return html.replace(REGEXP_LT, "&lt;").replace(REGEXP_GT, "&gt;");
      }
      function safeAttrValue(tag, name, value, cssFilter) {
        value = friendlyAttrValue(value);
        if (name === "href" || name === "src") {
          value = _.trim(value);
          if (value === "#")
            return "#";
          if (!(value.substr(0, 7) === "http://" || value.substr(0, 8) === "https://" || value.substr(0, 7) === "mailto:" || value.substr(0, 4) === "tel:" || value.substr(0, 11) === "data:image/" || value.substr(0, 6) === "ftp://" || value.substr(0, 2) === "./" || value.substr(0, 3) === "../" || value[0] === "#" || value[0] === "/")) {
            return "";
          }
        } else if (name === "background") {
          REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
          if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
            return "";
          }
        } else if (name === "style") {
          REGEXP_DEFAULT_ON_TAG_ATTR_7.lastIndex = 0;
          if (REGEXP_DEFAULT_ON_TAG_ATTR_7.test(value)) {
            return "";
          }
          REGEXP_DEFAULT_ON_TAG_ATTR_8.lastIndex = 0;
          if (REGEXP_DEFAULT_ON_TAG_ATTR_8.test(value)) {
            REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
            if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
              return "";
            }
          }
          if (cssFilter !== false) {
            cssFilter = cssFilter || defaultCSSFilter;
            value = cssFilter.process(value);
          }
        }
        value = escapeAttrValue2(value);
        return value;
      }
      var REGEXP_LT = /</g;
      var REGEXP_GT = />/g;
      var REGEXP_QUOTE = /"/g;
      var REGEXP_QUOTE_2 = /&quot;/g;
      var REGEXP_ATTR_VALUE_1 = /&#([a-zA-Z0-9]*);?/gim;
      var REGEXP_ATTR_VALUE_COLON = /&colon;?/gim;
      var REGEXP_ATTR_VALUE_NEWLINE = /&newline;?/gim;
      var REGEXP_DEFAULT_ON_TAG_ATTR_4 = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi;
      var REGEXP_DEFAULT_ON_TAG_ATTR_7 = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi;
      var REGEXP_DEFAULT_ON_TAG_ATTR_8 = /u\s*r\s*l\s*\(.*/gi;
      function escapeQuote(str) {
        return str.replace(REGEXP_QUOTE, "&quot;");
      }
      function unescapeQuote(str) {
        return str.replace(REGEXP_QUOTE_2, '"');
      }
      function escapeHtmlEntities(str) {
        return str.replace(REGEXP_ATTR_VALUE_1, function replaceUnicode(str2, code) {
          return code[0] === "x" || code[0] === "X" ? String.fromCharCode(parseInt(code.substr(1), 16)) : String.fromCharCode(parseInt(code, 10));
        });
      }
      function escapeDangerHtml5Entities(str) {
        return str.replace(REGEXP_ATTR_VALUE_COLON, ":").replace(REGEXP_ATTR_VALUE_NEWLINE, " ");
      }
      function clearNonPrintableCharacter(str) {
        var str2 = "";
        for (var i = 0, len = str.length; i < len; i++) {
          str2 += str.charCodeAt(i) < 32 ? " " : str.charAt(i);
        }
        return _.trim(str2);
      }
      function friendlyAttrValue(str) {
        str = unescapeQuote(str);
        str = escapeHtmlEntities(str);
        str = escapeDangerHtml5Entities(str);
        str = clearNonPrintableCharacter(str);
        return str;
      }
      function escapeAttrValue2(str) {
        str = escapeQuote(str);
        str = escapeHtml(str);
        return str;
      }
      function onIgnoreTagStripAll() {
        return "";
      }
      function StripTagBody(tags, next) {
        if (typeof next !== "function") {
          next = function() {
          };
        }
        var isRemoveAllTag = !Array.isArray(tags);
        function isRemoveTag(tag) {
          if (isRemoveAllTag)
            return true;
          return _.indexOf(tags, tag) !== -1;
        }
        var removeList = [];
        var posStart = false;
        return {
          onIgnoreTag: function(tag, html, options) {
            if (isRemoveTag(tag)) {
              if (options.isClosing) {
                var ret = "[/removed]";
                var end = options.position + ret.length;
                removeList.push([
                  posStart !== false ? posStart : options.position,
                  end
                ]);
                posStart = false;
                return ret;
              } else {
                if (!posStart) {
                  posStart = options.position;
                }
                return "[removed]";
              }
            } else {
              return next(tag, html, options);
            }
          },
          remove: function(html) {
            var rethtml = "";
            var lastPos = 0;
            _.forEach(removeList, function(pos) {
              rethtml += html.slice(lastPos, pos[0]);
              lastPos = pos[1];
            });
            rethtml += html.slice(lastPos);
            return rethtml;
          }
        };
      }
      function stripCommentTag(html) {
        var retHtml = "";
        var lastPos = 0;
        while (lastPos < html.length) {
          var i = html.indexOf("<!--", lastPos);
          if (i === -1) {
            retHtml += html.slice(lastPos);
            break;
          }
          retHtml += html.slice(lastPos, i);
          var j = html.indexOf("-->", i);
          if (j === -1) {
            break;
          }
          lastPos = j + 3;
        }
        return retHtml;
      }
      function stripBlankChar(html) {
        var chars = html.split("");
        chars = chars.filter(function(char) {
          var c = char.charCodeAt(0);
          if (c === 127)
            return false;
          if (c <= 31) {
            if (c === 10 || c === 13)
              return true;
            return false;
          }
          return true;
        });
        return chars.join("");
      }
      exports.whiteList = getDefaultWhiteList();
      exports.getDefaultWhiteList = getDefaultWhiteList;
      exports.onTag = onTag;
      exports.onIgnoreTag = onIgnoreTag;
      exports.onTagAttr = onTagAttr;
      exports.onIgnoreTagAttr = onIgnoreTagAttr;
      exports.safeAttrValue = safeAttrValue;
      exports.escapeHtml = escapeHtml;
      exports.escapeQuote = escapeQuote;
      exports.unescapeQuote = unescapeQuote;
      exports.escapeHtmlEntities = escapeHtmlEntities;
      exports.escapeDangerHtml5Entities = escapeDangerHtml5Entities;
      exports.clearNonPrintableCharacter = clearNonPrintableCharacter;
      exports.friendlyAttrValue = friendlyAttrValue;
      exports.escapeAttrValue = escapeAttrValue2;
      exports.onIgnoreTagStripAll = onIgnoreTagStripAll;
      exports.StripTagBody = StripTagBody;
      exports.stripCommentTag = stripCommentTag;
      exports.stripBlankChar = stripBlankChar;
      exports.cssFilter = defaultCSSFilter;
      exports.getDefaultCSSWhiteList = getDefaultCSSWhiteList;
    }
  });

  // node_modules/xss/lib/parser.js
  var require_parser2 = __commonJS({
    "node_modules/xss/lib/parser.js"(exports) {
      var _ = require_util2();
      function getTagName(html) {
        var i = _.spaceIndex(html);
        if (i === -1) {
          var tagName = html.slice(1, -1);
        } else {
          var tagName = html.slice(1, i + 1);
        }
        tagName = _.trim(tagName).toLowerCase();
        if (tagName.slice(0, 1) === "/")
          tagName = tagName.slice(1);
        if (tagName.slice(-1) === "/")
          tagName = tagName.slice(0, -1);
        return tagName;
      }
      function isClosing(html) {
        return html.slice(0, 2) === "</";
      }
      function parseTag(html, onTag, escapeHtml) {
        "use strict";
        var rethtml = "";
        var lastPos = 0;
        var tagStart = false;
        var quoteStart = false;
        var currentPos = 0;
        var len = html.length;
        var currentTagName = "";
        var currentHtml = "";
        chariterator:
          for (currentPos = 0; currentPos < len; currentPos++) {
            var c = html.charAt(currentPos);
            if (tagStart === false) {
              if (c === "<") {
                tagStart = currentPos;
                continue;
              }
            } else {
              if (quoteStart === false) {
                if (c === "<") {
                  rethtml += escapeHtml(html.slice(lastPos, currentPos));
                  tagStart = currentPos;
                  lastPos = currentPos;
                  continue;
                }
                if (c === ">") {
                  rethtml += escapeHtml(html.slice(lastPos, tagStart));
                  currentHtml = html.slice(tagStart, currentPos + 1);
                  currentTagName = getTagName(currentHtml);
                  rethtml += onTag(tagStart, rethtml.length, currentTagName, currentHtml, isClosing(currentHtml));
                  lastPos = currentPos + 1;
                  tagStart = false;
                  continue;
                }
                if (c === '"' || c === "'") {
                  var i = 1;
                  var ic = html.charAt(currentPos - i);
                  while (ic.trim() === "" || ic === "=") {
                    if (ic === "=") {
                      quoteStart = c;
                      continue chariterator;
                    }
                    ic = html.charAt(currentPos - ++i);
                  }
                }
              } else {
                if (c === quoteStart) {
                  quoteStart = false;
                  continue;
                }
              }
            }
          }
        if (lastPos < html.length) {
          rethtml += escapeHtml(html.substr(lastPos));
        }
        return rethtml;
      }
      var REGEXP_ILLEGAL_ATTR_NAME = /[^a-zA-Z0-9_:\.\-]/gim;
      function parseAttr(html, onAttr) {
        "use strict";
        var lastPos = 0;
        var retAttrs = [];
        var tmpName = false;
        var len = html.length;
        function addAttr(name, value) {
          name = _.trim(name);
          name = name.replace(REGEXP_ILLEGAL_ATTR_NAME, "").toLowerCase();
          if (name.length < 1)
            return;
          var ret = onAttr(name, value || "");
          if (ret)
            retAttrs.push(ret);
        }
        for (var i = 0; i < len; i++) {
          var c = html.charAt(i);
          var v, j;
          if (tmpName === false && c === "=") {
            tmpName = html.slice(lastPos, i);
            lastPos = i + 1;
            continue;
          }
          if (tmpName !== false) {
            if (i === lastPos && (c === '"' || c === "'") && html.charAt(i - 1) === "=") {
              j = html.indexOf(c, i + 1);
              if (j === -1) {
                break;
              } else {
                v = _.trim(html.slice(lastPos + 1, j));
                addAttr(tmpName, v);
                tmpName = false;
                i = j;
                lastPos = i + 1;
                continue;
              }
            }
          }
          if (/\s|\n|\t/.test(c)) {
            html = html.replace(/\s|\n|\t/g, " ");
            if (tmpName === false) {
              j = findNextEqual(html, i);
              if (j === -1) {
                v = _.trim(html.slice(lastPos, i));
                addAttr(v);
                tmpName = false;
                lastPos = i + 1;
                continue;
              } else {
                i = j - 1;
                continue;
              }
            } else {
              j = findBeforeEqual(html, i - 1);
              if (j === -1) {
                v = _.trim(html.slice(lastPos, i));
                v = stripQuoteWrap(v);
                addAttr(tmpName, v);
                tmpName = false;
                lastPos = i + 1;
                continue;
              } else {
                continue;
              }
            }
          }
        }
        if (lastPos < html.length) {
          if (tmpName === false) {
            addAttr(html.slice(lastPos));
          } else {
            addAttr(tmpName, stripQuoteWrap(_.trim(html.slice(lastPos))));
          }
        }
        return _.trim(retAttrs.join(" "));
      }
      function findNextEqual(str, i) {
        for (; i < str.length; i++) {
          var c = str[i];
          if (c === " ")
            continue;
          if (c === "=")
            return i;
          return -1;
        }
      }
      function findBeforeEqual(str, i) {
        for (; i > 0; i--) {
          var c = str[i];
          if (c === " ")
            continue;
          if (c === "=")
            return i;
          return -1;
        }
      }
      function isQuoteWrapString(text) {
        if (text[0] === '"' && text[text.length - 1] === '"' || text[0] === "'" && text[text.length - 1] === "'") {
          return true;
        } else {
          return false;
        }
      }
      function stripQuoteWrap(text) {
        if (isQuoteWrapString(text)) {
          return text.substr(1, text.length - 2);
        } else {
          return text;
        }
      }
      exports.parseTag = parseTag;
      exports.parseAttr = parseAttr;
    }
  });

  // node_modules/xss/lib/xss.js
  var require_xss = __commonJS({
    "node_modules/xss/lib/xss.js"(exports, module) {
      var FilterCSS = require_lib().FilterCSS;
      var DEFAULT = require_default2();
      var parser = require_parser2();
      var parseTag = parser.parseTag;
      var parseAttr = parser.parseAttr;
      var _ = require_util2();
      function isNull(obj) {
        return obj === void 0 || obj === null;
      }
      function getAttrs(html) {
        var i = _.spaceIndex(html);
        if (i === -1) {
          return {
            html: "",
            closing: html[html.length - 2] === "/"
          };
        }
        html = _.trim(html.slice(i + 1, -1));
        var isClosing = html[html.length - 1] === "/";
        if (isClosing)
          html = _.trim(html.slice(0, -1));
        return {
          html,
          closing: isClosing
        };
      }
      function shallowCopyObject(obj) {
        var ret = {};
        for (var i in obj) {
          ret[i] = obj[i];
        }
        return ret;
      }
      function FilterXSS(options) {
        options = shallowCopyObject(options || {});
        if (options.stripIgnoreTag) {
          if (options.onIgnoreTag) {
            console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time');
          }
          options.onIgnoreTag = DEFAULT.onIgnoreTagStripAll;
        }
        options.whiteList = options.whiteList || options.allowList || DEFAULT.whiteList;
        options.onTag = options.onTag || DEFAULT.onTag;
        options.onTagAttr = options.onTagAttr || DEFAULT.onTagAttr;
        options.onIgnoreTag = options.onIgnoreTag || DEFAULT.onIgnoreTag;
        options.onIgnoreTagAttr = options.onIgnoreTagAttr || DEFAULT.onIgnoreTagAttr;
        options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
        options.escapeHtml = options.escapeHtml || DEFAULT.escapeHtml;
        this.options = options;
        if (options.css === false) {
          this.cssFilter = false;
        } else {
          options.css = options.css || {};
          this.cssFilter = new FilterCSS(options.css);
        }
      }
      FilterXSS.prototype.process = function(html) {
        html = html || "";
        html = html.toString();
        if (!html)
          return "";
        var me = this;
        var options = me.options;
        var whiteList = options.whiteList;
        var onTag = options.onTag;
        var onIgnoreTag = options.onIgnoreTag;
        var onTagAttr = options.onTagAttr;
        var onIgnoreTagAttr = options.onIgnoreTagAttr;
        var safeAttrValue = options.safeAttrValue;
        var escapeHtml = options.escapeHtml;
        var cssFilter = me.cssFilter;
        if (options.stripBlankChar) {
          html = DEFAULT.stripBlankChar(html);
        }
        if (!options.allowCommentTag) {
          html = DEFAULT.stripCommentTag(html);
        }
        var stripIgnoreTagBody = false;
        if (options.stripIgnoreTagBody) {
          var stripIgnoreTagBody = DEFAULT.StripTagBody(options.stripIgnoreTagBody, onIgnoreTag);
          onIgnoreTag = stripIgnoreTagBody.onIgnoreTag;
        }
        var retHtml = parseTag(html, function(sourcePosition, position, tag, html2, isClosing) {
          var info = {
            sourcePosition,
            position,
            isClosing,
            isWhite: whiteList.hasOwnProperty(tag)
          };
          var ret = onTag(tag, html2, info);
          if (!isNull(ret))
            return ret;
          if (info.isWhite) {
            if (info.isClosing) {
              return "</" + tag + ">";
            }
            var attrs = getAttrs(html2);
            var whiteAttrList = whiteList[tag];
            var attrsHtml = parseAttr(attrs.html, function(name, value) {
              var isWhiteAttr = _.indexOf(whiteAttrList, name) !== -1;
              var ret2 = onTagAttr(tag, name, value, isWhiteAttr);
              if (!isNull(ret2))
                return ret2;
              if (isWhiteAttr) {
                value = safeAttrValue(tag, name, value, cssFilter);
                if (value) {
                  return name + '="' + value + '"';
                } else {
                  return name;
                }
              } else {
                var ret2 = onIgnoreTagAttr(tag, name, value, isWhiteAttr);
                if (!isNull(ret2))
                  return ret2;
                return;
              }
            });
            var html2 = "<" + tag;
            if (attrsHtml)
              html2 += " " + attrsHtml;
            if (attrs.closing)
              html2 += " /";
            html2 += ">";
            return html2;
          } else {
            var ret = onIgnoreTag(tag, html2, info);
            if (!isNull(ret))
              return ret;
            return escapeHtml(html2);
          }
        }, escapeHtml);
        if (stripIgnoreTagBody) {
          retHtml = stripIgnoreTagBody.remove(retHtml);
        }
        return retHtml;
      };
      module.exports = FilterXSS;
    }
  });

  // node_modules/xss/lib/index.js
  var require_lib2 = __commonJS({
    "node_modules/xss/lib/index.js"(exports, module) {
      var DEFAULT = require_default2();
      var parser = require_parser2();
      var FilterXSS = require_xss();
      function filterXSS2(html, options) {
        var xss = new FilterXSS(options);
        return xss.process(html);
      }
      exports = module.exports = filterXSS2;
      exports.filterXSS = filterXSS2;
      exports.FilterXSS = FilterXSS;
      for (i in DEFAULT)
        exports[i] = DEFAULT[i];
      var i;
      for (i in parser)
        exports[i] = parser[i];
      var i;
      if (typeof window !== "undefined") {
        window.filterXSS = module.exports;
      }
      function isWorkerEnv() {
        return typeof self !== "undefined" && typeof DedicatedWorkerGlobalScope !== "undefined" && self instanceof DedicatedWorkerGlobalScope;
      }
      if (isWorkerEnv()) {
        self.filterXSS = module.exports;
      }
    }
  });

  // node_modules/prismjs/prism.js
  var require_prism = __commonJS({
    "node_modules/prismjs/prism.js"(exports, module) {
      var _self = typeof window !== "undefined" ? window : typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope ? self : {};
      var Prism2 = function(_self2) {
        var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
        var uniqueId = 0;
        var plainTextGrammar = {};
        var _ = {
          manual: _self2.Prism && _self2.Prism.manual,
          disableWorkerMessageHandler: _self2.Prism && _self2.Prism.disableWorkerMessageHandler,
          util: {
            encode: function encode(tokens) {
              if (tokens instanceof Token) {
                return new Token(tokens.type, encode(tokens.content), tokens.alias);
              } else if (Array.isArray(tokens)) {
                return tokens.map(encode);
              } else {
                return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
              }
            },
            type: function(o) {
              return Object.prototype.toString.call(o).slice(8, -1);
            },
            objId: function(obj) {
              if (!obj["__id"]) {
                Object.defineProperty(obj, "__id", { value: ++uniqueId });
              }
              return obj["__id"];
            },
            clone: function deepClone(o, visited) {
              visited = visited || {};
              var clone;
              var id;
              switch (_.util.type(o)) {
                case "Object":
                  id = _.util.objId(o);
                  if (visited[id]) {
                    return visited[id];
                  }
                  clone = {};
                  visited[id] = clone;
                  for (var key in o) {
                    if (o.hasOwnProperty(key)) {
                      clone[key] = deepClone(o[key], visited);
                    }
                  }
                  return clone;
                case "Array":
                  id = _.util.objId(o);
                  if (visited[id]) {
                    return visited[id];
                  }
                  clone = [];
                  visited[id] = clone;
                  o.forEach(function(v, i) {
                    clone[i] = deepClone(v, visited);
                  });
                  return clone;
                default:
                  return o;
              }
            },
            getLanguage: function(element) {
              while (element) {
                var m = lang.exec(element.className);
                if (m) {
                  return m[1].toLowerCase();
                }
                element = element.parentElement;
              }
              return "none";
            },
            setLanguage: function(element, language) {
              element.className = element.className.replace(RegExp(lang, "gi"), "");
              element.classList.add("language-" + language);
            },
            currentScript: function() {
              if (typeof document === "undefined") {
                return null;
              }
              if ("currentScript" in document && 1 < 2) {
                return document.currentScript;
              }
              try {
                throw new Error();
              } catch (err) {
                var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
                if (src) {
                  var scripts = document.getElementsByTagName("script");
                  for (var i in scripts) {
                    if (scripts[i].src == src) {
                      return scripts[i];
                    }
                  }
                }
                return null;
              }
            },
            isActive: function(element, className, defaultActivation) {
              var no = "no-" + className;
              while (element) {
                var classList = element.classList;
                if (classList.contains(className)) {
                  return true;
                }
                if (classList.contains(no)) {
                  return false;
                }
                element = element.parentElement;
              }
              return !!defaultActivation;
            }
          },
          languages: {
            plain: plainTextGrammar,
            plaintext: plainTextGrammar,
            text: plainTextGrammar,
            txt: plainTextGrammar,
            extend: function(id, redef) {
              var lang2 = _.util.clone(_.languages[id]);
              for (var key in redef) {
                lang2[key] = redef[key];
              }
              return lang2;
            },
            insertBefore: function(inside, before, insert, root) {
              root = root || _.languages;
              var grammar = root[inside];
              var ret = {};
              for (var token in grammar) {
                if (grammar.hasOwnProperty(token)) {
                  if (token == before) {
                    for (var newToken in insert) {
                      if (insert.hasOwnProperty(newToken)) {
                        ret[newToken] = insert[newToken];
                      }
                    }
                  }
                  if (!insert.hasOwnProperty(token)) {
                    ret[token] = grammar[token];
                  }
                }
              }
              var old = root[inside];
              root[inside] = ret;
              _.languages.DFS(_.languages, function(key, value) {
                if (value === old && key != inside) {
                  this[key] = ret;
                }
              });
              return ret;
            },
            DFS: function DFS(o, callback, type, visited) {
              visited = visited || {};
              var objId = _.util.objId;
              for (var i in o) {
                if (o.hasOwnProperty(i)) {
                  callback.call(o, i, o[i], type || i);
                  var property = o[i];
                  var propertyType = _.util.type(property);
                  if (propertyType === "Object" && !visited[objId(property)]) {
                    visited[objId(property)] = true;
                    DFS(property, callback, null, visited);
                  } else if (propertyType === "Array" && !visited[objId(property)]) {
                    visited[objId(property)] = true;
                    DFS(property, callback, i, visited);
                  }
                }
              }
            }
          },
          plugins: {},
          highlightAll: function(async, callback) {
            _.highlightAllUnder(document, async, callback);
          },
          highlightAllUnder: function(container, async, callback) {
            var env = {
              callback,
              container,
              selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
            };
            _.hooks.run("before-highlightall", env);
            env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));
            _.hooks.run("before-all-elements-highlight", env);
            for (var i = 0, element; element = env.elements[i++]; ) {
              _.highlightElement(element, async === true, env.callback);
            }
          },
          highlightElement: function(element, async, callback) {
            var language = _.util.getLanguage(element);
            var grammar = _.languages[language];
            _.util.setLanguage(element, language);
            var parent = element.parentElement;
            if (parent && parent.nodeName.toLowerCase() === "pre") {
              _.util.setLanguage(parent, language);
            }
            var code = element.textContent;
            var env = {
              element,
              language,
              grammar,
              code
            };
            function insertHighlightedCode(highlightedCode) {
              env.highlightedCode = highlightedCode;
              _.hooks.run("before-insert", env);
              env.element.innerHTML = env.highlightedCode;
              _.hooks.run("after-highlight", env);
              _.hooks.run("complete", env);
              callback && callback.call(env.element);
            }
            _.hooks.run("before-sanity-check", env);
            parent = env.element.parentElement;
            if (parent && parent.nodeName.toLowerCase() === "pre" && !parent.hasAttribute("tabindex")) {
              parent.setAttribute("tabindex", "0");
            }
            if (!env.code) {
              _.hooks.run("complete", env);
              callback && callback.call(env.element);
              return;
            }
            _.hooks.run("before-highlight", env);
            if (!env.grammar) {
              insertHighlightedCode(_.util.encode(env.code));
              return;
            }
            if (async && _self2.Worker) {
              var worker = new Worker(_.filename);
              worker.onmessage = function(evt) {
                insertHighlightedCode(evt.data);
              };
              worker.postMessage(JSON.stringify({
                language: env.language,
                code: env.code,
                immediateClose: true
              }));
            } else {
              insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
            }
          },
          highlight: function(text, grammar, language) {
            var env = {
              code: text,
              grammar,
              language
            };
            _.hooks.run("before-tokenize", env);
            if (!env.grammar) {
              throw new Error('The language "' + env.language + '" has no grammar.');
            }
            env.tokens = _.tokenize(env.code, env.grammar);
            _.hooks.run("after-tokenize", env);
            return Token.stringify(_.util.encode(env.tokens), env.language);
          },
          tokenize: function(text, grammar) {
            var rest = grammar.rest;
            if (rest) {
              for (var token in rest) {
                grammar[token] = rest[token];
              }
              delete grammar.rest;
            }
            var tokenList = new LinkedList();
            addAfter(tokenList, tokenList.head, text);
            matchGrammar(text, tokenList, grammar, tokenList.head, 0);
            return toArray(tokenList);
          },
          hooks: {
            all: {},
            add: function(name, callback) {
              var hooks = _.hooks.all;
              hooks[name] = hooks[name] || [];
              hooks[name].push(callback);
            },
            run: function(name, env) {
              var callbacks = _.hooks.all[name];
              if (!callbacks || !callbacks.length) {
                return;
              }
              for (var i = 0, callback; callback = callbacks[i++]; ) {
                callback(env);
              }
            }
          },
          Token
        };
        _self2.Prism = _;
        function Token(type, content, alias, matchedStr) {
          this.type = type;
          this.content = content;
          this.alias = alias;
          this.length = (matchedStr || "").length | 0;
        }
        Token.stringify = function stringify(o, language) {
          if (typeof o == "string") {
            return o;
          }
          if (Array.isArray(o)) {
            var s = "";
            o.forEach(function(e) {
              s += stringify(e, language);
            });
            return s;
          }
          var env = {
            type: o.type,
            content: stringify(o.content, language),
            tag: "span",
            classes: ["token", o.type],
            attributes: {},
            language
          };
          var aliases = o.alias;
          if (aliases) {
            if (Array.isArray(aliases)) {
              Array.prototype.push.apply(env.classes, aliases);
            } else {
              env.classes.push(aliases);
            }
          }
          _.hooks.run("wrap", env);
          var attributes = "";
          for (var name in env.attributes) {
            attributes += " " + name + '="' + (env.attributes[name] || "").replace(/"/g, "&quot;") + '"';
          }
          return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + attributes + ">" + env.content + "</" + env.tag + ">";
        };
        function matchPattern(pattern, pos, text, lookbehind) {
          pattern.lastIndex = pos;
          var match = pattern.exec(text);
          if (match && lookbehind && match[1]) {
            var lookbehindLength = match[1].length;
            match.index += lookbehindLength;
            match[0] = match[0].slice(lookbehindLength);
          }
          return match;
        }
        function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
          for (var token in grammar) {
            if (!grammar.hasOwnProperty(token) || !grammar[token]) {
              continue;
            }
            var patterns = grammar[token];
            patterns = Array.isArray(patterns) ? patterns : [patterns];
            for (var j = 0; j < patterns.length; ++j) {
              if (rematch && rematch.cause == token + "," + j) {
                return;
              }
              var patternObj = patterns[j];
              var inside = patternObj.inside;
              var lookbehind = !!patternObj.lookbehind;
              var greedy = !!patternObj.greedy;
              var alias = patternObj.alias;
              if (greedy && !patternObj.pattern.global) {
                var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
                patternObj.pattern = RegExp(patternObj.pattern.source, flags + "g");
              }
              var pattern = patternObj.pattern || patternObj;
              for (var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
                if (rematch && pos >= rematch.reach) {
                  break;
                }
                var str = currentNode.value;
                if (tokenList.length > text.length) {
                  return;
                }
                if (str instanceof Token) {
                  continue;
                }
                var removeCount = 1;
                var match;
                if (greedy) {
                  match = matchPattern(pattern, pos, text, lookbehind);
                  if (!match || match.index >= text.length) {
                    break;
                  }
                  var from = match.index;
                  var to = match.index + match[0].length;
                  var p = pos;
                  p += currentNode.value.length;
                  while (from >= p) {
                    currentNode = currentNode.next;
                    p += currentNode.value.length;
                  }
                  p -= currentNode.value.length;
                  pos = p;
                  if (currentNode.value instanceof Token) {
                    continue;
                  }
                  for (var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === "string"); k = k.next) {
                    removeCount++;
                    p += k.value.length;
                  }
                  removeCount--;
                  str = text.slice(pos, p);
                  match.index -= pos;
                } else {
                  match = matchPattern(pattern, 0, str, lookbehind);
                  if (!match) {
                    continue;
                  }
                }
                var from = match.index;
                var matchStr = match[0];
                var before = str.slice(0, from);
                var after = str.slice(from + matchStr.length);
                var reach = pos + str.length;
                if (rematch && reach > rematch.reach) {
                  rematch.reach = reach;
                }
                var removeFrom = currentNode.prev;
                if (before) {
                  removeFrom = addAfter(tokenList, removeFrom, before);
                  pos += before.length;
                }
                removeRange(tokenList, removeFrom, removeCount);
                var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
                currentNode = addAfter(tokenList, removeFrom, wrapped);
                if (after) {
                  addAfter(tokenList, currentNode, after);
                }
                if (removeCount > 1) {
                  var nestedRematch = {
                    cause: token + "," + j,
                    reach
                  };
                  matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);
                  if (rematch && nestedRematch.reach > rematch.reach) {
                    rematch.reach = nestedRematch.reach;
                  }
                }
              }
            }
          }
        }
        function LinkedList() {
          var head = { value: null, prev: null, next: null };
          var tail = { value: null, prev: head, next: null };
          head.next = tail;
          this.head = head;
          this.tail = tail;
          this.length = 0;
        }
        function addAfter(list, node, value) {
          var next = node.next;
          var newNode = { value, prev: node, next };
          node.next = newNode;
          next.prev = newNode;
          list.length++;
          return newNode;
        }
        function removeRange(list, node, count) {
          var next = node.next;
          for (var i = 0; i < count && next !== list.tail; i++) {
            next = next.next;
          }
          node.next = next;
          next.prev = node;
          list.length -= i;
        }
        function toArray(list) {
          var array = [];
          var node = list.head.next;
          while (node !== list.tail) {
            array.push(node.value);
            node = node.next;
          }
          return array;
        }
        if (!_self2.document) {
          if (!_self2.addEventListener) {
            return _;
          }
          if (!_.disableWorkerMessageHandler) {
            _self2.addEventListener("message", function(evt) {
              var message = JSON.parse(evt.data);
              var lang2 = message.language;
              var code = message.code;
              var immediateClose = message.immediateClose;
              _self2.postMessage(_.highlight(code, _.languages[lang2], lang2));
              if (immediateClose) {
                _self2.close();
              }
            }, false);
          }
          return _;
        }
        var script = _.util.currentScript();
        if (script) {
          _.filename = script.src;
          if (script.hasAttribute("data-manual")) {
            _.manual = true;
          }
        }
        function highlightAutomaticallyCallback() {
          if (!_.manual) {
            _.highlightAll();
          }
        }
        if (!_.manual) {
          var readyState = document.readyState;
          if (readyState === "loading" || readyState === "interactive" && script && script.defer) {
            document.addEventListener("DOMContentLoaded", highlightAutomaticallyCallback);
          } else {
            if (window.requestAnimationFrame) {
              window.requestAnimationFrame(highlightAutomaticallyCallback);
            } else {
              window.setTimeout(highlightAutomaticallyCallback, 16);
            }
          }
        }
        return _;
      }(_self);
      if (typeof module !== "undefined" && module.exports) {
        module.exports = Prism2;
      }
      if (typeof global !== "undefined") {
        global.Prism = Prism2;
      }
      Prism2.languages.markup = {
        "comment": {
          pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
          greedy: true
        },
        "prolog": {
          pattern: /<\?[\s\S]+?\?>/,
          greedy: true
        },
        "doctype": {
          pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
          greedy: true,
          inside: {
            "internal-subset": {
              pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
              lookbehind: true,
              greedy: true,
              inside: null
            },
            "string": {
              pattern: /"[^"]*"|'[^']*'/,
              greedy: true
            },
            "punctuation": /^<!|>$|[[\]]/,
            "doctype-tag": /^DOCTYPE/i,
            "name": /[^\s<>'"]+/
          }
        },
        "cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          greedy: true
        },
        "tag": {
          pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
          greedy: true,
          inside: {
            "tag": {
              pattern: /^<\/?[^\s>\/]+/,
              inside: {
                "punctuation": /^<\/?/,
                "namespace": /^[^\s>\/:]+:/
              }
            },
            "special-attr": [],
            "attr-value": {
              pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
              inside: {
                "punctuation": [
                  {
                    pattern: /^=/,
                    alias: "attr-equals"
                  },
                  /"|'/
                ]
              }
            },
            "punctuation": /\/?>/,
            "attr-name": {
              pattern: /[^\s>\/]+/,
              inside: {
                "namespace": /^[^\s>\/:]+:/
              }
            }
          }
        },
        "entity": [
          {
            pattern: /&[\da-z]{1,8};/i,
            alias: "named-entity"
          },
          /&#x?[\da-f]{1,8};/i
        ]
      };
      Prism2.languages.markup["tag"].inside["attr-value"].inside["entity"] = Prism2.languages.markup["entity"];
      Prism2.languages.markup["doctype"].inside["internal-subset"].inside = Prism2.languages.markup;
      Prism2.hooks.add("wrap", function(env) {
        if (env.type === "entity") {
          env.attributes["title"] = env.content.replace(/&amp;/, "&");
        }
      });
      Object.defineProperty(Prism2.languages.markup.tag, "addInlined", {
        value: function addInlined(tagName, lang) {
          var includedCdataInside = {};
          includedCdataInside["language-" + lang] = {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: true,
            inside: Prism2.languages[lang]
          };
          includedCdataInside["cdata"] = /^<!\[CDATA\[|\]\]>$/i;
          var inside = {
            "included-cdata": {
              pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
              inside: includedCdataInside
            }
          };
          inside["language-" + lang] = {
            pattern: /[\s\S]+/,
            inside: Prism2.languages[lang]
          };
          var def = {};
          def[tagName] = {
            pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
              return tagName;
            }), "i"),
            lookbehind: true,
            greedy: true,
            inside
          };
          Prism2.languages.insertBefore("markup", "cdata", def);
        }
      });
      Object.defineProperty(Prism2.languages.markup.tag, "addAttribute", {
        value: function(attrName, lang) {
          Prism2.languages.markup.tag.inside["special-attr"].push({
            pattern: RegExp(/(^|["'\s])/.source + "(?:" + attrName + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
            lookbehind: true,
            inside: {
              "attr-name": /^[^\s=]+/,
              "attr-value": {
                pattern: /=[\s\S]+/,
                inside: {
                  "value": {
                    pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                    lookbehind: true,
                    alias: [lang, "language-" + lang],
                    inside: Prism2.languages[lang]
                  },
                  "punctuation": [
                    {
                      pattern: /^=/,
                      alias: "attr-equals"
                    },
                    /"|'/
                  ]
                }
              }
            }
          });
        }
      });
      Prism2.languages.html = Prism2.languages.markup;
      Prism2.languages.mathml = Prism2.languages.markup;
      Prism2.languages.svg = Prism2.languages.markup;
      Prism2.languages.xml = Prism2.languages.extend("markup", {});
      Prism2.languages.ssml = Prism2.languages.xml;
      Prism2.languages.atom = Prism2.languages.xml;
      Prism2.languages.rss = Prism2.languages.xml;
      (function(Prism3) {
        var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
        Prism3.languages.css = {
          "comment": /\/\*[\s\S]*?\*\//,
          "atrule": {
            pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
            inside: {
              "rule": /^@[\w-]+/,
              "selector-function-argument": {
                pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                lookbehind: true,
                alias: "selector"
              },
              "keyword": {
                pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                lookbehind: true
              }
            }
          },
          "url": {
            pattern: RegExp("\\burl\\((?:" + string.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
            greedy: true,
            inside: {
              "function": /^url/i,
              "punctuation": /^\(|\)$/,
              "string": {
                pattern: RegExp("^" + string.source + "$"),
                alias: "url"
              }
            }
          },
          "selector": {
            pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + string.source + ")*(?=\\s*\\{)"),
            lookbehind: true
          },
          "string": {
            pattern: string,
            greedy: true
          },
          "property": {
            pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            lookbehind: true
          },
          "important": /!important\b/i,
          "function": {
            pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
            lookbehind: true
          },
          "punctuation": /[(){};:,]/
        };
        Prism3.languages.css["atrule"].inside.rest = Prism3.languages.css;
        var markup = Prism3.languages.markup;
        if (markup) {
          markup.tag.addInlined("style", "css");
          markup.tag.addAttribute("style", "css");
        }
      })(Prism2);
      Prism2.languages.clike = {
        "comment": [
          {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: true,
            greedy: true
          },
          {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: true,
            greedy: true
          }
        ],
        "string": {
          pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
          greedy: true
        },
        "class-name": {
          pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
          lookbehind: true,
          inside: {
            "punctuation": /[.\\]/
          }
        },
        "keyword": /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
        "boolean": /\b(?:false|true)\b/,
        "function": /\b\w+(?=\()/,
        "number": /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
        "operator": /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
        "punctuation": /[{}[\];(),.:]/
      };
      Prism2.languages.javascript = Prism2.languages.extend("clike", {
        "class-name": [
          Prism2.languages.clike["class-name"],
          {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
            lookbehind: true
          }
        ],
        "keyword": [
          {
            pattern: /((?:^|\})\s*)catch\b/,
            lookbehind: true
          },
          {
            pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
            lookbehind: true
          }
        ],
        "function": /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
        "number": {
          pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source),
          lookbehind: true
        },
        "operator": /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
      });
      Prism2.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
      Prism2.languages.insertBefore("javascript", "keyword", {
        "regex": {
          pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
          lookbehind: true,
          greedy: true,
          inside: {
            "regex-source": {
              pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
              lookbehind: true,
              alias: "language-regex",
              inside: Prism2.languages.regex
            },
            "regex-delimiter": /^\/|\/$/,
            "regex-flags": /^[a-z]+$/
          }
        },
        "function-variable": {
          pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
          alias: "function"
        },
        "parameter": [
          {
            pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
            lookbehind: true,
            inside: Prism2.languages.javascript
          },
          {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
            lookbehind: true,
            inside: Prism2.languages.javascript
          },
          {
            pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
            lookbehind: true,
            inside: Prism2.languages.javascript
          },
          {
            pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
            lookbehind: true,
            inside: Prism2.languages.javascript
          }
        ],
        "constant": /\b[A-Z](?:[A-Z_]|\dx?)*\b/
      });
      Prism2.languages.insertBefore("javascript", "string", {
        "hashbang": {
          pattern: /^#!.*/,
          greedy: true,
          alias: "comment"
        },
        "template-string": {
          pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
          greedy: true,
          inside: {
            "template-punctuation": {
              pattern: /^`|`$/,
              alias: "string"
            },
            "interpolation": {
              pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
              lookbehind: true,
              inside: {
                "interpolation-punctuation": {
                  pattern: /^\$\{|\}$/,
                  alias: "punctuation"
                },
                rest: Prism2.languages.javascript
              }
            },
            "string": /[\s\S]+/
          }
        },
        "string-property": {
          pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
          lookbehind: true,
          greedy: true,
          alias: "property"
        }
      });
      Prism2.languages.insertBefore("javascript", "operator", {
        "literal-property": {
          pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
          lookbehind: true,
          alias: "property"
        }
      });
      if (Prism2.languages.markup) {
        Prism2.languages.markup.tag.addInlined("script", "javascript");
        Prism2.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript");
      }
      Prism2.languages.js = Prism2.languages.javascript;
      (function() {
        if (typeof Prism2 === "undefined" || typeof document === "undefined") {
          return;
        }
        if (!Element.prototype.matches) {
          Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
        }
        var LOADING_MESSAGE = "Loading\u2026";
        var FAILURE_MESSAGE = function(status, message) {
          return "\u2716 Error " + status + " while fetching file: " + message;
        };
        var FAILURE_EMPTY_MESSAGE = "\u2716 Error: File does not exist or is empty";
        var EXTENSIONS = {
          "js": "javascript",
          "py": "python",
          "rb": "ruby",
          "ps1": "powershell",
          "psm1": "powershell",
          "sh": "bash",
          "bat": "batch",
          "h": "c",
          "tex": "latex"
        };
        var STATUS_ATTR = "data-src-status";
        var STATUS_LOADING = "loading";
        var STATUS_LOADED = "loaded";
        var STATUS_FAILED = "failed";
        var SELECTOR = "pre[data-src]:not([" + STATUS_ATTR + '="' + STATUS_LOADED + '"]):not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';
        function loadFile(src, success, error) {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", src, true);
          xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
              if (xhr.status < 400 && xhr.responseText) {
                success(xhr.responseText);
              } else {
                if (xhr.status >= 400) {
                  error(FAILURE_MESSAGE(xhr.status, xhr.statusText));
                } else {
                  error(FAILURE_EMPTY_MESSAGE);
                }
              }
            }
          };
          xhr.send(null);
        }
        function parseRange(range) {
          var m = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(range || "");
          if (m) {
            var start = Number(m[1]);
            var comma = m[2];
            var end = m[3];
            if (!comma) {
              return [start, start];
            }
            if (!end) {
              return [start, void 0];
            }
            return [start, Number(end)];
          }
          return void 0;
        }
        Prism2.hooks.add("before-highlightall", function(env) {
          env.selector += ", " + SELECTOR;
        });
        Prism2.hooks.add("before-sanity-check", function(env) {
          var pre = env.element;
          if (pre.matches(SELECTOR)) {
            env.code = "";
            pre.setAttribute(STATUS_ATTR, STATUS_LOADING);
            var code = pre.appendChild(document.createElement("CODE"));
            code.textContent = LOADING_MESSAGE;
            var src = pre.getAttribute("data-src");
            var language = env.language;
            if (language === "none") {
              var extension = (/\.(\w+)$/.exec(src) || [, "none"])[1];
              language = EXTENSIONS[extension] || extension;
            }
            Prism2.util.setLanguage(code, language);
            Prism2.util.setLanguage(pre, language);
            var autoloader = Prism2.plugins.autoloader;
            if (autoloader) {
              autoloader.loadLanguages(language);
            }
            loadFile(src, function(text) {
              pre.setAttribute(STATUS_ATTR, STATUS_LOADED);
              var range = parseRange(pre.getAttribute("data-range"));
              if (range) {
                var lines = text.split(/\r\n?|\n/g);
                var start = range[0];
                var end = range[1] == null ? lines.length : range[1];
                if (start < 0) {
                  start += lines.length;
                }
                start = Math.max(0, Math.min(start - 1, lines.length));
                if (end < 0) {
                  end += lines.length;
                }
                end = Math.max(0, Math.min(end, lines.length));
                text = lines.slice(start, end).join("\n");
                if (!pre.hasAttribute("data-start")) {
                  pre.setAttribute("data-start", String(start + 1));
                }
              }
              code.textContent = text;
              Prism2.highlightElement(code);
            }, function(error) {
              pre.setAttribute(STATUS_ATTR, STATUS_FAILED);
              code.textContent = error;
            });
          }
        });
        Prism2.plugins.fileHighlight = {
          highlight: function highlight(container) {
            var elements = (container || document).querySelectorAll(SELECTOR);
            for (var i = 0, element; element = elements[i++]; ) {
              Prism2.highlightElement(element);
            }
          }
        };
        var logged = false;
        Prism2.fileHighlight = function() {
          if (!logged) {
            console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.");
            logged = true;
          }
          Prism2.plugins.fileHighlight.highlight.apply(this, arguments);
        };
      })();
    }
  });

  // node_modules/jquery/dist/jquery.js
  var require_jquery = __commonJS({
    "node_modules/jquery/dist/jquery.js"(exports, module) {
      (function(global2, factory) {
        "use strict";
        if (typeof module === "object" && typeof module.exports === "object") {
          module.exports = global2.document ? factory(global2, true) : function(w) {
            if (!w.document) {
              throw new Error("jQuery requires a window with a document");
            }
            return factory(w);
          };
        } else {
          factory(global2);
        }
      })(typeof window !== "undefined" ? window : exports, function(window2, noGlobal) {
        "use strict";
        var arr = [];
        var getProto = Object.getPrototypeOf;
        var slice = arr.slice;
        var flat = arr.flat ? function(array) {
          return arr.flat.call(array);
        } : function(array) {
          return arr.concat.apply([], array);
        };
        var push = arr.push;
        var indexOf = arr.indexOf;
        var class2type = {};
        var toString = class2type.toString;
        var hasOwn = class2type.hasOwnProperty;
        var fnToString = hasOwn.toString;
        var ObjectFunctionString = fnToString.call(Object);
        var support = {};
        var isFunction = function isFunction2(obj) {
          return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
        };
        var isWindow = function isWindow2(obj) {
          return obj != null && obj === obj.window;
        };
        var document2 = window2.document;
        var preservedScriptAttributes = {
          type: true,
          src: true,
          nonce: true,
          noModule: true
        };
        function DOMEval(code, node, doc) {
          doc = doc || document2;
          var i, val, script = doc.createElement("script");
          script.text = code;
          if (node) {
            for (i in preservedScriptAttributes) {
              val = node[i] || node.getAttribute && node.getAttribute(i);
              if (val) {
                script.setAttribute(i, val);
              }
            }
          }
          doc.head.appendChild(script).parentNode.removeChild(script);
        }
        function toType(obj) {
          if (obj == null) {
            return obj + "";
          }
          return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
        }
        var version = "3.6.0", jQuery = function(selector, context) {
          return new jQuery.fn.init(selector, context);
        };
        jQuery.fn = jQuery.prototype = {
          jquery: version,
          constructor: jQuery,
          length: 0,
          toArray: function() {
            return slice.call(this);
          },
          get: function(num) {
            if (num == null) {
              return slice.call(this);
            }
            return num < 0 ? this[num + this.length] : this[num];
          },
          pushStack: function(elems) {
            var ret = jQuery.merge(this.constructor(), elems);
            ret.prevObject = this;
            return ret;
          },
          each: function(callback) {
            return jQuery.each(this, callback);
          },
          map: function(callback) {
            return this.pushStack(jQuery.map(this, function(elem, i) {
              return callback.call(elem, i, elem);
            }));
          },
          slice: function() {
            return this.pushStack(slice.apply(this, arguments));
          },
          first: function() {
            return this.eq(0);
          },
          last: function() {
            return this.eq(-1);
          },
          even: function() {
            return this.pushStack(jQuery.grep(this, function(_elem, i) {
              return (i + 1) % 2;
            }));
          },
          odd: function() {
            return this.pushStack(jQuery.grep(this, function(_elem, i) {
              return i % 2;
            }));
          },
          eq: function(i) {
            var len = this.length, j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
          },
          end: function() {
            return this.prevObject || this.constructor();
          },
          push,
          sort: arr.sort,
          splice: arr.splice
        };
        jQuery.extend = jQuery.fn.extend = function() {
          var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
          if (typeof target === "boolean") {
            deep = target;
            target = arguments[i] || {};
            i++;
          }
          if (typeof target !== "object" && !isFunction(target)) {
            target = {};
          }
          if (i === length) {
            target = this;
            i--;
          }
          for (; i < length; i++) {
            if ((options = arguments[i]) != null) {
              for (name in options) {
                copy = options[name];
                if (name === "__proto__" || target === copy) {
                  continue;
                }
                if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                  src = target[name];
                  if (copyIsArray && !Array.isArray(src)) {
                    clone = [];
                  } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
                    clone = {};
                  } else {
                    clone = src;
                  }
                  copyIsArray = false;
                  target[name] = jQuery.extend(deep, clone, copy);
                } else if (copy !== void 0) {
                  target[name] = copy;
                }
              }
            }
          }
          return target;
        };
        jQuery.extend({
          expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
          isReady: true,
          error: function(msg) {
            throw new Error(msg);
          },
          noop: function() {
          },
          isPlainObject: function(obj) {
            var proto, Ctor;
            if (!obj || toString.call(obj) !== "[object Object]") {
              return false;
            }
            proto = getProto(obj);
            if (!proto) {
              return true;
            }
            Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
            return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
          },
          isEmptyObject: function(obj) {
            var name;
            for (name in obj) {
              return false;
            }
            return true;
          },
          globalEval: function(code, options, doc) {
            DOMEval(code, { nonce: options && options.nonce }, doc);
          },
          each: function(obj, callback) {
            var length, i = 0;
            if (isArrayLike(obj)) {
              length = obj.length;
              for (; i < length; i++) {
                if (callback.call(obj[i], i, obj[i]) === false) {
                  break;
                }
              }
            } else {
              for (i in obj) {
                if (callback.call(obj[i], i, obj[i]) === false) {
                  break;
                }
              }
            }
            return obj;
          },
          makeArray: function(arr2, results) {
            var ret = results || [];
            if (arr2 != null) {
              if (isArrayLike(Object(arr2))) {
                jQuery.merge(ret, typeof arr2 === "string" ? [arr2] : arr2);
              } else {
                push.call(ret, arr2);
              }
            }
            return ret;
          },
          inArray: function(elem, arr2, i) {
            return arr2 == null ? -1 : indexOf.call(arr2, elem, i);
          },
          merge: function(first, second) {
            var len = +second.length, j = 0, i = first.length;
            for (; j < len; j++) {
              first[i++] = second[j];
            }
            first.length = i;
            return first;
          },
          grep: function(elems, callback, invert) {
            var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
            for (; i < length; i++) {
              callbackInverse = !callback(elems[i], i);
              if (callbackInverse !== callbackExpect) {
                matches.push(elems[i]);
              }
            }
            return matches;
          },
          map: function(elems, callback, arg) {
            var length, value, i = 0, ret = [];
            if (isArrayLike(elems)) {
              length = elems.length;
              for (; i < length; i++) {
                value = callback(elems[i], i, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            } else {
              for (i in elems) {
                value = callback(elems[i], i, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            }
            return flat(ret);
          },
          guid: 1,
          support
        });
        if (typeof Symbol === "function") {
          jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
        }
        jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(_i, name) {
          class2type["[object " + name + "]"] = name.toLowerCase();
        });
        function isArrayLike(obj) {
          var length = !!obj && "length" in obj && obj.length, type = toType(obj);
          if (isFunction(obj) || isWindow(obj)) {
            return false;
          }
          return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
        }
        var Sizzle = function(window3) {
          var i, support2, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document3, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * new Date(), preferredDoc = window3.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
            if (a === b) {
              hasDuplicate = true;
            }
            return 0;
          }, hasOwn2 = {}.hasOwnProperty, arr2 = [], pop = arr2.pop, pushNative = arr2.push, push2 = arr2.push, slice2 = arr2.slice, indexOf2 = function(list, elem) {
            var i2 = 0, len = list.length;
            for (; i2 < len; i2++) {
              if (list[i2] === elem) {
                return i2;
              }
            }
            return -1;
          }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", whitespace = "[\\x20\\t\\r\\n\\f]", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rtrim2 = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            "ID": new RegExp("^#(" + identifier + ")"),
            "CLASS": new RegExp("^\\.(" + identifier + ")"),
            "TAG": new RegExp("^(" + identifier + "|[*])"),
            "ATTR": new RegExp("^" + attributes),
            "PSEUDO": new RegExp("^" + pseudos),
            "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
            "bool": new RegExp("^(?:" + booleans + ")$", "i"),
            "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
          }, rhtml2 = /HTML$/i, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
            var high = "0x" + escape.slice(1) - 65536;
            return nonHex ? nonHex : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
          }, rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, fcssescape = function(ch, asCodePoint) {
            if (asCodePoint) {
              if (ch === "\0") {
                return "\uFFFD";
              }
              return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
            }
            return "\\" + ch;
          }, unloadHandler = function() {
            setDocument();
          }, inDisabledFieldset = addCombinator(function(elem) {
            return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
          }, { dir: "parentNode", next: "legend" });
          try {
            push2.apply(arr2 = slice2.call(preferredDoc.childNodes), preferredDoc.childNodes);
            arr2[preferredDoc.childNodes.length].nodeType;
          } catch (e) {
            push2 = {
              apply: arr2.length ? function(target, els) {
                pushNative.apply(target, slice2.call(els));
              } : function(target, els) {
                var j = target.length, i2 = 0;
                while (target[j++] = els[i2++]) {
                }
                target.length = j - 1;
              }
            };
          }
          function Sizzle2(selector, context, results, seed) {
            var m, i2, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
            results = results || [];
            if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
              return results;
            }
            if (!seed) {
              setDocument(context);
              context = context || document3;
              if (documentIsHTML) {
                if (nodeType !== 11 && (match = rquickExpr2.exec(selector))) {
                  if (m = match[1]) {
                    if (nodeType === 9) {
                      if (elem = context.getElementById(m)) {
                        if (elem.id === m) {
                          results.push(elem);
                          return results;
                        }
                      } else {
                        return results;
                      }
                    } else {
                      if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                        results.push(elem);
                        return results;
                      }
                    }
                  } else if (match[2]) {
                    push2.apply(results, context.getElementsByTagName(selector));
                    return results;
                  } else if ((m = match[3]) && support2.getElementsByClassName && context.getElementsByClassName) {
                    push2.apply(results, context.getElementsByClassName(m));
                    return results;
                  }
                }
                if (support2.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && (nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
                  newSelector = selector;
                  newContext = context;
                  if (nodeType === 1 && (rdescend.test(selector) || rcombinators.test(selector))) {
                    newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                    if (newContext !== context || !support2.scope) {
                      if (nid = context.getAttribute("id")) {
                        nid = nid.replace(rcssescape, fcssescape);
                      } else {
                        context.setAttribute("id", nid = expando);
                      }
                    }
                    groups = tokenize(selector);
                    i2 = groups.length;
                    while (i2--) {
                      groups[i2] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i2]);
                    }
                    newSelector = groups.join(",");
                  }
                  try {
                    push2.apply(results, newContext.querySelectorAll(newSelector));
                    return results;
                  } catch (qsaError) {
                    nonnativeSelectorCache(selector, true);
                  } finally {
                    if (nid === expando) {
                      context.removeAttribute("id");
                    }
                  }
                }
              }
            }
            return select(selector.replace(rtrim2, "$1"), context, results, seed);
          }
          function createCache() {
            var keys = [];
            function cache(key, value) {
              if (keys.push(key + " ") > Expr.cacheLength) {
                delete cache[keys.shift()];
              }
              return cache[key + " "] = value;
            }
            return cache;
          }
          function markFunction(fn) {
            fn[expando] = true;
            return fn;
          }
          function assert(fn) {
            var el = document3.createElement("fieldset");
            try {
              return !!fn(el);
            } catch (e) {
              return false;
            } finally {
              if (el.parentNode) {
                el.parentNode.removeChild(el);
              }
              el = null;
            }
          }
          function addHandle(attrs, handler) {
            var arr3 = attrs.split("|"), i2 = arr3.length;
            while (i2--) {
              Expr.attrHandle[arr3[i2]] = handler;
            }
          }
          function siblingCheck(a, b) {
            var cur = b && a, diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;
            if (diff) {
              return diff;
            }
            if (cur) {
              while (cur = cur.nextSibling) {
                if (cur === b) {
                  return -1;
                }
              }
            }
            return a ? 1 : -1;
          }
          function createInputPseudo(type) {
            return function(elem) {
              var name = elem.nodeName.toLowerCase();
              return name === "input" && elem.type === type;
            };
          }
          function createButtonPseudo(type) {
            return function(elem) {
              var name = elem.nodeName.toLowerCase();
              return (name === "input" || name === "button") && elem.type === type;
            };
          }
          function createDisabledPseudo(disabled) {
            return function(elem) {
              if ("form" in elem) {
                if (elem.parentNode && elem.disabled === false) {
                  if ("label" in elem) {
                    if ("label" in elem.parentNode) {
                      return elem.parentNode.disabled === disabled;
                    } else {
                      return elem.disabled === disabled;
                    }
                  }
                  return elem.isDisabled === disabled || elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
                }
                return elem.disabled === disabled;
              } else if ("label" in elem) {
                return elem.disabled === disabled;
              }
              return false;
            };
          }
          function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
              argument = +argument;
              return markFunction(function(seed, matches2) {
                var j, matchIndexes = fn([], seed.length, argument), i2 = matchIndexes.length;
                while (i2--) {
                  if (seed[j = matchIndexes[i2]]) {
                    seed[j] = !(matches2[j] = seed[j]);
                  }
                }
              });
            });
          }
          function testContext(context) {
            return context && typeof context.getElementsByTagName !== "undefined" && context;
          }
          support2 = Sizzle2.support = {};
          isXML = Sizzle2.isXML = function(elem) {
            var namespace = elem && elem.namespaceURI, docElem2 = elem && (elem.ownerDocument || elem).documentElement;
            return !rhtml2.test(namespace || docElem2 && docElem2.nodeName || "HTML");
          };
          setDocument = Sizzle2.setDocument = function(node) {
            var hasCompare, subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
            if (doc == document3 || doc.nodeType !== 9 || !doc.documentElement) {
              return document3;
            }
            document3 = doc;
            docElem = document3.documentElement;
            documentIsHTML = !isXML(document3);
            if (preferredDoc != document3 && (subWindow = document3.defaultView) && subWindow.top !== subWindow) {
              if (subWindow.addEventListener) {
                subWindow.addEventListener("unload", unloadHandler, false);
              } else if (subWindow.attachEvent) {
                subWindow.attachEvent("onunload", unloadHandler);
              }
            }
            support2.scope = assert(function(el) {
              docElem.appendChild(el).appendChild(document3.createElement("div"));
              return typeof el.querySelectorAll !== "undefined" && !el.querySelectorAll(":scope fieldset div").length;
            });
            support2.attributes = assert(function(el) {
              el.className = "i";
              return !el.getAttribute("className");
            });
            support2.getElementsByTagName = assert(function(el) {
              el.appendChild(document3.createComment(""));
              return !el.getElementsByTagName("*").length;
            });
            support2.getElementsByClassName = rnative.test(document3.getElementsByClassName);
            support2.getById = assert(function(el) {
              docElem.appendChild(el).id = expando;
              return !document3.getElementsByName || !document3.getElementsByName(expando).length;
            });
            if (support2.getById) {
              Expr.filter["ID"] = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                  return elem.getAttribute("id") === attrId;
                };
              };
              Expr.find["ID"] = function(id, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                  var elem = context.getElementById(id);
                  return elem ? [elem] : [];
                }
              };
            } else {
              Expr.filter["ID"] = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                  var node2 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                  return node2 && node2.value === attrId;
                };
              };
              Expr.find["ID"] = function(id, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                  var node2, i2, elems, elem = context.getElementById(id);
                  if (elem) {
                    node2 = elem.getAttributeNode("id");
                    if (node2 && node2.value === id) {
                      return [elem];
                    }
                    elems = context.getElementsByName(id);
                    i2 = 0;
                    while (elem = elems[i2++]) {
                      node2 = elem.getAttributeNode("id");
                      if (node2 && node2.value === id) {
                        return [elem];
                      }
                    }
                  }
                  return [];
                }
              };
            }
            Expr.find["TAG"] = support2.getElementsByTagName ? function(tag, context) {
              if (typeof context.getElementsByTagName !== "undefined") {
                return context.getElementsByTagName(tag);
              } else if (support2.qsa) {
                return context.querySelectorAll(tag);
              }
            } : function(tag, context) {
              var elem, tmp = [], i2 = 0, results = context.getElementsByTagName(tag);
              if (tag === "*") {
                while (elem = results[i2++]) {
                  if (elem.nodeType === 1) {
                    tmp.push(elem);
                  }
                }
                return tmp;
              }
              return results;
            };
            Expr.find["CLASS"] = support2.getElementsByClassName && function(className, context) {
              if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                return context.getElementsByClassName(className);
              }
            };
            rbuggyMatches = [];
            rbuggyQSA = [];
            if (support2.qsa = rnative.test(document3.querySelectorAll)) {
              assert(function(el) {
                var input;
                docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\r\\' msallowcapture=''><option selected=''></option></select>";
                if (el.querySelectorAll("[msallowcapture^='']").length) {
                  rbuggyQSA.push("[*^$]=" + whitespace + `*(?:''|"")`);
                }
                if (!el.querySelectorAll("[selected]").length) {
                  rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                }
                if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                  rbuggyQSA.push("~=");
                }
                input = document3.createElement("input");
                input.setAttribute("name", "");
                el.appendChild(input);
                if (!el.querySelectorAll("[name='']").length) {
                  rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:''|"")`);
                }
                if (!el.querySelectorAll(":checked").length) {
                  rbuggyQSA.push(":checked");
                }
                if (!el.querySelectorAll("a#" + expando + "+*").length) {
                  rbuggyQSA.push(".#.+[+~]");
                }
                el.querySelectorAll("\\\f");
                rbuggyQSA.push("[\\r\\n\\f]");
              });
              assert(function(el) {
                el.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var input = document3.createElement("input");
                input.setAttribute("type", "hidden");
                el.appendChild(input).setAttribute("name", "D");
                if (el.querySelectorAll("[name=d]").length) {
                  rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                }
                if (el.querySelectorAll(":enabled").length !== 2) {
                  rbuggyQSA.push(":enabled", ":disabled");
                }
                docElem.appendChild(el).disabled = true;
                if (el.querySelectorAll(":disabled").length !== 2) {
                  rbuggyQSA.push(":enabled", ":disabled");
                }
                el.querySelectorAll("*,:x");
                rbuggyQSA.push(",.*:");
              });
            }
            if (support2.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
              assert(function(el) {
                support2.disconnectedMatch = matches.call(el, "*");
                matches.call(el, "[s!='']:x");
                rbuggyMatches.push("!=", pseudos);
              });
            }
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
            hasCompare = rnative.test(docElem.compareDocumentPosition);
            contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
              var adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode;
              return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
            } : function(a, b) {
              if (b) {
                while (b = b.parentNode) {
                  if (b === a) {
                    return true;
                  }
                }
              }
              return false;
            };
            sortOrder = hasCompare ? function(a, b) {
              if (a === b) {
                hasDuplicate = true;
                return 0;
              }
              var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
              if (compare) {
                return compare;
              }
              compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
              if (compare & 1 || !support2.sortDetached && b.compareDocumentPosition(a) === compare) {
                if (a == document3 || a.ownerDocument == preferredDoc && contains(preferredDoc, a)) {
                  return -1;
                }
                if (b == document3 || b.ownerDocument == preferredDoc && contains(preferredDoc, b)) {
                  return 1;
                }
                return sortInput ? indexOf2(sortInput, a) - indexOf2(sortInput, b) : 0;
              }
              return compare & 4 ? -1 : 1;
            } : function(a, b) {
              if (a === b) {
                hasDuplicate = true;
                return 0;
              }
              var cur, i2 = 0, aup = a.parentNode, bup = b.parentNode, ap = [a], bp = [b];
              if (!aup || !bup) {
                return a == document3 ? -1 : b == document3 ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf2(sortInput, a) - indexOf2(sortInput, b) : 0;
              } else if (aup === bup) {
                return siblingCheck(a, b);
              }
              cur = a;
              while (cur = cur.parentNode) {
                ap.unshift(cur);
              }
              cur = b;
              while (cur = cur.parentNode) {
                bp.unshift(cur);
              }
              while (ap[i2] === bp[i2]) {
                i2++;
              }
              return i2 ? siblingCheck(ap[i2], bp[i2]) : ap[i2] == preferredDoc ? -1 : bp[i2] == preferredDoc ? 1 : 0;
            };
            return document3;
          };
          Sizzle2.matches = function(expr, elements) {
            return Sizzle2(expr, null, null, elements);
          };
          Sizzle2.matchesSelector = function(elem, expr) {
            setDocument(elem);
            if (support2.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
              try {
                var ret = matches.call(elem, expr);
                if (ret || support2.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
                  return ret;
                }
              } catch (e) {
                nonnativeSelectorCache(expr, true);
              }
            }
            return Sizzle2(expr, document3, null, [elem]).length > 0;
          };
          Sizzle2.contains = function(context, elem) {
            if ((context.ownerDocument || context) != document3) {
              setDocument(context);
            }
            return contains(context, elem);
          };
          Sizzle2.attr = function(elem, name) {
            if ((elem.ownerDocument || elem) != document3) {
              setDocument(elem);
            }
            var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn2.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
            return val !== void 0 ? val : support2.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
          };
          Sizzle2.escape = function(sel) {
            return (sel + "").replace(rcssescape, fcssescape);
          };
          Sizzle2.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
          };
          Sizzle2.uniqueSort = function(results) {
            var elem, duplicates = [], j = 0, i2 = 0;
            hasDuplicate = !support2.detectDuplicates;
            sortInput = !support2.sortStable && results.slice(0);
            results.sort(sortOrder);
            if (hasDuplicate) {
              while (elem = results[i2++]) {
                if (elem === results[i2]) {
                  j = duplicates.push(i2);
                }
              }
              while (j--) {
                results.splice(duplicates[j], 1);
              }
            }
            sortInput = null;
            return results;
          };
          getText = Sizzle2.getText = function(elem) {
            var node, ret = "", i2 = 0, nodeType = elem.nodeType;
            if (!nodeType) {
              while (node = elem[i2++]) {
                ret += getText(node);
              }
            } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
              if (typeof elem.textContent === "string") {
                return elem.textContent;
              } else {
                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                  ret += getText(elem);
                }
              }
            } else if (nodeType === 3 || nodeType === 4) {
              return elem.nodeValue;
            }
            return ret;
          };
          Expr = Sizzle2.selectors = {
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: true },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: true },
              "~": { dir: "previousSibling" }
            },
            preFilter: {
              "ATTR": function(match) {
                match[1] = match[1].replace(runescape, funescape);
                match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                if (match[2] === "~=") {
                  match[3] = " " + match[3] + " ";
                }
                return match.slice(0, 4);
              },
              "CHILD": function(match) {
                match[1] = match[1].toLowerCase();
                if (match[1].slice(0, 3) === "nth") {
                  if (!match[3]) {
                    Sizzle2.error(match[0]);
                  }
                  match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                  match[5] = +(match[7] + match[8] || match[3] === "odd");
                } else if (match[3]) {
                  Sizzle2.error(match[0]);
                }
                return match;
              },
              "PSEUDO": function(match) {
                var excess, unquoted = !match[6] && match[2];
                if (matchExpr["CHILD"].test(match[0])) {
                  return null;
                }
                if (match[3]) {
                  match[2] = match[4] || match[5] || "";
                } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                  match[0] = match[0].slice(0, excess);
                  match[2] = unquoted.slice(0, excess);
                }
                return match.slice(0, 3);
              }
            },
            filter: {
              "TAG": function(nodeNameSelector) {
                var nodeName2 = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                return nodeNameSelector === "*" ? function() {
                  return true;
                } : function(elem) {
                  return elem.nodeName && elem.nodeName.toLowerCase() === nodeName2;
                };
              },
              "CLASS": function(className) {
                var pattern = classCache[className + " "];
                return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                  return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
                });
              },
              "ATTR": function(name, operator, check) {
                return function(elem) {
                  var result = Sizzle2.attr(elem, name);
                  if (result == null) {
                    return operator === "!=";
                  }
                  if (!operator) {
                    return true;
                  }
                  result += "";
                  return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
                };
              },
              "CHILD": function(type, what, _argument, first, last) {
                var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                return first === 1 && last === 0 ? function(elem) {
                  return !!elem.parentNode;
                } : function(elem, _context, xml) {
                  var cache, uniqueCache, outerCache, node, nodeIndex, start, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                  if (parent) {
                    if (simple) {
                      while (dir2) {
                        node = elem;
                        while (node = node[dir2]) {
                          if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                            return false;
                          }
                        }
                        start = dir2 = type === "only" && !start && "nextSibling";
                      }
                      return true;
                    }
                    start = [forward ? parent.firstChild : parent.lastChild];
                    if (forward && useCache) {
                      node = parent;
                      outerCache = node[expando] || (node[expando] = {});
                      uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                      cache = uniqueCache[type] || [];
                      nodeIndex = cache[0] === dirruns && cache[1];
                      diff = nodeIndex && cache[2];
                      node = nodeIndex && parent.childNodes[nodeIndex];
                      while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                        if (node.nodeType === 1 && ++diff && node === elem) {
                          uniqueCache[type] = [dirruns, nodeIndex, diff];
                          break;
                        }
                      }
                    } else {
                      if (useCache) {
                        node = elem;
                        outerCache = node[expando] || (node[expando] = {});
                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                        cache = uniqueCache[type] || [];
                        nodeIndex = cache[0] === dirruns && cache[1];
                        diff = nodeIndex;
                      }
                      if (diff === false) {
                        while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                          if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                            if (useCache) {
                              outerCache = node[expando] || (node[expando] = {});
                              uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                              uniqueCache[type] = [dirruns, diff];
                            }
                            if (node === elem) {
                              break;
                            }
                          }
                        }
                      }
                    }
                    diff -= last;
                    return diff === first || diff % first === 0 && diff / first >= 0;
                  }
                };
              },
              "PSEUDO": function(pseudo, argument) {
                var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle2.error("unsupported pseudo: " + pseudo);
                if (fn[expando]) {
                  return fn(argument);
                }
                if (fn.length > 1) {
                  args = [pseudo, pseudo, "", argument];
                  return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
                    var idx, matched = fn(seed, argument), i2 = matched.length;
                    while (i2--) {
                      idx = indexOf2(seed, matched[i2]);
                      seed[idx] = !(matches2[idx] = matched[i2]);
                    }
                  }) : function(elem) {
                    return fn(elem, 0, args);
                  };
                }
                return fn;
              }
            },
            pseudos: {
              "not": markFunction(function(selector) {
                var input = [], results = [], matcher = compile(selector.replace(rtrim2, "$1"));
                return matcher[expando] ? markFunction(function(seed, matches2, _context, xml) {
                  var elem, unmatched = matcher(seed, null, xml, []), i2 = seed.length;
                  while (i2--) {
                    if (elem = unmatched[i2]) {
                      seed[i2] = !(matches2[i2] = elem);
                    }
                  }
                }) : function(elem, _context, xml) {
                  input[0] = elem;
                  matcher(input, null, xml, results);
                  input[0] = null;
                  return !results.pop();
                };
              }),
              "has": markFunction(function(selector) {
                return function(elem) {
                  return Sizzle2(selector, elem).length > 0;
                };
              }),
              "contains": markFunction(function(text) {
                text = text.replace(runescape, funescape);
                return function(elem) {
                  return (elem.textContent || getText(elem)).indexOf(text) > -1;
                };
              }),
              "lang": markFunction(function(lang) {
                if (!ridentifier.test(lang || "")) {
                  Sizzle2.error("unsupported lang: " + lang);
                }
                lang = lang.replace(runescape, funescape).toLowerCase();
                return function(elem) {
                  var elemLang;
                  do {
                    if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                      elemLang = elemLang.toLowerCase();
                      return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                    }
                  } while ((elem = elem.parentNode) && elem.nodeType === 1);
                  return false;
                };
              }),
              "target": function(elem) {
                var hash = window3.location && window3.location.hash;
                return hash && hash.slice(1) === elem.id;
              },
              "root": function(elem) {
                return elem === docElem;
              },
              "focus": function(elem) {
                return elem === document3.activeElement && (!document3.hasFocus || document3.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
              },
              "enabled": createDisabledPseudo(false),
              "disabled": createDisabledPseudo(true),
              "checked": function(elem) {
                var nodeName2 = elem.nodeName.toLowerCase();
                return nodeName2 === "input" && !!elem.checked || nodeName2 === "option" && !!elem.selected;
              },
              "selected": function(elem) {
                if (elem.parentNode) {
                  elem.parentNode.selectedIndex;
                }
                return elem.selected === true;
              },
              "empty": function(elem) {
                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                  if (elem.nodeType < 6) {
                    return false;
                  }
                }
                return true;
              },
              "parent": function(elem) {
                return !Expr.pseudos["empty"](elem);
              },
              "header": function(elem) {
                return rheader.test(elem.nodeName);
              },
              "input": function(elem) {
                return rinputs.test(elem.nodeName);
              },
              "button": function(elem) {
                var name = elem.nodeName.toLowerCase();
                return name === "input" && elem.type === "button" || name === "button";
              },
              "text": function(elem) {
                var attr;
                return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
              },
              "first": createPositionalPseudo(function() {
                return [0];
              }),
              "last": createPositionalPseudo(function(_matchIndexes, length) {
                return [length - 1];
              }),
              "eq": createPositionalPseudo(function(_matchIndexes, length, argument) {
                return [argument < 0 ? argument + length : argument];
              }),
              "even": createPositionalPseudo(function(matchIndexes, length) {
                var i2 = 0;
                for (; i2 < length; i2 += 2) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              }),
              "odd": createPositionalPseudo(function(matchIndexes, length) {
                var i2 = 1;
                for (; i2 < length; i2 += 2) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              }),
              "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
                var i2 = argument < 0 ? argument + length : argument > length ? length : argument;
                for (; --i2 >= 0; ) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              }),
              "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
                var i2 = argument < 0 ? argument + length : argument;
                for (; ++i2 < length; ) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              })
            }
          };
          Expr.pseudos["nth"] = Expr.pseudos["eq"];
          for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
            Expr.pseudos[i] = createInputPseudo(i);
          }
          for (i in { submit: true, reset: true }) {
            Expr.pseudos[i] = createButtonPseudo(i);
          }
          function setFilters() {
          }
          setFilters.prototype = Expr.filters = Expr.pseudos;
          Expr.setFilters = new setFilters();
          tokenize = Sizzle2.tokenize = function(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) {
              return parseOnly ? 0 : cached.slice(0);
            }
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while (soFar) {
              if (!matched || (match = rcomma.exec(soFar))) {
                if (match) {
                  soFar = soFar.slice(match[0].length) || soFar;
                }
                groups.push(tokens = []);
              }
              matched = false;
              if (match = rcombinators.exec(soFar)) {
                matched = match.shift();
                tokens.push({
                  value: matched,
                  type: match[0].replace(rtrim2, " ")
                });
                soFar = soFar.slice(matched.length);
              }
              for (type in Expr.filter) {
                if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                  matched = match.shift();
                  tokens.push({
                    value: matched,
                    type,
                    matches: match
                  });
                  soFar = soFar.slice(matched.length);
                }
              }
              if (!matched) {
                break;
              }
            }
            return parseOnly ? soFar.length : soFar ? Sizzle2.error(selector) : tokenCache(selector, groups).slice(0);
          };
          function toSelector(tokens) {
            var i2 = 0, len = tokens.length, selector = "";
            for (; i2 < len; i2++) {
              selector += tokens[i2].value;
            }
            return selector;
          }
          function addCombinator(matcher, combinator, base) {
            var dir2 = combinator.dir, skip = combinator.next, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;
            return combinator.first ? function(elem, context, xml) {
              while (elem = elem[dir2]) {
                if (elem.nodeType === 1 || checkNonElements) {
                  return matcher(elem, context, xml);
                }
              }
              return false;
            } : function(elem, context, xml) {
              var oldCache, uniqueCache, outerCache, newCache = [dirruns, doneName];
              if (xml) {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    if (matcher(elem, context, xml)) {
                      return true;
                    }
                  }
                }
              } else {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    outerCache = elem[expando] || (elem[expando] = {});
                    uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                    if (skip && skip === elem.nodeName.toLowerCase()) {
                      elem = elem[dir2] || elem;
                    } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                      return newCache[2] = oldCache[2];
                    } else {
                      uniqueCache[key] = newCache;
                      if (newCache[2] = matcher(elem, context, xml)) {
                        return true;
                      }
                    }
                  }
                }
              }
              return false;
            };
          }
          function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
              var i2 = matchers.length;
              while (i2--) {
                if (!matchers[i2](elem, context, xml)) {
                  return false;
                }
              }
              return true;
            } : matchers[0];
          }
          function multipleContexts(selector, contexts, results) {
            var i2 = 0, len = contexts.length;
            for (; i2 < len; i2++) {
              Sizzle2(selector, contexts[i2], results);
            }
            return results;
          }
          function condense(unmatched, map, filter, context, xml) {
            var elem, newUnmatched = [], i2 = 0, len = unmatched.length, mapped = map != null;
            for (; i2 < len; i2++) {
              if (elem = unmatched[i2]) {
                if (!filter || filter(elem, context, xml)) {
                  newUnmatched.push(elem);
                  if (mapped) {
                    map.push(i2);
                  }
                }
              }
            }
            return newUnmatched;
          }
          function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) {
              postFilter = setMatcher(postFilter);
            }
            if (postFinder && !postFinder[expando]) {
              postFinder = setMatcher(postFinder, postSelector);
            }
            return markFunction(function(seed, results, context, xml) {
              var temp, i2, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
              if (matcher) {
                matcher(matcherIn, matcherOut, context, xml);
              }
              if (postFilter) {
                temp = condense(matcherOut, postMap);
                postFilter(temp, [], context, xml);
                i2 = temp.length;
                while (i2--) {
                  if (elem = temp[i2]) {
                    matcherOut[postMap[i2]] = !(matcherIn[postMap[i2]] = elem);
                  }
                }
              }
              if (seed) {
                if (postFinder || preFilter) {
                  if (postFinder) {
                    temp = [];
                    i2 = matcherOut.length;
                    while (i2--) {
                      if (elem = matcherOut[i2]) {
                        temp.push(matcherIn[i2] = elem);
                      }
                    }
                    postFinder(null, matcherOut = [], temp, xml);
                  }
                  i2 = matcherOut.length;
                  while (i2--) {
                    if ((elem = matcherOut[i2]) && (temp = postFinder ? indexOf2(seed, elem) : preMap[i2]) > -1) {
                      seed[temp] = !(results[temp] = elem);
                    }
                  }
                }
              } else {
                matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                if (postFinder) {
                  postFinder(null, results, matcherOut, xml);
                } else {
                  push2.apply(results, matcherOut);
                }
              }
            });
          }
          function matcherFromTokens(tokens) {
            var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i2 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
              return elem === checkContext;
            }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
              return indexOf2(checkContext, elem) > -1;
            }, implicitRelative, true), matchers = [function(elem, context, xml) {
              var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
              checkContext = null;
              return ret;
            }];
            for (; i2 < len; i2++) {
              if (matcher = Expr.relative[tokens[i2].type]) {
                matchers = [addCombinator(elementMatcher(matchers), matcher)];
              } else {
                matcher = Expr.filter[tokens[i2].type].apply(null, tokens[i2].matches);
                if (matcher[expando]) {
                  j = ++i2;
                  for (; j < len; j++) {
                    if (Expr.relative[tokens[j].type]) {
                      break;
                    }
                  }
                  return setMatcher(i2 > 1 && elementMatcher(matchers), i2 > 1 && toSelector(tokens.slice(0, i2 - 1).concat({ value: tokens[i2 - 2].type === " " ? "*" : "" })).replace(rtrim2, "$1"), matcher, i2 < j && matcherFromTokens(tokens.slice(i2, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
                }
                matchers.push(matcher);
              }
            }
            return elementMatcher(matchers);
          }
          function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
              var elem, j, matcher, matchedCount = 0, i2 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find["TAG"]("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
              if (outermost) {
                outermostContext = context == document3 || context || outermost;
              }
              for (; i2 !== len && (elem = elems[i2]) != null; i2++) {
                if (byElement && elem) {
                  j = 0;
                  if (!context && elem.ownerDocument != document3) {
                    setDocument(elem);
                    xml = !documentIsHTML;
                  }
                  while (matcher = elementMatchers[j++]) {
                    if (matcher(elem, context || document3, xml)) {
                      results.push(elem);
                      break;
                    }
                  }
                  if (outermost) {
                    dirruns = dirrunsUnique;
                  }
                }
                if (bySet) {
                  if (elem = !matcher && elem) {
                    matchedCount--;
                  }
                  if (seed) {
                    unmatched.push(elem);
                  }
                }
              }
              matchedCount += i2;
              if (bySet && i2 !== matchedCount) {
                j = 0;
                while (matcher = setMatchers[j++]) {
                  matcher(unmatched, setMatched, context, xml);
                }
                if (seed) {
                  if (matchedCount > 0) {
                    while (i2--) {
                      if (!(unmatched[i2] || setMatched[i2])) {
                        setMatched[i2] = pop.call(results);
                      }
                    }
                  }
                  setMatched = condense(setMatched);
                }
                push2.apply(results, setMatched);
                if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                  Sizzle2.uniqueSort(results);
                }
              }
              if (outermost) {
                dirruns = dirrunsUnique;
                outermostContext = contextBackup;
              }
              return unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
          }
          compile = Sizzle2.compile = function(selector, match) {
            var i2, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
            if (!cached) {
              if (!match) {
                match = tokenize(selector);
              }
              i2 = match.length;
              while (i2--) {
                cached = matcherFromTokens(match[i2]);
                if (cached[expando]) {
                  setMatchers.push(cached);
                } else {
                  elementMatchers.push(cached);
                }
              }
              cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
              cached.selector = selector;
            }
            return cached;
          };
          select = Sizzle2.select = function(selector, context, results, seed) {
            var i2, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
            results = results || [];
            if (match.length === 1) {
              tokens = match[0] = match[0].slice(0);
              if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                if (!context) {
                  return results;
                } else if (compiled) {
                  context = context.parentNode;
                }
                selector = selector.slice(tokens.shift().value.length);
              }
              i2 = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
              while (i2--) {
                token = tokens[i2];
                if (Expr.relative[type = token.type]) {
                  break;
                }
                if (find = Expr.find[type]) {
                  if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                    tokens.splice(i2, 1);
                    selector = seed.length && toSelector(tokens);
                    if (!selector) {
                      push2.apply(results, seed);
                      return results;
                    }
                    break;
                  }
                }
              }
            }
            (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
            return results;
          };
          support2.sortStable = expando.split("").sort(sortOrder).join("") === expando;
          support2.detectDuplicates = !!hasDuplicate;
          setDocument();
          support2.sortDetached = assert(function(el) {
            return el.compareDocumentPosition(document3.createElement("fieldset")) & 1;
          });
          if (!assert(function(el) {
            el.innerHTML = "<a href='#'></a>";
            return el.firstChild.getAttribute("href") === "#";
          })) {
            addHandle("type|href|height|width", function(elem, name, isXML2) {
              if (!isXML2) {
                return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
              }
            });
          }
          if (!support2.attributes || !assert(function(el) {
            el.innerHTML = "<input/>";
            el.firstChild.setAttribute("value", "");
            return el.firstChild.getAttribute("value") === "";
          })) {
            addHandle("value", function(elem, _name, isXML2) {
              if (!isXML2 && elem.nodeName.toLowerCase() === "input") {
                return elem.defaultValue;
              }
            });
          }
          if (!assert(function(el) {
            return el.getAttribute("disabled") == null;
          })) {
            addHandle(booleans, function(elem, name, isXML2) {
              var val;
              if (!isXML2) {
                return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
              }
            });
          }
          return Sizzle2;
        }(window2);
        jQuery.find = Sizzle;
        jQuery.expr = Sizzle.selectors;
        jQuery.expr[":"] = jQuery.expr.pseudos;
        jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
        jQuery.text = Sizzle.getText;
        jQuery.isXMLDoc = Sizzle.isXML;
        jQuery.contains = Sizzle.contains;
        jQuery.escapeSelector = Sizzle.escape;
        var dir = function(elem, dir2, until) {
          var matched = [], truncate = until !== void 0;
          while ((elem = elem[dir2]) && elem.nodeType !== 9) {
            if (elem.nodeType === 1) {
              if (truncate && jQuery(elem).is(until)) {
                break;
              }
              matched.push(elem);
            }
          }
          return matched;
        };
        var siblings = function(n, elem) {
          var matched = [];
          for (; n; n = n.nextSibling) {
            if (n.nodeType === 1 && n !== elem) {
              matched.push(n);
            }
          }
          return matched;
        };
        var rneedsContext = jQuery.expr.match.needsContext;
        function nodeName(elem, name) {
          return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        }
        var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function winnow(elements, qualifier, not) {
          if (isFunction(qualifier)) {
            return jQuery.grep(elements, function(elem, i) {
              return !!qualifier.call(elem, i, elem) !== not;
            });
          }
          if (qualifier.nodeType) {
            return jQuery.grep(elements, function(elem) {
              return elem === qualifier !== not;
            });
          }
          if (typeof qualifier !== "string") {
            return jQuery.grep(elements, function(elem) {
              return indexOf.call(qualifier, elem) > -1 !== not;
            });
          }
          return jQuery.filter(qualifier, elements, not);
        }
        jQuery.filter = function(expr, elems, not) {
          var elem = elems[0];
          if (not) {
            expr = ":not(" + expr + ")";
          }
          if (elems.length === 1 && elem.nodeType === 1) {
            return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
          }
          return jQuery.find.matches(expr, jQuery.grep(elems, function(elem2) {
            return elem2.nodeType === 1;
          }));
        };
        jQuery.fn.extend({
          find: function(selector) {
            var i, ret, len = this.length, self2 = this;
            if (typeof selector !== "string") {
              return this.pushStack(jQuery(selector).filter(function() {
                for (i = 0; i < len; i++) {
                  if (jQuery.contains(self2[i], this)) {
                    return true;
                  }
                }
              }));
            }
            ret = this.pushStack([]);
            for (i = 0; i < len; i++) {
              jQuery.find(selector, self2[i], ret);
            }
            return len > 1 ? jQuery.uniqueSort(ret) : ret;
          },
          filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], false));
          },
          not: function(selector) {
            return this.pushStack(winnow(this, selector || [], true));
          },
          is: function(selector) {
            return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
          }
        });
        var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery.fn.init = function(selector, context, root) {
          var match, elem;
          if (!selector) {
            return this;
          }
          root = root || rootjQuery;
          if (typeof selector === "string") {
            if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
              match = [null, selector, null];
            } else {
              match = rquickExpr.exec(selector);
            }
            if (match && (match[1] || !context)) {
              if (match[1]) {
                context = context instanceof jQuery ? context[0] : context;
                jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document2, true));
                if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                  for (match in context) {
                    if (isFunction(this[match])) {
                      this[match](context[match]);
                    } else {
                      this.attr(match, context[match]);
                    }
                  }
                }
                return this;
              } else {
                elem = document2.getElementById(match[2]);
                if (elem) {
                  this[0] = elem;
                  this.length = 1;
                }
                return this;
              }
            } else if (!context || context.jquery) {
              return (context || root).find(selector);
            } else {
              return this.constructor(context).find(selector);
            }
          } else if (selector.nodeType) {
            this[0] = selector;
            this.length = 1;
            return this;
          } else if (isFunction(selector)) {
            return root.ready !== void 0 ? root.ready(selector) : selector(jQuery);
          }
          return jQuery.makeArray(selector, this);
        };
        init.prototype = jQuery.fn;
        rootjQuery = jQuery(document2);
        var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
          children: true,
          contents: true,
          next: true,
          prev: true
        };
        jQuery.fn.extend({
          has: function(target) {
            var targets = jQuery(target, this), l = targets.length;
            return this.filter(function() {
              var i = 0;
              for (; i < l; i++) {
                if (jQuery.contains(this, targets[i])) {
                  return true;
                }
              }
            });
          },
          closest: function(selectors, context) {
            var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery(selectors);
            if (!rneedsContext.test(selectors)) {
              for (; i < l; i++) {
                for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                  if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                    matched.push(cur);
                    break;
                  }
                }
              }
            }
            return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
          },
          index: function(elem) {
            if (!elem) {
              return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }
            if (typeof elem === "string") {
              return indexOf.call(jQuery(elem), this[0]);
            }
            return indexOf.call(this, elem.jquery ? elem[0] : elem);
          },
          add: function(selector, context) {
            return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
          },
          addBack: function(selector) {
            return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
          }
        });
        function sibling(cur, dir2) {
          while ((cur = cur[dir2]) && cur.nodeType !== 1) {
          }
          return cur;
        }
        jQuery.each({
          parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
          },
          parents: function(elem) {
            return dir(elem, "parentNode");
          },
          parentsUntil: function(elem, _i, until) {
            return dir(elem, "parentNode", until);
          },
          next: function(elem) {
            return sibling(elem, "nextSibling");
          },
          prev: function(elem) {
            return sibling(elem, "previousSibling");
          },
          nextAll: function(elem) {
            return dir(elem, "nextSibling");
          },
          prevAll: function(elem) {
            return dir(elem, "previousSibling");
          },
          nextUntil: function(elem, _i, until) {
            return dir(elem, "nextSibling", until);
          },
          prevUntil: function(elem, _i, until) {
            return dir(elem, "previousSibling", until);
          },
          siblings: function(elem) {
            return siblings((elem.parentNode || {}).firstChild, elem);
          },
          children: function(elem) {
            return siblings(elem.firstChild);
          },
          contents: function(elem) {
            if (elem.contentDocument != null && getProto(elem.contentDocument)) {
              return elem.contentDocument;
            }
            if (nodeName(elem, "template")) {
              elem = elem.content || elem;
            }
            return jQuery.merge([], elem.childNodes);
          }
        }, function(name, fn) {
          jQuery.fn[name] = function(until, selector) {
            var matched = jQuery.map(this, fn, until);
            if (name.slice(-5) !== "Until") {
              selector = until;
            }
            if (selector && typeof selector === "string") {
              matched = jQuery.filter(selector, matched);
            }
            if (this.length > 1) {
              if (!guaranteedUnique[name]) {
                jQuery.uniqueSort(matched);
              }
              if (rparentsprev.test(name)) {
                matched.reverse();
              }
            }
            return this.pushStack(matched);
          };
        });
        var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
        function createOptions(options) {
          var object = {};
          jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
            object[flag] = true;
          });
          return object;
        }
        jQuery.Callbacks = function(options) {
          options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
          var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
            locked = locked || options.once;
            fired = firing = true;
            for (; queue.length; firingIndex = -1) {
              memory = queue.shift();
              while (++firingIndex < list.length) {
                if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                  firingIndex = list.length;
                  memory = false;
                }
              }
            }
            if (!options.memory) {
              memory = false;
            }
            firing = false;
            if (locked) {
              if (memory) {
                list = [];
              } else {
                list = "";
              }
            }
          }, self2 = {
            add: function() {
              if (list) {
                if (memory && !firing) {
                  firingIndex = list.length - 1;
                  queue.push(memory);
                }
                (function add(args) {
                  jQuery.each(args, function(_, arg) {
                    if (isFunction(arg)) {
                      if (!options.unique || !self2.has(arg)) {
                        list.push(arg);
                      }
                    } else if (arg && arg.length && toType(arg) !== "string") {
                      add(arg);
                    }
                  });
                })(arguments);
                if (memory && !firing) {
                  fire();
                }
              }
              return this;
            },
            remove: function() {
              jQuery.each(arguments, function(_, arg) {
                var index;
                while ((index = jQuery.inArray(arg, list, index)) > -1) {
                  list.splice(index, 1);
                  if (index <= firingIndex) {
                    firingIndex--;
                  }
                }
              });
              return this;
            },
            has: function(fn) {
              return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
            },
            empty: function() {
              if (list) {
                list = [];
              }
              return this;
            },
            disable: function() {
              locked = queue = [];
              list = memory = "";
              return this;
            },
            disabled: function() {
              return !list;
            },
            lock: function() {
              locked = queue = [];
              if (!memory && !firing) {
                list = memory = "";
              }
              return this;
            },
            locked: function() {
              return !!locked;
            },
            fireWith: function(context, args) {
              if (!locked) {
                args = args || [];
                args = [context, args.slice ? args.slice() : args];
                queue.push(args);
                if (!firing) {
                  fire();
                }
              }
              return this;
            },
            fire: function() {
              self2.fireWith(this, arguments);
              return this;
            },
            fired: function() {
              return !!fired;
            }
          };
          return self2;
        };
        function Identity(v) {
          return v;
        }
        function Thrower(ex) {
          throw ex;
        }
        function adoptValue(value, resolve, reject, noValue) {
          var method;
          try {
            if (value && isFunction(method = value.promise)) {
              method.call(value).done(resolve).fail(reject);
            } else if (value && isFunction(method = value.then)) {
              method.call(value, resolve, reject);
            } else {
              resolve.apply(void 0, [value].slice(noValue));
            }
          } catch (value2) {
            reject.apply(void 0, [value2]);
          }
        }
        jQuery.extend({
          Deferred: function(func) {
            var tuples = [
              [
                "notify",
                "progress",
                jQuery.Callbacks("memory"),
                jQuery.Callbacks("memory"),
                2
              ],
              [
                "resolve",
                "done",
                jQuery.Callbacks("once memory"),
                jQuery.Callbacks("once memory"),
                0,
                "resolved"
              ],
              [
                "reject",
                "fail",
                jQuery.Callbacks("once memory"),
                jQuery.Callbacks("once memory"),
                1,
                "rejected"
              ]
            ], state = "pending", promise = {
              state: function() {
                return state;
              },
              always: function() {
                deferred.done(arguments).fail(arguments);
                return this;
              },
              "catch": function(fn) {
                return promise.then(null, fn);
              },
              pipe: function() {
                var fns = arguments;
                return jQuery.Deferred(function(newDefer) {
                  jQuery.each(tuples, function(_i, tuple) {
                    var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                    deferred[tuple[1]](function() {
                      var returned = fn && fn.apply(this, arguments);
                      if (returned && isFunction(returned.promise)) {
                        returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                      } else {
                        newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                      }
                    });
                  });
                  fns = null;
                }).promise();
              },
              then: function(onFulfilled, onRejected, onProgress) {
                var maxDepth = 0;
                function resolve(depth, deferred2, handler, special) {
                  return function() {
                    var that = this, args = arguments, mightThrow = function() {
                      var returned, then;
                      if (depth < maxDepth) {
                        return;
                      }
                      returned = handler.apply(that, args);
                      if (returned === deferred2.promise()) {
                        throw new TypeError("Thenable self-resolution");
                      }
                      then = returned && (typeof returned === "object" || typeof returned === "function") && returned.then;
                      if (isFunction(then)) {
                        if (special) {
                          then.call(returned, resolve(maxDepth, deferred2, Identity, special), resolve(maxDepth, deferred2, Thrower, special));
                        } else {
                          maxDepth++;
                          then.call(returned, resolve(maxDepth, deferred2, Identity, special), resolve(maxDepth, deferred2, Thrower, special), resolve(maxDepth, deferred2, Identity, deferred2.notifyWith));
                        }
                      } else {
                        if (handler !== Identity) {
                          that = void 0;
                          args = [returned];
                        }
                        (special || deferred2.resolveWith)(that, args);
                      }
                    }, process = special ? mightThrow : function() {
                      try {
                        mightThrow();
                      } catch (e) {
                        if (jQuery.Deferred.exceptionHook) {
                          jQuery.Deferred.exceptionHook(e, process.stackTrace);
                        }
                        if (depth + 1 >= maxDepth) {
                          if (handler !== Thrower) {
                            that = void 0;
                            args = [e];
                          }
                          deferred2.rejectWith(that, args);
                        }
                      }
                    };
                    if (depth) {
                      process();
                    } else {
                      if (jQuery.Deferred.getStackHook) {
                        process.stackTrace = jQuery.Deferred.getStackHook();
                      }
                      window2.setTimeout(process);
                    }
                  };
                }
                return jQuery.Deferred(function(newDefer) {
                  tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));
                  tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity));
                  tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
                }).promise();
              },
              promise: function(obj) {
                return obj != null ? jQuery.extend(obj, promise) : promise;
              }
            }, deferred = {};
            jQuery.each(tuples, function(i, tuple) {
              var list = tuple[2], stateString = tuple[5];
              promise[tuple[1]] = list.add;
              if (stateString) {
                list.add(function() {
                  state = stateString;
                }, tuples[3 - i][2].disable, tuples[3 - i][3].disable, tuples[0][2].lock, tuples[0][3].lock);
              }
              list.add(tuple[3].fire);
              deferred[tuple[0]] = function() {
                deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
                return this;
              };
              deferred[tuple[0] + "With"] = list.fireWith;
            });
            promise.promise(deferred);
            if (func) {
              func.call(deferred, deferred);
            }
            return deferred;
          },
          when: function(singleValue) {
            var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), primary = jQuery.Deferred(), updateFunc = function(i2) {
              return function(value) {
                resolveContexts[i2] = this;
                resolveValues[i2] = arguments.length > 1 ? slice.call(arguments) : value;
                if (!--remaining) {
                  primary.resolveWith(resolveContexts, resolveValues);
                }
              };
            };
            if (remaining <= 1) {
              adoptValue(singleValue, primary.done(updateFunc(i)).resolve, primary.reject, !remaining);
              if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
                return primary.then();
              }
            }
            while (i--) {
              adoptValue(resolveValues[i], updateFunc(i), primary.reject);
            }
            return primary.promise();
          }
        });
        var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        jQuery.Deferred.exceptionHook = function(error, stack) {
          if (window2.console && window2.console.warn && error && rerrorNames.test(error.name)) {
            window2.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
          }
        };
        jQuery.readyException = function(error) {
          window2.setTimeout(function() {
            throw error;
          });
        };
        var readyList = jQuery.Deferred();
        jQuery.fn.ready = function(fn) {
          readyList.then(fn).catch(function(error) {
            jQuery.readyException(error);
          });
          return this;
        };
        jQuery.extend({
          isReady: false,
          readyWait: 1,
          ready: function(wait) {
            if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
              return;
            }
            jQuery.isReady = true;
            if (wait !== true && --jQuery.readyWait > 0) {
              return;
            }
            readyList.resolveWith(document2, [jQuery]);
          }
        });
        jQuery.ready.then = readyList.then;
        function completed() {
          document2.removeEventListener("DOMContentLoaded", completed);
          window2.removeEventListener("load", completed);
          jQuery.ready();
        }
        if (document2.readyState === "complete" || document2.readyState !== "loading" && !document2.documentElement.doScroll) {
          window2.setTimeout(jQuery.ready);
        } else {
          document2.addEventListener("DOMContentLoaded", completed);
          window2.addEventListener("load", completed);
        }
        var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
          var i = 0, len = elems.length, bulk = key == null;
          if (toType(key) === "object") {
            chainable = true;
            for (i in key) {
              access(elems, fn, i, key[i], true, emptyGet, raw);
            }
          } else if (value !== void 0) {
            chainable = true;
            if (!isFunction(value)) {
              raw = true;
            }
            if (bulk) {
              if (raw) {
                fn.call(elems, value);
                fn = null;
              } else {
                bulk = fn;
                fn = function(elem, _key, value2) {
                  return bulk.call(jQuery(elem), value2);
                };
              }
            }
            if (fn) {
              for (; i < len; i++) {
                fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
              }
            }
          }
          if (chainable) {
            return elems;
          }
          if (bulk) {
            return fn.call(elems);
          }
          return len ? fn(elems[0], key) : emptyGet;
        };
        var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
        function fcamelCase(_all, letter) {
          return letter.toUpperCase();
        }
        function camelCase(string) {
          return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        }
        var acceptData = function(owner) {
          return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
        };
        function Data() {
          this.expando = jQuery.expando + Data.uid++;
        }
        Data.uid = 1;
        Data.prototype = {
          cache: function(owner) {
            var value = owner[this.expando];
            if (!value) {
              value = {};
              if (acceptData(owner)) {
                if (owner.nodeType) {
                  owner[this.expando] = value;
                } else {
                  Object.defineProperty(owner, this.expando, {
                    value,
                    configurable: true
                  });
                }
              }
            }
            return value;
          },
          set: function(owner, data, value) {
            var prop, cache = this.cache(owner);
            if (typeof data === "string") {
              cache[camelCase(data)] = value;
            } else {
              for (prop in data) {
                cache[camelCase(prop)] = data[prop];
              }
            }
            return cache;
          },
          get: function(owner, key) {
            return key === void 0 ? this.cache(owner) : owner[this.expando] && owner[this.expando][camelCase(key)];
          },
          access: function(owner, key, value) {
            if (key === void 0 || key && typeof key === "string" && value === void 0) {
              return this.get(owner, key);
            }
            this.set(owner, key, value);
            return value !== void 0 ? value : key;
          },
          remove: function(owner, key) {
            var i, cache = owner[this.expando];
            if (cache === void 0) {
              return;
            }
            if (key !== void 0) {
              if (Array.isArray(key)) {
                key = key.map(camelCase);
              } else {
                key = camelCase(key);
                key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
              }
              i = key.length;
              while (i--) {
                delete cache[key[i]];
              }
            }
            if (key === void 0 || jQuery.isEmptyObject(cache)) {
              if (owner.nodeType) {
                owner[this.expando] = void 0;
              } else {
                delete owner[this.expando];
              }
            }
          },
          hasData: function(owner) {
            var cache = owner[this.expando];
            return cache !== void 0 && !jQuery.isEmptyObject(cache);
          }
        };
        var dataPriv = new Data();
        var dataUser = new Data();
        var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
        function getData(data) {
          if (data === "true") {
            return true;
          }
          if (data === "false") {
            return false;
          }
          if (data === "null") {
            return null;
          }
          if (data === +data + "") {
            return +data;
          }
          if (rbrace.test(data)) {
            return JSON.parse(data);
          }
          return data;
        }
        function dataAttr(elem, key, data) {
          var name;
          if (data === void 0 && elem.nodeType === 1) {
            name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
              try {
                data = getData(data);
              } catch (e) {
              }
              dataUser.set(elem, key, data);
            } else {
              data = void 0;
            }
          }
          return data;
        }
        jQuery.extend({
          hasData: function(elem) {
            return dataUser.hasData(elem) || dataPriv.hasData(elem);
          },
          data: function(elem, name, data) {
            return dataUser.access(elem, name, data);
          },
          removeData: function(elem, name) {
            dataUser.remove(elem, name);
          },
          _data: function(elem, name, data) {
            return dataPriv.access(elem, name, data);
          },
          _removeData: function(elem, name) {
            dataPriv.remove(elem, name);
          }
        });
        jQuery.fn.extend({
          data: function(key, value) {
            var i, name, data, elem = this[0], attrs = elem && elem.attributes;
            if (key === void 0) {
              if (this.length) {
                data = dataUser.get(elem);
                if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                  i = attrs.length;
                  while (i--) {
                    if (attrs[i]) {
                      name = attrs[i].name;
                      if (name.indexOf("data-") === 0) {
                        name = camelCase(name.slice(5));
                        dataAttr(elem, name, data[name]);
                      }
                    }
                  }
                  dataPriv.set(elem, "hasDataAttrs", true);
                }
              }
              return data;
            }
            if (typeof key === "object") {
              return this.each(function() {
                dataUser.set(this, key);
              });
            }
            return access(this, function(value2) {
              var data2;
              if (elem && value2 === void 0) {
                data2 = dataUser.get(elem, key);
                if (data2 !== void 0) {
                  return data2;
                }
                data2 = dataAttr(elem, key);
                if (data2 !== void 0) {
                  return data2;
                }
                return;
              }
              this.each(function() {
                dataUser.set(this, key, value2);
              });
            }, null, value, arguments.length > 1, null, true);
          },
          removeData: function(key) {
            return this.each(function() {
              dataUser.remove(this, key);
            });
          }
        });
        jQuery.extend({
          queue: function(elem, type, data) {
            var queue;
            if (elem) {
              type = (type || "fx") + "queue";
              queue = dataPriv.get(elem, type);
              if (data) {
                if (!queue || Array.isArray(data)) {
                  queue = dataPriv.access(elem, type, jQuery.makeArray(data));
                } else {
                  queue.push(data);
                }
              }
              return queue || [];
            }
          },
          dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
              jQuery.dequeue(elem, type);
            };
            if (fn === "inprogress") {
              fn = queue.shift();
              startLength--;
            }
            if (fn) {
              if (type === "fx") {
                queue.unshift("inprogress");
              }
              delete hooks.stop;
              fn.call(elem, next, hooks);
            }
            if (!startLength && hooks) {
              hooks.empty.fire();
            }
          },
          _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
              empty: jQuery.Callbacks("once memory").add(function() {
                dataPriv.remove(elem, [type + "queue", key]);
              })
            });
          }
        });
        jQuery.fn.extend({
          queue: function(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
              data = type;
              type = "fx";
              setter--;
            }
            if (arguments.length < setter) {
              return jQuery.queue(this[0], type);
            }
            return data === void 0 ? this : this.each(function() {
              var queue = jQuery.queue(this, type, data);
              jQuery._queueHooks(this, type);
              if (type === "fx" && queue[0] !== "inprogress") {
                jQuery.dequeue(this, type);
              }
            });
          },
          dequeue: function(type) {
            return this.each(function() {
              jQuery.dequeue(this, type);
            });
          },
          clearQueue: function(type) {
            return this.queue(type || "fx", []);
          },
          promise: function(type, obj) {
            var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
              if (!--count) {
                defer.resolveWith(elements, [elements]);
              }
            };
            if (typeof type !== "string") {
              obj = type;
              type = void 0;
            }
            type = type || "fx";
            while (i--) {
              tmp = dataPriv.get(elements[i], type + "queueHooks");
              if (tmp && tmp.empty) {
                count++;
                tmp.empty.add(resolve);
              }
            }
            resolve();
            return defer.promise(obj);
          }
        });
        var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
        var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
        var cssExpand = ["Top", "Right", "Bottom", "Left"];
        var documentElement = document2.documentElement;
        var isAttached = function(elem) {
          return jQuery.contains(elem.ownerDocument, elem);
        }, composed = { composed: true };
        if (documentElement.getRootNode) {
          isAttached = function(elem) {
            return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
          };
        }
        var isHiddenWithinTree = function(elem, el) {
          elem = el || elem;
          return elem.style.display === "none" || elem.style.display === "" && isAttached(elem) && jQuery.css(elem, "display") === "none";
        };
        function adjustCSS(elem, prop, valueParts, tween) {
          var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
            return tween.cur();
          } : function() {
            return jQuery.css(elem, prop, "");
          }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
          if (initialInUnit && initialInUnit[3] !== unit) {
            initial = initial / 2;
            unit = unit || initialInUnit[3];
            initialInUnit = +initial || 1;
            while (maxIterations--) {
              jQuery.style(elem, prop, initialInUnit + unit);
              if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
                maxIterations = 0;
              }
              initialInUnit = initialInUnit / scale;
            }
            initialInUnit = initialInUnit * 2;
            jQuery.style(elem, prop, initialInUnit + unit);
            valueParts = valueParts || [];
          }
          if (valueParts) {
            initialInUnit = +initialInUnit || +initial || 0;
            adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
            if (tween) {
              tween.unit = unit;
              tween.start = initialInUnit;
              tween.end = adjusted;
            }
          }
          return adjusted;
        }
        var defaultDisplayMap = {};
        function getDefaultDisplay(elem) {
          var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
          if (display) {
            return display;
          }
          temp = doc.body.appendChild(doc.createElement(nodeName2));
          display = jQuery.css(temp, "display");
          temp.parentNode.removeChild(temp);
          if (display === "none") {
            display = "block";
          }
          defaultDisplayMap[nodeName2] = display;
          return display;
        }
        function showHide(elements, show) {
          var display, elem, values = [], index = 0, length = elements.length;
          for (; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
              continue;
            }
            display = elem.style.display;
            if (show) {
              if (display === "none") {
                values[index] = dataPriv.get(elem, "display") || null;
                if (!values[index]) {
                  elem.style.display = "";
                }
              }
              if (elem.style.display === "" && isHiddenWithinTree(elem)) {
                values[index] = getDefaultDisplay(elem);
              }
            } else {
              if (display !== "none") {
                values[index] = "none";
                dataPriv.set(elem, "display", display);
              }
            }
          }
          for (index = 0; index < length; index++) {
            if (values[index] != null) {
              elements[index].style.display = values[index];
            }
          }
          return elements;
        }
        jQuery.fn.extend({
          show: function() {
            return showHide(this, true);
          },
          hide: function() {
            return showHide(this);
          },
          toggle: function(state) {
            if (typeof state === "boolean") {
              return state ? this.show() : this.hide();
            }
            return this.each(function() {
              if (isHiddenWithinTree(this)) {
                jQuery(this).show();
              } else {
                jQuery(this).hide();
              }
            });
          }
        });
        var rcheckableType = /^(?:checkbox|radio)$/i;
        var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
        var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
        (function() {
          var fragment = document2.createDocumentFragment(), div = fragment.appendChild(document2.createElement("div")), input = document2.createElement("input");
          input.setAttribute("type", "radio");
          input.setAttribute("checked", "checked");
          input.setAttribute("name", "t");
          div.appendChild(input);
          support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
          div.innerHTML = "<textarea>x</textarea>";
          support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
          div.innerHTML = "<option></option>";
          support.option = !!div.lastChild;
        })();
        var wrapMap = {
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
        };
        wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
        wrapMap.th = wrapMap.td;
        if (!support.option) {
          wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
        }
        function getAll(context, tag) {
          var ret;
          if (typeof context.getElementsByTagName !== "undefined") {
            ret = context.getElementsByTagName(tag || "*");
          } else if (typeof context.querySelectorAll !== "undefined") {
            ret = context.querySelectorAll(tag || "*");
          } else {
            ret = [];
          }
          if (tag === void 0 || tag && nodeName(context, tag)) {
            return jQuery.merge([context], ret);
          }
          return ret;
        }
        function setGlobalEval(elems, refElements) {
          var i = 0, l = elems.length;
          for (; i < l; i++) {
            dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
          }
        }
        var rhtml = /<|&#?\w+;/;
        function buildFragment(elems, context, scripts, selection, ignored) {
          var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
          for (; i < l; i++) {
            elem = elems[i];
            if (elem || elem === 0) {
              if (toType(elem) === "object") {
                jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
              } else if (!rhtml.test(elem)) {
                nodes.push(context.createTextNode(elem));
              } else {
                tmp = tmp || fragment.appendChild(context.createElement("div"));
                tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                wrap = wrapMap[tag] || wrapMap._default;
                tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
                j = wrap[0];
                while (j--) {
                  tmp = tmp.lastChild;
                }
                jQuery.merge(nodes, tmp.childNodes);
                tmp = fragment.firstChild;
                tmp.textContent = "";
              }
            }
          }
          fragment.textContent = "";
          i = 0;
          while (elem = nodes[i++]) {
            if (selection && jQuery.inArray(elem, selection) > -1) {
              if (ignored) {
                ignored.push(elem);
              }
              continue;
            }
            attached = isAttached(elem);
            tmp = getAll(fragment.appendChild(elem), "script");
            if (attached) {
              setGlobalEval(tmp);
            }
            if (scripts) {
              j = 0;
              while (elem = tmp[j++]) {
                if (rscriptType.test(elem.type || "")) {
                  scripts.push(elem);
                }
              }
            }
          }
          return fragment;
        }
        var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
        function returnTrue() {
          return true;
        }
        function returnFalse() {
          return false;
        }
        function expectSync(elem, type) {
          return elem === safeActiveElement() === (type === "focus");
        }
        function safeActiveElement() {
          try {
            return document2.activeElement;
          } catch (err) {
          }
        }
        function on(elem, types, selector, data, fn, one) {
          var origFn, type;
          if (typeof types === "object") {
            if (typeof selector !== "string") {
              data = data || selector;
              selector = void 0;
            }
            for (type in types) {
              on(elem, type, selector, data, types[type], one);
            }
            return elem;
          }
          if (data == null && fn == null) {
            fn = selector;
            data = selector = void 0;
          } else if (fn == null) {
            if (typeof selector === "string") {
              fn = data;
              data = void 0;
            } else {
              fn = data;
              data = selector;
              selector = void 0;
            }
          }
          if (fn === false) {
            fn = returnFalse;
          } else if (!fn) {
            return elem;
          }
          if (one === 1) {
            origFn = fn;
            fn = function(event) {
              jQuery().off(event);
              return origFn.apply(this, arguments);
            };
            fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
          }
          return elem.each(function() {
            jQuery.event.add(this, types, fn, data, selector);
          });
        }
        jQuery.event = {
          global: {},
          add: function(elem, types, handler, data, selector) {
            var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
            if (!acceptData(elem)) {
              return;
            }
            if (handler.handler) {
              handleObjIn = handler;
              handler = handleObjIn.handler;
              selector = handleObjIn.selector;
            }
            if (selector) {
              jQuery.find.matchesSelector(documentElement, selector);
            }
            if (!handler.guid) {
              handler.guid = jQuery.guid++;
            }
            if (!(events = elemData.events)) {
              events = elemData.events = /* @__PURE__ */ Object.create(null);
            }
            if (!(eventHandle = elemData.handle)) {
              eventHandle = elemData.handle = function(e) {
                return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0;
              };
            }
            types = (types || "").match(rnothtmlwhite) || [""];
            t = types.length;
            while (t--) {
              tmp = rtypenamespace.exec(types[t]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || "").split(".").sort();
              if (!type) {
                continue;
              }
              special = jQuery.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              special = jQuery.event.special[type] || {};
              handleObj = jQuery.extend({
                type,
                origType,
                data,
                handler,
                guid: handler.guid,
                selector,
                needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                namespace: namespaces.join(".")
              }, handleObjIn);
              if (!(handlers = events[type])) {
                handlers = events[type] = [];
                handlers.delegateCount = 0;
                if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                  if (elem.addEventListener) {
                    elem.addEventListener(type, eventHandle);
                  }
                }
              }
              if (special.add) {
                special.add.call(elem, handleObj);
                if (!handleObj.handler.guid) {
                  handleObj.handler.guid = handler.guid;
                }
              }
              if (selector) {
                handlers.splice(handlers.delegateCount++, 0, handleObj);
              } else {
                handlers.push(handleObj);
              }
              jQuery.event.global[type] = true;
            }
          },
          remove: function(elem, types, handler, selector, mappedTypes) {
            var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
            if (!elemData || !(events = elemData.events)) {
              return;
            }
            types = (types || "").match(rnothtmlwhite) || [""];
            t = types.length;
            while (t--) {
              tmp = rtypenamespace.exec(types[t]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || "").split(".").sort();
              if (!type) {
                for (type in events) {
                  jQuery.event.remove(elem, type + types[t], handler, selector, true);
                }
                continue;
              }
              special = jQuery.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              handlers = events[type] || [];
              tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
              origCount = j = handlers.length;
              while (j--) {
                handleObj = handlers[j];
                if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                  handlers.splice(j, 1);
                  if (handleObj.selector) {
                    handlers.delegateCount--;
                  }
                  if (special.remove) {
                    special.remove.call(elem, handleObj);
                  }
                }
              }
              if (origCount && !handlers.length) {
                if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                  jQuery.removeEvent(elem, type, elemData.handle);
                }
                delete events[type];
              }
            }
            if (jQuery.isEmptyObject(events)) {
              dataPriv.remove(elem, "handle events");
            }
          },
          dispatch: function(nativeEvent) {
            var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || /* @__PURE__ */ Object.create(null))[event.type] || [], special = jQuery.event.special[event.type] || {};
            args[0] = event;
            for (i = 1; i < arguments.length; i++) {
              args[i] = arguments[i];
            }
            event.delegateTarget = this;
            if (special.preDispatch && special.preDispatch.call(this, event) === false) {
              return;
            }
            handlerQueue = jQuery.event.handlers.call(this, event, handlers);
            i = 0;
            while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
              event.currentTarget = matched.elem;
              j = 0;
              while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
                if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                  event.handleObj = handleObj;
                  event.data = handleObj.data;
                  ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                  if (ret !== void 0) {
                    if ((event.result = ret) === false) {
                      event.preventDefault();
                      event.stopPropagation();
                    }
                  }
                }
              }
            }
            if (special.postDispatch) {
              special.postDispatch.call(this, event);
            }
            return event.result;
          },
          handlers: function(event, handlers) {
            var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            if (delegateCount && cur.nodeType && !(event.type === "click" && event.button >= 1)) {
              for (; cur !== this; cur = cur.parentNode || this) {
                if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                  matchedHandlers = [];
                  matchedSelectors = {};
                  for (i = 0; i < delegateCount; i++) {
                    handleObj = handlers[i];
                    sel = handleObj.selector + " ";
                    if (matchedSelectors[sel] === void 0) {
                      matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
                    }
                    if (matchedSelectors[sel]) {
                      matchedHandlers.push(handleObj);
                    }
                  }
                  if (matchedHandlers.length) {
                    handlerQueue.push({ elem: cur, handlers: matchedHandlers });
                  }
                }
              }
            }
            cur = this;
            if (delegateCount < handlers.length) {
              handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
            }
            return handlerQueue;
          },
          addProp: function(name, hook) {
            Object.defineProperty(jQuery.Event.prototype, name, {
              enumerable: true,
              configurable: true,
              get: isFunction(hook) ? function() {
                if (this.originalEvent) {
                  return hook(this.originalEvent);
                }
              } : function() {
                if (this.originalEvent) {
                  return this.originalEvent[name];
                }
              },
              set: function(value) {
                Object.defineProperty(this, name, {
                  enumerable: true,
                  configurable: true,
                  writable: true,
                  value
                });
              }
            });
          },
          fix: function(originalEvent) {
            return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
          },
          special: {
            load: {
              noBubble: true
            },
            click: {
              setup: function(data) {
                var el = this || data;
                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                  leverageNative(el, "click", returnTrue);
                }
                return false;
              },
              trigger: function(data) {
                var el = this || data;
                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                  leverageNative(el, "click");
                }
                return true;
              },
              _default: function(event) {
                var target = event.target;
                return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
              }
            },
            beforeunload: {
              postDispatch: function(event) {
                if (event.result !== void 0 && event.originalEvent) {
                  event.originalEvent.returnValue = event.result;
                }
              }
            }
          }
        };
        function leverageNative(el, type, expectSync2) {
          if (!expectSync2) {
            if (dataPriv.get(el, type) === void 0) {
              jQuery.event.add(el, type, returnTrue);
            }
            return;
          }
          dataPriv.set(el, type, false);
          jQuery.event.add(el, type, {
            namespace: false,
            handler: function(event) {
              var notAsync, result, saved = dataPriv.get(this, type);
              if (event.isTrigger & 1 && this[type]) {
                if (!saved.length) {
                  saved = slice.call(arguments);
                  dataPriv.set(this, type, saved);
                  notAsync = expectSync2(this, type);
                  this[type]();
                  result = dataPriv.get(this, type);
                  if (saved !== result || notAsync) {
                    dataPriv.set(this, type, false);
                  } else {
                    result = {};
                  }
                  if (saved !== result) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                    return result && result.value;
                  }
                } else if ((jQuery.event.special[type] || {}).delegateType) {
                  event.stopPropagation();
                }
              } else if (saved.length) {
                dataPriv.set(this, type, {
                  value: jQuery.event.trigger(jQuery.extend(saved[0], jQuery.Event.prototype), saved.slice(1), this)
                });
                event.stopImmediatePropagation();
              }
            }
          });
        }
        jQuery.removeEvent = function(elem, type, handle) {
          if (elem.removeEventListener) {
            elem.removeEventListener(type, handle);
          }
        };
        jQuery.Event = function(src, props) {
          if (!(this instanceof jQuery.Event)) {
            return new jQuery.Event(src, props);
          }
          if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && src.returnValue === false ? returnTrue : returnFalse;
            this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
            this.currentTarget = src.currentTarget;
            this.relatedTarget = src.relatedTarget;
          } else {
            this.type = src;
          }
          if (props) {
            jQuery.extend(this, props);
          }
          this.timeStamp = src && src.timeStamp || Date.now();
          this[jQuery.expando] = true;
        };
        jQuery.Event.prototype = {
          constructor: jQuery.Event,
          isDefaultPrevented: returnFalse,
          isPropagationStopped: returnFalse,
          isImmediatePropagationStopped: returnFalse,
          isSimulated: false,
          preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (e && !this.isSimulated) {
              e.preventDefault();
            }
          },
          stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (e && !this.isSimulated) {
              e.stopPropagation();
            }
          },
          stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue;
            if (e && !this.isSimulated) {
              e.stopImmediatePropagation();
            }
            this.stopPropagation();
          }
        };
        jQuery.each({
          altKey: true,
          bubbles: true,
          cancelable: true,
          changedTouches: true,
          ctrlKey: true,
          detail: true,
          eventPhase: true,
          metaKey: true,
          pageX: true,
          pageY: true,
          shiftKey: true,
          view: true,
          "char": true,
          code: true,
          charCode: true,
          key: true,
          keyCode: true,
          button: true,
          buttons: true,
          clientX: true,
          clientY: true,
          offsetX: true,
          offsetY: true,
          pointerId: true,
          pointerType: true,
          screenX: true,
          screenY: true,
          targetTouches: true,
          toElement: true,
          touches: true,
          which: true
        }, jQuery.event.addProp);
        jQuery.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
          jQuery.event.special[type] = {
            setup: function() {
              leverageNative(this, type, expectSync);
              return false;
            },
            trigger: function() {
              leverageNative(this, type);
              return true;
            },
            _default: function() {
              return true;
            },
            delegateType
          };
        });
        jQuery.each({
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout"
        }, function(orig, fix) {
          jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
              var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
              if (!related || related !== target && !jQuery.contains(target, related)) {
                event.type = handleObj.origType;
                ret = handleObj.handler.apply(this, arguments);
                event.type = fix;
              }
              return ret;
            }
          };
        });
        jQuery.fn.extend({
          on: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn);
          },
          one: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn, 1);
          },
          off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
              handleObj = types.handleObj;
              jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
              return this;
            }
            if (typeof types === "object") {
              for (type in types) {
                this.off(type, selector, types[type]);
              }
              return this;
            }
            if (selector === false || typeof selector === "function") {
              fn = selector;
              selector = void 0;
            }
            if (fn === false) {
              fn = returnFalse;
            }
            return this.each(function() {
              jQuery.event.remove(this, types, fn, selector);
            });
          }
        });
        var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function manipulationTarget(elem, content) {
          if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
            return jQuery(elem).children("tbody")[0] || elem;
          }
          return elem;
        }
        function disableScript(elem) {
          elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
          return elem;
        }
        function restoreScript(elem) {
          if ((elem.type || "").slice(0, 5) === "true/") {
            elem.type = elem.type.slice(5);
          } else {
            elem.removeAttribute("type");
          }
          return elem;
        }
        function cloneCopyEvent(src, dest) {
          var i, l, type, pdataOld, udataOld, udataCur, events;
          if (dest.nodeType !== 1) {
            return;
          }
          if (dataPriv.hasData(src)) {
            pdataOld = dataPriv.get(src);
            events = pdataOld.events;
            if (events) {
              dataPriv.remove(dest, "handle events");
              for (type in events) {
                for (i = 0, l = events[type].length; i < l; i++) {
                  jQuery.event.add(dest, type, events[type][i]);
                }
              }
            }
          }
          if (dataUser.hasData(src)) {
            udataOld = dataUser.access(src);
            udataCur = jQuery.extend({}, udataOld);
            dataUser.set(dest, udataCur);
          }
        }
        function fixInput(src, dest) {
          var nodeName2 = dest.nodeName.toLowerCase();
          if (nodeName2 === "input" && rcheckableType.test(src.type)) {
            dest.checked = src.checked;
          } else if (nodeName2 === "input" || nodeName2 === "textarea") {
            dest.defaultValue = src.defaultValue;
          }
        }
        function domManip(collection, args, callback, ignored) {
          args = flat(args);
          var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
          if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
            return collection.each(function(index) {
              var self2 = collection.eq(index);
              if (valueIsFunction) {
                args[0] = value.call(this, index, self2.html());
              }
              domManip(self2, args, callback, ignored);
            });
          }
          if (l) {
            fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
            first = fragment.firstChild;
            if (fragment.childNodes.length === 1) {
              fragment = first;
            }
            if (first || ignored) {
              scripts = jQuery.map(getAll(fragment, "script"), disableScript);
              hasScripts = scripts.length;
              for (; i < l; i++) {
                node = fragment;
                if (i !== iNoClone) {
                  node = jQuery.clone(node, true, true);
                  if (hasScripts) {
                    jQuery.merge(scripts, getAll(node, "script"));
                  }
                }
                callback.call(collection[i], node, i);
              }
              if (hasScripts) {
                doc = scripts[scripts.length - 1].ownerDocument;
                jQuery.map(scripts, restoreScript);
                for (i = 0; i < hasScripts; i++) {
                  node = scripts[i];
                  if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                    if (node.src && (node.type || "").toLowerCase() !== "module") {
                      if (jQuery._evalUrl && !node.noModule) {
                        jQuery._evalUrl(node.src, {
                          nonce: node.nonce || node.getAttribute("nonce")
                        }, doc);
                      }
                    } else {
                      DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                    }
                  }
                }
              }
            }
          }
          return collection;
        }
        function remove(elem, selector, keepData) {
          var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0;
          for (; (node = nodes[i]) != null; i++) {
            if (!keepData && node.nodeType === 1) {
              jQuery.cleanData(getAll(node));
            }
            if (node.parentNode) {
              if (keepData && isAttached(node)) {
                setGlobalEval(getAll(node, "script"));
              }
              node.parentNode.removeChild(node);
            }
          }
          return elem;
        }
        jQuery.extend({
          htmlPrefilter: function(html) {
            return html;
          },
          clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
            if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
              destElements = getAll(clone);
              srcElements = getAll(elem);
              for (i = 0, l = srcElements.length; i < l; i++) {
                fixInput(srcElements[i], destElements[i]);
              }
            }
            if (dataAndEvents) {
              if (deepDataAndEvents) {
                srcElements = srcElements || getAll(elem);
                destElements = destElements || getAll(clone);
                for (i = 0, l = srcElements.length; i < l; i++) {
                  cloneCopyEvent(srcElements[i], destElements[i]);
                }
              } else {
                cloneCopyEvent(elem, clone);
              }
            }
            destElements = getAll(clone, "script");
            if (destElements.length > 0) {
              setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            }
            return clone;
          },
          cleanData: function(elems) {
            var data, elem, type, special = jQuery.event.special, i = 0;
            for (; (elem = elems[i]) !== void 0; i++) {
              if (acceptData(elem)) {
                if (data = elem[dataPriv.expando]) {
                  if (data.events) {
                    for (type in data.events) {
                      if (special[type]) {
                        jQuery.event.remove(elem, type);
                      } else {
                        jQuery.removeEvent(elem, type, data.handle);
                      }
                    }
                  }
                  elem[dataPriv.expando] = void 0;
                }
                if (elem[dataUser.expando]) {
                  elem[dataUser.expando] = void 0;
                }
              }
            }
          }
        });
        jQuery.fn.extend({
          detach: function(selector) {
            return remove(this, selector, true);
          },
          remove: function(selector) {
            return remove(this, selector);
          },
          text: function(value) {
            return access(this, function(value2) {
              return value2 === void 0 ? jQuery.text(this) : this.empty().each(function() {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                  this.textContent = value2;
                }
              });
            }, null, value, arguments.length);
          },
          append: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.appendChild(elem);
              }
            });
          },
          prepend: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.insertBefore(elem, target.firstChild);
              }
            });
          },
          before: function() {
            return domManip(this, arguments, function(elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this);
              }
            });
          },
          after: function() {
            return domManip(this, arguments, function(elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this.nextSibling);
              }
            });
          },
          empty: function() {
            var elem, i = 0;
            for (; (elem = this[i]) != null; i++) {
              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.textContent = "";
              }
            }
            return this;
          },
          clone: function(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
              return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
          },
          html: function(value) {
            return access(this, function(value2) {
              var elem = this[0] || {}, i = 0, l = this.length;
              if (value2 === void 0 && elem.nodeType === 1) {
                return elem.innerHTML;
              }
              if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
                value2 = jQuery.htmlPrefilter(value2);
                try {
                  for (; i < l; i++) {
                    elem = this[i] || {};
                    if (elem.nodeType === 1) {
                      jQuery.cleanData(getAll(elem, false));
                      elem.innerHTML = value2;
                    }
                  }
                  elem = 0;
                } catch (e) {
                }
              }
              if (elem) {
                this.empty().append(value2);
              }
            }, null, value, arguments.length);
          },
          replaceWith: function() {
            var ignored = [];
            return domManip(this, arguments, function(elem) {
              var parent = this.parentNode;
              if (jQuery.inArray(this, ignored) < 0) {
                jQuery.cleanData(getAll(this));
                if (parent) {
                  parent.replaceChild(elem, this);
                }
              }
            }, ignored);
          }
        });
        jQuery.each({
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith"
        }, function(name, original) {
          jQuery.fn[name] = function(selector) {
            var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
            for (; i <= last; i++) {
              elems = i === last ? this : this.clone(true);
              jQuery(insert[i])[original](elems);
              push.apply(ret, elems.get());
            }
            return this.pushStack(ret);
          };
        });
        var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
        var getStyles = function(elem) {
          var view = elem.ownerDocument.defaultView;
          if (!view || !view.opener) {
            view = window2;
          }
          return view.getComputedStyle(elem);
        };
        var swap = function(elem, options, callback) {
          var ret, name, old = {};
          for (name in options) {
            old[name] = elem.style[name];
            elem.style[name] = options[name];
          }
          ret = callback.call(elem);
          for (name in options) {
            elem.style[name] = old[name];
          }
          return ret;
        };
        var rboxStyle = new RegExp(cssExpand.join("|"), "i");
        (function() {
          function computeStyleTests() {
            if (!div) {
              return;
            }
            container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
            div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
            documentElement.appendChild(container).appendChild(div);
            var divStyle = window2.getComputedStyle(div);
            pixelPositionVal = divStyle.top !== "1%";
            reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
            div.style.right = "60%";
            pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
            boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
            div.style.position = "absolute";
            scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
            documentElement.removeChild(container);
            div = null;
          }
          function roundPixelMeasures(measure) {
            return Math.round(parseFloat(measure));
          }
          var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document2.createElement("div"), div = document2.createElement("div");
          if (!div.style) {
            return;
          }
          div.style.backgroundClip = "content-box";
          div.cloneNode(true).style.backgroundClip = "";
          support.clearCloneStyle = div.style.backgroundClip === "content-box";
          jQuery.extend(support, {
            boxSizingReliable: function() {
              computeStyleTests();
              return boxSizingReliableVal;
            },
            pixelBoxStyles: function() {
              computeStyleTests();
              return pixelBoxStylesVal;
            },
            pixelPosition: function() {
              computeStyleTests();
              return pixelPositionVal;
            },
            reliableMarginLeft: function() {
              computeStyleTests();
              return reliableMarginLeftVal;
            },
            scrollboxSize: function() {
              computeStyleTests();
              return scrollboxSizeVal;
            },
            reliableTrDimensions: function() {
              var table, tr, trChild, trStyle;
              if (reliableTrDimensionsVal == null) {
                table = document2.createElement("table");
                tr = document2.createElement("tr");
                trChild = document2.createElement("div");
                table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
                tr.style.cssText = "border:1px solid";
                tr.style.height = "1px";
                trChild.style.height = "9px";
                trChild.style.display = "block";
                documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
                trStyle = window2.getComputedStyle(tr);
                reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
                documentElement.removeChild(table);
              }
              return reliableTrDimensionsVal;
            }
          });
        })();
        function curCSS(elem, name, computed) {
          var width, minWidth, maxWidth, ret, style = elem.style;
          computed = computed || getStyles(elem);
          if (computed) {
            ret = computed.getPropertyValue(name) || computed[name];
            if (ret === "" && !isAttached(elem)) {
              ret = jQuery.style(elem, name);
            }
            if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
              width = style.width;
              minWidth = style.minWidth;
              maxWidth = style.maxWidth;
              style.minWidth = style.maxWidth = style.width = ret;
              ret = computed.width;
              style.width = width;
              style.minWidth = minWidth;
              style.maxWidth = maxWidth;
            }
          }
          return ret !== void 0 ? ret + "" : ret;
        }
        function addGetHookIf(conditionFn, hookFn) {
          return {
            get: function() {
              if (conditionFn()) {
                delete this.get;
                return;
              }
              return (this.get = hookFn).apply(this, arguments);
            }
          };
        }
        var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document2.createElement("div").style, vendorProps = {};
        function vendorPropName(name) {
          var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
          while (i--) {
            name = cssPrefixes[i] + capName;
            if (name in emptyStyle) {
              return name;
            }
          }
        }
        function finalPropName(name) {
          var final = jQuery.cssProps[name] || vendorProps[name];
          if (final) {
            return final;
          }
          if (name in emptyStyle) {
            return name;
          }
          return vendorProps[name] = vendorPropName(name) || name;
        }
        var rdisplayswap = /^(none|table(?!-c[ea]).+)/, rcustomProp = /^--/, cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
          letterSpacing: "0",
          fontWeight: "400"
        };
        function setPositiveNumber(_elem, value, subtract) {
          var matches = rcssNum.exec(value);
          return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
        }
        function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
          var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0;
          if (box === (isBorderBox ? "border" : "content")) {
            return 0;
          }
          for (; i < 4; i += 2) {
            if (box === "margin") {
              delta += jQuery.css(elem, box + cssExpand[i], true, styles);
            }
            if (!isBorderBox) {
              delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
              if (box !== "padding") {
                delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
              } else {
                extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
              }
            } else {
              if (box === "content") {
                delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
              }
              if (box !== "margin") {
                delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
              }
            }
          }
          if (!isBorderBox && computedVal >= 0) {
            delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5)) || 0;
          }
          return delta;
        }
        function getWidthOrHeight(elem, dimension, extra) {
          var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
          if (rnumnonpx.test(val)) {
            if (!extra) {
              return val;
            }
            val = "auto";
          }
          if ((!support.boxSizingReliable() && isBorderBox || !support.reliableTrDimensions() && nodeName(elem, "tr") || val === "auto" || !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && elem.getClientRects().length) {
            isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
            valueIsBorderBox = offsetProp in elem;
            if (valueIsBorderBox) {
              val = elem[offsetProp];
            }
          }
          val = parseFloat(val) || 0;
          return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, val) + "px";
        }
        jQuery.extend({
          cssHooks: {
            opacity: {
              get: function(elem, computed) {
                if (computed) {
                  var ret = curCSS(elem, "opacity");
                  return ret === "" ? "1" : ret;
                }
              }
            }
          },
          cssNumber: {
            "animationIterationCount": true,
            "columnCount": true,
            "fillOpacity": true,
            "flexGrow": true,
            "flexShrink": true,
            "fontWeight": true,
            "gridArea": true,
            "gridColumn": true,
            "gridColumnEnd": true,
            "gridColumnStart": true,
            "gridRow": true,
            "gridRowEnd": true,
            "gridRowStart": true,
            "lineHeight": true,
            "opacity": true,
            "order": true,
            "orphans": true,
            "widows": true,
            "zIndex": true,
            "zoom": true
          },
          cssProps: {},
          style: function(elem, name, value, extra) {
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
              return;
            }
            var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
            if (!isCustomProp) {
              name = finalPropName(origName);
            }
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (value !== void 0) {
              type = typeof value;
              if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                value = adjustCSS(elem, name, ret);
                type = "number";
              }
              if (value == null || value !== value) {
                return;
              }
              if (type === "number" && !isCustomProp) {
                value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
              }
              if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                style[name] = "inherit";
              }
              if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {
                if (isCustomProp) {
                  style.setProperty(name, value);
                } else {
                  style[name] = value;
                }
              }
            } else {
              if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {
                return ret;
              }
              return style[name];
            }
          },
          css: function(elem, name, extra, styles) {
            var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
            if (!isCustomProp) {
              name = finalPropName(origName);
            }
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (hooks && "get" in hooks) {
              val = hooks.get(elem, true, extra);
            }
            if (val === void 0) {
              val = curCSS(elem, name, styles);
            }
            if (val === "normal" && name in cssNormalTransform) {
              val = cssNormalTransform[name];
            }
            if (extra === "" || extra) {
              num = parseFloat(val);
              return extra === true || isFinite(num) ? num || 0 : val;
            }
            return val;
          }
        });
        jQuery.each(["height", "width"], function(_i, dimension) {
          jQuery.cssHooks[dimension] = {
            get: function(elem, computed, extra) {
              if (computed) {
                return rdisplayswap.test(jQuery.css(elem, "display")) && (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                  return getWidthOrHeight(elem, dimension, extra);
                }) : getWidthOrHeight(elem, dimension, extra);
              }
            },
            set: function(elem, value, extra) {
              var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0;
              if (isBorderBox && scrollboxSizeBuggy) {
                subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
              }
              if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                elem.style[dimension] = value;
                value = jQuery.css(elem, dimension);
              }
              return setPositiveNumber(elem, value, subtract);
            }
          };
        });
        jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
          if (computed) {
            return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function() {
              return elem.getBoundingClientRect().left;
            })) + "px";
          }
        });
        jQuery.each({
          margin: "",
          padding: "",
          border: "Width"
        }, function(prefix, suffix) {
          jQuery.cssHooks[prefix + suffix] = {
            expand: function(value) {
              var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
              for (; i < 4; i++) {
                expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
              }
              return expanded;
            }
          };
          if (prefix !== "margin") {
            jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
          }
        });
        jQuery.fn.extend({
          css: function(name, value) {
            return access(this, function(elem, name2, value2) {
              var styles, len, map = {}, i = 0;
              if (Array.isArray(name2)) {
                styles = getStyles(elem);
                len = name2.length;
                for (; i < len; i++) {
                  map[name2[i]] = jQuery.css(elem, name2[i], false, styles);
                }
                return map;
              }
              return value2 !== void 0 ? jQuery.style(elem, name2, value2) : jQuery.css(elem, name2);
            }, name, value, arguments.length > 1);
          }
        });
        function Tween(elem, options, prop, end, easing) {
          return new Tween.prototype.init(elem, options, prop, end, easing);
        }
        jQuery.Tween = Tween;
        Tween.prototype = {
          constructor: Tween,
          init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || jQuery.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
          },
          cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
          },
          run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) {
              this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
            } else {
              this.pos = eased = percent;
            }
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) {
              this.options.step.call(this.elem, this.now, this);
            }
            if (hooks && hooks.set) {
              hooks.set(this);
            } else {
              Tween.propHooks._default.set(this);
            }
            return this;
          }
        };
        Tween.prototype.init.prototype = Tween.prototype;
        Tween.propHooks = {
          _default: {
            get: function(tween) {
              var result;
              if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
                return tween.elem[tween.prop];
              }
              result = jQuery.css(tween.elem, tween.prop, "");
              return !result || result === "auto" ? 0 : result;
            },
            set: function(tween) {
              if (jQuery.fx.step[tween.prop]) {
                jQuery.fx.step[tween.prop](tween);
              } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
                jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
              } else {
                tween.elem[tween.prop] = tween.now;
              }
            }
          }
        };
        Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
          set: function(tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) {
              tween.elem[tween.prop] = tween.now;
            }
          }
        };
        jQuery.easing = {
          linear: function(p) {
            return p;
          },
          swing: function(p) {
            return 0.5 - Math.cos(p * Math.PI) / 2;
          },
          _default: "swing"
        };
        jQuery.fx = Tween.prototype.init;
        jQuery.fx.step = {};
        var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
        function schedule() {
          if (inProgress) {
            if (document2.hidden === false && window2.requestAnimationFrame) {
              window2.requestAnimationFrame(schedule);
            } else {
              window2.setTimeout(schedule, jQuery.fx.interval);
            }
            jQuery.fx.tick();
          }
        }
        function createFxNow() {
          window2.setTimeout(function() {
            fxNow = void 0;
          });
          return fxNow = Date.now();
        }
        function genFx(type, includeWidth) {
          var which, i = 0, attrs = { height: type };
          includeWidth = includeWidth ? 1 : 0;
          for (; i < 4; i += 2 - includeWidth) {
            which = cssExpand[i];
            attrs["margin" + which] = attrs["padding" + which] = type;
          }
          if (includeWidth) {
            attrs.opacity = attrs.width = type;
          }
          return attrs;
        }
        function createTween(value, prop, animation) {
          var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
          for (; index < length; index++) {
            if (tween = collection[index].call(animation, prop, value)) {
              return tween;
            }
          }
        }
        function defaultPrefilter(elem, props, opts) {
          var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
          if (!opts.queue) {
            hooks = jQuery._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
              hooks.unqueued = 0;
              oldfire = hooks.empty.fire;
              hooks.empty.fire = function() {
                if (!hooks.unqueued) {
                  oldfire();
                }
              };
            }
            hooks.unqueued++;
            anim.always(function() {
              anim.always(function() {
                hooks.unqueued--;
                if (!jQuery.queue(elem, "fx").length) {
                  hooks.empty.fire();
                }
              });
            });
          }
          for (prop in props) {
            value = props[prop];
            if (rfxtypes.test(value)) {
              delete props[prop];
              toggle = toggle || value === "toggle";
              if (value === (hidden ? "hide" : "show")) {
                if (value === "show" && dataShow && dataShow[prop] !== void 0) {
                  hidden = true;
                } else {
                  continue;
                }
              }
              orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
            }
          }
          propTween = !jQuery.isEmptyObject(props);
          if (!propTween && jQuery.isEmptyObject(orig)) {
            return;
          }
          if (isBox && elem.nodeType === 1) {
            opts.overflow = [style.overflow, style.overflowX, style.overflowY];
            restoreDisplay = dataShow && dataShow.display;
            if (restoreDisplay == null) {
              restoreDisplay = dataPriv.get(elem, "display");
            }
            display = jQuery.css(elem, "display");
            if (display === "none") {
              if (restoreDisplay) {
                display = restoreDisplay;
              } else {
                showHide([elem], true);
                restoreDisplay = elem.style.display || restoreDisplay;
                display = jQuery.css(elem, "display");
                showHide([elem]);
              }
            }
            if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
              if (jQuery.css(elem, "float") === "none") {
                if (!propTween) {
                  anim.done(function() {
                    style.display = restoreDisplay;
                  });
                  if (restoreDisplay == null) {
                    display = style.display;
                    restoreDisplay = display === "none" ? "" : display;
                  }
                }
                style.display = "inline-block";
              }
            }
          }
          if (opts.overflow) {
            style.overflow = "hidden";
            anim.always(function() {
              style.overflow = opts.overflow[0];
              style.overflowX = opts.overflow[1];
              style.overflowY = opts.overflow[2];
            });
          }
          propTween = false;
          for (prop in orig) {
            if (!propTween) {
              if (dataShow) {
                if ("hidden" in dataShow) {
                  hidden = dataShow.hidden;
                }
              } else {
                dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
              }
              if (toggle) {
                dataShow.hidden = !hidden;
              }
              if (hidden) {
                showHide([elem], true);
              }
              anim.done(function() {
                if (!hidden) {
                  showHide([elem]);
                }
                dataPriv.remove(elem, "fxshow");
                for (prop in orig) {
                  jQuery.style(elem, prop, orig[prop]);
                }
              });
            }
            propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
            if (!(prop in dataShow)) {
              dataShow[prop] = propTween.start;
              if (hidden) {
                propTween.end = propTween.start;
                propTween.start = 0;
              }
            }
          }
        }
        function propFilter(props, specialEasing) {
          var index, name, easing, value, hooks;
          for (index in props) {
            name = camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (Array.isArray(value)) {
              easing = value[1];
              value = props[index] = value[0];
            }
            if (index !== name) {
              props[name] = value;
              delete props[index];
            }
            hooks = jQuery.cssHooks[name];
            if (hooks && "expand" in hooks) {
              value = hooks.expand(value);
              delete props[name];
              for (index in value) {
                if (!(index in props)) {
                  props[index] = value[index];
                  specialEasing[index] = easing;
                }
              }
            } else {
              specialEasing[name] = easing;
            }
          }
        }
        function Animation(elem, properties, options) {
          var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
            delete tick.elem;
          }), tick = function() {
            if (stopped) {
              return false;
            }
            var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index2 = 0, length2 = animation.tweens.length;
            for (; index2 < length2; index2++) {
              animation.tweens[index2].run(percent);
            }
            deferred.notifyWith(elem, [animation, percent, remaining]);
            if (percent < 1 && length2) {
              return remaining;
            }
            if (!length2) {
              deferred.notifyWith(elem, [animation, 1, 0]);
            }
            deferred.resolveWith(elem, [animation]);
            return false;
          }, animation = deferred.promise({
            elem,
            props: jQuery.extend({}, properties),
            opts: jQuery.extend(true, {
              specialEasing: {},
              easing: jQuery.easing._default
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
              var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
              animation.tweens.push(tween);
              return tween;
            },
            stop: function(gotoEnd) {
              var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
              if (stopped) {
                return this;
              }
              stopped = true;
              for (; index2 < length2; index2++) {
                animation.tweens[index2].run(1);
              }
              if (gotoEnd) {
                deferred.notifyWith(elem, [animation, 1, 0]);
                deferred.resolveWith(elem, [animation, gotoEnd]);
              } else {
                deferred.rejectWith(elem, [animation, gotoEnd]);
              }
              return this;
            }
          }), props = animation.props;
          propFilter(props, animation.opts.specialEasing);
          for (; index < length; index++) {
            result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
              if (isFunction(result.stop)) {
                jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
              }
              return result;
            }
          }
          jQuery.map(props, createTween, animation);
          if (isFunction(animation.opts.start)) {
            animation.opts.start.call(elem, animation);
          }
          animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
          jQuery.fx.timer(jQuery.extend(tick, {
            elem,
            anim: animation,
            queue: animation.opts.queue
          }));
          return animation;
        }
        jQuery.Animation = jQuery.extend(Animation, {
          tweeners: {
            "*": [function(prop, value) {
              var tween = this.createTween(prop, value);
              adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
              return tween;
            }]
          },
          tweener: function(props, callback) {
            if (isFunction(props)) {
              callback = props;
              props = ["*"];
            } else {
              props = props.match(rnothtmlwhite);
            }
            var prop, index = 0, length = props.length;
            for (; index < length; index++) {
              prop = props[index];
              Animation.tweeners[prop] = Animation.tweeners[prop] || [];
              Animation.tweeners[prop].unshift(callback);
            }
          },
          prefilters: [defaultPrefilter],
          prefilter: function(callback, prepend) {
            if (prepend) {
              Animation.prefilters.unshift(callback);
            } else {
              Animation.prefilters.push(callback);
            }
          }
        });
        jQuery.speed = function(speed, easing, fn) {
          var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing || isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !isFunction(easing) && easing
          };
          if (jQuery.fx.off) {
            opt.duration = 0;
          } else {
            if (typeof opt.duration !== "number") {
              if (opt.duration in jQuery.fx.speeds) {
                opt.duration = jQuery.fx.speeds[opt.duration];
              } else {
                opt.duration = jQuery.fx.speeds._default;
              }
            }
          }
          if (opt.queue == null || opt.queue === true) {
            opt.queue = "fx";
          }
          opt.old = opt.complete;
          opt.complete = function() {
            if (isFunction(opt.old)) {
              opt.old.call(this);
            }
            if (opt.queue) {
              jQuery.dequeue(this, opt.queue);
            }
          };
          return opt;
        };
        jQuery.fn.extend({
          fadeTo: function(speed, to, easing, callback) {
            return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
          },
          animate: function(prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
              var anim = Animation(this, jQuery.extend({}, prop), optall);
              if (empty || dataPriv.get(this, "finish")) {
                anim.stop(true);
              }
            };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
          },
          stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
              var stop = hooks.stop;
              delete hooks.stop;
              stop(gotoEnd);
            };
            if (typeof type !== "string") {
              gotoEnd = clearQueue;
              clearQueue = type;
              type = void 0;
            }
            if (clearQueue) {
              this.queue(type || "fx", []);
            }
            return this.each(function() {
              var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
              if (index) {
                if (data[index] && data[index].stop) {
                  stopQueue(data[index]);
                }
              } else {
                for (index in data) {
                  if (data[index] && data[index].stop && rrun.test(index)) {
                    stopQueue(data[index]);
                  }
                }
              }
              for (index = timers.length; index--; ) {
                if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                  timers[index].anim.stop(gotoEnd);
                  dequeue = false;
                  timers.splice(index, 1);
                }
              }
              if (dequeue || !gotoEnd) {
                jQuery.dequeue(this, type);
              }
            });
          },
          finish: function(type) {
            if (type !== false) {
              type = type || "fx";
            }
            return this.each(function() {
              var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
              data.finish = true;
              jQuery.queue(this, type, []);
              if (hooks && hooks.stop) {
                hooks.stop.call(this, true);
              }
              for (index = timers.length; index--; ) {
                if (timers[index].elem === this && timers[index].queue === type) {
                  timers[index].anim.stop(true);
                  timers.splice(index, 1);
                }
              }
              for (index = 0; index < length; index++) {
                if (queue[index] && queue[index].finish) {
                  queue[index].finish.call(this);
                }
              }
              delete data.finish;
            });
          }
        });
        jQuery.each(["toggle", "show", "hide"], function(_i, name) {
          var cssFn = jQuery.fn[name];
          jQuery.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
          };
        });
        jQuery.each({
          slideDown: genFx("show"),
          slideUp: genFx("hide"),
          slideToggle: genFx("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" }
        }, function(name, props) {
          jQuery.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
          };
        });
        jQuery.timers = [];
        jQuery.fx.tick = function() {
          var timer, i = 0, timers = jQuery.timers;
          fxNow = Date.now();
          for (; i < timers.length; i++) {
            timer = timers[i];
            if (!timer() && timers[i] === timer) {
              timers.splice(i--, 1);
            }
          }
          if (!timers.length) {
            jQuery.fx.stop();
          }
          fxNow = void 0;
        };
        jQuery.fx.timer = function(timer) {
          jQuery.timers.push(timer);
          jQuery.fx.start();
        };
        jQuery.fx.interval = 13;
        jQuery.fx.start = function() {
          if (inProgress) {
            return;
          }
          inProgress = true;
          schedule();
        };
        jQuery.fx.stop = function() {
          inProgress = null;
        };
        jQuery.fx.speeds = {
          slow: 600,
          fast: 200,
          _default: 400
        };
        jQuery.fn.delay = function(time, type) {
          time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
          type = type || "fx";
          return this.queue(type, function(next, hooks) {
            var timeout = window2.setTimeout(next, time);
            hooks.stop = function() {
              window2.clearTimeout(timeout);
            };
          });
        };
        (function() {
          var input = document2.createElement("input"), select = document2.createElement("select"), opt = select.appendChild(document2.createElement("option"));
          input.type = "checkbox";
          support.checkOn = input.value !== "";
          support.optSelected = opt.selected;
          input = document2.createElement("input");
          input.value = "t";
          input.type = "radio";
          support.radioValue = input.value === "t";
        })();
        var boolHook, attrHandle = jQuery.expr.attrHandle;
        jQuery.fn.extend({
          attr: function(name, value) {
            return access(this, jQuery.attr, name, value, arguments.length > 1);
          },
          removeAttr: function(name) {
            return this.each(function() {
              jQuery.removeAttr(this, name);
            });
          }
        });
        jQuery.extend({
          attr: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (typeof elem.getAttribute === "undefined") {
              return jQuery.prop(elem, name, value);
            }
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
              hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0);
            }
            if (value !== void 0) {
              if (value === null) {
                jQuery.removeAttr(elem, name);
                return;
              }
              if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                return ret;
              }
              elem.setAttribute(name, value + "");
              return value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            ret = jQuery.find.attr(elem, name);
            return ret == null ? void 0 : ret;
          },
          attrHooks: {
            type: {
              set: function(elem, value) {
                if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                  var val = elem.value;
                  elem.setAttribute("type", value);
                  if (val) {
                    elem.value = val;
                  }
                  return value;
                }
              }
            }
          },
          removeAttr: function(elem, value) {
            var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
            if (attrNames && elem.nodeType === 1) {
              while (name = attrNames[i++]) {
                elem.removeAttribute(name);
              }
            }
          }
        });
        boolHook = {
          set: function(elem, value, name) {
            if (value === false) {
              jQuery.removeAttr(elem, name);
            } else {
              elem.setAttribute(name, name);
            }
            return name;
          }
        };
        jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(_i, name) {
          var getter = attrHandle[name] || jQuery.find.attr;
          attrHandle[name] = function(elem, name2, isXML) {
            var ret, handle, lowercaseName = name2.toLowerCase();
            if (!isXML) {
              handle = attrHandle[lowercaseName];
              attrHandle[lowercaseName] = ret;
              ret = getter(elem, name2, isXML) != null ? lowercaseName : null;
              attrHandle[lowercaseName] = handle;
            }
            return ret;
          };
        });
        var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
        jQuery.fn.extend({
          prop: function(name, value) {
            return access(this, jQuery.prop, name, value, arguments.length > 1);
          },
          removeProp: function(name) {
            return this.each(function() {
              delete this[jQuery.propFix[name] || name];
            });
          }
        });
        jQuery.extend({
          prop: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
              name = jQuery.propFix[name] || name;
              hooks = jQuery.propHooks[name];
            }
            if (value !== void 0) {
              if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                return ret;
              }
              return elem[name] = value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            return elem[name];
          },
          propHooks: {
            tabIndex: {
              get: function(elem) {
                var tabindex = jQuery.find.attr(elem, "tabindex");
                if (tabindex) {
                  return parseInt(tabindex, 10);
                }
                if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                  return 0;
                }
                return -1;
              }
            }
          },
          propFix: {
            "for": "htmlFor",
            "class": "className"
          }
        });
        if (!support.optSelected) {
          jQuery.propHooks.selected = {
            get: function(elem) {
              var parent = elem.parentNode;
              if (parent && parent.parentNode) {
                parent.parentNode.selectedIndex;
              }
              return null;
            },
            set: function(elem) {
              var parent = elem.parentNode;
              if (parent) {
                parent.selectedIndex;
                if (parent.parentNode) {
                  parent.parentNode.selectedIndex;
                }
              }
            }
          };
        }
        jQuery.each([
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable"
        ], function() {
          jQuery.propFix[this.toLowerCase()] = this;
        });
        function stripAndCollapse(value) {
          var tokens = value.match(rnothtmlwhite) || [];
          return tokens.join(" ");
        }
        function getClass(elem) {
          return elem.getAttribute && elem.getAttribute("class") || "";
        }
        function classesToArray(value) {
          if (Array.isArray(value)) {
            return value;
          }
          if (typeof value === "string") {
            return value.match(rnothtmlwhite) || [];
          }
          return [];
        }
        jQuery.fn.extend({
          addClass: function(value) {
            var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
            if (isFunction(value)) {
              return this.each(function(j2) {
                jQuery(this).addClass(value.call(this, j2, getClass(this)));
              });
            }
            classes = classesToArray(value);
            if (classes.length) {
              while (elem = this[i++]) {
                curValue = getClass(elem);
                cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                  j = 0;
                  while (clazz = classes[j++]) {
                    if (cur.indexOf(" " + clazz + " ") < 0) {
                      cur += clazz + " ";
                    }
                  }
                  finalValue = stripAndCollapse(cur);
                  if (curValue !== finalValue) {
                    elem.setAttribute("class", finalValue);
                  }
                }
              }
            }
            return this;
          },
          removeClass: function(value) {
            var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
            if (isFunction(value)) {
              return this.each(function(j2) {
                jQuery(this).removeClass(value.call(this, j2, getClass(this)));
              });
            }
            if (!arguments.length) {
              return this.attr("class", "");
            }
            classes = classesToArray(value);
            if (classes.length) {
              while (elem = this[i++]) {
                curValue = getClass(elem);
                cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                  j = 0;
                  while (clazz = classes[j++]) {
                    while (cur.indexOf(" " + clazz + " ") > -1) {
                      cur = cur.replace(" " + clazz + " ", " ");
                    }
                  }
                  finalValue = stripAndCollapse(cur);
                  if (curValue !== finalValue) {
                    elem.setAttribute("class", finalValue);
                  }
                }
              }
            }
            return this;
          },
          toggleClass: function(value, stateVal) {
            var type = typeof value, isValidValue = type === "string" || Array.isArray(value);
            if (typeof stateVal === "boolean" && isValidValue) {
              return stateVal ? this.addClass(value) : this.removeClass(value);
            }
            if (isFunction(value)) {
              return this.each(function(i) {
                jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
              });
            }
            return this.each(function() {
              var className, i, self2, classNames;
              if (isValidValue) {
                i = 0;
                self2 = jQuery(this);
                classNames = classesToArray(value);
                while (className = classNames[i++]) {
                  if (self2.hasClass(className)) {
                    self2.removeClass(className);
                  } else {
                    self2.addClass(className);
                  }
                }
              } else if (value === void 0 || type === "boolean") {
                className = getClass(this);
                if (className) {
                  dataPriv.set(this, "__className__", className);
                }
                if (this.setAttribute) {
                  this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
                }
              }
            });
          },
          hasClass: function(selector) {
            var className, elem, i = 0;
            className = " " + selector + " ";
            while (elem = this[i++]) {
              if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
                return true;
              }
            }
            return false;
          }
        });
        var rreturn = /\r/g;
        jQuery.fn.extend({
          val: function(value) {
            var hooks, ret, valueIsFunction, elem = this[0];
            if (!arguments.length) {
              if (elem) {
                hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {
                  return ret;
                }
                ret = elem.value;
                if (typeof ret === "string") {
                  return ret.replace(rreturn, "");
                }
                return ret == null ? "" : ret;
              }
              return;
            }
            valueIsFunction = isFunction(value);
            return this.each(function(i) {
              var val;
              if (this.nodeType !== 1) {
                return;
              }
              if (valueIsFunction) {
                val = value.call(this, i, jQuery(this).val());
              } else {
                val = value;
              }
              if (val == null) {
                val = "";
              } else if (typeof val === "number") {
                val += "";
              } else if (Array.isArray(val)) {
                val = jQuery.map(val, function(value2) {
                  return value2 == null ? "" : value2 + "";
                });
              }
              hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
              if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
                this.value = val;
              }
            });
          }
        });
        jQuery.extend({
          valHooks: {
            option: {
              get: function(elem) {
                var val = jQuery.find.attr(elem, "value");
                return val != null ? val : stripAndCollapse(jQuery.text(elem));
              }
            },
            select: {
              get: function(elem) {
                var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
                if (index < 0) {
                  i = max;
                } else {
                  i = one ? index : 0;
                }
                for (; i < max; i++) {
                  option = options[i];
                  if ((option.selected || i === index) && !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                    value = jQuery(option).val();
                    if (one) {
                      return value;
                    }
                    values.push(value);
                  }
                }
                return values;
              },
              set: function(elem, value) {
                var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
                while (i--) {
                  option = options[i];
                  if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
                    optionSet = true;
                  }
                }
                if (!optionSet) {
                  elem.selectedIndex = -1;
                }
                return values;
              }
            }
          }
        });
        jQuery.each(["radio", "checkbox"], function() {
          jQuery.valHooks[this] = {
            set: function(elem, value) {
              if (Array.isArray(value)) {
                return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
              }
            }
          };
          if (!support.checkOn) {
            jQuery.valHooks[this].get = function(elem) {
              return elem.getAttribute("value") === null ? "on" : elem.value;
            };
          }
        });
        support.focusin = "onfocusin" in window2;
        var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
          e.stopPropagation();
        };
        jQuery.extend(jQuery.event, {
          trigger: function(event, data, elem, onlyHandlers) {
            var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document2], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = lastElement = tmp = elem = elem || document2;
            if (elem.nodeType === 3 || elem.nodeType === 8) {
              return;
            }
            if (rfocusMorph.test(type + jQuery.event.triggered)) {
              return;
            }
            if (type.indexOf(".") > -1) {
              namespaces = type.split(".");
              type = namespaces.shift();
              namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;
            event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            event.result = void 0;
            if (!event.target) {
              event.target = elem;
            }
            data = data == null ? [event] : jQuery.makeArray(data, [event]);
            special = jQuery.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
              return;
            }
            if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
              bubbleType = special.delegateType || type;
              if (!rfocusMorph.test(bubbleType + type)) {
                cur = cur.parentNode;
              }
              for (; cur; cur = cur.parentNode) {
                eventPath.push(cur);
                tmp = cur;
              }
              if (tmp === (elem.ownerDocument || document2)) {
                eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
              }
            }
            i = 0;
            while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
              lastElement = cur;
              event.type = i > 1 ? bubbleType : special.bindType || type;
              handle = (dataPriv.get(cur, "events") || /* @__PURE__ */ Object.create(null))[event.type] && dataPriv.get(cur, "handle");
              if (handle) {
                handle.apply(cur, data);
              }
              handle = ontype && cur[ontype];
              if (handle && handle.apply && acceptData(cur)) {
                event.result = handle.apply(cur, data);
                if (event.result === false) {
                  event.preventDefault();
                }
              }
            }
            event.type = type;
            if (!onlyHandlers && !event.isDefaultPrevented()) {
              if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
                if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                  tmp = elem[ontype];
                  if (tmp) {
                    elem[ontype] = null;
                  }
                  jQuery.event.triggered = type;
                  if (event.isPropagationStopped()) {
                    lastElement.addEventListener(type, stopPropagationCallback);
                  }
                  elem[type]();
                  if (event.isPropagationStopped()) {
                    lastElement.removeEventListener(type, stopPropagationCallback);
                  }
                  jQuery.event.triggered = void 0;
                  if (tmp) {
                    elem[ontype] = tmp;
                  }
                }
              }
            }
            return event.result;
          },
          simulate: function(type, elem, event) {
            var e = jQuery.extend(new jQuery.Event(), event, {
              type,
              isSimulated: true
            });
            jQuery.event.trigger(e, null, elem);
          }
        });
        jQuery.fn.extend({
          trigger: function(type, data) {
            return this.each(function() {
              jQuery.event.trigger(type, data, this);
            });
          },
          triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) {
              return jQuery.event.trigger(type, data, elem, true);
            }
          }
        });
        if (!support.focusin) {
          jQuery.each({ focus: "focusin", blur: "focusout" }, function(orig, fix) {
            var handler = function(event) {
              jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
            };
            jQuery.event.special[fix] = {
              setup: function() {
                var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix);
                if (!attaches) {
                  doc.addEventListener(orig, handler, true);
                }
                dataPriv.access(doc, fix, (attaches || 0) + 1);
              },
              teardown: function() {
                var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix) - 1;
                if (!attaches) {
                  doc.removeEventListener(orig, handler, true);
                  dataPriv.remove(doc, fix);
                } else {
                  dataPriv.access(doc, fix, attaches);
                }
              }
            };
          });
        }
        var location = window2.location;
        var nonce = { guid: Date.now() };
        var rquery = /\?/;
        jQuery.parseXML = function(data) {
          var xml, parserErrorElem;
          if (!data || typeof data !== "string") {
            return null;
          }
          try {
            xml = new window2.DOMParser().parseFromString(data, "text/xml");
          } catch (e) {
          }
          parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
          if (!xml || parserErrorElem) {
            jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, function(el) {
              return el.textContent;
            }).join("\n") : data));
          }
          return xml;
        };
        var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
        function buildParams(prefix, obj, traditional, add) {
          var name;
          if (Array.isArray(obj)) {
            jQuery.each(obj, function(i, v) {
              if (traditional || rbracket.test(prefix)) {
                add(prefix, v);
              } else {
                buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
              }
            });
          } else if (!traditional && toType(obj) === "object") {
            for (name in obj) {
              buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
            }
          } else {
            add(prefix, obj);
          }
        }
        jQuery.param = function(a, traditional) {
          var prefix, s = [], add = function(key, valueOrFunction) {
            var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
            s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
          };
          if (a == null) {
            return "";
          }
          if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
            jQuery.each(a, function() {
              add(this.name, this.value);
            });
          } else {
            for (prefix in a) {
              buildParams(prefix, a[prefix], traditional, add);
            }
          }
          return s.join("&");
        };
        jQuery.fn.extend({
          serialize: function() {
            return jQuery.param(this.serializeArray());
          },
          serializeArray: function() {
            return this.map(function() {
              var elements = jQuery.prop(this, "elements");
              return elements ? jQuery.makeArray(elements) : this;
            }).filter(function() {
              var type = this.type;
              return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
            }).map(function(_i, elem) {
              var val = jQuery(this).val();
              if (val == null) {
                return null;
              }
              if (Array.isArray(val)) {
                return jQuery.map(val, function(val2) {
                  return { name: elem.name, value: val2.replace(rCRLF, "\r\n") };
                });
              }
              return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
            }).get();
          }
        });
        var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document2.createElement("a");
        originAnchor.href = location.href;
        function addToPrefiltersOrTransports(structure) {
          return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
              func = dataTypeExpression;
              dataTypeExpression = "*";
            }
            var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
            if (isFunction(func)) {
              while (dataType = dataTypes[i++]) {
                if (dataType[0] === "+") {
                  dataType = dataType.slice(1) || "*";
                  (structure[dataType] = structure[dataType] || []).unshift(func);
                } else {
                  (structure[dataType] = structure[dataType] || []).push(func);
                }
              }
            }
          };
        }
        function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
          var inspected = {}, seekingTransport = structure === transports;
          function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
              var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
              if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                options.dataTypes.unshift(dataTypeOrTransport);
                inspect(dataTypeOrTransport);
                return false;
              } else if (seekingTransport) {
                return !(selected = dataTypeOrTransport);
              }
            });
            return selected;
          }
          return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
        }
        function ajaxExtend(target, src) {
          var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
          for (key in src) {
            if (src[key] !== void 0) {
              (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
            }
          }
          if (deep) {
            jQuery.extend(true, target, deep);
          }
          return target;
        }
        function ajaxHandleResponses(s, jqXHR, responses) {
          var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
          while (dataTypes[0] === "*") {
            dataTypes.shift();
            if (ct === void 0) {
              ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
            }
          }
          if (ct) {
            for (type in contents) {
              if (contents[type] && contents[type].test(ct)) {
                dataTypes.unshift(type);
                break;
              }
            }
          }
          if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0];
          } else {
            for (type in responses) {
              if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                finalDataType = type;
                break;
              }
              if (!firstDataType) {
                firstDataType = type;
              }
            }
            finalDataType = finalDataType || firstDataType;
          }
          if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
              dataTypes.unshift(finalDataType);
            }
            return responses[finalDataType];
          }
        }
        function ajaxConvert(s, response, jqXHR, isSuccess) {
          var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
          if (dataTypes[1]) {
            for (conv in s.converters) {
              converters[conv.toLowerCase()] = s.converters[conv];
            }
          }
          current = dataTypes.shift();
          while (current) {
            if (s.responseFields[current]) {
              jqXHR[s.responseFields[current]] = response;
            }
            if (!prev && isSuccess && s.dataFilter) {
              response = s.dataFilter(response, s.dataType);
            }
            prev = current;
            current = dataTypes.shift();
            if (current) {
              if (current === "*") {
                current = prev;
              } else if (prev !== "*" && prev !== current) {
                conv = converters[prev + " " + current] || converters["* " + current];
                if (!conv) {
                  for (conv2 in converters) {
                    tmp = conv2.split(" ");
                    if (tmp[1] === current) {
                      conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                      if (conv) {
                        if (conv === true) {
                          conv = converters[conv2];
                        } else if (converters[conv2] !== true) {
                          current = tmp[0];
                          dataTypes.unshift(tmp[1]);
                        }
                        break;
                      }
                    }
                  }
                }
                if (conv !== true) {
                  if (conv && s.throws) {
                    response = conv(response);
                  } else {
                    try {
                      response = conv(response);
                    } catch (e) {
                      return {
                        state: "parsererror",
                        error: conv ? e : "No conversion from " + prev + " to " + current
                      };
                    }
                  }
                }
              }
            }
          }
          return { state: "success", data: response };
        }
        jQuery.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: location.href,
            type: "GET",
            isLocal: rlocalProtocol.test(location.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": allTypes,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
            },
            contents: {
              xml: /\bxml\b/,
              html: /\bhtml/,
              json: /\bjson\b/
            },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
            },
            converters: {
              "* text": String,
              "text html": true,
              "text json": JSON.parse,
              "text xml": jQuery.parseXML
            },
            flatOptions: {
              url: true,
              context: true
            }
          },
          ajaxSetup: function(target, settings) {
            return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
          },
          ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
          ajaxTransport: addToPrefiltersOrTransports(transports),
          ajax: function(url, options) {
            if (typeof url === "object") {
              options = url;
              url = void 0;
            }
            options = options || {};
            var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i, uncached, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
              readyState: 0,
              getResponseHeader: function(key) {
                var match;
                if (completed2) {
                  if (!responseHeaders) {
                    responseHeaders = {};
                    while (match = rheaders.exec(responseHeadersString)) {
                      responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                    }
                  }
                  match = responseHeaders[key.toLowerCase() + " "];
                }
                return match == null ? null : match.join(", ");
              },
              getAllResponseHeaders: function() {
                return completed2 ? responseHeadersString : null;
              },
              setRequestHeader: function(name, value) {
                if (completed2 == null) {
                  name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                  requestHeaders[name] = value;
                }
                return this;
              },
              overrideMimeType: function(type) {
                if (completed2 == null) {
                  s.mimeType = type;
                }
                return this;
              },
              statusCode: function(map) {
                var code;
                if (map) {
                  if (completed2) {
                    jqXHR.always(map[jqXHR.status]);
                  } else {
                    for (code in map) {
                      statusCode[code] = [statusCode[code], map[code]];
                    }
                  }
                }
                return this;
              },
              abort: function(statusText) {
                var finalText = statusText || strAbort;
                if (transport) {
                  transport.abort(finalText);
                }
                done(0, finalText);
                return this;
              }
            };
            deferred.promise(jqXHR);
            s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
            s.type = options.method || options.type || s.method || s.type;
            s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
            if (s.crossDomain == null) {
              urlAnchor = document2.createElement("a");
              try {
                urlAnchor.href = s.url;
                urlAnchor.href = urlAnchor.href;
                s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
              } catch (e) {
                s.crossDomain = true;
              }
            }
            if (s.data && s.processData && typeof s.data !== "string") {
              s.data = jQuery.param(s.data, s.traditional);
            }
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
            if (completed2) {
              return jqXHR;
            }
            fireGlobals = jQuery.event && s.global;
            if (fireGlobals && jQuery.active++ === 0) {
              jQuery.event.trigger("ajaxStart");
            }
            s.type = s.type.toUpperCase();
            s.hasContent = !rnoContent.test(s.type);
            cacheURL = s.url.replace(rhash, "");
            if (!s.hasContent) {
              uncached = s.url.slice(cacheURL.length);
              if (s.data && (s.processData || typeof s.data === "string")) {
                cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                delete s.data;
              }
              if (s.cache === false) {
                cacheURL = cacheURL.replace(rantiCache, "$1");
                uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
              }
              s.url = cacheURL + uncached;
            } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
              s.data = s.data.replace(r20, "+");
            }
            if (s.ifModified) {
              if (jQuery.lastModified[cacheURL]) {
                jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
              }
              if (jQuery.etag[cacheURL]) {
                jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
              }
            }
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
              jqXHR.setRequestHeader("Content-Type", s.contentType);
            }
            jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
            for (i in s.headers) {
              jqXHR.setRequestHeader(i, s.headers[i]);
            }
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed2)) {
              return jqXHR.abort();
            }
            strAbort = "abort";
            completeDeferred.add(s.complete);
            jqXHR.done(s.success);
            jqXHR.fail(s.error);
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
            if (!transport) {
              done(-1, "No Transport");
            } else {
              jqXHR.readyState = 1;
              if (fireGlobals) {
                globalEventContext.trigger("ajaxSend", [jqXHR, s]);
              }
              if (completed2) {
                return jqXHR;
              }
              if (s.async && s.timeout > 0) {
                timeoutTimer = window2.setTimeout(function() {
                  jqXHR.abort("timeout");
                }, s.timeout);
              }
              try {
                completed2 = false;
                transport.send(requestHeaders, done);
              } catch (e) {
                if (completed2) {
                  throw e;
                }
                done(-1, e);
              }
            }
            function done(status, nativeStatusText, responses, headers) {
              var isSuccess, success, error, response, modified, statusText = nativeStatusText;
              if (completed2) {
                return;
              }
              completed2 = true;
              if (timeoutTimer) {
                window2.clearTimeout(timeoutTimer);
              }
              transport = void 0;
              responseHeadersString = headers || "";
              jqXHR.readyState = status > 0 ? 4 : 0;
              isSuccess = status >= 200 && status < 300 || status === 304;
              if (responses) {
                response = ajaxHandleResponses(s, jqXHR, responses);
              }
              if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1 && jQuery.inArray("json", s.dataTypes) < 0) {
                s.converters["text script"] = function() {
                };
              }
              response = ajaxConvert(s, response, jqXHR, isSuccess);
              if (isSuccess) {
                if (s.ifModified) {
                  modified = jqXHR.getResponseHeader("Last-Modified");
                  if (modified) {
                    jQuery.lastModified[cacheURL] = modified;
                  }
                  modified = jqXHR.getResponseHeader("etag");
                  if (modified) {
                    jQuery.etag[cacheURL] = modified;
                  }
                }
                if (status === 204 || s.type === "HEAD") {
                  statusText = "nocontent";
                } else if (status === 304) {
                  statusText = "notmodified";
                } else {
                  statusText = response.state;
                  success = response.data;
                  error = response.error;
                  isSuccess = !error;
                }
              } else {
                error = statusText;
                if (status || !statusText) {
                  statusText = "error";
                  if (status < 0) {
                    status = 0;
                  }
                }
              }
              jqXHR.status = status;
              jqXHR.statusText = (nativeStatusText || statusText) + "";
              if (isSuccess) {
                deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
              } else {
                deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
              }
              jqXHR.statusCode(statusCode);
              statusCode = void 0;
              if (fireGlobals) {
                globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
              }
              completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
              if (fireGlobals) {
                globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
                if (!--jQuery.active) {
                  jQuery.event.trigger("ajaxStop");
                }
              }
            }
            return jqXHR;
          },
          getJSON: function(url, data, callback) {
            return jQuery.get(url, data, callback, "json");
          },
          getScript: function(url, callback) {
            return jQuery.get(url, void 0, callback, "script");
          }
        });
        jQuery.each(["get", "post"], function(_i, method) {
          jQuery[method] = function(url, data, callback, type) {
            if (isFunction(data)) {
              type = type || callback;
              callback = data;
              data = void 0;
            }
            return jQuery.ajax(jQuery.extend({
              url,
              type: method,
              dataType: type,
              data,
              success: callback
            }, jQuery.isPlainObject(url) && url));
          };
        });
        jQuery.ajaxPrefilter(function(s) {
          var i;
          for (i in s.headers) {
            if (i.toLowerCase() === "content-type") {
              s.contentType = s.headers[i] || "";
            }
          }
        });
        jQuery._evalUrl = function(url, options, doc) {
          return jQuery.ajax({
            url,
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            converters: {
              "text script": function() {
              }
            },
            dataFilter: function(response) {
              jQuery.globalEval(response, options, doc);
            }
          });
        };
        jQuery.fn.extend({
          wrapAll: function(html) {
            var wrap;
            if (this[0]) {
              if (isFunction(html)) {
                html = html.call(this[0]);
              }
              wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
              if (this[0].parentNode) {
                wrap.insertBefore(this[0]);
              }
              wrap.map(function() {
                var elem = this;
                while (elem.firstElementChild) {
                  elem = elem.firstElementChild;
                }
                return elem;
              }).append(this);
            }
            return this;
          },
          wrapInner: function(html) {
            if (isFunction(html)) {
              return this.each(function(i) {
                jQuery(this).wrapInner(html.call(this, i));
              });
            }
            return this.each(function() {
              var self2 = jQuery(this), contents = self2.contents();
              if (contents.length) {
                contents.wrapAll(html);
              } else {
                self2.append(html);
              }
            });
          },
          wrap: function(html) {
            var htmlIsFunction = isFunction(html);
            return this.each(function(i) {
              jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
            });
          },
          unwrap: function(selector) {
            this.parent(selector).not("body").each(function() {
              jQuery(this).replaceWith(this.childNodes);
            });
            return this;
          }
        });
        jQuery.expr.pseudos.hidden = function(elem) {
          return !jQuery.expr.pseudos.visible(elem);
        };
        jQuery.expr.pseudos.visible = function(elem) {
          return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
        };
        jQuery.ajaxSettings.xhr = function() {
          try {
            return new window2.XMLHttpRequest();
          } catch (e) {
          }
        };
        var xhrSuccessStatus = {
          0: 200,
          1223: 204
        }, xhrSupported = jQuery.ajaxSettings.xhr();
        support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
        support.ajax = xhrSupported = !!xhrSupported;
        jQuery.ajaxTransport(function(options) {
          var callback, errorCallback;
          if (support.cors || xhrSupported && !options.crossDomain) {
            return {
              send: function(headers, complete) {
                var i, xhr = options.xhr();
                xhr.open(options.type, options.url, options.async, options.username, options.password);
                if (options.xhrFields) {
                  for (i in options.xhrFields) {
                    xhr[i] = options.xhrFields[i];
                  }
                }
                if (options.mimeType && xhr.overrideMimeType) {
                  xhr.overrideMimeType(options.mimeType);
                }
                if (!options.crossDomain && !headers["X-Requested-With"]) {
                  headers["X-Requested-With"] = "XMLHttpRequest";
                }
                for (i in headers) {
                  xhr.setRequestHeader(i, headers[i]);
                }
                callback = function(type) {
                  return function() {
                    if (callback) {
                      callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                      if (type === "abort") {
                        xhr.abort();
                      } else if (type === "error") {
                        if (typeof xhr.status !== "number") {
                          complete(0, "error");
                        } else {
                          complete(xhr.status, xhr.statusText);
                        }
                      } else {
                        complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText }, xhr.getAllResponseHeaders());
                      }
                    }
                  };
                };
                xhr.onload = callback();
                errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
                if (xhr.onabort !== void 0) {
                  xhr.onabort = errorCallback;
                } else {
                  xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                      window2.setTimeout(function() {
                        if (callback) {
                          errorCallback();
                        }
                      });
                    }
                  };
                }
                callback = callback("abort");
                try {
                  xhr.send(options.hasContent && options.data || null);
                } catch (e) {
                  if (callback) {
                    throw e;
                  }
                }
              },
              abort: function() {
                if (callback) {
                  callback();
                }
              }
            };
          }
        });
        jQuery.ajaxPrefilter(function(s) {
          if (s.crossDomain) {
            s.contents.script = false;
          }
        });
        jQuery.ajaxSetup({
          accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          contents: {
            script: /\b(?:java|ecma)script\b/
          },
          converters: {
            "text script": function(text) {
              jQuery.globalEval(text);
              return text;
            }
          }
        });
        jQuery.ajaxPrefilter("script", function(s) {
          if (s.cache === void 0) {
            s.cache = false;
          }
          if (s.crossDomain) {
            s.type = "GET";
          }
        });
        jQuery.ajaxTransport("script", function(s) {
          if (s.crossDomain || s.scriptAttrs) {
            var script, callback;
            return {
              send: function(_, complete) {
                script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({ charset: s.scriptCharset, src: s.url }).on("load error", callback = function(evt) {
                  script.remove();
                  callback = null;
                  if (evt) {
                    complete(evt.type === "error" ? 404 : 200, evt.type);
                  }
                });
                document2.head.appendChild(script[0]);
              },
              abort: function() {
                if (callback) {
                  callback();
                }
              }
            };
          }
        });
        var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
        jQuery.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
            this[callback] = true;
            return callback;
          }
        });
        jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
          var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
          if (jsonProp || s.dataTypes[0] === "jsonp") {
            callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
            if (jsonProp) {
              s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
            } else if (s.jsonp !== false) {
              s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
            }
            s.converters["script json"] = function() {
              if (!responseContainer) {
                jQuery.error(callbackName + " was not called");
              }
              return responseContainer[0];
            };
            s.dataTypes[0] = "json";
            overwritten = window2[callbackName];
            window2[callbackName] = function() {
              responseContainer = arguments;
            };
            jqXHR.always(function() {
              if (overwritten === void 0) {
                jQuery(window2).removeProp(callbackName);
              } else {
                window2[callbackName] = overwritten;
              }
              if (s[callbackName]) {
                s.jsonpCallback = originalSettings.jsonpCallback;
                oldCallbacks.push(callbackName);
              }
              if (responseContainer && isFunction(overwritten)) {
                overwritten(responseContainer[0]);
              }
              responseContainer = overwritten = void 0;
            });
            return "script";
          }
        });
        support.createHTMLDocument = function() {
          var body = document2.implementation.createHTMLDocument("").body;
          body.innerHTML = "<form></form><form></form>";
          return body.childNodes.length === 2;
        }();
        jQuery.parseHTML = function(data, context, keepScripts) {
          if (typeof data !== "string") {
            return [];
          }
          if (typeof context === "boolean") {
            keepScripts = context;
            context = false;
          }
          var base, parsed, scripts;
          if (!context) {
            if (support.createHTMLDocument) {
              context = document2.implementation.createHTMLDocument("");
              base = context.createElement("base");
              base.href = document2.location.href;
              context.head.appendChild(base);
            } else {
              context = document2;
            }
          }
          parsed = rsingleTag.exec(data);
          scripts = !keepScripts && [];
          if (parsed) {
            return [context.createElement(parsed[1])];
          }
          parsed = buildFragment([data], context, scripts);
          if (scripts && scripts.length) {
            jQuery(scripts).remove();
          }
          return jQuery.merge([], parsed.childNodes);
        };
        jQuery.fn.load = function(url, params, callback) {
          var selector, type, response, self2 = this, off = url.indexOf(" ");
          if (off > -1) {
            selector = stripAndCollapse(url.slice(off));
            url = url.slice(0, off);
          }
          if (isFunction(params)) {
            callback = params;
            params = void 0;
          } else if (params && typeof params === "object") {
            type = "POST";
          }
          if (self2.length > 0) {
            jQuery.ajax({
              url,
              type: type || "GET",
              dataType: "html",
              data: params
            }).done(function(responseText) {
              response = arguments;
              self2.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
            }).always(callback && function(jqXHR, status) {
              self2.each(function() {
                callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
              });
            });
          }
          return this;
        };
        jQuery.expr.pseudos.animated = function(elem) {
          return jQuery.grep(jQuery.timers, function(fn) {
            return elem === fn.elem;
          }).length;
        };
        jQuery.offset = {
          setOffset: function(elem, options, i) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
            if (position === "static") {
              elem.style.position = "relative";
            }
            curOffset = curElem.offset();
            curCSSTop = jQuery.css(elem, "top");
            curCSSLeft = jQuery.css(elem, "left");
            calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
            if (calculatePosition) {
              curPosition = curElem.position();
              curTop = curPosition.top;
              curLeft = curPosition.left;
            } else {
              curTop = parseFloat(curCSSTop) || 0;
              curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (isFunction(options)) {
              options = options.call(elem, i, jQuery.extend({}, curOffset));
            }
            if (options.top != null) {
              props.top = options.top - curOffset.top + curTop;
            }
            if (options.left != null) {
              props.left = options.left - curOffset.left + curLeft;
            }
            if ("using" in options) {
              options.using.call(elem, props);
            } else {
              curElem.css(props);
            }
          }
        };
        jQuery.fn.extend({
          offset: function(options) {
            if (arguments.length) {
              return options === void 0 ? this : this.each(function(i) {
                jQuery.offset.setOffset(this, options, i);
              });
            }
            var rect, win, elem = this[0];
            if (!elem) {
              return;
            }
            if (!elem.getClientRects().length) {
              return { top: 0, left: 0 };
            }
            rect = elem.getBoundingClientRect();
            win = elem.ownerDocument.defaultView;
            return {
              top: rect.top + win.pageYOffset,
              left: rect.left + win.pageXOffset
            };
          },
          position: function() {
            if (!this[0]) {
              return;
            }
            var offsetParent, offset, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
            if (jQuery.css(elem, "position") === "fixed") {
              offset = elem.getBoundingClientRect();
            } else {
              offset = this.offset();
              doc = elem.ownerDocument;
              offsetParent = elem.offsetParent || doc.documentElement;
              while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
                offsetParent = offsetParent.parentNode;
              }
              if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
                parentOffset = jQuery(offsetParent).offset();
                parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
                parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
              }
            }
            return {
              top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
              left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
            };
          },
          offsetParent: function() {
            return this.map(function() {
              var offsetParent = this.offsetParent;
              while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
                offsetParent = offsetParent.offsetParent;
              }
              return offsetParent || documentElement;
            });
          }
        });
        jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
          var top = prop === "pageYOffset";
          jQuery.fn[method] = function(val) {
            return access(this, function(elem, method2, val2) {
              var win;
              if (isWindow(elem)) {
                win = elem;
              } else if (elem.nodeType === 9) {
                win = elem.defaultView;
              }
              if (val2 === void 0) {
                return win ? win[prop] : elem[method2];
              }
              if (win) {
                win.scrollTo(!top ? val2 : win.pageXOffset, top ? val2 : win.pageYOffset);
              } else {
                elem[method2] = val2;
              }
            }, method, val, arguments.length);
          };
        });
        jQuery.each(["top", "left"], function(_i, prop) {
          jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
            if (computed) {
              computed = curCSS(elem, prop);
              return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
            }
          });
        });
        jQuery.each({ Height: "height", Width: "width" }, function(name, type) {
          jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
          }, function(defaultExtra, funcName) {
            jQuery.fn[funcName] = function(margin, value) {
              var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
              return access(this, function(elem, type2, value2) {
                var doc;
                if (isWindow(elem)) {
                  return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
                }
                if (elem.nodeType === 9) {
                  doc = elem.documentElement;
                  return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
                }
                return value2 === void 0 ? jQuery.css(elem, type2, extra) : jQuery.style(elem, type2, value2, extra);
              }, type, chainable ? margin : void 0, chainable);
            };
          });
        });
        jQuery.each([
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend"
        ], function(_i, type) {
          jQuery.fn[type] = function(fn) {
            return this.on(type, fn);
          };
        });
        jQuery.fn.extend({
          bind: function(types, data, fn) {
            return this.on(types, null, data, fn);
          },
          unbind: function(types, fn) {
            return this.off(types, null, fn);
          },
          delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
          },
          undelegate: function(selector, types, fn) {
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
          },
          hover: function(fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
          }
        });
        jQuery.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(_i, name) {
          jQuery.fn[name] = function(data, fn) {
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
          };
        });
        var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        jQuery.proxy = function(fn, context) {
          var tmp, args, proxy;
          if (typeof context === "string") {
            tmp = fn[context];
            context = fn;
            fn = tmp;
          }
          if (!isFunction(fn)) {
            return void 0;
          }
          args = slice.call(arguments, 2);
          proxy = function() {
            return fn.apply(context || this, args.concat(slice.call(arguments)));
          };
          proxy.guid = fn.guid = fn.guid || jQuery.guid++;
          return proxy;
        };
        jQuery.holdReady = function(hold) {
          if (hold) {
            jQuery.readyWait++;
          } else {
            jQuery.ready(true);
          }
        };
        jQuery.isArray = Array.isArray;
        jQuery.parseJSON = JSON.parse;
        jQuery.nodeName = nodeName;
        jQuery.isFunction = isFunction;
        jQuery.isWindow = isWindow;
        jQuery.camelCase = camelCase;
        jQuery.type = toType;
        jQuery.now = Date.now;
        jQuery.isNumeric = function(obj) {
          var type = jQuery.type(obj);
          return (type === "number" || type === "string") && !isNaN(obj - parseFloat(obj));
        };
        jQuery.trim = function(text) {
          return text == null ? "" : (text + "").replace(rtrim, "");
        };
        if (typeof define === "function" && define.amd) {
          define("jquery", [], function() {
            return jQuery;
          });
        }
        var _jQuery = window2.jQuery, _$ = window2.$;
        jQuery.noConflict = function(deep) {
          if (window2.$ === jQuery) {
            window2.$ = _$;
          }
          if (deep && window2.jQuery === jQuery) {
            window2.jQuery = _jQuery;
          }
          return jQuery;
        };
        if (typeof noGlobal === "undefined") {
          window2.jQuery = window2.$ = jQuery;
        }
        return jQuery;
      });
    }
  });

  // node_modules/showdown/dist/showdown.js
  var require_showdown = __commonJS({
    "node_modules/showdown/dist/showdown.js"(exports, module) {
      (function() {
        function getDefaultOpts(simple) {
          "use strict";
          var defaultOptions = {
            omitExtraWLInCodeBlocks: {
              defaultValue: false,
              describe: "Omit the default extra whiteline added to code blocks",
              type: "boolean"
            },
            noHeaderId: {
              defaultValue: false,
              describe: "Turn on/off generated header id",
              type: "boolean"
            },
            prefixHeaderId: {
              defaultValue: false,
              describe: "Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",
              type: "string"
            },
            rawPrefixHeaderId: {
              defaultValue: false,
              describe: 'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
              type: "boolean"
            },
            ghCompatibleHeaderId: {
              defaultValue: false,
              describe: "Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",
              type: "boolean"
            },
            rawHeaderId: {
              defaultValue: false,
              describe: `Remove only spaces, ' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids`,
              type: "boolean"
            },
            headerLevelStart: {
              defaultValue: false,
              describe: "The header blocks level start",
              type: "integer"
            },
            parseImgDimensions: {
              defaultValue: false,
              describe: "Turn on/off image dimension parsing",
              type: "boolean"
            },
            simplifiedAutoLink: {
              defaultValue: false,
              describe: "Turn on/off GFM autolink style",
              type: "boolean"
            },
            excludeTrailingPunctuationFromURLs: {
              defaultValue: false,
              describe: "Excludes trailing punctuation from links generated with autoLinking",
              type: "boolean"
            },
            literalMidWordUnderscores: {
              defaultValue: false,
              describe: "Parse midword underscores as literal underscores",
              type: "boolean"
            },
            literalMidWordAsterisks: {
              defaultValue: false,
              describe: "Parse midword asterisks as literal asterisks",
              type: "boolean"
            },
            strikethrough: {
              defaultValue: false,
              describe: "Turn on/off strikethrough support",
              type: "boolean"
            },
            tables: {
              defaultValue: false,
              describe: "Turn on/off tables support",
              type: "boolean"
            },
            tablesHeaderId: {
              defaultValue: false,
              describe: "Add an id to table headers",
              type: "boolean"
            },
            ghCodeBlocks: {
              defaultValue: true,
              describe: "Turn on/off GFM fenced code blocks support",
              type: "boolean"
            },
            tasklists: {
              defaultValue: false,
              describe: "Turn on/off GFM tasklist support",
              type: "boolean"
            },
            smoothLivePreview: {
              defaultValue: false,
              describe: "Prevents weird effects in live previews due to incomplete input",
              type: "boolean"
            },
            smartIndentationFix: {
              defaultValue: false,
              describe: "Tries to smartly fix indentation in es6 strings",
              type: "boolean"
            },
            disableForced4SpacesIndentedSublists: {
              defaultValue: false,
              describe: "Disables the requirement of indenting nested sublists by 4 spaces",
              type: "boolean"
            },
            simpleLineBreaks: {
              defaultValue: false,
              describe: "Parses simple line breaks as <br> (GFM Style)",
              type: "boolean"
            },
            requireSpaceBeforeHeadingText: {
              defaultValue: false,
              describe: "Makes adding a space between `#` and the header text mandatory (GFM Style)",
              type: "boolean"
            },
            ghMentions: {
              defaultValue: false,
              describe: "Enables github @mentions",
              type: "boolean"
            },
            ghMentionsLink: {
              defaultValue: "https://github.com/{u}",
              describe: "Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",
              type: "string"
            },
            encodeEmails: {
              defaultValue: true,
              describe: "Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",
              type: "boolean"
            },
            openLinksInNewWindow: {
              defaultValue: false,
              describe: "Open all links in new windows",
              type: "boolean"
            },
            backslashEscapesHTMLTags: {
              defaultValue: false,
              describe: "Support for HTML Tag escaping. ex: <div>foo</div>",
              type: "boolean"
            },
            emoji: {
              defaultValue: false,
              describe: "Enable emoji support. Ex: `this is a :smile: emoji`",
              type: "boolean"
            },
            underline: {
              defaultValue: false,
              describe: "Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",
              type: "boolean"
            },
            ellipsis: {
              defaultValue: true,
              describe: "Replaces three dots with the ellipsis unicode character",
              type: "boolean"
            },
            completeHTMLDocument: {
              defaultValue: false,
              describe: "Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",
              type: "boolean"
            },
            metadata: {
              defaultValue: false,
              describe: "Enable support for document metadata (defined at the top of the document between `\xAB\xAB\xAB` and `\xBB\xBB\xBB` or between `---` and `---`).",
              type: "boolean"
            },
            splitAdjacentBlockquotes: {
              defaultValue: false,
              describe: "Split adjacent blockquote blocks",
              type: "boolean"
            }
          };
          if (simple === false) {
            return JSON.parse(JSON.stringify(defaultOptions));
          }
          var ret = {};
          for (var opt in defaultOptions) {
            if (defaultOptions.hasOwnProperty(opt)) {
              ret[opt] = defaultOptions[opt].defaultValue;
            }
          }
          return ret;
        }
        function allOptionsOn() {
          "use strict";
          var options = getDefaultOpts(true), ret = {};
          for (var opt in options) {
            if (options.hasOwnProperty(opt)) {
              ret[opt] = true;
            }
          }
          return ret;
        }
        var showdown = {}, parsers = {}, extensions = {}, globalOptions = getDefaultOpts(true), setFlavor = "vanilla", flavor = {
          github: {
            omitExtraWLInCodeBlocks: true,
            simplifiedAutoLink: true,
            excludeTrailingPunctuationFromURLs: true,
            literalMidWordUnderscores: true,
            strikethrough: true,
            tables: true,
            tablesHeaderId: true,
            ghCodeBlocks: true,
            tasklists: true,
            disableForced4SpacesIndentedSublists: true,
            simpleLineBreaks: true,
            requireSpaceBeforeHeadingText: true,
            ghCompatibleHeaderId: true,
            ghMentions: true,
            backslashEscapesHTMLTags: true,
            emoji: true,
            splitAdjacentBlockquotes: true
          },
          original: {
            noHeaderId: true,
            ghCodeBlocks: false
          },
          ghost: {
            omitExtraWLInCodeBlocks: true,
            parseImgDimensions: true,
            simplifiedAutoLink: true,
            excludeTrailingPunctuationFromURLs: true,
            literalMidWordUnderscores: true,
            strikethrough: true,
            tables: true,
            tablesHeaderId: true,
            ghCodeBlocks: true,
            tasklists: true,
            smoothLivePreview: true,
            simpleLineBreaks: true,
            requireSpaceBeforeHeadingText: true,
            ghMentions: false,
            encodeEmails: true
          },
          vanilla: getDefaultOpts(true),
          allOn: allOptionsOn()
        };
        showdown.helper = {};
        showdown.extensions = {};
        showdown.setOption = function(key, value) {
          "use strict";
          globalOptions[key] = value;
          return this;
        };
        showdown.getOption = function(key) {
          "use strict";
          return globalOptions[key];
        };
        showdown.getOptions = function() {
          "use strict";
          return globalOptions;
        };
        showdown.resetOptions = function() {
          "use strict";
          globalOptions = getDefaultOpts(true);
        };
        showdown.setFlavor = function(name) {
          "use strict";
          if (!flavor.hasOwnProperty(name)) {
            throw Error(name + " flavor was not found");
          }
          showdown.resetOptions();
          var preset = flavor[name];
          setFlavor = name;
          for (var option in preset) {
            if (preset.hasOwnProperty(option)) {
              globalOptions[option] = preset[option];
            }
          }
        };
        showdown.getFlavor = function() {
          "use strict";
          return setFlavor;
        };
        showdown.getFlavorOptions = function(name) {
          "use strict";
          if (flavor.hasOwnProperty(name)) {
            return flavor[name];
          }
        };
        showdown.getDefaultOptions = function(simple) {
          "use strict";
          return getDefaultOpts(simple);
        };
        showdown.subParser = function(name, func) {
          "use strict";
          if (showdown.helper.isString(name)) {
            if (typeof func !== "undefined") {
              parsers[name] = func;
            } else {
              if (parsers.hasOwnProperty(name)) {
                return parsers[name];
              } else {
                throw Error("SubParser named " + name + " not registered!");
              }
            }
          }
        };
        showdown.extension = function(name, ext) {
          "use strict";
          if (!showdown.helper.isString(name)) {
            throw Error("Extension 'name' must be a string");
          }
          name = showdown.helper.stdExtName(name);
          if (showdown.helper.isUndefined(ext)) {
            if (!extensions.hasOwnProperty(name)) {
              throw Error("Extension named " + name + " is not registered!");
            }
            return extensions[name];
          } else {
            if (typeof ext === "function") {
              ext = ext();
            }
            if (!showdown.helper.isArray(ext)) {
              ext = [ext];
            }
            var validExtension = validate(ext, name);
            if (validExtension.valid) {
              extensions[name] = ext;
            } else {
              throw Error(validExtension.error);
            }
          }
        };
        showdown.getAllExtensions = function() {
          "use strict";
          return extensions;
        };
        showdown.removeExtension = function(name) {
          "use strict";
          delete extensions[name];
        };
        showdown.resetExtensions = function() {
          "use strict";
          extensions = {};
        };
        function validate(extension, name) {
          "use strict";
          var errMsg = name ? "Error in " + name + " extension->" : "Error in unnamed extension", ret = {
            valid: true,
            error: ""
          };
          if (!showdown.helper.isArray(extension)) {
            extension = [extension];
          }
          for (var i = 0; i < extension.length; ++i) {
            var baseMsg = errMsg + " sub-extension " + i + ": ", ext = extension[i];
            if (typeof ext !== "object") {
              ret.valid = false;
              ret.error = baseMsg + "must be an object, but " + typeof ext + " given";
              return ret;
            }
            if (!showdown.helper.isString(ext.type)) {
              ret.valid = false;
              ret.error = baseMsg + 'property "type" must be a string, but ' + typeof ext.type + " given";
              return ret;
            }
            var type = ext.type = ext.type.toLowerCase();
            if (type === "language") {
              type = ext.type = "lang";
            }
            if (type === "html") {
              type = ext.type = "output";
            }
            if (type !== "lang" && type !== "output" && type !== "listener") {
              ret.valid = false;
              ret.error = baseMsg + "type " + type + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"';
              return ret;
            }
            if (type === "listener") {
              if (showdown.helper.isUndefined(ext.listeners)) {
                ret.valid = false;
                ret.error = baseMsg + '. Extensions of type "listener" must have a property called "listeners"';
                return ret;
              }
            } else {
              if (showdown.helper.isUndefined(ext.filter) && showdown.helper.isUndefined(ext.regex)) {
                ret.valid = false;
                ret.error = baseMsg + type + ' extensions must define either a "regex" property or a "filter" method';
                return ret;
              }
            }
            if (ext.listeners) {
              if (typeof ext.listeners !== "object") {
                ret.valid = false;
                ret.error = baseMsg + '"listeners" property must be an object but ' + typeof ext.listeners + " given";
                return ret;
              }
              for (var ln in ext.listeners) {
                if (ext.listeners.hasOwnProperty(ln)) {
                  if (typeof ext.listeners[ln] !== "function") {
                    ret.valid = false;
                    ret.error = baseMsg + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + ln + " must be a function but " + typeof ext.listeners[ln] + " given";
                    return ret;
                  }
                }
              }
            }
            if (ext.filter) {
              if (typeof ext.filter !== "function") {
                ret.valid = false;
                ret.error = baseMsg + '"filter" must be a function, but ' + typeof ext.filter + " given";
                return ret;
              }
            } else if (ext.regex) {
              if (showdown.helper.isString(ext.regex)) {
                ext.regex = new RegExp(ext.regex, "g");
              }
              if (!(ext.regex instanceof RegExp)) {
                ret.valid = false;
                ret.error = baseMsg + '"regex" property must either be a string or a RegExp object, but ' + typeof ext.regex + " given";
                return ret;
              }
              if (showdown.helper.isUndefined(ext.replace)) {
                ret.valid = false;
                ret.error = baseMsg + '"regex" extensions must implement a replace string or function';
                return ret;
              }
            }
          }
          return ret;
        }
        showdown.validateExtension = function(ext) {
          "use strict";
          var validateExtension = validate(ext, null);
          if (!validateExtension.valid) {
            console.warn(validateExtension.error);
            return false;
          }
          return true;
        };
        if (!showdown.hasOwnProperty("helper")) {
          showdown.helper = {};
        }
        showdown.helper.isString = function(a) {
          "use strict";
          return typeof a === "string" || a instanceof String;
        };
        showdown.helper.isFunction = function(a) {
          "use strict";
          var getType = {};
          return a && getType.toString.call(a) === "[object Function]";
        };
        showdown.helper.isArray = function(a) {
          "use strict";
          return Array.isArray(a);
        };
        showdown.helper.isUndefined = function(value) {
          "use strict";
          return typeof value === "undefined";
        };
        showdown.helper.forEach = function(obj, callback) {
          "use strict";
          if (showdown.helper.isUndefined(obj)) {
            throw new Error("obj param is required");
          }
          if (showdown.helper.isUndefined(callback)) {
            throw new Error("callback param is required");
          }
          if (!showdown.helper.isFunction(callback)) {
            throw new Error("callback param must be a function/closure");
          }
          if (typeof obj.forEach === "function") {
            obj.forEach(callback);
          } else if (showdown.helper.isArray(obj)) {
            for (var i = 0; i < obj.length; i++) {
              callback(obj[i], i, obj);
            }
          } else if (typeof obj === "object") {
            for (var prop in obj) {
              if (obj.hasOwnProperty(prop)) {
                callback(obj[prop], prop, obj);
              }
            }
          } else {
            throw new Error("obj does not seem to be an array or an iterable object");
          }
        };
        showdown.helper.stdExtName = function(s) {
          "use strict";
          return s.replace(/[_?*+\/\\.^-]/g, "").replace(/\s/g, "").toLowerCase();
        };
        function escapeCharactersCallback(wholeMatch, m1) {
          "use strict";
          var charCodeToEscape = m1.charCodeAt(0);
          return "\xA8E" + charCodeToEscape + "E";
        }
        showdown.helper.escapeCharactersCallback = escapeCharactersCallback;
        showdown.helper.escapeCharacters = function(text, charsToEscape, afterBackslash) {
          "use strict";
          var regexString = "([" + charsToEscape.replace(/([\[\]\\])/g, "\\$1") + "])";
          if (afterBackslash) {
            regexString = "\\\\" + regexString;
          }
          var regex = new RegExp(regexString, "g");
          text = text.replace(regex, escapeCharactersCallback);
          return text;
        };
        showdown.helper.unescapeHTMLEntities = function(txt) {
          "use strict";
          return txt.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
        };
        var rgxFindMatchPos = function(str, left, right, flags) {
          "use strict";
          var f = flags || "", g = f.indexOf("g") > -1, x = new RegExp(left + "|" + right, "g" + f.replace(/g/g, "")), l = new RegExp(left, f.replace(/g/g, "")), pos = [], t, s, m, start, end;
          do {
            t = 0;
            while (m = x.exec(str)) {
              if (l.test(m[0])) {
                if (!t++) {
                  s = x.lastIndex;
                  start = s - m[0].length;
                }
              } else if (t) {
                if (!--t) {
                  end = m.index + m[0].length;
                  var obj = {
                    left: { start, end: s },
                    match: { start: s, end: m.index },
                    right: { start: m.index, end },
                    wholeMatch: { start, end }
                  };
                  pos.push(obj);
                  if (!g) {
                    return pos;
                  }
                }
              }
            }
          } while (t && (x.lastIndex = s));
          return pos;
        };
        showdown.helper.matchRecursiveRegExp = function(str, left, right, flags) {
          "use strict";
          var matchPos = rgxFindMatchPos(str, left, right, flags), results = [];
          for (var i = 0; i < matchPos.length; ++i) {
            results.push([
              str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end),
              str.slice(matchPos[i].match.start, matchPos[i].match.end),
              str.slice(matchPos[i].left.start, matchPos[i].left.end),
              str.slice(matchPos[i].right.start, matchPos[i].right.end)
            ]);
          }
          return results;
        };
        showdown.helper.replaceRecursiveRegExp = function(str, replacement, left, right, flags) {
          "use strict";
          if (!showdown.helper.isFunction(replacement)) {
            var repStr = replacement;
            replacement = function() {
              return repStr;
            };
          }
          var matchPos = rgxFindMatchPos(str, left, right, flags), finalStr = str, lng = matchPos.length;
          if (lng > 0) {
            var bits = [];
            if (matchPos[0].wholeMatch.start !== 0) {
              bits.push(str.slice(0, matchPos[0].wholeMatch.start));
            }
            for (var i = 0; i < lng; ++i) {
              bits.push(replacement(str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end), str.slice(matchPos[i].match.start, matchPos[i].match.end), str.slice(matchPos[i].left.start, matchPos[i].left.end), str.slice(matchPos[i].right.start, matchPos[i].right.end)));
              if (i < lng - 1) {
                bits.push(str.slice(matchPos[i].wholeMatch.end, matchPos[i + 1].wholeMatch.start));
              }
            }
            if (matchPos[lng - 1].wholeMatch.end < str.length) {
              bits.push(str.slice(matchPos[lng - 1].wholeMatch.end));
            }
            finalStr = bits.join("");
          }
          return finalStr;
        };
        showdown.helper.regexIndexOf = function(str, regex, fromIndex) {
          "use strict";
          if (!showdown.helper.isString(str)) {
            throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
          }
          if (regex instanceof RegExp === false) {
            throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
          }
          var indexOf = str.substring(fromIndex || 0).search(regex);
          return indexOf >= 0 ? indexOf + (fromIndex || 0) : indexOf;
        };
        showdown.helper.splitAtIndex = function(str, index) {
          "use strict";
          if (!showdown.helper.isString(str)) {
            throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
          }
          return [str.substring(0, index), str.substring(index)];
        };
        showdown.helper.encodeEmailAddress = function(mail) {
          "use strict";
          var encode = [
            function(ch) {
              return "&#" + ch.charCodeAt(0) + ";";
            },
            function(ch) {
              return "&#x" + ch.charCodeAt(0).toString(16) + ";";
            },
            function(ch) {
              return ch;
            }
          ];
          mail = mail.replace(/./g, function(ch) {
            if (ch === "@") {
              ch = encode[Math.floor(Math.random() * 2)](ch);
            } else {
              var r = Math.random();
              ch = r > 0.9 ? encode[2](ch) : r > 0.45 ? encode[1](ch) : encode[0](ch);
            }
            return ch;
          });
          return mail;
        };
        showdown.helper.padEnd = function padEnd(str, targetLength, padString) {
          "use strict";
          targetLength = targetLength >> 0;
          padString = String(padString || " ");
          if (str.length > targetLength) {
            return String(str);
          } else {
            targetLength = targetLength - str.length;
            if (targetLength > padString.length) {
              padString += padString.repeat(targetLength / padString.length);
            }
            return String(str) + padString.slice(0, targetLength);
          }
        };
        if (typeof console === "undefined") {
          console = {
            warn: function(msg) {
              "use strict";
              alert(msg);
            },
            log: function(msg) {
              "use strict";
              alert(msg);
            },
            error: function(msg) {
              "use strict";
              throw msg;
            }
          };
        }
        showdown.helper.regexes = {
          asteriskDashAndColon: /([*_:~])/g
        };
        showdown.helper.emojis = {
          "+1": "\u{1F44D}",
          "-1": "\u{1F44E}",
          "100": "\u{1F4AF}",
          "1234": "\u{1F522}",
          "1st_place_medal": "\u{1F947}",
          "2nd_place_medal": "\u{1F948}",
          "3rd_place_medal": "\u{1F949}",
          "8ball": "\u{1F3B1}",
          "a": "\u{1F170}\uFE0F",
          "ab": "\u{1F18E}",
          "abc": "\u{1F524}",
          "abcd": "\u{1F521}",
          "accept": "\u{1F251}",
          "aerial_tramway": "\u{1F6A1}",
          "airplane": "\u2708\uFE0F",
          "alarm_clock": "\u23F0",
          "alembic": "\u2697\uFE0F",
          "alien": "\u{1F47D}",
          "ambulance": "\u{1F691}",
          "amphora": "\u{1F3FA}",
          "anchor": "\u2693\uFE0F",
          "angel": "\u{1F47C}",
          "anger": "\u{1F4A2}",
          "angry": "\u{1F620}",
          "anguished": "\u{1F627}",
          "ant": "\u{1F41C}",
          "apple": "\u{1F34E}",
          "aquarius": "\u2652\uFE0F",
          "aries": "\u2648\uFE0F",
          "arrow_backward": "\u25C0\uFE0F",
          "arrow_double_down": "\u23EC",
          "arrow_double_up": "\u23EB",
          "arrow_down": "\u2B07\uFE0F",
          "arrow_down_small": "\u{1F53D}",
          "arrow_forward": "\u25B6\uFE0F",
          "arrow_heading_down": "\u2935\uFE0F",
          "arrow_heading_up": "\u2934\uFE0F",
          "arrow_left": "\u2B05\uFE0F",
          "arrow_lower_left": "\u2199\uFE0F",
          "arrow_lower_right": "\u2198\uFE0F",
          "arrow_right": "\u27A1\uFE0F",
          "arrow_right_hook": "\u21AA\uFE0F",
          "arrow_up": "\u2B06\uFE0F",
          "arrow_up_down": "\u2195\uFE0F",
          "arrow_up_small": "\u{1F53C}",
          "arrow_upper_left": "\u2196\uFE0F",
          "arrow_upper_right": "\u2197\uFE0F",
          "arrows_clockwise": "\u{1F503}",
          "arrows_counterclockwise": "\u{1F504}",
          "art": "\u{1F3A8}",
          "articulated_lorry": "\u{1F69B}",
          "artificial_satellite": "\u{1F6F0}",
          "astonished": "\u{1F632}",
          "athletic_shoe": "\u{1F45F}",
          "atm": "\u{1F3E7}",
          "atom_symbol": "\u269B\uFE0F",
          "avocado": "\u{1F951}",
          "b": "\u{1F171}\uFE0F",
          "baby": "\u{1F476}",
          "baby_bottle": "\u{1F37C}",
          "baby_chick": "\u{1F424}",
          "baby_symbol": "\u{1F6BC}",
          "back": "\u{1F519}",
          "bacon": "\u{1F953}",
          "badminton": "\u{1F3F8}",
          "baggage_claim": "\u{1F6C4}",
          "baguette_bread": "\u{1F956}",
          "balance_scale": "\u2696\uFE0F",
          "balloon": "\u{1F388}",
          "ballot_box": "\u{1F5F3}",
          "ballot_box_with_check": "\u2611\uFE0F",
          "bamboo": "\u{1F38D}",
          "banana": "\u{1F34C}",
          "bangbang": "\u203C\uFE0F",
          "bank": "\u{1F3E6}",
          "bar_chart": "\u{1F4CA}",
          "barber": "\u{1F488}",
          "baseball": "\u26BE\uFE0F",
          "basketball": "\u{1F3C0}",
          "basketball_man": "\u26F9\uFE0F",
          "basketball_woman": "\u26F9\uFE0F&zwj;\u2640\uFE0F",
          "bat": "\u{1F987}",
          "bath": "\u{1F6C0}",
          "bathtub": "\u{1F6C1}",
          "battery": "\u{1F50B}",
          "beach_umbrella": "\u{1F3D6}",
          "bear": "\u{1F43B}",
          "bed": "\u{1F6CF}",
          "bee": "\u{1F41D}",
          "beer": "\u{1F37A}",
          "beers": "\u{1F37B}",
          "beetle": "\u{1F41E}",
          "beginner": "\u{1F530}",
          "bell": "\u{1F514}",
          "bellhop_bell": "\u{1F6CE}",
          "bento": "\u{1F371}",
          "biking_man": "\u{1F6B4}",
          "bike": "\u{1F6B2}",
          "biking_woman": "\u{1F6B4}&zwj;\u2640\uFE0F",
          "bikini": "\u{1F459}",
          "biohazard": "\u2623\uFE0F",
          "bird": "\u{1F426}",
          "birthday": "\u{1F382}",
          "black_circle": "\u26AB\uFE0F",
          "black_flag": "\u{1F3F4}",
          "black_heart": "\u{1F5A4}",
          "black_joker": "\u{1F0CF}",
          "black_large_square": "\u2B1B\uFE0F",
          "black_medium_small_square": "\u25FE\uFE0F",
          "black_medium_square": "\u25FC\uFE0F",
          "black_nib": "\u2712\uFE0F",
          "black_small_square": "\u25AA\uFE0F",
          "black_square_button": "\u{1F532}",
          "blonde_man": "\u{1F471}",
          "blonde_woman": "\u{1F471}&zwj;\u2640\uFE0F",
          "blossom": "\u{1F33C}",
          "blowfish": "\u{1F421}",
          "blue_book": "\u{1F4D8}",
          "blue_car": "\u{1F699}",
          "blue_heart": "\u{1F499}",
          "blush": "\u{1F60A}",
          "boar": "\u{1F417}",
          "boat": "\u26F5\uFE0F",
          "bomb": "\u{1F4A3}",
          "book": "\u{1F4D6}",
          "bookmark": "\u{1F516}",
          "bookmark_tabs": "\u{1F4D1}",
          "books": "\u{1F4DA}",
          "boom": "\u{1F4A5}",
          "boot": "\u{1F462}",
          "bouquet": "\u{1F490}",
          "bowing_man": "\u{1F647}",
          "bow_and_arrow": "\u{1F3F9}",
          "bowing_woman": "\u{1F647}&zwj;\u2640\uFE0F",
          "bowling": "\u{1F3B3}",
          "boxing_glove": "\u{1F94A}",
          "boy": "\u{1F466}",
          "bread": "\u{1F35E}",
          "bride_with_veil": "\u{1F470}",
          "bridge_at_night": "\u{1F309}",
          "briefcase": "\u{1F4BC}",
          "broken_heart": "\u{1F494}",
          "bug": "\u{1F41B}",
          "building_construction": "\u{1F3D7}",
          "bulb": "\u{1F4A1}",
          "bullettrain_front": "\u{1F685}",
          "bullettrain_side": "\u{1F684}",
          "burrito": "\u{1F32F}",
          "bus": "\u{1F68C}",
          "business_suit_levitating": "\u{1F574}",
          "busstop": "\u{1F68F}",
          "bust_in_silhouette": "\u{1F464}",
          "busts_in_silhouette": "\u{1F465}",
          "butterfly": "\u{1F98B}",
          "cactus": "\u{1F335}",
          "cake": "\u{1F370}",
          "calendar": "\u{1F4C6}",
          "call_me_hand": "\u{1F919}",
          "calling": "\u{1F4F2}",
          "camel": "\u{1F42B}",
          "camera": "\u{1F4F7}",
          "camera_flash": "\u{1F4F8}",
          "camping": "\u{1F3D5}",
          "cancer": "\u264B\uFE0F",
          "candle": "\u{1F56F}",
          "candy": "\u{1F36C}",
          "canoe": "\u{1F6F6}",
          "capital_abcd": "\u{1F520}",
          "capricorn": "\u2651\uFE0F",
          "car": "\u{1F697}",
          "card_file_box": "\u{1F5C3}",
          "card_index": "\u{1F4C7}",
          "card_index_dividers": "\u{1F5C2}",
          "carousel_horse": "\u{1F3A0}",
          "carrot": "\u{1F955}",
          "cat": "\u{1F431}",
          "cat2": "\u{1F408}",
          "cd": "\u{1F4BF}",
          "chains": "\u26D3",
          "champagne": "\u{1F37E}",
          "chart": "\u{1F4B9}",
          "chart_with_downwards_trend": "\u{1F4C9}",
          "chart_with_upwards_trend": "\u{1F4C8}",
          "checkered_flag": "\u{1F3C1}",
          "cheese": "\u{1F9C0}",
          "cherries": "\u{1F352}",
          "cherry_blossom": "\u{1F338}",
          "chestnut": "\u{1F330}",
          "chicken": "\u{1F414}",
          "children_crossing": "\u{1F6B8}",
          "chipmunk": "\u{1F43F}",
          "chocolate_bar": "\u{1F36B}",
          "christmas_tree": "\u{1F384}",
          "church": "\u26EA\uFE0F",
          "cinema": "\u{1F3A6}",
          "circus_tent": "\u{1F3AA}",
          "city_sunrise": "\u{1F307}",
          "city_sunset": "\u{1F306}",
          "cityscape": "\u{1F3D9}",
          "cl": "\u{1F191}",
          "clamp": "\u{1F5DC}",
          "clap": "\u{1F44F}",
          "clapper": "\u{1F3AC}",
          "classical_building": "\u{1F3DB}",
          "clinking_glasses": "\u{1F942}",
          "clipboard": "\u{1F4CB}",
          "clock1": "\u{1F550}",
          "clock10": "\u{1F559}",
          "clock1030": "\u{1F565}",
          "clock11": "\u{1F55A}",
          "clock1130": "\u{1F566}",
          "clock12": "\u{1F55B}",
          "clock1230": "\u{1F567}",
          "clock130": "\u{1F55C}",
          "clock2": "\u{1F551}",
          "clock230": "\u{1F55D}",
          "clock3": "\u{1F552}",
          "clock330": "\u{1F55E}",
          "clock4": "\u{1F553}",
          "clock430": "\u{1F55F}",
          "clock5": "\u{1F554}",
          "clock530": "\u{1F560}",
          "clock6": "\u{1F555}",
          "clock630": "\u{1F561}",
          "clock7": "\u{1F556}",
          "clock730": "\u{1F562}",
          "clock8": "\u{1F557}",
          "clock830": "\u{1F563}",
          "clock9": "\u{1F558}",
          "clock930": "\u{1F564}",
          "closed_book": "\u{1F4D5}",
          "closed_lock_with_key": "\u{1F510}",
          "closed_umbrella": "\u{1F302}",
          "cloud": "\u2601\uFE0F",
          "cloud_with_lightning": "\u{1F329}",
          "cloud_with_lightning_and_rain": "\u26C8",
          "cloud_with_rain": "\u{1F327}",
          "cloud_with_snow": "\u{1F328}",
          "clown_face": "\u{1F921}",
          "clubs": "\u2663\uFE0F",
          "cocktail": "\u{1F378}",
          "coffee": "\u2615\uFE0F",
          "coffin": "\u26B0\uFE0F",
          "cold_sweat": "\u{1F630}",
          "comet": "\u2604\uFE0F",
          "computer": "\u{1F4BB}",
          "computer_mouse": "\u{1F5B1}",
          "confetti_ball": "\u{1F38A}",
          "confounded": "\u{1F616}",
          "confused": "\u{1F615}",
          "congratulations": "\u3297\uFE0F",
          "construction": "\u{1F6A7}",
          "construction_worker_man": "\u{1F477}",
          "construction_worker_woman": "\u{1F477}&zwj;\u2640\uFE0F",
          "control_knobs": "\u{1F39B}",
          "convenience_store": "\u{1F3EA}",
          "cookie": "\u{1F36A}",
          "cool": "\u{1F192}",
          "policeman": "\u{1F46E}",
          "copyright": "\xA9\uFE0F",
          "corn": "\u{1F33D}",
          "couch_and_lamp": "\u{1F6CB}",
          "couple": "\u{1F46B}",
          "couple_with_heart_woman_man": "\u{1F491}",
          "couple_with_heart_man_man": "\u{1F468}&zwj;\u2764\uFE0F&zwj;\u{1F468}",
          "couple_with_heart_woman_woman": "\u{1F469}&zwj;\u2764\uFE0F&zwj;\u{1F469}",
          "couplekiss_man_man": "\u{1F468}&zwj;\u2764\uFE0F&zwj;\u{1F48B}&zwj;\u{1F468}",
          "couplekiss_man_woman": "\u{1F48F}",
          "couplekiss_woman_woman": "\u{1F469}&zwj;\u2764\uFE0F&zwj;\u{1F48B}&zwj;\u{1F469}",
          "cow": "\u{1F42E}",
          "cow2": "\u{1F404}",
          "cowboy_hat_face": "\u{1F920}",
          "crab": "\u{1F980}",
          "crayon": "\u{1F58D}",
          "credit_card": "\u{1F4B3}",
          "crescent_moon": "\u{1F319}",
          "cricket": "\u{1F3CF}",
          "crocodile": "\u{1F40A}",
          "croissant": "\u{1F950}",
          "crossed_fingers": "\u{1F91E}",
          "crossed_flags": "\u{1F38C}",
          "crossed_swords": "\u2694\uFE0F",
          "crown": "\u{1F451}",
          "cry": "\u{1F622}",
          "crying_cat_face": "\u{1F63F}",
          "crystal_ball": "\u{1F52E}",
          "cucumber": "\u{1F952}",
          "cupid": "\u{1F498}",
          "curly_loop": "\u27B0",
          "currency_exchange": "\u{1F4B1}",
          "curry": "\u{1F35B}",
          "custard": "\u{1F36E}",
          "customs": "\u{1F6C3}",
          "cyclone": "\u{1F300}",
          "dagger": "\u{1F5E1}",
          "dancer": "\u{1F483}",
          "dancing_women": "\u{1F46F}",
          "dancing_men": "\u{1F46F}&zwj;\u2642\uFE0F",
          "dango": "\u{1F361}",
          "dark_sunglasses": "\u{1F576}",
          "dart": "\u{1F3AF}",
          "dash": "\u{1F4A8}",
          "date": "\u{1F4C5}",
          "deciduous_tree": "\u{1F333}",
          "deer": "\u{1F98C}",
          "department_store": "\u{1F3EC}",
          "derelict_house": "\u{1F3DA}",
          "desert": "\u{1F3DC}",
          "desert_island": "\u{1F3DD}",
          "desktop_computer": "\u{1F5A5}",
          "male_detective": "\u{1F575}\uFE0F",
          "diamond_shape_with_a_dot_inside": "\u{1F4A0}",
          "diamonds": "\u2666\uFE0F",
          "disappointed": "\u{1F61E}",
          "disappointed_relieved": "\u{1F625}",
          "dizzy": "\u{1F4AB}",
          "dizzy_face": "\u{1F635}",
          "do_not_litter": "\u{1F6AF}",
          "dog": "\u{1F436}",
          "dog2": "\u{1F415}",
          "dollar": "\u{1F4B5}",
          "dolls": "\u{1F38E}",
          "dolphin": "\u{1F42C}",
          "door": "\u{1F6AA}",
          "doughnut": "\u{1F369}",
          "dove": "\u{1F54A}",
          "dragon": "\u{1F409}",
          "dragon_face": "\u{1F432}",
          "dress": "\u{1F457}",
          "dromedary_camel": "\u{1F42A}",
          "drooling_face": "\u{1F924}",
          "droplet": "\u{1F4A7}",
          "drum": "\u{1F941}",
          "duck": "\u{1F986}",
          "dvd": "\u{1F4C0}",
          "e-mail": "\u{1F4E7}",
          "eagle": "\u{1F985}",
          "ear": "\u{1F442}",
          "ear_of_rice": "\u{1F33E}",
          "earth_africa": "\u{1F30D}",
          "earth_americas": "\u{1F30E}",
          "earth_asia": "\u{1F30F}",
          "egg": "\u{1F95A}",
          "eggplant": "\u{1F346}",
          "eight_pointed_black_star": "\u2734\uFE0F",
          "eight_spoked_asterisk": "\u2733\uFE0F",
          "electric_plug": "\u{1F50C}",
          "elephant": "\u{1F418}",
          "email": "\u2709\uFE0F",
          "end": "\u{1F51A}",
          "envelope_with_arrow": "\u{1F4E9}",
          "euro": "\u{1F4B6}",
          "european_castle": "\u{1F3F0}",
          "european_post_office": "\u{1F3E4}",
          "evergreen_tree": "\u{1F332}",
          "exclamation": "\u2757\uFE0F",
          "expressionless": "\u{1F611}",
          "eye": "\u{1F441}",
          "eye_speech_bubble": "\u{1F441}&zwj;\u{1F5E8}",
          "eyeglasses": "\u{1F453}",
          "eyes": "\u{1F440}",
          "face_with_head_bandage": "\u{1F915}",
          "face_with_thermometer": "\u{1F912}",
          "fist_oncoming": "\u{1F44A}",
          "factory": "\u{1F3ED}",
          "fallen_leaf": "\u{1F342}",
          "family_man_woman_boy": "\u{1F46A}",
          "family_man_boy": "\u{1F468}&zwj;\u{1F466}",
          "family_man_boy_boy": "\u{1F468}&zwj;\u{1F466}&zwj;\u{1F466}",
          "family_man_girl": "\u{1F468}&zwj;\u{1F467}",
          "family_man_girl_boy": "\u{1F468}&zwj;\u{1F467}&zwj;\u{1F466}",
          "family_man_girl_girl": "\u{1F468}&zwj;\u{1F467}&zwj;\u{1F467}",
          "family_man_man_boy": "\u{1F468}&zwj;\u{1F468}&zwj;\u{1F466}",
          "family_man_man_boy_boy": "\u{1F468}&zwj;\u{1F468}&zwj;\u{1F466}&zwj;\u{1F466}",
          "family_man_man_girl": "\u{1F468}&zwj;\u{1F468}&zwj;\u{1F467}",
          "family_man_man_girl_boy": "\u{1F468}&zwj;\u{1F468}&zwj;\u{1F467}&zwj;\u{1F466}",
          "family_man_man_girl_girl": "\u{1F468}&zwj;\u{1F468}&zwj;\u{1F467}&zwj;\u{1F467}",
          "family_man_woman_boy_boy": "\u{1F468}&zwj;\u{1F469}&zwj;\u{1F466}&zwj;\u{1F466}",
          "family_man_woman_girl": "\u{1F468}&zwj;\u{1F469}&zwj;\u{1F467}",
          "family_man_woman_girl_boy": "\u{1F468}&zwj;\u{1F469}&zwj;\u{1F467}&zwj;\u{1F466}",
          "family_man_woman_girl_girl": "\u{1F468}&zwj;\u{1F469}&zwj;\u{1F467}&zwj;\u{1F467}",
          "family_woman_boy": "\u{1F469}&zwj;\u{1F466}",
          "family_woman_boy_boy": "\u{1F469}&zwj;\u{1F466}&zwj;\u{1F466}",
          "family_woman_girl": "\u{1F469}&zwj;\u{1F467}",
          "family_woman_girl_boy": "\u{1F469}&zwj;\u{1F467}&zwj;\u{1F466}",
          "family_woman_girl_girl": "\u{1F469}&zwj;\u{1F467}&zwj;\u{1F467}",
          "family_woman_woman_boy": "\u{1F469}&zwj;\u{1F469}&zwj;\u{1F466}",
          "family_woman_woman_boy_boy": "\u{1F469}&zwj;\u{1F469}&zwj;\u{1F466}&zwj;\u{1F466}",
          "family_woman_woman_girl": "\u{1F469}&zwj;\u{1F469}&zwj;\u{1F467}",
          "family_woman_woman_girl_boy": "\u{1F469}&zwj;\u{1F469}&zwj;\u{1F467}&zwj;\u{1F466}",
          "family_woman_woman_girl_girl": "\u{1F469}&zwj;\u{1F469}&zwj;\u{1F467}&zwj;\u{1F467}",
          "fast_forward": "\u23E9",
          "fax": "\u{1F4E0}",
          "fearful": "\u{1F628}",
          "feet": "\u{1F43E}",
          "female_detective": "\u{1F575}\uFE0F&zwj;\u2640\uFE0F",
          "ferris_wheel": "\u{1F3A1}",
          "ferry": "\u26F4",
          "field_hockey": "\u{1F3D1}",
          "file_cabinet": "\u{1F5C4}",
          "file_folder": "\u{1F4C1}",
          "film_projector": "\u{1F4FD}",
          "film_strip": "\u{1F39E}",
          "fire": "\u{1F525}",
          "fire_engine": "\u{1F692}",
          "fireworks": "\u{1F386}",
          "first_quarter_moon": "\u{1F313}",
          "first_quarter_moon_with_face": "\u{1F31B}",
          "fish": "\u{1F41F}",
          "fish_cake": "\u{1F365}",
          "fishing_pole_and_fish": "\u{1F3A3}",
          "fist_raised": "\u270A",
          "fist_left": "\u{1F91B}",
          "fist_right": "\u{1F91C}",
          "flags": "\u{1F38F}",
          "flashlight": "\u{1F526}",
          "fleur_de_lis": "\u269C\uFE0F",
          "flight_arrival": "\u{1F6EC}",
          "flight_departure": "\u{1F6EB}",
          "floppy_disk": "\u{1F4BE}",
          "flower_playing_cards": "\u{1F3B4}",
          "flushed": "\u{1F633}",
          "fog": "\u{1F32B}",
          "foggy": "\u{1F301}",
          "football": "\u{1F3C8}",
          "footprints": "\u{1F463}",
          "fork_and_knife": "\u{1F374}",
          "fountain": "\u26F2\uFE0F",
          "fountain_pen": "\u{1F58B}",
          "four_leaf_clover": "\u{1F340}",
          "fox_face": "\u{1F98A}",
          "framed_picture": "\u{1F5BC}",
          "free": "\u{1F193}",
          "fried_egg": "\u{1F373}",
          "fried_shrimp": "\u{1F364}",
          "fries": "\u{1F35F}",
          "frog": "\u{1F438}",
          "frowning": "\u{1F626}",
          "frowning_face": "\u2639\uFE0F",
          "frowning_man": "\u{1F64D}&zwj;\u2642\uFE0F",
          "frowning_woman": "\u{1F64D}",
          "middle_finger": "\u{1F595}",
          "fuelpump": "\u26FD\uFE0F",
          "full_moon": "\u{1F315}",
          "full_moon_with_face": "\u{1F31D}",
          "funeral_urn": "\u26B1\uFE0F",
          "game_die": "\u{1F3B2}",
          "gear": "\u2699\uFE0F",
          "gem": "\u{1F48E}",
          "gemini": "\u264A\uFE0F",
          "ghost": "\u{1F47B}",
          "gift": "\u{1F381}",
          "gift_heart": "\u{1F49D}",
          "girl": "\u{1F467}",
          "globe_with_meridians": "\u{1F310}",
          "goal_net": "\u{1F945}",
          "goat": "\u{1F410}",
          "golf": "\u26F3\uFE0F",
          "golfing_man": "\u{1F3CC}\uFE0F",
          "golfing_woman": "\u{1F3CC}\uFE0F&zwj;\u2640\uFE0F",
          "gorilla": "\u{1F98D}",
          "grapes": "\u{1F347}",
          "green_apple": "\u{1F34F}",
          "green_book": "\u{1F4D7}",
          "green_heart": "\u{1F49A}",
          "green_salad": "\u{1F957}",
          "grey_exclamation": "\u2755",
          "grey_question": "\u2754",
          "grimacing": "\u{1F62C}",
          "grin": "\u{1F601}",
          "grinning": "\u{1F600}",
          "guardsman": "\u{1F482}",
          "guardswoman": "\u{1F482}&zwj;\u2640\uFE0F",
          "guitar": "\u{1F3B8}",
          "gun": "\u{1F52B}",
          "haircut_woman": "\u{1F487}",
          "haircut_man": "\u{1F487}&zwj;\u2642\uFE0F",
          "hamburger": "\u{1F354}",
          "hammer": "\u{1F528}",
          "hammer_and_pick": "\u2692",
          "hammer_and_wrench": "\u{1F6E0}",
          "hamster": "\u{1F439}",
          "hand": "\u270B",
          "handbag": "\u{1F45C}",
          "handshake": "\u{1F91D}",
          "hankey": "\u{1F4A9}",
          "hatched_chick": "\u{1F425}",
          "hatching_chick": "\u{1F423}",
          "headphones": "\u{1F3A7}",
          "hear_no_evil": "\u{1F649}",
          "heart": "\u2764\uFE0F",
          "heart_decoration": "\u{1F49F}",
          "heart_eyes": "\u{1F60D}",
          "heart_eyes_cat": "\u{1F63B}",
          "heartbeat": "\u{1F493}",
          "heartpulse": "\u{1F497}",
          "hearts": "\u2665\uFE0F",
          "heavy_check_mark": "\u2714\uFE0F",
          "heavy_division_sign": "\u2797",
          "heavy_dollar_sign": "\u{1F4B2}",
          "heavy_heart_exclamation": "\u2763\uFE0F",
          "heavy_minus_sign": "\u2796",
          "heavy_multiplication_x": "\u2716\uFE0F",
          "heavy_plus_sign": "\u2795",
          "helicopter": "\u{1F681}",
          "herb": "\u{1F33F}",
          "hibiscus": "\u{1F33A}",
          "high_brightness": "\u{1F506}",
          "high_heel": "\u{1F460}",
          "hocho": "\u{1F52A}",
          "hole": "\u{1F573}",
          "honey_pot": "\u{1F36F}",
          "horse": "\u{1F434}",
          "horse_racing": "\u{1F3C7}",
          "hospital": "\u{1F3E5}",
          "hot_pepper": "\u{1F336}",
          "hotdog": "\u{1F32D}",
          "hotel": "\u{1F3E8}",
          "hotsprings": "\u2668\uFE0F",
          "hourglass": "\u231B\uFE0F",
          "hourglass_flowing_sand": "\u23F3",
          "house": "\u{1F3E0}",
          "house_with_garden": "\u{1F3E1}",
          "houses": "\u{1F3D8}",
          "hugs": "\u{1F917}",
          "hushed": "\u{1F62F}",
          "ice_cream": "\u{1F368}",
          "ice_hockey": "\u{1F3D2}",
          "ice_skate": "\u26F8",
          "icecream": "\u{1F366}",
          "id": "\u{1F194}",
          "ideograph_advantage": "\u{1F250}",
          "imp": "\u{1F47F}",
          "inbox_tray": "\u{1F4E5}",
          "incoming_envelope": "\u{1F4E8}",
          "tipping_hand_woman": "\u{1F481}",
          "information_source": "\u2139\uFE0F",
          "innocent": "\u{1F607}",
          "interrobang": "\u2049\uFE0F",
          "iphone": "\u{1F4F1}",
          "izakaya_lantern": "\u{1F3EE}",
          "jack_o_lantern": "\u{1F383}",
          "japan": "\u{1F5FE}",
          "japanese_castle": "\u{1F3EF}",
          "japanese_goblin": "\u{1F47A}",
          "japanese_ogre": "\u{1F479}",
          "jeans": "\u{1F456}",
          "joy": "\u{1F602}",
          "joy_cat": "\u{1F639}",
          "joystick": "\u{1F579}",
          "kaaba": "\u{1F54B}",
          "key": "\u{1F511}",
          "keyboard": "\u2328\uFE0F",
          "keycap_ten": "\u{1F51F}",
          "kick_scooter": "\u{1F6F4}",
          "kimono": "\u{1F458}",
          "kiss": "\u{1F48B}",
          "kissing": "\u{1F617}",
          "kissing_cat": "\u{1F63D}",
          "kissing_closed_eyes": "\u{1F61A}",
          "kissing_heart": "\u{1F618}",
          "kissing_smiling_eyes": "\u{1F619}",
          "kiwi_fruit": "\u{1F95D}",
          "koala": "\u{1F428}",
          "koko": "\u{1F201}",
          "label": "\u{1F3F7}",
          "large_blue_circle": "\u{1F535}",
          "large_blue_diamond": "\u{1F537}",
          "large_orange_diamond": "\u{1F536}",
          "last_quarter_moon": "\u{1F317}",
          "last_quarter_moon_with_face": "\u{1F31C}",
          "latin_cross": "\u271D\uFE0F",
          "laughing": "\u{1F606}",
          "leaves": "\u{1F343}",
          "ledger": "\u{1F4D2}",
          "left_luggage": "\u{1F6C5}",
          "left_right_arrow": "\u2194\uFE0F",
          "leftwards_arrow_with_hook": "\u21A9\uFE0F",
          "lemon": "\u{1F34B}",
          "leo": "\u264C\uFE0F",
          "leopard": "\u{1F406}",
          "level_slider": "\u{1F39A}",
          "libra": "\u264E\uFE0F",
          "light_rail": "\u{1F688}",
          "link": "\u{1F517}",
          "lion": "\u{1F981}",
          "lips": "\u{1F444}",
          "lipstick": "\u{1F484}",
          "lizard": "\u{1F98E}",
          "lock": "\u{1F512}",
          "lock_with_ink_pen": "\u{1F50F}",
          "lollipop": "\u{1F36D}",
          "loop": "\u27BF",
          "loud_sound": "\u{1F50A}",
          "loudspeaker": "\u{1F4E2}",
          "love_hotel": "\u{1F3E9}",
          "love_letter": "\u{1F48C}",
          "low_brightness": "\u{1F505}",
          "lying_face": "\u{1F925}",
          "m": "\u24C2\uFE0F",
          "mag": "\u{1F50D}",
          "mag_right": "\u{1F50E}",
          "mahjong": "\u{1F004}\uFE0F",
          "mailbox": "\u{1F4EB}",
          "mailbox_closed": "\u{1F4EA}",
          "mailbox_with_mail": "\u{1F4EC}",
          "mailbox_with_no_mail": "\u{1F4ED}",
          "man": "\u{1F468}",
          "man_artist": "\u{1F468}&zwj;\u{1F3A8}",
          "man_astronaut": "\u{1F468}&zwj;\u{1F680}",
          "man_cartwheeling": "\u{1F938}&zwj;\u2642\uFE0F",
          "man_cook": "\u{1F468}&zwj;\u{1F373}",
          "man_dancing": "\u{1F57A}",
          "man_facepalming": "\u{1F926}&zwj;\u2642\uFE0F",
          "man_factory_worker": "\u{1F468}&zwj;\u{1F3ED}",
          "man_farmer": "\u{1F468}&zwj;\u{1F33E}",
          "man_firefighter": "\u{1F468}&zwj;\u{1F692}",
          "man_health_worker": "\u{1F468}&zwj;\u2695\uFE0F",
          "man_in_tuxedo": "\u{1F935}",
          "man_judge": "\u{1F468}&zwj;\u2696\uFE0F",
          "man_juggling": "\u{1F939}&zwj;\u2642\uFE0F",
          "man_mechanic": "\u{1F468}&zwj;\u{1F527}",
          "man_office_worker": "\u{1F468}&zwj;\u{1F4BC}",
          "man_pilot": "\u{1F468}&zwj;\u2708\uFE0F",
          "man_playing_handball": "\u{1F93E}&zwj;\u2642\uFE0F",
          "man_playing_water_polo": "\u{1F93D}&zwj;\u2642\uFE0F",
          "man_scientist": "\u{1F468}&zwj;\u{1F52C}",
          "man_shrugging": "\u{1F937}&zwj;\u2642\uFE0F",
          "man_singer": "\u{1F468}&zwj;\u{1F3A4}",
          "man_student": "\u{1F468}&zwj;\u{1F393}",
          "man_teacher": "\u{1F468}&zwj;\u{1F3EB}",
          "man_technologist": "\u{1F468}&zwj;\u{1F4BB}",
          "man_with_gua_pi_mao": "\u{1F472}",
          "man_with_turban": "\u{1F473}",
          "tangerine": "\u{1F34A}",
          "mans_shoe": "\u{1F45E}",
          "mantelpiece_clock": "\u{1F570}",
          "maple_leaf": "\u{1F341}",
          "martial_arts_uniform": "\u{1F94B}",
          "mask": "\u{1F637}",
          "massage_woman": "\u{1F486}",
          "massage_man": "\u{1F486}&zwj;\u2642\uFE0F",
          "meat_on_bone": "\u{1F356}",
          "medal_military": "\u{1F396}",
          "medal_sports": "\u{1F3C5}",
          "mega": "\u{1F4E3}",
          "melon": "\u{1F348}",
          "memo": "\u{1F4DD}",
          "men_wrestling": "\u{1F93C}&zwj;\u2642\uFE0F",
          "menorah": "\u{1F54E}",
          "mens": "\u{1F6B9}",
          "metal": "\u{1F918}",
          "metro": "\u{1F687}",
          "microphone": "\u{1F3A4}",
          "microscope": "\u{1F52C}",
          "milk_glass": "\u{1F95B}",
          "milky_way": "\u{1F30C}",
          "minibus": "\u{1F690}",
          "minidisc": "\u{1F4BD}",
          "mobile_phone_off": "\u{1F4F4}",
          "money_mouth_face": "\u{1F911}",
          "money_with_wings": "\u{1F4B8}",
          "moneybag": "\u{1F4B0}",
          "monkey": "\u{1F412}",
          "monkey_face": "\u{1F435}",
          "monorail": "\u{1F69D}",
          "moon": "\u{1F314}",
          "mortar_board": "\u{1F393}",
          "mosque": "\u{1F54C}",
          "motor_boat": "\u{1F6E5}",
          "motor_scooter": "\u{1F6F5}",
          "motorcycle": "\u{1F3CD}",
          "motorway": "\u{1F6E3}",
          "mount_fuji": "\u{1F5FB}",
          "mountain": "\u26F0",
          "mountain_biking_man": "\u{1F6B5}",
          "mountain_biking_woman": "\u{1F6B5}&zwj;\u2640\uFE0F",
          "mountain_cableway": "\u{1F6A0}",
          "mountain_railway": "\u{1F69E}",
          "mountain_snow": "\u{1F3D4}",
          "mouse": "\u{1F42D}",
          "mouse2": "\u{1F401}",
          "movie_camera": "\u{1F3A5}",
          "moyai": "\u{1F5FF}",
          "mrs_claus": "\u{1F936}",
          "muscle": "\u{1F4AA}",
          "mushroom": "\u{1F344}",
          "musical_keyboard": "\u{1F3B9}",
          "musical_note": "\u{1F3B5}",
          "musical_score": "\u{1F3BC}",
          "mute": "\u{1F507}",
          "nail_care": "\u{1F485}",
          "name_badge": "\u{1F4DB}",
          "national_park": "\u{1F3DE}",
          "nauseated_face": "\u{1F922}",
          "necktie": "\u{1F454}",
          "negative_squared_cross_mark": "\u274E",
          "nerd_face": "\u{1F913}",
          "neutral_face": "\u{1F610}",
          "new": "\u{1F195}",
          "new_moon": "\u{1F311}",
          "new_moon_with_face": "\u{1F31A}",
          "newspaper": "\u{1F4F0}",
          "newspaper_roll": "\u{1F5DE}",
          "next_track_button": "\u23ED",
          "ng": "\u{1F196}",
          "no_good_man": "\u{1F645}&zwj;\u2642\uFE0F",
          "no_good_woman": "\u{1F645}",
          "night_with_stars": "\u{1F303}",
          "no_bell": "\u{1F515}",
          "no_bicycles": "\u{1F6B3}",
          "no_entry": "\u26D4\uFE0F",
          "no_entry_sign": "\u{1F6AB}",
          "no_mobile_phones": "\u{1F4F5}",
          "no_mouth": "\u{1F636}",
          "no_pedestrians": "\u{1F6B7}",
          "no_smoking": "\u{1F6AD}",
          "non-potable_water": "\u{1F6B1}",
          "nose": "\u{1F443}",
          "notebook": "\u{1F4D3}",
          "notebook_with_decorative_cover": "\u{1F4D4}",
          "notes": "\u{1F3B6}",
          "nut_and_bolt": "\u{1F529}",
          "o": "\u2B55\uFE0F",
          "o2": "\u{1F17E}\uFE0F",
          "ocean": "\u{1F30A}",
          "octopus": "\u{1F419}",
          "oden": "\u{1F362}",
          "office": "\u{1F3E2}",
          "oil_drum": "\u{1F6E2}",
          "ok": "\u{1F197}",
          "ok_hand": "\u{1F44C}",
          "ok_man": "\u{1F646}&zwj;\u2642\uFE0F",
          "ok_woman": "\u{1F646}",
          "old_key": "\u{1F5DD}",
          "older_man": "\u{1F474}",
          "older_woman": "\u{1F475}",
          "om": "\u{1F549}",
          "on": "\u{1F51B}",
          "oncoming_automobile": "\u{1F698}",
          "oncoming_bus": "\u{1F68D}",
          "oncoming_police_car": "\u{1F694}",
          "oncoming_taxi": "\u{1F696}",
          "open_file_folder": "\u{1F4C2}",
          "open_hands": "\u{1F450}",
          "open_mouth": "\u{1F62E}",
          "open_umbrella": "\u2602\uFE0F",
          "ophiuchus": "\u26CE",
          "orange_book": "\u{1F4D9}",
          "orthodox_cross": "\u2626\uFE0F",
          "outbox_tray": "\u{1F4E4}",
          "owl": "\u{1F989}",
          "ox": "\u{1F402}",
          "package": "\u{1F4E6}",
          "page_facing_up": "\u{1F4C4}",
          "page_with_curl": "\u{1F4C3}",
          "pager": "\u{1F4DF}",
          "paintbrush": "\u{1F58C}",
          "palm_tree": "\u{1F334}",
          "pancakes": "\u{1F95E}",
          "panda_face": "\u{1F43C}",
          "paperclip": "\u{1F4CE}",
          "paperclips": "\u{1F587}",
          "parasol_on_ground": "\u26F1",
          "parking": "\u{1F17F}\uFE0F",
          "part_alternation_mark": "\u303D\uFE0F",
          "partly_sunny": "\u26C5\uFE0F",
          "passenger_ship": "\u{1F6F3}",
          "passport_control": "\u{1F6C2}",
          "pause_button": "\u23F8",
          "peace_symbol": "\u262E\uFE0F",
          "peach": "\u{1F351}",
          "peanuts": "\u{1F95C}",
          "pear": "\u{1F350}",
          "pen": "\u{1F58A}",
          "pencil2": "\u270F\uFE0F",
          "penguin": "\u{1F427}",
          "pensive": "\u{1F614}",
          "performing_arts": "\u{1F3AD}",
          "persevere": "\u{1F623}",
          "person_fencing": "\u{1F93A}",
          "pouting_woman": "\u{1F64E}",
          "phone": "\u260E\uFE0F",
          "pick": "\u26CF",
          "pig": "\u{1F437}",
          "pig2": "\u{1F416}",
          "pig_nose": "\u{1F43D}",
          "pill": "\u{1F48A}",
          "pineapple": "\u{1F34D}",
          "ping_pong": "\u{1F3D3}",
          "pisces": "\u2653\uFE0F",
          "pizza": "\u{1F355}",
          "place_of_worship": "\u{1F6D0}",
          "plate_with_cutlery": "\u{1F37D}",
          "play_or_pause_button": "\u23EF",
          "point_down": "\u{1F447}",
          "point_left": "\u{1F448}",
          "point_right": "\u{1F449}",
          "point_up": "\u261D\uFE0F",
          "point_up_2": "\u{1F446}",
          "police_car": "\u{1F693}",
          "policewoman": "\u{1F46E}&zwj;\u2640\uFE0F",
          "poodle": "\u{1F429}",
          "popcorn": "\u{1F37F}",
          "post_office": "\u{1F3E3}",
          "postal_horn": "\u{1F4EF}",
          "postbox": "\u{1F4EE}",
          "potable_water": "\u{1F6B0}",
          "potato": "\u{1F954}",
          "pouch": "\u{1F45D}",
          "poultry_leg": "\u{1F357}",
          "pound": "\u{1F4B7}",
          "rage": "\u{1F621}",
          "pouting_cat": "\u{1F63E}",
          "pouting_man": "\u{1F64E}&zwj;\u2642\uFE0F",
          "pray": "\u{1F64F}",
          "prayer_beads": "\u{1F4FF}",
          "pregnant_woman": "\u{1F930}",
          "previous_track_button": "\u23EE",
          "prince": "\u{1F934}",
          "princess": "\u{1F478}",
          "printer": "\u{1F5A8}",
          "purple_heart": "\u{1F49C}",
          "purse": "\u{1F45B}",
          "pushpin": "\u{1F4CC}",
          "put_litter_in_its_place": "\u{1F6AE}",
          "question": "\u2753",
          "rabbit": "\u{1F430}",
          "rabbit2": "\u{1F407}",
          "racehorse": "\u{1F40E}",
          "racing_car": "\u{1F3CE}",
          "radio": "\u{1F4FB}",
          "radio_button": "\u{1F518}",
          "radioactive": "\u2622\uFE0F",
          "railway_car": "\u{1F683}",
          "railway_track": "\u{1F6E4}",
          "rainbow": "\u{1F308}",
          "rainbow_flag": "\u{1F3F3}\uFE0F&zwj;\u{1F308}",
          "raised_back_of_hand": "\u{1F91A}",
          "raised_hand_with_fingers_splayed": "\u{1F590}",
          "raised_hands": "\u{1F64C}",
          "raising_hand_woman": "\u{1F64B}",
          "raising_hand_man": "\u{1F64B}&zwj;\u2642\uFE0F",
          "ram": "\u{1F40F}",
          "ramen": "\u{1F35C}",
          "rat": "\u{1F400}",
          "record_button": "\u23FA",
          "recycle": "\u267B\uFE0F",
          "red_circle": "\u{1F534}",
          "registered": "\xAE\uFE0F",
          "relaxed": "\u263A\uFE0F",
          "relieved": "\u{1F60C}",
          "reminder_ribbon": "\u{1F397}",
          "repeat": "\u{1F501}",
          "repeat_one": "\u{1F502}",
          "rescue_worker_helmet": "\u26D1",
          "restroom": "\u{1F6BB}",
          "revolving_hearts": "\u{1F49E}",
          "rewind": "\u23EA",
          "rhinoceros": "\u{1F98F}",
          "ribbon": "\u{1F380}",
          "rice": "\u{1F35A}",
          "rice_ball": "\u{1F359}",
          "rice_cracker": "\u{1F358}",
          "rice_scene": "\u{1F391}",
          "right_anger_bubble": "\u{1F5EF}",
          "ring": "\u{1F48D}",
          "robot": "\u{1F916}",
          "rocket": "\u{1F680}",
          "rofl": "\u{1F923}",
          "roll_eyes": "\u{1F644}",
          "roller_coaster": "\u{1F3A2}",
          "rooster": "\u{1F413}",
          "rose": "\u{1F339}",
          "rosette": "\u{1F3F5}",
          "rotating_light": "\u{1F6A8}",
          "round_pushpin": "\u{1F4CD}",
          "rowing_man": "\u{1F6A3}",
          "rowing_woman": "\u{1F6A3}&zwj;\u2640\uFE0F",
          "rugby_football": "\u{1F3C9}",
          "running_man": "\u{1F3C3}",
          "running_shirt_with_sash": "\u{1F3BD}",
          "running_woman": "\u{1F3C3}&zwj;\u2640\uFE0F",
          "sa": "\u{1F202}\uFE0F",
          "sagittarius": "\u2650\uFE0F",
          "sake": "\u{1F376}",
          "sandal": "\u{1F461}",
          "santa": "\u{1F385}",
          "satellite": "\u{1F4E1}",
          "saxophone": "\u{1F3B7}",
          "school": "\u{1F3EB}",
          "school_satchel": "\u{1F392}",
          "scissors": "\u2702\uFE0F",
          "scorpion": "\u{1F982}",
          "scorpius": "\u264F\uFE0F",
          "scream": "\u{1F631}",
          "scream_cat": "\u{1F640}",
          "scroll": "\u{1F4DC}",
          "seat": "\u{1F4BA}",
          "secret": "\u3299\uFE0F",
          "see_no_evil": "\u{1F648}",
          "seedling": "\u{1F331}",
          "selfie": "\u{1F933}",
          "shallow_pan_of_food": "\u{1F958}",
          "shamrock": "\u2618\uFE0F",
          "shark": "\u{1F988}",
          "shaved_ice": "\u{1F367}",
          "sheep": "\u{1F411}",
          "shell": "\u{1F41A}",
          "shield": "\u{1F6E1}",
          "shinto_shrine": "\u26E9",
          "ship": "\u{1F6A2}",
          "shirt": "\u{1F455}",
          "shopping": "\u{1F6CD}",
          "shopping_cart": "\u{1F6D2}",
          "shower": "\u{1F6BF}",
          "shrimp": "\u{1F990}",
          "signal_strength": "\u{1F4F6}",
          "six_pointed_star": "\u{1F52F}",
          "ski": "\u{1F3BF}",
          "skier": "\u26F7",
          "skull": "\u{1F480}",
          "skull_and_crossbones": "\u2620\uFE0F",
          "sleeping": "\u{1F634}",
          "sleeping_bed": "\u{1F6CC}",
          "sleepy": "\u{1F62A}",
          "slightly_frowning_face": "\u{1F641}",
          "slightly_smiling_face": "\u{1F642}",
          "slot_machine": "\u{1F3B0}",
          "small_airplane": "\u{1F6E9}",
          "small_blue_diamond": "\u{1F539}",
          "small_orange_diamond": "\u{1F538}",
          "small_red_triangle": "\u{1F53A}",
          "small_red_triangle_down": "\u{1F53B}",
          "smile": "\u{1F604}",
          "smile_cat": "\u{1F638}",
          "smiley": "\u{1F603}",
          "smiley_cat": "\u{1F63A}",
          "smiling_imp": "\u{1F608}",
          "smirk": "\u{1F60F}",
          "smirk_cat": "\u{1F63C}",
          "smoking": "\u{1F6AC}",
          "snail": "\u{1F40C}",
          "snake": "\u{1F40D}",
          "sneezing_face": "\u{1F927}",
          "snowboarder": "\u{1F3C2}",
          "snowflake": "\u2744\uFE0F",
          "snowman": "\u26C4\uFE0F",
          "snowman_with_snow": "\u2603\uFE0F",
          "sob": "\u{1F62D}",
          "soccer": "\u26BD\uFE0F",
          "soon": "\u{1F51C}",
          "sos": "\u{1F198}",
          "sound": "\u{1F509}",
          "space_invader": "\u{1F47E}",
          "spades": "\u2660\uFE0F",
          "spaghetti": "\u{1F35D}",
          "sparkle": "\u2747\uFE0F",
          "sparkler": "\u{1F387}",
          "sparkles": "\u2728",
          "sparkling_heart": "\u{1F496}",
          "speak_no_evil": "\u{1F64A}",
          "speaker": "\u{1F508}",
          "speaking_head": "\u{1F5E3}",
          "speech_balloon": "\u{1F4AC}",
          "speedboat": "\u{1F6A4}",
          "spider": "\u{1F577}",
          "spider_web": "\u{1F578}",
          "spiral_calendar": "\u{1F5D3}",
          "spiral_notepad": "\u{1F5D2}",
          "spoon": "\u{1F944}",
          "squid": "\u{1F991}",
          "stadium": "\u{1F3DF}",
          "star": "\u2B50\uFE0F",
          "star2": "\u{1F31F}",
          "star_and_crescent": "\u262A\uFE0F",
          "star_of_david": "\u2721\uFE0F",
          "stars": "\u{1F320}",
          "station": "\u{1F689}",
          "statue_of_liberty": "\u{1F5FD}",
          "steam_locomotive": "\u{1F682}",
          "stew": "\u{1F372}",
          "stop_button": "\u23F9",
          "stop_sign": "\u{1F6D1}",
          "stopwatch": "\u23F1",
          "straight_ruler": "\u{1F4CF}",
          "strawberry": "\u{1F353}",
          "stuck_out_tongue": "\u{1F61B}",
          "stuck_out_tongue_closed_eyes": "\u{1F61D}",
          "stuck_out_tongue_winking_eye": "\u{1F61C}",
          "studio_microphone": "\u{1F399}",
          "stuffed_flatbread": "\u{1F959}",
          "sun_behind_large_cloud": "\u{1F325}",
          "sun_behind_rain_cloud": "\u{1F326}",
          "sun_behind_small_cloud": "\u{1F324}",
          "sun_with_face": "\u{1F31E}",
          "sunflower": "\u{1F33B}",
          "sunglasses": "\u{1F60E}",
          "sunny": "\u2600\uFE0F",
          "sunrise": "\u{1F305}",
          "sunrise_over_mountains": "\u{1F304}",
          "surfing_man": "\u{1F3C4}",
          "surfing_woman": "\u{1F3C4}&zwj;\u2640\uFE0F",
          "sushi": "\u{1F363}",
          "suspension_railway": "\u{1F69F}",
          "sweat": "\u{1F613}",
          "sweat_drops": "\u{1F4A6}",
          "sweat_smile": "\u{1F605}",
          "sweet_potato": "\u{1F360}",
          "swimming_man": "\u{1F3CA}",
          "swimming_woman": "\u{1F3CA}&zwj;\u2640\uFE0F",
          "symbols": "\u{1F523}",
          "synagogue": "\u{1F54D}",
          "syringe": "\u{1F489}",
          "taco": "\u{1F32E}",
          "tada": "\u{1F389}",
          "tanabata_tree": "\u{1F38B}",
          "taurus": "\u2649\uFE0F",
          "taxi": "\u{1F695}",
          "tea": "\u{1F375}",
          "telephone_receiver": "\u{1F4DE}",
          "telescope": "\u{1F52D}",
          "tennis": "\u{1F3BE}",
          "tent": "\u26FA\uFE0F",
          "thermometer": "\u{1F321}",
          "thinking": "\u{1F914}",
          "thought_balloon": "\u{1F4AD}",
          "ticket": "\u{1F3AB}",
          "tickets": "\u{1F39F}",
          "tiger": "\u{1F42F}",
          "tiger2": "\u{1F405}",
          "timer_clock": "\u23F2",
          "tipping_hand_man": "\u{1F481}&zwj;\u2642\uFE0F",
          "tired_face": "\u{1F62B}",
          "tm": "\u2122\uFE0F",
          "toilet": "\u{1F6BD}",
          "tokyo_tower": "\u{1F5FC}",
          "tomato": "\u{1F345}",
          "tongue": "\u{1F445}",
          "top": "\u{1F51D}",
          "tophat": "\u{1F3A9}",
          "tornado": "\u{1F32A}",
          "trackball": "\u{1F5B2}",
          "tractor": "\u{1F69C}",
          "traffic_light": "\u{1F6A5}",
          "train": "\u{1F68B}",
          "train2": "\u{1F686}",
          "tram": "\u{1F68A}",
          "triangular_flag_on_post": "\u{1F6A9}",
          "triangular_ruler": "\u{1F4D0}",
          "trident": "\u{1F531}",
          "triumph": "\u{1F624}",
          "trolleybus": "\u{1F68E}",
          "trophy": "\u{1F3C6}",
          "tropical_drink": "\u{1F379}",
          "tropical_fish": "\u{1F420}",
          "truck": "\u{1F69A}",
          "trumpet": "\u{1F3BA}",
          "tulip": "\u{1F337}",
          "tumbler_glass": "\u{1F943}",
          "turkey": "\u{1F983}",
          "turtle": "\u{1F422}",
          "tv": "\u{1F4FA}",
          "twisted_rightwards_arrows": "\u{1F500}",
          "two_hearts": "\u{1F495}",
          "two_men_holding_hands": "\u{1F46C}",
          "two_women_holding_hands": "\u{1F46D}",
          "u5272": "\u{1F239}",
          "u5408": "\u{1F234}",
          "u55b6": "\u{1F23A}",
          "u6307": "\u{1F22F}\uFE0F",
          "u6708": "\u{1F237}\uFE0F",
          "u6709": "\u{1F236}",
          "u6e80": "\u{1F235}",
          "u7121": "\u{1F21A}\uFE0F",
          "u7533": "\u{1F238}",
          "u7981": "\u{1F232}",
          "u7a7a": "\u{1F233}",
          "umbrella": "\u2614\uFE0F",
          "unamused": "\u{1F612}",
          "underage": "\u{1F51E}",
          "unicorn": "\u{1F984}",
          "unlock": "\u{1F513}",
          "up": "\u{1F199}",
          "upside_down_face": "\u{1F643}",
          "v": "\u270C\uFE0F",
          "vertical_traffic_light": "\u{1F6A6}",
          "vhs": "\u{1F4FC}",
          "vibration_mode": "\u{1F4F3}",
          "video_camera": "\u{1F4F9}",
          "video_game": "\u{1F3AE}",
          "violin": "\u{1F3BB}",
          "virgo": "\u264D\uFE0F",
          "volcano": "\u{1F30B}",
          "volleyball": "\u{1F3D0}",
          "vs": "\u{1F19A}",
          "vulcan_salute": "\u{1F596}",
          "walking_man": "\u{1F6B6}",
          "walking_woman": "\u{1F6B6}&zwj;\u2640\uFE0F",
          "waning_crescent_moon": "\u{1F318}",
          "waning_gibbous_moon": "\u{1F316}",
          "warning": "\u26A0\uFE0F",
          "wastebasket": "\u{1F5D1}",
          "watch": "\u231A\uFE0F",
          "water_buffalo": "\u{1F403}",
          "watermelon": "\u{1F349}",
          "wave": "\u{1F44B}",
          "wavy_dash": "\u3030\uFE0F",
          "waxing_crescent_moon": "\u{1F312}",
          "wc": "\u{1F6BE}",
          "weary": "\u{1F629}",
          "wedding": "\u{1F492}",
          "weight_lifting_man": "\u{1F3CB}\uFE0F",
          "weight_lifting_woman": "\u{1F3CB}\uFE0F&zwj;\u2640\uFE0F",
          "whale": "\u{1F433}",
          "whale2": "\u{1F40B}",
          "wheel_of_dharma": "\u2638\uFE0F",
          "wheelchair": "\u267F\uFE0F",
          "white_check_mark": "\u2705",
          "white_circle": "\u26AA\uFE0F",
          "white_flag": "\u{1F3F3}\uFE0F",
          "white_flower": "\u{1F4AE}",
          "white_large_square": "\u2B1C\uFE0F",
          "white_medium_small_square": "\u25FD\uFE0F",
          "white_medium_square": "\u25FB\uFE0F",
          "white_small_square": "\u25AB\uFE0F",
          "white_square_button": "\u{1F533}",
          "wilted_flower": "\u{1F940}",
          "wind_chime": "\u{1F390}",
          "wind_face": "\u{1F32C}",
          "wine_glass": "\u{1F377}",
          "wink": "\u{1F609}",
          "wolf": "\u{1F43A}",
          "woman": "\u{1F469}",
          "woman_artist": "\u{1F469}&zwj;\u{1F3A8}",
          "woman_astronaut": "\u{1F469}&zwj;\u{1F680}",
          "woman_cartwheeling": "\u{1F938}&zwj;\u2640\uFE0F",
          "woman_cook": "\u{1F469}&zwj;\u{1F373}",
          "woman_facepalming": "\u{1F926}&zwj;\u2640\uFE0F",
          "woman_factory_worker": "\u{1F469}&zwj;\u{1F3ED}",
          "woman_farmer": "\u{1F469}&zwj;\u{1F33E}",
          "woman_firefighter": "\u{1F469}&zwj;\u{1F692}",
          "woman_health_worker": "\u{1F469}&zwj;\u2695\uFE0F",
          "woman_judge": "\u{1F469}&zwj;\u2696\uFE0F",
          "woman_juggling": "\u{1F939}&zwj;\u2640\uFE0F",
          "woman_mechanic": "\u{1F469}&zwj;\u{1F527}",
          "woman_office_worker": "\u{1F469}&zwj;\u{1F4BC}",
          "woman_pilot": "\u{1F469}&zwj;\u2708\uFE0F",
          "woman_playing_handball": "\u{1F93E}&zwj;\u2640\uFE0F",
          "woman_playing_water_polo": "\u{1F93D}&zwj;\u2640\uFE0F",
          "woman_scientist": "\u{1F469}&zwj;\u{1F52C}",
          "woman_shrugging": "\u{1F937}&zwj;\u2640\uFE0F",
          "woman_singer": "\u{1F469}&zwj;\u{1F3A4}",
          "woman_student": "\u{1F469}&zwj;\u{1F393}",
          "woman_teacher": "\u{1F469}&zwj;\u{1F3EB}",
          "woman_technologist": "\u{1F469}&zwj;\u{1F4BB}",
          "woman_with_turban": "\u{1F473}&zwj;\u2640\uFE0F",
          "womans_clothes": "\u{1F45A}",
          "womans_hat": "\u{1F452}",
          "women_wrestling": "\u{1F93C}&zwj;\u2640\uFE0F",
          "womens": "\u{1F6BA}",
          "world_map": "\u{1F5FA}",
          "worried": "\u{1F61F}",
          "wrench": "\u{1F527}",
          "writing_hand": "\u270D\uFE0F",
          "x": "\u274C",
          "yellow_heart": "\u{1F49B}",
          "yen": "\u{1F4B4}",
          "yin_yang": "\u262F\uFE0F",
          "yum": "\u{1F60B}",
          "zap": "\u26A1\uFE0F",
          "zipper_mouth_face": "\u{1F910}",
          "zzz": "\u{1F4A4}",
          "octocat": '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
          "showdown": `<span style="font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>`
        };
        showdown.Converter = function(converterOptions) {
          "use strict";
          var options = {}, langExtensions = [], outputModifiers = [], listeners = {}, setConvFlavor = setFlavor, metadata = {
            parsed: {},
            raw: "",
            format: ""
          };
          _constructor();
          function _constructor() {
            converterOptions = converterOptions || {};
            for (var gOpt in globalOptions) {
              if (globalOptions.hasOwnProperty(gOpt)) {
                options[gOpt] = globalOptions[gOpt];
              }
            }
            if (typeof converterOptions === "object") {
              for (var opt in converterOptions) {
                if (converterOptions.hasOwnProperty(opt)) {
                  options[opt] = converterOptions[opt];
                }
              }
            } else {
              throw Error("Converter expects the passed parameter to be an object, but " + typeof converterOptions + " was passed instead.");
            }
            if (options.extensions) {
              showdown.helper.forEach(options.extensions, _parseExtension);
            }
          }
          function _parseExtension(ext, name) {
            name = name || null;
            if (showdown.helper.isString(ext)) {
              ext = showdown.helper.stdExtName(ext);
              name = ext;
              if (showdown.extensions[ext]) {
                console.warn("DEPRECATION WARNING: " + ext + " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!");
                legacyExtensionLoading(showdown.extensions[ext], ext);
                return;
              } else if (!showdown.helper.isUndefined(extensions[ext])) {
                ext = extensions[ext];
              } else {
                throw Error('Extension "' + ext + '" could not be loaded. It was either not found or is not a valid extension.');
              }
            }
            if (typeof ext === "function") {
              ext = ext();
            }
            if (!showdown.helper.isArray(ext)) {
              ext = [ext];
            }
            var validExt = validate(ext, name);
            if (!validExt.valid) {
              throw Error(validExt.error);
            }
            for (var i = 0; i < ext.length; ++i) {
              switch (ext[i].type) {
                case "lang":
                  langExtensions.push(ext[i]);
                  break;
                case "output":
                  outputModifiers.push(ext[i]);
                  break;
              }
              if (ext[i].hasOwnProperty("listeners")) {
                for (var ln in ext[i].listeners) {
                  if (ext[i].listeners.hasOwnProperty(ln)) {
                    listen(ln, ext[i].listeners[ln]);
                  }
                }
              }
            }
          }
          function legacyExtensionLoading(ext, name) {
            if (typeof ext === "function") {
              ext = ext(new showdown.Converter());
            }
            if (!showdown.helper.isArray(ext)) {
              ext = [ext];
            }
            var valid = validate(ext, name);
            if (!valid.valid) {
              throw Error(valid.error);
            }
            for (var i = 0; i < ext.length; ++i) {
              switch (ext[i].type) {
                case "lang":
                  langExtensions.push(ext[i]);
                  break;
                case "output":
                  outputModifiers.push(ext[i]);
                  break;
                default:
                  throw Error("Extension loader error: Type unrecognized!!!");
              }
            }
          }
          function listen(name, callback) {
            if (!showdown.helper.isString(name)) {
              throw Error("Invalid argument in converter.listen() method: name must be a string, but " + typeof name + " given");
            }
            if (typeof callback !== "function") {
              throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + typeof callback + " given");
            }
            if (!listeners.hasOwnProperty(name)) {
              listeners[name] = [];
            }
            listeners[name].push(callback);
          }
          function rTrimInputText(text) {
            var rsp = text.match(/^\s*/)[0].length, rgx = new RegExp("^\\s{0," + rsp + "}", "gm");
            return text.replace(rgx, "");
          }
          this._dispatch = function dispatch(evtName, text, options2, globals) {
            if (listeners.hasOwnProperty(evtName)) {
              for (var ei = 0; ei < listeners[evtName].length; ++ei) {
                var nText = listeners[evtName][ei](evtName, text, this, options2, globals);
                if (nText && typeof nText !== "undefined") {
                  text = nText;
                }
              }
            }
            return text;
          };
          this.listen = function(name, callback) {
            listen(name, callback);
            return this;
          };
          this.makeHtml = function(text) {
            if (!text) {
              return text;
            }
            var globals = {
              gHtmlBlocks: [],
              gHtmlMdBlocks: [],
              gHtmlSpans: [],
              gUrls: {},
              gTitles: {},
              gDimensions: {},
              gListLevel: 0,
              hashLinkCounts: {},
              langExtensions,
              outputModifiers,
              converter: this,
              ghCodeBlocks: [],
              metadata: {
                parsed: {},
                raw: "",
                format: ""
              }
            };
            text = text.replace(/¨/g, "\xA8T");
            text = text.replace(/\$/g, "\xA8D");
            text = text.replace(/\r\n/g, "\n");
            text = text.replace(/\r/g, "\n");
            text = text.replace(/\u00A0/g, "&nbsp;");
            if (options.smartIndentationFix) {
              text = rTrimInputText(text);
            }
            text = "\n\n" + text + "\n\n";
            text = showdown.subParser("detab")(text, options, globals);
            text = text.replace(/^[ \t]+$/mg, "");
            showdown.helper.forEach(langExtensions, function(ext) {
              text = showdown.subParser("runExtension")(ext, text, options, globals);
            });
            text = showdown.subParser("metadata")(text, options, globals);
            text = showdown.subParser("hashPreCodeTags")(text, options, globals);
            text = showdown.subParser("githubCodeBlocks")(text, options, globals);
            text = showdown.subParser("hashHTMLBlocks")(text, options, globals);
            text = showdown.subParser("hashCodeTags")(text, options, globals);
            text = showdown.subParser("stripLinkDefinitions")(text, options, globals);
            text = showdown.subParser("blockGamut")(text, options, globals);
            text = showdown.subParser("unhashHTMLSpans")(text, options, globals);
            text = showdown.subParser("unescapeSpecialChars")(text, options, globals);
            text = text.replace(/¨D/g, "$$");
            text = text.replace(/¨T/g, "\xA8");
            text = showdown.subParser("completeHTMLDocument")(text, options, globals);
            showdown.helper.forEach(outputModifiers, function(ext) {
              text = showdown.subParser("runExtension")(ext, text, options, globals);
            });
            metadata = globals.metadata;
            return text;
          };
          this.makeMarkdown = this.makeMd = function(src, HTMLParser) {
            src = src.replace(/\r\n/g, "\n");
            src = src.replace(/\r/g, "\n");
            src = src.replace(/>[ \t]+</, ">\xA8NBSP;<");
            if (!HTMLParser) {
              if (window && window.document) {
                HTMLParser = window.document;
              } else {
                throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");
              }
            }
            var doc = HTMLParser.createElement("div");
            doc.innerHTML = src;
            var globals = {
              preList: substitutePreCodeTags(doc)
            };
            clean(doc);
            var nodes = doc.childNodes, mdDoc = "";
            for (var i = 0; i < nodes.length; i++) {
              mdDoc += showdown.subParser("makeMarkdown.node")(nodes[i], globals);
            }
            function clean(node) {
              for (var n = 0; n < node.childNodes.length; ++n) {
                var child = node.childNodes[n];
                if (child.nodeType === 3) {
                  if (!/\S/.test(child.nodeValue) && !/^[ ]+$/.test(child.nodeValue)) {
                    node.removeChild(child);
                    --n;
                  } else {
                    child.nodeValue = child.nodeValue.split("\n").join(" ");
                    child.nodeValue = child.nodeValue.replace(/(\s)+/g, "$1");
                  }
                } else if (child.nodeType === 1) {
                  clean(child);
                }
              }
            }
            function substitutePreCodeTags(doc2) {
              var pres = doc2.querySelectorAll("pre"), presPH = [];
              for (var i2 = 0; i2 < pres.length; ++i2) {
                if (pres[i2].childElementCount === 1 && pres[i2].firstChild.tagName.toLowerCase() === "code") {
                  var content = pres[i2].firstChild.innerHTML.trim(), language = pres[i2].firstChild.getAttribute("data-language") || "";
                  if (language === "") {
                    var classes = pres[i2].firstChild.className.split(" ");
                    for (var c = 0; c < classes.length; ++c) {
                      var matches = classes[c].match(/^language-(.+)$/);
                      if (matches !== null) {
                        language = matches[1];
                        break;
                      }
                    }
                  }
                  content = showdown.helper.unescapeHTMLEntities(content);
                  presPH.push(content);
                  pres[i2].outerHTML = '<precode language="' + language + '" precodenum="' + i2.toString() + '"></precode>';
                } else {
                  presPH.push(pres[i2].innerHTML);
                  pres[i2].innerHTML = "";
                  pres[i2].setAttribute("prenum", i2.toString());
                }
              }
              return presPH;
            }
            return mdDoc;
          };
          this.setOption = function(key, value) {
            options[key] = value;
          };
          this.getOption = function(key) {
            return options[key];
          };
          this.getOptions = function() {
            return options;
          };
          this.addExtension = function(extension, name) {
            name = name || null;
            _parseExtension(extension, name);
          };
          this.useExtension = function(extensionName) {
            _parseExtension(extensionName);
          };
          this.setFlavor = function(name) {
            if (!flavor.hasOwnProperty(name)) {
              throw Error(name + " flavor was not found");
            }
            var preset = flavor[name];
            setConvFlavor = name;
            for (var option in preset) {
              if (preset.hasOwnProperty(option)) {
                options[option] = preset[option];
              }
            }
          };
          this.getFlavor = function() {
            return setConvFlavor;
          };
          this.removeExtension = function(extension) {
            if (!showdown.helper.isArray(extension)) {
              extension = [extension];
            }
            for (var a = 0; a < extension.length; ++a) {
              var ext = extension[a];
              for (var i = 0; i < langExtensions.length; ++i) {
                if (langExtensions[i] === ext) {
                  langExtensions.splice(i, 1);
                }
              }
              for (var ii = 0; ii < outputModifiers.length; ++ii) {
                if (outputModifiers[ii] === ext) {
                  outputModifiers.splice(ii, 1);
                }
              }
            }
          };
          this.getAllExtensions = function() {
            return {
              language: langExtensions,
              output: outputModifiers
            };
          };
          this.getMetadata = function(raw) {
            if (raw) {
              return metadata.raw;
            } else {
              return metadata.parsed;
            }
          };
          this.getMetadataFormat = function() {
            return metadata.format;
          };
          this._setMetadataPair = function(key, value) {
            metadata.parsed[key] = value;
          };
          this._setMetadataFormat = function(format) {
            metadata.format = format;
          };
          this._setMetadataRaw = function(raw) {
            metadata.raw = raw;
          };
        };
        showdown.subParser("anchors", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("anchors.before", text, options, globals);
          var writeAnchorTag = function(wholeMatch, linkText, linkId, url, m5, m6, title) {
            if (showdown.helper.isUndefined(title)) {
              title = "";
            }
            linkId = linkId.toLowerCase();
            if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
              url = "";
            } else if (!url) {
              if (!linkId) {
                linkId = linkText.toLowerCase().replace(/ ?\n/g, " ");
              }
              url = "#" + linkId;
              if (!showdown.helper.isUndefined(globals.gUrls[linkId])) {
                url = globals.gUrls[linkId];
                if (!showdown.helper.isUndefined(globals.gTitles[linkId])) {
                  title = globals.gTitles[linkId];
                }
              } else {
                return wholeMatch;
              }
            }
            url = url.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
            var result = '<a href="' + url + '"';
            if (title !== "" && title !== null) {
              title = title.replace(/"/g, "&quot;");
              title = title.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
              result += ' title="' + title + '"';
            }
            if (options.openLinksInNewWindow && !/^#/.test(url)) {
              result += ' rel="noopener noreferrer" target="\xA8E95Eblank"';
            }
            result += ">" + linkText + "</a>";
            return result;
          };
          text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, writeAnchorTag);
          text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, writeAnchorTag);
          text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, writeAnchorTag);
          text = text.replace(/\[([^\[\]]+)]()()()()()/g, writeAnchorTag);
          if (options.ghMentions) {
            text = text.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi, function(wm, st, escape, mentions, username) {
              if (escape === "\\") {
                return st + mentions;
              }
              if (!showdown.helper.isString(options.ghMentionsLink)) {
                throw new Error("ghMentionsLink option must be a string");
              }
              var lnk = options.ghMentionsLink.replace(/\{u}/g, username), target = "";
              if (options.openLinksInNewWindow) {
                target = ' rel="noopener noreferrer" target="\xA8E95Eblank"';
              }
              return st + '<a href="' + lnk + '"' + target + ">" + mentions + "</a>";
            });
          }
          text = globals.converter._dispatch("anchors.after", text, options, globals);
          return text;
        });
        var simpleURLRegex = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi, simpleURLRegex2 = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi, delimUrlRegex = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi, simpleMailRegex = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi, delimMailRegex = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, replaceLink = function(options) {
          "use strict";
          return function(wm, leadingMagicChars, link, m2, m3, trailingPunctuation, trailingMagicChars) {
            link = link.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
            var lnkTxt = link, append = "", target = "", lmc = leadingMagicChars || "", tmc = trailingMagicChars || "";
            if (/^www\./i.test(link)) {
              link = link.replace(/^www\./i, "http://www.");
            }
            if (options.excludeTrailingPunctuationFromURLs && trailingPunctuation) {
              append = trailingPunctuation;
            }
            if (options.openLinksInNewWindow) {
              target = ' rel="noopener noreferrer" target="\xA8E95Eblank"';
            }
            return lmc + '<a href="' + link + '"' + target + ">" + lnkTxt + "</a>" + append + tmc;
          };
        }, replaceMail = function(options, globals) {
          "use strict";
          return function(wholeMatch, b, mail) {
            var href = "mailto:";
            b = b || "";
            mail = showdown.subParser("unescapeSpecialChars")(mail, options, globals);
            if (options.encodeEmails) {
              href = showdown.helper.encodeEmailAddress(href + mail);
              mail = showdown.helper.encodeEmailAddress(mail);
            } else {
              href = href + mail;
            }
            return b + '<a href="' + href + '">' + mail + "</a>";
          };
        };
        showdown.subParser("autoLinks", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("autoLinks.before", text, options, globals);
          text = text.replace(delimUrlRegex, replaceLink(options));
          text = text.replace(delimMailRegex, replaceMail(options, globals));
          text = globals.converter._dispatch("autoLinks.after", text, options, globals);
          return text;
        });
        showdown.subParser("simplifiedAutoLinks", function(text, options, globals) {
          "use strict";
          if (!options.simplifiedAutoLink) {
            return text;
          }
          text = globals.converter._dispatch("simplifiedAutoLinks.before", text, options, globals);
          if (options.excludeTrailingPunctuationFromURLs) {
            text = text.replace(simpleURLRegex2, replaceLink(options));
          } else {
            text = text.replace(simpleURLRegex, replaceLink(options));
          }
          text = text.replace(simpleMailRegex, replaceMail(options, globals));
          text = globals.converter._dispatch("simplifiedAutoLinks.after", text, options, globals);
          return text;
        });
        showdown.subParser("blockGamut", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("blockGamut.before", text, options, globals);
          text = showdown.subParser("blockQuotes")(text, options, globals);
          text = showdown.subParser("headers")(text, options, globals);
          text = showdown.subParser("horizontalRule")(text, options, globals);
          text = showdown.subParser("lists")(text, options, globals);
          text = showdown.subParser("codeBlocks")(text, options, globals);
          text = showdown.subParser("tables")(text, options, globals);
          text = showdown.subParser("hashHTMLBlocks")(text, options, globals);
          text = showdown.subParser("paragraphs")(text, options, globals);
          text = globals.converter._dispatch("blockGamut.after", text, options, globals);
          return text;
        });
        showdown.subParser("blockQuotes", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("blockQuotes.before", text, options, globals);
          text = text + "\n\n";
          var rgx = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
          if (options.splitAdjacentBlockquotes) {
            rgx = /^ {0,3}>[\s\S]*?(?:\n\n)/gm;
          }
          text = text.replace(rgx, function(bq) {
            bq = bq.replace(/^[ \t]*>[ \t]?/gm, "");
            bq = bq.replace(/¨0/g, "");
            bq = bq.replace(/^[ \t]+$/gm, "");
            bq = showdown.subParser("githubCodeBlocks")(bq, options, globals);
            bq = showdown.subParser("blockGamut")(bq, options, globals);
            bq = bq.replace(/(^|\n)/g, "$1  ");
            bq = bq.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(wholeMatch, m1) {
              var pre = m1;
              pre = pre.replace(/^  /mg, "\xA80");
              pre = pre.replace(/¨0/g, "");
              return pre;
            });
            return showdown.subParser("hashBlock")("<blockquote>\n" + bq + "\n</blockquote>", options, globals);
          });
          text = globals.converter._dispatch("blockQuotes.after", text, options, globals);
          return text;
        });
        showdown.subParser("codeBlocks", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("codeBlocks.before", text, options, globals);
          text += "\xA80";
          var pattern = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
          text = text.replace(pattern, function(wholeMatch, m1, m2) {
            var codeblock = m1, nextChar = m2, end = "\n";
            codeblock = showdown.subParser("outdent")(codeblock, options, globals);
            codeblock = showdown.subParser("encodeCode")(codeblock, options, globals);
            codeblock = showdown.subParser("detab")(codeblock, options, globals);
            codeblock = codeblock.replace(/^\n+/g, "");
            codeblock = codeblock.replace(/\n+$/g, "");
            if (options.omitExtraWLInCodeBlocks) {
              end = "";
            }
            codeblock = "<pre><code>" + codeblock + end + "</code></pre>";
            return showdown.subParser("hashBlock")(codeblock, options, globals) + nextChar;
          });
          text = text.replace(/¨0/, "");
          text = globals.converter._dispatch("codeBlocks.after", text, options, globals);
          return text;
        });
        showdown.subParser("codeSpans", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("codeSpans.before", text, options, globals);
          if (typeof text === "undefined") {
            text = "";
          }
          text = text.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, function(wholeMatch, m1, m2, m3) {
            var c = m3;
            c = c.replace(/^([ \t]*)/g, "");
            c = c.replace(/[ \t]*$/g, "");
            c = showdown.subParser("encodeCode")(c, options, globals);
            c = m1 + "<code>" + c + "</code>";
            c = showdown.subParser("hashHTMLSpans")(c, options, globals);
            return c;
          });
          text = globals.converter._dispatch("codeSpans.after", text, options, globals);
          return text;
        });
        showdown.subParser("completeHTMLDocument", function(text, options, globals) {
          "use strict";
          if (!options.completeHTMLDocument) {
            return text;
          }
          text = globals.converter._dispatch("completeHTMLDocument.before", text, options, globals);
          var doctype = "html", doctypeParsed = "<!DOCTYPE HTML>\n", title = "", charset = '<meta charset="utf-8">\n', lang = "", metadata = "";
          if (typeof globals.metadata.parsed.doctype !== "undefined") {
            doctypeParsed = "<!DOCTYPE " + globals.metadata.parsed.doctype + ">\n";
            doctype = globals.metadata.parsed.doctype.toString().toLowerCase();
            if (doctype === "html" || doctype === "html5") {
              charset = '<meta charset="utf-8">';
            }
          }
          for (var meta in globals.metadata.parsed) {
            if (globals.metadata.parsed.hasOwnProperty(meta)) {
              switch (meta.toLowerCase()) {
                case "doctype":
                  break;
                case "title":
                  title = "<title>" + globals.metadata.parsed.title + "</title>\n";
                  break;
                case "charset":
                  if (doctype === "html" || doctype === "html5") {
                    charset = '<meta charset="' + globals.metadata.parsed.charset + '">\n';
                  } else {
                    charset = '<meta name="charset" content="' + globals.metadata.parsed.charset + '">\n';
                  }
                  break;
                case "language":
                case "lang":
                  lang = ' lang="' + globals.metadata.parsed[meta] + '"';
                  metadata += '<meta name="' + meta + '" content="' + globals.metadata.parsed[meta] + '">\n';
                  break;
                default:
                  metadata += '<meta name="' + meta + '" content="' + globals.metadata.parsed[meta] + '">\n';
              }
            }
          }
          text = doctypeParsed + "<html" + lang + ">\n<head>\n" + title + charset + metadata + "</head>\n<body>\n" + text.trim() + "\n</body>\n</html>";
          text = globals.converter._dispatch("completeHTMLDocument.after", text, options, globals);
          return text;
        });
        showdown.subParser("detab", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("detab.before", text, options, globals);
          text = text.replace(/\t(?=\t)/g, "    ");
          text = text.replace(/\t/g, "\xA8A\xA8B");
          text = text.replace(/¨B(.+?)¨A/g, function(wholeMatch, m1) {
            var leadingText = m1, numSpaces = 4 - leadingText.length % 4;
            for (var i = 0; i < numSpaces; i++) {
              leadingText += " ";
            }
            return leadingText;
          });
          text = text.replace(/¨A/g, "    ");
          text = text.replace(/¨B/g, "");
          text = globals.converter._dispatch("detab.after", text, options, globals);
          return text;
        });
        showdown.subParser("ellipsis", function(text, options, globals) {
          "use strict";
          if (!options.ellipsis) {
            return text;
          }
          text = globals.converter._dispatch("ellipsis.before", text, options, globals);
          text = text.replace(/\.\.\./g, "\u2026");
          text = globals.converter._dispatch("ellipsis.after", text, options, globals);
          return text;
        });
        showdown.subParser("emoji", function(text, options, globals) {
          "use strict";
          if (!options.emoji) {
            return text;
          }
          text = globals.converter._dispatch("emoji.before", text, options, globals);
          var emojiRgx = /:([\S]+?):/g;
          text = text.replace(emojiRgx, function(wm, emojiCode) {
            if (showdown.helper.emojis.hasOwnProperty(emojiCode)) {
              return showdown.helper.emojis[emojiCode];
            }
            return wm;
          });
          text = globals.converter._dispatch("emoji.after", text, options, globals);
          return text;
        });
        showdown.subParser("encodeAmpsAndAngles", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("encodeAmpsAndAngles.before", text, options, globals);
          text = text.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;");
          text = text.replace(/<(?![a-z\/?$!])/gi, "&lt;");
          text = text.replace(/</g, "&lt;");
          text = text.replace(/>/g, "&gt;");
          text = globals.converter._dispatch("encodeAmpsAndAngles.after", text, options, globals);
          return text;
        });
        showdown.subParser("encodeBackslashEscapes", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("encodeBackslashEscapes.before", text, options, globals);
          text = text.replace(/\\(\\)/g, showdown.helper.escapeCharactersCallback);
          text = text.replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g, showdown.helper.escapeCharactersCallback);
          text = globals.converter._dispatch("encodeBackslashEscapes.after", text, options, globals);
          return text;
        });
        showdown.subParser("encodeCode", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("encodeCode.before", text, options, globals);
          text = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/([*_{}\[\]\\=~-])/g, showdown.helper.escapeCharactersCallback);
          text = globals.converter._dispatch("encodeCode.after", text, options, globals);
          return text;
        });
        showdown.subParser("escapeSpecialCharsWithinTagAttributes", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before", text, options, globals);
          var tags = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, comments = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;
          text = text.replace(tags, function(wholeMatch) {
            return wholeMatch.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(/([\\`*_~=|])/g, showdown.helper.escapeCharactersCallback);
          });
          text = text.replace(comments, function(wholeMatch) {
            return wholeMatch.replace(/([\\`*_~=|])/g, showdown.helper.escapeCharactersCallback);
          });
          text = globals.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after", text, options, globals);
          return text;
        });
        showdown.subParser("githubCodeBlocks", function(text, options, globals) {
          "use strict";
          if (!options.ghCodeBlocks) {
            return text;
          }
          text = globals.converter._dispatch("githubCodeBlocks.before", text, options, globals);
          text += "\xA80";
          text = text.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, function(wholeMatch, delim, language, codeblock) {
            var end = options.omitExtraWLInCodeBlocks ? "" : "\n";
            codeblock = showdown.subParser("encodeCode")(codeblock, options, globals);
            codeblock = showdown.subParser("detab")(codeblock, options, globals);
            codeblock = codeblock.replace(/^\n+/g, "");
            codeblock = codeblock.replace(/\n+$/g, "");
            codeblock = "<pre><code" + (language ? ' class="' + language + " language-" + language + '"' : "") + ">" + codeblock + end + "</code></pre>";
            codeblock = showdown.subParser("hashBlock")(codeblock, options, globals);
            return "\n\n\xA8G" + (globals.ghCodeBlocks.push({ text: wholeMatch, codeblock }) - 1) + "G\n\n";
          });
          text = text.replace(/¨0/, "");
          return globals.converter._dispatch("githubCodeBlocks.after", text, options, globals);
        });
        showdown.subParser("hashBlock", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("hashBlock.before", text, options, globals);
          text = text.replace(/(^\n+|\n+$)/g, "");
          text = "\n\n\xA8K" + (globals.gHtmlBlocks.push(text) - 1) + "K\n\n";
          text = globals.converter._dispatch("hashBlock.after", text, options, globals);
          return text;
        });
        showdown.subParser("hashCodeTags", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("hashCodeTags.before", text, options, globals);
          var repFunc = function(wholeMatch, match, left, right) {
            var codeblock = left + showdown.subParser("encodeCode")(match, options, globals) + right;
            return "\xA8C" + (globals.gHtmlSpans.push(codeblock) - 1) + "C";
          };
          text = showdown.helper.replaceRecursiveRegExp(text, repFunc, "<code\\b[^>]*>", "</code>", "gim");
          text = globals.converter._dispatch("hashCodeTags.after", text, options, globals);
          return text;
        });
        showdown.subParser("hashElement", function(text, options, globals) {
          "use strict";
          return function(wholeMatch, m1) {
            var blockText = m1;
            blockText = blockText.replace(/\n\n/g, "\n");
            blockText = blockText.replace(/^\n/, "");
            blockText = blockText.replace(/\n+$/g, "");
            blockText = "\n\n\xA8K" + (globals.gHtmlBlocks.push(blockText) - 1) + "K\n\n";
            return blockText;
          };
        });
        showdown.subParser("hashHTMLBlocks", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("hashHTMLBlocks.before", text, options, globals);
          var blockTags = [
            "pre",
            "div",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "blockquote",
            "table",
            "dl",
            "ol",
            "ul",
            "script",
            "noscript",
            "form",
            "fieldset",
            "iframe",
            "math",
            "style",
            "section",
            "header",
            "footer",
            "nav",
            "article",
            "aside",
            "address",
            "audio",
            "canvas",
            "figure",
            "hgroup",
            "output",
            "video",
            "p"
          ], repFunc = function(wholeMatch, match, left, right) {
            var txt = wholeMatch;
            if (left.search(/\bmarkdown\b/) !== -1) {
              txt = left + globals.converter.makeHtml(match) + right;
            }
            return "\n\n\xA8K" + (globals.gHtmlBlocks.push(txt) - 1) + "K\n\n";
          };
          if (options.backslashEscapesHTMLTags) {
            text = text.replace(/\\<(\/?[^>]+?)>/g, function(wm, inside) {
              return "&lt;" + inside + "&gt;";
            });
          }
          for (var i = 0; i < blockTags.length; ++i) {
            var opTagPos, rgx1 = new RegExp("^ {0,3}(<" + blockTags[i] + "\\b[^>]*>)", "im"), patLeft = "<" + blockTags[i] + "\\b[^>]*>", patRight = "</" + blockTags[i] + ">";
            while ((opTagPos = showdown.helper.regexIndexOf(text, rgx1)) !== -1) {
              var subTexts = showdown.helper.splitAtIndex(text, opTagPos), newSubText1 = showdown.helper.replaceRecursiveRegExp(subTexts[1], repFunc, patLeft, patRight, "im");
              if (newSubText1 === subTexts[1]) {
                break;
              }
              text = subTexts[0].concat(newSubText1);
            }
          }
          text = text.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, showdown.subParser("hashElement")(text, options, globals));
          text = showdown.helper.replaceRecursiveRegExp(text, function(txt) {
            return "\n\n\xA8K" + (globals.gHtmlBlocks.push(txt) - 1) + "K\n\n";
          }, "^ {0,3}<!--", "-->", "gm");
          text = text.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, showdown.subParser("hashElement")(text, options, globals));
          text = globals.converter._dispatch("hashHTMLBlocks.after", text, options, globals);
          return text;
        });
        showdown.subParser("hashHTMLSpans", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("hashHTMLSpans.before", text, options, globals);
          function hashHTMLSpan(html) {
            return "\xA8C" + (globals.gHtmlSpans.push(html) - 1) + "C";
          }
          text = text.replace(/<[^>]+?\/>/gi, function(wm) {
            return hashHTMLSpan(wm);
          });
          text = text.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function(wm) {
            return hashHTMLSpan(wm);
          });
          text = text.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function(wm) {
            return hashHTMLSpan(wm);
          });
          text = text.replace(/<[^>]+?>/gi, function(wm) {
            return hashHTMLSpan(wm);
          });
          text = globals.converter._dispatch("hashHTMLSpans.after", text, options, globals);
          return text;
        });
        showdown.subParser("unhashHTMLSpans", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("unhashHTMLSpans.before", text, options, globals);
          for (var i = 0; i < globals.gHtmlSpans.length; ++i) {
            var repText = globals.gHtmlSpans[i], limit = 0;
            while (/¨C(\d+)C/.test(repText)) {
              var num = RegExp.$1;
              repText = repText.replace("\xA8C" + num + "C", globals.gHtmlSpans[num]);
              if (limit === 10) {
                console.error("maximum nesting of 10 spans reached!!!");
                break;
              }
              ++limit;
            }
            text = text.replace("\xA8C" + i + "C", repText);
          }
          text = globals.converter._dispatch("unhashHTMLSpans.after", text, options, globals);
          return text;
        });
        showdown.subParser("hashPreCodeTags", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("hashPreCodeTags.before", text, options, globals);
          var repFunc = function(wholeMatch, match, left, right) {
            var codeblock = left + showdown.subParser("encodeCode")(match, options, globals) + right;
            return "\n\n\xA8G" + (globals.ghCodeBlocks.push({ text: wholeMatch, codeblock }) - 1) + "G\n\n";
          };
          text = showdown.helper.replaceRecursiveRegExp(text, repFunc, "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^ {0,3}</code>\\s*</pre>", "gim");
          text = globals.converter._dispatch("hashPreCodeTags.after", text, options, globals);
          return text;
        });
        showdown.subParser("headers", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("headers.before", text, options, globals);
          var headerLevelStart = isNaN(parseInt(options.headerLevelStart)) ? 1 : parseInt(options.headerLevelStart), setextRegexH1 = options.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm, setextRegexH2 = options.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
          text = text.replace(setextRegexH1, function(wholeMatch, m1) {
            var spanGamut = showdown.subParser("spanGamut")(m1, options, globals), hID = options.noHeaderId ? "" : ' id="' + headerId(m1) + '"', hLevel = headerLevelStart, hashBlock = "<h" + hLevel + hID + ">" + spanGamut + "</h" + hLevel + ">";
            return showdown.subParser("hashBlock")(hashBlock, options, globals);
          });
          text = text.replace(setextRegexH2, function(matchFound, m1) {
            var spanGamut = showdown.subParser("spanGamut")(m1, options, globals), hID = options.noHeaderId ? "" : ' id="' + headerId(m1) + '"', hLevel = headerLevelStart + 1, hashBlock = "<h" + hLevel + hID + ">" + spanGamut + "</h" + hLevel + ">";
            return showdown.subParser("hashBlock")(hashBlock, options, globals);
          });
          var atxStyle = options.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
          text = text.replace(atxStyle, function(wholeMatch, m1, m2) {
            var hText = m2;
            if (options.customizedHeaderId) {
              hText = m2.replace(/\s?\{([^{]+?)}\s*$/, "");
            }
            var span = showdown.subParser("spanGamut")(hText, options, globals), hID = options.noHeaderId ? "" : ' id="' + headerId(m2) + '"', hLevel = headerLevelStart - 1 + m1.length, header = "<h" + hLevel + hID + ">" + span + "</h" + hLevel + ">";
            return showdown.subParser("hashBlock")(header, options, globals);
          });
          function headerId(m) {
            var title, prefix;
            if (options.customizedHeaderId) {
              var match = m.match(/\{([^{]+?)}\s*$/);
              if (match && match[1]) {
                m = match[1];
              }
            }
            title = m;
            if (showdown.helper.isString(options.prefixHeaderId)) {
              prefix = options.prefixHeaderId;
            } else if (options.prefixHeaderId === true) {
              prefix = "section-";
            } else {
              prefix = "";
            }
            if (!options.rawPrefixHeaderId) {
              title = prefix + title;
            }
            if (options.ghCompatibleHeaderId) {
              title = title.replace(/ /g, "-").replace(/&amp;/g, "").replace(/¨T/g, "").replace(/¨D/g, "").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "").toLowerCase();
            } else if (options.rawHeaderId) {
              title = title.replace(/ /g, "-").replace(/&amp;/g, "&").replace(/¨T/g, "\xA8").replace(/¨D/g, "$").replace(/["']/g, "-").toLowerCase();
            } else {
              title = title.replace(/[^\w]/g, "").toLowerCase();
            }
            if (options.rawPrefixHeaderId) {
              title = prefix + title;
            }
            if (globals.hashLinkCounts[title]) {
              title = title + "-" + globals.hashLinkCounts[title]++;
            } else {
              globals.hashLinkCounts[title] = 1;
            }
            return title;
          }
          text = globals.converter._dispatch("headers.after", text, options, globals);
          return text;
        });
        showdown.subParser("horizontalRule", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("horizontalRule.before", text, options, globals);
          var key = showdown.subParser("hashBlock")("<hr />", options, globals);
          text = text.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, key);
          text = text.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, key);
          text = text.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, key);
          text = globals.converter._dispatch("horizontalRule.after", text, options, globals);
          return text;
        });
        showdown.subParser("images", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("images.before", text, options, globals);
          var inlineRegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, crazyRegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g, base64RegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, referenceRegExp = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g, refShortcutRegExp = /!\[([^\[\]]+)]()()()()()/g;
          function writeImageTagBase64(wholeMatch, altText, linkId, url, width, height, m5, title) {
            url = url.replace(/\s/g, "");
            return writeImageTag(wholeMatch, altText, linkId, url, width, height, m5, title);
          }
          function writeImageTag(wholeMatch, altText, linkId, url, width, height, m5, title) {
            var gUrls = globals.gUrls, gTitles = globals.gTitles, gDims = globals.gDimensions;
            linkId = linkId.toLowerCase();
            if (!title) {
              title = "";
            }
            if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
              url = "";
            } else if (url === "" || url === null) {
              if (linkId === "" || linkId === null) {
                linkId = altText.toLowerCase().replace(/ ?\n/g, " ");
              }
              url = "#" + linkId;
              if (!showdown.helper.isUndefined(gUrls[linkId])) {
                url = gUrls[linkId];
                if (!showdown.helper.isUndefined(gTitles[linkId])) {
                  title = gTitles[linkId];
                }
                if (!showdown.helper.isUndefined(gDims[linkId])) {
                  width = gDims[linkId].width;
                  height = gDims[linkId].height;
                }
              } else {
                return wholeMatch;
              }
            }
            altText = altText.replace(/"/g, "&quot;").replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
            url = url.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
            var result = '<img src="' + url + '" alt="' + altText + '"';
            if (title && showdown.helper.isString(title)) {
              title = title.replace(/"/g, "&quot;").replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
              result += ' title="' + title + '"';
            }
            if (width && height) {
              width = width === "*" ? "auto" : width;
              height = height === "*" ? "auto" : height;
              result += ' width="' + width + '"';
              result += ' height="' + height + '"';
            }
            result += " />";
            return result;
          }
          text = text.replace(referenceRegExp, writeImageTag);
          text = text.replace(base64RegExp, writeImageTagBase64);
          text = text.replace(crazyRegExp, writeImageTag);
          text = text.replace(inlineRegExp, writeImageTag);
          text = text.replace(refShortcutRegExp, writeImageTag);
          text = globals.converter._dispatch("images.after", text, options, globals);
          return text;
        });
        showdown.subParser("italicsAndBold", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("italicsAndBold.before", text, options, globals);
          function parseInside(txt, left, right) {
            return left + txt + right;
          }
          if (options.literalMidWordUnderscores) {
            text = text.replace(/\b___(\S[\s\S]*?)___\b/g, function(wm, txt) {
              return parseInside(txt, "<strong><em>", "</em></strong>");
            });
            text = text.replace(/\b__(\S[\s\S]*?)__\b/g, function(wm, txt) {
              return parseInside(txt, "<strong>", "</strong>");
            });
            text = text.replace(/\b_(\S[\s\S]*?)_\b/g, function(wm, txt) {
              return parseInside(txt, "<em>", "</em>");
            });
          } else {
            text = text.replace(/___(\S[\s\S]*?)___/g, function(wm, m) {
              return /\S$/.test(m) ? parseInside(m, "<strong><em>", "</em></strong>") : wm;
            });
            text = text.replace(/__(\S[\s\S]*?)__/g, function(wm, m) {
              return /\S$/.test(m) ? parseInside(m, "<strong>", "</strong>") : wm;
            });
            text = text.replace(/_([^\s_][\s\S]*?)_/g, function(wm, m) {
              return /\S$/.test(m) ? parseInside(m, "<em>", "</em>") : wm;
            });
          }
          if (options.literalMidWordAsterisks) {
            text = text.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, function(wm, lead, txt) {
              return parseInside(txt, lead + "<strong><em>", "</em></strong>");
            });
            text = text.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, function(wm, lead, txt) {
              return parseInside(txt, lead + "<strong>", "</strong>");
            });
            text = text.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, function(wm, lead, txt) {
              return parseInside(txt, lead + "<em>", "</em>");
            });
          } else {
            text = text.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function(wm, m) {
              return /\S$/.test(m) ? parseInside(m, "<strong><em>", "</em></strong>") : wm;
            });
            text = text.replace(/\*\*(\S[\s\S]*?)\*\*/g, function(wm, m) {
              return /\S$/.test(m) ? parseInside(m, "<strong>", "</strong>") : wm;
            });
            text = text.replace(/\*([^\s*][\s\S]*?)\*/g, function(wm, m) {
              return /\S$/.test(m) ? parseInside(m, "<em>", "</em>") : wm;
            });
          }
          text = globals.converter._dispatch("italicsAndBold.after", text, options, globals);
          return text;
        });
        showdown.subParser("lists", function(text, options, globals) {
          "use strict";
          function processListItems(listStr, trimTrailing) {
            globals.gListLevel++;
            listStr = listStr.replace(/\n{2,}$/, "\n");
            listStr += "\xA80";
            var rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm, isParagraphed = /\n[ \t]*\n(?!¨0)/.test(listStr);
            if (options.disableForced4SpacesIndentedSublists) {
              rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm;
            }
            listStr = listStr.replace(rgx, function(wholeMatch, m1, m2, m3, m4, taskbtn, checked) {
              checked = checked && checked.trim() !== "";
              var item = showdown.subParser("outdent")(m4, options, globals), bulletStyle = "";
              if (taskbtn && options.tasklists) {
                bulletStyle = ' class="task-list-item" style="list-style-type: none;"';
                item = item.replace(/^[ \t]*\[(x|X| )?]/m, function() {
                  var otp = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
                  if (checked) {
                    otp += " checked";
                  }
                  otp += ">";
                  return otp;
                });
              }
              item = item.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function(wm2) {
                return "\xA8A" + wm2;
              });
              if (m1 || item.search(/\n{2,}/) > -1) {
                item = showdown.subParser("githubCodeBlocks")(item, options, globals);
                item = showdown.subParser("blockGamut")(item, options, globals);
              } else {
                item = showdown.subParser("lists")(item, options, globals);
                item = item.replace(/\n$/, "");
                item = showdown.subParser("hashHTMLBlocks")(item, options, globals);
                item = item.replace(/\n\n+/g, "\n\n");
                if (isParagraphed) {
                  item = showdown.subParser("paragraphs")(item, options, globals);
                } else {
                  item = showdown.subParser("spanGamut")(item, options, globals);
                }
              }
              item = item.replace("\xA8A", "");
              item = "<li" + bulletStyle + ">" + item + "</li>\n";
              return item;
            });
            listStr = listStr.replace(/¨0/g, "");
            globals.gListLevel--;
            if (trimTrailing) {
              listStr = listStr.replace(/\s+$/, "");
            }
            return listStr;
          }
          function styleStartNumber(list, listType) {
            if (listType === "ol") {
              var res = list.match(/^ *(\d+)\./);
              if (res && res[1] !== "1") {
                return ' start="' + res[1] + '"';
              }
            }
            return "";
          }
          function parseConsecutiveLists(list, listType, trimTrailing) {
            var olRgx = options.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm, ulRgx = options.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm, counterRxg = listType === "ul" ? olRgx : ulRgx, result = "";
            if (list.search(counterRxg) !== -1) {
              (function parseCL(txt) {
                var pos = txt.search(counterRxg), style2 = styleStartNumber(list, listType);
                if (pos !== -1) {
                  result += "\n\n<" + listType + style2 + ">\n" + processListItems(txt.slice(0, pos), !!trimTrailing) + "</" + listType + ">\n";
                  listType = listType === "ul" ? "ol" : "ul";
                  counterRxg = listType === "ul" ? olRgx : ulRgx;
                  parseCL(txt.slice(pos));
                } else {
                  result += "\n\n<" + listType + style2 + ">\n" + processListItems(txt, !!trimTrailing) + "</" + listType + ">\n";
                }
              })(list);
            } else {
              var style = styleStartNumber(list, listType);
              result = "\n\n<" + listType + style + ">\n" + processListItems(list, !!trimTrailing) + "</" + listType + ">\n";
            }
            return result;
          }
          text = globals.converter._dispatch("lists.before", text, options, globals);
          text += "\xA80";
          if (globals.gListLevel) {
            text = text.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, function(wholeMatch, list, m2) {
              var listType = m2.search(/[*+-]/g) > -1 ? "ul" : "ol";
              return parseConsecutiveLists(list, listType, true);
            });
          } else {
            text = text.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, function(wholeMatch, m1, list, m3) {
              var listType = m3.search(/[*+-]/g) > -1 ? "ul" : "ol";
              return parseConsecutiveLists(list, listType, false);
            });
          }
          text = text.replace(/¨0/, "");
          text = globals.converter._dispatch("lists.after", text, options, globals);
          return text;
        });
        showdown.subParser("metadata", function(text, options, globals) {
          "use strict";
          if (!options.metadata) {
            return text;
          }
          text = globals.converter._dispatch("metadata.before", text, options, globals);
          function parseMetadataContents(content) {
            globals.metadata.raw = content;
            content = content.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
            content = content.replace(/\n {4}/g, " ");
            content.replace(/^([\S ]+): +([\s\S]+?)$/gm, function(wm, key, value) {
              globals.metadata.parsed[key] = value;
              return "";
            });
          }
          text = text.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function(wholematch, format, content) {
            parseMetadataContents(content);
            return "\xA8M";
          });
          text = text.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function(wholematch, format, content) {
            if (format) {
              globals.metadata.format = format;
            }
            parseMetadataContents(content);
            return "\xA8M";
          });
          text = text.replace(/¨M/g, "");
          text = globals.converter._dispatch("metadata.after", text, options, globals);
          return text;
        });
        showdown.subParser("outdent", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("outdent.before", text, options, globals);
          text = text.replace(/^(\t|[ ]{1,4})/gm, "\xA80");
          text = text.replace(/¨0/g, "");
          text = globals.converter._dispatch("outdent.after", text, options, globals);
          return text;
        });
        showdown.subParser("paragraphs", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("paragraphs.before", text, options, globals);
          text = text.replace(/^\n+/g, "");
          text = text.replace(/\n+$/g, "");
          var grafs = text.split(/\n{2,}/g), grafsOut = [], end = grafs.length;
          for (var i = 0; i < end; i++) {
            var str = grafs[i];
            if (str.search(/¨(K|G)(\d+)\1/g) >= 0) {
              grafsOut.push(str);
            } else if (str.search(/\S/) >= 0) {
              str = showdown.subParser("spanGamut")(str, options, globals);
              str = str.replace(/^([ \t]*)/g, "<p>");
              str += "</p>";
              grafsOut.push(str);
            }
          }
          end = grafsOut.length;
          for (i = 0; i < end; i++) {
            var blockText = "", grafsOutIt = grafsOut[i], codeFlag = false;
            while (/¨(K|G)(\d+)\1/.test(grafsOutIt)) {
              var delim = RegExp.$1, num = RegExp.$2;
              if (delim === "K") {
                blockText = globals.gHtmlBlocks[num];
              } else {
                if (codeFlag) {
                  blockText = showdown.subParser("encodeCode")(globals.ghCodeBlocks[num].text, options, globals);
                } else {
                  blockText = globals.ghCodeBlocks[num].codeblock;
                }
              }
              blockText = blockText.replace(/\$/g, "$$$$");
              grafsOutIt = grafsOutIt.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, blockText);
              if (/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(grafsOutIt)) {
                codeFlag = true;
              }
            }
            grafsOut[i] = grafsOutIt;
          }
          text = grafsOut.join("\n");
          text = text.replace(/^\n+/g, "");
          text = text.replace(/\n+$/g, "");
          return globals.converter._dispatch("paragraphs.after", text, options, globals);
        });
        showdown.subParser("runExtension", function(ext, text, options, globals) {
          "use strict";
          if (ext.filter) {
            text = ext.filter(text, globals.converter, options);
          } else if (ext.regex) {
            var re = ext.regex;
            if (!(re instanceof RegExp)) {
              re = new RegExp(re, "g");
            }
            text = text.replace(re, ext.replace);
          }
          return text;
        });
        showdown.subParser("spanGamut", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("spanGamut.before", text, options, globals);
          text = showdown.subParser("codeSpans")(text, options, globals);
          text = showdown.subParser("escapeSpecialCharsWithinTagAttributes")(text, options, globals);
          text = showdown.subParser("encodeBackslashEscapes")(text, options, globals);
          text = showdown.subParser("images")(text, options, globals);
          text = showdown.subParser("anchors")(text, options, globals);
          text = showdown.subParser("autoLinks")(text, options, globals);
          text = showdown.subParser("simplifiedAutoLinks")(text, options, globals);
          text = showdown.subParser("emoji")(text, options, globals);
          text = showdown.subParser("underline")(text, options, globals);
          text = showdown.subParser("italicsAndBold")(text, options, globals);
          text = showdown.subParser("strikethrough")(text, options, globals);
          text = showdown.subParser("ellipsis")(text, options, globals);
          text = showdown.subParser("hashHTMLSpans")(text, options, globals);
          text = showdown.subParser("encodeAmpsAndAngles")(text, options, globals);
          if (options.simpleLineBreaks) {
            if (!/\n\n¨K/.test(text)) {
              text = text.replace(/\n+/g, "<br />\n");
            }
          } else {
            text = text.replace(/  +\n/g, "<br />\n");
          }
          text = globals.converter._dispatch("spanGamut.after", text, options, globals);
          return text;
        });
        showdown.subParser("strikethrough", function(text, options, globals) {
          "use strict";
          function parseInside(txt) {
            if (options.simplifiedAutoLink) {
              txt = showdown.subParser("simplifiedAutoLinks")(txt, options, globals);
            }
            return "<del>" + txt + "</del>";
          }
          if (options.strikethrough) {
            text = globals.converter._dispatch("strikethrough.before", text, options, globals);
            text = text.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function(wm, txt) {
              return parseInside(txt);
            });
            text = globals.converter._dispatch("strikethrough.after", text, options, globals);
          }
          return text;
        });
        showdown.subParser("stripLinkDefinitions", function(text, options, globals) {
          "use strict";
          var regex = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm, base64Regex = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;
          text += "\xA80";
          var replaceFunc = function(wholeMatch, linkId, url, width, height, blankLines, title) {
            linkId = linkId.toLowerCase();
            if (text.toLowerCase().split(linkId).length - 1 < 2) {
              return wholeMatch;
            }
            if (url.match(/^data:.+?\/.+?;base64,/)) {
              globals.gUrls[linkId] = url.replace(/\s/g, "");
            } else {
              globals.gUrls[linkId] = showdown.subParser("encodeAmpsAndAngles")(url, options, globals);
            }
            if (blankLines) {
              return blankLines + title;
            } else {
              if (title) {
                globals.gTitles[linkId] = title.replace(/"|'/g, "&quot;");
              }
              if (options.parseImgDimensions && width && height) {
                globals.gDimensions[linkId] = {
                  width,
                  height
                };
              }
            }
            return "";
          };
          text = text.replace(base64Regex, replaceFunc);
          text = text.replace(regex, replaceFunc);
          text = text.replace(/¨0/, "");
          return text;
        });
        showdown.subParser("tables", function(text, options, globals) {
          "use strict";
          if (!options.tables) {
            return text;
          }
          var tableRgx = /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm, singeColTblRgx = /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;
          function parseStyles(sLine) {
            if (/^:[ \t]*--*$/.test(sLine)) {
              return ' style="text-align:left;"';
            } else if (/^--*[ \t]*:[ \t]*$/.test(sLine)) {
              return ' style="text-align:right;"';
            } else if (/^:[ \t]*--*[ \t]*:$/.test(sLine)) {
              return ' style="text-align:center;"';
            } else {
              return "";
            }
          }
          function parseHeaders(header, style) {
            var id = "";
            header = header.trim();
            if (options.tablesHeaderId || options.tableHeaderId) {
              id = ' id="' + header.replace(/ /g, "_").toLowerCase() + '"';
            }
            header = showdown.subParser("spanGamut")(header, options, globals);
            return "<th" + id + style + ">" + header + "</th>\n";
          }
          function parseCells(cell, style) {
            var subText = showdown.subParser("spanGamut")(cell, options, globals);
            return "<td" + style + ">" + subText + "</td>\n";
          }
          function buildTable(headers, cells) {
            var tb = "<table>\n<thead>\n<tr>\n", tblLgn = headers.length;
            for (var i = 0; i < tblLgn; ++i) {
              tb += headers[i];
            }
            tb += "</tr>\n</thead>\n<tbody>\n";
            for (i = 0; i < cells.length; ++i) {
              tb += "<tr>\n";
              for (var ii = 0; ii < tblLgn; ++ii) {
                tb += cells[i][ii];
              }
              tb += "</tr>\n";
            }
            tb += "</tbody>\n</table>\n";
            return tb;
          }
          function parseTable(rawTable) {
            var i, tableLines = rawTable.split("\n");
            for (i = 0; i < tableLines.length; ++i) {
              if (/^ {0,3}\|/.test(tableLines[i])) {
                tableLines[i] = tableLines[i].replace(/^ {0,3}\|/, "");
              }
              if (/\|[ \t]*$/.test(tableLines[i])) {
                tableLines[i] = tableLines[i].replace(/\|[ \t]*$/, "");
              }
              tableLines[i] = showdown.subParser("codeSpans")(tableLines[i], options, globals);
            }
            var rawHeaders = tableLines[0].split("|").map(function(s) {
              return s.trim();
            }), rawStyles = tableLines[1].split("|").map(function(s) {
              return s.trim();
            }), rawCells = [], headers = [], styles = [], cells = [];
            tableLines.shift();
            tableLines.shift();
            for (i = 0; i < tableLines.length; ++i) {
              if (tableLines[i].trim() === "") {
                continue;
              }
              rawCells.push(tableLines[i].split("|").map(function(s) {
                return s.trim();
              }));
            }
            if (rawHeaders.length < rawStyles.length) {
              return rawTable;
            }
            for (i = 0; i < rawStyles.length; ++i) {
              styles.push(parseStyles(rawStyles[i]));
            }
            for (i = 0; i < rawHeaders.length; ++i) {
              if (showdown.helper.isUndefined(styles[i])) {
                styles[i] = "";
              }
              headers.push(parseHeaders(rawHeaders[i], styles[i]));
            }
            for (i = 0; i < rawCells.length; ++i) {
              var row = [];
              for (var ii = 0; ii < headers.length; ++ii) {
                if (showdown.helper.isUndefined(rawCells[i][ii])) {
                }
                row.push(parseCells(rawCells[i][ii], styles[ii]));
              }
              cells.push(row);
            }
            return buildTable(headers, cells);
          }
          text = globals.converter._dispatch("tables.before", text, options, globals);
          text = text.replace(/\\(\|)/g, showdown.helper.escapeCharactersCallback);
          text = text.replace(tableRgx, parseTable);
          text = text.replace(singeColTblRgx, parseTable);
          text = globals.converter._dispatch("tables.after", text, options, globals);
          return text;
        });
        showdown.subParser("underline", function(text, options, globals) {
          "use strict";
          if (!options.underline) {
            return text;
          }
          text = globals.converter._dispatch("underline.before", text, options, globals);
          if (options.literalMidWordUnderscores) {
            text = text.replace(/\b___(\S[\s\S]*?)___\b/g, function(wm, txt) {
              return "<u>" + txt + "</u>";
            });
            text = text.replace(/\b__(\S[\s\S]*?)__\b/g, function(wm, txt) {
              return "<u>" + txt + "</u>";
            });
          } else {
            text = text.replace(/___(\S[\s\S]*?)___/g, function(wm, m) {
              return /\S$/.test(m) ? "<u>" + m + "</u>" : wm;
            });
            text = text.replace(/__(\S[\s\S]*?)__/g, function(wm, m) {
              return /\S$/.test(m) ? "<u>" + m + "</u>" : wm;
            });
          }
          text = text.replace(/(_)/g, showdown.helper.escapeCharactersCallback);
          text = globals.converter._dispatch("underline.after", text, options, globals);
          return text;
        });
        showdown.subParser("unescapeSpecialChars", function(text, options, globals) {
          "use strict";
          text = globals.converter._dispatch("unescapeSpecialChars.before", text, options, globals);
          text = text.replace(/¨E(\d+)E/g, function(wholeMatch, m1) {
            var charCodeToReplace = parseInt(m1);
            return String.fromCharCode(charCodeToReplace);
          });
          text = globals.converter._dispatch("unescapeSpecialChars.after", text, options, globals);
          return text;
        });
        showdown.subParser("makeMarkdown.blockquote", function(node, globals) {
          "use strict";
          var txt = "";
          if (node.hasChildNodes()) {
            var children = node.childNodes, childrenLength = children.length;
            for (var i = 0; i < childrenLength; ++i) {
              var innerTxt = showdown.subParser("makeMarkdown.node")(children[i], globals);
              if (innerTxt === "") {
                continue;
              }
              txt += innerTxt;
            }
          }
          txt = txt.trim();
          txt = "> " + txt.split("\n").join("\n> ");
          return txt;
        });
        showdown.subParser("makeMarkdown.codeBlock", function(node, globals) {
          "use strict";
          var lang = node.getAttribute("language"), num = node.getAttribute("precodenum");
          return "```" + lang + "\n" + globals.preList[num] + "\n```";
        });
        showdown.subParser("makeMarkdown.codeSpan", function(node) {
          "use strict";
          return "`" + node.innerHTML + "`";
        });
        showdown.subParser("makeMarkdown.emphasis", function(node, globals) {
          "use strict";
          var txt = "";
          if (node.hasChildNodes()) {
            txt += "*";
            var children = node.childNodes, childrenLength = children.length;
            for (var i = 0; i < childrenLength; ++i) {
              txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
            }
            txt += "*";
          }
          return txt;
        });
        showdown.subParser("makeMarkdown.header", function(node, globals, headerLevel) {
          "use strict";
          var headerMark = new Array(headerLevel + 1).join("#"), txt = "";
          if (node.hasChildNodes()) {
            txt = headerMark + " ";
            var children = node.childNodes, childrenLength = children.length;
            for (var i = 0; i < childrenLength; ++i) {
              txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
            }
          }
          return txt;
        });
        showdown.subParser("makeMarkdown.hr", function() {
          "use strict";
          return "---";
        });
        showdown.subParser("makeMarkdown.image", function(node) {
          "use strict";
          var txt = "";
          if (node.hasAttribute("src")) {
            txt += "![" + node.getAttribute("alt") + "](";
            txt += "<" + node.getAttribute("src") + ">";
            if (node.hasAttribute("width") && node.hasAttribute("height")) {
              txt += " =" + node.getAttribute("width") + "x" + node.getAttribute("height");
            }
            if (node.hasAttribute("title")) {
              txt += ' "' + node.getAttribute("title") + '"';
            }
            txt += ")";
          }
          return txt;
        });
        showdown.subParser("makeMarkdown.links", function(node, globals) {
          "use strict";
          var txt = "";
          if (node.hasChildNodes() && node.hasAttribute("href")) {
            var children = node.childNodes, childrenLength = children.length;
            txt = "[";
            for (var i = 0; i < childrenLength; ++i) {
              txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
            }
            txt += "](";
            txt += "<" + node.getAttribute("href") + ">";
            if (node.hasAttribute("title")) {
              txt += ' "' + node.getAttribute("title") + '"';
            }
            txt += ")";
          }
          return txt;
        });
        showdown.subParser("makeMarkdown.list", function(node, globals, type) {
          "use strict";
          var txt = "";
          if (!node.hasChildNodes()) {
            return "";
          }
          var listItems = node.childNodes, listItemsLenght = listItems.length, listNum = node.getAttribute("start") || 1;
          for (var i = 0; i < listItemsLenght; ++i) {
            if (typeof listItems[i].tagName === "undefined" || listItems[i].tagName.toLowerCase() !== "li") {
              continue;
            }
            var bullet = "";
            if (type === "ol") {
              bullet = listNum.toString() + ". ";
            } else {
              bullet = "- ";
            }
            txt += bullet + showdown.subParser("makeMarkdown.listItem")(listItems[i], globals);
            ++listNum;
          }
          txt += "\n<!-- -->\n";
          return txt.trim();
        });
        showdown.subParser("makeMarkdown.listItem", function(node, globals) {
          "use strict";
          var listItemTxt = "";
          var children = node.childNodes, childrenLenght = children.length;
          for (var i = 0; i < childrenLenght; ++i) {
            listItemTxt += showdown.subParser("makeMarkdown.node")(children[i], globals);
          }
          if (!/\n$/.test(listItemTxt)) {
            listItemTxt += "\n";
          } else {
            listItemTxt = listItemTxt.split("\n").join("\n    ").replace(/^ {4}$/gm, "").replace(/\n\n+/g, "\n\n");
          }
          return listItemTxt;
        });
        showdown.subParser("makeMarkdown.node", function(node, globals, spansOnly) {
          "use strict";
          spansOnly = spansOnly || false;
          var txt = "";
          if (node.nodeType === 3) {
            return showdown.subParser("makeMarkdown.txt")(node, globals);
          }
          if (node.nodeType === 8) {
            return "<!--" + node.data + "-->\n\n";
          }
          if (node.nodeType !== 1) {
            return "";
          }
          var tagName = node.tagName.toLowerCase();
          switch (tagName) {
            case "h1":
              if (!spansOnly) {
                txt = showdown.subParser("makeMarkdown.header")(node, globals, 1) + "\n\n";
              }
              break;
            case "h2":
              if (!spansOnly) {
                txt = showdown.subParser("makeMarkdown.header")(node, globals, 2) + "\n\n";
              }
              break;
            case "h3":
              if (!spansOnly) {
                txt = showdown.subParser("makeMarkdown.header")(node, globals, 3) + "\n\n";
              }
              break;
            case "h4":
              if (!spansOnly) {
                txt = showdown.subParser("makeMarkdown.header")(node, globals, 4) + "\n\n";
              }
              break;
            case "h5":
              if (!spansOnly) {
                txt = showdown.subParser("makeMarkdown.header")(node, globals, 5) + "\n\n";
              }
              break;
            case "h6":
              if (!spansOnly) {
                txt = showdown.subParser("makeMarkdown.header")(node, globals, 6) + "\n\n";
              }
              break;
            case "p":
              if (!spansOnly) {
                txt = showdown.subParser("makeMarkdown.paragraph")(node, globals) + "\n\n";
              }
              break;
            case "blockquote":
              if (!spansOnly) {
                txt = showdown.subParser("makeMarkdown.blockquote")(node, globals) + "\n\n";
              }
              break;
            case "hr":
              if (!spansOnly) {
                txt = showdown.subParser("makeMarkdown.hr")(node, globals) + "\n\n";
              }
              break;
            case "ol":
              if (!spansOnly) {
                txt = showdown.subParser("makeMarkdown.list")(node, globals, "ol") + "\n\n";
              }
              break;
            case "ul":
              if (!spansOnly) {
                txt = showdown.subParser("makeMarkdown.list")(node, globals, "ul") + "\n\n";
              }
              break;
            case "precode":
              if (!spansOnly) {
                txt = showdown.subParser("makeMarkdown.codeBlock")(node, globals) + "\n\n";
              }
              break;
            case "pre":
              if (!spansOnly) {
                txt = showdown.subParser("makeMarkdown.pre")(node, globals) + "\n\n";
              }
              break;
            case "table":
              if (!spansOnly) {
                txt = showdown.subParser("makeMarkdown.table")(node, globals) + "\n\n";
              }
              break;
            case "code":
              txt = showdown.subParser("makeMarkdown.codeSpan")(node, globals);
              break;
            case "em":
            case "i":
              txt = showdown.subParser("makeMarkdown.emphasis")(node, globals);
              break;
            case "strong":
            case "b":
              txt = showdown.subParser("makeMarkdown.strong")(node, globals);
              break;
            case "del":
              txt = showdown.subParser("makeMarkdown.strikethrough")(node, globals);
              break;
            case "a":
              txt = showdown.subParser("makeMarkdown.links")(node, globals);
              break;
            case "img":
              txt = showdown.subParser("makeMarkdown.image")(node, globals);
              break;
            default:
              txt = node.outerHTML + "\n\n";
          }
          return txt;
        });
        showdown.subParser("makeMarkdown.paragraph", function(node, globals) {
          "use strict";
          var txt = "";
          if (node.hasChildNodes()) {
            var children = node.childNodes, childrenLength = children.length;
            for (var i = 0; i < childrenLength; ++i) {
              txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
            }
          }
          txt = txt.trim();
          return txt;
        });
        showdown.subParser("makeMarkdown.pre", function(node, globals) {
          "use strict";
          var num = node.getAttribute("prenum");
          return "<pre>" + globals.preList[num] + "</pre>";
        });
        showdown.subParser("makeMarkdown.strikethrough", function(node, globals) {
          "use strict";
          var txt = "";
          if (node.hasChildNodes()) {
            txt += "~~";
            var children = node.childNodes, childrenLength = children.length;
            for (var i = 0; i < childrenLength; ++i) {
              txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
            }
            txt += "~~";
          }
          return txt;
        });
        showdown.subParser("makeMarkdown.strong", function(node, globals) {
          "use strict";
          var txt = "";
          if (node.hasChildNodes()) {
            txt += "**";
            var children = node.childNodes, childrenLength = children.length;
            for (var i = 0; i < childrenLength; ++i) {
              txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
            }
            txt += "**";
          }
          return txt;
        });
        showdown.subParser("makeMarkdown.table", function(node, globals) {
          "use strict";
          var txt = "", tableArray = [[], []], headings = node.querySelectorAll("thead>tr>th"), rows = node.querySelectorAll("tbody>tr"), i, ii;
          for (i = 0; i < headings.length; ++i) {
            var headContent = showdown.subParser("makeMarkdown.tableCell")(headings[i], globals), allign = "---";
            if (headings[i].hasAttribute("style")) {
              var style = headings[i].getAttribute("style").toLowerCase().replace(/\s/g, "");
              switch (style) {
                case "text-align:left;":
                  allign = ":---";
                  break;
                case "text-align:right;":
                  allign = "---:";
                  break;
                case "text-align:center;":
                  allign = ":---:";
                  break;
              }
            }
            tableArray[0][i] = headContent.trim();
            tableArray[1][i] = allign;
          }
          for (i = 0; i < rows.length; ++i) {
            var r = tableArray.push([]) - 1, cols = rows[i].getElementsByTagName("td");
            for (ii = 0; ii < headings.length; ++ii) {
              var cellContent = " ";
              if (typeof cols[ii] !== "undefined") {
                cellContent = showdown.subParser("makeMarkdown.tableCell")(cols[ii], globals);
              }
              tableArray[r].push(cellContent);
            }
          }
          var cellSpacesCount = 3;
          for (i = 0; i < tableArray.length; ++i) {
            for (ii = 0; ii < tableArray[i].length; ++ii) {
              var strLen = tableArray[i][ii].length;
              if (strLen > cellSpacesCount) {
                cellSpacesCount = strLen;
              }
            }
          }
          for (i = 0; i < tableArray.length; ++i) {
            for (ii = 0; ii < tableArray[i].length; ++ii) {
              if (i === 1) {
                if (tableArray[i][ii].slice(-1) === ":") {
                  tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii].slice(-1), cellSpacesCount - 1, "-") + ":";
                } else {
                  tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii], cellSpacesCount, "-");
                }
              } else {
                tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii], cellSpacesCount);
              }
            }
            txt += "| " + tableArray[i].join(" | ") + " |\n";
          }
          return txt.trim();
        });
        showdown.subParser("makeMarkdown.tableCell", function(node, globals) {
          "use strict";
          var txt = "";
          if (!node.hasChildNodes()) {
            return "";
          }
          var children = node.childNodes, childrenLength = children.length;
          for (var i = 0; i < childrenLength; ++i) {
            txt += showdown.subParser("makeMarkdown.node")(children[i], globals, true);
          }
          return txt.trim();
        });
        showdown.subParser("makeMarkdown.txt", function(node) {
          "use strict";
          var txt = node.nodeValue;
          txt = txt.replace(/ +/g, " ");
          txt = txt.replace(/¨NBSP;/g, " ");
          txt = showdown.helper.unescapeHTMLEntities(txt);
          txt = txt.replace(/([*_~|`])/g, "\\$1");
          txt = txt.replace(/^(\s*)>/g, "\\$1>");
          txt = txt.replace(/^#/gm, "\\#");
          txt = txt.replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3");
          txt = txt.replace(/^( {0,3}\d+)\./gm, "$1\\.");
          txt = txt.replace(/^( {0,3})([+-])/gm, "$1\\$2");
          txt = txt.replace(/]([\s]*)\(/g, "\\]$1\\(");
          txt = txt.replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:");
          return txt;
        });
        var root = this;
        if (typeof define === "function" && define.amd) {
          define(function() {
            "use strict";
            return showdown;
          });
        } else if (typeof module !== "undefined" && module.exports) {
          module.exports = showdown;
        } else {
          root.showdown = showdown;
        }
      }).call(exports);
    }
  });

  // xf-markdown.ts
  var import_xss = __toESM(require_lib2());
  var import_prismjs = __toESM(require_prism());
  var import_jquery = __toESM(require_jquery());
  var import_showdown = __toESM(require_showdown());
  var loc = window.location.href;
  var ATTR = {
    basic: ["id", "style", "class"],
    none: []
  };
  var xssRule = {
    whiteList: {
      h1: ATTR.basic,
      h2: ATTR.basic,
      h3: ATTR.basic,
      h4: ATTR.basic,
      h5: ATTR.basic,
      h6: ATTR.basic,
      span: ATTR.basic,
      b: ATTR.basic,
      strong: ATTR.basic,
      em: ATTR.basic,
      i: ATTR.basic,
      p: ATTR.basic,
      center: ATTR.basic,
      small: ATTR.basic,
      iframe: ATTR.none,
      table: ATTR.basic,
      td: ATTR.basic,
      th: ATTR.basic,
      tr: ATTR.none,
      thead: ATTR.basic,
      tbody: ATTR.basic,
      ul: ATTR.basic,
      ol: ATTR.basic,
      li: ATTR.basic,
      img: ["src", "style", "class", "id", "alt", "title", "height", "weight", "loading"],
      div: ["style", "class", "title", "id"],
      blockquote: ATTR.basic,
      del: ATTR.none,
      hr: ATTR.none,
      br: ATTR.none,
      button: ["type", "class", "id", "style"],
      pre: ["class", "id", "style", "dir"],
      code: ATTR.basic,
      a: ["href", "style", "class", "target", "title", "rel"],
      u: ATTR.basic
    },
    onIgnoreTagAttr: (tag, name, value, isWhite) => {
      if (name.startsWith("data-"))
        return name + '="' + (0, import_xss.escapeAttrValue)(value) + '"';
    }
  };
  var Markdown = new import_showdown.default.Converter();
  Markdown.setFlavor("github");
  function removeFirstReturn(from) {
    return from.replace("\n", "");
  }
  function getMarkdownResult(rawHtml, rawText) {
    let result = [];
    let k, l, e, f;
    let sp = rawHtml.split("[MD]");
    let spT = rawText.split("[MD]");
    for (let i = 0; i < sp.length; i++) {
      e = sp[i];
      f = spT[i];
      if (!e.includes("[/MD]")) {
        result.push(recoverMD(removeFirstReturn(e)));
        continue;
      }
      k = e.split("[/MD]");
      l = f.split("[/MD]");
      result.push(Markdown.makeHtml(recoverMD(l[0])));
      result.push(removeFirstReturn(recoverMD(k[1])));
    }
    return result;
  }
  function recoverMD(raw) {
    return raw.replace(/\\\[MD\\\]/g, "[MD]").replace(/\\\[\/MD\\\]/g, "[/MD]");
  }
  function md(jqObject) {
    let content = jqObject;
    let html, result, text, el;
    content.each((i, e) => {
      el = (0, import_jquery.default)(e);
      html = el.html();
      text = el.text();
      result = getMarkdownResult(html, text).join("");
      if (result.trim().length > 0) {
        el.html(filterXSS(result, xssRule));
      } else {
        console.warn("markdown error.");
      }
    });
  }
  function post(url, data) {
    return import_jquery.default.ajax({
      method: "POST",
      url,
      data
    });
  }
  function convertRawPreCode(targetJq) {
    targetJq.each((i, e) => {
      (0, import_jquery.default)(e).html((0, import_jquery.default)(e).html().replace(/<pre(.*?)class="(\w+)"(.*?)data-lang="(\w+)"(.*?)><code>((.|\n)*?)<\/code><\/pre>/g, `<pre$1class="$2 language-$4"$3data-lang="$4"$5><code class="language-$4">$6</code></pre>`).replace(/<pre><code class=".*?language-(\w+).*?">((.|\n)*?)<\/code><\/pre>/g, `<div class="bbCodeBlock bbCodeBlock--screenLimited bbCodeBlock--code"><div class="bbCodeBlock-title">$1:</div><div class="bbCodeBlock-content"><pre class="bbCodeCode line-numbers language-$1"><code class="language-$1">$2</code></pre></div></div>`));
    });
    import_prismjs.default.highlightAllUnder(targetJq[0]);
  }
  function main() {
    (0, import_jquery.default)(() => {
      post("/css.php", {
        css: "public:bb_code.less",
        s: "51",
        l: "2"
      }).done((a) => {
        let style = document.createElement("style");
        style.innerText = a;
        style.setAttribute("xf-markdown", "");
        document.head.appendChild(style);
      });
      let targetEl = null;
      if (loc.includes("threads/")) {
        targetEl = (0, import_jquery.default)("article.message-body .bbWrapper");
      }
      if (loc.includes("pages/how-2-ask")) {
        targetEl = (0, import_jquery.default)(".p-body-pageContent .block-body.block-row");
      }
      if (loc.includes("resources/")) {
        targetEl = (0, import_jquery.default)(".resourceBody .bbWrapper");
      }
      if (targetEl === null)
        return;
      md(targetEl);
      convertRawPreCode(targetEl);
      if (loc.includes("post-thread") || loc.includes("threads/") || loc.includes("/edit")) {
        let styleObserver = new MutationObserver((mutations) => {
          mutations.forEach((r) => {
            let tg = r.target;
            if (tg.style.display === "") {
              let el = (0, import_jquery.default)(".xfPreview .bbWrapper");
              md(el);
              convertRawPreCode(el);
            }
          });
        });
        let observer = new MutationObserver((mutations) => {
          mutations.forEach((r) => {
            if (loc.includes("threads/")) {
              let tg = r.target;
              if (tg) {
                let className = tg.getAttribute("class");
                if (className === null)
                  return;
                if (className.includes("message-cell message-cell--main is-editing")) {
                  let tgChild = tg.querySelector("article.message-body .bbWrapper");
                  if (tgChild !== null) {
                    let el = (0, import_jquery.default)(tgChild);
                    if (el.text().includes("[MD]") && el.text().includes("[/MD]")) {
                      md(el);
                      convertRawPreCode(el);
                    }
                  }
                }
              }
            }
            if (r.addedNodes.length === 0)
              return;
            for (let i = 0; i < r.addedNodes.length; i++) {
              let updatedNode = r.addedNodes[i];
              if (updatedNode.getAttribute) {
                let className = updatedNode.getAttribute("class");
                if (className === null)
                  continue;
                let classNames = className.split(" ");
                if (classNames.includes("xfPreview")) {
                  styleObserver.observe(updatedNode, {
                    attributes: true,
                    attributeFilter: ["style"]
                  });
                }
                if (classNames.includes("message") && classNames.includes("message--post")) {
                  let tgChild = updatedNode.querySelector("article.message-body .bbWrapper");
                  if (tgChild !== null) {
                    let el = (0, import_jquery.default)(tgChild);
                    md(el);
                    convertRawPreCode(el);
                  }
                }
              }
            }
          });
        });
        observer.observe(loc.includes("threads/") ? document.querySelector(".p-body-pageContent") : document.body, {
          childList: true,
          subtree: true,
          attributes: false,
          characterData: false
        });
      }
    });
  }
  main();
})();
/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
/*! showdown v 2.0.3 - 08-03-2022 */
/**
 * @package xenforo-markdown
 * @author Subilan
 * @license MIT
 * 
 * markdown.css must be loaded to display correctly.
 */
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
