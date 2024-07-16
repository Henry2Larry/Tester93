"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5796],
  {
    5796: function (e, a, n) {
      n.r(a);
      var r = n(5893);
      n(7294);
      var c = n(1664),
        s = n.n(c),
        l = n(1163);
      a.default = function (e) {
        var a = e.href,
          n = e.value,
          c = (0, l.useRouter)().pathname;
        return (0, r.jsx)("li", {
          className: "nav-item",
          children: (0, r.jsx)(s(), {
            href: a,
            legacyBehavior: !0,
            children: (0, r.jsx)("a", {
              href: a,
              className: "".concat(c === a ? "active" : "", " nav-link p-0"),
              children: n,
            }),
          }),
        });
      };
    },
  },
]);
