"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [806],
  {
    806: function (s, e, i) {
      i.r(e),
        i.d(e, {
          default: function () {
            return ProcessCards;
          },
        });
      var t = i(5893),
        a = i(8963);
      i(7294);
      var c = i(2406),
        l = {
          hidden: { opacity: 0.01 },
          show: {
            opacity: 1,
            transition: { delayChildren: 0.75, staggerChildren: 0.75 },
          },
        };
      function ProcessCards() {
        return (0, t.jsx)("div", {
          className: "process-cards development",
          children: (0, t.jsxs)(a.E.div, {
            className:
              "tw-flex tw-flex-wrap lg:tw-flex-nowrap tw-gap-8 sm:tw-gap-10 tw-justify-center",
            variants: l,
            initial: "hidden",
            whileInView: "show",
            viewport: { once: !0 },
            children: [
              (0, t.jsx)("div", {
                className: "tw-w-full sm:tw-w-fit lg:tw-pt-[160px]",
                children: (0, t.jsx)(c.WS, {
                  icon: "/assets/svg/services/step/ic-comment-flipped.svg",
                  iconTablet:
                    "/assets/svg/services/step/ic-comment-flipped.svg",
                  iconMobile:
                    "/assets/svg/services/step/ic-comment-flipped.svg",
                  title: "Step 1: Entry Collection",
                  lead: "Participants enter the giveaway by following specific rules and guidelines, such as submitting their details via a form, subscribing to a newsletter, following on social media, or engaging in promotional activities.",
                  imgClassName: "icon-lg",
                  delayed: 1,
                }),
              }),
              (0, t.jsx)("div", {
                className: "tw-w-full sm:tw-w-fit lg:tw-pt-[80px]",
                children: (0, t.jsx)(c.WS, {
                  icon: "/assets/svg/services/step/ic-lamp.svg",
                  iconTablet: "/assets/svg/services/step/ic-lamp.svg",
                  iconMobile: "/assets/svg/services/step/ic-lamp.svg",
                  title: "Random Selection",
                  lead: "All valid entries are compiled into a database. Using a random selection tool or software, a winner is chosen from the pool of entries. This ensures a fair and unbiased selection process.",
                  imgClassName: "icon-md",
                  delayed: 2,
                }),
              }),
              (0, t.jsx)("div", {
                className: "tw-w-full sm:tw-w-fit",
                children: (0, t.jsx)(c.WS, {
                  icon: "/assets/svg/services/step/ic-bucket.svg",
                  iconTablet: "/assets/svg/services/step/ic-bucket.svg",
                  iconMobile: "/assets/svg/services/step/ic-bucket.svg",
                  title: "Winner Announcement and Verification",
                  lead: "The selected winner is contacted via the provided contact information. The winner’s entry is verified for compliance with the giveaway rules. Once verified, the winner is publicly announced, and the prize is delivered.",
                  imgClassName: "icon-md",
                  delayed: 3,
                }),
              }),
            ],
          }),
        });
      }
    },
  },
]);
