"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2453],
  {
    8335: function (i, s, r) {
      r.r(s),
        r.d(s, {
          default: function () {
            return Designs;
          },
        });
      var t = r(5893),
        e = r(5675),
        o = r.n(e),
        n = r(8963);
      r(7294);
      var l = r(3056),
        a = JSON.parse(
          '[{"url":"https://dribbble.com/shots/17944737-Central-Saas-Landing-Page","imgSrc":"/assets/img/portfolio-dribble/image1.png"},{"url":"https://dribbble.com/shots/17688860-Zenith-Landing-Page","imgSrc":"/assets/img/portfolio-dribble/image2.png"},{"url":"https://dribbble.com/shots/17289449-Cryptonet-Landing-Page","imgSrc":"/assets/img/portfolio-dribble/image3.png"},{"url":"https://dribbble.com/shots/17471424-Analize-Web-App","imgSrc":"/assets/img/portfolio-dribble/image4.png"},{"url":"https://dribbble.com/shots/17366555-Talenta-Landing-Page","imgSrc":"/assets/img/portfolio-dribble/image5.png"},{"url":"https://dribbble.com/shots/14347884-Living-Landing-Page","imgSrc":"/assets/img/portfolio-dribble/image6.png"},{"url":"https://dribbble.com/shots/14996990-Futura-Landing-Page","imgSrc":"/assets/img/portfolio-dribble/image7.png"},{"url":"https://dribbble.com/shots/16746267-Weblitics-Web-App","imgSrc":"/assets/img/portfolio-dribble/image8.png"},{"url":"https://dribbble.com/shots/14650821-Socialup-Landing-Page","imgSrc":"/assets/img/portfolio-dribble/image9.png"},{"url":"https://dribbble.com/shots/15515921-PayUp-Landing-Page","imgSrc":"/assets/img/portfolio-dribble/image10.png"},{"url":"https://dribbble.com/shots/16835157-Weblitics-Landing-Page","imgSrc":"/assets/img/portfolio-dribble/image11.png"},{"url":"https://dribbble.com/shots/14931105-Loanup-Web-App","imgSrc":"/assets/img/portfolio-dribble/image12.png"},{"url":"https://dribbble.com/shots/15820673-Splitup-Mobile-App","imgSrc":"/assets/img/portfolio-dribble/image13.png"},{"url":"https://dribbble.com/shots/17787545-DNFT-Web-App","imgSrc":"/assets/img/portfolio-dribble/image15.png"}]'
        ),
        g = JSON.parse(
          '[{"url":"https://dribbble.com/shots/17121221-NFT-Marketplace-Web-App","imgSrc":"/assets/img/portfolio-dribble/down/image1.png"},{"url":"https://dribbble.com/shots/16979429-Invester-Landing-Page","imgSrc":"/assets/img/portfolio-dribble/image2.png"},{"url":"https://dribbble.com/shots/16024339-Stockup-Web-App","imgSrc":"/assets/img/portfolio-dribble/image3.png"},{"url":"https://dribbble.com/shots/16769561--Stoxxy-Stock-market-app","imgSrc":"/assets/img/portfolio-dribble/image4.png"},{"url":"https://dribbble.com/shots/17297982-Builder-Web-App","imgSrc":"/assets/img/portfolio-dribble/image5.png"},{"url":"https://dribbble.com/shots/14888384-Learnup-Mobile-App","imgSrc":"/assets/img/portfolio-dribble/image6.png"},{"url":"https://dribbble.com/shots/17167190-Better-Landing-Page","imgSrc":"/assets/img/portfolio-dribble/image7.png"},{"url":"https://dribbble.com/shots/17394219-Finance-Mobile-App","imgSrc":"/assets/img/portfolio-dribble/image8.png"},{"url":"https://dribbble.com/shots/15948086-Online-Shop-Platform-E-commerce-Landing-Page","imgSrc":"/assets/img/portfolio-dribble/image9.png"},{"url":"https://dribbble.com/shots/17586069-Neofin-Dashboard-Exploration","imgSrc":"/assets/img/portfolio-dribble/image10.png"},{"url":"https://dribbble.com/shots/15601838-SlyChat-Landing-Page-AI-Conversation","imgSrc":"/assets/img/portfolio-dribble/image12.png"},{"url":"https://dribbble.com/shots/16722260-Protox-HR-Landing-Page","imgSrc":"/assets/img/portfolio-dribble/down/image13.png"},{"url":"https://dribbble.com/shots/17238601-Remarkt-Landing-Page-Analytics-for-Sales","imgSrc":"/assets/img/portfolio-dribble/image16.png"}]'
        ),
        p = {
          hidden: { opacity: 0.9, x: 0 },
          show: {
            opacity: 0.9,
            x: [-6710, -445],
            transition: { ease: "linear", repeat: 1 / 0, duration: 70 },
          },
        },
        b = {
          hidden: { opacity: 0.9, x: 0 },
          show: {
            x: [0, -5820],
            opacity: 0.9,
            transition: { ease: "linear", repeat: 1 / 0, duration: 72.5 },
          },
        };
      function DesignCard(i) {
        var s = i.src,
          r = i.url,
          e = i.loading,
          l = i.priority;
        return (0, t.jsx)(n.E.a, {
          className: "design-card",
          whileHover: { scale: 1.04 },
          href: r,
          target: "_blank",
          children: (0, t.jsx)(o(), {
            className: "img-fluid",
            src: s,
            alt: "Design Porto",
            width: 400,
            height: 300,
            sizes: "100vw",
            loading: e,
            priority: void 0 !== l && l,
          }),
        });
      }
      function DesingInspireUp(i) {
        var s = i.priority,
          r = i.loading;
        return (0, t.jsx)(t.Fragment, {
          children: a.map(function (i, e) {
            var o = i.url,
              n = i.imgSrc;
            return (0,
            t.jsx)(DesignCard, { url: o, src: n, priority: s, loading: r }, e);
          }),
        });
      }
      function DesignInspireBottom(i) {
        var s = i.priority,
          r = i.loading;
        return (0, t.jsx)(t.Fragment, {
          children: g.map(function (i, e) {
            var o = i.url,
              n = i.imgSrc;
            return (0,
            t.jsx)(DesignCard, { url: o, src: n, priority: s, loading: r }, e);
          }),
        });
      }
      function Designs() {
        return (0, t.jsxs)("div", {
          className: "all-designs",
          children: [
            (0, t.jsx)("div", {
              className: "container custom-container",
              children: (0, t.jsx)(l.NZ, {
                title:
                  "With Our giveaways, we helped these businesses start up",
                classes: "text-center mx-auto",
                toptext: "We can help yours too if you win our giveaway",
              }),
            }),
            (0, t.jsxs)("div", {
              className: "designs",
              children: [
                (0, t.jsx)(n.E.div, {
                  variants: p,
                  initial: "hidden",
                  whileInView: "show",
                  viewport: { once: !0 },
                  className: "tw-mb-[34px] md:tw-mb-[50px]",
                  children: (0, t.jsxs)("div", {
                    className: "design-row",
                    children: [
                      (0, t.jsx)(DesingInspireUp, { loading: "lazy" }),
                      (0, t.jsx)(DesingInspireUp, { loading: "lazy" }),
                    ],
                  }),
                }),
                (0, t.jsx)(n.E.div, {
                  variants: b,
                  initial: "hidden",
                  whileInView: "show",
                  viewport: { once: !0 },
                  className: "tw-mb-[34px] md:tw-mb-[42px] lg:tw-mb-[50px]",
                  children: (0, t.jsxs)("div", {
                    className: "design-row",
                    children: [
                      (0, t.jsx)(DesignInspireBottom, { loading: "lazy" }),
                      (0, t.jsx)(DesignInspireBottom, { loading: "lazy" }),
                    ],
                  }),
                }),
              ],
            }),
            (0, t.jsxs)(n.E.a, {
              href: "services.html",
              className: "btn btn-primary rounded-pill designs-link",
              whileHover: { y: -10, transition: { duration: 0.4 } },
              target: "_blank",
              children: [
                (0, t.jsx)("span", {
                  className: "fw-bold tw-mr-[3px]",
                  children: " Check More",
                }),
                " ",
                "\uD83C\uDFC0",
              ],
            }),
          ],
        });
      }
    },
  },
]);
