"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5546],
  {
    5546: function (C, i, t) {
      t.r(i),
        t.d(i, {
          default: function () {
            return components_SplashScreen;
          },
        });
      var e = t(5893),
        n = t(8963),
        a = t(7294),
        s = t(5617),
        h = {
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              duration: 0.25,
              ease: "easeIn",
              staggerChildren: 0.05,
            },
          },
        },
        l = {
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { duration: 0.2, ease: "easeIn" } },
        },
        /**Logo loading */
        
        },
        o = {
          hidden: { y: 0 },
          show: { y: 100, transition: { delay: 0.9, duration: 0.375 } },
        },
        r = {
          hidden: { opacity: 1 },
          show: { opacity: 0, transition: { delay: 0.9, duration: 0.325 } },
        },
        components_SplashScreen = function () {
          var C = (0, s.I0)();
          return (
            (0, a.useEffect)(function () {
              setTimeout(function () {
                return C({ type: "SET_SPLASH_SCREEN", payload: !1 });
              }, 1100);
            }, []),
            (0, e.jsx)(n.E.div, {
              style: {
                position: "fixed",
                background: "#006FF9",
                top: "0px",
                left: "0px",
                right: "0px",
                width: "100%",
                height: "100%",
                zIndex: "1500",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
              },
              variants: r,
              initial: "hidden",
              whileInView: "show",
              viewport: { once: !0 },
              children: (0, e.jsx)(n.E.div, {
                variants: o,
                initial: "hidden",
                whileInView: "show",
                viewport: { once: !0 },
                children: (0, e.jsx)(SplashScreen_LogoDipa, {}),
              }),
            })
          );
        };
    },
  },
]);
