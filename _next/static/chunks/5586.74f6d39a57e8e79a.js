"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5586, 4254],
  {
    3056: function (e, n, r) {
      r.d(n, {
        NZ: function () {
          return a;
        },
        V1: function () {
          return i;
        },
        ch: function () {
          return c;
        },
      });
      var t = r(5152),
        u = r.n(t),
        a = u()(
          function () {
            return Promise.all([r.e(8963), r.e(1279)]).then(r.bind(r, 1279));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [1279];
              },
            },
          }
        ),
        i = u()(
          function () {
            return Promise.all([r.e(8963), r.e(1664), r.e(8835)]).then(
              r.bind(r, 8835)
            );
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [8835];
              },
            },
          }
        );
      u()(
        function () {
          return Promise.all([r.e(8963), r.e(4845)]).then(r.bind(r, 4845));
        },
        {
          loadableGenerated: {
            webpack: function () {
              return [4845];
            },
          },
        }
      );
      var c = u()(
        function () {
          return Promise.all([r.e(8963), r.e(5546)]).then(r.bind(r, 5546));
        },
        {
          loadableGenerated: {
            webpack: function () {
              return [5546];
            },
          },
        }
      );
    },
    5586: function (e, n, r) {
      r.r(n),
        r.d(n, {
          default: function () {
            return Layout;
          },
        });
      var t = r(5893),
        u = r(5152),
        a = r.n(u),
        i = r(5617),
        c = r(1163),
        o = r(3056),
        l = a()(
          function () {
            return Promise.all([r.e(1664), r.e(4668)]).then(r.bind(r, 4668));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [4668];
              },
            },
          }
        ),
        d = a()(
          function () {
            return r.e(9166).then(r.bind(r, 9166));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [9166];
              },
            },
          }
        );
      function Layout(e) {
        var n = e.children,
          r = (0, c.useRouter)(),
          u = (0, i.v9)(function (e) {
            return e.splashScreenReducer;
          });
        return (0, t.jsxs)("div", {
          className: "main-layout",
          children: [
            "/404" !== r.pathname && u.splashSreen && (0, t.jsx)(o.ch, {}),
            (0, t.jsx)(d, {}),
            (0, t.jsx)("main", { children: n }),
            (0, t.jsx)(l, {}),
          ],
        });
      }
    },
  },
]);
