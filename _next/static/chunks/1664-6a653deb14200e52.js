(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1664],
  {
    7498: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          PrefetchKind: function () {
            return n;
          },
          ACTION_REFRESH: function () {
            return o;
          },
          ACTION_NAVIGATE: function () {
            return u;
          },
          ACTION_RESTORE: function () {
            return a;
          },
          ACTION_SERVER_PATCH: function () {
            return l;
          },
          ACTION_PREFETCH: function () {
            return f;
          },
          ACTION_FAST_REFRESH: function () {
            return c;
          },
          ACTION_SERVER_ACTION: function () {
            return i;
          },
        });
      var r,
        n,
        o = "refresh",
        u = "navigate",
        a = "restore",
        l = "server-patch",
        f = "prefetch",
        c = "fast-refresh",
        i = "server-action";
      ((r = n || (n = {})).AUTO = "auto"),
        (r.FULL = "full"),
        (r.TEMPORARY = "temporary"),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    30: function (e, t, r) {
      "use strict";
      function getDomainLocale(e, t, r, n) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return getDomainLocale;
          },
        }),
        r(2866),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    5170: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(2253),
        o = r(7702),
        u = r(1309);
      r(8421),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return g;
          },
        });
      var a = r(8754)._(r(7294)),
        l = r(4450),
        f = r(2227),
        c = r(4364),
        i = r(109),
        s = r(3607),
        d = r(1823),
        p = r(9031),
        v = r(920),
        h = r(30),
        b = r(7192),
        y = r(7498),
        _ = new Set();
      function prefetch(e, t, r, n, o, u) {
        if (u || (0, f.isLocalURL)(t)) {
          if (!n.bypassPrefetchedCheck) {
            var a =
              t +
              "%" +
              r +
              "%" +
              (void 0 !== n.locale
                ? n.locale
                : "locale" in e
                ? e.locale
                : void 0);
            if (_.has(a)) return;
            _.add(a);
          }
          Promise.resolve(u ? e.prefetch(t, o) : e.prefetch(t, r, n)).catch(
            function (e) {}
          );
        }
      }
      function formatStringOrUrl(e) {
        return "string" == typeof e ? e : (0, c.formatUrl)(e);
      }
      var g = a.default.forwardRef(function (e, t) {
        var r,
          c,
          _ = e.href,
          g = e.as,
          O = e.children,
          m = e.prefetch,
          C = void 0 === m ? null : m,
          E = e.passHref,
          M = e.replace,
          P = e.shallow,
          j = e.scroll,
          T = e.locale,
          R = e.onClick,
          k = e.onMouseEnter,
          A = e.onTouchStart,
          I = e.legacyBehavior,
          S = void 0 !== I && I,
          L = o._(e, [
            "href",
            "as",
            "children",
            "prefetch",
            "passHref",
            "replace",
            "shallow",
            "scroll",
            "locale",
            "onClick",
            "onMouseEnter",
            "onTouchStart",
            "legacyBehavior",
          ]);
        (r = O),
          S &&
            ("string" == typeof r || "number" == typeof r) &&
            (r = a.default.createElement("a", null, r));
        var N = a.default.useContext(d.RouterContext),
          U = a.default.useContext(p.AppRouterContext),
          w = null != N ? N : U,
          x = !N,
          H = !1 !== C,
          K = null === C ? y.PrefetchKind.AUTO : y.PrefetchKind.FULL,
          D = a.default.useMemo(
            function () {
              if (!N) {
                var e = formatStringOrUrl(_);
                return { href: e, as: g ? formatStringOrUrl(g) : e };
              }
              var t = u._((0, l.resolveHref)(N, _, !0), 2),
                r = t[0],
                n = t[1];
              return { href: r, as: g ? (0, l.resolveHref)(N, g) : n || r };
            },
            [N, _, g]
          ),
          F = D.href,
          B = D.as,
          V = a.default.useRef(F),
          q = a.default.useRef(B);
        S && (c = a.default.Children.only(r));
        var z = S ? c && "object" == typeof c && c.ref : t,
          G = u._((0, v.useIntersection)({ rootMargin: "200px" }), 3),
          Y = G[0],
          J = G[1],
          Q = G[2],
          W = a.default.useCallback(
            function (e) {
              (q.current !== B || V.current !== F) &&
                (Q(), (q.current = B), (V.current = F)),
                Y(e),
                z &&
                  ("function" == typeof z
                    ? z(e)
                    : "object" == typeof z && (z.current = e));
            },
            [B, z, F, Q, Y]
          );
        a.default.useEffect(
          function () {
            w && J && H && prefetch(w, F, B, { locale: T }, { kind: K }, x);
          },
          [B, F, J, T, H, null == N ? void 0 : N.locale, w, x, K]
        );
        var X = {
          ref: W,
          onClick: function (e) {
            S || "function" != typeof R || R(e),
              S &&
                c.props &&
                "function" == typeof c.props.onClick &&
                c.props.onClick(e),
              w &&
                !e.defaultPrevented &&
                (function (e, t, r, n, o, u, l, c, i, s) {
                  if (
                    !(
                      "A" === e.currentTarget.nodeName.toUpperCase() &&
                      (((d = e.currentTarget.getAttribute("target")) &&
                        "_self" !== d) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which) ||
                        (!i && !(0, f.isLocalURL)(r)))
                    )
                  ) {
                    e.preventDefault();
                    var d,
                      navigate = function () {
                        var e = null == l || l;
                        "beforePopState" in t
                          ? t[o ? "replace" : "push"](r, n, {
                              shallow: u,
                              locale: c,
                              scroll: e,
                            })
                          : t[o ? "replace" : "push"](n || r, {
                              forceOptimisticNavigation: !s,
                              scroll: e,
                            });
                      };
                    i ? a.default.startTransition(navigate) : navigate();
                  }
                })(e, w, F, B, M, P, j, T, x, H);
          },
          onMouseEnter: function (e) {
            S || "function" != typeof k || k(e),
              S &&
                c.props &&
                "function" == typeof c.props.onMouseEnter &&
                c.props.onMouseEnter(e),
              w &&
                (H || !x) &&
                prefetch(
                  w,
                  F,
                  B,
                  { locale: T, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: K },
                  x
                );
          },
          onTouchStart: function (e) {
            S || "function" != typeof A || A(e),
              S &&
                c.props &&
                "function" == typeof c.props.onTouchStart &&
                c.props.onTouchStart(e),
              w &&
                (H || !x) &&
                prefetch(
                  w,
                  F,
                  B,
                  { locale: T, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: K },
                  x
                );
          },
        };
        if ((0, i.isAbsoluteUrl)(B)) X.href = B;
        else if (!S || E || ("a" === c.type && !("href" in c.props))) {
          var Z = void 0 !== T ? T : null == N ? void 0 : N.locale,
            $ =
              (null == N ? void 0 : N.isLocaleDomain) &&
              (0, h.getDomainLocale)(
                B,
                Z,
                null == N ? void 0 : N.locales,
                null == N ? void 0 : N.domainLocales
              );
          X.href =
            $ ||
            (0, b.addBasePath)(
              (0, s.addLocale)(B, Z, null == N ? void 0 : N.defaultLocale)
            );
        }
        return S
          ? a.default.cloneElement(c, X)
          : a.default.createElement("a", n._({}, L, X), r);
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    920: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(1309);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return useIntersection;
          },
        });
      var o = r(7294),
        u = r(3436),
        a = "function" == typeof IntersectionObserver,
        l = new Map(),
        f = [];
      function useIntersection(e) {
        var t = e.rootRef,
          r = e.rootMargin,
          c = e.disabled || !a,
          i = n._((0, o.useState)(!1), 2),
          s = i[0],
          d = i[1],
          p = (0, o.useRef)(null),
          v = (0, o.useCallback)(function (e) {
            p.current = e;
          }, []);
        return (
          (0, o.useEffect)(
            function () {
              if (a) {
                if (!c && !s) {
                  var e,
                    n,
                    o,
                    i,
                    v = p.current;
                  if (v && v.tagName)
                    return (
                      (n = (e = (function (e) {
                        var t,
                          r = {
                            root: e.root || null,
                            margin: e.rootMargin || "",
                          },
                          n = f.find(function (e) {
                            return e.root === r.root && e.margin === r.margin;
                          });
                        if (n && (t = l.get(n))) return t;
                        var o = new Map();
                        return (
                          (t = {
                            id: r,
                            observer: new IntersectionObserver(function (e) {
                              e.forEach(function (e) {
                                var t = o.get(e.target),
                                  r =
                                    e.isIntersecting || e.intersectionRatio > 0;
                                t && r && t(r);
                              });
                            }, e),
                            elements: o,
                          }),
                          f.push(r),
                          l.set(r, t),
                          t
                        );
                      })({
                        root: null == t ? void 0 : t.current,
                        rootMargin: r,
                      })).id),
                      (o = e.observer),
                      (i = e.elements).set(v, function (e) {
                        return e && d(e);
                      }),
                      o.observe(v),
                      function () {
                        if ((i.delete(v), o.unobserve(v), 0 === i.size)) {
                          o.disconnect(), l.delete(n);
                          var e = f.findIndex(function (e) {
                            return e.root === n.root && e.margin === n.margin;
                          });
                          e > -1 && f.splice(e, 1);
                        }
                      }
                    );
                }
              } else if (!s) {
                var h = (0, u.requestIdleCallback)(function () {
                  return d(!0);
                });
                return function () {
                  return (0, u.cancelIdleCallback)(h);
                };
              }
            },
            [c, r, t, s, p.current]
          ),
          [
            v,
            s,
            (0, o.useCallback)(function () {
              d(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1664: function (e, t, r) {
      e.exports = r(5170);
    },
  },
]);
