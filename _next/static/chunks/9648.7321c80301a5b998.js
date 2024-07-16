"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9648],
  {
    9648: function (t, e, n) {
      n.r(e);
      var a = n(5893);
      n(7294);
      var i = n(8963),
        o = n(1544),
        l = n(444);
      o.Z.tablet, o.Z.laptop;
      var r = {
          hidden: { opacity: 0, y: 0 },
          show: {
            y: 0,
            opacity: 1,
            transition: {
              delayChildren: 2.75,
              duration: 1,
              staggerChildren: 0.3,
            },
          },
        },
        c = {
          hidden: { opacity: 0, y: 50 },
          show: { opacity: 1, y: 0, transition: { duration: 0.75 } },
        },
        p = {
          hidden: { opacity: 0, y: -50 },
          show: { opacity: 1, y: 0, transition: { duration: 0.75 } },
        };
      e.default = function (t) {
        var e = t.backgroundImage,
          n = t.urlLeft,
          o = t.urlRight;
        return (0, a.jsxs)(i.E.div, {
          className:
            "tw-relative tw-overflow-hidden tw-aspect-[10/6.38888888888889] tw-h-full tw-max-w-[1440px] tw-m-auto",
          initial: "hidden",
          whileInView: "show",
          viewport: { once: !0 },
          variants: r,
          style: { background: e },
          children: [
            (0, a.jsx)(i.E.div, {
              className:
                "tw-absolute max-w-[960px] tw-bottom-0 tw-z-[1] tw-pt-[14px] md:tw-pt-[32px] lg:tw-pt-[56px] left-[14px] md:tw-left-[32px] lg:tw-left-[56px]",
              style: {
                width: "".concat((960 / 1440) * 100, "%"),
                height: "100%",
                boxShadow: "72px 40px 100px rgba(34, 34, 34, 0.2)",
              },
              variants: c,
              children: (0, a.jsx)(l.Z, { src: n, alt: "" }),
            }),
            (0, a.jsx)(i.E.div, {
              className:
                "tw-absolute tw-max-w-[700px] tw-right-[14px] md:tw-right-[32px] lg:tw-right-[56px]",
              style: {
                width: "".concat((700 / 1440) * 100, "%"),
                height: "100%",
              },
              variants: p,
              children: (0, a.jsx)(l.Z, { src: o, alt: "" }),
            }),
          ],
        });
      };
    },
    444: function (t, e, n) {
      var a = n(2729),
        i = n(5893),
        o = n(7294),
        l = n(4141),
        r = n(1216);
      function _templateObject() {
        var t = (0, a._)([
          "\n  position: relative;\n  width: 100%;\n  height: 100%;\n",
        ]);
        return (
          (_templateObject = function () {
            return t;
          }),
          t
        );
      }
      function _templateObject1() {
        var t = (0, a._)([
          "\n  100% {\n    transform: translateY(100%);\n  }\n",
        ]);
        return (
          (_templateObject1 = function () {
            return t;
          }),
          t
        );
      }
      function _templateObject2() {
        var t = (0, a._)([
          "\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n  background-color: #DDDBDD;\n\n  &::after {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    transform: translateY(0%);\n    animation: ",
          " 2.5s infinite;\n    content: ''; \n  }\n",
        ]);
        return (
          (_templateObject2 = function () {
            return t;
          }),
          t
        );
      }
      function _templateObject3() {
        var t = (0, a._)([
          "\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  /* object-fit: cover; */\n",
        ]);
        return (
          (_templateObject3 = function () {
            return t;
          }),
          t
        );
      }
      var c = l.ZP.div(_templateObject()),
        p = (0, l.F4)(_templateObject1()),
        s = l.ZP.div(_templateObject2(), p),
        m = l.ZP.img(_templateObject3());
      e.Z = function (t) {
        var e = t.src,
          n = t.alt,
          a = o.useRef(),
          removePlaceholder = function () {
            a.current.remove();
          };
        return (0, i.jsxs)(c, {
          className: "lazy-images",
          children: [
            (0, i.jsx)(r.ZP, {
              children: (0, i.jsx)(m, {
                onLoad: removePlaceholder,
                onError: removePlaceholder,
                src: e,
                alt: n,
              }),
            }),
            (0, i.jsx)(s, { className: "skeleton", ref: a }),
          ],
        });
      };
    },
    1544: function (t, e) {
      var n = {
          mobileS: "320px",
          mobileM: "375px",
          mobileL: "425px",
          tabletS: "576px",
          tablet: "768px",
          laptopS: "992px",
          laptop: "1024px",
          laptopM: "1200px",
          laptopL: "1440px",
          desktop: "2560px",
        },
        a = {
          mobileS: "(min-width: ".concat(n.mobileS, ")"),
          mobileM: "(min-width: ".concat(n.mobileM, ")"),
          mobileL: "(min-width: ".concat(n.mobileL, ")"),
          tabletS: "(min-width: ".concat(n.tabletS, ")"),
          tablet: "(min-width: ".concat(n.tablet, ")"),
          laptopS: "(min-width: ".concat(n.laptopS, ")"),
          laptop: "(min-width: ".concat(n.laptop, ")"),
          laptopM: "(min-width: ".concat(n.laptopM, ")"),
          laptopL: "(min-width: ".concat(n.laptopL, ")"),
          desktop: "(min-width: ".concat(n.desktop, ")"),
        };
      e.Z = a;
    },
  },
]);
