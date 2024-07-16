(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5675],
  {
    3271: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(2253),
        o = r(4932),
        n = r(7702),
        a = r(1309),
        l = r(4586);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return b;
          },
        });
      var s = r(8754),
        u = r(1757)._(r(7294)),
        d = s._(r(3935)),
        c = s._(r(9201)),
        f = r(3914),
        g = r(5494),
        p = r(869);
      r(1905);
      var m = r(1823),
        h = s._(r(4545)),
        v = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: true,
        };
      function handleLoading(e, t, r, n, a, l) {
        var s = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== s &&
          ((e["data-loaded-src"] = s),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(function () {})
            .then(function () {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && a(!0), null == r ? void 0 : r.current)) {
                  var l = new Event("load");
                  Object.defineProperty(l, "target", {
                    writable: !1,
                    value: e,
                  });
                  var s = !1,
                    u = !1;
                  r.current(
                    o._(i._({}, l), {
                      nativeEvent: l,
                      currentTarget: e,
                      target: e,
                      isDefaultPrevented: function () {
                        return s;
                      },
                      isPropagationStopped: function () {
                        return u;
                      },
                      persist: function () {},
                      preventDefault: function () {
                        (s = !0), l.preventDefault();
                      },
                      stopPropagation: function () {
                        (u = !0), l.stopPropagation();
                      },
                    })
                  );
                }
                (null == n ? void 0 : n.current) && n.current(e);
              }
            }));
      }
      function getDynamicProps(e) {
        var t = a._(u.version.split("."), 2),
          r = t[0],
          i = t[1],
          o = parseInt(r, 10),
          n = parseInt(i, 10);
        return o > 18 || (18 === o && n >= 3)
          ? { fetchPriority: e }
          : { fetchpriority: e };
      }
      var y = (0, u.forwardRef)(function (e, t) {
        var r = e.src,
          a = e.srcSet,
          l = e.sizes,
          s = e.height,
          d = e.width,
          c = e.decoding,
          f = e.className,
          g = e.style,
          p = e.fetchPriority,
          m = e.placeholder,
          h = e.loading,
          v = e.unoptimized,
          y = e.fill,
          b = e.onLoadRef,
          _ = e.onLoadingCompleteRef,
          w = e.setBlurComplete,
          S = e.setShowAltText,
          z = (e.onLoad, e.onError),
          P = n._(e, [
            "src",
            "srcSet",
            "sizes",
            "height",
            "width",
            "decoding",
            "className",
            "style",
            "fetchPriority",
            "placeholder",
            "loading",
            "unoptimized",
            "fill",
            "onLoadRef",
            "onLoadingCompleteRef",
            "setBlurComplete",
            "setShowAltText",
            "onLoad",
            "onError",
          ]);
        return u.default.createElement(
          "img",
          o._(i._({}, P, getDynamicProps(p)), {
            loading: h,
            width: d,
            height: s,
            decoding: c,
            "data-nimg": y ? "fill" : "1",
            className: f,
            style: g,
            sizes: l,
            srcSet: a,
            src: r,
            ref: (0, u.useCallback)(
              function (e) {
                t &&
                  ("function" == typeof t
                    ? t(e)
                    : "object" == typeof t && (t.current = e)),
                  e &&
                    (z && (e.src = e.src),
                    e.complete && handleLoading(e, m, b, _, w, v));
              },
              [r, m, b, _, w, z, v, t]
            ),
            onLoad: function (e) {
              handleLoading(e.currentTarget, m, b, _, w, v);
            },
            onError: function (e) {
              S(!0), "empty" !== m && w(!0), z && z(e);
            },
          })
        );
      });
      function ImagePreload(e) {
        var t = e.isAppRouter,
          r = e.imgAttributes,
          o = i._(
            {
              as: "image",
              imageSrcSet: r.srcSet,
              imageSizes: r.sizes,
              crossOrigin: r.crossOrigin,
              referrerPolicy: r.referrerPolicy,
            },
            getDynamicProps(r.fetchPriority)
          );
        return t && d.default.preload
          ? (d.default.preload(r.src, o), null)
          : u.default.createElement(
              c.default,
              null,
              u.default.createElement(
                "link",
                i._(
                  {
                    key: "__nimg-" + r.src + r.srcSet + r.sizes,
                    rel: "preload",
                    href: r.srcSet ? void 0 : r.src,
                  },
                  o
                )
              )
            );
      }
      var b = (0, u.forwardRef)(function (e, t) {
        var r = (0, u.useContext)(m.RouterContext),
          n = (0, u.useContext)(p.ImageConfigContext),
          s = (0, u.useMemo)(
            function () {
              var e = v || n || g.imageConfigDefault,
                t = l
                  ._(e.deviceSizes)
                  .concat(l._(e.imageSizes))
                  .sort(function (e, t) {
                    return e - t;
                  }),
                r = e.deviceSizes.sort(function (e, t) {
                  return e - t;
                });
              return o._(i._({}, e), { allSizes: t, deviceSizes: r });
            },
            [n]
          ),
          d = e.onLoad,
          c = e.onLoadingComplete,
          b = (0, u.useRef)(d);
        (0, u.useEffect)(
          function () {
            b.current = d;
          },
          [d]
        );
        var _ = (0, u.useRef)(c);
        (0, u.useEffect)(
          function () {
            _.current = c;
          },
          [c]
        );
        var w = a._((0, u.useState)(!1), 2),
          S = w[0],
          z = w[1],
          P = a._((0, u.useState)(!1), 2),
          C = P[0],
          j = P[1],
          I = (0, f.getImgProps)(e, {
            defaultLoader: h.default,
            imgConf: s,
            blurComplete: S,
            showAltText: C,
          }),
          x = I.props,
          E = I.meta;
        return u.default.createElement(
          u.default.Fragment,
          null,
          u.default.createElement(
            y,
            o._(i._({}, x), {
              unoptimized: E.unoptimized,
              placeholder: E.placeholder,
              fill: E.fill,
              onLoadRef: b,
              onLoadingCompleteRef: _,
              setBlurComplete: z,
              setShowAltText: j,
              ref: t,
            })
          ),
          E.priority
            ? u.default.createElement(ImagePreload, {
                isAppRouter: !r,
                imgAttributes: x,
              })
            : null
        );
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    3914: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(2253),
        o = r(4932),
        n = r(7702);
      r(1309);
      var a = r(4586);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return getImgProps;
          },
        }),
        r(1905);
      var l = r(2393),
        s = r(5494);
      function isStaticRequire(e) {
        return void 0 !== e.default;
      }
      function getInt(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function getImgProps(e, t) {
        var r,
          u,
          d,
          c = e.src,
          f = e.sizes,
          g = e.unoptimized,
          p = void 0 !== g && g,
          m = e.priority,
          h = void 0 !== m && m,
          v = e.loading,
          y = e.className,
          b = e.quality,
          _ = e.width,
          w = e.height,
          S = e.fill,
          z = void 0 !== S && S,
          P = e.style,
          C = (e.onLoad, e.onLoadingComplete, e.placeholder),
          j = void 0 === C ? "empty" : C,
          I = e.blurDataURL,
          x = e.fetchPriority,
          E = e.layout,
          R = e.objectFit,
          L = e.objectPosition,
          O =
            (e.lazyBoundary,
            e.lazyRoot,
            n._(e, [
              "src",
              "sizes",
              "unoptimized",
              "priority",
              "loading",
              "className",
              "quality",
              "width",
              "height",
              "fill",
              "style",
              "onLoad",
              "onLoadingComplete",
              "placeholder",
              "blurDataURL",
              "fetchPriority",
              "layout",
              "objectFit",
              "objectPosition",
              "lazyBoundary",
              "lazyRoot",
            ])),
          M = t.imgConf,
          k = t.showAltText,
          A = t.blurComplete,
          D = t.defaultLoader,
          N = M || s.imageConfigDefault;
        if ("allSizes" in N) G = N;
        else {
          var B = a
              ._(N.deviceSizes)
              .concat(a._(N.imageSizes))
              .sort(function (e, t) {
                return e - t;
              }),
            q = N.deviceSizes.sort(function (e, t) {
              return e - t;
            });
          G = o._(i._({}, N), { allSizes: B, deviceSizes: q });
        }
        var F = O.loader || D;
        delete O.loader, delete O.srcSet;
        var W = "__next_img_default" in F;
        if (W) {
          if ("custom" === G.loader)
            throw Error(
              'Image with src "' +
                c +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          var G,
            T = F;
          F = function (e) {
            return e.config, T(n._(e, ["config"]));
          };
        }
        if (E) {
          "fill" === E && (z = !0);
          var U = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[E];
          U && (P = i._({}, P, U));
          var H = { responsive: "100vw", fill: "100vw" }[E];
          H && !f && (f = H);
        }
        var V = "",
          J = getInt(_),
          Y = getInt(w);
        if (
          "object" == typeof (r = c) &&
          (isStaticRequire(r) || void 0 !== r.src)
        ) {
          var $ = isStaticRequire(c) ? c.default : c;
          if (!$.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify($)
            );
          if (!$.height || !$.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify($)
            );
          if (
            ((u = $.blurWidth),
            (d = $.blurHeight),
            (I = I || $.blurDataURL),
            (V = $.src),
            !z)
          ) {
            if (J || Y) {
              if (J && !Y) {
                var K = J / $.width;
                Y = Math.round($.height * K);
              } else if (!J && Y) {
                var Q = Y / $.height;
                J = Math.round($.width * Q);
              }
            } else (J = $.width), (Y = $.height);
          }
        }
        var X = !h && ("lazy" === v || void 0 === v);
        (!(c = "string" == typeof c ? c : V) ||
          c.startsWith("data:") ||
          c.startsWith("blob:")) &&
          ((p = !0), (X = !1)),
          G.unoptimized && (p = !0),
          W && c.endsWith(".svg") && !G.dangerouslyAllowSVG && (p = !0),
          h && (x = "high");
        var Z = getInt(b),
          ee = Object.assign(
            z
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: R,
                  objectPosition: L,
                }
              : {},
            k ? {} : { color: "transparent" },
            P
          ),
          et =
            A || "empty" === j
              ? null
              : "blur" === j
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, l.getImageBlurSvg)({
                  widthInt: J,
                  heightInt: Y,
                  blurWidth: u,
                  blurHeight: d,
                  blurDataURL: I || "",
                  objectFit: ee.objectFit,
                }) +
                '")'
              : 'url("' + j + '")',
          er = et
            ? {
                backgroundSize: ee.objectFit || "cover",
                backgroundPosition: ee.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: et,
              }
            : {},
          ei = (function (e) {
            var t = e.config,
              r = e.src,
              i = e.unoptimized,
              o = e.width,
              n = e.quality,
              l = e.sizes,
              s = e.loader;
            if (i) return { src: r, srcSet: void 0, sizes: void 0 };
            var u = (function (e, t, r) {
                var i = e.deviceSizes,
                  o = e.allSizes;
                if (r) {
                  for (var n = /(^|\s)(1?\d?\d)vw/g, l = []; (s = n.exec(r)); s)
                    l.push(parseInt(s[2]));
                  if (l.length) {
                    var s,
                      u,
                      d = 0.01 * (u = Math).min.apply(u, a._(l));
                    return {
                      widths: o.filter(function (e) {
                        return e >= i[0] * d;
                      }),
                      kind: "w",
                    };
                  }
                  return { widths: o, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: i, kind: "w" }
                  : {
                      widths: a._(
                        new Set(
                          [t, 2 * t].map(function (e) {
                            return (
                              o.find(function (t) {
                                return t >= e;
                              }) || o[o.length - 1]
                            );
                          })
                        )
                      ),
                      kind: "x",
                    };
              })(t, o, l),
              d = u.widths,
              c = u.kind,
              f = d.length - 1;
            return {
              sizes: l || "w" !== c ? l : "100vw",
              srcSet: d
                .map(function (e, i) {
                  return (
                    s({ config: t, src: r, quality: n, width: e }) +
                    " " +
                    ("w" === c ? e : i + 1) +
                    c
                  );
                })
                .join(", "),
              src: s({ config: t, src: r, quality: n, width: d[f] }),
            };
          })({
            config: G,
            src: c,
            unoptimized: p,
            width: J,
            quality: Z,
            sizes: f,
            loader: F,
          });
        return {
          props: o._(i._({}, O), {
            loading: X ? "lazy" : v,
            fetchPriority: x,
            width: J,
            height: Y,
            decoding: "async",
            className: y,
            style: i._({}, ee, er),
            sizes: ei.sizes,
            srcSet: ei.srcSet,
            src: ei.src,
          }),
          meta: { unoptimized: p, priority: h, placeholder: j, fill: z },
        };
      }
    },
    2393: function (e, t) {
      "use strict";
      function getImageBlurSvg(e) {
        var t = e.widthInt,
          r = e.heightInt,
          i = e.blurWidth,
          o = e.blurHeight,
          n = e.blurDataURL,
          a = e.objectFit,
          l = i ? 40 * i : t,
          s = o ? 40 * o : r,
          u = l && s ? "viewBox='0 0 " + l + " " + s + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          u +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (u
            ? "none"
            : "contain" === a
            ? "xMidYMid"
            : "cover" === a
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          n +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return getImageBlurSvg;
          },
        });
    },
    645: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(1309);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          unstable_getImgProps: function () {
            return unstable_getImgProps;
          },
          default: function () {
            return u;
          },
        });
      var o = r(8754),
        n = r(3914),
        a = r(1905),
        l = r(3271),
        s = o._(r(4545)),
        unstable_getImgProps = function (e) {
          (0, a.warnOnce)(
            "Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk."
          );
          var t = (0, n.getImgProps)(e, {
              defaultLoader: s.default,
              imgConf: {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                path: "/_next/image",
                loader: "default",
                dangerouslyAllowSVG: !1,
                unoptimized: !1,
              },
            }).props,
            r = !0,
            o = !1,
            l = void 0;
          try {
            for (
              var u, d = Object.entries(t)[Symbol.iterator]();
              !(r = (u = d.next()).done);
              r = !0
            ) {
              var c = i._(u.value, 2),
                f = c[0],
                g = c[1];
              void 0 === g && delete t[f];
            }
          } catch (e) {
            (o = !0), (l = e);
          } finally {
            try {
              r || null == d.return || d.return();
            } finally {
              if (o) throw l;
            }
          }
          return { props: t };
        },
        u = l.Image;
    },
    4545: function (e, t) {
      "use strict";
      function defaultLoader(e) {
        var t = e.config,
          r = e.src,
          i = e.width,
          o = e.quality;
        return (
          t.path +
          "?url=" +
          encodeURIComponent(r) +
          "&w=" +
          i +
          "&q=" +
          (o || 75)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        (defaultLoader.__next_img_default = !0);
      var r = defaultLoader;
    },
    5675: function (e, t, r) {
      e.exports = r(645);
    },
  },
]);
