(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2004],
  {
    9090: function (e) {
      function stdOnEnd(e, t) {
        (e.onload = function () {
          (this.onerror = this.onload = null), t(null, e);
        }),
          (e.onerror = function () {
            (this.onerror = this.onload = null),
              t(Error("Failed to load " + this.src), e);
          });
      }
      e.exports = function (e, t, r) {
        var n = document.head || document.getElementsByTagName("head")[0],
          o = document.createElement("script");
        "function" == typeof t && ((r = t), (t = {})),
          (t = t || {}),
          (r = r || function () {}),
          (o.type = t.type || "text/javascript"),
          (o.charset = t.charset || "utf8"),
          (o.async = !("async" in t) || !!t.async),
          (o.src = e),
          t.attrs &&
            (function (e, t) {
              for (var r in t) e.setAttribute(r, t[r]);
            })(o, t.attrs),
          t.text && (o.text = "" + t.text),
          ("onload" in o
            ? stdOnEnd
            : function (e, t) {
                e.onreadystatechange = function () {
                  ("complete" == this.readyState ||
                    "loaded" == this.readyState) &&
                    ((this.onreadystatechange = null), t(null, e));
                };
              })(o, r),
          o.onload || stdOnEnd(o, r),
          n.appendChild(o);
      };
    },
    845: function (e, t, r) {
      "use strict";
      r.r(t);
      var n =
        Number.isNaN ||
        function (e) {
          return "number" == typeof e && e != e;
        };
      function areInputsEqual(e, t) {
        if (e.length !== t.length) return !1;
        for (var r, o, i = 0; i < e.length; i++)
          if (!((r = e[i]) === (o = t[i]) || (n(r) && n(o)))) return !1;
        return !0;
      }
      t.default = function (e, t) {
        void 0 === t && (t = areInputsEqual);
        var r,
          n,
          o = [],
          i = !1;
        return function () {
          for (var a = [], l = 0; l < arguments.length; l++)
            a[l] = arguments[l];
          return (
            (i && r === this && t(a, o)) ||
              ((n = e.apply(this, a)), (i = !0), (r = this), (o = a)),
            n
          );
        };
      };
    },
    2703: function (e, t, r) {
      "use strict";
      var n = r(414);
      function emptyFunction() {}
      function emptyFunctionWithReset() {}
      (emptyFunctionWithReset.resetWarningCache = emptyFunction),
        (e.exports = function () {
          function shim(e, t, r, o, i, a) {
            if (a !== n) {
              var l = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((l.name = "Invariant Violation"), l);
            }
          }
          function getShim() {
            return shim;
          }
          shim.isRequired = shim;
          var e = {
            array: shim,
            bigint: shim,
            bool: shim,
            func: shim,
            number: shim,
            object: shim,
            string: shim,
            symbol: shim,
            any: shim,
            arrayOf: getShim,
            element: shim,
            elementType: shim,
            instanceOf: getShim,
            node: shim,
            objectOf: getShim,
            oneOf: getShim,
            oneOfType: getShim,
            shape: getShim,
            exact: getShim,
            checkPropTypes: emptyFunctionWithReset,
            resetWarningCache: emptyFunction,
          };
          return (e.PropTypes = e), e;
        });
    },
    5697: function (e, t, r) {
      e.exports = r(2703)();
    },
    414: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    9590: function (e) {
      var t = "undefined" != typeof Element,
        r = "function" == typeof Map,
        n = "function" == typeof Set,
        o = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
      e.exports = function (e, i) {
        try {
          return (function equal(e, i) {
            if (e === i) return !0;
            if (e && i && "object" == typeof e && "object" == typeof i) {
              var a, l, u, s;
              if (e.constructor !== i.constructor) return !1;
              if (Array.isArray(e)) {
                if ((a = e.length) != i.length) return !1;
                for (l = a; 0 != l--; ) if (!equal(e[l], i[l])) return !1;
                return !0;
              }
              if (r && e instanceof Map && i instanceof Map) {
                if (e.size !== i.size) return !1;
                for (s = e.entries(); !(l = s.next()).done; )
                  if (!i.has(l.value[0])) return !1;
                for (s = e.entries(); !(l = s.next()).done; )
                  if (!equal(l.value[1], i.get(l.value[0]))) return !1;
                return !0;
              }
              if (n && e instanceof Set && i instanceof Set) {
                if (e.size !== i.size) return !1;
                for (s = e.entries(); !(l = s.next()).done; )
                  if (!i.has(l.value[0])) return !1;
                return !0;
              }
              if (o && ArrayBuffer.isView(e) && ArrayBuffer.isView(i)) {
                if ((a = e.length) != i.length) return !1;
                for (l = a; 0 != l--; ) if (e[l] !== i[l]) return !1;
                return !0;
              }
              if (e.constructor === RegExp)
                return e.source === i.source && e.flags === i.flags;
              if (e.valueOf !== Object.prototype.valueOf)
                return e.valueOf() === i.valueOf();
              if (e.toString !== Object.prototype.toString)
                return e.toString() === i.toString();
              if ((a = (u = Object.keys(e)).length) !== Object.keys(i).length)
                return !1;
              for (l = a; 0 != l--; )
                if (!Object.prototype.hasOwnProperty.call(i, u[l])) return !1;
              if (t && e instanceof Element) return !1;
              for (l = a; 0 != l--; )
                if (
                  (("_owner" !== u[l] && "__v" !== u[l] && "__o" !== u[l]) ||
                    !e.$$typeof) &&
                  !equal(e[u[l]], i[u[l]])
                )
                  return !1;
              return !0;
            }
            return e != e && i != i;
          })(e, i);
        } catch (e) {
          if ((e.message || "").match(/stack|recursion/i))
            return (
              console.warn("react-fast-compare cannot handle circular refs"), !1
            );
          throw e;
        }
      };
    },
    9124: function (e, t, r) {
      "use strict";
      function _typeof(e) {
        return (_typeof =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n,
        o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== _typeof(e) && "function" != typeof e))
            return { default: e };
          var t = _getRequireWildcardCache();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var i = n ? Object.getOwnPropertyDescriptor(e, o) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(r, o, i)
                : (r[o] = e[o]);
            }
          return (r.default = e), t && t.set(e, r), r;
        })(r(7294)),
        i = (n = r(9590)) && n.__esModule ? n : { default: n },
        a = r(5741),
        l = r(8045);
      function _getRequireWildcardCache() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (_getRequireWildcardCache = function () {
            return e;
          }),
          e
        );
      }
      function _extends() {
        return (_extends =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function _setPrototypeOf(e, t) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function _assertThisInitialized(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function _defineProperty(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var u = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && _setPrototypeOf(e, t);
        })(Player, e);
        var t,
          r,
          n,
          a =
            ((t = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                r,
                n = _getPrototypeOf(Player);
              if (t) {
                var o = _getPrototypeOf(this).constructor;
                r = Reflect.construct(n, arguments, o);
              } else r = n.apply(this, arguments);
              return (e = r) &&
                ("object" === _typeof(e) || "function" == typeof e)
                ? e
                : _assertThisInitialized(this);
            });
        function Player() {
          var e;
          !(function (e, t) {
            if (!(e instanceof t))
              throw TypeError("Cannot call a class as a function");
          })(this, Player);
          for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
            r[n] = arguments[n];
          return (
            _defineProperty(
              _assertThisInitialized((e = a.call.apply(a, [this].concat(r)))),
              "mounted",
              !1
            ),
            _defineProperty(_assertThisInitialized(e), "isReady", !1),
            _defineProperty(_assertThisInitialized(e), "isPlaying", !1),
            _defineProperty(_assertThisInitialized(e), "isLoading", !0),
            _defineProperty(_assertThisInitialized(e), "loadOnReady", null),
            _defineProperty(_assertThisInitialized(e), "startOnPlay", !0),
            _defineProperty(_assertThisInitialized(e), "seekOnPlay", null),
            _defineProperty(_assertThisInitialized(e), "onDurationCalled", !1),
            _defineProperty(
              _assertThisInitialized(e),
              "handlePlayerMount",
              function (t) {
                if (e.player) {
                  e.progress();
                  return;
                }
                (e.player = t), e.player.load(e.props.url), e.progress();
              }
            ),
            _defineProperty(
              _assertThisInitialized(e),
              "getInternalPlayer",
              function (t) {
                return e.player ? e.player[t] : null;
              }
            ),
            _defineProperty(_assertThisInitialized(e), "progress", function () {
              if (e.props.url && e.player && e.isReady) {
                var t = e.getCurrentTime() || 0,
                  r = e.getSecondsLoaded(),
                  n = e.getDuration();
                if (n) {
                  var o = { playedSeconds: t, played: t / n };
                  null !== r && ((o.loadedSeconds = r), (o.loaded = r / n)),
                    (o.playedSeconds !== e.prevPlayed ||
                      o.loadedSeconds !== e.prevLoaded) &&
                      e.props.onProgress(o),
                    (e.prevPlayed = o.playedSeconds),
                    (e.prevLoaded = o.loadedSeconds);
                }
              }
              e.progressTimeout = setTimeout(
                e.progress,
                e.props.progressFrequency || e.props.progressInterval
              );
            }),
            _defineProperty(
              _assertThisInitialized(e),
              "handleReady",
              function () {
                if (e.mounted) {
                  (e.isReady = !0), (e.isLoading = !1);
                  var t = e.props,
                    r = t.onReady,
                    n = t.playing,
                    o = t.volume,
                    i = t.muted;
                  r(),
                    i || null === o || e.player.setVolume(o),
                    e.loadOnReady
                      ? (e.player.load(e.loadOnReady, !0),
                        (e.loadOnReady = null))
                      : n && e.player.play(),
                    e.handleDurationCheck();
                }
              }
            ),
            _defineProperty(
              _assertThisInitialized(e),
              "handlePlay",
              function () {
                (e.isPlaying = !0), (e.isLoading = !1);
                var t = e.props,
                  r = t.onStart,
                  n = t.onPlay,
                  o = t.playbackRate;
                e.startOnPlay &&
                  (e.player.setPlaybackRate &&
                    1 !== o &&
                    e.player.setPlaybackRate(o),
                  r(),
                  (e.startOnPlay = !1)),
                  n(),
                  e.seekOnPlay &&
                    (e.seekTo(e.seekOnPlay), (e.seekOnPlay = null)),
                  e.handleDurationCheck();
              }
            ),
            _defineProperty(
              _assertThisInitialized(e),
              "handlePause",
              function (t) {
                (e.isPlaying = !1), e.isLoading || e.props.onPause(t);
              }
            ),
            _defineProperty(
              _assertThisInitialized(e),
              "handleEnded",
              function () {
                var t = e.props,
                  r = t.activePlayer,
                  n = t.loop,
                  o = t.onEnded;
                r.loopOnEnded && n && e.seekTo(0),
                  n || ((e.isPlaying = !1), o());
              }
            ),
            _defineProperty(
              _assertThisInitialized(e),
              "handleError",
              function () {
                var t;
                (e.isLoading = !1), (t = e.props).onError.apply(t, arguments);
              }
            ),
            _defineProperty(
              _assertThisInitialized(e),
              "handleDurationCheck",
              function () {
                clearTimeout(e.durationCheckTimeout);
                var t = e.getDuration();
                t
                  ? e.onDurationCalled ||
                    (e.props.onDuration(t), (e.onDurationCalled = !0))
                  : (e.durationCheckTimeout = setTimeout(
                      e.handleDurationCheck,
                      100
                    ));
              }
            ),
            _defineProperty(
              _assertThisInitialized(e),
              "handleLoaded",
              function () {
                e.isLoading = !1;
              }
            ),
            e
          );
        }
        return (
          (r = [
            {
              key: "componentDidMount",
              value: function () {
                this.mounted = !0;
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                clearTimeout(this.progressTimeout),
                  clearTimeout(this.durationCheckTimeout),
                  this.isReady &&
                    this.props.stopOnUnmount &&
                    (this.player.stop(),
                    this.player.disablePIP && this.player.disablePIP()),
                  (this.mounted = !1);
              },
            },
            {
              key: "componentDidUpdate",
              value: function (e) {
                var t = this;
                if (this.player) {
                  var r = this.props,
                    n = r.url,
                    o = r.playing,
                    a = r.volume,
                    u = r.muted,
                    s = r.playbackRate,
                    c = r.pip,
                    p = r.loop,
                    f = r.activePlayer,
                    y = r.disableDeferredLoading;
                  if (!(0, i.default)(e.url, n)) {
                    if (
                      this.isLoading &&
                      !f.forceLoad &&
                      !y &&
                      !(0, l.isMediaStream)(n)
                    ) {
                      console.warn(
                        "ReactPlayer: the attempt to load ".concat(
                          n,
                          " is being deferred until the player has loaded"
                        )
                      ),
                        (this.loadOnReady = n);
                      return;
                    }
                    (this.isLoading = !0),
                      (this.startOnPlay = !0),
                      (this.onDurationCalled = !1),
                      this.player.load(n, this.isReady);
                  }
                  e.playing || !o || this.isPlaying || this.player.play(),
                    e.playing && !o && this.isPlaying && this.player.pause(),
                    !e.pip &&
                      c &&
                      this.player.enablePIP &&
                      this.player.enablePIP(),
                    e.pip &&
                      !c &&
                      this.player.disablePIP &&
                      this.player.disablePIP(),
                    e.volume !== a && null !== a && this.player.setVolume(a),
                    e.muted !== u &&
                      (u
                        ? this.player.mute()
                        : (this.player.unmute(),
                          null !== a &&
                            setTimeout(function () {
                              return t.player.setVolume(a);
                            }))),
                    e.playbackRate !== s &&
                      this.player.setPlaybackRate &&
                      this.player.setPlaybackRate(s),
                    e.loop !== p &&
                      this.player.setLoop &&
                      this.player.setLoop(p);
                }
              },
            },
            {
              key: "getDuration",
              value: function () {
                return this.isReady ? this.player.getDuration() : null;
              },
            },
            {
              key: "getCurrentTime",
              value: function () {
                return this.isReady ? this.player.getCurrentTime() : null;
              },
            },
            {
              key: "getSecondsLoaded",
              value: function () {
                return this.isReady ? this.player.getSecondsLoaded() : null;
              },
            },
            {
              key: "seekTo",
              value: function (e, t) {
                var r = this;
                if (!this.isReady) {
                  0 !== e &&
                    ((this.seekOnPlay = e),
                    setTimeout(function () {
                      r.seekOnPlay = null;
                    }, 5e3));
                  return;
                }
                if (t ? "fraction" === t : e > 0 && e < 1) {
                  var n = this.player.getDuration();
                  if (!n) {
                    console.warn(
                      "ReactPlayer: could not seek using fraction –\xa0duration not yet available"
                    );
                    return;
                  }
                  this.player.seekTo(n * e);
                  return;
                }
                this.player.seekTo(e);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props.activePlayer;
                return e
                  ? o.default.createElement(
                      e,
                      _extends({}, this.props, {
                        onMount: this.handlePlayerMount,
                        onReady: this.handleReady,
                        onPlay: this.handlePlay,
                        onPause: this.handlePause,
                        onEnded: this.handleEnded,
                        onLoaded: this.handleLoaded,
                        onError: this.handleError,
                      })
                    )
                  : null;
              },
            },
          ]),
          _defineProperties(Player.prototype, r),
          n && _defineProperties(Player, n),
          Player
        );
      })(o.Component);
      (t.default = u),
        _defineProperty(u, "displayName", "Player"),
        _defineProperty(u, "propTypes", a.propTypes),
        _defineProperty(u, "defaultProps", a.defaultProps);
    },
    5778: function (e, t, r) {
      "use strict";
      function _typeof(e) {
        return (_typeof =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = (function (e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" !== _typeof(e) && "function" != typeof e))
          return { default: e };
        var t = _getRequireWildcardCache();
        if (t && t.has(e)) return t.get(e);
        var r = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            var i = n ? Object.getOwnPropertyDescriptor(e, o) : null;
            i && (i.get || i.set)
              ? Object.defineProperty(r, o, i)
              : (r[o] = e[o]);
          }
        return (r.default = e), t && t.set(e, r), r;
      })(r(7294));
      function _getRequireWildcardCache() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (_getRequireWildcardCache = function () {
            return e;
          }),
          e
        );
      }
      function ownKeys(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ownKeys(Object(r), !0).forEach(function (t) {
                _defineProperty(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ownKeys(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function _setPrototypeOf(e, t) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function _assertThisInitialized(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function _defineProperty(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var o = "64px",
        i = {},
        a = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && _setPrototypeOf(e, t);
          })(Preview, e);
          var t,
            r,
            a,
            l =
              ((t = (function () {
                if (
                  "undefined" == typeof Reflect ||
                  !Reflect.construct ||
                  Reflect.construct.sham
                )
                  return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  r,
                  n = _getPrototypeOf(Preview);
                if (t) {
                  var o = _getPrototypeOf(this).constructor;
                  r = Reflect.construct(n, arguments, o);
                } else r = n.apply(this, arguments);
                return (e = r) &&
                  ("object" === _typeof(e) || "function" == typeof e)
                  ? e
                  : _assertThisInitialized(this);
              });
          function Preview() {
            var e;
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, Preview);
            for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
              r[n] = arguments[n];
            return (
              _defineProperty(
                _assertThisInitialized((e = l.call.apply(l, [this].concat(r)))),
                "mounted",
                !1
              ),
              _defineProperty(_assertThisInitialized(e), "state", {
                image: null,
              }),
              _defineProperty(
                _assertThisInitialized(e),
                "handleKeyPress",
                function (t) {
                  ("Enter" === t.key || " " === t.key) && e.props.onClick();
                }
              ),
              e
            );
          }
          return (
            (r = [
              {
                key: "componentDidMount",
                value: function () {
                  (this.mounted = !0), this.fetchImage(this.props);
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  var t = this.props,
                    r = t.url,
                    n = t.light;
                  (e.url !== r || e.light !== n) && this.fetchImage(this.props);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.mounted = !1;
                },
              },
              {
                key: "fetchImage",
                value: function (e) {
                  var t = this,
                    r = e.url,
                    o = e.light,
                    a = e.oEmbedUrl;
                  if (!n.default.isValidElement(o)) {
                    if ("string" == typeof o) {
                      this.setState({ image: o });
                      return;
                    }
                    if (i[r]) {
                      this.setState({ image: i[r] });
                      return;
                    }
                    return (
                      this.setState({ image: null }),
                      window
                        .fetch(a.replace("{url}", r))
                        .then(function (e) {
                          return e.json();
                        })
                        .then(function (e) {
                          if (e.thumbnail_url && t.mounted) {
                            var n = e.thumbnail_url
                              .replace("height=100", "height=480")
                              .replace("-d_295x166", "-d_640");
                            t.setState({ image: n }), (i[r] = n);
                          }
                        })
                    );
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.light,
                    r = e.onClick,
                    i = e.playIcon,
                    a = e.previewTabIndex,
                    l = this.state.image,
                    u = n.default.isValidElement(t),
                    s = {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                    c = {
                      preview: _objectSpread(
                        {
                          width: "100%",
                          height: "100%",
                          backgroundImage:
                            l && !u ? "url(".concat(l, ")") : void 0,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          cursor: "pointer",
                        },
                        s
                      ),
                      shadow: _objectSpread(
                        {
                          background:
                            "radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",
                          borderRadius: o,
                          width: o,
                          height: o,
                          position: u ? "absolute" : void 0,
                        },
                        s
                      ),
                      playIcon: {
                        borderStyle: "solid",
                        borderWidth: "16px 0 16px 26px",
                        borderColor:
                          "transparent transparent transparent white",
                        marginLeft: "7px",
                      },
                    },
                    p = n.default.createElement(
                      "div",
                      { style: c.shadow, className: "react-player__shadow" },
                      n.default.createElement("div", {
                        style: c.playIcon,
                        className: "react-player__play-icon",
                      })
                    );
                  return n.default.createElement(
                    "div",
                    {
                      style: c.preview,
                      className: "react-player__preview",
                      onClick: r,
                      tabIndex: a,
                      onKeyPress: this.handleKeyPress,
                    },
                    u ? t : null,
                    i || p
                  );
                },
              },
            ]),
            _defineProperties(Preview.prototype, r),
            a && _defineProperties(Preview, a),
            Preview
          );
        })(n.Component);
      t.default = a;
    },
    390: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createReactPlayer = void 0);
      var n = _interopRequireWildcard(r(7294)),
        o = _interopRequireDefault(r(2819)),
        i = _interopRequireDefault(r(845)),
        a = _interopRequireDefault(r(9590)),
        l = r(5741),
        u = r(8045),
        s = _interopRequireDefault(r(9124));
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function _typeof(e) {
        return (_typeof =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function ownKeys(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ownKeys(Object(r), !0).forEach(function (t) {
                _defineProperty(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ownKeys(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function _extends() {
        return (_extends =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function _toConsumableArray(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return _arrayLikeToArray(e);
          })(e) ||
          (function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return _arrayLikeToArray(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              if (
                ("Object" === r && e.constructor && (r = e.constructor.name),
                "Map" === r || "Set" === r)
              )
                return Array.from(e);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return _arrayLikeToArray(e, t);
            }
          })(e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function _arrayLikeToArray(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function _setPrototypeOf(e, t) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function _assertThisInitialized(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function _defineProperty(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function _getRequireWildcardCache() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (_getRequireWildcardCache = function () {
            return e;
          }),
          e
        );
      }
      function _interopRequireWildcard(e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" !== _typeof(e) && "function" != typeof e))
          return { default: e };
        var t = _getRequireWildcardCache();
        if (t && t.has(e)) return t.get(e);
        var r = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            var i = n ? Object.getOwnPropertyDescriptor(e, o) : null;
            i && (i.get || i.set)
              ? Object.defineProperty(r, o, i)
              : (r[o] = e[o]);
          }
        return (r.default = e), t && t.set(e, r), r;
      }
      var c = (0, n.lazy)(function () {
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(r(5778));
          });
        }),
        p = "undefined" != typeof window && window.document,
        f = void 0 !== r.g && r.g.window && r.g.window.document,
        y = Object.keys(l.propTypes),
        d =
          p || f
            ? n.Suspense
            : function () {
                return null;
              },
        h = [];
      t.createReactPlayer = function (e, t) {
        var r, p;
        return (
          (p = r =
            (function (r) {
              (function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && _setPrototypeOf(e, t);
              })(ReactPlayer, r);
              var p,
                f,
                P,
                b =
                  ((p = (function () {
                    if (
                      "undefined" == typeof Reflect ||
                      !Reflect.construct ||
                      Reflect.construct.sham
                    )
                      return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                      return (
                        Date.prototype.toString.call(
                          Reflect.construct(Date, [], function () {})
                        ),
                        !0
                      );
                    } catch (e) {
                      return !1;
                    }
                  })()),
                  function () {
                    var e,
                      t,
                      r = _getPrototypeOf(ReactPlayer);
                    if (p) {
                      var n = _getPrototypeOf(this).constructor;
                      t = Reflect.construct(r, arguments, n);
                    } else t = r.apply(this, arguments);
                    return (e = t) &&
                      ("object" === _typeof(e) || "function" == typeof e)
                      ? e
                      : _assertThisInitialized(this);
                  });
              function ReactPlayer() {
                var r;
                (function (e, t) {
                  if (!(e instanceof t))
                    throw TypeError("Cannot call a class as a function");
                })(this, ReactPlayer);
                for (var a = arguments.length, c = Array(a), p = 0; p < a; p++)
                  c[p] = arguments[p];
                return (
                  _defineProperty(
                    _assertThisInitialized(
                      (r = b.call.apply(b, [this].concat(c)))
                    ),
                    "state",
                    { showPreview: !!r.props.light }
                  ),
                  _defineProperty(_assertThisInitialized(r), "references", {
                    wrapper: function (e) {
                      r.wrapper = e;
                    },
                    player: function (e) {
                      r.player = e;
                    },
                  }),
                  _defineProperty(
                    _assertThisInitialized(r),
                    "handleClickPreview",
                    function (e) {
                      r.setState({ showPreview: !1 }),
                        r.props.onClickPreview(e);
                    }
                  ),
                  _defineProperty(
                    _assertThisInitialized(r),
                    "showPreview",
                    function () {
                      r.setState({ showPreview: !0 });
                    }
                  ),
                  _defineProperty(
                    _assertThisInitialized(r),
                    "getDuration",
                    function () {
                      return r.player ? r.player.getDuration() : null;
                    }
                  ),
                  _defineProperty(
                    _assertThisInitialized(r),
                    "getCurrentTime",
                    function () {
                      return r.player ? r.player.getCurrentTime() : null;
                    }
                  ),
                  _defineProperty(
                    _assertThisInitialized(r),
                    "getSecondsLoaded",
                    function () {
                      return r.player ? r.player.getSecondsLoaded() : null;
                    }
                  ),
                  _defineProperty(
                    _assertThisInitialized(r),
                    "getInternalPlayer",
                    function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "player";
                      return r.player ? r.player.getInternalPlayer(e) : null;
                    }
                  ),
                  _defineProperty(
                    _assertThisInitialized(r),
                    "seekTo",
                    function (e, t) {
                      if (!r.player) return null;
                      r.player.seekTo(e, t);
                    }
                  ),
                  _defineProperty(
                    _assertThisInitialized(r),
                    "handleReady",
                    function () {
                      r.props.onReady(_assertThisInitialized(r));
                    }
                  ),
                  _defineProperty(
                    _assertThisInitialized(r),
                    "getActivePlayer",
                    (0, i.default)(function (r) {
                      for (
                        var n = 0, o = [].concat(h, _toConsumableArray(e));
                        n < o.length;
                        n++
                      ) {
                        var i = o[n];
                        if (i.canPlay(r)) return i;
                      }
                      return t || null;
                    })
                  ),
                  _defineProperty(
                    _assertThisInitialized(r),
                    "getConfig",
                    (0, i.default)(function (e, t) {
                      var n = r.props.config;
                      return o.default.all([
                        l.defaultProps.config,
                        l.defaultProps.config[t] || {},
                        n,
                        n[t] || {},
                      ]);
                    })
                  ),
                  _defineProperty(
                    _assertThisInitialized(r),
                    "getAttributes",
                    (0, i.default)(function (e) {
                      return (0, u.omit)(r.props, y);
                    })
                  ),
                  _defineProperty(
                    _assertThisInitialized(r),
                    "renderActivePlayer",
                    function (e) {
                      if (!e) return null;
                      var t = r.getActivePlayer(e);
                      if (!t) return null;
                      var o = r.getConfig(e, t.key);
                      return n.default.createElement(
                        s.default,
                        _extends({}, r.props, {
                          key: t.key,
                          ref: r.references.player,
                          config: o,
                          activePlayer: t.lazyPlayer || t,
                          onReady: r.handleReady,
                        })
                      );
                    }
                  ),
                  r
                );
              }
              return (
                (f = [
                  {
                    key: "shouldComponentUpdate",
                    value: function (e, t) {
                      return (
                        !(0, a.default)(this.props, e) ||
                        !(0, a.default)(this.state, t)
                      );
                    },
                  },
                  {
                    key: "componentDidUpdate",
                    value: function (e) {
                      var t = this.props.light;
                      !e.light && t && this.setState({ showPreview: !0 }),
                        e.light && !t && this.setState({ showPreview: !1 });
                    },
                  },
                  {
                    key: "renderPreview",
                    value: function (e) {
                      if (!e) return null;
                      var t = this.props,
                        r = t.light,
                        o = t.playIcon,
                        i = t.previewTabIndex,
                        a = t.oEmbedUrl;
                      return n.default.createElement(c, {
                        url: e,
                        light: r,
                        playIcon: o,
                        previewTabIndex: i,
                        oEmbedUrl: a,
                        onClick: this.handleClickPreview,
                      });
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t = e.url,
                        r = e.style,
                        o = e.width,
                        i = e.height,
                        a = e.fallback,
                        l = e.wrapper,
                        u = this.state.showPreview,
                        s = this.getAttributes(t),
                        c =
                          "string" == typeof l
                            ? this.references.wrapper
                            : void 0;
                      return n.default.createElement(
                        l,
                        _extends(
                          {
                            ref: c,
                            style: _objectSpread(
                              _objectSpread({}, r),
                              {},
                              { width: o, height: i }
                            ),
                          },
                          s
                        ),
                        n.default.createElement(
                          d,
                          { fallback: a },
                          u ? this.renderPreview(t) : this.renderActivePlayer(t)
                        )
                      );
                    },
                  },
                ]),
                _defineProperties(ReactPlayer.prototype, f),
                P && _defineProperties(ReactPlayer, P),
                ReactPlayer
              );
            })(n.Component)),
          _defineProperty(r, "displayName", "ReactPlayer"),
          _defineProperty(r, "propTypes", l.propTypes),
          _defineProperty(r, "defaultProps", l.defaultProps),
          _defineProperty(r, "addCustomPlayer", function (e) {
            h.push(e);
          }),
          _defineProperty(r, "removeCustomPlayers", function () {
            h.length = 0;
          }),
          _defineProperty(r, "canPlay", function (t) {
            for (
              var r = 0, n = [].concat(h, _toConsumableArray(e));
              r < n.length;
              r++
            )
              if (n[r].canPlay(t)) return !0;
            return !1;
          }),
          _defineProperty(r, "canEnablePIP", function (t) {
            for (
              var r = 0, n = [].concat(h, _toConsumableArray(e));
              r < n.length;
              r++
            ) {
              var o = n[r];
              if (o.canEnablePIP && o.canEnablePIP(t)) return !0;
            }
            return !1;
          }),
          p
        );
      };
    },
    2004: function (e, t, r) {
      "use strict";
      t.Z = void 0;
      var n,
        o = (n = r(6497)) && n.__esModule ? n : { default: n },
        i = r(390),
        a = o.default[o.default.length - 1],
        l = (0, i.createReactPlayer)(o.default, a);
      t.Z = l;
    },
    1776: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.canPlay =
          t.FLV_EXTENSIONS =
          t.DASH_EXTENSIONS =
          t.HLS_EXTENSIONS =
          t.VIDEO_EXTENSIONS =
          t.AUDIO_EXTENSIONS =
          t.MATCH_URL_KALTURA =
          t.MATCH_URL_VIDYARD =
          t.MATCH_URL_MIXCLOUD =
          t.MATCH_URL_DAILYMOTION =
          t.MATCH_URL_TWITCH_CHANNEL =
          t.MATCH_URL_TWITCH_VIDEO =
          t.MATCH_URL_WISTIA =
          t.MATCH_URL_STREAMABLE =
          t.MATCH_URL_FACEBOOK_WATCH =
          t.MATCH_URL_FACEBOOK =
          t.MATCH_URL_VIMEO =
          t.MATCH_URL_SOUNDCLOUD =
          t.MATCH_URL_YOUTUBE =
            void 0);
      var n = r(8045);
      function _arrayLikeToArray(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var o =
        /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;
      t.MATCH_URL_YOUTUBE = o;
      var i = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/;
      t.MATCH_URL_SOUNDCLOUD = i;
      var a = /vimeo\.com\/(?!progressive_redirect).+/;
      t.MATCH_URL_VIMEO = a;
      var l =
        /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;
      t.MATCH_URL_FACEBOOK = l;
      var u = /^https?:\/\/fb\.watch\/.+$/;
      t.MATCH_URL_FACEBOOK_WATCH = u;
      var s = /streamable\.com\/([a-z0-9]+)$/;
      t.MATCH_URL_STREAMABLE = s;
      var c =
        /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?(.*)$/;
      t.MATCH_URL_WISTIA = c;
      var p = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;
      t.MATCH_URL_TWITCH_VIDEO = p;
      var f = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/;
      t.MATCH_URL_TWITCH_CHANNEL = f;
      var y =
        /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/;
      t.MATCH_URL_DAILYMOTION = y;
      var d = /mixcloud\.com\/([^/]+\/[^/]+)/;
      t.MATCH_URL_MIXCLOUD = d;
      var h = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/;
      t.MATCH_URL_VIDYARD = h;
      var P =
        /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/;
      t.MATCH_URL_KALTURA = P;
      var b =
        /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
      t.AUDIO_EXTENSIONS = b;
      var _ = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i;
      t.VIDEO_EXTENSIONS = _;
      var v = /\.(m3u8)($|\?)/i;
      t.HLS_EXTENSIONS = v;
      var m = /\.(mpd)($|\?)/i;
      t.DASH_EXTENSIONS = m;
      var g = /\.(flv)($|\?)/i;
      (t.FLV_EXTENSIONS = g),
        (t.canPlay = {
          youtube: function (e) {
            return e instanceof Array
              ? e.every(function (e) {
                  return o.test(e);
                })
              : o.test(e);
          },
          soundcloud: function (e) {
            return i.test(e) && !b.test(e);
          },
          vimeo: function (e) {
            return a.test(e) && !_.test(e) && !v.test(e);
          },
          facebook: function (e) {
            return l.test(e) || u.test(e);
          },
          streamable: function (e) {
            return s.test(e);
          },
          wistia: function (e) {
            return c.test(e);
          },
          twitch: function (e) {
            return p.test(e) || f.test(e);
          },
          dailymotion: function (e) {
            return y.test(e);
          },
          mixcloud: function (e) {
            return d.test(e);
          },
          vidyard: function (e) {
            return h.test(e);
          },
          kaltura: function (e) {
            return P.test(e);
          },
          file: function canPlayFile(e) {
            if (e instanceof Array) {
              var t,
                r = (function (e, t) {
                  if (
                    "undefined" == typeof Symbol ||
                    null == e[Symbol.iterator]
                  ) {
                    if (
                      Array.isArray(e) ||
                      (n = (function (e, t) {
                        if (e) {
                          if ("string" == typeof e)
                            return _arrayLikeToArray(e, t);
                          var r = Object.prototype.toString
                            .call(e)
                            .slice(8, -1);
                          if (
                            ("Object" === r &&
                              e.constructor &&
                              (r = e.constructor.name),
                            "Map" === r || "Set" === r)
                          )
                            return Array.from(e);
                          if (
                            "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          )
                            return _arrayLikeToArray(e, t);
                        }
                      })(e))
                    ) {
                      n && (e = n);
                      var r = 0,
                        F = function () {};
                      return {
                        s: F,
                        n: function () {
                          return r >= e.length
                            ? { done: !0 }
                            : { done: !1, value: e[r++] };
                        },
                        e: function (e) {
                          throw e;
                        },
                        f: F,
                      };
                    }
                    throw TypeError(
                      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  }
                  var n,
                    o,
                    i = !0,
                    a = !1;
                  return {
                    s: function () {
                      n = e[Symbol.iterator]();
                    },
                    n: function () {
                      var e = n.next();
                      return (i = e.done), e;
                    },
                    e: function (e) {
                      (a = !0), (o = e);
                    },
                    f: function () {
                      try {
                        i || null == n.return || n.return();
                      } finally {
                        if (a) throw o;
                      }
                    },
                  };
                })(e);
              try {
                for (r.s(); !(t = r.n()).done; ) {
                  var o = t.value;
                  if (
                    ("string" == typeof o && canPlayFile(o)) ||
                    canPlayFile(o.src)
                  )
                    return !0;
                }
              } catch (e) {
                r.e(e);
              } finally {
                r.f();
              }
              return !1;
            }
            return (
              !!((0, n.isMediaStream)(e) || (0, n.isBlobUrl)(e)) ||
              b.test(e) ||
              _.test(e) ||
              v.test(e) ||
              m.test(e) ||
              g.test(e)
            );
          },
        });
    },
    6807: function (e, t, r) {
      "use strict";
      function _typeof(e) {
        return (_typeof =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== _typeof(e) && "function" != typeof e))
            return { default: e };
          var t = _getRequireWildcardCache();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var i = n ? Object.getOwnPropertyDescriptor(e, o) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(r, o, i)
                : (r[o] = e[o]);
            }
          return (r.default = e), t && t.set(e, r), r;
        })(r(7294)),
        o = r(8045),
        i = r(1776);
      function _getRequireWildcardCache() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (_getRequireWildcardCache = function () {
            return e;
          }),
          e
        );
      }
      function ownKeys(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function _arrayLikeToArray(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function _setPrototypeOf(e, t) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function _assertThisInitialized(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function _defineProperty(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var a = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && _setPrototypeOf(e, t);
        })(DailyMotion, e);
        var t,
          r,
          a,
          l =
            ((t = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                r,
                n = _getPrototypeOf(DailyMotion);
              if (t) {
                var o = _getPrototypeOf(this).constructor;
                r = Reflect.construct(n, arguments, o);
              } else r = n.apply(this, arguments);
              return (e = r) &&
                ("object" === _typeof(e) || "function" == typeof e)
                ? e
                : _assertThisInitialized(this);
            });
        function DailyMotion() {
          var e;
          !(function (e, t) {
            if (!(e instanceof t))
              throw TypeError("Cannot call a class as a function");
          })(this, DailyMotion);
          for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
            r[n] = arguments[n];
          return (
            _defineProperty(
              _assertThisInitialized((e = l.call.apply(l, [this].concat(r)))),
              "callPlayer",
              o.callPlayer
            ),
            _defineProperty(
              _assertThisInitialized(e),
              "onDurationChange",
              function () {
                var t = e.getDuration();
                e.props.onDuration(t);
              }
            ),
            _defineProperty(_assertThisInitialized(e), "mute", function () {
              e.callPlayer("setMuted", !0);
            }),
            _defineProperty(_assertThisInitialized(e), "unmute", function () {
              e.callPlayer("setMuted", !1);
            }),
            _defineProperty(_assertThisInitialized(e), "ref", function (t) {
              e.container = t;
            }),
            e
          );
        }
        return (
          (r = [
            {
              key: "componentDidMount",
              value: function () {
                this.props.onMount && this.props.onMount(this);
              },
            },
            {
              key: "load",
              value: function (e) {
                var t,
                  r = this,
                  n = this.props,
                  a = n.controls,
                  l = n.config,
                  u = n.onError,
                  s = n.playing,
                  c = ((function (e) {
                    if (Array.isArray(e)) return e;
                  })((t = e.match(i.MATCH_URL_DAILYMOTION))) ||
                    (function (e, t) {
                      if (
                        "undefined" != typeof Symbol &&
                        Symbol.iterator in Object(e)
                      ) {
                        var r = [],
                          n = !0,
                          o = !1,
                          i = void 0;
                        try {
                          for (
                            var a, l = e[Symbol.iterator]();
                            !(n = (a = l.next()).done) &&
                            (r.push(a.value), !t || r.length !== t);
                            n = !0
                          );
                        } catch (e) {
                          (o = !0), (i = e);
                        } finally {
                          try {
                            n || null == l.return || l.return();
                          } finally {
                            if (o) throw i;
                          }
                        }
                        return r;
                      }
                    })(t, 2) ||
                    (function (e, t) {
                      if (e) {
                        if ("string" == typeof e)
                          return _arrayLikeToArray(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        if (
                          ("Object" === r &&
                            e.constructor &&
                            (r = e.constructor.name),
                          "Map" === r || "Set" === r)
                        )
                          return Array.from(e);
                        if (
                          "Arguments" === r ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                        )
                          return _arrayLikeToArray(e, t);
                      }
                    })(t, 2) ||
                    (function () {
                      throw TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    })())[1];
                if (this.player) {
                  this.player.load(c, {
                    start: (0, o.parseStartTime)(e),
                    autoplay: s,
                  });
                  return;
                }
                (0, o.getSDK)(
                  "https://api.dmcdn.net/all.js",
                  "DM",
                  "dmAsyncInit",
                  function (e) {
                    return e.player;
                  }
                ).then(function (t) {
                  if (r.container) {
                    var n = t.player;
                    r.player = new n(r.container, {
                      width: "100%",
                      height: "100%",
                      video: c,
                      params: (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var r = null != arguments[t] ? arguments[t] : {};
                          t % 2
                            ? ownKeys(Object(r), !0).forEach(function (t) {
                                _defineProperty(e, t, r[t]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(r)
                              )
                            : ownKeys(Object(r)).forEach(function (t) {
                                Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(r, t)
                                );
                              });
                        }
                        return e;
                      })(
                        {
                          controls: a,
                          autoplay: r.props.playing,
                          mute: r.props.muted,
                          start: (0, o.parseStartTime)(e),
                          origin: window.location.origin,
                        },
                        l.params
                      ),
                      events: {
                        apiready: r.props.onReady,
                        seeked: function () {
                          return r.props.onSeek(r.player.currentTime);
                        },
                        video_end: r.props.onEnded,
                        durationchange: r.onDurationChange,
                        pause: r.props.onPause,
                        playing: r.props.onPlay,
                        waiting: r.props.onBuffer,
                        error: function (e) {
                          return u(e);
                        },
                      },
                    });
                  }
                }, u);
              },
            },
            {
              key: "play",
              value: function () {
                this.callPlayer("play");
              },
            },
            {
              key: "pause",
              value: function () {
                this.callPlayer("pause");
              },
            },
            { key: "stop", value: function () {} },
            {
              key: "seekTo",
              value: function (e) {
                this.callPlayer("seek", e);
              },
            },
            {
              key: "setVolume",
              value: function (e) {
                this.callPlayer("setVolume", e);
              },
            },
            {
              key: "getDuration",
              value: function () {
                return this.player.duration || null;
              },
            },
            {
              key: "getCurrentTime",
              value: function () {
                return this.player.currentTime;
              },
            },
            {
              key: "getSecondsLoaded",
              value: function () {
                return this.player.bufferedTime;
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props.display;
                return n.default.createElement(
                  "div",
                  { style: { width: "100%", height: "100%", display: e } },
                  n.default.createElement("div", { ref: this.ref })
                );
              },
            },
          ]),
          _defineProperties(DailyMotion.prototype, r),
          a && _defineProperties(DailyMotion, a),
          DailyMotion
        );
      })(n.Component);
      (t.default = a),
        _defineProperty(a, "displayName", "DailyMotion"),
        _defineProperty(a, "canPlay", i.canPlay.dailymotion),
        _defineProperty(a, "loopOnEnded", !0);
    },
    1972: function (e, t, r) {
      "use strict";
      function _typeof(e) {
        return (_typeof =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== _typeof(e) && "function" != typeof e))
            return { default: e };
          var t = _getRequireWildcardCache();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var i = n ? Object.getOwnPropertyDescriptor(e, o) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(r, o, i)
                : (r[o] = e[o]);
            }
          return (r.default = e), t && t.set(e, r), r;
        })(r(7294)),
        o = r(8045),
        i = r(1776);
      function _getRequireWildcardCache() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (_getRequireWildcardCache = function () {
            return e;
          }),
          e
        );
      }
      function _extends() {
        return (_extends =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function _setPrototypeOf(e, t) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function _assertThisInitialized(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function _defineProperty(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var a = "https://connect.facebook.net/en_US/sdk.js",
        l = "fbAsyncInit",
        u = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && _setPrototypeOf(e, t);
          })(Facebook, e);
          var t,
            r,
            i,
            u =
              ((t = (function () {
                if (
                  "undefined" == typeof Reflect ||
                  !Reflect.construct ||
                  Reflect.construct.sham
                )
                  return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  r,
                  n = _getPrototypeOf(Facebook);
                if (t) {
                  var o = _getPrototypeOf(this).constructor;
                  r = Reflect.construct(n, arguments, o);
                } else r = n.apply(this, arguments);
                return (e = r) &&
                  ("object" === _typeof(e) || "function" == typeof e)
                  ? e
                  : _assertThisInitialized(this);
              });
          function Facebook() {
            var e;
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, Facebook);
            for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
              r[n] = arguments[n];
            return (
              _defineProperty(
                _assertThisInitialized((e = u.call.apply(u, [this].concat(r)))),
                "callPlayer",
                o.callPlayer
              ),
              _defineProperty(
                _assertThisInitialized(e),
                "playerID",
                e.props.config.playerId ||
                  "".concat("facebook-player-").concat((0, o.randomString)())
              ),
              _defineProperty(_assertThisInitialized(e), "mute", function () {
                e.callPlayer("mute");
              }),
              _defineProperty(_assertThisInitialized(e), "unmute", function () {
                e.callPlayer("unmute");
              }),
              e
            );
          }
          return (
            (r = [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.onMount && this.props.onMount(this);
                },
              },
              {
                key: "load",
                value: function (e, t) {
                  var r = this;
                  if (t) {
                    (0, o.getSDK)(a, "FB", l).then(function (e) {
                      return e.XFBML.parse();
                    });
                    return;
                  }
                  (0, o.getSDK)(a, "FB", l).then(function (e) {
                    e.init({
                      appId: r.props.config.appId,
                      xfbml: !0,
                      version: r.props.config.version,
                    }),
                      e.Event.subscribe("xfbml.render", function (e) {
                        r.props.onLoaded();
                      }),
                      e.Event.subscribe("xfbml.ready", function (e) {
                        "video" === e.type &&
                          e.id === r.playerID &&
                          ((r.player = e.instance),
                          r.player.subscribe("startedPlaying", r.props.onPlay),
                          r.player.subscribe("paused", r.props.onPause),
                          r.player.subscribe(
                            "finishedPlaying",
                            r.props.onEnded
                          ),
                          r.player.subscribe(
                            "startedBuffering",
                            r.props.onBuffer
                          ),
                          r.player.subscribe(
                            "finishedBuffering",
                            r.props.onBufferEnd
                          ),
                          r.player.subscribe("error", r.props.onError),
                          r.props.muted
                            ? r.callPlayer("mute")
                            : r.callPlayer("unmute"),
                          r.props.onReady(),
                          (document
                            .getElementById(r.playerID)
                            .querySelector("iframe").style.visibility =
                            "visible"));
                      });
                  });
                },
              },
              {
                key: "play",
                value: function () {
                  this.callPlayer("play");
                },
              },
              {
                key: "pause",
                value: function () {
                  this.callPlayer("pause");
                },
              },
              { key: "stop", value: function () {} },
              {
                key: "seekTo",
                value: function (e) {
                  this.callPlayer("seek", e);
                },
              },
              {
                key: "setVolume",
                value: function (e) {
                  this.callPlayer("setVolume", e);
                },
              },
              {
                key: "getDuration",
                value: function () {
                  return this.callPlayer("getDuration");
                },
              },
              {
                key: "getCurrentTime",
                value: function () {
                  return this.callPlayer("getCurrentPosition");
                },
              },
              {
                key: "getSecondsLoaded",
                value: function () {
                  return null;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.config.attributes;
                  return n.default.createElement(
                    "div",
                    _extends(
                      {
                        style: { width: "100%", height: "100%" },
                        id: this.playerID,
                        className: "fb-video",
                        "data-href": this.props.url,
                        "data-autoplay": this.props.playing ? "true" : "false",
                        "data-allowfullscreen": "true",
                        "data-controls": this.props.controls ? "true" : "false",
                      },
                      e
                    )
                  );
                },
              },
            ]),
            _defineProperties(Facebook.prototype, r),
            i && _defineProperties(Facebook, i),
            Facebook
          );
        })(n.Component);
      (t.default = u),
        _defineProperty(u, "displayName", "Facebook"),
        _defineProperty(u, "canPlay", i.canPlay.facebook),
        _defineProperty(u, "loopOnEnded", !0);
    },
    4926: function (e, t, r) {
      "use strict";
      function _typeof(e) {
        return (_typeof =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== _typeof(e) && "function" != typeof e))
            return { default: e };
          var t = _getRequireWildcardCache();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var i = n ? Object.getOwnPropertyDescriptor(e, o) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(r, o, i)
                : (r[o] = e[o]);
            }
          return (r.default = e), t && t.set(e, r), r;
        })(r(7294)),
        o = r(8045),
        i = r(1776);
      function _getRequireWildcardCache() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (_getRequireWildcardCache = function () {
            return e;
          }),
          e
        );
      }
      function _extends() {
        return (_extends =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function _setPrototypeOf(e, t) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function _assertThisInitialized(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function _defineProperty(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var a = "undefined" != typeof navigator,
        l =
          a &&
          "MacIntel" === navigator.platform &&
          navigator.maxTouchPoints > 1,
        u =
          a &&
          (/iPad|iPhone|iPod/.test(navigator.userAgent) || l) &&
          !window.MSStream,
        s = /www\.dropbox\.com\/.+/,
        c = /https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/,
        p = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && _setPrototypeOf(e, t);
          })(FilePlayer, e);
          var t,
            r,
            a,
            l =
              ((t = (function () {
                if (
                  "undefined" == typeof Reflect ||
                  !Reflect.construct ||
                  Reflect.construct.sham
                )
                  return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  r,
                  n = _getPrototypeOf(FilePlayer);
                if (t) {
                  var o = _getPrototypeOf(this).constructor;
                  r = Reflect.construct(n, arguments, o);
                } else r = n.apply(this, arguments);
                return (e = r) &&
                  ("object" === _typeof(e) || "function" == typeof e)
                  ? e
                  : _assertThisInitialized(this);
              });
          function FilePlayer() {
            var e;
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, FilePlayer);
            for (var t = arguments.length, r = Array(t), i = 0; i < t; i++)
              r[i] = arguments[i];
            return (
              _defineProperty(
                _assertThisInitialized((e = l.call.apply(l, [this].concat(r)))),
                "onReady",
                function () {
                  var t;
                  return (t = e.props).onReady.apply(t, arguments);
                }
              ),
              _defineProperty(_assertThisInitialized(e), "onPlay", function () {
                var t;
                return (t = e.props).onPlay.apply(t, arguments);
              }),
              _defineProperty(
                _assertThisInitialized(e),
                "onBuffer",
                function () {
                  var t;
                  return (t = e.props).onBuffer.apply(t, arguments);
                }
              ),
              _defineProperty(
                _assertThisInitialized(e),
                "onBufferEnd",
                function () {
                  var t;
                  return (t = e.props).onBufferEnd.apply(t, arguments);
                }
              ),
              _defineProperty(
                _assertThisInitialized(e),
                "onPause",
                function () {
                  var t;
                  return (t = e.props).onPause.apply(t, arguments);
                }
              ),
              _defineProperty(
                _assertThisInitialized(e),
                "onEnded",
                function () {
                  var t;
                  return (t = e.props).onEnded.apply(t, arguments);
                }
              ),
              _defineProperty(
                _assertThisInitialized(e),
                "onError",
                function () {
                  var t;
                  return (t = e.props).onError.apply(t, arguments);
                }
              ),
              _defineProperty(
                _assertThisInitialized(e),
                "onPlayBackRateChange",
                function (t) {
                  return e.props.onPlaybackRateChange(t.target.playbackRate);
                }
              ),
              _defineProperty(
                _assertThisInitialized(e),
                "onEnablePIP",
                function () {
                  var t;
                  return (t = e.props).onEnablePIP.apply(t, arguments);
                }
              ),
              _defineProperty(
                _assertThisInitialized(e),
                "onDisablePIP",
                function (t) {
                  var r = e.props,
                    n = r.onDisablePIP,
                    o = r.playing;
                  n(t), o && e.play();
                }
              ),
              _defineProperty(
                _assertThisInitialized(e),
                "onPresentationModeChange",
                function (t) {
                  if (
                    e.player &&
                    (0, o.supportsWebKitPresentationMode)(e.player)
                  ) {
                    var r = e.player.webkitPresentationMode;
                    "picture-in-picture" === r
                      ? e.onEnablePIP(t)
                      : "inline" === r && e.onDisablePIP(t);
                  }
                }
              ),
              _defineProperty(
                _assertThisInitialized(e),
                "onSeek",
                function (t) {
                  e.props.onSeek(t.target.currentTime);
                }
              ),
              _defineProperty(_assertThisInitialized(e), "mute", function () {
                e.player.muted = !0;
              }),
              _defineProperty(_assertThisInitialized(e), "unmute", function () {
                e.player.muted = !1;
              }),
              _defineProperty(
                _assertThisInitialized(e),
                "renderSourceElement",
                function (e, t) {
                  return "string" == typeof e
                    ? n.default.createElement("source", { key: t, src: e })
                    : n.default.createElement(
                        "source",
                        _extends({ key: t }, e)
                      );
                }
              ),
              _defineProperty(
                _assertThisInitialized(e),
                "renderTrack",
                function (e, t) {
                  return n.default.createElement(
                    "track",
                    _extends({ key: t }, e)
                  );
                }
              ),
              _defineProperty(_assertThisInitialized(e), "ref", function (t) {
                e.player && (e.prevPlayer = e.player), (e.player = t);
              }),
              e
            );
          }
          return (
            (r = [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.onMount && this.props.onMount(this),
                    this.addListeners(this.player),
                    (this.player.src = this.getSource(this.props.url)),
                    u && this.player.load();
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  this.shouldUseAudio(this.props) !== this.shouldUseAudio(e) &&
                    (this.removeListeners(this.prevPlayer, e.url),
                    this.addListeners(this.player)),
                    this.props.url === e.url ||
                      (0, o.isMediaStream)(this.props.url) ||
                      (this.player.srcObject = null);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  (this.player.src = ""),
                    this.removeListeners(this.player),
                    this.hls && this.hls.destroy();
                },
              },
              {
                key: "addListeners",
                value: function (e) {
                  var t = this.props,
                    r = t.url,
                    n = t.playsinline;
                  e.addEventListener("play", this.onPlay),
                    e.addEventListener("waiting", this.onBuffer),
                    e.addEventListener("playing", this.onBufferEnd),
                    e.addEventListener("pause", this.onPause),
                    e.addEventListener("seeked", this.onSeek),
                    e.addEventListener("ended", this.onEnded),
                    e.addEventListener("error", this.onError),
                    e.addEventListener("ratechange", this.onPlayBackRateChange),
                    e.addEventListener(
                      "enterpictureinpicture",
                      this.onEnablePIP
                    ),
                    e.addEventListener(
                      "leavepictureinpicture",
                      this.onDisablePIP
                    ),
                    e.addEventListener(
                      "webkitpresentationmodechanged",
                      this.onPresentationModeChange
                    ),
                    this.shouldUseHLS(r) ||
                      e.addEventListener("canplay", this.onReady),
                    n &&
                      (e.setAttribute("playsinline", ""),
                      e.setAttribute("webkit-playsinline", ""),
                      e.setAttribute("x5-playsinline", ""));
                },
              },
              {
                key: "removeListeners",
                value: function (e, t) {
                  e.removeEventListener("canplay", this.onReady),
                    e.removeEventListener("play", this.onPlay),
                    e.removeEventListener("waiting", this.onBuffer),
                    e.removeEventListener("playing", this.onBufferEnd),
                    e.removeEventListener("pause", this.onPause),
                    e.removeEventListener("seeked", this.onSeek),
                    e.removeEventListener("ended", this.onEnded),
                    e.removeEventListener("error", this.onError),
                    e.removeEventListener(
                      "ratechange",
                      this.onPlayBackRateChange
                    ),
                    e.removeEventListener(
                      "enterpictureinpicture",
                      this.onEnablePIP
                    ),
                    e.removeEventListener(
                      "leavepictureinpicture",
                      this.onDisablePIP
                    ),
                    e.removeEventListener(
                      "webkitpresentationmodechanged",
                      this.onPresentationModeChange
                    ),
                    this.shouldUseHLS(t) ||
                      e.removeEventListener("canplay", this.onReady);
                },
              },
              {
                key: "shouldUseAudio",
                value: function (e) {
                  return (
                    !e.config.forceVideo &&
                    !e.config.attributes.poster &&
                    (i.AUDIO_EXTENSIONS.test(e.url) || e.config.forceAudio)
                  );
                },
              },
              {
                key: "shouldUseHLS",
                value: function (e) {
                  return (
                    !!this.props.config.forceHLS ||
                    (!u && (i.HLS_EXTENSIONS.test(e) || c.test(e)))
                  );
                },
              },
              {
                key: "shouldUseDASH",
                value: function (e) {
                  return (
                    i.DASH_EXTENSIONS.test(e) || this.props.config.forceDASH
                  );
                },
              },
              {
                key: "shouldUseFLV",
                value: function (e) {
                  return i.FLV_EXTENSIONS.test(e) || this.props.config.forceFLV;
                },
              },
              {
                key: "load",
                value: function (e) {
                  var t = this,
                    r = this.props.config,
                    n = r.hlsVersion,
                    i = r.hlsOptions,
                    a = r.dashVersion,
                    l = r.flvVersion;
                  if (
                    (this.hls && this.hls.destroy(),
                    this.dash && this.dash.reset(),
                    this.shouldUseHLS(e) &&
                      (0, o.getSDK)(
                        "https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js".replace(
                          "VERSION",
                          n
                        ),
                        "Hls"
                      ).then(function (r) {
                        if (
                          ((t.hls = new r(i)),
                          t.hls.on(r.Events.MANIFEST_PARSED, function () {
                            t.props.onReady();
                          }),
                          t.hls.on(r.Events.ERROR, function (e, n) {
                            t.props.onError(e, n, t.hls, r);
                          }),
                          c.test(e))
                        ) {
                          var n = e.match(c)[1];
                          t.hls.loadSource(
                            "https://videodelivery.net/{id}/manifest/video.m3u8".replace(
                              "{id}",
                              n
                            )
                          );
                        } else t.hls.loadSource(e);
                        t.hls.attachMedia(t.player), t.props.onLoaded();
                      }),
                    this.shouldUseDASH(e) &&
                      (0, o.getSDK)(
                        "https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js".replace(
                          "VERSION",
                          a
                        ),
                        "dashjs"
                      ).then(function (r) {
                        (t.dash = r.MediaPlayer().create()),
                          t.dash.initialize(t.player, e, t.props.playing),
                          t.dash.on("error", t.props.onError),
                          3 > parseInt(a)
                            ? t.dash.getDebug().setLogToBrowserConsole(!1)
                            : t.dash.updateSettings({
                                debug: { logLevel: r.Debug.LOG_LEVEL_NONE },
                              }),
                          t.props.onLoaded();
                      }),
                    this.shouldUseFLV(e) &&
                      (0, o.getSDK)(
                        "https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js".replace(
                          "VERSION",
                          l
                        ),
                        "flvjs"
                      ).then(function (r) {
                        (t.flv = r.createPlayer({ type: "flv", url: e })),
                          t.flv.attachMediaElement(t.player),
                          t.flv.on(r.Events.ERROR, function (e, n) {
                            t.props.onError(e, n, t.flv, r);
                          }),
                          t.flv.load(),
                          t.props.onLoaded();
                      }),
                    e instanceof Array)
                  )
                    this.player.load();
                  else if ((0, o.isMediaStream)(e))
                    try {
                      this.player.srcObject = e;
                    } catch (t) {
                      this.player.src = window.URL.createObjectURL(e);
                    }
                },
              },
              {
                key: "play",
                value: function () {
                  var e = this.player.play();
                  e && e.catch(this.props.onError);
                },
              },
              {
                key: "pause",
                value: function () {
                  this.player.pause();
                },
              },
              {
                key: "stop",
                value: function () {
                  this.player.removeAttribute("src"),
                    this.dash && this.dash.reset();
                },
              },
              {
                key: "seekTo",
                value: function (e) {
                  this.player.currentTime = e;
                },
              },
              {
                key: "setVolume",
                value: function (e) {
                  this.player.volume = e;
                },
              },
              {
                key: "enablePIP",
                value: function () {
                  this.player.requestPictureInPicture &&
                  document.pictureInPictureElement !== this.player
                    ? this.player.requestPictureInPicture()
                    : (0, o.supportsWebKitPresentationMode)(this.player) &&
                      "picture-in-picture" !==
                        this.player.webkitPresentationMode &&
                      this.player.webkitSetPresentationMode(
                        "picture-in-picture"
                      );
                },
              },
              {
                key: "disablePIP",
                value: function () {
                  document.exitPictureInPicture &&
                  document.pictureInPictureElement === this.player
                    ? document.exitPictureInPicture()
                    : (0, o.supportsWebKitPresentationMode)(this.player) &&
                      "inline" !== this.player.webkitPresentationMode &&
                      this.player.webkitSetPresentationMode("inline");
                },
              },
              {
                key: "setPlaybackRate",
                value: function (e) {
                  try {
                    this.player.playbackRate = e;
                  } catch (e) {
                    this.props.onError(e);
                  }
                },
              },
              {
                key: "getDuration",
                value: function () {
                  if (!this.player) return null;
                  var e = this.player,
                    t = e.duration,
                    r = e.seekable;
                  return t === 1 / 0 && r.length > 0 ? r.end(r.length - 1) : t;
                },
              },
              {
                key: "getCurrentTime",
                value: function () {
                  return this.player ? this.player.currentTime : null;
                },
              },
              {
                key: "getSecondsLoaded",
                value: function () {
                  if (!this.player) return null;
                  var e = this.player.buffered;
                  if (0 === e.length) return 0;
                  var t = e.end(e.length - 1),
                    r = this.getDuration();
                  return t > r ? r : t;
                },
              },
              {
                key: "getSource",
                value: function (e) {
                  var t = this.shouldUseHLS(e),
                    r = this.shouldUseDASH(e),
                    n = this.shouldUseFLV(e);
                  return e instanceof Array ||
                    (0, o.isMediaStream)(e) ||
                    t ||
                    r ||
                    n
                    ? void 0
                    : s.test(e)
                    ? e.replace("www.dropbox.com", "dl.dropboxusercontent.com")
                    : e;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.url,
                    r = e.playing,
                    o = e.loop,
                    i = e.controls,
                    a = e.muted,
                    l = e.config,
                    u = e.width,
                    s = e.height,
                    c = this.shouldUseAudio(this.props);
                  return n.default.createElement(
                    c ? "audio" : "video",
                    _extends(
                      {
                        ref: this.ref,
                        src: this.getSource(t),
                        style: {
                          width: "auto" === u ? u : "100%",
                          height: "auto" === s ? s : "100%",
                        },
                        preload: "auto",
                        autoPlay: r || void 0,
                        controls: i,
                        muted: a,
                        loop: o,
                      },
                      l.attributes
                    ),
                    t instanceof Array && t.map(this.renderSourceElement),
                    l.tracks.map(this.renderTrack)
                  );
                },
              },
            ]),
            _defineProperties(FilePlayer.prototype, r),
            a && _defineProperties(FilePlayer, a),
            FilePlayer
          );
        })(n.Component);
      (t.default = p),
        _defineProperty(p, "displayName", "FilePlayer"),
        _defineProperty(p, "canPlay", i.canPlay.file);
    },
    3911: function (e, t, r) {
      "use strict";
      function _typeof(e) {
        return (_typeof =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== _typeof(e) && "function" != typeof e))
            return { default: e };
          var t = _getRequireWildcardCache();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var i = n ? Object.getOwnPropertyDescriptor(e, o) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(r, o, i)
                : (r[o] = e[o]);
            }
          return (r.default = e), t && t.set(e, r), r;
        })(r(7294)),
        o = r(8045),
        i = r(1776);
      function _getRequireWildcardCache() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (_getRequireWildcardCache = function () {
            return e;
          }),
          e
        );
      }
      function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function _setPrototypeOf(e, t) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function _assertThisInitialized(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function _defineProperty(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var a = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && _setPrototypeOf(e, t);
        })(Kaltura, e);
        var t,
          r,
          i,
          a =
            ((t = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                r,
                n = _getPrototypeOf(Kaltura);
              if (t) {
                var o = _getPrototypeOf(this).constructor;
                r = Reflect.construct(n, arguments, o);
              } else r = n.apply(this, arguments);
              return (e = r) &&
                ("object" === _typeof(e) || "function" == typeof e)
                ? e
                : _assertThisInitialized(this);
            });
        function Kaltura() {
          var e;
          !(function (e, t) {
            if (!(e instanceof t))
              throw TypeError("Cannot call a class as a function");
          })(this, Kaltura);
          for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
            r[n] = arguments[n];
          return (
            _defineProperty(
              _assertThisInitialized((e = a.call.apply(a, [this].concat(r)))),
              "callPlayer",
              o.callPlayer
            ),
            _defineProperty(_assertThisInitialized(e), "duration", null),
            _defineProperty(_assertThisInitialized(e), "currentTime", null),
            _defineProperty(_assertThisInitialized(e), "secondsLoaded", null),
            _defineProperty(_assertThisInitialized(e), "mute", function () {
              e.callPlayer("mute");
            }),
            _defineProperty(_assertThisInitialized(e), "unmute", function () {
              e.callPlayer("unmute");
            }),
            _defineProperty(_assertThisInitialized(e), "ref", function (t) {
              e.iframe = t;
            }),
            e
          );
        }
        return (
          (r = [
            {
              key: "componentDidMount",
              value: function () {
                this.props.onMount && this.props.onMount(this);
              },
            },
            {
              key: "load",
              value: function (e) {
                var t = this;
                (0, o.getSDK)(
                  "https://cdn.embed.ly/player-0.1.0.min.js",
                  "playerjs"
                ).then(function (e) {
                  t.iframe &&
                    ((t.player = new e.Player(t.iframe)),
                    t.player.on("ready", function () {
                      setTimeout(function () {
                        (t.player.isReady = !0),
                          t.player.setLoop(t.props.loop),
                          t.props.muted && t.player.mute(),
                          t.addListeners(t.player, t.props),
                          t.props.onReady();
                      }, 500);
                    }));
                }, this.props.onError);
              },
            },
            {
              key: "addListeners",
              value: function (e, t) {
                var r = this;
                e.on("play", t.onPlay),
                  e.on("pause", t.onPause),
                  e.on("ended", t.onEnded),
                  e.on("error", t.onError),
                  e.on("timeupdate", function (e) {
                    var t = e.duration,
                      n = e.seconds;
                    (r.duration = t), (r.currentTime = n);
                  });
              },
            },
            {
              key: "play",
              value: function () {
                this.callPlayer("play");
              },
            },
            {
              key: "pause",
              value: function () {
                this.callPlayer("pause");
              },
            },
            { key: "stop", value: function () {} },
            {
              key: "seekTo",
              value: function (e) {
                this.callPlayer("setCurrentTime", e);
              },
            },
            {
              key: "setVolume",
              value: function (e) {
                this.callPlayer("setVolume", e);
              },
            },
            {
              key: "setLoop",
              value: function (e) {
                this.callPlayer("setLoop", e);
              },
            },
            {
              key: "getDuration",
              value: function () {
                return this.duration;
              },
            },
            {
              key: "getCurrentTime",
              value: function () {
                return this.currentTime;
              },
            },
            {
              key: "getSecondsLoaded",
              value: function () {
                return this.secondsLoaded;
              },
            },
            {
              key: "render",
              value: function () {
                return n.default.createElement("iframe", {
                  ref: this.ref,
                  src: this.props.url,
                  frameBorder: "0",
                  scrolling: "no",
                  style: { width: "100%", height: "100%" },
                  allow: "encrypted-media; autoplay; fullscreen;",
                  referrerPolicy: "no-referrer-when-downgrade",
                });
              },
            },
          ]),
          _defineProperties(Kaltura.prototype, r),
          i && _defineProperties(Kaltura, i),
          Kaltura
        );
      })(n.Component);
      (t.default = a),
        _defineProperty(a, "displayName", "Kaltura"),
        _defineProperty(a, "canPlay", i.canPlay.kaltura);
    },
    143: function (e, t, r) {
      "use strict";
      function _typeof(e) {
        return (_typeof =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== _typeof(e) && "function" != typeof e))
            return { default: e };
          var t = _getRequireWildcardCache();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var i = n ? Object.getOwnPropertyDescriptor(e, o) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(r, o, i)
                : (r[o] = e[o]);
            }
          return (r.default = e), t && t.set(e, r), r;
        })(r(7294)),
        o = r(8045),
        i = r(1776);
      function _getRequireWildcardCache() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (_getRequireWildcardCache = function () {
            return e;
          }),
          e
        );
      }
      function ownKeys(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ownKeys(Object(r), !0).forEach(function (t) {
                _defineProperty(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ownKeys(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function _setPrototypeOf(e, t) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function _assertThisInitialized(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function _defineProperty(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var a = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && _setPrototypeOf(e, t);
        })(Mixcloud, e);
        var t,
          r,
          a,
          l =
            ((t = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                r,
                n = _getPrototypeOf(Mixcloud);
              if (t) {
                var o = _getPrototypeOf(this).constructor;
                r = Reflect.construct(n, arguments, o);
              } else r = n.apply(this, arguments);
              return (e = r) &&
                ("object" === _typeof(e) || "function" == typeof e)
                ? e
                : _assertThisInitialized(this);
            });
        function Mixcloud() {
          var e;
          !(function (e, t) {
            if (!(e instanceof t))
              throw TypeError("Cannot call a class as a function");
          })(this, Mixcloud);
          for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
            r[n] = arguments[n];
          return (
            _defineProperty(
              _assertThisInitialized((e = l.call.apply(l, [this].concat(r)))),
              "callPlayer",
              o.callPlayer
            ),
            _defineProperty(_assertThisInitialized(e), "duration", null),
            _defineProperty(_assertThisInitialized(e), "currentTime", null),
            _defineProperty(_assertThisInitialized(e), "secondsLoaded", null),
            _defineProperty(_assertThisInitialized(e), "mute", function () {}),
            _defineProperty(
              _assertThisInitialized(e),
              "unmute",
              function () {}
            ),
            _defineProperty(_assertThisInitialized(e), "ref", function (t) {
              e.iframe = t;
            }),
            e
          );
        }
        return (
          (r = [
            {
              key: "componentDidMount",
              value: function () {
                this.props.onMount && this.props.onMount(this);
              },
            },
            {
              key: "load",
              value: function (e) {
                var t = this;
                (0, o.getSDK)(
                  "https://widget.mixcloud.com/media/js/widgetApi.js",
                  "Mixcloud"
                ).then(function (e) {
                  (t.player = e.PlayerWidget(t.iframe)),
                    t.player.ready.then(function () {
                      t.player.events.play.on(t.props.onPlay),
                        t.player.events.pause.on(t.props.onPause),
                        t.player.events.ended.on(t.props.onEnded),
                        t.player.events.error.on(t.props.error),
                        t.player.events.progress.on(function (e, r) {
                          (t.currentTime = e), (t.duration = r);
                        }),
                        t.props.onReady();
                    });
                }, this.props.onError);
              },
            },
            {
              key: "play",
              value: function () {
                this.callPlayer("play");
              },
            },
            {
              key: "pause",
              value: function () {
                this.callPlayer("pause");
              },
            },
            { key: "stop", value: function () {} },
            {
              key: "seekTo",
              value: function (e) {
                this.callPlayer("seek", e);
              },
            },
            { key: "setVolume", value: function (e) {} },
            {
              key: "getDuration",
              value: function () {
                return this.duration;
              },
            },
            {
              key: "getCurrentTime",
              value: function () {
                return this.currentTime;
              },
            },
            {
              key: "getSecondsLoaded",
              value: function () {
                return null;
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.url,
                  r = e.config,
                  a = t.match(i.MATCH_URL_MIXCLOUD)[1],
                  l = (0, o.queryString)(
                    _objectSpread(
                      _objectSpread({}, r.options),
                      {},
                      { feed: "/".concat(a, "/") }
                    )
                  );
                return n.default.createElement("iframe", {
                  key: a,
                  ref: this.ref,
                  style: { width: "100%", height: "100%" },
                  src: "https://www.mixcloud.com/widget/iframe/?".concat(l),
                  frameBorder: "0",
                  allow: "autoplay",
                });
              },
            },
          ]),
          _defineProperties(Mixcloud.prototype, r),
          a && _defineProperties(Mixcloud, a),
          Mixcloud
        );
      })(n.Component);
      (t.default = a),
        _defineProperty(a, "displayName", "Mixcloud"),
        _defineProperty(a, "canPlay", i.canPlay.mixcloud),
        _defineProperty(a, "loopOnEnded", !0);
    },
    2648: function (e, t, r) {
      "use strict";
      function _typeof(e) {
        return (_typeof =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== _typeof(e) && "function" != typeof e))
            return { default: e };
          var t = _getRequireWildcardCache();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var i = n ? Object.getOwnPropertyDescriptor(e, o) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(r, o, i)
                : (r[o] = e[o]);
            }
          return (r.default = e), t && t.set(e, r), r;
        })(r(7294)),
        o = r(8045),
        i = r(1776);
      function _getRequireWildcardCache() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (_getRequireWildcardCache = function () {
            return e;
          }),
          e
        );
      }
      function ownKeys(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ownKeys(Object(r), !0).forEach(function (t) {
                _defineProperty(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ownKeys(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function _setPrototypeOf(e, t) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function _assertThisInitialized(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function _defineProperty(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var a = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && _setPrototypeOf(e, t);
        })(SoundCloud, e);
        var t,
          r,
          i,
          a =
            ((t = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                r,
                n = _getPrototypeOf(SoundCloud);
              if (t) {
                var o = _getPrototypeOf(this).constructor;
                r = Reflect.construct(n, arguments, o);
              } else r = n.apply(this, arguments);
              return (e = r) &&
                ("object" === _typeof(e) || "function" == typeof e)
                ? e
                : _assertThisInitialized(this);
            });
        function SoundCloud() {
          var e;
          !(function (e, t) {
            if (!(e instanceof t))
              throw TypeError("Cannot call a class as a function");
          })(this, SoundCloud);
          for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
            r[n] = arguments[n];
          return (
            _defineProperty(
              _assertThisInitialized((e = a.call.apply(a, [this].concat(r)))),
              "callPlayer",
              o.callPlayer
            ),
            _defineProperty(_assertThisInitialized(e), "duration", null),
            _defineProperty(_assertThisInitialized(e), "currentTime", null),
            _defineProperty(_assertThisInitialized(e), "fractionLoaded", null),
            _defineProperty(_assertThisInitialized(e), "mute", function () {
              e.setVolume(0);
            }),
            _defineProperty(_assertThisInitialized(e), "unmute", function () {
              null !== e.props.volume && e.setVolume(e.props.volume);
            }),
            _defineProperty(_assertThisInitialized(e), "ref", function (t) {
              e.iframe = t;
            }),
            e
          );
        }
        return (
          (r = [
            {
              key: "componentDidMount",
              value: function () {
                this.props.onMount && this.props.onMount(this);
              },
            },
            {
              key: "load",
              value: function (e, t) {
                var r = this;
                (0, o.getSDK)(
                  "https://w.soundcloud.com/player/api.js",
                  "SC"
                ).then(function (n) {
                  if (r.iframe) {
                    var o = n.Widget.Events,
                      i = o.PLAY,
                      a = o.PLAY_PROGRESS,
                      l = o.PAUSE,
                      u = o.FINISH,
                      s = o.ERROR;
                    t ||
                      ((r.player = n.Widget(r.iframe)),
                      r.player.bind(i, r.props.onPlay),
                      r.player.bind(l, function () {
                        r.duration - r.currentTime < 0.05 || r.props.onPause();
                      }),
                      r.player.bind(a, function (e) {
                        (r.currentTime = e.currentPosition / 1e3),
                          (r.fractionLoaded = e.loadedProgress);
                      }),
                      r.player.bind(u, function () {
                        return r.props.onEnded();
                      }),
                      r.player.bind(s, function (e) {
                        return r.props.onError(e);
                      })),
                      r.player.load(
                        e,
                        _objectSpread(
                          _objectSpread({}, r.props.config.options),
                          {},
                          {
                            callback: function () {
                              r.player.getDuration(function (e) {
                                (r.duration = e / 1e3), r.props.onReady();
                              });
                            },
                          }
                        )
                      );
                  }
                });
              },
            },
            {
              key: "play",
              value: function () {
                this.callPlayer("play");
              },
            },
            {
              key: "pause",
              value: function () {
                this.callPlayer("pause");
              },
            },
            { key: "stop", value: function () {} },
            {
              key: "seekTo",
              value: function (e) {
                this.callPlayer("seekTo", 1e3 * e);
              },
            },
            {
              key: "setVolume",
              value: function (e) {
                this.callPlayer("setVolume", 100 * e);
              },
            },
            {
              key: "getDuration",
              value: function () {
                return this.duration;
              },
            },
            {
              key: "getCurrentTime",
              value: function () {
                return this.currentTime;
              },
            },
            {
              key: "getSecondsLoaded",
              value: function () {
                return this.fractionLoaded * this.duration;
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props.display;
                return n.default.createElement("iframe", {
                  ref: this.ref,
                  src: "https://w.soundcloud.com/player/?url=".concat(
                    encodeURIComponent(this.props.url)
                  ),
                  style: { width: "100%", height: "100%", display: e },
                  frameBorder: 0,
                  allow: "autoplay",
                });
              },
            },
          ]),
          _defineProperties(SoundCloud.prototype, r),
          i && _defineProperties(SoundCloud, i),
          SoundCloud
        );
      })(n.Component);
      (t.default = a),
        _defineProperty(a, "displayName", "SoundCloud"),
        _defineProperty(a, "canPlay", i.canPlay.soundcloud),
        _defineProperty(a, "loopOnEnded", !0);
    },
    993: function (e, t, r) {
      "use strict";
      function _typeof(e) {
        return (_typeof =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== _typeof(e) && "function" != typeof e))
            return { default: e };
          var t = _getRequireWildcardCache();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var i = n ? Object.getOwnPropertyDescriptor(e, o) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(r, o, i)
                : (r[o] = e[o]);
            }
          return (r.default = e), t && t.set(e, r), r;
        })(r(7294)),
        o = r(8045),
        i = r(1776);
      function _getRequireWildcardCache() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (_getRequireWildcardCache = function () {
            return e;
          }),
          e
        );
      }
      function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function _setPrototypeOf(e, t) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function _assertThisInitialized(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function _defineProperty(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var a = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && _setPrototypeOf(e, t);
        })(Streamable, e);
        var t,
          r,
          a,
          l =
            ((t = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                r,
                n = _getPrototypeOf(Streamable);
              if (t) {
                var o = _getPrototypeOf(this).constructor;
                r = Reflect.construct(n, arguments, o);
              } else r = n.apply(this, arguments);
              return (e = r) &&
                ("object" === _typeof(e) || "function" == typeof e)
                ? e
                : _assertThisInitialized(this);
            });
        function Streamable() {
          var e;
          !(function (e, t) {
            if (!(e instanceof t))
              throw TypeError("Cannot call a class as a function");
          })(this, Streamable);
          for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
            r[n] = arguments[n];
          return (
            _defineProperty(
              _assertThisInitialized((e = l.call.apply(l, [this].concat(r)))),
              "callPlayer",
              o.callPlayer
            ),
            _defineProperty(_assertThisInitialized(e), "duration", null),
            _defineProperty(_assertThisInitialized(e), "currentTime", null),
            _defineProperty(_assertThisInitialized(e), "secondsLoaded", null),
            _defineProperty(_assertThisInitialized(e), "mute", function () {
              e.callPlayer("mute");
            }),
            _defineProperty(_assertThisInitialized(e), "unmute", function () {
              e.callPlayer("unmute");
            }),
            _defineProperty(_assertThisInitialized(e), "ref", function (t) {
              e.iframe = t;
            }),
            e
          );
        }
        return (
          (r = [
            {
              key: "componentDidMount",
              value: function () {
                this.props.onMount && this.props.onMount(this);
              },
            },
            {
              key: "load",
              value: function (e) {
                var t = this;
                (0, o.getSDK)(
                  "https://cdn.embed.ly/player-0.1.0.min.js",
                  "playerjs"
                ).then(function (e) {
                  t.iframe &&
                    ((t.player = new e.Player(t.iframe)),
                    t.player.setLoop(t.props.loop),
                    t.player.on("ready", t.props.onReady),
                    t.player.on("play", t.props.onPlay),
                    t.player.on("pause", t.props.onPause),
                    t.player.on("seeked", t.props.onSeek),
                    t.player.on("ended", t.props.onEnded),
                    t.player.on("error", t.props.onError),
                    t.player.on("timeupdate", function (e) {
                      var r = e.duration,
                        n = e.seconds;
                      (t.duration = r), (t.currentTime = n);
                    }),
                    t.player.on("buffered", function (e) {
                      var r = e.percent;
                      t.duration && (t.secondsLoaded = t.duration * r);
                    }),
                    t.props.muted && t.player.mute());
                }, this.props.onError);
              },
            },
            {
              key: "play",
              value: function () {
                this.callPlayer("play");
              },
            },
            {
              key: "pause",
              value: function () {
                this.callPlayer("pause");
              },
            },
            { key: "stop", value: function () {} },
            {
              key: "seekTo",
              value: function (e) {
                this.callPlayer("setCurrentTime", e);
              },
            },
            {
              key: "setVolume",
              value: function (e) {
                this.callPlayer("setVolume", 100 * e);
              },
            },
            {
              key: "setLoop",
              value: function (e) {
                this.callPlayer("setLoop", e);
              },
            },
            {
              key: "getDuration",
              value: function () {
                return this.duration;
              },
            },
            {
              key: "getCurrentTime",
              value: function () {
                return this.currentTime;
              },
            },
            {
              key: "getSecondsLoaded",
              value: function () {
                return this.secondsLoaded;
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props.url.match(i.MATCH_URL_STREAMABLE)[1];
                return n.default.createElement("iframe", {
                  ref: this.ref,
                  src: "https://streamable.com/o/".concat(e),
                  frameBorder: "0",
                  scrolling: "no",
                  style: { width: "100%", height: "100%" },
                  allow: "encrypted-media; autoplay; fullscreen;",
                });
              },
            },
          ]),
          _defineProperties(Streamable.prototype, r),
          a && _defineProperties(Streamable, a),
          Streamable
        );
      })(n.Component);
      (t.default = a),
        _defineProperty(a, "displayName", "Streamable"),
        _defineProperty(a, "canPlay", i.canPlay.streamable);
    },
    9482: function (e, t, r) {
      "use strict";
      function _typeof(e) {
        return (_typeof =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== _typeof(e) && "function" != typeof e))
            return { default: e };
          var t = _getRequireWildcardCache();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var i = n ? Object.getOwnPropertyDescriptor(e, o) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(r, o, i)
                : (r[o] = e[o]);
            }
          return (r.default = e), t && t.set(e, r), r;
        })(r(7294)),
        o = r(8045),
        i = r(1776);
      function _getRequireWildcardCache() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (_getRequireWildcardCache = function () {
            return e;
          }),
          e
        );
      }
      function ownKeys(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function _setPrototypeOf(e, t) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function _assertThisInitialized(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function _defineProperty(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var a = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && _setPrototypeOf(e, t);
        })(Twitch, e);
        var t,
          r,
          a,
          l =
            ((t = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                r,
                n = _getPrototypeOf(Twitch);
              if (t) {
                var o = _getPrototypeOf(this).constructor;
                r = Reflect.construct(n, arguments, o);
              } else r = n.apply(this, arguments);
              return (e = r) &&
                ("object" === _typeof(e) || "function" == typeof e)
                ? e
                : _assertThisInitialized(this);
            });
        function Twitch() {
          var e;
          !(function (e, t) {
            if (!(e instanceof t))
              throw TypeError("Cannot call a class as a function");
          })(this, Twitch);
          for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
            r[n] = arguments[n];
          return (
            _defineProperty(
              _assertThisInitialized((e = l.call.apply(l, [this].concat(r)))),
              "callPlayer",
              o.callPlayer
            ),
            _defineProperty(
              _assertThisInitialized(e),
              "playerID",
              e.props.config.playerId ||
                "".concat("twitch-player-").concat((0, o.randomString)())
            ),
            _defineProperty(_assertThisInitialized(e), "mute", function () {
              e.callPlayer("setMuted", !0);
            }),
            _defineProperty(_assertThisInitialized(e), "unmute", function () {
              e.callPlayer("setMuted", !1);
            }),
            e
          );
        }
        return (
          (r = [
            {
              key: "componentDidMount",
              value: function () {
                this.props.onMount && this.props.onMount(this);
              },
            },
            {
              key: "load",
              value: function (e, t) {
                var r = this,
                  n = this.props,
                  a = n.playsinline,
                  l = n.onError,
                  u = n.config,
                  s = n.controls,
                  c = i.MATCH_URL_TWITCH_CHANNEL.test(e),
                  p = c
                    ? e.match(i.MATCH_URL_TWITCH_CHANNEL)[1]
                    : e.match(i.MATCH_URL_TWITCH_VIDEO)[1];
                if (t) {
                  c ? this.player.setChannel(p) : this.player.setVideo("v" + p);
                  return;
                }
                (0, o.getSDK)(
                  "https://player.twitch.tv/js/embed/v1.js",
                  "Twitch"
                ).then(function (t) {
                  r.player = new t.Player(
                    r.playerID,
                    (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2
                          ? ownKeys(Object(r), !0).forEach(function (t) {
                              _defineProperty(e, t, r[t]);
                            })
                          : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(r)
                            )
                          : ownKeys(Object(r)).forEach(function (t) {
                              Object.defineProperty(
                                e,
                                t,
                                Object.getOwnPropertyDescriptor(r, t)
                              );
                            });
                      }
                      return e;
                    })(
                      {
                        video: c ? "" : p,
                        channel: c ? p : "",
                        height: "100%",
                        width: "100%",
                        playsinline: a,
                        autoplay: r.props.playing,
                        muted: r.props.muted,
                        controls: !!c || s,
                        time: (0, o.parseStartTime)(e),
                      },
                      u.options
                    )
                  );
                  var n = t.Player,
                    i = n.READY,
                    l = n.PLAYING,
                    f = n.PAUSE,
                    y = n.ENDED,
                    d = n.ONLINE,
                    h = n.OFFLINE,
                    P = n.SEEK;
                  r.player.addEventListener(i, r.props.onReady),
                    r.player.addEventListener(l, r.props.onPlay),
                    r.player.addEventListener(f, r.props.onPause),
                    r.player.addEventListener(y, r.props.onEnded),
                    r.player.addEventListener(P, r.props.onSeek),
                    r.player.addEventListener(d, r.props.onLoaded),
                    r.player.addEventListener(h, r.props.onLoaded);
                }, l);
              },
            },
            {
              key: "play",
              value: function () {
                this.callPlayer("play");
              },
            },
            {
              key: "pause",
              value: function () {
                this.callPlayer("pause");
              },
            },
            {
              key: "stop",
              value: function () {
                this.callPlayer("pause");
              },
            },
            {
              key: "seekTo",
              value: function (e) {
                this.callPlayer("seek", e);
              },
            },
            {
              key: "setVolume",
              value: function (e) {
                this.callPlayer("setVolume", e);
              },
            },
            {
              key: "getDuration",
              value: function () {
                return this.callPlayer("getDuration");
              },
            },
            {
              key: "getCurrentTime",
              value: function () {
                return this.callPlayer("getCurrentTime");
              },
            },
            {
              key: "getSecondsLoaded",
              value: function () {
                return null;
              },
            },
            {
              key: "render",
              value: function () {
                return n.default.createElement("div", {
                  style: { width: "100%", height: "100%" },
                  id: this.playerID,
                });
              },
            },
          ]),
          _defineProperties(Twitch.prototype, r),
          a && _defineProperties(Twitch, a),
          Twitch
        );
      })(n.Component);
      (t.default = a),
        _defineProperty(a, "displayName", "Twitch"),
        _defineProperty(a, "canPlay", i.canPlay.twitch),
        _defineProperty(a, "loopOnEnded", !0);
    },
    6596: function (e, t, r) {
      "use strict";
      function _typeof(e) {
        return (_typeof =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== _typeof(e) && "function" != typeof e))
            return { default: e };
          var t = _getRequireWildcardCache();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var i = n ? Object.getOwnPropertyDescriptor(e, o) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(r, o, i)
                : (r[o] = e[o]);
            }
          return (r.default = e), t && t.set(e, r), r;
        })(r(7294)),
        o = r(8045),
        i = r(1776);
      function _getRequireWildcardCache() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (_getRequireWildcardCache = function () {
            return e;
          }),
          e
        );
      }
      function ownKeys(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function _setPrototypeOf(e, t) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function _assertThisInitialized(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function _defineProperty(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var a = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && _setPrototypeOf(e, t);
        })(Vidyard, e);
        var t,
          r,
          a,
          l =
            ((t = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                r,
                n = _getPrototypeOf(Vidyard);
              if (t) {
                var o = _getPrototypeOf(this).constructor;
                r = Reflect.construct(n, arguments, o);
              } else r = n.apply(this, arguments);
              return (e = r) &&
                ("object" === _typeof(e) || "function" == typeof e)
                ? e
                : _assertThisInitialized(this);
            });
        function Vidyard() {
          var e;
          !(function (e, t) {
            if (!(e instanceof t))
              throw TypeError("Cannot call a class as a function");
          })(this, Vidyard);
          for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
            r[n] = arguments[n];
          return (
            _defineProperty(
              _assertThisInitialized((e = l.call.apply(l, [this].concat(r)))),
              "callPlayer",
              o.callPlayer
            ),
            _defineProperty(_assertThisInitialized(e), "mute", function () {
              e.setVolume(0);
            }),
            _defineProperty(_assertThisInitialized(e), "unmute", function () {
              null !== e.props.volume && e.setVolume(e.props.volume);
            }),
            _defineProperty(_assertThisInitialized(e), "ref", function (t) {
              e.container = t;
            }),
            e
          );
        }
        return (
          (r = [
            {
              key: "componentDidMount",
              value: function () {
                this.props.onMount && this.props.onMount(this);
              },
            },
            {
              key: "load",
              value: function (e) {
                var t = this,
                  r = this.props,
                  n = r.playing,
                  a = r.config,
                  l = r.onError,
                  u = r.onDuration,
                  s = e && e.match(i.MATCH_URL_VIDYARD)[1];
                this.player && this.stop(),
                  (0, o.getSDK)(
                    "https://play.vidyard.com/embed/v4.js",
                    "VidyardV4",
                    "onVidyardAPI"
                  ).then(function (e) {
                    t.container &&
                      (e.api.addReadyListener(function (e, r) {
                        t.player ||
                          ((t.player = r),
                          t.player.on("ready", t.props.onReady),
                          t.player.on("play", t.props.onPlay),
                          t.player.on("pause", t.props.onPause),
                          t.player.on("seek", t.props.onSeek),
                          t.player.on("playerComplete", t.props.onEnded));
                      }, s),
                      e.api.renderPlayer(
                        (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2
                              ? ownKeys(Object(r), !0).forEach(function (t) {
                                  _defineProperty(e, t, r[t]);
                                })
                              : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(
                                  e,
                                  Object.getOwnPropertyDescriptors(r)
                                )
                              : ownKeys(Object(r)).forEach(function (t) {
                                  Object.defineProperty(
                                    e,
                                    t,
                                    Object.getOwnPropertyDescriptor(r, t)
                                  );
                                });
                          }
                          return e;
                        })(
                          {
                            uuid: s,
                            container: t.container,
                            autoplay: n ? 1 : 0,
                          },
                          a.options
                        )
                      ),
                      e.api.getPlayerMetadata(s).then(function (e) {
                        (t.duration = e.length_in_seconds),
                          u(e.length_in_seconds);
                      }));
                  }, l);
              },
            },
            {
              key: "play",
              value: function () {
                this.callPlayer("play");
              },
            },
            {
              key: "pause",
              value: function () {
                this.callPlayer("pause");
              },
            },
            {
              key: "stop",
              value: function () {
                window.VidyardV4.api.destroyPlayer(this.player);
              },
            },
            {
              key: "seekTo",
              value: function (e) {
                this.callPlayer("seek", e);
              },
            },
            {
              key: "setVolume",
              value: function (e) {
                this.callPlayer("setVolume", e);
              },
            },
            {
              key: "setPlaybackRate",
              value: function (e) {
                this.callPlayer("setPlaybackSpeed", e);
              },
            },
            {
              key: "getDuration",
              value: function () {
                return this.duration;
              },
            },
            {
              key: "getCurrentTime",
              value: function () {
                return this.callPlayer("currentTime");
              },
            },
            {
              key: "getSecondsLoaded",
              value: function () {
                return null;
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props.display;
                return n.default.createElement(
                  "div",
                  { style: { width: "100%", height: "100%", display: e } },
                  n.default.createElement("div", { ref: this.ref })
                );
              },
            },
          ]),
          _defineProperties(Vidyard.prototype, r),
          a && _defineProperties(Vidyard, a),
          Vidyard
        );
      })(n.Component);
      (t.default = a),
        _defineProperty(a, "displayName", "Vidyard"),
        _defineProperty(a, "canPlay", i.canPlay.vidyard);
    },
    868: function (e, t, r) {
      "use strict";
      function _typeof(e) {
        return (_typeof =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== _typeof(e) && "function" != typeof e))
            return { default: e };
          var t = _getRequireWildcardCache();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var i = n ? Object.getOwnPropertyDescriptor(e, o) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(r, o, i)
                : (r[o] = e[o]);
            }
          return (r.default = e), t && t.set(e, r), r;
        })(r(7294)),
        o = r(8045),
        i = r(1776);
      function _getRequireWildcardCache() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (_getRequireWildcardCache = function () {
            return e;
          }),
          e
        );
      }
      function ownKeys(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function _setPrototypeOf(e, t) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function _assertThisInitialized(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function _defineProperty(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var a = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && _setPrototypeOf(e, t);
        })(Vimeo, e);
        var t,
          r,
          i,
          a =
            ((t = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                r,
                n = _getPrototypeOf(Vimeo);
              if (t) {
                var o = _getPrototypeOf(this).constructor;
                r = Reflect.construct(n, arguments, o);
              } else r = n.apply(this, arguments);
              return (e = r) &&
                ("object" === _typeof(e) || "function" == typeof e)
                ? e
                : _assertThisInitialized(this);
            });
        function Vimeo() {
          var e;
          !(function (e, t) {
            if (!(e instanceof t))
              throw TypeError("Cannot call a class as a function");
          })(this, Vimeo);
          for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
            r[n] = arguments[n];
          return (
            _defineProperty(
              _assertThisInitialized((e = a.call.apply(a, [this].concat(r)))),
              "callPlayer",
              o.callPlayer
            ),
            _defineProperty(_assertThisInitialized(e), "duration", null),
            _defineProperty(_assertThisInitialized(e), "currentTime", null),
            _defineProperty(_assertThisInitialized(e), "secondsLoaded", null),
            _defineProperty(_assertThisInitialized(e), "mute", function () {
              e.setVolume(0);
            }),
            _defineProperty(_assertThisInitialized(e), "unmute", function () {
              null !== e.props.volume && e.setVolume(e.props.volume);
            }),
            _defineProperty(_assertThisInitialized(e), "ref", function (t) {
              e.container = t;
            }),
            e
          );
        }
        return (
          (r = [
            {
              key: "componentDidMount",
              value: function () {
                this.props.onMount && this.props.onMount(this);
              },
            },
            {
              key: "load",
              value: function (e) {
                var t = this;
                (this.duration = null),
                  (0, o.getSDK)(
                    "https://player.vimeo.com/api/player.js",
                    "Vimeo"
                  ).then(function (r) {
                    if (t.container) {
                      var n = t.props.config,
                        o = n.playerOptions,
                        i = n.title;
                      (t.player = new r.Player(
                        t.container,
                        (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2
                              ? ownKeys(Object(r), !0).forEach(function (t) {
                                  _defineProperty(e, t, r[t]);
                                })
                              : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(
                                  e,
                                  Object.getOwnPropertyDescriptors(r)
                                )
                              : ownKeys(Object(r)).forEach(function (t) {
                                  Object.defineProperty(
                                    e,
                                    t,
                                    Object.getOwnPropertyDescriptor(r, t)
                                  );
                                });
                          }
                          return e;
                        })(
                          {
                            url: e,
                            autoplay: t.props.playing,
                            muted: t.props.muted,
                            loop: t.props.loop,
                            playsinline: t.props.playsinline,
                            controls: t.props.controls,
                          },
                          o
                        )
                      )),
                        t.player
                          .ready()
                          .then(function () {
                            var e = t.container.querySelector("iframe");
                            (e.style.width = "100%"),
                              (e.style.height = "100%"),
                              i && (e.title = i);
                          })
                          .catch(t.props.onError),
                        t.player.on("loaded", function () {
                          t.props.onReady(), t.refreshDuration();
                        }),
                        t.player.on("play", function () {
                          t.props.onPlay(), t.refreshDuration();
                        }),
                        t.player.on("pause", t.props.onPause),
                        t.player.on("seeked", function (e) {
                          return t.props.onSeek(e.seconds);
                        }),
                        t.player.on("ended", t.props.onEnded),
                        t.player.on("error", t.props.onError),
                        t.player.on("timeupdate", function (e) {
                          var r = e.seconds;
                          t.currentTime = r;
                        }),
                        t.player.on("progress", function (e) {
                          var r = e.seconds;
                          t.secondsLoaded = r;
                        }),
                        t.player.on("bufferstart", t.props.onBuffer),
                        t.player.on("bufferend", t.props.onBufferEnd),
                        t.player.on("playbackratechange", function (e) {
                          return t.props.onPlaybackRateChange(e.playbackRate);
                        });
                    }
                  }, this.props.onError);
              },
            },
            {
              key: "refreshDuration",
              value: function () {
                var e = this;
                this.player.getDuration().then(function (t) {
                  e.duration = t;
                });
              },
            },
            {
              key: "play",
              value: function () {
                var e = this.callPlayer("play");
                e && e.catch(this.props.onError);
              },
            },
            {
              key: "pause",
              value: function () {
                this.callPlayer("pause");
              },
            },
            {
              key: "stop",
              value: function () {
                this.callPlayer("unload");
              },
            },
            {
              key: "seekTo",
              value: function (e) {
                this.callPlayer("setCurrentTime", e);
              },
            },
            {
              key: "setVolume",
              value: function (e) {
                this.callPlayer("setVolume", e);
              },
            },
            {
              key: "setLoop",
              value: function (e) {
                this.callPlayer("setLoop", e);
              },
            },
            {
              key: "setPlaybackRate",
              value: function (e) {
                this.callPlayer("setPlaybackRate", e);
              },
            },
            {
              key: "getDuration",
              value: function () {
                return this.duration;
              },
            },
            {
              key: "getCurrentTime",
              value: function () {
                return this.currentTime;
              },
            },
            {
              key: "getSecondsLoaded",
              value: function () {
                return this.secondsLoaded;
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props.display;
                return n.default.createElement("div", {
                  key: this.props.url,
                  ref: this.ref,
                  style: {
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    display: e,
                  },
                });
              },
            },
          ]),
          _defineProperties(Vimeo.prototype, r),
          i && _defineProperties(Vimeo, i),
          Vimeo
        );
      })(n.Component);
      (t.default = a),
        _defineProperty(a, "displayName", "Vimeo"),
        _defineProperty(a, "canPlay", i.canPlay.vimeo),
        _defineProperty(a, "forceLoad", !0);
    },
    1402: function (e, t, r) {
      "use strict";
      function _typeof(e) {
        return (_typeof =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== _typeof(e) && "function" != typeof e))
            return { default: e };
          var t = _getRequireWildcardCache();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var i = n ? Object.getOwnPropertyDescriptor(e, o) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(r, o, i)
                : (r[o] = e[o]);
            }
          return (r.default = e), t && t.set(e, r), r;
        })(r(7294)),
        o = r(8045),
        i = r(1776);
      function _getRequireWildcardCache() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (_getRequireWildcardCache = function () {
            return e;
          }),
          e
        );
      }
      function ownKeys(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function _setPrototypeOf(e, t) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function _assertThisInitialized(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function _defineProperty(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var a = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && _setPrototypeOf(e, t);
        })(Wistia, e);
        var t,
          r,
          a,
          l =
            ((t = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                r,
                n = _getPrototypeOf(Wistia);
              if (t) {
                var o = _getPrototypeOf(this).constructor;
                r = Reflect.construct(n, arguments, o);
              } else r = n.apply(this, arguments);
              return (e = r) &&
                ("object" === _typeof(e) || "function" == typeof e)
                ? e
                : _assertThisInitialized(this);
            });
        function Wistia() {
          var e;
          !(function (e, t) {
            if (!(e instanceof t))
              throw TypeError("Cannot call a class as a function");
          })(this, Wistia);
          for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
            r[n] = arguments[n];
          return (
            _defineProperty(
              _assertThisInitialized((e = l.call.apply(l, [this].concat(r)))),
              "callPlayer",
              o.callPlayer
            ),
            _defineProperty(
              _assertThisInitialized(e),
              "playerID",
              e.props.config.playerId ||
                "".concat("wistia-player-").concat((0, o.randomString)())
            ),
            _defineProperty(_assertThisInitialized(e), "onPlay", function () {
              var t;
              return (t = e.props).onPlay.apply(t, arguments);
            }),
            _defineProperty(_assertThisInitialized(e), "onPause", function () {
              var t;
              return (t = e.props).onPause.apply(t, arguments);
            }),
            _defineProperty(_assertThisInitialized(e), "onSeek", function () {
              var t;
              return (t = e.props).onSeek.apply(t, arguments);
            }),
            _defineProperty(_assertThisInitialized(e), "onEnded", function () {
              var t;
              return (t = e.props).onEnded.apply(t, arguments);
            }),
            _defineProperty(
              _assertThisInitialized(e),
              "onPlaybackRateChange",
              function () {
                var t;
                return (t = e.props).onPlaybackRateChange.apply(t, arguments);
              }
            ),
            _defineProperty(_assertThisInitialized(e), "mute", function () {
              e.callPlayer("mute");
            }),
            _defineProperty(_assertThisInitialized(e), "unmute", function () {
              e.callPlayer("unmute");
            }),
            e
          );
        }
        return (
          (r = [
            {
              key: "componentDidMount",
              value: function () {
                this.props.onMount && this.props.onMount(this);
              },
            },
            {
              key: "load",
              value: function (e) {
                var t = this,
                  r = this.props,
                  n = r.playing,
                  i = r.muted,
                  a = r.controls,
                  l = r.onReady,
                  u = r.config,
                  s = r.onError;
                (0, o.getSDK)(
                  "https://fast.wistia.com/assets/external/E-v1.js",
                  "Wistia"
                ).then(function (e) {
                  u.customControls &&
                    u.customControls.forEach(function (t) {
                      return e.defineControl(t);
                    }),
                    (window._wq = window._wq || []),
                    window._wq.push({
                      id: t.playerID,
                      options: (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var r = null != arguments[t] ? arguments[t] : {};
                          t % 2
                            ? ownKeys(Object(r), !0).forEach(function (t) {
                                _defineProperty(e, t, r[t]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(r)
                              )
                            : ownKeys(Object(r)).forEach(function (t) {
                                Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(r, t)
                                );
                              });
                        }
                        return e;
                      })(
                        {
                          autoPlay: n,
                          silentAutoPlay: "allow",
                          muted: i,
                          controlsVisibleOnLoad: a,
                          fullscreenButton: a,
                          playbar: a,
                          playbackRateControl: a,
                          qualityControl: a,
                          volumeControl: a,
                          settingsControl: a,
                          smallPlayButton: a,
                        },
                        u.options
                      ),
                      onReady: function (e) {
                        (t.player = e),
                          t.unbind(),
                          t.player.bind("play", t.onPlay),
                          t.player.bind("pause", t.onPause),
                          t.player.bind("seek", t.onSeek),
                          t.player.bind("end", t.onEnded),
                          t.player.bind(
                            "playbackratechange",
                            t.onPlaybackRateChange
                          ),
                          l();
                      },
                    });
                }, s);
              },
            },
            {
              key: "unbind",
              value: function () {
                this.player.unbind("play", this.onPlay),
                  this.player.unbind("pause", this.onPause),
                  this.player.unbind("seek", this.onSeek),
                  this.player.unbind("end", this.onEnded),
                  this.player.unbind(
                    "playbackratechange",
                    this.onPlaybackRateChange
                  );
              },
            },
            {
              key: "play",
              value: function () {
                this.callPlayer("play");
              },
            },
            {
              key: "pause",
              value: function () {
                this.callPlayer("pause");
              },
            },
            {
              key: "stop",
              value: function () {
                this.unbind(), this.callPlayer("remove");
              },
            },
            {
              key: "seekTo",
              value: function (e) {
                this.callPlayer("time", e);
              },
            },
            {
              key: "setVolume",
              value: function (e) {
                this.callPlayer("volume", e);
              },
            },
            {
              key: "setPlaybackRate",
              value: function (e) {
                this.callPlayer("playbackRate", e);
              },
            },
            {
              key: "getDuration",
              value: function () {
                return this.callPlayer("duration");
              },
            },
            {
              key: "getCurrentTime",
              value: function () {
                return this.callPlayer("time");
              },
            },
            {
              key: "getSecondsLoaded",
              value: function () {
                return null;
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props.url,
                  t = e && e.match(i.MATCH_URL_WISTIA)[1];
                return n.default.createElement("div", {
                  id: this.playerID,
                  key: t,
                  className: "wistia_embed wistia_async_".concat(t),
                  style: { width: "100%", height: "100%" },
                });
              },
            },
          ]),
          _defineProperties(Wistia.prototype, r),
          a && _defineProperties(Wistia, a),
          Wistia
        );
      })(n.Component);
      (t.default = a),
        _defineProperty(a, "displayName", "Wistia"),
        _defineProperty(a, "canPlay", i.canPlay.wistia),
        _defineProperty(a, "loopOnEnded", !0);
    },
    356: function (e, t, r) {
      "use strict";
      function _typeof(e) {
        return (_typeof =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== _typeof(e) && "function" != typeof e))
            return { default: e };
          var t = _getRequireWildcardCache();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var i = n ? Object.getOwnPropertyDescriptor(e, o) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(r, o, i)
                : (r[o] = e[o]);
            }
          return (r.default = e), t && t.set(e, r), r;
        })(r(7294)),
        o = r(8045),
        i = r(1776);
      function _getRequireWildcardCache() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (_getRequireWildcardCache = function () {
            return e;
          }),
          e
        );
      }
      function ownKeys(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ownKeys(Object(r), !0).forEach(function (t) {
                _defineProperty(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ownKeys(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function _slicedToArray(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
              var r = [],
                n = !0,
                o = !1,
                i = void 0;
              try {
                for (
                  var a, l = e[Symbol.iterator]();
                  !(n = (a = l.next()).done) &&
                  (r.push(a.value), !t || r.length !== t);
                  n = !0
                );
              } catch (e) {
                (o = !0), (i = e);
              } finally {
                try {
                  n || null == l.return || l.return();
                } finally {
                  if (o) throw i;
                }
              }
              return r;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return _arrayLikeToArray(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              if (
                ("Object" === r && e.constructor && (r = e.constructor.name),
                "Map" === r || "Set" === r)
              )
                return Array.from(e);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return _arrayLikeToArray(e, t);
            }
          })(e, t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function _arrayLikeToArray(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function _setPrototypeOf(e, t) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function _assertThisInitialized(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function _defineProperty(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var a = /[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,
        l = /user\/([a-zA-Z0-9_-]+)\/?/,
        u = /youtube-nocookie\.com/,
        s = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && _setPrototypeOf(e, t);
          })(YouTube, e);
          var t,
            r,
            s,
            c =
              ((t = (function () {
                if (
                  "undefined" == typeof Reflect ||
                  !Reflect.construct ||
                  Reflect.construct.sham
                )
                  return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  r,
                  n = _getPrototypeOf(YouTube);
                if (t) {
                  var o = _getPrototypeOf(this).constructor;
                  r = Reflect.construct(n, arguments, o);
                } else r = n.apply(this, arguments);
                return (e = r) &&
                  ("object" === _typeof(e) || "function" == typeof e)
                  ? e
                  : _assertThisInitialized(this);
              });
          function YouTube() {
            var e;
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, YouTube);
            for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
              r[n] = arguments[n];
            return (
              _defineProperty(
                _assertThisInitialized((e = c.call.apply(c, [this].concat(r)))),
                "callPlayer",
                o.callPlayer
              ),
              _defineProperty(
                _assertThisInitialized(e),
                "parsePlaylist",
                function (t) {
                  return t instanceof Array
                    ? {
                        listType: "playlist",
                        playlist: t.map(e.getID).join(","),
                      }
                    : a.test(t)
                    ? {
                        listType: "playlist",
                        list: _slicedToArray(t.match(a), 2)[1].replace(
                          /^UC/,
                          "UU"
                        ),
                      }
                    : l.test(t)
                    ? {
                        listType: "user_uploads",
                        list: _slicedToArray(t.match(l), 2)[1],
                      }
                    : {};
                }
              ),
              _defineProperty(
                _assertThisInitialized(e),
                "onStateChange",
                function (t) {
                  var r = t.data,
                    n = e.props,
                    o = n.onPlay,
                    i = n.onPause,
                    a = n.onBuffer,
                    l = n.onBufferEnd,
                    u = n.onEnded,
                    s = n.onReady,
                    c = n.loop,
                    p = n.config,
                    f = p.playerVars,
                    y = p.onUnstarted,
                    d = window.YT.PlayerState,
                    h = d.UNSTARTED,
                    P = d.PLAYING,
                    b = d.PAUSED,
                    _ = d.BUFFERING,
                    v = d.ENDED,
                    m = d.CUED;
                  if (
                    (r === h && y(),
                    r === P && (o(), l()),
                    r === b && i(),
                    r === _ && a(),
                    r === v)
                  ) {
                    var g = !!e.callPlayer("getPlaylist");
                    c && !g && (f.start ? e.seekTo(f.start) : e.play()), u();
                  }
                  r === m && s();
                }
              ),
              _defineProperty(_assertThisInitialized(e), "mute", function () {
                e.callPlayer("mute");
              }),
              _defineProperty(_assertThisInitialized(e), "unmute", function () {
                e.callPlayer("unMute");
              }),
              _defineProperty(_assertThisInitialized(e), "ref", function (t) {
                e.container = t;
              }),
              e
            );
          }
          return (
            (r = [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.onMount && this.props.onMount(this);
                },
              },
              {
                key: "getID",
                value: function (e) {
                  return !e || e instanceof Array || a.test(e)
                    ? null
                    : e.match(i.MATCH_URL_YOUTUBE)[1];
                },
              },
              {
                key: "load",
                value: function (e, t) {
                  var r = this,
                    n = this.props,
                    i = n.playing,
                    s = n.muted,
                    c = n.playsinline,
                    p = n.controls,
                    f = n.loop,
                    y = n.config,
                    d = n.onError,
                    h = y.playerVars,
                    P = y.embedOptions,
                    b = this.getID(e);
                  if (t) {
                    if (a.test(e) || l.test(e) || e instanceof Array) {
                      this.player.loadPlaylist(this.parsePlaylist(e));
                      return;
                    }
                    this.player.cueVideoById({
                      videoId: b,
                      startSeconds: (0, o.parseStartTime)(e) || h.start,
                      endSeconds: (0, o.parseEndTime)(e) || h.end,
                    });
                    return;
                  }
                  (0, o.getSDK)(
                    "https://www.youtube.com/iframe_api",
                    "YT",
                    "onYouTubeIframeAPIReady",
                    function (e) {
                      return e.loaded;
                    }
                  ).then(function (t) {
                    r.container &&
                      (r.player = new t.Player(
                        r.container,
                        _objectSpread(
                          {
                            width: "100%",
                            height: "100%",
                            videoId: b,
                            playerVars: _objectSpread(
                              _objectSpread(
                                {
                                  autoplay: i ? 1 : 0,
                                  mute: s ? 1 : 0,
                                  controls: p ? 1 : 0,
                                  start: (0, o.parseStartTime)(e),
                                  end: (0, o.parseEndTime)(e),
                                  origin: window.location.origin,
                                  playsinline: c ? 1 : 0,
                                },
                                r.parsePlaylist(e)
                              ),
                              h
                            ),
                            events: {
                              onReady: function () {
                                f && r.player.setLoop(!0), r.props.onReady();
                              },
                              onPlaybackRateChange: function (e) {
                                return r.props.onPlaybackRateChange(e.data);
                              },
                              onStateChange: r.onStateChange,
                              onError: function (e) {
                                return d(e.data);
                              },
                            },
                            host: u.test(e)
                              ? "https://www.youtube-nocookie.com"
                              : void 0,
                          },
                          P
                        )
                      ));
                  }, d),
                    P.events &&
                      console.warn(
                        "Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause"
                      );
                },
              },
              {
                key: "play",
                value: function () {
                  this.callPlayer("playVideo");
                },
              },
              {
                key: "pause",
                value: function () {
                  this.callPlayer("pauseVideo");
                },
              },
              {
                key: "stop",
                value: function () {
                  document.body.contains(this.callPlayer("getIframe")) &&
                    this.callPlayer("stopVideo");
                },
              },
              {
                key: "seekTo",
                value: function (e) {
                  this.callPlayer("seekTo", e),
                    this.props.playing || this.pause();
                },
              },
              {
                key: "setVolume",
                value: function (e) {
                  this.callPlayer("setVolume", 100 * e);
                },
              },
              {
                key: "setPlaybackRate",
                value: function (e) {
                  this.callPlayer("setPlaybackRate", e);
                },
              },
              {
                key: "setLoop",
                value: function (e) {
                  this.callPlayer("setLoop", e);
                },
              },
              {
                key: "getDuration",
                value: function () {
                  return this.callPlayer("getDuration");
                },
              },
              {
                key: "getCurrentTime",
                value: function () {
                  return this.callPlayer("getCurrentTime");
                },
              },
              {
                key: "getSecondsLoaded",
                value: function () {
                  return (
                    this.callPlayer("getVideoLoadedFraction") *
                    this.getDuration()
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.display;
                  return n.default.createElement(
                    "div",
                    { style: { width: "100%", height: "100%", display: e } },
                    n.default.createElement("div", { ref: this.ref })
                  );
                },
              },
            ]),
            _defineProperties(YouTube.prototype, r),
            s && _defineProperties(YouTube, s),
            YouTube
          );
        })(n.Component);
      (t.default = s),
        _defineProperty(s, "displayName", "YouTube"),
        _defineProperty(s, "canPlay", i.canPlay.youtube);
    },
    6497: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = r(7294),
        o = r(8045),
        i = r(1776);
      function _typeof(e) {
        return (_typeof =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function _getRequireWildcardCache() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (_getRequireWildcardCache = function () {
            return e;
          }),
          e
        );
      }
      function _interopRequireWildcard(e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" !== _typeof(e) && "function" != typeof e))
          return { default: e };
        var t = _getRequireWildcardCache();
        if (t && t.has(e)) return t.get(e);
        var r = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            var i = n ? Object.getOwnPropertyDescriptor(e, o) : null;
            i && (i.get || i.set)
              ? Object.defineProperty(r, o, i)
              : (r[o] = e[o]);
          }
        return (r.default = e), t && t.set(e, r), r;
      }
      var a = [
        {
          key: "youtube",
          name: "YouTube",
          canPlay: i.canPlay.youtube,
          lazyPlayer: (0, n.lazy)(function () {
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(r(356));
            });
          }),
        },
        {
          key: "soundcloud",
          name: "SoundCloud",
          canPlay: i.canPlay.soundcloud,
          lazyPlayer: (0, n.lazy)(function () {
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(r(2648));
            });
          }),
        },
        {
          key: "vimeo",
          name: "Vimeo",
          canPlay: i.canPlay.vimeo,
          lazyPlayer: (0, n.lazy)(function () {
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(r(868));
            });
          }),
        },
        {
          key: "facebook",
          name: "Facebook",
          canPlay: i.canPlay.facebook,
          lazyPlayer: (0, n.lazy)(function () {
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(r(1972));
            });
          }),
        },
        {
          key: "streamable",
          name: "Streamable",
          canPlay: i.canPlay.streamable,
          lazyPlayer: (0, n.lazy)(function () {
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(r(993));
            });
          }),
        },
        {
          key: "wistia",
          name: "Wistia",
          canPlay: i.canPlay.wistia,
          lazyPlayer: (0, n.lazy)(function () {
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(r(1402));
            });
          }),
        },
        {
          key: "twitch",
          name: "Twitch",
          canPlay: i.canPlay.twitch,
          lazyPlayer: (0, n.lazy)(function () {
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(r(9482));
            });
          }),
        },
        {
          key: "dailymotion",
          name: "DailyMotion",
          canPlay: i.canPlay.dailymotion,
          lazyPlayer: (0, n.lazy)(function () {
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(r(6807));
            });
          }),
        },
        {
          key: "mixcloud",
          name: "Mixcloud",
          canPlay: i.canPlay.mixcloud,
          lazyPlayer: (0, n.lazy)(function () {
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(r(143));
            });
          }),
        },
        {
          key: "vidyard",
          name: "Vidyard",
          canPlay: i.canPlay.vidyard,
          lazyPlayer: (0, n.lazy)(function () {
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(r(6596));
            });
          }),
        },
        {
          key: "kaltura",
          name: "Kaltura",
          canPlay: i.canPlay.kaltura,
          lazyPlayer: (0, n.lazy)(function () {
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(r(3911));
            });
          }),
        },
        {
          key: "file",
          name: "FilePlayer",
          canPlay: i.canPlay.file,
          canEnablePIP: function (e) {
            return (
              i.canPlay.file(e) &&
              (document.pictureInPictureEnabled ||
                (0, o.supportsWebKitPresentationMode)()) &&
              !i.AUDIO_EXTENSIONS.test(e)
            );
          },
          lazyPlayer: (0, n.lazy)(function () {
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(r(4926));
            });
          }),
        },
      ];
      t.default = a;
    },
    5741: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.defaultProps = t.propTypes = void 0);
      var n,
        o = (n = r(5697)) && n.__esModule ? n : { default: n },
        i = o.default.string,
        a = o.default.bool,
        l = o.default.number,
        u = o.default.array,
        s = o.default.oneOfType,
        c = o.default.shape,
        p = o.default.object,
        f = o.default.func,
        y = o.default.node,
        d = {
          url: s([i, u, p]),
          playing: a,
          loop: a,
          controls: a,
          volume: l,
          muted: a,
          playbackRate: l,
          width: s([i, l]),
          height: s([i, l]),
          style: p,
          progressInterval: l,
          playsinline: a,
          pip: a,
          stopOnUnmount: a,
          light: s([a, i, p]),
          playIcon: y,
          previewTabIndex: l,
          fallback: y,
          oEmbedUrl: i,
          wrapper: s([i, f, c({ render: f.isRequired })]),
          config: c({
            soundcloud: c({ options: p }),
            youtube: c({ playerVars: p, embedOptions: p, onUnstarted: f }),
            facebook: c({ appId: i, version: i, playerId: i, attributes: p }),
            dailymotion: c({ params: p }),
            vimeo: c({ playerOptions: p, title: i }),
            file: c({
              attributes: p,
              tracks: u,
              forceVideo: a,
              forceAudio: a,
              forceHLS: a,
              forceDASH: a,
              forceFLV: a,
              hlsOptions: p,
              hlsVersion: i,
              dashVersion: i,
              flvVersion: i,
            }),
            wistia: c({ options: p, playerId: i, customControls: u }),
            mixcloud: c({ options: p }),
            twitch: c({ options: p, playerId: i }),
            vidyard: c({ options: p }),
          }),
          onReady: f,
          onStart: f,
          onPlay: f,
          onPause: f,
          onBuffer: f,
          onBufferEnd: f,
          onEnded: f,
          onError: f,
          onDuration: f,
          onSeek: f,
          onPlaybackRateChange: f,
          onProgress: f,
          onClickPreview: f,
          onEnablePIP: f,
          onDisablePIP: f,
        };
      t.propTypes = d;
      var noop = function () {};
      t.defaultProps = {
        playing: !1,
        loop: !1,
        controls: !1,
        volume: null,
        muted: !1,
        playbackRate: 1,
        width: "640px",
        height: "360px",
        style: {},
        progressInterval: 1e3,
        playsinline: !1,
        pip: !1,
        stopOnUnmount: !0,
        light: !1,
        fallback: null,
        wrapper: "div",
        previewTabIndex: 0,
        oEmbedUrl: "https://noembed.com/embed?url={url}",
        config: {
          soundcloud: {
            options: {
              visual: !0,
              buying: !1,
              liking: !1,
              download: !1,
              sharing: !1,
              show_comments: !1,
              show_playcount: !1,
            },
          },
          youtube: {
            playerVars: {
              playsinline: 1,
              showinfo: 0,
              rel: 0,
              iv_load_policy: 3,
              modestbranding: 1,
            },
            embedOptions: {},
            onUnstarted: noop,
          },
          facebook: {
            appId: "1309697205772819",
            version: "v3.3",
            playerId: null,
            attributes: {},
          },
          dailymotion: { params: { api: 1, "endscreen-enable": !1 } },
          vimeo: {
            playerOptions: {
              autopause: !1,
              byline: !1,
              portrait: !1,
              title: !1,
            },
            title: null,
          },
          file: {
            attributes: {},
            tracks: [],
            forceVideo: !1,
            forceAudio: !1,
            forceHLS: !1,
            forceDASH: !1,
            forceFLV: !1,
            hlsOptions: {},
            hlsVersion: "1.1.4",
            dashVersion: "3.1.3",
            flvVersion: "1.5.0",
          },
          wistia: { options: {}, playerId: null, customControls: null },
          mixcloud: { options: { hide_cover: 1 } },
          twitch: { options: {}, playerId: null },
          vidyard: { options: {} },
        },
        onReady: noop,
        onStart: noop,
        onPlay: noop,
        onPause: noop,
        onBuffer: noop,
        onBufferEnd: noop,
        onEnded: noop,
        onError: noop,
        onDuration: noop,
        onSeek: noop,
        onPlaybackRateChange: noop,
        onProgress: noop,
        onClickPreview: noop,
        onEnablePIP: noop,
        onDisablePIP: noop,
      };
    },
    8045: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.parseStartTime = function (e) {
          return parseTimeParam(e, i);
        }),
        (t.parseEndTime = function (e) {
          return parseTimeParam(e, a);
        }),
        (t.randomString = function () {
          return Math.random().toString(36).substr(2, 5);
        }),
        (t.queryString = function (e) {
          return Object.keys(e)
            .map(function (t) {
              return "".concat(t, "=").concat(e[t]);
            })
            .join("&");
        }),
        (t.getSDK = function (e, t) {
          var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null,
            o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : function () {
                    return !0;
                  },
            i =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : n.default,
            a = getGlobal(t);
          return a && o(a)
            ? Promise.resolve(a)
            : new Promise(function (n, o) {
                if (s[e]) {
                  s[e].push({ resolve: n, reject: o });
                  return;
                }
                s[e] = [{ resolve: n, reject: o }];
                var onLoaded = function (t) {
                  s[e].forEach(function (e) {
                    return e.resolve(t);
                  });
                };
                if (r) {
                  var a = window[r];
                  window[r] = function () {
                    a && a(), onLoaded(getGlobal(t));
                  };
                }
                i(e, function (n) {
                  n
                    ? (s[e].forEach(function (e) {
                        return e.reject(n);
                      }),
                      (s[e] = null))
                    : r || onLoaded(getGlobal(t));
                });
              });
        }),
        (t.getConfig = function (e, t) {
          return (0, o.default)(t.config, e.config);
        }),
        (t.omit = function (e) {
          for (
            var t, r = arguments.length, n = Array(r > 1 ? r - 1 : 0), o = 1;
            o < r;
            o++
          )
            n[o - 1] = arguments[o];
          for (
            var i = (t = []).concat.apply(t, n),
              a = {},
              l = Object.keys(e),
              u = 0;
            u < l.length;
            u++
          ) {
            var s = l[u];
            -1 === i.indexOf(s) && (a[s] = e[s]);
          }
          return a;
        }),
        (t.callPlayer = function (e) {
          var t;
          if (!this.player || !this.player[e]) {
            var r = "ReactPlayer: "
              .concat(this.constructor.displayName, " player could not call %c")
              .concat(e, "%c – ");
            return (
              this.player
                ? this.player[e] || (r += "The method was not available")
                : (r += "The player was not available"),
              console.warn(r, "font-weight: bold", ""),
              null
            );
          }
          for (
            var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), i = 1;
            i < n;
            i++
          )
            o[i - 1] = arguments[i];
          return (t = this.player)[e].apply(t, o);
        }),
        (t.isMediaStream = function (e) {
          return (
            "undefined" != typeof window &&
            void 0 !== window.MediaStream &&
            e instanceof window.MediaStream
          );
        }),
        (t.isBlobUrl = function (e) {
          return /^blob:/.test(e);
        }),
        (t.supportsWebKitPresentationMode = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : document.createElement("video"),
            t = !1 === /iPhone|iPod/.test(navigator.userAgent);
          return (
            e.webkitSupportsPresentationMode &&
            "function" == typeof e.webkitSetPresentationMode &&
            t
          );
        });
      var n = _interopRequireDefault(r(9090)),
        o = _interopRequireDefault(r(2819));
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function _arrayLikeToArray(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var i = /[?&#](?:start|t)=([0-9hms]+)/,
        a = /[?&#]end=([0-9hms]+)/,
        l = /(\d+)(h|m|s)/g,
        u = /^\d+$/;
      function parseTimeParam(e, t) {
        if (!(e instanceof Array)) {
          var r = e.match(t);
          if (r) {
            var n = r[1];
            if (n.match(l))
              return (function (e) {
                for (var t = 0, r = l.exec(e); null !== r; ) {
                  var n,
                    o =
                      (function (e) {
                        if (Array.isArray(e)) return e;
                      })((n = r)) ||
                      (function (e, t) {
                        if (
                          "undefined" != typeof Symbol &&
                          Symbol.iterator in Object(e)
                        ) {
                          var r = [],
                            n = !0,
                            o = !1,
                            i = void 0;
                          try {
                            for (
                              var a, l = e[Symbol.iterator]();
                              !(n = (a = l.next()).done) &&
                              (r.push(a.value), !t || r.length !== t);
                              n = !0
                            );
                          } catch (e) {
                            (o = !0), (i = e);
                          } finally {
                            try {
                              n || null == l.return || l.return();
                            } finally {
                              if (o) throw i;
                            }
                          }
                          return r;
                        }
                      })(n, 3) ||
                      (function (e, t) {
                        if (e) {
                          if ("string" == typeof e)
                            return _arrayLikeToArray(e, t);
                          var r = Object.prototype.toString
                            .call(e)
                            .slice(8, -1);
                          if (
                            ("Object" === r &&
                              e.constructor &&
                              (r = e.constructor.name),
                            "Map" === r || "Set" === r)
                          )
                            return Array.from(e);
                          if (
                            "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          )
                            return _arrayLikeToArray(e, t);
                        }
                      })(n, 3) ||
                      (function () {
                        throw TypeError(
                          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })(),
                    i = o[1],
                    a = o[2];
                  "h" === a && (t += 3600 * parseInt(i, 10)),
                    "m" === a && (t += 60 * parseInt(i, 10)),
                    "s" === a && (t += parseInt(i, 10)),
                    (r = l.exec(e));
                }
                return t;
              })(n);
            if (u.test(n)) return parseInt(n);
          }
        }
      }
      function getGlobal(e) {
        return window[e]
          ? window[e]
          : window.exports && window.exports[e]
          ? window.exports[e]
          : window.module && window.module.exports && window.module.exports[e]
          ? window.module.exports[e]
          : null;
      }
      var s = {};
    },
    2819: function (e) {
      "use strict";
      var isMergeableObject = function (e) {
          var r;
          return (
            !!e &&
            "object" == typeof e &&
            "[object RegExp]" !== (r = Object.prototype.toString.call(e)) &&
            "[object Date]" !== r &&
            e.$$typeof !== t
          );
        },
        t =
          "function" == typeof Symbol && Symbol.for
            ? Symbol.for("react.element")
            : 60103;
      function cloneUnlessOtherwiseSpecified(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e)
          ? deepmerge(Array.isArray(e) ? [] : {}, e, t)
          : e;
      }
      function defaultArrayMerge(e, t, r) {
        return e.concat(t).map(function (e) {
          return cloneUnlessOtherwiseSpecified(e, r);
        });
      }
      function getKeys(e) {
        return Object.keys(e).concat(
          Object.getOwnPropertySymbols
            ? Object.getOwnPropertySymbols(e).filter(function (t) {
                return Object.propertyIsEnumerable.call(e, t);
              })
            : []
        );
      }
      function propertyIsOnObject(e, t) {
        try {
          return t in e;
        } catch (e) {
          return !1;
        }
      }
      function deepmerge(e, t, r) {
        ((r = r || {}).arrayMerge = r.arrayMerge || defaultArrayMerge),
          (r.isMergeableObject = r.isMergeableObject || isMergeableObject),
          (r.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified);
        var n,
          o,
          i = Array.isArray(t);
        return i !== Array.isArray(e)
          ? cloneUnlessOtherwiseSpecified(t, r)
          : i
          ? r.arrayMerge(e, t, r)
          : ((o = {}),
            (n = r).isMergeableObject(e) &&
              getKeys(e).forEach(function (t) {
                o[t] = cloneUnlessOtherwiseSpecified(e[t], n);
              }),
            getKeys(t).forEach(function (r) {
              (!propertyIsOnObject(e, r) ||
                (Object.hasOwnProperty.call(e, r) &&
                  Object.propertyIsEnumerable.call(e, r))) &&
                (propertyIsOnObject(e, r) && n.isMergeableObject(t[r])
                  ? (o[r] = (function (e, t) {
                      if (!t.customMerge) return deepmerge;
                      var r = t.customMerge(e);
                      return "function" == typeof r ? r : deepmerge;
                    })(r, n)(e[r], t[r], n))
                  : (o[r] = cloneUnlessOtherwiseSpecified(t[r], n)));
            }),
            o);
      }
      (deepmerge.all = function (e, t) {
        if (!Array.isArray(e)) throw Error("first argument should be an array");
        return e.reduce(function (e, r) {
          return deepmerge(e, r, t);
        }, {});
      }),
        (e.exports = deepmerge);
    },
  },
]);
