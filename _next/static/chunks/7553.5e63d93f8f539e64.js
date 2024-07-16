"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7553],
  {
    2340: function (n, e) {
      e.Z = {
        hidden: { opacity: 0.01, y: -50 },
        show: function (n) {
          return {
            opacity: 1,
            y: 0,
            transition: {
              ease: [0.42, 0, 0.58, 1],
              duration: (n || {}).duration || 1,
            },
          };
        },
      };
    },
    348: function (n, e, t) {
      t.d(e, {
        Uo: function () {
          return u;
        },
        Im: function () {
          return i.Z;
        },
        Qf: function () {
          return a;
        },
        a$: function () {
          return r;
        },
      });
      var i = t(2340),
        r = {
          hidden: { opacity: 0.01 },
          show: function (n) {
            var e = n || {};
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
          show: function (n) {
            var e = n || {};
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
        u = {
          hidden: function (n) {
            return { opacity: 0, y: (n || {}).yStart || 0 };
          },
          show: function (n) {
            return {
              y: 0,
              opacity: 1,
              transition: {
                ease: [0.42, 0, 0.58, 1],
                duration: (n || {}).duration || 1,
              },
            };
          },
        };
    },
    7553: function (n, e, t) {
      t.r(e),
        t.d(e, {
          default: function () {
            return EventCard;
          },
        });
      var i = t(5893),
        r = t(8963);
      t(7294);
      var a = t(348),
        u = t(6410);
      function EventCard(n) {
        var e = n.thumbnail,
          t = n.title,
          s = n.desc,
          c = n.thumbnailTablet,
          o = n.thumbnailMobile,
          d = (0, u.V4)(),
          l = (0, u.ag)();
        return (0, i.jsxs)(r.E.div, {
          className: "event-card",
          variants: a.Im,
          children: [
            (0, i.jsx)("div", {
              className: "event-card__thumbnail",
              children: l
                ? (0, i.jsx)(r.E.img, {
                    whileHover: { transition: { duration: 0.4 }, scale: 1.1 },
                    src: e,
                    alt: "",
                  })
                : d
                ? (0, i.jsx)(r.E.img, {
                    whileHover: { transition: { duration: 0.4 }, scale: 1.1 },
                    src: c,
                    alt: "",
                  })
                : (0, i.jsx)(r.E.img, {
                    whileHover: { transition: { duration: 0.4 }, scale: 1.1 },
                    src: o,
                    alt: "",
                  }),
            }),
            (0, i.jsxs)("div", {
              className: "event-card__info",
              children: [
                (0, i.jsx)("p", { className: "title", children: t }),
                (0, i.jsx)("p", { className: "description", children: s }),
              ],
            }),
          ],
        });
      }
    },
    6410: function (n, e, t) {
      t.d(e, {
        V4: function () {
          return useMedium;
        },
        ag: function () {
          return useLarge;
        },
        cl: function () {
          return useSmall;
        },
      });
      var i = t(1309),
        r = t(7294);
      function useMediaQuery(n) {
        var e = (0, i._)((0, r.useState)(!1), 2),
          t = e[0],
          a = e[1];
        return (
          (0, r.useEffect)(
            function () {
              var e = window.matchMedia(n);
              e.matches !== t && a(e.matches);
              var listener = function () {
                a(e.matches);
              };
              return (
                e.addListener(listener),
                function () {
                  return e.removeListener(listener);
                }
              );
            },
            [t, n]
          ),
          t
        );
      }
      var useSmall = function () {
          return useMediaQuery("(min-width: 576px)");
        },
        useMedium = function () {
          return useMediaQuery("(min-width: 768px)");
        },
        useLarge = function () {
          return useMediaQuery("(min-width: 992px)");
        };
    },
  },
]);
