"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4888],
  {
    4888: function (t, a, i) {
      i.r(a);
      var l = i(5893);
      i(7294);
      var e = i(8963),
        o = i(1544),
        n = i(512),
        p = i(5675),
        c = i.n(p);
      o.Z.tablet, o.Z.laptop;
      var w = {
          hidden: { opacity: 0, y: 0 },
          show: {
            y: 0,
            opacity: 1,
            transition: {
              delayChildren: 2.75,
              duration: 1,
              staggerChildren: 0.3,
            },
          },
        },
        s = {
          hidden: { opacity: 0, y: 50, scale: 0.75 },
          show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.75 } },
        };
      a.default = function (t) {
        var a = t.backgroundImage,
          i = t.illustration;
        return (0, l.jsx)(e.E.div, {
          className:
            "tw-relative tw-overflow-hidden tw-max-w-[1440px] tw-m-auto tw-py-[48px] sm:tw-py-[64px] xl:tw-py-[125px]",
          initial: "hidden",
          whileInView: "show",
          viewport: { once: !0 },
          variants: w,
          style: { background: a },
          children: (0, l.jsx)("div", {
            className:
              "tw-w-full tw-max-w-[327px] sm:tw-max-w-[640px] xl:tw-max-w-[1120px] tw-m-auto",
            children: (0, l.jsx)(e.E.div, {
              className: (0, n.Z)(
                "tw-relative tw-w-full tw-pt-[calc(196/327*100%)] sm:tw-pt-[calc(382/640*100%)] xl:tw-pt-[calc(670/1120*100%)]"
              ),
              style: {},
              variants: s,
              children: (0, l.jsx)(c(), {
                src: i,
                className:
                  "tw-w-full tw-h-full tw-object-cover tw-object-center",
                alt: "",
                fill: !0,
              }),
            }),
          }),
        });
      };
    },
    1544: function (t, a) {
      var i = {
          mobileS: "320px",
          mobileM: "375px",
          mobileL: "425px",
          tabletS: "576px",
          tablet: "768px",
          laptopS: "992px",
          laptop: "1024px",
          laptopM: "1200px",
          laptopL: "1440px",
          desktop: "2560px",
        },
        l = {
          mobileS: "(min-width: ".concat(i.mobileS, ")"),
          mobileM: "(min-width: ".concat(i.mobileM, ")"),
          mobileL: "(min-width: ".concat(i.mobileL, ")"),
          tabletS: "(min-width: ".concat(i.tabletS, ")"),
          tablet: "(min-width: ".concat(i.tablet, ")"),
          laptopS: "(min-width: ".concat(i.laptopS, ")"),
          laptop: "(min-width: ".concat(i.laptop, ")"),
          laptopM: "(min-width: ".concat(i.laptopM, ")"),
          laptopL: "(min-width: ".concat(i.laptopL, ")"),
          desktop: "(min-width: ".concat(i.desktop, ")"),
        };
      a.Z = l;
    },
    512: function (t, a, i) {
      a.Z = function () {
        for (var t, a, i = 0, l = ""; i < arguments.length; )
          (t = arguments[i++]) &&
            (a = (function r(t) {
              var a,
                i,
                l = "";
              if ("string" == typeof t || "number" == typeof t) l += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t))
                  for (a = 0; a < t.length; a++)
                    t[a] && (i = r(t[a])) && (l && (l += " "), (l += i));
                else for (a in t) t[a] && (l && (l += " "), (l += a));
              }
              return l;
            })(t)) &&
            (l && (l += " "), (l += a));
        return l;
      };
    },
  },
]);
