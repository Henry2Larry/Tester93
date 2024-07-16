"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [375],
  {
    375: function (t, e, a) {
      a.r(e),
        a.d(e, {
          default: function () {
            return ProjectDetail_ProjectSummary;
          },
        });
      var n = a(5893);
      a(7294);
      var i = a(8963),
        s = a(348),
        l = a(512),
        ProjectDetail_ClientProfile = function (t) {
          var e = t.clientProfile,
            a = e.photoUrl,
            i = e.name,
            s = e.role;
          return (0, n.jsxs)("div", {
            className: (0, l.Z)(
              "tw-flex tw-gap-[18px] md:tw-gap-6",
              "tw-items-center",
              "tw-mt-8 md:tw-mt-10"
            ),
            children: [
              (0, n.jsx)("div", {
                children: (0, n.jsx)("img", {
                  className: (0, l.Z)(
                    "tw-max-w-[48px] sm:tw-max-w-[60px] md:tw-max-w-[72px]",
                    "tw-max-h-[48px] sm:tw-max-h-[60px] md:tw-max-h-[72px]"
                  ),
                  src: a,
                }),
              }),
              (0, n.jsxs)("div", {
                children: [
                  (0, n.jsx)("h1", {
                    className: (0, l.Z)(
                      "tw-leading-[22px] sm:tw-leading-[27px]",
                      "tw-font-bold tw-tracking-[0.01em] tw-text-[#15141B]",
                      "tw-text-bodyMedium_16 md:tw-text-bodyLarge_24 lg:tw-text-bodyLarge_20",
                      "tw-mb-1 md:tw-mb-2"
                    ),
                    children: i,
                  }),
                  (0, n.jsx)("p", {
                    className: (0, l.Z)(
                      "tw-font-normal tw-leading-[19px] sm:tw-leading-[32px] tw-tracking-[0.18px] tw-text-neutral-80",
                      "tw-text-bodySmall_14 md:tw-text-bodyLarge_20 lg:tw-text-bodyMedium_18",
                      "tw-mb-0"
                    ),
                    children: s,
                  }),
                ],
              }),
            ],
          });
        },
        c = a(5675),
        o = a.n(c);
      function Stars(t) {
        for (var e = t.rating, a = [], i = 1; i <= 5; i += 1)
          e >= i
            ? a.push(
                (0, n.jsx)(
                  "img",
                  { src: "/assets/svg/ic-star.svg", alt: "Star" },
                  i
                )
              )
            : a.push(
                (0, n.jsx)(
                  "img",
                  {
                    src: "/assets/svg/ic-star-disabled.svg",
                    alt: "Star Disabled",
                  },
                  i
                )
              );
        return (0, n.jsx)("div", { className: "stars", children: a });
      }
      var ProjectDetail_ProjectSummary = function (t) {
        var e = t.summary,
          a = e["client-profile"],
          c = e["clutch-url"],
          d = e.review,
          w = e.rating;
        return (0, n.jsxs)(i.E.div, {
          className: (0, l.Z)(
            "tw-max-w-[926px] tw-mx-auto",
            "tw-py-8 sm:tw-py-[60px] xl:tw-pb-[60px] xl:tw-pt-[120px]"
          ),
          initial: "hidden",
          whileInView: "show",
          viewport: { once: !0 },
          variants: s.a$,
          custom: { delayChildren: 0.2, staggerChildren: 0.25 },
          children: [
            (0, n.jsxs)(i.E.div, {
              className:
                "tw-flex tw-items-start sm:tw-items-center tw-gap-6 sm:tw-gap-4 tw-mb-6 tw-flex-col sm:tw-flex-row",
              variants: s.Im,
              children: [
                (0, n.jsxs)("div", {
                  className: "tw-flex tw-items-center tw-gap-4",
                  children: [
                    (0, n.jsx)(Stars, { rating: w }),
                    (0, n.jsxs)("p", {
                      className:
                        "tw-text-bodyLarge_20 tw-font-bold tw-leading-[27px] tw-flex tw-items-center tw-gap-1 tw-mb-0",
                      children: [
                        (0, n.jsx)("span", {
                          className: "tw-text-black",
                          children: w,
                        }),
                        (0, n.jsx)("span", {
                          className: "tw-text-neutral-80",
                          children: "/",
                        }),
                        (0, n.jsx)("span", {
                          className: "tw-text-neutral-80",
                          children: "5.0",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)("a", {
                  className:
                    "tw-flex tw-items-center tw-gap-2 tw-text-bodyLarge_20 tw-font-bold tw-text-primary-main tw-leading-[27px]",
                  href: c,
                  target: "_blank",
                  rel: "noreferrer",
                  children: [
                    (0, n.jsx)(o(), {
                      src: "/assets/clutch-icon.png",
                      alt: "",
                      width: 22,
                      height: 22,
                      quality: 100,
                    }),
                    (0, n.jsx)("span", { children: "See in Clutch" }),
                  ],
                }),
              ],
            }),
            (0, n.jsx)(i.E.p, {
              style: { display: "" === d ? "none" : "block" },
              className:
                "tw-text-bodyMedium_16 sm:tw-text-bodyLarge_24 tw-font-normal sm:tw-font-medium tw-text-neutral-90 tw-leading-[26px] sm:tw-leading-[43px] tw-tracking-[0.16px] sm:tw-tracking-[0.24px] tw-mb-0",
              variants: s.Im,
              children: d,
            }),
            (0, n.jsx)(i.E.div, {
              style: { display: "" === a.name ? "none" : "block" },
              variants: s.Im,
              children: (0, n.jsx)(ProjectDetail_ClientProfile, {
                clientProfile: a,
              }),
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
