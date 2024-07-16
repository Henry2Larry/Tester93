"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1279],
  {
    2340: function (t, n) {
      n.Z = {
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
    348: function (t, n, i) {
      i.d(n, {
        Uo: function () {
          return o;
        },
        Im: function () {
          return e.Z;
        },
        Qf: function () {
          return r;
        },
        a$: function () {
          return a;
        },
      });
      var e = i(2340),
        a = {
          hidden: { opacity: 0.01 },
          show: function (t) {
            var n = t || {};
            return {
              opacity: 1,
              transition: {
                delayChildren: n.delayChildren || 0.4,
                staggerChildren: n.staggerChildren || 0.5,
              },
            };
          },
        },
        r = {
          hidden: { opacity: 0, y: -50 },
          show: function (t) {
            var n = t || {};
            return {
              opacity: 1,
              y: 0,
              transition: {
                ease: [0.42, 0, 0.58, 1],
                duration: n.duration || 1,
                delay: n.delayed || 0,
              },
            };
          },
        },
        o = {
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
    1279: function (t, n, i) {
      i.r(n),
        i.d(n, {
          default: function () {
            return SectionTitle;
          },
        });
      var e = i(5893),
        a = i(8963);
      i(7294);
      var r = i(348),
        o = {
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { delayChildren: 0.2 } },
        };
      function SectionTitle(t) {
        var n = t.toptext,
          i = t.title,
          s = t.classes,
          c = t.titleClasses;
        return (0, e.jsxs)(a.E.div, {
          className: ["w-100 section-title", s].join(" "),
          variants: o,
          initial: "hidden",
          whileInView: "show",
          viewport: { once: !0 },
          children: [
            (0, e.jsx)(a.E.p, {
              className:
                "text-sm text-secondary text-uppercase text-sf-pro toptext",
              variants: {
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { duration: 1 } },
              },
              children: n,
            }),
            (0, e.jsx)(a.E.h6, {
              className: "title ".concat(c),
              variants: r.Im,
              children: i,
            }),
          ],
        });
      }
    },
  },
]);
