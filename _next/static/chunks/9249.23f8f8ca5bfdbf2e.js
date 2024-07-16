"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9249],
  {
    9249: function (t, e, i) {
      i.r(e);
      var n = i(5893),
        a = i(512),
        s = i(5675),
        l = i.n(s),
        c = i(8963),
        o = i(348),
        u = i(6410),
        w = {
          hidden: { opacity: 0.01 },
          show: {
            opacity: 1,
            transition: { delayChildren: 0.25, staggerChildren: 0.5 },
          },
        },
        d = {
          hidden: { opacity: 0.01 },
          show: {
            opacity: 1,
            transition: { delayChildren: 0.25, staggerChildren: 0.5 },
          },
        };
      e.default = function () {
        var t = (0, u.ag)();
        return (0, n.jsx)("section", {
          className: "tw-max-w-[1440px] tw-mx-auto",
          children: (0, n.jsxs)(c.E.div, {
            className: (0, a.Z)(
              "tw-px-6 sm:tw-px-12 lg:tw-px-[160px]",
              "tw-pb-[42px] sm:tw-pb-16 lg:tw-pb-[120px]"
            ),
            variants: w,
            initial: "hidden",
            whileInView: "show",
            viewport: { once: !0, margin: "-50px" },
            children: [
              (0, n.jsx)(c.E.h1, {
                className: (0, a.Z)(
                  "tw-text-h4 sm:tw-text-h3 lg:tw-text-h2",
                  "tw-font-extrabold tw-text-neutral-100 tw-max-w-[927px]"
                ),
                variants: o.Im,
                children: "What People Are Saying About Us.",
              }),
              (0, n.jsxs)("div", {
                className: (0, a.Z)(
                  "tw-flex tw-items-start tw-gap-10",
                  "tw-mt-10 sm:tw-mt-[45px] lg:tw-mt-16"
                ),
                children: [
                  (0, n.jsxs)("div", {
                    className: "tw-w-full tw-max-w-[540px]",
                    children: [
                      (0, n.jsx)(c.E.div, {
                        className: "tw-relative tw-w-full tw-max-w-[540px]",
                        variants: o.Im,
                        children: (0, n.jsx)("div", {
                          className:
                            "tw-relative tw-w-full tw-pt-[calc(380/540*100%)]",
                          children: (0, n.jsx)(l(), {
                            src: "/assets/service/hero-image-left.png",
                            className: "",
                            alt: "",
                            fill: !0,
                            priority: !0,
                          }),
                        }),
                      }),
                      (0, n.jsxs)(c.E.div, {
                        className:
                          "tw-space-y-4 tw-mt-10 md:tw-mt-8 lg:tw-mt-14",
                        variants: d,
                        initial: "hidden",
                        whileInView: "show",
                        viewport: { once: !0, margin: "-50px" },
                        children: [
                          (0, n.jsxs)(c.E.div, {
                            className: "tw-flex tw-items-center tw-gap-6",
                            variants: o.Im,
                            children: [
                              (0, n.jsx)("span", {
                                className:
                                  "tw-block tw-w-8 tw-h-0.5 tw-bg-neutral-100",
                              }),
                              (0, n.jsx)("p", {
                                className:
                                  "tw-leading-[31px] lg:tw-leading-[33px] tw-text-bodyLarge_22 lg:tw-text-bodyLarge_24 tw-font-bold tw-text-neutral-90 tw-m-0",
                                children: "About Us",
                              }),
                            ],
                          }),
                          (0, n.jsx)(c.E.p, {
                            className: (0, a.Z)(
                              "tw-text-bodyMedium_16 lg:tw-text-bodyMedium_18",
                              "tw-leading-[22px] lg:tw-leading-[33px] tw-text-neutral-90 tw-m-0"
                            ),
                            variants: o.Im,
                            children:
                              "I recently participated in a giveaway hosted by WinWithSamsung, and I couldn't be happier with my experience! The process was incredibly straightforward and user-friendly. I was thrilled to find out that I won a brand-new Samsung Galaxy S21. The best part? I had the option to choose a cash prize equivalent to the value of the phone! WinWithSamsung is truly dedicated to giving back to the community, and their commitment to spreading joy through these giveaways is evident. I highly recommend participating in their giveaways – you never know, you might be the next lucky winner! - Emily Roberts"
",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsx)(c.E.div, {
                    className: (0, a.Z)(
                      "tw-hidden sm:tw-block",
                      "tw-relative tw-w-full tw-max-w-[540px]"
                    ),
                    variants: o.Im,
                    children: t
                      ? (0, n.jsx)("div", {
                          className:
                            "tw-relative tw-w-full tw-pt-[calc(600/540*100%)]",
                          children: (0, n.jsx)(l(), {
                            src: "/assets/service/hero-image-right.png",
                            className: "",
                            alt: "",
                            fill: !0,
                            priority: !0,
                          }),
                        })
                      : (0, n.jsx)("div", {
                          className:
                            "tw-relative tw-w-full tw-pt-[calc(389/316*100%)]",
                          children: (0, n.jsx)(l(), {
                            src: "/assets/service/hero-image-right-tablet.png",
                            className: "",
                            alt: "",
                            fill: !0,
                            priority: !0,
                          }),
                        }),
                  }),
                ],
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
    348: function (t, e, i) {
      i.d(e, {
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
          return a;
        },
      });
      var n = i(2340),
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
    6410: function (t, e, i) {
      i.d(e, {
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
      var n = i(1309),
        a = i(7294);
      function useMediaQuery(t) {
        var e = (0, n._)((0, a.useState)(!1), 2),
          i = e[0],
          s = e[1];
        return (
          (0, a.useEffect)(
            function () {
              var e = window.matchMedia(t);
              e.matches !== i && s(e.matches);
              var listener = function () {
                s(e.matches);
              };
              return (
                e.addListener(listener),
                function () {
                  return e.removeListener(listener);
                }
              );
            },
            [i, t]
          ),
          i
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
    512: function (t, e, i) {
      e.Z = function () {
        for (var t, e, i = 0, n = ""; i < arguments.length; )
          (t = arguments[i++]) &&
            (e = (function r(t) {
              var e,
                i,
                n = "";
              if ("string" == typeof t || "number" == typeof t) n += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t))
                  for (e = 0; e < t.length; e++)
                    t[e] && (i = r(t[e])) && (n && (n += " "), (n += i));
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
