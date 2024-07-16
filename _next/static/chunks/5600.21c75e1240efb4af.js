"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5600],
  {
    5600: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return ProjectDetail_ProjectImageShowcaseSecond;
          },
        });
      var i = n(5893),
        a = n(7294),
        o = n(8963),
        r = n(348),
        c = n(1544),
        s = n(4114);
      c.Z.tabletS, c.Z.tablet, c.Z.laptopS, c.Z.laptopM;
      var d = {
          hidden: { y: 200, x: 0 },
          show: { y: 0, x: 0, transition: { duration: 1.25 } },
        },
        l = {
          hidden: { y: -200, x: 0 },
          show: { y: 0, x: 0, transition: { duration: 1.25 } },
        },
        ProjectImageShowcaseSecond_AlphaPay = function (t) {
          var e = t.backgroundImage,
            n = t.url,
            c = (0, a.useRef)(null),
            u = (0, s.Z)(c).width;
          return (0, i.jsx)(o.E.div, {
            className: "project-image",
            initial: "hidden",
            whileInView: "show",
            viewport: { once: !0 },
            variants: r.Uo,
            children: (0, i.jsx)("div", {
              style: { overflow: "hidden", background: e },
              children: (0, i.jsxs)(o.E.div, {
                style: { background: e },
                className: "container-screen-skew",
                variants: r.a$,
                custom: { staggerChildren: 0.2 },
                initial: "hidden",
                whileInView: "show",
                viewport: { once: !0 },
                children: [
                  (0, i.jsx)("div", {
                    ref: c,
                    className: "w-100",
                    children: (0, i.jsx)(o.E.img, {
                      style: { width: u },
                      variants: d,
                      src: n,
                      className: "img-fluid tw-absolute tw-top-[-8%]",
                      alt: "",
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "w-100",
                    children: (0, i.jsx)(o.E.img, {
                      style: { width: u },
                      variants: l,
                      src: n,
                      className:
                        "img-fluid tw-absolute tw-top-[-15%] xs:tw-top-[-55%] md:tw-top-[-93%] lg:tw-top-[-35%] xl:tw-top-[-93%]",
                      alt: "",
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        ProjectImageShowcaseSecond_ImageGeneral = function (t) {
          var e = t.imgSrc;
          return (0, i.jsx)(o.E.div, {
            className: "col-md-12 project-image",
            initial: "hidden",
            whileInView: "show",
            variants: r.Uo,
            viewport: { once: !0, margin: "-150px" },
            children: (0, i.jsx)("img", {
              src: e,
              className: "img-fluid",
              alt: "",
            }),
          });
        },
        ProjectDetail_ProjectImageShowcaseSecond = function (t) {
          var e = t.path,
            n = t.data;
          return "alpha-pay" === e
            ? (0, i.jsx)(ProjectImageShowcaseSecond_AlphaPay, {
                backgroundImage: n["bg-image"],
                url: n.url,
              })
            : (0, i.jsx)(ProjectImageShowcaseSecond_ImageGeneral, {
                imgSrc: n,
              });
        };
    },
    2340: function (t, e) {
      e.Z = {
        hidden: { opacity: 0.01, y: -50 },
        show: function (t) {
          return {
            opacity: 1,
            y: 0,
            transition: {
              ease: [0.42, 0, 0.58, 1],
              duration: (t || {}).duration || 1,
            },
          };
        },
      };
    },
    348: function (t, e, n) {
      n.d(e, {
        Uo: function () {
          return r;
        },
        Im: function () {
          return i.Z;
        },
        Qf: function () {
          return o;
        },
        a$: function () {
          return a;
        },
      });
      var i = n(2340),
        a = {
          hidden: { opacity: 0.01 },
          show: function (t) {
            var e = t || {};
            return {
              opacity: 1,
              transition: {
                delayChildren: e.delayChildren || 0.4,
                staggerChildren: e.staggerChildren || 0.5,
              },
            };
          },
        },
        o = {
          hidden: { opacity: 0, y: -50 },
          show: function (t) {
            var e = t || {};
            return {
              opacity: 1,
              y: 0,
              transition: {
                ease: [0.42, 0, 0.58, 1],
                duration: e.duration || 1,
                delay: e.delayed || 0,
              },
            };
          },
        },
        r = {
          hidden: function (t) {
            return { opacity: 0, y: (t || {}).yStart || 0 };
          },
          show: function (t) {
            return {
              y: 0,
              opacity: 1,
              transition: {
                ease: [0.42, 0, 0.58, 1],
                duration: (t || {}).duration || 1,
              },
            };
          },
        };
    },
    4114: function (t, e, n) {
      var i = n(1309),
        a = n(7294);
      e.Z = function (t) {
        var getDimensions = function () {
            return {
              width: t.current.offsetWidth,
              height: t.current.offsetHeight,
            };
          },
          e = (0, i._)((0, a.useState)({ width: 0, height: 0 }), 2),
          n = e[0],
          o = e[1];
        return (
          (0, a.useEffect)(
            function () {
              var handleResize = function () {
                o(getDimensions());
              };
              return (
                t.current && o(getDimensions()),
                window.addEventListener("resize", handleResize),
                function () {
                  window.removeEventListener("resize", handleResize);
                }
              );
            },
            [t]
          ),
          n
        );
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
        i = {
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
      e.Z = i;
    },
  },
]);
