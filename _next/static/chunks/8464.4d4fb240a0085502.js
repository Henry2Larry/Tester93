"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8464],
  {
    8464: function (t, e, n) {
      n.r(e);
      var i = n(5893),
        a = n(512),
        o = n(8963),
        s = n(348);
      e.default = function (t) {
        var e = t.title,
          n = t.description,
          d = t.isHubdeck;
        return (0, i.jsx)("section", {
          id: "projectOverview",
          className: "tw-relative tw-w-full",
          children: (0, i.jsxs)(o.E.div, {
            className: (0, a.Z)(
              "tw-pb-8 md:tw-pb-16 xl:tw-pb-20",
              "tw-px-6 md:tw-px-12 xl:tw-px-[160px]",
              "tw-max-w-[1440px] tw-mx-auto tw-space-y-4 sm:tw-space-y-6"
            ),
            variants: s.a$,
            custom: { delayChildren: 1, staggerChildren: 0.5 },
            initial: "hidden",
            whileInView: "show",
            viewport: { once: !0 },
            children: [
              (0, i.jsxs)("div", {
                className: "tw-space-y-1",
                children: [
                  (0, i.jsx)(o.E.p, {
                    className:
                      "tw-text-bodyMedium_18 sm:tw-text-bodyLarge_20 tw-font-medium tw-text-neutral-80 tw-tracking-[0.2px] tw-leading-[32px] sm:tw-leading-[36px] mb-0",
                    variants: s.Im,
                    custom: { duration: 0.8 },
                    children: "Case Study",
                  }),
                  (0, i.jsx)(o.E.h1, {
                    className:
                      "tw-text-h4 sm:tw-text-h2 tw-font-extrabold tw-text-neutral-100",
                    variants: s.Im,
                    custom: { duration: 0.9 },
                    children: e,
                  }),
                ],
              }),
              (0, i.jsx)(o.E.p, {
                className: (0, a.Z)(
                  d && "tw-max-w-[908px]",
                  "tw-leading-[29px] sm:tw-leading-[32px]",
                  "tw-text-bodyMedium_16 sm:tw-text-bodyMedium_18",
                  "tw-tracking-[0.18px] tw-font-normal tw-text-neutral-90 mb-0 tw-whitespace-pre-line"
                ),
                dangerouslySetInnerHTML: { __html: n },
                variants: s.Im,
                custom: { duration: 1 },
              }),
            ],
          }),
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
          return s;
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
        s = {
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
    512: function (t, e, n) {
      e.Z = function () {
        for (var t, e, n = 0, i = ""; n < arguments.length; )
          (t = arguments[n++]) &&
            (e = (function r(t) {
              var e,
                n,
                i = "";
              if ("string" == typeof t || "number" == typeof t) i += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t))
                  for (e = 0; e < t.length; e++)
                    t[e] && (n = r(t[e])) && (i && (i += " "), (i += n));
                else for (e in t) t[e] && (i && (i += " "), (i += e));
              }
              return i;
            })(t)) &&
            (i && (i += " "), (i += e));
        return i;
      };
    },
  },
]);
