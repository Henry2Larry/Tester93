"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4305],
  {
    4305: function (n, i, t) {
      t.r(i);
      var r = t(5893);
      t(7294);
      var a = t(8963),
        e = t(348);
      i.default = function (n) {
        var i = n.imgSrc;
        return (0, r.jsx)(a.E.div, {
          className: "project-image",
          initial: "hidden",
          whileInView: "show",
          variants: e.Uo,
          viewport: { once: !0, margin: "-150px" },
          children: (0, r.jsx)("img", {
            src: i,
            className: "img-fluid",
            alt: "",
          }),
        });
      };
    },
    2340: function (n, i) {
      i.Z = {
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
    348: function (n, i, t) {
      t.d(i, {
        Uo: function () {
          return o;
        },
        Im: function () {
          return r.Z;
        },
        Qf: function () {
          return e;
        },
        a$: function () {
          return a;
        },
      });
      var r = t(2340),
        a = {
          hidden: { opacity: 0.01 },
          show: function (n) {
            var i = n || {};
            return {
              opacity: 1,
              transition: {
                delayChildren: i.delayChildren || 0.4,
                staggerChildren: i.staggerChildren || 0.5,
              },
            };
          },
        },
        e = {
          hidden: { opacity: 0, y: -50 },
          show: function (n) {
            var i = n || {};
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
        o = {
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
  },
]);
