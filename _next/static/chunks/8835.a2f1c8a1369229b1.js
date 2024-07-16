"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8835],
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
    348: function (t, n, e) {
      e.d(n, {
        Uo: function () {
          return d;
        },
        Im: function () {
          return i.Z;
        },
        Qf: function () {
          return r;
        },
        a$: function () {
          return a;
        },
      });
      var i = e(2340),
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
        d = {
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
    8835: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return PageTitle;
          },
        });
      var i = e(5893),
        a = e(8963);
      e(7294);
      var r = e(348),
        d = e(1664),
        o = e.n(d);
      function PageTitle(t) {
        var n = t.animate,
          e = t.title,
          d = t.lead,
          l = t.classes,
          s = t.btnTitle,
          c = t.btnLink,
          u = { FadeInTop: {}, StaggerChild: {} };
        return (
          (void 0 === n || n) &&
            ((u.FadeInTop = r.Im), (u.StaggerChild = r.a$)),
          (0, i.jsx)(a.E.div, {
            className: "container custom-container",
            variants: u.StaggerChild,
            custom: { delayChildren: 0.2, staggerChildren: 0.25 },
            initial: "hidden",
            whileInView: "show",
            viewport: { once: !0 },
            children: (0, i.jsxs)("div", {
              className: "w-100 page-title ".concat(l),
              children: [
                (0, i.jsx)(a.E.h1, {
                  variants: u.FadeInTop,
                  className: "title",
                  children: e,
                }),
                (0, i.jsx)(a.E.p, {
                  variants: u.FadeInTop,
                  className: "text-sf-pro lead",
                  children: d,
                }),
                s && c
                  ? (0, i.jsx)(o(), {
                      href: c,
                      scroll: !1,
                      children: (0, i.jsx)(a.E.button, {
                        variants: u.FadeInTop,
                        className:
                          "tw-mt-3 md:tw-mt-8 tw-min-w-[175px] tw-min-h-[40px] md:tw-min-w-[228px] md:tw-min-h-[64px] tw-border-[1px] tw-border-[#E8EEF7] hover:tw-border-primary-main tw-rounded-full tw-text-bodySmall_12 md:tw-text-bodyMedium_16 tw-text-primary-main tw-font-bold",
                        children: s,
                      }),
                    })
                  : null,
              ],
            }),
          })
        );
      }
    },
  },
]);
