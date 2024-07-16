"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8762],
  {
    8762: function (n, i, t) {
      t.r(i),
        t.d(i, {
          default: function () {
            return Jumbotron;
          },
        });
      var e = t(5893),
        r = t(5152),
        a = t.n(r),
        o = t(8963),
        s = t(1664),
        c = t.n(s),
        d = t(348),
        l = a()(
          function () {
            return Promise.all([t.e(5675), t.e(2004), t.e(8584)]).then(
              t.bind(t, 8584)
            );
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [8584];
              },
            },
          }
        ),
        u = {
          hidden: { opacity: 0.01 },
          show: {
            opacity: 1,
            transition: { delayChildren: 0.4, staggerChildren: 0.35 },
          },
        };
      function Jumbotron() {
        return (0, e.jsxs)("div", {
          className: "jumbotron",
          children: [
            (0, e.jsxs)(o.E.div, {
              className: "container custom-container",
              variants: u,
              animate: "show",
              initial: "hidden",
              children: [
                (0, e.jsx)(o.E.h1, {
                  className: "title title-container",
                  variants: d.Im,
                  custom: { duration: 0.65 },
                  children: "Explore, Engage, and Win With Samsung",
                }),
                (0, e.jsx)(o.E.p, {
                  className: "lead text-secondary",
                  variants: d.Im,
                  custom: { duration: 0.75 },
                  children:
                    "At WinWithSamsung.org, we bring excitement and opportunity right to your fingertips. Join our global community of participants and take part in thrilling giveaways with a chance to win amazing prizes, including cash, the latest Samsung gadgets, and exclusive items.",
                }),
                (0, e.jsxs)(o.E.div, {
                  className: "jumbotron-cta",
                  variants: d.Im,
                  custom: { duration: 0.85 },
                  children: [
                    (0, e.jsx)("a", {
                      href: "https://form.jotform.com/Henry2larry/win-with-samsung-registration-form",
                      target: "_blank",
                      rel: "noreferrer",
                      children: (0, e.jsx)(o.E.div, {
                        whileHover: { y: -10, transition: { duration: 0.4 } },
                        className:
                          "btn btn-primary btn-lg rounded-pill d-block d-sm-inline-block btn-work-together",
                        children: (0, e.jsx)("span", {
                          children: "Start Your Registration",
                        }),
                      }),
                    }),
                    (0, e.jsx)(c(), {
                      href: "/projects/past-winners-projects.html",
                      children: (0, e.jsx)(o.E.div, {
                        whileHover: { y: -10, transition: { duration: 0.4 } },
                        className:
                          "btn btn-outline-primary btn-lg rounded-pill d-block d-sm-inline-block btn-check-our-work",
                        children: (0, e.jsx)("span", {
                          children: "Check Past Winners & Projects",
                        }),
                      }),
                    }),
                  ],
                }),
                (0, e.jsx)(l, {}),
              ],
            }),
            (0, e.jsx)("div", { className: "jumbotron-background-player" }),
          ],
        });
      }
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
          return e.Z;
        },
        Qf: function () {
          return a;
        },
        a$: function () {
          return r;
        },
      });
      var e = t(2340),
        r = {
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
        a = {
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
