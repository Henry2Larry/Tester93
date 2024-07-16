"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1523],
  {
    1523: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return EventCards;
          },
        });
      var a = n(5893),
        i = n(8963);
      n(7294);
      var s = n(5979),
        l = n(2546);
      function EventCards() {
        return (0, a.jsx)("div", {
          className: "event-card-wrapper",
          children: (0, a.jsxs)(i.E.div, {
            className: "event-cards",
            variants: l.Z,
            custom: 1.1,
            initial: "hidden",
            whileInView: "show",
            viewport: { once: !0 },
            children: [
              (0, a.jsx)(s.K7, {
                title: "WinWithSamsung Community Day",
                desc: "Join us for a day of fun-filled activities and giveaways! This event celebrates our community's spirit and generosity. Enjoy interactive games, live music, and delicious food. Everyone has a chance to win exciting prizes, creating lasting memories and strengthening community bonds.",
                thumbnail: "/assets/event/event-1-mobile.jpg",
                thumbnailTablet: "/assets/event/event-1-mobile.jpg.jpg",
                thumbnailMobile: "/assets/event/event-1-mobile.jpg",
              }),
              (0, a.jsx)(s.K7, {
                title: "Staycation & Holiday",
                desc: "Staycation & Holiday events are intended to connect & \n          collaborate to have fun with the team Dipa Inhouse.\n          ",
                thumbnail: "/assets/event/event-2-mobile.jpg",
                thumbnailTablet: "/assets/event/event-2-mobile.jpg",
                thumbnailMobile: "/assets/event/event-2-mobile.jpg",
              }),
              (0, a.jsx)(s.K7, {
                title: "Samsung Tech Showcase",
                desc: "Dive into the future of technology with our Samsung Tech Showcase event. Explore the latest innovations in smartphones, smart home devices, and more. Engage with tech experts, participate in hands-on demos, and learn about the cutting-edge features that redefine everyday living. Don't miss out on exclusive giveaways and special offers!",
                thumbnail: "/assets/event/event-3-mobile.jpg",
                thumbnailTablet: "/assets/event/event-3-mobile.jpg",
                thumbnailMobile: "/assets/event/event-3-mobile.jpg",
              }),
              (0, a.jsx)(s.K7, {
                title: "Samsung Galaxy Unveiling Event",
                desc: "Be among the first to witness the unveiling of the latest Samsung Galaxy devices. Join us for an evening of anticipation and excitement as we reveal groundbreaking features and sleek designs. Experience hands-on demos, expert insights, and exclusive giveaways. This event is your gateway to the future of mobile technology.",
                thumbnail: "/assets/event/event-4-mobile.jpg",
                thumbnailTablet: "/assets/event/event-4-mobile.jpg",
                thumbnailMobile: "/assets/event/event-4-mobile.jpg",
              }),
            ],
          }),
        });
      }
    },
    2546: function (e, t) {
      t.Z = {
        hidden: { opacity: 0 },
        show: function (e) {
          var t = e || {},
            n = t.delayed;
          return {
            opacity: 1,
            transition: {
              delayChildren: t.delayChildren || 0.5,
              staggerChildren: t.staggerChildren || 0.6,
              delayed: n || 0,
            },
          };
        },
      };
    },
  },
]);
