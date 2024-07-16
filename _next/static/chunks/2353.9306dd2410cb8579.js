(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2353],
  {
    1143: function (e) {
      "use strict";
      e.exports = function (e, t, n, i, r, o, s, a) {
        if (!e) {
          var c;
          if (void 0 === t)
            c = Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            );
          else {
            var u = [n, i, r, o, s, a],
              l = 0;
            (c = Error(
              t.replace(/%s/g, function () {
                return u[l++];
              })
            )).name = "Invariant Violation";
          }
          throw ((c.framesToPop = 1), c);
        }
      };
    },
    973: function (e, t, n) {
      var i = n(1169),
        obj2mq = function (e) {
          var t = "",
            n = Object.keys(e);
          return (
            n.forEach(function (r, o) {
              var s,
                a = e[r];
              (s = r = i(r)),
                /[height|width]$/.test(s) &&
                  "number" == typeof a &&
                  (a += "px"),
                !0 === a
                  ? (t += r)
                  : !1 === a
                  ? (t += "not " + r)
                  : (t += "(" + r + ": " + a + ")"),
                o < n.length - 1 && (t += " and ");
            }),
            t
          );
        };
      e.exports = function (e) {
        var t = "";
        return "string" == typeof e
          ? e
          : e instanceof Array
          ? (e.forEach(function (n, i) {
              (t += obj2mq(n)), i < e.length - 1 && (t += ", ");
            }),
            t)
          : obj2mq(e);
      };
    },
    2353: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return ProjectCard;
          },
        });
      var i = n(5893),
        r = n(8963);
      n(7294);
      var o = n(5615),
        s = n(1664),
        a = n.n(s),
        c = n(5675),
        u = n.n(c),
        l = {
          hidden: function (e) {
            return { opacity: 0.01, y: (e || {}).yTranslate + 100 };
          },
          show: function (e) {
            var t = e || {},
              n = t.delayed;
            return {
              opacity: 1,
              y: t.yTranslate,
              transition: {
                delay: n || 0,
                ease: [0.165, 0.84, 0.44, 1],
                duration: 1.3,
              },
            };
          },
        };
      function ProjectCard(e) {
        var t = e.thumbnailDesktop,
          n = e.thumbnailTablet,
          s = e.thumbnailMobile,
          c = e.title,
          h = e.desc,
          p = e.descTitle,
          f = e.classes,
          d = e.rotate,
          m = void 0 !== d && d,
          y = e.isHome,
          v = e.delayedProject,
          b = e.yTranslate,
          g = e.marginViewport,
          _ = e.marginTop,
          j = e.url,
          M = e.aspectRatioImage;
        return (0, i.jsxs)(r.E.article, {
          className: ["project-card", f].join(" "),
          variants: l,
          custom: { delayed: v, yTranslate: void 0 === b ? 0 : b },
          initial: "hidden",
          whileInView: "show",
          viewport: { once: !0, margin: void 0 === g ? "0px" : g },
          style: { marginTop: void 0 === _ ? "0px" : _ },
          children: [
            (0, i.jsx)(r.E.div, {
              className: "project-card__img",
              style: { overflow: "hidden" },
              children: (0, i.jsx)(a(), {
                href: j,
                children: (0, i.jsx)(o.Z, {
                  queries: {
                    small: "(max-width: 768px)",
                    tablet: "(min-width: 768px)",
                    desktop: "(min-width: 992px)",
                  },
                  children: function (e) {
                    return (0, i.jsx)(i.Fragment, {
                      children: (0, i.jsx)(r.E.div, {
                        whileHover: { scale: 1.075, rotate: m ? -4.5 : 0 },
                        className: "img-fluid",
                        transition: { duration: 0.45 },
                        style: {
                          position: "relative",
                          width: "100%",
                          height: "100%",
                          aspectRatio: M,
                        },
                        children: (0, i.jsx)(u(), {
                          src: e.desktop ? t : e.tablet ? n : s,
                          alt: "Picture of the authorzzz",
                          priority: !0,
                          fill: !0,
                        }),
                      }),
                    });
                  },
                }),
              }),
            }),
            (0, i.jsxs)("div", {
              className: "project-card__content",
              children: [
                (0, i.jsx)("p", {
                  className: "project-card__content__title",
                  children: (0, i.jsx)(a(), {
                    href: j,
                    children: c || "Splitup - Mobile Design",
                  }),
                }),
                (0, i.jsxs)("p", {
                  className: "project-card__content__desc ".concat(
                    void 0 !== y && y && "home"
                  ),
                  children: [
                    (0, i.jsx)("span", { children: p }),
                    h ||
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat dictumst at mattis volutpat in ultrices senectus urna.",
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    2703: function (e, t, n) {
      "use strict";
      var i = n(414);
      function emptyFunction() {}
      function emptyFunctionWithReset() {}
      (emptyFunctionWithReset.resetWarningCache = emptyFunction),
        (e.exports = function () {
          function shim(e, t, n, r, o, s) {
            if (s !== i) {
              var a = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((a.name = "Invariant Violation"), a);
            }
          }
          function getShim() {
            return shim;
          }
          shim.isRequired = shim;
          var e = {
            array: shim,
            bigint: shim,
            bool: shim,
            func: shim,
            number: shim,
            object: shim,
            string: shim,
            symbol: shim,
            any: shim,
            arrayOf: getShim,
            element: shim,
            elementType: shim,
            instanceOf: getShim,
            node: shim,
            objectOf: getShim,
            oneOf: getShim,
            oneOfType: getShim,
            shape: getShim,
            exact: getShim,
            checkPropTypes: emptyFunctionWithReset,
            resetWarningCache: emptyFunction,
          };
          return (e.PropTypes = e), e;
        });
    },
    5697: function (e, t, n) {
      e.exports = n(2703)();
    },
    414: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    5615: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return v;
        },
      });
      var i = n(7462),
        r = n(9611),
        o = n(7326),
        s = n(4942),
        a = n(7294),
        c = n(5697),
        u = n.n(c),
        l = n(1143),
        h = n.n(l),
        p = n(973),
        f = n.n(p),
        d = (function () {
          function MediaQueryListener(e, t, n) {
            var i = this;
            (this.nativeMediaQueryList = e.matchMedia(t)),
              (this.active = !0),
              (this.cancellableListener = function () {
                (i.matches = i.nativeMediaQueryList.matches),
                  i.active && n.apply(void 0, arguments);
              }),
              this.nativeMediaQueryList.addListener(this.cancellableListener),
              (this.matches = this.nativeMediaQueryList.matches);
          }
          return (
            (MediaQueryListener.prototype.cancel = function () {
              (this.active = !1),
                this.nativeMediaQueryList.removeListener(
                  this.cancellableListener
                );
            }),
            MediaQueryListener
          );
        })(),
        m = u().oneOfType([
          u().string,
          u().object,
          u().arrayOf(u().object.isRequired),
        ]),
        y = (function (e) {
          function Media(t) {
            var n, r;
            return ((n = e.call(this, t) || this),
            (0, s.Z)((0, o.Z)((0, o.Z)(n)), "queries", []),
            (0, s.Z)((0, o.Z)((0, o.Z)(n)), "getMatches", function () {
              var e, t;
              return 1 ===
                (t = Object.keys(
                  (e = n.queries.reduce(function (e, t) {
                    var n,
                      r = t.name,
                      o = t.mqListener;
                    return (0, i.Z)({}, e, (((n = {})[r] = o.matches), n));
                  }, {}))
                )).length && "__DEFAULT__" === t[0]
                ? e.__DEFAULT__
                : e;
            }),
            (0, s.Z)((0, o.Z)((0, o.Z)(n)), "updateMatches", function () {
              var e = n.getMatches();
              n.setState(function () {
                return { matches: e };
              }, n.onChange);
            }),
            !(!t.query && !t.queries) || (t.query && t.queries) || h()(!1),
            void 0 !== t.defaultMatches &&
              t.query &&
              "boolean" != typeof t.defaultMatches &&
              h()(!1),
            void 0 !== t.defaultMatches &&
              t.queries &&
              "object" != typeof t.defaultMatches &&
              h()(!1),
            "object" != typeof window)
              ? ((r =
                  void 0 !== t.defaultMatches
                    ? t.defaultMatches
                    : !!t.query ||
                      Object.keys(n.props.queries).reduce(function (e, t) {
                        var n;
                        return (0, i.Z)({}, e, (((n = {})[t] = !0), n));
                      }, {})),
                (n.state = { matches: r }),
                (0, o.Z)(n))
              : (n.initialize(),
                (n.state = {
                  matches:
                    void 0 !== n.props.defaultMatches
                      ? n.props.defaultMatches
                      : n.getMatches(),
                }),
                n.onChange(),
                n);
          }
          (Media.prototype = Object.create(e.prototype)),
            (Media.prototype.constructor = Media),
            (0, r.Z)(Media, e);
          var t = Media.prototype;
          return (
            (t.initialize = function () {
              var e = this,
                t = this.props.targetWindow || window;
              "function" != typeof t.matchMedia && h()(!1);
              var n = this.props.queries || { __DEFAULT__: this.props.query };
              this.queries = Object.keys(n).map(function (i) {
                var r = n[i],
                  o = "string" != typeof r ? f()(r) : r;
                return { name: i, mqListener: new d(t, o, e.updateMatches) };
              });
            }),
            (t.componentDidMount = function () {
              this.initialize(),
                void 0 !== this.props.defaultMatches && this.updateMatches();
            }),
            (t.onChange = function () {
              var e = this.props.onChange;
              e && e(this.state.matches);
            }),
            (t.componentWillUnmount = function () {
              this.queries.forEach(function (e) {
                return e.mqListener.cancel();
              });
            }),
            (t.render = function () {
              var e = this.props,
                t = e.children,
                n = e.render,
                i = this.state.matches,
                r =
                  "object" == typeof i
                    ? Object.keys(i).some(function (e) {
                        return i[e];
                      })
                    : i;
              return n
                ? r
                  ? n(i)
                  : null
                : t
                ? "function" == typeof t
                  ? t(i)
                  : (!Array.isArray(t) || t.length) && r
                  ? a.Children.only(t) &&
                    "string" == typeof a.Children.only(t).type
                    ? a.Children.only(t)
                    : a.cloneElement(a.Children.only(t), { matches: i })
                  : null
                : null;
            }),
            Media
          );
        })(a.Component);
      (0, s.Z)(y, "propTypes", {
        defaultMatches: u().oneOfType([u().bool, u().objectOf(u().bool)]),
        query: m,
        queries: u().objectOf(m),
        render: u().func,
        children: u().oneOfType([u().node, u().func]),
        targetWindow: u().object,
        onChange: u().func,
      });
      var v = y;
    },
    1169: function (e) {
      e.exports = function (e) {
        return e
          .replace(/[A-Z]/g, function (e) {
            return "-" + e.toLowerCase();
          })
          .toLowerCase();
      };
    },
    7326: function (e, t, n) {
      "use strict";
      function _assertThisInitialized(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      n.d(t, {
        Z: function () {
          return _assertThisInitialized;
        },
      });
    },
    4942: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return _defineProperty;
        },
      });
      var i = n(3997);
      function _defineProperty(e, t, n) {
        return (
          (t = (0, i.Z)(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
    },
    9611: function (e, t, n) {
      "use strict";
      function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
      }
      n.d(t, {
        Z: function () {
          return _setPrototypeOf;
        },
      });
    },
    3997: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return _toPropertyKey;
        },
      });
      var i = n(1002);
      function _toPropertyKey(e) {
        var t = (function (e, t) {
          if ("object" !== (0, i.Z)(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== (0, i.Z)(r)) return r;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === (0, i.Z)(t) ? t : String(t);
      }
    },
    1002: function (e, t, n) {
      "use strict";
      function _typeof(e) {
        return (_typeof =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      n.d(t, {
        Z: function () {
          return _typeof;
        },
      });
    },
  },
]);
