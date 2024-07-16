"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7080],
  {
    7080: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return Header_Desktop;
          },
        });
      var n = a(1309),
        r = a(2729),
        l = a(5893),
        s = a(5152),
        c = a.n(s),
        i = a(8963),
        o = a(1163),
        u = a(1664),
        d = a.n(u),
        v = a(4141),
        b = a(7294);
      function _templateObject() {
        var e = (0, r._)([""]);
        return (
          (_templateObject = function () {
            return e;
          }),
          e
        );
      }
      var m = v.ZP.a(_templateObject());
      function Button_templateObject() {
        var e = (0, r._)([""]);
        return (
          (Button_templateObject = function () {
            return e;
          }),
          e
        );
      }
      var h = v.ZP.button(Button_templateObject());
      function Desktop_templateObject() {
        var e = (0, r._)([""]);
        return (
          (Desktop_templateObject = function () {
            return e;
          }),
          e
        );
      }
      var f = c()(
          function () {
            return a.e(5796).then(a.bind(a, 5796));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [5796];
              },
            },
          }
        ),
        p = (0, v.ZP)(h)(Desktop_templateObject()),
        Header_Desktop = function (e) {
          var t = e.handleToggleMenu;
          (0, o.useRouter)().pathname;
          var a = (0, n._)((0, b.useState)(0), 2),
            r = a[0],
            s = a[1],
            c = (0, n._)((0, b.useState)(""), 2),
            u = c[0],
            v = c[1];
          (0, b.useEffect)(function () {
            s(document.scrollingElement.scrollHeight);
          }, []);
          var h = (0, b.useCallback)(
            function () {
              r > window.scrollY ? v("up") : r < window.scrollY && v("down"),
                s(window.scrollY < 1 ? 1 : window.scrollY);
            },
            [r]
          );
          return (
            (0, b.useEffect)(
              function () {
                return (
                  window.addEventListener("scroll", h),
                  function () {
                    window.removeEventListener("scroll", h);
                  }
                );
              },
              [h]
            ),
            (0, l.jsx)(i.E.nav, {
              custom: u,
              className:
                "navbar navbar-expand-lg navbar-light fixed-top scrolled",
              style: {
                top: "up" === u ? "0px" : "down" === u ? "-96px" : "0px",
                transitionDuration: "0.65s",
                transitionTimingFunction: "ease",
              },
              children: (0, l.jsxs)("div", {
                className: "container",
                children: [
                  (0, l.jsx)(d(), {
                    href: "/",
                    legacyBehavior: !0,
                    children: (0, l.jsx)("a", {
                      href: "/",
                      className: "navbar-brand",
                      "aria-label": "Link back to homepage",
                      children: (0, l.jsx)("img", {
                        src: "/logo.png",
                        width: "1900",
                        className: "w-1000",
                        alt: "",
                      }),
                    }),
                  }),
                  (0, l.jsxs)("div", {
                    className: "ml-0 mr-auto tw-flex tw-items-center",
                    children: [
                      (0, l.jsx)(m, {
                        href: "https://forms.zohopublic.ca/winwithsamsung/form/WinWithSamsungorgRegistrationForm/formperma/VtrsVHQTAftl4KIpz44wrYeoAfaT68_UScS0K7TqP3Q",
                        className: "cta-btn cta-btn-mobile d-lg-none",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "Claim Your Win",
                      }),
                      (0, l.jsx)(p, {
                        className: "border-0 navbar-toggler",
                        type: "button",
                        "aria-controls": "navbarNav",
                        onClick: t,
                        "aria-expanded": "false",
                        "aria-label": "Toggle navigation",
                        children: (0, l.jsx)("img", {
                          src: "/assets/svg/ic-bars.svg",
                          width: "24",
                          height: "24",
                          alt: "",
                        }),
                      }),
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className: "collapse navbar-collapse",
                    id: "navbarNav",
                    children: (0, l.jsxs)("ul", {
                      className: "navbar-nav ms-auto align-items-lg-center",
                      children: [
                        (0, l.jsx)(f, {
                          href: "/projects",
                          value: "Upcoming Giveaways",
                        }),
                        (0, l.jsx)(f, {
                          href: "/services",
                          value: "Testimonials",
                        }),
                        (0, l.jsx)(f, { href: "/the-team", value: "Our Team" }),
                        (0, l.jsx)(f, {
                          href: "/career",
                          value: "Contact Us",
                        }),
                        (0, l.jsx)(f, {
                          href: "https://api.whatsapp.com/send/?phone=18574100991&text&type=phone_number&app_absent=0",
                          value: "Quick Chat (Whatsapp)",
                        }),
                        (0, l.jsx)("li", {
                          className: "nav-item d-none d-lg-block",
                          children: (0, l.jsx)(m, {
                            className: "nav-link cta-btn cta-btn-lg",
                            href: "https://forms.zohopublic.ca/winwithsamsung/form/WinWithSamsungorgRegistrationForm/formperma/VtrsVHQTAftl4KIpz44wrYeoAfaT68_UScS0K7TqP3Q",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "Claim Your Win",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            })
          );
        };
    },
  },
]);
