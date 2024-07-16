"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9089],
  {
    9089: function (e, s, c) {
      c.r(s),
        c.d(s, {
          default: function () {
            return MobileMenu;
          },
        });
      var i = c(5893);
      c(7294);
      var r = c(1664),
        a = c.n(r),
        l = c(1163);
      function MobileMenu(e) {
        var s = e.isToggled,
          c = e.handleToggleMenu,
          r = (0, l.useRouter)().pathname;
        return (0, i.jsxs)("div", {
          className: "mobile-menu ".concat(s && "show"),
          children: [
            (0, i.jsx)("div", {
              className: "container",
              children: (0, i.jsxs)("div", {
                className:
                  "d-flex align-items-center justify-content-between mobile-head",
                children: [
                  (0, i.jsx)("img", {
                    src: "/assets/logo.svg",
                    width: "190",
                    alt: "",
                  }),
                  (0, i.jsx)("button", {
                    type: "button",
                    className: "btn-close",
                    onClick: c,
                    children: (0, i.jsx)("img", {
                      src: "/assets/svg/ic-close",
                      alt: "",
                    }),
                  }),
                ],
              }),
            }),

            (0, i.jsx)("div", {
              className: "menus",
              children: (0, i.jsxs)("ul", {
                children: [
                  (0, i.jsx)("li", {
                    children: (0, i.jsx)(a(), {
                      href: "../index.html",
                      legacyBehavior: !0,
                      children: (0, i.jsx)("a", {
                        href: "../index.html",
                        className: "".concat("/projects" === r && "active"),
                        children: "Home",
                      }),
                    }),
                  }),
                  (0, i.jsx)("li", {
                    children: (0, i.jsx)(a(), {
                      href: "/projects",
                      legacyBehavior: !0,
                      children: (0, i.jsx)("a", {
                        href: "/projects",
                        className: "".concat("/projects" === r && "active"),
                        children: "Upcoming Giveaways",
                      }),
                    }),
                  }),
                  (0, i.jsx)("li", {
                    children: (0, i.jsx)(a(), {
                      href: "/services",
                      legacyBehavior: !0,
                      children: (0, i.jsx)("a", {
                        href: "/services",
                        className: "".concat("/services" === r && "active"),
                        children: "Testimonials",
                      }),
                    }),
                  }),
                  (0, i.jsx)("li", {
                    children: (0, i.jsx)(a(), {
                      href: "/the-team",
                      legacyBehavior: !0,
                      children: (0, i.jsx)("a", {
                        href: "/the-team",
                        className: "".concat("/the-team" === r && "active"),
                        children: "Our Team",
                      }),
                    }),
                  }),
                  (0, i.jsx)("li", {
                    children: (0, i.jsx)(a(), {
                      href: "/insight",
                      legacyBehavior: !0,
                      children: (0, i.jsx)("a", {
                        href: "/insight",
                        className: "".concat("/insight" === r && "active"),
                        children: "About Us",
                      }),
                    }),
                  }),
                  (0, i.jsx)("li", {
                    children: (0, i.jsx)(a(), {
                      href: "/career",
                      legacyBehavior: !0,
                      children: (0, i.jsx)("a", {
                        href: "https://api.whatsapp.com/send/?phone=18574100991&text&type=phone_number&app_absent=0",
                        className: "".concat("/career" === r && "active"),
                        children: "Quick Chat (Whatsapp)",
                      }),
                    }),
                  }),
                  (0, i.jsx)("li", {
                    children: (0, i.jsx)(a(), {
                      href: "/career",
                      legacyBehavior: !0,
                      children: (0, i.jsx)("a", {
                        href: "/career",
                        className: "".concat("/career" === r && "active"),
                        children: "Contact Us",
                      }),
                    }),
                  }),
                  (0, i.jsx)("li", {
                    children: (0, i.jsx)(a(), {
                      href: "https://forms.zohopublic.ca/winwithsamsung/form/WinWithSamsungorgRegistrationForm/formperma/VtrsVHQTAftl4KIpz44wrYeoAfaT68_UScS0K7TqP3Q",
                      className:
                        "text-white btn btn-primary fw-bold btn-cta-mobile rounded-pill",
                      target: "_blank",
                      rel: "noreferrer",
                      children: "Claim Your Win",
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
  },
]);
