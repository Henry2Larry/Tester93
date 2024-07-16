"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6511],
  {
    6511: function (e, t, i) {
      i.r(t),
        i.d(t, {
          default: function () {
            return ProjectDetail_ProjectImageSolutionFirst;
          },
        });
      var n = i(5893),
        r = i(7294),
        a = i(8963),
        o = i(348),
        ProjectImageSolutionFirst_AlphaPay = function (e) {
          var t = e.imgSrc;
          return (0, n.jsx)(a.E.div, {
            className: "col-md-12 project-image",
            initial: "hidden",
            whileInView: "show",
            variants: o.Uo,
            viewport: { once: !0, margin: "-150px" },
            children: (0, n.jsx)("img", {
              src: t,
              className: "img-fluid",
              alt: "",
            }),
          });
        },
        s = i(4114),
        c = {
          hidden: { y: 200, x: 0 },
          show: { y: 0, x: 0, transition: { duration: 1.25 } },
        },
        d = {
          hidden: { y: -200, x: 0 },
          show: { y: 0, x: 0, transition: { duration: 1.25 } },
        },
        ProjectImageSolutionFirst_ImageGeneral = function (e) {
          var t = e.backgroundImage,
            i = e.url,
            u = (0, r.useRef)(null),
            l = (0, s.Z)(u).width;
          return (0, n.jsx)(a.E.div, {
            className: "col-md-12 project-image",
            initial: "hidden",
            whileInView: "show",
            viewport: { once: !0 },
            variants: o.Uo,
            children: (0, n.jsx)("div", {
              style: { overflow: "hidden", background: t },
              children: (0, n.jsxs)(a.E.div, {
                style: { background: t },
                className: "container-screen-skew",
                variants: o.a$,
                custom: { staggerChildren: 0.2 },
                initial: "hidden",
                whileInView: "show",
                viewport: { once: !0 },
                children: [
                  (0, n.jsx)("div", {
                    ref: u,
                    className: "w-100",
                    children: (0, n.jsx)(a.E.img, {
                      style: { width: l },
                      variants: c,
                      src: i,
                      className: "img-fluid tw-absolute tw-top-[-8%]",
                      alt: "",
                    }),
                  }),
                  (0, n.jsx)("div", {
                    className: "w-100",
                    children: (0, n.jsx)(a.E.img, {
                      style: { width: l },
                      variants: d,
                      src: i,
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
        ProjectDetail_ProjectImageSolutionFirst = function (e) {
          var t = e.path,
            i = e.data;
          return "alpha-pay" === t || "hubdeck" === t
            ? (0, n.jsx)(ProjectImageSolutionFirst_AlphaPay, { imgSrc: i })
            : (0, n.jsx)(ProjectImageSolutionFirst_ImageGeneral, {
                backgroundImage: i["bg-image"],
                url: i.url,
              });
        };
    },
    2340: function (e, t) {
      t.Z = {
        hidden: { opacity: 0.01, y: -50 },
        show: function (e) {
          return {
            opacity: 1,
            y: 0,
            transition: {
              ease: [0.42, 0, 0.58, 1],
              duration: (e || {}).duration || 1,
            },
          };
        },
      };
    },
    348: function (e, t, i) {
      i.d(t, {
        Uo: function () {
          return o;
        },
        Im: function () {
          return n.Z;
        },
        Qf: function () {
          return a;
        },
        a$: function () {
          return r;
        },
      });
      var n = i(2340),
        r = {
          hidden: { opacity: 0.01 },
          show: function (e) {
            var t = e || {};
            return {
              opacity: 1,
              transition: {
                delayChildren: t.delayChildren || 0.4,
                staggerChildren: t.staggerChildren || 0.5,
              },
            };
          },
        },
        a = {
          hidden: { opacity: 0, y: -50 },
          show: function (e) {
            var t = e || {};
            return {
              opacity: 1,
              y: 0,
              transition: {
                ease: [0.42, 0, 0.58, 1],
                duration: t.duration || 1,
                delay: t.delayed || 0,
              },
            };
          },
        },
        o = {
          hidden: function (e) {
            return { opacity: 0, y: (e || {}).yStart || 0 };
          },
          show: function (e) {
            return {
              y: 0,
              opacity: 1,
              transition: {
                ease: [0.42, 0, 0.58, 1],
                duration: (e || {}).duration || 1,
              },
            };
          },
        };
    },
    4114: function (e, t, i) {
      var n = i(1309),
        r = i(7294);
      t.Z = function (e) {
        var getDimensions = function () {
            return {
              width: e.current.offsetWidth,
              height: e.current.offsetHeight,
            };
          },
          t = (0, n._)((0, r.useState)({ width: 0, height: 0 }), 2),
          i = t[0],
          a = t[1];
        return (
          (0, r.useEffect)(
            function () {
              var handleResize = function () {
                a(getDimensions());
              };
              return (
                e.current && a(getDimensions()),
                window.addEventListener("resize", handleResize),
                function () {
                  window.removeEventListener("resize", handleResize);
                }
              );
            },
            [e]
          ),
          i
        );
      };
    },
  },
]);
