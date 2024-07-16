"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5172],
  {
    5172: function (e, n, o) {
      o.r(n),
        o.d(n, {
          default: function () {
            return ModalPlayerVideo;
          },
        });
      var r = o(5893),
        s = o(2004),
        a = o(3935),
        l = o(7294);
      function ModalPlayerVideo(e) {
        var n = e.isPlaying,
          o = e.isShow,
          d = e.onClose,
          t = e.onEndedVideo,
          c = e.handlePlayVideo,
          i = e.handlePauseVideo,
          u = e.setOnProgresPlayed,
          f = e.setOnProgresPlayedSecond,
          y = (0, l.useRef)(null),
          v = (0, l.useCallback)(
            function (e) {
              var r = e.keyCode;
              return o && 32 === r
                ? (e.preventDefault(), n)
                  ? i()
                  : c()
                : null;
            },
            [n, o]
          );
        return (
          (0, l.useEffect)(
            function () {
              return (
                window.addEventListener("keydown", v),
                function () {
                  window.removeEventListener("keydown", v);
                }
              );
            },
            [v]
          ),
          (0, l.useEffect)(function () {
            y.current = document.querySelector("#root");
          }, []),
          y.current &&
            a.createPortal(
              (0, r.jsx)("div", {
                className: "modal-video-player ".concat(!o && "d-none"),
                children: (0, r.jsxs)("div", {
                  className: "modal-video-wrapper",
                  children: [
                    (0, r.jsx)("button", {
                      type: "button",
                      className: "btn-close",
                      onClick: d,
                      children: (0, r.jsx)("img", {
                        src: "/assets/svg/ic-close-modal.svg",
                        alt: "",
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: "react-player",
                      children: (0, r.jsx)(s.Z, {
                        playing: n,
                        url: "ads-video.mp4",
                        onEnded: t,
                        onProgress: function (e) {
                          u(e.played), f(e.playedSeconds);
                        },
                        controls: !0,
                      }),
                    }),
                  ],
                }),
              }),
              y.current
            )
        );
      }
    },
  },
]);
