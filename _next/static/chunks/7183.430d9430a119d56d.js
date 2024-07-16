"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7183],
  {
    7183: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return OurProjects;
          },
        });
      var n = a(5893),
        s = a(8963),
        r = a(1664),
        i = a.n(r),
        o = a(348),
        c = a(3056),
        l = a(5979),
        u = a(6410);
      function OurProjects() {
        var e = (0, u.V4)(),
          t = (0, u.ag)();
        return (0, n.jsxs)("section", {
          className: "our-projects",
          children: [
            (0, n.jsx)("div", {
              className: "our-projects__title",
              children: (0, n.jsxs)("div", {
                className:
                  "container custom-container d-flex flex-column flex-md-row justify-lg-content-between align-items-center",
                children: [
                  (0, n.jsx)(c.NZ, {
                    title: "Our notable projects over the years.",
                    toptext: "OUR PROJECTS",
                    classes: "text-start",
                  }),
                  (0, n.jsx)(s.E.div, {
                    className: "btn-cta text-end mt-md-0",
                    variants: o.Qf,
                    custom: { duration: 1, delayed: 0.5 },
                    initial: "hidden",
                    whileInView: "show",
                    viewport: { once: !0 },
                    children: (0, n.jsx)(i(), {
                      href: "/projects",
                      legacyBehavior: !0,
                      children: (0, n.jsx)("a", {
                        href: "/projects",
                        className:
                          "btn btn-light fw-bold rounded-pill d-block d-md-inline-block btn-project",
                        children: (0, n.jsx)("span", {
                          children: "Check our honorable mentions",
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            }),
            (0, n.jsxs)("div", {
              className: "project-cards custom-project-cards-margin",
              children: [
                (0, n.jsxs)(s.E.div, {
                  className: "container custom-container",
                  children: [
                    (0, n.jsx)(l.t, {
                      url: "https://vimeo.com/983294729",
                      thumbnailDesktop: "/assets/project/billy.png",
                      thumbnailTablet: "/assets/project/billy-medium.png",
                      thumbnailMobile: "/assets/project/billy-small.png",
                      title:
                        "Samsung Galaxy S4 Giveaway Winner! (Jun 09, 2013)",
                      classes: "project-card-350",
                      desc: " - was the winner on June 09, 2013, WinWithSamsung.org celebrated another successful giveaway. Partnering with the popular creator...",
                      descTitle: "Blaine Woods",
                      isHome: !0,
                      delayedProject: 1,
                      yTranslate: 0,
                      aspectRatioImage: t ? 1.04 : e ? 13.44 / 10 : 3.27 / 3.5,
                    }),
                    (0, n.jsx)(l.t, {
                      url: "https://vimeo.com/983297591",
                      thumbnailDesktop: "hubdeck.png",
                      thumbnailTablet: "hubdeck.png",
                      thumbnailMobile: "hubdeck.png",
                      title:
                        "Samsung 55 Inches Television Giveaway Winner! (May 22, 2020)",
                      desc: " - was the winner on May 22, 2020, WinWithSamsung.org. In the midst of the COVID-19 lockdown, the world felt uncertain and...",
                      descTitle: "Natasha Higgs",
                      isHome: !0,
                      delayedProject: 1.5,
                      yTranslate: 0,
                      aspectRatioImage: t
                        ? 6.5 / 8.5
                        : e
                        ? 6.5 / 8.5
                        : 3.27 / 4.27,
                    }),
                    (0, n.jsx)(l.t, {
                      url: "https://vimeo.com/983299812?share=copy",
                      thumbnailDesktop: "master-pos.png",
                      thumbnailTablet: "master-pos.png",
                      thumbnailMobile: "master-pos.png",
                      title:
                        "How Mr. Young Rich and Mr. Romeo Made Jeremy Win the 2023 WinWithSamsung Giveaway",
                      classes: "project-3",
                      desc: " we love creating unforgettable moments and surprising our fans with fantastic prizes. Our 2023 giveaway was no exception, and this time...",
                      descTitle: "At WinWithSamsung,",
                      isHome: !0,
                      delayedProject: 0.25,
                      yTranslate: t ? -214 : 0,
                      aspectRatioImage: 6.5 / 8.5,
                    }),
                    (0, n.jsx)(l.t, {
                      url: "https://vimeo.com/983311408?share=copy",
                      thumbnailDesktop: "the-swag.png",
                      thumbnailTablet: "the-swag.png",
                      thumbnailMobile: "the-swag.png",
                      title:
                        "Honorable Mentions: Celebrating the Impact of WinWithSamsung Giveaways (2000-2024)",
                      classes: "project-card-350 project-4",
                      desc: " in 2000, our journey has been filled with countless stories of joy, gratitude, and...",
                      descTitle: "Since the inception of WinWithSamsung - ",
                      isHome: !0,
                      rotate: !0,
                      delayedProject: 1,
                      marginViewport: "105px",
                      yTranslate: t ? -40 : 0,
                      aspectRatioImage: 1.04,
                    }),
                  ],
                }),
                (0, n.jsx)("div", { className: "project-overlay" }),
              ],
            }),
          ],
        });
      }
    },
    2340: function (e, t) {
      t.Z = {
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
    348: function (e, t, a) {
      a.d(t, {
        Uo: function () {
          return i;
        },
        Im: function () {
          return n.Z;
        },
        Qf: function () {
          return r;
        },
        a$: function () {
          return s;
        },
      });
      var n = a(2340),
        s = {
          hidden: { opacity: 0.01 },
          show: function (e) {
            var t = e || {};
            return {
              opacity: 1,
              transition: {
                delayChildren: t.delayChildren || 0.4,
                staggerChildren: t.staggerChildren || 0.5,
              },
            };
          },
        },
        r = {
          hidden: { opacity: 0, y: -50 },
          show: function (e) {
            var t = e || {};
            return {
              opacity: 1,
              y: 0,
              transition: {
                ease: [0.42, 0, 0.58, 1],
                duration: t.duration || 1,
                delay: t.delayed || 0,
              },
            };
          },
        },
        i = {
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
    6410: function (e, t, a) {
      a.d(t, {
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
      var n = a(1309),
        s = a(7294);
      function useMediaQuery(e) {
        var t = (0, n._)((0, s.useState)(!1), 2),
          a = t[0],
          r = t[1];
        return (
          (0, s.useEffect)(
            function () {
              var t = window.matchMedia(e);
              t.matches !== a && r(t.matches);
              var listener = function () {
                r(t.matches);
              };
              return (
                t.addListener(listener),
                function () {
                  return t.removeListener(listener);
                }
              );
            },
            [a, e]
          ),
          a
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
