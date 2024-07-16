"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8963],
  {
    4394: function (t, e, n) {
      n.d(e, {
        K: function () {
          return warning;
        },
        k: function () {
          return invariant;
        },
      });
      var warning = function () {},
        invariant = function () {};
    },
    2064: function (t, e, n) {
      n.d(e, {
        j: function () {
          return animate;
        },
      });
      var r = n(3234),
        i = n(406),
        o = n(3116);
      function animate(t, e, n) {
        void 0 === n && (n = {});
        var s = (0, i.i)(t) ? t : (0, r.B)(t);
        return (
          (0, o.b8)("", s, e, n),
          {
            stop: function () {
              return s.stop();
            },
            isAnimating: function () {
              return s.isAnimating();
            },
          }
        );
      }
    },
    8488: function (t, e, n) {
      n.d(e, {
        C: function () {
          return isKeyframesTarget;
        },
      });
      var isKeyframesTarget = function (t) {
        return Array.isArray(t);
      };
    },
    3116: function (t, e, n) {
      n.d(e, {
        ev: function () {
          return getValueTransition;
        },
        b8: function () {
          return startAnimation;
        },
      });
      var r = n(655),
        i = n(4394),
        o = n(6773);
      function calcAngularFreq(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let s = ["duration", "bounce"],
        l = ["stiffness", "damping", "mass"];
      function isSpringType(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function spring(t) {
        var { from: e = 0, to: n = 1, restSpeed: u = 2, restDelta: d } = t,
          p = (0, r._T)(t, ["from", "to", "restSpeed", "restDelta"]);
        let f = { done: !1, value: e },
          {
            stiffness: v,
            damping: m,
            mass: h,
            velocity: g,
            duration: y,
            isResolvedFromDuration: x,
          } = (function (t) {
            let e = Object.assign(
              {
                velocity: 0,
                stiffness: 100,
                damping: 10,
                mass: 1,
                isResolvedFromDuration: !1,
              },
              t
            );
            if (!isSpringType(t, l) && isSpringType(t, s)) {
              let n = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: n = 0,
                mass: r = 1,
              }) {
                let s, l;
                (0, i.K)(
                  t <= 1e4,
                  "Spring duration must be 10 seconds or less"
                );
                let u = 1 - e;
                (u = (0, o.u)(0.05, 1, u)),
                  (t = (0, o.u)(0.01, 10, t / 1e3)),
                  u < 1
                    ? ((s = (e) => {
                        let r = e * u,
                          i = r * t,
                          o = calcAngularFreq(e, u);
                        return 0.001 - ((r - n) / o) * Math.exp(-i);
                      }),
                      (l = (e) => {
                        let r = e * u,
                          i = r * t,
                          o = Math.pow(u, 2) * Math.pow(e, 2) * t,
                          l = calcAngularFreq(Math.pow(e, 2), u),
                          d = -s(e) + 0.001 > 0 ? -1 : 1;
                        return (d * ((i * n + n - o) * Math.exp(-i))) / l;
                      }))
                    : ((s = (e) => {
                        let r = Math.exp(-e * t),
                          i = (e - n) * t + 1;
                        return -0.001 + r * i;
                      }),
                      (l = (e) => {
                        let r = Math.exp(-e * t),
                          i = (n - e) * (t * t);
                        return r * i;
                      }));
                let d = 5 / t,
                  p = (function (t, e, n) {
                    let r = n;
                    for (let n = 1; n < 12; n++) r -= t(r) / e(r);
                    return r;
                  })(s, l, d);
                if (((t *= 1e3), isNaN(p)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = Math.pow(p, 2) * r;
                  return {
                    stiffness: e,
                    damping: 2 * u * Math.sqrt(r * e),
                    duration: t,
                  };
                }
              })(t);
              (e = Object.assign(Object.assign(Object.assign({}, e), n), {
                velocity: 0,
                mass: 1,
              })).isResolvedFromDuration = !0;
            }
            return e;
          })(p),
          P = zero,
          V = zero;
        function createSpring() {
          let t = g ? -(g / 1e3) : 0,
            r = n - e,
            i = m / (2 * Math.sqrt(v * h)),
            o = Math.sqrt(v / h) / 1e3;
          if (
            (void 0 === d && (d = Math.min(Math.abs(n - e) / 100, 0.4)), i < 1)
          ) {
            let e = calcAngularFreq(o, i);
            (P = (s) => {
              let l = Math.exp(-i * o * s);
              return (
                n -
                l *
                  (((t + i * o * r) / e) * Math.sin(e * s) +
                    r * Math.cos(e * s))
              );
            }),
              (V = (n) => {
                let s = Math.exp(-i * o * n);
                return (
                  i *
                    o *
                    s *
                    ((Math.sin(e * n) * (t + i * o * r)) / e +
                      r * Math.cos(e * n)) -
                  s *
                    (Math.cos(e * n) * (t + i * o * r) -
                      e * r * Math.sin(e * n))
                );
              });
          } else if (1 === i)
            P = (e) => n - Math.exp(-o * e) * (r + (t + o * r) * e);
          else {
            let e = o * Math.sqrt(i * i - 1);
            P = (s) => {
              let l = Math.exp(-i * o * s),
                u = Math.min(e * s, 300);
              return (
                n -
                (l * ((t + i * o * r) * Math.sinh(u) + e * r * Math.cosh(u))) /
                  e
              );
            };
          }
        }
        return (
          createSpring(),
          {
            next: (t) => {
              let e = P(t);
              if (x) f.done = t >= y;
              else {
                let r = 1e3 * V(t),
                  i = Math.abs(n - e) <= d;
                f.done = Math.abs(r) <= u && i;
              }
              return (f.value = f.done ? n : e), f;
            },
            flipTarget: () => {
              (g = -g), ([e, n] = [n, e]), createSpring();
            },
          }
        );
      }
      spring.needsInterpolation = (t, e) =>
        "string" == typeof t || "string" == typeof e;
      let zero = (t) => 0;
      var u = n(9326),
        d = n(2453),
        p = n(2960),
        f = n(8059),
        v = n(4582);
      function hueToRgb(t, e, n) {
        return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6)
          ? t + (e - t) * 6 * n
          : n < 0.5
          ? e
          : n < 2 / 3
          ? t + (e - t) * (2 / 3 - n) * 6
          : t;
      }
      function hslaToRgba({ hue: t, saturation: e, lightness: n, alpha: r }) {
        (t /= 360), (n /= 100);
        let i = 0,
          o = 0,
          s = 0;
        if ((e /= 100)) {
          let r = n < 0.5 ? n * (1 + e) : n + e - n * e,
            l = 2 * n - r;
          (i = hueToRgb(l, r, t + 1 / 3)),
            (o = hueToRgb(l, r, t)),
            (s = hueToRgb(l, r, t - 1 / 3));
        } else i = o = s = n;
        return {
          red: Math.round(255 * i),
          green: Math.round(255 * o),
          blue: Math.round(255 * s),
          alpha: r,
        };
      }
      let mixLinearColor = (t, e, n) => {
          let r = t * t;
          return Math.sqrt(Math.max(0, n * (e * e - r) + r));
        },
        m = [p.$, f.m, v.J],
        getColorType = (t) => m.find((e) => e.test(t)),
        notAnimatable = (t) =>
          `'${t}' is not an animatable color. Use the equivalent color code instead.`,
        mixColor = (t, e) => {
          let n = getColorType(t),
            r = getColorType(e);
          (0, i.k)(!!n, notAnimatable(t)), (0, i.k)(!!r, notAnimatable(e));
          let o = n.parse(t),
            s = r.parse(e);
          n === v.J && ((o = hslaToRgba(o)), (n = f.m)),
            r === v.J && ((s = hslaToRgba(s)), (r = f.m));
          let l = Object.assign({}, o);
          return (t) => {
            for (let e in l)
              "alpha" !== e && (l[e] = mixLinearColor(o[e], s[e], t));
            return (l.alpha = (0, d.C)(o.alpha, s.alpha, t)), n.transform(l);
          };
        };
      var h = n(7405),
        g = n(8407),
        y = n(734),
        x = n(9897);
      function getMixer(t, e) {
        return (0, y.e)(t)
          ? (n) => (0, d.C)(t, e, n)
          : h.$.test(t)
          ? mixColor(t, e)
          : mixComplex(t, e);
      }
      let mixArray = (t, e) => {
          let n = [...t],
            r = n.length,
            i = t.map((t, n) => getMixer(t, e[n]));
          return (t) => {
            for (let e = 0; e < r; e++) n[e] = i[e](t);
            return n;
          };
        },
        mixObject = (t, e) => {
          let n = Object.assign(Object.assign({}, t), e),
            r = {};
          for (let i in n)
            void 0 !== t[i] && void 0 !== e[i] && (r[i] = getMixer(t[i], e[i]));
          return (t) => {
            for (let e in r) n[e] = r[e](t);
            return n;
          };
        };
      function analyse(t) {
        let e = g.P.parse(t),
          n = e.length,
          r = 0,
          i = 0,
          o = 0;
        for (let t = 0; t < n; t++)
          r || "number" == typeof e[t] ? r++ : void 0 !== e[t].hue ? o++ : i++;
        return { parsed: e, numNumbers: r, numRGB: i, numHSL: o };
      }
      let mixComplex = (t, e) => {
          let n = g.P.createTransformer(e),
            r = analyse(t),
            o = analyse(e),
            s =
              r.numHSL === o.numHSL &&
              r.numRGB === o.numRGB &&
              r.numNumbers >= o.numNumbers;
          return s
            ? (0, x.z)(mixArray(r.parsed, o.parsed), n)
            : ((0, i.K)(
                !0,
                `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
              ),
              (n) => `${n > 0 ? e : t}`);
        },
        mixNumber = (t, e) => (n) => (0, d.C)(t, e, n);
      function interpolate(t, e, { clamp: n = !0, ease: r, mixer: s } = {}) {
        let l = t.length;
        (0, i.k)(
          l === e.length,
          "Both input and output ranges must be the same length"
        ),
          (0, i.k)(
            !r || !Array.isArray(r) || r.length === l - 1,
            "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."
          ),
          t[0] > t[l - 1] &&
            ((t = [].concat(t)), (e = [].concat(e)), t.reverse(), e.reverse());
        let d = (function (t, e, n) {
            var r;
            let i = [],
              o =
                n ||
                ("number" == typeof (r = t[0])
                  ? mixNumber
                  : "string" == typeof r
                  ? h.$.test(r)
                    ? mixColor
                    : mixComplex
                  : Array.isArray(r)
                  ? mixArray
                  : "object" == typeof r
                  ? mixObject
                  : void 0),
              s = t.length - 1;
            for (let n = 0; n < s; n++) {
              let r = o(t[n], t[n + 1]);
              if (e) {
                let t = Array.isArray(e) ? e[n] : e;
                r = (0, x.z)(t, r);
              }
              i.push(r);
            }
            return i;
          })(e, r, s),
          p =
            2 === l
              ? (function ([t, e], [n]) {
                  return (r) => n((0, u.Y)(t, e, r));
                })(t, d)
              : (function (t, e) {
                  let n = t.length,
                    r = n - 1;
                  return (i) => {
                    let o = 0,
                      s = !1;
                    if (
                      (i <= t[0]
                        ? (s = !0)
                        : i >= t[r] && ((o = r - 1), (s = !0)),
                      !s)
                    ) {
                      let e = 1;
                      for (; e < n && !(t[e] > i) && e !== r; e++);
                      o = e - 1;
                    }
                    let l = (0, u.Y)(t[o], t[o + 1], i);
                    return e[o](l);
                  };
                })(t, d);
        return n ? (e) => p((0, o.u)(t[0], t[l - 1], e)) : p;
      }
      var P = n(4710);
      function keyframes({
        from: t = 0,
        to: e = 1,
        ease: n,
        offset: r,
        duration: i = 300,
      }) {
        let o = { done: !1, value: t },
          s = Array.isArray(e) ? e : [t, e],
          l = (
            r && r.length === s.length
              ? r
              : (function (t) {
                  let e = t.length;
                  return t.map((t, n) => (0 !== n ? n / (e - 1) : 0));
                })(s)
          ).map((t) => t * i);
        function createInterpolator() {
          return interpolate(l, s, {
            ease: Array.isArray(n)
              ? n
              : s.map(() => n || P.mZ).splice(0, s.length - 1),
          });
        }
        let u = createInterpolator();
        return {
          next: (t) => ((o.value = u(t)), (o.done = t >= i), o),
          flipTarget: () => {
            s.reverse(), (u = createInterpolator());
          },
        };
      }
      let V = {
        keyframes: keyframes,
        spring: spring,
        decay: function ({
          velocity: t = 0,
          from: e = 0,
          power: n = 0.8,
          timeConstant: r = 350,
          restDelta: i = 0.5,
          modifyTarget: o,
        }) {
          let s = { done: !1, value: e },
            l = n * t,
            u = e + l,
            d = void 0 === o ? u : o(u);
          return (
            d !== u && (l = d - e),
            {
              next: (t) => {
                let e = -l * Math.exp(-t / r);
                return (
                  (s.done = !(e > i || e < -i)),
                  (s.value = s.done ? d : d + e),
                  s
                );
              },
              flipTarget: () => {},
            }
          );
        },
      };
      var T = n(4735);
      function loopElapsed(t, e, n = 0) {
        return t - e - n;
      }
      let framesync = (t) => {
        let passTimestamp = ({ delta: e }) => t(e);
        return {
          start: () => T.ZP.update(passTimestamp, !0),
          stop: () => T.qY.update(passTimestamp),
        };
      };
      function animate(t) {
        let e, n, i;
        var o,
          {
            from: s,
            autoplay: l = !0,
            driver: u = framesync,
            elapsed: d = 0,
            repeat: p = 0,
            repeatType: f = "loop",
            repeatDelay: v = 0,
            onPlay: m,
            onStop: h,
            onComplete: g,
            onRepeat: y,
            onUpdate: x,
          } = t,
          P = (0, r._T)(t, [
            "from",
            "autoplay",
            "driver",
            "elapsed",
            "repeat",
            "repeatType",
            "repeatDelay",
            "onPlay",
            "onStop",
            "onComplete",
            "onRepeat",
            "onUpdate",
          ]);
        let { to: T } = P,
          A = 0,
          S = P.duration,
          C = !1,
          E = !0,
          w = (function (t) {
            if (Array.isArray(t.to)) return keyframes;
            if (V[t.type]) return V[t.type];
            let e = new Set(Object.keys(t));
            if (e.has("ease") || (e.has("duration") && !e.has("dampingRatio")));
            else if (
              e.has("dampingRatio") ||
              e.has("stiffness") ||
              e.has("mass") ||
              e.has("damping") ||
              e.has("restSpeed") ||
              e.has("restDelta")
            )
              return spring;
            return keyframes;
          })(P);
        (null === (o = w.needsInterpolation) || void 0 === o
          ? void 0
          : o.call(w, s, T)) &&
          ((i = interpolate([0, 100], [s, T], { clamp: !1 })),
          (s = 0),
          (T = 100));
        let D = w(Object.assign(Object.assign({}, P), { from: s, to: T }));
        return (
          l &&
            (null == m || m(),
            (e = u(function (t) {
              if ((E || (t = -t), (d += t), !C)) {
                let t = D.next(Math.max(0, d));
                (n = t.value), i && (n = i(n)), (C = E ? t.done : d <= 0);
              }
              if ((null == x || x(n), C)) {
                if ((0 === A && (null != S || (S = d)), A < p)) {
                  var r, o;
                  (r = d),
                    (o = S),
                    (E ? r >= o + v : r <= -v) &&
                      (A++,
                      "reverse" === f
                        ? (d = (function (t, e, n = 0, r = !0) {
                            return r
                              ? loopElapsed(e + -t, e, n)
                              : e - (t - e) + n;
                          })(d, S, v, (E = A % 2 == 0)))
                        : ((d = loopElapsed(d, S, v)),
                          "mirror" === f && D.flipTarget()),
                      (C = !1),
                      y && y());
                } else e.stop(), g && g();
              }
            })).start()),
          {
            stop: () => {
              null == h || h(), e.stop();
            },
          }
        );
      }
      var A = n(9296),
        S = n(6917);
      let a = (t, e) => 1 - 3 * e + 3 * t,
        b = (t, e) => 3 * e - 6 * t,
        c = (t) => 3 * t,
        calcBezier = (t, e, n) => ((a(e, n) * t + b(e, n)) * t + c(e)) * t,
        getSlope = (t, e, n) => 3 * a(e, n) * t * t + 2 * b(e, n) * t + c(e);
      var C = {
          linear: P.GE,
          easeIn: P.YQ,
          easeInOut: P.mZ,
          easeOut: P.Vv,
          circIn: P.Z7,
          circInOut: P.X7,
          circOut: P.Bn,
          backIn: P.G2,
          backInOut: P.XL,
          backOut: P.CG,
          anticipate: P.LU,
          bounceIn: P.h9,
          bounceInOut: P.yD,
          bounceOut: P.gJ,
        },
        easingDefinitionToFunction = function (t) {
          if (Array.isArray(t)) {
            (0, i.k)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            var e = (0, r.CR)(t, 4);
            return (function (t, e, n, r) {
              if (t === e && n === r) return P.GE;
              let i = new Float32Array(11);
              for (let e = 0; e < 11; ++e) i[e] = calcBezier(0.1 * e, t, n);
              return (o) =>
                0 === o || 1 === o
                  ? o
                  : calcBezier(
                      (function (e) {
                        let r = 0,
                          o = 1;
                        for (; 10 !== o && i[o] <= e; ++o) r += 0.1;
                        --o;
                        let s = (e - i[o]) / (i[o + 1] - i[o]),
                          l = r + 0.1 * s,
                          u = getSlope(l, t, n);
                        return u >= 0.001
                          ? (function (t, e, n, r) {
                              for (let i = 0; i < 8; ++i) {
                                let i = getSlope(e, n, r);
                                if (0 === i) break;
                                let o = calcBezier(e, n, r) - t;
                                e -= o / i;
                              }
                              return e;
                            })(e, l, t, n)
                          : 0 === u
                          ? l
                          : (function (t, e, n, r, i) {
                              let o, s;
                              let l = 0;
                              do
                                (o =
                                  calcBezier((s = e + (n - e) / 2), r, i) - t) >
                                0
                                  ? (n = s)
                                  : (e = s);
                              while (Math.abs(o) > 1e-7 && ++l < 10);
                              return s;
                            })(e, r, r + 0.1, t, n);
                      })(o),
                      e,
                      r
                    );
            })(e[0], e[1], e[2], e[3]);
          }
          return "string" == typeof t
            ? ((0, i.k)(
                void 0 !== C[t],
                "Invalid easing type '".concat(t, "'")
              ),
              C[t])
            : t;
        },
        isAnimatable = function (t, e) {
          return (
            "zIndex" !== t &&
            !!(
              "number" == typeof e ||
              Array.isArray(e) ||
              ("string" == typeof e && g.P.test(e) && !e.startsWith("url("))
            )
          );
        },
        E = n(8488),
        underDampedSpring = function () {
          return { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 };
        },
        criticallyDampedSpring = function (t) {
          return {
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10,
          };
        },
        linearTween = function () {
          return { type: "keyframes", ease: "linear", duration: 0.3 };
        },
        default_transitions_keyframes = function (t) {
          return { type: "keyframes", duration: 0.8, values: t };
        },
        w = {
          x: underDampedSpring,
          y: underDampedSpring,
          z: underDampedSpring,
          rotate: underDampedSpring,
          rotateX: underDampedSpring,
          rotateY: underDampedSpring,
          rotateZ: underDampedSpring,
          scaleX: criticallyDampedSpring,
          scaleY: criticallyDampedSpring,
          scale: criticallyDampedSpring,
          opacity: linearTween,
          backgroundColor: linearTween,
          color: linearTween,
          default: criticallyDampedSpring,
        },
        getDefaultTransition = function (t, e) {
          var n;
          return (
            (n = (0, E.C)(e)
              ? default_transitions_keyframes
              : w[t] || w.default),
            (0, r.pi)({ to: e }, n(e))
          );
        },
        D = n(9135),
        R = { current: !1 },
        M = n(8715),
        L = !1;
      function isZero(t) {
        return (
          0 === t ||
          ("string" == typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" "))
        );
      }
      function getZeroUnit(t) {
        return "number" == typeof t ? 0 : (0, D.T)("", t);
      }
      function getValueTransition(t, e) {
        return t[e] || t.default || t;
      }
      function startAnimation(t, e, n, o) {
        return (
          void 0 === o && (o = {}),
          R.current && (o = { type: !1 }),
          e.start(function (s) {
            var l,
              u,
              d,
              p,
              f,
              v,
              m,
              h,
              g,
              y,
              x,
              P =
                ((p = n),
                (m =
                  null !== (f = (v = getValueTransition(o, t)).from) &&
                  void 0 !== f
                    ? f
                    : e.get()),
                (h = isAnimatable(t, p)),
                "none" === m && h && "string" == typeof p
                  ? (m = (0, D.T)(t, p))
                  : isZero(m) && "string" == typeof p
                  ? (m = getZeroUnit(p))
                  : !Array.isArray(p) &&
                    isZero(p) &&
                    "string" == typeof m &&
                    (p = getZeroUnit(m)),
                (g = isAnimatable(t, m)),
                (0, i.K)(
                  g === h,
                  "You are trying to animate "
                    .concat(t, ' from "')
                    .concat(m, '" to "')
                    .concat(p, '". ')
                    .concat(
                      m,
                      " is not an animatable value - to enable this animation set "
                    )
                    .concat(m, " to a value animatable to ")
                    .concat(p, " via the `style` property.")
                ),
                g && h && !1 !== v.type
                  ? function () {
                      var n,
                        o,
                        l,
                        u,
                        d,
                        f,
                        h,
                        g,
                        y,
                        x,
                        P,
                        V,
                        C,
                        E = {
                          from: m,
                          to: p,
                          velocity: e.getVelocity(),
                          onComplete: s,
                          onUpdate: function (t) {
                            return e.set(t);
                          },
                        };
                      return "inertia" === v.type || "decay" === v.type
                        ? (function ({
                            from: t = 0,
                            velocity: e = 0,
                            min: n,
                            max: r,
                            power: i = 0.8,
                            timeConstant: o = 750,
                            bounceStiffness: s = 500,
                            bounceDamping: l = 10,
                            restDelta: u = 1,
                            modifyTarget: d,
                            driver: p,
                            onUpdate: f,
                            onComplete: v,
                            onStop: m,
                          }) {
                            let h;
                            function isOutOfBounds(t) {
                              return (
                                (void 0 !== n && t < n) ||
                                (void 0 !== r && t > r)
                              );
                            }
                            function boundaryNearest(t) {
                              return void 0 === n
                                ? r
                                : void 0 === r
                                ? n
                                : Math.abs(n - t) < Math.abs(r - t)
                                ? n
                                : r;
                            }
                            function startAnimation(t) {
                              null == h || h.stop(),
                                (h = animate(
                                  Object.assign(Object.assign({}, t), {
                                    driver: p,
                                    onUpdate: (e) => {
                                      var n;
                                      null == f || f(e),
                                        null === (n = t.onUpdate) ||
                                          void 0 === n ||
                                          n.call(t, e);
                                    },
                                    onComplete: v,
                                    onStop: m,
                                  })
                                ));
                            }
                            function startSpring(t) {
                              startAnimation(
                                Object.assign(
                                  {
                                    type: "spring",
                                    stiffness: s,
                                    damping: l,
                                    restDelta: u,
                                  },
                                  t
                                )
                              );
                            }
                            if (isOutOfBounds(t))
                              startSpring({
                                from: t,
                                velocity: e,
                                to: boundaryNearest(t),
                              });
                            else {
                              let r,
                                s,
                                l = i * e + t;
                              void 0 !== d && (l = d(l));
                              let p = boundaryNearest(l),
                                f = p === n ? -1 : 1;
                              startAnimation({
                                type: "decay",
                                from: t,
                                velocity: e,
                                timeConstant: o,
                                power: i,
                                restDelta: u,
                                modifyTarget: d,
                                onUpdate: isOutOfBounds(l)
                                  ? (t) => {
                                      (r = s),
                                        (s = t),
                                        (e = (0, A.R)(
                                          t - r,
                                          (0, T.$B)().delta
                                        )),
                                        ((1 === f && t > p) ||
                                          (-1 === f && t < p)) &&
                                          startSpring({
                                            from: t,
                                            to: p,
                                            velocity: e,
                                          });
                                    }
                                  : void 0,
                              });
                            }
                            return {
                              stop: () => (null == h ? void 0 : h.stop()),
                            };
                          })((0, r.pi)((0, r.pi)({}, E), v))
                        : animate(
                            (0, r.pi)(
                              (0, r.pi)(
                                {},
                                ((n = v),
                                (o = E),
                                (l = t),
                                Array.isArray(o.to) &&
                                  ((null !== (u = n.duration) &&
                                    void 0 !== u) ||
                                    (n.duration = 0.8)),
                                Array.isArray(o.to) &&
                                  null === o.to[0] &&
                                  ((o.to = (0, r.ev)([], (0, r.CR)(o.to), !1)),
                                  (o.to[0] = o.from)),
                                (d = n).when,
                                d.delay,
                                d.delayChildren,
                                d.staggerChildren,
                                d.staggerDirection,
                                d.repeat,
                                d.repeatType,
                                d.repeatDelay,
                                d.from,
                                Object.keys(
                                  (0, r._T)(d, [
                                    "when",
                                    "delay",
                                    "delayChildren",
                                    "staggerChildren",
                                    "staggerDirection",
                                    "repeat",
                                    "repeatType",
                                    "repeatDelay",
                                    "from",
                                  ])
                                ).length ||
                                  (n = (0, r.pi)(
                                    (0, r.pi)({}, n),
                                    getDefaultTransition(l, o.to)
                                  )),
                                (0, r.pi)(
                                  (0, r.pi)({}, o),
                                  ((h = (f = n).ease),
                                  (g = f.times),
                                  (y = f.yoyo),
                                  (x = f.flip),
                                  (P = f.loop),
                                  (V = (0, r._T)(f, [
                                    "ease",
                                    "times",
                                    "yoyo",
                                    "flip",
                                    "loop",
                                  ])),
                                  (C = (0, r.pi)({}, V)),
                                  g && (C.offset = g),
                                  V.duration &&
                                    (C.duration = (0, S.w)(V.duration)),
                                  V.repeatDelay &&
                                    (C.repeatDelay = (0, S.w)(V.repeatDelay)),
                                  h &&
                                    (C.ease =
                                      Array.isArray(h) &&
                                      "number" != typeof h[0]
                                        ? h.map(easingDefinitionToFunction)
                                        : easingDefinitionToFunction(h)),
                                  "tween" === V.type && (C.type = "keyframes"),
                                  (y || P || x) &&
                                    ((0, i.K)(
                                      !L,
                                      "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options."
                                    ),
                                    (L = !0),
                                    y
                                      ? (C.repeatType = "reverse")
                                      : P
                                      ? (C.repeatType = "loop")
                                      : x && (C.repeatType = "mirror"),
                                    (C.repeat = P || y || x || V.repeat)),
                                  "spring" !== V.type && (C.type = "keyframes"),
                                  C)
                                ))
                              ),
                              {
                                onUpdate: function (t) {
                                  var e;
                                  E.onUpdate(t),
                                    null === (e = v.onUpdate) ||
                                      void 0 === e ||
                                      e.call(v, t);
                                },
                                onComplete: function () {
                                  var t;
                                  E.onComplete(),
                                    null === (t = v.onComplete) ||
                                      void 0 === t ||
                                      t.call(v);
                                },
                              }
                            )
                          );
                    }
                  : function () {
                      var t,
                        n,
                        r = (0, M.Y)(p);
                      return (
                        e.set(r),
                        s(),
                        null === (t = null == v ? void 0 : v.onUpdate) ||
                          void 0 === t ||
                          t.call(v, r),
                        null === (n = null == v ? void 0 : v.onComplete) ||
                          void 0 === n ||
                          n.call(v),
                        { stop: function () {} }
                      );
                    }),
              V =
                null !==
                  (d =
                    null !==
                      (u = (getValueTransition((l = o), t) || {}).delay) &&
                    void 0 !== u
                      ? u
                      : l.delay) && void 0 !== d
                  ? d
                  : 0,
              start = function () {
                return (x = P());
              };
            return (
              V ? (y = window.setTimeout(start, (0, S.w)(V))) : start(),
              function () {
                clearTimeout(y), null == x || x.stop();
              }
            );
          })
        );
      }
    },
    8963: function (t, e, n) {
      n.d(e, {
        E: function () {
          return en;
        },
      });
      var r,
        i,
        o,
        s,
        l,
        u = n(655),
        d = n(7294),
        p = n(3454),
        f = (void 0 === p || p.env, "production"),
        createDefinition = function (t) {
          return {
            isEnabled: function (e) {
              return t.some(function (t) {
                return !!e[t];
              });
            },
          };
        },
        v = {
          measureLayout: createDefinition(["layout", "layoutId", "drag"]),
          animation: createDefinition([
            "animate",
            "exit",
            "variants",
            "whileHover",
            "whileTap",
            "whileFocus",
            "whileDrag",
            "whileInView",
          ]),
          exit: createDefinition(["exit"]),
          drag: createDefinition(["drag", "dragControls"]),
          focus: createDefinition(["whileFocus"]),
          hover: createDefinition(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: createDefinition([
            "whileTap",
            "onTap",
            "onTapStart",
            "onTapCancel",
          ]),
          pan: createDefinition([
            "onPan",
            "onPanStart",
            "onPanSessionStart",
            "onPanEnd",
          ]),
          inView: createDefinition([
            "whileInView",
            "onViewportEnter",
            "onViewportLeave",
          ]),
        },
        m = n(4394),
        h = (0, d.createContext)({ strict: !1 }),
        g = Object.keys(v),
        y = g.length,
        x = (0, d.createContext)({
          transformPagePoint: function (t) {
            return t;
          },
          isStatic: !1,
          reducedMotion: "never",
        }),
        P = (0, d.createContext)({}),
        V = (0, d.createContext)(null),
        T = "undefined" != typeof document,
        A = T ? d.useLayoutEffect : d.useEffect,
        S = { current: null },
        C = !1;
      function isRefObject(t) {
        return (
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function isVariantLabels(t) {
        return Array.isArray(t);
      }
      function isVariantLabel(t) {
        return "string" == typeof t || isVariantLabels(t);
      }
      function resolveVariantFromProps(t, e, n, r, i) {
        var o;
        return (
          void 0 === r && (r = {}),
          void 0 === i && (i = {}),
          "function" == typeof e && (e = e(null != n ? n : t.custom, r, i)),
          "string" == typeof e &&
            (e = null === (o = t.variants) || void 0 === o ? void 0 : o[e]),
          "function" == typeof e && (e = e(null != n ? n : t.custom, r, i)),
          e
        );
      }
      function resolveVariant(t, e, n) {
        var r,
          i,
          o = t.getProps();
        return resolveVariantFromProps(
          o,
          e,
          null != n ? n : o.custom,
          ((r = {}),
          t.forEachValue(function (t, e) {
            return (r[e] = t.get());
          }),
          r),
          ((i = {}),
          t.forEachValue(function (t, e) {
            return (i[e] = t.getVelocity());
          }),
          i)
        );
      }
      function checkIfControllingVariants(t) {
        var e;
        return (
          "function" ==
            typeof (null === (e = t.animate) || void 0 === e
              ? void 0
              : e.start) ||
          isVariantLabel(t.initial) ||
          isVariantLabel(t.animate) ||
          isVariantLabel(t.whileHover) ||
          isVariantLabel(t.whileDrag) ||
          isVariantLabel(t.whileTap) ||
          isVariantLabel(t.whileFocus) ||
          isVariantLabel(t.exit)
        );
      }
      function checkIfVariantNode(t) {
        return !!(checkIfControllingVariants(t) || t.variants);
      }
      function variantLabelsAsDependency(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      function useConstant(t) {
        var e = (0, d.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
      var E = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
        w = 1,
        D = (0, d.createContext)({}),
        R = (0, d.createContext)({}),
        M = (function (t) {
          function VisualElementHandler() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            (0, u.ZT)(VisualElementHandler, t),
            (VisualElementHandler.prototype.getSnapshotBeforeUpdate =
              function () {
                return this.updateProps(), null;
              }),
            (VisualElementHandler.prototype.componentDidUpdate =
              function () {}),
            (VisualElementHandler.prototype.updateProps = function () {
              var t = this.props,
                e = t.visualElement,
                n = t.props;
              e && e.setProps(n);
            }),
            (VisualElementHandler.prototype.render = function () {
              return this.props.children;
            }),
            VisualElementHandler
          );
        })(d.Component),
        L = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "svg",
          "switch",
          "symbol",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function isSVGComponent(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (L.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
        return !1;
      }
      var k = {},
        j = ["", "X", "Y", "Z"],
        B = ["transformPerspective", "x", "y", "z"];
      function sortTransformProps(t, e) {
        return B.indexOf(t) - B.indexOf(e);
      }
      ["translate", "scale", "rotate", "skew"].forEach(function (t) {
        return j.forEach(function (e) {
          return B.push(t + e);
        });
      });
      var N = new Set(B);
      function isTransformProp(t) {
        return N.has(t);
      }
      var O = new Set(["originX", "originY", "originZ"]);
      function isForcedMotionValue(t, e) {
        var n = e.layout,
          r = e.layoutId;
        return (
          isTransformProp(t) ||
          O.has(t) ||
          ((n || void 0 !== r) && (!!k[t] || "opacity" === t))
        );
      }
      var F = n(406),
        I = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        };
      function isCSSVariable(t) {
        return t.startsWith("--");
      }
      var U = n(6173);
      function buildHTMLStyles(t, e, n, r) {
        var i,
          o,
          s,
          l,
          u,
          d,
          p = t.style,
          f = t.vars,
          v = t.transform,
          m = t.transformKeys,
          h = t.transformOrigin;
        m.length = 0;
        var g = !1,
          y = !1,
          x = !0;
        for (var P in e) {
          var V = e[P];
          if (isCSSVariable(P)) {
            f[P] = V;
            continue;
          }
          var T = U.j[P],
            A = T && "number" == typeof V ? T.transform(V) : V;
          if (isTransformProp(P)) {
            if (((g = !0), (v[P] = A), m.push(P), !x)) continue;
            V !== (null !== (d = T.default) && void 0 !== d ? d : 0) &&
              (x = !1);
          } else O.has(P) ? ((h[P] = A), (y = !0)) : (p[P] = A);
        }
        g
          ? (p.transform = (function (t, e, n, r) {
              var i = t.transform,
                o = t.transformKeys,
                s = e.enableHardwareAcceleration,
                l = e.allowTransformNone,
                u = "";
              o.sort(sortTransformProps);
              for (var d = !1, p = o.length, f = 0; f < p; f++) {
                var v = o[f];
                (u += "".concat(I[v] || v, "(").concat(i[v], ") ")),
                  "z" === v && (d = !0);
              }
              return (
                !d && (void 0 === s || s)
                  ? (u += "translateZ(0)")
                  : (u = u.trim()),
                r
                  ? (u = r(i, n ? "" : u))
                  : (void 0 === l || l) && n && (u = "none"),
                u
              );
            })(t, n, x, r))
          : r
          ? (p.transform = r({}, ""))
          : !e.transform && p.transform && (p.transform = "none"),
          y &&
            (p.transformOrigin =
              ((i = h.originX),
              (s = void 0 === (o = h.originY) ? "50%" : o),
              (u = void 0 === (l = h.originZ) ? 0 : l),
              ""
                .concat(void 0 === i ? "50%" : i, " ")
                .concat(s, " ")
                .concat(u)));
      }
      var createHtmlRenderState = function () {
        return {
          style: {},
          transform: {},
          transformKeys: [],
          transformOrigin: {},
          vars: {},
        };
      };
      function copyRawValuesOnly(t, e, n) {
        for (var r in e)
          (0, F.i)(e[r]) || isForcedMotionValue(r, n) || (t[r] = e[r]);
      }
      var H = new Set([
        "initial",
        "animate",
        "exit",
        "style",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "layout",
        "layoutId",
        "layoutDependency",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "drag",
        "dragControls",
        "dragListener",
        "dragConstraints",
        "dragDirectionLock",
        "dragSnapToOrigin",
        "_dragX",
        "_dragY",
        "dragElastic",
        "dragMomentum",
        "dragPropagation",
        "dragTransition",
        "whileDrag",
        "onPan",
        "onPanStart",
        "onPanEnd",
        "onPanSessionStart",
        "onTap",
        "onTapStart",
        "onTapCancel",
        "onHoverStart",
        "onHoverEnd",
        "whileFocus",
        "whileTap",
        "whileHover",
        "whileInView",
        "onViewportEnter",
        "onViewportLeave",
        "viewport",
        "layoutScroll",
      ]);
      function isValidMotionProp(t) {
        return H.has(t);
      }
      var shouldForward = function (t) {
        return !isValidMotionProp(t);
      };
      try {
        (r = require("@emotion/is-prop-valid").default) &&
          (shouldForward = function (t) {
            return t.startsWith("on") ? !isValidMotionProp(t) : r(t);
          });
      } catch (t) {}
      var z = n(5602);
      function calcOrigin(t, e, n) {
        return "string" == typeof t ? t : z.px.transform(e + n * t);
      }
      var _ = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        W = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function buildSVGAttrs(t, e, n, r) {
        var i,
          o,
          s,
          l,
          d,
          p,
          f,
          v,
          m,
          h,
          g = e.attrX,
          y = e.attrY,
          x = e.originX,
          P = e.originY,
          V = e.pathLength,
          T = e.pathSpacing,
          A = e.pathOffset;
        buildHTMLStyles(
          t,
          (0, u._T)(e, [
            "attrX",
            "attrY",
            "originX",
            "originY",
            "pathLength",
            "pathSpacing",
            "pathOffset",
          ]),
          n,
          r
        ),
          (t.attrs = t.style),
          (t.style = {});
        var S = t.attrs,
          C = t.style,
          E = t.dimensions;
        S.transform && (E && (C.transform = S.transform), delete S.transform),
          E &&
            (void 0 !== x || void 0 !== P || C.transform) &&
            (C.transformOrigin =
              ((i = void 0 !== x ? x : 0.5),
              (o = void 0 !== P ? P : 0.5),
              (s = calcOrigin(i, E.x, E.width)),
              (l = calcOrigin(o, E.y, E.height)),
              "".concat(s, " ").concat(l))),
          void 0 !== g && (S.x = g),
          void 0 !== y && (S.y = y),
          void 0 !== V &&
            ((f = !1),
            void 0 === (d = void 0 === T ? 1 : T) && (d = 1),
            void 0 === (p = void 0 === A ? 0 : A) && (p = 0),
            void 0 === f && (f = !0),
            (S.pathLength = 1),
            (S[(v = f ? _ : W).offset] = z.px.transform(-p)),
            (m = z.px.transform(V)),
            (h = z.px.transform(d)),
            (S[v.array] = "".concat(m, " ").concat(h)));
      }
      var createSvgRenderState = function () {
          return (0, u.pi)((0, u.pi)({}, createHtmlRenderState()), {
            attrs: {},
          });
        },
        Y = /([a-z])([A-Z])/g,
        camelToDash = function (t) {
          return t.replace(Y, "$1-$2").toLowerCase();
        };
      function renderHTML(t, e, n, r) {
        var i = e.style,
          o = e.vars;
        for (var s in (Object.assign(t.style, i, r && r.getProjectionStyles(n)),
        o))
          t.style.setProperty(s, o[s]);
      }
      var Z = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
      ]);
      function renderSVG(t, e, n, r) {
        for (var i in (renderHTML(t, e, void 0, r), e.attrs))
          t.setAttribute(Z.has(i) ? i : camelToDash(i), e.attrs[i]);
      }
      function scrapeMotionValuesFromProps(t) {
        var e = t.style,
          n = {};
        for (var r in e)
          ((0, F.i)(e[r]) || isForcedMotionValue(r, t)) && (n[r] = e[r]);
        return n;
      }
      function scrape_motion_values_scrapeMotionValuesFromProps(t) {
        var e = scrapeMotionValuesFromProps(t);
        for (var n in t)
          (0, F.i)(t[n]) &&
            (e["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = t[n]);
        return e;
      }
      function isAnimationControls(t) {
        return "object" == typeof t && "function" == typeof t.start;
      }
      var $ = n(8715);
      function resolveMotionValue(t) {
        var e = (0, F.i)(t) ? t.get() : t;
        return (0, $.p)(e) ? e.toValue() : e;
      }
      function makeState(t, e, n, r) {
        var i = t.scrapeMotionValuesFromProps,
          o = t.createRenderState,
          s = t.onMount,
          l = {
            latestValues: (function (t, e, n, r) {
              var i = {},
                o = (null == n ? void 0 : n.initial) === !1,
                s = r(t);
              for (var l in s) i[l] = resolveMotionValue(s[l]);
              var d = t.initial,
                p = t.animate,
                f = checkIfControllingVariants(t),
                v = checkIfVariantNode(t);
              e &&
                v &&
                !f &&
                !1 !== t.inherit &&
                (null != d || (d = e.initial), null != p || (p = e.animate));
              var m = o || !1 === d,
                h = m ? p : d;
              return (
                h &&
                  "boolean" != typeof h &&
                  !isAnimationControls(h) &&
                  (Array.isArray(h) ? h : [h]).forEach(function (e) {
                    var n = resolveVariantFromProps(t, e);
                    if (n) {
                      var r = n.transitionEnd;
                      n.transition;
                      var o = (0, u._T)(n, ["transitionEnd", "transition"]);
                      for (var s in o) {
                        var l = o[s];
                        if (Array.isArray(l)) {
                          var d = m ? l.length - 1 : 0;
                          l = l[d];
                        }
                        null !== l && (i[s] = l);
                      }
                      for (var s in r) i[s] = r[s];
                    }
                  }),
                i
              );
            })(e, n, r, i),
            renderState: o(),
          };
        return (
          s &&
            (l.mount = function (t) {
              return s(e, t, l);
            }),
          l
        );
      }
      var makeUseVisualState = function (t) {
          return function (e, n) {
            var r = (0, d.useContext)(P),
              i = (0, d.useContext)(V);
            return n
              ? makeState(t, e, r, i)
              : useConstant(function () {
                  return makeState(t, e, r, i);
                });
          };
        },
        G = {
          useVisualState: makeUseVisualState({
            scrapeMotionValuesFromProps:
              scrape_motion_values_scrapeMotionValuesFromProps,
            createRenderState: createSvgRenderState,
            onMount: function (t, e, n) {
              var r = n.renderState,
                i = n.latestValues;
              try {
                r.dimensions =
                  "function" == typeof e.getBBox
                    ? e.getBBox()
                    : e.getBoundingClientRect();
              } catch (t) {
                r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              buildSVGAttrs(
                r,
                i,
                { enableHardwareAcceleration: !1 },
                t.transformTemplate
              ),
                renderSVG(e, r);
            },
          }),
        },
        q = {
          useVisualState: makeUseVisualState({
            scrapeMotionValuesFromProps: scrapeMotionValuesFromProps,
            createRenderState: createHtmlRenderState,
          }),
        };
      function addDomEvent(t, e, n, r) {
        return (
          void 0 === r && (r = { passive: !0 }),
          t.addEventListener(e, n, r),
          function () {
            return t.removeEventListener(e, n);
          }
        );
      }
      function useDomEvent(t, e, n, r) {
        (0, d.useEffect)(
          function () {
            var i = t.current;
            if (n && i) return addDomEvent(i, e, n, r);
          },
          [t, e, n, r]
        );
      }
      function isMouseEvent(t) {
        return "undefined" != typeof PointerEvent && t instanceof PointerEvent
          ? !("mouse" !== t.pointerType)
          : t instanceof MouseEvent;
      }
      ((i = s || (s = {})).Animate = "animate"),
        (i.Hover = "whileHover"),
        (i.Tap = "whileTap"),
        (i.Drag = "whileDrag"),
        (i.Focus = "whileFocus"),
        (i.InView = "whileInView"),
        (i.Exit = "exit");
      var X = { pageX: 0, pageY: 0 };
      function extractEventInfo(t, e) {
        var n, r, i;
        return (
          void 0 === e && (e = "page"),
          {
            point: t.touches
              ? (void 0 === (n = e) && (n = "page"),
                {
                  x: (r = t.touches[0] || t.changedTouches[0] || X)[n + "X"],
                  y: r[n + "Y"],
                })
              : (void 0 === (i = e) && (i = "page"),
                { x: t[i + "X"], y: t[i + "Y"] }),
          }
        );
      }
      var wrapHandler = function (t, e) {
          void 0 === e && (e = !1);
          var listener = function (e) {
            return t(e, extractEventInfo(e));
          };
          return e
            ? function (t) {
                var e = t instanceof MouseEvent;
                (!e || (e && 0 === t.button)) && listener(t);
              }
            : listener;
        },
        K = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave",
        },
        J = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel",
        };
      function getPointerEventName(t) {
        if (T && null === window.onpointerdown);
        else if (T && null === window.ontouchstart) return J[t];
        else if (T && null === window.onmousedown) return K[t];
        return t;
      }
      function addPointerEvent(t, e, n, r) {
        return addDomEvent(
          t,
          getPointerEventName(e),
          wrapHandler(n, "pointerdown" === e),
          r
        );
      }
      function usePointerEvent(t, e, n, r) {
        return useDomEvent(
          t,
          getPointerEventName(e),
          n && wrapHandler(n, "pointerdown" === e),
          r
        );
      }
      function createLock(t) {
        var e = null;
        return function () {
          return (
            null === e &&
            ((e = t),
            function () {
              e = null;
            })
          );
        };
      }
      var Q = createLock("dragHorizontal"),
        tt = createLock("dragVertical");
      function getGlobalLock(t) {
        var e = !1;
        if ("y" === t) e = tt();
        else if ("x" === t) e = Q();
        else {
          var n = Q(),
            r = tt();
          n && r
            ? (e = function () {
                n(), r();
              })
            : (n && n(), r && r());
        }
        return e;
      }
      function isDragActive() {
        var t = getGlobalLock(!0);
        return !t || (t(), !1);
      }
      function createHoverEvent(t, e, n) {
        return function (r, i) {
          var o;
          !isMouseEvent(r) ||
            isDragActive() ||
            (null === (o = t.animationState) ||
              void 0 === o ||
              o.setActive(s.Hover, e),
            null == n || n(r, i));
        };
      }
      var isNodeOrChild = function (t, e) {
        return !!e && (t === e || isNodeOrChild(t, e.parentElement));
      };
      function useUnmountEffect(t) {
        return (0, d.useEffect)(function () {
          return function () {
            return t();
          };
        }, []);
      }
      var te = n(9897),
        tn = new Set(),
        tr = new WeakMap(),
        ti = new WeakMap(),
        fireObserverCallback = function (t) {
          var e;
          null === (e = tr.get(t.target)) || void 0 === e || e(t);
        },
        fireAllObserverCallbacks = function (t) {
          t.forEach(fireObserverCallback);
        },
        to = { some: 0, all: 1 },
        makeRenderlessComponent = function (t) {
          return function (e) {
            return t(e), null;
          };
        },
        ta = {
          inView: makeRenderlessComponent(function (t) {
            var e = t.visualElement,
              n = t.whileInView,
              r = t.onViewportEnter,
              i = t.onViewportLeave,
              o = t.viewport,
              l = void 0 === o ? {} : o,
              p = (0, d.useRef)({ hasEnteredView: !1, isInView: !1 }),
              v = !!(n || r || i);
            l.once && p.current.hasEnteredView && (v = !1),
              ("undefined" == typeof IntersectionObserver
                ? function (t, e, n, r) {
                    var i = r.fallback,
                      o = void 0 === i || i;
                    (0, d.useEffect)(
                      function () {
                        if (t && o) {
                          if ("production" !== f) {
                            var r, i;
                            (r =
                              "IntersectionObserver not available on this device. whileInView animations will trigger on mount."),
                              tn.has(r) ||
                                (console.warn(r),
                                i && console.warn(i),
                                tn.add(r));
                          }
                          requestAnimationFrame(function () {
                            e.hasEnteredView = !0;
                            var t,
                              r = n.getProps().onViewportEnter;
                            null == r || r(null),
                              null === (t = n.animationState) ||
                                void 0 === t ||
                                t.setActive(s.InView, !0);
                          });
                        }
                      },
                      [t]
                    );
                  }
                : function (t, e, n, r) {
                    var i = r.root,
                      o = r.margin,
                      l = r.amount,
                      p = void 0 === l ? "some" : l,
                      f = r.once;
                    (0, d.useEffect)(
                      function () {
                        if (t) {
                          var r,
                            l,
                            d,
                            v,
                            m,
                            h,
                            g,
                            y = {
                              root: null == i ? void 0 : i.current,
                              rootMargin: o,
                              threshold: "number" == typeof p ? p : to[p],
                            };
                          return (
                            (r = n.getInstance()),
                            (l = y.root),
                            (d = (0, u._T)(y, ["root"])),
                            (v = l || document),
                            ti.has(v) || ti.set(v, {}),
                            (m = ti.get(v))[(h = JSON.stringify(d))] ||
                              (m[h] = new IntersectionObserver(
                                fireAllObserverCallbacks,
                                (0, u.pi)({ root: l }, d)
                              )),
                            (g = m[h]),
                            tr.set(r, function (t) {
                              var r,
                                i = t.isIntersecting;
                              if (e.isInView !== i) {
                                if (
                                  ((e.isInView = i),
                                  f && !i && e.hasEnteredView)
                                )
                                  return;
                                i && (e.hasEnteredView = !0),
                                  null === (r = n.animationState) ||
                                    void 0 === r ||
                                    r.setActive(s.InView, i);
                                var o = n.getProps(),
                                  l = i ? o.onViewportEnter : o.onViewportLeave;
                                null == l || l(t);
                              }
                            }),
                            g.observe(r),
                            function () {
                              tr.delete(r), g.unobserve(r);
                            }
                          );
                        }
                      },
                      [t, i, o, p]
                    );
                  })(v, p.current, e, l);
          }),
          tap: makeRenderlessComponent(function (t) {
            var e = t.onTap,
              n = t.onTapStart,
              r = t.onTapCancel,
              i = t.whileTap,
              o = t.visualElement,
              l = e || n || r || i,
              u = (0, d.useRef)(!1),
              p = (0, d.useRef)(null),
              f = { passive: !(n || e || r || onPointerDown) };
            function removePointerEndListener() {
              var t;
              null === (t = p.current) || void 0 === t || t.call(p),
                (p.current = null);
            }
            function checkPointerEnd() {
              var t;
              return (
                removePointerEndListener(),
                (u.current = !1),
                null === (t = o.animationState) ||
                  void 0 === t ||
                  t.setActive(s.Tap, !1),
                !isDragActive()
              );
            }
            function onPointerUp(t, n) {
              checkPointerEnd() &&
                (isNodeOrChild(o.getInstance(), t.target)
                  ? null == e || e(t, n)
                  : null == r || r(t, n));
            }
            function onPointerCancel(t, e) {
              checkPointerEnd() && (null == r || r(t, e));
            }
            function onPointerDown(t, e) {
              var r;
              removePointerEndListener(),
                u.current ||
                  ((u.current = !0),
                  (p.current = (0, te.z)(
                    addPointerEvent(window, "pointerup", onPointerUp, f),
                    addPointerEvent(window, "pointercancel", onPointerCancel, f)
                  )),
                  null === (r = o.animationState) ||
                    void 0 === r ||
                    r.setActive(s.Tap, !0),
                  null == n || n(t, e));
            }
            usePointerEvent(o, "pointerdown", l ? onPointerDown : void 0, f),
              useUnmountEffect(removePointerEndListener);
          }),
          focus: makeRenderlessComponent(function (t) {
            var e = t.whileFocus,
              n = t.visualElement;
            useDomEvent(
              n,
              "focus",
              e
                ? function () {
                    var t;
                    null === (t = n.animationState) ||
                      void 0 === t ||
                      t.setActive(s.Focus, !0);
                  }
                : void 0
            ),
              useDomEvent(
                n,
                "blur",
                e
                  ? function () {
                      var t;
                      null === (t = n.animationState) ||
                        void 0 === t ||
                        t.setActive(s.Focus, !1);
                    }
                  : void 0
              );
          }),
          hover: makeRenderlessComponent(function (t) {
            var e = t.onHoverStart,
              n = t.onHoverEnd,
              r = t.whileHover,
              i = t.visualElement;
            usePointerEvent(
              i,
              "pointerenter",
              e || r ? createHoverEvent(i, !0, e) : void 0,
              { passive: !e }
            ),
              usePointerEvent(
                i,
                "pointerleave",
                n || r ? createHoverEvent(i, !1, n) : void 0,
                { passive: !n }
              );
          }),
        },
        ts = 0,
        incrementId = function () {
          return ts++;
        };
      function usePresence() {
        var t = (0, d.useContext)(V);
        if (null === t) return [!0, null];
        var e = t.isPresent,
          n = t.onExitComplete,
          r = t.register,
          i = useConstant(incrementId);
        return (
          (0, d.useEffect)(function () {
            return r(i);
          }, []),
          !e && n
            ? [
                !1,
                function () {
                  return null == n ? void 0 : n(i);
                },
              ]
            : [!0]
        );
      }
      var tl = n(8488);
      function shallowCompare(t, e) {
        if (!Array.isArray(e)) return !1;
        var n = e.length;
        if (n !== t.length) return !1;
        for (var r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      var tu = n(3116),
        tc = n(8407),
        td = n(3234),
        tp = n(9135),
        tf = n(7405),
        tv = n(1248),
        testValueType = function (t) {
          return function (e) {
            return e.test(t);
          };
        },
        tm = [
          tv.Rx,
          z.px,
          z.aQ,
          z.RW,
          z.vw,
          z.vh,
          {
            test: function (t) {
              return "auto" === t;
            },
            parse: function (t) {
              return t;
            },
          },
        ],
        findDimensionValueType = function (t) {
          return tm.find(testValueType(t));
        },
        th = (0, u.ev)((0, u.ev)([], (0, u.CR)(tm), !1), [tf.$, tc.P], !1);
      function animateVariant(t, e, n) {
        void 0 === n && (n = {});
        var r,
          i = resolveVariant(t, e, n.custom),
          o = (i || {}).transition,
          s = void 0 === o ? t.getDefaultTransition() || {} : o;
        n.transitionOverride && (s = n.transitionOverride);
        var l = i
            ? function () {
                return animateTarget(t, i, n);
              }
            : function () {
                return Promise.resolve();
              },
          d = (
            null === (r = t.variantChildren) || void 0 === r ? void 0 : r.size
          )
            ? function (r) {
                void 0 === r && (r = 0);
                var i,
                  o,
                  l,
                  d,
                  p,
                  f,
                  v,
                  m = s.delayChildren;
                return (
                  (i = (void 0 === m ? 0 : m) + r),
                  (o = s.staggerChildren),
                  (l = s.staggerDirection),
                  (d = n),
                  void 0 === i && (i = 0),
                  void 0 === o && (o = 0),
                  void 0 === l && (l = 1),
                  (p = []),
                  (f = (t.variantChildren.size - 1) * o),
                  (v =
                    1 === l
                      ? function (t) {
                          return void 0 === t && (t = 0), t * o;
                        }
                      : function (t) {
                          return void 0 === t && (t = 0), f - t * o;
                        }),
                  Array.from(t.variantChildren)
                    .sort(sortByTreeOrder)
                    .forEach(function (t, n) {
                      p.push(
                        animateVariant(
                          t,
                          e,
                          (0, u.pi)((0, u.pi)({}, d), { delay: i + v(n) })
                        ).then(function () {
                          return t.notifyAnimationComplete(e);
                        })
                      );
                    }),
                  Promise.all(p)
                );
              }
            : function () {
                return Promise.resolve();
              },
          p = s.when;
        if (!p) return Promise.all([l(), d(n.delay)]);
        var f = (0, u.CR)("beforeChildren" === p ? [l, d] : [d, l], 2),
          v = f[0],
          m = f[1];
        return v().then(m);
      }
      function animateTarget(t, e, n) {
        var r,
          i = void 0 === n ? {} : n,
          o = i.delay,
          s = void 0 === o ? 0 : o,
          l = i.transitionOverride,
          d = i.type,
          p = t.makeTargetAnimatable(e),
          f = p.transition,
          v = void 0 === f ? t.getDefaultTransition() : f,
          m = p.transitionEnd,
          h = (0, u._T)(p, ["transition", "transitionEnd"]);
        l && (v = l);
        var g = [],
          y =
            d &&
            (null === (r = t.animationState) || void 0 === r
              ? void 0
              : r.getState()[d]);
        for (var x in h) {
          var P = t.getValue(x),
            V = h[x];
          if (
            !(
              !P ||
              void 0 === V ||
              (y &&
                (function (t, e) {
                  var n = t.protectedKeys,
                    r = t.needsAnimating,
                    i = n.hasOwnProperty(e) && !0 !== r[e];
                  return (r[e] = !1), i;
                })(y, x))
            )
          ) {
            var T = (0, u.pi)({ delay: s }, v);
            t.shouldReduceMotion &&
              isTransformProp(x) &&
              (T = (0, u.pi)((0, u.pi)({}, T), { type: !1, delay: 0 }));
            var A = (0, tu.b8)(x, P, V, T);
            g.push(A);
          }
        }
        return Promise.all(g).then(function () {
          m &&
            (function (t, e) {
              var n = resolveVariant(t, e),
                r = n ? t.makeTargetAnimatable(n, !1) : {},
                i = r.transitionEnd,
                o = void 0 === i ? {} : i;
              r.transition;
              var s = (0, u._T)(r, ["transitionEnd", "transition"]);
              for (var l in (s = (0, u.pi)((0, u.pi)({}, s), o))) {
                var d = (0, $.Y)(s[l]);
                t.hasValue(l)
                  ? t.getValue(l).set(d)
                  : t.addValue(l, (0, td.B)(d));
              }
            })(t, m);
        });
      }
      function sortByTreeOrder(t, e) {
        return t.sortNodePosition(e);
      }
      var tg = [s.Animate, s.InView, s.Focus, s.Hover, s.Tap, s.Drag, s.Exit],
        ty = (0, u.ev)([], (0, u.CR)(tg), !1).reverse(),
        tx = tg.length;
      function createTypeState(t) {
        return (
          void 0 === t && (t = !1),
          {
            isActive: t,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {},
          }
        );
      }
      var tP = {
          animation: makeRenderlessComponent(function (t) {
            var e = t.visualElement,
              n = t.animate;
            e.animationState ||
              (e.animationState = (function (t) {
                var e,
                  animate = function (e) {
                    return Promise.all(
                      e.map(function (e) {
                        return (function (t, e, n) {
                          if (
                            (void 0 === n && (n = {}),
                            t.notifyAnimationStart(e),
                            Array.isArray(e))
                          ) {
                            var r;
                            r = Promise.all(
                              e.map(function (e) {
                                return animateVariant(t, e, n);
                              })
                            );
                          } else if ("string" == typeof e)
                            r = animateVariant(t, e, n);
                          else {
                            var i =
                              "function" == typeof e
                                ? resolveVariant(t, e, n.custom)
                                : e;
                            r = animateTarget(t, i, n);
                          }
                          return r.then(function () {
                            return t.notifyAnimationComplete(e);
                          });
                        })(t, e.animation, e.options);
                      })
                    );
                  },
                  n =
                    (((e = {})[s.Animate] = createTypeState(!0)),
                    (e[s.InView] = createTypeState()),
                    (e[s.Hover] = createTypeState()),
                    (e[s.Tap] = createTypeState()),
                    (e[s.Drag] = createTypeState()),
                    (e[s.Focus] = createTypeState()),
                    (e[s.Exit] = createTypeState()),
                    e),
                  r = {},
                  i = !0,
                  buildResolvedTypeValues = function (e, n) {
                    var r = resolveVariant(t, n);
                    if (r) {
                      r.transition;
                      var i = r.transitionEnd,
                        o = (0, u._T)(r, ["transition", "transitionEnd"]);
                      e = (0, u.pi)((0, u.pi)((0, u.pi)({}, e), o), i);
                    }
                    return e;
                  };
                function animateChanges(e, o) {
                  for (
                    var s,
                      l = t.getProps(),
                      d = t.getVariantContext(!0) || {},
                      p = [],
                      f = new Set(),
                      v = {},
                      m = 1 / 0,
                      h = 0;
                    h < tx;
                    h++
                  )
                    !(function (r) {
                      var h,
                        g = ty[r],
                        y = n[g],
                        x = null !== (s = l[g]) && void 0 !== s ? s : d[g],
                        P = isVariantLabel(x),
                        V = g === o ? y.isActive : null;
                      !1 === V && (m = r);
                      var T = x === d[g] && x !== l[g] && P;
                      if (
                        (T && i && t.manuallyAnimateOnMount && (T = !1),
                        (y.protectedKeys = (0, u.pi)({}, v)),
                        !(
                          (!y.isActive && null === V) ||
                          (!x && !y.prevProp) ||
                          isAnimationControls(x)
                        ) && "boolean" != typeof x)
                      ) {
                        var A =
                            ((h = y.prevProp),
                            "string" == typeof x
                              ? x !== h
                              : !!isVariantLabels(x) && !shallowCompare(x, h)),
                          S =
                            A ||
                            (g === o && y.isActive && !T && P) ||
                            (r > m && P),
                          C = Array.isArray(x) ? x : [x],
                          E = C.reduce(buildResolvedTypeValues, {});
                        !1 === V && (E = {});
                        var w = y.prevResolvedValues,
                          D = void 0 === w ? {} : w,
                          R = (0, u.pi)((0, u.pi)({}, D), E),
                          markToAnimate = function (t) {
                            (S = !0), f.delete(t), (y.needsAnimating[t] = !0);
                          };
                        for (var M in R) {
                          var L = E[M],
                            k = D[M];
                          v.hasOwnProperty(M) ||
                            (L !== k
                              ? (0, tl.C)(L) && (0, tl.C)(k)
                                ? !shallowCompare(L, k) || A
                                  ? markToAnimate(M)
                                  : (y.protectedKeys[M] = !0)
                                : void 0 !== L
                                ? markToAnimate(M)
                                : f.add(M)
                              : void 0 !== L && f.has(M)
                              ? markToAnimate(M)
                              : (y.protectedKeys[M] = !0));
                        }
                        (y.prevProp = x),
                          (y.prevResolvedValues = E),
                          y.isActive && (v = (0, u.pi)((0, u.pi)({}, v), E)),
                          i && t.blockInitialAnimation && (S = !1),
                          S &&
                            !T &&
                            p.push.apply(
                              p,
                              (0, u.ev)(
                                [],
                                (0, u.CR)(
                                  C.map(function (t) {
                                    return {
                                      animation: t,
                                      options: (0, u.pi)({ type: g }, e),
                                    };
                                  })
                                ),
                                !1
                              )
                            );
                      }
                    })(h);
                  if (((r = (0, u.pi)({}, v)), f.size)) {
                    var g = {};
                    f.forEach(function (e) {
                      var n = t.getBaseTarget(e);
                      void 0 !== n && (g[e] = n);
                    }),
                      p.push({ animation: g });
                  }
                  var y = !!p.length;
                  return (
                    i &&
                      !1 === l.initial &&
                      !t.manuallyAnimateOnMount &&
                      (y = !1),
                    (i = !1),
                    y ? animate(p) : Promise.resolve()
                  );
                }
                return {
                  isAnimated: function (t) {
                    return void 0 !== r[t];
                  },
                  animateChanges: animateChanges,
                  setActive: function (e, r, i) {
                    if (n[e].isActive === r) return Promise.resolve();
                    null === (o = t.variantChildren) ||
                      void 0 === o ||
                      o.forEach(function (t) {
                        var n;
                        return null === (n = t.animationState) || void 0 === n
                          ? void 0
                          : n.setActive(e, r);
                      }),
                      (n[e].isActive = r);
                    var o,
                      s = animateChanges(i, e);
                    for (var l in n) n[l].protectedKeys = {};
                    return s;
                  },
                  setAnimateFunction: function (e) {
                    animate = e(t);
                  },
                  getState: function () {
                    return n;
                  },
                };
              })(e)),
              isAnimationControls(n) &&
                (0, d.useEffect)(
                  function () {
                    return n.subscribe(e);
                  },
                  [n]
                );
          }),
          exit: makeRenderlessComponent(function (t) {
            var e = t.custom,
              n = t.visualElement,
              r = (0, u.CR)(usePresence(), 2),
              i = r[0],
              o = r[1],
              l = (0, d.useContext)(V);
            (0, d.useEffect)(
              function () {
                n.isPresent = i;
                var t,
                  r,
                  u =
                    null === (t = n.animationState) || void 0 === t
                      ? void 0
                      : t.setActive(s.Exit, !i, {
                          custom:
                            null !== (r = null == l ? void 0 : l.custom) &&
                            void 0 !== r
                              ? r
                              : e,
                        });
                i || null == u || u.then(o);
              },
              [i]
            );
          }),
        },
        tb = n(4735),
        tV = n(6917);
      let isPoint = (t) => t.hasOwnProperty("x") && t.hasOwnProperty("y"),
        isPoint3D = (t) => isPoint(t) && t.hasOwnProperty("z");
      var tT = n(734);
      let distance1D = (t, e) => Math.abs(t - e);
      function distance(t, e) {
        if ((0, tT.e)(t) && (0, tT.e)(e)) return distance1D(t, e);
        if (isPoint(t) && isPoint(e)) {
          let n = distance1D(t.x, e.x),
            r = distance1D(t.y, e.y),
            i = isPoint3D(t) && isPoint3D(e) ? distance1D(t.z, e.z) : 0;
          return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(i, 2));
        }
      }
      var tA = (function () {
        function PanSession(t, e, n) {
          var r = this,
            i = (void 0 === n ? {} : n).transformPagePoint;
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = function () {
              if (r.lastMoveEvent && r.lastMoveEventInfo) {
                var t = getPanInfo(r.lastMoveEventInfo, r.history),
                  e = null !== r.startEvent,
                  n = distance(t.offset, { x: 0, y: 0 }) >= 3;
                if (e || n) {
                  var i = t.point,
                    o = (0, tb.$B)().timestamp;
                  r.history.push((0, u.pi)((0, u.pi)({}, i), { timestamp: o }));
                  var s = r.handlers,
                    l = s.onStart,
                    d = s.onMove;
                  e ||
                    (l && l(r.lastMoveEvent, t),
                    (r.startEvent = r.lastMoveEvent)),
                    d && d(r.lastMoveEvent, t);
                }
              }
            }),
            (this.handlePointerMove = function (t, e) {
              if (
                ((r.lastMoveEvent = t),
                (r.lastMoveEventInfo = transformPoint(e, r.transformPagePoint)),
                isMouseEvent(t) && 0 === t.buttons)
              ) {
                r.handlePointerUp(t, e);
                return;
              }
              tb.ZP.update(r.updatePoint, !0);
            }),
            (this.handlePointerUp = function (t, e) {
              r.end();
              var n = r.handlers,
                i = n.onEnd,
                o = n.onSessionEnd,
                s = getPanInfo(
                  transformPoint(e, r.transformPagePoint),
                  r.history
                );
              r.startEvent && i && i(t, s), o && o(t, s);
            }),
            !t.touches || !(t.touches.length > 1))
          ) {
            (this.handlers = e), (this.transformPagePoint = i);
            var o = transformPoint(
                extractEventInfo(t),
                this.transformPagePoint
              ),
              s = o.point,
              l = (0, tb.$B)().timestamp;
            this.history = [(0, u.pi)((0, u.pi)({}, s), { timestamp: l })];
            var d = e.onSessionStart;
            d && d(t, getPanInfo(o, this.history)),
              (this.removeListeners = (0, te.z)(
                addPointerEvent(window, "pointermove", this.handlePointerMove),
                addPointerEvent(window, "pointerup", this.handlePointerUp),
                addPointerEvent(window, "pointercancel", this.handlePointerUp)
              ));
          }
        }
        return (
          (PanSession.prototype.updateHandlers = function (t) {
            this.handlers = t;
          }),
          (PanSession.prototype.end = function () {
            this.removeListeners && this.removeListeners(),
              tb.qY.update(this.updatePoint);
          }),
          PanSession
        );
      })();
      function transformPoint(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function subtractPoint(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function getPanInfo(t, e) {
        var n = t.point;
        return {
          point: n,
          delta: subtractPoint(n, lastDevicePoint(e)),
          offset: subtractPoint(n, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            for (
              var n = t.length - 1, r = null, i = lastDevicePoint(t);
              n >= 0 &&
              ((r = t[n]), !(i.timestamp - r.timestamp > (0, tV.w)(0.1)));

            )
              n--;
            if (!r) return { x: 0, y: 0 };
            var o = (i.timestamp - r.timestamp) / 1e3;
            if (0 === o) return { x: 0, y: 0 };
            var s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
            return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
          })(e, 0),
        };
      }
      function lastDevicePoint(t) {
        return t[t.length - 1];
      }
      var tS = n(2453),
        tC = n(9326),
        tE = n(6773);
      function calcLength(t) {
        return t.max - t.min;
      }
      function isNear(t, e, n) {
        return (
          void 0 === e && (e = 0),
          void 0 === n && (n = 0.01),
          distance(t, e) < n
        );
      }
      function calcAxisDelta(t, e, n, r) {
        void 0 === r && (r = 0.5),
          (t.origin = r),
          (t.originPoint = (0, tS.C)(e.min, e.max, t.origin)),
          (t.scale = calcLength(n) / calcLength(e)),
          (isNear(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = (0, tS.C)(n.min, n.max, t.origin) - t.originPoint),
          (isNear(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function calcBoxDelta(t, e, n, r) {
        calcAxisDelta(t.x, e.x, n.x, null == r ? void 0 : r.originX),
          calcAxisDelta(t.y, e.y, n.y, null == r ? void 0 : r.originY);
      }
      function calcRelativeAxis(t, e, n) {
        (t.min = n.min + e.min), (t.max = t.min + calcLength(e));
      }
      function calcRelativeAxisPosition(t, e, n) {
        (t.min = e.min - n.min), (t.max = t.min + calcLength(e));
      }
      function calcRelativePosition(t, e, n) {
        calcRelativeAxisPosition(t.x, e.x, n.x),
          calcRelativeAxisPosition(t.y, e.y, n.y);
      }
      function calcRelativeAxisConstraints(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0,
        };
      }
      function calcViewportAxisConstraints(t, e) {
        var n,
          r = e.min - t.min,
          i = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min &&
            ((r = (n = (0, u.CR)([i, r], 2))[0]), (i = n[1])),
          { min: r, max: i }
        );
      }
      function resolveAxisElastic(t, e, n) {
        return {
          min: resolvePointElastic(t, e),
          max: resolvePointElastic(t, n),
        };
      }
      function resolvePointElastic(t, e) {
        var n;
        return "number" == typeof t
          ? t
          : null !== (n = t[e]) && void 0 !== n
          ? n
          : 0;
      }
      var createAxisDelta = function () {
          return { translate: 0, scale: 1, origin: 0, originPoint: 0 };
        },
        createDelta = function () {
          return { x: createAxisDelta(), y: createAxisDelta() };
        },
        createAxis = function () {
          return { min: 0, max: 0 };
        },
        createBox = function () {
          return { x: createAxis(), y: createAxis() };
        };
      function eachAxis(t) {
        return [t("x"), t("y")];
      }
      function convertBoundingBoxToBox(t) {
        var e = t.top;
        return {
          x: { min: t.left, max: t.right },
          y: { min: e, max: t.bottom },
        };
      }
      function isIdentityScale(t) {
        return void 0 === t || 1 === t;
      }
      function hasScale(t) {
        var e = t.scale,
          n = t.scaleX,
          r = t.scaleY;
        return (
          !isIdentityScale(e) || !isIdentityScale(n) || !isIdentityScale(r)
        );
      }
      function hasTransform(t) {
        var e, n;
        return (
          hasScale(t) ||
          ((e = t.x) && "0%" !== e) ||
          ((n = t.y) && "0%" !== n) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY
        );
      }
      function applyPointDelta(t, e, n, r, i) {
        return void 0 !== i && (t = r + i * (t - r)), r + n * (t - r) + e;
      }
      function applyAxisDelta(t, e, n, r, i) {
        void 0 === e && (e = 0),
          void 0 === n && (n = 1),
          (t.min = applyPointDelta(t.min, e, n, r, i)),
          (t.max = applyPointDelta(t.max, e, n, r, i));
      }
      function applyBoxDelta(t, e) {
        var n = e.x,
          r = e.y;
        applyAxisDelta(t.x, n.translate, n.scale, n.originPoint),
          applyAxisDelta(t.y, r.translate, r.scale, r.originPoint);
      }
      function translateAxis(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function transformAxis(t, e, n) {
        var r = (0, u.CR)(n, 3),
          i = r[0],
          o = r[1],
          s = r[2],
          l = void 0 !== e[s] ? e[s] : 0.5,
          d = (0, tS.C)(t.min, t.max, l);
        applyAxisDelta(t, e[i], e[o], d, e.scale);
      }
      var tw = ["x", "scaleX", "originX"],
        tD = ["y", "scaleY", "originY"];
      function transformBox(t, e) {
        transformAxis(t.x, e, tw), transformAxis(t.y, e, tD);
      }
      function measureViewportBox(t, e) {
        return convertBoundingBoxToBox(
          (function (t, e) {
            if (!e) return t;
            var n = e({ x: t.left, y: t.top }),
              r = e({ x: t.right, y: t.bottom });
            return { top: n.y, left: n.x, bottom: r.y, right: r.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      var tR = new WeakMap(),
        tM = (function () {
          function VisualElementDragControls(t) {
            (this.openGlobalLock = null),
              (this.isDragging = !1),
              (this.currentDirection = null),
              (this.originPoint = { x: 0, y: 0 }),
              (this.constraints = !1),
              (this.hasMutatedConstraints = !1),
              (this.elastic = createBox()),
              (this.visualElement = t);
          }
          return (
            (VisualElementDragControls.prototype.start = function (t, e) {
              var n = this,
                r = (void 0 === e ? {} : e).snapToCursor,
                i = void 0 !== r && r;
              !1 !== this.visualElement.isPresent &&
                (this.panSession = new tA(
                  t,
                  {
                    onSessionStart: function (t) {
                      n.stopAnimation(),
                        i && n.snapToCursor(extractEventInfo(t, "page").point);
                    },
                    onStart: function (t, e) {
                      var r,
                        i = n.getProps(),
                        o = i.drag,
                        l = i.dragPropagation,
                        u = i.onDragStart;
                      (!o ||
                        l ||
                        (n.openGlobalLock && n.openGlobalLock(),
                        (n.openGlobalLock = getGlobalLock(o)),
                        n.openGlobalLock)) &&
                        ((n.isDragging = !0),
                        (n.currentDirection = null),
                        n.resolveConstraints(),
                        n.visualElement.projection &&
                          ((n.visualElement.projection.isAnimationBlocked = !0),
                          (n.visualElement.projection.target = void 0)),
                        eachAxis(function (t) {
                          var e,
                            r,
                            i = n.getAxisMotionValue(t).get() || 0;
                          if (z.aQ.test(i)) {
                            var o =
                              null ===
                                (r =
                                  null === (e = n.visualElement.projection) ||
                                  void 0 === e
                                    ? void 0
                                    : e.layout) || void 0 === r
                                ? void 0
                                : r.actual[t];
                            o && (i = calcLength(o) * (parseFloat(i) / 100));
                          }
                          n.originPoint[t] = i;
                        }),
                        null == u || u(t, e),
                        null === (r = n.visualElement.animationState) ||
                          void 0 === r ||
                          r.setActive(s.Drag, !0));
                    },
                    onMove: function (t, e) {
                      var r = n.getProps(),
                        i = r.dragPropagation,
                        o = r.dragDirectionLock,
                        s = r.onDirectionLock,
                        l = r.onDrag;
                      if (i || n.openGlobalLock) {
                        var u,
                          d,
                          p = e.offset;
                        if (o && null === n.currentDirection) {
                          (n.currentDirection =
                            (void 0 === u && (u = 10),
                            (d = null),
                            Math.abs(p.y) > u
                              ? (d = "y")
                              : Math.abs(p.x) > u && (d = "x"),
                            d)),
                            null !== n.currentDirection &&
                              (null == s || s(n.currentDirection));
                          return;
                        }
                        n.updateAxis("x", e.point, p),
                          n.updateAxis("y", e.point, p),
                          n.visualElement.syncRender(),
                          null == l || l(t, e);
                      }
                    },
                    onSessionEnd: function (t, e) {
                      return n.stop(t, e);
                    },
                  },
                  {
                    transformPagePoint:
                      this.visualElement.getTransformPagePoint(),
                  }
                ));
            }),
            (VisualElementDragControls.prototype.stop = function (t, e) {
              var n = this.isDragging;
              if ((this.cancel(), n)) {
                var r = e.velocity;
                this.startAnimation(r);
                var i = this.getProps().onDragEnd;
                null == i || i(t, e);
              }
            }),
            (VisualElementDragControls.prototype.cancel = function () {
              var t, e;
              (this.isDragging = !1),
                this.visualElement.projection &&
                  (this.visualElement.projection.isAnimationBlocked = !1),
                null === (t = this.panSession) || void 0 === t || t.end(),
                (this.panSession = void 0),
                !this.getProps().dragPropagation &&
                  this.openGlobalLock &&
                  (this.openGlobalLock(), (this.openGlobalLock = null)),
                null === (e = this.visualElement.animationState) ||
                  void 0 === e ||
                  e.setActive(s.Drag, !1);
            }),
            (VisualElementDragControls.prototype.updateAxis = function (
              t,
              e,
              n
            ) {
              var r = this.getProps().drag;
              if (n && shouldDrag(t, r, this.currentDirection)) {
                var i,
                  o,
                  s,
                  l,
                  u,
                  d = this.getAxisMotionValue(t),
                  p = this.originPoint[t] + n[t];
                this.constraints &&
                  this.constraints[t] &&
                  ((i = p),
                  (o = this.constraints[t]),
                  (s = this.elastic[t]),
                  (l = o.min),
                  (u = o.max),
                  void 0 !== l && i < l
                    ? (i = s ? (0, tS.C)(l, i, s.min) : Math.max(i, l))
                    : void 0 !== u &&
                      i > u &&
                      (i = s ? (0, tS.C)(u, i, s.max) : Math.min(i, u)),
                  (p = i)),
                  d.set(p);
              }
            }),
            (VisualElementDragControls.prototype.resolveConstraints =
              function () {
                var t,
                  e,
                  n,
                  r,
                  i,
                  o,
                  s = this,
                  l = this.getProps(),
                  u = l.dragConstraints,
                  d = l.dragElastic,
                  p = (this.visualElement.projection || {}).layout,
                  f = this.constraints;
                u && isRefObject(u)
                  ? this.constraints ||
                    (this.constraints = this.resolveRefConstraints())
                  : u && p
                  ? (this.constraints =
                      ((t = p.actual),
                      (e = u.top),
                      (n = u.left),
                      (r = u.bottom),
                      (i = u.right),
                      {
                        x: calcRelativeAxisConstraints(t.x, n, i),
                        y: calcRelativeAxisConstraints(t.y, e, r),
                      }))
                  : (this.constraints = !1),
                  (this.elastic =
                    (void 0 === (o = d) && (o = 0.35),
                    !1 === o ? (o = 0) : !0 === o && (o = 0.35),
                    {
                      x: resolveAxisElastic(o, "left", "right"),
                      y: resolveAxisElastic(o, "top", "bottom"),
                    })),
                  f !== this.constraints &&
                    p &&
                    this.constraints &&
                    !this.hasMutatedConstraints &&
                    eachAxis(function (t) {
                      if (s.getAxisMotionValue(t)) {
                        var e, n, r;
                        s.constraints[t] =
                          ((e = p.actual[t]),
                          (n = s.constraints[t]),
                          (r = {}),
                          void 0 !== n.min && (r.min = n.min - e.min),
                          void 0 !== n.max && (r.max = n.max - e.min),
                          r);
                      }
                    });
              }),
            (VisualElementDragControls.prototype.resolveRefConstraints =
              function () {
                var t = this.getProps(),
                  e = t.dragConstraints,
                  n = t.onMeasureDragConstraints;
                if (!e || !isRefObject(e)) return !1;
                var r = e.current;
                (0, m.k)(
                  null !== r,
                  "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
                );
                var i = this.visualElement.projection;
                if (!i || !i.layout) return !1;
                var o =
                    ((l = i.root),
                    (u = measureViewportBox(
                      r,
                      this.visualElement.getTransformPagePoint()
                    )),
                    (d = l.scroll) &&
                      (translateAxis(u.x, d.x), translateAxis(u.y, d.y)),
                    u),
                  s = {
                    x: calcViewportAxisConstraints(
                      (p = i.layout.actual).x,
                      o.x
                    ),
                    y: calcViewportAxisConstraints(p.y, o.y),
                  };
                if (n) {
                  var l,
                    u,
                    d,
                    p,
                    f,
                    v,
                    h,
                    g = n(
                      ((v = (f = s).x),
                      {
                        top: (h = f.y).min,
                        right: v.max,
                        bottom: h.max,
                        left: v.min,
                      })
                    );
                  (this.hasMutatedConstraints = !!g),
                    g && (s = convertBoundingBoxToBox(g));
                }
                return s;
              }),
            (VisualElementDragControls.prototype.startAnimation = function (t) {
              var e = this,
                n = this.getProps(),
                r = n.drag,
                i = n.dragMomentum,
                o = n.dragElastic,
                s = n.dragTransition,
                l = n.dragSnapToOrigin,
                d = n.onDragTransitionEnd,
                p = this.constraints || {};
              return Promise.all(
                eachAxis(function (n) {
                  if (shouldDrag(n, r, e.currentDirection)) {
                    var d,
                      f =
                        null !== (d = null == p ? void 0 : p[n]) && void 0 !== d
                          ? d
                          : {};
                    l && (f = { min: 0, max: 0 });
                    var v = (0, u.pi)(
                      (0, u.pi)(
                        {
                          type: "inertia",
                          velocity: i ? t[n] : 0,
                          bounceStiffness: o ? 200 : 1e6,
                          bounceDamping: o ? 40 : 1e7,
                          timeConstant: 750,
                          restDelta: 1,
                          restSpeed: 10,
                        },
                        s
                      ),
                      f
                    );
                    return e.startAxisValueAnimation(n, v);
                  }
                })
              ).then(d);
            }),
            (VisualElementDragControls.prototype.startAxisValueAnimation =
              function (t, e) {
                var n = this.getAxisMotionValue(t);
                return (0, tu.b8)(t, n, 0, e);
              }),
            (VisualElementDragControls.prototype.stopAnimation = function () {
              var t = this;
              eachAxis(function (e) {
                return t.getAxisMotionValue(e).stop();
              });
            }),
            (VisualElementDragControls.prototype.getAxisMotionValue = function (
              t
            ) {
              var e,
                n,
                r = "_drag" + t.toUpperCase();
              return (
                this.visualElement.getProps()[r] ||
                this.visualElement.getValue(
                  t,
                  null !==
                    (n =
                      null === (e = this.visualElement.getProps().initial) ||
                      void 0 === e
                        ? void 0
                        : e[t]) && void 0 !== n
                    ? n
                    : 0
                )
              );
            }),
            (VisualElementDragControls.prototype.snapToCursor = function (t) {
              var e = this;
              eachAxis(function (n) {
                if (shouldDrag(n, e.getProps().drag, e.currentDirection)) {
                  var r = e.visualElement.projection,
                    i = e.getAxisMotionValue(n);
                  if (r && r.layout) {
                    var o = r.layout.actual[n],
                      s = o.min,
                      l = o.max;
                    i.set(t[n] - (0, tS.C)(s, l, 0.5));
                  }
                }
              });
            }),
            (VisualElementDragControls.prototype.scalePositionWithinConstraints =
              function () {
                var t,
                  e = this,
                  n = this.getProps(),
                  r = n.drag,
                  i = n.dragConstraints,
                  o = this.visualElement.projection;
                if (isRefObject(i) && o && this.constraints) {
                  this.stopAnimation();
                  var s = { x: 0, y: 0 };
                  eachAxis(function (t) {
                    var n = e.getAxisMotionValue(t);
                    if (n) {
                      var r,
                        i,
                        o,
                        l,
                        u,
                        d = n.get();
                      s[t] =
                        ((r = { min: d, max: d }),
                        (i = e.constraints[t]),
                        (o = 0.5),
                        (l = calcLength(r)),
                        (u = calcLength(i)) > l
                          ? (o = (0, tC.Y)(i.min, i.max - l, r.min))
                          : l > u && (o = (0, tC.Y)(r.min, r.max - u, i.min)),
                        (0, tE.u)(0, 1, o));
                    }
                  });
                  var l = this.visualElement.getProps().transformTemplate;
                  (this.visualElement.getInstance().style.transform = l
                    ? l({}, "")
                    : "none"),
                    null === (t = o.root) || void 0 === t || t.updateScroll(),
                    o.updateLayout(),
                    this.resolveConstraints(),
                    eachAxis(function (t) {
                      if (shouldDrag(t, r, null)) {
                        var n = e.getAxisMotionValue(t),
                          i = e.constraints[t],
                          o = i.min,
                          l = i.max;
                        n.set((0, tS.C)(o, l, s[t]));
                      }
                    });
                }
              }),
            (VisualElementDragControls.prototype.addListeners = function () {
              var t,
                e = this;
              tR.set(this.visualElement, this);
              var n = addPointerEvent(
                  this.visualElement.getInstance(),
                  "pointerdown",
                  function (t) {
                    var n = e.getProps(),
                      r = n.drag,
                      i = n.dragListener;
                    r && (void 0 === i || i) && e.start(t);
                  }
                ),
                measureDragConstraints = function () {
                  isRefObject(e.getProps().dragConstraints) &&
                    (e.constraints = e.resolveRefConstraints());
                },
                r = this.visualElement.projection,
                i = r.addEventListener("measure", measureDragConstraints);
              r &&
                !r.layout &&
                (null === (t = r.root) || void 0 === t || t.updateScroll(),
                r.updateLayout()),
                measureDragConstraints();
              var o = addDomEvent(window, "resize", function () {
                return e.scalePositionWithinConstraints();
              });
              return (
                r.addEventListener("didUpdate", function (t) {
                  var n = t.delta,
                    r = t.hasLayoutChanged;
                  e.isDragging &&
                    r &&
                    (eachAxis(function (t) {
                      var r = e.getAxisMotionValue(t);
                      r &&
                        ((e.originPoint[t] += n[t].translate),
                        r.set(r.get() + n[t].translate));
                    }),
                    e.visualElement.syncRender());
                }),
                function () {
                  o(), n(), i();
                }
              );
            }),
            (VisualElementDragControls.prototype.getProps = function () {
              var t = this.visualElement.getProps(),
                e = t.drag,
                n = t.dragDirectionLock,
                r = t.dragPropagation,
                i = t.dragConstraints,
                o = t.dragElastic,
                s = t.dragMomentum;
              return (0, u.pi)((0, u.pi)({}, t), {
                drag: void 0 !== e && e,
                dragDirectionLock: void 0 !== n && n,
                dragPropagation: void 0 !== r && r,
                dragConstraints: void 0 !== i && i,
                dragElastic: void 0 === o ? 0.35 : o,
                dragMomentum: void 0 === s || s,
              });
            }),
            VisualElementDragControls
          );
        })();
      function shouldDrag(t, e, n) {
        return (!0 === e || e === t) && (null === n || n === t);
      }
      var tL = {
          pan: makeRenderlessComponent(function (t) {
            var e = t.onPan,
              n = t.onPanStart,
              r = t.onPanEnd,
              i = t.onPanSessionStart,
              o = t.visualElement,
              s = e || n || r || i,
              l = (0, d.useRef)(null),
              u = (0, d.useContext)(x).transformPagePoint,
              p = {
                onSessionStart: i,
                onStart: n,
                onMove: e,
                onEnd: function (t, e) {
                  (l.current = null), r && r(t, e);
                },
              };
            (0, d.useEffect)(function () {
              null !== l.current && l.current.updateHandlers(p);
            }),
              usePointerEvent(
                o,
                "pointerdown",
                s &&
                  function (t) {
                    l.current = new tA(t, p, { transformPagePoint: u });
                  }
              ),
              useUnmountEffect(function () {
                return l.current && l.current.end();
              });
          }),
          drag: makeRenderlessComponent(function (t) {
            var e = t.dragControls,
              n = t.visualElement,
              r = useConstant(function () {
                return new tM(n);
              });
            (0, d.useEffect)(
              function () {
                return e && e.subscribe(r);
              },
              [r, e]
            ),
              (0, d.useEffect)(
                function () {
                  return r.addListeners();
                },
                [r]
              );
          }),
        },
        tk = n(1560),
        tj = [
          "LayoutMeasure",
          "BeforeLayoutMeasure",
          "LayoutUpdate",
          "ViewportBoxUpdate",
          "Update",
          "Render",
          "AnimationComplete",
          "LayoutAnimationComplete",
          "AnimationStart",
          "LayoutAnimationStart",
          "SetAxisTarget",
          "Unmount",
        ],
        visualElement = function (t) {
          var e = t.treeType,
            n = void 0 === e ? "" : e,
            r = t.build,
            i = t.getBaseTarget,
            o = t.makeTargetAnimatable,
            s = t.measureViewportBox,
            l = t.render,
            d = t.readValueFromInstance,
            p = t.removeValueFromRenderState,
            f = t.sortNodePosition,
            v = t.scrapeMotionValuesFromProps;
          return function (t, e) {
            var m,
              h,
              g,
              y,
              x,
              P = t.parent,
              V = t.props,
              T = t.presenceId,
              A = t.blockInitialAnimation,
              S = t.visualState,
              C = t.shouldReduceMotion;
            void 0 === e && (e = {});
            var E = !1,
              w = S.latestValues,
              D = S.renderState,
              R =
                ((m = tj.map(function () {
                  return new tk.L();
                })),
                (h = {}),
                (g = {
                  clearAllListeners: function () {
                    return m.forEach(function (t) {
                      return t.clear();
                    });
                  },
                  updatePropListeners: function (t) {
                    tj.forEach(function (e) {
                      var n,
                        r = "on" + e,
                        i = t[r];
                      null === (n = h[e]) || void 0 === n || n.call(h),
                        i && (h[e] = g[r](i));
                    });
                  },
                }),
                m.forEach(function (t, e) {
                  (g["on" + tj[e]] = function (e) {
                    return t.add(e);
                  }),
                    (g["notify" + tj[e]] = function () {
                      for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                      return t.notify.apply(t, (0, u.ev)([], (0, u.CR)(e), !1));
                    });
                }),
                g),
              M = new Map(),
              L = new Map(),
              k = {},
              j = (0, u.pi)({}, w);
            function render() {
              y && E && (triggerBuild(), l(y, D, V.style, H.projection));
            }
            function triggerBuild() {
              r(H, D, w, e, V);
            }
            function update() {
              R.notifyUpdate(w);
            }
            function bindToMotionValue(t, e) {
              var n = e.onChange(function (e) {
                  (w[t] = e), V.onUpdate && tb.ZP.update(update, !1, !0);
                }),
                r = e.onRenderRequest(H.scheduleRender);
              L.set(t, function () {
                n(), r();
              });
            }
            var B = v(V);
            for (var N in B) {
              var O = B[N];
              void 0 !== w[N] && (0, F.i)(O) && O.set(w[N], !1);
            }
            var I = checkIfControllingVariants(V),
              U = checkIfVariantNode(V),
              H = (0, u.pi)(
                (0, u.pi)(
                  {
                    treeType: n,
                    current: null,
                    depth: P ? P.depth + 1 : 0,
                    parent: P,
                    children: new Set(),
                    presenceId: T,
                    shouldReduceMotion: C,
                    variantChildren: U ? new Set() : void 0,
                    isVisible: void 0,
                    manuallyAnimateOnMount: !!(null == P
                      ? void 0
                      : P.isMounted()),
                    blockInitialAnimation: A,
                    isMounted: function () {
                      return !!y;
                    },
                    mount: function (t) {
                      (E = !0),
                        (y = H.current = t),
                        H.projection && H.projection.mount(t),
                        U &&
                          P &&
                          !I &&
                          (x = null == P ? void 0 : P.addVariantChild(H)),
                        M.forEach(function (t, e) {
                          return bindToMotionValue(e, t);
                        }),
                        null == P || P.children.add(H),
                        H.setProps(V);
                    },
                    unmount: function () {
                      var t;
                      null === (t = H.projection) ||
                        void 0 === t ||
                        t.unmount(),
                        tb.qY.update(update),
                        tb.qY.render(render),
                        L.forEach(function (t) {
                          return t();
                        }),
                        null == x || x(),
                        null == P || P.children.delete(H),
                        R.clearAllListeners(),
                        (y = void 0),
                        (E = !1);
                    },
                    addVariantChild: function (t) {
                      var e,
                        n = H.getClosestVariantNode();
                      if (n)
                        return (
                          null === (e = n.variantChildren) ||
                            void 0 === e ||
                            e.add(t),
                          function () {
                            return n.variantChildren.delete(t);
                          }
                        );
                    },
                    sortNodePosition: function (t) {
                      return f && n === t.treeType
                        ? f(H.getInstance(), t.getInstance())
                        : 0;
                    },
                    getClosestVariantNode: function () {
                      return U
                        ? H
                        : null == P
                        ? void 0
                        : P.getClosestVariantNode();
                    },
                    getLayoutId: function () {
                      return V.layoutId;
                    },
                    getInstance: function () {
                      return y;
                    },
                    getStaticValue: function (t) {
                      return w[t];
                    },
                    setStaticValue: function (t, e) {
                      return (w[t] = e);
                    },
                    getLatestValues: function () {
                      return w;
                    },
                    setVisibility: function (t) {
                      H.isVisible !== t &&
                        ((H.isVisible = t), H.scheduleRender());
                    },
                    makeTargetAnimatable: function (t, e) {
                      return void 0 === e && (e = !0), o(H, t, V, e);
                    },
                    measureViewportBox: function () {
                      return s(y, V);
                    },
                    addValue: function (t, e) {
                      H.hasValue(t) && H.removeValue(t),
                        M.set(t, e),
                        (w[t] = e.get()),
                        bindToMotionValue(t, e);
                    },
                    removeValue: function (t) {
                      var e;
                      M.delete(t),
                        null === (e = L.get(t)) || void 0 === e || e(),
                        L.delete(t),
                        delete w[t],
                        p(t, D);
                    },
                    hasValue: function (t) {
                      return M.has(t);
                    },
                    getValue: function (t, e) {
                      var n = M.get(t);
                      return (
                        void 0 === n &&
                          void 0 !== e &&
                          ((n = (0, td.B)(e)), H.addValue(t, n)),
                        n
                      );
                    },
                    forEachValue: function (t) {
                      return M.forEach(t);
                    },
                    readValue: function (t) {
                      var n;
                      return null !== (n = w[t]) && void 0 !== n
                        ? n
                        : d(y, t, e);
                    },
                    setBaseTarget: function (t, e) {
                      j[t] = e;
                    },
                    getBaseTarget: function (t) {
                      if (i) {
                        var e = i(V, t);
                        if (void 0 !== e && !(0, F.i)(e)) return e;
                      }
                      return j[t];
                    },
                  },
                  R
                ),
                {
                  build: function () {
                    return triggerBuild(), D;
                  },
                  scheduleRender: function () {
                    tb.ZP.render(render, !1, !0);
                  },
                  syncRender: render,
                  setProps: function (t) {
                    (t.transformTemplate || V.transformTemplate) &&
                      H.scheduleRender(),
                      (V = t),
                      R.updatePropListeners(t),
                      (k = (function (t, e, n) {
                        var r;
                        for (var i in e) {
                          var o = e[i],
                            s = n[i];
                          if ((0, F.i)(o)) t.addValue(i, o);
                          else if ((0, F.i)(s)) t.addValue(i, (0, td.B)(o));
                          else if (s !== o) {
                            if (t.hasValue(i)) {
                              var l = t.getValue(i);
                              l.hasAnimated || l.set(o);
                            } else
                              t.addValue(
                                i,
                                (0, td.B)(
                                  null !== (r = t.getStaticValue(i)) &&
                                    void 0 !== r
                                    ? r
                                    : o
                                )
                              );
                          }
                        }
                        for (var i in n) void 0 === e[i] && t.removeValue(i);
                        return e;
                      })(H, v(V), k));
                  },
                  getProps: function () {
                    return V;
                  },
                  getVariant: function (t) {
                    var e;
                    return null === (e = V.variants) || void 0 === e
                      ? void 0
                      : e[t];
                  },
                  getDefaultTransition: function () {
                    return V.transition;
                  },
                  getTransformPagePoint: function () {
                    return V.transformPagePoint;
                  },
                  getVariantContext: function (t) {
                    if ((void 0 === t && (t = !1), t))
                      return null == P ? void 0 : P.getVariantContext();
                    if (!I) {
                      var e =
                        (null == P ? void 0 : P.getVariantContext()) || {};
                      return void 0 !== V.initial && (e.initial = V.initial), e;
                    }
                    for (var n = {}, r = 0; r < tN; r++) {
                      var i = tB[r],
                        o = V[i];
                      (isVariantLabel(o) || !1 === o) && (n[i] = o);
                    }
                    return n;
                  },
                }
              );
            return H;
          };
        },
        tB = (0, u.ev)(["initial"], (0, u.CR)(tg), !1),
        tN = tB.length;
      function css_variables_conversion_isCSSVariable(t) {
        return "string" == typeof t && t.startsWith("var(--");
      }
      var tO = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function getVariableValue(t, e, n) {
        void 0 === n && (n = 1),
          (0, m.k)(
            n <= 4,
            'Max CSS variable fallback depth detected in property "'.concat(
              t,
              '". This may indicate a circular fallback dependency.'
            )
          );
        var r = (0, u.CR)(
            (function (t) {
              var e = tO.exec(t);
              if (!e) return [,];
              var n = (0, u.CR)(e, 3);
              return [n[1], n[2]];
            })(t),
            2
          ),
          i = r[0],
          o = r[1];
        if (i) {
          var s = window.getComputedStyle(e).getPropertyValue(i);
          return s
            ? s.trim()
            : css_variables_conversion_isCSSVariable(o)
            ? getVariableValue(o, e, n + 1)
            : o;
        }
      }
      var tF = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
        ]),
        isPositionalKey = function (t) {
          return tF.has(t);
        },
        setAndResetVelocity = function (t, e) {
          t.set(e, !1), t.set(e);
        },
        isNumOrPxType = function (t) {
          return t === tv.Rx || t === z.px;
        };
      ((o = l || (l = {})).width = "width"),
        (o.height = "height"),
        (o.left = "left"),
        (o.right = "right"),
        (o.top = "top"),
        (o.bottom = "bottom");
      var getPosFromMatrix = function (t, e) {
          return parseFloat(t.split(", ")[e]);
        },
        getTranslateFromMatrix = function (t, e) {
          return function (n, r) {
            var i = r.transform;
            if ("none" === i || !i) return 0;
            var o = i.match(/^matrix3d\((.+)\)$/);
            if (o) return getPosFromMatrix(o[1], e);
            var s = i.match(/^matrix\((.+)\)$/);
            return s ? getPosFromMatrix(s[1], t) : 0;
          };
        },
        tI = new Set(["x", "y", "z"]),
        tU = B.filter(function (t) {
          return !tI.has(t);
        }),
        tH = {
          width: function (t, e) {
            var n = t.x,
              r = e.paddingLeft,
              i = e.paddingRight;
            return (
              n.max -
              n.min -
              parseFloat(void 0 === r ? "0" : r) -
              parseFloat(void 0 === i ? "0" : i)
            );
          },
          height: function (t, e) {
            var n = t.y,
              r = e.paddingTop,
              i = e.paddingBottom;
            return (
              n.max -
              n.min -
              parseFloat(void 0 === r ? "0" : r) -
              parseFloat(void 0 === i ? "0" : i)
            );
          },
          top: function (t, e) {
            return parseFloat(e.top);
          },
          left: function (t, e) {
            return parseFloat(e.left);
          },
          bottom: function (t, e) {
            var n = t.y;
            return parseFloat(e.top) + (n.max - n.min);
          },
          right: function (t, e) {
            var n = t.x;
            return parseFloat(e.left) + (n.max - n.min);
          },
          x: getTranslateFromMatrix(4, 13),
          y: getTranslateFromMatrix(5, 14),
        },
        convertChangedValueTypes = function (t, e, n) {
          var r = e.measureViewportBox(),
            i = e.getInstance(),
            o = getComputedStyle(i),
            s = o.display,
            l = {};
          "none" === s && e.setStaticValue("display", t.display || "block"),
            n.forEach(function (t) {
              l[t] = tH[t](r, o);
            }),
            e.syncRender();
          var u = e.measureViewportBox();
          return (
            n.forEach(function (n) {
              setAndResetVelocity(e.getValue(n), l[n]), (t[n] = tH[n](u, o));
            }),
            t
          );
        },
        checkAndConvertChangedValueTypes = function (t, e, n, r) {
          void 0 === n && (n = {}),
            void 0 === r && (r = {}),
            (e = (0, u.pi)({}, e)),
            (r = (0, u.pi)({}, r));
          var i = Object.keys(e).filter(isPositionalKey),
            o = [],
            s = !1,
            l = [];
          if (
            (i.forEach(function (i) {
              var u,
                d = t.getValue(i);
              if (t.hasValue(i)) {
                var p = n[i],
                  f = findDimensionValueType(p),
                  v = e[i];
                if ((0, tl.C)(v)) {
                  var h = v.length,
                    g = null === v[0] ? 1 : 0;
                  f = findDimensionValueType((p = v[g]));
                  for (var y = g; y < h; y++)
                    u
                      ? (0, m.k)(
                          findDimensionValueType(v[y]) === u,
                          "All keyframes must be of the same type"
                        )
                      : ((u = findDimensionValueType(v[y])),
                        (0, m.k)(
                          u === f || (isNumOrPxType(f) && isNumOrPxType(u)),
                          "Keyframes must be of the same dimension as the current value"
                        ));
                } else u = findDimensionValueType(v);
                if (f !== u) {
                  if (isNumOrPxType(f) && isNumOrPxType(u)) {
                    var x,
                      P = d.get();
                    "string" == typeof P && d.set(parseFloat(P)),
                      "string" == typeof v
                        ? (e[i] = parseFloat(v))
                        : Array.isArray(v) &&
                          u === z.px &&
                          (e[i] = v.map(parseFloat));
                  } else
                    (null == f ? void 0 : f.transform) &&
                    (null == u ? void 0 : u.transform) &&
                    (0 === p || 0 === v)
                      ? 0 === p
                        ? d.set(u.transform(p))
                        : (e[i] = f.transform(v))
                      : (s ||
                          ((x = []),
                          tU.forEach(function (e) {
                            var n = t.getValue(e);
                            void 0 !== n &&
                              (x.push([e, n.get()]),
                              n.set(e.startsWith("scale") ? 1 : 0));
                          }),
                          x.length && t.syncRender(),
                          (o = x),
                          (s = !0)),
                        l.push(i),
                        (r[i] = void 0 !== r[i] ? r[i] : e[i]),
                        setAndResetVelocity(d, v));
                }
              }
            }),
            !l.length)
          )
            return { target: e, transitionEnd: r };
          var d = l.indexOf("height") >= 0 ? window.pageYOffset : null,
            p = convertChangedValueTypes(e, t, l);
          return (
            o.length &&
              o.forEach(function (e) {
                var n = (0, u.CR)(e, 2),
                  r = n[0],
                  i = n[1];
                t.getValue(r).set(i);
              }),
            t.syncRender(),
            null !== d && window.scrollTo({ top: d }),
            { target: p, transitionEnd: r }
          );
        },
        parseDomVariant = function (t, e, n, r) {
          var i,
            o,
            s = (function (t, e, n) {
              var r,
                i = (0, u._T)(e, []),
                o = t.getInstance();
              if (!(o instanceof Element))
                return { target: i, transitionEnd: n };
              for (var s in (n && (n = (0, u.pi)({}, n)),
              t.forEachValue(function (t) {
                var e = t.get();
                if (css_variables_conversion_isCSSVariable(e)) {
                  var n = getVariableValue(e, o);
                  n && t.set(n);
                }
              }),
              i)) {
                var l = i[s];
                if (css_variables_conversion_isCSSVariable(l)) {
                  var d = getVariableValue(l, o);
                  d &&
                    ((i[s] = d),
                    n && ((null !== (r = n[s]) && void 0 !== r) || (n[s] = l)));
                }
              }
              return { target: i, transitionEnd: n };
            })(t, e, r);
          return (
            (i = e = s.target),
            (o = r = s.transitionEnd),
            Object.keys(i).some(isPositionalKey)
              ? checkAndConvertChangedValueTypes(t, i, n, o)
              : { target: i, transitionEnd: o }
          );
        },
        tz = n(2728),
        t_ = {
          treeType: "dom",
          readValueFromInstance: function (t, e) {
            if (isTransformProp(e)) {
              var n = (0, tz.A)(e);
              return (n && n.default) || 0;
            }
            var r = window.getComputedStyle(t);
            return (isCSSVariable(e) ? r.getPropertyValue(e) : r[e]) || 0;
          },
          sortNodePosition: function (t, e) {
            return 2 & t.compareDocumentPosition(e) ? 1 : -1;
          },
          getBaseTarget: function (t, e) {
            var n;
            return null === (n = t.style) || void 0 === n ? void 0 : n[e];
          },
          measureViewportBox: function (t, e) {
            return measureViewportBox(t, e.transformPagePoint);
          },
          resetTransform: function (t, e, n) {
            var r = n.transformTemplate;
            (e.style.transform = r ? r({}, "") : "none"), t.scheduleRender();
          },
          restoreTransform: function (t, e) {
            t.style.transform = e.style.transform;
          },
          removeValueFromRenderState: function (t, e) {
            var n = e.vars,
              r = e.style;
            delete n[t], delete r[t];
          },
          makeTargetAnimatable: function (t, e, n, r) {
            var i = n.transformValues;
            void 0 === r && (r = !0);
            var o = e.transition,
              s = e.transitionEnd,
              l = (0, u._T)(e, ["transition", "transitionEnd"]),
              d = (function (t, e, n) {
                var r,
                  i,
                  o = {};
                for (var s in t)
                  o[s] =
                    null !==
                      (r = (function (t, e) {
                        if (e) return (e[t] || e.default || e).from;
                      })(s, e)) && void 0 !== r
                      ? r
                      : null === (i = n.getValue(s)) || void 0 === i
                      ? void 0
                      : i.get();
                return o;
              })(l, o || {}, t);
            if ((i && (s && (s = i(s)), l && (l = i(l)), d && (d = i(d))), r)) {
              !(function (t, e, n) {
                var r,
                  i,
                  o,
                  s = Object.keys(e).filter(function (e) {
                    return !t.hasValue(e);
                  }),
                  l = s.length;
                if (l)
                  for (var u = 0; u < l; u++) {
                    var d,
                      p,
                      f,
                      v = s[u],
                      m = e[v],
                      h = null;
                    Array.isArray(m) && (h = m[0]),
                      null === h &&
                        (h =
                          null !==
                            (i =
                              null !== (r = n[v]) && void 0 !== r
                                ? r
                                : t.readValue(v)) && void 0 !== i
                            ? i
                            : e[v]),
                      null != h &&
                        ("string" == typeof h &&
                        ((d = h),
                        /^\-?\d*\.?\d+$/.test(d) ||
                          ((p = h), /^0[^.\s]+$/.test(p)))
                          ? (h = parseFloat(h))
                          : ((f = h),
                            !th.find(testValueType(f)) &&
                              tc.P.test(m) &&
                              (h = (0, tp.T)(v, m))),
                        t.addValue(v, (0, td.B)(h)),
                        (null !== (o = n[v]) && void 0 !== o) || (n[v] = h),
                        t.setBaseTarget(v, h));
                  }
              })(t, l, d);
              var p = parseDomVariant(t, l, d, s);
              (s = p.transitionEnd), (l = p.target);
            }
            return (0, u.pi)({ transition: o, transitionEnd: s }, l);
          },
          scrapeMotionValuesFromProps: scrapeMotionValuesFromProps,
          build: function (t, e, n, r, i) {
            void 0 !== t.isVisible &&
              (e.style.visibility = t.isVisible ? "visible" : "hidden"),
              buildHTMLStyles(e, n, r, i.transformTemplate);
          },
          render: renderHTML,
        },
        tW = visualElement(t_),
        tY = visualElement(
          (0, u.pi)((0, u.pi)({}, t_), {
            getBaseTarget: function (t, e) {
              return t[e];
            },
            readValueFromInstance: function (t, e) {
              var n;
              return isTransformProp(e)
                ? (null === (n = (0, tz.A)(e)) || void 0 === n
                    ? void 0
                    : n.default) || 0
                : ((e = Z.has(e) ? e : camelToDash(e)), t.getAttribute(e));
            },
            scrapeMotionValuesFromProps:
              scrape_motion_values_scrapeMotionValuesFromProps,
            build: function (t, e, n, r, i) {
              buildSVGAttrs(e, n, r, i.transformTemplate);
            },
            render: renderSVG,
          })
        ),
        create_visual_element_createDomVisualElement = function (t, e) {
          return isSVGComponent(t)
            ? tY(e, { enableHardwareAcceleration: !1 })
            : tW(e, { enableHardwareAcceleration: !0 });
        };
      function pixelsToPercent(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      var tZ = {
          correct: function (t, e) {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!z.px.test(t)) return t;
              t = parseFloat(t);
            }
            var n = pixelsToPercent(t, e.target.x),
              r = pixelsToPercent(t, e.target.y);
            return "".concat(n, "% ").concat(r, "%");
          },
        },
        t$ = "_$css",
        tG = (function (t) {
          function MeasureLayoutWithContext() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            (0, u.ZT)(MeasureLayoutWithContext, t),
            (MeasureLayoutWithContext.prototype.componentDidMount =
              function () {
                var t = this,
                  e = this.props,
                  n = e.visualElement,
                  r = e.layoutGroup,
                  i = e.switchLayoutGroup,
                  o = e.layoutId,
                  s = n.projection;
                Object.assign(k, tq),
                  s &&
                    ((null == r ? void 0 : r.group) && r.group.add(s),
                    (null == i ? void 0 : i.register) && o && i.register(s),
                    s.root.didUpdate(),
                    s.addEventListener("animationComplete", function () {
                      t.safeToRemove();
                    }),
                    s.setOptions(
                      (0, u.pi)((0, u.pi)({}, s.options), {
                        onExitComplete: function () {
                          return t.safeToRemove();
                        },
                      })
                    )),
                  (E.hasEverUpdated = !0);
              }),
            (MeasureLayoutWithContext.prototype.getSnapshotBeforeUpdate =
              function (t) {
                var e = this,
                  n = this.props,
                  r = n.layoutDependency,
                  i = n.visualElement,
                  o = n.drag,
                  s = n.isPresent,
                  l = i.projection;
                return (
                  l &&
                    ((l.isPresent = s),
                    o || t.layoutDependency !== r || void 0 === r
                      ? l.willUpdate()
                      : this.safeToRemove(),
                    t.isPresent === s ||
                      (s
                        ? l.promote()
                        : l.relegate() ||
                          tb.ZP.postRender(function () {
                            var t;
                            (null === (t = l.getStack()) || void 0 === t
                              ? void 0
                              : t.members.length) || e.safeToRemove();
                          }))),
                  null
                );
              }),
            (MeasureLayoutWithContext.prototype.componentDidUpdate =
              function () {
                var t = this.props.visualElement.projection;
                t &&
                  (t.root.didUpdate(),
                  !t.currentAnimation && t.isLead() && this.safeToRemove());
              }),
            (MeasureLayoutWithContext.prototype.componentWillUnmount =
              function () {
                var t = this.props,
                  e = t.visualElement,
                  n = t.layoutGroup,
                  r = t.switchLayoutGroup,
                  i = e.projection;
                i &&
                  (i.scheduleCheckAfterUnmount(),
                  (null == n ? void 0 : n.group) && n.group.remove(i),
                  (null == r ? void 0 : r.deregister) && r.deregister(i));
              }),
            (MeasureLayoutWithContext.prototype.safeToRemove = function () {
              var t = this.props.safeToRemove;
              null == t || t();
            }),
            (MeasureLayoutWithContext.prototype.render = function () {
              return null;
            }),
            MeasureLayoutWithContext
          );
        })(d.Component),
        tq = {
          borderRadius: (0, u.pi)((0, u.pi)({}, tZ), {
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          }),
          borderTopLeftRadius: tZ,
          borderTopRightRadius: tZ,
          borderBottomLeftRadius: tZ,
          borderBottomRightRadius: tZ,
          boxShadow: {
            correct: function (t, e) {
              var n = e.treeScale,
                r = e.projectionDelta,
                i = t,
                o = t.includes("var("),
                s = [];
              o &&
                (t = t.replace(tO, function (t) {
                  return s.push(t), t$;
                }));
              var l = tc.P.parse(t);
              if (l.length > 5) return i;
              var u = tc.P.createTransformer(t),
                d = "number" != typeof l[0] ? 1 : 0,
                p = r.x.scale * n.x,
                f = r.y.scale * n.y;
              (l[0 + d] /= p), (l[1 + d] /= f);
              var v = (0, tS.C)(p, f, 0.5);
              "number" == typeof l[2 + d] && (l[2 + d] /= v),
                "number" == typeof l[3 + d] && (l[3 + d] /= v);
              var m = u(l);
              if (o) {
                var h = 0;
                m = m.replace(t$, function () {
                  var t = s[h];
                  return h++, t;
                });
              }
              return m;
            },
          },
        },
        tX = n(2064),
        tK = n(4710),
        tJ = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        tQ = tJ.length,
        asNumber = function (t) {
          return "string" == typeof t ? parseFloat(t) : t;
        },
        isPx = function (t) {
          return "number" == typeof t || z.px.test(t);
        };
      function getRadius(t, e) {
        var n;
        return null !== (n = t[e]) && void 0 !== n ? n : t.borderRadius;
      }
      var t0 = compress(0, 0.5, tK.Bn),
        t1 = compress(0.5, 0.95, tK.GE);
      function compress(t, e, n) {
        return function (r) {
          return r < t ? 0 : r > e ? 1 : n((0, tC.Y)(t, e, r));
        };
      }
      function copyAxisInto(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function copyBoxInto(t, e) {
        copyAxisInto(t.x, e.x), copyAxisInto(t.y, e.y);
      }
      function removePointDelta(t, e, n, r, i) {
        return (
          (t -= e),
          (t = r + (1 / n) * (t - r)),
          void 0 !== i && (t = r + (1 / i) * (t - r)),
          t
        );
      }
      function removeAxisTransforms(t, e, n, r, i) {
        var o = (0, u.CR)(n, 3),
          s = o[0],
          l = o[1],
          d = o[2];
        !(function (t, e, n, r, i, o, s) {
          if (
            (void 0 === e && (e = 0),
            void 0 === n && (n = 1),
            void 0 === r && (r = 0.5),
            void 0 === o && (o = t),
            void 0 === s && (s = t),
            z.aQ.test(e) &&
              ((e = parseFloat(e)),
              (e = (0, tS.C)(s.min, s.max, e / 100) - s.min)),
            "number" == typeof e)
          ) {
            var l = (0, tS.C)(o.min, o.max, r);
            t === o && (l -= e),
              (t.min = removePointDelta(t.min, e, n, l, i)),
              (t.max = removePointDelta(t.max, e, n, l, i));
          }
        })(t, e[s], e[l], e[d], e.scale, r, i);
      }
      var t5 = ["x", "scaleX", "originX"],
        t2 = ["y", "scaleY", "originY"];
      function removeBoxTransforms(t, e, n, r) {
        removeAxisTransforms(
          t.x,
          e,
          t5,
          null == n ? void 0 : n.x,
          null == r ? void 0 : r.x
        ),
          removeAxisTransforms(
            t.y,
            e,
            t2,
            null == n ? void 0 : n.y,
            null == r ? void 0 : r.y
          );
      }
      function isAxisDeltaZero(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function isDeltaZero(t) {
        return isAxisDeltaZero(t.x) && isAxisDeltaZero(t.y);
      }
      function boxEquals(t, e) {
        return (
          t.x.min === e.x.min &&
          t.x.max === e.x.max &&
          t.y.min === e.y.min &&
          t.y.max === e.y.max
        );
      }
      var t3 = n(10),
        t7 = (function () {
          function NodeStack() {
            this.members = [];
          }
          return (
            (NodeStack.prototype.add = function (t) {
              (0, t3.y4)(this.members, t), t.scheduleRender();
            }),
            (NodeStack.prototype.remove = function (t) {
              if (
                ((0, t3.cl)(this.members, t),
                t === this.prevLead && (this.prevLead = void 0),
                t === this.lead)
              ) {
                var e = this.members[this.members.length - 1];
                e && this.promote(e);
              }
            }),
            (NodeStack.prototype.relegate = function (t) {
              var e,
                n = this.members.findIndex(function (e) {
                  return t === e;
                });
              if (0 === n) return !1;
              for (var r = n; r >= 0; r--) {
                var i = this.members[r];
                if (!1 !== i.isPresent) {
                  e = i;
                  break;
                }
              }
              return !!e && (this.promote(e), !0);
            }),
            (NodeStack.prototype.promote = function (t, e) {
              var n,
                r = this.lead;
              t !== r &&
                ((this.prevLead = r),
                (this.lead = t),
                t.show(),
                r &&
                  (r.instance && r.scheduleRender(),
                  t.scheduleRender(),
                  (t.resumeFrom = r),
                  e && (t.resumeFrom.preserveOpacity = !0),
                  r.snapshot &&
                    ((t.snapshot = r.snapshot),
                    (t.snapshot.latestValues =
                      r.animationValues || r.latestValues),
                    (t.snapshot.isShared = !0)),
                  (null === (n = t.root) || void 0 === n
                    ? void 0
                    : n.isUpdating) && (t.isLayoutDirty = !0),
                  !1 === t.options.crossfade && r.hide()));
            }),
            (NodeStack.prototype.exitAnimationComplete = function () {
              this.members.forEach(function (t) {
                var e, n, r, i, o;
                null === (n = (e = t.options).onExitComplete) ||
                  void 0 === n ||
                  n.call(e),
                  null ===
                    (o =
                      null === (r = t.resumingFrom) || void 0 === r
                        ? void 0
                        : (i = r.options).onExitComplete) ||
                    void 0 === o ||
                    o.call(i);
              });
            }),
            (NodeStack.prototype.scheduleRender = function () {
              this.members.forEach(function (t) {
                t.instance && t.scheduleRender(!1);
              });
            }),
            (NodeStack.prototype.removeLeadSnapshot = function () {
              this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
            }),
            NodeStack
          );
        })();
      function buildProjectionTransform(t, e, n) {
        var r = t.x.translate / e.x,
          i = t.y.translate / e.y,
          o = "translate3d(".concat(r, "px, ").concat(i, "px, 0) ");
        if (((o += "scale(".concat(1 / e.x, ", ").concat(1 / e.y, ") ")), n)) {
          var s = n.rotate,
            l = n.rotateX,
            u = n.rotateY;
          s && (o += "rotate(".concat(s, "deg) ")),
            l && (o += "rotateX(".concat(l, "deg) ")),
            u && (o += "rotateY(".concat(u, "deg) "));
        }
        var d = t.x.scale * e.x,
          p = t.y.scale * e.y;
        return "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)" ===
          (o += "scale(".concat(d, ", ").concat(p, ")"))
          ? "none"
          : o;
      }
      var compareByDepth = function (t, e) {
          return t.depth - e.depth;
        },
        t4 = (function () {
          function FlatTree() {
            (this.children = []), (this.isDirty = !1);
          }
          return (
            (FlatTree.prototype.add = function (t) {
              (0, t3.y4)(this.children, t), (this.isDirty = !0);
            }),
            (FlatTree.prototype.remove = function (t) {
              (0, t3.cl)(this.children, t), (this.isDirty = !0);
            }),
            (FlatTree.prototype.forEach = function (t) {
              this.isDirty && this.children.sort(compareByDepth),
                (this.isDirty = !1),
                this.children.forEach(t);
            }),
            FlatTree
          );
        })();
      function createProjectionNode(t) {
        var e = t.attachResizeListener,
          n = t.defaultParent,
          r = t.measureScroll,
          i = t.checkIsScrollRoot,
          o = t.resetTransform;
        return (function () {
          function ProjectionNode(t, e, r) {
            var i = this;
            void 0 === e && (e = {}),
              void 0 === r && (r = null == n ? void 0 : n()),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.potentialNodes = new Map()),
              (this.checkUpdateFailed = function () {
                i.isUpdating && ((i.isUpdating = !1), i.clearAllSnapshots());
              }),
              (this.updateProjection = function () {
                i.nodes.forEach(resolveTargetDelta),
                  i.nodes.forEach(calcProjection);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.id = t),
              (this.latestValues = e),
              (this.root = r ? r.root || r : this),
              (this.path = r
                ? (0, u.ev)((0, u.ev)([], (0, u.CR)(r.path), !1), [r], !1)
                : []),
              (this.parent = r),
              (this.depth = r ? r.depth + 1 : 0),
              t && this.root.registerPotentialNode(t, this);
            for (var o = 0; o < this.path.length; o++)
              this.path[o].shouldResetTransform = !0;
            this.root === this && (this.nodes = new t4());
          }
          return (
            (ProjectionNode.prototype.addEventListener = function (t, e) {
              return (
                this.eventHandlers.has(t) ||
                  this.eventHandlers.set(t, new tk.L()),
                this.eventHandlers.get(t).add(e)
              );
            }),
            (ProjectionNode.prototype.notifyListeners = function (t) {
              for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
              var r = this.eventHandlers.get(t);
              null == r || r.notify.apply(r, (0, u.ev)([], (0, u.CR)(e), !1));
            }),
            (ProjectionNode.prototype.hasListeners = function (t) {
              return this.eventHandlers.has(t);
            }),
            (ProjectionNode.prototype.registerPotentialNode = function (t, e) {
              this.potentialNodes.set(t, e);
            }),
            (ProjectionNode.prototype.mount = function (t, n) {
              var r = this;
              if ((void 0 === n && (n = !1), !this.instance)) {
                (this.isSVG = t instanceof SVGElement && "svg" !== t.tagName),
                  (this.instance = t);
                var i = this.options,
                  o = i.layoutId,
                  s = i.layout,
                  l = i.visualElement;
                if (
                  (l && !l.getInstance() && l.mount(t),
                  this.root.nodes.add(this),
                  null === (d = this.parent) ||
                    void 0 === d ||
                    d.children.add(this),
                  this.id && this.root.potentialNodes.delete(this.id),
                  n && (s || o) && (this.isLayoutDirty = !0),
                  e)
                ) {
                  var d,
                    p,
                    resizeUnblockUpdate_1 = function () {
                      return (r.root.updateBlockedByResize = !1);
                    };
                  e(t, function () {
                    (r.root.updateBlockedByResize = !0),
                      clearTimeout(p),
                      (p = window.setTimeout(resizeUnblockUpdate_1, 250)),
                      E.hasAnimatedSinceResize &&
                        ((E.hasAnimatedSinceResize = !1),
                        r.nodes.forEach(finishAnimation));
                  });
                }
                o && this.root.registerSharedNode(o, this),
                  !1 !== this.options.animate &&
                    l &&
                    (o || s) &&
                    this.addEventListener("didUpdate", function (t) {
                      var e,
                        n,
                        i,
                        o,
                        s,
                        d = t.delta,
                        p = t.hasLayoutChanged,
                        f = t.hasRelativeTargetChanged,
                        v = t.layout;
                      if (r.isTreeAnimationBlocked()) {
                        (r.target = void 0), (r.relativeTarget = void 0);
                        return;
                      }
                      var m =
                          null !==
                            (n =
                              null !== (e = r.options.transition) &&
                              void 0 !== e
                                ? e
                                : l.getDefaultTransition()) && void 0 !== n
                            ? n
                            : t6,
                        h = l.getProps(),
                        g = h.onLayoutAnimationStart,
                        y = h.onLayoutAnimationComplete,
                        x =
                          !r.targetLayout || !boxEquals(r.targetLayout, v) || f,
                        P = !p && f;
                      if (
                        (null === (i = r.resumeFrom) || void 0 === i
                          ? void 0
                          : i.instance) ||
                        P ||
                        (p && (x || !r.currentAnimation))
                      ) {
                        r.resumeFrom &&
                          ((r.resumingFrom = r.resumeFrom),
                          (r.resumingFrom.resumingFrom = void 0)),
                          r.setAnimationOrigin(d, P);
                        var V = (0, u.pi)(
                          (0, u.pi)({}, (0, tu.ev)(m, "layout")),
                          { onPlay: g, onComplete: y }
                        );
                        l.shouldReduceMotion && ((V.delay = 0), (V.type = !1)),
                          r.startAnimation(V);
                      } else p || 0 !== r.animationProgress || r.finishAnimation(), r.isLead() && (null === (s = (o = r.options).onExitComplete) || void 0 === s || s.call(o));
                      r.targetLayout = v;
                    });
              }
            }),
            (ProjectionNode.prototype.unmount = function () {
              var t, e;
              this.options.layoutId && this.willUpdate(),
                this.root.nodes.remove(this),
                null === (t = this.getStack()) ||
                  void 0 === t ||
                  t.remove(this),
                null === (e = this.parent) ||
                  void 0 === e ||
                  e.children.delete(this),
                (this.instance = void 0),
                tb.qY.preRender(this.updateProjection);
            }),
            (ProjectionNode.prototype.blockUpdate = function () {
              this.updateManuallyBlocked = !0;
            }),
            (ProjectionNode.prototype.unblockUpdate = function () {
              this.updateManuallyBlocked = !1;
            }),
            (ProjectionNode.prototype.isUpdateBlocked = function () {
              return this.updateManuallyBlocked || this.updateBlockedByResize;
            }),
            (ProjectionNode.prototype.isTreeAnimationBlocked = function () {
              var t;
              return (
                this.isAnimationBlocked ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isTreeAnimationBlocked()) ||
                !1
              );
            }),
            (ProjectionNode.prototype.startUpdate = function () {
              var t;
              this.isUpdateBlocked() ||
                ((this.isUpdating = !0),
                null === (t = this.nodes) ||
                  void 0 === t ||
                  t.forEach(resetRotation));
            }),
            (ProjectionNode.prototype.willUpdate = function (t) {
              if ((void 0 === t && (t = !0), this.root.isUpdateBlocked())) {
                null === (n = (e = this.options).onExitComplete) ||
                  void 0 === n ||
                  n.call(e);
                return;
              }
              if (
                (this.root.isUpdating || this.root.startUpdate(),
                !this.isLayoutDirty)
              ) {
                this.isLayoutDirty = !0;
                for (var e, n, r, i = 0; i < this.path.length; i++) {
                  var o = this.path[i];
                  (o.shouldResetTransform = !0), o.updateScroll();
                }
                var s = this.options,
                  l = s.layoutId,
                  u = s.layout;
                if (void 0 !== l || u) {
                  var d =
                    null === (r = this.options.visualElement) || void 0 === r
                      ? void 0
                      : r.getProps().transformTemplate;
                  (this.prevTransformTemplateValue =
                    null == d ? void 0 : d(this.latestValues, "")),
                    this.updateSnapshot(),
                    t && this.notifyListeners("willUpdate");
                }
              }
            }),
            (ProjectionNode.prototype.didUpdate = function () {
              if (this.isUpdateBlocked()) {
                this.unblockUpdate(),
                  this.clearAllSnapshots(),
                  this.nodes.forEach(clearMeasurements);
                return;
              }
              this.isUpdating &&
                ((this.isUpdating = !1),
                this.potentialNodes.size &&
                  (this.potentialNodes.forEach(mountNodeEarly),
                  this.potentialNodes.clear()),
                this.nodes.forEach(resetTransformStyle),
                this.nodes.forEach(updateLayout),
                this.nodes.forEach(notifyLayoutUpdate),
                this.clearAllSnapshots(),
                tb.iW.update(),
                tb.iW.preRender(),
                tb.iW.render());
            }),
            (ProjectionNode.prototype.clearAllSnapshots = function () {
              this.nodes.forEach(clearSnapshot),
                this.sharedNodes.forEach(removeLeadSnapshots);
            }),
            (ProjectionNode.prototype.scheduleUpdateProjection = function () {
              tb.ZP.preRender(this.updateProjection, !1, !0);
            }),
            (ProjectionNode.prototype.scheduleCheckAfterUnmount = function () {
              var t = this;
              tb.ZP.postRender(function () {
                t.isLayoutDirty
                  ? t.root.didUpdate()
                  : t.root.checkUpdateFailed();
              });
            }),
            (ProjectionNode.prototype.updateSnapshot = function () {
              if (!this.snapshot && this.instance) {
                var t = this.measure(),
                  e = this.removeTransform(this.removeElementScroll(t));
                roundBox(e),
                  (this.snapshot = {
                    measured: t,
                    layout: e,
                    latestValues: {},
                  });
              }
            }),
            (ProjectionNode.prototype.updateLayout = function () {
              if (
                this.instance &&
                (this.updateScroll(),
                (this.options.alwaysMeasureLayout && this.isLead()) ||
                  this.isLayoutDirty)
              ) {
                if (this.resumeFrom && !this.resumeFrom.instance)
                  for (var t, e = 0; e < this.path.length; e++)
                    this.path[e].updateScroll();
                var n = this.measure();
                roundBox(n);
                var r = this.layout;
                (this.layout = {
                  measured: n,
                  actual: this.removeElementScroll(n),
                }),
                  (this.layoutCorrected = createBox()),
                  (this.isLayoutDirty = !1),
                  (this.projectionDelta = void 0),
                  this.notifyListeners("measure", this.layout.actual),
                  null === (t = this.options.visualElement) ||
                    void 0 === t ||
                    t.notifyLayoutMeasure(
                      this.layout.actual,
                      null == r ? void 0 : r.actual
                    );
              }
            }),
            (ProjectionNode.prototype.updateScroll = function () {
              this.options.layoutScroll &&
                this.instance &&
                ((this.isScrollRoot = i(this.instance)),
                (this.scroll = r(this.instance)));
            }),
            (ProjectionNode.prototype.resetTransform = function () {
              if (o) {
                var t,
                  e = this.isLayoutDirty || this.shouldResetTransform,
                  n =
                    this.projectionDelta && !isDeltaZero(this.projectionDelta),
                  r =
                    null === (t = this.options.visualElement) || void 0 === t
                      ? void 0
                      : t.getProps().transformTemplate,
                  i = null == r ? void 0 : r(this.latestValues, ""),
                  s = i !== this.prevTransformTemplateValue;
                e &&
                  (n || hasTransform(this.latestValues) || s) &&
                  (o(this.instance, i),
                  (this.shouldResetTransform = !1),
                  this.scheduleRender());
              }
            }),
            (ProjectionNode.prototype.measure = function () {
              var t = this.options.visualElement;
              if (!t) return createBox();
              var e = t.measureViewportBox(),
                n = this.root.scroll;
              return n && (translateAxis(e.x, n.x), translateAxis(e.y, n.y)), e;
            }),
            (ProjectionNode.prototype.removeElementScroll = function (t) {
              var e = createBox();
              copyBoxInto(e, t);
              for (var n = 0; n < this.path.length; n++) {
                var r = this.path[n],
                  i = r.scroll,
                  o = r.options,
                  s = r.isScrollRoot;
                if (r !== this.root && i && o.layoutScroll) {
                  if (s) {
                    copyBoxInto(e, t);
                    var l = this.root.scroll;
                    l && (translateAxis(e.x, -l.x), translateAxis(e.y, -l.y));
                  }
                  translateAxis(e.x, i.x), translateAxis(e.y, i.y);
                }
              }
              return e;
            }),
            (ProjectionNode.prototype.applyTransform = function (t, e) {
              void 0 === e && (e = !1);
              var n = createBox();
              copyBoxInto(n, t);
              for (var r = 0; r < this.path.length; r++) {
                var i = this.path[r];
                !e &&
                  i.options.layoutScroll &&
                  i.scroll &&
                  i !== i.root &&
                  transformBox(n, { x: -i.scroll.x, y: -i.scroll.y }),
                  hasTransform(i.latestValues) &&
                    transformBox(n, i.latestValues);
              }
              return (
                hasTransform(this.latestValues) &&
                  transformBox(n, this.latestValues),
                n
              );
            }),
            (ProjectionNode.prototype.removeTransform = function (t) {
              var e,
                n = createBox();
              copyBoxInto(n, t);
              for (var r = 0; r < this.path.length; r++) {
                var i = this.path[r];
                if (i.instance && hasTransform(i.latestValues)) {
                  hasScale(i.latestValues) && i.updateSnapshot();
                  var o = createBox();
                  copyBoxInto(o, i.measure()),
                    removeBoxTransforms(
                      n,
                      i.latestValues,
                      null === (e = i.snapshot) || void 0 === e
                        ? void 0
                        : e.layout,
                      o
                    );
                }
              }
              return (
                hasTransform(this.latestValues) &&
                  removeBoxTransforms(n, this.latestValues),
                n
              );
            }),
            (ProjectionNode.prototype.setTargetDelta = function (t) {
              (this.targetDelta = t), this.root.scheduleUpdateProjection();
            }),
            (ProjectionNode.prototype.setOptions = function (t) {
              var e;
              this.options = (0, u.pi)(
                (0, u.pi)((0, u.pi)({}, this.options), t),
                { crossfade: null === (e = t.crossfade) || void 0 === e || e }
              );
            }),
            (ProjectionNode.prototype.clearMeasurements = function () {
              (this.scroll = void 0),
                (this.layout = void 0),
                (this.snapshot = void 0),
                (this.prevTransformTemplateValue = void 0),
                (this.targetDelta = void 0),
                (this.target = void 0),
                (this.isLayoutDirty = !1);
            }),
            (ProjectionNode.prototype.resolveTargetDelta = function () {
              var t,
                e,
                n,
                r,
                i = this.options,
                o = i.layout,
                s = i.layoutId;
              this.layout &&
                (o || s) &&
                (!this.targetDelta &&
                  !this.relativeTarget &&
                  ((this.relativeParent = this.getClosestProjectingParent()),
                  this.relativeParent &&
                    this.relativeParent.layout &&
                    ((this.relativeTarget = createBox()),
                    (this.relativeTargetOrigin = createBox()),
                    calcRelativePosition(
                      this.relativeTargetOrigin,
                      this.layout.actual,
                      this.relativeParent.layout.actual
                    ),
                    copyBoxInto(
                      this.relativeTarget,
                      this.relativeTargetOrigin
                    ))),
                (this.relativeTarget || this.targetDelta) &&
                  ((this.target ||
                    ((this.target = createBox()),
                    (this.targetWithTransforms = createBox())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    (null === (r = this.relativeParent) || void 0 === r
                      ? void 0
                      : r.target))
                    ? ((t = this.target),
                      (e = this.relativeTarget),
                      (n = this.relativeParent.target),
                      calcRelativeAxis(t.x, e.x, n.x),
                      calcRelativeAxis(t.y, e.y, n.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.actual
                          ))
                        : copyBoxInto(this.target, this.layout.actual),
                      applyBoxDelta(this.target, this.targetDelta))
                    : copyBoxInto(this.target, this.layout.actual),
                  this.attemptToResolveRelativeTarget &&
                    ((this.attemptToResolveRelativeTarget = !1),
                    (this.relativeParent = this.getClosestProjectingParent()),
                    this.relativeParent &&
                      !!this.relativeParent.resumingFrom ==
                        !!this.resumingFrom &&
                      !this.relativeParent.options.layoutScroll &&
                      this.relativeParent.target &&
                      ((this.relativeTarget = createBox()),
                      (this.relativeTargetOrigin = createBox()),
                      calcRelativePosition(
                        this.relativeTargetOrigin,
                        this.target,
                        this.relativeParent.target
                      ),
                      copyBoxInto(
                        this.relativeTarget,
                        this.relativeTargetOrigin
                      )))));
            }),
            (ProjectionNode.prototype.getClosestProjectingParent = function () {
              if (!(!this.parent || hasTransform(this.parent.latestValues)))
                return (this.parent.relativeTarget ||
                  this.parent.targetDelta) &&
                  this.parent.layout
                  ? this.parent
                  : this.parent.getClosestProjectingParent();
            }),
            (ProjectionNode.prototype.calcProjection = function () {
              var t,
                e = this.options,
                n = e.layout,
                r = e.layoutId;
              if (
                ((this.isTreeAnimating = !!(
                  (null === (t = this.parent) || void 0 === t
                    ? void 0
                    : t.isTreeAnimating) ||
                  this.currentAnimation ||
                  this.pendingAnimation
                )),
                this.isTreeAnimating ||
                  (this.targetDelta = this.relativeTarget = void 0),
                this.layout && (n || r))
              ) {
                var i = this.getLead();
                copyBoxInto(this.layoutCorrected, this.layout.actual),
                  (function (t, e, n, r) {
                    void 0 === r && (r = !1);
                    var i,
                      o,
                      s,
                      l,
                      u = n.length;
                    if (u) {
                      e.x = e.y = 1;
                      for (var d = 0; d < u; d++)
                        (l = (s = n[d]).projectionDelta),
                          (null ===
                            (o =
                              null === (i = s.instance) || void 0 === i
                                ? void 0
                                : i.style) || void 0 === o
                            ? void 0
                            : o.display) !== "contents" &&
                            (r &&
                              s.options.layoutScroll &&
                              s.scroll &&
                              s !== s.root &&
                              transformBox(t, {
                                x: -s.scroll.x,
                                y: -s.scroll.y,
                              }),
                            l &&
                              ((e.x *= l.x.scale),
                              (e.y *= l.y.scale),
                              applyBoxDelta(t, l)),
                            r &&
                              hasTransform(s.latestValues) &&
                              transformBox(t, s.latestValues));
                    }
                  })(
                    this.layoutCorrected,
                    this.treeScale,
                    this.path,
                    !!this.resumingFrom || this !== i
                  );
                var o = i.target;
                if (o) {
                  this.projectionDelta ||
                    ((this.projectionDelta = createDelta()),
                    (this.projectionDeltaWithTransform = createDelta()));
                  var s = this.treeScale.x,
                    l = this.treeScale.y,
                    u = this.projectionTransform;
                  calcBoxDelta(
                    this.projectionDelta,
                    this.layoutCorrected,
                    o,
                    this.latestValues
                  ),
                    (this.projectionTransform = buildProjectionTransform(
                      this.projectionDelta,
                      this.treeScale
                    )),
                    (this.projectionTransform !== u ||
                      this.treeScale.x !== s ||
                      this.treeScale.y !== l) &&
                      ((this.hasProjected = !0),
                      this.scheduleRender(),
                      this.notifyListeners("projectionUpdate", o));
                }
              }
            }),
            (ProjectionNode.prototype.hide = function () {
              this.isVisible = !1;
            }),
            (ProjectionNode.prototype.show = function () {
              this.isVisible = !0;
            }),
            (ProjectionNode.prototype.scheduleRender = function (t) {
              var e, n, r;
              void 0 === t && (t = !0),
                null === (n = (e = this.options).scheduleRender) ||
                  void 0 === n ||
                  n.call(e),
                t &&
                  (null === (r = this.getStack()) ||
                    void 0 === r ||
                    r.scheduleRender()),
                this.resumingFrom &&
                  !this.resumingFrom.instance &&
                  (this.resumingFrom = void 0);
            }),
            (ProjectionNode.prototype.setAnimationOrigin = function (t, e) {
              var n,
                r = this;
              void 0 === e && (e = !1);
              var i = this.snapshot,
                o = (null == i ? void 0 : i.latestValues) || {},
                s = (0, u.pi)({}, this.latestValues),
                l = createDelta();
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
                (this.attemptToResolveRelativeTarget = !e);
              var d = createBox(),
                p = null == i ? void 0 : i.isShared,
                f =
                  1 >=
                  ((null === (n = this.getStack()) || void 0 === n
                    ? void 0
                    : n.members.length) || 0),
                v = !!(
                  p &&
                  !f &&
                  !0 === this.options.crossfade &&
                  !this.path.some(hasOpacityCrossfade)
                );
              (this.animationProgress = 0),
                (this.mixTargetDelta = function (e) {
                  var n,
                    i,
                    u,
                    m = e / 1e3;
                  mixAxisDelta(l.x, t.x, m),
                    mixAxisDelta(l.y, t.y, m),
                    r.setTargetDelta(l),
                    r.relativeTarget &&
                      r.relativeTargetOrigin &&
                      r.layout &&
                      (null === (u = r.relativeParent) || void 0 === u
                        ? void 0
                        : u.layout) &&
                      (calcRelativePosition(
                        d,
                        r.layout.actual,
                        r.relativeParent.layout.actual
                      ),
                      (n = r.relativeTarget),
                      (i = r.relativeTargetOrigin),
                      mixAxis(n.x, i.x, d.x, m),
                      mixAxis(n.y, i.y, d.y, m)),
                    p &&
                      ((r.animationValues = s),
                      (function (t, e, n, r, i, o) {
                        var s, l, u, d;
                        i
                          ? ((t.opacity = (0, tS.C)(
                              0,
                              null !== (s = n.opacity) && void 0 !== s ? s : 1,
                              t0(r)
                            )),
                            (t.opacityExit = (0, tS.C)(
                              null !== (l = e.opacity) && void 0 !== l ? l : 1,
                              0,
                              t1(r)
                            )))
                          : o &&
                            (t.opacity = (0, tS.C)(
                              null !== (u = e.opacity) && void 0 !== u ? u : 1,
                              null !== (d = n.opacity) && void 0 !== d ? d : 1,
                              r
                            ));
                        for (var p = 0; p < tQ; p++) {
                          var f = "border".concat(tJ[p], "Radius"),
                            v = getRadius(e, f),
                            m = getRadius(n, f);
                          (void 0 !== v || void 0 !== m) &&
                            (v || (v = 0),
                            m || (m = 0),
                            0 === v || 0 === m || isPx(v) === isPx(m)
                              ? ((t[f] = Math.max(
                                  (0, tS.C)(asNumber(v), asNumber(m), r),
                                  0
                                )),
                                (z.aQ.test(m) || z.aQ.test(v)) && (t[f] += "%"))
                              : (t[f] = m));
                        }
                        (e.rotate || n.rotate) &&
                          (t.rotate = (0, tS.C)(
                            e.rotate || 0,
                            n.rotate || 0,
                            r
                          ));
                      })(s, o, r.latestValues, m, v, f)),
                    r.root.scheduleUpdateProjection(),
                    r.scheduleRender(),
                    (r.animationProgress = m);
                }),
                this.mixTargetDelta(0);
            }),
            (ProjectionNode.prototype.startAnimation = function (t) {
              var e,
                n,
                r = this;
              this.notifyListeners("animationStart"),
                null === (e = this.currentAnimation) ||
                  void 0 === e ||
                  e.stop(),
                this.resumingFrom &&
                  (null === (n = this.resumingFrom.currentAnimation) ||
                    void 0 === n ||
                    n.stop()),
                this.pendingAnimation &&
                  (tb.qY.update(this.pendingAnimation),
                  (this.pendingAnimation = void 0)),
                (this.pendingAnimation = tb.ZP.update(function () {
                  (E.hasAnimatedSinceResize = !0),
                    (r.currentAnimation = (0, tX.j)(
                      0,
                      1e3,
                      (0, u.pi)((0, u.pi)({}, t), {
                        onUpdate: function (e) {
                          var n;
                          r.mixTargetDelta(e),
                            null === (n = t.onUpdate) ||
                              void 0 === n ||
                              n.call(t, e);
                        },
                        onComplete: function () {
                          var e;
                          null === (e = t.onComplete) ||
                            void 0 === e ||
                            e.call(t),
                            r.completeAnimation();
                        },
                      })
                    )),
                    r.resumingFrom &&
                      (r.resumingFrom.currentAnimation = r.currentAnimation),
                    (r.pendingAnimation = void 0);
                }));
            }),
            (ProjectionNode.prototype.completeAnimation = function () {
              var t;
              this.resumingFrom &&
                ((this.resumingFrom.currentAnimation = void 0),
                (this.resumingFrom.preserveOpacity = void 0)),
                null === (t = this.getStack()) ||
                  void 0 === t ||
                  t.exitAnimationComplete(),
                (this.resumingFrom =
                  this.currentAnimation =
                  this.animationValues =
                    void 0),
                this.notifyListeners("animationComplete");
            }),
            (ProjectionNode.prototype.finishAnimation = function () {
              var t;
              this.currentAnimation &&
                (null === (t = this.mixTargetDelta) ||
                  void 0 === t ||
                  t.call(this, 1e3),
                this.currentAnimation.stop()),
                this.completeAnimation();
            }),
            (ProjectionNode.prototype.applyTransformsToTarget = function () {
              var t = this.getLead(),
                e = t.targetWithTransforms,
                n = t.target,
                r = t.layout,
                i = t.latestValues;
              e &&
                n &&
                r &&
                (copyBoxInto(e, n),
                transformBox(e, i),
                calcBoxDelta(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  i
                ));
            }),
            (ProjectionNode.prototype.registerSharedNode = function (t, e) {
              var n, r, i;
              this.sharedNodes.has(t) || this.sharedNodes.set(t, new t7()),
                this.sharedNodes.get(t).add(e),
                e.promote({
                  transition:
                    null === (n = e.options.initialPromotionConfig) ||
                    void 0 === n
                      ? void 0
                      : n.transition,
                  preserveFollowOpacity:
                    null ===
                      (i =
                        null === (r = e.options.initialPromotionConfig) ||
                        void 0 === r
                          ? void 0
                          : r.shouldPreserveFollowOpacity) || void 0 === i
                      ? void 0
                      : i.call(r, e),
                });
            }),
            (ProjectionNode.prototype.isLead = function () {
              var t = this.getStack();
              return !t || t.lead === this;
            }),
            (ProjectionNode.prototype.getLead = function () {
              var t;
              return (
                (this.options.layoutId &&
                  (null === (t = this.getStack()) || void 0 === t
                    ? void 0
                    : t.lead)) ||
                this
              );
            }),
            (ProjectionNode.prototype.getPrevLead = function () {
              var t;
              return this.options.layoutId
                ? null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.prevLead
                : void 0;
            }),
            (ProjectionNode.prototype.getStack = function () {
              var t = this.options.layoutId;
              if (t) return this.root.sharedNodes.get(t);
            }),
            (ProjectionNode.prototype.promote = function (t) {
              var e = void 0 === t ? {} : t,
                n = e.needsReset,
                r = e.transition,
                i = e.preserveFollowOpacity,
                o = this.getStack();
              o && o.promote(this, i),
                n && ((this.projectionDelta = void 0), (this.needsReset = !0)),
                r && this.setOptions({ transition: r });
            }),
            (ProjectionNode.prototype.relegate = function () {
              var t = this.getStack();
              return !!t && t.relegate(this);
            }),
            (ProjectionNode.prototype.resetRotation = function () {
              var t = this.options.visualElement;
              if (t) {
                for (var e = !1, n = {}, r = 0; r < j.length; r++) {
                  var i = "rotate" + j[r];
                  t.getStaticValue(i) &&
                    ((e = !0),
                    (n[i] = t.getStaticValue(i)),
                    t.setStaticValue(i, 0));
                }
                if (e) {
                  for (var i in (null == t || t.syncRender(), n))
                    t.setStaticValue(i, n[i]);
                  t.scheduleRender();
                }
              }
            }),
            (ProjectionNode.prototype.getProjectionStyles = function (t) {
              void 0 === t && (t = {});
              var e,
                n,
                r,
                i,
                o,
                s,
                l = {};
              if (!this.instance || this.isSVG) return l;
              if (!this.isVisible) return { visibility: "hidden" };
              l.visibility = "";
              var u =
                null === (e = this.options.visualElement) || void 0 === e
                  ? void 0
                  : e.getProps().transformTemplate;
              if (this.needsReset)
                return (
                  (this.needsReset = !1),
                  (l.opacity = ""),
                  (l.pointerEvents = resolveMotionValue(t.pointerEvents) || ""),
                  (l.transform = u ? u(this.latestValues, "") : "none"),
                  l
                );
              var d = this.getLead();
              if (!this.projectionDelta || !this.layout || !d.target) {
                var p = {};
                return (
                  this.options.layoutId &&
                    ((p.opacity =
                      null !== (n = this.latestValues.opacity) && void 0 !== n
                        ? n
                        : 1),
                    (p.pointerEvents =
                      resolveMotionValue(t.pointerEvents) || "")),
                  this.hasProjected &&
                    !hasTransform(this.latestValues) &&
                    ((p.transform = u ? u({}, "") : "none"),
                    (this.hasProjected = !1)),
                  p
                );
              }
              var f = d.animationValues || d.latestValues;
              this.applyTransformsToTarget(),
                (l.transform = buildProjectionTransform(
                  this.projectionDeltaWithTransform,
                  this.treeScale,
                  f
                )),
                u && (l.transform = u(f, l.transform));
              var v = this.projectionDelta,
                m = v.x,
                h = v.y;
              for (var g in ((l.transformOrigin = ""
                .concat(100 * m.origin, "% ")
                .concat(100 * h.origin, "% 0")),
              d.animationValues
                ? (l.opacity =
                    d === this
                      ? null !==
                          (i =
                            null !== (r = f.opacity) && void 0 !== r
                              ? r
                              : this.latestValues.opacity) && void 0 !== i
                        ? i
                        : 1
                      : this.preserveOpacity
                      ? this.latestValues.opacity
                      : f.opacityExit)
                : (l.opacity =
                    d === this
                      ? null !== (o = f.opacity) && void 0 !== o
                        ? o
                        : ""
                      : null !== (s = f.opacityExit) && void 0 !== s
                      ? s
                      : 0),
              k))
                if (void 0 !== f[g]) {
                  var y = k[g],
                    x = y.correct,
                    P = y.applyTo,
                    V = x(f[g], d);
                  if (P) for (var T = P.length, A = 0; A < T; A++) l[P[A]] = V;
                  else l[g] = V;
                }
              return (
                this.options.layoutId &&
                  (l.pointerEvents =
                    d === this
                      ? resolveMotionValue(t.pointerEvents) || ""
                      : "none"),
                l
              );
            }),
            (ProjectionNode.prototype.clearSnapshot = function () {
              this.resumeFrom = this.snapshot = void 0;
            }),
            (ProjectionNode.prototype.resetTree = function () {
              this.root.nodes.forEach(function (t) {
                var e;
                return null === (e = t.currentAnimation) || void 0 === e
                  ? void 0
                  : e.stop();
              }),
                this.root.nodes.forEach(clearMeasurements),
                this.root.sharedNodes.clear();
            }),
            ProjectionNode
          );
        })();
      }
      function updateLayout(t) {
        t.updateLayout();
      }
      function notifyLayoutUpdate(t) {
        var e,
          n,
          r,
          i,
          o =
            null !==
              (n =
                null === (e = t.resumeFrom) || void 0 === e
                  ? void 0
                  : e.snapshot) && void 0 !== n
              ? n
              : t.snapshot;
        if (t.isLead() && t.layout && o && t.hasListeners("didUpdate")) {
          var s = t.layout,
            l = s.actual,
            u = s.measured;
          "size" === t.options.animationType
            ? eachAxis(function (t) {
                var e = o.isShared ? o.measured[t] : o.layout[t],
                  n = calcLength(e);
                (e.min = l[t].min), (e.max = e.min + n);
              })
            : "position" === t.options.animationType &&
              eachAxis(function (t) {
                var e = o.isShared ? o.measured[t] : o.layout[t],
                  n = calcLength(l[t]);
                e.max = e.min + n;
              });
          var d = createDelta();
          calcBoxDelta(d, l, o.layout);
          var p = createDelta();
          o.isShared
            ? calcBoxDelta(p, t.applyTransform(u, !0), o.measured)
            : calcBoxDelta(p, l, o.layout);
          var f = !isDeltaZero(d),
            v = !1;
          if (
            !t.resumeFrom &&
            ((t.relativeParent = t.getClosestProjectingParent()),
            t.relativeParent && !t.relativeParent.resumeFrom)
          ) {
            var m = t.relativeParent,
              h = m.snapshot,
              g = m.layout;
            if (h && g) {
              var y = createBox();
              calcRelativePosition(y, o.layout, h.layout);
              var x = createBox();
              calcRelativePosition(x, l, g.actual), boxEquals(y, x) || (v = !0);
            }
          }
          t.notifyListeners("didUpdate", {
            layout: l,
            snapshot: o,
            delta: p,
            layoutDelta: d,
            hasLayoutChanged: f,
            hasRelativeTargetChanged: v,
          });
        } else
          t.isLead() &&
            (null === (i = (r = t.options).onExitComplete) ||
              void 0 === i ||
              i.call(r));
        t.options.transition = void 0;
      }
      function clearSnapshot(t) {
        t.clearSnapshot();
      }
      function clearMeasurements(t) {
        t.clearMeasurements();
      }
      function resetTransformStyle(t) {
        var e = t.options.visualElement;
        (null == e ? void 0 : e.getProps().onBeforeLayoutMeasure) &&
          e.notifyBeforeLayoutMeasure(),
          t.resetTransform();
      }
      function finishAnimation(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0);
      }
      function resolveTargetDelta(t) {
        t.resolveTargetDelta();
      }
      function calcProjection(t) {
        t.calcProjection();
      }
      function resetRotation(t) {
        t.resetRotation();
      }
      function removeLeadSnapshots(t) {
        t.removeLeadSnapshot();
      }
      function mixAxisDelta(t, e, n) {
        (t.translate = (0, tS.C)(e.translate, 0, n)),
          (t.scale = (0, tS.C)(e.scale, 1, n)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function mixAxis(t, e, n, r) {
        (t.min = (0, tS.C)(e.min, n.min, r)),
          (t.max = (0, tS.C)(e.max, n.max, r));
      }
      function hasOpacityCrossfade(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      var t6 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function mountNodeEarly(t, e) {
        for (var n = t.root, r = t.path.length - 1; r >= 0; r--)
          if (t.path[r].instance) {
            n = t.path[r];
            break;
          }
        var i = (n && n !== t.root ? n.instance : document).querySelector(
          '[data-projection-id="'.concat(e, '"]')
        );
        i && t.mount(i, !0);
      }
      function roundAxis(t) {
        (t.min = Math.round(t.min)), (t.max = Math.round(t.max));
      }
      function roundBox(t) {
        roundAxis(t.x), roundAxis(t.y);
      }
      var t8 = createProjectionNode({
          attachResizeListener: function (t, e) {
            return addDomEvent(t, "resize", e);
          },
          measureScroll: function () {
            return {
              x:
                document.documentElement.scrollLeft || document.body.scrollLeft,
              y: document.documentElement.scrollTop || document.body.scrollTop,
            };
          },
          checkIsScrollRoot: function () {
            return !0;
          },
        }),
        t9 = { current: void 0 },
        et = createProjectionNode({
          measureScroll: function (t) {
            return { x: t.scrollLeft, y: t.scrollTop };
          },
          defaultParent: function () {
            if (!t9.current) {
              var t = new t8(0, {});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (t9.current = t);
            }
            return t9.current;
          },
          resetTransform: function (t, e) {
            t.style.transform = null != e ? e : "none";
          },
          checkIsScrollRoot: function (t) {
            return "fixed" === window.getComputedStyle(t).position;
          },
        }),
        ee = (0, u.pi)((0, u.pi)((0, u.pi)((0, u.pi)({}, tP), ta), tL), {
          measureLayout: function (t) {
            var e = (0, u.CR)(usePresence(), 2),
              n = e[0],
              r = e[1],
              i = (0, d.useContext)(D);
            return d.createElement(
              tG,
              (0, u.pi)({}, t, {
                layoutGroup: i,
                switchLayoutGroup: (0, d.useContext)(R),
                isPresent: n,
                safeToRemove: r,
              })
            );
          },
        }),
        en = (function (t) {
          function custom(e, n) {
            var r, i, o, s, l, p, L;
            return (
              void 0 === n && (n = {}),
              (i = (r = t(e, n)).preloadedFeatures),
              (o = r.createVisualElement),
              (s = r.projectionNodeConstructor),
              (l = r.useRender),
              (p = r.useVisualState),
              (L = r.Component),
              i &&
                (function (t) {
                  for (var e in t)
                    null !== t[e] &&
                      ("projectionNodeConstructor" === e
                        ? (v.projectionNodeConstructor = t[e])
                        : (v[e].Component = t[e]));
                })(i),
              (0, d.forwardRef)(function (t, e) {
                var n,
                  r,
                  k,
                  j,
                  B,
                  N,
                  O,
                  F,
                  I,
                  U,
                  H,
                  z,
                  _,
                  W,
                  Y,
                  Z,
                  $,
                  G,
                  q,
                  X,
                  K,
                  J,
                  Q,
                  tt,
                  te,
                  tn,
                  tr,
                  ti =
                    ((z = t.layoutId),
                    (_ =
                      null === (H = (0, d.useContext)(D)) || void 0 === H
                        ? void 0
                        : H.id) && void 0 !== z
                      ? _ + "-" + z
                      : z);
                t = (0, u.pi)((0, u.pi)({}, t), { layoutId: ti });
                var to = (0, d.useContext)(x),
                  ta = null,
                  ts =
                    ((Y = (W = (function (t, e) {
                      if (checkIfControllingVariants(t)) {
                        var n = t.initial,
                          r = t.animate;
                        return {
                          initial: !1 === n || isVariantLabel(n) ? n : void 0,
                          animate: isVariantLabel(r) ? r : void 0,
                        };
                      }
                      return !1 !== t.inherit ? e : {};
                    })(t, (0, d.useContext)(P))).initial),
                    (Z = W.animate),
                    (0, d.useMemo)(
                      function () {
                        return { initial: Y, animate: Z };
                      },
                      [
                        variantLabelsAsDependency(Y),
                        variantLabelsAsDependency(Z),
                      ]
                    )),
                  tl = to.isStatic
                    ? void 0
                    : useConstant(function () {
                        if (E.hasEverUpdated) return w++;
                      }),
                  tu = p(t, to.isStatic);
                return (
                  !to.isStatic &&
                    T &&
                    ((ts.visualElement =
                      (($ = (0, u.pi)((0, u.pi)({}, to), t)),
                      (G = o),
                      (q = (0, d.useContext)(h)),
                      (X = (0, d.useContext)(P).visualElement),
                      (K = (0, d.useContext)(V)),
                      C ||
                        (function () {
                          if (((C = !0), T)) {
                            if (window.matchMedia) {
                              var t = window.matchMedia(
                                  "(prefers-reduced-motion)"
                                ),
                                setReducedMotionPreferences = function () {
                                  return (S.current = t.matches);
                                };
                              t.addListener(setReducedMotionPreferences),
                                setReducedMotionPreferences();
                            } else S.current = !1;
                          }
                        })(),
                      (J = (0, u.CR)((0, d.useState)(S.current), 1)[0]),
                      (tt =
                        "never" !== (Q = (0, d.useContext)(x).reducedMotion) &&
                        ("always" === Q || J)),
                      (te = (0, d.useRef)(void 0)),
                      G || (G = q.renderer),
                      !te.current &&
                        G &&
                        (te.current = G(L, {
                          visualState: tu,
                          parent: X,
                          props: $,
                          presenceId: null == K ? void 0 : K.id,
                          blockInitialAnimation:
                            (null == K ? void 0 : K.initial) === !1,
                          shouldReduceMotion: tt,
                        })),
                      (tn = te.current),
                      A(function () {
                        null == tn || tn.syncRender();
                      }),
                      (0, d.useEffect)(function () {
                        var t;
                        null ===
                          (t = null == tn ? void 0 : tn.animationState) ||
                          void 0 === t ||
                          t.animateChanges();
                      }),
                      A(function () {
                        return function () {
                          return null == tn ? void 0 : tn.notifyUnmount();
                        };
                      }, []),
                      tn)),
                    (n = t),
                    (r = ts.visualElement),
                    (k = s || v.projectionNodeConstructor),
                    (B = n.layoutId),
                    (N = n.layout),
                    (O = n.drag),
                    (F = n.dragConstraints),
                    (I = n.layoutScroll),
                    (U = (0, d.useContext)(R)),
                    !k ||
                      !r ||
                      (null == r ? void 0 : r.projection) ||
                      ((r.projection = new k(
                        tl,
                        r.getLatestValues(),
                        null === (j = r.parent) || void 0 === j
                          ? void 0
                          : j.projection
                      )),
                      r.projection.setOptions({
                        layoutId: B,
                        layout: N,
                        alwaysMeasureLayout: !!O || (F && isRefObject(F)),
                        visualElement: r,
                        scheduleRender: function () {
                          return r.scheduleRender();
                        },
                        animationType: "string" == typeof N ? N : "both",
                        initialPromotionConfig: U,
                        layoutScroll: I,
                      })),
                    (ta = (function (t, e, n) {
                      var r = [],
                        i = (0, d.useContext)(h);
                      if (!e) return null;
                      "production" !== f &&
                        n &&
                        i.strict &&
                        (0, m.k)(
                          !1,
                          "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead."
                        );
                      for (var o = 0; o < y; o++) {
                        var s = g[o],
                          l = v[s],
                          p = l.isEnabled,
                          x = l.Component;
                        p(t) &&
                          x &&
                          r.push(
                            d.createElement(
                              x,
                              (0, u.pi)({ key: s }, t, { visualElement: e })
                            )
                          );
                      }
                      return r;
                    })(t, ts.visualElement, i))),
                  d.createElement(
                    M,
                    {
                      visualElement: ts.visualElement,
                      props: (0, u.pi)((0, u.pi)({}, to), t),
                    },
                    ta,
                    d.createElement(
                      P.Provider,
                      { value: ts },
                      l(
                        L,
                        t,
                        tl,
                        ((tr = ts.visualElement),
                        (0, d.useCallback)(
                          function (t) {
                            var n;
                            t &&
                              (null === (n = tu.mount) ||
                                void 0 === n ||
                                n.call(tu, t)),
                              tr && (t ? tr.mount(t) : tr.unmount()),
                              e &&
                                ("function" == typeof e
                                  ? e(t)
                                  : isRefObject(e) && (e.current = t));
                          },
                          [tr]
                        )),
                        tu,
                        to.isStatic,
                        ts.visualElement
                      )
                    )
                  )
                );
              })
            );
          }
          if ("undefined" == typeof Proxy) return custom;
          var e = new Map();
          return new Proxy(custom, {
            get: function (t, n) {
              return e.has(n) || e.set(n, custom(n)), e.get(n);
            },
          });
        })(function (t, e) {
          var n, r, i, o;
          return (
            (r = void 0 !== (n = e.forwardMotionProps) && n),
            (i = isSVGComponent(t) ? G : q),
            (0, u.pi)((0, u.pi)({}, i), {
              preloadedFeatures: ee,
              useRender:
                (void 0 === (o = r) && (o = !1),
                function (t, e, n, r, i, s) {
                  var l = i.latestValues,
                    p = (
                      isSVGComponent(t)
                        ? function (t, e) {
                            var n = (0, d.useMemo)(
                              function () {
                                var n = createSvgRenderState();
                                return (
                                  buildSVGAttrs(
                                    n,
                                    e,
                                    { enableHardwareAcceleration: !1 },
                                    t.transformTemplate
                                  ),
                                  (0, u.pi)((0, u.pi)({}, n.attrs), {
                                    style: (0, u.pi)({}, n.style),
                                  })
                                );
                              },
                              [e]
                            );
                            if (t.style) {
                              var r = {};
                              copyRawValuesOnly(r, t.style, t),
                                (n.style = (0, u.pi)(
                                  (0, u.pi)({}, r),
                                  n.style
                                ));
                            }
                            return n;
                          }
                        : function (t, e, n) {
                            var r,
                              i,
                              o = {},
                              s =
                                (copyRawValuesOnly((r = {}), t.style || {}, t),
                                Object.assign(
                                  r,
                                  ((i = t.transformTemplate),
                                  (0, d.useMemo)(
                                    function () {
                                      var t = createHtmlRenderState();
                                      buildHTMLStyles(
                                        t,
                                        e,
                                        { enableHardwareAcceleration: !n },
                                        i
                                      );
                                      var r = t.vars,
                                        o = t.style;
                                      return (0, u.pi)((0, u.pi)({}, r), o);
                                    },
                                    [e]
                                  ))
                                ),
                                t.transformValues && (r = t.transformValues(r)),
                                r);
                            return (
                              t.drag &&
                                !1 !== t.dragListener &&
                                ((o.draggable = !1),
                                (s.userSelect =
                                  s.WebkitUserSelect =
                                  s.WebkitTouchCallout =
                                    "none"),
                                (s.touchAction =
                                  !0 === t.drag
                                    ? "none"
                                    : "pan-".concat(
                                        "x" === t.drag ? "y" : "x"
                                      ))),
                              (o.style = s),
                              o
                            );
                          }
                    )(e, l, s),
                    f = (function (t, e, n) {
                      var r = {};
                      for (var i in t)
                        (shouldForward(i) ||
                          (!0 === n && isValidMotionProp(i)) ||
                          (!e && !isValidMotionProp(i)) ||
                          (t.draggable && i.startsWith("onDrag"))) &&
                          (r[i] = t[i]);
                      return r;
                    })(e, "string" == typeof t, o),
                    v = (0, u.pi)((0, u.pi)((0, u.pi)({}, f), p), { ref: r });
                  return (
                    n && (v["data-projection-id"] = n),
                    (0, d.createElement)(t, v)
                  );
                }),
              createVisualElement: create_visual_element_createDomVisualElement,
              projectionNodeConstructor: et,
              Component: t,
            })
          );
        });
    },
    9135: function (t, e, n) {
      n.d(e, {
        T: function () {
          return getAnimatableNone;
        },
      });
      var r = n(5738),
        i = n(8407),
        o = n(2728);
      function getAnimatableNone(t, e) {
        var n,
          s = (0, o.A)(t);
        return (
          s !== r.h && (s = i.P),
          null === (n = s.getAnimatableNone) || void 0 === n
            ? void 0
            : n.call(s, e)
        );
      }
    },
    2728: function (t, e, n) {
      n.d(e, {
        A: function () {
          return getDefaultValueType;
        },
      });
      var r = n(655),
        i = n(7405),
        o = n(5738),
        s = n(6173),
        l = (0, r.pi)((0, r.pi)({}, s.j), {
          color: i.$,
          backgroundColor: i.$,
          outlineColor: i.$,
          fill: i.$,
          stroke: i.$,
          borderColor: i.$,
          borderTopColor: i.$,
          borderRightColor: i.$,
          borderBottomColor: i.$,
          borderLeftColor: i.$,
          filter: o.h,
          WebkitFilter: o.h,
        }),
        getDefaultValueType = function (t) {
          return l[t];
        };
    },
    6173: function (t, e, n) {
      n.d(e, {
        j: function () {
          return l;
        },
      });
      var r = n(5602),
        i = n(1248),
        o = n(655),
        s = (0, o.pi)((0, o.pi)({}, i.Rx), { transform: Math.round }),
        l = {
          borderWidth: r.px,
          borderTopWidth: r.px,
          borderRightWidth: r.px,
          borderBottomWidth: r.px,
          borderLeftWidth: r.px,
          borderRadius: r.px,
          radius: r.px,
          borderTopLeftRadius: r.px,
          borderTopRightRadius: r.px,
          borderBottomRightRadius: r.px,
          borderBottomLeftRadius: r.px,
          width: r.px,
          maxWidth: r.px,
          height: r.px,
          maxHeight: r.px,
          size: r.px,
          top: r.px,
          right: r.px,
          bottom: r.px,
          left: r.px,
          padding: r.px,
          paddingTop: r.px,
          paddingRight: r.px,
          paddingBottom: r.px,
          paddingLeft: r.px,
          margin: r.px,
          marginTop: r.px,
          marginRight: r.px,
          marginBottom: r.px,
          marginLeft: r.px,
          rotate: r.RW,
          rotateX: r.RW,
          rotateY: r.RW,
          rotateZ: r.RW,
          scale: i.bA,
          scaleX: i.bA,
          scaleY: i.bA,
          scaleZ: i.bA,
          skew: r.RW,
          skewX: r.RW,
          skewY: r.RW,
          distance: r.px,
          translateX: r.px,
          translateY: r.px,
          translateZ: r.px,
          x: r.px,
          y: r.px,
          z: r.px,
          perspective: r.px,
          transformPerspective: r.px,
          opacity: i.Fq,
          originX: r.$C,
          originY: r.$C,
          originZ: r.px,
          zIndex: s,
          fillOpacity: i.Fq,
          strokeOpacity: i.Fq,
          numOctaves: s,
        };
    },
    10: function (t, e, n) {
      function addUniqueItem(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function removeItem(t, e) {
        var n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      n.d(e, {
        cl: function () {
          return removeItem;
        },
        y4: function () {
          return addUniqueItem;
        },
      });
    },
    8715: function (t, e, n) {
      n.d(e, {
        Y: function () {
          return resolveFinalValueInKeyframes;
        },
        p: function () {
          return isCustomValue;
        },
      });
      var r = n(8488),
        isCustomValue = function (t) {
          return !!(t && "object" == typeof t && t.mix && t.toValue);
        },
        resolveFinalValueInKeyframes = function (t) {
          return (0, r.C)(t) ? t[t.length - 1] || 0 : t;
        };
    },
    1560: function (t, e, n) {
      n.d(e, {
        L: function () {
          return i;
        },
      });
      var r = n(10),
        i = (function () {
          function SubscriptionManager() {
            this.subscriptions = [];
          }
          return (
            (SubscriptionManager.prototype.add = function (t) {
              var e = this;
              return (
                (0, r.y4)(this.subscriptions, t),
                function () {
                  return (0, r.cl)(e.subscriptions, t);
                }
              );
            }),
            (SubscriptionManager.prototype.notify = function (t, e, n) {
              var r = this.subscriptions.length;
              if (r) {
                if (1 === r) this.subscriptions[0](t, e, n);
                else
                  for (var i = 0; i < r; i++) {
                    var o = this.subscriptions[i];
                    o && o(t, e, n);
                  }
              }
            }),
            (SubscriptionManager.prototype.getSize = function () {
              return this.subscriptions.length;
            }),
            (SubscriptionManager.prototype.clear = function () {
              this.subscriptions.length = 0;
            }),
            SubscriptionManager
          );
        })();
    },
    6917: function (t, e, n) {
      n.d(e, {
        w: function () {
          return secondsToMilliseconds;
        },
      });
      var secondsToMilliseconds = function (t) {
        return 1e3 * t;
      };
    },
    3234: function (t, e, n) {
      n.d(e, {
        B: function () {
          return motionValue;
        },
      });
      var r = n(4735),
        i = n(9296),
        o = n(1560),
        s = (function () {
          function MotionValue(t) {
            var e = this;
            (this.version = "6.5.1"),
              (this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.updateSubscribers = new o.L()),
              (this.velocityUpdateSubscribers = new o.L()),
              (this.renderSubscribers = new o.L()),
              (this.canTrackVelocity = !1),
              (this.updateAndNotify = function (t, n) {
                void 0 === n && (n = !0), (e.prev = e.current), (e.current = t);
                var i = (0, r.$B)(),
                  o = i.delta,
                  s = i.timestamp;
                e.lastUpdated !== s &&
                  ((e.timeDelta = o),
                  (e.lastUpdated = s),
                  r.ZP.postRender(e.scheduleVelocityCheck)),
                  e.prev !== e.current && e.updateSubscribers.notify(e.current),
                  e.velocityUpdateSubscribers.getSize() &&
                    e.velocityUpdateSubscribers.notify(e.getVelocity()),
                  n && e.renderSubscribers.notify(e.current);
              }),
              (this.scheduleVelocityCheck = function () {
                return r.ZP.postRender(e.velocityCheck);
              }),
              (this.velocityCheck = function (t) {
                t.timestamp !== e.lastUpdated &&
                  ((e.prev = e.current),
                  e.velocityUpdateSubscribers.notify(e.getVelocity()));
              }),
              (this.hasAnimated = !1),
              (this.prev = this.current = t),
              (this.canTrackVelocity = !isNaN(parseFloat(this.current)));
          }
          return (
            (MotionValue.prototype.onChange = function (t) {
              return this.updateSubscribers.add(t);
            }),
            (MotionValue.prototype.clearListeners = function () {
              this.updateSubscribers.clear();
            }),
            (MotionValue.prototype.onRenderRequest = function (t) {
              return t(this.get()), this.renderSubscribers.add(t);
            }),
            (MotionValue.prototype.attach = function (t) {
              this.passiveEffect = t;
            }),
            (MotionValue.prototype.set = function (t, e) {
              void 0 === e && (e = !0),
                e && this.passiveEffect
                  ? this.passiveEffect(t, this.updateAndNotify)
                  : this.updateAndNotify(t, e);
            }),
            (MotionValue.prototype.get = function () {
              return this.current;
            }),
            (MotionValue.prototype.getPrevious = function () {
              return this.prev;
            }),
            (MotionValue.prototype.getVelocity = function () {
              return this.canTrackVelocity
                ? (0, i.R)(
                    parseFloat(this.current) - parseFloat(this.prev),
                    this.timeDelta
                  )
                : 0;
            }),
            (MotionValue.prototype.start = function (t) {
              var e = this;
              return (
                this.stop(),
                new Promise(function (n) {
                  (e.hasAnimated = !0), (e.stopAnimation = t(n));
                }).then(function () {
                  return e.clearAnimation();
                })
              );
            }),
            (MotionValue.prototype.stop = function () {
              this.stopAnimation && this.stopAnimation(), this.clearAnimation();
            }),
            (MotionValue.prototype.isAnimating = function () {
              return !!this.stopAnimation;
            }),
            (MotionValue.prototype.clearAnimation = function () {
              this.stopAnimation = null;
            }),
            (MotionValue.prototype.destroy = function () {
              this.updateSubscribers.clear(),
                this.renderSubscribers.clear(),
                this.stop();
            }),
            MotionValue
          );
        })();
      function motionValue(t) {
        return new s(t);
      }
    },
    406: function (t, e, n) {
      n.d(e, {
        i: function () {
          return isMotionValue;
        },
      });
      var isMotionValue = function (t) {
        return !!(null !== t && "object" == typeof t && t.getVelocity);
      };
    },
    4735: function (t, e, n) {
      n.d(e, {
        qY: function () {
          return m;
        },
        ZP: function () {
          return g;
        },
        iW: function () {
          return h;
        },
        $B: function () {
          return getFrameData;
        },
      });
      let r = (1 / 60) * 1e3,
        i =
          "undefined" != typeof performance
            ? () => performance.now()
            : () => Date.now(),
        o =
          "undefined" != typeof window
            ? (t) => window.requestAnimationFrame(t)
            : (t) => setTimeout(() => t(i()), r),
        s = !0,
        l = !1,
        u = !1,
        d = { delta: 0, timestamp: 0 },
        p = ["read", "update", "preRender", "render", "postRender"],
        f = p.reduce(
          (t, e) => (
            (t[e] = (function (t) {
              let e = [],
                n = [],
                r = 0,
                i = !1,
                o = !1,
                s = new WeakSet(),
                l = {
                  schedule: (t, o = !1, l = !1) => {
                    let u = l && i,
                      d = u ? e : n;
                    return (
                      o && s.add(t),
                      -1 === d.indexOf(t) &&
                        (d.push(t), u && i && (r = e.length)),
                      t
                    );
                  },
                  cancel: (t) => {
                    let e = n.indexOf(t);
                    -1 !== e && n.splice(e, 1), s.delete(t);
                  },
                  process: (u) => {
                    if (i) {
                      o = !0;
                      return;
                    }
                    if (
                      ((i = !0),
                      ([e, n] = [n, e]),
                      (n.length = 0),
                      (r = e.length))
                    )
                      for (let n = 0; n < r; n++) {
                        let r = e[n];
                        r(u), s.has(r) && (l.schedule(r), t());
                      }
                    (i = !1), o && ((o = !1), l.process(u));
                  },
                };
              return l;
            })(() => (l = !0))),
            t
          ),
          {}
        ),
        v = p.reduce((t, e) => {
          let n = f[e];
          return (
            (t[e] = (t, e = !1, r = !1) => (
              l || startLoop(), n.schedule(t, e, r)
            )),
            t
          );
        }, {}),
        m = p.reduce((t, e) => ((t[e] = f[e].cancel), t), {}),
        h = p.reduce((t, e) => ((t[e] = () => f[e].process(d)), t), {}),
        processStep = (t) => f[t].process(d),
        processFrame = (t) => {
          (l = !1),
            (d.delta = s ? r : Math.max(Math.min(t - d.timestamp, 40), 1)),
            (d.timestamp = t),
            (u = !0),
            p.forEach(processStep),
            (u = !1),
            l && ((s = !1), o(processFrame));
        },
        startLoop = () => {
          (l = !0), (s = !0), u || o(processFrame);
        },
        getFrameData = () => d;
      var g = v;
    },
    4710: function (t, e, n) {
      n.d(e, {
        LU: function () {
          return v;
        },
        G2: function () {
          return d;
        },
        XL: function () {
          return f;
        },
        CG: function () {
          return p;
        },
        h9: function () {
          return y;
        },
        yD: function () {
          return bounceInOut;
        },
        gJ: function () {
          return bounceOut;
        },
        Z7: function () {
          return circIn;
        },
        X7: function () {
          return u;
        },
        Bn: function () {
          return l;
        },
        YQ: function () {
          return easeIn;
        },
        mZ: function () {
          return s;
        },
        Vv: function () {
          return o;
        },
        GE: function () {
          return linear;
        },
      });
      let reverseEasing = (t) => (e) => 1 - t(1 - e),
        mirrorEasing = (t) => (e) =>
          e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        createBackIn = (t) => (e) => e * e * ((t + 1) * e - t),
        r = 4 / 11,
        i = 8 / 11,
        linear = (t) => t,
        easeIn = (t) => Math.pow(t, 2),
        o = reverseEasing(easeIn),
        s = mirrorEasing(easeIn),
        circIn = (t) => 1 - Math.sin(Math.acos(t)),
        l = reverseEasing(circIn),
        u = mirrorEasing(l),
        d = createBackIn(1.525),
        p = reverseEasing(d),
        f = mirrorEasing(d),
        v = ((t) => {
          let e = createBackIn(1.525);
          return (t) =>
            (t *= 2) < 1 ? 0.5 * e(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
        })(0),
        m = 4356 / 361,
        h = 35442 / 1805,
        g = 16061 / 1805,
        bounceOut = (t) => {
          if (1 === t || 0 === t) return t;
          let e = t * t;
          return t < r
            ? 7.5625 * e
            : t < i
            ? 9.075 * e - 9.9 * t + 3.4
            : t < 0.9
            ? m * e - h * t + g
            : 10.8 * t * t - 20.52 * t + 10.72;
        },
        y = reverseEasing(bounceOut),
        bounceInOut = (t) =>
          t < 0.5
            ? 0.5 * (1 - bounceOut(1 - 2 * t))
            : 0.5 * bounceOut(2 * t - 1) + 0.5;
    },
    6773: function (t, e, n) {
      n.d(e, {
        u: function () {
          return clamp;
        },
      });
      let clamp = (t, e, n) => Math.min(Math.max(n, t), e);
    },
    734: function (t, e, n) {
      n.d(e, {
        e: function () {
          return isNum;
        },
      });
      let isNum = (t) => "number" == typeof t;
    },
    2453: function (t, e, n) {
      n.d(e, {
        C: function () {
          return mix;
        },
      });
      let mix = (t, e, n) => -n * t + n * e + t;
    },
    9897: function (t, e, n) {
      n.d(e, {
        z: function () {
          return pipe;
        },
      });
      let combineFunctions = (t, e) => (n) => e(t(n)),
        pipe = (...t) => t.reduce(combineFunctions);
    },
    9326: function (t, e, n) {
      n.d(e, {
        Y: function () {
          return progress;
        },
      });
      let progress = (t, e, n) => {
        let r = e - t;
        return 0 === r ? 1 : (n - t) / r;
      };
    },
    9296: function (t, e, n) {
      n.d(e, {
        R: function () {
          return velocityPerSecond;
        },
      });
      function velocityPerSecond(t, e) {
        return e ? t * (1e3 / e) : 0;
      }
    },
    2960: function (t, e, n) {
      n.d(e, {
        $: function () {
          return o;
        },
      });
      var r = n(8059),
        i = n(3953);
      let o = {
        test: (0, i.i)("#"),
        parse: function (t) {
          let e = "",
            n = "",
            r = "",
            i = "";
          return (
            t.length > 5
              ? ((e = t.substr(1, 2)),
                (n = t.substr(3, 2)),
                (r = t.substr(5, 2)),
                (i = t.substr(7, 2)))
              : ((e = t.substr(1, 1)),
                (n = t.substr(2, 1)),
                (r = t.substr(3, 1)),
                (i = t.substr(4, 1)),
                (e += e),
                (n += n),
                (r += r),
                (i += i)),
            {
              red: parseInt(e, 16),
              green: parseInt(n, 16),
              blue: parseInt(r, 16),
              alpha: i ? parseInt(i, 16) / 255 : 1,
            }
          );
        },
        transform: r.m.transform,
      };
    },
    4582: function (t, e, n) {
      n.d(e, {
        J: function () {
          return l;
        },
      });
      var r = n(1248),
        i = n(5602),
        o = n(6777),
        s = n(3953);
      let l = {
        test: (0, s.i)("hsl", "hue"),
        parse: (0, s.d)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: n, alpha: s = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          i.aQ.transform((0, o.Nw)(e)) +
          ", " +
          i.aQ.transform((0, o.Nw)(n)) +
          ", " +
          (0, o.Nw)(r.Fq.transform(s)) +
          ")",
      };
    },
    7405: function (t, e, n) {
      n.d(e, {
        $: function () {
          return l;
        },
      });
      var r = n(6777),
        i = n(2960),
        o = n(4582),
        s = n(8059);
      let l = {
        test: (t) => s.m.test(t) || i.$.test(t) || o.J.test(t),
        parse: (t) =>
          s.m.test(t)
            ? s.m.parse(t)
            : o.J.test(t)
            ? o.J.parse(t)
            : i.$.parse(t),
        transform: (t) =>
          (0, r.HD)(t)
            ? t
            : t.hasOwnProperty("red")
            ? s.m.transform(t)
            : o.J.transform(t),
      };
    },
    8059: function (t, e, n) {
      n.d(e, {
        m: function () {
          return u;
        },
      });
      var r = n(1248),
        i = n(6777),
        o = n(3953);
      let s = (0, i.uZ)(0, 255),
        l = Object.assign(Object.assign({}, r.Rx), {
          transform: (t) => Math.round(s(t)),
        }),
        u = {
          test: (0, o.i)("rgb", "red"),
          parse: (0, o.d)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: n, alpha: o = 1 }) =>
            "rgba(" +
            l.transform(t) +
            ", " +
            l.transform(e) +
            ", " +
            l.transform(n) +
            ", " +
            (0, i.Nw)(r.Fq.transform(o)) +
            ")",
        };
    },
    3953: function (t, e, n) {
      n.d(e, {
        d: function () {
          return splitColor;
        },
        i: function () {
          return isColorString;
        },
      });
      var r = n(6777);
      let isColorString = (t, e) => (n) =>
          !!(
            ((0, r.HD)(n) && r.mj.test(n) && n.startsWith(t)) ||
            (e && Object.prototype.hasOwnProperty.call(n, e))
          ),
        splitColor = (t, e, n) => (i) => {
          if (!(0, r.HD)(i)) return i;
          let [o, s, l, u] = i.match(r.KP);
          return {
            [t]: parseFloat(o),
            [e]: parseFloat(s),
            [n]: parseFloat(l),
            alpha: void 0 !== u ? parseFloat(u) : 1,
          };
        };
    },
    5738: function (t, e, n) {
      n.d(e, {
        h: function () {
          return l;
        },
      });
      var r = n(8407),
        i = n(6777);
      let o = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function applyDefaultFilter(t) {
        let [e, n] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [r] = n.match(i.KP) || [];
        if (!r) return t;
        let s = n.replace(r, ""),
          l = o.has(e) ? 1 : 0;
        return r !== n && (l *= 100), e + "(" + l + s + ")";
      }
      let s = /([a-z-]*)\(.*?\)/g,
        l = Object.assign(Object.assign({}, r.P), {
          getAnimatableNone: (t) => {
            let e = t.match(s);
            return e ? e.map(applyDefaultFilter).join(" ") : t;
          },
        });
    },
    8407: function (t, e, n) {
      n.d(e, {
        P: function () {
          return u;
        },
      });
      var r = n(7405),
        i = n(1248),
        o = n(6777);
      let s = "${c}",
        l = "${n}";
      function analyse(t) {
        "number" == typeof t && (t = `${t}`);
        let e = [],
          n = 0,
          u = t.match(o.dA);
        u &&
          ((n = u.length),
          (t = t.replace(o.dA, s)),
          e.push(...u.map(r.$.parse)));
        let d = t.match(o.KP);
        return (
          d && ((t = t.replace(o.KP, l)), e.push(...d.map(i.Rx.parse))),
          { values: e, numColors: n, tokenised: t }
        );
      }
      function parse(t) {
        return analyse(t).values;
      }
      function createTransformer(t) {
        let { values: e, numColors: n, tokenised: i } = analyse(t),
          u = e.length;
        return (t) => {
          let e = i;
          for (let i = 0; i < u; i++)
            e = e.replace(
              i < n ? s : l,
              i < n ? r.$.transform(t[i]) : (0, o.Nw)(t[i])
            );
          return e;
        };
      }
      let convertNumbersToZero = (t) => ("number" == typeof t ? 0 : t),
        u = {
          test: function (t) {
            var e, n, r, i;
            return (
              isNaN(t) &&
              (0, o.HD)(t) &&
              (null !==
                (n =
                  null === (e = t.match(o.KP)) || void 0 === e
                    ? void 0
                    : e.length) && void 0 !== n
                ? n
                : 0) +
                (null !==
                  (i =
                    null === (r = t.match(o.dA)) || void 0 === r
                      ? void 0
                      : r.length) && void 0 !== i
                  ? i
                  : 0) >
                0
            );
          },
          parse,
          createTransformer,
          getAnimatableNone: function (t) {
            let e = parse(t),
              n = createTransformer(t);
            return n(e.map(convertNumbersToZero));
          },
        };
    },
    1248: function (t, e, n) {
      n.d(e, {
        Fq: function () {
          return o;
        },
        Rx: function () {
          return i;
        },
        bA: function () {
          return s;
        },
      });
      var r = n(6777);
      let i = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        o = Object.assign(Object.assign({}, i), { transform: (0, r.uZ)(0, 1) }),
        s = Object.assign(Object.assign({}, i), { default: 1 });
    },
    5602: function (t, e, n) {
      n.d(e, {
        $C: function () {
          return d;
        },
        RW: function () {
          return i;
        },
        aQ: function () {
          return o;
        },
        px: function () {
          return s;
        },
        vh: function () {
          return l;
        },
        vw: function () {
          return u;
        },
      });
      var r = n(6777);
      let createUnitType = (t) => ({
          test: (e) =>
            (0, r.HD)(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        i = createUnitType("deg"),
        o = createUnitType("%"),
        s = createUnitType("px"),
        l = createUnitType("vh"),
        u = createUnitType("vw"),
        d = Object.assign(Object.assign({}, o), {
          parse: (t) => o.parse(t) / 100,
          transform: (t) => o.transform(100 * t),
        });
    },
    6777: function (t, e, n) {
      n.d(e, {
        HD: function () {
          return isString;
        },
        KP: function () {
          return r;
        },
        Nw: function () {
          return sanitize;
        },
        dA: function () {
          return i;
        },
        mj: function () {
          return o;
        },
        uZ: function () {
          return clamp;
        },
      });
      let clamp = (t, e) => (n) => Math.max(Math.min(n, e), t),
        sanitize = (t) => (t % 1 ? Number(t.toFixed(5)) : t),
        r = /(-)?([\d]*\.?[\d])+/g,
        i =
          /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
        o =
          /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
      function isString(t) {
        return "string" == typeof t;
      }
    },
  },
]);
