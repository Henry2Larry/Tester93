"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1935],
  {
    1935: function (t, e, a) {
      a.r(e),
        a.d(e, {
          default: function () {
            return ProjectContent;
          },
        });
      var n = a(5893),
        i = a(512),
        s = a(8963);
      a(7294);
      var l = a(348);
      function ProjectContent(t) {
        t.title, t.desc;
        var e = t.goal,
          a = t.challenge,
          o = (t.solution, t.services),
          d = t.website;
        return (0, n.jsx)("section", {
          className: "tw-relative tw-w-full",
          children: (0, n.jsxs)("div", {
            className: (0, i.Z)(
              "tw-flex tw-items-start",
              "tw-gap-10 lg:tw-gap-[136px]",
              "tw-flex-col lg:tw-flex-row",
              "tw-px-6 sm:tw-px-12 xl:tw-px-[160px]",
              "tw-py-8 sm:tw-py-16 lg:tw-pt-[120px] lg:tw-pb-[124px]",
              "tw-w-full tw-max-w-[1440px] tw-mx-auto"
            ),
            children: [
              (0, n.jsxs)(s.E.div, {
                className: "tw-space-y-8 sm:tw-space-y-10",
                variants: l.a$,
                custom: { delayChildren: 0.5, staggerChildren: 0.4 },
                initial: "hidden",
                whileInView: "show",
                viewport: { once: !0 },
                children: [
                  (0, n.jsx)(TheGoal, { value: e }),
                  (0, n.jsx)(TheChallenge, { value: a }),
                ],
              }),
              (0, n.jsx)(OurService, { services: o, website: d }),
            ],
          }),
        });
      }
      var TheGoal = function (t) {
          var e = t.value;
          return (0, n.jsxs)(s.E.div, {
            className: "tw-space-y-4",
            variants: l.a$,
            custom: { delayChildren: 0.5, staggerChildren: 0.4 },
            children: [
              (0, n.jsx)(s.E.p, {
                className:
                  "tw-text-bodyLarge_24 sm:tw-text-h4 tw-font-extrabold tw-text-neutral-100 tw-tracking-[-1px] tw-leading-[34px] sm:tw-leading-[52px]",
                variants: l.Im,
                custom: { duration: 0.8 },
                children: "The Goal",
              }),
              (0, n.jsx)(s.E.p, {
                className:
                  "tw-text-bodyMedium_16 sm:tw-text-bodyLarge_24 tw-font-normal tw-text-neutral-90 tw-tracking-[0.24px] tw-leading-[26px] sm:tw-leading-[43px]",
                variants: l.Im,
                custom: { duration: 0.9 },
                children: e,
              }),
            ],
          });
        },
        TheChallenge = function (t) {
          var e = t.value;
          return (0, n.jsxs)(s.E.div, {
            className: "tw-space-y-4",
            variants: l.a$,
            custom: { delayChildren: 1, staggerChildren: 0.4 },
            children: [
              (0, n.jsx)(s.E.p, {
                className:
                  "tw-text-bodyLarge_24 sm:tw-text-h4 tw-font-extrabold tw-text-neutral-100 tw-tracking-[-1px] tw-leading-[34px] sm:tw-leading-[52px]",
                variants: l.Im,
                custom: { duration: 0.8 },
                children: "The Challenge",
              }),
              (0, n.jsx)(s.E.p, {
                className:
                  "tw-text-bodyMedium_16 sm:tw-text-bodyLarge_24 tw-font-normal tw-text-neutral-90 tw-tracking-[0.24px] tw-leading-[26px] sm:tw-leading-[43px]",
                variants: l.Im,
                custom: { duration: 0.9 },
                children: e,
              }),
            ],
          });
        },
        OurService = function (t) {
          var e = t.services,
            a = t.website;
          return (0, n.jsxs)(s.E.div, {
            className: (0, i.Z)(
              "tw-w-full",
              "sm:tw-w-fit sm:tw-min-w-[346px]",
              "tw-grid tw-gap-8",
              "tw-justify-between",
              "tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-1"
            ),
            variants: l.a$,
            custom: { delayChildren: 1.25, staggerChildren: 0.4 },
            initial: "hidden",
            whileInView: "show",
            viewport: { once: !0 },
            children: [
              (0, n.jsxs)(s.E.div, {
                variants: l.a$,
                custom: { delayChildren: 1.25, staggerChildren: 0.4 },
                children: [
                  (0, n.jsx)(s.E.p, {
                    className:
                      "tw-text-bodyLarge_20 tw-font-extrabold tw-tracking-[0.2px] tw-text-neutral-90 tw-leading-[32px] tw-mb-0",
                    variants: l.Im,
                    custom: { duration: 0.8 },
                    children: "Our Service",
                  }),
                  (0, n.jsx)(s.E.ul, {
                    className: "tw-space-y-4 tw-mt-2 sm:tw-mt-4 tw-mb-0 tw-p-0",
                    variants: l.Im,
                    custom: { duration: 0.9 },
                    children: e.map(function (t, e) {
                      return (0,
                      n.jsx)(ServiceItem, { number: "0".concat(e + 1), label: t });
                    }),
                  }),
                ],
              }),
              (0, n.jsxs)(s.E.div, {
                className: "tw-space-y-2 sm:tw-space-y-4",
                variants: l.a$,
                custom: { delayChildren: 1.75, staggerChildren: 0.4 },
                children: [
                  (0, n.jsx)(s.E.p, {
                    className:
                      "tw-text-bodyLarge_20 tw-font-extrabold tw-tracking-[0.2px] tw-text-neutral-90 tw-leading-[32px] tw-mb-0",
                    variants: l.Im,
                    custom: { duration: 0.8 },
                    children: "Website",
                  }),
                  (0, n.jsx)(s.E.a, {
                    href: a.url,
                    className:
                      "tw-block tw-text-bodyMedium_18 tw-font-medium tw-leading-[32px] tw-text-primary-main",
                    target: "_blank",
                    variants: l.Im,
                    custom: { duration: 0.9 },
                    children: a.label,
                  }),
                ],
              }),
            ],
          });
        },
        ServiceItem = function (t) {
          var e = t.number,
            a = t.label;
          return (0, n.jsxs)("li", {
            className: "tw-flex tw-items-center tw-gap-4",
            children: [
              (0, n.jsx)("span", {
                className:
                  "tw-text-bodyMedium_18 tw-font-medium tw-text-neutral-80 tw-leading-[32px]",
                children: e,
              }),
              (0, n.jsx)("span", {
                className:
                  "tw-text-bodyMedium_18 tw-font-bold tw-text-neutral-100",
                children: a,
              }),
            ],
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
    348: function (t, e, a) {
      a.d(e, {
        Uo: function () {
          return l;
        },
        Im: function () {
          return n.Z;
        },
        Qf: function () {
          return s;
        },
        a$: function () {
          return i;
        },
      });
      var n = a(2340),
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
        s = {
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
        l = {
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
    512: function (t, e, a) {
      e.Z = function () {
        for (var t, e, a = 0, n = ""; a < arguments.length; )
          (t = arguments[a++]) &&
            (e = (function r(t) {
              var e,
                a,
                n = "";
              if ("string" == typeof t || "number" == typeof t) n += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t))
                  for (e = 0; e < t.length; e++)
                    t[e] && (a = r(t[e])) && (n && (n += " "), (n += a));
                else for (e in t) t[e] && (n && (n += " "), (n += e));
              }
              return n;
            })(t)) &&
            (n && (n += " "), (n += e));
        return n;
      };
    },
  },
]);
