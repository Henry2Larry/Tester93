"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9166],
  {
    9166: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return Header;
          },
        });
      var u = t(1309),
        o = t(5893),
        r = t(5152),
        a = t.n(r),
        c = t(7294),
        l = t(1161),
        f = t(1163),
        d = a()(
          function () {
            return Promise.all([t.e(1664), t.e(9089)]).then(t.bind(t, 9089));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [9089];
              },
            },
          }
        ),
        i = a()(
          function () {
            return Promise.all([
              t.e(8963),
              t.e(1664),
              t.e(7531),
              t.e(7080),
            ]).then(t.bind(t, 7080));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [7080];
              },
            },
          }
        );
      function Header() {
        var e = (0, f.useRouter)().pathname,
          n = (0, u._)((0, c.useState)(!1), 2),
          t = n[0],
          r = n[1];
        return (
          (0, l.Z)(t),
          (0, c.useEffect)(
            function () {
              r(!1);
            },
            [e]
          ),
          (0, o.jsxs)("header", {
            children: [
              (0, o.jsx)(i, {
                handleToggleMenu: function () {
                  r(!t);
                },
              }),
              (0, o.jsx)(d, {
                isToggled: t,
                handleToggleMenu: function () {
                  r(!t);
                },
              }),
            ],
          })
        );
      }
    },
    1161: function (e, n, t) {
      var u = t(7294);
      n.Z = function (e) {
        (0, u.useEffect)(
          function () {
            e
              ? (document.body.style.overflow = "hidden")
              : (document.body.style.overflow = "scroll");
          },
          [e]
        );
      };
    },
  },
]);
