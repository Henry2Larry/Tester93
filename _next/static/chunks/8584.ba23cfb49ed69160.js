"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8584],
  {
    8584: function (e, n, a) {
      a.r(n),
        a.d(n, {
          default: function () {
            return JumbrotonPlayer;
          },
        });
      var t = a(1309),
        s = a(5893),
        o = a(5675),
        i = a.n(o),
        r = a(7294),
        l = a(8963),
        c = a(2004),
        u = a(1161),
        d = a(5152),
        f = a.n(d),
        v = a(348),
        h = f()(
          function () {
            return a.e(5172).then(a.bind(a, 5172));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [5172];
              },
            },
          }
        );
      function JumbrotonPlayer() {
        var e = (0, r.useRef)(),
          n = (0, t._)((0, r.useState)(!1), 2),
          a = n[0],
          o = n[1],
          d = (0, t._)((0, r.useState)("NpEaa2P7qZI"), 2),
          f = d[0],
          p = d[1],
          y = (0, t._)((0, r.useState)(!1), 2),
          m = y[0],
          b = y[1],
          j = (0, t._)((0, r.useState)(!1), 2),
          _ = j[0],
          w = j[1],
          x = (0, t._)((0, r.useState)(0), 2),
          P = x[0],
          g = x[1],
          N = (0, t._)((0, r.useState)(0), 2),
          E = N[0],
          S = N[1],
          k = (0, t._)((0, r.useState)(!1), 2),
          V = k[0],
          C = k[1];
        function handlePlayVideo() {
          p("".concat(f, "?autoplay=1")), b(!0), C(!1), o(!0);
        }
        (0, u.Z)(a),
          (0, r.useEffect)(
            function () {
              return P > 0 && P < 1 ? w(!0) : w(!1);
            },
            [P]
          );
        var Z = (0, t._)((0, r.useState)(!1), 2),
          H = Z[0],
          I = Z[1];
        return (
          (0, r.useEffect)(
            function () {
              H && e.current.seekTo(E, "seconds");
            },
            [H, E]
          ),
          (0, r.useEffect)(function () {
            I(!0);
          }, []),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(l.E.div, {
                className: "jumbotron-player",
                variants: v.Im,
                custom: { duration: 0.95 },
                children: (0, s.jsxs)("div", {
                  className: "jumbotron-player__preview",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "preview-wrapper ".concat(
                        (m || _) && "d-none"
                      ),
                      children: [
                        (0, s.jsx)("div", {
                          className: "container-btn-play-pause",
                          children: (0, s.jsx)(l.E.button, {
                            className: "play-btn",
                            "aria-label": "button-play-video-jumbroton",
                            whileHover: {
                              scale: 1.1,
                              transition: { duration: 0.25 },
                            },
                            onClick: function () {
                              return handlePlayVideo();
                            },
                            children: (0, s.jsx)("img", {
                              src: "/assets/svg/ic-play.svg",
                              alt: "",
                            }),
                          }),
                        }),
                        (0, s.jsx)("div", {
                          className: "jumbotron-player__overlay",
                        }),
                        (0, s.jsx)(i(), {
                          className: "img-fluid",
                          src: "../assets/video-preview.png",
                          alt: "Video Preview",
                          width: 1120,
                          height: 628,
                          sizes: "100vw",
                          priority: !0,
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: "video-wrapper ".concat(
                        ((!m && !_) || V) && "d-none"
                      ),
                      children: [
                        (0, s.jsx)("div", {
                          className: "container-btn-play-pause",
                          children: (0, s.jsx)(l.E.button, {
                            className: "play-btn",
                            whileHover: {
                              scale: 1.1,
                              transition: { duration: 0.25 },
                            },
                            onClick: function () {
                              return handlePlayVideo();
                            },
                            children: (0, s.jsx)("img", {
                              src: "/assets/svg/ic-play.svg",
                              alt: "",
                            }),
                          }),
                        }),
                        (0, s.jsx)("div", {
                          className: "jumbotron-player__overlay",
                        }),
                        H &&
                          (0, s.jsx)(c.Z, {
                            ref: e,
                            width: "100%",
                            height: "100%",
                            url: "ads-video.mp4",
                          }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, s.jsx)(h, {
                isPlaying: m,
                isShow: a,
                onClose: function () {
                  b(!1), o(!1);
                },
                onEndedVideo: function () {
                  C(!0), b(!1);
                },
                handlePauseVideo: function () {
                  b(!1);
                },
                handlePlayVideo: function () {
                  return handlePlayVideo();
                },
                setOnProgresPlayed: g,
                setOnProgresPlayedSecond: S,
              }),
            ],
          })
        );
      }
    },
    1161: function (e, n, a) {
      var t = a(7294);
      n.Z = function (e) {
        (0, t.useEffect)(
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
