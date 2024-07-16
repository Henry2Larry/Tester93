"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4187],
  {
    4187: function (s, i, l) {
      l.r(i);
      var a = l(5893);
      l(7294),
        (i.default = function (s) {
          var i = s.avatar,
            l = s.contentClassName,
            e = s.name,
            c = s.bio,
            n = s.review,
            t = s.logo,
            r = s.logoClassName,
            m = s.illustration;
          return (0, a.jsxs)("div", {
            className: "review-card",
            children: [
              (0, a.jsxs)("div", {
                className: "content ".concat(l),
                children: [
                  (0, a.jsxs)("div", {
                    className: "container__review",
                    children: [
                      (0, a.jsx)("p", {
                        className: "content__review",
                        children: n,
                      }),
                      (0, a.jsx)("div", {
                        className: "illustration illustration--md",
                        children: (0, a.jsx)("img", {
                          className: "illustration__img img-fluid",
                          src: m,
                          alt: m,
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "content__information-client",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "information-client__profile",
                        children: [
                          (0, a.jsx)("div", {
                            className: "profile__img",
                            children: (0, a.jsx)("img", {
                              src: i,
                              className: "img-fluid",
                              alt: e,
                            }),
                          }),
                          (0, a.jsx)("p", {
                            className: "profile__name",
                            children: e,
                          }),
                        ],
                      }),
                      (0, a.jsx)("span", {
                        className: "information-client__dots",
                        children: (0, a.jsx)("svg", {
                          width: "5",
                          height: "6",
                          viewBox: "0 0 5 6",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: (0, a.jsx)("circle", {
                            cx: "2.5",
                            cy: "3",
                            r: "2.5",
                            fill: "#161B2C",
                          }),
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className: "information-client__company",
                        children: [
                          (0, a.jsx)("div", {
                            className: "company__img ".concat(r),
                            children: (0, a.jsx)("img", {
                              src: t,
                              className: "img-fluid",
                              alt: "".concat(t, " logo"),
                            }),
                          }),
                          (0, a.jsx)("p", {
                            className: "company__title",
                            children: c,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "illustration illustration--sm--lg",
                children: (0, a.jsx)("img", {
                  className: "illustration__img img-fluid",
                  src: m,
                  alt: m,
                }),
              }),
            ],
          });
        });
    },
  },
]);
