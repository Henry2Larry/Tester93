"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9094],
  {
    2340: function (e, i) {
      i.Z = {
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
    348: function (e, i, t) {
      t.d(i, {
        Uo: function () {
          return s;
        },
        Im: function () {
          return n.Z;
        },
        Qf: function () {
          return r;
        },
        a$: function () {
          return a;
        },
      });
      var n = t(2340),
        a = {
          hidden: { opacity: 0.01 },
          show: function (e) {
            var i = e || {};
            return {
              opacity: 1,
              transition: {
                delayChildren: i.delayChildren || 0.4,
                staggerChildren: i.staggerChildren || 0.5,
              },
            };
          },
        },
        r = {
          hidden: { opacity: 0, y: -50 },
          show: function (e) {
            var i = e || {};
            return {
              opacity: 1,
              y: 0,
              transition: {
                ease: [0.42, 0, 0.58, 1],
                duration: i.duration || 1,
                delay: i.delayed || 0,
              },
            };
          },
        },
        s = {
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
    9094: function (e, i, t) {
      t.r(i),
        t.d(i, {
          default: function () {
            return ServiceCard;
          },
        });
      var n = t(5893),
        a = t(8963);
      t(7294);
      var r = t(348),
        s = t(6410),
        c = t(5675),
        d = t.n(c),
        l = {
          hidden: { opacity: 0.01 },
          show: {
            opacity: 1,
            transition: { delayChildren: 0.75, staggerChildren: 0.5 },
          },
        },
        u = {
          hidden: { opacity: 0.01 },
          show: {
            opacity: 1,
            transition: { delayChildren: 0.25, staggerChildren: 0.25 },
          },
        },
        o = {
          hidden: { opacity: 0.01 },
          show: {
            opacity: 1,
            transition: { delayChildren: 0.25, staggerChildren: 0.2 },
          },
        };
      function ServiceCard(e) {
        var i = e.classes,
          t = e.title,
          c = e.description,
          h = e.techs,
          m = e.thumbnail,
          f = e.thumbnailTablet,
          w = e.thumbnailMobile,
          v = e.iconTech,
          y = (0, s.V4)(),
          p = (0, s.ag)();
        return (0, n.jsxs)(a.E.div, {
          className: ["service-card", i].join(" "),
          variants: l,
          initial: "hidden",
          whileInView: "show",
          viewport: { once: !0, margin: "-50px" },
          children: [
            (0, n.jsx)(a.E.div, {
              className: "service-card__illustration",
              variants: r.Im,
              children: p
                ? (0, n.jsx)(d(), {
                    className: "img-fluid",
                    src: m,
                    alt: "Service",
                    width: 540,
                    height: 540,
                  })
                : y
                ? (0, n.jsx)(d(), {
                    className: "img-fluid",
                    src: f,
                    alt: "Service",
                    width: 540,
                    height: 540,
                  })
                : (0, n.jsx)(d(), {
                    className: "img-fluid",
                    src: w,
                    alt: "Service",
                    width: 540,
                    height: 540,
                  }),
            }),
            (0, n.jsxs)(a.E.div, {
              className: "service-card__detail",
              variants: u,
              children: [
                (0, n.jsx)(a.E.p, {
                  className: "title",
                  variants: r.Im,
                  children: t,
                }),
                (0, n.jsx)(a.E.p, {
                  className: "desc",
                  variants: r.Im,
                  children: c,
                }),
                (0, n.jsx)(a.E.p, {
                  variants: r.Im,
                  className:
                    "tw-mb-4 lg:tw-mb-6 tw-text-bodyMedium_18 md:tw-text-bodyLarge_20 lg:tw-text-bodyLarge_22 tw-font-extrabold tw-leading-[30px]",
                  children: "How did this help?",
                }),
                (0, n.jsx)(a.E.div, {
                  className: "tech-stack",
                  variants: r.Im,
                  children: h.map(function (e, i) {
                    return (0,
                    n.jsxs)("p", { className: "tw-flex tw-items-center tw-gap-3", children: [(0, n.jsx)("span", { className: "tw-block tw-w-4 tw-h-0.5 tw-bg-neutral-100" }), (0, n.jsx)("span", { children: e })] }, i);
                  }),
                }),
                (0, n.jsx)(a.E.div, {
                  className: "tools",
                  variants: o,
                  children: (0, n.jsx)("div", {
                    className: "tool-list",
                    children: v.map(function (e, i) {
                      return (0,
                      n.jsx)(a.E.div, { className: "ic-tool", variants: r.Im, children: (0, n.jsx)("img", { src: e, className: "img-fluid", alt: "" }) }, i);
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    6410: function (e, i, t) {
      t.d(i, {
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
      var n = t(1309),
        a = t(7294);
      function useMediaQuery(e) {
        var i = (0, n._)((0, a.useState)(!1), 2),
          t = i[0],
          r = i[1];
        return (
          (0, a.useEffect)(
            function () {
              var i = window.matchMedia(e);
              i.matches !== t && r(i.matches);
              var listener = function () {
                r(i.matches);
              };
              return (
                i.addListener(listener),
                function () {
                  return i.removeListener(listener);
                }
              );
            },
            [t, e]
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
