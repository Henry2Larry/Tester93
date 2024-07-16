"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6978],
  {
    6978: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return ProjectDetail_ProjectImageSolutionSecond;
          },
        });
      var o = n(5893),
        i = n(7294),
        Billy = function (t) {
          var e = t.urlVideo;
          return (0, o.jsx)("div", {
            className: "col-md-12 project-image",
            children: (0, o.jsx)("video", {
              poster: "/assets/project/billy/poster-video.gif",
              width: "100%",
              autoPlay: !0,
              playsInline: !0,
              muted: !0,
              loop: !0,
              src: e,
            }),
          });
        },
        a = n(2253),
        r = n(1309),
        c = n(8963),
        l = n(348),
        s = n(1544),
        d = n(4114);
      s.Z.mobileM,
        s.Z.mobileL,
        s.Z.tablet,
        s.Z.laptopS,
        s.Z.laptop,
        s.Z.laptopM,
        s.Z.laptopL;
      var u = {
        hidden: function (t) {
          return { y: (t || {}).yStart, x: 0 };
        },
        show: function (t) {
          var e = t || {};
          return {
            y: e.yEnd,
            x: 0,
            transition: { duration: e.duration || 1.25 },
          };
        },
      };
      function SelectUrl(t, e, n) {
        return "the-swag" === e
          ? n
          : "master-pos" === e
          ? 0 === t || 1 === t
            ? n[0]
            : n[1]
          : "alpha-pay" === e
          ? n[t]
          : void 0;
      }
      function ImageScreen(t) {
        var e = t.style,
          n = t.url,
          i = t.animationProps;
        return (0, o.jsx)("div", {
          style: { width: "100%", position: "relative" },
          children: (0, o.jsx)(c.E.div, {
            style: (0, a._)(
              { position: "absolute", transition: 0.1 },
              e.desktop
            ),
            variants: u,
            custom: i,
            children: (0, o.jsx)(c.E.img, {
              src: n,
              className: "img-fluid",
              alt: "",
            }),
          }),
        });
      }
      var ProjectImageSolutionSecond_ImageGeneral = function (t) {
          var e = t.path,
            n = t.backgroundImage,
            a = t.url,
            s = t.topPositionImage,
            u = (0, r._)((0, i.useState)(0), 2),
            p = u[0],
            m = u[1],
            handleScrolling = function () {
              m(
                (((document.body.scrollTop ||
                  document.documentElement.scrollTop) -
                  3300) /
                  (document.documentElement.scrollHeight -
                    document.documentElement.clientHeight -
                    3300)) *
                  2.5
              );
            };
          (0, i.useEffect)(
            function () {
              return (
                window.addEventListener("scroll", handleScrolling),
                function () {
                  window.removeEventListener("scroll", handleScrolling);
                }
              );
            },
            [handleScrolling]
          );
          var h = (0, i.useRef)(null),
            f = (0, d.Z)(h).width;
          return (0, o.jsx)(c.E.div, {
            className: "col-md-12 project-image",
            initial: "hidden",
            whileInView: "show",
            viewport: { once: !0, margin: "-100px" },
            variants: l.Uo,
            children: (0, o.jsxs)("div", {
              ref: h,
              className: "container-screen-mobile",
              style: { background: n },
              children: [
                (0, o.jsx)(ImageScreen, {
                  animationProps: { yStart: 500, yEnd: 0 },
                  url: SelectUrl(0, e, a),
                  style: {
                    mobile: {
                      top: "".concat(s.mobile.first, "px"),
                      transform: "translateY(".concat(-p, "%)"),
                    },
                    desktop: {
                      top: "".concat(s.desktop.first, "%"),
                      transform: "translateY(".concat(-p, "%)"),
                    },
                  },
                }),
                (0, o.jsx)(ImageScreen, {
                  animationProps: { yStart: -500, yEnd: 0 },
                  url: SelectUrl(1, e, a),
                  style: {
                    mobile: {
                      top: "".concat(s.mobile.second + (1120 - f), "px"),
                      transform: "translateY(".concat(p, "%)"),
                    },
                    desktop: {
                      marginTop: "".concat(s.desktop.second, "%"),
                      transform: "translateY(".concat(p, "%)"),
                    },
                  },
                }),
                (0, o.jsx)(ImageScreen, {
                  animationProps: { yStart: 500, yEnd: 0 },
                  url: SelectUrl(2, e, a),
                  style: {
                    mobile: {
                      top: "".concat(s.mobile.third + (1120 - f), "px"),
                      transform: "translateY(".concat(-p, "%)"),
                    },
                    desktop: {
                      marginTop: "".concat(s.desktop.third, "%"),
                      transform: "translateY(".concat(-p, "%)"),
                    },
                  },
                }),
                (0, o.jsx)(ImageScreen, {
                  animationProps: { yStart: -500, yEnd: 0 },
                  url: SelectUrl(3, e, a),
                  style: {
                    mobile: {
                      top: "".concat(s.mobile.fourth + (1120 - f), "px"),
                      transform: "translateY(".concat(p, "%)"),
                    },
                    desktop: {
                      marginTop: "".concat(s.desktop.fourth, "%"),
                      transform: "translateY(".concat(p, "%)"),
                    },
                  },
                }),
              ],
            }),
          });
        },
        ProjectImageSolutionSecond_Hubdeck = function (t) {
          var e = t.imgSrc;
          return (0, o.jsx)(c.E.div, {
            className: "col-md-12 project-image",
            initial: "hidden",
            whileInView: "show",
            variants: l.Uo,
            viewport: { once: !0, margin: "-150px" },
            children: (0, o.jsx)("img", {
              src: e,
              className: "img-fluid",
              alt: "",
            }),
          });
        },
        ProjectDetail_ProjectImageSolutionSecond = function (t) {
          var e = t.path,
            n = t.data;
          return "hubdeck" === e
            ? (0, o.jsx)(ProjectImageSolutionSecond_Hubdeck, { imgSrc: n })
            : "billy" === e
            ? (0, o.jsx)(Billy, { urlVideo: n.url })
            : (0, o.jsx)(ProjectImageSolutionSecond_ImageGeneral, {
                path: e,
                backgroundImage: n["bg-image"],
                url: n.url,
                topPositionImage: n["top-position"],
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
          return o.Z;
        },
        Qf: function () {
          return a;
        },
        a$: function () {
          return i;
        },
      });
      var o = n(2340),
        i = {
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
        a = {
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
      var o = n(1309),
        i = n(7294);
      e.Z = function (t) {
        var getDimensions = function () {
            return {
              width: t.current.offsetWidth,
              height: t.current.offsetHeight,
            };
          },
          e = (0, o._)((0, i.useState)({ width: 0, height: 0 }), 2),
          n = e[0],
          a = e[1];
        return (
          (0, i.useEffect)(
            function () {
              var handleResize = function () {
                a(getDimensions());
              };
              return (
                t.current && a(getDimensions()),
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
        o = {
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
      e.Z = o;
    },
  },
]);
