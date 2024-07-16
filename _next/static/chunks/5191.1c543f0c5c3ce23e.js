"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5191],
  {
    5191: function (e, n, i) {
      i.r(n),
        i.d(n, {
          default: function () {
            return Overview;
          },
        });
      var s = i(5893),
        t = i(8963),
        r = i(1664),
        a = i.n(r),
        o = i(3086),
        c = i(348);
      function Stat(e) {
        var n = e.number,
          i = e.info;
        return (0, s.jsxs)(t.E.div, {
          className: "stat",
          variants: c.Im,
          children: [
            (0, s.jsxs)("h6", {
              className: "number",
              children: [" ", (0, s.jsx)(o.Z, { from: 0, to: Number(n) }), " "],
            }),
            (0, s.jsx)("p", { className: "info", children: i }),
          ],
        });
      }
      var l = (0, t.E)(a());
      function OverviewFooter(e) {
        var n = e.classes;
        return (0, s.jsxs)("div", {
          className: ["overview__footer", n].join(" "),
          children: [
            (0, s.jsx)(t.E.div, {
              variants: c.Qf,
              custom: { delayed: 1.75 },
              initial: "hidden",
              whileInView: "show",
              viewport: { once: !0 },
              children: (0, s.jsx)(l, {
                href: "/the-team",
                whileHover: { y: -10, transition: { duration: 0.4 } },
                legacyBehavior: !0,
                children: (0, s.jsx)("a", {
                  href: "/the-team",
                  className:
                    "btn btn-light fw-bold d-block d-md-inline-block rounded-pill btn-about",
                  children: "About us",
                }),
              }),
            }),
            (0, s.jsxs)(t.E.div, {
              className: "rating-clutch",
              variants: c.Qf,
              custom: { delayed: 2.5 },
              initial: "hidden",
              whileInView: "show",
              viewport: { once: !0 },
              children: [
                (0, s.jsxs)("div", {
                  className: "mb-2 d-flex align-items-center",
                  children: [
                    (0, s.jsx)("img", {
                      className: "me-3",
                      src: "/assets/logo-clutch.svg",
                      alt: "",
                    }),
                    (0, s.jsxs)("p", {
                      className: "m-0 rating",
                      children: [
                        (0, s.jsx)("span", {
                          className: "fw-bold me-1 percentage",
                          children: "4.9",
                        }),
                        (0, s.jsx)("span", {
                          className: "text",
                          children: "Rating on Clutch",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)("p", {
                  className: "text-secondary text-sf-pro",
                  style: { marginBottom: "0px", lineHeight: "22px" },
                  children: "Top Giveaway in NY",
                }),
              ],
            }),
          ],
        });
      }
      function Overview() {
        return (0, s.jsx)("div", {
          className: "overview",
          children: (0, s.jsxs)("div", {
            className: "container custom-container",
            children: [
              (0, s.jsxs)("div", {
                className: "overview__main",
                children: [
                  (0, s.jsx)("div", {
                    className: "overview__stats",
                    children: (0, s.jsxs)(t.E.div, {
                      className: "overview__stats__grid",
                      variants: c.a$,
                      initial: "hidden",
                      whileInView: "show",
                      viewport: { once: !0 },
                      children: [
                        " ",
                        (0, s.jsxs)(t.E.div, {
                          className: "stat",
                          variants: c.Im,
                          children: [
                            (0, s.jsx)("h6", {
                              className: "number",
                              children: (0, s.jsx)(o.Z, { from: 0, to: 15 }),
                            }),
                            (0, s.jsx)("p", {
                              className: "info",
                              children: "Designer",
                            }),
                          ],
                        }),
                        (0, s.jsx)(Stat, { number: 5, info: "Developer" }),
                        (0, s.jsx)(Stat, {
                          number: 2,
                          info: "Outreach Workers",
                        }),
                        (0, s.jsxs)(t.E.div, {
                          className: "stat",
                          variants: c.Im,
                          children: [
                            (0, s.jsxs)("h6", {
                              className: "number d-flex",
                              children: [
                                (0, s.jsx)(o.Z, { from: 0, to: 5 }),
                                " ",
                                "+",
                              ],
                            }),
                            (0, s.jsx)("p", {
                              className: "info",
                              children: "Years in Business",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)(t.E.div, {
                    className: "overview__content",
                    variants: c.Im,
                    initial: "hidden",
                    whileInView: "show",
                    viewport: { once: !0 },
                    children: (0, s.jsx)("p", {
                      children:
                        "At WinWithSamsung, not only do we offer the chance to win top-quality Samsung products, but we also provide cash prizes equivalent to the items won. We are committed to giving back to the community and spreading joy through every giveaway. Join us for the opportunity to win and experience the excitement!",
                    }),
                  }),
                ],
              }),
              (0, s.jsx)(OverviewFooter, {}),
            ],
          }),
        });
      }
    },
    2340: function (e, n) {
      n.Z = {
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
    348: function (e, n, i) {
      i.d(n, {
        Uo: function () {
          return a;
        },
        Im: function () {
          return s.Z;
        },
        Qf: function () {
          return r;
        },
        a$: function () {
          return t;
        },
      });
      var s = i(2340),
        t = {
          hidden: { opacity: 0.01 },
          show: function (e) {
            var n = e || {};
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
          show: function (e) {
            var n = e || {};
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
        a = {
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
    3086: function (e, n, i) {
      var s = i(5893),
        t = i(7294),
        r = i(2064),
        a = i(8963);
      n.Z = function (e) {
        var n = e.from,
          i = e.to,
          o = (0, t.useRef)(null);
        return (
          (0, t.useEffect)(
            function () {
              var e = (0, r.j)(n, i, {
                duration: 2,
                onUpdate: function (e) {
                  null !== o.current && (o.current.textContent = e.toFixed(0));
                },
              });
              return function () {
                return e.stop();
              };
            },
            [n, i]
          ),
          (0, s.jsx)(a.E.span, {
            ref: o,
            whileInView: "show",
            viewport: { once: !0 },
          })
        );
      };
    },
  },
]);
