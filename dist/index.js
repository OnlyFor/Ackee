!(function () {
  'use strict'
  function e(e, t) {
    return (
      t.forEach(function (t) {
        t &&
          'string' != typeof t &&
          !Array.isArray(t) &&
          Object.keys(t).forEach(function (n) {
            if ('default' !== n && !(n in e)) {
              var r = Object.getOwnPropertyDescriptor(t, n)
              Object.defineProperty(
                e,
                n,
                r.get
                  ? r
                  : {
                      enumerable: !0,
                      get: function () {
                        return t[n]
                      },
                    },
              )
            }
          })
      }),
      Object.freeze(e)
    )
  }
  function t(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e
  }
  function n(e) {
    if (Object.prototype.hasOwnProperty.call(e, '__esModule')) return e
    var t = e.default
    if ('function' == typeof t) {
      var n = function e() {
        var n = !1
        try {
          n = this instanceof e
        } catch {}
        return n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
      }
      n.prototype = t.prototype
    } else n = {}
    return (
      Object.defineProperty(n, '__esModule', { value: !0 }),
      Object.keys(e).forEach(function (t) {
        var r = Object.getOwnPropertyDescriptor(e, t)
        Object.defineProperty(
          n,
          t,
          r.get
            ? r
            : {
                enumerable: !0,
                get: function () {
                  return e[t]
                },
              },
        )
      }),
      n
    )
  }
  var r,
    i,
    a = { exports: {} },
    o = {}
  function s() {
    if (r) return o
    r = 1
    var e = Symbol.for('react.element'),
      t = Symbol.for('react.portal'),
      n = Symbol.for('react.fragment'),
      i = Symbol.for('react.strict_mode'),
      a = Symbol.for('react.profiler'),
      s = Symbol.for('react.provider'),
      l = Symbol.for('react.context'),
      u = Symbol.for('react.forward_ref'),
      c = Symbol.for('react.suspense'),
      f = Symbol.for('react.memo'),
      d = Symbol.for('react.lazy'),
      p = Symbol.iterator
    var h = {
        isMounted: function () {
          return !1
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      m = Object.assign,
      v = {}
    function y(e, t, n) {
      ;((this.props = e), (this.context = t), (this.refs = v), (this.updater = n || h))
    }
    function g() {}
    function b(e, t, n) {
      ;((this.props = e), (this.context = t), (this.refs = v), (this.updater = n || h))
    }
    ;((y.prototype.isReactComponent = {}),
      (y.prototype.setState = function (e, t) {
        if ('object' != typeof e && 'function' != typeof e && null != e)
          throw Error(
            'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
          )
        this.updater.enqueueSetState(this, e, t, 'setState')
      }),
      (y.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
      }),
      (g.prototype = y.prototype))
    var E = (b.prototype = new g())
    ;((E.constructor = b), m(E, y.prototype), (E.isPureReactComponent = !0))
    var w = Array.isArray,
      _ = Object.prototype.hasOwnProperty,
      k = { current: null },
      S = { key: !0, ref: !0, __self: !0, __source: !0 }
    function T(t, n, r) {
      var i,
        a = {},
        o = null,
        s = null
      if (null != n)
        for (i in (void 0 !== n.ref && (s = n.ref), void 0 !== n.key && (o = '' + n.key), n))
          _.call(n, i) && !S.hasOwnProperty(i) && (a[i] = n[i])
      var l = arguments.length - 2
      if (1 === l) a.children = r
      else if (1 < l) {
        for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2]
        a.children = u
      }
      if (t && t.defaultProps) for (i in (l = t.defaultProps)) void 0 === a[i] && (a[i] = l[i])
      return { $$typeof: e, type: t, key: o, ref: s, props: a, _owner: k.current }
    }
    function x(t) {
      return 'object' == typeof t && null !== t && t.$$typeof === e
    }
    var O = /\/+/g
    function C(e, t) {
      return 'object' == typeof e && null !== e && null != e.key
        ? (function (e) {
            var t = { '=': '=0', ':': '=2' }
            return (
              '$' +
              e.replace(/[=:]/g, function (e) {
                return t[e]
              })
            )
          })('' + e.key)
        : t.toString(36)
    }
    function R(n, r, i, a, o) {
      var s = typeof n
      ;('undefined' !== s && 'boolean' !== s) || (n = null)
      var l = !1
      if (null === n) l = !0
      else
        switch (s) {
          case 'string':
          case 'number':
            l = !0
            break
          case 'object':
            switch (n.$$typeof) {
              case e:
              case t:
                l = !0
            }
        }
      if (l)
        return (
          (o = o((l = n))),
          (n = '' === a ? '.' + C(l, 0) : a),
          w(o)
            ? ((i = ''),
              null != n && (i = n.replace(O, '$&/') + '/'),
              R(o, r, i, '', function (e) {
                return e
              }))
            : null != o &&
              (x(o) &&
                (o = (function (t, n) {
                  return { $$typeof: e, type: t.type, key: n, ref: t.ref, props: t.props, _owner: t._owner }
                })(o, i + (!o.key || (l && l.key === o.key) ? '' : ('' + o.key).replace(O, '$&/') + '/') + n)),
              r.push(o)),
          1
        )
      if (((l = 0), (a = '' === a ? '.' : a + ':'), w(n)))
        for (var u = 0; u < n.length; u++) {
          var c = a + C((s = n[u]), u)
          l += R(s, r, i, c, o)
        }
      else if (
        ((c = (function (e) {
          return null === e || 'object' != typeof e
            ? null
            : 'function' == typeof (e = (p && e[p]) || e['@@iterator'])
              ? e
              : null
        })(n)),
        'function' == typeof c)
      )
        for (n = c.call(n), u = 0; !(s = n.next()).done; ) l += R((s = s.value), r, i, (c = a + C(s, u++)), o)
      else if ('object' === s)
        throw (
          (r = String(n)),
          Error(
            'Objects are not valid as a React child (found: ' +
              ('[object Object]' === r ? 'object with keys {' + Object.keys(n).join(', ') + '}' : r) +
              '). If you meant to render a collection of children, use an array instead.',
          )
        )
      return l
    }
    function N(e, t, n) {
      if (null == e) return e
      var r = [],
        i = 0
      return (
        R(e, r, '', '', function (e) {
          return t.call(n, e, i++)
        }),
        r
      )
    }
    function D(e) {
      if (-1 === e._status) {
        var t = e._result
        ;((t = t()).then(
          function (t) {
            ;(0 !== e._status && -1 !== e._status) || ((e._status = 1), (e._result = t))
          },
          function (t) {
            ;(0 !== e._status && -1 !== e._status) || ((e._status = 2), (e._result = t))
          },
        ),
          -1 === e._status && ((e._status = 0), (e._result = t)))
      }
      if (1 === e._status) return e._result.default
      throw e._result
    }
    var I = { current: null },
      P = { transition: null },
      F = { ReactCurrentDispatcher: I, ReactCurrentBatchConfig: P, ReactCurrentOwner: k }
    function A() {
      throw Error('act(...) is not supported in production builds of React.')
    }
    return (
      (o.Children = {
        map: N,
        forEach: function (e, t, n) {
          N(
            e,
            function () {
              t.apply(this, arguments)
            },
            n,
          )
        },
        count: function (e) {
          var t = 0
          return (
            N(e, function () {
              t++
            }),
            t
          )
        },
        toArray: function (e) {
          return (
            N(e, function (e) {
              return e
            }) || []
          )
        },
        only: function (e) {
          if (!x(e)) throw Error('React.Children.only expected to receive a single React element child.')
          return e
        },
      }),
      (o.Component = y),
      (o.Fragment = n),
      (o.Profiler = a),
      (o.PureComponent = b),
      (o.StrictMode = i),
      (o.Suspense = c),
      (o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F),
      (o.act = A),
      (o.cloneElement = function (t, n, r) {
        if (null == t)
          throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + t + '.')
        var i = m({}, t.props),
          a = t.key,
          o = t.ref,
          s = t._owner
        if (null != n) {
          if (
            (void 0 !== n.ref && ((o = n.ref), (s = k.current)),
            void 0 !== n.key && (a = '' + n.key),
            t.type && t.type.defaultProps)
          )
            var l = t.type.defaultProps
          for (u in n) _.call(n, u) && !S.hasOwnProperty(u) && (i[u] = void 0 === n[u] && void 0 !== l ? l[u] : n[u])
        }
        var u = arguments.length - 2
        if (1 === u) i.children = r
        else if (1 < u) {
          l = Array(u)
          for (var c = 0; c < u; c++) l[c] = arguments[c + 2]
          i.children = l
        }
        return { $$typeof: e, type: t.type, key: a, ref: o, props: i, _owner: s }
      }),
      (o.createContext = function (e) {
        return (
          ((e = {
            $$typeof: l,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
          }).Provider = { $$typeof: s, _context: e }),
          (e.Consumer = e)
        )
      }),
      (o.createElement = T),
      (o.createFactory = function (e) {
        var t = T.bind(null, e)
        return ((t.type = e), t)
      }),
      (o.createRef = function () {
        return { current: null }
      }),
      (o.forwardRef = function (e) {
        return { $$typeof: u, render: e }
      }),
      (o.isValidElement = x),
      (o.lazy = function (e) {
        return { $$typeof: d, _payload: { _status: -1, _result: e }, _init: D }
      }),
      (o.memo = function (e, t) {
        return { $$typeof: f, type: e, compare: void 0 === t ? null : t }
      }),
      (o.startTransition = function (e) {
        var t = P.transition
        P.transition = {}
        try {
          e()
        } finally {
          P.transition = t
        }
      }),
      (o.unstable_act = A),
      (o.useCallback = function (e, t) {
        return I.current.useCallback(e, t)
      }),
      (o.useContext = function (e) {
        return I.current.useContext(e)
      }),
      (o.useDebugValue = function () {}),
      (o.useDeferredValue = function (e) {
        return I.current.useDeferredValue(e)
      }),
      (o.useEffect = function (e, t) {
        return I.current.useEffect(e, t)
      }),
      (o.useId = function () {
        return I.current.useId()
      }),
      (o.useImperativeHandle = function (e, t, n) {
        return I.current.useImperativeHandle(e, t, n)
      }),
      (o.useInsertionEffect = function (e, t) {
        return I.current.useInsertionEffect(e, t)
      }),
      (o.useLayoutEffect = function (e, t) {
        return I.current.useLayoutEffect(e, t)
      }),
      (o.useMemo = function (e, t) {
        return I.current.useMemo(e, t)
      }),
      (o.useReducer = function (e, t, n) {
        return I.current.useReducer(e, t, n)
      }),
      (o.useRef = function (e) {
        return I.current.useRef(e)
      }),
      (o.useState = function (e) {
        return I.current.useState(e)
      }),
      (o.useSyncExternalStore = function (e, t, n) {
        return I.current.useSyncExternalStore(e, t, n)
      }),
      (o.useTransition = function () {
        return I.current.useTransition()
      }),
      (o.version = '18.3.1'),
      o
    )
  }
  function l() {
    return (i || ((i = 1), (a.exports = s())), a.exports)
  }
  var u,
    c,
    f,
    d,
    p,
    h = l(),
    m = {},
    v = { exports: {} },
    y = {},
    g = { exports: {} },
    b = {}
  function E() {
    return (
      c ||
        ((c = 1),
        (g.exports =
          (u ||
            ((u = 1),
            (function (e) {
              function t(e, t) {
                var n = e.length
                e.push(t)
                e: for (; 0 < n; ) {
                  var r = (n - 1) >>> 1,
                    a = e[r]
                  if (!(0 < i(a, t))) break e
                  ;((e[r] = t), (e[n] = a), (n = r))
                }
              }
              function n(e) {
                return 0 === e.length ? null : e[0]
              }
              function r(e) {
                if (0 === e.length) return null
                var t = e[0],
                  n = e.pop()
                if (n !== t) {
                  e[0] = n
                  e: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
                    var s = 2 * (r + 1) - 1,
                      l = e[s],
                      u = s + 1,
                      c = e[u]
                    if (0 > i(l, n))
                      u < a && 0 > i(c, l) ? ((e[r] = c), (e[u] = n), (r = u)) : ((e[r] = l), (e[s] = n), (r = s))
                    else {
                      if (!(u < a && 0 > i(c, n))) break e
                      ;((e[r] = c), (e[u] = n), (r = u))
                    }
                  }
                }
                return t
              }
              function i(e, t) {
                var n = e.sortIndex - t.sortIndex
                return 0 !== n ? n : e.id - t.id
              }
              if ('object' == typeof performance && 'function' == typeof performance.now) {
                var a = performance
                e.unstable_now = function () {
                  return a.now()
                }
              } else {
                var o = Date,
                  s = o.now()
                e.unstable_now = function () {
                  return o.now() - s
                }
              }
              var l = [],
                u = [],
                c = 1,
                f = null,
                d = 3,
                p = !1,
                h = !1,
                m = !1,
                v = 'function' == typeof setTimeout ? setTimeout : null,
                y = 'function' == typeof clearTimeout ? clearTimeout : null,
                g = 'undefined' != typeof setImmediate ? setImmediate : null
              function b(e) {
                for (var i = n(u); null !== i; ) {
                  if (null === i.callback) r(u)
                  else {
                    if (!(i.startTime <= e)) break
                    ;(r(u), (i.sortIndex = i.expirationTime), t(l, i))
                  }
                  i = n(u)
                }
              }
              function E(e) {
                if (((m = !1), b(e), !h))
                  if (null !== n(l)) ((h = !0), I(w))
                  else {
                    var t = n(u)
                    null !== t && P(E, t.startTime - e)
                  }
              }
              function w(t, i) {
                ;((h = !1), m && ((m = !1), y(T), (T = -1)), (p = !0))
                var a = d
                try {
                  for (b(i), f = n(l); null !== f && (!(f.expirationTime > i) || (t && !C())); ) {
                    var o = f.callback
                    if ('function' == typeof o) {
                      ;((f.callback = null), (d = f.priorityLevel))
                      var s = o(f.expirationTime <= i)
                      ;((i = e.unstable_now()), 'function' == typeof s ? (f.callback = s) : f === n(l) && r(l), b(i))
                    } else r(l)
                    f = n(l)
                  }
                  if (null !== f) var c = !0
                  else {
                    var v = n(u)
                    ;(null !== v && P(E, v.startTime - i), (c = !1))
                  }
                  return c
                } finally {
                  ;((f = null), (d = a), (p = !1))
                }
              }
              'undefined' != typeof navigator &&
                void 0 !== navigator.scheduling &&
                void 0 !== navigator.scheduling.isInputPending &&
                navigator.scheduling.isInputPending.bind(navigator.scheduling)
              var _,
                k = !1,
                S = null,
                T = -1,
                x = 5,
                O = -1
              function C() {
                return !(e.unstable_now() - O < x)
              }
              function R() {
                if (null !== S) {
                  var t = e.unstable_now()
                  O = t
                  var n = !0
                  try {
                    n = S(!0, t)
                  } finally {
                    n ? _() : ((k = !1), (S = null))
                  }
                } else k = !1
              }
              if ('function' == typeof g)
                _ = function () {
                  g(R)
                }
              else if ('undefined' != typeof MessageChannel) {
                var N = new MessageChannel(),
                  D = N.port2
                ;((N.port1.onmessage = R),
                  (_ = function () {
                    D.postMessage(null)
                  }))
              } else
                _ = function () {
                  v(R, 0)
                }
              function I(e) {
                ;((S = e), k || ((k = !0), _()))
              }
              function P(t, n) {
                T = v(function () {
                  t(e.unstable_now())
                }, n)
              }
              ;((e.unstable_IdlePriority = 5),
                (e.unstable_ImmediatePriority = 1),
                (e.unstable_LowPriority = 4),
                (e.unstable_NormalPriority = 3),
                (e.unstable_Profiling = null),
                (e.unstable_UserBlockingPriority = 2),
                (e.unstable_cancelCallback = function (e) {
                  e.callback = null
                }),
                (e.unstable_continueExecution = function () {
                  h || p || ((h = !0), I(w))
                }),
                (e.unstable_forceFrameRate = function (e) {
                  0 > e || 125 < e
                    ? console.error(
                        'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                      )
                    : (x = 0 < e ? Math.floor(1e3 / e) : 5)
                }),
                (e.unstable_getCurrentPriorityLevel = function () {
                  return d
                }),
                (e.unstable_getFirstCallbackNode = function () {
                  return n(l)
                }),
                (e.unstable_next = function (e) {
                  switch (d) {
                    case 1:
                    case 2:
                    case 3:
                      var t = 3
                      break
                    default:
                      t = d
                  }
                  var n = d
                  d = t
                  try {
                    return e()
                  } finally {
                    d = n
                  }
                }),
                (e.unstable_pauseExecution = function () {}),
                (e.unstable_requestPaint = function () {}),
                (e.unstable_runWithPriority = function (e, t) {
                  switch (e) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                      break
                    default:
                      e = 3
                  }
                  var n = d
                  d = e
                  try {
                    return t()
                  } finally {
                    d = n
                  }
                }),
                (e.unstable_scheduleCallback = function (r, i, a) {
                  var o = e.unstable_now()
                  switch (
                    ((a = 'object' == typeof a && null !== a && 'number' == typeof (a = a.delay) && 0 < a ? o + a : o),
                    r)
                  ) {
                    case 1:
                      var s = -1
                      break
                    case 2:
                      s = 250
                      break
                    case 5:
                      s = 1073741823
                      break
                    case 4:
                      s = 1e4
                      break
                    default:
                      s = 5e3
                  }
                  return (
                    (r = {
                      id: c++,
                      callback: i,
                      priorityLevel: r,
                      startTime: a,
                      expirationTime: (s = a + s),
                      sortIndex: -1,
                    }),
                    a > o
                      ? ((r.sortIndex = a),
                        t(u, r),
                        null === n(l) && r === n(u) && (m ? (y(T), (T = -1)) : (m = !0), P(E, a - o)))
                      : ((r.sortIndex = s), t(l, r), h || p || ((h = !0), I(w))),
                    r
                  )
                }),
                (e.unstable_shouldYield = C),
                (e.unstable_wrapCallback = function (e) {
                  var t = d
                  return function () {
                    var n = d
                    d = t
                    try {
                      return e.apply(this, arguments)
                    } finally {
                      d = n
                    }
                  }
                }))
            })(b)),
          b))),
      g.exports
    )
  }
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ function w() {
    if (f) return y
    f = 1
    var e = l(),
      t = E()
    function n(e) {
      for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++)
        t += '&args[]=' + encodeURIComponent(arguments[n])
      return (
        'Minified React error #' +
        e +
        '; visit ' +
        t +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
      )
    }
    var r = new Set(),
      i = {}
    function a(e, t) {
      ;(o(e, t), o(e + 'Capture', t))
    }
    function o(e, t) {
      for (i[e] = t, e = 0; e < t.length; e++) r.add(t[e])
    }
    var s = !('undefined' == typeof window || void 0 === window.document || void 0 === window.document.createElement),
      u = Object.prototype.hasOwnProperty,
      c =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      d = {},
      p = {}
    function h(e, t, n, r, i, a, o) {
      ;((this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
        (this.attributeName = r),
        (this.attributeNamespace = i),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = a),
        (this.removeEmptyString = o))
    }
    var m = {}
    ;('children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
      .split(' ')
      .forEach(function (e) {
        m[e] = new h(e, 0, !1, e, null, !1, !1)
      }),
      [
        ['acceptCharset', 'accept-charset'],
        ['className', 'class'],
        ['htmlFor', 'for'],
        ['httpEquiv', 'http-equiv'],
      ].forEach(function (e) {
        var t = e[0]
        m[t] = new h(t, 1, !1, e[1], null, !1, !1)
      }),
      ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
        m[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1)
      }),
      ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
        m[e] = new h(e, 2, !1, e, null, !1, !1)
      }),
      'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
        .split(' ')
        .forEach(function (e) {
          m[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1)
        }),
      ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
        m[e] = new h(e, 3, !0, e, null, !1, !1)
      }),
      ['capture', 'download'].forEach(function (e) {
        m[e] = new h(e, 4, !1, e, null, !1, !1)
      }),
      ['cols', 'rows', 'size', 'span'].forEach(function (e) {
        m[e] = new h(e, 6, !1, e, null, !1, !1)
      }),
      ['rowSpan', 'start'].forEach(function (e) {
        m[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1)
      }))
    var v = /[\-:]([a-z])/g
    function g(e) {
      return e[1].toUpperCase()
    }
    function b(e, t, n, r) {
      var i = m.hasOwnProperty(t) ? m[t] : null
      ;(null !== i
        ? 0 !== i.type
        : r || !(2 < t.length) || ('o' !== t[0] && 'O' !== t[0]) || ('n' !== t[1] && 'N' !== t[1])) &&
        ((function (e, t, n, r) {
          if (
            null == t ||
            (function (e, t, n, r) {
              if (null !== n && 0 === n.type) return !1
              switch (typeof t) {
                case 'function':
                case 'symbol':
                  return !0
                case 'boolean':
                  return (
                    !r &&
                    (null !== n ? !n.acceptsBooleans : 'data-' !== (e = e.toLowerCase().slice(0, 5)) && 'aria-' !== e)
                  )
                default:
                  return !1
              }
            })(e, t, n, r)
          )
            return !0
          if (r) return !1
          if (null !== n)
            switch (n.type) {
              case 3:
                return !t
              case 4:
                return !1 === t
              case 5:
                return isNaN(t)
              case 6:
                return isNaN(t) || 1 > t
            }
          return !1
        })(t, n, i, r) && (n = null),
        r || null === i
          ? (function (e) {
              return !!u.call(p, e) || (!u.call(d, e) && (c.test(e) ? (p[e] = !0) : ((d[e] = !0), !1)))
            })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
          : i.mustUseProperty
            ? (e[i.propertyName] = null === n ? 3 !== i.type && '' : n)
            : ((t = i.attributeName),
              (r = i.attributeNamespace),
              null === n
                ? e.removeAttribute(t)
                : ((n = 3 === (i = i.type) || (4 === i && !0 === n) ? '' : '' + n),
                  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
    }
    ;('accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(v, g)
        m[t] = new h(t, 1, !1, e, null, !1, !1)
      }),
      'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
        var t = e.replace(v, g)
        m[t] = new h(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
      }),
      ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
        var t = e.replace(v, g)
        m[t] = new h(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
      }),
      ['tabIndex', 'crossOrigin'].forEach(function (e) {
        m[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1)
      }),
      (m.xlinkHref = new h('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
      ['src', 'href', 'action', 'formAction'].forEach(function (e) {
        m[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0)
      }))
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      _ = Symbol.for('react.element'),
      k = Symbol.for('react.portal'),
      S = Symbol.for('react.fragment'),
      T = Symbol.for('react.strict_mode'),
      x = Symbol.for('react.profiler'),
      O = Symbol.for('react.provider'),
      C = Symbol.for('react.context'),
      R = Symbol.for('react.forward_ref'),
      N = Symbol.for('react.suspense'),
      D = Symbol.for('react.suspense_list'),
      I = Symbol.for('react.memo'),
      P = Symbol.for('react.lazy'),
      F = Symbol.for('react.offscreen'),
      A = Symbol.iterator
    function M(e) {
      return null === e || 'object' != typeof e
        ? null
        : 'function' == typeof (e = (A && e[A]) || e['@@iterator'])
          ? e
          : null
    }
    var L,
      q = Object.assign
    function z(e) {
      if (void 0 === L)
        try {
          throw Error()
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/)
          L = (t && t[1]) || ''
        }
      return '\n' + L + e
    }
    var j = !1
    function V(e, t) {
      if (!e || j) return ''
      j = !0
      var n = Error.prepareStackTrace
      Error.prepareStackTrace = void 0
      try {
        if (t)
          if (
            ((t = function () {
              throw Error()
            }),
            Object.defineProperty(t.prototype, 'props', {
              set: function () {
                throw Error()
              },
            }),
            'object' == typeof Reflect && Reflect.construct)
          ) {
            try {
              Reflect.construct(t, [])
            } catch (e) {
              var r = e
            }
            Reflect.construct(e, [], t)
          } else {
            try {
              t.call()
            } catch (e) {
              r = e
            }
            e.call(t.prototype)
          }
        else {
          try {
            throw Error()
          } catch (e) {
            r = e
          }
          e()
        }
      } catch (t) {
        if (t && r && 'string' == typeof t.stack) {
          for (
            var i = t.stack.split('\n'), a = r.stack.split('\n'), o = i.length - 1, s = a.length - 1;
            1 <= o && 0 <= s && i[o] !== a[s];
          )
            s--
          for (; 1 <= o && 0 <= s; o--, s--)
            if (i[o] !== a[s]) {
              if (1 !== o || 1 !== s)
                do {
                  if ((o--, 0 > --s || i[o] !== a[s])) {
                    var l = '\n' + i[o].replace(' at new ', ' at ')
                    return (
                      e.displayName && l.includes('<anonymous>') && (l = l.replace('<anonymous>', e.displayName)),
                      l
                    )
                  }
                } while (1 <= o && 0 <= s)
              break
            }
        }
      } finally {
        ;((j = !1), (Error.prepareStackTrace = n))
      }
      return (e = e ? e.displayName || e.name : '') ? z(e) : ''
    }
    function Q(e) {
      switch (e.tag) {
        case 5:
          return z(e.type)
        case 16:
          return z('Lazy')
        case 13:
          return z('Suspense')
        case 19:
          return z('SuspenseList')
        case 0:
        case 2:
        case 15:
          return (e = V(e.type, !1))
        case 11:
          return (e = V(e.type.render, !1))
        case 1:
          return (e = V(e.type, !0))
        default:
          return ''
      }
    }
    function $(e) {
      if (null == e) return null
      if ('function' == typeof e) return e.displayName || e.name || null
      if ('string' == typeof e) return e
      switch (e) {
        case S:
          return 'Fragment'
        case k:
          return 'Portal'
        case x:
          return 'Profiler'
        case T:
          return 'StrictMode'
        case N:
          return 'Suspense'
        case D:
          return 'SuspenseList'
      }
      if ('object' == typeof e)
        switch (e.$$typeof) {
          case C:
            return (e.displayName || 'Context') + '.Consumer'
          case O:
            return (e._context.displayName || 'Context') + '.Provider'
          case R:
            var t = e.render
            return (
              (e = e.displayName) ||
                (e = '' !== (e = t.displayName || t.name || '') ? 'ForwardRef(' + e + ')' : 'ForwardRef'),
              e
            )
          case I:
            return null !== (t = e.displayName || null) ? t : $(e.type) || 'Memo'
          case P:
            ;((t = e._payload), (e = e._init))
            try {
              return $(e(t))
            } catch (e) {}
        }
      return null
    }
    function U(e) {
      var t = e.type
      switch (e.tag) {
        case 24:
          return 'Cache'
        case 9:
          return (t.displayName || 'Context') + '.Consumer'
        case 10:
          return (t._context.displayName || 'Context') + '.Provider'
        case 18:
          return 'DehydratedFragment'
        case 11:
          return (
            (e = (e = t.render).displayName || e.name || ''),
            t.displayName || ('' !== e ? 'ForwardRef(' + e + ')' : 'ForwardRef')
          )
        case 7:
          return 'Fragment'
        case 5:
          return t
        case 4:
          return 'Portal'
        case 3:
          return 'Root'
        case 6:
          return 'Text'
        case 16:
          return $(t)
        case 8:
          return t === T ? 'StrictMode' : 'Mode'
        case 22:
          return 'Offscreen'
        case 12:
          return 'Profiler'
        case 21:
          return 'Scope'
        case 13:
          return 'Suspense'
        case 19:
          return 'SuspenseList'
        case 25:
          return 'TracingMarker'
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if ('function' == typeof t) return t.displayName || t.name || null
          if ('string' == typeof t) return t
      }
      return null
    }
    function B(e) {
      switch (typeof e) {
        case 'boolean':
        case 'number':
        case 'string':
        case 'undefined':
        case 'object':
          return e
        default:
          return ''
      }
    }
    function W(e) {
      var t = e.type
      return (e = e.nodeName) && 'input' === e.toLowerCase() && ('checkbox' === t || 'radio' === t)
    }
    function K(e) {
      e._valueTracker ||
        (e._valueTracker = (function (e) {
          var t = W(e) ? 'checked' : 'value',
            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            r = '' + e[t]
          if (!e.hasOwnProperty(t) && void 0 !== n && 'function' == typeof n.get && 'function' == typeof n.set) {
            var i = n.get,
              a = n.set
            return (
              Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                  return i.call(this)
                },
                set: function (e) {
                  ;((r = '' + e), a.call(this, e))
                },
              }),
              Object.defineProperty(e, t, { enumerable: n.enumerable }),
              {
                getValue: function () {
                  return r
                },
                setValue: function (e) {
                  r = '' + e
                },
                stopTracking: function () {
                  ;((e._valueTracker = null), delete e[t])
                },
              }
            )
          }
        })(e))
    }
    function H(e) {
      if (!e) return !1
      var t = e._valueTracker
      if (!t) return !0
      var n = t.getValue(),
        r = ''
      return (e && (r = W(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r) !== n && (t.setValue(e), !0))
    }
    function G(e) {
      if (void 0 === (e = e || ('undefined' != typeof document ? document : void 0))) return null
      try {
        return e.activeElement || e.body
      } catch (t) {
        return e.body
      }
    }
    function Y(e, t) {
      var n = t.checked
      return q({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != n ? n : e._wrapperState.initialChecked,
      })
    }
    function J(e, t) {
      var n = null == t.defaultValue ? '' : t.defaultValue,
        r = null != t.checked ? t.checked : t.defaultChecked
      ;((n = B(null != t.value ? t.value : n)),
        (e._wrapperState = {
          initialChecked: r,
          initialValue: n,
          controlled: 'checkbox' === t.type || 'radio' === t.type ? null != t.checked : null != t.value,
        }))
    }
    function X(e, t) {
      null != (t = t.checked) && b(e, 'checked', t, !1)
    }
    function Z(e, t) {
      X(e, t)
      var n = B(t.value),
        r = t.type
      if (null != n)
        'number' === r
          ? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
          : e.value !== '' + n && (e.value = '' + n)
      else if ('submit' === r || 'reset' === r) return void e.removeAttribute('value')
      ;(t.hasOwnProperty('value')
        ? te(e, t.type, n)
        : t.hasOwnProperty('defaultValue') && te(e, t.type, B(t.defaultValue)),
        null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked))
    }
    function ee(e, t, n) {
      if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
        var r = t.type
        if (!(('submit' !== r && 'reset' !== r) || (void 0 !== t.value && null !== t.value))) return
        ;((t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t))
      }
      ;('' !== (n = e.name) && (e.name = ''),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        '' !== n && (e.name = n))
    }
    function te(e, t, n) {
      ;('number' === t && G(e.ownerDocument) === e) ||
        (null == n
          ? (e.defaultValue = '' + e._wrapperState.initialValue)
          : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
    }
    var ne = Array.isArray
    function re(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {}
        for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0
        for (n = 0; n < e.length; n++)
          ((i = t.hasOwnProperty('$' + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0))
      } else {
        for (n = '' + B(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) return ((e[i].selected = !0), void (r && (e[i].defaultSelected = !0)))
          null !== t || e[i].disabled || (t = e[i])
        }
        null !== t && (t.selected = !0)
      }
    }
    function ie(e, t) {
      if (null != t.dangerouslySetInnerHTML) throw Error(n(91))
      return q({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue })
    }
    function ae(e, t) {
      var r = t.value
      if (null == r) {
        if (((r = t.children), (t = t.defaultValue), null != r)) {
          if (null != t) throw Error(n(92))
          if (ne(r)) {
            if (1 < r.length) throw Error(n(93))
            r = r[0]
          }
          t = r
        }
        ;(null == t && (t = ''), (r = t))
      }
      e._wrapperState = { initialValue: B(r) }
    }
    function oe(e, t) {
      var n = B(t.value),
        r = B(t.defaultValue)
      ;(null != n &&
        ((n = '' + n) !== e.value && (e.value = n),
        null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
        null != r && (e.defaultValue = '' + r))
    }
    function se(e) {
      var t = e.textContent
      t === e._wrapperState.initialValue && '' !== t && null !== t && (e.value = t)
    }
    function le(e) {
      switch (e) {
        case 'svg':
          return 'http://www.w3.org/2000/svg'
        case 'math':
          return 'http://www.w3.org/1998/Math/MathML'
        default:
          return 'http://www.w3.org/1999/xhtml'
      }
    }
    function ue(e, t) {
      return null == e || 'http://www.w3.org/1999/xhtml' === e
        ? le(t)
        : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
          ? 'http://www.w3.org/1999/xhtml'
          : e
    }
    var ce,
      fe = (function (e) {
        return 'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction
          ? function (t, n, r, i) {
              MSApp.execUnsafeLocalFunction(function () {
                return e(t, n)
              })
            }
          : e
      })(function (e, t) {
        if ('http://www.w3.org/2000/svg' !== e.namespaceURI || 'innerHTML' in e) e.innerHTML = t
        else {
          for (
            (ce = ce || document.createElement('div')).innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
              t = ce.firstChild;
            e.firstChild;
          )
            e.removeChild(e.firstChild)
          for (; t.firstChild; ) e.appendChild(t.firstChild)
        }
      })
    function de(e, t) {
      if (t) {
        var n = e.firstChild
        if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t)
      }
      e.textContent = t
    }
    var pe = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
      he = ['Webkit', 'ms', 'Moz', 'O']
    function me(e, t, n) {
      return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : n || 'number' != typeof t || 0 === t || (pe.hasOwnProperty(e) && pe[e])
          ? ('' + t).trim()
          : t + 'px'
    }
    function ve(e, t) {
      for (var n in ((e = e.style), t))
        if (t.hasOwnProperty(n)) {
          var r = 0 === n.indexOf('--'),
            i = me(n, t[n], r)
          ;('float' === n && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i))
        }
    }
    Object.keys(pe).forEach(function (e) {
      he.forEach(function (t) {
        ;((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (pe[t] = pe[e]))
      })
    })
    var ye = q(
      { menuitem: !0 },
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      },
    )
    function ge(e, t) {
      if (t) {
        if (ye[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(n(137, e))
        if (null != t.dangerouslySetInnerHTML) {
          if (null != t.children) throw Error(n(60))
          if ('object' != typeof t.dangerouslySetInnerHTML || !('__html' in t.dangerouslySetInnerHTML))
            throw Error(n(61))
        }
        if (null != t.style && 'object' != typeof t.style) throw Error(n(62))
      }
    }
    function be(e, t) {
      if (-1 === e.indexOf('-')) return 'string' == typeof t.is
      switch (e) {
        case 'annotation-xml':
        case 'color-profile':
        case 'font-face':
        case 'font-face-src':
        case 'font-face-uri':
        case 'font-face-format':
        case 'font-face-name':
        case 'missing-glyph':
          return !1
        default:
          return !0
      }
    }
    var Ee = null
    function we(e) {
      return (
        (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
      )
    }
    var _e = null,
      ke = null,
      Se = null
    function Te(e) {
      if ((e = bi(e))) {
        if ('function' != typeof _e) throw Error(n(280))
        var t = e.stateNode
        t && ((t = wi(t)), _e(e.stateNode, e.type, t))
      }
    }
    function xe(e) {
      ke ? (Se ? Se.push(e) : (Se = [e])) : (ke = e)
    }
    function Oe() {
      if (ke) {
        var e = ke,
          t = Se
        if (((Se = ke = null), Te(e), t)) for (e = 0; e < t.length; e++) Te(t[e])
      }
    }
    function Ce(e, t) {
      return e(t)
    }
    function Re() {}
    var Ne = !1
    function De(e, t, n) {
      if (Ne) return e(t, n)
      Ne = !0
      try {
        return Ce(e, t, n)
      } finally {
        ;((Ne = !1), (null !== ke || null !== Se) && (Re(), Oe()))
      }
    }
    function Ie(e, t) {
      var r = e.stateNode
      if (null === r) return null
      var i = wi(r)
      if (null === i) return null
      r = i[t]
      e: switch (t) {
        case 'onClick':
        case 'onClickCapture':
        case 'onDoubleClick':
        case 'onDoubleClickCapture':
        case 'onMouseDown':
        case 'onMouseDownCapture':
        case 'onMouseMove':
        case 'onMouseMoveCapture':
        case 'onMouseUp':
        case 'onMouseUpCapture':
        case 'onMouseEnter':
          ;((i = !i.disabled) ||
            (i = !('button' === (e = e.type) || 'input' === e || 'select' === e || 'textarea' === e)),
            (e = !i))
          break e
        default:
          e = !1
      }
      if (e) return null
      if (r && 'function' != typeof r) throw Error(n(231, t, typeof r))
      return r
    }
    var Pe = !1
    if (s)
      try {
        var Fe = {}
        ;(Object.defineProperty(Fe, 'passive', {
          get: function () {
            Pe = !0
          },
        }),
          window.addEventListener('test', Fe, Fe),
          window.removeEventListener('test', Fe, Fe))
      } catch (e) {
        Pe = !1
      }
    function Ae(e, t, n, r, i, a, o, s, l) {
      var u = Array.prototype.slice.call(arguments, 3)
      try {
        t.apply(n, u)
      } catch (e) {
        this.onError(e)
      }
    }
    var Me = !1,
      Le = null,
      qe = !1,
      ze = null,
      je = {
        onError: function (e) {
          ;((Me = !0), (Le = e))
        },
      }
    function Ve(e, t, n, r, i, a, o, s, l) {
      ;((Me = !1), (Le = null), Ae.apply(je, arguments))
    }
    function Qe(e) {
      var t = e,
        n = e
      if (e.alternate) for (; t.return; ) t = t.return
      else {
        e = t
        do {
          ;(!!(4098 & (t = e).flags) && (n = t.return), (e = t.return))
        } while (e)
      }
      return 3 === t.tag ? n : null
    }
    function $e(e) {
      if (13 === e.tag) {
        var t = e.memoizedState
        if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)) return t.dehydrated
      }
      return null
    }
    function Ue(e) {
      if (Qe(e) !== e) throw Error(n(188))
    }
    function Be(e) {
      return null !==
        (e = (function (e) {
          var t = e.alternate
          if (!t) {
            if (null === (t = Qe(e))) throw Error(n(188))
            return t !== e ? null : e
          }
          for (var r = e, i = t; ; ) {
            var a = r.return
            if (null === a) break
            var o = a.alternate
            if (null === o) {
              if (null !== (i = a.return)) {
                r = i
                continue
              }
              break
            }
            if (a.child === o.child) {
              for (o = a.child; o; ) {
                if (o === r) return (Ue(a), e)
                if (o === i) return (Ue(a), t)
                o = o.sibling
              }
              throw Error(n(188))
            }
            if (r.return !== i.return) ((r = a), (i = o))
            else {
              for (var s = !1, l = a.child; l; ) {
                if (l === r) {
                  ;((s = !0), (r = a), (i = o))
                  break
                }
                if (l === i) {
                  ;((s = !0), (i = a), (r = o))
                  break
                }
                l = l.sibling
              }
              if (!s) {
                for (l = o.child; l; ) {
                  if (l === r) {
                    ;((s = !0), (r = o), (i = a))
                    break
                  }
                  if (l === i) {
                    ;((s = !0), (i = o), (r = a))
                    break
                  }
                  l = l.sibling
                }
                if (!s) throw Error(n(189))
              }
            }
            if (r.alternate !== i) throw Error(n(190))
          }
          if (3 !== r.tag) throw Error(n(188))
          return r.stateNode.current === r ? e : t
        })(e))
        ? We(e)
        : null
    }
    function We(e) {
      if (5 === e.tag || 6 === e.tag) return e
      for (e = e.child; null !== e; ) {
        var t = We(e)
        if (null !== t) return t
        e = e.sibling
      }
      return null
    }
    var Ke = t.unstable_scheduleCallback,
      He = t.unstable_cancelCallback,
      Ge = t.unstable_shouldYield,
      Ye = t.unstable_requestPaint,
      Je = t.unstable_now,
      Xe = t.unstable_getCurrentPriorityLevel,
      Ze = t.unstable_ImmediatePriority,
      et = t.unstable_UserBlockingPriority,
      tt = t.unstable_NormalPriority,
      nt = t.unstable_LowPriority,
      rt = t.unstable_IdlePriority,
      it = null,
      at = null
    var ot = Math.clz32
        ? Math.clz32
        : function (e) {
            return ((e >>>= 0), 0 === e ? 32 : (31 - ((st(e) / lt) | 0)) | 0)
          },
      st = Math.log,
      lt = Math.LN2
    var ut = 64,
      ct = 4194304
    function ft(e) {
      switch (e & -e) {
        case 1:
          return 1
        case 2:
          return 2
        case 4:
          return 4
        case 8:
          return 8
        case 16:
          return 16
        case 32:
          return 32
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return 4194240 & e
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return 130023424 & e
        case 134217728:
          return 134217728
        case 268435456:
          return 268435456
        case 536870912:
          return 536870912
        case 1073741824:
          return 1073741824
        default:
          return e
      }
    }
    function dt(e, t) {
      var n = e.pendingLanes
      if (0 === n) return 0
      var r = 0,
        i = e.suspendedLanes,
        a = e.pingedLanes,
        o = 268435455 & n
      if (0 !== o) {
        var s = o & ~i
        0 !== s ? (r = ft(s)) : 0 !== (a &= o) && (r = ft(a))
      } else 0 !== (o = n & ~i) ? (r = ft(o)) : 0 !== a && (r = ft(a))
      if (0 === r) return 0
      if (0 !== t && t !== r && 0 === (t & i) && ((i = r & -r) >= (a = t & -t) || (16 === i && 4194240 & a))) return t
      if ((4 & r && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
        for (e = e.entanglements, t &= r; 0 < t; ) ((i = 1 << (n = 31 - ot(t))), (r |= e[n]), (t &= ~i))
      return r
    }
    function pt(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
          return t + 250
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3
        default:
          return -1
      }
    }
    function ht(e) {
      return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
    }
    function mt() {
      var e = ut
      return (!(4194240 & (ut <<= 1)) && (ut = 64), e)
    }
    function vt(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e)
      return t
    }
    function yt(e, t, n) {
      ;((e.pendingLanes |= t),
        536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        ((e = e.eventTimes)[(t = 31 - ot(t))] = n))
    }
    function gt(e, t) {
      var n = (e.entangledLanes |= t)
      for (e = e.entanglements; n; ) {
        var r = 31 - ot(n),
          i = 1 << r
        ;((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i))
      }
    }
    var bt = 0
    function Et(e) {
      return 1 < (e &= -e) ? (4 < e ? (268435455 & e ? 16 : 536870912) : 4) : 1
    }
    var wt,
      _t,
      kt,
      St,
      Tt,
      xt = !1,
      Ot = [],
      Ct = null,
      Rt = null,
      Nt = null,
      Dt = new Map(),
      It = new Map(),
      Pt = [],
      Ft =
        'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
          ' ',
        )
    function At(e, t) {
      switch (e) {
        case 'focusin':
        case 'focusout':
          Ct = null
          break
        case 'dragenter':
        case 'dragleave':
          Rt = null
          break
        case 'mouseover':
        case 'mouseout':
          Nt = null
          break
        case 'pointerover':
        case 'pointerout':
          Dt.delete(t.pointerId)
          break
        case 'gotpointercapture':
        case 'lostpointercapture':
          It.delete(t.pointerId)
      }
    }
    function Mt(e, t, n, r, i, a) {
      return null === e || e.nativeEvent !== a
        ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [i] }),
          null !== t && null !== (t = bi(t)) && _t(t),
          e)
        : ((e.eventSystemFlags |= r), (t = e.targetContainers), null !== i && -1 === t.indexOf(i) && t.push(i), e)
    }
    function Lt(e) {
      var t = gi(e.target)
      if (null !== t) {
        var n = Qe(t)
        if (null !== n)
          if (13 === (t = n.tag)) {
            if (null !== (t = $e(n)))
              return (
                (e.blockedOn = t),
                void Tt(e.priority, function () {
                  kt(n)
                })
              )
          } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
            return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
      }
      e.blockedOn = null
    }
    function qt(e) {
      if (null !== e.blockedOn) return !1
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Gt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
        if (null !== n) return (null !== (t = bi(n)) && _t(t), (e.blockedOn = n), !1)
        var r = new (n = e.nativeEvent).constructor(n.type, n)
        ;((Ee = r), n.target.dispatchEvent(r), (Ee = null), t.shift())
      }
      return !0
    }
    function zt(e, t, n) {
      qt(e) && n.delete(t)
    }
    function jt() {
      ;((xt = !1),
        null !== Ct && qt(Ct) && (Ct = null),
        null !== Rt && qt(Rt) && (Rt = null),
        null !== Nt && qt(Nt) && (Nt = null),
        Dt.forEach(zt),
        It.forEach(zt))
    }
    function Vt(e, n) {
      e.blockedOn === n &&
        ((e.blockedOn = null), xt || ((xt = !0), t.unstable_scheduleCallback(t.unstable_NormalPriority, jt)))
    }
    function Qt(e) {
      function t(t) {
        return Vt(t, e)
      }
      if (0 < Ot.length) {
        Vt(Ot[0], e)
        for (var n = 1; n < Ot.length; n++) {
          var r = Ot[n]
          r.blockedOn === e && (r.blockedOn = null)
        }
      }
      for (
        null !== Ct && Vt(Ct, e),
          null !== Rt && Vt(Rt, e),
          null !== Nt && Vt(Nt, e),
          Dt.forEach(t),
          It.forEach(t),
          n = 0;
        n < Pt.length;
        n++
      )
        (r = Pt[n]).blockedOn === e && (r.blockedOn = null)
      for (; 0 < Pt.length && null === (n = Pt[0]).blockedOn; ) (Lt(n), null === n.blockedOn && Pt.shift())
    }
    var $t = w.ReactCurrentBatchConfig,
      Ut = !0
    function Bt(e, t, n, r) {
      var i = bt,
        a = $t.transition
      $t.transition = null
      try {
        ;((bt = 1), Kt(e, t, n, r))
      } finally {
        ;((bt = i), ($t.transition = a))
      }
    }
    function Wt(e, t, n, r) {
      var i = bt,
        a = $t.transition
      $t.transition = null
      try {
        ;((bt = 4), Kt(e, t, n, r))
      } finally {
        ;((bt = i), ($t.transition = a))
      }
    }
    function Kt(e, t, n, r) {
      if (Ut) {
        var i = Gt(e, t, n, r)
        if (null === i) (Ur(e, t, r, Ht, n), At(e, r))
        else if (
          (function (e, t, n, r, i) {
            switch (t) {
              case 'focusin':
                return ((Ct = Mt(Ct, e, t, n, r, i)), !0)
              case 'dragenter':
                return ((Rt = Mt(Rt, e, t, n, r, i)), !0)
              case 'mouseover':
                return ((Nt = Mt(Nt, e, t, n, r, i)), !0)
              case 'pointerover':
                var a = i.pointerId
                return (Dt.set(a, Mt(Dt.get(a) || null, e, t, n, r, i)), !0)
              case 'gotpointercapture':
                return ((a = i.pointerId), It.set(a, Mt(It.get(a) || null, e, t, n, r, i)), !0)
            }
            return !1
          })(i, e, t, n, r)
        )
          r.stopPropagation()
        else if ((At(e, r), 4 & t && -1 < Ft.indexOf(e))) {
          for (; null !== i; ) {
            var a = bi(i)
            if ((null !== a && wt(a), null === (a = Gt(e, t, n, r)) && Ur(e, t, r, Ht, n), a === i)) break
            i = a
          }
          null !== i && r.stopPropagation()
        } else Ur(e, t, r, null, n)
      }
    }
    var Ht = null
    function Gt(e, t, n, r) {
      if (((Ht = null), null !== (e = gi((e = we(r))))))
        if (null === (t = Qe(e))) e = null
        else if (13 === (n = t.tag)) {
          if (null !== (e = $e(t))) return e
          e = null
        } else if (3 === n) {
          if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null
          e = null
        } else t !== e && (e = null)
      return ((Ht = e), null)
    }
    function Yt(e) {
      switch (e) {
        case 'cancel':
        case 'click':
        case 'close':
        case 'contextmenu':
        case 'copy':
        case 'cut':
        case 'auxclick':
        case 'dblclick':
        case 'dragend':
        case 'dragstart':
        case 'drop':
        case 'focusin':
        case 'focusout':
        case 'input':
        case 'invalid':
        case 'keydown':
        case 'keypress':
        case 'keyup':
        case 'mousedown':
        case 'mouseup':
        case 'paste':
        case 'pause':
        case 'play':
        case 'pointercancel':
        case 'pointerdown':
        case 'pointerup':
        case 'ratechange':
        case 'reset':
        case 'resize':
        case 'seeked':
        case 'submit':
        case 'touchcancel':
        case 'touchend':
        case 'touchstart':
        case 'volumechange':
        case 'change':
        case 'selectionchange':
        case 'textInput':
        case 'compositionstart':
        case 'compositionend':
        case 'compositionupdate':
        case 'beforeblur':
        case 'afterblur':
        case 'beforeinput':
        case 'blur':
        case 'fullscreenchange':
        case 'focus':
        case 'hashchange':
        case 'popstate':
        case 'select':
        case 'selectstart':
          return 1
        case 'drag':
        case 'dragenter':
        case 'dragexit':
        case 'dragleave':
        case 'dragover':
        case 'mousemove':
        case 'mouseout':
        case 'mouseover':
        case 'pointermove':
        case 'pointerout':
        case 'pointerover':
        case 'scroll':
        case 'toggle':
        case 'touchmove':
        case 'wheel':
        case 'mouseenter':
        case 'mouseleave':
        case 'pointerenter':
        case 'pointerleave':
          return 4
        case 'message':
          switch (Xe()) {
            case Ze:
              return 1
            case et:
              return 4
            case tt:
            case nt:
              return 16
            case rt:
              return 536870912
            default:
              return 16
          }
        default:
          return 16
      }
    }
    var Jt = null,
      Xt = null,
      Zt = null
    function en() {
      if (Zt) return Zt
      var e,
        t,
        n = Xt,
        r = n.length,
        i = 'value' in Jt ? Jt.value : Jt.textContent,
        a = i.length
      for (e = 0; e < r && n[e] === i[e]; e++);
      var o = r - e
      for (t = 1; t <= o && n[r - t] === i[a - t]; t++);
      return (Zt = i.slice(e, 1 < t ? 1 - t : void 0))
    }
    function tn(e) {
      var t = e.keyCode
      return (
        'charCode' in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
        10 === e && (e = 13),
        32 <= e || 13 === e ? e : 0
      )
    }
    function nn() {
      return !0
    }
    function rn() {
      return !1
    }
    function an(e) {
      function t(t, n, r, i, a) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]))
        return (
          (this.isDefaultPrevented = (null != i.defaultPrevented ? i.defaultPrevented : !1 === i.returnValue)
            ? nn
            : rn),
          (this.isPropagationStopped = rn),
          this
        )
      }
      return (
        q(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0
            var e = this.nativeEvent
            e &&
              (e.preventDefault ? e.preventDefault() : 'unknown' != typeof e.returnValue && (e.returnValue = !1),
              (this.isDefaultPrevented = nn))
          },
          stopPropagation: function () {
            var e = this.nativeEvent
            e &&
              (e.stopPropagation ? e.stopPropagation() : 'unknown' != typeof e.cancelBubble && (e.cancelBubble = !0),
              (this.isPropagationStopped = nn))
          },
          persist: function () {},
          isPersistent: nn,
        }),
        t
      )
    }
    var on,
      sn,
      ln,
      un = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      cn = an(un),
      fn = q({}, un, { view: 0, detail: 0 }),
      dn = an(fn),
      pn = q({}, fn, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Tn,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return void 0 === e.relatedTarget
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget
        },
        movementX: function (e) {
          return 'movementX' in e
            ? e.movementX
            : (e !== ln &&
                (ln && 'mousemove' === e.type
                  ? ((on = e.screenX - ln.screenX), (sn = e.screenY - ln.screenY))
                  : (sn = on = 0),
                (ln = e)),
              on)
        },
        movementY: function (e) {
          return 'movementY' in e ? e.movementY : sn
        },
      }),
      hn = an(pn),
      mn = an(q({}, pn, { dataTransfer: 0 })),
      vn = an(q({}, fn, { relatedTarget: 0 })),
      yn = an(q({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
      gn = q({}, un, {
        clipboardData: function (e) {
          return 'clipboardData' in e ? e.clipboardData : window.clipboardData
        },
      }),
      bn = an(gn),
      En = an(q({}, un, { data: 0 })),
      wn = {
        Esc: 'Escape',
        Spacebar: ' ',
        Left: 'ArrowLeft',
        Up: 'ArrowUp',
        Right: 'ArrowRight',
        Down: 'ArrowDown',
        Del: 'Delete',
        Win: 'OS',
        Menu: 'ContextMenu',
        Apps: 'ContextMenu',
        Scroll: 'ScrollLock',
        MozPrintableKey: 'Unidentified',
      },
      _n = {
        8: 'Backspace',
        9: 'Tab',
        12: 'Clear',
        13: 'Enter',
        16: 'Shift',
        17: 'Control',
        18: 'Alt',
        19: 'Pause',
        20: 'CapsLock',
        27: 'Escape',
        32: ' ',
        33: 'PageUp',
        34: 'PageDown',
        35: 'End',
        36: 'Home',
        37: 'ArrowLeft',
        38: 'ArrowUp',
        39: 'ArrowRight',
        40: 'ArrowDown',
        45: 'Insert',
        46: 'Delete',
        112: 'F1',
        113: 'F2',
        114: 'F3',
        115: 'F4',
        116: 'F5',
        117: 'F6',
        118: 'F7',
        119: 'F8',
        120: 'F9',
        121: 'F10',
        122: 'F11',
        123: 'F12',
        144: 'NumLock',
        145: 'ScrollLock',
        224: 'Meta',
      },
      kn = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
    function Sn(e) {
      var t = this.nativeEvent
      return t.getModifierState ? t.getModifierState(e) : !!(e = kn[e]) && !!t[e]
    }
    function Tn() {
      return Sn
    }
    var xn = q({}, fn, {
        key: function (e) {
          if (e.key) {
            var t = wn[e.key] || e.key
            if ('Unidentified' !== t) return t
          }
          return 'keypress' === e.type
            ? 13 === (e = tn(e))
              ? 'Enter'
              : String.fromCharCode(e)
            : 'keydown' === e.type || 'keyup' === e.type
              ? _n[e.keyCode] || 'Unidentified'
              : ''
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Tn,
        charCode: function (e) {
          return 'keypress' === e.type ? tn(e) : 0
        },
        keyCode: function (e) {
          return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0
        },
        which: function (e) {
          return 'keypress' === e.type ? tn(e) : 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0
        },
      }),
      On = an(xn),
      Cn = an(
        q({}, pn, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        }),
      ),
      Rn = an(
        q({}, fn, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: Tn,
        }),
      ),
      Nn = an(q({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      Dn = q({}, pn, {
        deltaX: function (e) {
          return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
        },
        deltaY: function (e) {
          return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0,
      }),
      In = an(Dn),
      Pn = [9, 13, 27, 32],
      Fn = s && 'CompositionEvent' in window,
      An = null
    s && 'documentMode' in document && (An = document.documentMode)
    var Mn = s && 'TextEvent' in window && !An,
      Ln = s && (!Fn || (An && 8 < An && 11 >= An)),
      qn = String.fromCharCode(32),
      zn = !1
    function jn(e, t) {
      switch (e) {
        case 'keyup':
          return -1 !== Pn.indexOf(t.keyCode)
        case 'keydown':
          return 229 !== t.keyCode
        case 'keypress':
        case 'mousedown':
        case 'focusout':
          return !0
        default:
          return !1
      }
    }
    function Vn(e) {
      return 'object' == typeof (e = e.detail) && 'data' in e ? e.data : null
    }
    var Qn = !1
    var $n = {
      'color': !0,
      'date': !0,
      'datetime': !0,
      'datetime-local': !0,
      'email': !0,
      'month': !0,
      'number': !0,
      'password': !0,
      'range': !0,
      'search': !0,
      'tel': !0,
      'text': !0,
      'time': !0,
      'url': !0,
      'week': !0,
    }
    function Un(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase()
      return 'input' === t ? !!$n[e.type] : 'textarea' === t
    }
    function Bn(e, t, n, r) {
      ;(xe(r),
        0 < (t = Wr(t, 'onChange')).length &&
          ((n = new cn('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t })))
    }
    var Wn = null,
      Kn = null
    function Hn(e) {
      qr(e, 0)
    }
    function Gn(e) {
      if (H(Ei(e))) return e
    }
    function Yn(e, t) {
      if ('change' === e) return t
    }
    var Jn = !1
    if (s) {
      var Xn
      if (s) {
        var Zn = 'oninput' in document
        if (!Zn) {
          var er = document.createElement('div')
          ;(er.setAttribute('oninput', 'return;'), (Zn = 'function' == typeof er.oninput))
        }
        Xn = Zn
      } else Xn = !1
      Jn = Xn && (!document.documentMode || 9 < document.documentMode)
    }
    function tr() {
      Wn && (Wn.detachEvent('onpropertychange', nr), (Kn = Wn = null))
    }
    function nr(e) {
      if ('value' === e.propertyName && Gn(Kn)) {
        var t = []
        ;(Bn(t, Kn, e, we(e)), De(Hn, t))
      }
    }
    function rr(e, t, n) {
      'focusin' === e ? (tr(), (Kn = n), (Wn = t).attachEvent('onpropertychange', nr)) : 'focusout' === e && tr()
    }
    function ir(e) {
      if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return Gn(Kn)
    }
    function ar(e, t) {
      if ('click' === e) return Gn(t)
    }
    function or(e, t) {
      if ('input' === e || 'change' === e) return Gn(t)
    }
    var sr =
      'function' == typeof Object.is
        ? Object.is
        : function (e, t) {
            return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
          }
    function lr(e, t) {
      if (sr(e, t)) return !0
      if ('object' != typeof e || null === e || 'object' != typeof t || null === t) return !1
      var n = Object.keys(e),
        r = Object.keys(t)
      if (n.length !== r.length) return !1
      for (r = 0; r < n.length; r++) {
        var i = n[r]
        if (!u.call(t, i) || !sr(e[i], t[i])) return !1
      }
      return !0
    }
    function ur(e) {
      for (; e && e.firstChild; ) e = e.firstChild
      return e
    }
    function cr(e, t) {
      var n,
        r = ur(e)
      for (e = 0; r; ) {
        if (3 === r.nodeType) {
          if (((n = e + r.textContent.length), e <= t && n >= t)) return { node: r, offset: t - e }
          e = n
        }
        e: {
          for (; r; ) {
            if (r.nextSibling) {
              r = r.nextSibling
              break e
            }
            r = r.parentNode
          }
          r = void 0
        }
        r = ur(r)
      }
    }
    function fr(e, t) {
      return (
        !(!e || !t) &&
        (e === t ||
          ((!e || 3 !== e.nodeType) &&
            (t && 3 === t.nodeType
              ? fr(e, t.parentNode)
              : 'contains' in e
                ? e.contains(t)
                : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
      )
    }
    function dr() {
      for (var e = window, t = G(); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = 'string' == typeof t.contentWindow.location.href
        } catch (e) {
          n = !1
        }
        if (!n) break
        t = G((e = t.contentWindow).document)
      }
      return t
    }
    function pr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase()
      return (
        t &&
        (('input' === t &&
          ('text' === e.type ||
            'search' === e.type ||
            'tel' === e.type ||
            'url' === e.type ||
            'password' === e.type)) ||
          'textarea' === t ||
          'true' === e.contentEditable)
      )
    }
    function hr(e) {
      var t = dr(),
        n = e.focusedElem,
        r = e.selectionRange
      if (t !== n && n && n.ownerDocument && fr(n.ownerDocument.documentElement, n)) {
        if (null !== r && pr(n))
          if (((t = r.start), void 0 === (e = r.end) && (e = t), 'selectionStart' in n))
            ((n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length)))
          else if ((e = ((t = n.ownerDocument || document) && t.defaultView) || window).getSelection) {
            e = e.getSelection()
            var i = n.textContent.length,
              a = Math.min(r.start, i)
            ;((r = void 0 === r.end ? a : Math.min(r.end, i)),
              !e.extend && a > r && ((i = r), (r = a), (a = i)),
              (i = cr(n, a)))
            var o = cr(n, r)
            i &&
              o &&
              (1 !== e.rangeCount ||
                e.anchorNode !== i.node ||
                e.anchorOffset !== i.offset ||
                e.focusNode !== o.node ||
                e.focusOffset !== o.offset) &&
              ((t = t.createRange()).setStart(i.node, i.offset),
              e.removeAllRanges(),
              a > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)))
          }
        for (t = [], e = n; (e = e.parentNode); )
          1 === e.nodeType && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
        for ('function' == typeof n.focus && n.focus(), n = 0; n < t.length; n++)
          (((e = t[n]).element.scrollLeft = e.left), (e.element.scrollTop = e.top))
      }
    }
    var mr = s && 'documentMode' in document && 11 >= document.documentMode,
      vr = null,
      yr = null,
      gr = null,
      br = !1
    function Er(e, t, n) {
      var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument
      br ||
        null == vr ||
        vr !== G(r) ||
        ('selectionStart' in (r = vr) && pr(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : (r = {
              anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()).anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            }),
        (gr && lr(gr, r)) ||
          ((gr = r),
          0 < (r = Wr(yr, 'onSelect')).length &&
            ((t = new cn('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = vr))))
    }
    function wr(e, t) {
      var n = {}
      return ((n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n)
    }
    var _r = {
        animationend: wr('Animation', 'AnimationEnd'),
        animationiteration: wr('Animation', 'AnimationIteration'),
        animationstart: wr('Animation', 'AnimationStart'),
        transitionend: wr('Transition', 'TransitionEnd'),
      },
      kr = {},
      Sr = {}
    function Tr(e) {
      if (kr[e]) return kr[e]
      if (!_r[e]) return e
      var t,
        n = _r[e]
      for (t in n) if (n.hasOwnProperty(t) && t in Sr) return (kr[e] = n[t])
      return e
    }
    s &&
      ((Sr = document.createElement('div').style),
      'AnimationEvent' in window ||
        (delete _r.animationend.animation, delete _r.animationiteration.animation, delete _r.animationstart.animation),
      'TransitionEvent' in window || delete _r.transitionend.transition)
    var xr = Tr('animationend'),
      Or = Tr('animationiteration'),
      Cr = Tr('animationstart'),
      Rr = Tr('transitionend'),
      Nr = new Map(),
      Dr =
        'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
          ' ',
        )
    function Ir(e, t) {
      ;(Nr.set(e, t), a(t, [e]))
    }
    for (var Pr = 0; Pr < Dr.length; Pr++) {
      var Fr = Dr[Pr]
      Ir(Fr.toLowerCase(), 'on' + (Fr[0].toUpperCase() + Fr.slice(1)))
    }
    ;(Ir(xr, 'onAnimationEnd'),
      Ir(Or, 'onAnimationIteration'),
      Ir(Cr, 'onAnimationStart'),
      Ir('dblclick', 'onDoubleClick'),
      Ir('focusin', 'onFocus'),
      Ir('focusout', 'onBlur'),
      Ir(Rr, 'onTransitionEnd'),
      o('onMouseEnter', ['mouseout', 'mouseover']),
      o('onMouseLeave', ['mouseout', 'mouseover']),
      o('onPointerEnter', ['pointerout', 'pointerover']),
      o('onPointerLeave', ['pointerout', 'pointerover']),
      a('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
      a('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')),
      a('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
      a('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
      a('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
      a('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')))
    var Ar =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
          ' ',
        ),
      Mr = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Ar))
    function Lr(e, t, r) {
      var i = e.type || 'unknown-event'
      ;((e.currentTarget = r),
        (function (e, t, r, i, a, o, s, l, u) {
          if ((Ve.apply(this, arguments), Me)) {
            if (!Me) throw Error(n(198))
            var c = Le
            ;((Me = !1), (Le = null), qe || ((qe = !0), (ze = c)))
          }
        })(i, t, void 0, e),
        (e.currentTarget = null))
    }
    function qr(e, t) {
      t = !!(4 & t)
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = r.event
        r = r.listeners
        e: {
          var a = void 0
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var s = r[o],
                l = s.instance,
                u = s.currentTarget
              if (((s = s.listener), l !== a && i.isPropagationStopped())) break e
              ;(Lr(i, s, u), (a = l))
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((l = (s = r[o]).instance),
                (u = s.currentTarget),
                (s = s.listener),
                l !== a && i.isPropagationStopped())
              )
                break e
              ;(Lr(i, s, u), (a = l))
            }
        }
      }
      if (qe) throw ((e = ze), (qe = !1), (ze = null), e)
    }
    function zr(e, t) {
      var n = t[mi]
      void 0 === n && (n = t[mi] = new Set())
      var r = e + '__bubble'
      n.has(r) || ($r(t, e, 2, !1), n.add(r))
    }
    function jr(e, t, n) {
      var r = 0
      ;(t && (r |= 4), $r(n, e, r, t))
    }
    var Vr = '_reactListening' + Math.random().toString(36).slice(2)
    function Qr(e) {
      if (!e[Vr]) {
        ;((e[Vr] = !0),
          r.forEach(function (t) {
            'selectionchange' !== t && (Mr.has(t) || jr(t, !1, e), jr(t, !0, e))
          }))
        var t = 9 === e.nodeType ? e : e.ownerDocument
        null === t || t[Vr] || ((t[Vr] = !0), jr('selectionchange', !1, t))
      }
    }
    function $r(e, t, n, r) {
      switch (Yt(t)) {
        case 1:
          var i = Bt
          break
        case 4:
          i = Wt
          break
        default:
          i = Kt
      }
      ;((n = i.bind(null, t, n, e)),
        (i = void 0),
        !Pe || ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) || (i = !0),
        r
          ? void 0 !== i
            ? e.addEventListener(t, n, { capture: !0, passive: i })
            : e.addEventListener(t, n, !0)
          : void 0 !== i
            ? e.addEventListener(t, n, { passive: i })
            : e.addEventListener(t, n, !1))
    }
    function Ur(e, t, n, r, i) {
      var a = r
      if (!(1 & t || 2 & t || null === r))
        e: for (;;) {
          if (null === r) return
          var o = r.tag
          if (3 === o || 4 === o) {
            var s = r.stateNode.containerInfo
            if (s === i || (8 === s.nodeType && s.parentNode === i)) break
            if (4 === o)
              for (o = r.return; null !== o; ) {
                var l = o.tag
                if (
                  (3 === l || 4 === l) &&
                  ((l = o.stateNode.containerInfo) === i || (8 === l.nodeType && l.parentNode === i))
                )
                  return
                o = o.return
              }
            for (; null !== s; ) {
              if (null === (o = gi(s))) return
              if (5 === (l = o.tag) || 6 === l) {
                r = a = o
                continue e
              }
              s = s.parentNode
            }
          }
          r = r.return
        }
      De(function () {
        var r = a,
          i = we(n),
          o = []
        e: {
          var s = Nr.get(e)
          if (void 0 !== s) {
            var l = cn,
              u = e
            switch (e) {
              case 'keypress':
                if (0 === tn(n)) break e
              case 'keydown':
              case 'keyup':
                l = On
                break
              case 'focusin':
                ;((u = 'focus'), (l = vn))
                break
              case 'focusout':
                ;((u = 'blur'), (l = vn))
                break
              case 'beforeblur':
              case 'afterblur':
                l = vn
                break
              case 'click':
                if (2 === n.button) break e
              case 'auxclick':
              case 'dblclick':
              case 'mousedown':
              case 'mousemove':
              case 'mouseup':
              case 'mouseout':
              case 'mouseover':
              case 'contextmenu':
                l = hn
                break
              case 'drag':
              case 'dragend':
              case 'dragenter':
              case 'dragexit':
              case 'dragleave':
              case 'dragover':
              case 'dragstart':
              case 'drop':
                l = mn
                break
              case 'touchcancel':
              case 'touchend':
              case 'touchmove':
              case 'touchstart':
                l = Rn
                break
              case xr:
              case Or:
              case Cr:
                l = yn
                break
              case Rr:
                l = Nn
                break
              case 'scroll':
                l = dn
                break
              case 'wheel':
                l = In
                break
              case 'copy':
              case 'cut':
              case 'paste':
                l = bn
                break
              case 'gotpointercapture':
              case 'lostpointercapture':
              case 'pointercancel':
              case 'pointerdown':
              case 'pointermove':
              case 'pointerout':
              case 'pointerover':
              case 'pointerup':
                l = Cn
            }
            var c = !!(4 & t),
              f = !c && 'scroll' === e,
              d = c ? (null !== s ? s + 'Capture' : null) : s
            c = []
            for (var p, h = r; null !== h; ) {
              var m = (p = h).stateNode
              if (
                (5 === p.tag && null !== m && ((p = m), null !== d && null != (m = Ie(h, d)) && c.push(Br(h, m, p))), f)
              )
                break
              h = h.return
            }
            0 < c.length && ((s = new l(s, u, null, n, i)), o.push({ event: s, listeners: c }))
          }
        }
        if (!(7 & t)) {
          if (
            ((l = 'mouseout' === e || 'pointerout' === e),
            (!(s = 'mouseover' === e || 'pointerover' === e) ||
              n === Ee ||
              !(u = n.relatedTarget || n.fromElement) ||
              (!gi(u) && !u[hi])) &&
              (l || s) &&
              ((s = i.window === i ? i : (s = i.ownerDocument) ? s.defaultView || s.parentWindow : window),
              l
                ? ((l = r),
                  null !== (u = (u = n.relatedTarget || n.toElement) ? gi(u) : null) &&
                    (u !== (f = Qe(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                    (u = null))
                : ((l = null), (u = r)),
              l !== u))
          ) {
            if (
              ((c = hn),
              (m = 'onMouseLeave'),
              (d = 'onMouseEnter'),
              (h = 'mouse'),
              ('pointerout' !== e && 'pointerover' !== e) ||
                ((c = Cn), (m = 'onPointerLeave'), (d = 'onPointerEnter'), (h = 'pointer')),
              (f = null == l ? s : Ei(l)),
              (p = null == u ? s : Ei(u)),
              ((s = new c(m, h + 'leave', l, n, i)).target = f),
              (s.relatedTarget = p),
              (m = null),
              gi(i) === r && (((c = new c(d, h + 'enter', u, n, i)).target = p), (c.relatedTarget = f), (m = c)),
              (f = m),
              l && u)
            )
              e: {
                for (d = u, h = 0, p = c = l; p; p = Kr(p)) h++
                for (p = 0, m = d; m; m = Kr(m)) p++
                for (; 0 < h - p; ) ((c = Kr(c)), h--)
                for (; 0 < p - h; ) ((d = Kr(d)), p--)
                for (; h--; ) {
                  if (c === d || (null !== d && c === d.alternate)) break e
                  ;((c = Kr(c)), (d = Kr(d)))
                }
                c = null
              }
            else c = null
            ;(null !== l && Hr(o, s, l, c, !1), null !== u && null !== f && Hr(o, f, u, c, !0))
          }
          if (
            'select' === (l = (s = r ? Ei(r) : window).nodeName && s.nodeName.toLowerCase()) ||
            ('input' === l && 'file' === s.type)
          )
            var v = Yn
          else if (Un(s))
            if (Jn) v = or
            else {
              v = ir
              var y = rr
            }
          else
            (l = s.nodeName) && 'input' === l.toLowerCase() && ('checkbox' === s.type || 'radio' === s.type) && (v = ar)
          switch (
            (v && (v = v(e, r))
              ? Bn(o, v, n, i)
              : (y && y(e, s, r),
                'focusout' === e &&
                  (y = s._wrapperState) &&
                  y.controlled &&
                  'number' === s.type &&
                  te(s, 'number', s.value)),
            (y = r ? Ei(r) : window),
            e)
          ) {
            case 'focusin':
              ;(Un(y) || 'true' === y.contentEditable) && ((vr = y), (yr = r), (gr = null))
              break
            case 'focusout':
              gr = yr = vr = null
              break
            case 'mousedown':
              br = !0
              break
            case 'contextmenu':
            case 'mouseup':
            case 'dragend':
              ;((br = !1), Er(o, n, i))
              break
            case 'selectionchange':
              if (mr) break
            case 'keydown':
            case 'keyup':
              Er(o, n, i)
          }
          var g
          if (Fn)
            e: {
              switch (e) {
                case 'compositionstart':
                  var b = 'onCompositionStart'
                  break e
                case 'compositionend':
                  b = 'onCompositionEnd'
                  break e
                case 'compositionupdate':
                  b = 'onCompositionUpdate'
                  break e
              }
              b = void 0
            }
          else
            Qn
              ? jn(e, n) && (b = 'onCompositionEnd')
              : 'keydown' === e && 229 === n.keyCode && (b = 'onCompositionStart')
          ;(b &&
            (Ln &&
              'ko' !== n.locale &&
              (Qn || 'onCompositionStart' !== b
                ? 'onCompositionEnd' === b && Qn && (g = en())
                : ((Xt = 'value' in (Jt = i) ? Jt.value : Jt.textContent), (Qn = !0))),
            0 < (y = Wr(r, b)).length &&
              ((b = new En(b, e, null, n, i)),
              o.push({ event: b, listeners: y }),
              g ? (b.data = g) : null !== (g = Vn(n)) && (b.data = g))),
            (g = Mn
              ? (function (e, t) {
                  switch (e) {
                    case 'compositionend':
                      return Vn(t)
                    case 'keypress':
                      return 32 !== t.which ? null : ((zn = !0), qn)
                    case 'textInput':
                      return (e = t.data) === qn && zn ? null : e
                    default:
                      return null
                  }
                })(e, n)
              : (function (e, t) {
                  if (Qn)
                    return 'compositionend' === e || (!Fn && jn(e, t))
                      ? ((e = en()), (Zt = Xt = Jt = null), (Qn = !1), e)
                      : null
                  switch (e) {
                    case 'paste':
                    default:
                      return null
                    case 'keypress':
                      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                        if (t.char && 1 < t.char.length) return t.char
                        if (t.which) return String.fromCharCode(t.which)
                      }
                      return null
                    case 'compositionend':
                      return Ln && 'ko' !== t.locale ? null : t.data
                  }
                })(e, n)) &&
              0 < (r = Wr(r, 'onBeforeInput')).length &&
              ((i = new En('onBeforeInput', 'beforeinput', null, n, i)),
              o.push({ event: i, listeners: r }),
              (i.data = g)))
        }
        qr(o, t)
      })
    }
    function Br(e, t, n) {
      return { instance: e, listener: t, currentTarget: n }
    }
    function Wr(e, t) {
      for (var n = t + 'Capture', r = []; null !== e; ) {
        var i = e,
          a = i.stateNode
        ;(5 === i.tag &&
          null !== a &&
          ((i = a), null != (a = Ie(e, n)) && r.unshift(Br(e, a, i)), null != (a = Ie(e, t)) && r.push(Br(e, a, i))),
          (e = e.return))
      }
      return r
    }
    function Kr(e) {
      if (null === e) return null
      do {
        e = e.return
      } while (e && 5 !== e.tag)
      return e || null
    }
    function Hr(e, t, n, r, i) {
      for (var a = t._reactName, o = []; null !== n && n !== r; ) {
        var s = n,
          l = s.alternate,
          u = s.stateNode
        if (null !== l && l === r) break
        ;(5 === s.tag &&
          null !== u &&
          ((s = u),
          i ? null != (l = Ie(n, a)) && o.unshift(Br(n, l, s)) : i || (null != (l = Ie(n, a)) && o.push(Br(n, l, s)))),
          (n = n.return))
      }
      0 !== o.length && e.push({ event: t, listeners: o })
    }
    var Gr = /\r\n?/g,
      Yr = /\u0000|\uFFFD/g
    function Jr(e) {
      return ('string' == typeof e ? e : '' + e).replace(Gr, '\n').replace(Yr, '')
    }
    function Xr(e, t, r) {
      if (((t = Jr(t)), Jr(e) !== t && r)) throw Error(n(425))
    }
    function Zr() {}
    var ei = null,
      ti = null
    function ni(e, t) {
      return (
        'textarea' === e ||
        'noscript' === e ||
        'string' == typeof t.children ||
        'number' == typeof t.children ||
        ('object' == typeof t.dangerouslySetInnerHTML &&
          null !== t.dangerouslySetInnerHTML &&
          null != t.dangerouslySetInnerHTML.__html)
      )
    }
    var ri = 'function' == typeof setTimeout ? setTimeout : void 0,
      ii = 'function' == typeof clearTimeout ? clearTimeout : void 0,
      ai = 'function' == typeof Promise ? Promise : void 0,
      oi =
        'function' == typeof queueMicrotask
          ? queueMicrotask
          : void 0 !== ai
            ? function (e) {
                return ai.resolve(null).then(e).catch(si)
              }
            : ri
    function si(e) {
      setTimeout(function () {
        throw e
      })
    }
    function li(e, t) {
      var n = t,
        r = 0
      do {
        var i = n.nextSibling
        if ((e.removeChild(n), i && 8 === i.nodeType))
          if ('/$' === (n = i.data)) {
            if (0 === r) return (e.removeChild(i), void Qt(t))
            r--
          } else ('$' !== n && '$?' !== n && '$!' !== n) || r++
        n = i
      } while (n)
      Qt(t)
    }
    function ui(e) {
      for (; null != e; e = e.nextSibling) {
        var t = e.nodeType
        if (1 === t || 3 === t) break
        if (8 === t) {
          if ('$' === (t = e.data) || '$!' === t || '$?' === t) break
          if ('/$' === t) return null
        }
      }
      return e
    }
    function ci(e) {
      e = e.previousSibling
      for (var t = 0; e; ) {
        if (8 === e.nodeType) {
          var n = e.data
          if ('$' === n || '$!' === n || '$?' === n) {
            if (0 === t) return e
            t--
          } else '/$' === n && t++
        }
        e = e.previousSibling
      }
      return null
    }
    var fi = Math.random().toString(36).slice(2),
      di = '__reactFiber$' + fi,
      pi = '__reactProps$' + fi,
      hi = '__reactContainer$' + fi,
      mi = '__reactEvents$' + fi,
      vi = '__reactListeners$' + fi,
      yi = '__reactHandles$' + fi
    function gi(e) {
      var t = e[di]
      if (t) return t
      for (var n = e.parentNode; n; ) {
        if ((t = n[hi] || n[di])) {
          if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
            for (e = ci(e); null !== e; ) {
              if ((n = e[di])) return n
              e = ci(e)
            }
          return t
        }
        n = (e = n).parentNode
      }
      return null
    }
    function bi(e) {
      return !(e = e[di] || e[hi]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e
    }
    function Ei(e) {
      if (5 === e.tag || 6 === e.tag) return e.stateNode
      throw Error(n(33))
    }
    function wi(e) {
      return e[pi] || null
    }
    var _i = [],
      ki = -1
    function Si(e) {
      return { current: e }
    }
    function Ti(e) {
      0 > ki || ((e.current = _i[ki]), (_i[ki] = null), ki--)
    }
    function xi(e, t) {
      ;(ki++, (_i[ki] = e.current), (e.current = t))
    }
    var Oi = {},
      Ci = Si(Oi),
      Ri = Si(!1),
      Ni = Oi
    function Di(e, t) {
      var n = e.type.contextTypes
      if (!n) return Oi
      var r = e.stateNode
      if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext
      var i,
        a = {}
      for (i in n) a[i] = t[i]
      return (
        r &&
          (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
          (e.__reactInternalMemoizedMaskedChildContext = a)),
        a
      )
    }
    function Ii(e) {
      return null != (e = e.childContextTypes)
    }
    function Pi() {
      ;(Ti(Ri), Ti(Ci))
    }
    function Fi(e, t, r) {
      if (Ci.current !== Oi) throw Error(n(168))
      ;(xi(Ci, t), xi(Ri, r))
    }
    function Ai(e, t, r) {
      var i = e.stateNode
      if (((t = t.childContextTypes), 'function' != typeof i.getChildContext)) return r
      for (var a in (i = i.getChildContext())) if (!(a in t)) throw Error(n(108, U(e) || 'Unknown', a))
      return q({}, r, i)
    }
    function Mi(e) {
      return (
        (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Oi),
        (Ni = Ci.current),
        xi(Ci, e),
        xi(Ri, Ri.current),
        !0
      )
    }
    function Li(e, t, r) {
      var i = e.stateNode
      if (!i) throw Error(n(169))
      ;(r ? ((e = Ai(e, t, Ni)), (i.__reactInternalMemoizedMergedChildContext = e), Ti(Ri), Ti(Ci), xi(Ci, e)) : Ti(Ri),
        xi(Ri, r))
    }
    var qi = null,
      zi = !1,
      ji = !1
    function Vi(e) {
      null === qi ? (qi = [e]) : qi.push(e)
    }
    function Qi() {
      if (!ji && null !== qi) {
        ji = !0
        var e = 0,
          t = bt
        try {
          var n = qi
          for (bt = 1; e < n.length; e++) {
            var r = n[e]
            do {
              r = r(!0)
            } while (null !== r)
          }
          ;((qi = null), (zi = !1))
        } catch (t) {
          throw (null !== qi && (qi = qi.slice(e + 1)), Ke(Ze, Qi), t)
        } finally {
          ;((bt = t), (ji = !1))
        }
      }
      return null
    }
    var $i = [],
      Ui = 0,
      Bi = null,
      Wi = 0,
      Ki = [],
      Hi = 0,
      Gi = null,
      Yi = 1,
      Ji = ''
    function Xi(e, t) {
      ;(($i[Ui++] = Wi), ($i[Ui++] = Bi), (Bi = e), (Wi = t))
    }
    function Zi(e, t, n) {
      ;((Ki[Hi++] = Yi), (Ki[Hi++] = Ji), (Ki[Hi++] = Gi), (Gi = e))
      var r = Yi
      e = Ji
      var i = 32 - ot(r) - 1
      ;((r &= ~(1 << i)), (n += 1))
      var a = 32 - ot(t) + i
      if (30 < a) {
        var o = i - (i % 5)
        ;((a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (Yi = (1 << (32 - ot(t) + i)) | (n << i) | r),
          (Ji = a + e))
      } else ((Yi = (1 << a) | (n << i) | r), (Ji = e))
    }
    function ea(e) {
      null !== e.return && (Xi(e, 1), Zi(e, 1, 0))
    }
    function ta(e) {
      for (; e === Bi; ) ((Bi = $i[--Ui]), ($i[Ui] = null), (Wi = $i[--Ui]), ($i[Ui] = null))
      for (; e === Gi; )
        ((Gi = Ki[--Hi]), (Ki[Hi] = null), (Ji = Ki[--Hi]), (Ki[Hi] = null), (Yi = Ki[--Hi]), (Ki[Hi] = null))
    }
    var na = null,
      ra = null,
      ia = !1,
      aa = null
    function oa(e, t) {
      var n = Du(5, null, null, 0)
      ;((n.elementType = 'DELETED'),
        (n.stateNode = t),
        (n.return = e),
        null === (t = e.deletions) ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n))
    }
    function sa(e, t) {
      switch (e.tag) {
        case 5:
          var n = e.type
          return (
            null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
            ((e.stateNode = t), (na = e), (ra = ui(t.firstChild)), !0)
          )
        case 6:
          return (
            null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
            ((e.stateNode = t), (na = e), (ra = null), !0)
          )
        case 13:
          return (
            null !== (t = 8 !== t.nodeType ? null : t) &&
            ((n = null !== Gi ? { id: Yi, overflow: Ji } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            ((n = Du(18, null, null, 0)).stateNode = t),
            (n.return = e),
            (e.child = n),
            (na = e),
            (ra = null),
            !0)
          )
        default:
          return !1
      }
    }
    function la(e) {
      return !(!(1 & e.mode) || 128 & e.flags)
    }
    function ua(e) {
      if (ia) {
        var t = ra
        if (t) {
          var r = t
          if (!sa(e, t)) {
            if (la(e)) throw Error(n(418))
            t = ui(r.nextSibling)
            var i = na
            t && sa(e, t) ? oa(i, r) : ((e.flags = (-4097 & e.flags) | 2), (ia = !1), (na = e))
          }
        } else {
          if (la(e)) throw Error(n(418))
          ;((e.flags = (-4097 & e.flags) | 2), (ia = !1), (na = e))
        }
      }
    }
    function ca(e) {
      for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return
      na = e
    }
    function fa(e) {
      if (e !== na) return !1
      if (!ia) return (ca(e), (ia = !0), !1)
      var t
      if (
        ((t = 3 !== e.tag) &&
          !(t = 5 !== e.tag) &&
          (t = 'head' !== (t = e.type) && 'body' !== t && !ni(e.type, e.memoizedProps)),
        t && (t = ra))
      ) {
        if (la(e)) throw (da(), Error(n(418)))
        for (; t; ) (oa(e, t), (t = ui(t.nextSibling)))
      }
      if ((ca(e), 13 === e.tag)) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(n(317))
        e: {
          for (e = e.nextSibling, t = 0; e; ) {
            if (8 === e.nodeType) {
              var r = e.data
              if ('/$' === r) {
                if (0 === t) {
                  ra = ui(e.nextSibling)
                  break e
                }
                t--
              } else ('$' !== r && '$!' !== r && '$?' !== r) || t++
            }
            e = e.nextSibling
          }
          ra = null
        }
      } else ra = na ? ui(e.stateNode.nextSibling) : null
      return !0
    }
    function da() {
      for (var e = ra; e; ) e = ui(e.nextSibling)
    }
    function pa() {
      ;((ra = na = null), (ia = !1))
    }
    function ha(e) {
      null === aa ? (aa = [e]) : aa.push(e)
    }
    var ma = w.ReactCurrentBatchConfig
    function va(e, t, r) {
      if (null !== (e = r.ref) && 'function' != typeof e && 'object' != typeof e) {
        if (r._owner) {
          if ((r = r._owner)) {
            if (1 !== r.tag) throw Error(n(309))
            var i = r.stateNode
          }
          if (!i) throw Error(n(147, e))
          var a = i,
            o = '' + e
          return null !== t && null !== t.ref && 'function' == typeof t.ref && t.ref._stringRef === o
            ? t.ref
            : ((t = function (e) {
                var t = a.refs
                null === e ? delete t[o] : (t[o] = e)
              }),
              (t._stringRef = o),
              t)
        }
        if ('string' != typeof e) throw Error(n(284))
        if (!r._owner) throw Error(n(290, e))
      }
      return e
    }
    function ya(e, t) {
      throw (
        (e = Object.prototype.toString.call(t)),
        Error(n(31, '[object Object]' === e ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e))
      )
    }
    function ga(e) {
      return (0, e._init)(e._payload)
    }
    function ba(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions
          null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n)
        }
      }
      function r(n, r) {
        if (!e) return null
        for (; null !== r; ) (t(n, r), (r = r.sibling))
        return null
      }
      function i(e, t) {
        for (e = new Map(); null !== t; ) (null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling))
        return e
      }
      function a(e, t) {
        return (((e = Pu(e, t)).index = 0), (e.sibling = null), e)
      }
      function o(t, n, r) {
        return (
          (t.index = r),
          e
            ? null !== (r = t.alternate)
              ? (r = r.index) < n
                ? ((t.flags |= 2), n)
                : r
              : ((t.flags |= 2), n)
            : ((t.flags |= 1048576), n)
        )
      }
      function s(t) {
        return (e && null === t.alternate && (t.flags |= 2), t)
      }
      function l(e, t, n, r) {
        return null === t || 6 !== t.tag ? (((t = Lu(n, e.mode, r)).return = e), t) : (((t = a(t, n)).return = e), t)
      }
      function u(e, t, n, r) {
        var i = n.type
        return i === S
          ? f(e, t, n.props.children, r, n.key)
          : null !== t &&
              (t.elementType === i || ('object' == typeof i && null !== i && i.$$typeof === P && ga(i) === t.type))
            ? (((r = a(t, n.props)).ref = va(e, t, n)), (r.return = e), r)
            : (((r = Fu(n.type, n.key, n.props, null, e.mode, r)).ref = va(e, t, n)), (r.return = e), r)
      }
      function c(e, t, n, r) {
        return null === t ||
          4 !== t.tag ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? (((t = qu(n, e.mode, r)).return = e), t)
          : (((t = a(t, n.children || [])).return = e), t)
      }
      function f(e, t, n, r, i) {
        return null === t || 7 !== t.tag ? (((t = Au(n, e.mode, r, i)).return = e), t) : (((t = a(t, n)).return = e), t)
      }
      function d(e, t, n) {
        if (('string' == typeof t && '' !== t) || 'number' == typeof t)
          return (((t = Lu('' + t, e.mode, n)).return = e), t)
        if ('object' == typeof t && null !== t) {
          switch (t.$$typeof) {
            case _:
              return (((n = Fu(t.type, t.key, t.props, null, e.mode, n)).ref = va(e, null, t)), (n.return = e), n)
            case k:
              return (((t = qu(t, e.mode, n)).return = e), t)
            case P:
              return d(e, (0, t._init)(t._payload), n)
          }
          if (ne(t) || M(t)) return (((t = Au(t, e.mode, n, null)).return = e), t)
          ya(e, t)
        }
        return null
      }
      function p(e, t, n, r) {
        var i = null !== t ? t.key : null
        if (('string' == typeof n && '' !== n) || 'number' == typeof n) return null !== i ? null : l(e, t, '' + n, r)
        if ('object' == typeof n && null !== n) {
          switch (n.$$typeof) {
            case _:
              return n.key === i ? u(e, t, n, r) : null
            case k:
              return n.key === i ? c(e, t, n, r) : null
            case P:
              return p(e, t, (i = n._init)(n._payload), r)
          }
          if (ne(n) || M(n)) return null !== i ? null : f(e, t, n, r, null)
          ya(e, n)
        }
        return null
      }
      function h(e, t, n, r, i) {
        if (('string' == typeof r && '' !== r) || 'number' == typeof r) return l(t, (e = e.get(n) || null), '' + r, i)
        if ('object' == typeof r && null !== r) {
          switch (r.$$typeof) {
            case _:
              return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, i)
            case k:
              return c(t, (e = e.get(null === r.key ? n : r.key) || null), r, i)
            case P:
              return h(e, t, n, (0, r._init)(r._payload), i)
          }
          if (ne(r) || M(r)) return f(t, (e = e.get(n) || null), r, i, null)
          ya(t, r)
        }
        return null
      }
      function m(n, a, s, l) {
        for (var u = null, c = null, f = a, m = (a = 0), v = null; null !== f && m < s.length; m++) {
          f.index > m ? ((v = f), (f = null)) : (v = f.sibling)
          var y = p(n, f, s[m], l)
          if (null === y) {
            null === f && (f = v)
            break
          }
          ;(e && f && null === y.alternate && t(n, f),
            (a = o(y, a, m)),
            null === c ? (u = y) : (c.sibling = y),
            (c = y),
            (f = v))
        }
        if (m === s.length) return (r(n, f), ia && Xi(n, m), u)
        if (null === f) {
          for (; m < s.length; m++)
            null !== (f = d(n, s[m], l)) && ((a = o(f, a, m)), null === c ? (u = f) : (c.sibling = f), (c = f))
          return (ia && Xi(n, m), u)
        }
        for (f = i(n, f); m < s.length; m++)
          null !== (v = h(f, n, m, s[m], l)) &&
            (e && null !== v.alternate && f.delete(null === v.key ? m : v.key),
            (a = o(v, a, m)),
            null === c ? (u = v) : (c.sibling = v),
            (c = v))
        return (
          e &&
            f.forEach(function (e) {
              return t(n, e)
            }),
          ia && Xi(n, m),
          u
        )
      }
      function v(a, s, l, u) {
        var c = M(l)
        if ('function' != typeof c) throw Error(n(150))
        if (null == (l = c.call(l))) throw Error(n(151))
        for (var f = (c = null), m = s, v = (s = 0), y = null, g = l.next(); null !== m && !g.done; v++, g = l.next()) {
          m.index > v ? ((y = m), (m = null)) : (y = m.sibling)
          var b = p(a, m, g.value, u)
          if (null === b) {
            null === m && (m = y)
            break
          }
          ;(e && m && null === b.alternate && t(a, m),
            (s = o(b, s, v)),
            null === f ? (c = b) : (f.sibling = b),
            (f = b),
            (m = y))
        }
        if (g.done) return (r(a, m), ia && Xi(a, v), c)
        if (null === m) {
          for (; !g.done; v++, g = l.next())
            null !== (g = d(a, g.value, u)) && ((s = o(g, s, v)), null === f ? (c = g) : (f.sibling = g), (f = g))
          return (ia && Xi(a, v), c)
        }
        for (m = i(a, m); !g.done; v++, g = l.next())
          null !== (g = h(m, a, v, g.value, u)) &&
            (e && null !== g.alternate && m.delete(null === g.key ? v : g.key),
            (s = o(g, s, v)),
            null === f ? (c = g) : (f.sibling = g),
            (f = g))
        return (
          e &&
            m.forEach(function (e) {
              return t(a, e)
            }),
          ia && Xi(a, v),
          c
        )
      }
      return function e(n, i, o, l) {
        if (
          ('object' == typeof o && null !== o && o.type === S && null === o.key && (o = o.props.children),
          'object' == typeof o && null !== o)
        ) {
          switch (o.$$typeof) {
            case _:
              e: {
                for (var u = o.key, c = i; null !== c; ) {
                  if (c.key === u) {
                    if ((u = o.type) === S) {
                      if (7 === c.tag) {
                        ;(r(n, c.sibling), ((i = a(c, o.props.children)).return = n), (n = i))
                        break e
                      }
                    } else if (
                      c.elementType === u ||
                      ('object' == typeof u && null !== u && u.$$typeof === P && ga(u) === c.type)
                    ) {
                      ;(r(n, c.sibling), ((i = a(c, o.props)).ref = va(n, c, o)), (i.return = n), (n = i))
                      break e
                    }
                    r(n, c)
                    break
                  }
                  ;(t(n, c), (c = c.sibling))
                }
                o.type === S
                  ? (((i = Au(o.props.children, n.mode, l, o.key)).return = n), (n = i))
                  : (((l = Fu(o.type, o.key, o.props, null, n.mode, l)).ref = va(n, i, o)), (l.return = n), (n = l))
              }
              return s(n)
            case k:
              e: {
                for (c = o.key; null !== i; ) {
                  if (i.key === c) {
                    if (
                      4 === i.tag &&
                      i.stateNode.containerInfo === o.containerInfo &&
                      i.stateNode.implementation === o.implementation
                    ) {
                      ;(r(n, i.sibling), ((i = a(i, o.children || [])).return = n), (n = i))
                      break e
                    }
                    r(n, i)
                    break
                  }
                  ;(t(n, i), (i = i.sibling))
                }
                ;(((i = qu(o, n.mode, l)).return = n), (n = i))
              }
              return s(n)
            case P:
              return e(n, i, (c = o._init)(o._payload), l)
          }
          if (ne(o)) return m(n, i, o, l)
          if (M(o)) return v(n, i, o, l)
          ya(n, o)
        }
        return ('string' == typeof o && '' !== o) || 'number' == typeof o
          ? ((o = '' + o),
            null !== i && 6 === i.tag
              ? (r(n, i.sibling), ((i = a(i, o)).return = n), (n = i))
              : (r(n, i), ((i = Lu(o, n.mode, l)).return = n), (n = i)),
            s(n))
          : r(n, i)
      }
    }
    var Ea = ba(!0),
      wa = ba(!1),
      _a = Si(null),
      ka = null,
      Sa = null,
      Ta = null
    function xa() {
      Ta = Sa = ka = null
    }
    function Oa(e) {
      var t = _a.current
      ;(Ti(_a), (e._currentValue = t))
    }
    function Ca(e, t, n) {
      for (; null !== e; ) {
        var r = e.alternate
        if (
          ((e.childLanes & t) !== t
            ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
            : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
          e === n)
        )
          break
        e = e.return
      }
    }
    function Ra(e, t) {
      ;((ka = e),
        (Ta = Sa = null),
        null !== (e = e.dependencies) &&
          null !== e.firstContext &&
          (0 !== (e.lanes & t) && (bs = !0), (e.firstContext = null)))
    }
    function Na(e) {
      var t = e._currentValue
      if (Ta !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), null === Sa)) {
          if (null === ka) throw Error(n(308))
          ;((Sa = e), (ka.dependencies = { lanes: 0, firstContext: e }))
        } else Sa = Sa.next = e
      return t
    }
    var Da = null
    function Ia(e) {
      null === Da ? (Da = [e]) : Da.push(e)
    }
    function Pa(e, t, n, r) {
      var i = t.interleaved
      return (null === i ? ((n.next = n), Ia(t)) : ((n.next = i.next), (i.next = n)), (t.interleaved = n), Fa(e, r))
    }
    function Fa(e, t) {
      e.lanes |= t
      var n = e.alternate
      for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
        ((e.childLanes |= t), null !== (n = e.alternate) && (n.childLanes |= t), (n = e), (e = e.return))
      return 3 === n.tag ? n.stateNode : null
    }
    var Aa = !1
    function Ma(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
      }
    }
    function La(e, t) {
      ;((e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects,
          }))
    }
    function qa(e, t) {
      return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }
    }
    function za(e, t, n) {
      var r = e.updateQueue
      if (null === r) return null
      if (((r = r.shared), 2 & Cl)) {
        var i = r.pending
        return (null === i ? (t.next = t) : ((t.next = i.next), (i.next = t)), (r.pending = t), Fa(e, n))
      }
      return (
        null === (i = r.interleaved) ? ((t.next = t), Ia(r)) : ((t.next = i.next), (i.next = t)),
        (r.interleaved = t),
        Fa(e, n)
      )
    }
    function ja(e, t, n) {
      if (null !== (t = t.updateQueue) && ((t = t.shared), 4194240 & n)) {
        var r = t.lanes
        ;((n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n))
      }
    }
    function Va(e, t) {
      var n = e.updateQueue,
        r = e.alternate
      if (null !== r && n === (r = r.updateQueue)) {
        var i = null,
          a = null
        if (null !== (n = n.firstBaseUpdate)) {
          do {
            var o = {
              eventTime: n.eventTime,
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: n.callback,
              next: null,
            }
            ;(null === a ? (i = a = o) : (a = a.next = o), (n = n.next))
          } while (null !== n)
          null === a ? (i = a = t) : (a = a.next = t)
        } else i = a = t
        return (
          (n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: a, shared: r.shared, effects: r.effects }),
          void (e.updateQueue = n)
        )
      }
      ;(null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t))
    }
    function Qa(e, t, n, r) {
      var i = e.updateQueue
      Aa = !1
      var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        s = i.shared.pending
      if (null !== s) {
        i.shared.pending = null
        var l = s,
          u = l.next
        ;((l.next = null), null === o ? (a = u) : (o.next = u), (o = l))
        var c = e.alternate
        null !== c &&
          (s = (c = c.updateQueue).lastBaseUpdate) !== o &&
          (null === s ? (c.firstBaseUpdate = u) : (s.next = u), (c.lastBaseUpdate = l))
      }
      if (null !== a) {
        var f = i.baseState
        for (o = 0, c = u = l = null, s = a; ; ) {
          var d = s.lane,
            p = s.eventTime
          if ((r & d) === d) {
            null !== c &&
              (c = c.next = { eventTime: p, lane: 0, tag: s.tag, payload: s.payload, callback: s.callback, next: null })
            e: {
              var h = e,
                m = s
              switch (((d = t), (p = n), m.tag)) {
                case 1:
                  if ('function' == typeof (h = m.payload)) {
                    f = h.call(p, f, d)
                    break e
                  }
                  f = h
                  break e
                case 3:
                  h.flags = (-65537 & h.flags) | 128
                case 0:
                  if (null == (d = 'function' == typeof (h = m.payload) ? h.call(p, f, d) : h)) break e
                  f = q({}, f, d)
                  break e
                case 2:
                  Aa = !0
              }
            }
            null !== s.callback &&
              0 !== s.lane &&
              ((e.flags |= 64), null === (d = i.effects) ? (i.effects = [s]) : d.push(s))
          } else
            ((p = { eventTime: p, lane: d, tag: s.tag, payload: s.payload, callback: s.callback, next: null }),
              null === c ? ((u = c = p), (l = f)) : (c = c.next = p),
              (o |= d))
          if (null === (s = s.next)) {
            if (null === (s = i.shared.pending)) break
            ;((s = (d = s).next), (d.next = null), (i.lastBaseUpdate = d), (i.shared.pending = null))
          }
        }
        if (
          (null === c && (l = f),
          (i.baseState = l),
          (i.firstBaseUpdate = u),
          (i.lastBaseUpdate = c),
          null !== (t = i.shared.interleaved))
        ) {
          i = t
          do {
            ;((o |= i.lane), (i = i.next))
          } while (i !== t)
        } else null === a && (i.shared.lanes = 0)
        ;((Ml |= o), (e.lanes = o), (e.memoizedState = f))
      }
    }
    function $a(e, t, r) {
      if (((e = t.effects), (t.effects = null), null !== e))
        for (t = 0; t < e.length; t++) {
          var i = e[t],
            a = i.callback
          if (null !== a) {
            if (((i.callback = null), (i = r), 'function' != typeof a)) throw Error(n(191, a))
            a.call(i)
          }
        }
    }
    var Ua = {},
      Ba = Si(Ua),
      Wa = Si(Ua),
      Ka = Si(Ua)
    function Ha(e) {
      if (e === Ua) throw Error(n(174))
      return e
    }
    function Ga(e, t) {
      switch ((xi(Ka, t), xi(Wa, e), xi(Ba, Ua), (e = t.nodeType))) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : ue(null, '')
          break
        default:
          t = ue((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName))
      }
      ;(Ti(Ba), xi(Ba, t))
    }
    function Ya() {
      ;(Ti(Ba), Ti(Wa), Ti(Ka))
    }
    function Ja(e) {
      Ha(Ka.current)
      var t = Ha(Ba.current),
        n = ue(t, e.type)
      t !== n && (xi(Wa, e), xi(Ba, n))
    }
    function Xa(e) {
      Wa.current === e && (Ti(Ba), Ti(Wa))
    }
    var Za = Si(0)
    function eo(e) {
      for (var t = e; null !== t; ) {
        if (13 === t.tag) {
          var n = t.memoizedState
          if (null !== n && (null === (n = n.dehydrated) || '$?' === n.data || '$!' === n.data)) return t
        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
          if (128 & t.flags) return t
        } else if (null !== t.child) {
          ;((t.child.return = t), (t = t.child))
          continue
        }
        if (t === e) break
        for (; null === t.sibling; ) {
          if (null === t.return || t.return === e) return null
          t = t.return
        }
        ;((t.sibling.return = t.return), (t = t.sibling))
      }
      return null
    }
    var to = []
    function no() {
      for (var e = 0; e < to.length; e++) to[e]._workInProgressVersionPrimary = null
      to.length = 0
    }
    var ro = w.ReactCurrentDispatcher,
      io = w.ReactCurrentBatchConfig,
      ao = 0,
      oo = null,
      so = null,
      lo = null,
      uo = !1,
      co = !1,
      fo = 0,
      po = 0
    function ho() {
      throw Error(n(321))
    }
    function mo(e, t) {
      if (null === t) return !1
      for (var n = 0; n < t.length && n < e.length; n++) if (!sr(e[n], t[n])) return !1
      return !0
    }
    function vo(e, t, r, i, a, o) {
      if (
        ((ao = o),
        (oo = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (ro.current = null === e || null === e.memoizedState ? Zo : es),
        (e = r(i, a)),
        co)
      ) {
        o = 0
        do {
          if (((co = !1), (fo = 0), 25 <= o)) throw Error(n(301))
          ;((o += 1), (lo = so = null), (t.updateQueue = null), (ro.current = ts), (e = r(i, a)))
        } while (co)
      }
      if (((ro.current = Xo), (t = null !== so && null !== so.next), (ao = 0), (lo = so = oo = null), (uo = !1), t))
        throw Error(n(300))
      return e
    }
    function yo() {
      var e = 0 !== fo
      return ((fo = 0), e)
    }
    function go() {
      var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }
      return (null === lo ? (oo.memoizedState = lo = e) : (lo = lo.next = e), lo)
    }
    function bo() {
      if (null === so) {
        var e = oo.alternate
        e = null !== e ? e.memoizedState : null
      } else e = so.next
      var t = null === lo ? oo.memoizedState : lo.next
      if (null !== t) ((lo = t), (so = e))
      else {
        if (null === e) throw Error(n(310))
        ;((e = {
          memoizedState: (so = e).memoizedState,
          baseState: so.baseState,
          baseQueue: so.baseQueue,
          queue: so.queue,
          next: null,
        }),
          null === lo ? (oo.memoizedState = lo = e) : (lo = lo.next = e))
      }
      return lo
    }
    function Eo(e, t) {
      return 'function' == typeof t ? t(e) : t
    }
    function wo(e) {
      var t = bo(),
        r = t.queue
      if (null === r) throw Error(n(311))
      r.lastRenderedReducer = e
      var i = so,
        a = i.baseQueue,
        o = r.pending
      if (null !== o) {
        if (null !== a) {
          var s = a.next
          ;((a.next = o.next), (o.next = s))
        }
        ;((i.baseQueue = a = o), (r.pending = null))
      }
      if (null !== a) {
        ;((o = a.next), (i = i.baseState))
        var l = (s = null),
          u = null,
          c = o
        do {
          var f = c.lane
          if ((ao & f) === f)
            (null !== u &&
              (u = u.next =
                { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }),
              (i = c.hasEagerState ? c.eagerState : e(i, c.action)))
          else {
            var d = { lane: f, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }
            ;(null === u ? ((l = u = d), (s = i)) : (u = u.next = d), (oo.lanes |= f), (Ml |= f))
          }
          c = c.next
        } while (null !== c && c !== o)
        ;(null === u ? (s = i) : (u.next = l),
          sr(i, t.memoizedState) || (bs = !0),
          (t.memoizedState = i),
          (t.baseState = s),
          (t.baseQueue = u),
          (r.lastRenderedState = i))
      }
      if (null !== (e = r.interleaved)) {
        a = e
        do {
          ;((o = a.lane), (oo.lanes |= o), (Ml |= o), (a = a.next))
        } while (a !== e)
      } else null === a && (r.lanes = 0)
      return [t.memoizedState, r.dispatch]
    }
    function _o(e) {
      var t = bo(),
        r = t.queue
      if (null === r) throw Error(n(311))
      r.lastRenderedReducer = e
      var i = r.dispatch,
        a = r.pending,
        o = t.memoizedState
      if (null !== a) {
        r.pending = null
        var s = (a = a.next)
        do {
          ;((o = e(o, s.action)), (s = s.next))
        } while (s !== a)
        ;(sr(o, t.memoizedState) || (bs = !0),
          (t.memoizedState = o),
          null === t.baseQueue && (t.baseState = o),
          (r.lastRenderedState = o))
      }
      return [o, i]
    }
    function ko() {}
    function So(e, t) {
      var r = oo,
        i = bo(),
        a = t(),
        o = !sr(i.memoizedState, a)
      if (
        (o && ((i.memoizedState = a), (bs = !0)),
        (i = i.queue),
        Mo(Oo.bind(null, r, i, e), [e]),
        i.getSnapshot !== t || o || (null !== lo && 1 & lo.memoizedState.tag))
      ) {
        if (((r.flags |= 2048), Do(9, xo.bind(null, r, i, a, t), void 0, null), null === Rl)) throw Error(n(349))
        30 & ao || To(r, t, a)
      }
      return a
    }
    function To(e, t, n) {
      ;((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        null === (t = oo.updateQueue)
          ? ((t = { lastEffect: null, stores: null }), (oo.updateQueue = t), (t.stores = [e]))
          : null === (n = t.stores)
            ? (t.stores = [e])
            : n.push(e))
    }
    function xo(e, t, n, r) {
      ;((t.value = n), (t.getSnapshot = r), Co(t) && Ro(e))
    }
    function Oo(e, t, n) {
      return n(function () {
        Co(t) && Ro(e)
      })
    }
    function Co(e) {
      var t = e.getSnapshot
      e = e.value
      try {
        var n = t()
        return !sr(e, n)
      } catch (e) {
        return !0
      }
    }
    function Ro(e) {
      var t = Fa(e, 1)
      null !== t && nu(t, e, 1, -1)
    }
    function No(e) {
      var t = go()
      return (
        'function' == typeof e && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Eo,
          lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = Ho.bind(null, oo, e)),
        [t.memoizedState, e]
      )
    }
    function Do(e, t, n, r) {
      return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        null === (t = oo.updateQueue)
          ? ((t = { lastEffect: null, stores: null }), (oo.updateQueue = t), (t.lastEffect = e.next = e))
          : null === (n = t.lastEffect)
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      )
    }
    function Io() {
      return bo().memoizedState
    }
    function Po(e, t, n, r) {
      var i = go()
      ;((oo.flags |= e), (i.memoizedState = Do(1 | t, n, void 0, void 0 === r ? null : r)))
    }
    function Fo(e, t, n, r) {
      var i = bo()
      r = void 0 === r ? null : r
      var a = void 0
      if (null !== so) {
        var o = so.memoizedState
        if (((a = o.destroy), null !== r && mo(r, o.deps))) return void (i.memoizedState = Do(t, n, a, r))
      }
      ;((oo.flags |= e), (i.memoizedState = Do(1 | t, n, a, r)))
    }
    function Ao(e, t) {
      return Po(8390656, 8, e, t)
    }
    function Mo(e, t) {
      return Fo(2048, 8, e, t)
    }
    function Lo(e, t) {
      return Fo(4, 2, e, t)
    }
    function qo(e, t) {
      return Fo(4, 4, e, t)
    }
    function zo(e, t) {
      return 'function' == typeof t
        ? ((e = e()),
          t(e),
          function () {
            t(null)
          })
        : null != t
          ? ((e = e()),
            (t.current = e),
            function () {
              t.current = null
            })
          : void 0
    }
    function jo(e, t, n) {
      return ((n = null != n ? n.concat([e]) : null), Fo(4, 4, zo.bind(null, t, e), n))
    }
    function Vo() {}
    function Qo(e, t) {
      var n = bo()
      t = void 0 === t ? null : t
      var r = n.memoizedState
      return null !== r && null !== t && mo(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e)
    }
    function $o(e, t) {
      var n = bo()
      t = void 0 === t ? null : t
      var r = n.memoizedState
      return null !== r && null !== t && mo(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e)
    }
    function Uo(e, t, n) {
      return 21 & ao
        ? (sr(n, t) || ((n = mt()), (oo.lanes |= n), (Ml |= n), (e.baseState = !0)), t)
        : (e.baseState && ((e.baseState = !1), (bs = !0)), (e.memoizedState = n))
    }
    function Bo(e, t) {
      var n = bt
      ;((bt = 0 !== n && 4 > n ? n : 4), e(!0))
      var r = io.transition
      io.transition = {}
      try {
        ;(e(!1), t())
      } finally {
        ;((bt = n), (io.transition = r))
      }
    }
    function Wo() {
      return bo().memoizedState
    }
    function Ko(e, t, n) {
      var r = tu(e)
      if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Go(e))) Yo(t, n)
      else if (null !== (n = Pa(e, t, n, r))) {
        ;(nu(n, e, r, eu()), Jo(n, t, r))
      }
    }
    function Ho(e, t, n) {
      var r = tu(e),
        i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
      if (Go(e)) Yo(t, i)
      else {
        var a = e.alternate
        if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer))
          try {
            var o = t.lastRenderedState,
              s = a(o, n)
            if (((i.hasEagerState = !0), (i.eagerState = s), sr(s, o))) {
              var l = t.interleaved
              return (null === l ? ((i.next = i), Ia(t)) : ((i.next = l.next), (l.next = i)), void (t.interleaved = i))
            }
          } catch (e) {}
        null !== (n = Pa(e, t, i, r)) && (nu(n, e, r, (i = eu())), Jo(n, t, r))
      }
    }
    function Go(e) {
      var t = e.alternate
      return e === oo || (null !== t && t === oo)
    }
    function Yo(e, t) {
      co = uo = !0
      var n = e.pending
      ;(null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t))
    }
    function Jo(e, t, n) {
      if (4194240 & n) {
        var r = t.lanes
        ;((n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n))
      }
    }
    var Xo = {
        readContext: Na,
        useCallback: ho,
        useContext: ho,
        useEffect: ho,
        useImperativeHandle: ho,
        useInsertionEffect: ho,
        useLayoutEffect: ho,
        useMemo: ho,
        useReducer: ho,
        useRef: ho,
        useState: ho,
        useDebugValue: ho,
        useDeferredValue: ho,
        useTransition: ho,
        useMutableSource: ho,
        useSyncExternalStore: ho,
        useId: ho,
        unstable_isNewReconciler: !1,
      },
      Zo = {
        readContext: Na,
        useCallback: function (e, t) {
          return ((go().memoizedState = [e, void 0 === t ? null : t]), e)
        },
        useContext: Na,
        useEffect: Ao,
        useImperativeHandle: function (e, t, n) {
          return ((n = null != n ? n.concat([e]) : null), Po(4194308, 4, zo.bind(null, t, e), n))
        },
        useLayoutEffect: function (e, t) {
          return Po(4194308, 4, e, t)
        },
        useInsertionEffect: function (e, t) {
          return Po(4, 2, e, t)
        },
        useMemo: function (e, t) {
          var n = go()
          return ((t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e)
        },
        useReducer: function (e, t, n) {
          var r = go()
          return (
            (t = void 0 !== n ? n(t) : t),
            (r.memoizedState = r.baseState = t),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: t,
            }),
            (r.queue = e),
            (e = e.dispatch = Ko.bind(null, oo, e)),
            [r.memoizedState, e]
          )
        },
        useRef: function (e) {
          return ((e = { current: e }), (go().memoizedState = e))
        },
        useState: No,
        useDebugValue: Vo,
        useDeferredValue: function (e) {
          return (go().memoizedState = e)
        },
        useTransition: function () {
          var e = No(!1),
            t = e[0]
          return ((e = Bo.bind(null, e[1])), (go().memoizedState = e), [t, e])
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, r) {
          var i = oo,
            a = go()
          if (ia) {
            if (void 0 === r) throw Error(n(407))
            r = r()
          } else {
            if (((r = t()), null === Rl)) throw Error(n(349))
            30 & ao || To(i, t, r)
          }
          a.memoizedState = r
          var o = { value: r, getSnapshot: t }
          return (
            (a.queue = o),
            Ao(Oo.bind(null, i, o, e), [e]),
            (i.flags |= 2048),
            Do(9, xo.bind(null, i, o, r, t), void 0, null),
            r
          )
        },
        useId: function () {
          var e = go(),
            t = Rl.identifierPrefix
          if (ia) {
            var n = Ji
            ;((t = ':' + t + 'R' + (n = (Yi & ~(1 << (32 - ot(Yi) - 1))).toString(32) + n)),
              0 < (n = fo++) && (t += 'H' + n.toString(32)),
              (t += ':'))
          } else t = ':' + t + 'r' + (n = po++).toString(32) + ':'
          return (e.memoizedState = t)
        },
        unstable_isNewReconciler: !1,
      },
      es = {
        readContext: Na,
        useCallback: Qo,
        useContext: Na,
        useEffect: Mo,
        useImperativeHandle: jo,
        useInsertionEffect: Lo,
        useLayoutEffect: qo,
        useMemo: $o,
        useReducer: wo,
        useRef: Io,
        useState: function () {
          return wo(Eo)
        },
        useDebugValue: Vo,
        useDeferredValue: function (e) {
          return Uo(bo(), so.memoizedState, e)
        },
        useTransition: function () {
          return [wo(Eo)[0], bo().memoizedState]
        },
        useMutableSource: ko,
        useSyncExternalStore: So,
        useId: Wo,
        unstable_isNewReconciler: !1,
      },
      ts = {
        readContext: Na,
        useCallback: Qo,
        useContext: Na,
        useEffect: Mo,
        useImperativeHandle: jo,
        useInsertionEffect: Lo,
        useLayoutEffect: qo,
        useMemo: $o,
        useReducer: _o,
        useRef: Io,
        useState: function () {
          return _o(Eo)
        },
        useDebugValue: Vo,
        useDeferredValue: function (e) {
          var t = bo()
          return null === so ? (t.memoizedState = e) : Uo(t, so.memoizedState, e)
        },
        useTransition: function () {
          return [_o(Eo)[0], bo().memoizedState]
        },
        useMutableSource: ko,
        useSyncExternalStore: So,
        useId: Wo,
        unstable_isNewReconciler: !1,
      }
    function ns(e, t) {
      if (e && e.defaultProps) {
        for (var n in ((t = q({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n])
        return t
      }
      return t
    }
    function rs(e, t, n, r) {
      ;((n = null == (n = n(r, (t = e.memoizedState))) ? t : q({}, t, n)),
        (e.memoizedState = n),
        0 === e.lanes && (e.updateQueue.baseState = n))
    }
    var is = {
      isMounted: function (e) {
        return !!(e = e._reactInternals) && Qe(e) === e
      },
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals
        var r = eu(),
          i = tu(e),
          a = qa(r, i)
        ;((a.payload = t), null != n && (a.callback = n), null !== (t = za(e, a, i)) && (nu(t, e, i, r), ja(t, e, i)))
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals
        var r = eu(),
          i = tu(e),
          a = qa(r, i)
        ;((a.tag = 1),
          (a.payload = t),
          null != n && (a.callback = n),
          null !== (t = za(e, a, i)) && (nu(t, e, i, r), ja(t, e, i)))
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals
        var n = eu(),
          r = tu(e),
          i = qa(n, r)
        ;((i.tag = 2), null != t && (i.callback = t), null !== (t = za(e, i, r)) && (nu(t, e, r, n), ja(t, e, r)))
      },
    }
    function as(e, t, n, r, i, a, o) {
      return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, a, o)
        : !t.prototype || !t.prototype.isPureReactComponent || !lr(n, r) || !lr(i, a)
    }
    function os(e, t, n) {
      var r = !1,
        i = Oi,
        a = t.contextType
      return (
        'object' == typeof a && null !== a
          ? (a = Na(a))
          : ((i = Ii(t) ? Ni : Ci.current), (a = (r = null != (r = t.contextTypes)) ? Di(e, i) : Oi)),
        (t = new t(n, a)),
        (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
        (t.updater = is),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
          (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i),
          (e.__reactInternalMemoizedMaskedChildContext = a)),
        t
      )
    }
    function ss(e, t, n, r) {
      ;((e = t.state),
        'function' == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
        'function' == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && is.enqueueReplaceState(t, t.state, null))
    }
    function ls(e, t, n, r) {
      var i = e.stateNode
      ;((i.props = n), (i.state = e.memoizedState), (i.refs = {}), Ma(e))
      var a = t.contextType
      ;('object' == typeof a && null !== a
        ? (i.context = Na(a))
        : ((a = Ii(t) ? Ni : Ci.current), (i.context = Di(e, a))),
        (i.state = e.memoizedState),
        'function' == typeof (a = t.getDerivedStateFromProps) && (rs(e, t, a, n), (i.state = e.memoizedState)),
        'function' == typeof t.getDerivedStateFromProps ||
          'function' == typeof i.getSnapshotBeforeUpdate ||
          ('function' != typeof i.UNSAFE_componentWillMount && 'function' != typeof i.componentWillMount) ||
          ((t = i.state),
          'function' == typeof i.componentWillMount && i.componentWillMount(),
          'function' == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(),
          t !== i.state && is.enqueueReplaceState(i, i.state, null),
          Qa(e, n, i, r),
          (i.state = e.memoizedState)),
        'function' == typeof i.componentDidMount && (e.flags |= 4194308))
    }
    function us(e, t) {
      try {
        var n = '',
          r = t
        do {
          ;((n += Q(r)), (r = r.return))
        } while (r)
        var i = n
      } catch (e) {
        i = '\nError generating stack: ' + e.message + '\n' + e.stack
      }
      return { value: e, source: t, stack: i, digest: null }
    }
    function cs(e, t, n) {
      return { value: e, source: null, stack: null != n ? n : null, digest: null != t ? t : null }
    }
    function fs(e, t) {
      try {
        console.error(t.value)
      } catch (e) {
        setTimeout(function () {
          throw e
        })
      }
    }
    var ds = 'function' == typeof WeakMap ? WeakMap : Map
    function ps(e, t, n) {
      ;(((n = qa(-1, n)).tag = 3), (n.payload = { element: null }))
      var r = t.value
      return (
        (n.callback = function () {
          ;(Ul || ((Ul = !0), (Bl = r)), fs(0, t))
        }),
        n
      )
    }
    function hs(e, t, n) {
      ;(n = qa(-1, n)).tag = 3
      var r = e.type.getDerivedStateFromError
      if ('function' == typeof r) {
        var i = t.value
        ;((n.payload = function () {
          return r(i)
        }),
          (n.callback = function () {
            fs(0, t)
          }))
      }
      var a = e.stateNode
      return (
        null !== a &&
          'function' == typeof a.componentDidCatch &&
          (n.callback = function () {
            ;(fs(0, t), 'function' != typeof r && (null === Wl ? (Wl = new Set([this])) : Wl.add(this)))
            var e = t.stack
            this.componentDidCatch(t.value, { componentStack: null !== e ? e : '' })
          }),
        n
      )
    }
    function ms(e, t, n) {
      var r = e.pingCache
      if (null === r) {
        r = e.pingCache = new ds()
        var i = new Set()
        r.set(t, i)
      } else void 0 === (i = r.get(t)) && ((i = new Set()), r.set(t, i))
      i.has(n) || (i.add(n), (e = Tu.bind(null, e, t, n)), t.then(e, e))
    }
    function vs(e) {
      do {
        var t
        if (((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t)) return e
        e = e.return
      } while (null !== e)
      return null
    }
    function ys(e, t, n, r, i) {
      return 1 & e.mode
        ? ((e.flags |= 65536), (e.lanes = i), e)
        : (e === t
            ? (e.flags |= 65536)
            : ((e.flags |= 128),
              (n.flags |= 131072),
              (n.flags &= -52805),
              1 === n.tag && (null === n.alternate ? (n.tag = 17) : (((t = qa(-1, 1)).tag = 2), za(n, t, 1))),
              (n.lanes |= 1)),
          e)
    }
    var gs = w.ReactCurrentOwner,
      bs = !1
    function Es(e, t, n, r) {
      t.child = null === e ? wa(t, null, n, r) : Ea(t, e.child, n, r)
    }
    function ws(e, t, n, r, i) {
      n = n.render
      var a = t.ref
      return (
        Ra(t, i),
        (r = vo(e, t, n, r, a, i)),
        (n = yo()),
        null === e || bs
          ? (ia && n && ea(t), (t.flags |= 1), Es(e, t, r, i), t.child)
          : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Us(e, t, i))
      )
    }
    function _s(e, t, n, r, i) {
      if (null === e) {
        var a = n.type
        return 'function' != typeof a ||
          Iu(a) ||
          void 0 !== a.defaultProps ||
          null !== n.compare ||
          void 0 !== n.defaultProps
          ? (((e = Fu(n.type, null, r, t, t.mode, i)).ref = t.ref), (e.return = t), (t.child = e))
          : ((t.tag = 15), (t.type = a), ks(e, t, a, r, i))
      }
      if (((a = e.child), 0 === (e.lanes & i))) {
        var o = a.memoizedProps
        if ((n = null !== (n = n.compare) ? n : lr)(o, r) && e.ref === t.ref) return Us(e, t, i)
      }
      return ((t.flags |= 1), ((e = Pu(a, r)).ref = t.ref), (e.return = t), (t.child = e))
    }
    function ks(e, t, n, r, i) {
      if (null !== e) {
        var a = e.memoizedProps
        if (lr(a, r) && e.ref === t.ref) {
          if (((bs = !1), (t.pendingProps = r = a), 0 === (e.lanes & i))) return ((t.lanes = e.lanes), Us(e, t, i))
          131072 & e.flags && (bs = !0)
        }
      }
      return xs(e, t, n, r, i)
    }
    function Ss(e, t, n) {
      var r = t.pendingProps,
        i = r.children,
        a = null !== e ? e.memoizedState : null
      if ('hidden' === r.mode)
        if (1 & t.mode) {
          if (!(1073741824 & n))
            return (
              (e = null !== a ? a.baseLanes | n : n),
              (t.lanes = t.childLanes = 1073741824),
              (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
              (t.updateQueue = null),
              xi(Pl, Il),
              (Il |= e),
              null
            )
          ;((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
            (r = null !== a ? a.baseLanes : n),
            xi(Pl, Il),
            (Il |= r))
        } else ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), xi(Pl, Il), (Il |= n))
      else (null !== a ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n), xi(Pl, Il), (Il |= r))
      return (Es(e, t, i, n), t.child)
    }
    function Ts(e, t) {
      var n = t.ref
      ;((null === e && null !== n) || (null !== e && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152))
    }
    function xs(e, t, n, r, i) {
      var a = Ii(n) ? Ni : Ci.current
      return (
        (a = Di(t, a)),
        Ra(t, i),
        (n = vo(e, t, n, r, a, i)),
        (r = yo()),
        null === e || bs
          ? (ia && r && ea(t), (t.flags |= 1), Es(e, t, n, i), t.child)
          : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Us(e, t, i))
      )
    }
    function Os(e, t, n, r, i) {
      if (Ii(n)) {
        var a = !0
        Mi(t)
      } else a = !1
      if ((Ra(t, i), null === t.stateNode)) ($s(e, t), os(t, n, r), ls(t, n, r, i), (r = !0))
      else if (null === e) {
        var o = t.stateNode,
          s = t.memoizedProps
        o.props = s
        var l = o.context,
          u = n.contextType
        'object' == typeof u && null !== u ? (u = Na(u)) : (u = Di(t, (u = Ii(n) ? Ni : Ci.current)))
        var c = n.getDerivedStateFromProps,
          f = 'function' == typeof c || 'function' == typeof o.getSnapshotBeforeUpdate
        ;(f ||
          ('function' != typeof o.UNSAFE_componentWillReceiveProps &&
            'function' != typeof o.componentWillReceiveProps) ||
          ((s !== r || l !== u) && ss(t, o, r, u)),
          (Aa = !1))
        var d = t.memoizedState
        ;((o.state = d),
          Qa(t, r, o, i),
          (l = t.memoizedState),
          s !== r || d !== l || Ri.current || Aa
            ? ('function' == typeof c && (rs(t, n, c, r), (l = t.memoizedState)),
              (s = Aa || as(t, n, s, r, d, l, u))
                ? (f ||
                    ('function' != typeof o.UNSAFE_componentWillMount && 'function' != typeof o.componentWillMount) ||
                    ('function' == typeof o.componentWillMount && o.componentWillMount(),
                    'function' == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()),
                  'function' == typeof o.componentDidMount && (t.flags |= 4194308))
                : ('function' == typeof o.componentDidMount && (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = l)),
              (o.props = r),
              (o.state = l),
              (o.context = u),
              (r = s))
            : ('function' == typeof o.componentDidMount && (t.flags |= 4194308), (r = !1)))
      } else {
        ;((o = t.stateNode),
          La(e, t),
          (s = t.memoizedProps),
          (u = t.type === t.elementType ? s : ns(t.type, s)),
          (o.props = u),
          (f = t.pendingProps),
          (d = o.context),
          'object' == typeof (l = n.contextType) && null !== l
            ? (l = Na(l))
            : (l = Di(t, (l = Ii(n) ? Ni : Ci.current))))
        var p = n.getDerivedStateFromProps
        ;((c = 'function' == typeof p || 'function' == typeof o.getSnapshotBeforeUpdate) ||
          ('function' != typeof o.UNSAFE_componentWillReceiveProps &&
            'function' != typeof o.componentWillReceiveProps) ||
          ((s !== f || d !== l) && ss(t, o, r, l)),
          (Aa = !1),
          (d = t.memoizedState),
          (o.state = d),
          Qa(t, r, o, i))
        var h = t.memoizedState
        s !== f || d !== h || Ri.current || Aa
          ? ('function' == typeof p && (rs(t, n, p, r), (h = t.memoizedState)),
            (u = Aa || as(t, n, u, r, d, h, l) || !1)
              ? (c ||
                  ('function' != typeof o.UNSAFE_componentWillUpdate && 'function' != typeof o.componentWillUpdate) ||
                  ('function' == typeof o.componentWillUpdate && o.componentWillUpdate(r, h, l),
                  'function' == typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(r, h, l)),
                'function' == typeof o.componentDidUpdate && (t.flags |= 4),
                'function' == typeof o.getSnapshotBeforeUpdate && (t.flags |= 1024))
              : ('function' != typeof o.componentDidUpdate ||
                  (s === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                'function' != typeof o.getSnapshotBeforeUpdate ||
                  (s === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = h)),
            (o.props = r),
            (o.state = h),
            (o.context = l),
            (r = u))
          : ('function' != typeof o.componentDidUpdate ||
              (s === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            'function' != typeof o.getSnapshotBeforeUpdate ||
              (s === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1))
      }
      return Cs(e, t, n, r, a, i)
    }
    function Cs(e, t, n, r, i, a) {
      Ts(e, t)
      var o = !!(128 & t.flags)
      if (!r && !o) return (i && Li(t, n, !1), Us(e, t, a))
      ;((r = t.stateNode), (gs.current = t))
      var s = o && 'function' != typeof n.getDerivedStateFromError ? null : r.render()
      return (
        (t.flags |= 1),
        null !== e && o ? ((t.child = Ea(t, e.child, null, a)), (t.child = Ea(t, null, s, a))) : Es(e, t, s, a),
        (t.memoizedState = r.state),
        i && Li(t, n, !0),
        t.child
      )
    }
    function Rs(e) {
      var t = e.stateNode
      ;(t.pendingContext ? Fi(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Fi(0, t.context, !1),
        Ga(e, t.containerInfo))
    }
    function Ns(e, t, n, r, i) {
      return (pa(), ha(i), (t.flags |= 256), Es(e, t, n, r), t.child)
    }
    var Ds,
      Is,
      Ps,
      Fs,
      As = { dehydrated: null, treeContext: null, retryLane: 0 }
    function Ms(e) {
      return { baseLanes: e, cachePool: null, transitions: null }
    }
    function Ls(e, t, r) {
      var i,
        a = t.pendingProps,
        o = Za.current,
        s = !1,
        l = !!(128 & t.flags)
      if (
        ((i = l) || (i = (null === e || null !== e.memoizedState) && !!(2 & o)),
        i ? ((s = !0), (t.flags &= -129)) : (null !== e && null === e.memoizedState) || (o |= 1),
        xi(Za, 1 & o),
        null === e)
      )
        return (
          ua(t),
          null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
            ? (1 & t.mode ? ('$!' === e.data ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
            : ((l = a.children),
              (e = a.fallback),
              s
                ? ((a = t.mode),
                  (s = t.child),
                  (l = { mode: 'hidden', children: l }),
                  1 & a || null === s ? (s = Mu(l, a, 0, null)) : ((s.childLanes = 0), (s.pendingProps = l)),
                  (e = Au(e, a, r, null)),
                  (s.return = t),
                  (e.return = t),
                  (s.sibling = e),
                  (t.child = s),
                  (t.child.memoizedState = Ms(r)),
                  (t.memoizedState = As),
                  e)
                : qs(t, l))
        )
      if (null !== (o = e.memoizedState) && null !== (i = o.dehydrated))
        return (function (e, t, r, i, a, o, s) {
          if (r)
            return 256 & t.flags
              ? ((t.flags &= -257), zs(e, t, s, (i = cs(Error(n(422))))))
              : null !== t.memoizedState
                ? ((t.child = e.child), (t.flags |= 128), null)
                : ((o = i.fallback),
                  (a = t.mode),
                  (i = Mu({ mode: 'visible', children: i.children }, a, 0, null)),
                  ((o = Au(o, a, s, null)).flags |= 2),
                  (i.return = t),
                  (o.return = t),
                  (i.sibling = o),
                  (t.child = i),
                  1 & t.mode && Ea(t, e.child, null, s),
                  (t.child.memoizedState = Ms(s)),
                  (t.memoizedState = As),
                  o)
          if (!(1 & t.mode)) return zs(e, t, s, null)
          if ('$!' === a.data) {
            if ((i = a.nextSibling && a.nextSibling.dataset)) var l = i.dgst
            return ((i = l), zs(e, t, s, (i = cs((o = Error(n(419))), i, void 0))))
          }
          if (((l = 0 !== (s & e.childLanes)), bs || l)) {
            if (null !== (i = Rl)) {
              switch (s & -s) {
                case 4:
                  a = 2
                  break
                case 16:
                  a = 8
                  break
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                  a = 32
                  break
                case 536870912:
                  a = 268435456
                  break
                default:
                  a = 0
              }
              0 !== (a = 0 !== (a & (i.suspendedLanes | s)) ? 0 : a) &&
                a !== o.retryLane &&
                ((o.retryLane = a), Fa(e, a), nu(i, e, a, -1))
            }
            return (mu(), zs(e, t, s, (i = cs(Error(n(421))))))
          }
          return '$?' === a.data
            ? ((t.flags |= 128), (t.child = e.child), (t = Ou.bind(null, e)), (a._reactRetry = t), null)
            : ((e = o.treeContext),
              (ra = ui(a.nextSibling)),
              (na = t),
              (ia = !0),
              (aa = null),
              null !== e &&
                ((Ki[Hi++] = Yi), (Ki[Hi++] = Ji), (Ki[Hi++] = Gi), (Yi = e.id), (Ji = e.overflow), (Gi = t)),
              (t = qs(t, i.children)),
              (t.flags |= 4096),
              t)
        })(e, t, l, a, i, o, r)
      if (s) {
        ;((s = a.fallback), (l = t.mode), (i = (o = e.child).sibling))
        var u = { mode: 'hidden', children: a.children }
        return (
          1 & l || t.child === o
            ? ((a = Pu(o, u)).subtreeFlags = 14680064 & o.subtreeFlags)
            : (((a = t.child).childLanes = 0), (a.pendingProps = u), (t.deletions = null)),
          null !== i ? (s = Pu(i, s)) : ((s = Au(s, l, r, null)).flags |= 2),
          (s.return = t),
          (a.return = t),
          (a.sibling = s),
          (t.child = a),
          (a = s),
          (s = t.child),
          (l =
            null === (l = e.child.memoizedState)
              ? Ms(r)
              : { baseLanes: l.baseLanes | r, cachePool: null, transitions: l.transitions }),
          (s.memoizedState = l),
          (s.childLanes = e.childLanes & ~r),
          (t.memoizedState = As),
          a
        )
      }
      return (
        (e = (s = e.child).sibling),
        (a = Pu(s, { mode: 'visible', children: a.children })),
        !(1 & t.mode) && (a.lanes = r),
        (a.return = t),
        (a.sibling = null),
        null !== e && (null === (r = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
        (t.child = a),
        (t.memoizedState = null),
        a
      )
    }
    function qs(e, t) {
      return (((t = Mu({ mode: 'visible', children: t }, e.mode, 0, null)).return = e), (e.child = t))
    }
    function zs(e, t, n, r) {
      return (
        null !== r && ha(r),
        Ea(t, e.child, null, n),
        ((e = qs(t, t.pendingProps.children)).flags |= 2),
        (t.memoizedState = null),
        e
      )
    }
    function js(e, t, n) {
      e.lanes |= t
      var r = e.alternate
      ;(null !== r && (r.lanes |= t), Ca(e.return, t, n))
    }
    function Vs(e, t, n, r, i) {
      var a = e.memoizedState
      null === a
        ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i })
        : ((a.isBackwards = t),
          (a.rendering = null),
          (a.renderingStartTime = 0),
          (a.last = r),
          (a.tail = n),
          (a.tailMode = i))
    }
    function Qs(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail
      if ((Es(e, t, r.children, n), 2 & (r = Za.current))) ((r = (1 & r) | 2), (t.flags |= 128))
      else {
        if (null !== e && 128 & e.flags)
          e: for (e = t.child; null !== e; ) {
            if (13 === e.tag) null !== e.memoizedState && js(e, n, t)
            else if (19 === e.tag) js(e, n, t)
            else if (null !== e.child) {
              ;((e.child.return = e), (e = e.child))
              continue
            }
            if (e === t) break e
            for (; null === e.sibling; ) {
              if (null === e.return || e.return === t) break e
              e = e.return
            }
            ;((e.sibling.return = e.return), (e = e.sibling))
          }
        r &= 1
      }
      if ((xi(Za, r), 1 & t.mode))
        switch (i) {
          case 'forwards':
            for (n = t.child, i = null; null !== n; )
              (null !== (e = n.alternate) && null === eo(e) && (i = n), (n = n.sibling))
            ;(null === (n = i) ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
              Vs(t, !1, i, n, a))
            break
          case 'backwards':
            for (n = null, i = t.child, t.child = null; null !== i; ) {
              if (null !== (e = i.alternate) && null === eo(e)) {
                t.child = i
                break
              }
              ;((e = i.sibling), (i.sibling = n), (n = i), (i = e))
            }
            Vs(t, !0, n, null, a)
            break
          case 'together':
            Vs(t, !1, null, null, void 0)
            break
          default:
            t.memoizedState = null
        }
      else t.memoizedState = null
      return t.child
    }
    function $s(e, t) {
      !(1 & t.mode) && null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
    }
    function Us(e, t, r) {
      if ((null !== e && (t.dependencies = e.dependencies), (Ml |= t.lanes), 0 === (r & t.childLanes))) return null
      if (null !== e && t.child !== e.child) throw Error(n(153))
      if (null !== t.child) {
        for (r = Pu((e = t.child), e.pendingProps), t.child = r, r.return = t; null !== e.sibling; )
          ((e = e.sibling), ((r = r.sibling = Pu(e, e.pendingProps)).return = t))
        r.sibling = null
      }
      return t.child
    }
    function Bs(e, t) {
      if (!ia)
        switch (e.tailMode) {
          case 'hidden':
            t = e.tail
            for (var n = null; null !== t; ) (null !== t.alternate && (n = t), (t = t.sibling))
            null === n ? (e.tail = null) : (n.sibling = null)
            break
          case 'collapsed':
            n = e.tail
            for (var r = null; null !== n; ) (null !== n.alternate && (r = n), (n = n.sibling))
            null === r ? (t || null === e.tail ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null)
        }
    }
    function Ws(e) {
      var t = null !== e.alternate && e.alternate.child === e.child,
        n = 0,
        r = 0
      if (t)
        for (var i = e.child; null !== i; )
          ((n |= i.lanes | i.childLanes),
            (r |= 14680064 & i.subtreeFlags),
            (r |= 14680064 & i.flags),
            (i.return = e),
            (i = i.sibling))
      else
        for (i = e.child; null !== i; )
          ((n |= i.lanes | i.childLanes), (r |= i.subtreeFlags), (r |= i.flags), (i.return = e), (i = i.sibling))
      return ((e.subtreeFlags |= r), (e.childLanes = n), t)
    }
    function Ks(e, t, r) {
      var a = t.pendingProps
      switch ((ta(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (Ws(t), null)
        case 1:
        case 17:
          return (Ii(t.type) && Pi(), Ws(t), null)
        case 3:
          return (
            (a = t.stateNode),
            Ya(),
            Ti(Ri),
            Ti(Ci),
            no(),
            a.pendingContext && ((a.context = a.pendingContext), (a.pendingContext = null)),
            (null !== e && null !== e.child) ||
              (fa(t)
                ? (t.flags |= 4)
                : null === e ||
                  (e.memoizedState.isDehydrated && !(256 & t.flags)) ||
                  ((t.flags |= 1024), null !== aa && (ou(aa), (aa = null)))),
            Is(e, t),
            Ws(t),
            null
          )
        case 5:
          Xa(t)
          var o = Ha(Ka.current)
          if (((r = t.type), null !== e && null != t.stateNode))
            (Ps(e, t, r, a, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)))
          else {
            if (!a) {
              if (null === t.stateNode) throw Error(n(166))
              return (Ws(t), null)
            }
            if (((e = Ha(Ba.current)), fa(t))) {
              ;((a = t.stateNode), (r = t.type))
              var s = t.memoizedProps
              switch (((a[di] = t), (a[pi] = s), (e = !!(1 & t.mode)), r)) {
                case 'dialog':
                  ;(zr('cancel', a), zr('close', a))
                  break
                case 'iframe':
                case 'object':
                case 'embed':
                  zr('load', a)
                  break
                case 'video':
                case 'audio':
                  for (o = 0; o < Ar.length; o++) zr(Ar[o], a)
                  break
                case 'source':
                  zr('error', a)
                  break
                case 'img':
                case 'image':
                case 'link':
                  ;(zr('error', a), zr('load', a))
                  break
                case 'details':
                  zr('toggle', a)
                  break
                case 'input':
                  ;(J(a, s), zr('invalid', a))
                  break
                case 'select':
                  ;((a._wrapperState = { wasMultiple: !!s.multiple }), zr('invalid', a))
                  break
                case 'textarea':
                  ;(ae(a, s), zr('invalid', a))
              }
              for (var l in (ge(r, s), (o = null), s))
                if (s.hasOwnProperty(l)) {
                  var u = s[l]
                  'children' === l
                    ? 'string' == typeof u
                      ? a.textContent !== u &&
                        (!0 !== s.suppressHydrationWarning && Xr(a.textContent, u, e), (o = ['children', u]))
                      : 'number' == typeof u &&
                        a.textContent !== '' + u &&
                        (!0 !== s.suppressHydrationWarning && Xr(a.textContent, u, e), (o = ['children', '' + u]))
                    : i.hasOwnProperty(l) && null != u && 'onScroll' === l && zr('scroll', a)
                }
              switch (r) {
                case 'input':
                  ;(K(a), ee(a, s, !0))
                  break
                case 'textarea':
                  ;(K(a), se(a))
                  break
                case 'select':
                case 'option':
                  break
                default:
                  'function' == typeof s.onClick && (a.onclick = Zr)
              }
              ;((a = o), (t.updateQueue = a), null !== a && (t.flags |= 4))
            } else {
              ;((l = 9 === o.nodeType ? o : o.ownerDocument),
                'http://www.w3.org/1999/xhtml' === e && (e = le(r)),
                'http://www.w3.org/1999/xhtml' === e
                  ? 'script' === r
                    ? (((e = l.createElement('div')).innerHTML = '<script><\/script>'),
                      (e = e.removeChild(e.firstChild)))
                    : 'string' == typeof a.is
                      ? (e = l.createElement(r, { is: a.is }))
                      : ((e = l.createElement(r)),
                        'select' === r && ((l = e), a.multiple ? (l.multiple = !0) : a.size && (l.size = a.size)))
                  : (e = l.createElementNS(e, r)),
                (e[di] = t),
                (e[pi] = a),
                Ds(e, t, !1, !1),
                (t.stateNode = e))
              e: {
                switch (((l = be(r, a)), r)) {
                  case 'dialog':
                    ;(zr('cancel', e), zr('close', e), (o = a))
                    break
                  case 'iframe':
                  case 'object':
                  case 'embed':
                    ;(zr('load', e), (o = a))
                    break
                  case 'video':
                  case 'audio':
                    for (o = 0; o < Ar.length; o++) zr(Ar[o], e)
                    o = a
                    break
                  case 'source':
                    ;(zr('error', e), (o = a))
                    break
                  case 'img':
                  case 'image':
                  case 'link':
                    ;(zr('error', e), zr('load', e), (o = a))
                    break
                  case 'details':
                    ;(zr('toggle', e), (o = a))
                    break
                  case 'input':
                    ;(J(e, a), (o = Y(e, a)), zr('invalid', e))
                    break
                  case 'option':
                  default:
                    o = a
                    break
                  case 'select':
                    ;((e._wrapperState = { wasMultiple: !!a.multiple }),
                      (o = q({}, a, { value: void 0 })),
                      zr('invalid', e))
                    break
                  case 'textarea':
                    ;(ae(e, a), (o = ie(e, a)), zr('invalid', e))
                }
                for (s in (ge(r, o), (u = o)))
                  if (u.hasOwnProperty(s)) {
                    var c = u[s]
                    'style' === s
                      ? ve(e, c)
                      : 'dangerouslySetInnerHTML' === s
                        ? null != (c = c ? c.__html : void 0) && fe(e, c)
                        : 'children' === s
                          ? 'string' == typeof c
                            ? ('textarea' !== r || '' !== c) && de(e, c)
                            : 'number' == typeof c && de(e, '' + c)
                          : 'suppressContentEditableWarning' !== s &&
                            'suppressHydrationWarning' !== s &&
                            'autoFocus' !== s &&
                            (i.hasOwnProperty(s)
                              ? null != c && 'onScroll' === s && zr('scroll', e)
                              : null != c && b(e, s, c, l))
                  }
                switch (r) {
                  case 'input':
                    ;(K(e), ee(e, a, !1))
                    break
                  case 'textarea':
                    ;(K(e), se(e))
                    break
                  case 'option':
                    null != a.value && e.setAttribute('value', '' + B(a.value))
                    break
                  case 'select':
                    ;((e.multiple = !!a.multiple),
                      null != (s = a.value)
                        ? re(e, !!a.multiple, s, !1)
                        : null != a.defaultValue && re(e, !!a.multiple, a.defaultValue, !0))
                    break
                  default:
                    'function' == typeof o.onClick && (e.onclick = Zr)
                }
                switch (r) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    a = !!a.autoFocus
                    break e
                  case 'img':
                    a = !0
                    break e
                  default:
                    a = !1
                }
              }
              a && (t.flags |= 4)
            }
            null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
          }
          return (Ws(t), null)
        case 6:
          if (e && null != t.stateNode) Fs(e, t, e.memoizedProps, a)
          else {
            if ('string' != typeof a && null === t.stateNode) throw Error(n(166))
            if (((r = Ha(Ka.current)), Ha(Ba.current), fa(t))) {
              if (((a = t.stateNode), (r = t.memoizedProps), (a[di] = t), (s = a.nodeValue !== r) && null !== (e = na)))
                switch (e.tag) {
                  case 3:
                    Xr(a.nodeValue, r, !!(1 & e.mode))
                    break
                  case 5:
                    !0 !== e.memoizedProps.suppressHydrationWarning && Xr(a.nodeValue, r, !!(1 & e.mode))
                }
              s && (t.flags |= 4)
            } else (((a = (9 === r.nodeType ? r : r.ownerDocument).createTextNode(a))[di] = t), (t.stateNode = a))
          }
          return (Ws(t), null)
        case 13:
          if (
            (Ti(Za),
            (a = t.memoizedState),
            null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
          ) {
            if (ia && null !== ra && 1 & t.mode && !(128 & t.flags)) (da(), pa(), (t.flags |= 98560), (s = !1))
            else if (((s = fa(t)), null !== a && null !== a.dehydrated)) {
              if (null === e) {
                if (!s) throw Error(n(318))
                if (!(s = null !== (s = t.memoizedState) ? s.dehydrated : null)) throw Error(n(317))
                s[di] = t
              } else (pa(), !(128 & t.flags) && (t.memoizedState = null), (t.flags |= 4))
              ;(Ws(t), (s = !1))
            } else (null !== aa && (ou(aa), (aa = null)), (s = !0))
            if (!s) return 65536 & t.flags ? t : null
          }
          return 128 & t.flags
            ? ((t.lanes = r), t)
            : ((a = null !== a) !== (null !== e && null !== e.memoizedState) &&
                a &&
                ((t.child.flags |= 8192), 1 & t.mode && (null === e || 1 & Za.current ? 0 === Fl && (Fl = 3) : mu())),
              null !== t.updateQueue && (t.flags |= 4),
              Ws(t),
              null)
        case 4:
          return (Ya(), Is(e, t), null === e && Qr(t.stateNode.containerInfo), Ws(t), null)
        case 10:
          return (Oa(t.type._context), Ws(t), null)
        case 19:
          if ((Ti(Za), null === (s = t.memoizedState))) return (Ws(t), null)
          if (((a = !!(128 & t.flags)), null === (l = s.rendering)))
            if (a) Bs(s, !1)
            else {
              if (0 !== Fl || (null !== e && 128 & e.flags))
                for (e = t.child; null !== e; ) {
                  if (null !== (l = eo(e))) {
                    for (
                      t.flags |= 128,
                        Bs(s, !1),
                        null !== (a = l.updateQueue) && ((t.updateQueue = a), (t.flags |= 4)),
                        t.subtreeFlags = 0,
                        a = r,
                        r = t.child;
                      null !== r;
                    )
                      ((e = a),
                        ((s = r).flags &= 14680066),
                        null === (l = s.alternate)
                          ? ((s.childLanes = 0),
                            (s.lanes = e),
                            (s.child = null),
                            (s.subtreeFlags = 0),
                            (s.memoizedProps = null),
                            (s.memoizedState = null),
                            (s.updateQueue = null),
                            (s.dependencies = null),
                            (s.stateNode = null))
                          : ((s.childLanes = l.childLanes),
                            (s.lanes = l.lanes),
                            (s.child = l.child),
                            (s.subtreeFlags = 0),
                            (s.deletions = null),
                            (s.memoizedProps = l.memoizedProps),
                            (s.memoizedState = l.memoizedState),
                            (s.updateQueue = l.updateQueue),
                            (s.type = l.type),
                            (e = l.dependencies),
                            (s.dependencies = null === e ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                        (r = r.sibling))
                    return (xi(Za, (1 & Za.current) | 2), t.child)
                  }
                  e = e.sibling
                }
              null !== s.tail && Je() > Ql && ((t.flags |= 128), (a = !0), Bs(s, !1), (t.lanes = 4194304))
            }
          else {
            if (!a)
              if (null !== (e = eo(l))) {
                if (
                  ((t.flags |= 128),
                  (a = !0),
                  null !== (r = e.updateQueue) && ((t.updateQueue = r), (t.flags |= 4)),
                  Bs(s, !0),
                  null === s.tail && 'hidden' === s.tailMode && !l.alternate && !ia)
                )
                  return (Ws(t), null)
              } else
                2 * Je() - s.renderingStartTime > Ql &&
                  1073741824 !== r &&
                  ((t.flags |= 128), (a = !0), Bs(s, !1), (t.lanes = 4194304))
            s.isBackwards
              ? ((l.sibling = t.child), (t.child = l))
              : (null !== (r = s.last) ? (r.sibling = l) : (t.child = l), (s.last = l))
          }
          return null !== s.tail
            ? ((t = s.tail),
              (s.rendering = t),
              (s.tail = t.sibling),
              (s.renderingStartTime = Je()),
              (t.sibling = null),
              (r = Za.current),
              xi(Za, a ? (1 & r) | 2 : 1 & r),
              t)
            : (Ws(t), null)
        case 22:
        case 23:
          return (
            fu(),
            (a = null !== t.memoizedState),
            null !== e && (null !== e.memoizedState) !== a && (t.flags |= 8192),
            a && 1 & t.mode ? !!(1073741824 & Il) && (Ws(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : Ws(t),
            null
          )
        case 24:
        case 25:
          return null
      }
      throw Error(n(156, t.tag))
    }
    function Hs(e, t) {
      switch ((ta(t), t.tag)) {
        case 1:
          return (Ii(t.type) && Pi(), 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null)
        case 3:
          return (
            Ya(),
            Ti(Ri),
            Ti(Ci),
            no(),
            65536 & (e = t.flags) && !(128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
          )
        case 5:
          return (Xa(t), null)
        case 13:
          if ((Ti(Za), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
            if (null === t.alternate) throw Error(n(340))
            pa()
          }
          return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
        case 19:
          return (Ti(Za), null)
        case 4:
          return (Ya(), null)
        case 10:
          return (Oa(t.type._context), null)
        case 22:
        case 23:
          return (fu(), null)
        default:
          return null
      }
    }
    ;((Ds = function (e, t) {
      for (var n = t.child; null !== n; ) {
        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode)
        else if (4 !== n.tag && null !== n.child) {
          ;((n.child.return = n), (n = n.child))
          continue
        }
        if (n === t) break
        for (; null === n.sibling; ) {
          if (null === n.return || n.return === t) return
          n = n.return
        }
        ;((n.sibling.return = n.return), (n = n.sibling))
      }
    }),
      (Is = function () {}),
      (Ps = function (e, t, n, r) {
        var a = e.memoizedProps
        if (a !== r) {
          ;((e = t.stateNode), Ha(Ba.current))
          var o,
            s = null
          switch (n) {
            case 'input':
              ;((a = Y(e, a)), (r = Y(e, r)), (s = []))
              break
            case 'select':
              ;((a = q({}, a, { value: void 0 })), (r = q({}, r, { value: void 0 })), (s = []))
              break
            case 'textarea':
              ;((a = ie(e, a)), (r = ie(e, r)), (s = []))
              break
            default:
              'function' != typeof a.onClick && 'function' == typeof r.onClick && (e.onclick = Zr)
          }
          for (c in (ge(n, r), (n = null), a))
            if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
              if ('style' === c) {
                var l = a[c]
                for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''))
              } else
                'dangerouslySetInnerHTML' !== c &&
                  'children' !== c &&
                  'suppressContentEditableWarning' !== c &&
                  'suppressHydrationWarning' !== c &&
                  'autoFocus' !== c &&
                  (i.hasOwnProperty(c) ? s || (s = []) : (s = s || []).push(c, null))
          for (c in r) {
            var u = r[c]
            if (((l = null != a ? a[c] : void 0), r.hasOwnProperty(c) && u !== l && (null != u || null != l)))
              if ('style' === c)
                if (l) {
                  for (o in l) !l.hasOwnProperty(o) || (u && u.hasOwnProperty(o)) || (n || (n = {}), (n[o] = ''))
                  for (o in u) u.hasOwnProperty(o) && l[o] !== u[o] && (n || (n = {}), (n[o] = u[o]))
                } else (n || (s || (s = []), s.push(c, n)), (n = u))
              else
                'dangerouslySetInnerHTML' === c
                  ? ((u = u ? u.__html : void 0),
                    (l = l ? l.__html : void 0),
                    null != u && l !== u && (s = s || []).push(c, u))
                  : 'children' === c
                    ? ('string' != typeof u && 'number' != typeof u) || (s = s || []).push(c, '' + u)
                    : 'suppressContentEditableWarning' !== c &&
                      'suppressHydrationWarning' !== c &&
                      (i.hasOwnProperty(c)
                        ? (null != u && 'onScroll' === c && zr('scroll', e), s || l === u || (s = []))
                        : (s = s || []).push(c, u))
          }
          n && (s = s || []).push('style', n)
          var c = s
          ;(t.updateQueue = c) && (t.flags |= 4)
        }
      }),
      (Fs = function (e, t, n, r) {
        n !== r && (t.flags |= 4)
      }))
    var Gs = !1,
      Ys = !1,
      Js = 'function' == typeof WeakSet ? WeakSet : Set,
      Xs = null
    function Zs(e, t) {
      var n = e.ref
      if (null !== n)
        if ('function' == typeof n)
          try {
            n(null)
          } catch (n) {
            Su(e, t, n)
          }
        else n.current = null
    }
    function el(e, t, n) {
      try {
        n()
      } catch (n) {
        Su(e, t, n)
      }
    }
    var tl = !1
    function nl(e, t, n) {
      var r = t.updateQueue
      if (null !== (r = null !== r ? r.lastEffect : null)) {
        var i = (r = r.next)
        do {
          if ((i.tag & e) === e) {
            var a = i.destroy
            ;((i.destroy = void 0), void 0 !== a && el(t, n, a))
          }
          i = i.next
        } while (i !== r)
      }
    }
    function rl(e, t) {
      if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
        var n = (t = t.next)
        do {
          if ((n.tag & e) === e) {
            var r = n.create
            n.destroy = r()
          }
          n = n.next
        } while (n !== t)
      }
    }
    function il(e) {
      var t = e.ref
      if (null !== t) {
        var n = e.stateNode
        ;(e.tag, (e = n), 'function' == typeof t ? t(e) : (t.current = e))
      }
    }
    function al(e) {
      var t = e.alternate
      ;(null !== t && ((e.alternate = null), al(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        5 === e.tag &&
          null !== (t = e.stateNode) &&
          (delete t[di], delete t[pi], delete t[mi], delete t[vi], delete t[yi]),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null))
    }
    function ol(e) {
      return 5 === e.tag || 3 === e.tag || 4 === e.tag
    }
    function sl(e) {
      e: for (;;) {
        for (; null === e.sibling; ) {
          if (null === e.return || ol(e.return)) return null
          e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag; ) {
          if (2 & e.flags) continue e
          if (null === e.child || 4 === e.tag) continue e
          ;((e.child.return = e), (e = e.child))
        }
        if (!(2 & e.flags)) return e.stateNode
      }
    }
    function ll(e, t, n) {
      var r = e.tag
      if (5 === r || 6 === r)
        ((e = e.stateNode),
          t
            ? 8 === n.nodeType
              ? n.parentNode.insertBefore(e, t)
              : n.insertBefore(e, t)
            : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
              null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Zr)))
      else if (4 !== r && null !== (e = e.child))
        for (ll(e, t, n), e = e.sibling; null !== e; ) (ll(e, t, n), (e = e.sibling))
    }
    function ul(e, t, n) {
      var r = e.tag
      if (5 === r || 6 === r) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e))
      else if (4 !== r && null !== (e = e.child))
        for (ul(e, t, n), e = e.sibling; null !== e; ) (ul(e, t, n), (e = e.sibling))
    }
    var cl = null,
      fl = !1
    function dl(e, t, n) {
      for (n = n.child; null !== n; ) (pl(e, t, n), (n = n.sibling))
    }
    function pl(e, t, n) {
      if (at && 'function' == typeof at.onCommitFiberUnmount)
        try {
          at.onCommitFiberUnmount(it, n)
        } catch (e) {}
      switch (n.tag) {
        case 5:
          Ys || Zs(n, t)
        case 6:
          var r = cl,
            i = fl
          ;((cl = null),
            dl(e, t, n),
            (fl = i),
            null !== (cl = r) &&
              (fl
                ? ((e = cl), (n = n.stateNode), 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n))
                : cl.removeChild(n.stateNode)))
          break
        case 18:
          null !== cl &&
            (fl
              ? ((e = cl),
                (n = n.stateNode),
                8 === e.nodeType ? li(e.parentNode, n) : 1 === e.nodeType && li(e, n),
                Qt(e))
              : li(cl, n.stateNode))
          break
        case 4:
          ;((r = cl), (i = fl), (cl = n.stateNode.containerInfo), (fl = !0), dl(e, t, n), (cl = r), (fl = i))
          break
        case 0:
        case 11:
        case 14:
        case 15:
          if (!Ys && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
            i = r = r.next
            do {
              var a = i,
                o = a.destroy
              ;((a = a.tag), void 0 !== o && (2 & a || 4 & a) && el(n, t, o), (i = i.next))
            } while (i !== r)
          }
          dl(e, t, n)
          break
        case 1:
          if (!Ys && (Zs(n, t), 'function' == typeof (r = n.stateNode).componentWillUnmount))
            try {
              ;((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount())
            } catch (e) {
              Su(n, t, e)
            }
          dl(e, t, n)
          break
        case 21:
          dl(e, t, n)
          break
        case 22:
          1 & n.mode ? ((Ys = (r = Ys) || null !== n.memoizedState), dl(e, t, n), (Ys = r)) : dl(e, t, n)
          break
        default:
          dl(e, t, n)
      }
    }
    function hl(e) {
      var t = e.updateQueue
      if (null !== t) {
        e.updateQueue = null
        var n = e.stateNode
        ;(null === n && (n = e.stateNode = new Js()),
          t.forEach(function (t) {
            var r = Cu.bind(null, e, t)
            n.has(t) || (n.add(t), t.then(r, r))
          }))
      }
    }
    function ml(e, t) {
      var r = t.deletions
      if (null !== r)
        for (var i = 0; i < r.length; i++) {
          var a = r[i]
          try {
            var o = e,
              s = t,
              l = s
            e: for (; null !== l; ) {
              switch (l.tag) {
                case 5:
                  ;((cl = l.stateNode), (fl = !1))
                  break e
                case 3:
                case 4:
                  ;((cl = l.stateNode.containerInfo), (fl = !0))
                  break e
              }
              l = l.return
            }
            if (null === cl) throw Error(n(160))
            ;(pl(o, s, a), (cl = null), (fl = !1))
            var u = a.alternate
            ;(null !== u && (u.return = null), (a.return = null))
          } catch (e) {
            Su(a, t, e)
          }
        }
      if (12854 & t.subtreeFlags) for (t = t.child; null !== t; ) (vl(t, e), (t = t.sibling))
    }
    function vl(e, t) {
      var r = e.alternate,
        i = e.flags
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if ((ml(t, e), yl(e), 4 & i)) {
            try {
              ;(nl(3, e, e.return), rl(3, e))
            } catch (t) {
              Su(e, e.return, t)
            }
            try {
              nl(5, e, e.return)
            } catch (t) {
              Su(e, e.return, t)
            }
          }
          break
        case 1:
          ;(ml(t, e), yl(e), 512 & i && null !== r && Zs(r, r.return))
          break
        case 5:
          if ((ml(t, e), yl(e), 512 & i && null !== r && Zs(r, r.return), 32 & e.flags)) {
            var a = e.stateNode
            try {
              de(a, '')
            } catch (t) {
              Su(e, e.return, t)
            }
          }
          if (4 & i && null != (a = e.stateNode)) {
            var o = e.memoizedProps,
              s = null !== r ? r.memoizedProps : o,
              l = e.type,
              u = e.updateQueue
            if (((e.updateQueue = null), null !== u))
              try {
                ;('input' === l && 'radio' === o.type && null != o.name && X(a, o), be(l, s))
                var c = be(l, o)
                for (s = 0; s < u.length; s += 2) {
                  var f = u[s],
                    d = u[s + 1]
                  'style' === f
                    ? ve(a, d)
                    : 'dangerouslySetInnerHTML' === f
                      ? fe(a, d)
                      : 'children' === f
                        ? de(a, d)
                        : b(a, f, d, c)
                }
                switch (l) {
                  case 'input':
                    Z(a, o)
                    break
                  case 'textarea':
                    oe(a, o)
                    break
                  case 'select':
                    var p = a._wrapperState.wasMultiple
                    a._wrapperState.wasMultiple = !!o.multiple
                    var h = o.value
                    null != h
                      ? re(a, !!o.multiple, h, !1)
                      : p !== !!o.multiple &&
                        (null != o.defaultValue
                          ? re(a, !!o.multiple, o.defaultValue, !0)
                          : re(a, !!o.multiple, o.multiple ? [] : '', !1))
                }
                a[pi] = o
              } catch (t) {
                Su(e, e.return, t)
              }
          }
          break
        case 6:
          if ((ml(t, e), yl(e), 4 & i)) {
            if (null === e.stateNode) throw Error(n(162))
            ;((a = e.stateNode), (o = e.memoizedProps))
            try {
              a.nodeValue = o
            } catch (t) {
              Su(e, e.return, t)
            }
          }
          break
        case 3:
          if ((ml(t, e), yl(e), 4 & i && null !== r && r.memoizedState.isDehydrated))
            try {
              Qt(t.containerInfo)
            } catch (t) {
              Su(e, e.return, t)
            }
          break
        case 4:
        default:
          ;(ml(t, e), yl(e))
          break
        case 13:
          ;(ml(t, e),
            yl(e),
            8192 & (a = e.child).flags &&
              ((o = null !== a.memoizedState),
              (a.stateNode.isHidden = o),
              !o || (null !== a.alternate && null !== a.alternate.memoizedState) || (Vl = Je())),
            4 & i && hl(e))
          break
        case 22:
          if (
            ((f = null !== r && null !== r.memoizedState),
            1 & e.mode ? ((Ys = (c = Ys) || f), ml(t, e), (Ys = c)) : ml(t, e),
            yl(e),
            8192 & i)
          ) {
            if (((c = null !== e.memoizedState), (e.stateNode.isHidden = c) && !f && 1 & e.mode))
              for (Xs = e, f = e.child; null !== f; ) {
                for (d = Xs = f; null !== Xs; ) {
                  switch (((h = (p = Xs).child), p.tag)) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      nl(4, p, p.return)
                      break
                    case 1:
                      Zs(p, p.return)
                      var m = p.stateNode
                      if ('function' == typeof m.componentWillUnmount) {
                        ;((i = p), (r = p.return))
                        try {
                          ;((t = i), (m.props = t.memoizedProps), (m.state = t.memoizedState), m.componentWillUnmount())
                        } catch (e) {
                          Su(i, r, e)
                        }
                      }
                      break
                    case 5:
                      Zs(p, p.return)
                      break
                    case 22:
                      if (null !== p.memoizedState) {
                        wl(d)
                        continue
                      }
                  }
                  null !== h ? ((h.return = p), (Xs = h)) : wl(d)
                }
                f = f.sibling
              }
            e: for (f = null, d = e; ; ) {
              if (5 === d.tag) {
                if (null === f) {
                  f = d
                  try {
                    ;((a = d.stateNode),
                      c
                        ? 'function' == typeof (o = a.style).setProperty
                          ? o.setProperty('display', 'none', 'important')
                          : (o.display = 'none')
                        : ((l = d.stateNode),
                          (s = null != (u = d.memoizedProps.style) && u.hasOwnProperty('display') ? u.display : null),
                          (l.style.display = me('display', s))))
                  } catch (t) {
                    Su(e, e.return, t)
                  }
                }
              } else if (6 === d.tag) {
                if (null === f)
                  try {
                    d.stateNode.nodeValue = c ? '' : d.memoizedProps
                  } catch (t) {
                    Su(e, e.return, t)
                  }
              } else if (((22 !== d.tag && 23 !== d.tag) || null === d.memoizedState || d === e) && null !== d.child) {
                ;((d.child.return = d), (d = d.child))
                continue
              }
              if (d === e) break e
              for (; null === d.sibling; ) {
                if (null === d.return || d.return === e) break e
                ;(f === d && (f = null), (d = d.return))
              }
              ;(f === d && (f = null), (d.sibling.return = d.return), (d = d.sibling))
            }
          }
          break
        case 19:
          ;(ml(t, e), yl(e), 4 & i && hl(e))
        case 21:
      }
    }
    function yl(e) {
      var t = e.flags
      if (2 & t) {
        try {
          e: {
            for (var r = e.return; null !== r; ) {
              if (ol(r)) {
                var i = r
                break e
              }
              r = r.return
            }
            throw Error(n(160))
          }
          switch (i.tag) {
            case 5:
              var a = i.stateNode
              ;(32 & i.flags && (de(a, ''), (i.flags &= -33)), ul(e, sl(e), a))
              break
            case 3:
            case 4:
              var o = i.stateNode.containerInfo
              ll(e, sl(e), o)
              break
            default:
              throw Error(n(161))
          }
        } catch (t) {
          Su(e, e.return, t)
        }
        e.flags &= -3
      }
      4096 & t && (e.flags &= -4097)
    }
    function gl(e, t, n) {
      ;((Xs = e), bl(e))
    }
    function bl(e, t, n) {
      for (var r = !!(1 & e.mode); null !== Xs; ) {
        var i = Xs,
          a = i.child
        if (22 === i.tag && r) {
          var o = null !== i.memoizedState || Gs
          if (!o) {
            var s = i.alternate,
              l = (null !== s && null !== s.memoizedState) || Ys
            s = Gs
            var u = Ys
            if (((Gs = o), (Ys = l) && !u))
              for (Xs = i; null !== Xs; )
                ((l = (o = Xs).child),
                  22 === o.tag && null !== o.memoizedState ? _l(i) : null !== l ? ((l.return = o), (Xs = l)) : _l(i))
            for (; null !== a; ) ((Xs = a), bl(a), (a = a.sibling))
            ;((Xs = i), (Gs = s), (Ys = u))
          }
          El(e)
        } else 8772 & i.subtreeFlags && null !== a ? ((a.return = i), (Xs = a)) : El(e)
      }
    }
    function El(e) {
      for (; null !== Xs; ) {
        var t = Xs
        if (8772 & t.flags) {
          var r = t.alternate
          try {
            if (8772 & t.flags)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  Ys || rl(5, t)
                  break
                case 1:
                  var i = t.stateNode
                  if (4 & t.flags && !Ys)
                    if (null === r) i.componentDidMount()
                    else {
                      var a = t.elementType === t.type ? r.memoizedProps : ns(t.type, r.memoizedProps)
                      i.componentDidUpdate(a, r.memoizedState, i.__reactInternalSnapshotBeforeUpdate)
                    }
                  var o = t.updateQueue
                  null !== o && $a(t, o, i)
                  break
                case 3:
                  var s = t.updateQueue
                  if (null !== s) {
                    if (((r = null), null !== t.child))
                      switch (t.child.tag) {
                        case 5:
                        case 1:
                          r = t.child.stateNode
                      }
                    $a(t, s, r)
                  }
                  break
                case 5:
                  var l = t.stateNode
                  if (null === r && 4 & t.flags) {
                    r = l
                    var u = t.memoizedProps
                    switch (t.type) {
                      case 'button':
                      case 'input':
                      case 'select':
                      case 'textarea':
                        u.autoFocus && r.focus()
                        break
                      case 'img':
                        u.src && (r.src = u.src)
                    }
                  }
                  break
                case 6:
                case 4:
                case 12:
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break
                case 13:
                  if (null === t.memoizedState) {
                    var c = t.alternate
                    if (null !== c) {
                      var f = c.memoizedState
                      if (null !== f) {
                        var d = f.dehydrated
                        null !== d && Qt(d)
                      }
                    }
                  }
                  break
                default:
                  throw Error(n(163))
              }
            Ys || (512 & t.flags && il(t))
          } catch (e) {
            Su(t, t.return, e)
          }
        }
        if (t === e) {
          Xs = null
          break
        }
        if (null !== (r = t.sibling)) {
          ;((r.return = t.return), (Xs = r))
          break
        }
        Xs = t.return
      }
    }
    function wl(e) {
      for (; null !== Xs; ) {
        var t = Xs
        if (t === e) {
          Xs = null
          break
        }
        var n = t.sibling
        if (null !== n) {
          ;((n.return = t.return), (Xs = n))
          break
        }
        Xs = t.return
      }
    }
    function _l(e) {
      for (; null !== Xs; ) {
        var t = Xs
        try {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              var n = t.return
              try {
                rl(4, t)
              } catch (e) {
                Su(t, n, e)
              }
              break
            case 1:
              var r = t.stateNode
              if ('function' == typeof r.componentDidMount) {
                var i = t.return
                try {
                  r.componentDidMount()
                } catch (e) {
                  Su(t, i, e)
                }
              }
              var a = t.return
              try {
                il(t)
              } catch (e) {
                Su(t, a, e)
              }
              break
            case 5:
              var o = t.return
              try {
                il(t)
              } catch (e) {
                Su(t, o, e)
              }
          }
        } catch (e) {
          Su(t, t.return, e)
        }
        if (t === e) {
          Xs = null
          break
        }
        var s = t.sibling
        if (null !== s) {
          ;((s.return = t.return), (Xs = s))
          break
        }
        Xs = t.return
      }
    }
    var kl,
      Sl = Math.ceil,
      Tl = w.ReactCurrentDispatcher,
      xl = w.ReactCurrentOwner,
      Ol = w.ReactCurrentBatchConfig,
      Cl = 0,
      Rl = null,
      Nl = null,
      Dl = 0,
      Il = 0,
      Pl = Si(0),
      Fl = 0,
      Al = null,
      Ml = 0,
      Ll = 0,
      ql = 0,
      zl = null,
      jl = null,
      Vl = 0,
      Ql = 1 / 0,
      $l = null,
      Ul = !1,
      Bl = null,
      Wl = null,
      Kl = !1,
      Hl = null,
      Gl = 0,
      Yl = 0,
      Jl = null,
      Xl = -1,
      Zl = 0
    function eu() {
      return 6 & Cl ? Je() : -1 !== Xl ? Xl : (Xl = Je())
    }
    function tu(e) {
      return 1 & e.mode
        ? 2 & Cl && 0 !== Dl
          ? Dl & -Dl
          : null !== ma.transition
            ? (0 === Zl && (Zl = mt()), Zl)
            : 0 !== (e = bt)
              ? e
              : (e = void 0 === (e = window.event) ? 16 : Yt(e.type))
        : 1
    }
    function nu(e, t, r, i) {
      if (50 < Yl) throw ((Yl = 0), (Jl = null), Error(n(185)))
      ;(yt(e, r, i),
        (2 & Cl && e === Rl) ||
          (e === Rl && (!(2 & Cl) && (Ll |= r), 4 === Fl && su(e, Dl)),
          ru(e, i),
          1 === r && 0 === Cl && !(1 & t.mode) && ((Ql = Je() + 500), zi && Qi())))
    }
    function ru(e, t) {
      var n = e.callbackNode
      !(function (e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
          var o = 31 - ot(a),
            s = 1 << o,
            l = i[o]
          ;(-1 === l ? (0 !== (s & n) && 0 === (s & r)) || (i[o] = pt(s, t)) : l <= t && (e.expiredLanes |= s),
            (a &= ~s))
        }
      })(e, t)
      var r = dt(e, e === Rl ? Dl : 0)
      if (0 === r) (null !== n && He(n), (e.callbackNode = null), (e.callbackPriority = 0))
      else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((null != n && He(n), 1 === t))
          (0 === e.tag
            ? (function (e) {
                ;((zi = !0), Vi(e))
              })(lu.bind(null, e))
            : Vi(lu.bind(null, e)),
            oi(function () {
              !(6 & Cl) && Qi()
            }),
            (n = null))
        else {
          switch (Et(r)) {
            case 1:
              n = Ze
              break
            case 4:
              n = et
              break
            case 16:
            default:
              n = tt
              break
            case 536870912:
              n = rt
          }
          n = Ru(n, iu.bind(null, e))
        }
        ;((e.callbackPriority = t), (e.callbackNode = n))
      }
    }
    function iu(e, t) {
      if (((Xl = -1), (Zl = 0), 6 & Cl)) throw Error(n(327))
      var r = e.callbackNode
      if (_u() && e.callbackNode !== r) return null
      var i = dt(e, e === Rl ? Dl : 0)
      if (0 === i) return null
      if (30 & i || 0 !== (i & e.expiredLanes) || t) t = vu(e, i)
      else {
        t = i
        var a = Cl
        Cl |= 2
        var o = hu()
        for ((Rl === e && Dl === t) || (($l = null), (Ql = Je() + 500), du(e, t)); ; )
          try {
            gu()
            break
          } catch (t) {
            pu(e, t)
          }
        ;(xa(), (Tl.current = o), (Cl = a), null !== Nl ? (t = 0) : ((Rl = null), (Dl = 0), (t = Fl)))
      }
      if (0 !== t) {
        if ((2 === t && 0 !== (a = ht(e)) && ((i = a), (t = au(e, a))), 1 === t))
          throw ((r = Al), du(e, 0), su(e, i), ru(e, Je()), r)
        if (6 === t) su(e, i)
        else {
          if (
            ((a = e.current.alternate),
            !(
              30 & i ||
              (function (e) {
                for (var t = e; ; ) {
                  if (16384 & t.flags) {
                    var n = t.updateQueue
                    if (null !== n && null !== (n = n.stores))
                      for (var r = 0; r < n.length; r++) {
                        var i = n[r],
                          a = i.getSnapshot
                        i = i.value
                        try {
                          if (!sr(a(), i)) return !1
                        } catch (e) {
                          return !1
                        }
                      }
                  }
                  if (((n = t.child), 16384 & t.subtreeFlags && null !== n)) ((n.return = t), (t = n))
                  else {
                    if (t === e) break
                    for (; null === t.sibling; ) {
                      if (null === t.return || t.return === e) return !0
                      t = t.return
                    }
                    ;((t.sibling.return = t.return), (t = t.sibling))
                  }
                }
                return !0
              })(a) ||
              ((t = vu(e, i)), 2 === t && ((o = ht(e)), 0 !== o && ((i = o), (t = au(e, o)))), 1 !== t)
            ))
          )
            throw ((r = Al), du(e, 0), su(e, i), ru(e, Je()), r)
          switch (((e.finishedWork = a), (e.finishedLanes = i), t)) {
            case 0:
            case 1:
              throw Error(n(345))
            case 2:
            case 5:
              wu(e, jl, $l)
              break
            case 3:
              if ((su(e, i), (130023424 & i) === i && 10 < (t = Vl + 500 - Je()))) {
                if (0 !== dt(e, 0)) break
                if (((a = e.suspendedLanes) & i) !== i) {
                  ;(eu(), (e.pingedLanes |= e.suspendedLanes & a))
                  break
                }
                e.timeoutHandle = ri(wu.bind(null, e, jl, $l), t)
                break
              }
              wu(e, jl, $l)
              break
            case 4:
              if ((su(e, i), (4194240 & i) === i)) break
              for (t = e.eventTimes, a = -1; 0 < i; ) {
                var s = 31 - ot(i)
                ;((o = 1 << s), (s = t[s]) > a && (a = s), (i &= ~o))
              }
              if (
                ((i = a),
                10 <
                  (i =
                    (120 > (i = Je() - i)
                      ? 120
                      : 480 > i
                        ? 480
                        : 1080 > i
                          ? 1080
                          : 1920 > i
                            ? 1920
                            : 3e3 > i
                              ? 3e3
                              : 4320 > i
                                ? 4320
                                : 1960 * Sl(i / 1960)) - i))
              ) {
                e.timeoutHandle = ri(wu.bind(null, e, jl, $l), i)
                break
              }
              wu(e, jl, $l)
              break
            default:
              throw Error(n(329))
          }
        }
      }
      return (ru(e, Je()), e.callbackNode === r ? iu.bind(null, e) : null)
    }
    function au(e, t) {
      var n = zl
      return (
        e.current.memoizedState.isDehydrated && (du(e, t).flags |= 256),
        2 !== (e = vu(e, t)) && ((t = jl), (jl = n), null !== t && ou(t)),
        e
      )
    }
    function ou(e) {
      null === jl ? (jl = e) : jl.push.apply(jl, e)
    }
    function su(e, t) {
      for (t &= ~ql, t &= ~Ll, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var n = 31 - ot(t),
          r = 1 << n
        ;((e[n] = -1), (t &= ~r))
      }
    }
    function lu(e) {
      if (6 & Cl) throw Error(n(327))
      _u()
      var t = dt(e, 0)
      if (!(1 & t)) return (ru(e, Je()), null)
      var r = vu(e, t)
      if (0 !== e.tag && 2 === r) {
        var i = ht(e)
        0 !== i && ((t = i), (r = au(e, i)))
      }
      if (1 === r) throw ((r = Al), du(e, 0), su(e, t), ru(e, Je()), r)
      if (6 === r) throw Error(n(345))
      return ((e.finishedWork = e.current.alternate), (e.finishedLanes = t), wu(e, jl, $l), ru(e, Je()), null)
    }
    function uu(e, t) {
      var n = Cl
      Cl |= 1
      try {
        return e(t)
      } finally {
        0 === (Cl = n) && ((Ql = Je() + 500), zi && Qi())
      }
    }
    function cu(e) {
      null !== Hl && 0 === Hl.tag && !(6 & Cl) && _u()
      var t = Cl
      Cl |= 1
      var n = Ol.transition,
        r = bt
      try {
        if (((Ol.transition = null), (bt = 1), e)) return e()
      } finally {
        ;((bt = r), (Ol.transition = n), !(6 & (Cl = t)) && Qi())
      }
    }
    function fu() {
      ;((Il = Pl.current), Ti(Pl))
    }
    function du(e, t) {
      ;((e.finishedWork = null), (e.finishedLanes = 0))
      var n = e.timeoutHandle
      if ((-1 !== n && ((e.timeoutHandle = -1), ii(n)), null !== Nl))
        for (n = Nl.return; null !== n; ) {
          var r = n
          switch ((ta(r), r.tag)) {
            case 1:
              null != (r = r.type.childContextTypes) && Pi()
              break
            case 3:
              ;(Ya(), Ti(Ri), Ti(Ci), no())
              break
            case 5:
              Xa(r)
              break
            case 4:
              Ya()
              break
            case 13:
            case 19:
              Ti(Za)
              break
            case 10:
              Oa(r.type._context)
              break
            case 22:
            case 23:
              fu()
          }
          n = n.return
        }
      if (
        ((Rl = e),
        (Nl = e = Pu(e.current, null)),
        (Dl = Il = t),
        (Fl = 0),
        (Al = null),
        (ql = Ll = Ml = 0),
        (jl = zl = null),
        null !== Da)
      ) {
        for (t = 0; t < Da.length; t++)
          if (null !== (r = (n = Da[t]).interleaved)) {
            n.interleaved = null
            var i = r.next,
              a = n.pending
            if (null !== a) {
              var o = a.next
              ;((a.next = i), (r.next = o))
            }
            n.pending = r
          }
        Da = null
      }
      return e
    }
    function pu(e, t) {
      for (;;) {
        var r = Nl
        try {
          if ((xa(), (ro.current = Xo), uo)) {
            for (var i = oo.memoizedState; null !== i; ) {
              var a = i.queue
              ;(null !== a && (a.pending = null), (i = i.next))
            }
            uo = !1
          }
          if (
            ((ao = 0), (lo = so = oo = null), (co = !1), (fo = 0), (xl.current = null), null === r || null === r.return)
          ) {
            ;((Fl = 1), (Al = t), (Nl = null))
            break
          }
          e: {
            var o = e,
              s = r.return,
              l = r,
              u = t
            if (((t = Dl), (l.flags |= 32768), null !== u && 'object' == typeof u && 'function' == typeof u.then)) {
              var c = u,
                f = l,
                d = f.tag
              if (!(1 & f.mode || (0 !== d && 11 !== d && 15 !== d))) {
                var p = f.alternate
                p
                  ? ((f.updateQueue = p.updateQueue), (f.memoizedState = p.memoizedState), (f.lanes = p.lanes))
                  : ((f.updateQueue = null), (f.memoizedState = null))
              }
              var h = vs(s)
              if (null !== h) {
                ;((h.flags &= -257), ys(h, s, l, 0, t), 1 & h.mode && ms(o, c, t), (u = c))
                var m = (t = h).updateQueue
                if (null === m) {
                  var v = new Set()
                  ;(v.add(u), (t.updateQueue = v))
                } else m.add(u)
                break e
              }
              if (!(1 & t)) {
                ;(ms(o, c, t), mu())
                break e
              }
              u = Error(n(426))
            } else if (ia && 1 & l.mode) {
              var y = vs(s)
              if (null !== y) {
                ;(!(65536 & y.flags) && (y.flags |= 256), ys(y, s, l, 0, t), ha(us(u, l)))
                break e
              }
            }
            ;((o = u = us(u, l)), 4 !== Fl && (Fl = 2), null === zl ? (zl = [o]) : zl.push(o), (o = s))
            do {
              switch (o.tag) {
                case 3:
                  ;((o.flags |= 65536), (t &= -t), (o.lanes |= t), Va(o, ps(0, u, t)))
                  break e
                case 1:
                  l = u
                  var g = o.type,
                    b = o.stateNode
                  if (
                    !(
                      128 & o.flags ||
                      ('function' != typeof g.getDerivedStateFromError &&
                        (null === b || 'function' != typeof b.componentDidCatch || (null !== Wl && Wl.has(b))))
                    )
                  ) {
                    ;((o.flags |= 65536), (t &= -t), (o.lanes |= t), Va(o, hs(o, l, t)))
                    break e
                  }
              }
              o = o.return
            } while (null !== o)
          }
          Eu(r)
        } catch (e) {
          ;((t = e), Nl === r && null !== r && (Nl = r = r.return))
          continue
        }
        break
      }
    }
    function hu() {
      var e = Tl.current
      return ((Tl.current = Xo), null === e ? Xo : e)
    }
    function mu() {
      ;((0 !== Fl && 3 !== Fl && 2 !== Fl) || (Fl = 4),
        null === Rl || (!(268435455 & Ml) && !(268435455 & Ll)) || su(Rl, Dl))
    }
    function vu(e, t) {
      var r = Cl
      Cl |= 2
      var i = hu()
      for ((Rl === e && Dl === t) || (($l = null), du(e, t)); ; )
        try {
          yu()
          break
        } catch (t) {
          pu(e, t)
        }
      if ((xa(), (Cl = r), (Tl.current = i), null !== Nl)) throw Error(n(261))
      return ((Rl = null), (Dl = 0), Fl)
    }
    function yu() {
      for (; null !== Nl; ) bu(Nl)
    }
    function gu() {
      for (; null !== Nl && !Ge(); ) bu(Nl)
    }
    function bu(e) {
      var t = kl(e.alternate, e, Il)
      ;((e.memoizedProps = e.pendingProps), null === t ? Eu(e) : (Nl = t), (xl.current = null))
    }
    function Eu(e) {
      var t = e
      do {
        var n = t.alternate
        if (((e = t.return), 32768 & t.flags)) {
          if (null !== (n = Hs(n, t))) return ((n.flags &= 32767), void (Nl = n))
          if (null === e) return ((Fl = 6), void (Nl = null))
          ;((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null))
        } else if (null !== (n = Ks(n, t, Il))) return void (Nl = n)
        if (null !== (t = t.sibling)) return void (Nl = t)
        Nl = t = e
      } while (null !== t)
      0 === Fl && (Fl = 5)
    }
    function wu(e, t, r) {
      var i = bt,
        a = Ol.transition
      try {
        ;((Ol.transition = null),
          (bt = 1),
          (function (e, t, r, i) {
            do {
              _u()
            } while (null !== Hl)
            if (6 & Cl) throw Error(n(327))
            r = e.finishedWork
            var a = e.finishedLanes
            if (null === r) return null
            if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current)) throw Error(n(177))
            ;((e.callbackNode = null), (e.callbackPriority = 0))
            var o = r.lanes | r.childLanes
            if (
              ((function (e, t) {
                var n = e.pendingLanes & ~t
                ;((e.pendingLanes = t),
                  (e.suspendedLanes = 0),
                  (e.pingedLanes = 0),
                  (e.expiredLanes &= t),
                  (e.mutableReadLanes &= t),
                  (e.entangledLanes &= t),
                  (t = e.entanglements))
                var r = e.eventTimes
                for (e = e.expirationTimes; 0 < n; ) {
                  var i = 31 - ot(n),
                    a = 1 << i
                  ;((t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~a))
                }
              })(e, o),
              e === Rl && ((Nl = Rl = null), (Dl = 0)),
              (!(2064 & r.subtreeFlags) && !(2064 & r.flags)) ||
                Kl ||
                ((Kl = !0),
                Ru(tt, function () {
                  return (_u(), null)
                })),
              (o = !!(15990 & r.flags)),
              !!(15990 & r.subtreeFlags) || o)
            ) {
              ;((o = Ol.transition), (Ol.transition = null))
              var s = bt
              bt = 1
              var l = Cl
              ;((Cl |= 4),
                (xl.current = null),
                (function (e, t) {
                  if (((ei = Ut), pr((e = dr())))) {
                    if ('selectionStart' in e) var r = { start: e.selectionStart, end: e.selectionEnd }
                    else
                      e: {
                        var i =
                          (r = ((r = e.ownerDocument) && r.defaultView) || window).getSelection && r.getSelection()
                        if (i && 0 !== i.rangeCount) {
                          r = i.anchorNode
                          var a = i.anchorOffset,
                            o = i.focusNode
                          i = i.focusOffset
                          try {
                            ;(r.nodeType, o.nodeType)
                          } catch (e) {
                            r = null
                            break e
                          }
                          var s = 0,
                            l = -1,
                            u = -1,
                            c = 0,
                            f = 0,
                            d = e,
                            p = null
                          t: for (;;) {
                            for (
                              var h;
                              d !== r || (0 !== a && 3 !== d.nodeType) || (l = s + a),
                                d !== o || (0 !== i && 3 !== d.nodeType) || (u = s + i),
                                3 === d.nodeType && (s += d.nodeValue.length),
                                null !== (h = d.firstChild);
                            )
                              ((p = d), (d = h))
                            for (;;) {
                              if (d === e) break t
                              if (
                                (p === r && ++c === a && (l = s),
                                p === o && ++f === i && (u = s),
                                null !== (h = d.nextSibling))
                              )
                                break
                              p = (d = p).parentNode
                            }
                            d = h
                          }
                          r = -1 === l || -1 === u ? null : { start: l, end: u }
                        } else r = null
                      }
                    r = r || { start: 0, end: 0 }
                  } else r = null
                  for (ti = { focusedElem: e, selectionRange: r }, Ut = !1, Xs = t; null !== Xs; )
                    if (((e = (t = Xs).child), 1028 & t.subtreeFlags && null !== e)) ((e.return = t), (Xs = e))
                    else
                      for (; null !== Xs; ) {
                        t = Xs
                        try {
                          var m = t.alternate
                          if (1024 & t.flags)
                            switch (t.tag) {
                              case 0:
                              case 11:
                              case 15:
                              case 5:
                              case 6:
                              case 4:
                              case 17:
                                break
                              case 1:
                                if (null !== m) {
                                  var v = m.memoizedProps,
                                    y = m.memoizedState,
                                    g = t.stateNode,
                                    b = g.getSnapshotBeforeUpdate(t.elementType === t.type ? v : ns(t.type, v), y)
                                  g.__reactInternalSnapshotBeforeUpdate = b
                                }
                                break
                              case 3:
                                var E = t.stateNode.containerInfo
                                1 === E.nodeType
                                  ? (E.textContent = '')
                                  : 9 === E.nodeType && E.documentElement && E.removeChild(E.documentElement)
                                break
                              default:
                                throw Error(n(163))
                            }
                        } catch (e) {
                          Su(t, t.return, e)
                        }
                        if (null !== (e = t.sibling)) {
                          ;((e.return = t.return), (Xs = e))
                          break
                        }
                        Xs = t.return
                      }
                  ;((m = tl), (tl = !1))
                })(e, r),
                vl(r, e),
                hr(ti),
                (Ut = !!ei),
                (ti = ei = null),
                (e.current = r),
                gl(r),
                Ye(),
                (Cl = l),
                (bt = s),
                (Ol.transition = o))
            } else e.current = r
            if (
              (Kl && ((Kl = !1), (Hl = e), (Gl = a)),
              (o = e.pendingLanes),
              0 === o && (Wl = null),
              (function (e) {
                if (at && 'function' == typeof at.onCommitFiberRoot)
                  try {
                    at.onCommitFiberRoot(it, e, void 0, !(128 & ~e.current.flags))
                  } catch (e) {}
              })(r.stateNode),
              ru(e, Je()),
              null !== t)
            )
              for (i = e.onRecoverableError, r = 0; r < t.length; r++)
                ((a = t[r]), i(a.value, { componentStack: a.stack, digest: a.digest }))
            if (Ul) throw ((Ul = !1), (e = Bl), (Bl = null), e)
            ;(!!(1 & Gl) && 0 !== e.tag && _u(),
              (o = e.pendingLanes),
              1 & o ? (e === Jl ? Yl++ : ((Yl = 0), (Jl = e))) : (Yl = 0),
              Qi())
          })(e, t, r, i))
      } finally {
        ;((Ol.transition = a), (bt = i))
      }
      return null
    }
    function _u() {
      if (null !== Hl) {
        var e = Et(Gl),
          t = Ol.transition,
          r = bt
        try {
          if (((Ol.transition = null), (bt = 16 > e ? 16 : e), null === Hl)) var i = !1
          else {
            if (((e = Hl), (Hl = null), (Gl = 0), 6 & Cl)) throw Error(n(331))
            var a = Cl
            for (Cl |= 4, Xs = e.current; null !== Xs; ) {
              var o = Xs,
                s = o.child
              if (16 & Xs.flags) {
                var l = o.deletions
                if (null !== l) {
                  for (var u = 0; u < l.length; u++) {
                    var c = l[u]
                    for (Xs = c; null !== Xs; ) {
                      var f = Xs
                      switch (f.tag) {
                        case 0:
                        case 11:
                        case 15:
                          nl(8, f, o)
                      }
                      var d = f.child
                      if (null !== d) ((d.return = f), (Xs = d))
                      else
                        for (; null !== Xs; ) {
                          var p = (f = Xs).sibling,
                            h = f.return
                          if ((al(f), f === c)) {
                            Xs = null
                            break
                          }
                          if (null !== p) {
                            ;((p.return = h), (Xs = p))
                            break
                          }
                          Xs = h
                        }
                    }
                  }
                  var m = o.alternate
                  if (null !== m) {
                    var v = m.child
                    if (null !== v) {
                      m.child = null
                      do {
                        var y = v.sibling
                        ;((v.sibling = null), (v = y))
                      } while (null !== v)
                    }
                  }
                  Xs = o
                }
              }
              if (2064 & o.subtreeFlags && null !== s) ((s.return = o), (Xs = s))
              else
                e: for (; null !== Xs; ) {
                  if (2048 & (o = Xs).flags)
                    switch (o.tag) {
                      case 0:
                      case 11:
                      case 15:
                        nl(9, o, o.return)
                    }
                  var g = o.sibling
                  if (null !== g) {
                    ;((g.return = o.return), (Xs = g))
                    break e
                  }
                  Xs = o.return
                }
            }
            var b = e.current
            for (Xs = b; null !== Xs; ) {
              var E = (s = Xs).child
              if (2064 & s.subtreeFlags && null !== E) ((E.return = s), (Xs = E))
              else
                e: for (s = b; null !== Xs; ) {
                  if (2048 & (l = Xs).flags)
                    try {
                      switch (l.tag) {
                        case 0:
                        case 11:
                        case 15:
                          rl(9, l)
                      }
                    } catch (e) {
                      Su(l, l.return, e)
                    }
                  if (l === s) {
                    Xs = null
                    break e
                  }
                  var w = l.sibling
                  if (null !== w) {
                    ;((w.return = l.return), (Xs = w))
                    break e
                  }
                  Xs = l.return
                }
            }
            if (((Cl = a), Qi(), at && 'function' == typeof at.onPostCommitFiberRoot))
              try {
                at.onPostCommitFiberRoot(it, e)
              } catch (e) {}
            i = !0
          }
          return i
        } finally {
          ;((bt = r), (Ol.transition = t))
        }
      }
      return !1
    }
    function ku(e, t, n) {
      ;((e = za(e, (t = ps(0, (t = us(n, t)), 1)), 1)), (t = eu()), null !== e && (yt(e, 1, t), ru(e, t)))
    }
    function Su(e, t, n) {
      if (3 === e.tag) ku(e, e, n)
      else
        for (; null !== t; ) {
          if (3 === t.tag) {
            ku(t, e, n)
            break
          }
          if (1 === t.tag) {
            var r = t.stateNode
            if (
              'function' == typeof t.type.getDerivedStateFromError ||
              ('function' == typeof r.componentDidCatch && (null === Wl || !Wl.has(r)))
            ) {
              ;((t = za(t, (e = hs(t, (e = us(n, e)), 1)), 1)), (e = eu()), null !== t && (yt(t, 1, e), ru(t, e)))
              break
            }
          }
          t = t.return
        }
    }
    function Tu(e, t, n) {
      var r = e.pingCache
      ;(null !== r && r.delete(t),
        (t = eu()),
        (e.pingedLanes |= e.suspendedLanes & n),
        Rl === e &&
          (Dl & n) === n &&
          (4 === Fl || (3 === Fl && (130023424 & Dl) === Dl && 500 > Je() - Vl) ? du(e, 0) : (ql |= n)),
        ru(e, t))
    }
    function xu(e, t) {
      0 === t && (1 & e.mode ? ((t = ct), !(130023424 & (ct <<= 1)) && (ct = 4194304)) : (t = 1))
      var n = eu()
      null !== (e = Fa(e, t)) && (yt(e, t, n), ru(e, n))
    }
    function Ou(e) {
      var t = e.memoizedState,
        n = 0
      ;(null !== t && (n = t.retryLane), xu(e, n))
    }
    function Cu(e, t) {
      var r = 0
      switch (e.tag) {
        case 13:
          var i = e.stateNode,
            a = e.memoizedState
          null !== a && (r = a.retryLane)
          break
        case 19:
          i = e.stateNode
          break
        default:
          throw Error(n(314))
      }
      ;(null !== i && i.delete(t), xu(e, r))
    }
    function Ru(e, t) {
      return Ke(e, t)
    }
    function Nu(e, t, n, r) {
      ;((this.tag = e),
        (this.key = n),
        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null))
    }
    function Du(e, t, n, r) {
      return new Nu(e, t, n, r)
    }
    function Iu(e) {
      return !(!(e = e.prototype) || !e.isReactComponent)
    }
    function Pu(e, t) {
      var n = e.alternate
      return (
        null === n
          ? (((n = Du(e.tag, t, e.key, e.mode)).elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
        (n.flags = 14680064 & e.flags),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
      )
    }
    function Fu(e, t, r, i, a, o) {
      var s = 2
      if (((i = e), 'function' == typeof e)) Iu(e) && (s = 1)
      else if ('string' == typeof e) s = 5
      else
        e: switch (e) {
          case S:
            return Au(r.children, a, o, t)
          case T:
            ;((s = 8), (a |= 8))
            break
          case x:
            return (((e = Du(12, r, t, 2 | a)).elementType = x), (e.lanes = o), e)
          case N:
            return (((e = Du(13, r, t, a)).elementType = N), (e.lanes = o), e)
          case D:
            return (((e = Du(19, r, t, a)).elementType = D), (e.lanes = o), e)
          case F:
            return Mu(r, a, o, t)
          default:
            if ('object' == typeof e && null !== e)
              switch (e.$$typeof) {
                case O:
                  s = 10
                  break e
                case C:
                  s = 9
                  break e
                case R:
                  s = 11
                  break e
                case I:
                  s = 14
                  break e
                case P:
                  ;((s = 16), (i = null))
                  break e
              }
            throw Error(n(130, null == e ? e : typeof e, ''))
        }
      return (((t = Du(s, r, t, a)).elementType = e), (t.type = i), (t.lanes = o), t)
    }
    function Au(e, t, n, r) {
      return (((e = Du(7, e, r, t)).lanes = n), e)
    }
    function Mu(e, t, n, r) {
      return (((e = Du(22, e, r, t)).elementType = F), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e)
    }
    function Lu(e, t, n) {
      return (((e = Du(6, e, null, t)).lanes = n), e)
    }
    function qu(e, t, n) {
      return (
        ((t = Du(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
        (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
        t
      )
    }
    function zu(e, t, n, r, i) {
      ;((this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = vt(0)),
        (this.expirationTimes = vt(-1)),
        (this.entangledLanes =
          this.finishedLanes =
          this.mutableReadLanes =
          this.expiredLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = vt(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = i),
        (this.mutableSourceEagerHydrationData = null))
    }
    function ju(e, t, n, r, i, a, o, s, l) {
      return (
        (e = new zu(e, t, n, s, l)),
        1 === t ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
        (a = Du(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (a.memoizedState = {
          element: r,
          isDehydrated: n,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null,
        }),
        Ma(a),
        e
      )
    }
    function Vu(e) {
      if (!e) return Oi
      e: {
        if (Qe((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(n(170))
        var t = e
        do {
          switch (t.tag) {
            case 3:
              t = t.stateNode.context
              break e
            case 1:
              if (Ii(t.type)) {
                t = t.stateNode.__reactInternalMemoizedMergedChildContext
                break e
              }
          }
          t = t.return
        } while (null !== t)
        throw Error(n(171))
      }
      if (1 === e.tag) {
        var r = e.type
        if (Ii(r)) return Ai(e, r, t)
      }
      return t
    }
    function Qu(e, t, n, r, i, a, o, s, l) {
      return (
        ((e = ju(n, r, !0, e, 0, a, 0, s, l)).context = Vu(null)),
        (n = e.current),
        ((a = qa((r = eu()), (i = tu(n)))).callback = null != t ? t : null),
        za(n, a, i),
        (e.current.lanes = i),
        yt(e, i, r),
        ru(e, r),
        e
      )
    }
    function $u(e, t, n, r) {
      var i = t.current,
        a = eu(),
        o = tu(i)
      return (
        (n = Vu(n)),
        null === t.context ? (t.context = n) : (t.pendingContext = n),
        ((t = qa(a, o)).payload = { element: e }),
        null !== (r = void 0 === r ? null : r) && (t.callback = r),
        null !== (e = za(i, t, o)) && (nu(e, i, o, a), ja(e, i, o)),
        o
      )
    }
    function Uu(e) {
      return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
    }
    function Bu(e, t) {
      if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
        var n = e.retryLane
        e.retryLane = 0 !== n && n < t ? n : t
      }
    }
    function Wu(e, t) {
      ;(Bu(e, t), (e = e.alternate) && Bu(e, t))
    }
    kl = function (e, t, r) {
      if (null !== e)
        if (e.memoizedProps !== t.pendingProps || Ri.current) bs = !0
        else {
          if (0 === (e.lanes & r) && !(128 & t.flags))
            return (
              (bs = !1),
              (function (e, t, n) {
                switch (t.tag) {
                  case 3:
                    ;(Rs(t), pa())
                    break
                  case 5:
                    Ja(t)
                    break
                  case 1:
                    Ii(t.type) && Mi(t)
                    break
                  case 4:
                    Ga(t, t.stateNode.containerInfo)
                    break
                  case 10:
                    var r = t.type._context,
                      i = t.memoizedProps.value
                    ;(xi(_a, r._currentValue), (r._currentValue = i))
                    break
                  case 13:
                    if (null !== (r = t.memoizedState))
                      return null !== r.dehydrated
                        ? (xi(Za, 1 & Za.current), (t.flags |= 128), null)
                        : 0 !== (n & t.child.childLanes)
                          ? Ls(e, t, n)
                          : (xi(Za, 1 & Za.current), null !== (e = Us(e, t, n)) ? e.sibling : null)
                    xi(Za, 1 & Za.current)
                    break
                  case 19:
                    if (((r = 0 !== (n & t.childLanes)), 128 & e.flags)) {
                      if (r) return Qs(e, t, n)
                      t.flags |= 128
                    }
                    if (
                      (null !== (i = t.memoizedState) && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
                      xi(Za, Za.current),
                      r)
                    )
                      break
                    return null
                  case 22:
                  case 23:
                    return ((t.lanes = 0), Ss(e, t, n))
                }
                return Us(e, t, n)
              })(e, t, r)
            )
          bs = !!(131072 & e.flags)
        }
      else ((bs = !1), ia && 1048576 & t.flags && Zi(t, Wi, t.index))
      switch (((t.lanes = 0), t.tag)) {
        case 2:
          var i = t.type
          ;($s(e, t), (e = t.pendingProps))
          var a = Di(t, Ci.current)
          ;(Ra(t, r), (a = vo(null, t, i, e, a, r)))
          var o = yo()
          return (
            (t.flags |= 1),
            'object' == typeof a && null !== a && 'function' == typeof a.render && void 0 === a.$$typeof
              ? ((t.tag = 1),
                (t.memoizedState = null),
                (t.updateQueue = null),
                Ii(i) ? ((o = !0), Mi(t)) : (o = !1),
                (t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null),
                Ma(t),
                (a.updater = is),
                (t.stateNode = a),
                (a._reactInternals = t),
                ls(t, i, e, r),
                (t = Cs(null, t, i, !0, o, r)))
              : ((t.tag = 0), ia && o && ea(t), Es(null, t, a, r), (t = t.child)),
            t
          )
        case 16:
          i = t.elementType
          e: {
            switch (
              ($s(e, t),
              (e = t.pendingProps),
              (i = (a = i._init)(i._payload)),
              (t.type = i),
              (a = t.tag =
                (function (e) {
                  if ('function' == typeof e) return Iu(e) ? 1 : 0
                  if (null != e) {
                    if ((e = e.$$typeof) === R) return 11
                    if (e === I) return 14
                  }
                  return 2
                })(i)),
              (e = ns(i, e)),
              a)
            ) {
              case 0:
                t = xs(null, t, i, e, r)
                break e
              case 1:
                t = Os(null, t, i, e, r)
                break e
              case 11:
                t = ws(null, t, i, e, r)
                break e
              case 14:
                t = _s(null, t, i, ns(i.type, e), r)
                break e
            }
            throw Error(n(306, i, ''))
          }
          return t
        case 0:
          return ((i = t.type), (a = t.pendingProps), xs(e, t, i, (a = t.elementType === i ? a : ns(i, a)), r))
        case 1:
          return ((i = t.type), (a = t.pendingProps), Os(e, t, i, (a = t.elementType === i ? a : ns(i, a)), r))
        case 3:
          e: {
            if ((Rs(t), null === e)) throw Error(n(387))
            ;((i = t.pendingProps), (a = (o = t.memoizedState).element), La(e, t), Qa(t, i, null, r))
            var s = t.memoizedState
            if (((i = s.element), o.isDehydrated)) {
              if (
                ((o = {
                  element: i,
                  isDehydrated: !1,
                  cache: s.cache,
                  pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                  transitions: s.transitions,
                }),
                (t.updateQueue.baseState = o),
                (t.memoizedState = o),
                256 & t.flags)
              ) {
                t = Ns(e, t, i, r, (a = us(Error(n(423)), t)))
                break e
              }
              if (i !== a) {
                t = Ns(e, t, i, r, (a = us(Error(n(424)), t)))
                break e
              }
              for (
                ra = ui(t.stateNode.containerInfo.firstChild),
                  na = t,
                  ia = !0,
                  aa = null,
                  r = wa(t, null, i, r),
                  t.child = r;
                r;
              )
                ((r.flags = (-3 & r.flags) | 4096), (r = r.sibling))
            } else {
              if ((pa(), i === a)) {
                t = Us(e, t, r)
                break e
              }
              Es(e, t, i, r)
            }
            t = t.child
          }
          return t
        case 5:
          return (
            Ja(t),
            null === e && ua(t),
            (i = t.type),
            (a = t.pendingProps),
            (o = null !== e ? e.memoizedProps : null),
            (s = a.children),
            ni(i, a) ? (s = null) : null !== o && ni(i, o) && (t.flags |= 32),
            Ts(e, t),
            Es(e, t, s, r),
            t.child
          )
        case 6:
          return (null === e && ua(t), null)
        case 13:
          return Ls(e, t, r)
        case 4:
          return (
            Ga(t, t.stateNode.containerInfo),
            (i = t.pendingProps),
            null === e ? (t.child = Ea(t, null, i, r)) : Es(e, t, i, r),
            t.child
          )
        case 11:
          return ((i = t.type), (a = t.pendingProps), ws(e, t, i, (a = t.elementType === i ? a : ns(i, a)), r))
        case 7:
          return (Es(e, t, t.pendingProps, r), t.child)
        case 8:
        case 12:
          return (Es(e, t, t.pendingProps.children, r), t.child)
        case 10:
          e: {
            if (
              ((i = t.type._context),
              (a = t.pendingProps),
              (o = t.memoizedProps),
              (s = a.value),
              xi(_a, i._currentValue),
              (i._currentValue = s),
              null !== o)
            )
              if (sr(o.value, s)) {
                if (o.children === a.children && !Ri.current) {
                  t = Us(e, t, r)
                  break e
                }
              } else
                for (null !== (o = t.child) && (o.return = t); null !== o; ) {
                  var l = o.dependencies
                  if (null !== l) {
                    s = o.child
                    for (var u = l.firstContext; null !== u; ) {
                      if (u.context === i) {
                        if (1 === o.tag) {
                          ;(u = qa(-1, r & -r)).tag = 2
                          var c = o.updateQueue
                          if (null !== c) {
                            var f = (c = c.shared).pending
                            ;(null === f ? (u.next = u) : ((u.next = f.next), (f.next = u)), (c.pending = u))
                          }
                        }
                        ;((o.lanes |= r),
                          null !== (u = o.alternate) && (u.lanes |= r),
                          Ca(o.return, r, t),
                          (l.lanes |= r))
                        break
                      }
                      u = u.next
                    }
                  } else if (10 === o.tag) s = o.type === t.type ? null : o.child
                  else if (18 === o.tag) {
                    if (null === (s = o.return)) throw Error(n(341))
                    ;((s.lanes |= r), null !== (l = s.alternate) && (l.lanes |= r), Ca(s, r, t), (s = o.sibling))
                  } else s = o.child
                  if (null !== s) s.return = o
                  else
                    for (s = o; null !== s; ) {
                      if (s === t) {
                        s = null
                        break
                      }
                      if (null !== (o = s.sibling)) {
                        ;((o.return = s.return), (s = o))
                        break
                      }
                      s = s.return
                    }
                  o = s
                }
            ;(Es(e, t, a.children, r), (t = t.child))
          }
          return t
        case 9:
          return (
            (a = t.type),
            (i = t.pendingProps.children),
            Ra(t, r),
            (i = i((a = Na(a)))),
            (t.flags |= 1),
            Es(e, t, i, r),
            t.child
          )
        case 14:
          return ((a = ns((i = t.type), t.pendingProps)), _s(e, t, i, (a = ns(i.type, a)), r))
        case 15:
          return ks(e, t, t.type, t.pendingProps, r)
        case 17:
          return (
            (i = t.type),
            (a = t.pendingProps),
            (a = t.elementType === i ? a : ns(i, a)),
            $s(e, t),
            (t.tag = 1),
            Ii(i) ? ((e = !0), Mi(t)) : (e = !1),
            Ra(t, r),
            os(t, i, a),
            ls(t, i, a, r),
            Cs(null, t, i, !0, e, r)
          )
        case 19:
          return Qs(e, t, r)
        case 22:
          return Ss(e, t, r)
      }
      throw Error(n(156, t.tag))
    }
    var Ku =
      'function' == typeof reportError
        ? reportError
        : function (e) {
            console.error(e)
          }
    function Hu(e) {
      this._internalRoot = e
    }
    function Gu(e) {
      this._internalRoot = e
    }
    function Yu(e) {
      return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType))
    }
    function Ju(e) {
      return !(
        !e ||
        (1 !== e.nodeType &&
          9 !== e.nodeType &&
          11 !== e.nodeType &&
          (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
      )
    }
    function Xu() {}
    function Zu(e, t, n, r, i) {
      var a = n._reactRootContainer
      if (a) {
        var o = a
        if ('function' == typeof i) {
          var s = i
          i = function () {
            var e = Uu(o)
            s.call(e)
          }
        }
        $u(t, o, e, i)
      } else
        o = (function (e, t, n, r, i) {
          if (i) {
            if ('function' == typeof r) {
              var a = r
              r = function () {
                var e = Uu(o)
                a.call(e)
              }
            }
            var o = Qu(t, r, e, 0, null, !1, 0, '', Xu)
            return ((e._reactRootContainer = o), (e[hi] = o.current), Qr(8 === e.nodeType ? e.parentNode : e), cu(), o)
          }
          for (; (i = e.lastChild); ) e.removeChild(i)
          if ('function' == typeof r) {
            var s = r
            r = function () {
              var e = Uu(l)
              s.call(e)
            }
          }
          var l = ju(e, 0, !1, null, 0, !1, 0, '', Xu)
          return (
            (e._reactRootContainer = l),
            (e[hi] = l.current),
            Qr(8 === e.nodeType ? e.parentNode : e),
            cu(function () {
              $u(t, l, n, r)
            }),
            l
          )
        })(n, t, e, i, r)
      return Uu(o)
    }
    ;((Gu.prototype.render = Hu.prototype.render =
      function (e) {
        var t = this._internalRoot
        if (null === t) throw Error(n(409))
        $u(e, t, null, null)
      }),
      (Gu.prototype.unmount = Hu.prototype.unmount =
        function () {
          var e = this._internalRoot
          if (null !== e) {
            this._internalRoot = null
            var t = e.containerInfo
            ;(cu(function () {
              $u(null, e, null, null)
            }),
              (t[hi] = null))
          }
        }),
      (Gu.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
          var t = St()
          e = { blockedOn: null, target: e, priority: t }
          for (var n = 0; n < Pt.length && 0 !== t && t < Pt[n].priority; n++);
          ;(Pt.splice(n, 0, e), 0 === n && Lt(e))
        }
      }),
      (wt = function (e) {
        switch (e.tag) {
          case 3:
            var t = e.stateNode
            if (t.current.memoizedState.isDehydrated) {
              var n = ft(t.pendingLanes)
              0 !== n && (gt(t, 1 | n), ru(t, Je()), !(6 & Cl) && ((Ql = Je() + 500), Qi()))
            }
            break
          case 13:
            ;(cu(function () {
              var t = Fa(e, 1)
              if (null !== t) {
                var n = eu()
                nu(t, e, 1, n)
              }
            }),
              Wu(e, 1))
        }
      }),
      (_t = function (e) {
        if (13 === e.tag) {
          var t = Fa(e, 134217728)
          if (null !== t) nu(t, e, 134217728, eu())
          Wu(e, 134217728)
        }
      }),
      (kt = function (e) {
        if (13 === e.tag) {
          var t = tu(e),
            n = Fa(e, t)
          if (null !== n) nu(n, e, t, eu())
          Wu(e, t)
        }
      }),
      (St = function () {
        return bt
      }),
      (Tt = function (e, t) {
        var n = bt
        try {
          return ((bt = e), t())
        } finally {
          bt = n
        }
      }),
      (_e = function (e, t, r) {
        switch (t) {
          case 'input':
            if ((Z(e, r), (t = r.name), 'radio' === r.type && null != t)) {
              for (r = e; r.parentNode; ) r = r.parentNode
              for (
                r = r.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
                t < r.length;
                t++
              ) {
                var i = r[t]
                if (i !== e && i.form === e.form) {
                  var a = wi(i)
                  if (!a) throw Error(n(90))
                  ;(H(i), Z(i, a))
                }
              }
            }
            break
          case 'textarea':
            oe(e, r)
            break
          case 'select':
            null != (t = r.value) && re(e, !!r.multiple, t, !1)
        }
      }),
      (Ce = uu),
      (Re = cu))
    var ec = { usingClientEntryPoint: !1, Events: [bi, Ei, wi, xe, Oe, uu] },
      tc = { findFiberByHostInstance: gi, bundleType: 0, version: '18.3.1', rendererPackageName: 'react-dom' },
      nc = {
        bundleType: tc.bundleType,
        version: tc.version,
        rendererPackageName: tc.rendererPackageName,
        rendererConfig: tc.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: w.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
          return null === (e = Be(e)) ? null : e.stateNode
        },
        findFiberByHostInstance:
          tc.findFiberByHostInstance ||
          function () {
            return null
          },
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
      }
    if ('undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
      var rc = __REACT_DEVTOOLS_GLOBAL_HOOK__
      if (!rc.isDisabled && rc.supportsFiber)
        try {
          ;((it = rc.inject(nc)), (at = rc))
        } catch (e) {}
    }
    return (
      (y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ec),
      (y.createPortal = function (e, t) {
        var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null
        if (!Yu(t)) throw Error(n(200))
        return (function (e, t, n) {
          var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null
          return { $$typeof: k, key: null == r ? null : '' + r, children: e, containerInfo: t, implementation: n }
        })(e, t, null, r)
      }),
      (y.createRoot = function (e, t) {
        if (!Yu(e)) throw Error(n(299))
        var r = !1,
          i = '',
          a = Ku
        return (
          null != t &&
            (!0 === t.unstable_strictMode && (r = !0),
            void 0 !== t.identifierPrefix && (i = t.identifierPrefix),
            void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
          (t = ju(e, 1, !1, null, 0, r, 0, i, a)),
          (e[hi] = t.current),
          Qr(8 === e.nodeType ? e.parentNode : e),
          new Hu(t)
        )
      }),
      (y.findDOMNode = function (e) {
        if (null == e) return null
        if (1 === e.nodeType) return e
        var t = e._reactInternals
        if (void 0 === t) {
          if ('function' == typeof e.render) throw Error(n(188))
          throw ((e = Object.keys(e).join(',')), Error(n(268, e)))
        }
        return (e = null === (e = Be(t)) ? null : e.stateNode)
      }),
      (y.flushSync = function (e) {
        return cu(e)
      }),
      (y.hydrate = function (e, t, r) {
        if (!Ju(t)) throw Error(n(200))
        return Zu(null, e, t, !0, r)
      }),
      (y.hydrateRoot = function (e, t, r) {
        if (!Yu(e)) throw Error(n(405))
        var i = (null != r && r.hydratedSources) || null,
          a = !1,
          o = '',
          s = Ku
        if (
          (null != r &&
            (!0 === r.unstable_strictMode && (a = !0),
            void 0 !== r.identifierPrefix && (o = r.identifierPrefix),
            void 0 !== r.onRecoverableError && (s = r.onRecoverableError)),
          (t = Qu(t, null, e, 1, null != r ? r : null, a, 0, o, s)),
          (e[hi] = t.current),
          Qr(e),
          i)
        )
          for (e = 0; e < i.length; e++)
            ((a = (a = (r = i[e])._getVersion)(r._source)),
              null == t.mutableSourceEagerHydrationData
                ? (t.mutableSourceEagerHydrationData = [r, a])
                : t.mutableSourceEagerHydrationData.push(r, a))
        return new Gu(t)
      }),
      (y.render = function (e, t, r) {
        if (!Ju(t)) throw Error(n(200))
        return Zu(null, e, t, !1, r)
      }),
      (y.unmountComponentAtNode = function (e) {
        if (!Ju(e)) throw Error(n(40))
        return (
          !!e._reactRootContainer &&
          (cu(function () {
            Zu(null, null, e, !1, function () {
              ;((e._reactRootContainer = null), (e[hi] = null))
            })
          }),
          !0)
        )
      }),
      (y.unstable_batchedUpdates = uu),
      (y.unstable_renderSubtreeIntoContainer = function (e, t, r, i) {
        if (!Ju(r)) throw Error(n(200))
        if (null == e || void 0 === e._reactInternals) throw Error(n(38))
        return Zu(e, t, r, !1, i)
      }),
      (y.version = '18.3.1-next-f1338f8080-20240426'),
      y
    )
  }
  function _() {
    if (d) return v.exports
    return (
      (d = 1),
      (function e() {
        if (
          'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
          'function' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
        )
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
          } catch (e) {
            console.error(e)
          }
      })(),
      (v.exports = w()),
      v.exports
    )
  }
  var k = (function () {
      if (p) return m
      p = 1
      var e = _()
      return ((m.createRoot = e.createRoot), (m.hydrateRoot = e.hydrateRoot), m)
    })(),
    S = function (e, t) {
      return (
        (S =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t
            }) ||
          function (e, t) {
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
          }),
        S(e, t)
      )
    }
  function T(e, t) {
    if ('function' != typeof t && null !== t)
      throw new TypeError('Class extends value ' + String(t) + ' is not a constructor or null')
    function n() {
      this.constructor = e
    }
    ;(S(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n())))
  }
  var x = function () {
    return (
      (x =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
          return e
        }),
      x.apply(this, arguments)
    )
  }
  function O(e, t) {
    var n = {}
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r])
    if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
      var i = 0
      for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
    }
    return n
  }
  function C(e, t, n, r) {
    return new (n || (n = Promise))(function (i, a) {
      function o(e) {
        try {
          l(r.next(e))
        } catch (e) {
          a(e)
        }
      }
      function s(e) {
        try {
          l(r.throw(e))
        } catch (e) {
          a(e)
        }
      }
      function l(e) {
        var t
        e.done
          ? i(e.value)
          : ((t = e.value),
            t instanceof n
              ? t
              : new n(function (e) {
                  e(t)
                })).then(o, s)
      }
      l((r = r.apply(e, t || [])).next())
    })
  }
  function R(e, t) {
    var n,
      r,
      i,
      a = {
        label: 0,
        sent: function () {
          if (1 & i[0]) throw i[1]
          return i[1]
        },
        trys: [],
        ops: [],
      },
      o = Object.create(('function' == typeof Iterator ? Iterator : Object).prototype)
    return (
      (o.next = s(0)),
      (o.throw = s(1)),
      (o.return = s(2)),
      'function' == typeof Symbol &&
        (o[Symbol.iterator] = function () {
          return this
        }),
      o
    )
    function s(s) {
      return function (l) {
        return (function (s) {
          if (n) throw new TypeError('Generator is already executing.')
          for (; o && ((o = 0), s[0] && (a = 0)), a; )
            try {
              if (
                ((n = 1),
                r &&
                  (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) &&
                  !(i = i.call(r, s[1])).done)
              )
                return i
              switch (((r = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                case 0:
                case 1:
                  i = s
                  break
                case 4:
                  return (a.label++, { value: s[1], done: !1 })
                case 5:
                  ;(a.label++, (r = s[1]), (s = [0]))
                  continue
                case 7:
                  ;((s = a.ops.pop()), a.trys.pop())
                  continue
                default:
                  if (!((i = a.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== s[0] && 2 !== s[0]))) {
                    a = 0
                    continue
                  }
                  if (3 === s[0] && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                    a.label = s[1]
                    break
                  }
                  if (6 === s[0] && a.label < i[1]) {
                    ;((a.label = i[1]), (i = s))
                    break
                  }
                  if (i && a.label < i[2]) {
                    ;((a.label = i[2]), a.ops.push(s))
                    break
                  }
                  ;(i[2] && a.ops.pop(), a.trys.pop())
                  continue
              }
              s = t.call(e, a)
            } catch (e) {
              ;((s = [6, e]), (r = 0))
            } finally {
              n = i = 0
            }
          if (5 & s[0]) throw s[1]
          return { value: s[0] ? s[1] : void 0, done: !0 }
        })([s, l])
      }
    }
  }
  function N(e, t, n) {
    if (n || 2 === arguments.length)
      for (var r, i = 0, a = t.length; i < a; i++)
        (!r && i in t) || (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]))
    return e.concat(r || Array.prototype.slice.call(t))
  }
  'function' == typeof SuppressedError && SuppressedError
  var D = 'Invariant Violation',
    I = Object.setPrototypeOf,
    P =
      void 0 === I
        ? function (e, t) {
            return ((e.__proto__ = t), e)
          }
        : I,
    F = (function (e) {
      function t(n) {
        void 0 === n && (n = D)
        var r =
          e.call(
            this,
            'number' == typeof n ? D + ': ' + n + ' (see https://github.com/apollographql/invariant-packages)' : n,
          ) || this
        return ((r.framesToPop = 1), (r.name = D), P(r, t.prototype), r)
      }
      return (T(t, e), t)
    })(Error)
  function A(e, t) {
    if (!e) throw new F(t)
  }
  var M = ['debug', 'log', 'warn', 'error', 'silent'],
    L = M.indexOf('log')
  function q(e) {
    return function () {
      if (M.indexOf(e) >= L) return (console[e] || console.log).apply(console, arguments)
    }
  }
  !(function (e) {
    ;((e.debug = q('debug')), (e.log = q('log')), (e.warn = q('warn')), (e.error = q('error')))
  })(A || (A = {}))
  var z = '3.14.0'
  function j(e) {
    try {
      return e()
    } catch (e) {}
  }
  var V =
      j(function () {
        return globalThis
      }) ||
      j(function () {
        return window
      }) ||
      j(function () {
        return self
      }) ||
      j(function () {
        return global
      }) ||
      j(function () {
        return j.constructor('return this')()
      }),
    Q = new Map()
  function $(e) {
    var t = Q.get(e) || 1
    return (Q.set(e, t + 1), ''.concat(e, ':').concat(t, ':').concat(Math.random().toString(36).slice(2)))
  }
  function U(e, t) {
    void 0 === t && (t = 0)
    var n = $('stringifyForDisplay')
    return JSON.stringify(
      e,
      function (e, t) {
        return void 0 === t ? n : t
      },
      t,
    )
      .split(JSON.stringify(n))
      .join('<undefined>')
  }
  function B(e) {
    return function (t) {
      for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r]
      if ('number' == typeof t) {
        var i = t
        ;(t = Y(i)) || ((t = J(i, n)), (n = []))
      }
      e.apply(void 0, [t].concat(n))
    }
  }
  var W = Object.assign(
    function (e, t) {
      for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r]
      e || A(e, Y(t, n) || J(t, n))
    },
    { debug: B(A.debug), log: B(A.log), warn: B(A.warn), error: B(A.error) },
  )
  function K(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
    return new F(Y(e, t) || J(e, t))
  }
  var H = Symbol.for('ApolloErrorMessageHandler_' + z)
  function G(e) {
    if ('string' == typeof e) return e
    try {
      return U(e, 2).slice(0, 1e3)
    } catch (e) {
      return '<non-serializable>'
    }
  }
  function Y(e, t) {
    if ((void 0 === t && (t = []), e)) return V[H] && V[H](e, t.map(G))
  }
  function J(e, t) {
    if ((void 0 === t && (t = []), e))
      return 'An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#'.concat(
        encodeURIComponent(JSON.stringify({ version: z, message: e, args: t.map(G) })),
      )
  }
  var X,
    Z = { exports: {} }
  var ee =
      (X ||
        ((X = 1),
        (function (e) {
          ;((e.exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = void 0),
            (e.exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0),
            (e.exports.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0),
            Object.assign(e.exports, l()))
        })(Z)),
      Z.exports),
    te = e({ __proto__: null, default: t(ee) }, [ee])
  function ne(e, t) {
    if (!Boolean(e)) throw new Error(t)
  }
  function re(e, t) {
    if (!Boolean(e)) throw new Error('Unexpected invariant triggered.')
  }
  const ie = /\r\n|[\n\r]/g
  function ae(e, t) {
    let n = 0,
      r = 1
    for (const i of e.body.matchAll(ie)) {
      if (('number' == typeof i.index || re(!1), i.index >= t)) break
      ;((n = i.index + i[0].length), (r += 1))
    }
    return { line: r, column: t + 1 - n }
  }
  function oe(e) {
    return se(e.source, ae(e.source, e.start))
  }
  function se(e, t) {
    const n = e.locationOffset.column - 1,
      r = ''.padStart(n) + e.body,
      i = t.line - 1,
      a = e.locationOffset.line - 1,
      o = t.line + a,
      s = 1 === t.line ? n : 0,
      l = t.column + s,
      u = `${e.name}:${o}:${l}\n`,
      c = r.split(/\r\n|[\n\r]/g),
      f = c[i]
    if (f.length > 120) {
      const e = Math.floor(l / 80),
        t = l % 80,
        n = []
      for (let e = 0; e < f.length; e += 80) n.push(f.slice(e, e + 80))
      return (
        u + le([[`${o} |`, n[0]], ...n.slice(1, e + 1).map((e) => ['|', e]), ['|', '^'.padStart(t)], ['|', n[e + 1]]])
      )
    }
    return (
      u +
      le([
        [o - 1 + ' |', c[i - 1]],
        [`${o} |`, f],
        ['|', '^'.padStart(l)],
        [`${o + 1} |`, c[i + 1]],
      ])
    )
  }
  function le(e) {
    const t = e.filter(([e, t]) => void 0 !== t),
      n = Math.max(...t.map(([e]) => e.length))
    return t.map(([e, t]) => e.padStart(n) + (t ? ' ' + t : '')).join('\n')
  }
  class ue extends Error {
    constructor(e, ...t) {
      var n, r, i
      const {
        nodes: a,
        source: o,
        positions: s,
        path: l,
        originalError: u,
        extensions: c,
      } = (function (e) {
        const t = e[0]
        return null == t || 'kind' in t || 'length' in t
          ? { nodes: t, source: e[1], positions: e[2], path: e[3], originalError: e[4], extensions: e[5] }
          : t
      })(t)
      ;(super(e),
        (this.name = 'GraphQLError'),
        (this.path = null != l ? l : void 0),
        (this.originalError = null != u ? u : void 0),
        (this.nodes = ce(Array.isArray(a) ? a : a ? [a] : void 0)))
      const f = ce(null === (n = this.nodes) || void 0 === n ? void 0 : n.map((e) => e.loc).filter((e) => null != e))
      ;((this.source = null != o ? o : null == f || null === (r = f[0]) || void 0 === r ? void 0 : r.source),
        (this.positions = null != s ? s : null == f ? void 0 : f.map((e) => e.start)),
        (this.locations = s && o ? s.map((e) => ae(o, e)) : null == f ? void 0 : f.map((e) => ae(e.source, e.start))))
      const d =
        'object' == typeof (p = null == u ? void 0 : u.extensions) && null !== p
          ? null == u
            ? void 0
            : u.extensions
          : void 0
      var p
      ;((this.extensions = null !== (i = null != c ? c : d) && void 0 !== i ? i : Object.create(null)),
        Object.defineProperties(this, {
          message: { writable: !0, enumerable: !0 },
          name: { enumerable: !1 },
          nodes: { enumerable: !1 },
          source: { enumerable: !1 },
          positions: { enumerable: !1 },
          originalError: { enumerable: !1 },
        }),
        null != u && u.stack
          ? Object.defineProperty(this, 'stack', { value: u.stack, writable: !0, configurable: !0 })
          : Error.captureStackTrace
            ? Error.captureStackTrace(this, ue)
            : Object.defineProperty(this, 'stack', { value: Error().stack, writable: !0, configurable: !0 }))
    }
    get [Symbol.toStringTag]() {
      return 'GraphQLError'
    }
    toString() {
      let e = this.message
      if (this.nodes) for (const t of this.nodes) t.loc && (e += '\n\n' + oe(t.loc))
      else if (this.source && this.locations) for (const t of this.locations) e += '\n\n' + se(this.source, t)
      return e
    }
    toJSON() {
      const e = { message: this.message }
      return (
        null != this.locations && (e.locations = this.locations),
        null != this.path && (e.path = this.path),
        null != this.extensions && Object.keys(this.extensions).length > 0 && (e.extensions = this.extensions),
        e
      )
    }
  }
  function ce(e) {
    return void 0 === e || 0 === e.length ? void 0 : e
  }
  function fe(e, t, n) {
    return new ue(`Syntax Error: ${n}`, { source: e, positions: [t] })
  }
  class de {
    constructor(e, t, n) {
      ;((this.start = e.start), (this.end = t.end), (this.startToken = e), (this.endToken = t), (this.source = n))
    }
    get [Symbol.toStringTag]() {
      return 'Location'
    }
    toJSON() {
      return { start: this.start, end: this.end }
    }
  }
  class pe {
    constructor(e, t, n, r, i, a) {
      ;((this.kind = e),
        (this.start = t),
        (this.end = n),
        (this.line = r),
        (this.column = i),
        (this.value = a),
        (this.prev = null),
        (this.next = null))
    }
    get [Symbol.toStringTag]() {
      return 'Token'
    }
    toJSON() {
      return { kind: this.kind, value: this.value, line: this.line, column: this.column }
    }
  }
  const he = {
      Name: [],
      Document: ['definitions'],
      OperationDefinition: ['description', 'name', 'variableDefinitions', 'directives', 'selectionSet'],
      VariableDefinition: ['description', 'variable', 'type', 'defaultValue', 'directives'],
      Variable: ['name'],
      SelectionSet: ['selections'],
      Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
      Argument: ['name', 'value'],
      FragmentSpread: ['name', 'directives'],
      InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
      FragmentDefinition: ['description', 'name', 'variableDefinitions', 'typeCondition', 'directives', 'selectionSet'],
      IntValue: [],
      FloatValue: [],
      StringValue: [],
      BooleanValue: [],
      NullValue: [],
      EnumValue: [],
      ListValue: ['values'],
      ObjectValue: ['fields'],
      ObjectField: ['name', 'value'],
      Directive: ['name', 'arguments'],
      NamedType: ['name'],
      ListType: ['type'],
      NonNullType: ['type'],
      SchemaDefinition: ['description', 'directives', 'operationTypes'],
      OperationTypeDefinition: ['type'],
      ScalarTypeDefinition: ['description', 'name', 'directives'],
      ObjectTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
      FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
      InputValueDefinition: ['description', 'name', 'type', 'defaultValue', 'directives'],
      InterfaceTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
      UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
      EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
      EnumValueDefinition: ['description', 'name', 'directives'],
      InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],
      DirectiveDefinition: ['description', 'name', 'arguments', 'locations'],
      SchemaExtension: ['directives', 'operationTypes'],
      ScalarTypeExtension: ['name', 'directives'],
      ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
      InterfaceTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
      UnionTypeExtension: ['name', 'directives', 'types'],
      EnumTypeExtension: ['name', 'directives', 'values'],
      InputObjectTypeExtension: ['name', 'directives', 'fields'],
      TypeCoordinate: ['name'],
      MemberCoordinate: ['name', 'memberName'],
      ArgumentCoordinate: ['name', 'fieldName', 'argumentName'],
      DirectiveCoordinate: ['name'],
      DirectiveArgumentCoordinate: ['name', 'argumentName'],
    },
    me = new Set(Object.keys(he))
  function ve(e) {
    const t = null == e ? void 0 : e.kind
    return 'string' == typeof t && me.has(t)
  }
  var ye, ge, be, Ee
  function we(e) {
    return 9 === e || 32 === e
  }
  function _e(e) {
    return e >= 48 && e <= 57
  }
  function ke(e) {
    return (e >= 97 && e <= 122) || (e >= 65 && e <= 90)
  }
  function Se(e) {
    return ke(e) || 95 === e
  }
  function Te(e) {
    return ke(e) || _e(e) || 95 === e
  }
  function xe(e) {
    var t
    let n = Number.MAX_SAFE_INTEGER,
      r = null,
      i = -1
    for (let t = 0; t < e.length; ++t) {
      var a
      const o = e[t],
        s = Oe(o)
      s !== o.length && ((r = null !== (a = r) && void 0 !== a ? a : t), (i = t), 0 !== t && s < n && (n = s))
    }
    return e.map((e, t) => (0 === t ? e : e.slice(n))).slice(null !== (t = r) && void 0 !== t ? t : 0, i + 1)
  }
  function Oe(e) {
    let t = 0
    for (; t < e.length && we(e.charCodeAt(t)); ) ++t
    return t
  }
  ;(!(function (e) {
    ;((e.QUERY = 'query'), (e.MUTATION = 'mutation'), (e.SUBSCRIPTION = 'subscription'))
  })(ye || (ye = {})),
    (function (e) {
      ;((e.QUERY = 'QUERY'),
        (e.MUTATION = 'MUTATION'),
        (e.SUBSCRIPTION = 'SUBSCRIPTION'),
        (e.FIELD = 'FIELD'),
        (e.FRAGMENT_DEFINITION = 'FRAGMENT_DEFINITION'),
        (e.FRAGMENT_SPREAD = 'FRAGMENT_SPREAD'),
        (e.INLINE_FRAGMENT = 'INLINE_FRAGMENT'),
        (e.VARIABLE_DEFINITION = 'VARIABLE_DEFINITION'),
        (e.SCHEMA = 'SCHEMA'),
        (e.SCALAR = 'SCALAR'),
        (e.OBJECT = 'OBJECT'),
        (e.FIELD_DEFINITION = 'FIELD_DEFINITION'),
        (e.ARGUMENT_DEFINITION = 'ARGUMENT_DEFINITION'),
        (e.INTERFACE = 'INTERFACE'),
        (e.UNION = 'UNION'),
        (e.ENUM = 'ENUM'),
        (e.ENUM_VALUE = 'ENUM_VALUE'),
        (e.INPUT_OBJECT = 'INPUT_OBJECT'),
        (e.INPUT_FIELD_DEFINITION = 'INPUT_FIELD_DEFINITION'))
    })(ge || (ge = {})),
    (function (e) {
      ;((e.NAME = 'Name'),
        (e.DOCUMENT = 'Document'),
        (e.OPERATION_DEFINITION = 'OperationDefinition'),
        (e.VARIABLE_DEFINITION = 'VariableDefinition'),
        (e.SELECTION_SET = 'SelectionSet'),
        (e.FIELD = 'Field'),
        (e.ARGUMENT = 'Argument'),
        (e.FRAGMENT_SPREAD = 'FragmentSpread'),
        (e.INLINE_FRAGMENT = 'InlineFragment'),
        (e.FRAGMENT_DEFINITION = 'FragmentDefinition'),
        (e.VARIABLE = 'Variable'),
        (e.INT = 'IntValue'),
        (e.FLOAT = 'FloatValue'),
        (e.STRING = 'StringValue'),
        (e.BOOLEAN = 'BooleanValue'),
        (e.NULL = 'NullValue'),
        (e.ENUM = 'EnumValue'),
        (e.LIST = 'ListValue'),
        (e.OBJECT = 'ObjectValue'),
        (e.OBJECT_FIELD = 'ObjectField'),
        (e.DIRECTIVE = 'Directive'),
        (e.NAMED_TYPE = 'NamedType'),
        (e.LIST_TYPE = 'ListType'),
        (e.NON_NULL_TYPE = 'NonNullType'),
        (e.SCHEMA_DEFINITION = 'SchemaDefinition'),
        (e.OPERATION_TYPE_DEFINITION = 'OperationTypeDefinition'),
        (e.SCALAR_TYPE_DEFINITION = 'ScalarTypeDefinition'),
        (e.OBJECT_TYPE_DEFINITION = 'ObjectTypeDefinition'),
        (e.FIELD_DEFINITION = 'FieldDefinition'),
        (e.INPUT_VALUE_DEFINITION = 'InputValueDefinition'),
        (e.INTERFACE_TYPE_DEFINITION = 'InterfaceTypeDefinition'),
        (e.UNION_TYPE_DEFINITION = 'UnionTypeDefinition'),
        (e.ENUM_TYPE_DEFINITION = 'EnumTypeDefinition'),
        (e.ENUM_VALUE_DEFINITION = 'EnumValueDefinition'),
        (e.INPUT_OBJECT_TYPE_DEFINITION = 'InputObjectTypeDefinition'),
        (e.DIRECTIVE_DEFINITION = 'DirectiveDefinition'),
        (e.SCHEMA_EXTENSION = 'SchemaExtension'),
        (e.SCALAR_TYPE_EXTENSION = 'ScalarTypeExtension'),
        (e.OBJECT_TYPE_EXTENSION = 'ObjectTypeExtension'),
        (e.INTERFACE_TYPE_EXTENSION = 'InterfaceTypeExtension'),
        (e.UNION_TYPE_EXTENSION = 'UnionTypeExtension'),
        (e.ENUM_TYPE_EXTENSION = 'EnumTypeExtension'),
        (e.INPUT_OBJECT_TYPE_EXTENSION = 'InputObjectTypeExtension'),
        (e.TYPE_COORDINATE = 'TypeCoordinate'),
        (e.MEMBER_COORDINATE = 'MemberCoordinate'),
        (e.ARGUMENT_COORDINATE = 'ArgumentCoordinate'),
        (e.DIRECTIVE_COORDINATE = 'DirectiveCoordinate'),
        (e.DIRECTIVE_ARGUMENT_COORDINATE = 'DirectiveArgumentCoordinate'))
    })(be || (be = {})),
    (function (e) {
      ;((e.SOF = '<SOF>'),
        (e.EOF = '<EOF>'),
        (e.BANG = '!'),
        (e.DOLLAR = '$'),
        (e.AMP = '&'),
        (e.PAREN_L = '('),
        (e.PAREN_R = ')'),
        (e.DOT = '.'),
        (e.SPREAD = '...'),
        (e.COLON = ':'),
        (e.EQUALS = '='),
        (e.AT = '@'),
        (e.BRACKET_L = '['),
        (e.BRACKET_R = ']'),
        (e.BRACE_L = '{'),
        (e.PIPE = '|'),
        (e.BRACE_R = '}'),
        (e.NAME = 'Name'),
        (e.INT = 'Int'),
        (e.FLOAT = 'Float'),
        (e.STRING = 'String'),
        (e.BLOCK_STRING = 'BlockString'),
        (e.COMMENT = 'Comment'))
    })(Ee || (Ee = {})))
  class Ce {
    constructor(e) {
      const t = new pe(Ee.SOF, 0, 0, 0, 0)
      ;((this.source = e), (this.lastToken = t), (this.token = t), (this.line = 1), (this.lineStart = 0))
    }
    get [Symbol.toStringTag]() {
      return 'Lexer'
    }
    advance() {
      this.lastToken = this.token
      return (this.token = this.lookahead())
    }
    lookahead() {
      let e = this.token
      if (e.kind !== Ee.EOF)
        do {
          if (e.next) e = e.next
          else {
            const t = Ae(this, e.end)
            ;((e.next = t), (t.prev = e), (e = t))
          }
        } while (e.kind === Ee.COMMENT)
      return e
    }
  }
  function Re(e) {
    return (e >= 0 && e <= 55295) || (e >= 57344 && e <= 1114111)
  }
  function Ne(e, t) {
    return De(e.charCodeAt(t)) && Ie(e.charCodeAt(t + 1))
  }
  function De(e) {
    return e >= 55296 && e <= 56319
  }
  function Ie(e) {
    return e >= 56320 && e <= 57343
  }
  function Pe(e, t) {
    const n = e.source.body.codePointAt(t)
    if (void 0 === n) return Ee.EOF
    if (n >= 32 && n <= 126) {
      const e = String.fromCodePoint(n)
      return '"' === e ? "'\"'" : `"${e}"`
    }
    return 'U+' + n.toString(16).toUpperCase().padStart(4, '0')
  }
  function Fe(e, t, n, r, i) {
    const a = e.line,
      o = 1 + n - e.lineStart
    return new pe(t, n, r, a, o, i)
  }
  function Ae(e, t) {
    const n = e.source.body,
      r = n.length
    let i = t
    for (; i < r; ) {
      const t = n.charCodeAt(i)
      switch (t) {
        case 65279:
        case 9:
        case 32:
        case 44:
          ++i
          continue
        case 10:
          ;(++i, ++e.line, (e.lineStart = i))
          continue
        case 13:
          ;(10 === n.charCodeAt(i + 1) ? (i += 2) : ++i, ++e.line, (e.lineStart = i))
          continue
        case 35:
          return Me(e, i)
        case 33:
          return Fe(e, Ee.BANG, i, i + 1)
        case 36:
          return Fe(e, Ee.DOLLAR, i, i + 1)
        case 38:
          return Fe(e, Ee.AMP, i, i + 1)
        case 40:
          return Fe(e, Ee.PAREN_L, i, i + 1)
        case 41:
          return Fe(e, Ee.PAREN_R, i, i + 1)
        case 46:
          if (46 === n.charCodeAt(i + 1) && 46 === n.charCodeAt(i + 2)) return Fe(e, Ee.SPREAD, i, i + 3)
          break
        case 58:
          return Fe(e, Ee.COLON, i, i + 1)
        case 61:
          return Fe(e, Ee.EQUALS, i, i + 1)
        case 64:
          return Fe(e, Ee.AT, i, i + 1)
        case 91:
          return Fe(e, Ee.BRACKET_L, i, i + 1)
        case 93:
          return Fe(e, Ee.BRACKET_R, i, i + 1)
        case 123:
          return Fe(e, Ee.BRACE_L, i, i + 1)
        case 124:
          return Fe(e, Ee.PIPE, i, i + 1)
        case 125:
          return Fe(e, Ee.BRACE_R, i, i + 1)
        case 34:
          return 34 === n.charCodeAt(i + 1) && 34 === n.charCodeAt(i + 2) ? Be(e, i) : ze(e, i)
      }
      if (_e(t) || 45 === t) return Le(e, i, t)
      if (Se(t)) return We(e, i)
      throw fe(
        e.source,
        i,
        39 === t
          ? 'Unexpected single quote character (\'), did you mean to use a double quote (")?'
          : Re(t) || Ne(n, i)
            ? `Unexpected character: ${Pe(e, i)}.`
            : `Invalid character: ${Pe(e, i)}.`,
      )
    }
    return Fe(e, Ee.EOF, r, r)
  }
  function Me(e, t) {
    const n = e.source.body,
      r = n.length
    let i = t + 1
    for (; i < r; ) {
      const e = n.charCodeAt(i)
      if (10 === e || 13 === e) break
      if (Re(e)) ++i
      else {
        if (!Ne(n, i)) break
        i += 2
      }
    }
    return Fe(e, Ee.COMMENT, t, i, n.slice(t + 1, i))
  }
  function Le(e, t, n) {
    const r = e.source.body
    let i = t,
      a = n,
      o = !1
    if ((45 === a && (a = r.charCodeAt(++i)), 48 === a)) {
      if (((a = r.charCodeAt(++i)), _e(a)))
        throw fe(e.source, i, `Invalid number, unexpected digit after 0: ${Pe(e, i)}.`)
    } else ((i = qe(e, i, a)), (a = r.charCodeAt(i)))
    if (
      (46 === a && ((o = !0), (a = r.charCodeAt(++i)), (i = qe(e, i, a)), (a = r.charCodeAt(i))),
      (69 !== a && 101 !== a) ||
        ((o = !0),
        (a = r.charCodeAt(++i)),
        (43 !== a && 45 !== a) || (a = r.charCodeAt(++i)),
        (i = qe(e, i, a)),
        (a = r.charCodeAt(i))),
      46 === a || Se(a))
    )
      throw fe(e.source, i, `Invalid number, expected digit but got: ${Pe(e, i)}.`)
    return Fe(e, o ? Ee.FLOAT : Ee.INT, t, i, r.slice(t, i))
  }
  function qe(e, t, n) {
    if (!_e(n)) throw fe(e.source, t, `Invalid number, expected digit but got: ${Pe(e, t)}.`)
    const r = e.source.body
    let i = t + 1
    for (; _e(r.charCodeAt(i)); ) ++i
    return i
  }
  function ze(e, t) {
    const n = e.source.body,
      r = n.length
    let i = t + 1,
      a = i,
      o = ''
    for (; i < r; ) {
      const r = n.charCodeAt(i)
      if (34 === r) return ((o += n.slice(a, i)), Fe(e, Ee.STRING, t, i + 1, o))
      if (92 === r) {
        o += n.slice(a, i)
        const t = 117 === n.charCodeAt(i + 1) ? (123 === n.charCodeAt(i + 2) ? je(e, i) : Ve(e, i)) : Ue(e, i)
        ;((o += t.value), (i += t.size), (a = i))
        continue
      }
      if (10 === r || 13 === r) break
      if (Re(r)) ++i
      else {
        if (!Ne(n, i)) throw fe(e.source, i, `Invalid character within String: ${Pe(e, i)}.`)
        i += 2
      }
    }
    throw fe(e.source, i, 'Unterminated string.')
  }
  function je(e, t) {
    const n = e.source.body
    let r = 0,
      i = 3
    for (; i < 12; ) {
      const e = n.charCodeAt(t + i++)
      if (125 === e) {
        if (i < 5 || !Re(r)) break
        return { value: String.fromCodePoint(r), size: i }
      }
      if (((r = (r << 4) | $e(e)), r < 0)) break
    }
    throw fe(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + i)}".`)
  }
  function Ve(e, t) {
    const n = e.source.body,
      r = Qe(n, t + 2)
    if (Re(r)) return { value: String.fromCodePoint(r), size: 6 }
    if (De(r) && 92 === n.charCodeAt(t + 6) && 117 === n.charCodeAt(t + 7)) {
      const e = Qe(n, t + 8)
      if (Ie(e)) return { value: String.fromCodePoint(r, e), size: 12 }
    }
    throw fe(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + 6)}".`)
  }
  function Qe(e, t) {
    return (
      ($e(e.charCodeAt(t)) << 12) |
      ($e(e.charCodeAt(t + 1)) << 8) |
      ($e(e.charCodeAt(t + 2)) << 4) |
      $e(e.charCodeAt(t + 3))
    )
  }
  function $e(e) {
    return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1
  }
  function Ue(e, t) {
    const n = e.source.body
    switch (n.charCodeAt(t + 1)) {
      case 34:
        return { value: '"', size: 2 }
      case 92:
        return { value: '\\', size: 2 }
      case 47:
        return { value: '/', size: 2 }
      case 98:
        return { value: '\b', size: 2 }
      case 102:
        return { value: '\f', size: 2 }
      case 110:
        return { value: '\n', size: 2 }
      case 114:
        return { value: '\r', size: 2 }
      case 116:
        return { value: '\t', size: 2 }
    }
    throw fe(e.source, t, `Invalid character escape sequence: "${n.slice(t, t + 2)}".`)
  }
  function Be(e, t) {
    const n = e.source.body,
      r = n.length
    let i = e.lineStart,
      a = t + 3,
      o = a,
      s = ''
    const l = []
    for (; a < r; ) {
      const r = n.charCodeAt(a)
      if (34 === r && 34 === n.charCodeAt(a + 1) && 34 === n.charCodeAt(a + 2)) {
        ;((s += n.slice(o, a)), l.push(s))
        const r = Fe(e, Ee.BLOCK_STRING, t, a + 3, xe(l).join('\n'))
        return ((e.line += l.length - 1), (e.lineStart = i), r)
      }
      if (92 !== r || 34 !== n.charCodeAt(a + 1) || 34 !== n.charCodeAt(a + 2) || 34 !== n.charCodeAt(a + 3))
        if (10 !== r && 13 !== r)
          if (Re(r)) ++a
          else {
            if (!Ne(n, a)) throw fe(e.source, a, `Invalid character within String: ${Pe(e, a)}.`)
            a += 2
          }
        else
          ((s += n.slice(o, a)),
            l.push(s),
            13 === r && 10 === n.charCodeAt(a + 1) ? (a += 2) : ++a,
            (s = ''),
            (o = a),
            (i = a))
      else ((s += n.slice(o, a)), (o = a + 1), (a += 4))
    }
    throw fe(e.source, a, 'Unterminated string.')
  }
  function We(e, t) {
    const n = e.source.body,
      r = n.length
    let i = t + 1
    for (; i < r; ) {
      if (!Te(n.charCodeAt(i))) break
      ++i
    }
    return Fe(e, Ee.NAME, t, i, n.slice(t, i))
  }
  function Ke(e) {
    return He(e, [])
  }
  function He(e, t) {
    switch (typeof e) {
      case 'string':
        return JSON.stringify(e)
      case 'function':
        return e.name ? `[function ${e.name}]` : '[function]'
      case 'object':
        return (function (e, t) {
          if (null === e) return 'null'
          if (t.includes(e)) return '[Circular]'
          const n = [...t, e]
          if (
            (function (e) {
              return 'function' == typeof e.toJSON
            })(e)
          ) {
            const t = e.toJSON()
            if (t !== e) return 'string' == typeof t ? t : He(t, n)
          } else if (Array.isArray(e))
            return (function (e, t) {
              if (0 === e.length) return '[]'
              if (t.length > 2) return '[Array]'
              const n = Math.min(10, e.length),
                r = e.length - n,
                i = []
              for (let r = 0; r < n; ++r) i.push(He(e[r], t))
              1 === r ? i.push('... 1 more item') : r > 1 && i.push(`... ${r} more items`)
              return '[' + i.join(', ') + ']'
            })(e, n)
          return (function (e, t) {
            const n = Object.entries(e)
            if (0 === n.length) return '{}'
            if (t.length > 2)
              return (
                '[' +
                (function (e) {
                  const t = Object.prototype.toString
                    .call(e)
                    .replace(/^\[object /, '')
                    .replace(/]$/, '')
                  if ('Object' === t && 'function' == typeof e.constructor) {
                    const t = e.constructor.name
                    if ('string' == typeof t && '' !== t) return t
                  }
                  return t
                })(e) +
                ']'
              )
            const r = n.map(([e, n]) => e + ': ' + He(n, t))
            return '{ ' + r.join(', ') + ' }'
          })(e, n)
        })(e, t)
      default:
        return String(e)
    }
  }
  const Ge =
    globalThis.process && !0
      ? function (e, t) {
          return e instanceof t
        }
      : function (e, t) {
          if (e instanceof t) return !0
          if ('object' == typeof e && null !== e) {
            var n
            const r = t.prototype[Symbol.toStringTag]
            if (
              r ===
              (Symbol.toStringTag in e
                ? e[Symbol.toStringTag]
                : null === (n = e.constructor) || void 0 === n
                  ? void 0
                  : n.name)
            ) {
              const t = Ke(e)
              throw new Error(
                `Cannot use ${r} "${t}" from another module or realm.\n\nEnsure that there is only one instance of "graphql" in the node_modules\ndirectory. If different versions of "graphql" are the dependencies of other\nrelied on modules, use "resolutions" to ensure only one version is installed.\n\nhttps://yarnpkg.com/en/docs/selective-version-resolutions\n\nDuplicate "graphql" modules cannot be used at the same time since different\nversions may have different capabilities and behavior. The data from one\nversion used in the function from another could produce confusing and\nspurious results.`,
              )
            }
          }
          return !1
        }
  class Ye {
    constructor(e, t = 'GraphQL request', n = { line: 1, column: 1 }) {
      ;('string' == typeof e || ne(!1, `Body must be a string. Received: ${Ke(e)}.`),
        (this.body = e),
        (this.name = t),
        (this.locationOffset = n),
        this.locationOffset.line > 0 || ne(!1, 'line in locationOffset is 1-indexed and must be positive.'),
        this.locationOffset.column > 0 || ne(!1, 'column in locationOffset is 1-indexed and must be positive.'))
    }
    get [Symbol.toStringTag]() {
      return 'Source'
    }
  }
  class Je {
    constructor(e, t = {}) {
      const { lexer: n, ...r } = t
      if (n) this._lexer = n
      else {
        const t = (function (e) {
          return Ge(e, Ye)
        })(e)
          ? e
          : new Ye(e)
        this._lexer = new Ce(t)
      }
      ;((this._options = r), (this._tokenCounter = 0))
    }
    get tokenCount() {
      return this._tokenCounter
    }
    parseName() {
      const e = this.expectToken(Ee.NAME)
      return this.node(e, { kind: be.NAME, value: e.value })
    }
    parseDocument() {
      return this.node(this._lexer.token, {
        kind: be.DOCUMENT,
        definitions: this.many(Ee.SOF, this.parseDefinition, Ee.EOF),
      })
    }
    parseDefinition() {
      if (this.peek(Ee.BRACE_L)) return this.parseOperationDefinition()
      const e = this.peekDescription(),
        t = e ? this._lexer.lookahead() : this._lexer.token
      if (e && t.kind === Ee.BRACE_L)
        throw fe(
          this._lexer.source,
          this._lexer.token.start,
          'Unexpected description, descriptions are not supported on shorthand queries.',
        )
      if (t.kind === Ee.NAME) {
        switch (t.value) {
          case 'schema':
            return this.parseSchemaDefinition()
          case 'scalar':
            return this.parseScalarTypeDefinition()
          case 'type':
            return this.parseObjectTypeDefinition()
          case 'interface':
            return this.parseInterfaceTypeDefinition()
          case 'union':
            return this.parseUnionTypeDefinition()
          case 'enum':
            return this.parseEnumTypeDefinition()
          case 'input':
            return this.parseInputObjectTypeDefinition()
          case 'directive':
            return this.parseDirectiveDefinition()
        }
        switch (t.value) {
          case 'query':
          case 'mutation':
          case 'subscription':
            return this.parseOperationDefinition()
          case 'fragment':
            return this.parseFragmentDefinition()
        }
        if (e)
          throw fe(
            this._lexer.source,
            this._lexer.token.start,
            'Unexpected description, only GraphQL definitions support descriptions.',
          )
        if ('extend' === t.value) return this.parseTypeSystemExtension()
      }
      throw this.unexpected(t)
    }
    parseOperationDefinition() {
      const e = this._lexer.token
      if (this.peek(Ee.BRACE_L))
        return this.node(e, {
          kind: be.OPERATION_DEFINITION,
          operation: ye.QUERY,
          description: void 0,
          name: void 0,
          variableDefinitions: [],
          directives: [],
          selectionSet: this.parseSelectionSet(),
        })
      const t = this.parseDescription(),
        n = this.parseOperationType()
      let r
      return (
        this.peek(Ee.NAME) && (r = this.parseName()),
        this.node(e, {
          kind: be.OPERATION_DEFINITION,
          operation: n,
          description: t,
          name: r,
          variableDefinitions: this.parseVariableDefinitions(),
          directives: this.parseDirectives(!1),
          selectionSet: this.parseSelectionSet(),
        })
      )
    }
    parseOperationType() {
      const e = this.expectToken(Ee.NAME)
      switch (e.value) {
        case 'query':
          return ye.QUERY
        case 'mutation':
          return ye.MUTATION
        case 'subscription':
          return ye.SUBSCRIPTION
      }
      throw this.unexpected(e)
    }
    parseVariableDefinitions() {
      return this.optionalMany(Ee.PAREN_L, this.parseVariableDefinition, Ee.PAREN_R)
    }
    parseVariableDefinition() {
      return this.node(this._lexer.token, {
        kind: be.VARIABLE_DEFINITION,
        description: this.parseDescription(),
        variable: this.parseVariable(),
        type: (this.expectToken(Ee.COLON), this.parseTypeReference()),
        defaultValue: this.expectOptionalToken(Ee.EQUALS) ? this.parseConstValueLiteral() : void 0,
        directives: this.parseConstDirectives(),
      })
    }
    parseVariable() {
      const e = this._lexer.token
      return (this.expectToken(Ee.DOLLAR), this.node(e, { kind: be.VARIABLE, name: this.parseName() }))
    }
    parseSelectionSet() {
      return this.node(this._lexer.token, {
        kind: be.SELECTION_SET,
        selections: this.many(Ee.BRACE_L, this.parseSelection, Ee.BRACE_R),
      })
    }
    parseSelection() {
      return this.peek(Ee.SPREAD) ? this.parseFragment() : this.parseField()
    }
    parseField() {
      const e = this._lexer.token,
        t = this.parseName()
      let n, r
      return (
        this.expectOptionalToken(Ee.COLON) ? ((n = t), (r = this.parseName())) : (r = t),
        this.node(e, {
          kind: be.FIELD,
          alias: n,
          name: r,
          arguments: this.parseArguments(!1),
          directives: this.parseDirectives(!1),
          selectionSet: this.peek(Ee.BRACE_L) ? this.parseSelectionSet() : void 0,
        })
      )
    }
    parseArguments(e) {
      const t = e ? this.parseConstArgument : this.parseArgument
      return this.optionalMany(Ee.PAREN_L, t, Ee.PAREN_R)
    }
    parseArgument(e = !1) {
      const t = this._lexer.token,
        n = this.parseName()
      return (
        this.expectToken(Ee.COLON),
        this.node(t, { kind: be.ARGUMENT, name: n, value: this.parseValueLiteral(e) })
      )
    }
    parseConstArgument() {
      return this.parseArgument(!0)
    }
    parseFragment() {
      const e = this._lexer.token
      this.expectToken(Ee.SPREAD)
      const t = this.expectOptionalKeyword('on')
      return !t && this.peek(Ee.NAME)
        ? this.node(e, {
            kind: be.FRAGMENT_SPREAD,
            name: this.parseFragmentName(),
            directives: this.parseDirectives(!1),
          })
        : this.node(e, {
            kind: be.INLINE_FRAGMENT,
            typeCondition: t ? this.parseNamedType() : void 0,
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet(),
          })
    }
    parseFragmentDefinition() {
      const e = this._lexer.token,
        t = this.parseDescription()
      return (
        this.expectKeyword('fragment'),
        !0 === this._options.allowLegacyFragmentVariables
          ? this.node(e, {
              kind: be.FRAGMENT_DEFINITION,
              description: t,
              name: this.parseFragmentName(),
              variableDefinitions: this.parseVariableDefinitions(),
              typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
              directives: this.parseDirectives(!1),
              selectionSet: this.parseSelectionSet(),
            })
          : this.node(e, {
              kind: be.FRAGMENT_DEFINITION,
              description: t,
              name: this.parseFragmentName(),
              typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
              directives: this.parseDirectives(!1),
              selectionSet: this.parseSelectionSet(),
            })
      )
    }
    parseFragmentName() {
      if ('on' === this._lexer.token.value) throw this.unexpected()
      return this.parseName()
    }
    parseValueLiteral(e) {
      const t = this._lexer.token
      switch (t.kind) {
        case Ee.BRACKET_L:
          return this.parseList(e)
        case Ee.BRACE_L:
          return this.parseObject(e)
        case Ee.INT:
          return (this.advanceLexer(), this.node(t, { kind: be.INT, value: t.value }))
        case Ee.FLOAT:
          return (this.advanceLexer(), this.node(t, { kind: be.FLOAT, value: t.value }))
        case Ee.STRING:
        case Ee.BLOCK_STRING:
          return this.parseStringLiteral()
        case Ee.NAME:
          switch ((this.advanceLexer(), t.value)) {
            case 'true':
              return this.node(t, { kind: be.BOOLEAN, value: !0 })
            case 'false':
              return this.node(t, { kind: be.BOOLEAN, value: !1 })
            case 'null':
              return this.node(t, { kind: be.NULL })
            default:
              return this.node(t, { kind: be.ENUM, value: t.value })
          }
        case Ee.DOLLAR:
          if (e) {
            if ((this.expectToken(Ee.DOLLAR), this._lexer.token.kind === Ee.NAME)) {
              const e = this._lexer.token.value
              throw fe(this._lexer.source, t.start, `Unexpected variable "$${e}" in constant value.`)
            }
            throw this.unexpected(t)
          }
          return this.parseVariable()
        default:
          throw this.unexpected()
      }
    }
    parseConstValueLiteral() {
      return this.parseValueLiteral(!0)
    }
    parseStringLiteral() {
      const e = this._lexer.token
      return (this.advanceLexer(), this.node(e, { kind: be.STRING, value: e.value, block: e.kind === Ee.BLOCK_STRING }))
    }
    parseList(e) {
      return this.node(this._lexer.token, {
        kind: be.LIST,
        values: this.any(Ee.BRACKET_L, () => this.parseValueLiteral(e), Ee.BRACKET_R),
      })
    }
    parseObject(e) {
      return this.node(this._lexer.token, {
        kind: be.OBJECT,
        fields: this.any(Ee.BRACE_L, () => this.parseObjectField(e), Ee.BRACE_R),
      })
    }
    parseObjectField(e) {
      const t = this._lexer.token,
        n = this.parseName()
      return (
        this.expectToken(Ee.COLON),
        this.node(t, { kind: be.OBJECT_FIELD, name: n, value: this.parseValueLiteral(e) })
      )
    }
    parseDirectives(e) {
      const t = []
      for (; this.peek(Ee.AT); ) t.push(this.parseDirective(e))
      return t
    }
    parseConstDirectives() {
      return this.parseDirectives(!0)
    }
    parseDirective(e) {
      const t = this._lexer.token
      return (
        this.expectToken(Ee.AT),
        this.node(t, { kind: be.DIRECTIVE, name: this.parseName(), arguments: this.parseArguments(e) })
      )
    }
    parseTypeReference() {
      const e = this._lexer.token
      let t
      if (this.expectOptionalToken(Ee.BRACKET_L)) {
        const n = this.parseTypeReference()
        ;(this.expectToken(Ee.BRACKET_R), (t = this.node(e, { kind: be.LIST_TYPE, type: n })))
      } else t = this.parseNamedType()
      return this.expectOptionalToken(Ee.BANG) ? this.node(e, { kind: be.NON_NULL_TYPE, type: t }) : t
    }
    parseNamedType() {
      return this.node(this._lexer.token, { kind: be.NAMED_TYPE, name: this.parseName() })
    }
    peekDescription() {
      return this.peek(Ee.STRING) || this.peek(Ee.BLOCK_STRING)
    }
    parseDescription() {
      if (this.peekDescription()) return this.parseStringLiteral()
    }
    parseSchemaDefinition() {
      const e = this._lexer.token,
        t = this.parseDescription()
      this.expectKeyword('schema')
      const n = this.parseConstDirectives(),
        r = this.many(Ee.BRACE_L, this.parseOperationTypeDefinition, Ee.BRACE_R)
      return this.node(e, { kind: be.SCHEMA_DEFINITION, description: t, directives: n, operationTypes: r })
    }
    parseOperationTypeDefinition() {
      const e = this._lexer.token,
        t = this.parseOperationType()
      this.expectToken(Ee.COLON)
      const n = this.parseNamedType()
      return this.node(e, { kind: be.OPERATION_TYPE_DEFINITION, operation: t, type: n })
    }
    parseScalarTypeDefinition() {
      const e = this._lexer.token,
        t = this.parseDescription()
      this.expectKeyword('scalar')
      const n = this.parseName(),
        r = this.parseConstDirectives()
      return this.node(e, { kind: be.SCALAR_TYPE_DEFINITION, description: t, name: n, directives: r })
    }
    parseObjectTypeDefinition() {
      const e = this._lexer.token,
        t = this.parseDescription()
      this.expectKeyword('type')
      const n = this.parseName(),
        r = this.parseImplementsInterfaces(),
        i = this.parseConstDirectives(),
        a = this.parseFieldsDefinition()
      return this.node(e, {
        kind: be.OBJECT_TYPE_DEFINITION,
        description: t,
        name: n,
        interfaces: r,
        directives: i,
        fields: a,
      })
    }
    parseImplementsInterfaces() {
      return this.expectOptionalKeyword('implements') ? this.delimitedMany(Ee.AMP, this.parseNamedType) : []
    }
    parseFieldsDefinition() {
      return this.optionalMany(Ee.BRACE_L, this.parseFieldDefinition, Ee.BRACE_R)
    }
    parseFieldDefinition() {
      const e = this._lexer.token,
        t = this.parseDescription(),
        n = this.parseName(),
        r = this.parseArgumentDefs()
      this.expectToken(Ee.COLON)
      const i = this.parseTypeReference(),
        a = this.parseConstDirectives()
      return this.node(e, { kind: be.FIELD_DEFINITION, description: t, name: n, arguments: r, type: i, directives: a })
    }
    parseArgumentDefs() {
      return this.optionalMany(Ee.PAREN_L, this.parseInputValueDef, Ee.PAREN_R)
    }
    parseInputValueDef() {
      const e = this._lexer.token,
        t = this.parseDescription(),
        n = this.parseName()
      this.expectToken(Ee.COLON)
      const r = this.parseTypeReference()
      let i
      this.expectOptionalToken(Ee.EQUALS) && (i = this.parseConstValueLiteral())
      const a = this.parseConstDirectives()
      return this.node(e, {
        kind: be.INPUT_VALUE_DEFINITION,
        description: t,
        name: n,
        type: r,
        defaultValue: i,
        directives: a,
      })
    }
    parseInterfaceTypeDefinition() {
      const e = this._lexer.token,
        t = this.parseDescription()
      this.expectKeyword('interface')
      const n = this.parseName(),
        r = this.parseImplementsInterfaces(),
        i = this.parseConstDirectives(),
        a = this.parseFieldsDefinition()
      return this.node(e, {
        kind: be.INTERFACE_TYPE_DEFINITION,
        description: t,
        name: n,
        interfaces: r,
        directives: i,
        fields: a,
      })
    }
    parseUnionTypeDefinition() {
      const e = this._lexer.token,
        t = this.parseDescription()
      this.expectKeyword('union')
      const n = this.parseName(),
        r = this.parseConstDirectives(),
        i = this.parseUnionMemberTypes()
      return this.node(e, { kind: be.UNION_TYPE_DEFINITION, description: t, name: n, directives: r, types: i })
    }
    parseUnionMemberTypes() {
      return this.expectOptionalToken(Ee.EQUALS) ? this.delimitedMany(Ee.PIPE, this.parseNamedType) : []
    }
    parseEnumTypeDefinition() {
      const e = this._lexer.token,
        t = this.parseDescription()
      this.expectKeyword('enum')
      const n = this.parseName(),
        r = this.parseConstDirectives(),
        i = this.parseEnumValuesDefinition()
      return this.node(e, { kind: be.ENUM_TYPE_DEFINITION, description: t, name: n, directives: r, values: i })
    }
    parseEnumValuesDefinition() {
      return this.optionalMany(Ee.BRACE_L, this.parseEnumValueDefinition, Ee.BRACE_R)
    }
    parseEnumValueDefinition() {
      const e = this._lexer.token,
        t = this.parseDescription(),
        n = this.parseEnumValueName(),
        r = this.parseConstDirectives()
      return this.node(e, { kind: be.ENUM_VALUE_DEFINITION, description: t, name: n, directives: r })
    }
    parseEnumValueName() {
      if (
        'true' === this._lexer.token.value ||
        'false' === this._lexer.token.value ||
        'null' === this._lexer.token.value
      )
        throw fe(
          this._lexer.source,
          this._lexer.token.start,
          `${Xe(this._lexer.token)} is reserved and cannot be used for an enum value.`,
        )
      return this.parseName()
    }
    parseInputObjectTypeDefinition() {
      const e = this._lexer.token,
        t = this.parseDescription()
      this.expectKeyword('input')
      const n = this.parseName(),
        r = this.parseConstDirectives(),
        i = this.parseInputFieldsDefinition()
      return this.node(e, { kind: be.INPUT_OBJECT_TYPE_DEFINITION, description: t, name: n, directives: r, fields: i })
    }
    parseInputFieldsDefinition() {
      return this.optionalMany(Ee.BRACE_L, this.parseInputValueDef, Ee.BRACE_R)
    }
    parseTypeSystemExtension() {
      const e = this._lexer.lookahead()
      if (e.kind === Ee.NAME)
        switch (e.value) {
          case 'schema':
            return this.parseSchemaExtension()
          case 'scalar':
            return this.parseScalarTypeExtension()
          case 'type':
            return this.parseObjectTypeExtension()
          case 'interface':
            return this.parseInterfaceTypeExtension()
          case 'union':
            return this.parseUnionTypeExtension()
          case 'enum':
            return this.parseEnumTypeExtension()
          case 'input':
            return this.parseInputObjectTypeExtension()
        }
      throw this.unexpected(e)
    }
    parseSchemaExtension() {
      const e = this._lexer.token
      ;(this.expectKeyword('extend'), this.expectKeyword('schema'))
      const t = this.parseConstDirectives(),
        n = this.optionalMany(Ee.BRACE_L, this.parseOperationTypeDefinition, Ee.BRACE_R)
      if (0 === t.length && 0 === n.length) throw this.unexpected()
      return this.node(e, { kind: be.SCHEMA_EXTENSION, directives: t, operationTypes: n })
    }
    parseScalarTypeExtension() {
      const e = this._lexer.token
      ;(this.expectKeyword('extend'), this.expectKeyword('scalar'))
      const t = this.parseName(),
        n = this.parseConstDirectives()
      if (0 === n.length) throw this.unexpected()
      return this.node(e, { kind: be.SCALAR_TYPE_EXTENSION, name: t, directives: n })
    }
    parseObjectTypeExtension() {
      const e = this._lexer.token
      ;(this.expectKeyword('extend'), this.expectKeyword('type'))
      const t = this.parseName(),
        n = this.parseImplementsInterfaces(),
        r = this.parseConstDirectives(),
        i = this.parseFieldsDefinition()
      if (0 === n.length && 0 === r.length && 0 === i.length) throw this.unexpected()
      return this.node(e, { kind: be.OBJECT_TYPE_EXTENSION, name: t, interfaces: n, directives: r, fields: i })
    }
    parseInterfaceTypeExtension() {
      const e = this._lexer.token
      ;(this.expectKeyword('extend'), this.expectKeyword('interface'))
      const t = this.parseName(),
        n = this.parseImplementsInterfaces(),
        r = this.parseConstDirectives(),
        i = this.parseFieldsDefinition()
      if (0 === n.length && 0 === r.length && 0 === i.length) throw this.unexpected()
      return this.node(e, { kind: be.INTERFACE_TYPE_EXTENSION, name: t, interfaces: n, directives: r, fields: i })
    }
    parseUnionTypeExtension() {
      const e = this._lexer.token
      ;(this.expectKeyword('extend'), this.expectKeyword('union'))
      const t = this.parseName(),
        n = this.parseConstDirectives(),
        r = this.parseUnionMemberTypes()
      if (0 === n.length && 0 === r.length) throw this.unexpected()
      return this.node(e, { kind: be.UNION_TYPE_EXTENSION, name: t, directives: n, types: r })
    }
    parseEnumTypeExtension() {
      const e = this._lexer.token
      ;(this.expectKeyword('extend'), this.expectKeyword('enum'))
      const t = this.parseName(),
        n = this.parseConstDirectives(),
        r = this.parseEnumValuesDefinition()
      if (0 === n.length && 0 === r.length) throw this.unexpected()
      return this.node(e, { kind: be.ENUM_TYPE_EXTENSION, name: t, directives: n, values: r })
    }
    parseInputObjectTypeExtension() {
      const e = this._lexer.token
      ;(this.expectKeyword('extend'), this.expectKeyword('input'))
      const t = this.parseName(),
        n = this.parseConstDirectives(),
        r = this.parseInputFieldsDefinition()
      if (0 === n.length && 0 === r.length) throw this.unexpected()
      return this.node(e, { kind: be.INPUT_OBJECT_TYPE_EXTENSION, name: t, directives: n, fields: r })
    }
    parseDirectiveDefinition() {
      const e = this._lexer.token,
        t = this.parseDescription()
      ;(this.expectKeyword('directive'), this.expectToken(Ee.AT))
      const n = this.parseName(),
        r = this.parseArgumentDefs(),
        i = this.expectOptionalKeyword('repeatable')
      this.expectKeyword('on')
      const a = this.parseDirectiveLocations()
      return this.node(e, {
        kind: be.DIRECTIVE_DEFINITION,
        description: t,
        name: n,
        arguments: r,
        repeatable: i,
        locations: a,
      })
    }
    parseDirectiveLocations() {
      return this.delimitedMany(Ee.PIPE, this.parseDirectiveLocation)
    }
    parseDirectiveLocation() {
      const e = this._lexer.token,
        t = this.parseName()
      if (Object.prototype.hasOwnProperty.call(ge, t.value)) return t
      throw this.unexpected(e)
    }
    parseSchemaCoordinate() {
      const e = this._lexer.token,
        t = this.expectOptionalToken(Ee.AT),
        n = this.parseName()
      let r, i
      return (
        !t && this.expectOptionalToken(Ee.DOT) && (r = this.parseName()),
        (t || r) &&
          this.expectOptionalToken(Ee.PAREN_L) &&
          ((i = this.parseName()), this.expectToken(Ee.COLON), this.expectToken(Ee.PAREN_R)),
        t
          ? i
            ? this.node(e, { kind: be.DIRECTIVE_ARGUMENT_COORDINATE, name: n, argumentName: i })
            : this.node(e, { kind: be.DIRECTIVE_COORDINATE, name: n })
          : r
            ? i
              ? this.node(e, { kind: be.ARGUMENT_COORDINATE, name: n, fieldName: r, argumentName: i })
              : this.node(e, { kind: be.MEMBER_COORDINATE, name: n, memberName: r })
            : this.node(e, { kind: be.TYPE_COORDINATE, name: n })
      )
    }
    node(e, t) {
      return (!0 !== this._options.noLocation && (t.loc = new de(e, this._lexer.lastToken, this._lexer.source)), t)
    }
    peek(e) {
      return this._lexer.token.kind === e
    }
    expectToken(e) {
      const t = this._lexer.token
      if (t.kind === e) return (this.advanceLexer(), t)
      throw fe(this._lexer.source, t.start, `Expected ${Ze(e)}, found ${Xe(t)}.`)
    }
    expectOptionalToken(e) {
      return this._lexer.token.kind === e && (this.advanceLexer(), !0)
    }
    expectKeyword(e) {
      const t = this._lexer.token
      if (t.kind !== Ee.NAME || t.value !== e) throw fe(this._lexer.source, t.start, `Expected "${e}", found ${Xe(t)}.`)
      this.advanceLexer()
    }
    expectOptionalKeyword(e) {
      const t = this._lexer.token
      return t.kind === Ee.NAME && t.value === e && (this.advanceLexer(), !0)
    }
    unexpected(e) {
      const t = null != e ? e : this._lexer.token
      return fe(this._lexer.source, t.start, `Unexpected ${Xe(t)}.`)
    }
    any(e, t, n) {
      this.expectToken(e)
      const r = []
      for (; !this.expectOptionalToken(n); ) r.push(t.call(this))
      return r
    }
    optionalMany(e, t, n) {
      if (this.expectOptionalToken(e)) {
        const e = []
        do {
          e.push(t.call(this))
        } while (!this.expectOptionalToken(n))
        return e
      }
      return []
    }
    many(e, t, n) {
      this.expectToken(e)
      const r = []
      do {
        r.push(t.call(this))
      } while (!this.expectOptionalToken(n))
      return r
    }
    delimitedMany(e, t) {
      this.expectOptionalToken(e)
      const n = []
      do {
        n.push(t.call(this))
      } while (this.expectOptionalToken(e))
      return n
    }
    advanceLexer() {
      const { maxTokens: e } = this._options,
        t = this._lexer.advance()
      if (t.kind !== Ee.EOF && (++this._tokenCounter, void 0 !== e && this._tokenCounter > e))
        throw fe(this._lexer.source, t.start, `Document contains more that ${e} tokens. Parsing aborted.`)
    }
  }
  function Xe(e) {
    const t = e.value
    return Ze(e.kind) + (null != t ? ` "${t}"` : '')
  }
  function Ze(e) {
    return (function (e) {
      return (
        e === Ee.BANG ||
        e === Ee.DOLLAR ||
        e === Ee.AMP ||
        e === Ee.PAREN_L ||
        e === Ee.PAREN_R ||
        e === Ee.DOT ||
        e === Ee.SPREAD ||
        e === Ee.COLON ||
        e === Ee.EQUALS ||
        e === Ee.AT ||
        e === Ee.BRACKET_L ||
        e === Ee.BRACKET_R ||
        e === Ee.BRACE_L ||
        e === Ee.PIPE ||
        e === Ee.BRACE_R
      )
    })(e)
      ? `"${e}"`
      : e
  }
  const et = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g
  function tt(e) {
    return nt[e.charCodeAt(0)]
  }
  const nt = [
      '\\u0000',
      '\\u0001',
      '\\u0002',
      '\\u0003',
      '\\u0004',
      '\\u0005',
      '\\u0006',
      '\\u0007',
      '\\b',
      '\\t',
      '\\n',
      '\\u000B',
      '\\f',
      '\\r',
      '\\u000E',
      '\\u000F',
      '\\u0010',
      '\\u0011',
      '\\u0012',
      '\\u0013',
      '\\u0014',
      '\\u0015',
      '\\u0016',
      '\\u0017',
      '\\u0018',
      '\\u0019',
      '\\u001A',
      '\\u001B',
      '\\u001C',
      '\\u001D',
      '\\u001E',
      '\\u001F',
      '',
      '',
      '\\"',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '\\\\',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '\\u007F',
      '\\u0080',
      '\\u0081',
      '\\u0082',
      '\\u0083',
      '\\u0084',
      '\\u0085',
      '\\u0086',
      '\\u0087',
      '\\u0088',
      '\\u0089',
      '\\u008A',
      '\\u008B',
      '\\u008C',
      '\\u008D',
      '\\u008E',
      '\\u008F',
      '\\u0090',
      '\\u0091',
      '\\u0092',
      '\\u0093',
      '\\u0094',
      '\\u0095',
      '\\u0096',
      '\\u0097',
      '\\u0098',
      '\\u0099',
      '\\u009A',
      '\\u009B',
      '\\u009C',
      '\\u009D',
      '\\u009E',
      '\\u009F',
    ],
    rt = Object.freeze({})
  function it(e, t, n = he) {
    const r = new Map()
    for (const e of Object.values(be)) r.set(e, at(t, e))
    let i,
      a,
      o,
      s = Array.isArray(e),
      l = [e],
      u = -1,
      c = [],
      f = e
    const d = [],
      p = []
    do {
      u++
      const e = u === l.length,
        y = e && 0 !== c.length
      if (e) {
        if (((a = 0 === p.length ? void 0 : d[d.length - 1]), (f = o), (o = p.pop()), y))
          if (s) {
            f = f.slice()
            let e = 0
            for (const [t, n] of c) {
              const r = t - e
              null === n ? (f.splice(r, 1), e++) : (f[r] = n)
            }
          } else {
            f = { ...f }
            for (const [e, t] of c) f[e] = t
          }
        ;((u = i.index), (l = i.keys), (c = i.edits), (s = i.inArray), (i = i.prev))
      } else if (o) {
        if (((a = s ? u : l[u]), (f = o[a]), null == f)) continue
        d.push(a)
      }
      let g
      if (!Array.isArray(f)) {
        var h, m
        ve(f) || ne(!1, `Invalid AST Node: ${Ke(f)}.`)
        const n = e
          ? null === (h = r.get(f.kind)) || void 0 === h
            ? void 0
            : h.leave
          : null === (m = r.get(f.kind)) || void 0 === m
            ? void 0
            : m.enter
        if (((g = null == n ? void 0 : n.call(t, f, a, o, d, p)), g === rt)) break
        if (!1 === g) {
          if (!e) {
            d.pop()
            continue
          }
        } else if (void 0 !== g && (c.push([a, g]), !e)) {
          if (!ve(g)) {
            d.pop()
            continue
          }
          f = g
        }
      }
      var v
      if ((void 0 === g && y && c.push([a, f]), e)) d.pop()
      else
        ((i = { inArray: s, index: u, keys: l, edits: c, prev: i }),
          (s = Array.isArray(f)),
          (l = s ? f : null !== (v = n[f.kind]) && void 0 !== v ? v : []),
          (u = -1),
          (c = []),
          o && p.push(o),
          (o = f))
    } while (void 0 !== i)
    return 0 !== c.length ? c[c.length - 1][1] : e
  }
  function at(e, t) {
    const n = e[t]
    return 'object' == typeof n
      ? n
      : 'function' == typeof n
        ? { enter: n, leave: void 0 }
        : { enter: e.enter, leave: e.leave }
  }
  const ot = {
    Name: { leave: (e) => e.value },
    Variable: { leave: (e) => '$' + e.name },
    Document: { leave: (e) => st(e.definitions, '\n\n') },
    OperationDefinition: {
      leave(e) {
        const t = ft(e.variableDefinitions)
            ? ut('(\n', st(e.variableDefinitions, '\n'), '\n)')
            : ut('(', st(e.variableDefinitions, ', '), ')'),
          n = ut('', e.description, '\n') + st([e.operation, st([e.name, t]), st(e.directives, ' ')], ' ')
        return ('query' === n ? '' : n + ' ') + e.selectionSet
      },
    },
    VariableDefinition: {
      leave: ({ variable: e, type: t, defaultValue: n, directives: r, description: i }) =>
        ut('', i, '\n') + e + ': ' + t + ut(' = ', n) + ut(' ', st(r, ' ')),
    },
    SelectionSet: { leave: ({ selections: e }) => lt(e) },
    Field: {
      leave({ alias: e, name: t, arguments: n, directives: r, selectionSet: i }) {
        const a = ut('', e, ': ') + t
        let o = a + ut('(', st(n, ', '), ')')
        return (o.length > 80 && (o = a + ut('(\n', ct(st(n, '\n')), '\n)')), st([o, st(r, ' '), i], ' '))
      },
    },
    Argument: { leave: ({ name: e, value: t }) => e + ': ' + t },
    FragmentSpread: { leave: ({ name: e, directives: t }) => '...' + e + ut(' ', st(t, ' ')) },
    InlineFragment: {
      leave: ({ typeCondition: e, directives: t, selectionSet: n }) => st(['...', ut('on ', e), st(t, ' '), n], ' '),
    },
    FragmentDefinition: {
      leave: ({ name: e, typeCondition: t, variableDefinitions: n, directives: r, selectionSet: i, description: a }) =>
        ut('', a, '\n') + `fragment ${e}${ut('(', st(n, ', '), ')')} ` + `on ${t} ${ut('', st(r, ' '), ' ')}` + i,
    },
    IntValue: { leave: ({ value: e }) => e },
    FloatValue: { leave: ({ value: e }) => e },
    StringValue: {
      leave: ({ value: e, block: t }) =>
        t
          ? (function (e) {
              const t = e.replace(/"""/g, '\\"""'),
                n = t.split(/\r\n|[\n\r]/g),
                r = 1 === n.length,
                i = n.length > 1 && n.slice(1).every((e) => 0 === e.length || we(e.charCodeAt(0))),
                a = t.endsWith('\\"""'),
                o = e.endsWith('"') && !a,
                s = e.endsWith('\\'),
                l = o || s,
                u = !r || e.length > 70 || l || i || a
              let c = ''
              const f = r && we(e.charCodeAt(0))
              return (((u && !f) || i) && (c += '\n'), (c += t), (u || l) && (c += '\n'), '"""' + c + '"""')
            })(e)
          : `"${e.replace(et, tt)}"`,
    },
    BooleanValue: { leave: ({ value: e }) => (e ? 'true' : 'false') },
    NullValue: { leave: () => 'null' },
    EnumValue: { leave: ({ value: e }) => e },
    ListValue: { leave: ({ values: e }) => '[' + st(e, ', ') + ']' },
    ObjectValue: { leave: ({ fields: e }) => '{' + st(e, ', ') + '}' },
    ObjectField: { leave: ({ name: e, value: t }) => e + ': ' + t },
    Directive: { leave: ({ name: e, arguments: t }) => '@' + e + ut('(', st(t, ', '), ')') },
    NamedType: { leave: ({ name: e }) => e },
    ListType: { leave: ({ type: e }) => '[' + e + ']' },
    NonNullType: { leave: ({ type: e }) => e + '!' },
    SchemaDefinition: {
      leave: ({ description: e, directives: t, operationTypes: n }) =>
        ut('', e, '\n') + st(['schema', st(t, ' '), lt(n)], ' '),
    },
    OperationTypeDefinition: { leave: ({ operation: e, type: t }) => e + ': ' + t },
    ScalarTypeDefinition: {
      leave: ({ description: e, name: t, directives: n }) => ut('', e, '\n') + st(['scalar', t, st(n, ' ')], ' '),
    },
    ObjectTypeDefinition: {
      leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) =>
        ut('', e, '\n') + st(['type', t, ut('implements ', st(n, ' & ')), st(r, ' '), lt(i)], ' '),
    },
    FieldDefinition: {
      leave: ({ description: e, name: t, arguments: n, type: r, directives: i }) =>
        ut('', e, '\n') +
        t +
        (ft(n) ? ut('(\n', ct(st(n, '\n')), '\n)') : ut('(', st(n, ', '), ')')) +
        ': ' +
        r +
        ut(' ', st(i, ' ')),
    },
    InputValueDefinition: {
      leave: ({ description: e, name: t, type: n, defaultValue: r, directives: i }) =>
        ut('', e, '\n') + st([t + ': ' + n, ut('= ', r), st(i, ' ')], ' '),
    },
    InterfaceTypeDefinition: {
      leave: ({ description: e, name: t, interfaces: n, directives: r, fields: i }) =>
        ut('', e, '\n') + st(['interface', t, ut('implements ', st(n, ' & ')), st(r, ' '), lt(i)], ' '),
    },
    UnionTypeDefinition: {
      leave: ({ description: e, name: t, directives: n, types: r }) =>
        ut('', e, '\n') + st(['union', t, st(n, ' '), ut('= ', st(r, ' | '))], ' '),
    },
    EnumTypeDefinition: {
      leave: ({ description: e, name: t, directives: n, values: r }) =>
        ut('', e, '\n') + st(['enum', t, st(n, ' '), lt(r)], ' '),
    },
    EnumValueDefinition: {
      leave: ({ description: e, name: t, directives: n }) => ut('', e, '\n') + st([t, st(n, ' ')], ' '),
    },
    InputObjectTypeDefinition: {
      leave: ({ description: e, name: t, directives: n, fields: r }) =>
        ut('', e, '\n') + st(['input', t, st(n, ' '), lt(r)], ' '),
    },
    DirectiveDefinition: {
      leave: ({ description: e, name: t, arguments: n, repeatable: r, locations: i }) =>
        ut('', e, '\n') +
        'directive @' +
        t +
        (ft(n) ? ut('(\n', ct(st(n, '\n')), '\n)') : ut('(', st(n, ', '), ')')) +
        (r ? ' repeatable' : '') +
        ' on ' +
        st(i, ' | '),
    },
    SchemaExtension: { leave: ({ directives: e, operationTypes: t }) => st(['extend schema', st(e, ' '), lt(t)], ' ') },
    ScalarTypeExtension: { leave: ({ name: e, directives: t }) => st(['extend scalar', e, st(t, ' ')], ' ') },
    ObjectTypeExtension: {
      leave: ({ name: e, interfaces: t, directives: n, fields: r }) =>
        st(['extend type', e, ut('implements ', st(t, ' & ')), st(n, ' '), lt(r)], ' '),
    },
    InterfaceTypeExtension: {
      leave: ({ name: e, interfaces: t, directives: n, fields: r }) =>
        st(['extend interface', e, ut('implements ', st(t, ' & ')), st(n, ' '), lt(r)], ' '),
    },
    UnionTypeExtension: {
      leave: ({ name: e, directives: t, types: n }) => st(['extend union', e, st(t, ' '), ut('= ', st(n, ' | '))], ' '),
    },
    EnumTypeExtension: {
      leave: ({ name: e, directives: t, values: n }) => st(['extend enum', e, st(t, ' '), lt(n)], ' '),
    },
    InputObjectTypeExtension: {
      leave: ({ name: e, directives: t, fields: n }) => st(['extend input', e, st(t, ' '), lt(n)], ' '),
    },
    TypeCoordinate: { leave: ({ name: e }) => e },
    MemberCoordinate: { leave: ({ name: e, memberName: t }) => st([e, ut('.', t)]) },
    ArgumentCoordinate: {
      leave: ({ name: e, fieldName: t, argumentName: n }) => st([e, ut('.', t), ut('(', n, ':)')]),
    },
    DirectiveCoordinate: { leave: ({ name: e }) => st(['@', e]) },
    DirectiveArgumentCoordinate: { leave: ({ name: e, argumentName: t }) => st(['@', e, ut('(', t, ':)')]) },
  }
  function st(e, t = '') {
    var n
    return null !== (n = null == e ? void 0 : e.filter((e) => e).join(t)) && void 0 !== n ? n : ''
  }
  function lt(e) {
    return ut('{\n', ct(st(e, '\n')), '\n}')
  }
  function ut(e, t, n = '') {
    return null != t && '' !== t ? e + t + n : ''
  }
  function ct(e) {
    return ut('  ', e.replace(/\n/g, '\n  '))
  }
  function ft(e) {
    var t
    return null !== (t = null == e ? void 0 : e.some((e) => e.includes('\n'))) && void 0 !== t && t
  }
  function dt(e) {
    return e.kind === be.FIELD || e.kind === be.FRAGMENT_SPREAD || e.kind === be.INLINE_FRAGMENT
  }
  function pt(e, t) {
    var n = e.directives
    return (
      !n ||
      !n.length ||
      (function (e) {
        var t = []
        e &&
          e.length &&
          e.forEach(function (e) {
            if (
              (function (e) {
                var t = e.name.value
                return 'skip' === t || 'include' === t
              })(e)
            ) {
              var n = e.arguments,
                r = e.name.value
              W(n && 1 === n.length, 107, r)
              var i = n[0]
              W(i.name && 'if' === i.name.value, 108, r)
              var a = i.value
              ;(W(a && ('Variable' === a.kind || 'BooleanValue' === a.kind), 109, r),
                t.push({ directive: e, ifArgument: i }))
            }
          })
        return t
      })(n).every(function (e) {
        var n = e.directive,
          r = e.ifArgument,
          i = !1
        return (
          'Variable' === r.value.kind
            ? ((i = t && t[r.value.name.value]), W(void 0 !== i, 106, n.name.value))
            : (i = r.value.value),
          'skip' === n.name.value ? !i : i
        )
      })
    )
  }
  function ht(e, t, n) {
    var r = new Set(e),
      i = r.size
    return (
      it(t, {
        Directive: function (e) {
          if (r.delete(e.name.value) && (!n || !r.size)) return rt
        },
      }),
      n ? !r.size : r.size < i
    )
  }
  function mt(e) {
    return e && ht(['client', 'export'], e, !0)
  }
  function vt(e) {
    var t,
      n,
      r =
        null === (t = e.directives) || void 0 === t
          ? void 0
          : t.find(function (e) {
              return 'unmask' === e.name.value
            })
    if (!r) return 'mask'
    var i =
      null === (n = r.arguments) || void 0 === n
        ? void 0
        : n.find(function (e) {
            return 'mode' === e.name.value
          })
    return (
      !1 !== globalThis.__DEV__ &&
        i &&
        (i.value.kind === be.VARIABLE
          ? !1 !== globalThis.__DEV__ && W.warn(110)
          : i.value.kind !== be.STRING
            ? !1 !== globalThis.__DEV__ && W.warn(111)
            : 'migrate' !== i.value.value && !1 !== globalThis.__DEV__ && W.warn(112, i.value.value)),
      i && 'value' in i.value && 'migrate' === i.value.value ? 'migrate' : 'unmask'
    )
  }
  const yt = () => Object.create(null),
    { forEach: gt, slice: bt } = Array.prototype,
    { hasOwnProperty: Et } = Object.prototype
  class wt {
    constructor(e = !0, t = yt) {
      ;((this.weakness = e), (this.makeData = t))
    }
    lookup() {
      return this.lookupArray(arguments)
    }
    lookupArray(e) {
      let t = this
      return (
        gt.call(e, (e) => (t = t.getChildTrie(e))),
        Et.call(t, 'data') ? t.data : (t.data = this.makeData(bt.call(e)))
      )
    }
    peek() {
      return this.peekArray(arguments)
    }
    peekArray(e) {
      let t = this
      for (let n = 0, r = e.length; t && n < r; ++n) {
        const r = t.mapFor(e[n], !1)
        t = r && r.get(e[n])
      }
      return t && t.data
    }
    remove() {
      return this.removeArray(arguments)
    }
    removeArray(e) {
      let t
      if (e.length) {
        const n = e[0],
          r = this.mapFor(n, !1),
          i = r && r.get(n)
        i && ((t = i.removeArray(bt.call(e, 1))), i.data || i.weak || (i.strong && i.strong.size) || r.delete(n))
      } else ((t = this.data), delete this.data)
      return t
    }
    getChildTrie(e) {
      const t = this.mapFor(e, !0)
      let n = t.get(e)
      return (n || t.set(e, (n = new wt(this.weakness, this.makeData))), n)
    }
    mapFor(e, t) {
      return this.weakness &&
        (function (e) {
          switch (typeof e) {
            case 'object':
              if (null === e) break
            case 'function':
              return !0
          }
          return !1
        })(e)
        ? this.weak || (t ? (this.weak = new WeakMap()) : void 0)
        : this.strong || (t ? (this.strong = new Map()) : void 0)
    }
  }
  var _t =
      'ReactNative' ==
      j(function () {
        return navigator.product
      }),
    kt = 'function' == typeof WeakMap && !(_t && !global.HermesInternal),
    St = 'function' == typeof WeakSet,
    Tt = 'function' == typeof Symbol && 'function' == typeof Symbol.for,
    xt = Tt && Symbol.asyncIterator,
    Ot =
      'function' ==
      typeof j(function () {
        return window.document.createElement
      }),
    Ct =
      j(function () {
        return navigator.userAgent.indexOf('jsdom') >= 0
      }) || !1,
    Rt = (Ot || _t) && !Ct
  function Nt(e) {
    return null !== e && 'object' == typeof e
  }
  function Dt(e, t) {
    var n = t,
      r = []
    return (
      e.definitions.forEach(function (e) {
        if ('OperationDefinition' === e.kind)
          throw K(113, e.operation, e.name ? " named '".concat(e.name.value, "'") : '')
        'FragmentDefinition' === e.kind && r.push(e)
      }),
      void 0 === n && (W(1 === r.length, 114, r.length), (n = r[0].name.value)),
      x(x({}, e), {
        definitions: N(
          [
            {
              kind: 'OperationDefinition',
              operation: 'query',
              selectionSet: {
                kind: 'SelectionSet',
                selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: n } }],
              },
            },
          ],
          e.definitions,
          !0,
        ),
      })
    )
  }
  function It(e) {
    void 0 === e && (e = [])
    var t = {}
    return (
      e.forEach(function (e) {
        t[e.name.value] = e
      }),
      t
    )
  }
  function Pt(e, t) {
    switch (e.kind) {
      case 'InlineFragment':
        return e
      case 'FragmentSpread':
        var n = e.name.value
        if ('function' == typeof t) return t(n)
        var r = t && t[n]
        return (W(r, 115, n), r || null)
      default:
        return null
    }
  }
  function Ft() {}
  class At {
    constructor(e = 1 / 0, t = Ft) {
      ;((this.max = e), (this.dispose = t), (this.map = new Map()), (this.newest = null), (this.oldest = null))
    }
    has(e) {
      return this.map.has(e)
    }
    get(e) {
      const t = this.getNode(e)
      return t && t.value
    }
    get size() {
      return this.map.size
    }
    getNode(e) {
      const t = this.map.get(e)
      if (t && t !== this.newest) {
        const { older: e, newer: n } = t
        ;(n && (n.older = e),
          e && (e.newer = n),
          (t.older = this.newest),
          (t.older.newer = t),
          (t.newer = null),
          (this.newest = t),
          t === this.oldest && (this.oldest = n))
      }
      return t
    }
    set(e, t) {
      let n = this.getNode(e)
      return n
        ? (n.value = t)
        : ((n = { key: e, value: t, newer: null, older: this.newest }),
          this.newest && (this.newest.newer = n),
          (this.newest = n),
          (this.oldest = this.oldest || n),
          this.map.set(e, n),
          n.value)
    }
    clean() {
      for (; this.oldest && this.map.size > this.max; ) this.delete(this.oldest.key)
    }
    delete(e) {
      const t = this.map.get(e)
      return (
        !!t &&
        (t === this.newest && (this.newest = t.older),
        t === this.oldest && (this.oldest = t.newer),
        t.newer && (t.newer.older = t.older),
        t.older && (t.older.newer = t.newer),
        this.map.delete(e),
        this.dispose(t.value, e),
        !0)
      )
    }
  }
  function Mt() {}
  const Lt = Mt,
    qt =
      'undefined' != typeof WeakRef
        ? WeakRef
        : function (e) {
            return { deref: () => e }
          },
    zt = 'undefined' != typeof WeakMap ? WeakMap : Map,
    jt =
      'undefined' != typeof FinalizationRegistry
        ? FinalizationRegistry
        : function () {
            return { register: Mt, unregister: Mt }
          }
  class Vt {
    constructor(e = 1 / 0, t = Lt) {
      ;((this.max = e),
        (this.dispose = t),
        (this.map = new zt()),
        (this.newest = null),
        (this.oldest = null),
        (this.unfinalizedNodes = new Set()),
        (this.finalizationScheduled = !1),
        (this.size = 0),
        (this.finalize = () => {
          const e = this.unfinalizedNodes.values()
          for (let t = 0; t < 10024; t++) {
            const t = e.next().value
            if (!t) break
            this.unfinalizedNodes.delete(t)
            const n = t.key
            ;(delete t.key, (t.keyRef = new qt(n)), this.registry.register(n, t, t))
          }
          this.unfinalizedNodes.size > 0 ? queueMicrotask(this.finalize) : (this.finalizationScheduled = !1)
        }),
        (this.registry = new jt(this.deleteNode.bind(this))))
    }
    has(e) {
      return this.map.has(e)
    }
    get(e) {
      const t = this.getNode(e)
      return t && t.value
    }
    getNode(e) {
      const t = this.map.get(e)
      if (t && t !== this.newest) {
        const { older: e, newer: n } = t
        ;(n && (n.older = e),
          e && (e.newer = n),
          (t.older = this.newest),
          (t.older.newer = t),
          (t.newer = null),
          (this.newest = t),
          t === this.oldest && (this.oldest = n))
      }
      return t
    }
    set(e, t) {
      let n = this.getNode(e)
      return n
        ? (n.value = t)
        : ((n = { key: e, value: t, newer: null, older: this.newest }),
          this.newest && (this.newest.newer = n),
          (this.newest = n),
          (this.oldest = this.oldest || n),
          this.scheduleFinalization(n),
          this.map.set(e, n),
          this.size++,
          n.value)
    }
    clean() {
      for (; this.oldest && this.size > this.max; ) this.deleteNode(this.oldest)
    }
    deleteNode(e) {
      ;(e === this.newest && (this.newest = e.older),
        e === this.oldest && (this.oldest = e.newer),
        e.newer && (e.newer.older = e.older),
        e.older && (e.older.newer = e.newer),
        this.size--)
      const t = e.key || (e.keyRef && e.keyRef.deref())
      ;(this.dispose(e.value, t),
        e.keyRef ? this.registry.unregister(e) : this.unfinalizedNodes.delete(e),
        t && this.map.delete(t))
    }
    delete(e) {
      const t = this.map.get(e)
      return !!t && (this.deleteNode(t), !0)
    }
    scheduleFinalization(e) {
      ;(this.unfinalizedNodes.add(e),
        this.finalizationScheduled || ((this.finalizationScheduled = !0), queueMicrotask(this.finalize)))
    }
  }
  var Qt = new WeakSet()
  function $t(e) {
    e.size <= (e.max || -1) ||
      Qt.has(e) ||
      (Qt.add(e),
      setTimeout(function () {
        ;(e.clean(), Qt.delete(e))
      }, 100))
  }
  var Ut = function (e, t) {
      var n = new Vt(e, t)
      return (
        (n.set = function (e, t) {
          var n = Vt.prototype.set.call(this, e, t)
          return ($t(this), n)
        }),
        n
      )
    },
    Bt = function (e, t) {
      var n = new At(e, t)
      return (
        (n.set = function (e, t) {
          var n = At.prototype.set.call(this, e, t)
          return ($t(this), n)
        }),
        n
      )
    },
    Wt = Symbol.for('apollo.cacheSize'),
    Kt = x({}, V[Wt]),
    Ht = {}
  function Gt(e, t) {
    Ht[e] = t
  }
  var Yt =
      !1 !== globalThis.__DEV__
        ? function () {
            var e, t, n, r, i
            if (!1 === globalThis.__DEV__) throw new Error('only supported in development mode')
            return {
              limits: Zt(),
              sizes: x(
                {
                  print: null === (e = Ht.print) || void 0 === e ? void 0 : e.call(Ht),
                  parser: null === (t = Ht.parser) || void 0 === t ? void 0 : t.call(Ht),
                  canonicalStringify: null === (n = Ht.canonicalStringify) || void 0 === n ? void 0 : n.call(Ht),
                  links: on(this.link),
                  queryManager: {
                    getDocumentInfo: this.queryManager.transformCache.size,
                    documentTransforms: rn(this.queryManager.documentTransform),
                  },
                },
                null === (i = (r = this.cache).getMemoryInternals) || void 0 === i ? void 0 : i.call(r),
              ),
            }
          }
        : void 0,
    Jt =
      !1 !== globalThis.__DEV__
        ? function () {
            var e = this.config.fragments
            return x(x({}, en.apply(this)), {
              addTypenameDocumentTransform: rn(this.addTypenameTransform),
              inMemoryCache: {
                executeSelectionSet: tn(this.storeReader.executeSelectionSet),
                executeSubSelectedArray: tn(this.storeReader.executeSubSelectedArray),
                maybeBroadcastWatch: tn(this.maybeBroadcastWatch),
              },
              fragmentRegistry: {
                findFragmentSpreads: tn(null == e ? void 0 : e.findFragmentSpreads),
                lookup: tn(null == e ? void 0 : e.lookup),
                transform: tn(null == e ? void 0 : e.transform),
              },
            })
          }
        : void 0,
    Xt = !1 !== globalThis.__DEV__ ? en : void 0
  function Zt() {
    return Object.fromEntries(
      Object.entries({
        'parser': 1e3,
        'canonicalStringify': 1e3,
        'print': 2e3,
        'documentTransform.cache': 2e3,
        'queryManager.getDocumentInfo': 2e3,
        'PersistedQueryLink.persistedQueryHashes': 2e3,
        'fragmentRegistry.transform': 2e3,
        'fragmentRegistry.lookup': 1e3,
        'fragmentRegistry.findFragmentSpreads': 4e3,
        'cache.fragmentQueryDocuments': 1e3,
        'removeTypenameFromVariables.getVariableDefinitions': 2e3,
        'inMemoryCache.maybeBroadcastWatch': 5e3,
        'inMemoryCache.executeSelectionSet': 5e4,
        'inMemoryCache.executeSubSelectedArray': 1e4,
      }).map(function (e) {
        var t = e[0],
          n = e[1]
        return [t, Kt[t] || n]
      }),
    )
  }
  function en() {
    return { cache: { fragmentQueryDocuments: tn(this.getFragmentDoc) } }
  }
  function tn(e) {
    return (function (e) {
      return !!e && 'dirtyKey' in e
    })(e)
      ? e.size
      : void 0
  }
  function nn(e) {
    return null != e
  }
  function rn(e) {
    return an(e).map(function (e) {
      return { cache: e }
    })
  }
  function an(e) {
    return e
      ? N(
          N([tn(null == e ? void 0 : e.performWork)], an(null == e ? void 0 : e.left), !0),
          an(null == e ? void 0 : e.right),
          !0,
        ).filter(nn)
      : []
  }
  function on(e) {
    var t
    return e
      ? N(
          N(
            [null === (t = null == e ? void 0 : e.getMemoryInternals) || void 0 === t ? void 0 : t.call(e)],
            on(null == e ? void 0 : e.left),
            !0,
          ),
          on(null == e ? void 0 : e.right),
          !0,
        ).filter(nn)
      : []
  }
  var sn,
    ln = Object.assign(
      function (e) {
        return JSON.stringify(e, un)
      },
      {
        reset: function () {
          sn = new Bt(Kt.canonicalStringify || 1e3)
        },
      },
    )
  function un(e, t) {
    if (t && 'object' == typeof t) {
      var n = Object.getPrototypeOf(t)
      if (n === Object.prototype || null === n) {
        var r = Object.keys(t)
        if (r.every(cn)) return t
        var i = JSON.stringify(r),
          a = sn.get(i)
        if (!a) {
          r.sort()
          var o = JSON.stringify(r)
          ;((a = sn.get(o) || r), sn.set(i, a), sn.set(o, a))
        }
        var s = Object.create(n)
        return (
          a.forEach(function (e) {
            s[e] = t[e]
          }),
          s
        )
      }
    }
    return t
  }
  function cn(e, t, n) {
    return 0 === t || n[t - 1] <= e
  }
  function fn(e) {
    return { __ref: String(e) }
  }
  function dn(e) {
    return Boolean(e && 'object' == typeof e && 'string' == typeof e.__ref)
  }
  function pn(e, t, n, r) {
    if (
      (function (e) {
        return 'IntValue' === e.kind
      })(n) ||
      (function (e) {
        return 'FloatValue' === e.kind
      })(n)
    )
      e[t.value] = Number(n.value)
    else if (
      (function (e) {
        return 'BooleanValue' === e.kind
      })(n) ||
      (function (e) {
        return 'StringValue' === e.kind
      })(n)
    )
      e[t.value] = n.value
    else if (
      (function (e) {
        return 'ObjectValue' === e.kind
      })(n)
    ) {
      var i = {}
      ;(n.fields.map(function (e) {
        return pn(i, e.name, e.value, r)
      }),
        (e[t.value] = i))
    } else if (
      (function (e) {
        return 'Variable' === e.kind
      })(n)
    ) {
      var a = (r || {})[n.name.value]
      e[t.value] = a
    } else if (
      (function (e) {
        return 'ListValue' === e.kind
      })(n)
    )
      e[t.value] = n.values.map(function (e) {
        var n = {}
        return (pn(n, t, e, r), n[t.value])
      })
    else if (
      (function (e) {
        return 'EnumValue' === e.kind
      })(n)
    )
      e[t.value] = n.value
    else {
      if (
        !(function (e) {
          return 'NullValue' === e.kind
        })(n)
      )
        throw K(124, t.value, n.kind)
      e[t.value] = null
    }
  }
  ;(!1 !== globalThis.__DEV__ &&
    Gt('canonicalStringify', function () {
      return sn.size
    }),
    ln.reset())
  var hn = ['connection', 'include', 'skip', 'client', 'rest', 'export', 'nonreactive'],
    mn = ln,
    vn = Object.assign(
      function (e, t, n) {
        if (t && n && n.connection && n.connection.key) {
          if (n.connection.filter && n.connection.filter.length > 0) {
            var r = n.connection.filter ? n.connection.filter : []
            r.sort()
            var i = {}
            return (
              r.forEach(function (e) {
                i[e] = t[e]
              }),
              ''.concat(n.connection.key, '(').concat(mn(i), ')')
            )
          }
          return n.connection.key
        }
        var a = e
        if (t) {
          var o = mn(t)
          a += '('.concat(o, ')')
        }
        return (
          n &&
            Object.keys(n).forEach(function (e) {
              ;-1 === hn.indexOf(e) &&
                (n[e] && Object.keys(n[e]).length
                  ? (a += '@'.concat(e, '(').concat(mn(n[e]), ')'))
                  : (a += '@'.concat(e)))
            }),
          a
        )
      },
      {
        setStringify: function (e) {
          var t = mn
          return ((mn = e), t)
        },
      },
    )
  function yn(e, t) {
    if (e.arguments && e.arguments.length) {
      var n = {}
      return (
        e.arguments.forEach(function (e) {
          var r = e.name,
            i = e.value
          return pn(n, r, i, t)
        }),
        n
      )
    }
    return null
  }
  function gn(e) {
    return e.alias ? e.alias.value : e.name.value
  }
  function bn(e, t, n) {
    for (var r, i = 0, a = t.selections; i < a.length; i++) {
      if (En((l = a[i]))) {
        if ('__typename' === l.name.value) return e[gn(l)]
      } else r ? r.push(l) : (r = [l])
    }
    if ('string' == typeof e.__typename) return e.__typename
    if (r)
      for (var o = 0, s = r; o < s.length; o++) {
        var l,
          u = bn(e, Pt((l = s[o]), n).selectionSet, n)
        if ('string' == typeof u) return u
      }
  }
  function En(e) {
    return 'Field' === e.kind
  }
  function wn(e) {
    W(e && 'Document' === e.kind, 116)
    var t = e.definitions
      .filter(function (e) {
        return 'FragmentDefinition' !== e.kind
      })
      .map(function (e) {
        if ('OperationDefinition' !== e.kind) throw K(117, e.kind)
        return e
      })
    return (W(t.length <= 1, 118, t.length), e)
  }
  function _n(e) {
    return (
      wn(e),
      e.definitions.filter(function (e) {
        return 'OperationDefinition' === e.kind
      })[0]
    )
  }
  function kn(e) {
    return (
      e.definitions
        .filter(function (e) {
          return 'OperationDefinition' === e.kind && !!e.name
        })
        .map(function (e) {
          return e.name.value
        })[0] || null
    )
  }
  function Sn(e) {
    return e.definitions.filter(function (e) {
      return 'FragmentDefinition' === e.kind
    })
  }
  function Tn(e) {
    var t = _n(e)
    return (W(t && 'query' === t.operation, 119), t)
  }
  function xn(e) {
    ;(W('Document' === e.kind, 120), W(e.definitions.length <= 1, 121))
    var t = e.definitions[0]
    return (W('FragmentDefinition' === t.kind, 122), t)
  }
  function On(e) {
    var t
    wn(e)
    for (var n = 0, r = e.definitions; n < r.length; n++) {
      var i = r[n]
      if ('OperationDefinition' === i.kind) {
        var a = i.operation
        if ('query' === a || 'mutation' === a || 'subscription' === a) return i
      }
      'FragmentDefinition' !== i.kind || t || (t = i)
    }
    if (t) return t
    throw K(123)
  }
  function Cn(e) {
    var t = Object.create(null),
      n = e && e.variableDefinitions
    return (
      n &&
        n.length &&
        n.forEach(function (e) {
          e.defaultValue && pn(t, e.variable.name, e.defaultValue)
        }),
      t
    )
  }
  let Rn = null
  const Nn = {}
  let Dn = 1
  function In(e) {
    try {
      return e()
    } catch (e) {}
  }
  const Pn = '@wry/context:Slot',
    Fn = In(() => globalThis) || In(() => global) || Object.create(null),
    An =
      Fn[Pn] ||
      Array[Pn] ||
      (function (e) {
        try {
          Object.defineProperty(Fn, Pn, { value: e, enumerable: !1, writable: !1, configurable: !0 })
        } finally {
          return e
        }
      })(
        class {
          constructor() {
            this.id = ['slot', Dn++, Date.now(), Math.random().toString(36).slice(2)].join(':')
          }
          hasValue() {
            for (let e = Rn; e; e = e.parent)
              if (this.id in e.slots) {
                const t = e.slots[this.id]
                if (t === Nn) break
                return (e !== Rn && (Rn.slots[this.id] = t), !0)
              }
            return (Rn && (Rn.slots[this.id] = Nn), !1)
          }
          getValue() {
            if (this.hasValue()) return Rn.slots[this.id]
          }
          withValue(e, t, n, r) {
            const i = { __proto__: null, [this.id]: e },
              a = Rn
            Rn = { parent: a, slots: i }
            try {
              return t.apply(r, n)
            } finally {
              Rn = a
            }
          }
          static bind(e) {
            const t = Rn
            return function () {
              const n = Rn
              try {
                return ((Rn = t), e.apply(this, arguments))
              } finally {
                Rn = n
              }
            }
          }
          static noContext(e, t, n) {
            if (!Rn) return e.apply(n, t)
            {
              const r = Rn
              try {
                return ((Rn = null), e.apply(n, t))
              } finally {
                Rn = r
              }
            }
          }
        },
      ),
    { bind: Mn, noContext: Ln } = An,
    qn = new An(),
    { hasOwnProperty: zn } = Object.prototype,
    jn =
      Array.from ||
      function (e) {
        const t = []
        return (e.forEach((e) => t.push(e)), t)
      }
  function Vn(e) {
    const { unsubscribe: t } = e
    'function' == typeof t && ((e.unsubscribe = void 0), t())
  }
  const Qn = []
  function $n(e, t) {
    if (!e) throw new Error(t || 'assertion failure')
  }
  function Un(e, t) {
    const n = e.length
    return n > 0 && n === t.length && e[n - 1] === t[n - 1]
  }
  function Bn(e) {
    switch (e.length) {
      case 0:
        throw new Error('unknown value')
      case 1:
        return e[0]
      case 2:
        throw e[1]
    }
  }
  function Wn(e) {
    return e.slice(0)
  }
  class Kn {
    constructor(e) {
      ;((this.fn = e),
        (this.parents = new Set()),
        (this.childValues = new Map()),
        (this.dirtyChildren = null),
        (this.dirty = !0),
        (this.recomputing = !1),
        (this.value = []),
        (this.deps = null),
        ++Kn.count)
    }
    peek() {
      if (1 === this.value.length && !Yn(this)) return (Hn(this), this.value[0])
    }
    recompute(e) {
      return (
        $n(!this.recomputing, 'already recomputing'),
        Hn(this),
        Yn(this)
          ? (function (e, t) {
              ;(rr(e),
                qn.withValue(e, Gn, [e, t]),
                (function (e, t) {
                  if ('function' == typeof e.subscribe)
                    try {
                      ;(Vn(e), (e.unsubscribe = e.subscribe.apply(null, t)))
                    } catch (t) {
                      return (e.setDirty(), !1)
                    }
                  return !0
                })(e, t) &&
                  (function (e) {
                    if (((e.dirty = !1), Yn(e))) return
                    Xn(e)
                  })(e))
              return Bn(e.value)
            })(this, e)
          : Bn(this.value)
      )
    }
    setDirty() {
      this.dirty || ((this.dirty = !0), Jn(this), Vn(this))
    }
    dispose() {
      ;(this.setDirty(),
        rr(this),
        Zn(this, (e, t) => {
          ;(e.setDirty(), ir(e, this))
        }))
    }
    forget() {
      this.dispose()
    }
    dependOn(e) {
      ;(e.add(this), this.deps || (this.deps = Qn.pop() || new Set()), this.deps.add(e))
    }
    forgetDeps() {
      this.deps &&
        (jn(this.deps).forEach((e) => e.delete(this)), this.deps.clear(), Qn.push(this.deps), (this.deps = null))
    }
  }
  function Hn(e) {
    const t = qn.getValue()
    if (t) return (e.parents.add(t), t.childValues.has(e) || t.childValues.set(e, []), Yn(e) ? er(t, e) : tr(t, e), t)
  }
  function Gn(e, t) {
    e.recomputing = !0
    const { normalizeResult: n } = e
    let r
    ;(n && 1 === e.value.length && (r = Wn(e.value)), (e.value.length = 0))
    try {
      if (((e.value[0] = e.fn.apply(null, t)), n && r && !Un(r, e.value)))
        try {
          e.value[0] = n(e.value[0], r[0])
        } catch (e) {}
    } catch (t) {
      e.value[1] = t
    }
    e.recomputing = !1
  }
  function Yn(e) {
    return e.dirty || !(!e.dirtyChildren || !e.dirtyChildren.size)
  }
  function Jn(e) {
    Zn(e, er)
  }
  function Xn(e) {
    Zn(e, tr)
  }
  function Zn(e, t) {
    const n = e.parents.size
    if (n) {
      const r = jn(e.parents)
      for (let i = 0; i < n; ++i) t(r[i], e)
    }
  }
  function er(e, t) {
    ;($n(e.childValues.has(t)), $n(Yn(t)))
    const n = !Yn(e)
    if (e.dirtyChildren) {
      if (e.dirtyChildren.has(t)) return
    } else e.dirtyChildren = Qn.pop() || new Set()
    ;(e.dirtyChildren.add(t), n && Jn(e))
  }
  function tr(e, t) {
    ;($n(e.childValues.has(t)), $n(!Yn(t)))
    const n = e.childValues.get(t)
    ;(0 === n.length ? e.childValues.set(t, Wn(t.value)) : Un(n, t.value) || e.setDirty(), nr(e, t), Yn(e) || Xn(e))
  }
  function nr(e, t) {
    const n = e.dirtyChildren
    n && (n.delete(t), 0 === n.size && (Qn.length < 100 && Qn.push(n), (e.dirtyChildren = null)))
  }
  function rr(e) {
    ;(e.childValues.size > 0 &&
      e.childValues.forEach((t, n) => {
        ir(e, n)
      }),
      e.forgetDeps(),
      $n(null === e.dirtyChildren))
  }
  function ir(e, t) {
    ;(t.parents.delete(e), e.childValues.delete(t), nr(e, t))
  }
  Kn.count = 0
  const ar = { setDirty: !0, dispose: !0, forget: !0 }
  function or(e) {
    const t = new Map()
    function n(e) {
      const n = qn.getValue()
      if (n) {
        let r = t.get(e)
        ;(r || t.set(e, (r = new Set())), n.dependOn(r))
      }
    }
    return (
      (n.dirty = function (e, n) {
        const r = t.get(e)
        if (r) {
          const i = n && zn.call(ar, n) ? n : 'setDirty'
          ;(jn(r).forEach((e) => e[i]()), t.delete(e), Vn(r))
        }
      }),
      n
    )
  }
  let sr
  function lr(...e) {
    return (sr || (sr = new wt('function' == typeof WeakMap))).lookupArray(e)
  }
  const ur = new Set()
  function cr(
    e,
    {
      max: t = Math.pow(2, 16),
      keyArgs: n,
      makeCacheKey: r = lr,
      normalizeResult: i,
      subscribe: a,
      cache: o = At,
    } = Object.create(null),
  ) {
    const s = 'function' == typeof o ? new o(t, (e) => e.dispose()) : o,
      l = function () {
        const t = r.apply(null, n ? n.apply(null, arguments) : arguments)
        if (void 0 === t) return e.apply(null, arguments)
        let o = s.get(t)
        o || (s.set(t, (o = new Kn(e))), (o.normalizeResult = i), (o.subscribe = a), (o.forget = () => s.delete(t)))
        const l = o.recompute(Array.prototype.slice.call(arguments))
        return (s.set(t, o), ur.add(s), qn.hasValue() || (ur.forEach((e) => e.clean()), ur.clear()), l)
      }
    function u(e) {
      const t = e && s.get(e)
      t && t.setDirty()
    }
    function c(e) {
      const t = e && s.get(e)
      if (t) return t.peek()
    }
    function f(e) {
      return !!e && s.delete(e)
    }
    return (
      Object.defineProperty(l, 'size', { get: () => s.size, configurable: !1, enumerable: !1 }),
      Object.freeze((l.options = { max: t, keyArgs: n, makeCacheKey: r, normalizeResult: i, subscribe: a, cache: s })),
      (l.dirtyKey = u),
      (l.dirty = function () {
        u(r.apply(null, arguments))
      }),
      (l.peekKey = c),
      (l.peek = function () {
        return c(r.apply(null, arguments))
      }),
      (l.forgetKey = f),
      (l.forget = function () {
        return f(r.apply(null, arguments))
      }),
      (l.makeCacheKey = r),
      (l.getKey = n
        ? function () {
            return r.apply(null, n.apply(null, arguments))
          }
        : r),
      Object.freeze(l)
    )
  }
  function fr(e) {
    return e
  }
  var dr,
    pr = (function () {
      function e(e, t) {
        ;(void 0 === t && (t = Object.create(null)),
          (this.resultCache = St ? new WeakSet() : new Set()),
          (this.transform = e),
          t.getCacheKey && (this.getCacheKey = t.getCacheKey),
          (this.cached = !1 !== t.cache),
          this.resetCache())
      }
      return (
        (e.prototype.getCacheKey = function (e) {
          return [e]
        }),
        (e.identity = function () {
          return new e(fr, { cache: !1 })
        }),
        (e.split = function (t, n, r) {
          return (
            void 0 === r && (r = e.identity()),
            Object.assign(
              new e(
                function (e) {
                  return (t(e) ? n : r).transformDocument(e)
                },
                { cache: !1 },
              ),
              { left: n, right: r },
            )
          )
        }),
        (e.prototype.resetCache = function () {
          var t = this
          if (this.cached) {
            var n = new wt(kt)
            this.performWork = cr(e.prototype.performWork.bind(this), {
              makeCacheKey: function (e) {
                var r = t.getCacheKey(e)
                if (r) return (W(Array.isArray(r), 105), n.lookupArray(r))
              },
              max: Kt['documentTransform.cache'],
              cache: Vt,
            })
          }
        }),
        (e.prototype.performWork = function (e) {
          return (wn(e), this.transform(e))
        }),
        (e.prototype.transformDocument = function (e) {
          if (this.resultCache.has(e)) return e
          var t = this.performWork(e)
          return (this.resultCache.add(t), t)
        }),
        (e.prototype.concat = function (t) {
          var n = this
          return Object.assign(
            new e(
              function (e) {
                return t.transformDocument(n.transformDocument(e))
              },
              { cache: !1 },
            ),
            { left: this, right: t },
          )
        }),
        e
      )
    })(),
    hr = Object.assign(
      function (e) {
        var t = dr.get(e)
        return (
          t ||
            ((t = (function (e) {
              return it(e, ot)
            })(e)),
            dr.set(e, t)),
          t
        )
      },
      {
        reset: function () {
          dr = new Ut(Kt.print || 2e3)
        },
      },
    )
  ;(hr.reset(),
    !1 !== globalThis.__DEV__ &&
      Gt('print', function () {
        return dr ? dr.size : 0
      }))
  var mr = Array.isArray
  function vr(e) {
    return Array.isArray(e) && e.length > 0
  }
  var yr = { kind: be.FIELD, name: { kind: be.NAME, value: '__typename' } }
  function gr(e, t) {
    return (
      !e ||
      e.selectionSet.selections.every(function (e) {
        return e.kind === be.FRAGMENT_SPREAD && gr(t[e.name.value], t)
      })
    )
  }
  function br(e) {
    return gr(_n(e) || xn(e), It(Sn(e))) ? null : e
  }
  function Er(e) {
    var t = new Map()
    return function (n) {
      void 0 === n && (n = e)
      var r = t.get(n)
      return (r || t.set(n, (r = { variables: new Set(), fragmentSpreads: new Set() })), r)
    }
  }
  function wr(e, t) {
    wn(t)
    for (
      var n = Er(''),
        r = Er(''),
        i = function (e) {
          for (var t = 0, i = void 0; t < e.length && (i = e[t]); ++t)
            if (!mr(i)) {
              if (i.kind === be.OPERATION_DEFINITION) return n(i.name && i.name.value)
              if (i.kind === be.FRAGMENT_DEFINITION) return r(i.name.value)
            }
          return (!1 !== globalThis.__DEV__ && W.error(125), null)
        },
        a = 0,
        o = t.definitions.length - 1;
      o >= 0;
      --o
    )
      t.definitions[o].kind === be.OPERATION_DEFINITION && ++a
    var s,
      l,
      u,
      c =
        ((s = e),
        (l = new Map()),
        (u = new Map()),
        s.forEach(function (e) {
          e && (e.name ? l.set(e.name, e) : e.test && u.set(e.test, e))
        }),
        function (e) {
          var t = l.get(e.name.value)
          return (
            !t &&
              u.size &&
              u.forEach(function (n, r) {
                r(e) && (t = n)
              }),
            t
          )
        }),
      f = function (e) {
        return (
          vr(e) &&
          e.map(c).some(function (e) {
            return e && e.remove
          })
        )
      },
      d = new Map(),
      p = !1,
      h = {
        enter: function (e) {
          if (f(e.directives)) return ((p = !0), null)
        },
      },
      m = it(t, {
        Field: h,
        InlineFragment: h,
        VariableDefinition: {
          enter: function () {
            return !1
          },
        },
        Variable: {
          enter: function (e, t, n, r, a) {
            var o = i(a)
            o && o.variables.add(e.name.value)
          },
        },
        FragmentSpread: {
          enter: function (e, t, n, r, a) {
            if (f(e.directives)) return ((p = !0), null)
            var o = i(a)
            o && o.fragmentSpreads.add(e.name.value)
          },
        },
        FragmentDefinition: {
          enter: function (e, t, n, r) {
            d.set(JSON.stringify(r), e)
          },
          leave: function (e, t, n, i) {
            return e === d.get(JSON.stringify(i))
              ? e
              : a > 0 &&
                  e.selectionSet.selections.every(function (e) {
                    return e.kind === be.FIELD && '__typename' === e.name.value
                  })
                ? ((r(e.name.value).removed = !0), (p = !0), null)
                : void 0
          },
        },
        Directive: {
          leave: function (e) {
            if (c(e)) return ((p = !0), null)
          },
        },
      })
    if (!p) return t
    var v = function (e) {
        return (
          e.transitiveVars ||
            ((e.transitiveVars = new Set(e.variables)),
            e.removed ||
              e.fragmentSpreads.forEach(function (t) {
                v(r(t)).transitiveVars.forEach(function (t) {
                  e.transitiveVars.add(t)
                })
              })),
          e
        )
      },
      y = new Set()
    ;(m.definitions.forEach(function (e) {
      e.kind === be.OPERATION_DEFINITION
        ? v(n(e.name && e.name.value)).fragmentSpreads.forEach(function (e) {
            y.add(e)
          })
        : e.kind !== be.FRAGMENT_DEFINITION || 0 !== a || r(e.name.value).removed || y.add(e.name.value)
    }),
      y.forEach(function (e) {
        v(r(e)).fragmentSpreads.forEach(function (e) {
          y.add(e)
        })
      }))
    var g = {
      enter: function (e) {
        if (((t = e.name.value), !y.has(t) || r(t).removed)) return null
        var t
      },
    }
    return br(
      it(m, {
        FragmentSpread: g,
        FragmentDefinition: g,
        OperationDefinition: {
          leave: function (e) {
            if (e.variableDefinitions) {
              var t = v(n(e.name && e.name.value)).transitiveVars
              if (t.size < e.variableDefinitions.length)
                return x(x({}, e), {
                  variableDefinitions: e.variableDefinitions.filter(function (e) {
                    return t.has(e.variable.name.value)
                  }),
                })
            }
          },
        },
      }),
    )
  }
  var _r = Object.assign(
    function (e) {
      return it(e, {
        SelectionSet: {
          enter: function (e, t, n) {
            if (!n || n.kind !== be.OPERATION_DEFINITION) {
              var r = e.selections
              if (r)
                if (
                  !r.some(function (e) {
                    return En(e) && ('__typename' === e.name.value || 0 === e.name.value.lastIndexOf('__', 0))
                  })
                ) {
                  var i = n
                  if (
                    !(
                      En(i) &&
                      i.directives &&
                      i.directives.some(function (e) {
                        return 'export' === e.name.value
                      })
                    )
                  )
                    return x(x({}, e), { selections: N(N([], r, !0), [yr], !1) })
                }
            }
          },
        },
      })
    },
    {
      added: function (e) {
        return e === yr
      },
    },
  )
  function kr(e) {
    return 'query' === On(e).operation
      ? e
      : it(e, {
          OperationDefinition: {
            enter: function (e) {
              return x(x({}, e), { operation: 'query' })
            },
          },
        })
  }
  function Sr(e) {
    return (
      wn(e),
      wr(
        [
          {
            test: function (e) {
              return 'client' === e.name.value
            },
            remove: !0,
          },
        ],
        e,
      )
    )
  }
  function Tr(e) {
    return (
      wn(e),
      it(e, {
        FragmentSpread: function (e) {
          var t
          if (
            !(null === (t = e.directives) || void 0 === t
              ? void 0
              : t.some(function (e) {
                  return 'unmask' === e.name.value
                }))
          )
            return x(x({}, e), {
              directives: N(
                N([], e.directives || [], !0),
                [{ kind: be.DIRECTIVE, name: { kind: be.NAME, value: 'nonreactive' } }],
                !1,
              ),
            })
        },
      })
    )
  }
  var xr = Object.prototype.hasOwnProperty
  function Or() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
    return Cr(e)
  }
  function Cr(e) {
    var t = e[0] || {},
      n = e.length
    if (n > 1) for (var r = new Nr(), i = 1; i < n; ++i) t = r.merge(t, e[i])
    return t
  }
  var Rr = function (e, t, n) {
      return this.merge(e[n], t[n])
    },
    Nr = (function () {
      function e(e) {
        ;(void 0 === e && (e = Rr), (this.reconciler = e), (this.isObject = Nt), (this.pastCopies = new Set()))
      }
      return (
        (e.prototype.merge = function (e, t) {
          for (var n = this, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i]
          return Nt(t) && Nt(e)
            ? (Object.keys(t).forEach(function (i) {
                if (xr.call(e, i)) {
                  var a = e[i]
                  if (t[i] !== a) {
                    var o = n.reconciler.apply(n, N([e, t, i], r, !1))
                    o !== a && ((e = n.shallowCopyForMerge(e))[i] = o)
                  }
                } else (e = n.shallowCopyForMerge(e))[i] = t[i]
              }),
              e)
            : t
        }),
        (e.prototype.shallowCopyForMerge = function (e) {
          return (
            Nt(e) &&
              (this.pastCopies.has(e) ||
                ((e = Array.isArray(e) ? e.slice(0) : x({ __proto__: Object.getPrototypeOf(e) }, e)),
                this.pastCopies.add(e))),
            e
          )
        }),
        e
      )
    })()
  function Dr(e, t) {
    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
    if (n) return (n = n.call(e)).next.bind(n)
    if (
      Array.isArray(e) ||
      (n = (function (e, t) {
        if (!e) return
        if ('string' == typeof e) return Ir(e, t)
        var n = Object.prototype.toString.call(e).slice(8, -1)
        'Object' === n && e.constructor && (n = e.constructor.name)
        if ('Map' === n || 'Set' === n) return Array.from(e)
        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ir(e, t)
      })(e)) ||
      t
    ) {
      n && (e = n)
      var r = 0
      return function () {
        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] }
      }
    }
    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
    )
  }
  function Ir(e, t) {
    ;(null == t || t > e.length) && (t = e.length)
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
    return r
  }
  function Pr(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n]
      ;((r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r))
    }
  }
  function Fr(e, t, n) {
    return (t && Pr(e.prototype, t), n && Pr(e, n), Object.defineProperty(e, 'prototype', { writable: !1 }), e)
  }
  var Ar = function () {
      return 'function' == typeof Symbol
    },
    Mr = function (e) {
      return Ar() && Boolean(Symbol[e])
    },
    Lr = function (e) {
      return Mr(e) ? Symbol[e] : '@@' + e
    }
  Ar() && !Mr('observable') && (Symbol.observable = Symbol('observable'))
  var qr = Lr('iterator'),
    zr = Lr('observable'),
    jr = Lr('species')
  function Vr(e, t) {
    var n = e[t]
    if (null != n) {
      if ('function' != typeof n) throw new TypeError(n + ' is not a function')
      return n
    }
  }
  function Qr(e) {
    var t = e.constructor
    return (void 0 !== t && null === (t = t[jr]) && (t = void 0), void 0 !== t ? t : Xr)
  }
  function $r(e) {
    return e instanceof Xr
  }
  function Ur(e) {
    Ur.log
      ? Ur.log(e)
      : setTimeout(function () {
          throw e
        })
  }
  function Br(e) {
    Promise.resolve().then(function () {
      try {
        e()
      } catch (e) {
        Ur(e)
      }
    })
  }
  function Wr(e) {
    var t = e._cleanup
    if (void 0 !== t && ((e._cleanup = void 0), t))
      try {
        if ('function' == typeof t) t()
        else {
          var n = Vr(t, 'unsubscribe')
          n && n.call(t)
        }
      } catch (e) {
        Ur(e)
      }
  }
  function Kr(e) {
    ;((e._observer = void 0), (e._queue = void 0), (e._state = 'closed'))
  }
  function Hr(e, t, n) {
    e._state = 'running'
    var r = e._observer
    try {
      var i = Vr(r, t)
      switch (t) {
        case 'next':
          i && i.call(r, n)
          break
        case 'error':
          if ((Kr(e), !i)) throw n
          i.call(r, n)
          break
        case 'complete':
          ;(Kr(e), i && i.call(r))
      }
    } catch (e) {
      Ur(e)
    }
    'closed' === e._state ? Wr(e) : 'running' === e._state && (e._state = 'ready')
  }
  function Gr(e, t, n) {
    if ('closed' !== e._state) {
      if ('buffering' !== e._state)
        return 'ready' !== e._state
          ? ((e._state = 'buffering'),
            (e._queue = [{ type: t, value: n }]),
            void Br(function () {
              return (function (e) {
                var t = e._queue
                if (t) {
                  ;((e._queue = void 0), (e._state = 'ready'))
                  for (var n = 0; n < t.length && (Hr(e, t[n].type, t[n].value), 'closed' !== e._state); ++n);
                }
              })(e)
            }))
          : void Hr(e, t, n)
      e._queue.push({ type: t, value: n })
    }
  }
  var Yr = (function () {
      function e(e, t) {
        ;((this._cleanup = void 0), (this._observer = e), (this._queue = void 0), (this._state = 'initializing'))
        var n = new Jr(this)
        try {
          this._cleanup = t.call(void 0, n)
        } catch (e) {
          n.error(e)
        }
        'initializing' === this._state && (this._state = 'ready')
      }
      return (
        (e.prototype.unsubscribe = function () {
          'closed' !== this._state && (Kr(this), Wr(this))
        }),
        Fr(e, [
          {
            key: 'closed',
            get: function () {
              return 'closed' === this._state
            },
          },
        ]),
        e
      )
    })(),
    Jr = (function () {
      function e(e) {
        this._subscription = e
      }
      var t = e.prototype
      return (
        (t.next = function (e) {
          Gr(this._subscription, 'next', e)
        }),
        (t.error = function (e) {
          Gr(this._subscription, 'error', e)
        }),
        (t.complete = function () {
          Gr(this._subscription, 'complete')
        }),
        Fr(e, [
          {
            key: 'closed',
            get: function () {
              return 'closed' === this._subscription._state
            },
          },
        ]),
        e
      )
    })(),
    Xr = (function () {
      function e(t) {
        if (!(this instanceof e)) throw new TypeError('Observable cannot be called as a function')
        if ('function' != typeof t) throw new TypeError('Observable initializer must be a function')
        this._subscriber = t
      }
      var t = e.prototype
      return (
        (t.subscribe = function (e) {
          return (
            ('object' == typeof e && null !== e) || (e = { next: e, error: arguments[1], complete: arguments[2] }),
            new Yr(e, this._subscriber)
          )
        }),
        (t.forEach = function (e) {
          var t = this
          return new Promise(function (n, r) {
            if ('function' == typeof e)
              var i = t.subscribe({
                next: function (t) {
                  try {
                    e(t, a)
                  } catch (e) {
                    ;(r(e), i.unsubscribe())
                  }
                },
                error: r,
                complete: n,
              })
            else r(new TypeError(e + ' is not a function'))
            function a() {
              ;(i.unsubscribe(), n())
            }
          })
        }),
        (t.map = function (e) {
          var t = this
          if ('function' != typeof e) throw new TypeError(e + ' is not a function')
          return new (Qr(this))(function (n) {
            return t.subscribe({
              next: function (t) {
                try {
                  t = e(t)
                } catch (e) {
                  return n.error(e)
                }
                n.next(t)
              },
              error: function (e) {
                n.error(e)
              },
              complete: function () {
                n.complete()
              },
            })
          })
        }),
        (t.filter = function (e) {
          var t = this
          if ('function' != typeof e) throw new TypeError(e + ' is not a function')
          return new (Qr(this))(function (n) {
            return t.subscribe({
              next: function (t) {
                try {
                  if (!e(t)) return
                } catch (e) {
                  return n.error(e)
                }
                n.next(t)
              },
              error: function (e) {
                n.error(e)
              },
              complete: function () {
                n.complete()
              },
            })
          })
        }),
        (t.reduce = function (e) {
          var t = this
          if ('function' != typeof e) throw new TypeError(e + ' is not a function')
          var n = Qr(this),
            r = arguments.length > 1,
            i = !1,
            a = arguments[1]
          return new n(function (n) {
            return t.subscribe({
              next: function (t) {
                var o = !i
                if (((i = !0), !o || r))
                  try {
                    a = e(a, t)
                  } catch (e) {
                    return n.error(e)
                  }
                else a = t
              },
              error: function (e) {
                n.error(e)
              },
              complete: function () {
                if (!i && !r) return n.error(new TypeError('Cannot reduce an empty sequence'))
                ;(n.next(a), n.complete())
              },
            })
          })
        }),
        (t.concat = function () {
          for (var e = this, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]
          var i = Qr(this)
          return new i(function (t) {
            var r,
              a = 0
            return (
              (function e(o) {
                r = o.subscribe({
                  next: function (e) {
                    t.next(e)
                  },
                  error: function (e) {
                    t.error(e)
                  },
                  complete: function () {
                    a === n.length ? ((r = void 0), t.complete()) : e(i.from(n[a++]))
                  },
                })
              })(e),
              function () {
                r && (r.unsubscribe(), (r = void 0))
              }
            )
          })
        }),
        (t.flatMap = function (e) {
          var t = this
          if ('function' != typeof e) throw new TypeError(e + ' is not a function')
          var n = Qr(this)
          return new n(function (r) {
            var i = [],
              a = t.subscribe({
                next: function (t) {
                  if (e)
                    try {
                      t = e(t)
                    } catch (e) {
                      return r.error(e)
                    }
                  var a = n.from(t).subscribe({
                    next: function (e) {
                      r.next(e)
                    },
                    error: function (e) {
                      r.error(e)
                    },
                    complete: function () {
                      var e = i.indexOf(a)
                      ;(e >= 0 && i.splice(e, 1), o())
                    },
                  })
                  i.push(a)
                },
                error: function (e) {
                  r.error(e)
                },
                complete: function () {
                  o()
                },
              })
            function o() {
              a.closed && 0 === i.length && r.complete()
            }
            return function () {
              ;(i.forEach(function (e) {
                return e.unsubscribe()
              }),
                a.unsubscribe())
            }
          })
        }),
        (t[zr] = function () {
          return this
        }),
        (e.from = function (t) {
          var n = 'function' == typeof this ? this : e
          if (null == t) throw new TypeError(t + ' is not an object')
          var r = Vr(t, zr)
          if (r) {
            var i = r.call(t)
            if (Object(i) !== i) throw new TypeError(i + ' is not an object')
            return $r(i) && i.constructor === n
              ? i
              : new n(function (e) {
                  return i.subscribe(e)
                })
          }
          if (Mr('iterator') && (r = Vr(t, qr)))
            return new n(function (e) {
              Br(function () {
                if (!e.closed) {
                  for (var n, i = Dr(r.call(t)); !(n = i()).done; ) {
                    var a = n.value
                    if ((e.next(a), e.closed)) return
                  }
                  e.complete()
                }
              })
            })
          if (Array.isArray(t))
            return new n(function (e) {
              Br(function () {
                if (!e.closed) {
                  for (var n = 0; n < t.length; ++n) if ((e.next(t[n]), e.closed)) return
                  e.complete()
                }
              })
            })
          throw new TypeError(t + ' is not observable')
        }),
        (e.of = function () {
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]
          return new ('function' == typeof this ? this : e)(function (e) {
            Br(function () {
              if (!e.closed) {
                for (var t = 0; t < n.length; ++t) if ((e.next(n[t]), e.closed)) return
                e.complete()
              }
            })
          })
        }),
        Fr(e, null, [
          {
            key: jr,
            get: function () {
              return this
            },
          },
        ]),
        e
      )
    })()
  ;(Ar() &&
    Object.defineProperty(Xr, Symbol('extensions'), { value: { symbol: zr, hostReportError: Ur }, configurable: !0 }),
    (function (e) {
      var t,
        n = e.Symbol
      if ('function' == typeof n)
        if (n.observable) t = n.observable
        else {
          t =
            'function' == typeof n.for
              ? n.for('https://github.com/benlesh/symbol-observable')
              : n('https://github.com/benlesh/symbol-observable')
          try {
            n.observable = t
          } catch (e) {}
        }
      else t = '@@observable'
    })(
      'undefined' != typeof self
        ? self
        : 'undefined' != typeof window
          ? window
          : 'undefined' != typeof global
            ? global
            : 'undefined' != typeof module
              ? module
              : Function('return this')(),
    ))
  var Zr = Xr.prototype,
    ei = '@@observable'
  function ti(e) {
    var t = Promise.resolve(e)
    return ((t.status = 'fulfilled'), (t.value = e), t)
  }
  function ni(e) {
    if (
      (function (e) {
        return 'status' in e
      })(e)
    )
      return e
    var t = e
    return (
      (t.status = 'pending'),
      t.then(
        function (e) {
          if ('pending' === t.status) {
            var n = t
            ;((n.status = 'fulfilled'), (n.value = e))
          }
        },
        function (e) {
          if ('pending' === t.status) {
            var n = t
            ;((n.status = 'rejected'), (n.reason = e))
          }
        },
      ),
      e
    )
  }
  Zr[ei] ||
    (Zr[ei] = function () {
      return this
    })
  var ri = Object.prototype.toString
  function ii(e) {
    return ai(e)
  }
  function ai(e, t) {
    switch (ri.call(e)) {
      case '[object Array]':
        if ((t = t || new Map()).has(e)) return t.get(e)
        var n = e.slice(0)
        return (
          t.set(e, n),
          n.forEach(function (e, r) {
            n[r] = ai(e, t)
          }),
          n
        )
      case '[object Object]':
        if ((t = t || new Map()).has(e)) return t.get(e)
        var r = Object.create(Object.getPrototypeOf(e))
        return (
          t.set(e, r),
          Object.keys(e).forEach(function (n) {
            r[n] = ai(e[n], t)
          }),
          r
        )
      default:
        return e
    }
  }
  function oi(e) {
    var t = new Set([e])
    return (
      t.forEach(function (e) {
        Nt(e) &&
          (function (e) {
            if (!1 !== globalThis.__DEV__ && !Object.isFrozen(e))
              try {
                Object.freeze(e)
              } catch (e) {
                if (e instanceof TypeError) return null
                throw e
              }
            return e
          })(e) === e &&
          Object.getOwnPropertyNames(e).forEach(function (n) {
            Nt(e[n]) && t.add(e[n])
          })
      }),
      e
    )
  }
  function si(e) {
    return (!1 !== globalThis.__DEV__ && oi(e), e)
  }
  function li(e, t, n) {
    var r = []
    ;(e.forEach(function (e) {
      return e[t] && r.push(e)
    }),
      r.forEach(function (e) {
        return e[t](n)
      }))
  }
  function ui(e, t, n) {
    return new Xr(function (r) {
      var i = {
        then: function (e) {
          return new Promise(function (t) {
            return t(e())
          })
        },
      }
      function a(e, t) {
        return function (n) {
          if (e) {
            var a = function () {
              return r.closed ? 0 : e(n)
            }
            i = i.then(a, a).then(
              function (e) {
                return r.next(e)
              },
              function (e) {
                return r.error(e)
              },
            )
          } else r[t](n)
        }
      }
      var o = {
          next: a(t, 'next'),
          error: a(n, 'error'),
          complete: function () {
            i.then(function () {
              return r.complete()
            })
          },
        },
        s = e.subscribe(o)
      return function () {
        return s.unsubscribe()
      }
    })
  }
  function ci(e) {
    function t(t) {
      Object.defineProperty(e, t, { value: Xr })
    }
    return (Tt && Symbol.species && t(Symbol.species), t('@@species'), e)
  }
  function fi(e) {
    return e && 'function' == typeof e.then
  }
  var di = (function (e) {
    function t(t) {
      var n =
        e.call(this, function (e) {
          return (
            n.addObserver(e),
            function () {
              return n.removeObserver(e)
            }
          )
        }) || this
      return (
        (n.observers = new Set()),
        (n.promise = new Promise(function (e, t) {
          ;((n.resolve = e), (n.reject = t))
        })),
        (n.handlers = {
          next: function (e) {
            null !== n.sub && ((n.latest = ['next', e]), n.notify('next', e), li(n.observers, 'next', e))
          },
          error: function (e) {
            var t = n.sub
            null !== t &&
              (t &&
                setTimeout(function () {
                  return t.unsubscribe()
                }),
              (n.sub = null),
              (n.latest = ['error', e]),
              n.reject(e),
              n.notify('error', e),
              li(n.observers, 'error', e))
          },
          complete: function () {
            var e = n,
              t = e.sub,
              r = e.sources
            if (null !== t) {
              var i = (void 0 === r ? [] : r).shift()
              i
                ? fi(i)
                  ? i.then(function (e) {
                      return (n.sub = e.subscribe(n.handlers))
                    }, n.handlers.error)
                  : (n.sub = i.subscribe(n.handlers))
                : (t &&
                    setTimeout(function () {
                      return t.unsubscribe()
                    }),
                  (n.sub = null),
                  n.latest && 'next' === n.latest[0] ? n.resolve(n.latest[1]) : n.resolve(),
                  n.notify('complete'),
                  li(n.observers, 'complete'))
            }
          },
        }),
        (n.nextResultListeners = new Set()),
        (n.cancel = function (e) {
          ;(n.reject(e), (n.sources = []), n.handlers.error(e))
        }),
        n.promise.catch(function (e) {}),
        'function' == typeof t && (t = [new Xr(t)]),
        fi(t)
          ? t.then(function (e) {
              return n.start(e)
            }, n.handlers.error)
          : n.start(t),
        n
      )
    }
    return (
      T(t, e),
      (t.prototype.start = function (e) {
        void 0 === this.sub && ((this.sources = Array.from(e)), this.handlers.complete())
      }),
      (t.prototype.deliverLastMessage = function (e) {
        if (this.latest) {
          var t = this.latest[0],
            n = e[t]
          ;(n && n.call(e, this.latest[1]), null === this.sub && 'next' === t && e.complete && e.complete())
        }
      }),
      (t.prototype.addObserver = function (e) {
        this.observers.has(e) || (this.deliverLastMessage(e), this.observers.add(e))
      }),
      (t.prototype.removeObserver = function (e) {
        this.observers.delete(e) && this.observers.size < 1 && this.handlers.complete()
      }),
      (t.prototype.notify = function (e, t) {
        var n = this.nextResultListeners
        n.size &&
          ((this.nextResultListeners = new Set()),
          n.forEach(function (n) {
            return n(e, t)
          }))
      }),
      (t.prototype.beforeNext = function (e) {
        var t = !1
        this.nextResultListeners.add(function (n, r) {
          t || ((t = !0), e(n, r))
        })
      }),
      t
    )
  })(Xr)
  function pi(e) {
    return 'incremental' in e
  }
  function hi(e) {
    return Nt(e) && 'payload' in e
  }
  function mi(e, t) {
    var n = e,
      r = new Nr()
    return (
      pi(t) &&
        vr(t.incremental) &&
        t.incremental.forEach(function (e) {
          for (var t = e.data, i = e.path, a = i.length - 1; a >= 0; --a) {
            var o = i[a],
              s = !isNaN(+o) ? [] : {}
            ;((s[o] = t), (t = s))
          }
          n = r.merge(n, t)
        }),
      n
    )
  }
  function vi(e) {
    return vr(yi(e))
  }
  function yi(e) {
    var t = vr(e.errors) ? e.errors.slice(0) : []
    return (
      pi(e) &&
        vr(e.incremental) &&
        e.incremental.forEach(function (e) {
          e.errors && t.push.apply(t, e.errors)
        }),
      t
    )
  }
  function gi() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
    var n = Object.create(null)
    return (
      e.forEach(function (e) {
        e &&
          Object.keys(e).forEach(function (t) {
            var r = e[t]
            void 0 !== r && (n[t] = r)
          })
      }),
      n
    )
  }
  function bi(e, t) {
    return gi(e, t, t.variables && { variables: gi(x(x({}, e && e.variables), t.variables)) })
  }
  ci(di)
  var Ei = Tt ? Symbol.for('__APOLLO_CONTEXT__') : '__APOLLO_CONTEXT__'
  function wi() {
    W('createContext' in te, 69)
    var e = ee.createContext[Ei]
    return (
      e ||
        (Object.defineProperty(ee.createContext, Ei, {
          value: (e = ee.createContext({})),
          enumerable: !1,
          writable: !1,
          configurable: !0,
        }),
        (e.displayName = 'ApolloContext')),
      e
    )
  }
  var _i = function (e) {
    var t = e.client,
      n = e.children,
      r = wi(),
      i = ee.useContext(r),
      a = ee.useMemo(
        function () {
          return x(x({}, i), { client: t || i.client })
        },
        [i, t],
      )
    return (W(a.client, 71), ee.createElement(r.Provider, { value: a }, n))
  }
  function ki(e) {
    var t = ee.useContext(wi()),
      n = e || t.client
    return (W(!!n, 79), n)
  }
  var Si = !1,
    Ti =
      te.useSyncExternalStore ||
      function (e, t, n) {
        var r = t()
        !1 === globalThis.__DEV__ || Si || r === t() || ((Si = !0), !1 !== globalThis.__DEV__ && W.error(92))
        var i = ee.useState({ inst: { value: r, getSnapshot: t } }),
          a = i[0].inst,
          o = i[1]
        return (
          Rt
            ? ee.useLayoutEffect(
                function () {
                  ;(Object.assign(a, { value: r, getSnapshot: t }), xi(a) && o({ inst: a }))
                },
                [e, r, t],
              )
            : Object.assign(a, { value: r, getSnapshot: t }),
          ee.useEffect(
            function () {
              return (
                xi(a) && o({ inst: a }),
                e(function () {
                  xi(a) && o({ inst: a })
                })
              )
            },
            [e],
          ),
          r
        )
      }
  function xi(e) {
    var t = e.value,
      n = e.getSnapshot
    try {
      return t !== n()
    } catch (e) {
      return !0
    }
  }
  const { toString: Oi, hasOwnProperty: Ci } = Object.prototype,
    Ri = Function.prototype.toString,
    Ni = new Map()
  function Di(e, t) {
    try {
      return Ii(e, t)
    } finally {
      Ni.clear()
    }
  }
  function Ii(e, t) {
    if (e === t) return !0
    const n = Oi.call(e)
    if (n !== Oi.call(t)) return !1
    switch (n) {
      case '[object Array]':
        if (e.length !== t.length) return !1
      case '[object Object]': {
        if (Mi(e, t)) return !0
        const n = Pi(e),
          r = Pi(t),
          i = n.length
        if (i !== r.length) return !1
        for (let e = 0; e < i; ++e) if (!Ci.call(t, n[e])) return !1
        for (let r = 0; r < i; ++r) {
          const i = n[r]
          if (!Ii(e[i], t[i])) return !1
        }
        return !0
      }
      case '[object Error]':
        return e.name === t.name && e.message === t.message
      case '[object Number]':
        if (e != e) return t != t
      case '[object Boolean]':
      case '[object Date]':
        return +e === +t
      case '[object RegExp]':
      case '[object String]':
        return e == `${t}`
      case '[object Map]':
      case '[object Set]': {
        if (e.size !== t.size) return !1
        if (Mi(e, t)) return !0
        const r = e.entries(),
          i = '[object Map]' === n
        for (;;) {
          const e = r.next()
          if (e.done) break
          const [n, a] = e.value
          if (!t.has(n)) return !1
          if (i && !Ii(a, t.get(n))) return !1
        }
        return !0
      }
      case '[object Uint16Array]':
      case '[object Uint8Array]':
      case '[object Uint32Array]':
      case '[object Int32Array]':
      case '[object Int8Array]':
      case '[object Int16Array]':
      case '[object ArrayBuffer]':
        ;((e = new Uint8Array(e)), (t = new Uint8Array(t)))
      case '[object DataView]': {
        let n = e.byteLength
        if (n === t.byteLength) for (; n-- && e[n] === t[n]; );
        return -1 === n
      }
      case '[object AsyncFunction]':
      case '[object GeneratorFunction]':
      case '[object AsyncGeneratorFunction]':
      case '[object Function]': {
        const n = Ri.call(e)
        return (
          n === Ri.call(t) &&
          !(function (e, t) {
            const n = e.length - t.length
            return n >= 0 && e.indexOf(t, n) === n
          })(n, Ai)
        )
      }
    }
    return !1
  }
  function Pi(e) {
    return Object.keys(e).filter(Fi, e)
  }
  function Fi(e) {
    return void 0 !== this[e]
  }
  const Ai = '{ [native code] }'
  function Mi(e, t) {
    let n = Ni.get(e)
    if (n) {
      if (n.has(t)) return !0
    } else Ni.set(e, (n = new Set()))
    return (n.add(t), !1)
  }
  var Li = Symbol()
  function qi(e) {
    return e.hasOwnProperty('graphQLErrors')
  }
  var zi = (function (e) {
    function t(n) {
      var r,
        i,
        a = n.graphQLErrors,
        o = n.protocolErrors,
        s = n.clientErrors,
        l = n.networkError,
        u = n.errorMessage,
        c = n.extraInfo,
        f = e.call(this, u) || this
      return (
        (f.name = 'ApolloError'),
        (f.graphQLErrors = a || []),
        (f.protocolErrors = o || []),
        (f.clientErrors = s || []),
        (f.networkError = l || null),
        (f.message =
          u ||
          ((i = N(N(N([], (r = f).graphQLErrors, !0), r.clientErrors, !0), r.protocolErrors, !0)),
          r.networkError && i.push(r.networkError),
          i
            .map(function (e) {
              return (Nt(e) && e.message) || 'Error message not found.'
            })
            .join('\n'))),
        (f.extraInfo = c),
        (f.cause =
          N(N(N([l], a || [], !0), o || [], !0), s || [], !0).find(function (e) {
            return !!e
          }) || null),
        (f.__proto__ = t.prototype),
        f
      )
    }
    return (T(t, e), t)
  })(Error)
  function ji(e) {
    return new Xr(function (t) {
      t.error(e)
    })
  }
  var Vi = function (e, t, n) {
    var r = new Error(n)
    throw ((r.name = 'ServerError'), (r.response = e), (r.statusCode = e.status), (r.result = t), r)
  }
  function Qi(e, t) {
    var n = x({}, e),
      r = new Set(Object.keys(e))
    return (
      it(t, {
        Variable: function (e, t, n) {
          n && 'VariableDefinition' !== n.kind && r.delete(e.name.value)
        },
      }),
      r.forEach(function (e) {
        delete n[e]
      }),
      n
    )
  }
  var $i = Symbol.for('apollo.deprecations'),
    Ui = V,
    Bi = new An()
  function Wi(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
    return Bi.withValue.apply(Bi, N([Array.isArray(e) ? e : [e]], t, !1))
  }
  function Ki(e, t, n, r) {
    ;(void 0 === r && (r = 'Please remove this option.'),
      Hi(t, function () {
        t in e && !1 !== globalThis.__DEV__ && W.warn(104, n, t, r)
      }))
  }
  function Hi(e, t) {
    ;(function (e) {
      return Ui[$i] || (Bi.getValue() || []).includes(e)
    })(e) || t()
  }
  function Gi(e, t) {
    return t ? t(e) : Xr.of()
  }
  function Yi(e) {
    return 'function' == typeof e ? new Xi(e) : e
  }
  function Ji(e) {
    return e.request.length <= 1
  }
  var Xi = (function () {
      function e(e) {
        e && (this.request = e)
      }
      return (
        (e.empty = function () {
          return new e(function () {
            return Xr.of()
          })
        }),
        (e.from = function (t) {
          return 0 === t.length
            ? e.empty()
            : t.map(Yi).reduce(function (e, t) {
                return e.concat(t)
              })
        }),
        (e.split = function (t, n, r) {
          var i,
            a = Yi(n),
            o = Yi(r || new e(Gi))
          return (
            (i =
              Ji(a) && Ji(o)
                ? new e(function (e) {
                    return t(e) ? a.request(e) || Xr.of() : o.request(e) || Xr.of()
                  })
                : new e(function (e, n) {
                    return t(e) ? a.request(e, n) || Xr.of() : o.request(e, n) || Xr.of()
                  })),
            Object.assign(i, { left: a, right: o })
          )
        }),
        (e.execute = function (e, t) {
          return (
            e.request(
              (function (e, t) {
                var n = x({}, e)
                return (
                  Object.defineProperty(t, 'setContext', {
                    enumerable: !1,
                    value: function (e) {
                      n = x(x({}, n), 'function' == typeof e ? e(n) : e)
                    },
                  }),
                  Object.defineProperty(t, 'getContext', {
                    enumerable: !1,
                    value: function () {
                      return x({}, n)
                    },
                  }),
                  t
                )
              })(
                t.context,
                (function (e) {
                  var t = {
                    variables: e.variables || {},
                    extensions: e.extensions || {},
                    operationName: e.operationName,
                    query: e.query,
                  }
                  return (
                    t.operationName || (t.operationName = 'string' != typeof t.query ? kn(t.query) || void 0 : ''),
                    t
                  )
                })(
                  (function (e) {
                    for (
                      var t = ['query', 'operationName', 'variables', 'extensions', 'context'],
                        n = 0,
                        r = Object.keys(e);
                      n < r.length;
                      n++
                    ) {
                      var i = r[n]
                      if (t.indexOf(i) < 0) throw K(58, i)
                    }
                    return e
                  })(t),
                ),
              ),
            ) || Xr.of()
          )
        }),
        (e.concat = function (t, n) {
          var r = Yi(t)
          if (Ji(r)) return (!1 !== globalThis.__DEV__ && W.warn(47, r), r)
          var i,
            a = Yi(n)
          return (
            (i = Ji(a)
              ? new e(function (e) {
                  return (
                    r.request(e, function (e) {
                      return a.request(e) || Xr.of()
                    }) || Xr.of()
                  )
                })
              : new e(function (e, t) {
                  return (
                    r.request(e, function (e) {
                      return a.request(e, t) || Xr.of()
                    }) || Xr.of()
                  )
                })),
            Object.assign(i, { left: r, right: a })
          )
        }),
        (e.prototype.split = function (t, n, r) {
          return this.concat(e.split(t, n, r || new e(Gi)))
        }),
        (e.prototype.concat = function (t) {
          return e.concat(this, t)
        }),
        (e.prototype.request = function (e, t) {
          throw K(48)
        }),
        (e.prototype.onError = function (e, t) {
          if (
            (!1 !== globalThis.__DEV__ &&
              Hi('onError', function () {
                !1 !== globalThis.__DEV__ && W.warn(49)
              }),
            t && t.error)
          )
            return (t.error(e), !1)
          throw e
        }),
        (e.prototype.setOnError = function (e) {
          return (!1 !== globalThis.__DEV__ && !1 !== globalThis.__DEV__ && W.warn(50), (this.onError = e), this)
        }),
        e
      )
    })(),
    Zi = Xi.empty,
    ea = Xi.from,
    ta = Xi.split,
    na = Xi.concat,
    ra = Xi.execute
  function ia(e) {
    var t = null,
      n = null,
      r = !1,
      i = [],
      a = []
    function o(e) {
      if (!n) {
        if (a.length) {
          var t = a.shift()
          if (Array.isArray(t) && t[0]) return t[0]({ value: e, done: !1 })
        }
        i.push(e)
      }
    }
    function s(e) {
      ;((n = e),
        a.slice().forEach(function (t) {
          t[1](e)
        }),
        !t || t())
    }
    function l() {
      ;((r = !0),
        a.slice().forEach(function (e) {
          e[0]({ value: void 0, done: !0 })
        }),
        !t || t())
    }
    ;((t = function () {
      ;((t = null),
        e.removeListener('data', o),
        e.removeListener('error', s),
        e.removeListener('end', l),
        e.removeListener('finish', l),
        e.removeListener('close', l))
    }),
      e.on('data', o),
      e.on('error', s),
      e.on('end', l),
      e.on('finish', l),
      e.on('close', l))
    var u = {
      next: function () {
        return new Promise(function (e, t) {
          return n
            ? t(n)
            : i.length
              ? e({ value: i.shift(), done: !1 })
              : r
                ? e({ value: void 0, done: !0 })
                : void a.push([e, t])
        })
      },
    }
    return (
      xt &&
        (u[Symbol.asyncIterator] = function () {
          return this
        }),
      u
    )
  }
  function aa(e) {
    var t = {
      next: function () {
        return e.read()
      },
    }
    return (
      xt &&
        (t[Symbol.asyncIterator] = function () {
          return this
        }),
      t
    )
  }
  function oa(e) {
    var t,
      n,
      r,
      i = e
    if (
      (e.body && (i = e.body),
      (function (e) {
        return !(!xt || !e[Symbol.asyncIterator])
      })(i))
    )
      return (function (e) {
        var t,
          n = e[Symbol.asyncIterator]()
        return (
          ((t = {
            next: function () {
              return n.next()
            },
          })[Symbol.asyncIterator] = function () {
            return this
          }),
          t
        )
      })(i)
    if (
      (function (e) {
        return !!e.getReader
      })(i)
    )
      return aa(i.getReader())
    if (
      (function (e) {
        return !!e.stream
      })(i)
    )
      return aa(i.stream().getReader())
    if (
      (function (e) {
        return !!e.arrayBuffer
      })(i)
    )
      return (
        (t = i.arrayBuffer()),
        (n = !1),
        (r = {
          next: function () {
            return n
              ? Promise.resolve({ value: void 0, done: !0 })
              : ((n = !0),
                new Promise(function (e, n) {
                  t.then(function (t) {
                    e({ value: t, done: !1 })
                  }).catch(n)
                }))
          },
        }),
        xt &&
          (r[Symbol.asyncIterator] = function () {
            return this
          }),
        r
      )
    if (
      (function (e) {
        return !!e.pipe
      })(i)
    )
      return ia(i)
    throw new Error('Unknown body type for responseIterator. Please pass a streamable response.')
  }
  var sa = Object.prototype.hasOwnProperty
  function la(e) {
    var t = {}
    return (
      e.split('\n').forEach(function (e) {
        var n = e.indexOf(':')
        if (n > -1) {
          var r = e.slice(0, n).trim().toLowerCase(),
            i = e.slice(n + 1).trim()
          t[r] = i
        }
      }),
      t
    )
  }
  function ua(e, t) {
    if (e.status >= 300) {
      Vi(
        e,
        (function () {
          try {
            return JSON.parse(t)
          } catch (e) {
            return t
          }
        })(),
        'Response not successful: Received status code '.concat(e.status),
      )
    }
    try {
      return JSON.parse(t)
    } catch (r) {
      var n = r
      throw ((n.name = 'ServerParseError'), (n.response = e), (n.statusCode = e.status), (n.bodyText = t), n)
    }
  }
  function ca(e) {
    return function (t) {
      return t
        .text()
        .then(function (e) {
          return ua(t, e)
        })
        .then(function (n) {
          return (
            Array.isArray(n) ||
              sa.call(n, 'data') ||
              sa.call(n, 'errors') ||
              Vi(
                t,
                n,
                "Server response was missing for query '".concat(
                  Array.isArray(e)
                    ? e.map(function (e) {
                        return e.operationName
                      })
                    : e.operationName,
                  "'.",
                ),
              ),
            n
          )
        })
    }
  }
  var fa = function (e, t) {
      var n
      try {
        n = JSON.stringify(e)
      } catch (e) {
        var r = K(54, t, e.message)
        throw ((r.parseError = e), r)
      }
      return n
    },
    da = {
      http: { includeQuery: !0, includeExtensions: !1, preserveHeaderCase: !1 },
      headers: { 'accept': '*/*', 'content-type': 'application/json' },
      options: { method: 'POST' },
    },
    pa = function (e, t) {
      return t(e)
    }
  function ha(e, t) {
    for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r]
    var i = {},
      a = {}
    ;(n.forEach(function (e) {
      ;((i = x(x(x({}, i), e.options), { headers: x(x({}, i.headers), e.headers) })),
        e.credentials && (i.credentials = e.credentials),
        (a = x(x({}, a), e.http)))
    }),
      i.headers &&
        (i.headers = (function (e, t) {
          if (!t) {
            var n = {}
            return (
              Object.keys(Object(e)).forEach(function (t) {
                n[t.toLowerCase()] = e[t]
              }),
              n
            )
          }
          var r = {}
          Object.keys(Object(e)).forEach(function (t) {
            r[t.toLowerCase()] = { originalName: t, value: e[t] }
          })
          var i = {}
          return (
            Object.keys(r).forEach(function (e) {
              i[r[e].originalName] = r[e].value
            }),
            i
          )
        })(i.headers, a.preserveHeaderCase)))
    var o = e.operationName,
      s = e.extensions,
      l = e.variables,
      u = e.query,
      c = { operationName: o, variables: l }
    return (a.includeExtensions && (c.extensions = s), a.includeQuery && (c.query = t(u, hr)), { options: i, body: c })
  }
  var ma = function (e) {
      if (!e && 'undefined' == typeof fetch) throw K(51)
    },
    va = function (e, t) {
      var n = e.getContext().uri
      return n || ('function' == typeof t ? t(e) : t || '/graphql')
    }
  function ya(e, t) {
    var n = [],
      r = function (e, t) {
        n.push(''.concat(e, '=').concat(encodeURIComponent(t)))
      }
    if (('query' in t && r('query', t.query), t.operationName && r('operationName', t.operationName), t.variables)) {
      var i = void 0
      try {
        i = fa(t.variables, 'Variables map')
      } catch (e) {
        return { parseError: e }
      }
      r('variables', i)
    }
    if (t.extensions) {
      var a = void 0
      try {
        a = fa(t.extensions, 'Extensions map')
      } catch (e) {
        return { parseError: e }
      }
      r('extensions', a)
    }
    var o = '',
      s = e,
      l = e.indexOf('#')
    ;-1 !== l && ((o = e.substr(l)), (s = e.substr(0, l)))
    var u = -1 === s.indexOf('?') ? '?' : '&'
    return { newURI: s + u + n.join('&') + o }
  }
  var ga = j(function () {
      return fetch
    }),
    ba = function (e) {
      void 0 === e && (e = {})
      var t = e.uri,
        n = void 0 === t ? '/graphql' : t,
        r = e.fetch,
        i = e.print,
        a = void 0 === i ? pa : i,
        o = e.includeExtensions,
        s = e.preserveHeaderCase,
        l = e.useGETForQueries,
        u = e.includeUnusedVariables,
        c = void 0 !== u && u,
        f = O(e, [
          'uri',
          'fetch',
          'print',
          'includeExtensions',
          'preserveHeaderCase',
          'useGETForQueries',
          'includeUnusedVariables',
        ])
      !1 !== globalThis.__DEV__ && ma(r || ga)
      var d = {
        http: { includeExtensions: o, preserveHeaderCase: s },
        options: f.fetchOptions,
        credentials: f.credentials,
        headers: f.headers,
      }
      return new Xi(function (e) {
        var t = va(e, n),
          i = e.getContext(),
          o = {}
        if (i.clientAwareness) {
          var s = i.clientAwareness,
            u = s.name,
            f = s.version
          ;(u && (o['apollographql-client-name'] = u), f && (o['apollographql-client-version'] = f))
        }
        var p = x(x({}, o), i.headers),
          h = { http: i.http, options: i.fetchOptions, credentials: i.credentials, headers: p }
        if (ht(['client'], e.query)) {
          !1 !== globalThis.__DEV__ && !1 !== globalThis.__DEV__ && W.warn(52)
          var m = Sr(e.query)
          if (!m)
            return ji(
              new Error(
                'HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`.',
              ),
            )
          e.query = m
        }
        var v,
          y = ha(e, a, da, d, h),
          g = y.options,
          b = y.body
        ;(b.variables && !c && (b.variables = Qi(b.variables, e.query)),
          g.signal || 'undefined' == typeof AbortController || ((v = new AbortController()), (g.signal = v.signal)))
        var E,
          w = 'OperationDefinition' === (E = On(e.query)).kind && 'subscription' === E.operation,
          _ = ht(['defer'], e.query)
        if (
          (l &&
            !e.query.definitions.some(function (e) {
              return 'OperationDefinition' === e.kind && 'mutation' === e.operation
            }) &&
            (g.method = 'GET'),
          _ || w)
        ) {
          g.headers = g.headers || {}
          var k = 'multipart/mixed;'
          ;(w && _ && !1 !== globalThis.__DEV__ && W.warn(53),
            w
              ? (k += 'boundary=graphql;subscriptionSpec=1.0,application/json')
              : _ && (k += 'deferSpec=20220824,application/json'),
            (g.headers.accept = k))
        }
        if ('GET' === g.method) {
          var S = ya(t, b),
            T = S.newURI,
            O = S.parseError
          if (O) return ji(O)
          t = T
        } else
          try {
            g.body = fa(b, 'Payload')
          } catch (O) {
            return ji(O)
          }
        return new Xr(function (n) {
          var i =
              r ||
              j(function () {
                return fetch
              }) ||
              ga,
            a = n.next.bind(n)
          return (
            i(t, g)
              .then(function (t) {
                var n
                e.setContext({ response: t })
                var r = null === (n = t.headers) || void 0 === n ? void 0 : n.get('content-type')
                return null !== r && /^multipart\/mixed/i.test(r)
                  ? (function (e, t) {
                      return C(this, void 0, void 0, function () {
                        var n, r, i, a, o, s, l, u, c, f, d, p, h, m, v, y, g, b, E, w, _, k, S, T
                        return R(this, function (O) {
                          switch (O.label) {
                            case 0:
                              if (void 0 === TextDecoder)
                                throw new Error(
                                  'TextDecoder must be defined in the environment: please import a polyfill.',
                                )
                              ;((n = new TextDecoder('utf-8')),
                                (r = null === (T = e.headers) || void 0 === T ? void 0 : T.get('content-type')),
                                (i = 'boundary='),
                                (a = (null == r ? void 0 : r.includes(i))
                                  ? null == r
                                    ? void 0
                                    : r
                                        .substring((null == r ? void 0 : r.indexOf(i)) + 9)
                                        .replace(/['"]/g, '')
                                        .replace(/\;(.*)/gm, '')
                                        .trim()
                                  : '-'),
                                (o = '\r\n--'.concat(a)),
                                (s = ''),
                                (l = oa(e)),
                                (u = !0),
                                (O.label = 1))
                            case 1:
                              return u ? [4, l.next()] : [3, 3]
                            case 2:
                              for (
                                c = O.sent(),
                                  f = c.value,
                                  d = c.done,
                                  p = 'string' == typeof f ? f : n.decode(f),
                                  h = s.length - o.length + 1,
                                  u = !d,
                                  m = (s += p).indexOf(o, h);
                                m > -1;
                              ) {
                                if (
                                  ((v = void 0),
                                  (k = [s.slice(0, m), s.slice(m + o.length)]),
                                  (s = k[1]),
                                  (y = (v = k[0]).indexOf('\r\n\r\n')),
                                  (g = la(v.slice(0, y))),
                                  (b = g['content-type']) && -1 === b.toLowerCase().indexOf('application/json'))
                                )
                                  throw new Error('Unsupported patch content type: application/json is required.')
                                if ((E = v.slice(y)))
                                  if (
                                    ((w = ua(e, E)),
                                    Object.keys(w).length > 1 ||
                                      'data' in w ||
                                      'incremental' in w ||
                                      'errors' in w ||
                                      'payload' in w)
                                  )
                                    if (hi(w)) {
                                      if (((_ = {}), 'payload' in w)) {
                                        if (1 === Object.keys(w).length && null === w.payload) return [2]
                                        _ = x({}, w.payload)
                                      }
                                      ;('errors' in w &&
                                        (_ = x(x({}, _), {
                                          extensions: x(
                                            x({}, 'extensions' in _ ? _.extensions : null),
                                            ((S = {}), (S[Li] = w.errors), S),
                                          ),
                                        })),
                                        t(_))
                                    } else t(w)
                                  else if (1 === Object.keys(w).length && 'hasNext' in w && !w.hasNext) return [2]
                                m = s.indexOf(o)
                              }
                              return [3, 1]
                            case 3:
                              return [2]
                          }
                        })
                      })
                    })(t, a)
                  : ca(e)(t).then(a)
              })
              .then(function () {
                ;((v = void 0), n.complete())
              })
              .catch(function (e) {
                ;((v = void 0),
                  (function (e, t) {
                    ;(e.result && e.result.errors && e.result.data && t.next(e.result), t.error(e))
                  })(e, n))
              }),
            function () {
              v && v.abort()
            }
          )
        })
      })
    },
    Ea = (function (e) {
      function t(t) {
        void 0 === t && (t = {})
        var n = e.call(this, ba(t).request) || this
        return ((n.options = t), n)
      }
      return (T(t, e), t)
    })(Xi)
  function wa(e, t, n, r) {
    var i = t.data,
      a = O(t, ['data']),
      o = n.data
    return Di(a, O(n, ['data'])) && _a(On(e).selectionSet, i, o, { fragmentMap: It(Sn(e)), variables: r })
  }
  function _a(e, t, n, r) {
    if (t === n) return !0
    var i = new Set()
    return e.selections.every(function (e) {
      if (i.has(e)) return !0
      if ((i.add(e), !pt(e, r.variables))) return !0
      if (ka(e)) return !0
      if (En(e)) {
        var a = gn(e),
          o = t && t[a],
          s = n && n[a],
          l = e.selectionSet
        if (!l) return Di(o, s)
        var u = Array.isArray(o),
          c = Array.isArray(s)
        if (u !== c) return !1
        if (u && c) {
          var f = o.length
          if (s.length !== f) return !1
          for (var d = 0; d < f; ++d) if (!_a(l, o[d], s[d], r)) return !1
          return !0
        }
        return _a(l, o, s, r)
      }
      var p = Pt(e, r.fragmentMap)
      return p ? !!ka(p) || _a(p.selectionSet, t, n, r) : void 0
    })
  }
  function ka(e) {
    return !!e.directives && e.directives.some(Sa)
  }
  function Sa(e) {
    return 'nonreactive' === e.name.value
  }
  var Ta = kt ? WeakMap : Map,
    xa = St ? WeakSet : Set,
    Oa = new An(),
    Ca = !1
  function Ra() {
    Ca || ((Ca = !0), !1 !== globalThis.__DEV__ && W.warn(64))
  }
  function Na(e, t, n) {
    return Oa.withValue(!0, function () {
      var r = Da(e, t, n, !1)
      return (Object.isFrozen(e) && si(r), r)
    })
  }
  function Da(e, t, n, r, i) {
    var a,
      o = n.knownChanged,
      s = (function (e, t) {
        if (t.has(e)) return t.get(e)
        var n = Array.isArray(e) ? [] : Object.create(null)
        return (t.set(e, n), n)
      })(e, n.mutableTargets)
    if (Array.isArray(e)) {
      for (var l = 0, u = Array.from(e.entries()); l < u.length; l++) {
        var c = u[l],
          f = c[0],
          d = c[1]
        if (null !== d) {
          var p = Da(d, t, n, r, !1 !== globalThis.__DEV__ ? ''.concat(i || '', '[').concat(f, ']') : void 0)
          ;(o.has(p) && o.add(s), (s[f] = p))
        } else s[f] = null
      }
      return o.has(s) ? s : e
    }
    for (var h = 0, m = t.selections; h < m.length; h++) {
      var v = m[h],
        y = void 0
      if ((r && o.add(s), v.kind === be.FIELD)) {
        var g = gn(v),
          b = v.selectionSet
        if (void 0 === (y = s[g] || e[g])) continue
        if (b && null !== y) {
          p = Da(e[g], b, n, r, !1 !== globalThis.__DEV__ ? ''.concat(i || '', '.').concat(g) : void 0)
          o.has(p) && (y = p)
        }
        ;(!1 === globalThis.__DEV__ && (s[g] = y),
          !1 !== globalThis.__DEV__ &&
            (r &&
            '__typename' !== g &&
            !(null === (a = Object.getOwnPropertyDescriptor(s, g)) || void 0 === a ? void 0 : a.value)
              ? Object.defineProperty(s, g, Ia(g, y, i || '', n.operationName, n.operationType))
              : (delete s[g], (s[g] = y))))
      }
      if (
        (v.kind !== be.INLINE_FRAGMENT ||
          (v.typeCondition && !n.cache.fragmentMatches(v, e.__typename)) ||
          (y = Da(e, v.selectionSet, n, r, i)),
        v.kind === be.FRAGMENT_SPREAD)
      ) {
        var E = v.name.value,
          w = n.fragmentMap[E] || (n.fragmentMap[E] = n.cache.lookupFragment(E))
        W(w, 59, E)
        var _ = vt(v)
        'mask' !== _ && (y = Da(e, w.selectionSet, n, 'migrate' === _, i))
      }
      o.has(y) && o.add(s)
    }
    return (
      '__typename' in e && !('__typename' in s) && (s.__typename = e.__typename),
      Object.keys(s).length !== Object.keys(e).length && o.add(s),
      o.has(s) ? s : e
    )
  }
  function Ia(e, t, n, r, i) {
    var a = function () {
      return (
        Oa.getValue() ||
          (!1 !== globalThis.__DEV__ &&
            W.warn(
              60,
              r ? ''.concat(i, " '").concat(r, "'") : 'anonymous '.concat(i),
              ''.concat(n, '.').concat(e).replace(/^\./, ''),
            ),
          (a = function () {
            return t
          })),
        t
      )
    }
    return {
      get: function () {
        return a()
      },
      set: function (e) {
        a = function () {
          return e
        }
      },
      enumerable: !0,
      configurable: !0,
    }
  }
  function Pa(e, t, n, r) {
    if (!n.fragmentMatches) return (!1 !== globalThis.__DEV__ && Ra(), e)
    var i = t.definitions.filter(function (e) {
      return e.kind === be.FRAGMENT_DEFINITION
    })
    void 0 === r && (W(1 === i.length, 61, i.length), (r = i[0].name.value))
    var a = i.find(function (e) {
      return e.name.value === r
    })
    return (
      W(!!a, 62, r),
      null == e || Di(e, {})
        ? e
        : Na(e, a.selectionSet, {
            operationType: 'fragment',
            operationName: a.name.value,
            fragmentMap: It(Sn(t)),
            cache: n,
            mutableTargets: new Ta(),
            knownChanged: new xa(),
          })
    )
  }
  var Fa,
    Aa = (function () {
      function e() {
        ;((this.assumeImmutableResults = !1),
          (this.getFragmentDoc = cr(Dt, { max: Kt['cache.fragmentQueryDocuments'] || 1e3, cache: Vt })))
      }
      return (
        (e.prototype.lookupFragment = function (e) {
          return null
        }),
        (e.prototype.batch = function (e) {
          var t,
            n = this,
            r = 'string' == typeof e.optimistic ? e.optimistic : !1 === e.optimistic ? null : void 0
          return (
            this.performTransaction(function () {
              return (t = e.update(n))
            }, r),
            t
          )
        }),
        (e.prototype.recordOptimisticTransaction = function (e, t) {
          this.performTransaction(e, t)
        }),
        (e.prototype.transformDocument = function (e) {
          return e
        }),
        (e.prototype.transformForLink = function (e) {
          return e
        }),
        (e.prototype.identify = function (e) {}),
        (e.prototype.gc = function () {
          return []
        }),
        (e.prototype.modify = function (e) {
          return !1
        }),
        (e.prototype.readQuery = function (e, t) {
          var n = this
          return (
            void 0 === t && (t = !!e.optimistic),
            !1 !== globalThis.__DEV__ && Ki(e, 'canonizeResults', 'cache.readQuery'),
            Wi('canonizeResults', function () {
              return n.read(x(x({}, e), { rootId: e.id || 'ROOT_QUERY', optimistic: t }))
            })
          )
        }),
        (e.prototype.watchFragment = function (e) {
          var t = this,
            n = e.fragment,
            r = e.fragmentName,
            i = e.from,
            a = e.optimistic,
            o = void 0 === a || a,
            s = O(e, ['fragment', 'fragmentName', 'from', 'optimistic']),
            l = this.getFragmentDoc(n, r),
            u = void 0 === i || 'string' == typeof i ? i : this.identify(i),
            c = !!e[Symbol.for('apollo.dataMasking')]
          if (!1 !== globalThis.__DEV__) {
            var f = r || xn(n).name.value
            u || (!1 !== globalThis.__DEV__ && W.warn(1, f))
          }
          var d,
            p = x(x({}, s), { returnPartialData: !0, id: u, query: l, optimistic: o })
          return new Xr(function (i) {
            return t.watch(
              x(x({}, p), {
                immediate: !0,
                callback: function (a) {
                  var o = c ? Pa(a.result, n, t, r) : a.result
                  if (!d || !wa(l, { data: d.result }, { data: o }, e.variables)) {
                    var s = { data: o, complete: !!a.complete }
                    ;(a.missing &&
                      (s.missing = Cr(
                        a.missing.map(function (e) {
                          return e.missing
                        }),
                      )),
                      (d = x(x({}, a), { result: o })),
                      i.next(s))
                  }
                },
              }),
            )
          })
        }),
        (e.prototype.readFragment = function (e, t) {
          var n = this
          return (
            void 0 === t && (t = !!e.optimistic),
            !1 !== globalThis.__DEV__ && Ki(e, 'canonizeResults', 'cache.readFragment'),
            Wi('canonizeResults', function () {
              return n.read(
                x(x({}, e), { query: n.getFragmentDoc(e.fragment, e.fragmentName), rootId: e.id, optimistic: t }),
              )
            })
          )
        }),
        (e.prototype.writeQuery = function (e) {
          var t = e.id,
            n = e.data,
            r = O(e, ['id', 'data'])
          return this.write(Object.assign(r, { dataId: t || 'ROOT_QUERY', result: n }))
        }),
        (e.prototype.writeFragment = function (e) {
          var t = e.id,
            n = e.data,
            r = e.fragment,
            i = e.fragmentName,
            a = O(e, ['id', 'data', 'fragment', 'fragmentName'])
          return this.write(Object.assign(a, { query: this.getFragmentDoc(r, i), dataId: t, result: n }))
        }),
        (e.prototype.updateQuery = function (e, t) {
          return (
            !1 !== globalThis.__DEV__ && Ki(e, 'canonizeResults', 'cache.updateQuery'),
            this.batch({
              update: function (n) {
                var r = Wi('canonizeResults', function () {
                    return n.readQuery(e)
                  }),
                  i = t(r)
                return null == i ? r : (n.writeQuery(x(x({}, e), { data: i })), i)
              },
            })
          )
        }),
        (e.prototype.updateFragment = function (e, t) {
          return (
            !1 !== globalThis.__DEV__ && Ki(e, 'canonizeResults', 'cache.updateFragment'),
            this.batch({
              update: function (n) {
                var r = Wi('canonizeResults', function () {
                    return n.readFragment(e)
                  }),
                  i = t(r)
                return null == i ? r : (n.writeFragment(x(x({}, e), { data: i })), i)
              },
            })
          )
        }),
        e
      )
    })()
  ;(!1 !== globalThis.__DEV__ && (Aa.prototype.getMemoryInternals = Xt), Fa || (Fa = {}))
  var Ma = (function (e) {
      function t(n, r, i, a) {
        var o,
          s = e.call(this, n) || this
        if (((s.message = n), (s.path = r), (s.query = i), (s.variables = a), Array.isArray(s.path))) {
          s.missing = s.message
          for (var l = s.path.length - 1; l >= 0; --l) s.missing = (((o = {})[s.path[l]] = s.missing), o)
        } else s.missing = s.path
        return ((s.__proto__ = t.prototype), s)
      }
      return (T(t, e), t)
    })(Error),
    La = Object.prototype.hasOwnProperty
  function qa(e) {
    return null == e
  }
  function za(e, t) {
    var n = e.__typename,
      r = e.id,
      i = e._id
    if (
      'string' == typeof n &&
      (t && (t.keyObject = qa(r) ? (qa(i) ? void 0 : { _id: i }) : { id: r }), qa(r) && !qa(i) && (r = i), !qa(r))
    )
      return ''.concat(n, ':').concat('number' == typeof r || 'string' == typeof r ? r : JSON.stringify(r))
  }
  var ja = { dataIdFromObject: za, addTypename: !0, resultCaching: !0, canonizeResults: !1 }
  function Va(e) {
    var t = e.canonizeResults
    return void 0 === t ? ja.canonizeResults : t
  }
  var Qa = /^[_a-z][_0-9a-z]*/i
  function $a(e) {
    var t = e.match(Qa)
    return t ? t[0] : e
  }
  function Ua(e, t, n) {
    return (
      !!Nt(t) &&
      (mr(t)
        ? t.every(function (t) {
            return Ua(e, t, n)
          })
        : e.selections.every(function (e) {
            if (En(e) && pt(e, n)) {
              var r = gn(e)
              return La.call(t, r) && (!e.selectionSet || Ua(e.selectionSet, t[r], n))
            }
            return !0
          }))
    )
  }
  function Ba(e) {
    return Nt(e) && !dn(e) && !mr(e)
  }
  function Wa(e, t) {
    var n = It(Sn(e))
    return {
      fragmentMap: n,
      lookupFragment: function (e) {
        var r = n[e]
        return (!r && t && (r = t.lookup(e)), r || null)
      },
    }
  }
  var Ka = Object.create(null),
    Ha = function () {
      return Ka
    },
    Ga = Object.create(null),
    Ya = (function () {
      function e(e, t) {
        var n = this
        ;((this.policies = e),
          (this.group = t),
          (this.data = Object.create(null)),
          (this.rootIds = Object.create(null)),
          (this.refs = Object.create(null)),
          (this.getFieldValue = function (e, t) {
            return si(dn(e) ? n.get(e.__ref, t) : e && e[t])
          }),
          (this.canRead = function (e) {
            return dn(e) ? n.has(e.__ref) : 'object' == typeof e
          }),
          (this.toReference = function (e, t) {
            if ('string' == typeof e) return fn(e)
            if (dn(e)) return e
            var r = n.policies.identify(e)[0]
            if (r) {
              var i = fn(r)
              return (t && n.merge(r, e), i)
            }
          }))
      }
      return (
        (e.prototype.toObject = function () {
          return x({}, this.data)
        }),
        (e.prototype.has = function (e) {
          return void 0 !== this.lookup(e, !0)
        }),
        (e.prototype.get = function (e, t) {
          if ((this.group.depend(e, t), La.call(this.data, e))) {
            var n = this.data[e]
            if (n && La.call(n, t)) return n[t]
          }
          return '__typename' === t && La.call(this.policies.rootTypenamesById, e)
            ? this.policies.rootTypenamesById[e]
            : this instanceof eo
              ? this.parent.get(e, t)
              : void 0
        }),
        (e.prototype.lookup = function (e, t) {
          return (
            t && this.group.depend(e, '__exists'),
            La.call(this.data, e)
              ? this.data[e]
              : this instanceof eo
                ? this.parent.lookup(e, t)
                : this.policies.rootTypenamesById[e]
                  ? Object.create(null)
                  : void 0
          )
        }),
        (e.prototype.merge = function (e, t) {
          var n,
            r = this
          ;(dn(e) && (e = e.__ref), dn(t) && (t = t.__ref))
          var i = 'string' == typeof e ? this.lookup((n = e)) : e,
            a = 'string' == typeof t ? this.lookup((n = t)) : t
          if (a) {
            W('string' == typeof n, 2)
            var o = new Nr(no).merge(i, a)
            if (((this.data[n] = o), o !== i && (delete this.refs[n], this.group.caching))) {
              var s = Object.create(null)
              ;(i || (s.__exists = 1),
                Object.keys(a).forEach(function (e) {
                  if (!i || i[e] !== o[e]) {
                    s[e] = 1
                    var t = $a(e)
                    ;(t === e || r.policies.hasKeyArgs(o.__typename, t) || (s[t] = 1),
                      void 0 !== o[e] || r instanceof eo || delete o[e])
                  }
                }),
                !s.__typename ||
                  (i && i.__typename) ||
                  this.policies.rootTypenamesById[n] !== o.__typename ||
                  delete s.__typename,
                Object.keys(s).forEach(function (e) {
                  return r.group.dirty(n, e)
                }))
            }
          }
        }),
        (e.prototype.modify = function (e, t) {
          var n = this,
            r = this.lookup(e)
          if (r) {
            var i = Object.create(null),
              a = !1,
              o = !0,
              s = {
                DELETE: Ka,
                INVALIDATE: Ga,
                isReference: dn,
                toReference: this.toReference,
                canRead: this.canRead,
                readField: function (t, r) {
                  return n.policies.readField('string' == typeof t ? { fieldName: t, from: r || fn(e) } : t, {
                    store: n,
                  })
                },
              }
            if (
              (Object.keys(r).forEach(function (l) {
                var u = $a(l),
                  c = r[l]
                if (void 0 !== c) {
                  var f = 'function' == typeof t ? t : t[l] || t[u]
                  if (f) {
                    var d =
                      f === Ha
                        ? Ka
                        : f(si(c), x(x({}, s), { fieldName: u, storeFieldName: l, storage: n.getStorage(e, l) }))
                    if (d === Ga) n.group.dirty(e, l)
                    else if (
                      (d === Ka && (d = void 0), d !== c && ((i[l] = d), (a = !0), (c = d), !1 !== globalThis.__DEV__))
                    ) {
                      var p = function (e) {
                        if (void 0 === n.lookup(e.__ref)) return (!1 !== globalThis.__DEV__ && W.warn(3, e), !0)
                      }
                      if (dn(d)) p(d)
                      else if (Array.isArray(d))
                        for (var h = !1, m = void 0, v = 0, y = d; v < y.length; v++) {
                          var g = y[v]
                          if (dn(g)) {
                            if (((h = !0), p(g))) break
                          } else if ('object' == typeof g && g) n.policies.identify(g)[0] && (m = g)
                          if (h && void 0 !== m) {
                            !1 !== globalThis.__DEV__ && W.warn(4, m)
                            break
                          }
                        }
                    }
                  }
                  void 0 !== c && (o = !1)
                }
              }),
              a)
            )
              return (
                this.merge(e, i),
                o &&
                  (this instanceof eo ? (this.data[e] = void 0) : delete this.data[e], this.group.dirty(e, '__exists')),
                !0
              )
          }
          return !1
        }),
        (e.prototype.delete = function (e, t, n) {
          var r,
            i = this.lookup(e)
          if (i) {
            var a = this.getFieldValue(i, '__typename'),
              o = t && n ? this.policies.getStoreFieldName({ typename: a, fieldName: t, args: n }) : t
            return this.modify(e, o ? (((r = {})[o] = Ha), r) : Ha)
          }
          return !1
        }),
        (e.prototype.evict = function (e, t) {
          var n = !1
          return (
            e.id &&
              (La.call(this.data, e.id) && (n = this.delete(e.id, e.fieldName, e.args)),
              this instanceof eo && this !== t && (n = this.parent.evict(e, t) || n),
              (e.fieldName || n) && this.group.dirty(e.id, e.fieldName || '__exists')),
            n
          )
        }),
        (e.prototype.clear = function () {
          this.replace(null)
        }),
        (e.prototype.extract = function () {
          var e = this,
            t = this.toObject(),
            n = []
          return (
            this.getRootIdSet().forEach(function (t) {
              La.call(e.policies.rootTypenamesById, t) || n.push(t)
            }),
            n.length && (t.__META = { extraRootIds: n.sort() }),
            t
          )
        }),
        (e.prototype.replace = function (e) {
          var t = this
          if (
            (Object.keys(this.data).forEach(function (n) {
              ;(e && La.call(e, n)) || t.delete(n)
            }),
            e)
          ) {
            var n = e.__META,
              r = O(e, ['__META'])
            ;(Object.keys(r).forEach(function (e) {
              t.merge(e, r[e])
            }),
              n && n.extraRootIds.forEach(this.retain, this))
          }
        }),
        (e.prototype.retain = function (e) {
          return (this.rootIds[e] = (this.rootIds[e] || 0) + 1)
        }),
        (e.prototype.release = function (e) {
          if (this.rootIds[e] > 0) {
            var t = --this.rootIds[e]
            return (t || delete this.rootIds[e], t)
          }
          return 0
        }),
        (e.prototype.getRootIdSet = function (e) {
          return (
            void 0 === e && (e = new Set()),
            Object.keys(this.rootIds).forEach(e.add, e),
            this instanceof eo
              ? this.parent.getRootIdSet(e)
              : Object.keys(this.policies.rootTypenamesById).forEach(e.add, e),
            e
          )
        }),
        (e.prototype.gc = function () {
          var e = this,
            t = this.getRootIdSet(),
            n = this.toObject()
          t.forEach(function (r) {
            La.call(n, r) && (Object.keys(e.findChildRefIds(r)).forEach(t.add, t), delete n[r])
          })
          var r = Object.keys(n)
          if (r.length) {
            for (var i = this; i instanceof eo; ) i = i.parent
            r.forEach(function (e) {
              return i.delete(e)
            })
          }
          return r
        }),
        (e.prototype.findChildRefIds = function (e) {
          if (!La.call(this.refs, e)) {
            var t = (this.refs[e] = Object.create(null)),
              n = this.data[e]
            if (!n) return t
            var r = new Set([n])
            r.forEach(function (e) {
              ;(dn(e) && (t[e.__ref] = !0),
                Nt(e) &&
                  Object.keys(e).forEach(function (t) {
                    var n = e[t]
                    Nt(n) && r.add(n)
                  }))
            })
          }
          return this.refs[e]
        }),
        (e.prototype.makeCacheKey = function () {
          return this.group.keyMaker.lookupArray(arguments)
        }),
        e
      )
    })(),
    Ja = (function () {
      function e(e, t) {
        ;(void 0 === t && (t = null), (this.caching = e), (this.parent = t), (this.d = null), this.resetCaching())
      }
      return (
        (e.prototype.resetCaching = function () {
          ;((this.d = this.caching ? or() : null), (this.keyMaker = new wt(kt)))
        }),
        (e.prototype.depend = function (e, t) {
          if (this.d) {
            this.d(Xa(e, t))
            var n = $a(t)
            ;(n !== t && this.d(Xa(e, n)), this.parent && this.parent.depend(e, t))
          }
        }),
        (e.prototype.dirty = function (e, t) {
          this.d && this.d.dirty(Xa(e, t), '__exists' === t ? 'forget' : 'setDirty')
        }),
        e
      )
    })()
  function Xa(e, t) {
    return t + '#' + e
  }
  function Za(e, t) {
    ro(e) && e.group.depend(t, '__exists')
  }
  !(function (e) {
    var t = (function (e) {
      function t(t) {
        var n = t.policies,
          r = t.resultCaching,
          i = void 0 === r || r,
          a = t.seed,
          o = e.call(this, n, new Ja(i)) || this
        return ((o.stump = new to(o)), (o.storageTrie = new wt(kt)), a && o.replace(a), o)
      }
      return (
        T(t, e),
        (t.prototype.addLayer = function (e, t) {
          return this.stump.addLayer(e, t)
        }),
        (t.prototype.removeLayer = function () {
          return this
        }),
        (t.prototype.getStorage = function () {
          return this.storageTrie.lookupArray(arguments)
        }),
        t
      )
    })(e)
    e.Root = t
  })(Ya || (Ya = {}))
  var eo = (function (e) {
      function t(t, n, r, i) {
        var a = e.call(this, n.policies, i) || this
        return ((a.id = t), (a.parent = n), (a.replay = r), (a.group = i), r(a), a)
      }
      return (
        T(t, e),
        (t.prototype.addLayer = function (e, n) {
          return new t(e, this, n, this.group)
        }),
        (t.prototype.removeLayer = function (e) {
          var t = this,
            n = this.parent.removeLayer(e)
          return e === this.id
            ? (this.group.caching &&
                Object.keys(this.data).forEach(function (e) {
                  var r = t.data[e],
                    i = n.lookup(e)
                  i
                    ? r
                      ? r !== i &&
                        Object.keys(r).forEach(function (n) {
                          Di(r[n], i[n]) || t.group.dirty(e, n)
                        })
                      : (t.group.dirty(e, '__exists'),
                        Object.keys(i).forEach(function (n) {
                          t.group.dirty(e, n)
                        }))
                    : t.delete(e)
                }),
              n)
            : n === this.parent
              ? this
              : n.addLayer(this.id, this.replay)
        }),
        (t.prototype.toObject = function () {
          return x(x({}, this.parent.toObject()), this.data)
        }),
        (t.prototype.findChildRefIds = function (t) {
          var n = this.parent.findChildRefIds(t)
          return La.call(this.data, t) ? x(x({}, n), e.prototype.findChildRefIds.call(this, t)) : n
        }),
        (t.prototype.getStorage = function () {
          for (var e = this.parent; e.parent; ) e = e.parent
          return e.getStorage.apply(e, arguments)
        }),
        t
      )
    })(Ya),
    to = (function (e) {
      function t(t) {
        return e.call(this, 'EntityStore.Stump', t, function () {}, new Ja(t.group.caching, t.group)) || this
      }
      return (
        T(t, e),
        (t.prototype.removeLayer = function () {
          return this
        }),
        (t.prototype.merge = function (e, t) {
          return this.parent.merge(e, t)
        }),
        t
      )
    })(eo)
  function no(e, t, n) {
    var r = e[n],
      i = t[n]
    return Di(r, i) ? r : i
  }
  function ro(e) {
    return !!(e instanceof Ya && e.group.caching)
  }
  var io = (function () {
    function e() {
      ;((this.known = new (St ? WeakSet : Set)()),
        (this.pool = new wt(kt)),
        (this.passes = new WeakMap()),
        (this.keysByJSON = new Map()),
        (this.empty = this.admit({})))
    }
    return (
      (e.prototype.isKnown = function (e) {
        return Nt(e) && this.known.has(e)
      }),
      (e.prototype.pass = function (e) {
        if (Nt(e)) {
          var t = (function (e) {
            return Nt(e) ? (mr(e) ? e.slice(0) : x({ __proto__: Object.getPrototypeOf(e) }, e)) : e
          })(e)
          return (this.passes.set(t, e), t)
        }
        return e
      }),
      (e.prototype.admit = function (e) {
        var t = this
        if (Nt(e)) {
          var n = this.passes.get(e)
          if (n) return n
          switch (Object.getPrototypeOf(e)) {
            case Array.prototype:
              if (this.known.has(e)) return e
              var r = e.map(this.admit, this)
              return (
                (s = this.pool.lookupArray(r)).array ||
                  (this.known.add((s.array = r)), !1 !== globalThis.__DEV__ && Object.freeze(r)),
                s.array
              )
            case null:
            case Object.prototype:
              if (this.known.has(e)) return e
              var i = Object.getPrototypeOf(e),
                a = [i],
                o = this.sortedKeys(e)
              a.push(o.json)
              var s,
                l = a.length
              if (
                (o.sorted.forEach(function (n) {
                  a.push(t.admit(e[n]))
                }),
                !(s = this.pool.lookupArray(a)).object)
              ) {
                var u = (s.object = Object.create(i))
                ;(this.known.add(u),
                  o.sorted.forEach(function (e, t) {
                    u[e] = a[l + t]
                  }),
                  !1 !== globalThis.__DEV__ && Object.freeze(u))
              }
              return s.object
          }
        }
        return e
      }),
      (e.prototype.sortedKeys = function (e) {
        var t = Object.keys(e),
          n = this.pool.lookupArray(t)
        if (!n.keys) {
          t.sort()
          var r = JSON.stringify(t)
          ;(n.keys = this.keysByJSON.get(r)) || this.keysByJSON.set(r, (n.keys = { sorted: t, json: r }))
        }
        return n.keys
      }),
      e
    )
  })()
  function ao(e) {
    return [e.selectionSet, e.objectOrReference, e.context, e.context.canonizeResults]
  }
  var oo = (function () {
    function e(e) {
      var t = this
      ;((this.knownResults = new (kt ? WeakMap : Map)()),
        (this.config = gi(e, { addTypename: !1 !== e.addTypename, canonizeResults: Va(e) })),
        (this.canon = e.canon || new io()),
        (this.executeSelectionSet = cr(
          function (e) {
            var n,
              r = e.context.canonizeResults,
              i = ao(e)
            i[3] = !r
            var a = (n = t.executeSelectionSet).peek.apply(n, i)
            return a
              ? r
                ? x(x({}, a), { result: t.canon.admit(a.result) })
                : a
              : (Za(e.context.store, e.enclosingRef.__ref), t.execSelectionSetImpl(e))
          },
          {
            max: this.config.resultCacheMaxSize || Kt['inMemoryCache.executeSelectionSet'] || 5e4,
            keyArgs: ao,
            makeCacheKey: function (e, t, n, r) {
              if (ro(n.store)) return n.store.makeCacheKey(e, dn(t) ? t.__ref : t, n.varString, r)
            },
          },
        )),
        (this.executeSubSelectedArray = cr(
          function (e) {
            return (Za(e.context.store, e.enclosingRef.__ref), t.execSubSelectedArrayImpl(e))
          },
          {
            max: this.config.resultCacheMaxSize || Kt['inMemoryCache.executeSubSelectedArray'] || 1e4,
            makeCacheKey: function (e) {
              var t = e.field,
                n = e.array,
                r = e.context
              if (ro(r.store)) return r.store.makeCacheKey(t, n, r.varString)
            },
          },
        )))
    }
    return (
      (e.prototype.resetCanon = function () {
        this.canon = new io()
      }),
      (e.prototype.diffQueryAgainstStore = function (e) {
        var t = e.store,
          n = e.query,
          r = e.rootId,
          i = void 0 === r ? 'ROOT_QUERY' : r,
          a = e.variables,
          o = e.returnPartialData,
          s = void 0 === o || o,
          l = e.canonizeResults,
          u = void 0 === l ? this.config.canonizeResults : l,
          c = this.config.cache.policies
        a = x(x({}, Cn(Tn(n))), a)
        var f,
          d = fn(i),
          p = this.executeSelectionSet({
            selectionSet: On(n).selectionSet,
            objectOrReference: d,
            enclosingRef: d,
            context: x(
              { store: t, query: n, policies: c, variables: a, varString: ln(a), canonizeResults: u },
              Wa(n, this.config.fragments),
            ),
          })
        if (p.missing && ((f = [new Ma(so(p.missing), p.missing, n, a)]), !s)) throw f[0]
        return { result: p.result, complete: !f, missing: f }
      }),
      (e.prototype.isFresh = function (e, t, n, r) {
        if (ro(r.store) && this.knownResults.get(e) === n) {
          var i = this.executeSelectionSet.peek(n, t, r, this.canon.isKnown(e))
          if (i && e === i.result) return !0
        }
        return !1
      }),
      (e.prototype.execSelectionSetImpl = function (e) {
        var t = this,
          n = e.selectionSet,
          r = e.objectOrReference,
          i = e.enclosingRef,
          a = e.context
        if (dn(r) && !a.policies.rootTypenamesById[r.__ref] && !a.store.has(r.__ref))
          return { result: this.canon.empty, missing: 'Dangling reference to missing '.concat(r.__ref, ' object') }
        var o,
          s = a.variables,
          l = a.policies,
          u = a.store.getFieldValue(r, '__typename'),
          c = [],
          f = new Nr()
        function d(e, t) {
          var n
          return (e.missing && (o = f.merge(o, (((n = {})[t] = e.missing), n))), e.result)
        }
        this.config.addTypename && 'string' == typeof u && !l.rootIdsByTypename[u] && c.push({ __typename: u })
        var p = new Set(n.selections)
        p.forEach(function (e) {
          var n, h
          if (pt(e, s))
            if (En(e)) {
              var m = l.readField({ fieldName: e.name.value, field: e, variables: a.variables, from: r }, a),
                v = gn(e)
              ;(void 0 === m
                ? _r.added(e) ||
                  (o = f.merge(
                    o,
                    (((n = {})[v] = "Can't find field '"
                      .concat(e.name.value, "' on ")
                      .concat(dn(r) ? r.__ref + ' object' : 'object ' + JSON.stringify(r, null, 2))),
                    n),
                  ))
                : mr(m)
                  ? m.length > 0 &&
                    (m = d(t.executeSubSelectedArray({ field: e, array: m, enclosingRef: i, context: a }), v))
                  : e.selectionSet
                    ? null != m &&
                      (m = d(
                        t.executeSelectionSet({
                          selectionSet: e.selectionSet,
                          objectOrReference: m,
                          enclosingRef: dn(m) ? m : i,
                          context: a,
                        }),
                        v,
                      ))
                    : a.canonizeResults && (m = t.canon.pass(m)),
                void 0 !== m && c.push((((h = {})[v] = m), h)))
            } else {
              var y = Pt(e, a.lookupFragment)
              if (!y && e.kind === be.FRAGMENT_SPREAD) throw K(10, e.name.value)
              y && l.fragmentMatches(y, u) && y.selectionSet.selections.forEach(p.add, p)
            }
        })
        var h = { result: Cr(c), missing: o },
          m = a.canonizeResults ? this.canon.admit(h) : si(h)
        return (m.result && this.knownResults.set(m.result, n), m)
      }),
      (e.prototype.execSubSelectedArrayImpl = function (e) {
        var t,
          n = this,
          r = e.field,
          i = e.array,
          a = e.enclosingRef,
          o = e.context,
          s = new Nr()
        function l(e, n) {
          var r
          return (e.missing && (t = s.merge(t, (((r = {})[n] = e.missing), r))), e.result)
        }
        return (
          r.selectionSet && (i = i.filter(o.store.canRead)),
          (i = i.map(function (e, t) {
            return null === e
              ? null
              : mr(e)
                ? l(n.executeSubSelectedArray({ field: r, array: e, enclosingRef: a, context: o }), t)
                : r.selectionSet
                  ? l(
                      n.executeSelectionSet({
                        selectionSet: r.selectionSet,
                        objectOrReference: e,
                        enclosingRef: dn(e) ? e : a,
                        context: o,
                      }),
                      t,
                    )
                  : (!1 !== globalThis.__DEV__ &&
                      (function (e, t, n) {
                        if (!t.selectionSet) {
                          var r = new Set([n])
                          r.forEach(function (n) {
                            Nt(n) &&
                              (W(
                                !dn(n),
                                11,
                                (function (e, t) {
                                  return dn(t) ? e.get(t.__ref, '__typename') : t && t.__typename
                                })(e, n),
                                t.name.value,
                              ),
                              Object.values(n).forEach(r.add, r))
                          })
                        }
                      })(o.store, r, e),
                    e)
          })),
          { result: o.canonizeResults ? this.canon.admit(i) : i, missing: t }
        )
      }),
      e
    )
  })()
  function so(e) {
    try {
      JSON.stringify(e, function (e, t) {
        if ('string' == typeof t) throw t
        return t
      })
    } catch (e) {
      return e
    }
  }
  var lo = new An(),
    uo = new WeakMap()
  function co(e) {
    var t = uo.get(e)
    return (t || uo.set(e, (t = { vars: new Set(), dep: or() })), t)
  }
  function fo(e) {
    co(e).vars.forEach(function (t) {
      return t.forgetCache(e)
    })
  }
  function po(e) {
    var t = new Set(),
      n = new Set(),
      r = function (a) {
        if (arguments.length > 0) {
          if (e !== a) {
            ;((e = a),
              t.forEach(function (e) {
                ;(co(e).dep.dirty(r),
                  (function (e) {
                    e.broadcastWatches && e.broadcastWatches()
                  })(e))
              }))
            var o = Array.from(n)
            ;(n.clear(),
              o.forEach(function (t) {
                return t(e)
              }))
          }
        } else {
          var s = lo.getValue()
          s && (i(s), co(s).dep(r))
        }
        return e
      }
    r.onNextChange = function (e) {
      return (
        n.add(e),
        function () {
          n.delete(e)
        }
      )
    }
    var i = (r.attachCache = function (e) {
      return (t.add(e), co(e).vars.add(r), r)
    })
    return (
      (r.forgetCache = function (e) {
        return t.delete(e)
      }),
      r
    )
  }
  var ho = Object.create(null)
  function mo(e) {
    var t = JSON.stringify(e)
    return ho[t] || (ho[t] = Object.create(null))
  }
  function vo(e) {
    var t = mo(e)
    return (
      t.keyFieldsFn ||
      (t.keyFieldsFn = function (t, n) {
        var r = function (e, t) {
            return n.readField(t, e)
          },
          i = (n.keyObject = go(e, function (e) {
            var i = wo(n.storeObject, e, r)
            return (
              void 0 === i && t !== n.storeObject && La.call(t, e[0]) && (i = wo(t, e, Eo)),
              W(void 0 !== i, 5, e.join('.'), t),
              i
            )
          }))
        return ''.concat(n.typename, ':').concat(JSON.stringify(i))
      })
    )
  }
  function yo(e) {
    var t = mo(e)
    return (
      t.keyArgsFn ||
      (t.keyArgsFn = function (t, n) {
        var r = n.field,
          i = n.variables,
          a = n.fieldName,
          o = go(e, function (e) {
            var n = e[0],
              a = n.charAt(0)
            if ('@' !== a)
              if ('$' !== a) {
                if (t) return wo(t, e)
              } else {
                var o = n.slice(1)
                if (i && La.call(i, o)) {
                  var s = e.slice(0)
                  return ((s[0] = o), wo(i, s))
                }
              }
            else if (r && vr(r.directives)) {
              var l = n.slice(1),
                u = r.directives.find(function (e) {
                  return e.name.value === l
                }),
                c = u && yn(u, i)
              return c && wo(c, e.slice(1))
            }
          }),
          s = JSON.stringify(o)
        return ((t || '{}' !== s) && (a += ':' + s), a)
      })
    )
  }
  function go(e, t) {
    var n = new Nr()
    return bo(e).reduce(function (e, r) {
      var i,
        a = t(r)
      if (void 0 !== a) {
        for (var o = r.length - 1; o >= 0; --o) (((i = {})[r[o]] = a), (a = i))
        e = n.merge(e, a)
      }
      return e
    }, Object.create(null))
  }
  function bo(e) {
    var t = mo(e)
    if (!t.paths) {
      var n = (t.paths = []),
        r = []
      e.forEach(function (t, i) {
        mr(t)
          ? (bo(t).forEach(function (e) {
              return n.push(r.concat(e))
            }),
            (r.length = 0))
          : (r.push(t), mr(e[i + 1]) || (n.push(r.slice(0)), (r.length = 0)))
      })
    }
    return t.paths
  }
  function Eo(e, t) {
    return e[t]
  }
  function wo(e, t, n) {
    return (
      (n = n || Eo),
      _o(
        t.reduce(function e(t, r) {
          return mr(t)
            ? t.map(function (t) {
                return e(t, r)
              })
            : t && n(t, r)
        }, e),
      )
    )
  }
  function _o(e) {
    return Nt(e)
      ? mr(e)
        ? e.map(_o)
        : go(Object.keys(e).sort(), function (t) {
            return wo(e, t)
          })
      : e
  }
  function ko(e) {
    return void 0 !== e.args ? e.args : e.field ? yn(e.field, e.variables) : null
  }
  var So = function () {},
    To = function (e, t) {
      return t.fieldName
    },
    xo = function (e, t, n) {
      return (0, n.mergeObjects)(e, t)
    },
    Oo = function (e, t) {
      return t
    },
    Co = (function () {
      function e(e) {
        ;((this.config = e),
          (this.typePolicies = Object.create(null)),
          (this.toBeAdded = Object.create(null)),
          (this.supertypeMap = new Map()),
          (this.fuzzySubtypes = new Map()),
          (this.rootIdsByTypename = Object.create(null)),
          (this.rootTypenamesById = Object.create(null)),
          (this.usingPossibleTypes = !1),
          (this.config = x({ dataIdFromObject: za }, e)),
          (this.cache = this.config.cache),
          this.setRootTypename('Query'),
          this.setRootTypename('Mutation'),
          this.setRootTypename('Subscription'),
          e.possibleTypes && this.addPossibleTypes(e.possibleTypes),
          e.typePolicies && this.addTypePolicies(e.typePolicies))
      }
      return (
        (e.prototype.identify = function (e, t) {
          var n,
            r = this,
            i =
              (t && (t.typename || (null === (n = t.storeObject) || void 0 === n ? void 0 : n.__typename))) ||
              e.__typename
          if (i === this.rootTypenamesById.ROOT_QUERY) return ['ROOT_QUERY']
          var a,
            o = (t && t.storeObject) || e,
            s = x(x({}, t), {
              typename: i,
              storeObject: o,
              readField:
                (t && t.readField) ||
                function () {
                  var e = No(arguments, o)
                  return r.readField(e, { store: r.cache.data, variables: e.variables })
                },
            }),
            l = i && this.getTypePolicy(i),
            u = (l && l.keyFn) || this.config.dataIdFromObject
          return (
            Oa.withValue(!0, function () {
              for (; u; ) {
                var t = u(x(x({}, e), o), s)
                if (!mr(t)) {
                  a = t
                  break
                }
                u = vo(t)
              }
            }),
            (a = a ? String(a) : void 0),
            s.keyObject ? [a, s.keyObject] : [a]
          )
        }),
        (e.prototype.addTypePolicies = function (e) {
          var t = this
          Object.keys(e).forEach(function (n) {
            var r = e[n],
              i = r.queryType,
              a = r.mutationType,
              o = r.subscriptionType,
              s = O(r, ['queryType', 'mutationType', 'subscriptionType'])
            ;(i && t.setRootTypename('Query', n),
              a && t.setRootTypename('Mutation', n),
              o && t.setRootTypename('Subscription', n),
              La.call(t.toBeAdded, n) ? t.toBeAdded[n].push(s) : (t.toBeAdded[n] = [s]))
          })
        }),
        (e.prototype.updateTypePolicy = function (e, t, n) {
          var r = this.getTypePolicy(e),
            i = t.keyFields,
            a = t.fields
          function o(e, t) {
            e.merge = 'function' == typeof t ? t : !0 === t ? xo : !1 === t ? Oo : e.merge
          }
          ;(o(r, t.merge),
            (r.keyFn = !1 === i ? So : mr(i) ? vo(i) : 'function' == typeof i ? i : r.keyFn),
            a &&
              Object.keys(a).forEach(function (t) {
                var r = n[t]
                ;(r && (null == r ? void 0 : r.typename) === e) || (r = n[t] = { typename: e })
                var i = a[t]
                if ('function' == typeof i) r.read = i
                else {
                  var s = i.keyArgs,
                    l = i.read,
                    u = i.merge
                  ;((r.keyFn = !1 === s ? To : mr(s) ? yo(s) : 'function' == typeof s ? s : r.keyFn),
                    'function' == typeof l && (r.read = l),
                    o(r, u))
                }
                r.read && r.merge && (r.keyFn = r.keyFn || To)
              }))
        }),
        (e.prototype.setRootTypename = function (e, t) {
          void 0 === t && (t = e)
          var n = 'ROOT_' + e.toUpperCase(),
            r = this.rootTypenamesById[n]
          t !== r &&
            (W(!r || r === e, 6, e),
            r && delete this.rootIdsByTypename[r],
            (this.rootIdsByTypename[t] = n),
            (this.rootTypenamesById[n] = t))
        }),
        (e.prototype.addPossibleTypes = function (e) {
          var t = this
          ;((this.usingPossibleTypes = !0),
            Object.keys(e).forEach(function (n) {
              ;(t.getSupertypeSet(n, !0),
                e[n].forEach(function (e) {
                  t.getSupertypeSet(e, !0).add(n)
                  var r = e.match(Qa)
                  ;(r && r[0] === e) || t.fuzzySubtypes.set(e, new RegExp(e))
                }))
            }))
        }),
        (e.prototype.getTypePolicy = function (e) {
          var t = this
          if (!La.call(this.typePolicies, e)) {
            var n = (this.typePolicies[e] = Object.create(null))
            n.fields = Object.create(null)
            var r = this.supertypeMap.get(e)
            ;(!r &&
              this.fuzzySubtypes.size &&
              ((r = this.getSupertypeSet(e, !0)),
              this.fuzzySubtypes.forEach(function (n, i) {
                if (n.test(e)) {
                  var a = t.supertypeMap.get(i)
                  a &&
                    a.forEach(function (e) {
                      return r.add(e)
                    })
                }
              })),
              r &&
                r.size &&
                r.forEach(function (e) {
                  var r = t.getTypePolicy(e),
                    i = r.fields,
                    a = O(r, ['fields'])
                  ;(Object.assign(n, a), Object.assign(n.fields, i))
                }))
          }
          var i = this.toBeAdded[e]
          return (
            i &&
              i.length &&
              i.splice(0).forEach(function (n) {
                t.updateTypePolicy(e, n, t.typePolicies[e].fields)
              }),
            this.typePolicies[e]
          )
        }),
        (e.prototype.getFieldPolicy = function (e, t) {
          if (e) return this.getTypePolicy(e).fields[t]
        }),
        (e.prototype.getSupertypeSet = function (e, t) {
          var n = this.supertypeMap.get(e)
          return (!n && t && this.supertypeMap.set(e, (n = new Set())), n)
        }),
        (e.prototype.fragmentMatches = function (e, t, n, r) {
          var i = this
          if (!e.typeCondition) return !0
          if (!t) return !1
          var a = e.typeCondition.name.value
          if (t === a) return !0
          if (this.usingPossibleTypes && this.supertypeMap.has(a))
            for (
              var o = this.getSupertypeSet(t, !0),
                s = [o],
                l = function (e) {
                  var t = i.getSupertypeSet(e, !1)
                  t && t.size && s.indexOf(t) < 0 && s.push(t)
                },
                u = !(!n || !this.fuzzySubtypes.size),
                c = !1,
                f = 0;
              f < s.length;
              ++f
            ) {
              var d = s[f]
              if (d.has(a)) return (o.has(a) || (c && !1 !== globalThis.__DEV__ && W.warn(7, t, a), o.add(a)), !0)
              ;(d.forEach(l),
                u &&
                  f === s.length - 1 &&
                  Ua(e.selectionSet, n, r) &&
                  ((u = !1),
                  (c = !0),
                  this.fuzzySubtypes.forEach(function (e, n) {
                    var r = t.match(e)
                    r && r[0] === t && l(n)
                  })))
            }
          return !1
        }),
        (e.prototype.hasKeyArgs = function (e, t) {
          var n = this.getFieldPolicy(e, t)
          return !(!n || !n.keyFn)
        }),
        (e.prototype.getStoreFieldName = function (e) {
          var t,
            n = e.typename,
            r = e.fieldName,
            i = this.getFieldPolicy(n, r),
            a = i && i.keyFn
          if (a && n)
            for (
              var o = { typename: n, fieldName: r, field: e.field || null, variables: e.variables }, s = ko(e);
              a;
            ) {
              var l = a(s, o)
              if (!mr(l)) {
                t = l || r
                break
              }
              a = yo(l)
            }
          return (
            void 0 === t &&
              (t = e.field
                ? (function (e, t) {
                    var n = null
                    e.directives &&
                      ((n = {}),
                      e.directives.forEach(function (e) {
                        ;((n[e.name.value] = {}),
                          e.arguments &&
                            e.arguments.forEach(function (r) {
                              var i = r.name,
                                a = r.value
                              return pn(n[e.name.value], i, a, t)
                            }))
                      }))
                    var r = null
                    return (
                      e.arguments &&
                        e.arguments.length &&
                        ((r = {}),
                        e.arguments.forEach(function (e) {
                          var n = e.name,
                            i = e.value
                          return pn(r, n, i, t)
                        })),
                      vn(e.name.value, r, n)
                    )
                  })(e.field, e.variables)
                : vn(r, ko(e))),
            !1 === t ? r : r === $a(t) ? t : r + ':' + t
          )
        }),
        (e.prototype.readField = function (e, t) {
          var n = e.from
          if (n && (e.field || e.fieldName)) {
            if (void 0 === e.typename) {
              var r = t.store.getFieldValue(n, '__typename')
              r && (e.typename = r)
            }
            var i = this.getStoreFieldName(e),
              a = $a(i),
              o = t.store.getFieldValue(n, i),
              s = this.getFieldPolicy(e.typename, a),
              l = s && s.read
            if (l) {
              var u = Ro(this, n, e, t, t.store.getStorage(dn(n) ? n.__ref : n, i))
              return lo.withValue(this.cache, l, [o, u])
            }
            return o
          }
        }),
        (e.prototype.getReadFunction = function (e, t) {
          var n = this.getFieldPolicy(e, t)
          return n && n.read
        }),
        (e.prototype.getMergeFunction = function (e, t, n) {
          var r = this.getFieldPolicy(e, t),
            i = r && r.merge
          return (!i && n && (i = (r = this.getTypePolicy(n)) && r.merge), i)
        }),
        (e.prototype.runMergeFunction = function (e, t, n, r, i) {
          var a = n.field,
            o = n.typename,
            s = n.merge
          return s === xo
            ? Do(r.store)(e, t)
            : s === Oo
              ? t
              : (r.overwrite && (e = void 0),
                s(
                  e,
                  t,
                  Ro(
                    this,
                    void 0,
                    { typename: o, fieldName: a.name.value, field: a, variables: r.variables },
                    r,
                    i || Object.create(null),
                  ),
                ))
        }),
        e
      )
    })()
  function Ro(e, t, n, r, i) {
    var a = e.getStoreFieldName(n),
      o = $a(a),
      s = n.variables || r.variables,
      l = r.store,
      u = l.toReference,
      c = l.canRead
    return {
      args: ko(n),
      field: n.field || null,
      fieldName: o,
      storeFieldName: a,
      variables: s,
      isReference: dn,
      toReference: u,
      storage: i,
      cache: e.cache,
      canRead: c,
      readField: function () {
        return e.readField(No(arguments, t, s), r)
      },
      mergeObjects: Do(r.store),
    }
  }
  function No(e, t, n) {
    var r,
      i = e[0],
      a = e[1],
      o = e.length
    return (
      'string' == typeof i
        ? (r = { fieldName: i, from: o > 1 ? a : t })
        : ((r = x({}, i)), La.call(r, 'from') || (r.from = t)),
      !1 !== globalThis.__DEV__ && void 0 === r.from && !1 !== globalThis.__DEV__ && W.warn(8, U(Array.from(e))),
      void 0 === r.variables && (r.variables = n),
      r
    )
  }
  function Do(e) {
    return function (t, n) {
      if (mr(t) || mr(n)) throw K(9)
      if (Nt(t) && Nt(n)) {
        var r = e.getFieldValue(t, '__typename'),
          i = e.getFieldValue(n, '__typename')
        if (r && i && r !== i) return n
        if (dn(t) && Ba(n)) return (e.merge(t.__ref, n), t)
        if (Ba(t) && dn(n)) return (e.merge(t, n.__ref), n)
        if (Ba(t) && Ba(n)) return x(x({}, t), n)
      }
      return n
    }
  }
  function Io(e, t, n) {
    var r = ''.concat(t).concat(n),
      i = e.flavors.get(r)
    return (
      i ||
        e.flavors.set(
          r,
          (i = e.clientOnly === t && e.deferred === n ? e : x(x({}, e), { clientOnly: t, deferred: n })),
        ),
      i
    )
  }
  var Po = (function () {
      function e(e, t, n) {
        ;((this.cache = e), (this.reader = t), (this.fragments = n))
      }
      return (
        (e.prototype.writeToStore = function (e, t) {
          var n = this,
            r = t.query,
            i = t.result,
            a = t.dataId,
            o = t.variables,
            s = t.overwrite,
            l = _n(r),
            u = new Nr()
          o = x(x({}, Cn(l)), o)
          var c = x(
              x(
                {
                  store: e,
                  written: Object.create(null),
                  merge: function (e, t) {
                    return u.merge(e, t)
                  },
                  variables: o,
                  varString: ln(o),
                },
                Wa(r, this.fragments),
              ),
              { overwrite: !!s, incomingById: new Map(), clientOnly: !1, deferred: !1, flavors: new Map() },
            ),
            f = this.processSelectionSet({
              result: i || Object.create(null),
              dataId: a,
              selectionSet: l.selectionSet,
              mergeTree: { map: new Map() },
              context: c,
            })
          if (!dn(f)) throw K(12, i)
          return (
            c.incomingById.forEach(function (t, r) {
              var i = t.storeObject,
                a = t.mergeTree,
                o = t.fieldNodeSet,
                s = fn(r)
              if (a && a.map.size) {
                var l = n.applyMerges(a, s, i, c)
                if (dn(l)) return
                i = l
              }
              if (!1 !== globalThis.__DEV__ && !c.overwrite) {
                var u = Object.create(null)
                o.forEach(function (e) {
                  e.selectionSet && (u[e.name.value] = !0)
                })
                Object.keys(i).forEach(function (e) {
                  ;(function (e) {
                    return !0 === u[$a(e)]
                  })(e) &&
                    !(function (e) {
                      var t = a && a.map.get(e)
                      return Boolean(t && t.info && t.info.merge)
                    })(e) &&
                    (function (e, t, n, r) {
                      var i = function (e) {
                          var t = r.getFieldValue(e, n)
                          return 'object' == typeof t && t
                        },
                        a = i(e)
                      if (!a) return
                      var o = i(t)
                      if (!o) return
                      if (dn(a)) return
                      if (Di(a, o)) return
                      if (
                        Object.keys(a).every(function (e) {
                          return void 0 !== r.getFieldValue(o, e)
                        })
                      )
                        return
                      var s = r.getFieldValue(e, '__typename') || r.getFieldValue(t, '__typename'),
                        l = $a(n),
                        u = ''.concat(s, '.').concat(l)
                      if (zo.has(u)) return
                      zo.add(u)
                      var c = []
                      mr(a) ||
                        mr(o) ||
                        [a, o].forEach(function (e) {
                          var t = r.getFieldValue(e, '__typename')
                          'string' != typeof t || c.includes(t) || c.push(t)
                        })
                      !1 !== globalThis.__DEV__ &&
                        W.warn(
                          15,
                          l,
                          s,
                          c.length
                            ? 'either ensure all objects of type ' +
                                c.join(' and ') +
                                ' have an ID or a custom merge function, or '
                            : '',
                          u,
                          x({}, a),
                          x({}, o),
                        )
                    })(s, i, e, c.store)
                })
              }
              e.merge(r, i)
            }),
            e.retain(f.__ref),
            f
          )
        }),
        (e.prototype.processSelectionSet = function (e) {
          var t = this,
            n = e.dataId,
            r = e.result,
            i = e.selectionSet,
            a = e.context,
            o = e.mergeTree,
            s = this.cache.policies,
            l = Object.create(null),
            u = (n && s.rootTypenamesById[n]) || bn(r, i, a.fragmentMap) || (n && a.store.get(n, '__typename'))
          'string' == typeof u && (l.__typename = u)
          var c = function () {
              var e = No(arguments, l, a.variables)
              if (dn(e.from)) {
                var t = a.incomingById.get(e.from.__ref)
                if (t) {
                  var n = s.readField(x(x({}, e), { from: t.storeObject }), a)
                  if (void 0 !== n) return n
                }
              }
              return s.readField(e, a)
            },
            f = new Set()
          this.flattenFields(i, r, a, u).forEach(function (e, n) {
            var i,
              a = gn(n),
              d = r[a]
            if ((f.add(n), void 0 !== d)) {
              var p = s.getStoreFieldName({ typename: u, fieldName: n.name.value, field: n, variables: e.variables }),
                h = Ao(o, p),
                m = t.processFieldValue(d, n, n.selectionSet ? Io(e, !1, !1) : e, h),
                v = void 0
              n.selectionSet && (dn(m) || Ba(m)) && (v = c('__typename', m))
              var y = s.getMergeFunction(u, n.name.value, v)
              ;(y ? (h.info = { field: n, typename: u, merge: y }) : qo(o, p), (l = e.merge(l, (((i = {})[p] = m), i))))
            } else
              !1 === globalThis.__DEV__ ||
                e.clientOnly ||
                e.deferred ||
                _r.added(n) ||
                s.getReadFunction(u, n.name.value) ||
                (!1 !== globalThis.__DEV__ && W.error(13, gn(n), r))
          })
          try {
            var d = s.identify(r, {
                typename: u,
                selectionSet: i,
                fragmentMap: a.fragmentMap,
                storeObject: l,
                readField: c,
              }),
              p = d[0],
              h = d[1]
            ;((n = n || p), h && (l = a.merge(l, h)))
          } catch (e) {
            if (!n) throw e
          }
          if ('string' == typeof n) {
            var m = fn(n),
              v = a.written[n] || (a.written[n] = [])
            if (v.indexOf(i) >= 0) return m
            if ((v.push(i), this.reader && this.reader.isFresh(r, m, i, a))) return m
            var y = a.incomingById.get(n)
            return (
              y
                ? ((y.storeObject = a.merge(y.storeObject, l)),
                  (y.mergeTree = Mo(y.mergeTree, o)),
                  f.forEach(function (e) {
                    return y.fieldNodeSet.add(e)
                  }))
                : a.incomingById.set(n, { storeObject: l, mergeTree: Lo(o) ? void 0 : o, fieldNodeSet: f }),
              m
            )
          }
          return l
        }),
        (e.prototype.processFieldValue = function (e, t, n, r) {
          var i = this
          return t.selectionSet && null !== e
            ? mr(e)
              ? e.map(function (e, a) {
                  var o = i.processFieldValue(e, t, n, Ao(r, a))
                  return (qo(r, a), o)
                })
              : this.processSelectionSet({ result: e, selectionSet: t.selectionSet, context: n, mergeTree: r })
            : !1 !== globalThis.__DEV__
              ? ii(e)
              : e
        }),
        (e.prototype.flattenFields = function (e, t, n, r) {
          void 0 === r && (r = bn(t, e, n.fragmentMap))
          var i = new Map(),
            a = this.cache.policies,
            o = new wt(!1)
          return (
            (function e(s, l) {
              var u = o.lookup(s, l.clientOnly, l.deferred)
              u.visited ||
                ((u.visited = !0),
                s.selections.forEach(function (o) {
                  if (pt(o, n.variables)) {
                    var s = l.clientOnly,
                      u = l.deferred
                    if (
                      ((s && u) ||
                        !vr(o.directives) ||
                        o.directives.forEach(function (e) {
                          var t = e.name.value
                          if (('client' === t && (s = !0), 'defer' === t)) {
                            var r = yn(e, n.variables)
                            ;(r && !1 === r.if) || (u = !0)
                          }
                        }),
                      En(o))
                    ) {
                      var c = i.get(o)
                      ;(c && ((s = s && c.clientOnly), (u = u && c.deferred)), i.set(o, Io(n, s, u)))
                    } else {
                      var f = Pt(o, n.lookupFragment)
                      if (!f && o.kind === be.FRAGMENT_SPREAD) throw K(14, o.name.value)
                      f && a.fragmentMatches(f, r, t, n.variables) && e(f.selectionSet, Io(n, s, u))
                    }
                  }
                }))
            })(e, n),
            i
          )
        }),
        (e.prototype.applyMerges = function (e, t, n, r, i) {
          var a,
            o = this
          if (e.map.size && !dn(n)) {
            var s,
              l = mr(n) || (!dn(t) && !Ba(t)) ? void 0 : t,
              u = n
            l && !i && (i = [dn(l) ? l.__ref : l])
            var c = function (e, t) {
              return mr(e) ? ('number' == typeof t ? e[t] : void 0) : r.store.getFieldValue(e, String(t))
            }
            ;(e.map.forEach(function (e, t) {
              var n = c(l, t),
                a = c(u, t)
              if (void 0 !== a) {
                i && i.push(t)
                var f = o.applyMerges(e, n, a, r, i)
                ;(f !== a && (s = s || new Map()).set(t, f), i && W(i.pop() === t))
              }
            }),
              s &&
                ((n = mr(u) ? u.slice(0) : x({}, u)),
                s.forEach(function (e, t) {
                  n[t] = e
                })))
          }
          return e.info
            ? this.cache.policies.runMergeFunction(t, n, e.info, r, i && (a = r.store).getStorage.apply(a, i))
            : n
        }),
        e
      )
    })(),
    Fo = []
  function Ao(e, t) {
    var n = e.map
    return (n.has(t) || n.set(t, Fo.pop() || { map: new Map() }), n.get(t))
  }
  function Mo(e, t) {
    if (e === t || !t || Lo(t)) return e
    if (!e || Lo(e)) return t
    var n = e.info && t.info ? x(x({}, e.info), t.info) : e.info || t.info,
      r = e.map.size && t.map.size,
      i = { info: n, map: r ? new Map() : e.map.size ? e.map : t.map }
    if (r) {
      var a = new Set(t.map.keys())
      ;(e.map.forEach(function (e, n) {
        ;(i.map.set(n, Mo(e, t.map.get(n))), a.delete(n))
      }),
        a.forEach(function (n) {
          i.map.set(n, Mo(t.map.get(n), e.map.get(n)))
        }))
    }
    return i
  }
  function Lo(e) {
    return !e || !(e.info || e.map.size)
  }
  function qo(e, t) {
    var n = e.map,
      r = n.get(t)
    r && Lo(r) && (Fo.push(r), n.delete(t))
  }
  var zo = new Set()
  var jo,
    Vo = (function (e) {
      function t(t) {
        void 0 === t && (t = {})
        var n = e.call(this) || this
        return (
          (n.watches = new Set()),
          (n.addTypenameTransform = new pr(_r)),
          (n.assumeImmutableResults = !0),
          (n.makeVar = po),
          (n.txCount = 0),
          !1 !== globalThis.__DEV__ &&
            (Ki(
              t,
              'addTypename',
              'InMemoryCache',
              'Please remove the `addTypename` option when initializing `InMemoryCache`.',
            ),
            Ki(
              t,
              'canonizeResults',
              'InMemoryCache',
              'Please remove the `canonizeResults` option when initializing `InMemoryCache`.',
            )),
          (n.config = (function (e) {
            return gi(ja, e)
          })(t)),
          (n.addTypename = !!n.config.addTypename),
          (n.policies = new Co({
            cache: n,
            dataIdFromObject: n.config.dataIdFromObject,
            possibleTypes: n.config.possibleTypes,
            typePolicies: n.config.typePolicies,
          })),
          n.init(),
          n
        )
      }
      return (
        T(t, e),
        (t.prototype.init = function () {
          var e = (this.data = new Ya.Root({ policies: this.policies, resultCaching: this.config.resultCaching }))
          ;((this.optimisticData = e.stump), this.resetResultCache())
        }),
        (t.prototype.resetResultCache = function (e) {
          var t = this,
            n = this.storeReader,
            r = this.config.fragments
          ;(this.addTypenameTransform.resetCache(),
            null == r || r.resetCaches(),
            (this.storeWriter = new Po(
              this,
              (this.storeReader = new oo({
                cache: this,
                addTypename: this.addTypename,
                resultCacheMaxSize: this.config.resultCacheMaxSize,
                canonizeResults: Va(this.config),
                canon: e ? void 0 : n && n.canon,
                fragments: r,
              })),
              r,
            )),
            (this.maybeBroadcastWatch = cr(
              function (e, n) {
                return t.broadcastWatch(e, n)
              },
              {
                max: this.config.resultCacheMaxSize || Kt['inMemoryCache.maybeBroadcastWatch'] || 5e3,
                makeCacheKey: function (e) {
                  var n = e.optimistic ? t.optimisticData : t.data
                  if (ro(n)) {
                    var r = e.optimistic,
                      i = e.id,
                      a = e.variables
                    return n.makeCacheKey(e.query, e.callback, ln({ optimistic: r, id: i, variables: a }))
                  }
                },
              },
            )),
            new Set([this.data.group, this.optimisticData.group]).forEach(function (e) {
              return e.resetCaching()
            }))
        }),
        (t.prototype.restore = function (e) {
          return (this.init(), e && this.data.replace(e), this)
        }),
        (t.prototype.extract = function (e) {
          return (void 0 === e && (e = !1), (e ? this.optimisticData : this.data).extract())
        }),
        (t.prototype.read = function (e) {
          !1 !== globalThis.__DEV__ && Ki(e, 'canonizeResults', 'cache.read')
          var t = e.returnPartialData,
            n = void 0 !== t && t
          try {
            return (
              this.storeReader.diffQueryAgainstStore(
                x(x({}, e), {
                  store: e.optimistic ? this.optimisticData : this.data,
                  config: this.config,
                  returnPartialData: n,
                }),
              ).result || null
            )
          } catch (e) {
            if (e instanceof Ma) return null
            throw e
          }
        }),
        (t.prototype.write = function (e) {
          try {
            return (++this.txCount, this.storeWriter.writeToStore(this.data, e))
          } finally {
            --this.txCount || !1 === e.broadcast || this.broadcastWatches()
          }
        }),
        (t.prototype.modify = function (e) {
          if (La.call(e, 'id') && !e.id) return !1
          var t = e.optimistic ? this.optimisticData : this.data
          try {
            return (++this.txCount, t.modify(e.id || 'ROOT_QUERY', e.fields))
          } finally {
            --this.txCount || !1 === e.broadcast || this.broadcastWatches()
          }
        }),
        (t.prototype.diff = function (e) {
          return (
            !1 !== globalThis.__DEV__ && Ki(e, 'canonizeResults', 'cache.diff'),
            this.storeReader.diffQueryAgainstStore(
              x(x({}, e), {
                store: e.optimistic ? this.optimisticData : this.data,
                rootId: e.id || 'ROOT_QUERY',
                config: this.config,
              }),
            )
          )
        }),
        (t.prototype.watch = function (e) {
          var t = this
          return (
            this.watches.size ||
              (function (e) {
                co(e).vars.forEach(function (t) {
                  return t.attachCache(e)
                })
              })(this),
            this.watches.add(e),
            e.immediate && this.maybeBroadcastWatch(e),
            function () {
              ;(t.watches.delete(e) && !t.watches.size && fo(t), t.maybeBroadcastWatch.forget(e))
            }
          )
        }),
        (t.prototype.gc = function (e) {
          ;(!1 !== globalThis.__DEV__ &&
            Ki(
              e || {},
              'resetResultIdentities',
              'cache.gc',
              'First ensure all usages of `canonizeResults` are removed, then remove this option.',
            ),
            ln.reset(),
            hr.reset())
          var t = this.optimisticData.gc()
          return (
            e &&
              !this.txCount &&
              (e.resetResultCache
                ? this.resetResultCache(e.resetResultIdentities)
                : e.resetResultIdentities && this.storeReader.resetCanon()),
            t
          )
        }),
        (t.prototype.retain = function (e, t) {
          return (t ? this.optimisticData : this.data).retain(e)
        }),
        (t.prototype.release = function (e, t) {
          return (t ? this.optimisticData : this.data).release(e)
        }),
        (t.prototype.identify = function (e) {
          if (dn(e)) return e.__ref
          try {
            return this.policies.identify(e)[0]
          } catch (e) {
            !1 !== globalThis.__DEV__ && W.warn(e)
          }
        }),
        (t.prototype.evict = function (e) {
          if (!e.id) {
            if (La.call(e, 'id')) return !1
            e = x(x({}, e), { id: 'ROOT_QUERY' })
          }
          try {
            return (++this.txCount, this.optimisticData.evict(e, this.data))
          } finally {
            --this.txCount || !1 === e.broadcast || this.broadcastWatches()
          }
        }),
        (t.prototype.reset = function (e) {
          var t = this
          return (
            this.init(),
            ln.reset(),
            e && e.discardWatches
              ? (this.watches.forEach(function (e) {
                  return t.maybeBroadcastWatch.forget(e)
                }),
                this.watches.clear(),
                fo(this))
              : this.broadcastWatches(),
            Promise.resolve()
          )
        }),
        (t.prototype.removeOptimistic = function (e) {
          var t = this.optimisticData.removeLayer(e)
          t !== this.optimisticData && ((this.optimisticData = t), this.broadcastWatches())
        }),
        (t.prototype.batch = function (e) {
          var t,
            n = this,
            r = e.update,
            i = e.optimistic,
            a = void 0 === i || i,
            o = e.removeOptimistic,
            s = e.onWatchUpdated,
            l = function (e) {
              var i = n,
                a = i.data,
                o = i.optimisticData
              ;(++n.txCount, e && (n.data = n.optimisticData = e))
              try {
                return (t = r(n))
              } finally {
                ;(--n.txCount, (n.data = a), (n.optimisticData = o))
              }
            },
            u = new Set()
          return (
            s &&
              !this.txCount &&
              this.broadcastWatches(
                x(x({}, e), {
                  onWatchUpdated: function (e) {
                    return (u.add(e), !1)
                  },
                }),
              ),
            'string' == typeof a
              ? (this.optimisticData = this.optimisticData.addLayer(a, l))
              : !1 === a
                ? l(this.data)
                : l(),
            'string' == typeof o && (this.optimisticData = this.optimisticData.removeLayer(o)),
            s && u.size
              ? (this.broadcastWatches(
                  x(x({}, e), {
                    onWatchUpdated: function (e, t) {
                      var n = s.call(this, e, t)
                      return (!1 !== n && u.delete(e), n)
                    },
                  }),
                ),
                u.size &&
                  u.forEach(function (e) {
                    return n.maybeBroadcastWatch.dirty(e)
                  }))
              : this.broadcastWatches(e),
            t
          )
        }),
        (t.prototype.performTransaction = function (e, t) {
          return this.batch({ update: e, optimistic: t || null !== t })
        }),
        (t.prototype.transformDocument = function (e) {
          return this.addTypenameToDocument(this.addFragmentsToDocument(e))
        }),
        (t.prototype.fragmentMatches = function (e, t) {
          return this.policies.fragmentMatches(e, t)
        }),
        (t.prototype.lookupFragment = function (e) {
          var t
          return (null === (t = this.config.fragments) || void 0 === t ? void 0 : t.lookup(e)) || null
        }),
        (t.prototype.broadcastWatches = function (e) {
          var t = this
          this.txCount ||
            this.watches.forEach(function (n) {
              return t.maybeBroadcastWatch(n, e)
            })
        }),
        (t.prototype.addFragmentsToDocument = function (e) {
          var t = this.config.fragments
          return t ? t.transform(e) : e
        }),
        (t.prototype.addTypenameToDocument = function (e) {
          return this.addTypename ? this.addTypenameTransform.transformDocument(e) : e
        }),
        (t.prototype.broadcastWatch = function (e, t) {
          var n = this,
            r = e.lastDiff,
            i = Wi('canonizeResults', function () {
              return n.diff(e)
            })
          ;(t &&
            (e.optimistic && 'string' == typeof t.optimistic && (i.fromOptimisticTransaction = !0),
            t.onWatchUpdated && !1 === t.onWatchUpdated.call(this, e, i, r))) ||
            (r && Di(r.result, i.result)) ||
            e.callback((e.lastDiff = i), r)
        }),
        t
      )
    })(Aa)
  function Qo(e) {
    return !!e && e < 7
  }
  ;(!1 !== globalThis.__DEV__ && (Vo.prototype.getMemoryInternals = Jt),
    (function (e) {
      ;((e[(e.loading = 1)] = 'loading'),
        (e[(e.setVariables = 2)] = 'setVariables'),
        (e[(e.fetchMore = 3)] = 'fetchMore'),
        (e[(e.refetch = 4)] = 'refetch'),
        (e[(e.poll = 6)] = 'poll'),
        (e[(e.ready = 7)] = 'ready'),
        (e[(e.error = 8)] = 'error'))
    })(jo || (jo = {})))
  var $o = Object.assign,
    Uo = Object.hasOwnProperty,
    Bo = (function (e) {
      function t(n) {
        var r = n.queryManager,
          i = n.queryInfo,
          a = n.options,
          o = this,
          s = t.inactiveOnCreation.getValue()
        ;(((o =
          e.call(this, function (e) {
            o._getOrCreateQuery()
            try {
              var t = e._subscription._observer
              t && !t.error && (t.error = Wo)
            } catch (e) {}
            var n = !o.observers.size
            o.observers.add(e)
            var r = o.last
            return (
              r && r.error ? e.error && e.error(r.error) : r && r.result && e.next && e.next(o.maskResult(r.result)),
              n && o.reobserve().catch(function () {}),
              function () {
                o.observers.delete(e) && !o.observers.size && o.tearDownQuery()
              }
            )
          }) || this).observers = new Set()),
          (o.subscriptions = new Set()),
          (o.dirty = !1),
          (o._getOrCreateQuery = function () {
            return (s && (r.queries.set(o.queryId, i), (s = !1)), o.queryManager.getOrCreateQuery(o.queryId))
          }),
          (o.queryInfo = i),
          (o.queryManager = r),
          (o.waitForOwnResult = Ho(a.fetchPolicy)),
          (o.isTornDown = !1),
          (o.subscribeToMore = o.subscribeToMore.bind(o)),
          (o.maskResult = o.maskResult.bind(o)))
        var l = r.defaultOptions.watchQuery,
          u = (void 0 === l ? {} : l).fetchPolicy,
          c = void 0 === u ? 'cache-first' : u,
          f = a.fetchPolicy,
          d = void 0 === f ? c : f,
          p = a.initialFetchPolicy,
          h = void 0 === p ? ('standby' === d ? c : d) : p
        ;((o.options = x(x({}, a), { initialFetchPolicy: h, fetchPolicy: d })),
          (o.queryId = i.queryId || r.generateQueryId()))
        var m = _n(o.query)
        return ((o.queryName = m && m.name && m.name.value), o)
      }
      return (
        T(t, e),
        Object.defineProperty(t.prototype, 'query', {
          get: function () {
            return this.lastQuery || this.options.query
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'variables', {
          get: function () {
            return this.options.variables
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.result = function () {
          var e = this
          return (
            !1 !== globalThis.__DEV__ &&
              Hi('observableQuery.result', function () {
                !1 !== globalThis.__DEV__ && W.warn(23)
              }),
            new Promise(function (t, n) {
              var r = {
                  next: function (n) {
                    ;(t(n),
                      e.observers.delete(r),
                      e.observers.size || e.queryManager.removeQuery(e.queryId),
                      setTimeout(function () {
                        i.unsubscribe()
                      }, 0))
                  },
                  error: n,
                },
                i = e.subscribe(r)
            })
          )
        }),
        (t.prototype.resetDiff = function () {
          this.queryInfo.resetDiff()
        }),
        (t.prototype.getCurrentFullResult = function (e) {
          var t = this
          void 0 === e && (e = !0)
          var n = Wi('getLastResult', function () {
              return t.getLastResult(!0)
            }),
            r = this.queryInfo.networkStatus || (n && n.networkStatus) || jo.ready,
            i = x(x({}, n), { loading: Qo(r), networkStatus: r }),
            a = this.options.fetchPolicy,
            o = void 0 === a ? 'cache-first' : a
          if (Ho(o) || this.queryManager.getDocumentInfo(this.query).hasForcedResolvers);
          else if (this.waitForOwnResult) this.queryInfo.updateWatch()
          else {
            var s = this.queryInfo.getDiff()
            ;((s.complete || this.options.returnPartialData) && (i.data = s.result),
              Di(i.data, {}) && (i.data = void 0),
              s.complete
                ? (delete i.partial,
                  !s.complete ||
                    i.networkStatus !== jo.loading ||
                    ('cache-first' !== o && 'cache-only' !== o) ||
                    ((i.networkStatus = jo.ready), (i.loading = !1)))
                : (i.partial = !0),
              i.networkStatus === jo.ready && (i.error || i.errors) && (i.networkStatus = jo.error),
              !1 === globalThis.__DEV__ ||
                s.complete ||
                this.options.partialRefetch ||
                i.loading ||
                i.data ||
                i.error ||
                Ko(s.missing))
          }
          return (e && this.updateLastResult(i), i)
        }),
        (t.prototype.getCurrentResult = function (e) {
          return (void 0 === e && (e = !0), this.maskResult(this.getCurrentFullResult(e)))
        }),
        (t.prototype.isDifferentFromLastResult = function (e, t) {
          if (!this.last) return !0
          var n = this.queryManager.getDocumentInfo(this.query),
            r = this.queryManager.dataMasking,
            i = r ? n.nonReactiveQuery : this.query
          return (
            (r || n.hasNonreactiveDirective ? !wa(i, this.last.result, e, this.variables) : !Di(this.last.result, e)) ||
            (t && !Di(this.last.variables, t))
          )
        }),
        (t.prototype.getLast = function (e, t) {
          var n = this.last
          if (n && n[e] && (!t || Di(n.variables, this.variables))) return n[e]
        }),
        (t.prototype.getLastResult = function (e) {
          return (
            !1 !== globalThis.__DEV__ &&
              Hi('getLastResult', function () {
                !1 !== globalThis.__DEV__ && W.warn(24)
              }),
            this.getLast('result', e)
          )
        }),
        (t.prototype.getLastError = function (e) {
          return (
            !1 !== globalThis.__DEV__ &&
              Hi('getLastError', function () {
                !1 !== globalThis.__DEV__ && W.warn(25)
              }),
            this.getLast('error', e)
          )
        }),
        (t.prototype.resetLastResults = function () {
          ;(!1 !== globalThis.__DEV__ &&
            Hi('resetLastResults', function () {
              !1 !== globalThis.__DEV__ && W.warn(26)
            }),
            delete this.last,
            (this.isTornDown = !1))
        }),
        (t.prototype.resetQueryStoreErrors = function () {
          ;(!1 !== globalThis.__DEV__ && !1 !== globalThis.__DEV__ && W.warn(27),
            this.queryManager.resetErrors(this.queryId))
        }),
        (t.prototype.refetch = function (e) {
          var t,
            n = { pollInterval: 0 },
            r = this.options.fetchPolicy
          if (
            ((n.fetchPolicy = 'no-cache' === r ? 'no-cache' : 'network-only'),
            !1 !== globalThis.__DEV__ && e && Uo.call(e, 'variables'))
          ) {
            var i = Tn(this.query),
              a = i.variableDefinitions
            ;(a &&
              a.some(function (e) {
                return 'variables' === e.variable.name.value
              })) ||
              (!1 !== globalThis.__DEV__ &&
                W.warn(28, e, (null === (t = i.name) || void 0 === t ? void 0 : t.value) || i))
          }
          return (
            e &&
              !Di(this.options.variables, e) &&
              (n.variables = this.options.variables = x(x({}, this.options.variables), e)),
            this.queryInfo.resetLastWrite(),
            this.reobserve(n, jo.refetch)
          )
        }),
        (t.prototype.fetchMore = function (e) {
          var t = this,
            n = x(
              x(
                {},
                e.query
                  ? e
                  : x(x(x(x({}, this.options), { query: this.options.query }), e), {
                      variables: x(x({}, this.options.variables), e.variables),
                    }),
              ),
              { fetchPolicy: 'no-cache' },
            )
          n.query = this.transformDocument(n.query)
          var r = this.queryManager.generateQueryId()
          this.lastQuery = e.query ? this.transformDocument(this.options.query) : n.query
          var i = this.queryInfo,
            a = i.networkStatus
          ;((i.networkStatus = jo.fetchMore), n.notifyOnNetworkStatusChange && this.observe())
          var o = new Set(),
            s = null == e ? void 0 : e.updateQuery,
            l = 'no-cache' !== this.options.fetchPolicy
          return (
            l || W(s, 29),
            this.queryManager
              .fetchQuery(r, n, jo.fetchMore)
              .then(function (u) {
                if ((t.queryManager.removeQuery(r), i.networkStatus === jo.fetchMore && (i.networkStatus = a), l))
                  t.queryManager.cache.batch({
                    update: function (r) {
                      var i = e.updateQuery
                      i
                        ? r.updateQuery(
                            { query: t.query, variables: t.variables, returnPartialData: !0, optimistic: !1 },
                            function (e) {
                              return i(e, { fetchMoreResult: u.data, variables: n.variables })
                            },
                          )
                        : r.writeQuery({ query: n.query, variables: n.variables, data: u.data })
                    },
                    onWatchUpdated: function (e) {
                      o.add(e.query)
                    },
                  })
                else {
                  var c = t.getLast('result'),
                    f = s(c.data, { fetchMoreResult: u.data, variables: n.variables })
                  t.reportResult(x(x({}, c), { networkStatus: a, loading: Qo(a), data: f }), t.variables)
                }
                return t.maskResult(u)
              })
              .finally(function () {
                l && !o.has(t.query) && t.reobserveCacheFirst()
              })
          )
        }),
        (t.prototype.subscribeToMore = function (e) {
          var t = this,
            n = this.queryManager
              .startGraphQLSubscription({ query: e.document, variables: e.variables, context: e.context })
              .subscribe({
                next: function (n) {
                  var r = e.updateQuery
                  r &&
                    t.updateQuery(function (e, t) {
                      return r(e, x({ subscriptionData: n }, t))
                    })
                },
                error: function (t) {
                  e.onError ? e.onError(t) : !1 !== globalThis.__DEV__ && W.error(30, t)
                },
              })
          return (
            this.subscriptions.add(n),
            function () {
              t.subscriptions.delete(n) && n.unsubscribe()
            }
          )
        }),
        (t.prototype.setOptions = function (e) {
          return (
            !1 !== globalThis.__DEV__ &&
              (Ki(e, 'canonizeResults', 'setOptions'),
              Hi('setOptions', function () {
                !1 !== globalThis.__DEV__ && W.warn(31)
              })),
            this.reobserve(e)
          )
        }),
        (t.prototype.silentSetOptions = function (e) {
          var t = gi(this.options, e || {})
          $o(this.options, t)
        }),
        (t.prototype.setVariables = function (e) {
          var t = this
          return Di(this.variables, e)
            ? this.observers.size
              ? Wi('observableQuery.result', function () {
                  return t.result()
                })
              : Promise.resolve()
            : ((this.options.variables = e),
              this.observers.size
                ? this.reobserve({ fetchPolicy: this.options.initialFetchPolicy, variables: e }, jo.setVariables)
                : Promise.resolve())
        }),
        (t.prototype.updateQuery = function (e) {
          var t = this.queryManager,
            n = t.cache.diff({
              query: this.options.query,
              variables: this.variables,
              returnPartialData: !0,
              optimistic: !1,
            }),
            r = n.result,
            i = n.complete,
            a = e(r, { variables: this.variables, complete: !!i, previousData: r })
          a &&
            (t.cache.writeQuery({ query: this.options.query, data: a, variables: this.variables }),
            t.broadcastQueries())
        }),
        (t.prototype.startPolling = function (e) {
          ;((this.options.pollInterval = e), this.updatePolling())
        }),
        (t.prototype.stopPolling = function () {
          ;((this.options.pollInterval = 0), this.updatePolling())
        }),
        (t.prototype.applyNextFetchPolicy = function (e, t) {
          if (t.nextFetchPolicy) {
            var n = t.fetchPolicy,
              r = void 0 === n ? 'cache-first' : n,
              i = t.initialFetchPolicy,
              a = void 0 === i ? r : i
            'standby' === r ||
              ('function' == typeof t.nextFetchPolicy
                ? (t.fetchPolicy = t.nextFetchPolicy(r, {
                    reason: e,
                    options: t,
                    observable: this,
                    initialFetchPolicy: a,
                  }))
                : (t.fetchPolicy = 'variables-changed' === e ? a : t.nextFetchPolicy))
          }
          return t.fetchPolicy
        }),
        (t.prototype.fetch = function (e, t, n) {
          var r = this._getOrCreateQuery()
          return (r.setObservableQuery(this), this.queryManager.fetchConcastWithInfo(r, e, t, n))
        }),
        (t.prototype.updatePolling = function () {
          var e = this
          if (!this.queryManager.ssrMode) {
            var t = this.pollingInfo,
              n = this.options.pollInterval
            if (n && this.hasObservers()) {
              if (!t || t.interval !== n) {
                ;(W(n, 32), ((t || (this.pollingInfo = {})).interval = n))
                var r = function () {
                    var t, n
                    e.pollingInfo &&
                      (Qo(e.queryInfo.networkStatus) ||
                      (null === (n = (t = e.options).skipPollAttempt) || void 0 === n ? void 0 : n.call(t))
                        ? i()
                        : e
                            .reobserve(
                              {
                                fetchPolicy: 'no-cache' === e.options.initialFetchPolicy ? 'no-cache' : 'network-only',
                              },
                              jo.poll,
                            )
                            .then(i, i))
                  },
                  i = function () {
                    var t = e.pollingInfo
                    t && (clearTimeout(t.timeout), (t.timeout = setTimeout(r, t.interval)))
                  }
                i()
              }
            } else t && (clearTimeout(t.timeout), delete this.pollingInfo)
          }
        }),
        (t.prototype.updateLastResult = function (e, t) {
          var n = this
          void 0 === t && (t = this.variables)
          var r = Wi('getLastError', function () {
            return n.getLastError()
          })
          return (
            r && this.last && !Di(t, this.last.variables) && (r = void 0),
            (this.last = x(
              { result: this.queryManager.assumeImmutableResults ? e : ii(e), variables: t },
              r ? { error: r } : null,
            ))
          )
        }),
        (t.prototype.reobserveAsConcast = function (e, t) {
          var n = this
          this.isTornDown = !1
          var r = t === jo.refetch || t === jo.fetchMore || t === jo.poll,
            i = this.options.variables,
            a = this.options.fetchPolicy,
            o = gi(this.options, e || {}),
            s = r ? o : $o(this.options, o),
            l = this.transformDocument(s.query)
          ;((this.lastQuery = l),
            r ||
              (this.updatePolling(),
              !e ||
                !e.variables ||
                Di(e.variables, i) ||
                'standby' === s.fetchPolicy ||
                (s.fetchPolicy !== a && 'function' != typeof s.nextFetchPolicy) ||
                (this.applyNextFetchPolicy('variables-changed', s), void 0 === t && (t = jo.setVariables))),
            this.waitForOwnResult && (this.waitForOwnResult = Ho(s.fetchPolicy)))
          var u = function () {
              n.concast === d && (n.waitForOwnResult = !1)
            },
            c = s.variables && x({}, s.variables),
            f = this.fetch(s, t, l),
            d = f.concast,
            p = f.fromLink,
            h = {
              next: function (e) {
                Di(n.variables, c) && (u(), n.reportResult(e, c))
              },
              error: function (e) {
                Di(n.variables, c) && (qi(e) || (e = new zi({ networkError: e })), u(), n.reportError(e, c))
              },
            }
          return (
            r ||
              (!p && this.concast) ||
              (this.concast && this.observer && this.concast.removeObserver(this.observer),
              (this.concast = d),
              (this.observer = h)),
            d.addObserver(h),
            d
          )
        }),
        (t.prototype.reobserve = function (e, t) {
          return ((n = this.reobserveAsConcast(e, t).promise.then(this.maskResult)).catch(function () {}), n)
          var n
        }),
        (t.prototype.resubscribeAfterError = function () {
          for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n]
          var r = this.last
          Wi('resetLastResults', function () {
            return e.resetLastResults()
          })
          var i = this.subscribe.apply(this, t)
          return ((this.last = r), i)
        }),
        (t.prototype.observe = function () {
          this.reportResult(this.getCurrentFullResult(!1), this.variables)
        }),
        (t.prototype.reportResult = function (e, t) {
          var n = this,
            r = Wi('getLastError', function () {
              return n.getLastError()
            }),
            i = this.isDifferentFromLastResult(e, t)
          ;((r || !e.partial || this.options.returnPartialData) && this.updateLastResult(e, t),
            (r || i) && li(this.observers, 'next', this.maskResult(e)))
        }),
        (t.prototype.reportError = function (e, t) {
          var n = this,
            r = x(
              x(
                {},
                Wi('getLastResult', function () {
                  return n.getLastResult()
                }),
              ),
              { error: e, errors: e.graphQLErrors, networkStatus: jo.error, loading: !1 },
            )
          ;(this.updateLastResult(r, t), li(this.observers, 'error', (this.last.error = e)))
        }),
        (t.prototype.hasObservers = function () {
          return this.observers.size > 0
        }),
        (t.prototype.tearDownQuery = function () {
          this.isTornDown ||
            (this.concast &&
              this.observer &&
              (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer),
            this.stopPolling(),
            this.subscriptions.forEach(function (e) {
              return e.unsubscribe()
            }),
            this.subscriptions.clear(),
            this.queryManager.stopQuery(this.queryId),
            this.observers.clear(),
            (this.isTornDown = !0))
        }),
        (t.prototype.transformDocument = function (e) {
          return this.queryManager.transform(e)
        }),
        (t.prototype.maskResult = function (e) {
          return e && 'data' in e
            ? x(x({}, e), {
                data: this.queryManager.maskOperation({
                  document: this.query,
                  data: e.data,
                  fetchPolicy: this.options.fetchPolicy,
                  id: this.queryId,
                }),
              })
            : e
        }),
        (t.prototype.resetNotifications = function () {
          ;(this.cancelNotifyTimeout(), (this.dirty = !1))
        }),
        (t.prototype.cancelNotifyTimeout = function () {
          this.notifyTimeout && (clearTimeout(this.notifyTimeout), (this.notifyTimeout = void 0))
        }),
        (t.prototype.scheduleNotify = function () {
          var e = this
          this.dirty ||
            ((this.dirty = !0),
            this.notifyTimeout ||
              (this.notifyTimeout = setTimeout(function () {
                return e.notify()
              }, 0)))
        }),
        (t.prototype.notify = function () {
          ;(this.cancelNotifyTimeout(), this.dirty) &&
            (('cache-only' != this.options.fetchPolicy &&
              'cache-and-network' != this.options.fetchPolicy &&
              Qo(this.queryInfo.networkStatus)) ||
              (this.queryInfo.getDiff().fromOptimisticTransaction ? this.observe() : this.reobserveCacheFirst()))
          this.dirty = !1
        }),
        (t.prototype.reobserveCacheFirst = function () {
          var e = this.options,
            t = e.fetchPolicy,
            n = e.nextFetchPolicy
          return 'cache-and-network' === t || 'network-only' === t
            ? this.reobserve({
                fetchPolicy: 'cache-first',
                nextFetchPolicy: function (e, r) {
                  return (
                    (this.nextFetchPolicy = n),
                    'function' == typeof this.nextFetchPolicy ? this.nextFetchPolicy(e, r) : t
                  )
                },
              })
            : this.reobserve()
        }),
        (t.inactiveOnCreation = new An()),
        t
      )
    })(Xr)
  function Wo(e) {
    !1 !== globalThis.__DEV__ && W.error(33, e.message, e.stack)
  }
  function Ko(e) {
    !1 !== globalThis.__DEV__ && e && !1 !== globalThis.__DEV__ && W.debug(34, e)
  }
  function Ho(e) {
    return 'network-only' === e || 'no-cache' === e || 'standby' === e
  }
  ci(Bo)
  var Go = new (kt ? WeakMap : Map)()
  function Yo(e, t) {
    var n = e[t]
    'function' == typeof n &&
      (e[t] = function () {
        return (Go.set(e, (Go.get(e) + 1) % 1e15), n.apply(this, arguments))
      })
  }
  var Jo = (function () {
    function e(e, t) {
      ;(void 0 === t && (t = e.generateQueryId()),
        (this.queryId = t),
        (this.document = null),
        (this.lastRequestId = 1),
        (this.stopped = !1),
        (this.observableQuery = null))
      var n = (this.cache = e.cache)
      Go.has(n) || (Go.set(n, 0), Yo(n, 'evict'), Yo(n, 'modify'), Yo(n, 'reset'))
    }
    return (
      (e.prototype.init = function (e) {
        var t = e.networkStatus || jo.loading
        return (
          this.variables &&
            this.networkStatus !== jo.loading &&
            !Di(this.variables, e.variables) &&
            (t = jo.setVariables),
          Di(e.variables, this.variables) || ((this.lastDiff = void 0), this.cancel()),
          Object.assign(this, {
            document: e.document,
            variables: e.variables,
            networkError: null,
            graphQLErrors: this.graphQLErrors || [],
            networkStatus: t,
          }),
          e.observableQuery && this.setObservableQuery(e.observableQuery),
          e.lastRequestId && (this.lastRequestId = e.lastRequestId),
          this
        )
      }),
      (e.prototype.resetDiff = function () {
        this.lastDiff = void 0
      }),
      (e.prototype.getDiff = function () {
        var e = this,
          t = this.getDiffOptions()
        if (this.lastDiff && Di(t, this.lastDiff.options)) return this.lastDiff.diff
        this.updateWatch(this.variables)
        var n = this.observableQuery
        if (n && 'no-cache' === n.options.fetchPolicy) return { complete: !1 }
        var r = Wi('canonizeResults', function () {
          return e.cache.diff(t)
        })
        return (this.updateLastDiff(r, t), r)
      }),
      (e.prototype.updateLastDiff = function (e, t) {
        this.lastDiff = e ? { diff: e, options: t || this.getDiffOptions() } : void 0
      }),
      (e.prototype.getDiffOptions = function (e) {
        var t
        return (
          void 0 === e && (e = this.variables),
          {
            query: this.document,
            variables: e,
            returnPartialData: !0,
            optimistic: !0,
            canonizeResults: null === (t = this.observableQuery) || void 0 === t ? void 0 : t.options.canonizeResults,
          }
        )
      }),
      (e.prototype.setDiff = function (e) {
        var t,
          n = this,
          r = this.lastDiff && this.lastDiff.diff
        ;(e &&
          !e.complete &&
          Wi('getLastError', function () {
            var e
            return null === (e = n.observableQuery) || void 0 === e ? void 0 : e.getLastError()
          })) ||
          (this.updateLastDiff(e),
          Di(r && r.result, e && e.result) || null === (t = this.observableQuery) || void 0 === t || t.scheduleNotify())
      }),
      (e.prototype.setObservableQuery = function (e) {
        e !== this.observableQuery && ((this.observableQuery = e), e && (e.queryInfo = this))
      }),
      (e.prototype.stop = function () {
        var e
        if (!this.stopped) {
          ;((this.stopped = !0),
            null === (e = this.observableQuery) || void 0 === e || e.resetNotifications(),
            this.cancel())
          var t = this.observableQuery
          t && t.stopPolling()
        }
      }),
      (e.prototype.cancel = function () {
        var e
        ;(null === (e = this.cancelWatch) || void 0 === e || e.call(this), (this.cancelWatch = void 0))
      }),
      (e.prototype.updateWatch = function (e) {
        var t = this
        void 0 === e && (e = this.variables)
        var n = this.observableQuery
        if (!n || 'no-cache' !== n.options.fetchPolicy) {
          var r = x(x({}, this.getDiffOptions(e)), {
            watcher: this,
            callback: function (e) {
              return t.setDiff(e)
            },
          })
          ;(this.lastWatch && Di(r, this.lastWatch)) ||
            (this.cancel(), (this.cancelWatch = this.cache.watch((this.lastWatch = r))))
        }
      }),
      (e.prototype.resetLastWrite = function () {
        this.lastWrite = void 0
      }),
      (e.prototype.shouldWrite = function (e, t) {
        var n = this.lastWrite
        return !(n && n.dmCount === Go.get(this.cache) && Di(t, n.variables) && Di(e.data, n.result.data))
      }),
      (e.prototype.markResult = function (e, t, n, r) {
        var i,
          a = this,
          o = new Nr(),
          s = vr(e.errors) ? e.errors.slice(0) : []
        if (
          (null === (i = this.observableQuery) || void 0 === i || i.resetNotifications(),
          'incremental' in e && vr(e.incremental))
        ) {
          var l = mi(this.getDiff().result, e)
          e.data = l
        } else if ('hasNext' in e && e.hasNext) {
          var u = this.getDiff()
          e.data = o.merge(u.result, e.data)
        }
        ;((this.graphQLErrors = s),
          'no-cache' === n.fetchPolicy
            ? this.updateLastDiff({ result: e.data, complete: !0 }, this.getDiffOptions(n.variables))
            : 0 !== r &&
              (Xo(e, n.errorPolicy)
                ? this.cache.performTransaction(function (i) {
                    if (a.shouldWrite(e, n.variables))
                      (i.writeQuery({ query: t, data: e.data, variables: n.variables, overwrite: 1 === r }),
                        (a.lastWrite = { result: e, variables: n.variables, dmCount: Go.get(a.cache) }))
                    else if (a.lastDiff && a.lastDiff.diff.complete) return void (e.data = a.lastDiff.diff.result)
                    var o = a.getDiffOptions(n.variables),
                      s = Wi('canonizeResults', function () {
                        return i.diff(o)
                      })
                    ;(!a.stopped && Di(a.variables, n.variables) && a.updateWatch(n.variables),
                      a.updateLastDiff(s, o),
                      s.complete && (e.data = s.result))
                  })
                : (this.lastWrite = void 0)))
      }),
      (e.prototype.markReady = function () {
        return ((this.networkError = null), (this.networkStatus = jo.ready))
      }),
      (e.prototype.markError = function (e) {
        var t
        return (
          (this.networkStatus = jo.error),
          (this.lastWrite = void 0),
          null === (t = this.observableQuery) || void 0 === t || t.resetNotifications(),
          e.graphQLErrors && (this.graphQLErrors = e.graphQLErrors),
          e.networkError && (this.networkError = e.networkError),
          e
        )
      }),
      e
    )
  })()
  function Xo(e, t) {
    void 0 === t && (t = 'none')
    var n = 'ignore' === t || 'all' === t,
      r = !vi(e)
    return (!r && n && e.data && (r = !0), r)
  }
  var Zo = Object.prototype.hasOwnProperty,
    es = Object.create(null),
    ts = (function () {
      function e(e) {
        var t = this
        ;((this.clientAwareness = {}),
          (this.queries = new Map()),
          (this.fetchCancelFns = new Map()),
          (this.transformCache = new Ut(Kt['queryManager.getDocumentInfo'] || 2e3)),
          (this.queryIdCounter = 1),
          (this.requestIdCounter = 1),
          (this.mutationIdCounter = 1),
          (this.inFlightLinkObservables = new wt(!1)),
          (this.noCacheWarningsByQueryId = new Set()))
        var n = new pr(
          function (e) {
            return t.cache.transformDocument(e)
          },
          { cache: !1 },
        )
        ;((this.cache = e.cache),
          (this.link = e.link),
          (this.defaultOptions = e.defaultOptions),
          (this.queryDeduplication = e.queryDeduplication),
          (this.clientAwareness = e.clientAwareness),
          (this.localState = e.localState),
          (this.ssrMode = e.ssrMode),
          (this.assumeImmutableResults = e.assumeImmutableResults),
          (this.dataMasking = e.dataMasking))
        var r = e.documentTransform
        ;((this.documentTransform = r ? n.concat(r).concat(n) : n),
          (this.defaultContext = e.defaultContext || Object.create(null)),
          (this.onBroadcast = e.onBroadcast) && (this.mutationStore = Object.create(null)))
      }
      return (
        (e.prototype.stop = function () {
          var e = this
          ;(this.queries.forEach(function (t, n) {
            e.stopQueryNoBroadcast(n)
          }),
            this.cancelPendingFetches(K(35)))
        }),
        (e.prototype.cancelPendingFetches = function (e) {
          ;(this.fetchCancelFns.forEach(function (t) {
            return t(e)
          }),
            this.fetchCancelFns.clear())
        }),
        (e.prototype.mutate = function (e) {
          return C(this, arguments, void 0, function (e) {
            var t,
              n,
              r,
              i,
              a,
              o,
              s,
              l = e.mutation,
              u = e.variables,
              c = e.optimisticResponse,
              f = e.updateQueries,
              d = e.refetchQueries,
              p = void 0 === d ? [] : d,
              h = e.awaitRefetchQueries,
              m = void 0 !== h && h,
              v = e.update,
              y = e.onQueryUpdated,
              g = e.fetchPolicy,
              b =
                void 0 === g
                  ? (null === (o = this.defaultOptions.mutate) || void 0 === o ? void 0 : o.fetchPolicy) ||
                    'network-only'
                  : g,
              E = e.errorPolicy,
              w =
                void 0 === E
                  ? (null === (s = this.defaultOptions.mutate) || void 0 === s ? void 0 : s.errorPolicy) || 'none'
                  : E,
              _ = e.keepRootFields,
              k = e.context
            return R(this, function (e) {
              switch (e.label) {
                case 0:
                  return (
                    W(l, 36),
                    W('network-only' === b || 'no-cache' === b, 37),
                    (t = this.generateMutationId()),
                    (l = this.cache.transformForLink(this.transform(l))),
                    (n = this.getDocumentInfo(l).hasClientExports),
                    (u = this.getVariables(l, u)),
                    n ? [4, this.localState.addExportedVariables(l, u, k)] : [3, 2]
                  )
                case 1:
                  ;((u = e.sent()), (e.label = 2))
                case 2:
                  return (
                    (r =
                      this.mutationStore &&
                      (this.mutationStore[t] = { mutation: l, variables: u, loading: !0, error: null })),
                    (i =
                      c &&
                      this.markMutationOptimistic(c, {
                        mutationId: t,
                        document: l,
                        variables: u,
                        fetchPolicy: b,
                        errorPolicy: w,
                        context: k,
                        updateQueries: f,
                        update: v,
                        keepRootFields: _,
                      })),
                    this.broadcastQueries(),
                    (a = this),
                    [
                      2,
                      new Promise(function (e, n) {
                        return ui(
                          a.getObservableFromLink(l, x(x({}, k), { optimisticResponse: i ? c : void 0 }), u, {}, !1),
                          function (e) {
                            if (vi(e) && 'none' === w) throw new zi({ graphQLErrors: yi(e) })
                            r && ((r.loading = !1), (r.error = null))
                            var n = x({}, e)
                            return (
                              'function' == typeof p && (p = p(n)),
                              'ignore' === w && vi(n) && delete n.errors,
                              a.markMutationResult({
                                mutationId: t,
                                result: n,
                                document: l,
                                variables: u,
                                fetchPolicy: b,
                                errorPolicy: w,
                                context: k,
                                update: v,
                                updateQueries: f,
                                awaitRefetchQueries: m,
                                refetchQueries: p,
                                removeOptimistic: i ? t : void 0,
                                onQueryUpdated: y,
                                keepRootFields: _,
                              })
                            )
                          },
                        ).subscribe({
                          next: function (n) {
                            ;(a.broadcastQueries(),
                              ('hasNext' in n && !1 !== n.hasNext) ||
                                e(
                                  x(x({}, n), {
                                    data: a.maskOperation({ document: l, data: n.data, fetchPolicy: b, id: t }),
                                  }),
                                ))
                          },
                          error: function (e) {
                            ;(r && ((r.loading = !1), (r.error = e)),
                              i && a.cache.removeOptimistic(t),
                              a.broadcastQueries(),
                              n(e instanceof zi ? e : new zi({ networkError: e })))
                          },
                        })
                      }),
                    ]
                  )
              }
            })
          })
        }),
        (e.prototype.markMutationResult = function (e, t) {
          var n = this
          void 0 === t && (t = this.cache)
          var r = e.result,
            i = [],
            a = 'no-cache' === e.fetchPolicy
          if (!a && Xo(r, e.errorPolicy)) {
            if (
              (pi(r) || i.push({ result: r.data, dataId: 'ROOT_MUTATION', query: e.document, variables: e.variables }),
              pi(r) && vr(r.incremental))
            ) {
              var o = t.diff({
                  id: 'ROOT_MUTATION',
                  query: this.getDocumentInfo(e.document).asQuery,
                  variables: e.variables,
                  optimistic: !1,
                  returnPartialData: !0,
                }),
                s = void 0
              ;(o.result && (s = mi(o.result, r)),
                void 0 !== s &&
                  ((r.data = s),
                  i.push({ result: s, dataId: 'ROOT_MUTATION', query: e.document, variables: e.variables })))
            }
            var l = e.updateQueries
            l &&
              this.queries.forEach(function (e, a) {
                var o = e.observableQuery,
                  s = o && o.queryName
                if (s && Zo.call(l, s)) {
                  var u = l[s],
                    c = n.queries.get(a),
                    f = c.document,
                    d = c.variables,
                    p = t.diff({ query: f, variables: d, returnPartialData: !0, optimistic: !1 }),
                    h = p.result
                  if (p.complete && h) {
                    var m = u(h, { mutationResult: r, queryName: (f && kn(f)) || void 0, queryVariables: d })
                    m && i.push({ result: m, dataId: 'ROOT_QUERY', query: f, variables: d })
                  }
                }
              })
          }
          if (
            i.length > 0 ||
            (e.refetchQueries || '').length > 0 ||
            e.update ||
            e.onQueryUpdated ||
            e.removeOptimistic
          ) {
            var u = []
            if (
              (this.refetchQueries({
                updateCache: function (t) {
                  a ||
                    i.forEach(function (e) {
                      return t.write(e)
                    })
                  var o,
                    s = e.update,
                    l =
                      !(
                        pi((o = r)) ||
                        (function (e) {
                          return 'hasNext' in e && 'data' in e
                        })(o)
                      ) ||
                      (pi(r) && !r.hasNext)
                  if (s) {
                    if (!a) {
                      var u = t.diff({
                        id: 'ROOT_MUTATION',
                        query: n.getDocumentInfo(e.document).asQuery,
                        variables: e.variables,
                        optimistic: !1,
                        returnPartialData: !0,
                      })
                      u.complete &&
                        ('incremental' in (r = x(x({}, r), { data: u.result })) && delete r.incremental,
                        'hasNext' in r && delete r.hasNext)
                    }
                    l && s(t, r, { context: e.context, variables: e.variables })
                  }
                  a ||
                    e.keepRootFields ||
                    !l ||
                    t.modify({
                      id: 'ROOT_MUTATION',
                      fields: function (e, t) {
                        var n = t.fieldName,
                          r = t.DELETE
                        return '__typename' === n ? e : r
                      },
                    })
                },
                include: e.refetchQueries,
                optimistic: !1,
                removeOptimistic: e.removeOptimistic,
                onQueryUpdated: e.onQueryUpdated || null,
              }).forEach(function (e) {
                return u.push(e)
              }),
              e.awaitRefetchQueries || e.onQueryUpdated)
            )
              return Promise.all(u).then(function () {
                return r
              })
          }
          return Promise.resolve(r)
        }),
        (e.prototype.markMutationOptimistic = function (e, t) {
          var n = this,
            r = 'function' == typeof e ? e(t.variables, { IGNORE: es }) : e
          return (
            r !== es &&
            (this.cache.recordOptimisticTransaction(function (e) {
              try {
                n.markMutationResult(x(x({}, t), { result: { data: r } }), e)
              } catch (e) {
                !1 !== globalThis.__DEV__ && W.error(e)
              }
            }, t.mutationId),
            !0)
          )
        }),
        (e.prototype.fetchQuery = function (e, t, n) {
          return this.fetchConcastWithInfo(this.getOrCreateQuery(e), t, n).concast.promise
        }),
        (e.prototype.getQueryStore = function () {
          var e = Object.create(null)
          return (
            this.queries.forEach(function (t, n) {
              e[n] = {
                variables: t.variables,
                networkStatus: t.networkStatus,
                networkError: t.networkError,
                graphQLErrors: t.graphQLErrors,
              }
            }),
            e
          )
        }),
        (e.prototype.resetErrors = function (e) {
          var t = this.queries.get(e)
          t && ((t.networkError = void 0), (t.graphQLErrors = []))
        }),
        (e.prototype.transform = function (e) {
          return this.documentTransform.transformDocument(e)
        }),
        (e.prototype.getDocumentInfo = function (e) {
          var t = this.transformCache
          if (!t.has(e)) {
            var n = {
              hasClientExports: mt(e),
              hasForcedResolvers: this.localState.shouldForceResolvers(e),
              hasNonreactiveDirective: ht(['nonreactive'], e),
              nonReactiveQuery: Tr(e),
              clientQuery: this.localState.clientQuery(e),
              serverQuery: wr(
                [{ name: 'client', remove: !0 }, { name: 'connection' }, { name: 'nonreactive' }, { name: 'unmask' }],
                e,
              ),
              defaultVars: Cn(_n(e)),
              asQuery: x(x({}, e), {
                definitions: e.definitions.map(function (e) {
                  return 'OperationDefinition' === e.kind && 'query' !== e.operation
                    ? x(x({}, e), { operation: 'query' })
                    : e
                }),
              }),
            }
            t.set(e, n)
          }
          return t.get(e)
        }),
        (e.prototype.getVariables = function (e, t) {
          return x(x({}, this.getDocumentInfo(e).defaultVars), t)
        }),
        (e.prototype.watchQuery = function (e) {
          var t = this.transform(e.query)
          void 0 === (e = x(x({}, e), { variables: this.getVariables(t, e.variables) })).notifyOnNetworkStatusChange &&
            (e.notifyOnNetworkStatusChange = !1)
          var n = new Jo(this),
            r = new Bo({ queryManager: this, queryInfo: n, options: e })
          return (
            (r.lastQuery = t),
            Bo.inactiveOnCreation.getValue() || this.queries.set(r.queryId, n),
            n.init({ document: t, observableQuery: r, variables: r.variables }),
            r
          )
        }),
        (e.prototype.query = function (e, t) {
          var n = this
          ;(void 0 === t && (t = this.generateQueryId()),
            W(e.query, 38),
            W('Document' === e.query.kind, 39),
            W(!e.returnPartialData, 40),
            W(!e.pollInterval, 41))
          var r = this.transform(e.query)
          return this.fetchQuery(t, x(x({}, e), { query: r }))
            .then(function (i) {
              return (
                i &&
                x(x({}, i), { data: n.maskOperation({ document: r, data: i.data, fetchPolicy: e.fetchPolicy, id: t }) })
              )
            })
            .finally(function () {
              return n.stopQuery(t)
            })
        }),
        (e.prototype.generateQueryId = function () {
          return String(this.queryIdCounter++)
        }),
        (e.prototype.generateRequestId = function () {
          return this.requestIdCounter++
        }),
        (e.prototype.generateMutationId = function () {
          return String(this.mutationIdCounter++)
        }),
        (e.prototype.stopQueryInStore = function (e) {
          ;(this.stopQueryInStoreNoBroadcast(e), this.broadcastQueries())
        }),
        (e.prototype.stopQueryInStoreNoBroadcast = function (e) {
          var t = this.queries.get(e)
          t && t.stop()
        }),
        (e.prototype.clearStore = function (e) {
          return (
            void 0 === e && (e = { discardWatches: !0 }),
            this.cancelPendingFetches(K(42)),
            this.queries.forEach(function (e) {
              e.observableQuery ? (e.networkStatus = jo.loading) : e.stop()
            }),
            this.mutationStore && (this.mutationStore = Object.create(null)),
            this.cache.reset(e)
          )
        }),
        (e.prototype.getObservableQueries = function (e) {
          var t = this
          void 0 === e && (e = 'active')
          var n = new Map(),
            r = new Map(),
            i = new Map(),
            a = new Set()
          return (
            Array.isArray(e) &&
              e.forEach(function (e) {
                if ('string' == typeof e) (r.set(e, e), i.set(e, !1))
                else if (Nt((o = e)) && 'Document' === o.kind && Array.isArray(o.definitions)) {
                  var n = hr(t.transform(e))
                  ;(r.set(n, kn(e)), i.set(n, !1))
                } else Nt(e) && e.query && a.add(e)
                var o
              }),
            this.queries.forEach(function (t, r) {
              var a = t.observableQuery,
                o = t.document
              if (a) {
                if ('all' === e) return void n.set(r, a)
                var s = a.queryName
                if ('standby' === a.options.fetchPolicy || ('active' === e && !a.hasObservers())) return
                ;('active' === e || (s && i.has(s)) || (o && i.has(hr(o)))) &&
                  (n.set(r, a), s && i.set(s, !0), o && i.set(hr(o), !0))
              }
            }),
            a.size &&
              a.forEach(function (e) {
                var r = $('legacyOneTimeQuery'),
                  i = t.getOrCreateQuery(r).init({ document: e.query, variables: e.variables }),
                  a = new Bo({ queryManager: t, queryInfo: i, options: x(x({}, e), { fetchPolicy: 'network-only' }) })
                ;(W(a.queryId === r), i.setObservableQuery(a), n.set(r, a))
              }),
            !1 !== globalThis.__DEV__ &&
              i.size &&
              i.forEach(function (e, t) {
                if (!e) {
                  var n = r.get(t)
                  n ? !1 !== globalThis.__DEV__ && W.warn(43, n) : !1 !== globalThis.__DEV__ && W.warn(44)
                }
              }),
            n
          )
        }),
        (e.prototype.reFetchObservableQueries = function (e) {
          var t = this
          void 0 === e && (e = !1)
          var n = []
          return (
            this.getObservableQueries(e ? 'all' : 'active').forEach(function (r, i) {
              var a = r.options.fetchPolicy
              ;(Wi('resetLastResults', function () {
                return r.resetLastResults()
              }),
                (e || ('standby' !== a && 'cache-only' !== a)) && n.push(r.refetch()),
                (t.queries.get(i) || r.queryInfo).setDiff(null))
            }),
            this.broadcastQueries(),
            Promise.all(n)
          )
        }),
        (e.prototype.startGraphQLSubscription = function (e) {
          var t = this,
            n = e.query,
            r = e.variables,
            i = e.fetchPolicy,
            a = e.errorPolicy,
            o = void 0 === a ? 'none' : a,
            s = e.context,
            l = void 0 === s ? {} : s,
            u = e.extensions,
            c = void 0 === u ? {} : u
          ;((n = this.transform(n)), (r = this.getVariables(n, r)))
          var f = function (e) {
            return t.getObservableFromLink(n, l, e, c).map(function (r) {
              'no-cache' !== i &&
                (Xo(r, o) && t.cache.write({ query: n, result: r.data, dataId: 'ROOT_SUBSCRIPTION', variables: e }),
                t.broadcastQueries())
              var a = vi(r),
                s = (function (e) {
                  return !!e.extensions && Array.isArray(e.extensions[Li])
                })(r)
              if (a || s) {
                var l = {}
                if ((a && (l.graphQLErrors = r.errors), s && (l.protocolErrors = r.extensions[Li]), 'none' === o || s))
                  throw new zi(l)
              }
              return ('ignore' === o && delete r.errors, r)
            })
          }
          if (this.getDocumentInfo(n).hasClientExports) {
            var d = this.localState.addExportedVariables(n, r, l).then(f)
            return new Xr(function (e) {
              var t = null
              return (
                d.then(function (n) {
                  return (t = n.subscribe(e))
                }, e.error),
                function () {
                  return t && t.unsubscribe()
                }
              )
            })
          }
          return f(r)
        }),
        (e.prototype.stopQuery = function (e) {
          ;(this.stopQueryNoBroadcast(e), this.broadcastQueries())
        }),
        (e.prototype.stopQueryNoBroadcast = function (e) {
          ;(this.stopQueryInStoreNoBroadcast(e), this.removeQuery(e))
        }),
        (e.prototype.removeQuery = function (e) {
          var t
          ;(this.fetchCancelFns.delete(e),
            this.queries.has(e) &&
              (null === (t = this.queries.get(e)) || void 0 === t || t.stop(), this.queries.delete(e)))
        }),
        (e.prototype.broadcastQueries = function () {
          ;(this.onBroadcast && this.onBroadcast(),
            this.queries.forEach(function (e) {
              var t
              return null === (t = e.observableQuery) || void 0 === t ? void 0 : t.notify()
            }))
        }),
        (e.prototype.getLocalState = function () {
          return this.localState
        }),
        (e.prototype.getObservableFromLink = function (e, t, n, r, i) {
          var a,
            o,
            s = this
          void 0 === i &&
            (i = null !== (a = null == t ? void 0 : t.queryDeduplication) && void 0 !== a ? a : this.queryDeduplication)
          var l = this.getDocumentInfo(e),
            u = l.serverQuery,
            c = l.clientQuery
          if (u) {
            var f = this.inFlightLinkObservables,
              d = this.link,
              p = {
                query: u,
                variables: n,
                operationName: kn(u) || void 0,
                context: this.prepareContext(x(x({}, t), { forceFetch: !i })),
                extensions: r,
              }
            if (((t = p.context), i)) {
              var h = hr(u),
                m = ln(n),
                v = f.lookup(h, m)
              if (!(o = v.observable)) {
                var y = new di([ra(d, p)])
                ;((o = v.observable = y),
                  y.beforeNext(function e(t, n) {
                    'next' === t && 'hasNext' in n && n.hasNext ? y.beforeNext(e) : f.remove(h, m)
                  }))
              }
            } else o = new di([ra(d, p)])
          } else ((o = new di([Xr.of({ data: {} })])), (t = this.prepareContext(t)))
          return (
            c &&
              (o = ui(o, function (e) {
                return s.localState.runResolvers({ document: c, remoteResult: e, context: t, variables: n })
              })),
            o
          )
        }),
        (e.prototype.getResultsFromLink = function (e, t, n) {
          var r = (e.lastRequestId = this.generateRequestId()),
            i = this.cache.transformForLink(n.query)
          return ui(
            this.getObservableFromLink(i, n.context, n.variables),
            function (a) {
              var o = yi(a),
                s = o.length > 0,
                l = n.errorPolicy
              if (r >= e.lastRequestId) {
                if (s && 'none' === l) throw e.markError(new zi({ graphQLErrors: o }))
                ;(e.markResult(a, i, n, t), e.markReady())
              }
              var u = { data: a.data, loading: !1, networkStatus: jo.ready }
              return (
                s && 'none' === l && (u.data = void 0),
                s && 'ignore' !== l && ((u.errors = o), (u.networkStatus = jo.error)),
                u
              )
            },
            function (t) {
              var n = qi(t) ? t : new zi({ networkError: t })
              throw (r >= e.lastRequestId && e.markError(n), n)
            },
          )
        }),
        (e.prototype.fetchConcastWithInfo = function (e, t, n, r) {
          var i = this
          ;(void 0 === n && (n = jo.loading), void 0 === r && (r = t.query))
          var a,
            o,
            s = this.getVariables(r, t.variables),
            l = this.defaultOptions.watchQuery,
            u = t.fetchPolicy,
            c = void 0 === u ? (l && l.fetchPolicy) || 'cache-first' : u,
            f = t.errorPolicy,
            d = void 0 === f ? (l && l.errorPolicy) || 'none' : f,
            p = t.returnPartialData,
            h = void 0 !== p && p,
            m = t.notifyOnNetworkStatusChange,
            v = void 0 !== m && m,
            y = t.context,
            g = void 0 === y ? {} : y,
            b = Object.assign({}, t, {
              query: r,
              variables: s,
              fetchPolicy: c,
              errorPolicy: d,
              returnPartialData: h,
              notifyOnNetworkStatusChange: v,
              context: g,
            }),
            E = function (r) {
              b.variables = r
              var a = i.fetchQueryByPolicy(e, b, n)
              return (
                'standby' !== b.fetchPolicy &&
                  a.sources.length > 0 &&
                  e.observableQuery &&
                  e.observableQuery.applyNextFetchPolicy('after-fetch', t),
                a
              )
            },
            w = function () {
              return i.fetchCancelFns.delete(e.queryId)
            }
          if (
            (this.fetchCancelFns.set(e.queryId, function (e) {
              ;(w(),
                setTimeout(function () {
                  return a.cancel(e)
                }))
            }),
            this.getDocumentInfo(b.query).hasClientExports)
          )
            ((a = new di(
              this.localState
                .addExportedVariables(b.query, b.variables, b.context)
                .then(E)
                .then(function (e) {
                  return e.sources
                }),
            )),
              (o = !0))
          else {
            var _ = E(b.variables)
            ;((o = _.fromLink), (a = new di(_.sources)))
          }
          return (a.promise.then(w, w), { concast: a, fromLink: o })
        }),
        (e.prototype.refetchQueries = function (e) {
          var t = this,
            n = e.updateCache,
            r = e.include,
            i = e.optimistic,
            a = void 0 !== i && i,
            o = e.removeOptimistic,
            s = void 0 === o ? (a ? $('refetchQueries') : void 0) : o,
            l = e.onQueryUpdated,
            u = new Map()
          r &&
            this.getObservableQueries(r).forEach(function (e, n) {
              u.set(n, { oq: e, lastDiff: (t.queries.get(n) || e.queryInfo).getDiff() })
            })
          var c = new Map()
          return (
            n &&
              this.cache.batch({
                update: n,
                optimistic: (a && s) || !1,
                removeOptimistic: s,
                onWatchUpdated: function (e, t, n) {
                  var r = e.watcher instanceof Jo && e.watcher.observableQuery
                  if (r) {
                    if (l) {
                      u.delete(r.queryId)
                      var i = l(r, t, n)
                      return (!0 === i && (i = r.refetch()), !1 !== i && c.set(r, i), i)
                    }
                    null !== l && u.set(r.queryId, { oq: r, lastDiff: n, diff: t })
                  }
                },
              }),
            u.size &&
              u.forEach(function (e, n) {
                var r,
                  i = e.oq,
                  a = e.lastDiff,
                  o = e.diff
                ;(l &&
                  (o ||
                    (o = Wi('canonizeResults', function () {
                      return t.cache.diff(i.queryInfo.getDiffOptions())
                    })),
                  (r = l(i, o, a))),
                  (l && !0 !== r) || (r = i.refetch()),
                  !1 !== r && c.set(i, r),
                  n.indexOf('legacyOneTimeQuery') >= 0 && t.stopQueryNoBroadcast(n))
              }),
            s && this.cache.removeOptimistic(s),
            c
          )
        }),
        (e.prototype.maskOperation = function (e) {
          var t,
            n,
            r,
            i = e.document,
            a = e.data
          if (!1 !== globalThis.__DEV__) {
            var o = e.fetchPolicy,
              s = e.id,
              l = null === (t = _n(i)) || void 0 === t ? void 0 : t.operation,
              u = (null !== (n = null == l ? void 0 : l[0]) && void 0 !== n ? n : 'o') + s
            !this.dataMasking ||
              'no-cache' !== o ||
              (function (e) {
                var t = !0
                return (
                  it(e, {
                    FragmentSpread: function (e) {
                      if (
                        !(t =
                          !!e.directives &&
                          e.directives.some(function (e) {
                            return 'unmask' === e.name.value
                          }))
                      )
                        return rt
                    },
                  }),
                  t
                )
              })(i) ||
              this.noCacheWarningsByQueryId.has(u) ||
              (this.noCacheWarningsByQueryId.add(u),
              !1 !== globalThis.__DEV__ &&
                W.warn(45, null !== (r = kn(i)) && void 0 !== r ? r : 'Unnamed '.concat(null != l ? l : 'operation')))
          }
          return this.dataMasking
            ? (function (e, t, n) {
                var r
                if (!n.fragmentMatches) return (!1 !== globalThis.__DEV__ && Ra(), e)
                var i = _n(t)
                return (
                  W(i, 63),
                  null == e
                    ? e
                    : Na(e, i.selectionSet, {
                        operationType: i.operation,
                        operationName: null === (r = i.name) || void 0 === r ? void 0 : r.value,
                        fragmentMap: It(Sn(t)),
                        cache: n,
                        mutableTargets: new Ta(),
                        knownChanged: new xa(),
                      })
                )
              })(a, i, this.cache)
            : a
        }),
        (e.prototype.maskFragment = function (e) {
          var t = e.data,
            n = e.fragment,
            r = e.fragmentName
          return this.dataMasking ? Pa(t, n, this.cache, r) : t
        }),
        (e.prototype.fetchQueryByPolicy = function (e, t, n) {
          var r = this,
            i = t.query,
            a = t.variables,
            o = t.fetchPolicy,
            s = t.refetchWritePolicy,
            l = t.errorPolicy,
            u = t.returnPartialData,
            c = t.context,
            f = t.notifyOnNetworkStatusChange,
            d = e.networkStatus
          e.init({ document: i, variables: a, networkStatus: n })
          var p = function () {
              return e.getDiff()
            },
            h = function (t, n) {
              void 0 === n && (n = e.networkStatus || jo.loading)
              var o = t.result
              !1 === globalThis.__DEV__ || u || Di(o, {}) || Ko(t.missing)
              var s = function (e) {
                return Xr.of(x({ data: e, loading: Qo(n), networkStatus: n }, t.complete ? null : { partial: !0 }))
              }
              return o && r.getDocumentInfo(i).hasForcedResolvers
                ? r.localState
                    .runResolvers({
                      document: i,
                      remoteResult: { data: o },
                      context: c,
                      variables: a,
                      onlyRunForcedResolvers: !0,
                    })
                    .then(function (e) {
                      return s(e.data || void 0)
                    })
                : 'none' === l && n === jo.refetch && Array.isArray(t.missing)
                  ? s(void 0)
                  : s(o)
            },
            m = 'no-cache' === o ? 0 : n === jo.refetch && 'merge' !== s ? 1 : 2,
            v = function () {
              return r.getResultsFromLink(e, m, { query: i, variables: a, context: c, fetchPolicy: o, errorPolicy: l })
            },
            y = f && 'number' == typeof d && d !== n && Qo(n)
          switch (o) {
            default:
            case 'cache-first':
              return (g = p()).complete
                ? { fromLink: !1, sources: [h(g, e.markReady())] }
                : u || y
                  ? { fromLink: !0, sources: [h(g), v()] }
                  : { fromLink: !0, sources: [v()] }
            case 'cache-and-network':
              var g
              return (g = p()).complete || u || y
                ? { fromLink: !0, sources: [h(g), v()] }
                : { fromLink: !0, sources: [v()] }
            case 'cache-only':
              return { fromLink: !1, sources: [h(p(), e.markReady())] }
            case 'network-only':
              return y ? { fromLink: !0, sources: [h(p()), v()] } : { fromLink: !0, sources: [v()] }
            case 'no-cache':
              return y ? { fromLink: !0, sources: [h(e.getDiff()), v()] } : { fromLink: !0, sources: [v()] }
            case 'standby':
              return { fromLink: !1, sources: [] }
          }
        }),
        (e.prototype.getOrCreateQuery = function (e) {
          return (e && !this.queries.has(e) && this.queries.set(e, new Jo(this, e)), this.queries.get(e))
        }),
        (e.prototype.prepareContext = function (e) {
          void 0 === e && (e = {})
          var t = this.localState.prepareContext(e)
          return x(x(x({}, this.defaultContext), t), { clientAwareness: this.clientAwareness })
        }),
        e
      )
    })(),
    ns = (function () {
      function e(e) {
        var t = e.cache,
          n = e.client,
          r = e.resolvers,
          i = e.fragmentMatcher
        ;((this.selectionsToResolveCache = new WeakMap()),
          (this.cache = t),
          n && (this.client = n),
          r && this.addResolvers(r),
          i && this.setFragmentMatcher(i))
      }
      return (
        (e.prototype.addResolvers = function (e) {
          var t = this
          ;((this.resolvers = this.resolvers || {}),
            Array.isArray(e)
              ? e.forEach(function (e) {
                  t.resolvers = Or(t.resolvers, e)
                })
              : (this.resolvers = Or(this.resolvers, e)))
        }),
        (e.prototype.setResolvers = function (e) {
          ;((this.resolvers = {}), this.addResolvers(e))
        }),
        (e.prototype.getResolvers = function () {
          return this.resolvers || {}
        }),
        (e.prototype.runResolvers = function (e) {
          return C(this, arguments, void 0, function (e) {
            var t = e.document,
              n = e.remoteResult,
              r = e.context,
              i = e.variables,
              a = e.onlyRunForcedResolvers,
              o = void 0 !== a && a
            return R(this, function (e) {
              return t
                ? [
                    2,
                    this.resolveDocument(t, n.data, r, i, this.fragmentMatcher, o).then(function (e) {
                      return x(x({}, n), { data: e.result })
                    }),
                  ]
                : [2, n]
            })
          })
        }),
        (e.prototype.setFragmentMatcher = function (e) {
          this.fragmentMatcher = e
        }),
        (e.prototype.getFragmentMatcher = function () {
          return this.fragmentMatcher
        }),
        (e.prototype.clientQuery = function (e) {
          return ht(['client'], e) && this.resolvers ? e : null
        }),
        (e.prototype.serverQuery = function (e) {
          return Sr(e)
        }),
        (e.prototype.prepareContext = function (e) {
          var t = this.cache
          return x(x({}, e), {
            cache: t,
            getCacheKey: function (e) {
              return t.identify(e)
            },
          })
        }),
        (e.prototype.addExportedVariables = function (e) {
          return C(this, arguments, void 0, function (e, t, n) {
            return (
              void 0 === t && (t = {}),
              void 0 === n && (n = {}),
              R(this, function (r) {
                return e
                  ? [
                      2,
                      this.resolveDocument(e, this.buildRootValueFromCache(e, t) || {}, this.prepareContext(n), t).then(
                        function (e) {
                          return x(x({}, t), e.exportedVariables)
                        },
                      ),
                    ]
                  : [2, x({}, t)]
              })
            )
          })
        }),
        (e.prototype.shouldForceResolvers = function (e) {
          var t = !1
          return (
            it(e, {
              Directive: {
                enter: function (e) {
                  if (
                    'client' === e.name.value &&
                    e.arguments &&
                    (t = e.arguments.some(function (e) {
                      return 'always' === e.name.value && 'BooleanValue' === e.value.kind && !0 === e.value.value
                    }))
                  )
                    return rt
                },
              },
            }),
            t
          )
        }),
        (e.prototype.buildRootValueFromCache = function (e, t) {
          return this.cache.diff({ query: kr(e), variables: t, returnPartialData: !0, optimistic: !1 }).result
        }),
        (e.prototype.resolveDocument = function (e, t) {
          return C(this, arguments, void 0, function (e, t, n, r, i, a) {
            var o, s, l, u, c, f, d, p, h, m
            return (
              void 0 === n && (n = {}),
              void 0 === r && (r = {}),
              void 0 === i &&
                (i = function () {
                  return !0
                }),
              void 0 === a && (a = !1),
              R(this, function (v) {
                return (
                  (o = On(e)),
                  (s = Sn(e)),
                  (l = It(s)),
                  (u = this.collectSelectionsToResolve(o, l)),
                  (c = o.operation),
                  (f = c ? c.charAt(0).toUpperCase() + c.slice(1) : 'Query'),
                  (p = (d = this).cache),
                  (h = d.client),
                  (m = {
                    fragmentMap: l,
                    context: x(x({}, n), { cache: p, client: h }),
                    variables: r,
                    fragmentMatcher: i,
                    defaultOperationType: f,
                    exportedVariables: {},
                    selectionsToResolve: u,
                    onlyRunForcedResolvers: a,
                  }),
                  [
                    2,
                    this.resolveSelectionSet(o.selectionSet, false, t, m).then(function (e) {
                      return { result: e, exportedVariables: m.exportedVariables }
                    }),
                  ]
                )
              })
            )
          })
        }),
        (e.prototype.resolveSelectionSet = function (e, t, n, r) {
          return C(this, void 0, void 0, function () {
            var i,
              a,
              o,
              s,
              l,
              u = this
            return R(this, function (c) {
              return (
                (i = r.fragmentMap),
                (a = r.context),
                (o = r.variables),
                (s = [n]),
                (l = function (e) {
                  return C(u, void 0, void 0, function () {
                    var l, u
                    return R(this, function (c) {
                      return (t || r.selectionsToResolve.has(e)) && pt(e, o)
                        ? En(e)
                          ? [
                              2,
                              this.resolveField(e, t, n, r).then(function (t) {
                                var n
                                void 0 !== t && s.push((((n = {})[gn(e)] = t), n))
                              }),
                            ]
                          : (!(function (e) {
                              return 'InlineFragment' === e.kind
                            })(e)
                              ? ((l = i[e.name.value]), W(l, 21, e.name.value))
                              : (l = e),
                            l && l.typeCondition && ((u = l.typeCondition.name.value), r.fragmentMatcher(n, u, a))
                              ? [
                                  2,
                                  this.resolveSelectionSet(l.selectionSet, t, n, r).then(function (e) {
                                    s.push(e)
                                  }),
                                ]
                              : [2])
                        : [2]
                    })
                  })
                }),
                [
                  2,
                  Promise.all(e.selections.map(l)).then(function () {
                    return Cr(s)
                  }),
                ]
              )
            })
          })
        }),
        (e.prototype.resolveField = function (e, t, n, r) {
          return C(this, void 0, void 0, function () {
            var i,
              a,
              o,
              s,
              l,
              u,
              c,
              f,
              d,
              p = this
            return R(this, function (h) {
              return n
                ? ((i = r.variables),
                  (a = e.name.value),
                  (o = gn(e)),
                  (s = a !== o),
                  (l = n[o] || n[a]),
                  (u = Promise.resolve(l)),
                  (r.onlyRunForcedResolvers && !this.shouldForceResolvers(e)) ||
                    ((c = n.__typename || r.defaultOperationType),
                    (f = this.resolvers && this.resolvers[c]) &&
                      (d = f[s ? a : o]) &&
                      (u = Promise.resolve(
                        lo.withValue(this.cache, d, [n, yn(e, i), r.context, { field: e, fragmentMap: r.fragmentMap }]),
                      ))),
                  [
                    2,
                    u.then(function (n) {
                      var i, a
                      if (
                        (void 0 === n && (n = l),
                        e.directives &&
                          e.directives.forEach(function (e) {
                            'export' === e.name.value &&
                              e.arguments &&
                              e.arguments.forEach(function (e) {
                                'as' === e.name.value &&
                                  'StringValue' === e.value.kind &&
                                  (r.exportedVariables[e.value.value] = n)
                              })
                          }),
                        !e.selectionSet)
                      )
                        return n
                      if (null == n) return n
                      var o =
                        null !==
                          (a =
                            null === (i = e.directives) || void 0 === i
                              ? void 0
                              : i.some(function (e) {
                                  return 'client' === e.name.value
                                })) &&
                        void 0 !== a &&
                        a
                      return Array.isArray(n)
                        ? p.resolveSubSelectedArray(e, t || o, n, r)
                        : e.selectionSet
                          ? p.resolveSelectionSet(e.selectionSet, t || o, n, r)
                          : void 0
                    }),
                  ])
                : [2, null]
            })
          })
        }),
        (e.prototype.resolveSubSelectedArray = function (e, t, n, r) {
          var i = this
          return Promise.all(
            n.map(function (n) {
              return null === n
                ? null
                : Array.isArray(n)
                  ? i.resolveSubSelectedArray(e, t, n, r)
                  : e.selectionSet
                    ? i.resolveSelectionSet(e.selectionSet, t, n, r)
                    : void 0
            }),
          )
        }),
        (e.prototype.collectSelectionsToResolve = function (e, t) {
          var n = function (e) {
              return !Array.isArray(e)
            },
            r = this.selectionsToResolveCache
          return (function e(i) {
            if (!r.has(i)) {
              var a = new Set()
              ;(r.set(i, a),
                it(i, {
                  Directive: function (e, t, r, i, o) {
                    'client' === e.name.value &&
                      o.forEach(function (e) {
                        n(e) && dt(e) && a.add(e)
                      })
                  },
                  FragmentSpread: function (r, i, o, s, l) {
                    var u = t[r.name.value]
                    W(u, 22, r.name.value)
                    var c = e(u)
                    c.size > 0 &&
                      (l.forEach(function (e) {
                        n(e) && dt(e) && a.add(e)
                      }),
                      a.add(r),
                      c.forEach(function (e) {
                        a.add(e)
                      }))
                  },
                }))
            }
            return r.get(i)
          })(e)
        }),
        e
      )
    })(),
    rs = !1,
    is = (function () {
      function e(e) {
        var t,
          n,
          r,
          i = this
        if (((this.resetStoreCallbacks = []), (this.clearStoreCallbacks = []), !e.cache)) throw K(16)
        var a = e.uri,
          o = e.credentials,
          s = e.headers,
          l = e.cache,
          u = e.documentTransform,
          c = e.ssrMode,
          f = void 0 !== c && c,
          d = e.ssrForceFetchDelay,
          p = void 0 === d ? 0 : d,
          h = e.connectToDevTools,
          m = e.queryDeduplication,
          v = void 0 === m || m,
          y = e.defaultOptions,
          g = e.defaultContext,
          b = e.assumeImmutableResults,
          E = void 0 === b ? l.assumeImmutableResults : b,
          w = e.resolvers,
          _ = e.typeDefs,
          k = e.fragmentMatcher,
          S = e.clientAwareness,
          T = e.name,
          O = e.version,
          C = e.devtools,
          R = e.dataMasking
        !1 !== globalThis.__DEV__ &&
          (Ki(e, 'connectToDevTools', 'ApolloClient', 'Please use `devtools.enabled` instead.'),
          Ki(e, 'uri', 'ApolloClient', 'Please initialize an instance of `HttpLink` with `uri` instead.'),
          Ki(
            e,
            'credentials',
            'ApolloClient',
            'Please initialize an instance of `HttpLink` with `credentials` instead.',
          ),
          Ki(e, 'headers', 'ApolloClient', 'Please initialize an instance of `HttpLink` with `headers` instead.'),
          Ki(e, 'name', 'ApolloClient', 'Please use the `clientAwareness.name` option instead.'),
          Ki(e, 'version', 'ApolloClient', 'Please use the `clientAwareness.version` option instead.'),
          Ki(e, 'typeDefs', 'ApolloClient'),
          e.link || (!1 !== globalThis.__DEV__ && W.warn(17)))
        var N = e.link
        ;(N || (N = a ? new Ea({ uri: a, credentials: o, headers: s }) : Xi.empty()),
          (this.link = N),
          (this.cache = l),
          (this.disableNetworkFetches = f || p > 0),
          (this.queryDeduplication = v),
          (this.defaultOptions = y || Object.create(null)),
          (this.typeDefs = _),
          (this.devtoolsConfig = x(x({}, C), {
            enabled: null !== (t = null == C ? void 0 : C.enabled) && void 0 !== t ? t : h,
          })),
          void 0 === this.devtoolsConfig.enabled && (this.devtoolsConfig.enabled = !1 !== globalThis.__DEV__),
          p &&
            setTimeout(function () {
              return (i.disableNetworkFetches = !1)
            }, p),
          (this.watchQuery = this.watchQuery.bind(this)),
          (this.query = this.query.bind(this)),
          (this.mutate = this.mutate.bind(this)),
          (this.watchFragment = this.watchFragment.bind(this)),
          (this.resetStore = this.resetStore.bind(this)),
          (this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this)),
          (this.version = z),
          (this.localState = new ns({ cache: l, client: this, resolvers: w, fragmentMatcher: k })),
          (this.queryManager = new ts({
            cache: this.cache,
            link: this.link,
            defaultOptions: this.defaultOptions,
            defaultContext: g,
            documentTransform: u,
            queryDeduplication: v,
            ssrMode: f,
            dataMasking: !!R,
            clientAwareness: {
              name: null !== (n = null == S ? void 0 : S.name) && void 0 !== n ? n : T,
              version: null !== (r = null == S ? void 0 : S.version) && void 0 !== r ? r : O,
            },
            localState: this.localState,
            assumeImmutableResults: E,
            onBroadcast: this.devtoolsConfig.enabled
              ? function () {
                  i.devToolsHookCb &&
                    i.devToolsHookCb({
                      action: {},
                      state: { queries: i.queryManager.getQueryStore(), mutations: i.queryManager.mutationStore || {} },
                      dataWithOptimisticResults: i.cache.extract(!0),
                    })
                }
              : void 0,
          })),
          this.devtoolsConfig.enabled && this.connectToDevTools())
      }
      return (
        Object.defineProperty(e.prototype, 'prioritizeCacheValues', {
          get: function () {
            return this.disableNetworkFetches
          },
          set: function (e) {
            this.disableNetworkFetches = e
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.connectToDevTools = function () {
          if ('undefined' != typeof window) {
            var e = window,
              t = Symbol.for('apollo.devtools')
            ;((e[t] = e[t] || []).push(this),
              (e.__APOLLO_CLIENT__ = this),
              rs ||
                !1 === globalThis.__DEV__ ||
                ((rs = !0),
                window.document &&
                  window.top === window.self &&
                  /^(https?|file):$/.test(window.location.protocol) &&
                  setTimeout(function () {
                    if (!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
                      var e = window.navigator,
                        t = e && e.userAgent,
                        n = void 0
                      ;('string' == typeof t &&
                        (t.indexOf('Chrome/') > -1
                          ? (n =
                              'https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm')
                          : t.indexOf('Firefox/') > -1 &&
                            (n = 'https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/')),
                        n &&
                          !1 !== globalThis.__DEV__ &&
                          W.log('Download the Apollo DevTools for a better development experience: %s', n))
                    }
                  }, 1e4)))
          }
        }),
        Object.defineProperty(e.prototype, 'documentTransform', {
          get: function () {
            return this.queryManager.documentTransform
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.stop = function () {
          this.queryManager.stop()
        }),
        (e.prototype.watchQuery = function (e) {
          return (
            this.defaultOptions.watchQuery && (e = bi(this.defaultOptions.watchQuery, e)),
            !this.disableNetworkFetches ||
              ('network-only' !== e.fetchPolicy && 'cache-and-network' !== e.fetchPolicy) ||
              (e = x(x({}, e), { fetchPolicy: 'cache-first' })),
            !1 !== globalThis.__DEV__ &&
              (Ki(e, 'canonizeResults', 'client.watchQuery'), Ki(e, 'partialRefetch', 'client.watchQuery')),
            this.queryManager.watchQuery(e)
          )
        }),
        (e.prototype.query = function (e) {
          return (
            this.defaultOptions.query && (e = bi(this.defaultOptions.query, e)),
            W('cache-and-network' !== e.fetchPolicy, 18),
            this.disableNetworkFetches &&
              'network-only' === e.fetchPolicy &&
              (e = x(x({}, e), { fetchPolicy: 'cache-first' })),
            !1 !== globalThis.__DEV__ &&
              (Ki(e, 'canonizeResults', 'client.query'),
              Ki(
                e,
                'notifyOnNetworkStatusChange',
                'client.query',
                'This option does not affect `client.query` and can be safely removed.',
              ),
              'standby' === e.fetchPolicy && !1 !== globalThis.__DEV__ && W.warn(19)),
            this.queryManager.query(e)
          )
        }),
        (e.prototype.mutate = function (e) {
          return (this.defaultOptions.mutate && (e = bi(this.defaultOptions.mutate, e)), this.queryManager.mutate(e))
        }),
        (e.prototype.subscribe = function (e) {
          var t = this,
            n = this.queryManager.generateQueryId()
          return this.queryManager.startGraphQLSubscription(e).map(function (r) {
            return x(x({}, r), {
              data: t.queryManager.maskOperation({
                document: e.query,
                data: r.data,
                fetchPolicy: e.fetchPolicy,
                id: n,
              }),
            })
          })
        }),
        (e.prototype.readQuery = function (e, t) {
          return (void 0 === t && (t = !1), this.cache.readQuery(e, t))
        }),
        (e.prototype.watchFragment = function (e) {
          var t
          return this.cache.watchFragment(
            x(x({}, e), (((t = {})[Symbol.for('apollo.dataMasking')] = this.queryManager.dataMasking), t)),
          )
        }),
        (e.prototype.readFragment = function (e, t) {
          return (void 0 === t && (t = !1), this.cache.readFragment(e, t))
        }),
        (e.prototype.writeQuery = function (e) {
          var t = this.cache.writeQuery(e)
          return (!1 !== e.broadcast && this.queryManager.broadcastQueries(), t)
        }),
        (e.prototype.writeFragment = function (e) {
          var t = this.cache.writeFragment(e)
          return (!1 !== e.broadcast && this.queryManager.broadcastQueries(), t)
        }),
        (e.prototype.__actionHookForDevTools = function (e) {
          this.devToolsHookCb = e
        }),
        (e.prototype.__requestRaw = function (e) {
          return ra(this.link, e)
        }),
        (e.prototype.resetStore = function () {
          var e = this
          return Promise.resolve()
            .then(function () {
              return e.queryManager.clearStore({ discardWatches: !1 })
            })
            .then(function () {
              return Promise.all(
                e.resetStoreCallbacks.map(function (e) {
                  return e()
                }),
              )
            })
            .then(function () {
              return e.reFetchObservableQueries()
            })
        }),
        (e.prototype.clearStore = function () {
          var e = this
          return Promise.resolve()
            .then(function () {
              return e.queryManager.clearStore({ discardWatches: !0 })
            })
            .then(function () {
              return Promise.all(
                e.clearStoreCallbacks.map(function (e) {
                  return e()
                }),
              )
            })
        }),
        (e.prototype.onResetStore = function (e) {
          var t = this
          return (
            this.resetStoreCallbacks.push(e),
            function () {
              t.resetStoreCallbacks = t.resetStoreCallbacks.filter(function (t) {
                return t !== e
              })
            }
          )
        }),
        (e.prototype.onClearStore = function (e) {
          var t = this
          return (
            this.clearStoreCallbacks.push(e),
            function () {
              t.clearStoreCallbacks = t.clearStoreCallbacks.filter(function (t) {
                return t !== e
              })
            }
          )
        }),
        (e.prototype.reFetchObservableQueries = function (e) {
          return this.queryManager.reFetchObservableQueries(e)
        }),
        (e.prototype.refetchQueries = function (e) {
          var t = this.queryManager.refetchQueries(e),
            n = [],
            r = []
          t.forEach(function (e, t) {
            ;(n.push(t), r.push(e))
          })
          var i = Promise.all(r)
          return (
            (i.queries = n),
            (i.results = r),
            i.catch(function (e) {
              !1 !== globalThis.__DEV__ && W.debug(20, e)
            }),
            i
          )
        }),
        (e.prototype.getObservableQueries = function (e) {
          return (void 0 === e && (e = 'active'), this.queryManager.getObservableQueries(e))
        }),
        (e.prototype.extract = function (e) {
          return this.cache.extract(e)
        }),
        (e.prototype.restore = function (e) {
          return this.cache.restore(e)
        }),
        (e.prototype.addResolvers = function (e) {
          this.localState.addResolvers(e)
        }),
        (e.prototype.setResolvers = function (e) {
          this.localState.setResolvers(e)
        }),
        (e.prototype.getResolvers = function () {
          return this.localState.getResolvers()
        }),
        (e.prototype.setLocalStateFragmentMatcher = function (e) {
          this.localState.setFragmentMatcher(e)
        }),
        (e.prototype.setLink = function (e) {
          this.link = this.queryManager.link = e
        }),
        Object.defineProperty(e.prototype, 'defaultContext', {
          get: function () {
            return this.queryManager.defaultContext
          },
          enumerable: !1,
          configurable: !0,
        }),
        e
      )
    })()
  !1 !== globalThis.__DEV__ && (is.prototype.getMemoryInternals = Yt)
  var as = new Map(),
    os = new Map(),
    ss = !0,
    ls = !1
  function us(e) {
    return e.replace(/[\s,]+/g, ' ').trim()
  }
  function cs(e) {
    var t = new Set(),
      n = []
    return (
      e.definitions.forEach(function (e) {
        if ('FragmentDefinition' === e.kind) {
          var r = e.name.value,
            i = us((o = e.loc).source.body.substring(o.start, o.end)),
            a = os.get(r)
          ;(a && !a.has(i)
            ? ss &&
              console.warn(
                'Warning: fragment with name ' +
                  r +
                  ' already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names',
              )
            : a || os.set(r, (a = new Set())),
            a.add(i),
            t.has(i) || (t.add(i), n.push(e)))
        } else n.push(e)
        var o
      }),
      x(x({}, e), { definitions: n })
    )
  }
  function fs(e) {
    var t = us(e)
    if (!as.has(t)) {
      var n = (function (e, t) {
        const n = new Je(e, t),
          r = n.parseDocument()
        return (Object.defineProperty(r, 'tokenCount', { enumerable: !1, value: n.tokenCount }), r)
      })(e, { experimentalFragmentVariables: ls, allowLegacyFragmentVariables: ls })
      if (!n || 'Document' !== n.kind) throw new Error('Not a valid GraphQL document.')
      as.set(
        t,
        (function (e) {
          var t = new Set(e.definitions)
          t.forEach(function (e) {
            ;(e.loc && delete e.loc,
              Object.keys(e).forEach(function (n) {
                var r = e[n]
                r && 'object' == typeof r && t.add(r)
              }))
          })
          var n = e.loc
          return (n && (delete n.startToken, delete n.endToken), e)
        })(cs(n)),
      )
    }
    return as.get(t)
  }
  function ds(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
    'string' == typeof e && (e = [e])
    var r = e[0]
    return (
      t.forEach(function (t, n) {
        ;(t && 'Document' === t.kind ? (r += t.loc.source.body) : (r += t), (r += e[n + 1]))
      }),
      fs(r)
    )
  }
  function ps() {
    ;(as.clear(), os.clear())
  }
  function hs() {
    ss = !1
  }
  function ms() {
    ls = !0
  }
  function vs() {
    ls = !1
  }
  var ys,
    gs,
    bs,
    Es = ds,
    ws = ps,
    _s = hs,
    ks = ms,
    Ss = vs
  function Ts(e) {
    var t
    switch (e) {
      case gs.Query:
        t = 'Query'
        break
      case gs.Mutation:
        t = 'Mutation'
        break
      case gs.Subscription:
        t = 'Subscription'
    }
    return t
  }
  function xs(e) {
    ;(Hi('parser', function () {
      !1 !== globalThis.__DEV__ && W.warn(94)
    }),
      bs || (bs = new Ut(Kt.parser || 1e3)))
    var t,
      n,
      r = bs.get(e)
    if (r) return r
    W(!!e && !!e.kind, 95, e)
    for (var i = [], a = [], o = [], s = [], l = 0, u = e.definitions; l < u.length; l++) {
      var c = u[l]
      if ('FragmentDefinition' !== c.kind) {
        if ('OperationDefinition' === c.kind)
          switch (c.operation) {
            case 'query':
              a.push(c)
              break
            case 'mutation':
              o.push(c)
              break
            case 'subscription':
              s.push(c)
          }
      } else i.push(c)
    }
    ;(W(!i.length || a.length || o.length || s.length, 96),
      W(a.length + o.length + s.length <= 1, 97, e, a.length, s.length, o.length),
      (n = a.length ? gs.Query : gs.Mutation),
      a.length || o.length || (n = gs.Subscription))
    var f = a.length ? a : o.length ? o : s
    W(1 === f.length, 98, e, f.length)
    var d = f[0]
    t = d.variableDefinitions || []
    var p = { name: d.name && 'Name' === d.name.kind ? d.name.value : 'data', type: n, variables: t }
    return (bs.set(e, p), p)
  }
  function Os(e, t) {
    var n = Wi('parser', xs, [e]),
      r = Ts(t),
      i = Ts(n.type)
    W(n.type === t, 99, r, r, i)
  }
  function Cs(e, t) {
    var n = ee.useRef(void 0)
    return ((n.current && Di(n.current.deps, t)) || (n.current = { value: e(), deps: t }), n.current.value)
  }
  ;(((ys = ds || (ds = {})).gql = Es),
    (ys.resetCaches = ws),
    (ys.disableFragmentWarnings = _s),
    (ys.enableExperimentalFragmentVariables = ks),
    (ys.disableExperimentalFragmentVariables = Ss),
    (ds.default = ds),
    (function (e) {
      ;((e[(e.Query = 0)] = 'Query'), (e[(e.Mutation = 1)] = 'Mutation'), (e[(e.Subscription = 2)] = 'Subscription'))
    })(gs || (gs = {})),
    (xs.resetCache = function () {
      bs = void 0
    }),
    !1 !== globalThis.__DEV__ &&
      Gt('parser', function () {
        return bs ? bs.size : 0
      }))
  var Rs,
    Ns = Ot ? ee.useLayoutEffect : ee.useEffect
  function Ds() {}
  function Is() {
    return (
      Rs || (Rs = ee.createContext(null)),
      ee.useCallback(function () {
        var e = console.error
        try {
          return ((console.error = Ds), ee.useContext(Rs), !0)
        } catch (e) {
          return !1
        } finally {
          console.error = e
        }
      }, [])
    )
  }
  function Ps(e, t, n, r) {
    void 0 === r && (r = 'Please remove this option.')
    var i = ee.useRef(!1)
    t in e && !i.current && (!1 !== globalThis.__DEV__ && W.warn(78, n, t, r), (i.current = !0))
  }
  var Fs =
      te.use ||
      function (e) {
        var t = ni(e)
        switch (t.status) {
          case 'pending':
            throw t
          case 'rejected':
            throw t.reason
          case 'fulfilled':
            return t.value
        }
      },
    As = Symbol.for('apollo.hook.wrappers')
  function Ms(e, t, n) {
    var r = n.queryManager,
      i = r && r[As],
      a = i && i[e]
    return a ? a(t) : t
  }
  var Ls = Object.prototype.hasOwnProperty
  function qs() {}
  var zs = Symbol()
  function js(e, t) {
    return (void 0 === t && (t = Object.create(null)), Ms('useQuery', Vs, ki(t && t.client))(e, t))
  }
  function Vs(e, t) {
    !1 !== globalThis.__DEV__ &&
      (Ps(t, 'canonizeResults', 'useQuery'),
      Ps(t, 'partialRefetch', 'useQuery'),
      Ps(t, 'defaultOptions', 'useQuery', 'Pass the options directly to the hook instead.'),
      Ps(
        t,
        'onCompleted',
        'useQuery',
        'If your `onCompleted` callback sets local state, switch to use derived state using `data` returned from the hook instead. Use `useEffect` to perform side-effects as a result of updates to `data`.',
      ),
      Ps(
        t,
        'onError',
        'useQuery',
        'If your `onError` callback sets local state, switch to use derived state using `data`, `error` or `errors` returned from the hook instead. Use `useEffect` if you need to perform side-effects as a result of updates to `data`, `error` or `errors`.',
      ))
    var n = Qs(e, t),
      r = n.result,
      i = n.obsQueryFields
    return ee.useMemo(
      function () {
        return x(x({}, r), i)
      },
      [r, i],
    )
  }
  function Qs(e, t) {
    var n = ki(t.client),
      r = ee.useContext(wi()).renderPromises,
      i = !!r,
      a = n.disableNetworkFetches,
      o = !1 !== t.ssr && !t.skip,
      s = t.partialRefetch,
      l = $s(n, e, t, i),
      u = (function (e, t, n, r, i) {
        function a(a) {
          var o
          return (
            Os(t, gs.Query),
            {
              client: e,
              query: t,
              observable:
                (r && r.getSSRObservable(i())) ||
                Bo.inactiveOnCreation.withValue(!r, function () {
                  return Wi('canonizeResults', function () {
                    return e.watchQuery(Us(void 0, e, n, i()))
                  })
                }),
              resultData: {
                previousData:
                  null === (o = null == a ? void 0 : a.resultData.current) || void 0 === o ? void 0 : o.data,
              },
            }
          )
        }
        var o = ee.useState(a),
          s = o[0],
          l = o[1]
        function u(e) {
          var t, n
          Object.assign(s.observable, (((t = {})[zs] = e), t))
          var r = s.resultData
          l(
            x(x({}, s), {
              query: e.query,
              resultData: Object.assign(r, {
                previousData: (null === (n = r.current) || void 0 === n ? void 0 : n.data) || r.previousData,
                current: void 0,
              }),
            }),
          )
        }
        if (e !== s.client || t !== s.query) {
          var c = a(s)
          return (l(c), [c, u])
        }
        return [s, u]
      })(n, e, t, r, l),
      c = u[0],
      f = c.observable,
      d = c.resultData,
      p = u[1],
      h = l(f)
    !(function (e, t, n, r, i) {
      var a
      t[zs] &&
        !Di(t[zs], i) &&
        (t.reobserve(Us(t, n, r, i)),
        (e.previousData = (null === (a = e.current) || void 0 === a ? void 0 : a.data) || e.previousData),
        (e.current = void 0))
      t[zs] = i
    })(d, f, n, t, h)
    var m = ee.useMemo(
      function () {
        return (function (e) {
          return {
            refetch: e.refetch.bind(e),
            reobserve: function () {
              for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n]
              return (!1 !== globalThis.__DEV__ && !1 !== globalThis.__DEV__ && W.warn(84), e.reobserve.apply(e, t))
            },
            fetchMore: e.fetchMore.bind(e),
            updateQuery: e.updateQuery.bind(e),
            startPolling: e.startPolling.bind(e),
            stopPolling: e.stopPolling.bind(e),
            subscribeToMore: e.subscribeToMore.bind(e),
          }
        })(f)
      },
      [f],
    )
    !(function (e, t, n) {
      t && n && (t.registerSSRObservable(e), e.getCurrentResult().loading && t.addObservableQueryPromise(e))
    })(f, r, o)
    var v = (function (e, t, n, r, i, a, o, s, l) {
      var u = ee.useRef(l)
      ee.useEffect(function () {
        u.current = l
      })
      var c = (!s && !a) || !1 !== r.ssr || r.skip ? (r.skip || 'standby' === i.fetchPolicy ? Js : void 0) : Ys,
        f = e.previousData,
        d = ee.useMemo(
          function () {
            return c && Gs(c, f, t, n)
          },
          [n, t, c, f],
        )
      return Ti(
        ee.useCallback(
          function (r) {
            if (s) return function () {}
            var i = function () {
                var i = e.current,
                  a = t.getCurrentResult()
                ;(i && i.loading === a.loading && i.networkStatus === a.networkStatus && Di(i.data, a.data)) ||
                  Bs(a, e, t, n, o, r, u.current)
              },
              a = function (s) {
                if (
                  (l.current.unsubscribe(), (l.current = t.resubscribeAfterError(i, a)), !Ls.call(s, 'graphQLErrors'))
                )
                  throw s
                var c = e.current
                ;(!c || (c && c.loading) || !Di(s, c.error)) &&
                  Bs({ data: c && c.data, error: s, loading: !1, networkStatus: jo.error }, e, t, n, o, r, u.current)
              },
              l = { current: t.subscribe(i, a) }
            return function () {
              setTimeout(function () {
                return l.current.unsubscribe()
              })
            }
          },
          [a, s, t, e, o, n],
        ),
        function () {
          return d || Ws(e, t, u.current, o, n)
        },
        function () {
          return d || Ws(e, t, u.current, o, n)
        },
      )
    })(d, f, n, t, h, a, s, i, { onCompleted: t.onCompleted || qs, onError: t.onError || qs })
    return { result: v, obsQueryFields: m, observable: f, resultData: d, client: n, onQueryExecuted: p }
  }
  function $s(e, t, n, r) {
    void 0 === n && (n = {})
    var i = n.skip
    ;(n.ssr, n.onCompleted, n.onError)
    var a = n.defaultOptions,
      o = O(n, ['skip', 'ssr', 'onCompleted', 'onError', 'defaultOptions'])
    return function (n) {
      var s = Object.assign(o, { query: t })
      return (
        !r ||
          ('network-only' !== s.fetchPolicy && 'cache-and-network' !== s.fetchPolicy) ||
          (s.fetchPolicy = 'cache-first'),
        s.variables || (s.variables = {}),
        i
          ? ((s.initialFetchPolicy = s.initialFetchPolicy || s.fetchPolicy || Ks(a, e.defaultOptions)),
            (s.fetchPolicy = 'standby'))
          : s.fetchPolicy ||
            (s.fetchPolicy = (null == n ? void 0 : n.options.initialFetchPolicy) || Ks(a, e.defaultOptions)),
        s
      )
    }
  }
  function Us(e, t, n, r) {
    var i = [],
      a = t.defaultOptions.watchQuery
    return (a && i.push(a), n.defaultOptions && i.push(n.defaultOptions), i.push(gi(e && e.options, r)), i.reduce(bi))
  }
  function Bs(e, t, n, r, i, a, o) {
    var s = t.current
    ;(s && s.data && (t.previousData = s.data),
      !e.error && vr(e.errors) && (e.error = new zi({ graphQLErrors: e.errors })),
      (t.current = Gs(
        (function (e, t, n) {
          if (
            e.partial &&
            n &&
            !e.loading &&
            (!e.data || 0 === Object.keys(e.data).length) &&
            'cache-only' !== t.options.fetchPolicy
          )
            return (t.refetch(), x(x({}, e), { loading: !0, networkStatus: jo.refetch }))
          return e
        })(e, n, i),
        t.previousData,
        n,
        r,
      )),
      a(),
      (function (e, t, n) {
        if (!e.loading) {
          var r = Hs(e)
          Promise.resolve()
            .then(function () {
              r
                ? n.onError(r)
                : e.data && t !== e.networkStatus && e.networkStatus === jo.ready && n.onCompleted(e.data)
            })
            .catch(function (e) {
              !1 !== globalThis.__DEV__ && W.warn(e)
            })
        }
      })(e, null == s ? void 0 : s.networkStatus, o))
  }
  function Ws(e, t, n, r, i) {
    return (e.current || Bs(t.getCurrentResult(), e, t, i, r, function () {}, n), e.current)
  }
  function Ks(e, t) {
    var n
    return (
      (null == e ? void 0 : e.fetchPolicy) ||
      (null === (n = null == t ? void 0 : t.watchQuery) || void 0 === n ? void 0 : n.fetchPolicy) ||
      'cache-first'
    )
  }
  function Hs(e) {
    return vr(e.errors) ? new zi({ graphQLErrors: e.errors }) : e.error
  }
  function Gs(e, t, n, r) {
    var i = e.data
    e.partial
    var a = O(e, ['data', 'partial'])
    return x(x({ data: i }, a), {
      client: r,
      observable: n,
      variables: n.variables,
      called: e !== Ys && e !== Js,
      previousData: t,
    })
  }
  var Ys = si({ loading: !0, data: void 0, error: void 0, networkStatus: jo.loading }),
    Js = si({ loading: !1, data: void 0, error: void 0, networkStatus: jo.ready })
  var Xs = ['refetch', 'reobserve', 'fetchMore', 'updateQuery', 'startPolling', 'stopPolling', 'subscribeToMore'],
    Zs = ['initialFetchPolicy', 'onCompleted', 'onError', 'defaultOptions', 'partialRefetch', 'canonizeResults'],
    el = [
      'query',
      'ssr',
      'client',
      'fetchPolicy',
      'nextFetchPolicy',
      'refetchWritePolicy',
      'errorPolicy',
      'pollInterval',
      'notifyOnNetworkStatusChange',
      'returnPartialData',
      'skipPollAttempt',
    ]
  function tl(e, t) {
    !1 !== globalThis.__DEV__ &&
      Ps(
        t || {},
        'ignoreResults',
        'useMutation',
        "If you don't want to synchronize component state with the mutation, please use the `useApolloClient` hook to get the client instance and call `client.mutate` directly.",
      )
    var n = ki(null == t ? void 0 : t.client)
    Os(e, gs.Mutation)
    var r = ee.useState({ called: !1, loading: !1, client: n }),
      i = r[0],
      a = r[1],
      o = ee.useRef({ result: i, mutationId: 0, isMounted: !0, client: n, mutation: e, options: t })
    Ns(function () {
      Object.assign(o.current, { client: n, options: t, mutation: e })
    })
    var s = ee.useCallback(function (e) {
        void 0 === e && (e = {})
        var t = o.current,
          n = t.options,
          r = t.mutation,
          i = x(x({}, n), { mutation: r }),
          s = e.client || o.current.client
        o.current.result.loading ||
          i.ignoreResults ||
          !o.current.isMounted ||
          a((o.current.result = { loading: !0, error: void 0, data: void 0, called: !0, client: s }))
        var l = ++o.current.mutationId,
          u = bi(i, e)
        return s.mutate(u).then(
          function (t) {
            var n,
              r,
              i = t.data,
              c = t.errors,
              f = c && c.length > 0 ? new zi({ graphQLErrors: c }) : void 0,
              d = e.onError || (null === (n = o.current.options) || void 0 === n ? void 0 : n.onError)
            if ((f && d && d(f, u), l === o.current.mutationId && !u.ignoreResults)) {
              var p = { called: !0, loading: !1, data: i, error: f, client: s }
              o.current.isMounted && !Di(o.current.result, p) && a((o.current.result = p))
            }
            var h = e.onCompleted || (null === (r = o.current.options) || void 0 === r ? void 0 : r.onCompleted)
            return (f || null == h || h(t.data, u), t)
          },
          function (t) {
            var n
            if (l === o.current.mutationId && o.current.isMounted) {
              var r = { loading: !1, error: t, data: void 0, called: !0, client: s }
              Di(o.current.result, r) || a((o.current.result = r))
            }
            var i = e.onError || (null === (n = o.current.options) || void 0 === n ? void 0 : n.onError)
            if (i) return (i(t, u), { data: void 0, errors: t })
            throw t
          },
        )
      }, []),
      l = ee.useCallback(function () {
        if (o.current.isMounted) {
          var e = { called: !1, loading: !1, client: o.current.client }
          ;(Object.assign(o.current, { mutationId: 0, result: e }), a(e))
        }
      }, [])
    return (
      ee.useEffect(function () {
        var e = o.current
        return (
          (e.isMounted = !0),
          function () {
            e.isMounted = !1
          }
        )
      }, []),
      [s, x({ reset: l }, i)]
    )
  }
  function nl(e) {
    !1 !== globalThis.__DEV__ && Ps(e, 'canonizeResults', 'useFragment')
    var t = ki(e.client),
      n = t.cache,
      r = e.from,
      i = O(e, ['from']),
      a = ee.useMemo(
        function () {
          return 'string' == typeof r ? r : null === r ? null : n.identify(r)
        },
        [n, r],
      ),
      o = Cs(
        function () {
          return x(x({}, i), { from: a })
        },
        [i, a],
      ),
      s = ee.useMemo(
        function () {
          var e = o.fragment,
            n = o.fragmentName,
            r = o.from,
            i = o.optimistic,
            a = void 0 === i || i
          if (null === r) return { result: rl({ result: {}, complete: !1 }) }
          var s = t.cache,
            l = Wi('canonizeResults', function () {
              return s.diff(x(x({}, o), { returnPartialData: !0, id: r, query: s.getFragmentDoc(e, n), optimistic: a }))
            })
          return {
            result: rl(
              x(x({}, l), { result: t.queryManager.maskFragment({ fragment: e, fragmentName: n, data: l.result }) }),
            ),
          }
        },
        [t, o],
      ),
      l = ee.useCallback(
        function () {
          return s.result
        },
        [s],
      )
    return Ti(
      ee.useCallback(
        function (e) {
          var n = 0,
            r = Wi('canonizeResults', function () {
              return null === o.from
                ? null
                : t.watchFragment(o).subscribe({
                    next: function (t) {
                      Di(t, s.result) || ((s.result = t), clearTimeout(n), (n = setTimeout(e)))
                    },
                  })
            })
          return function () {
            ;(null == r || r.unsubscribe(), clearTimeout(n))
          }
        },
        [t, o, s],
      ),
      l,
      l,
    )
  }
  function rl(e) {
    var t = { data: e.result, complete: !!e.complete }
    return (
      e.missing &&
        (t.missing = Cr(
          e.missing.map(function (e) {
            return e.missing
          }),
        )),
      t
    )
  }
  var il = Symbol.for('apollo.internal.queryRef'),
    al = Symbol.for('apollo.internal.refPromise')
  function ol(e) {
    var t,
      n =
        (((t = {
          toPromise: function () {
            return ll(n).then(function () {
              return n
            })
          },
        })[il] = e),
        (t[al] = e.promise),
        t)
    return n
  }
  function sl(e) {
    W(!e || il in e, 93)
  }
  function ll(e) {
    var t = ul(e)
    return 'fulfilled' === t.promise.status ? t.promise : e[al]
  }
  function ul(e) {
    return e[il]
  }
  function cl(e, t) {
    e[al] = t
  }
  var fl = ['canonizeResults', 'context', 'errorPolicy', 'fetchPolicy', 'refetchWritePolicy', 'returnPartialData'],
    dl = (function () {
      function e(e, t) {
        var n = this
        ;((this.key = {}),
          (this.listeners = new Set()),
          (this.references = 0),
          (this.softReferences = 0),
          (this.handleNext = this.handleNext.bind(this)),
          (this.handleError = this.handleError.bind(this)),
          (this.dispose = this.dispose.bind(this)),
          (this.observable = e),
          t.onDispose && (this.onDispose = t.onDispose),
          this.setResult(),
          this.subscribeToQuery())
        var r = function () {
          var e
          n.references ||
            (n.autoDisposeTimeoutId = setTimeout(
              n.dispose,
              null !== (e = t.autoDisposeTimeoutMs) && void 0 !== e ? e : 3e4,
            ))
        }
        this.promise.then(r, r)
      }
      return (
        Object.defineProperty(e.prototype, 'disposed', {
          get: function () {
            return this.subscription.closed
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, 'watchQueryOptions', {
          get: function () {
            return this.observable.options
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.reinitialize = function () {
          var e = this.observable,
            t = this.watchQueryOptions.fetchPolicy,
            n = 'no-cache' === t || 'standby' === t
          try {
            if (
              (n
                ? e.silentSetOptions({ fetchPolicy: 'standby' })
                : (Wi('resetLastResults', function () {
                    return e.resetLastResults()
                  }),
                  e.silentSetOptions({ fetchPolicy: 'cache-first' })),
              this.subscribeToQuery(),
              n)
            )
              return
            ;(e.resetDiff(), this.setResult())
          } finally {
            e.silentSetOptions({ fetchPolicy: t })
          }
        }),
        (e.prototype.retain = function () {
          var e = this
          ;(this.references++, clearTimeout(this.autoDisposeTimeoutId))
          var t = !1
          return function () {
            t ||
              ((t = !0),
              e.references--,
              setTimeout(function () {
                e.references || e.dispose()
              }))
          }
        }),
        (e.prototype.softRetain = function () {
          var e = this
          this.softReferences++
          var t = !1
          return function () {
            t ||
              ((t = !0),
              e.softReferences--,
              setTimeout(function () {
                e.softReferences || e.references || e.dispose()
              }))
          }
        }),
        (e.prototype.didChangeOptions = function (e) {
          var t = this
          return fl.some(function (n) {
            return n in e && !Di(t.watchQueryOptions[n], e[n])
          })
        }),
        (e.prototype.applyOptions = function (e) {
          var t = this.watchQueryOptions,
            n = t.fetchPolicy,
            r = t.canonizeResults
          return (
            'standby' === n && n !== e.fetchPolicy
              ? this.initiateFetch(this.observable.reobserve(e))
              : (this.observable.silentSetOptions(e),
                r !== e.canonizeResults &&
                  ((this.result = x(x({}, this.result), this.observable.getCurrentResult())),
                  (this.promise = ti(this.result)))),
            this.promise
          )
        }),
        (e.prototype.listen = function (e) {
          var t = this
          return (
            this.listeners.add(e),
            function () {
              t.listeners.delete(e)
            }
          )
        }),
        (e.prototype.refetch = function (e) {
          return this.initiateFetch(this.observable.refetch(e))
        }),
        (e.prototype.fetchMore = function (e) {
          return this.initiateFetch(this.observable.fetchMore(e))
        }),
        (e.prototype.dispose = function () {
          ;(this.subscription.unsubscribe(), this.onDispose())
        }),
        (e.prototype.onDispose = function () {}),
        (e.prototype.handleNext = function (e) {
          var t
          if ('pending' === this.promise.status)
            (void 0 === e.data && (e.data = this.result.data),
              (this.result = e),
              null === (t = this.resolve) || void 0 === t || t.call(this, e))
          else {
            if (e.data === this.result.data && e.networkStatus === this.result.networkStatus) return
            ;(void 0 === e.data && (e.data = this.result.data),
              (this.result = e),
              (this.promise = ti(e)),
              this.deliver(this.promise))
          }
        }),
        (e.prototype.handleError = function (e) {
          var t, n, r
          if (
            (this.subscription.unsubscribe(),
            (this.subscription = this.observable.resubscribeAfterError(this.handleNext, this.handleError)),
            'pending' === this.promise.status)
          )
            null === (t = this.reject) || void 0 === t || t.call(this, e)
          else
            ((this.promise =
              ((n = e), (r = Promise.reject(n)).catch(function () {}), (r.status = 'rejected'), (r.reason = n), r)),
              this.deliver(this.promise))
        }),
        (e.prototype.deliver = function (e) {
          this.listeners.forEach(function (t) {
            return t(e)
          })
        }),
        (e.prototype.initiateFetch = function (e) {
          var t = this
          return (
            (this.promise = this.createPendingPromise()),
            this.promise.catch(function () {}),
            e
              .then(function () {
                setTimeout(function () {
                  var e
                  'pending' === t.promise.status &&
                    ((t.result = t.observable.getCurrentResult()),
                    null === (e = t.resolve) || void 0 === e || e.call(t, t.result))
                })
              })
              .catch(function (e) {
                var n
                return null === (n = t.reject) || void 0 === n ? void 0 : n.call(t, e)
              }),
            e
          )
        }),
        (e.prototype.subscribeToQuery = function () {
          var e = this
          this.subscription = this.observable
            .filter(function (t) {
              return !Di(t.data, {}) && !Di(t, e.result)
            })
            .subscribe(this.handleNext, this.handleError)
        }),
        (e.prototype.setResult = function () {
          var e = this.observable.getCurrentResult(!1)
          Di(e, this.result) ||
            ((this.result = e),
            (this.promise =
              !e.data || (e.partial && !this.watchQueryOptions.returnPartialData)
                ? this.createPendingPromise()
                : ti(e)))
        }),
        (e.prototype.createPendingPromise = function () {
          var e = this
          return ni(
            new Promise(function (t, n) {
              ;((e.resolve = t), (e.reject = n))
            }),
          )
        }),
        e
      )
    })(),
    pl = (function () {
      function e(e, t, n) {
        var r = this
        ;((this.key = {}),
          (this.listeners = new Set()),
          (this.references = 0),
          (this.dispose = this.dispose.bind(this)),
          (this.handleNext = this.handleNext.bind(this)),
          (this.handleError = this.handleError.bind(this)),
          (this.observable = e.watchFragment(t)),
          n.onDispose && (this.onDispose = n.onDispose))
        var i = this.getDiff(e, t),
          a = function () {
            var e
            r.references ||
              (r.autoDisposeTimeoutId = setTimeout(
                r.dispose,
                null !== (e = n.autoDisposeTimeoutMs) && void 0 !== e ? e : 3e4,
              ))
          }
        ;((this.promise = i.complete ? ti(i.result) : this.createPendingPromise()),
          this.subscribeToFragment(),
          this.promise.then(a, a))
      }
      return (
        (e.prototype.listen = function (e) {
          var t = this
          return (
            this.listeners.add(e),
            function () {
              t.listeners.delete(e)
            }
          )
        }),
        (e.prototype.retain = function () {
          var e = this
          ;(this.references++, clearTimeout(this.autoDisposeTimeoutId))
          var t = !1
          return function () {
            t ||
              ((t = !0),
              e.references--,
              setTimeout(function () {
                e.references || e.dispose()
              }))
          }
        }),
        (e.prototype.dispose = function () {
          ;(this.subscription.unsubscribe(), this.onDispose())
        }),
        (e.prototype.onDispose = function () {}),
        (e.prototype.subscribeToFragment = function () {
          this.subscription = this.observable.subscribe(this.handleNext.bind(this), this.handleError.bind(this))
        }),
        (e.prototype.handleNext = function (e) {
          var t
          switch (this.promise.status) {
            case 'pending':
              if (e.complete) return null === (t = this.resolve) || void 0 === t ? void 0 : t.call(this, e.data)
              this.deliver(this.promise)
              break
            case 'fulfilled':
              if (Di(this.promise.value, e.data)) return
              ;((this.promise = e.complete ? ti(e.data) : this.createPendingPromise()), this.deliver(this.promise))
          }
        }),
        (e.prototype.handleError = function (e) {
          var t
          null === (t = this.reject) || void 0 === t || t.call(this, e)
        }),
        (e.prototype.deliver = function (e) {
          this.listeners.forEach(function (t) {
            return t(e)
          })
        }),
        (e.prototype.createPendingPromise = function () {
          var e = this
          return ni(
            new Promise(function (t, n) {
              ;((e.resolve = t), (e.reject = n))
            }),
          )
        }),
        (e.prototype.getDiff = function (e, t) {
          var n = e.cache,
            r = t.from,
            i = t.fragment,
            a = t.fragmentName,
            o = n.diff(x(x({}, t), { query: n.getFragmentDoc(i, a), returnPartialData: !0, id: r, optimistic: !0 }))
          return x(x({}, o), { result: e.queryManager.maskFragment({ fragment: i, fragmentName: a, data: o.result }) })
        }),
        e
      )
    })(),
    hl = (function () {
      function e(e) {
        ;(void 0 === e && (e = Object.create(null)),
          (this.queryRefs = new wt(kt)),
          (this.fragmentRefs = new wt(kt)),
          (this.options = e))
      }
      return (
        (e.prototype.getQueryRef = function (e, t) {
          var n = this.queryRefs.lookupArray(e)
          return (
            n.current ||
              (n.current = new dl(t(), {
                autoDisposeTimeoutMs: this.options.autoDisposeTimeoutMs,
                onDispose: function () {
                  delete n.current
                },
              })),
            n.current
          )
        }),
        (e.prototype.getFragmentRef = function (e, t, n) {
          var r = this.fragmentRefs.lookupArray(e)
          return (
            r.current ||
              (r.current = new pl(t, n, {
                autoDisposeTimeoutMs: this.options.autoDisposeTimeoutMs,
                onDispose: function () {
                  delete r.current
                },
              })),
            r.current
          )
        }),
        (e.prototype.add = function (e, t) {
          this.queryRefs.lookupArray(e).current = t
        }),
        e
      )
    })(),
    ml = Symbol.for('apollo.suspenseCache')
  function vl(e) {
    var t
    return (
      e[ml] || (e[ml] = new hl(null === (t = e.defaultOptions.react) || void 0 === t ? void 0 : t.suspense)),
      e[ml]
    )
  }
  var yl = Symbol.for('apollo.skipToken')
  function gl(e, t) {
    !1 !== globalThis.__DEV__ && Ps('symbol' == typeof t ? {} : t, 'canonizeResults', 'useSuspenseQuery')
    var n = ki(t.client),
      r = vl(n),
      i = wl({ client: n, query: e, options: t }),
      a = i.fetchPolicy,
      o = i.variables,
      s = t.queryKey,
      l = void 0 === s ? [] : s,
      u = N([e, ln(o)], [].concat(l), !0),
      c = Wi('canonizeResults', function () {
        return r.getQueryRef(u, function () {
          return n.watchQuery(i)
        })
      }),
      f = ee.useState([c.key, c.promise]),
      d = f[0],
      p = f[1]
    d[0] !== c.key && ((d[0] = c.key), (d[1] = c.promise))
    var h = d[1]
    ;(c.didChangeOptions(i) && (d[1] = h = c.applyOptions(i)),
      ee.useEffect(
        function () {
          var e = c.retain(),
            t = c.listen(function (e) {
              p([c.key, e])
            })
          return function () {
            ;(t(), e())
          }
        },
        [c],
      ))
    var m = ee.useMemo(
        function () {
          var e = El(c.result)
          return { loading: !1, data: c.result.data, networkStatus: e ? jo.error : jo.ready, error: e }
        },
        [c.result],
      ),
      v = 'standby' === a ? m : Fs(h),
      y = ee.useCallback(
        function (e) {
          var t = c.fetchMore(e)
          return (p([c.key, c.promise]), t)
        },
        [c],
      ),
      g = ee.useCallback(
        function (e) {
          var t = c.refetch(e)
          return (p([c.key, c.promise]), t)
        },
        [c],
      ),
      b = c.observable.subscribeToMore
    return ee.useMemo(
      function () {
        return {
          client: n,
          data: v.data,
          error: El(v),
          networkStatus: v.networkStatus,
          fetchMore: y,
          refetch: g,
          subscribeToMore: b,
        }
      },
      [n, y, g, v, b],
    )
  }
  function bl(e) {
    var t = e.query,
      n = e.fetchPolicy,
      r = e.returnPartialData
    ;(Os(t, gs.Query),
      (function (e) {
        void 0 === e && (e = 'cache-first')
        W(['cache-first', 'network-only', 'no-cache', 'cache-and-network'].includes(e), 90, e)
      })(n),
      (function (e, t) {
        'no-cache' === e && t && !1 !== globalThis.__DEV__ && W.warn(91)
      })(n, r))
  }
  function El(e) {
    return vr(e.errors) ? new zi({ graphQLErrors: e.errors }) : e.error
  }
  function wl(e) {
    var t = e.client,
      n = e.query,
      r = e.options
    return Cs(
      function () {
        var e
        if (r === yl) return { query: n, fetchPolicy: 'standby' }
        var i =
            r.fetchPolicy ||
            (null === (e = t.defaultOptions.watchQuery) || void 0 === e ? void 0 : e.fetchPolicy) ||
            'cache-first',
          a = x(x({}, r), { fetchPolicy: i, query: n, notifyOnNetworkStatusChange: !1, nextFetchPolicy: void 0 })
        return (!1 !== globalThis.__DEV__ && bl(a), r.skip && (a.fetchPolicy = 'standby'), a)
      },
      [t, r, n],
    )
  }
  function _l(e, t) {
    !1 !== globalThis.__DEV__ && Ps('symbol' == typeof t ? {} : t, 'canonizeResults', 'useBackgroundQuery')
    var n = ki(t.client),
      r = vl(n),
      i = wl({ client: n, query: e, options: t }),
      a = i.fetchPolicy,
      o = i.variables,
      s = t.queryKey,
      l = void 0 === s ? [] : s,
      u = ee.useRef('standby' !== a)
    u.current || (u.current = 'standby' !== a)
    var c = N([e, ln(o)], [].concat(l), !0),
      f = Wi('canonizeResults', function () {
        return r.getQueryRef(c, function () {
          return n.watchQuery(i)
        })
      }),
      d = ee.useState(ol(f)),
      p = d[0],
      h = d[1]
    ;(ul(p) !== f && h(ol(f)), f.didChangeOptions(i)) && cl(p, f.applyOptions(i))
    ee.useEffect(function () {
      var e = setTimeout(function () {
        f.disposed && r.add(c, f)
      })
      return function () {
        return clearTimeout(e)
      }
    })
    var m = ee.useCallback(
        function (e) {
          var t = f.fetchMore(e)
          return (h(ol(f)), t)
        },
        [f],
      ),
      v = ee.useCallback(
        function (e) {
          var t = f.refetch(e)
          return (h(ol(f)), t)
        },
        [f],
      )
    return (
      ee.useEffect(
        function () {
          return f.softRetain()
        },
        [f],
      ),
      [u.current ? p : void 0, { fetchMore: m, refetch: v, subscribeToMore: f.observable.subscribeToMore }]
    )
  }
  var kl = []
  function Sl(e) {
    var t = ki(e.client),
      n = e.from,
      r = e.variables,
      i = t.cache,
      a = ee.useMemo(
        function () {
          return 'string' == typeof n ? n : null === n ? null : i.identify(n)
        },
        [i, n],
      ),
      o = null === a ? null : vl(t).getFragmentRef([a, e.fragment, ln(r)], t, x(x({}, e), { variables: r, from: a })),
      s = ee.useState(null === o ? kl : [o.key, o.promise]),
      l = s[0],
      u = s[1]
    return (
      ee.useEffect(
        function () {
          if (null !== o) {
            var e = o.retain(),
              t = o.listen(function (e) {
                u([o.key, e])
              })
            return function () {
              ;(e(), t())
            }
          }
        },
        [o],
      ),
      null === o ? { data: null } : (l[0] !== o.key && ((l[0] = o.key), (l[1] = o.promise)), { data: Fs(l[1]) })
    )
  }
  function Tl(e) {
    sl(e)
    var t = ee.useState(e),
      n = t[0],
      r = t[1],
      i = ee.useState(e),
      a = i[0],
      o = i[1],
      s = ul(e)
    return (
      n !== e ? (r(e), o(e)) : cl(e, ll(a)),
      {
        refetch: ee.useCallback(
          function (e) {
            var t = s.refetch(e)
            return (o(ol(s)), t)
          },
          [s],
        ),
        fetchMore: ee.useCallback(
          function (e) {
            var t = s.fetchMore(e)
            return (o(ol(s)), t)
          },
          [s],
        ),
        subscribeToMore: s.observable.subscribeToMore,
      }
    )
  }
  function xl(e) {
    sl(e)
    var t = ee.useMemo(
        function () {
          return ul(e)
        },
        [e],
      ),
      n = ee.useCallback(
        function () {
          return ll(e)
        },
        [e],
      )
    ;(t.disposed && (t.reinitialize(), cl(e, t.promise)),
      ee.useEffect(
        function () {
          return t.retain()
        },
        [t],
      ))
    var r = Ti(
        ee.useCallback(
          function (n) {
            return t.listen(function (t) {
              ;(cl(e, t), n())
            })
          },
          [t, e],
        ),
        n,
        n,
      ),
      i = Fs(r)
    return ee.useMemo(
      function () {
        return { data: i.data, networkStatus: i.networkStatus, error: El(i) }
      },
      [i],
    )
  }
  var Ol,
    Cl = function (e) {
      return Object.assign(
        function (t, n) {
          ;(void 0 === n && (n = Object.create(null)), Ki(n, 'canonizeResults', 'preloadQuery'))
          var r = Wi('canonizeResults', function () {
            var r, i
            return new dl(e.watchQuery(x(x({}, n), { query: t })), {
              autoDisposeTimeoutMs:
                null === (i = null === (r = e.defaultOptions.react) || void 0 === r ? void 0 : r.suspense) ||
                void 0 === i
                  ? void 0
                  : i.autoDisposeTimeoutMs,
            })
          })
          return ol(r)
        },
        {
          toPromise: function (e) {
            return e.toPromise()
          },
        },
      )
    },
    Rl = {},
    Nl = {}
  function Dl() {
    return (
      Ol ||
        ((Ol = 1),
        (function (e) {
          var t
          ;((e.__esModule = !0),
            (function (e) {
              ;((e.REQUEST = 'REQUEST'), (e.ERROR = 'ERROR'), (e.SUCCESS = 'SUCCESS'), (e.CANCEL = 'CANCEL'))
            })(t || (t = {})),
            (e.default = t))
        })(Nl)),
      Nl
    )
  }
  var Il,
    Pl = {},
    Fl = {},
    Al = Object.freeze({
      __proto__: null,
      ApolloCache: Aa,
      ApolloClient: is,
      ApolloConsumer: function (e) {
        var t = wi()
        return ee.createElement(t.Consumer, null, function (t) {
          return (W(t && t.client, 68), e.children(t.client))
        })
      },
      ApolloError: zi,
      ApolloLink: Xi,
      ApolloProvider: _i,
      get Cache() {
        return Fa
      },
      DocumentTransform: pr,
      get DocumentType() {
        return gs
      },
      HttpLink: Ea,
      InMemoryCache: Vo,
      MissingFieldError: Ma,
      get NetworkStatus() {
        return jo
      },
      Observable: Xr,
      ObservableQuery: Bo,
      checkFetcher: ma,
      concat: na,
      createHttpLink: ba,
      createQueryPreloader: function (e) {
        return Ms('createQueryPreloader', Cl, e)(e)
      },
      createSignalIfSupported: function () {
        if ('undefined' == typeof AbortController) return { controller: !1, signal: !1 }
        var e = new AbortController()
        return { controller: e, signal: e.signal }
      },
      defaultDataIdFromObject: za,
      defaultPrinter: pa,
      disableExperimentalFragmentVariables: vs,
      disableFragmentWarnings: hs,
      empty: Zi,
      enableExperimentalFragmentVariables: ms,
      execute: ra,
      fallbackHttpConfig: da,
      from: ea,
      fromError: ji,
      fromPromise: function (e) {
        return new Xr(function (t) {
          e.then(function (e) {
            ;(t.next(e), t.complete())
          }).catch(t.error.bind(t))
        })
      },
      getApolloContext: wi,
      get gql() {
        return ds
      },
      isApolloError: qi,
      isNetworkRequestSettled: function (e) {
        return 7 === e || 8 === e
      },
      isReference: dn,
      makeReference: fn,
      makeVar: po,
      mergeOptions: bi,
      operationName: Ts,
      parseAndCheckHttpResponse: ca,
      parser: xs,
      resetApolloContext: function () {
        return (!1 !== globalThis.__DEV__ && !1 !== globalThis.__DEV__ && W.warn(70), wi())
      },
      resetCaches: ps,
      rewriteURIForGET: ya,
      selectHttpOptionsAndBody: function (e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r]
        return (n.unshift(t), ha.apply(void 0, N([e, pa], n, !1)))
      },
      selectHttpOptionsAndBodyInternal: ha,
      selectURI: va,
      serializeFetchParameter: fa,
      setLogVerbosity: function (e) {
        var t = M[L]
        return ((L = Math.max(0, M.indexOf(e))), t)
      },
      skipToken: yl,
      split: ta,
      throwServerError: Vi,
      toPromise: function (e) {
        var t = !1
        return new Promise(function (n, r) {
          e.subscribe({
            next: function (e) {
              t ? !1 !== globalThis.__DEV__ && W.warn(57) : ((t = !0), n(e))
            },
            error: r,
          })
        })
      },
      useApolloClient: ki,
      useBackgroundQuery: function (e, t) {
        return (
          void 0 === t && (t = Object.create(null)),
          Ms('useBackgroundQuery', _l, ki('object' == typeof t ? t.client : void 0))(e, t)
        )
      },
      useFragment: function (e) {
        return Ms('useFragment', nl, ki(e.client))(e)
      },
      useLazyQuery: function (e, t) {
        var n
        if (!1 !== globalThis.__DEV__) {
          var r = t || {}
          ;(Ps(r, 'canonizeResults', 'useLazyQuery'),
            Ps(r, 'variables', 'useLazyQuery', 'Pass all `variables` to the returned `execute` function instead.'),
            Ps(r, 'context', 'useLazyQuery', 'Pass `context` to the returned `execute` function instead.'),
            Ps(
              r,
              'onCompleted',
              'useLazyQuery',
              'If your `onCompleted` callback sets local state, switch to use derived state using `data` returned from the hook instead. Use `useEffect` to perform side-effects as a result of updates to `data`.',
            ),
            Ps(
              r,
              'onError',
              'useLazyQuery',
              'If your `onError` callback sets local state, switch to use derived state using `data`, `error` or `errors` returned from the hook instead. Use `useEffect` if you need to perform side-effects as a result of updates to `data`, `error` or `errors`.',
            ),
            Ps(r, 'defaultOptions', 'useLazyQuery', 'Pass the options directly to the hook instead.'),
            Ps(r, 'initialFetchPolicy', 'useLazyQuery', 'Use the `fetchPolicy` option instead.'),
            Ps(r, 'partialRefetch', 'useLazyQuery'))
        }
        var i = ee.useRef(void 0),
          a = ee.useRef(void 0),
          o = ee.useRef(void 0),
          s = bi(t, i.current || {}),
          l = null !== (n = null == s ? void 0 : s.query) && void 0 !== n ? n : e
        ;((a.current = t), (o.current = l))
        var u = x(x({}, s), { skip: !i.current }),
          c = Qs(l, u),
          f = c.obsQueryFields,
          d = c.result,
          p = c.client,
          h = c.resultData,
          m = c.observable,
          v = c.onQueryExecuted,
          y = m.options.initialFetchPolicy || Ks(u.defaultOptions, p.defaultOptions),
          g = ee.useReducer(function (e) {
            return e + 1
          }, 0)[1],
          b = ee.useMemo(
            function () {
              for (
                var e = {},
                  t = function (t) {
                    var n = f[t]
                    e[t] = function () {
                      return (
                        !1 !== globalThis.__DEV__ && 'reobserve' === t && !1 !== globalThis.__DEV__ && W.warn(80),
                        i.current || ((i.current = Object.create(null)), g()),
                        n.apply(this, arguments)
                      )
                    }
                  },
                  n = 0,
                  r = Xs;
                n < r.length;
                n++
              ) {
                t(r[n])
              }
              return e
            },
            [g, f],
          ),
          E = !!i.current,
          w = ee.useMemo(
            function () {
              return x(x(x({}, d), b), { called: E })
            },
            [d, b, E],
          ),
          _ = Is(),
          k = ee.useRef(new Set()),
          S = ee.useCallback(
            function (e) {
              if (!1 !== globalThis.__DEV__) {
                _() && !1 !== globalThis.__DEV__ && W.warn(81)
                for (var t = 0, n = Zs; t < n.length; t++) {
                  var r = n[t]
                  k.current.has(r) || (Ki(e || {}, r, 'useLazyQuery.execute'), k.current.add(r))
                }
                for (var s = 0, u = el; s < u.length; s++) {
                  var c = u[s]
                  k.current.has(c) ||
                    (Ki(
                      e || {},
                      c,
                      'useLazyQuery.execute',
                      'Please pass the option to the `useLazyQuery` hook instead.',
                    ),
                    k.current.add(c))
                }
              }
              i.current = e ? x(x({}, e), { fetchPolicy: e.fetchPolicy || y }) : { fetchPolicy: y }
              var f = bi(a.current, x({ query: o.current }, i.current)),
                d = (function (e, t, n, r, i, a) {
                  var o = i.query || r,
                    s = $s(n, o, i, !1)(t),
                    l = t.reobserveAsConcast(Us(t, n, i, s))
                  return (
                    a(s),
                    new Promise(function (r) {
                      var i
                      l.subscribe({
                        next: function (e) {
                          i = e
                        },
                        error: function () {
                          r(Gs(t.getCurrentResult(), e.previousData, t, n))
                        },
                        complete: function () {
                          r(Gs(t.maskResult(i), e.previousData, t, n))
                        },
                      })
                    })
                  )
                })(h, m, p, l, x(x({}, f), { skip: !1 }), v).then(function (e) {
                  return Object.assign(e, b)
                })
              return (d.catch(function () {}), d)
            },
            [_, p, l, b, y, m, h, v],
          ),
          T = ee.useRef(S)
        Ns(function () {
          T.current = S
        })
        var O = ee.useCallback(function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
          return T.current.apply(T, e)
        }, [])
        return [O, w]
      },
      useLoadableQuery: function (e, t) {
        ;(void 0 === t && (t = Object.create(null)),
          !1 !== globalThis.__DEV__ && Ps(t, 'canonizeResults', 'useLoadableQuery'))
        var n = ki(t.client),
          r = vl(n),
          i = wl({ client: n, query: e, options: t }),
          a = t.queryKey,
          o = void 0 === a ? [] : a,
          s = ee.useState(null),
          l = s[0],
          u = s[1]
        sl(l)
        var c = l && ul(l)
        l && (null == c ? void 0 : c.didChangeOptions(i)) && cl(l, c.applyOptions(i))
        var f = Is(),
          d = ee.useCallback(
            function (e) {
              if (!c) throw new Error('The query has not been loaded. Please load the query.')
              var t = c.fetchMore(e)
              return (u(ol(c)), t)
            },
            [c],
          ),
          p = ee.useCallback(
            function (e) {
              if (!c) throw new Error('The query has not been loaded. Please load the query.')
              var t = c.refetch(e)
              return (u(ol(c)), t)
            },
            [c],
          ),
          h = ee.useCallback(
            function () {
              for (var t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a]
              W(!f(), 82)
              var s = t[0],
                l = N([e, ln(s)], [].concat(o), !0),
                c = Wi('canonizeResults', function () {
                  return r.getQueryRef(l, function () {
                    return n.watchQuery(x(x({}, i), { variables: s }))
                  })
                })
              u(ol(c))
            },
            [e, o, r, i, f, n],
          ),
          m = ee.useCallback(
            function (e) {
              return (W(c, 83), c.observable.subscribeToMore(e))
            },
            [c],
          )
        return [
          h,
          l,
          {
            fetchMore: d,
            refetch: p,
            reset: ee.useCallback(function () {
              u(null)
            }, []),
            subscribeToMore: m,
          },
        ]
      },
      useMutation: tl,
      useQuery: js,
      useQueryRefHandlers: function (e) {
        var t = ul(e)
        return Ms('useQueryRefHandlers', Tl, ki(t ? t.observable : void 0))(e)
      },
      useReactiveVar: function (e) {
        return Ti(
          ee.useCallback(
            function (t) {
              return e.onNextChange(function n() {
                ;(t(), e.onNextChange(n))
              })
            },
            [e],
          ),
          e,
          e,
        )
      },
      useReadQuery: function (e) {
        var t = ul(e)
        return Ms('useReadQuery', xl, ki(t ? t.observable : void 0))(e)
      },
      useSubscription: function (e, t) {
        void 0 === t && (t = Object.create(null))
        var n = ee.useRef(!1),
          r = ki(t.client)
        ;(Os(e, gs.Subscription),
          n.current ||
            ((n.current = !0),
            t.onSubscriptionData && !1 !== globalThis.__DEV__ && W.warn(t.onData ? 85 : 86),
            t.onSubscriptionComplete && !1 !== globalThis.__DEV__ && W.warn(t.onComplete ? 87 : 88)))
        var i = t.skip,
          a = t.fetchPolicy,
          o = t.errorPolicy,
          s = t.shouldResubscribe,
          l = t.context,
          u = t.extensions,
          c = t.ignoreResults,
          f = Cs(
            function () {
              return t.variables
            },
            [t.variables],
          ),
          d = function () {
            return (function (e, t, n, r, i, a, o) {
              var s = { query: t, variables: n, fetchPolicy: r, errorPolicy: i, context: a, extensions: o },
                l = x(x({}, s), {
                  client: e,
                  result: { loading: !0, data: void 0, error: void 0, variables: n },
                  setResult: function (e) {
                    l.result = e
                  },
                }),
                u = null
              return Object.assign(
                new Xr(function (t) {
                  u || (u = e.subscribe(s))
                  var n = u.subscribe(t)
                  return function () {
                    return n.unsubscribe()
                  }
                }),
                { __: l },
              )
            })(r, e, f, a, o, l, u)
          },
          p = ee.useState(t.skip ? null : d),
          h = p[0],
          m = p[1],
          v = ee.useRef(d)
        ;(Ns(function () {
          v.current = d
        }),
          i
            ? h && m((h = null))
            : (h &&
                ((r === h.__.client &&
                  e === h.__.query &&
                  a === h.__.fetchPolicy &&
                  o === h.__.errorPolicy &&
                  Di(f, h.__.variables)) ||
                  !1 === ('function' == typeof s ? !!s(t) : s))) ||
              m((h = d())))
        var y = ee.useRef(t)
        ee.useEffect(function () {
          y.current = t
        })
        var g = !i && !c,
          b = ee.useMemo(
            function () {
              return { loading: g, error: void 0, data: void 0, variables: f }
            },
            [g, f],
          ),
          E = ee.useRef(c)
        Ns(function () {
          E.current = c
        })
        var w = Ti(
            ee.useCallback(
              function (e) {
                if (!h) return function () {}
                var t = !1,
                  n = h.__.variables,
                  r = h.__.client,
                  i = h.subscribe({
                    next: function (i) {
                      var a, o
                      if (!t) {
                        var s = { loading: !1, data: i.data, error: Hs(i), variables: n }
                        ;(h.__.setResult(s),
                          E.current || e(),
                          s.error
                            ? null === (o = (a = y.current).onError) || void 0 === o || o.call(a, s.error)
                            : y.current.onData
                              ? y.current.onData({ client: r, data: s })
                              : y.current.onSubscriptionData &&
                                y.current.onSubscriptionData({ client: r, subscriptionData: s }))
                      }
                    },
                    error: function (r) {
                      var i, a
                      ;((r = r instanceof zi ? r : new zi({ protocolErrors: [r] })),
                        t ||
                          (h.__.setResult({ loading: !1, data: void 0, error: r, variables: n }),
                          E.current || e(),
                          null === (a = (i = y.current).onError) || void 0 === a || a.call(i, r)))
                    },
                    complete: function () {
                      t ||
                        (y.current.onComplete
                          ? y.current.onComplete()
                          : y.current.onSubscriptionComplete && y.current.onSubscriptionComplete())
                    },
                  })
                return function () {
                  ;((t = !0),
                    setTimeout(function () {
                      i.unsubscribe()
                    }))
                }
              },
              [h],
            ),
            function () {
              return !h || i || c ? b : h.__.result
            },
            function () {
              return b
            },
          ),
          _ = ee.useCallback(
            function () {
              ;(W(!y.current.skip, 89), m(v.current()))
            },
            [y, v],
          )
        return ee.useMemo(
          function () {
            return x(x({}, w), { restart: _ })
          },
          [w, _],
        )
      },
      useSuspenseFragment: function (e) {
        return Ms('useSuspenseFragment', Sl, ki('object' == typeof e ? e.client : void 0))(e)
      },
      useSuspenseQuery: function (e, t) {
        return (
          void 0 === t && (t = Object.create(null)),
          Ms('useSuspenseQuery', gl, ki('object' == typeof t ? t.client : void 0))(e, t)
        )
      },
    }),
    Ml = n(Al)
  var Ll,
    ql = {}
  var zl,
    jl = {},
    Vl = {}
  function Ql() {
    return (
      zl ||
        ((zl = 1),
        (function (e) {
          e.__esModule = !0
          var t = l()
          e.default = function (e, n, r) {
            var i = t.useReducer(n, r),
              a = i[0],
              o = i[1]
            return (
              t.useEffect(
                function () {
                  var t
                  function n(e) {
                    t = requestAnimationFrame(function () {
                      o(e)
                    })
                  }
                  return (
                    e.addListener(n),
                    function () {
                      ;(e.removeListener(n), cancelAnimationFrame(t))
                    }
                  )
                },
                [e],
              ),
              a
            )
          }
        })(Vl)),
      Vl
    )
  }
  var $l,
    Ul,
    Bl,
    Wl,
    Kl,
    Hl = {},
    Gl = {}
  function Yl() {
    return (
      Ul ||
        ((Ul = 1),
        (function (e) {
          e.__esModule = !0
          var t = l(),
            n =
              ($l ||
                (($l = 1),
                (function (e) {
                  e.__esModule = !0
                  var t = l()
                  e.default = 'undefined' != typeof window ? t.useLayoutEffect : t.useEffect
                })(Gl)),
              Gl)
          e.default = function (e) {
            var r = t.useRef(function () {
              throw new Error('Function is called before it was assigned.')
            })
            return (
              n.default(function () {
                r.current = e
              }),
              t.useCallback(function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
                return r.current.apply(r, e)
              }, [])
            )
          }
        })(Hl)),
      Hl
    )
  }
  function Jl() {
    return (
      Bl ||
        ((Bl = 1),
        (function (e) {
          var t =
            (jl && jl.__assign) ||
            function () {
              return (
                (t =
                  Object.assign ||
                  function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                      for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    return e
                  }),
                t.apply(this, arguments)
              )
            }
          e.__esModule = !0
          var n = l(),
            r = Dl(),
            i = Ql(),
            a = Yl()
          function o(e, t) {
            return e.query.definitions.some(function (e) {
              return 'OperationDefinition' === e.kind && e.operation === t
            })
          }
          function s(e) {
            return function (t, n) {
              if ((void 0 === t && (t = 0), !o(n.payload.operation, e))) return t
              switch (n.type) {
                case r.default.REQUEST:
                  return t + 1
                case r.default.ERROR:
                case r.default.SUCCESS:
                case r.default.CANCEL:
                  return Math.max(t - 1, 0)
              }
              return t
            }
          }
          function u(e) {
            return function (t, n) {
              if (!o(n.payload.operation, e)) return t
              switch (n.type) {
                case r.default.REQUEST:
                  return
                case r.default.ERROR:
                  var i = n.payload
                  return { networkError: i.networkError, operation: (l = i.operation) }
                case r.default.SUCCESS:
                  var a = n.payload,
                    s = a.result,
                    l = a.operation
                  return s && s.errors ? { graphQLErrors: s.errors, response: s, operation: l } : t
              }
              return t
            }
          }
          var c = s('query'),
            f = s('mutation'),
            d = u('query'),
            p = u('mutation')
          var h = { numPendingQueries: 0, numPendingMutations: 0, queryError: void 0, mutationError: void 0 }
          function m(e) {
            return !1 !== e.getContext().useApolloNetworkStatus
          }
          e.default = function (e, r) {
            r || (r = {})
            var s = r.shouldHandleOperation || m,
              l = a.default(s),
              u = n.useMemo(
                function () {
                  return function (e, n) {
                    return l(n.payload.operation)
                      ? (function (e, n) {
                          if (o(n.payload.operation, 'subscription')) return e
                          var r = t({}, e)
                          return (
                            (r.numPendingQueries = c(r.numPendingQueries, n)),
                            (r.numPendingMutations = f(r.numPendingMutations, n)),
                            (r.queryError = d(r.queryError, n)),
                            (r.mutationError = p(r.mutationError, n)),
                            Object.keys(e).some(function (t) {
                              return r[t] !== e[t]
                            })
                              ? r
                              : e
                          )
                        })(e, n)
                      : e
                  }
                },
                [l],
              )
            return i.default(e, u, h)
          }
        })(jl)),
      jl
    )
  }
  function Xl() {
    return (
      Wl ||
        ((Wl = 1),
        (function (e) {
          e.__esModule = !0
          var t =
              (Il ||
                ((Il = 1),
                (function (e) {
                  var t =
                    (Fl && Fl.__extends) ||
                    (function () {
                      var e = function (t, n) {
                        return (
                          (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                              function (e, t) {
                                e.__proto__ = t
                              }) ||
                            function (e, t) {
                              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                            }),
                          e(t, n)
                        )
                      }
                      return function (t, n) {
                        function r() {
                          this.constructor = t
                        }
                        ;(e(t, n),
                          (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r())))
                      }
                    })()
                  e.__esModule = !0
                  var n = Ml,
                    r = Dl(),
                    i = (function (e) {
                      function i(t) {
                        var n = e.call(this) || this
                        return ((n.dispatcher = t), n)
                      }
                      return (
                        t(i, e),
                        (i.prototype.request = function (e, t) {
                          var i = this
                          this.dispatcher.dispatch({ type: r.default.REQUEST, payload: { operation: e } })
                          var a = t(e)
                          return new n.Observable(function (t) {
                            var n = !0,
                              o = a.subscribe({
                                next: function (a) {
                                  ;((n = !1),
                                    i.dispatcher.dispatch({
                                      type: r.default.SUCCESS,
                                      payload: { operation: e, result: a },
                                    }),
                                    t.next(a))
                                },
                                error: function (a) {
                                  ;((n = !1),
                                    i.dispatcher.dispatch({
                                      type: r.default.ERROR,
                                      payload: { operation: e, networkError: a },
                                    }),
                                    t.error(a))
                                },
                                complete: t.complete.bind(t),
                              })
                            return function () {
                              ;(n && i.dispatcher.dispatch({ type: r.default.CANCEL, payload: { operation: e } }),
                                o && o.unsubscribe())
                            }
                          })
                        }),
                        i
                      )
                    })(n.ApolloLink)
                  e.default = i
                })(Fl)),
              Fl),
            n =
              (Ll ||
                ((Ll = 1),
                (function (e) {
                  e.__esModule = !0
                  var t = (function () {
                    function e() {
                      this.listeners = []
                    }
                    return (
                      (e.prototype.addListener = function (e) {
                        this.listeners.push(e)
                      }),
                      (e.prototype.removeListener = function (e) {
                        this.listeners = this.listeners.filter(function (t) {
                          return t !== e
                        })
                      }),
                      (e.prototype.dispatch = function (e) {
                        this.listeners.forEach(function (t) {
                          t(e)
                        })
                      }),
                      e
                    )
                  })()
                  e.default = t
                })(ql)),
              ql),
            r = Jl(),
            i = Ql()
          e.default = function () {
            var e = new n.default()
            return {
              link: new t.default(e),
              useApolloNetworkStatus: function (t) {
                return r.default(e, t)
              },
              useApolloNetworkStatusReducer: function (t, n) {
                return i.default(e, t, n)
              },
            }
          }
        })(Pl)),
      Pl
    )
  }
  var Zl = (function () {
    if (Kl) return Rl
    ;((Kl = 1), (Rl.__esModule = !0))
    var e = Dl()
    Rl.ActionTypes = e.default
    var t = Xl()
    return ((Rl.createNetworkStatusNotifier = t.default), Rl)
  })()
  const eu = (e, t) => {
      switch (t.type) {
        case Zl.ActionTypes.REQUEST:
          return e + 1
        case Zl.ActionTypes.ERROR:
        case Zl.ActionTypes.SUCCESS:
        case Zl.ActionTypes.CANCEL:
          return Math.max(e - 1, 0)
        default:
          return e
      }
    },
    tu = (e, t) => {
      switch (t.type) {
        case Zl.ActionTypes.REQUEST:
          return []
        case Zl.ActionTypes.ERROR: {
          const { networkError: e } = t.payload
          return [e]
        }
        case Zl.ActionTypes.SUCCESS: {
          const { result: n } = t.payload
          return !0 === (null != n && null != n.errors) ? [...n.errors] : e
        }
        default:
          return e
      }
    }
  var nu = '3.5.1',
    ru = 'https://github.com/electerious/Ackee',
    iu = (e, t) => ({
      get: () => {
        const n = localStorage.getItem(e)
        return null == n ? t : JSON.parse(n)
      },
      set: (t) => {
        const n = JSON.stringify(t)
        return (localStorage.setItem(e, n), t)
      },
      reset: () => (localStorage.removeItem(e), t),
    })
  const au = Symbol(),
    ou = Symbol(),
    { get: su, set: lu, reset: uu } = iu(`ackee_token_${nu}`),
    cu = (e, t) => {
      switch (t.type) {
        case au:
          return lu(t.token)
        case ou:
          return uu()
        default:
          return e
      }
    }
  var fu,
    du = (function () {
      function e(e) {
        var t = e.batchDebounce,
          n = e.batchInterval,
          r = e.batchMax,
          i = e.batchHandler,
          a = e.batchKey
        ;((this.batchesByKey = new Map()),
          (this.scheduledBatchTimerByKey = new Map()),
          (this.batchDebounce = t),
          (this.batchInterval = n),
          (this.batchMax = r || 0),
          (this.batchHandler = i),
          (this.batchKey =
            a ||
            function () {
              return ''
            }))
      }
      return (
        (e.prototype.enqueueRequest = function (e) {
          var t = this,
            n = x(x({}, e), { next: [], error: [], complete: [], subscribers: new Set() }),
            r = this.batchKey(e.operation)
          return (
            n.observable ||
              (n.observable = new Xr(function (e) {
                var i = t.batchesByKey.get(r)
                i || t.batchesByKey.set(r, (i = new Set()))
                var a = 0 === i.size,
                  o = 0 === n.subscribers.size
                return (
                  n.subscribers.add(e),
                  o && i.add(n),
                  e.next && n.next.push(e.next.bind(e)),
                  e.error && n.error.push(e.error.bind(e)),
                  e.complete && n.complete.push(e.complete.bind(e)),
                  (a || t.batchDebounce) && t.scheduleQueueConsumption(r),
                  i.size === t.batchMax && t.consumeQueue(r),
                  function () {
                    var a
                    n.subscribers.delete(e) &&
                      n.subscribers.size < 1 &&
                      i.delete(n) &&
                      i.size < 1 &&
                      (t.consumeQueue(r), null === (a = i.subscription) || void 0 === a || a.unsubscribe())
                  }
                )
              })),
            n.observable
          )
        }),
        (e.prototype.consumeQueue = function (e) {
          void 0 === e && (e = '')
          var t = this.batchesByKey.get(e)
          if ((this.batchesByKey.delete(e), t && t.size)) {
            var n = [],
              r = [],
              i = [],
              a = [],
              o = [],
              s = []
            t.forEach(function (e) {
              ;(n.push(e.operation),
                r.push(e.forward),
                i.push(e.observable),
                a.push(e.next),
                o.push(e.error),
                s.push(e.complete))
            })
            var l = this.batchHandler(n, r) || Xr.of(),
              u = function (e) {
                o.forEach(function (t) {
                  t &&
                    t.forEach(function (t) {
                      return t(e)
                    })
                })
              }
            return (
              (t.subscription = l.subscribe({
                next: function (e) {
                  if ((Array.isArray(e) || (e = [e]), a.length !== e.length)) {
                    var t = new Error(
                      'server returned results with length '.concat(e.length, ', expected length of ').concat(a.length),
                    )
                    return ((t.result = e), u(t))
                  }
                  e.forEach(function (e, t) {
                    a[t] &&
                      a[t].forEach(function (t) {
                        return t(e)
                      })
                  })
                },
                error: u,
                complete: function () {
                  s.forEach(function (e) {
                    e &&
                      e.forEach(function (e) {
                        return e()
                      })
                  })
                },
              })),
              i
            )
          }
        }),
        (e.prototype.scheduleQueueConsumption = function (e) {
          var t = this
          ;(clearTimeout(this.scheduledBatchTimerByKey.get(e)),
            this.scheduledBatchTimerByKey.set(
              e,
              setTimeout(function () {
                ;(t.consumeQueue(e), t.scheduledBatchTimerByKey.delete(e))
              }, this.batchInterval),
            ))
        }),
        e
      )
    })(),
    pu = (function (e) {
      function t(t) {
        var n = e.call(this) || this,
          r = t || {},
          i = r.batchDebounce,
          a = r.batchInterval,
          o = void 0 === a ? 10 : a,
          s = r.batchMax,
          l = void 0 === s ? 0 : s,
          u = r.batchHandler,
          c =
            void 0 === u
              ? function () {
                  return null
                }
              : u,
          f = r.batchKey,
          d =
            void 0 === f
              ? function () {
                  return ''
                }
              : f
        return (
          (n.batcher = new du({ batchDebounce: i, batchInterval: o, batchMax: l, batchHandler: c, batchKey: d })),
          t.batchHandler.length <= 1 &&
            (n.request = function (e) {
              return n.batcher.enqueueRequest({ operation: e })
            }),
          n
        )
      }
      return (
        T(t, e),
        (t.prototype.request = function (e, t) {
          return this.batcher.enqueueRequest({ operation: e, forward: t })
        }),
        t
      )
    })(Xi),
    hu = j(function () {
      return fetch
    }),
    mu = (function (e) {
      function t(t) {
        var n = e.call(this) || this,
          r = t || {},
          i = r.uri,
          a = void 0 === i ? '/graphql' : i,
          o = r.fetch,
          s = r.print,
          l = void 0 === s ? pa : s,
          u = r.includeExtensions,
          c = r.preserveHeaderCase,
          f = r.batchInterval,
          d = r.batchDebounce,
          p = r.batchMax,
          h = r.batchKey,
          m = r.includeUnusedVariables,
          v = void 0 !== m && m,
          y = O(r, [
            'uri',
            'fetch',
            'print',
            'includeExtensions',
            'preserveHeaderCase',
            'batchInterval',
            'batchDebounce',
            'batchMax',
            'batchKey',
            'includeUnusedVariables',
          ])
        !1 !== globalThis.__DEV__ && ma(o || hu)
        var g = {
          http: { includeExtensions: u, preserveHeaderCase: c },
          options: y.fetchOptions,
          credentials: y.credentials,
          headers: y.headers,
        }
        ;((n.batchDebounce = d), (n.batchInterval = f || 10), (n.batchMax = p || 10))
        return (
          (h =
            h ||
            function (e) {
              var t = e.getContext(),
                n = { http: t.http, options: t.fetchOptions, credentials: t.credentials, headers: t.headers }
              return va(e, a) + JSON.stringify(n)
            }),
          (n.batcher = new pu({
            batchDebounce: n.batchDebounce,
            batchInterval: n.batchInterval,
            batchMax: n.batchMax,
            batchKey: h,
            batchHandler: function (e) {
              var t = va(e[0], a),
                n = e[0].getContext(),
                r = {}
              if (n.clientAwareness) {
                var i = n.clientAwareness,
                  s = i.name,
                  u = i.version
                ;(s && (r['apollographql-client-name'] = s), u && (r['apollographql-client-version'] = u))
              }
              var c = {
                http: n.http,
                options: n.fetchOptions,
                credentials: n.credentials,
                headers: x(x({}, r), n.headers),
              }
              !1 !== globalThis.__DEV__ &&
                e.some(function (e) {
                  return ht(['client'], e.query)
                }) &&
                !1 !== globalThis.__DEV__ &&
                W.warn(46)
              var f = e.map(function (e) {
                var t = e.query
                return ht(['client'], t) ? Sr(t) : t
              })
              if (
                f.some(function (e) {
                  return !e
                })
              )
                return ji(
                  new Error(
                    'BatchHttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or enable the `transformOptions.removeClientFields` option.',
                  ),
                )
              var d,
                p = e.map(function (e, t) {
                  var n = ha(x(x({}, e), { query: f[t] }), l, da, g, c)
                  return (n.body.variables && !v && (n.body.variables = Qi(n.body.variables, e.query)), n)
                }),
                h = p.map(function (e) {
                  return e.body
                }),
                m = p[0].options
              if ('GET' === m.method) return ji(new Error('apollo-link-batch-http does not support GET requests'))
              try {
                m.body = fa(h, 'Payload')
              } catch (e) {
                return ji(e)
              }
              return (
                m.signal ||
                  'undefined' == typeof AbortController ||
                  ((d = new AbortController()), (m.signal = d.signal)),
                new Xr(function (n) {
                  return (
                    (
                      o ||
                      j(function () {
                        return fetch
                      }) ||
                      hu
                    )(t, m)
                      .then(function (t) {
                        return (
                          e.forEach(function (e) {
                            return e.setContext({ response: t })
                          }),
                          t
                        )
                      })
                      .then(ca(e))
                      .then(function (e) {
                        return ((d = void 0), n.next(e), n.complete(), e)
                      })
                      .catch(function (e) {
                        ;((d = void 0), e.result && e.result.errors && e.result.data && n.next(e.result), n.error(e))
                      }),
                    function () {
                      d && d.abort()
                    }
                  )
                })
              )
            },
          })),
          n
        )
      }
      return (
        T(t, e),
        (t.prototype.request = function (e) {
          return this.batcher.request(e)
        }),
        t
      )
    })(Xi),
    vu = new Intl.DateTimeFormat().resolvedOptions().timeZone
  function yu() {
    return (
      (yu = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          }),
      yu.apply(null, arguments)
    )
  }
  !(function (e) {
    ;((e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE'))
  })(fu || (fu = {}))
  var gu = 'beforeunload'
  function bu(e) {
    void 0 === e && (e = {})
    var t = e.window,
      n = void 0 === t ? document.defaultView : t,
      r = n.history
    function i() {
      var e = ku(n.location.hash.substr(1)),
        t = e.pathname,
        i = void 0 === t ? '/' : t,
        a = e.search,
        o = void 0 === a ? '' : a,
        s = e.hash,
        l = void 0 === s ? '' : s,
        u = r.state || {}
      return [u.idx, { pathname: i, search: o, hash: l, state: u.usr || null, key: u.key || 'default' }]
    }
    var a = null
    function o() {
      if (a) (d.call(a), (a = null))
      else {
        var e = fu.Pop,
          t = i(),
          n = t[0],
          r = t[1]
        if (d.length) {
          if (null != n) {
            var o = u - n
            o &&
              ((a = {
                action: e,
                location: r,
                retry: function () {
                  g(-1 * o)
                },
              }),
              g(o))
          }
        } else y(e)
      }
    }
    ;(n.addEventListener('popstate', o),
      n.addEventListener('hashchange', function () {
        _u(i()[1]) !== _u(c) && o()
      }))
    var s = fu.Pop,
      l = i(),
      u = l[0],
      c = l[1],
      f = wu(),
      d = wu()
    function p(e) {
      return (
        (function () {
          var e = document.querySelector('base'),
            t = ''
          if (e && e.getAttribute('href')) {
            var r = n.location.href,
              i = r.indexOf('#')
            t = -1 === i ? r : r.slice(0, i)
          }
          return t
        })() +
        '#' +
        ('string' == typeof e ? e : _u(e))
      )
    }
    function h(e, t) {
      return (
        void 0 === t && (t = null),
        yu({ pathname: c.pathname, hash: '', search: '' }, 'string' == typeof e ? ku(e) : e, {
          state: t,
          key: Math.random().toString(36).substr(2, 8),
        })
      )
    }
    function m(e, t) {
      return [{ usr: e.state, key: e.key, idx: t }, p(e)]
    }
    function v(e, t, n) {
      return !d.length || (d.call({ action: e, location: t, retry: n }), !1)
    }
    function y(e) {
      s = e
      var t = i()
      ;((u = t[0]), (c = t[1]), f.call({ action: s, location: c }))
    }
    function g(e) {
      r.go(e)
    }
    null == u && ((u = 0), r.replaceState(yu({}, r.state, { idx: u }), ''))
    var b = {
      get action() {
        return s
      },
      get location() {
        return c
      },
      createHref: p,
      push: function e(t, i) {
        var a = fu.Push,
          o = h(t, i)
        if (
          v(a, o, function () {
            e(t, i)
          })
        ) {
          var s = m(o, u + 1),
            l = s[0],
            c = s[1]
          try {
            r.pushState(l, '', c)
          } catch (e) {
            n.location.assign(c)
          }
          y(a)
        }
      },
      replace: function e(t, n) {
        var i = fu.Replace,
          a = h(t, n)
        if (
          v(i, a, function () {
            e(t, n)
          })
        ) {
          var o = m(a, u),
            s = o[0],
            l = o[1]
          ;(r.replaceState(s, '', l), y(i))
        }
      },
      go: g,
      back: function () {
        g(-1)
      },
      forward: function () {
        g(1)
      },
      listen: function (e) {
        return f.push(e)
      },
      block: function (e) {
        var t = d.push(e)
        return (
          1 === d.length && n.addEventListener(gu, Eu),
          function () {
            ;(t(), d.length || n.removeEventListener(gu, Eu))
          }
        )
      },
    }
    return b
  }
  function Eu(e) {
    ;(e.preventDefault(), (e.returnValue = ''))
  }
  function wu() {
    var e = []
    return {
      get length() {
        return e.length
      },
      push: function (t) {
        return (
          e.push(t),
          function () {
            e = e.filter(function (e) {
              return e !== t
            })
          }
        )
      },
      call: function (t) {
        e.forEach(function (e) {
          return e && e(t)
        })
      },
    }
  }
  function _u(e) {
    var t = e.pathname,
      n = void 0 === t ? '/' : t,
      r = e.search,
      i = void 0 === r ? '' : r,
      a = e.hash,
      o = void 0 === a ? '' : a
    return (
      i && '?' !== i && (n += '?' === i.charAt(0) ? i : '?' + i),
      o && '#' !== o && (n += '#' === o.charAt(0) ? o : '#' + o),
      n
    )
  }
  function ku(e) {
    var t = {}
    if (e) {
      var n = e.indexOf('#')
      n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)))
      var r = e.indexOf('?')
      ;(r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e))
    }
    return t
  }
  var Su,
    Tu = { exports: {} },
    xu = Tu.exports
  var Ou =
      (Su ||
        ((Su = 1),
        (function (e, t) {
          var n = [].slice
          !(function (n, r) {
            null !== t ? (e.exports = r()) : (n.UrlPattern = r())
          })(xu, function () {
            var e, t, r, i, a, o, s, l, u, c, f, d, p, h, m
            return (
              (u = function (e) {
                return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
              }),
              (s = function (e, t) {
                var n, r, i
                for (i = [], n = -1, r = e.length; ++n < r; ) i = i.concat(t(e[n]))
                return i
              }),
              (h = function (e, t) {
                var n, r, i
                for (i = '', n = -1, r = e.length; ++n < r; ) i += t(e[n])
                return i
              }),
              (p = function (e) {
                return new RegExp(e.toString() + '|').exec('').length - 1
              }),
              (f = function (e, t) {
                var n, r, i, a, o
                for (a = {}, n = -1, i = e.length; ++n < i; )
                  ((r = e[n]),
                    null != (o = t[n]) &&
                      (null != a[r] ? (Array.isArray(a[r]) || (a[r] = [a[r]]), a[r].push(o)) : (a[r] = o)))
                return a
              }),
              ((e = {}).Result = function (e, t) {
                ;((this.value = e), (this.rest = t))
              }),
              (e.Tagged = function (e, t) {
                ;((this.tag = e), (this.value = t))
              }),
              (e.tag = function (t, n) {
                return function (r) {
                  var i, a
                  if (null != (i = n(r))) return ((a = new e.Tagged(t, i.value)), new e.Result(a, i.rest))
                }
              }),
              (e.regex = function (t) {
                return function (n) {
                  var r, i
                  if (null != (r = t.exec(n))) return ((i = r[0]), new e.Result(i, n.slice(i.length)))
                }
              }),
              (e.sequence = function () {
                var t
                return (
                  (t = 1 <= arguments.length ? n.call(arguments, 0) : []),
                  function (n) {
                    var r, i, a, o, s
                    for (r = -1, i = t.length, s = [], a = n; ++r < i; ) {
                      if (null == (o = (0, t[r])(a))) return
                      ;(s.push(o.value), (a = o.rest))
                    }
                    return new e.Result(s, a)
                  }
                )
              }),
              (e.pick = function () {
                var t, r
                return (
                  (t = arguments[0]),
                  (r = 2 <= arguments.length ? n.call(arguments, 1) : []),
                  function (n) {
                    var i, a
                    if (null != (a = e.sequence.apply(e, r)(n))) return ((i = a.value), (a.value = i[t]), a)
                  }
                )
              }),
              (e.string = function (t) {
                var n
                return (
                  (n = t.length),
                  function (r) {
                    if (r.slice(0, n) === t) return new e.Result(t, r.slice(n))
                  }
                )
              }),
              (e.lazy = function (e) {
                var t
                return (
                  (t = null),
                  function (n) {
                    return (null == t && (t = e()), t(n))
                  }
                )
              }),
              (e.baseMany = function (t, n, r, i, a) {
                var o, s, l
                for (s = a, l = r ? '' : []; (null == n || null == n(s)) && null != (o = t(s)); )
                  (r ? (l += o.value) : l.push(o.value), (s = o.rest))
                if (!i || 0 !== l.length) return new e.Result(l, s)
              }),
              (e.many1 = function (t) {
                return function (n) {
                  return e.baseMany(t, null, !1, !0, n)
                }
              }),
              (e.concatMany1Till = function (t, n) {
                return function (r) {
                  return e.baseMany(t, n, !0, !0, r)
                }
              }),
              (e.firstChoice = function () {
                var e
                return (
                  (e = 1 <= arguments.length ? n.call(arguments, 0) : []),
                  function (t) {
                    var n, r, i
                    for (n = -1, r = e.length; ++n < r; ) if (null != (i = (0, e[n])(t))) return i
                  }
                )
              }),
              (d = function (t) {
                var n
                return (
                  ((n = {}).wildcard = e.tag('wildcard', e.string(t.wildcardChar))),
                  (n.optional = e.tag(
                    'optional',
                    e.pick(
                      1,
                      e.string(t.optionalSegmentStartChar),
                      e.lazy(function () {
                        return n.pattern
                      }),
                      e.string(t.optionalSegmentEndChar),
                    ),
                  )),
                  (n.name = e.regex(new RegExp('^[' + t.segmentNameCharset + ']+'))),
                  (n.named = e.tag(
                    'named',
                    e.pick(
                      1,
                      e.string(t.segmentNameStartChar),
                      e.lazy(function () {
                        return n.name
                      }),
                    ),
                  )),
                  (n.escapedChar = e.pick(1, e.string(t.escapeChar), e.regex(/^./))),
                  (n.static = e.tag(
                    'static',
                    e.concatMany1Till(
                      e.firstChoice(
                        e.lazy(function () {
                          return n.escapedChar
                        }),
                        e.regex(/^./),
                      ),
                      e.firstChoice(
                        e.string(t.segmentNameStartChar),
                        e.string(t.optionalSegmentStartChar),
                        e.string(t.optionalSegmentEndChar),
                        n.wildcard,
                      ),
                    ),
                  )),
                  (n.token = e.lazy(function () {
                    return e.firstChoice(n.wildcard, n.optional, n.named, n.static)
                  })),
                  (n.pattern = e.many1(
                    e.lazy(function () {
                      return n.token
                    }),
                  )),
                  n
                )
              }),
              (l = {
                escapeChar: '\\',
                segmentNameStartChar: ':',
                segmentValueCharset: 'a-zA-Z0-9-_~ %',
                segmentNameCharset: 'a-zA-Z0-9',
                optionalSegmentStartChar: '(',
                optionalSegmentEndChar: ')',
                wildcardChar: '*',
              }),
              (o = function (e, t) {
                if (Array.isArray(e))
                  return h(e, function (e) {
                    return o(e, t)
                  })
                switch (e.tag) {
                  case 'wildcard':
                    return '(.*?)'
                  case 'named':
                    return '([' + t + ']+)'
                  case 'static':
                    return u(e.value)
                  case 'optional':
                    return '(?:' + o(e.value, t) + ')?'
                }
              }),
              (a = function (e, t) {
                return (null == t && (t = l.segmentValueCharset), '^' + o(e, t) + '$')
              }),
              (i = function (e) {
                if (Array.isArray(e)) return s(e, i)
                switch (e.tag) {
                  case 'wildcard':
                    return ['_']
                  case 'named':
                    return [e.value]
                  case 'static':
                    return []
                  case 'optional':
                    return i(e.value)
                }
              }),
              (c = function (e, t, n, r) {
                var i, a, o
                if ((null == r && (r = !1), null != (o = e[t]))) {
                  if (!((i = n[t] || 0) > (Array.isArray(o) ? o.length - 1 : 0)))
                    return ((a = Array.isArray(o) ? o[i] : o), r && (n[t] = i + 1), a)
                  if (r) throw new Error('too few values provided for key `' + t + '`')
                } else if (r) throw new Error('no values provided for key `' + t + '`')
              }),
              (r = function (e, t, n) {
                var i, a
                if (Array.isArray(e)) {
                  for (i = -1, a = e.length; ++i < a; ) if (r(e[i], t, n)) return !0
                  return !1
                }
                switch (e.tag) {
                  case 'wildcard':
                    return null != c(t, '_', n, !1)
                  case 'named':
                    return null != c(t, e.value, n, !1)
                  case 'static':
                    return !1
                  case 'optional':
                    return r(e.value, t, n)
                }
              }),
              (m = function (e, t, n) {
                if (Array.isArray(e))
                  return h(e, function (e) {
                    return m(e, t, n)
                  })
                switch (e.tag) {
                  case 'wildcard':
                    return c(t, '_', n, !0)
                  case 'named':
                    return c(t, e.value, n, !0)
                  case 'static':
                    return e.value
                  case 'optional':
                    return r(e.value, t, n) ? m(e.value, t, n) : ''
                }
              }),
              ((t = function (e, n) {
                var r, o, s
                if (e instanceof t)
                  return (
                    (this.isRegex = e.isRegex),
                    (this.regex = e.regex),
                    (this.ast = e.ast),
                    void (this.names = e.names)
                  )
                if (((this.isRegex = e instanceof RegExp), 'string' != typeof e && !this.isRegex))
                  throw new TypeError('argument must be a regex or a string')
                if (this.isRegex) {
                  if (((this.regex = e), null != n)) {
                    if (!Array.isArray(n))
                      throw new Error(
                        'if first argument is a regex the second argument may be an array of group names but you provided something else',
                      )
                    if (((r = p(this.regex)), n.length !== r))
                      throw new Error('regex contains ' + r + ' groups but array of group names contains ' + n.length)
                    this.names = n
                  }
                } else {
                  if ('' === e) throw new Error('argument must not be the empty string')
                  if (e.replace(/\s+/g, '') !== e) throw new Error('argument must not contain whitespace')
                  if (
                    ((o = {
                      escapeChar: (null != n ? n.escapeChar : void 0) || l.escapeChar,
                      segmentNameStartChar: (null != n ? n.segmentNameStartChar : void 0) || l.segmentNameStartChar,
                      segmentNameCharset: (null != n ? n.segmentNameCharset : void 0) || l.segmentNameCharset,
                      segmentValueCharset: (null != n ? n.segmentValueCharset : void 0) || l.segmentValueCharset,
                      optionalSegmentStartChar:
                        (null != n ? n.optionalSegmentStartChar : void 0) || l.optionalSegmentStartChar,
                      optionalSegmentEndChar:
                        (null != n ? n.optionalSegmentEndChar : void 0) || l.optionalSegmentEndChar,
                      wildcardChar: (null != n ? n.wildcardChar : void 0) || l.wildcardChar,
                    }),
                    null == (s = d(o).pattern(e)))
                  )
                    throw new Error("couldn't parse pattern")
                  if ('' !== s.rest) throw new Error('could only partially parse pattern')
                  ;((this.ast = s.value),
                    (this.regex = new RegExp(a(this.ast, o.segmentValueCharset))),
                    (this.names = i(this.ast)))
                }
              }).prototype.match = function (e) {
                var t, n
                return null == (n = this.regex.exec(e)) ? null : ((t = n.slice(1)), this.names ? f(this.names, t) : t)
              }),
              (t.prototype.stringify = function (e) {
                if ((null == e && (e = {}), this.isRegex))
                  throw new Error("can't stringify patterns generated from a regex")
                if (e !== Object(e)) throw new Error('argument must be an object or undefined')
                return m(this.ast, e, {})
              }),
              (t.escapeForRegex = u),
              (t.concatMap = s),
              (t.stringConcatMap = h),
              (t.regexGroupCount = p),
              (t.keysAndValuesToObject = f),
              (t.P = e),
              (t.newParser = d),
              (t.defaultOptions = l),
              (t.astNodeToRegexString = a),
              (t.astNodeToNames = i),
              (t.getParam = c),
              (t.astNodeContainsSegmentsForProvidedParams = r),
              (t.stringify = m),
              t
            )
          })
        })(Tu, Tu.exports)),
      Tu.exports),
    Cu = t(Ou)
  const Ru = Symbol(),
    Nu = Symbol(),
    Du = Symbol(),
    Iu = Symbol(),
    Pu = Symbol(),
    Fu = Symbol(),
    Au = Symbol(),
    Mu = Symbol(),
    Lu = Symbol(),
    qu = Symbol(),
    zu = Symbol(),
    ju = Symbol(),
    Vu = Symbol(),
    Qu = [
      { pattern: new Cu('/'), key: Ru },
      { pattern: new Cu('/domains/:domainId'), key: Nu },
      { pattern: new Cu('/insights/views'), key: Du },
      { pattern: new Cu('/insights/pages'), key: Iu },
      { pattern: new Cu('/insights/referrers'), key: Pu },
      { pattern: new Cu('/insights/durations'), key: Fu },
      { pattern: new Cu('/insights/events'), key: Au },
      { pattern: new Cu('/insights/systems'), key: Mu },
      { pattern: new Cu('/insights/devices'), key: Lu },
      { pattern: new Cu('/insights/browsers'), key: qu },
      { pattern: new Cu('/insights/sizes'), key: zu },
      { pattern: new Cu('/insights/languages'), key: ju },
      { pattern: new Cu('/settings'), key: Vu },
    ],
    $u = Qu[0],
    Uu = ({ pathname: e }) => (!0 === Qu.some((t) => null != t.pattern.match(e)) ? e : $u.pattern.stringify())
  var Bu,
    Wu,
    Ku,
    Hu,
    Gu,
    Yu,
    Ju = { exports: {} }
  function Xu() {
    if (Wu) return Bu
    Wu = 1
    var e = 1
    return (Bu = {
      nextValue: function () {
        return (e = (9301 * e + 49297) % 233280) / 233280
      },
      seed: function (t) {
        e = t
      },
    })
  }
  function Zu() {
    if (Hu) return Ku
    Hu = 1
    var e,
      t,
      n,
      r = Xu(),
      i = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-'
    function a() {
      n = !1
    }
    function o(t) {
      if (t) {
        if (t !== e) {
          if (64 !== t.length)
            throw new Error(
              'Custom alphabet for shortid must be 64 unique characters. You submitted ' +
                t.length +
                ' characters: ' +
                t,
            )
          var n = t.split('').filter(function (e, t, n) {
            return t !== n.lastIndexOf(e)
          })
          if (n.length)
            throw new Error(
              'Custom alphabet for shortid must be 64 unique characters. These characters were not unique: ' +
                n.join(', '),
            )
          ;((e = t), a())
        }
      } else e !== i && ((e = i), a())
    }
    function s() {
      return (
        n ||
        (n = (function () {
          e || o(i)
          for (var t, n = e.split(''), a = [], s = r.nextValue(); n.length > 0; )
            ((s = r.nextValue()), (t = Math.floor(s * n.length)), a.push(n.splice(t, 1)[0]))
          return a.join('')
        })())
      )
    }
    return (
      (Ku = {
        get: function () {
          return e || i
        },
        characters: function (t) {
          return (o(t), e)
        },
        seed: function (e) {
          ;(r.seed(e), t !== e && (a(), (t = e)))
        },
        lookup: function (e) {
          return s()[e]
        },
        shuffled: s,
      }),
      Ku
    )
  }
  let ec = (e) => crypto.getRandomValues(new Uint8Array(e)),
    tc = (e, t, n) => {
      let r = (2 << (Math.log(e.length - 1) / Math.LN2)) - 1,
        i = -~((1.6 * r * t) / e.length)
      return (a = t) => {
        let o = ''
        for (;;) {
          let t = n(i),
            s = 0 | i
          for (; s--; ) if (((o += e[t[s] & r] || ''), o.length === a)) return o
        }
      }
    }
  var nc,
    rc,
    ic,
    ac,
    oc,
    sc,
    lc,
    uc,
    cc,
    fc,
    dc,
    pc = n(
      Object.freeze({
        __proto__: null,
        customAlphabet: (e, t = 21) => tc(e, t, ec),
        customRandom: tc,
        nanoid: (e = 21) =>
          crypto
            .getRandomValues(new Uint8Array(e))
            .reduce(
              (e, t) =>
                (e +=
                  (t &= 63) < 36 ? t.toString(36) : t < 62 ? (t - 26).toString(36).toUpperCase() : t > 62 ? '-' : '_'),
              '',
            ),
        random: ec,
        urlAlphabet: 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict',
      }),
    )
  function hc() {
    if (rc) return nc
    rc = 1
    var e = Zu(),
      t = (function () {
        if (Yu) return Gu
        Yu = 1
        var e,
          t = 'object' == typeof window && (window.crypto || window.msCrypto)
        return (
          (e =
            t && t.getRandomValues
              ? function (e) {
                  return t.getRandomValues(new Uint8Array(e))
                }
              : function (e) {
                  for (var t = [], n = 0; n < e; n++) t.push(Math.floor(256 * Math.random()))
                  return t
                }),
          (Gu = e)
        )
      })(),
      n = pc.customRandom
    return (nc = function (r) {
      for (var i, a = 0, o = ''; !i; ) ((o += n(e.get(), 1, t)()), (i = r < Math.pow(16, a + 1)), a++)
      return o
    })
  }
  function mc() {
    if (sc) return oc
    sc = 1
    var e = Zu()
    return (oc = function (t) {
      return (
        !(!t || 'string' != typeof t || t.length < 6) &&
        !new RegExp('[^' + e.get().replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&') + ']').test(t)
      )
    })
  }
  function vc() {
    return (
      cc ||
        ((cc = 1),
        (function (e) {
          var t = Zu(),
            n = (function () {
              if (ac) return ic
              ac = 1
              var e,
                t,
                n = hc()
              return (
                Zu(),
                (ic = function (r) {
                  var i = '',
                    a = Math.floor(0.001 * (Date.now() - 1567752802062))
                  return (a === t ? e++ : ((e = 0), (t = a)), (i += n(7)), (i += n(r)), e > 0 && (i += n(e)), i + n(a))
                })
              )
            })(),
            r = mc(),
            i = (uc ? lc : ((uc = 1), (lc = 0))) || 0
          function a() {
            return n(i)
          }
          ;((e.exports = a),
            (e.exports.generate = a),
            (e.exports.seed = function (n) {
              return (t.seed(n), e.exports)
            }),
            (e.exports.worker = function (t) {
              return ((i = t), e.exports)
            }),
            (e.exports.characters = function (e) {
              return (void 0 !== e && t.characters(e), t.shuffled())
            }),
            (e.exports.isValid = r))
        })(Ju)),
      Ju.exports
    )
  }
  var yc = t(dc ? fc : ((dc = 1), (fc = vc()))),
    gc = () => `_${yc.generate()}`
  const bc = Symbol(),
    Ec = Symbol(),
    wc = Symbol(),
    _c = {},
    kc = (e, t) => {
      switch (t.type) {
        case bc:
          return { ...e, [t.modalId]: { id: t.modalId, type: t.payload.type, props: t.payload.props } }
        case Ec: {
          const n = { ...e }
          return (delete n[t.modalId], n)
        }
        case wc:
          return _c
        default:
          return e
      }
    }
  const Sc = 'TOP',
    Tc = 'NEW',
    xc = 'RECENT',
    Oc = 'LAST_24_HOURS',
    Cc = 'LAST_7_DAYS',
    Rc = 'LAST_30_DAYS',
    Nc = 'LAST_6_MONTHS',
    Dc = 'DAILY',
    Ic = 'MONTHLY',
    Pc = 'YEARLY',
    Fc = 'UNIQUE',
    Ac = 'TOTAL',
    Mc = 'WITH_SOURCE',
    Lc = 'NO_SOURCE',
    qc = 'ONLY_SOURCE',
    zc = 'WITH_MODEL',
    jc = 'WITH_VERSION',
    Vc = 'BROWSER_HEIGHT',
    Qc = 'BROWSER_RESOLUTION',
    $c = 'BROWSER_WIDTH',
    Uc = 'SCREEN_HEIGHT',
    Bc = 'SCREEN_RESOLUTION',
    Wc = 'SCREEN_WIDTH',
    Kc = 'WITH_VERSION',
    Hc = Symbol(),
    Gc = Symbol(),
    Yc = Symbol(),
    Jc = Symbol(),
    Xc = Symbol(),
    Zc = Symbol(),
    ef = Symbol(),
    tf = Symbol(),
    nf = Symbol(),
    rf = Symbol(),
    {
      get: af,
      set: of,
      reset: sf,
    } = iu(`ackee_filter_${nu}`, {
      sorting: Sc,
      range: Cc,
      interval: Dc,
      viewsType: Fc,
      referrersType: Mc,
      devicesType: zc,
      browsersType: jc,
      sizesType: Qc,
      systemsType: Kc,
    }),
    lf = (e, t) => {
      switch (t.type) {
        case Hc:
          return of({ ...e, sorting: t.payload })
        case Gc:
          return of({ ...e, range: t.payload })
        case Yc:
          return of({ ...e, interval: t.payload })
        case Jc:
          return of({ ...e, viewsType: t.payload })
        case Xc:
          return of({ ...e, referrersType: t.payload })
        case Zc:
          return of({ ...e, devicesType: t.payload })
        case ef:
          return of({ ...e, browsersType: t.payload })
        case tf:
          return of({ ...e, sizesType: t.payload })
        case nf:
          return of({ ...e, systemsType: t.payload })
        case rf:
          return sf()
        default:
          return e
      }
    }
  const uf = new Set(['Token invalid', 'Token missing', 'Username or password incorrect'])
  var cf,
    ff,
    df,
    pf,
    hf,
    mf = (e) => !0 === uf.has(e.message),
    vf = { exports: {} }
  function yf() {
    if (ff) return cf
    ff = 1
    return (cf = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED')
  }
  function gf() {
    if (pf) return df
    pf = 1
    var e = yf()
    function t() {}
    function n() {}
    return (
      (n.resetWarningCache = t),
      (df = function () {
        function r(t, n, r, i, a, o) {
          if (o !== e) {
            var s = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
            )
            throw ((s.name = 'Invariant Violation'), s)
          }
        }
        function i() {
          return r
        }
        r.isRequired = r
        var a = {
          array: r,
          bigint: r,
          bool: r,
          func: r,
          number: r,
          object: r,
          string: r,
          symbol: r,
          any: r,
          arrayOf: i,
          element: r,
          elementType: r,
          instanceOf: i,
          node: r,
          objectOf: i,
          oneOf: i,
          oneOfType: i,
          shape: i,
          exact: i,
          checkPropTypes: n,
          resetWarningCache: t,
        }
        return ((a.PropTypes = a), a)
      })
    )
  }
  function bf() {
    return (hf || ((hf = 1), (vf.exports = gf()())), vf.exports)
  }
  var Ef = t(bf()),
    wf = (e) => [e.message, e.stack].join('\n')
  const _f = (e) => {
      ;(e.target.select(), document.execCommand('copy'))
    },
    kf = (e) => {
      const t = h.createElement('textarea', {
        className: 'input',
        id: e.id,
        required: e.required,
        disabled: e.disabled,
        readOnly: e.readOnly,
        placeholder: e.placeholder,
        value: e.value,
        rows: e.rows,
        onChange: e.onChange,
        onFocus: !0 === e.copyOnFocus ? _f : void 0,
      })
      return !0 === e.copyOnFocus
        ? h.createElement('div', { className: 'inputMessage', title: 'Copied to clipboard' }, t)
        : t
    }
  kf.propTypes = {
    id: Ef.string,
    required: Ef.bool,
    disabled: Ef.bool,
    readOnly: Ef.bool,
    placeholder: Ef.string,
    value: Ef.string,
    rows: Ef.number,
    onChange: Ef.func,
    copyOnFocus: Ef.bool,
  }
  const Sf = (e) => h.createElement('div', { className: 'spacer', style: { '--size': e.size } })
  Sf.propTypes = { size: Ef.number.isRequired }
  var Tf,
    xf = { exports: {} }
  /*!
		Copyright (c) 2018 Jed Watson.
		Licensed under the MIT License (MIT), see
		http://jedwatson.github.io/classnames
	*/ var Of =
      (Tf ||
        ((Tf = 1),
        (function (e) {
          !(function () {
            var t = {}.hasOwnProperty
            function n() {
              for (var e = '', t = 0; t < arguments.length; t++) {
                var n = arguments[t]
                n && (e = i(e, r(n)))
              }
              return e
            }
            function r(e) {
              if ('string' == typeof e || 'number' == typeof e) return e
              if ('object' != typeof e) return ''
              if (Array.isArray(e)) return n.apply(null, e)
              if (e.toString !== Object.prototype.toString && !e.toString.toString().includes('[native code]'))
                return e.toString()
              var r = ''
              for (var a in e) t.call(e, a) && e[a] && (r = i(r, a))
              return r
            }
            function i(e, t) {
              return t ? (e ? e + ' ' + t : e + t) : e
            }
            e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n)
          })()
        })(xf)),
      xf.exports),
    Cf = t(Of)
  const Rf = (e) => {
    const t = null != e.onClick,
      n = h.createElement('button', { className: 'headline__button link', onClick: e.onClick }, e.children)
    return h.createElement(
      e.type,
      {
        className: Cf(
          { 'headline': !0, [`headline--${e.size}`]: null != e.size, 'headline--no-spacing': !1 === e.spacing },
          e.className,
        ),
      },
      !0 === t ? n : e.children,
    )
  }
  Rf.propTypes = {
    type: Ef.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div']).isRequired,
    size: Ef.oneOf(['medium', 'small']),
    spacing: Ef.bool,
    className: Ef.string,
    children: Ef.node.isRequired,
    onClick: Ef.func,
  }
  const Nf = (e) =>
    h.createElement(
      e.type,
      { className: Cf({ 'text': !0, 'text--no-spacing': !1 === e.spacing }, e.className) },
      e.children,
    )
  Nf.propTypes = {
    type: Ef.oneOf(['p', 'div']).isRequired,
    spacing: Ef.bool,
    className: Ef.string,
    children: Ef.node.isRequired,
  }
  const Df = (e) =>
    h.createElement(
      'div',
      { className: Cf({ message: !0, [`message--${e.status}`]: null != e.status }, e.className) },
      e.children,
    )
  Df.propTypes = {
    status: Ef.oneOf(['success', 'warning', 'error']).isRequired,
    className: Ef.string,
    children: Ef.node.isRequired,
  }
  const If = (e) => {
    return h.createElement(
      'div',
      { className: 'card card--overlay' },
      h.createElement(
        'div',
        { className: 'card__inner align-center' },
        h.createElement(Sf, { size: 2.4 }),
        h.createElement(Rf, { type: 'h1' }, 'Oops'),
        h.createElement(Nf, { type: 'p' }, 'Something went wrong.'),
        h.createElement(Sf, { size: 2.5 }),
        h.createElement(
          Df,
          { status: 'error' },
          "Please report this issue on GitHub if you can't resolve it by yourself.",
        ),
        h.createElement(kf, { rows: 6, value: ((t = e.errors), t.map(wf).join('\n\n')), readOnly: !0 }),
        h.createElement(Sf, { size: 1 }),
      ),
      h.createElement(
        'div',
        { className: 'card__footer' },
        h.createElement('a', { className: 'card__button link', href: ru, target: '_blank', rel: 'noopener' }, 'Help'),
        h.createElement('div', { className: 'card__separator' }),
        h.createElement(
          'button',
          {
            className: 'card__button card__button--primary link color-white',
            onClick: () => {
              ;(e.reset(), (globalThis.location.hash = ''), globalThis.location.reload())
            },
          },
          'Reload Ackee',
        ),
      ),
    )
    var t
  }
  If.propTypes = { errors: Ef.array.isRequired, reset: Ef.func.isRequired }
  const Pf = (e) => {
      ;(e.target.select(), document.execCommand('copy'))
    },
    Ff = (e) => {
      const t = h.useRef(null)
      h.useEffect(() => {
        !0 === e.focused && t.current.focus()
      }, [])
      const n = { text: 'text', username: 'text', password: 'password' }[e.type],
        r = { text: void 0, username: 'username', password: 'current-password' }[e.type],
        i = h.createElement('input', {
          ref: t,
          className: 'input',
          autoCapitalize: 'off',
          autoCorrect: 'off',
          autoComplete: r,
          type: n,
          id: e.id,
          required: e.required,
          disabled: e.disabled,
          readOnly: e.readOnly,
          placeholder: e.placeholder,
          value: e.value,
          onChange: e.onChange,
          onFocus: !0 === e.copyOnFocus ? Pf : void 0,
        })
      return !0 === e.copyOnFocus
        ? h.createElement('div', { className: 'inputMessage', title: 'Copied to clipboard' }, i)
        : i
    }
  Ff.propTypes = {
    type: Ef.oneOf(['text', 'username', 'password']).isRequired,
    id: Ef.string,
    required: Ef.bool,
    disabled: Ef.bool,
    readOnly: Ef.bool,
    focused: Ef.bool,
    placeholder: Ef.string.isRequired,
    value: Ef.string,
    onChange: Ef.func,
    copyOnFocus: Ef.bool,
  }
  const Af = () =>
      h.createElement(
        'div',
        { className: 'spinner' },
        h.createElement('div', { className: 'spinner__circle spinner__circle--primary' }),
        h.createElement('div', { className: 'spinner__circle spinner__circle--white' }),
        h.createElement('div', { className: 'spinner__circle spinner__circle--dimmed' }),
      ),
    Mf = ds`
  mutation createToken($input: CreateTokenInput!) {
  	createToken(input: $input) {
  		payload {
  			id
  		}
  	}
  }
`
  var Lf = (e) => {
    const [t, n] = h.useState(e),
      r = h.useCallback(
        (e) => (t) => {
          n((n) => ({ ...n, [e]: t.target.value }))
        },
        [n],
      )
    return [t, r]
  }
  const qf = (e) => {
    const t = (() => {
        const [e, { loading: t, error: n }] = tl(Mf)
        return { mutate: e, loading: t, error: n }
      })(),
      n = null != t.error,
      r = !0 === t.loading,
      [i, a] = Lf({
        username: !0 === globalThis.env.isDemoMode ? 'admin' : '',
        password: !0 === globalThis.env.isDemoMode ? '123456' : '',
      })
    return h.createElement(
      'form',
      {
        className: 'card card--overlay',
        onSubmit: async (n) => {
          n.preventDefault()
          const { data: r } = await t.mutate({ variables: { input: i } })
          e.setToken(r.createToken.payload.id)
        },
      },
      h.createElement(
        'div',
        { className: 'card__inner align-center' },
        h.createElement(Sf, { size: 2.4 }),
        h.createElement(Rf, { type: 'h1' }, 'Ackee'),
        h.createElement(Nf, { type: 'p' }, 'Welcome back, sign in to continue.'),
        h.createElement(Sf, { size: 2.5 }),
        !0 === n && h.createElement(Df, { status: 'error' }, t.error.message),
        h.createElement(Ff, {
          type: 'username',
          required: !0,
          disabled: !0 === r,
          focused: !0,
          placeholder: 'Username',
          value: i.username,
          onChange: a('username'),
        }),
        h.createElement(Ff, {
          type: 'password',
          required: !0,
          disabled: !0 === r,
          placeholder: 'Password',
          value: i.password,
          onChange: a('password'),
        }),
        h.createElement(Sf, { size: 1 }),
      ),
      h.createElement(
        'div',
        { className: 'card__footer' },
        h.createElement('a', { className: 'card__button link', href: ru, target: '_blank', rel: 'noopener' }, 'Help'),
        h.createElement('div', { className: 'card__separator' }),
        h.createElement(
          'button',
          { className: 'card__button card__button--primary link color-white', disabled: !0 === r },
          !0 === r ? h.createElement(Af) : 'Sign In →',
        ),
      ),
    )
  }
  qf.propTypes = { setToken: Ef.func.isRequired }
  var zf,
    jf,
    Vf = _(),
    Qf = (e) =>
      h.useMemo(() => {
        const t = Qu.find((t) => null != t.pattern.match(e))
        return { ...t, params: t.pattern.match(e) }
      }, [e])
  var $f = (function () {
      if (jf) return zf
      jf = 1
      var e = 'undefined' != typeof Element,
        t = 'function' == typeof Map,
        n = 'function' == typeof Set,
        r = 'function' == typeof ArrayBuffer && !!ArrayBuffer.isView
      function i(a, o) {
        if (a === o) return !0
        if (a && o && 'object' == typeof a && 'object' == typeof o) {
          if (a.constructor !== o.constructor) return !1
          var s, l, u, c
          if (Array.isArray(a)) {
            if ((s = a.length) != o.length) return !1
            for (l = s; 0 !== l--; ) if (!i(a[l], o[l])) return !1
            return !0
          }
          if (t && a instanceof Map && o instanceof Map) {
            if (a.size !== o.size) return !1
            for (c = a.entries(); !(l = c.next()).done; ) if (!o.has(l.value[0])) return !1
            for (c = a.entries(); !(l = c.next()).done; ) if (!i(l.value[1], o.get(l.value[0]))) return !1
            return !0
          }
          if (n && a instanceof Set && o instanceof Set) {
            if (a.size !== o.size) return !1
            for (c = a.entries(); !(l = c.next()).done; ) if (!o.has(l.value[0])) return !1
            return !0
          }
          if (r && ArrayBuffer.isView(a) && ArrayBuffer.isView(o)) {
            if ((s = a.length) != o.length) return !1
            for (l = s; 0 !== l--; ) if (a[l] !== o[l]) return !1
            return !0
          }
          if (a.constructor === RegExp) return a.source === o.source && a.flags === o.flags
          if (
            a.valueOf !== Object.prototype.valueOf &&
            'function' == typeof a.valueOf &&
            'function' == typeof o.valueOf
          )
            return a.valueOf() === o.valueOf()
          if (
            a.toString !== Object.prototype.toString &&
            'function' == typeof a.toString &&
            'function' == typeof o.toString
          )
            return a.toString() === o.toString()
          if ((s = (u = Object.keys(a)).length) !== Object.keys(o).length) return !1
          for (l = s; 0 !== l--; ) if (!Object.prototype.hasOwnProperty.call(o, u[l])) return !1
          if (e && a instanceof Element) return !1
          for (l = s; 0 !== l--; )
            if ((('_owner' !== u[l] && '__v' !== u[l] && '__o' !== u[l]) || !a.$$typeof) && !i(a[u[l]], o[u[l]]))
              return !1
          return !0
        }
        return a != a && o != o
      }
      return (
        (zf = function (e, t) {
          try {
            return i(e, t)
          } catch (e) {
            if ((e.message || '').match(/stack|recursion/i))
              return (console.warn('react-fast-compare cannot handle circular refs'), !1)
            throw e
          }
        }),
        zf
      )
    })(),
    Uf = t($f)
  var Bf = (e, t) => {
      const [n, r] = h.useState()
      return (
        (function (e) {
          var t = h.useRef(null),
            n = h.useRef(!1),
            r = h.useRef(e)
          r.current = e
          var i = h.useCallback(function (e) {
              n.current && (r.current(e), (t.current = requestAnimationFrame(i)))
            }, []),
            a = h.useMemo(function () {
              return [
                function () {
                  n.current && ((n.current = !1), t.current && cancelAnimationFrame(t.current))
                },
                function () {
                  n.current || ((n.current = !0), (t.current = requestAnimationFrame(i)))
                },
                function () {
                  return n.current
                },
              ]
            }, [])
          h.useEffect(function () {
            return (a[1](), a[0])
          }, [])
        })(() => {
          if (null == e.current) return
          if (null == t.current) return
          const i = ((e, t) => {
            const n = document.scrollingElement.getBoundingClientRect(),
              r = e.current.getBoundingClientRect(),
              i = t.current.getBoundingClientRect()
            return {
              body: {
                width: n.width,
                height: n.height,
                relative: { x: n.left, y: n.top },
                absolute: { x: n.left, y: n.top },
              },
              target: {
                width: r.width,
                height: r.height,
                relative: { x: r.left, y: r.top },
                absolute: { x: r.left + -1 * n.left, y: r.top + -1 * n.top },
              },
              element: { width: i.width, height: i.height },
            }
          })(e, t)
          !1 !== (!1 === Uf(n || {}, i)) && r(i)
        }),
        n
      )
    },
    Wf = (e) => `${Math.round(e)}px`
  const Kf = (e) => h.createElement('div', { className: 'keyHint' }, e.children)
  Kf.propTypes = { children: Ef.node.isRequired }
  const Hf = Symbol(),
    Gf = Symbol(),
    Yf = Symbol(),
    Jf = (e) => h.createElement('p', { className: 'context__content' }, e.children)
  Jf.propTypes = { children: Ef.node.isRequired }
  const Xf = (e) => {
    const t = null != e.keyHint,
      n = null != e.description
    return h.createElement(
      'button',
      { className: Cf({ context__button: !0, active: !0 === e.active, link: !0 }), onClick: e.onClick },
      h.createElement(
        'div',
        { className: 'context__head' },
        h.createElement('div', { className: 'context__label' }, e.label),
        !0 === t && h.createElement(Kf, {}, e.keyHint),
      ),
      !0 === n && h.createElement('div', { className: 'context__description' }, e.description),
    )
  }
  Xf.propTypes = {
    label: Ef.string.isRequired,
    description: Ef.string,
    active: Ef.bool.isRequired,
    onClick: Ef.func.isRequired,
    keyHint: Ef.node,
  }
  const Zf = () => h.createElement('div', { className: 'context__separator' }),
    ed = (e) => {
      const t = h.useRef(),
        n = Bf(e.targetRef, t)
      ;((e, t) => {
        const [n, r] = h.useState(!1)
        ;(h.useEffect(() => {
          const e = requestAnimationFrame(() => r(!0))
          return () => cancelAnimationFrame(e)
        }, []),
          h.useEffect(() => {
            if (!1 === n) return
            const r = (n) => {
              !1 != (null != e && null != e.current) && !0 != (!0 === e.current.contains(n.target)) && t()
            }
            return (document.addEventListener('click', r), () => document.removeEventListener('click', r))
          }, [t, n]))
      })(t, e.onAwayClick)
      const r = null == n ? void 0 : Wf(e.x(n)),
        i = null == n ? void 0 : Wf(e.y(n))
      return Vf.createPortal(
        h.createElement(
          'div',
          {
            ref: t,
            className: Cf({
              'context': !0,
              'context--fixed': !0 === e.fixed,
              'context--tooltip': !0 === e.tooltip,
              'context--floating': !0 === e.floating,
              'visible': null != n,
            }),
            style: { '--x': r, '--y': i },
          },
          e.items.map((t, n) =>
            t.type === Hf
              ? h.createElement(Jf, { key: n, ...t })
              : t.type === Gf
                ? h.createElement(Xf, {
                    key: t.label + n,
                    ...t,
                    onClick: (n) => {
                      ;(t.onClick(n), e.onItemClick(n))
                    },
                  })
                : t.type === Yf
                  ? h.createElement(Zf, { key: n })
                  : void 0,
          ),
        ),
        document.body,
      )
    }
  ed.propTypes = {
    targetRef: Ef.shape({ current: Ef.instanceOf(Element) }),
    fixed: Ef.bool,
    x: Ef.func.isRequired,
    y: Ef.func.isRequired,
    tooltip: Ef.bool,
    floating: Ef.bool,
    items: Ef.arrayOf(Ef.object).isRequired,
    onItemClick: Ef.func.isRequired,
    onAwayClick: Ef.func.isRequired,
  }
  const td = (e) =>
    h.createElement(
      'svg',
      { viewBox: '0 0 512 512', className: e.className },
      h.createElement('path', {
        d: 'M256,298.3L256,298.3L256,298.3l174.2-167.2c4.3-4.2,11.4-4.1,15.8,0.2l30.6,29.9c4.4,4.3,4.5,11.3,0.2,15.5L264.1,380.9c-2.2,2.2-5.2,3.2-8.1,3c-3,0.1-5.9-0.9-8.1-3L35.2,176.7c-4.3-4.2-4.2-11.2,0.2-15.5L66,131.3c4.4-4.3,11.5-4.4,15.8-0.2L256,298.3z',
      }),
    )
  td.propTypes = { className: Ef.string }
  const nd = {
      sortings: { [Sc]: 'Top', [Tc]: 'New', [xc]: 'Recent' },
      ranges: { [Oc]: '24 hours', [Cc]: '7 days', [Rc]: '30 days', [Nc]: '6 months' },
      intervals: { [Dc]: 'Daily', [Ic]: 'Monthly', [Pc]: 'Yearly' },
      views: { [Fc]: 'Unique', [Ac]: 'Total' },
      referrers: { [Mc]: 'Combined', [Lc]: 'Referrers', [qc]: 'Sources' },
      sizes: {
        [Qc]: 'Browser sizes',
        [$c]: 'Browser widths',
        [Vc]: 'Browser heights',
        [Bc]: 'Screen sizes',
        [Wc]: 'Screen widths',
        [Uc]: 'Screen heights',
      },
    },
    rd = (e) =>
      Math.max(
        10,
        Math.min(e.body.width - e.element.width - 10, e.target.relative.x + e.target.width / 2 - e.element.width / 2),
      ),
    id = (e) => e.target.relative.y - e.element.height - 10,
    ad = (e, t, n = !0) => ({ label: e, items: t, visible: n }),
    od = (e, t, n, r, i) => ({ type: Gf, label: e, description: t, active: r === i, onClick: () => n(i) }),
    sd = () => ({ type: Yf }),
    ld = (...e) => e.find((e) => !1 === e.active),
    ud = (e) => {
      const t = h.useRef(),
        [n, r] = h.useState(!1),
        i = () => r(!1)
      return !1 === e.visible
        ? null
        : h.createElement(
            h.Fragment,
            {},
            h.createElement(
              'button',
              { ref: t, className: 'filter__button color-white link', onClick: () => r(!n) },
              h.createElement('span', {}, e.label),
              h.createElement(td, { className: 'filter__arrow' }),
            ),
            !0 === n &&
              h.createElement(ed, {
                targetRef: t,
                fixed: !0,
                x: rd,
                y: id,
                floating: !0,
                items: e.items,
                onItemClick: i,
                onAwayClick: i,
              }),
          )
    },
    cd = (e) => {
      const t = [
          od('Top', 'Top entries first', e.setSortingFilter, e.filters.sorting, Sc),
          od('New', 'New entries only', e.setSortingFilter, e.filters.sorting, Tc),
          od('Recent', 'Entries sorted by time', e.setSortingFilter, e.filters.sorting, xc),
        ],
        n = [
          od('24 hours', 'Show last 24 hours', e.setRangeFilter, e.filters.range, Oc),
          od('7 days', 'Show last 7 days', e.setRangeFilter, e.filters.range, Cc),
          od('30 days', 'Show last 30 days', e.setRangeFilter, e.filters.range, Rc),
          od('6 months', 'Show last 6 months', e.setRangeFilter, e.filters.range, Nc),
        ],
        r = [
          od('Daily', 'Grouped by day', e.setIntervalFilter, e.filters.interval, Dc),
          od('Monthly', 'Grouped by month', e.setIntervalFilter, e.filters.interval, Ic),
          od('Yearly', 'Grouped by year', e.setIntervalFilter, e.filters.interval, Pc),
        ],
        i = ad(nd.sortings[e.filters.sorting], t),
        a = ad(nd.ranges[e.filters.range], n, e.filters.sorting === Sc),
        o = ad(nd.intervals[e.filters.interval], r),
        s = {
          [Du]: [
            ad(nd.views[e.filters.viewsType], [
              od('Unique', 'Unique site views', e.setViewsTypeFilter, e.filters.viewsType, Fc),
              od('Total', 'Total page views', e.setViewsTypeFilter, e.filters.viewsType, Ac),
            ]),
            o,
          ],
          [Iu]: [i, a],
          [Pu]: [
            i,
            ad(nd.referrers[e.filters.referrersType], [
              od('Combined', 'Prefer source parameter', e.setReferrersTypeFilter, e.filters.referrersType, Mc),
              od('↳ referrers only', void 0, e.setReferrersTypeFilter, e.filters.referrersType, Lc),
              od('↳ sources only', void 0, e.setReferrersTypeFilter, e.filters.referrersType, qc),
            ]),
            a,
          ],
          [Fu]: [o],
          [Au]: [o, i],
          [Mu]: [
            ad(nd.sortings[e.filters.sorting], [
              ...t,
              sd(),
              ld(
                od('Show version', 'Include system version', e.setSystemsTypeFilter, e.filters.systemsType, Kc),
                od(
                  'Hide version',
                  "Don't include version",
                  e.setSystemsTypeFilter,
                  e.filters.systemsType,
                  'NO_VERSION',
                ),
              ),
            ]),
            a,
          ],
          [Lu]: [
            ad(nd.sortings[e.filters.sorting], [
              ...t,
              sd(),
              ld(
                od('Show model', 'Include device model', e.setDevicesTypeFilter, e.filters.devicesType, zc),
                od('Hide model', "Don't include model", e.setDevicesTypeFilter, e.filters.devicesType, 'NO_MODEL'),
              ),
            ]),
            a,
          ],
          [qu]: [
            ad(nd.sortings[e.filters.sorting], [
              ...t,
              sd(),
              ld(
                od('Show version', 'Include browser version', e.setBrowsersTypeFilter, e.filters.browsersType, jc),
                od(
                  'Hide version',
                  "Don't include version",
                  e.setBrowsersTypeFilter,
                  e.filters.browsersType,
                  'NO_VERSION',
                ),
              ),
            ]),
            a,
          ],
          [zu]: [
            i,
            ad(nd.sizes[e.filters.sizesType], [
              od('Browser sizes', 'Width and height combined', e.setSizesTypeFilter, e.filters.sizesType, Qc),
              od('↳ widths', void 0, e.setSizesTypeFilter, e.filters.sizesType, $c),
              od('↳ heights', void 0, e.setSizesTypeFilter, e.filters.sizesType, Vc),
              sd(),
              od('Screen sizes', 'Width and height combined', e.setSizesTypeFilter, e.filters.sizesType, Bc),
              od('↳ widths', void 0, e.setSizesTypeFilter, e.filters.sizesType, Wc),
              od('↳ heights', void 0, e.setSizesTypeFilter, e.filters.sizesType, Uc),
            ]),
            a,
          ],
          [ju]: [i, a],
        }[Qf(e.route).key]
      if (null == s) return null
      const l = s.map((e) => h.createElement(ud, e))
      return Vf.createPortal(
        h.createElement('div', { className: 'filter' }, h.createElement('div', { className: 'filter__bar' }, ...l)),
        document.body,
      )
    }
  cd.propTypes = {
    filters: Ef.object.isRequired,
    setSortingFilter: Ef.func.isRequired,
    setRangeFilter: Ef.func.isRequired,
    setIntervalFilter: Ef.func.isRequired,
    setViewsTypeFilter: Ef.func.isRequired,
    setReferrersTypeFilter: Ef.func.isRequired,
    setDevicesTypeFilter: Ef.func.isRequired,
    setBrowsersTypeFilter: Ef.func.isRequired,
    setSizesTypeFilter: Ef.func.isRequired,
    setSystemsTypeFilter: Ef.func.isRequired,
    route: Ef.string.isRequired,
  }
  /**!
   * hotkeys-js v3.9.4
   * A simple micro-library for defining and dispatching keyboard shortcuts. It has no dependencies.
   *
   * Copyright (c) 2022 kenny wong <wowohoo@qq.com>
   * http://jaywcjlove.github.io/hotkeys
   * Licensed under the MIT license
   */
  var fd = 'undefined' != typeof navigator && navigator.userAgent.toLowerCase().indexOf('firefox') > 0
  function dd(e, t, n, r) {
    e.addEventListener
      ? e.addEventListener(t, n, r)
      : e.attachEvent &&
        e.attachEvent('on'.concat(t), function () {
          n(window.event)
        })
  }
  function pd(e, t) {
    for (var n = t.slice(0, t.length - 1), r = 0; r < n.length; r++) n[r] = e[n[r].toLowerCase()]
    return n
  }
  function hd(e) {
    'string' != typeof e && (e = '')
    for (var t = (e = e.replace(/\s/g, '')).split(','), n = t.lastIndexOf(''); n >= 0; )
      ((t[n - 1] += ','), t.splice(n, 1), (n = t.lastIndexOf('')))
    return t
  }
  for (
    var md = {
        'backspace': 8,
        'tab': 9,
        'clear': 12,
        'enter': 13,
        'return': 13,
        'esc': 27,
        'escape': 27,
        'space': 32,
        'left': 37,
        'up': 38,
        'right': 39,
        'down': 40,
        'del': 46,
        'delete': 46,
        'ins': 45,
        'insert': 45,
        'home': 36,
        'end': 35,
        'pageup': 33,
        'pagedown': 34,
        'capslock': 20,
        'num_0': 96,
        'num_1': 97,
        'num_2': 98,
        'num_3': 99,
        'num_4': 100,
        'num_5': 101,
        'num_6': 102,
        'num_7': 103,
        'num_8': 104,
        'num_9': 105,
        'num_multiply': 106,
        'num_add': 107,
        'num_enter': 108,
        'num_subtract': 109,
        'num_decimal': 110,
        'num_divide': 111,
        '⇪': 20,
        ',': 188,
        '.': 190,
        '/': 191,
        '`': 192,
        '-': fd ? 173 : 189,
        '=': fd ? 61 : 187,
        ';': fd ? 59 : 186,
        "'": 222,
        '[': 219,
        ']': 221,
        '\\': 220,
      },
      vd = {
        '⇧': 16,
        'shift': 16,
        '⌥': 18,
        'alt': 18,
        'option': 18,
        '⌃': 17,
        'ctrl': 17,
        'control': 17,
        '⌘': 91,
        'cmd': 91,
        'command': 91,
      },
      yd = {
        16: 'shiftKey',
        18: 'altKey',
        17: 'ctrlKey',
        91: 'metaKey',
        shiftKey: 16,
        ctrlKey: 17,
        altKey: 18,
        metaKey: 91,
      },
      gd = { 16: !1, 18: !1, 17: !1, 91: !1 },
      bd = {},
      Ed = 1;
    Ed < 20;
    Ed++
  )
    md['f'.concat(Ed)] = 111 + Ed
  var wd = [],
    _d = !1,
    kd = 'all',
    Sd = [],
    Td = function (e) {
      return md[e.toLowerCase()] || vd[e.toLowerCase()] || e.toUpperCase().charCodeAt(0)
    }
  function xd(e) {
    kd = e || 'all'
  }
  function Od() {
    return kd || 'all'
  }
  var Cd = function (e) {
    var t = e.key,
      n = e.scope,
      r = e.method,
      i = e.splitKey,
      a = void 0 === i ? '+' : i
    hd(t).forEach(function (e) {
      var t = e.split(a),
        i = t.length,
        o = t[i - 1],
        s = '*' === o ? '*' : Td(o)
      if (bd[s]) {
        n || (n = Od())
        var l = i > 1 ? pd(vd, t) : []
        bd[s] = bd[s].filter(function (e) {
          return !(
            (!r || e.method === r) &&
            e.scope === n &&
            (function (e, t) {
              for (
                var n = e.length >= t.length ? e : t, r = e.length >= t.length ? t : e, i = !0, a = 0;
                a < n.length;
                a++
              )
                -1 === r.indexOf(n[a]) && (i = !1)
              return i
            })(e.mods, l)
          )
        })
      }
    })
  }
  function Rd(e, t, n, r) {
    var i
    if (t.element === r && (t.scope === n || 'all' === t.scope)) {
      for (var a in ((i = t.mods.length > 0), gd))
        Object.prototype.hasOwnProperty.call(gd, a) &&
          ((!gd[a] && t.mods.indexOf(+a) > -1) || (gd[a] && -1 === t.mods.indexOf(+a))) &&
          (i = !1)
      ;((0 !== t.mods.length || gd[16] || gd[18] || gd[17] || gd[91]) && !i && '*' !== t.shortcut) ||
        (!1 === t.method(e, t) &&
          (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
          e.stopPropagation && e.stopPropagation(),
          e.cancelBubble && (e.cancelBubble = !0)))
    }
  }
  function Nd(e, t) {
    var n = bd['*'],
      r = e.keyCode || e.which || e.charCode
    if (Dd.filter.call(this, e)) {
      if (
        ((93 !== r && 224 !== r) || (r = 91),
        -1 === wd.indexOf(r) && 229 !== r && wd.push(r),
        ['ctrlKey', 'altKey', 'shiftKey', 'metaKey'].forEach(function (t) {
          var n = yd[t]
          e[t] && -1 === wd.indexOf(n)
            ? wd.push(n)
            : !e[t] && wd.indexOf(n) > -1
              ? wd.splice(wd.indexOf(n), 1)
              : 'metaKey' === t &&
                e[t] &&
                3 === wd.length &&
                (e.ctrlKey || e.shiftKey || e.altKey || (wd = wd.slice(wd.indexOf(n))))
        }),
        r in gd)
      ) {
        for (var i in ((gd[r] = !0), vd)) vd[i] === r && (Dd[i] = !0)
        if (!n) return
      }
      for (var a in gd) Object.prototype.hasOwnProperty.call(gd, a) && (gd[a] = e[yd[a]])
      e.getModifierState &&
        (!e.altKey || e.ctrlKey) &&
        e.getModifierState('AltGraph') &&
        (-1 === wd.indexOf(17) && wd.push(17), -1 === wd.indexOf(18) && wd.push(18), (gd[17] = !0), (gd[18] = !0))
      var o = Od()
      if (n)
        for (var s = 0; s < n.length; s++)
          n[s].scope === o &&
            (('keydown' === e.type && n[s].keydown) || ('keyup' === e.type && n[s].keyup)) &&
            Rd(e, n[s], o, t)
      if (r in bd)
        for (var l = 0; l < bd[r].length; l++)
          if ((('keydown' === e.type && bd[r][l].keydown) || ('keyup' === e.type && bd[r][l].keyup)) && bd[r][l].key) {
            for (var u = bd[r][l], c = u.splitKey, f = u.key.split(c), d = [], p = 0; p < f.length; p++)
              d.push(Td(f[p]))
            d.sort().join('') === wd.sort().join('') && Rd(e, u, o, t)
          }
    }
  }
  function Dd(e, t, n) {
    wd = []
    var r = hd(e),
      i = [],
      a = 'all',
      o = document,
      s = 0,
      l = !1,
      u = !0,
      c = '+',
      f = !1
    for (
      void 0 === n && 'function' == typeof t && (n = t),
        '[object Object]' === Object.prototype.toString.call(t) &&
          (t.scope && (a = t.scope),
          t.element && (o = t.element),
          t.keyup && (l = t.keyup),
          void 0 !== t.keydown && (u = t.keydown),
          void 0 !== t.capture && (f = t.capture),
          'string' == typeof t.splitKey && (c = t.splitKey)),
        'string' == typeof t && (a = t);
      s < r.length;
      s++
    )
      ((i = []),
        (e = r[s].split(c)).length > 1 && (i = pd(vd, e)),
        (e = '*' === (e = e[e.length - 1]) ? '*' : Td(e)) in bd || (bd[e] = []),
        bd[e].push({
          keyup: l,
          keydown: u,
          scope: a,
          mods: i,
          shortcut: r[s],
          method: n,
          key: r[s],
          splitKey: c,
          element: o,
        }))
    void 0 !== o &&
      !(function (e) {
        return Sd.indexOf(e) > -1
      })(o) &&
      window &&
      (Sd.push(o),
      dd(
        o,
        'keydown',
        function (e) {
          Nd(e, o)
        },
        f,
      ),
      _d ||
        ((_d = !0),
        dd(
          window,
          'focus',
          function () {
            wd = []
          },
          f,
        )),
      dd(
        o,
        'keyup',
        function (e) {
          ;(Nd(e, o),
            (function (e) {
              var t = e.keyCode || e.which || e.charCode,
                n = wd.indexOf(t)
              if (
                (n >= 0 && wd.splice(n, 1),
                e.key && 'meta' === e.key.toLowerCase() && wd.splice(0, wd.length),
                (93 !== t && 224 !== t) || (t = 91),
                t in gd)
              )
                for (var r in ((gd[t] = !1), vd)) vd[r] === t && (Dd[r] = !1)
            })(e))
        },
        f,
      ))
  }
  var Id = {
    setScope: xd,
    getScope: Od,
    deleteScope: function (e, t) {
      var n, r
      for (var i in (e || (e = Od()), bd))
        if (Object.prototype.hasOwnProperty.call(bd, i))
          for (n = bd[i], r = 0; r < n.length; ) n[r].scope === e ? n.splice(r, 1) : r++
      Od() === e && xd(t || 'all')
    },
    getPressedKeyCodes: function () {
      return wd.slice(0)
    },
    isPressed: function (e) {
      return ('string' == typeof e && (e = Td(e)), -1 !== wd.indexOf(e))
    },
    filter: function (e) {
      var t = e.target || e.srcElement,
        n = t.tagName,
        r = !0
      return (
        (!t.isContentEditable && (('INPUT' !== n && 'TEXTAREA' !== n && 'SELECT' !== n) || t.readOnly)) || (r = !1),
        r
      )
    },
    trigger: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'all'
      Object.keys(bd).forEach(function (n) {
        var r = bd[n].find(function (n) {
          return n.scope === t && n.shortcut === e
        })
        r && r.method && r.method()
      })
    },
    unbind: function (e) {
      if (void 0 === e)
        Object.keys(bd).forEach(function (e) {
          return delete bd[e]
        })
      else if (Array.isArray(e))
        e.forEach(function (e) {
          e.key && Cd(e)
        })
      else if ('object' == typeof e) e.key && Cd(e)
      else if ('string' == typeof e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r]
        var i = n[0],
          a = n[1]
        ;('function' == typeof i && ((a = i), (i = '')), Cd({ key: e, scope: i, method: a, splitKey: '+' }))
      }
    },
    keyMap: md,
    modifier: vd,
    modifierMap: yd,
  }
  for (var Pd in Id) Object.prototype.hasOwnProperty.call(Id, Pd) && (Dd[Pd] = Id[Pd])
  if ('undefined' != typeof window) {
    var Fd = window.hotkeys
    ;((Dd.noConflict = function (e) {
      return (e && window.hotkeys === Dd && (window.hotkeys = Fd), Dd)
    }),
      (window.hotkeys = Dd))
  }
  Dd.filter = function () {
    return !0
  }
  var Ad = function (e, t) {
    var n = e.target,
      r = n && n.tagName
    return Boolean(r && t && t.includes(r))
  }
  function Md(e, t, n, r) {
    n instanceof Array && ((r = n), (n = void 0))
    var i = n || {},
      a = i.enableOnTags,
      o = i.filter,
      s = i.keyup,
      l = i.keydown,
      u = i.filterPreventDefault,
      c = void 0 === u || u,
      f = i.enabled,
      d = void 0 === f || f,
      p = i.enableOnContentEditable,
      m = void 0 !== p && p,
      v = h.useRef(null),
      y = h.useCallback(
        function (e, n) {
          var r, i
          return o && !o(e)
            ? !c
            : !!(
                (Ad(e, ['INPUT', 'TEXTAREA', 'SELECT']) && !Ad(e, a)) ||
                (null != (r = e.target) && r.isContentEditable && !m)
              ) ||
                (!!(
                  null === v.current ||
                  document.activeElement === v.current ||
                  (null != (i = v.current) && i.contains(document.activeElement))
                ) &&
                  (t(e, n), !0))
        },
        r ? [v, a, o].concat(r) : [v, a, o],
      )
    return (
      h.useEffect(
        function () {
          if (d)
            return (
              s && !0 !== l && (n.keydown = !1),
              Dd(e, n || {}, y),
              function () {
                return Dd.unbind(e, y)
              }
            )
          Dd.unbind(e, y)
        },
        [y, e, d],
      ),
      v
    )
  }
  Dd.isPressed
  var Ld = (e, t, n, r) => {
      const { loading: i, data: a } = js(e, { fetchPolicy: 'cache-and-network', nextFetchPolicy: 'cache-first', ...r }),
        o = h.useMemo(() => t(a), [a]),
        s = h.useMemo(() => n(o), [o]),
        l = h.useMemo(
          () =>
            ((e, t) => {
              const n = !0 === t,
                r = null == e || 0 === e.length
              return {
                isLoading: n,
                isEmpty: r,
                isInitializing: !0 === r && !0 === t,
                isUpdating: !1 === r && !0 === t,
              }
            })(o, i),
          [o, i],
        )
      return { value: s, status: l }
    },
    qd = ds`
  fragment domainFields on Domain {
  	id
  	title
  }
`
  const zd = ds`
  query fetchDomains {
  	domains {
  		...domainFields
  	}
  }

  ${qd}
`
  var jd = () =>
    Ld(
      zd,
      (e) => e?.domains,
      (e = []) => e,
      { fetchPolicy: 'cache-first', nextFetchPolicy: 'cache-first' },
    )
  const Vd = Symbol(),
    Qd = Symbol(),
    $d = (e) =>
      Math.max(
        10,
        Math.min(e.body.width - e.element.width - 10, e.target.absolute.x + e.target.width - e.element.width),
      ),
    Ud = (e) => e.target.absolute.y + e.target.height + 10,
    Bd = (e) => e.find((e) => !0 === e.active),
    Wd = (e) =>
      h.createElement('div', {
        className: Cf({
          'header__spinner': !0,
          'header__spinner--white': 'white' === e.color,
          'header__spinner--primary': 'primary' === e.color,
          'header__spinner--visible': !0 === e.loading,
        }),
      }),
    Kd = (e) =>
      h.createElement(
        'div',
        { className: 'header__logo' },
        h.createElement(Wd, { color: 'white', loading: e.loading }),
        h.createElement(Wd, { color: 'primary', loading: e.loading }),
      ),
    Hd = (e) =>
      h.createElement(
        'button',
        {
          className: Cf({
            'header__button': !0,
            'active': !0 === e.active,
            'link': !0,
            'color-white': !0 === e.active,
          }),
          onClick: e.onClick,
        },
        e.children,
      ),
    Gd = (e) => {
      const t = h.useRef(),
        [n, r] = h.useState(!1),
        i = () => r(!1),
        a = null != Bd(e.items)
      return h.createElement(
        h.Fragment,
        {},
        h.createElement(
          'button',
          {
            ref: t,
            className: Cf({
              'header__button': !0,
              'hovered': !0 === n,
              'active': !0 === a,
              'link': !0,
              'color-white': !0 === a,
            }),
            onClick: () => r(!n),
          },
          e.children,
          h.createElement(td, { className: 'header__arrow' }),
        ),
        !0 === n && h.createElement(ed, { targetRef: t, x: $d, y: Ud, items: e.items, onItemClick: i, onAwayClick: i }),
      )
    },
    Yd = (e) =>
      h.createElement(
        'header',
        { className: 'header' },
        h.createElement(Kd, { loading: e.loading }),
        h.createElement(
          'nav',
          { className: 'header__nav' },
          h.createElement(
            'div',
            { className: 'header__buttons' },
            e.items.map((e, t) =>
              e.type === Vd
                ? h.createElement(Hd, { key: t, ...e }, e.label)
                : e.type === Qd
                  ? h.createElement(Gd, { key: t, ...e }, e.label(Bd(e.items)))
                  : void 0,
            ),
          ),
        ),
      )
  Yd.propTypes = { loading: Ef.bool.isRequired, items: Ef.arrayOf(Ef.object).isRequired }
  const Jd = (e, t, n, r) => ({ type: Vd, onClick: () => r(t), active: n === t, label: e }),
    Xd = (e, t) => ({ type: Qd, items: t, label: e }),
    Zd = (e, t, n, r, i) => ({ type: Gf, onClick: () => r(t), active: n === t, label: e, keyHint: i }),
    ep = () => ({ type: Yf }),
    tp = 'modals_views',
    np = 'modals_durations',
    rp = 'modals_domain_add',
    ip = 'modals_domain_edit',
    ap = 'modals_event_add',
    op = 'modals_event_edit',
    sp = 'modals_permanent_token_add',
    lp = 'modals_permanent_token_edit'
  var up = { current: Ef.bool.isRequired, closeModal: Ef.func.isRequired }
  const cp = (e) => (
    Md('esc', e.closeModal, { filter: () => !0 === e.current, enableOnTags: ['INPUT', 'SELECT', 'TEXTAREA'] }),
    h.createElement(
      'div',
      { className: Cf({ modal: !0, visible: !0 === e.visible }) },
      h.createElement('div', { className: 'modal__inner' }, e.children),
    )
  )
  cp.propTypes = { ...up, visible: Ef.bool.isRequired, children: Ef.node.isRequired }
  const fp = () =>
      h.createElement('div', { className: 'loader' }, h.createElement('div', { className: 'loader__circle' })),
    dp = () =>
      h.createElement('div', { className: 'updater' }, h.createElement('div', { className: 'updater__circle' })),
    pp = (e) =>
      h.createElement('div', { className: 'status' }, null != e.icon && h.createElement(e.icon, {}), e.children)
  pp.propTypes = { icon: Ef.oneOf([fp, dp]), children: Ef.node.isRequired }
  const hp = (e) =>
    h.createElement(
      'svg',
      { viewBox: '0 0 24 24', className: e.className },
      h.createElement('path', {
        d: 'M14.601 21.5c0 1.38-1.116 2.5-2.499 2.5-1.378 0-2.499-1.12-2.499-2.5s1.121-2.5 2.499-2.5c1.383 0 2.499 1.119 2.499 2.5zm-2.42-21.5c-4.029 0-7.06 2.693-7.06 8h3.955c0-2.304.906-4.189 3.024-4.189 1.247 0 2.57.828 2.684 2.411.123 1.666-.767 2.511-1.892 3.582-2.924 2.78-2.816 4.049-2.816 7.196h3.943c0-1.452-.157-2.508 1.838-4.659 1.331-1.436 2.986-3.222 3.021-5.943.047-3.963-2.751-6.398-6.697-6.398z',
      }),
    )
  hp.propTypes = { className: Ef.string }
  const mp = (e) =>
      Math.max(
        10,
        Math.min(e.body.width - e.element.width - 10, e.target.relative.x + e.target.width / 2 - e.element.width / 2),
      ),
    vp = (e) => e.target.relative.y - e.element.height - 10,
    yp = (e) => {
      const t = h.useRef(),
        [n, r] = h.useState(!1),
        i = () => r(!1),
        a = [{ type: Hf, children: e.children }]
      return h.createElement(
        'button',
        { ref: t, type: 'button', className: 'link tooltip', onClick: () => r(!n) },
        h.createElement(hp, { className: 'tooltip__icon' }),
        !0 === n &&
          h.createElement(
            ed,
            { targetRef: t, fixed: !0, x: mp, y: vp, tooltip: !0, items: a, onItemClick: i, onAwayClick: i },
            e.children,
          ),
      )
    }
  yp.propTypes = { children: Ef.node.isRequired }
  const gp = (e) =>
    !0 === e.isInitializing
      ? h.createElement(pp, { icon: fp }, 'Loading')
      : !0 === e.isUpdating
        ? h.createElement(pp, { icon: dp }, 'Updating')
        : !0 === e.isEmpty
          ? h.createElement(
              pp,
              {},
              'No data',
              h.createElement(
                yp,
                {},
                'There is either no data available or collecting detailed data is disabled in ackee-tracker.',
              ),
            )
          : h.createElement(pp, {}, e.children)
  gp.propTypes = {
    isEmpty: Ef.bool.isRequired,
    isInitializing: Ef.bool.isRequired,
    isUpdating: Ef.bool.isRequired,
    children: Ef.node.isRequired,
  }
  var bp = (e) =>
      't.co' === e.hostname ? new URL(`https://twitter.com/search?q=${encodeURIComponent(e.origin + e.pathname)}`) : e,
    Ep = (e) => (t, n) => t + n[e]
  const wp = (e) => {
      const t = null != e.url,
        n = !0 === t ? 'a' : 'div',
        r = !0 === t ? { href: bp(e.url).href, target: '_blank', rel: 'noopener' } : {}
      return h.createElement(
        n,
        { className: 'flexList__row', ...r },
        h.createElement(
          'div',
          {
            className:
              'flexList__column flexList__column--text-adjustment flexList__column--fixed-width flexList__column--spacing-left flexList__column--spacing-right',
            style: { '--width': `${e.counterWidth}px` },
          },
          h.createElement('div', {
            className: 'flexList__bar flexList__bar--counter',
            style: { '--width': `${e.barWidth}%` },
          }),
          h.createElement('span', { className: 'color-primary' }, `${e.count}`),
        ),
        h.createElement(
          'div',
          { className: 'flexList__column flexList__column--text-adjustment' },
          h.createElement('span', { className: 'flexList__truncated' }, e.text),
        ),
      )
    },
    _p = (e) => {
      const t = e.items.reduce(Ep('count'), 0),
        n = ({ count: e }) => (e / t) * 100,
        r = e.items.reduce((t, n) => {
          const r = e.formatter(n.count),
            i = 9 * String(r).length
          return i > t ? i : t
        }, 0)
      return h.createElement(
        'div',
        { className: 'flexList' },
        h.createElement(
          'div',
          { className: 'flexList__inner' },
          e.items.map((t, i) =>
            h.createElement(wp, {
              key: t.text + i,
              barWidth: n(t),
              counterWidth: r,
              count: e.formatter(t.count),
              url: t.url,
              text: t.text,
            }),
          ),
        ),
      )
    }
  _p.propTypes = {
    items: Ef.arrayOf(Ef.shape({ url: Ef.object, text: Ef.string.isRequired, count: Ef.number.isRequired })).isRequired,
    formatter: Ef.func.isRequired,
  }
  var kp = ds`
  fragment viewsField on DomainStatistics {
  	views(interval: $interval, type: $type, limit: $limit) {
  		id
  		count
  	}
  }
`,
    Sp = (e) => Array.from({ length: e }).fill(),
    Tp = (e) => (t, n) => {
      const r = String(t[e]),
        i = String(n[e])
      return r.localeCompare(i, 'en', { numeric: !0 })
    }
  const xp = ds`
  query fetchCombinedViews($interval: Interval!, $type: ViewType!, $limit: Int) {
  	domains {
  		id
  		title
  		statistics {
  			id
  			...viewsField
  		}
  	}
  }

  ${kp}
`
  var Op = (e) =>
      Ld(
        xp,
        (e) => e?.domains,
        (t) =>
          ((e = [], t) => {
            const n = Sp(t).map(() => [])
            return e.reduce((e, t) => {
              for (const [n, r] of t.statistics.views.entries()) {
                const i = e[n],
                  a = { text: t.title, count: r.count }
                e[n] = [...i, a].toSorted(Tp('count')).toReversed()
              }
              return e
            }, n)
          })(t, e.limit),
        { variables: e },
      ),
    Cp = (e) => {
      switch (e) {
        case 0:
          return 'Today'
        case 1:
          return 'Yesterday'
        default:
          return `${e} days ago`
      }
    }
  function Rp(e) {
    return (
      (Rp =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e
            }
          : function (e) {
              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                ? 'symbol'
                : typeof e
            }),
      Rp(e)
    )
  }
  function Np(e) {
    if (null === e || !0 === e || !1 === e) return NaN
    var t = Number(e)
    return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t)
  }
  function Dp(e, t) {
    if (t.length < e)
      throw new TypeError(e + ' argument' + (e > 1 ? 's' : '') + ' required, but only ' + t.length + ' present')
  }
  function Ip(e, t) {
    Dp(2, arguments)
    var n = (function (e) {
        Dp(1, arguments)
        var t = Object.prototype.toString.call(e)
        return e instanceof Date || ('object' === Rp(e) && '[object Date]' === t)
          ? new Date(e.getTime())
          : 'number' == typeof e || '[object Number]' === t
            ? new Date(e)
            : (('string' != typeof e && '[object String]' !== t) ||
                'undefined' == typeof console ||
                (console.warn(
                  "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments",
                ),
                console.warn(new Error().stack)),
              new Date(NaN))
      })(e),
      r = Np(t)
    if (isNaN(r)) return new Date(NaN)
    if (!r) return n
    var i = n.getDate(),
      a = new Date(n.getTime())
    return (
      a.setMonth(n.getMonth() + r + 1, 0),
      i >= a.getDate() ? a : (n.setFullYear(a.getFullYear(), a.getMonth(), i), n)
    )
  }
  function Pp(e, t) {
    return (
      Dp(2, arguments),
      (function (e, t) {
        return (Dp(2, arguments), Ip(e, 12 * Np(t)))
      })(e, -Np(t))
    )
  }
  var Fp = (e) => {
      switch (e) {
        case 0:
          return 'This month'
        case 1:
          return 'Last month'
        default:
          return (function (e, t) {
            return (Dp(2, arguments), Ip(e, -Np(t)))
          })(new Date(), e).toLocaleString('en-US', { month: 'long', year: 'numeric' })
      }
    },
    Ap = (e) => {
      switch (e) {
        case 0:
          return 'This year'
        case 1:
          return 'Last year'
        default:
          return Pp(new Date(), e).getFullYear()
      }
    },
    Mp = (e) => {
      switch (e) {
        case Dc:
          return Cp
        case Ic:
          return Fp
        case Pc:
          return Ap
        default:
          throw new Error(`Unknown interval '${e}'`)
      }
    },
    Lp = (e) => Number.parseFloat(e).toFixed(2).replace('.00', '') + 'x'
  const qp = (e) => {
    const { value: t, status: n } = Op({ interval: e.interval, type: e.type, limit: e.limit }),
      r = { [Fc]: 'Site Views', [Ac]: 'Page Views' }[e.type]
    return h.createElement(
      'div',
      { className: 'card' },
      h.createElement(
        'div',
        { className: 'card__inner' },
        h.createElement(Rf, { type: 'h2', size: 'medium' }, r),
        h.createElement(Nf, { type: 'div', spacing: !1 }, h.createElement(gp, n, Mp(e.interval)(e.index))),
        h.createElement(_p, { items: t[e.index], formatter: Lp }),
      ),
      h.createElement(
        'div',
        { className: 'card__footer' },
        h.createElement(
          'button',
          { type: 'button', className: 'card__button card__button--primary link', onClick: e.closeModal },
          'Close',
        ),
      ),
    )
  }
  qp.propTypes = {
    ...up,
    index: Ef.number.isRequired,
    interval: Ef.string.isRequired,
    type: Ef.string.isRequired,
    limit: Ef.number.isRequired,
  }
  var zp = ds`
  fragment durationsField on DomainStatistics {
  	durations(interval: $interval, limit: $limit) {
  		id
  		count
  	}
  }
`
  const jp = ds`
  query fetchCombinedDurations($interval: Interval!, $limit: Int) {
  	domains {
  		id
  		title
  		statistics {
  			id
  			...durationsField
  		}
  	}
  }

  ${zp}
`
  var Vp = (e) =>
    Ld(
      jp,
      (e) => e?.domains,
      (t) =>
        ((e = [], t) => {
          const n = Sp(t).map(() => [])
          return e.reduce((e, t) => {
            for (const [n, r] of t.statistics.durations.entries()) {
              const i = e[n],
                a = { text: t.title, count: r.count }
              e[n] = [...i, a].toSorted(Tp('count')).toReversed()
            }
            return e
          }, n)
        })(t, e.limit),
      { variables: e },
    )
  const Qp = (e) => ((e) => e.replace(/^0/, ''))(((e) => e.replace(/(:00:00|:00)$/, ''))(e)),
    $p = function () {
      return `${this.value}${this.unit}`
    }
  var Up = (e) => {
    const t = new Date(e).toISOString().slice(11, 19),
      n = null == t.match(/^00:00:/),
      r = null == t.match(/^00:/)
    return !1 === n
      ? { value: Qp(t.slice(6)), unit: 's', toString: $p }
      : !1 === r
        ? { value: Qp(t.slice(3)), unit: 'm', toString: $p }
        : { value: Qp(t), unit: 'h', toString: $p }
  }
  const Bp = (e) => {
    const { value: t, status: n } = Vp({ interval: e.interval, limit: e.limit })
    return h.createElement(
      'div',
      { className: 'card' },
      h.createElement(
        'div',
        { className: 'card__inner' },
        h.createElement(Rf, { type: 'h2', size: 'medium' }, 'Durations'),
        h.createElement(Nf, { type: 'div', spacing: !1 }, h.createElement(gp, n, Mp(e.interval)(e.index))),
        h.createElement(_p, { items: t[e.index], formatter: Up }),
      ),
      h.createElement(
        'div',
        { className: 'card__footer' },
        h.createElement(
          'button',
          { type: 'button', className: 'card__button card__button--primary link', onClick: e.closeModal },
          'Close',
        ),
      ),
    )
  }
  Bp.propTypes = { ...up, index: Ef.number.isRequired, interval: Ef.string.isRequired, limit: Ef.number.isRequired }
  const Wp = (e) =>
    h.createElement(
      'label',
      { className: Cf({ 'label': !0, 'label--no-spacing': !1 === e.spacing }), htmlFor: e.htmlFor },
      e.children,
    )
  Wp.propTypes = { spacing: Ef.bool, htmlFor: Ef.string.isRequired, children: Ef.node.isRequired }
  var Kp =
    (e, t) =>
    (n = [], { readField: r }) =>
      [...n, e]
        .map((e) => ({ ref: e, [t]: r(t, e) }))
        .toSorted(Tp(t))
        .map((e) => e.ref)
  const Hp = ds`
  mutation createDomain($input: CreateDomainInput!) {
  	createDomain(input: $input) {
  		payload {
  			...domainFields
  		}
  	}
  }

  ${qd}
`,
    Gp = (e, t) => {
      const n = t.data.createDomain.payload,
        r = qd
      e.modify({
        fields: {
          domains: (...t) => {
            const i = e.writeFragment({ data: n, fragment: r })
            return Kp(i, 'title')(...t)
          },
        },
      })
    }
  const Yp = (e) => {
    const t = (() => {
        const [e, { loading: t, error: n }] = tl(Hp)
        return { mutate: (t) => e({ update: Gp, ...t }), loading: t, error: n }
      })(),
      n = !0 === t.loading,
      [r, i] = Lf({ title: '' }),
      a = gc()
    return h.createElement(
      'form',
      {
        className: 'card',
        onSubmit: async (n) => {
          ;(n.preventDefault(), await t.mutate({ variables: { input: r } }), e.closeModal())
        },
      },
      h.createElement(
        'div',
        { className: 'card__inner' },
        h.createElement(Sf, { size: 0.5 }),
        h.createElement(Wp, { htmlFor: a }, 'Domain title'),
        h.createElement(Ff, {
          type: 'text',
          id: a,
          required: !0,
          disabled: !0 === n,
          focused: !0,
          placeholder: 'Domain title',
          value: r.title,
          onChange: i('title'),
        }),
      ),
      h.createElement(
        'div',
        { className: 'card__footer' },
        h.createElement('button', { type: 'button', className: 'card__button link', onClick: e.closeModal }, 'Close'),
        h.createElement('div', { className: 'card__separator' }),
        h.createElement(
          'button',
          { className: 'card__button card__button--primary link color-white', disabled: !0 === n },
          !0 === n ? h.createElement(Af) : 'Add',
        ),
      ),
    )
  }
  Yp.propTypes = { ...up }
  const Jp = ds`
  mutation updateDomain($id: ID!, $input: UpdateDomainInput!) {
  	updateDomain(id: $id, input: $input) {
  		payload {
  			...domainFields
  		}
  	}
  }

  ${qd}
`
  var Xp =
    (e) =>
    (t = [], { readField: n }) =>
      t.filter((t) => e !== n('id', t))
  const Zp = ds`
  mutation deleteDomain($id: ID!) {
  	deleteDomain(id: $id) {
  		success
  	}
  }
`,
    eh = (e) => (t, n) => {
      !1 !== n.data.deleteDomain.success && t.modify({ fields: { domains: Xp(e) } })
    }
  const th = (e) => {
    const t = ((e) => {
        const [t, { loading: n, error: r }] = tl(Jp, { variables: { id: e } })
        return {
          mutate: (n) =>
            t({
              optimisticResponse: {
                updateDomain: {
                  payload: { id: e, title: n.variables.input.title, __typename: 'Domain' },
                  __typename: 'UpdateDomainPayload',
                },
              },
              ...n,
            }),
          loading: n,
          error: r,
        }
      })(e.id),
      n = ((e) => {
        const [t, { loading: n, error: r }] = tl(Zp, { variables: { id: e } })
        return {
          mutate: (n) =>
            t({
              update: eh(e),
              optimisticResponse: { deleteDomain: { success: !0, __typename: 'DeleteDomainPayload' } },
              ...n,
            }),
          loading: n,
          error: r,
        }
      })(e.id),
      [r, i] = Lf({ title: e.title }),
      a = gc(),
      o = gc(),
      s = gc(),
      l = globalThis.env.customTracker.url || '/tracker.js',
      u = new URL(l, location.href).href,
      c = location.origin
    return h.createElement(
      'form',
      {
        className: 'card',
        onSubmit: (n) => {
          ;(n.preventDefault(), t.mutate({ variables: { input: r } }), e.closeModal())
        },
      },
      h.createElement(
        'div',
        { className: 'card__inner' },
        h.createElement(Sf, { size: 0.5 }),
        h.createElement(Wp, { htmlFor: a }, 'Domain title'),
        h.createElement(Ff, {
          type: 'text',
          id: a,
          required: !0,
          focused: !0,
          placeholder: 'Domain title',
          value: r.title,
          onChange: i('title'),
        }),
        h.createElement(Wp, { htmlFor: o }, 'Domain id'),
        h.createElement(Ff, {
          type: 'text',
          id: o,
          readOnly: !0,
          placeholder: 'Domain id',
          value: e.id,
          copyOnFocus: !0,
        }),
        h.createElement(Wp, { htmlFor: s }, 'Embed code'),
        h.createElement(kf, {
          id: s,
          readOnly: !0,
          rows: 4,
          value: `<script async src="${u}" data-ackee-server="${c}" data-ackee-domain-id="${e.id}"><\/script>`,
          copyOnFocus: !0,
        }),
      ),
      h.createElement(
        'div',
        { className: 'card__footer' },
        h.createElement('button', { type: 'button', className: 'card__button link', onClick: e.closeModal }, 'Close'),
        h.createElement('div', { className: 'card__separator' }),
        h.createElement(
          'button',
          {
            type: 'button',
            className: 'card__button link color-destructive',
            onClick: (t) => {
              t.preventDefault()
              !1 !==
                confirm(`Are you sure you want to delete the domain "${e.title}"? This action cannot be undone.`) &&
                (n.mutate(), e.closeModal())
            },
          },
          'Delete',
        ),
        h.createElement('div', { className: 'card__separator' }),
        h.createElement('button', { className: 'card__button card__button--primary link color-white' }, 'Rename'),
      ),
    )
  }
  th.propTypes = { ...up, id: Ef.string.isRequired, title: Ef.string.isRequired }
  const nh = 'TOTAL_CHART',
    rh = 'AVERAGE_CHART',
    ih = 'TOTAL_LIST',
    ah = 'AVERAGE_LIST',
    oh = (e) =>
      h.createElement(
        'select',
        {
          className: 'select',
          id: e.id,
          required: e.required,
          disabled: e.disabled,
          value: e.value,
          onChange: e.onChange,
        },
        e.items.map((e, t) => h.createElement('option', { key: e.value + t, value: e.value }, e.label)),
      )
  oh.propTypes = {
    id: Ef.string,
    required: Ef.bool,
    disabled: Ef.bool,
    value: Ef.string,
    onChange: Ef.func.isRequired,
    items: Ef.arrayOf(Ef.shape({ value: Ef.string.isRequired, label: Ef.string.isRequired })).isRequired,
  }
  var sh = ds`
  fragment eventFields on Event {
  	id
  	title
  	type
  }
`
  const lh = ds`
  mutation createEvent($input: CreateEventInput!) {
  	createEvent(input: $input) {
  		payload {
  			...eventFields
  		}
  	}
  }

  ${sh}
`,
    uh = (e, t) => {
      const n = t.data.createEvent.payload,
        r = sh
      e.modify({
        fields: {
          events: (...t) => {
            const i = e.writeFragment({ data: n, fragment: r })
            return Kp(i, 'title')(...t)
          },
        },
      })
    }
  const ch = (e) => {
    const t = (() => {
        const [e, { loading: t, error: n }] = tl(lh)
        return { mutate: (t) => e({ update: uh, ...t }), loading: t, error: n }
      })(),
      n = !0 === t.loading,
      [r, i] = Lf({ title: '', type: nh }),
      a = gc(),
      o = gc()
    return h.createElement(
      'form',
      {
        className: 'card',
        onSubmit: async (n) => {
          ;(n.preventDefault(), await t.mutate({ variables: { input: r } }), e.closeModal())
        },
      },
      h.createElement(
        'div',
        { className: 'card__inner' },
        h.createElement(Sf, { size: 0.5 }),
        h.createElement(Wp, { htmlFor: a }, 'Event title'),
        h.createElement(Ff, {
          type: 'text',
          id: a,
          required: !0,
          disabled: !0 === n,
          focused: !0,
          placeholder: 'Event title',
          value: r.title,
          onChange: i('title'),
        }),
        h.createElement(
          'div',
          { className: 'card__group' },
          h.createElement(Wp, { spacing: !1, htmlFor: o }, 'Event type'),
          h.createElement(
            yp,
            {},
            'Specifies how the aggregated data will be displayed in the UI. Can be changed at any time.',
          ),
        ),
        h.createElement(oh, {
          id: o,
          required: !0,
          disabled: !0 === n,
          value: r.type,
          items: [
            { value: nh, label: 'Chart with total sums' },
            { value: rh, label: 'Chart with average values' },
            { value: ih, label: 'List with total sums' },
            { value: ah, label: 'List with average values' },
          ],
          onChange: i('type'),
        }),
      ),
      h.createElement(
        'div',
        { className: 'card__footer' },
        h.createElement('button', { type: 'button', className: 'card__button link', onClick: e.closeModal }, 'Close'),
        h.createElement('div', { className: 'card__separator' }),
        h.createElement(
          'button',
          { className: 'card__button card__button--primary link color-white', disabled: !0 === n },
          !0 === n ? h.createElement(Af) : 'Add',
        ),
      ),
    )
  }
  ch.propTypes = { ...up }
  const fh = ds`
  mutation updateEvent($id: ID!, $input: UpdateEventInput!) {
  	updateEvent(id: $id, input: $input) {
  		payload {
  			...eventFields
  		}
  	}
  }

  ${sh}
`
  const dh = ds`
  mutation deleteEvent($id: ID!) {
  	deleteEvent(id: $id) {
  		success
  	}
  }
`,
    ph = (e) => (t, n) => {
      !1 !== n.data.deleteEvent.success && t.modify({ fields: { events: Xp(e) } })
    }
  const hh = (e) => {
    const t = ((e) => {
        const [t, { loading: n, error: r }] = tl(fh, { variables: { id: e } })
        return {
          mutate: (n) =>
            t({
              optimisticResponse: {
                updateEvent: {
                  payload: { id: e, title: n.variables.input.title, type: n.variables.input.type, __typename: 'Event' },
                  __typename: 'UpdateEventPayload',
                },
              },
              ...n,
            }),
          loading: n,
          error: r,
        }
      })(e.id),
      n = ((e) => {
        const [t, { loading: n, error: r }] = tl(dh, { variables: { id: e } })
        return {
          mutate: (n) =>
            t({
              update: ph(e),
              optimisticResponse: { deleteEvent: { success: !0, __typename: 'DeleteEventPayload' } },
              ...n,
            }),
          loading: n,
          error: r,
        }
      })(e.id),
      [r, i] = Lf({ title: e.title, type: e.type }),
      a = gc(),
      o = gc(),
      s = gc(),
      l = gc()
    return h.createElement(
      'form',
      {
        className: 'card',
        onSubmit: (n) => {
          ;(n.preventDefault(), t.mutate({ variables: { input: r } }), e.closeModal())
        },
      },
      h.createElement(
        'div',
        { className: 'card__inner' },
        h.createElement(Sf, { size: 0.5 }),
        h.createElement(Wp, { htmlFor: a }, 'Event title'),
        h.createElement(Ff, {
          type: 'text',
          id: a,
          required: !0,
          focused: !0,
          placeholder: 'Event title',
          value: r.title,
          onChange: i('title'),
        }),
        h.createElement(
          'div',
          { className: 'card__group' },
          h.createElement(Wp, { spacing: !1, htmlFor: o }, 'Event type'),
          h.createElement(
            yp,
            {},
            'Specifies how the aggregated data will be displayed in the UI. Can be changed at any time.',
          ),
        ),
        h.createElement(oh, {
          id: o,
          required: !0,
          value: r.type,
          items: [
            { value: nh, label: 'Chart with total sums' },
            { value: rh, label: 'Chart with average values' },
            { value: ih, label: 'List with total sums' },
            { value: ah, label: 'List with average values' },
          ],
          onChange: i('type'),
        }),
        h.createElement(Wp, { htmlFor: s }, 'Event id'),
        h.createElement(Ff, {
          type: 'text',
          id: s,
          readOnly: !0,
          placeholder: 'Event id',
          value: e.id,
          copyOnFocus: !0,
        }),
        h.createElement(Wp, { htmlFor: l }, 'Usage example'),
        h.createElement(kf, {
          id: l,
          readOnly: !0,
          rows: 3,
          value: `ackeeTracker.action('${e.id}', { key: 'Click', value: 1 })`,
          copyOnFocus: !0,
        }),
      ),
      h.createElement(
        'div',
        { className: 'card__footer' },
        h.createElement('button', { type: 'button', className: 'card__button link', onClick: e.closeModal }, 'Close'),
        h.createElement('div', { className: 'card__separator' }),
        h.createElement(
          'button',
          {
            type: 'button',
            className: 'card__button link color-destructive',
            onClick: (t) => {
              t.preventDefault()
              !1 !== confirm(`Are you sure you want to delete the event "${e.title}"? This action cannot be undone.`) &&
                (n.mutate(), e.closeModal())
            },
          },
          'Delete',
        ),
        h.createElement('div', { className: 'card__separator' }),
        h.createElement('button', { className: 'card__button card__button--primary link color-white' }, 'Save'),
      ),
    )
  }
  hh.propTypes = { ...up, id: Ef.string.isRequired, title: Ef.string.isRequired }
  var mh = ds`
  fragment permanentTokenFields on PermanentToken {
  	id
  	title
  }
`
  const vh = ds`
  mutation createPermanentToken($input: CreatePermanentTokenInput!) {
  	createPermanentToken(input: $input) {
  		payload {
  			...permanentTokenFields
  		}
  	}
  }

  ${mh}
`,
    yh = (e, t) => {
      const n = t.data.createPermanentToken.payload,
        r = mh
      e.modify({
        fields: {
          permanentTokens: (...t) => {
            const i = e.writeFragment({ data: n, fragment: r })
            return Kp(i, 'title')(...t)
          },
        },
      })
    }
  const gh = (e) => {
    const t = (() => {
        const [e, { loading: t, error: n }] = tl(vh)
        return { mutate: (t) => e({ update: yh, ...t }), loading: t, error: n }
      })(),
      n = !0 === t.loading,
      [r, i] = Lf({ title: '' }),
      a = gc()
    return h.createElement(
      'form',
      {
        className: 'card',
        onSubmit: async (n) => {
          ;(n.preventDefault(), await t.mutate({ variables: { input: r } }), e.closeModal())
        },
      },
      h.createElement(
        'div',
        { className: 'card__inner' },
        h.createElement(Sf, { size: 0.5 }),
        h.createElement(Wp, { htmlFor: a }, 'Permanent token title'),
        h.createElement(Ff, {
          type: 'text',
          id: a,
          required: !0,
          disabled: !0 === n,
          focused: !0,
          placeholder: 'Permanent token title',
          value: r.title,
          onChange: i('title'),
        }),
      ),
      h.createElement(
        'div',
        { className: 'card__footer' },
        h.createElement('button', { type: 'button', className: 'card__button link', onClick: e.closeModal }, 'Close'),
        h.createElement('div', { className: 'card__separator ' }),
        h.createElement(
          'button',
          { className: 'card__button card__button--primary link color-white', disabled: !0 === n },
          !0 === n ? h.createElement(Af) : 'Add',
        ),
      ),
    )
  }
  gh.propTypes = { ...up }
  const bh = ds`
  mutation updatePermanentToken($id: ID!, $input: UpdatePermanentTokenInput!) {
  	updatePermanentToken(id: $id, input: $input) {
  		payload {
  			...permanentTokenFields
  		}
  	}
  }

  ${mh}
`
  const Eh = ds`
  mutation deletePermanentToken($id: ID!) {
  	deletePermanentToken(id: $id) {
  		success
  	}
  }
`,
    wh = (e) => (t, n) => {
      !1 !== n.data.deletePermanentToken.success && t.modify({ fields: { permanentTokens: Xp(e) } })
    }
  const _h = (e) => {
    const t = ((e) => {
        const [t, { loading: n, error: r }] = tl(bh, { variables: { id: e } })
        return {
          mutate: (n) =>
            t({
              optimisticResponse: {
                updatePermanentToken: {
                  payload: { id: e, title: n.variables.input.title, __typename: 'PermanentToken' },
                  __typename: 'UpdatePermanentTokenPayload',
                },
              },
              ...n,
            }),
          loading: n,
          error: r,
        }
      })(e.id),
      n = ((e) => {
        const [t, { loading: n, error: r }] = tl(Eh, { variables: { id: e } })
        return {
          mutate: (n) =>
            t({
              update: wh(e),
              optimisticResponse: { deletePermanentToken: { success: !0, __typename: 'DeletePermanentTokenPayload' } },
              ...n,
            }),
          loading: n,
          error: r,
        }
      })(e.id),
      [r, i] = Lf({ title: e.title }),
      a = gc(),
      o = gc()
    return h.createElement(
      'form',
      {
        className: 'card',
        onSubmit: (n) => {
          ;(n.preventDefault(), t.mutate({ variables: { input: r } }), e.closeModal())
        },
      },
      h.createElement(
        'div',
        { className: 'card__inner' },
        h.createElement(Sf, { size: 0.5 }),
        h.createElement(Wp, { htmlFor: a }, 'Permanent token title'),
        h.createElement(Ff, {
          type: 'text',
          id: a,
          required: !0,
          focused: !0,
          placeholder: 'Permanent token title',
          value: r.title,
          onChange: i('title'),
        }),
        h.createElement(Wp, { htmlFor: o }, 'Permanent token id'),
        h.createElement(Ff, {
          type: 'text',
          id: o,
          readOnly: !0,
          placeholder: 'Permanent token id',
          value: e.id,
          copyOnFocus: !0,
        }),
      ),
      h.createElement(
        'div',
        { className: 'card__footer' },
        h.createElement('button', { type: 'button', className: 'card__button link', onClick: e.closeModal }, 'Close'),
        h.createElement('div', { className: 'card__separator ' }),
        h.createElement(
          'button',
          {
            type: 'button',
            className: 'card__button link color-destructive',
            onClick: (t) => {
              t.preventDefault()
              !1 !==
                confirm(
                  `Are you sure you want to delete the permanent token "${e.title}"? This action cannot be undone.`,
                ) && (n.mutate(), e.closeModal())
            },
          },
          'Delete',
        ),
        h.createElement('div', { className: 'card__separator ' }),
        h.createElement('button', { className: 'card__button card__button--primary link color-white' }, 'Rename'),
      ),
    )
  }
  _h.propTypes = { ...up, id: Ef.string.isRequired, title: Ef.string.isRequired }
  const kh = { [tp]: qp, [np]: Bp, [rp]: Yp, [ip]: th, [ap]: ch, [op]: hh, [sp]: gh, [lp]: _h },
    Sh = (e) =>
      Object.entries(e.modals).map(([t, n], r, i) => {
        const a = { current: i.length - 1 === r, closeModal: e.removeModal.bind(null, t) }
        return h.createElement(cp, { key: t, visible: !0, ...a }, h.createElement(kh[n.type], { ...a, ...n.props }))
      })
  Sh.propTypes = { modals: Ef.object.isRequired, removeModal: Ef.func.isRequired }
  const Th = {
    activeVisitors: 0,
    averageViews: { count: 0, change: null },
    averageDuration: { count: 0, change: null },
    viewsToday: 0,
    viewsMonth: 0,
    viewsYear: 0,
  }
  var xh = (e = {}) => ({ ...Th, ...e })
  const Oh = ds`
  query fetchMergedActiveVisitors {
  	facts {
  		id
  		activeVisitors
  	}
  }
`
  var Ch = ds`
  fragment factsFields on Facts {
  	id
  	activeVisitors
  	averageViews {
  		count
  		change
  	}
  	averageDuration {
  		count
  		change
  	}
  	viewsToday
  	viewsMonth
  	viewsYear
  }
`
  const Rh = ds`
  query fetchMergedFacts {
  	facts {
  		...factsFields
  	}
  }

  ${Ch}
`
  var Nh = () => Ld(Rh, (e) => e?.facts, xh),
    Dh = (e = [], t) =>
      Sp(t).map((t, n) => {
        const r = e[n]
        return null == r ? 0 : r.count
      })
  const Ih = ds`
  query fetchMergedViews($interval: Interval!, $type: ViewType!, $limit: Int) {
  	statistics {
  		id
  		...viewsField
  	}
  }

  ${kp}
`
  var Ph = (e, t) =>
      Ld(
        Ih,
        (e) => e?.statistics.views,
        (t) => Dh(t, e.limit),
        { variables: e, ...t },
      ),
    Fh = (e = [], t) =>
      Sp(t).map((t, n) => {
        const r = e[n]
        return null == r ? 0 : r.count
      })
  const Ah = ds`
  query fetchMergedDurations($interval: Interval!, $limit: Int) {
  	statistics {
  		id
  		...durationsField
  	}
  }

  ${zp}
`
  var Mh = (e) =>
      Ld(
        Ah,
        (e) => e?.statistics.durations,
        (t) => Fh(t, e.limit),
        { variables: e },
      ),
    Lh = ds`
  fragment pagesField on DomainStatistics {
  	pages(sorting: $sorting, range: $range) {
  		id
  		value
  		count
  		created
  	}
  }
`,
    qh = (e = []) =>
      e.map((e) => ({
        url: new URL(e.value),
        text: new URL(e.value).href,
        count: e.count,
        date: null == e.created ? null : new Date(e.created),
      }))
  const zh = ds`
  query fetchMergedPages($sorting: Sorting!, $range: Range) {
  	statistics {
  		id
  		...pagesField
  	}
  }

  ${Lh}
`
  var jh,
    Vh,
    Qh = (e) => Ld(zh, (e) => e?.statistics.pages, qh, { variables: e }),
    $h = ds`
  fragment referrersField on DomainStatistics {
  	referrers(sorting: $sorting, type: $type, range: $range) {
  		id
  		value
  		count
  		created
  	}
  }
`
  var Uh = t(
      (function () {
        if (Vh) return jh
        ;((Vh = 1),
          (jh = function (r) {
            if ('string' != typeof r) return !1
            var i = r.match(e)
            if (!i) return !1
            var a = i[1]
            if (!a) return !1
            if (t.test(a) || n.test(a)) return !0
            return !1
          }))
        var e = /^(?:\w+:)?\/\/(\S+)$/,
          t = /^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/,
          n = /^[^\s\.]+\.\S{2,}$/
        return jh
      })(),
    ),
    Bh = (e = []) =>
      e.map((e) => ({
        url: !0 === Uh(e.value) ? new URL(e.value) : null,
        text: !0 === Uh(e.value) ? new URL(e.value).href : e.value,
        count: e.count,
        date: null == e.created ? null : new Date(e.created),
      }))
  const Wh = ds`
  query fetchMergedReferrers($sorting: Sorting!, $type: ReferrerType!, $range: Range) {
  	statistics {
  		id
  		...referrersField
  	}
  }

  ${$h}
`
  var Kh = (e) => Ld(Wh, (e) => e?.statistics.referrers, Bh, { variables: e }),
    Hh = ds`
  fragment systemsField on DomainStatistics {
  	systems(sorting: $sorting, type: $type, range: $range) {
  		id
  		value
  		count
  		created
  	}
  }
`,
    Gh = (e = []) =>
      e.map((e) => ({ text: e.value, count: e.count, date: null == e.created ? null : new Date(e.created) }))
  const Yh = ds`
  query fetchMergedSystems($sorting: Sorting!, $type: SystemType!, $range: Range) {
  	statistics {
  		id
  		...systemsField
  	}
  }

  ${Hh}
`
  var Jh = (e) => Ld(Yh, (e) => e?.statistics.systems, Gh, { variables: e }),
    Xh = ds`
  fragment devicesField on DomainStatistics {
  	devices(sorting: $sorting, type: $type, range: $range) {
  		id
  		value
  		count
  		created
  	}
  }
`,
    Zh = (e = []) =>
      e.map((e) => ({ text: e.value, count: e.count, date: null == e.created ? null : new Date(e.created) }))
  const em = ds`
  query fetchMergedDevices($sorting: Sorting!, $type: DeviceType!, $range: Range) {
  	statistics {
  		id
  		...devicesField
  	}
  }

  ${Xh}
`
  var tm = (e) => Ld(em, (e) => e?.statistics.devices, Zh, { variables: e }),
    nm = ds`
  fragment browsersField on DomainStatistics {
  	browsers(sorting: $sorting, type: $type, range: $range) {
  		id
  		value
  		count
  		created
  	}
  }
`,
    rm = (e = []) =>
      e.map((e) => ({ text: e.value, count: e.count, date: null == e.created ? null : new Date(e.created) }))
  const im = ds`
  query fetchMergedBrowsers($sorting: Sorting!, $type: BrowserType!, $range: Range) {
  	statistics {
  		id
  		...browsersField
  	}
  }

  ${nm}
`
  var am = (e) => Ld(im, (e) => e?.statistics.browsers, rm, { variables: e }),
    om = ds`
  fragment sizesField on DomainStatistics {
  	sizes(sorting: $sorting, type: $type, range: $range) {
  		id
  		value
  		count
  		created
  	}
  }
`,
    sm = (e = []) =>
      e.map((e) => ({ text: e.value, count: e.count, date: null == e.created ? null : new Date(e.created) }))
  const lm = ds`
  query fetchMergedSizes($sorting: Sorting!, $type: SizeType!, $range: Range) {
  	statistics {
  		id
  		...sizesField
  	}
  }

  ${om}
`
  var um = (e) => Ld(lm, (e) => e?.statistics.sizes, sm, { variables: e }),
    cm = ds`
  fragment languagesField on DomainStatistics {
  	languages(sorting: $sorting, range: $range) {
  		id
  		value
  		count
  		created
  	}
  }
`,
    fm = (e = []) =>
      e.map((e) => ({ text: e.value, count: e.count, date: null == e.created ? null : new Date(e.created) }))
  const dm = ds`
  query fetchMergedLanguages($sorting: Sorting!, $range: Range) {
  	statistics {
  		id
  		...languagesField
  	}
  }

  ${cm}
`
  var pm,
    hm,
    mm = (e) => Ld(dm, (e) => e?.statistics.languages, fm, { variables: e })
  var vm = t(
      (function () {
        if (hm) return pm
        hm = 1
        const e = ['K', 'M', 'B', 'T']
        return (pm = (t, n) => {
          let r = 0
          for (; t >= 1e3 && ++r <= e.length; ) t /= 1e3
          return (n && (t = n(t)), String(0 === r ? t : t + e[r - 1]))
        })
      })(),
    ),
    ym = (e) => {
      const t = Math.round(e),
        n = vm(t, (e) => Number.parseFloat(e).toFixed(1))
      return n.replace('.0', '')
    },
    gm = (e, t) => {
      switch (t) {
        case 0:
          return e[0]
        case 1:
          return e[1]
        default:
          return e[2]
      }
    }
  const bm = (e) =>
    h.createElement(
      'div',
      { className: Cf('badge', `badge--${e.type}`) },
      h.createElement('span', { className: 'badge__value' }, e.value),
    )
  bm.propTypes = { type: Ef.oneOf(['positive', 'negative', 'neutral']).isRequired, value: Ef.string.isRequired }
  const Em = (e) =>
    h.createElement(
      'svg',
      { viewBox: '0 0 512 512', className: e.className },
      h.createElement('path', {
        d: 'm464 256c0-114.87-93.13-208-208-208s-208 93.13-208 208 93.13 208 208 208 208-93.13 208-208zm-212.65 91.36a16 16 0 0 1 -.09-22.63l52.32-52.73h-133.58a16 16 0 0 1 0-32h133.58l-52.32-52.73a16 16 0 1 1 22.74-22.54l79.39 80a16 16 0 0 1 0 22.54l-79.39 80a16 16 0 0 1 -22.65.09z',
      }),
    )
  Em.propTypes = { className: Ef.string }
  const wm = (e) => (e > 5 ? 'positive' : e < -5 ? 'negative' : 'neutral'),
    _m = (e, t) =>
      e > 0
        ? `A ${t} increase when comparing the last 7 days with the previous 7 days`
        : e < 0
          ? `A ${t} decrease when comparing the last 7 days with the previous 7 days`
          : 'No change when comparing the last 7 days with the previous 7 days',
    km = (e) => {
      const t = e.value,
        n = `${Math.abs(e.value)}%`
      return h.createElement(
        'div',
        { className: Cf('badge', 'badge--with-icon', `badge--${wm(t)}`), title: _m(t, n) },
        h.createElement(Em, { className: 'badge__icon' }),
        h.createElement('span', { className: 'badge__value' }, n),
      )
    }
  km.propTypes = { value: Ef.number.isRequired }
  const Sm = (e) =>
    h.createElement(
      'div',
      { className: 'valueUnit' },
      h.createElement(Rf, { type: 'div', spacing: !1 }, e.value),
      h.createElement(Nf, { type: 'div', spacing: !1 }, e.unit),
    )
  Sm.propTypes = { value: Ef.oneOfType([Ef.number, Ef.string]).isRequired, unit: Ef.string.isRequired }
  const Tm = (e) =>
      h.createElement(
        'div',
        { className: 'facts__card' },
        h.createElement(Rf, { type: 'h2', size: 'small', className: 'facts__top' }, e.headline),
        h.createElement(
          'div',
          { className: 'facts__left', title: e.title },
          h.createElement(Sm, { value: e.value, unit: e.unit }),
        ),
        null != e.addition && h.createElement('div', { className: 'facts__right' }, e.addition),
      ),
    xm = (e) => {
      const { value: t } = e.hook(...e.hookArgs),
        { activeVisitors: n, averageViews: r, averageDuration: i, viewsToday: a, viewsMonth: o, viewsYear: s } = t
      return h.createElement(
        'div',
        { className: 'facts' },
        h.createElement(Tm, {
          headline: 'Active visitors',
          value: n,
          unit: gm(['visitors', 'visitor', 'visitors'], n),
          addition: h.createElement(bm, { type: 'positive', value: 'Live' }),
        }),
        h.createElement(Tm, {
          headline: 'Average views',
          value: ym(r.count),
          unit: 'per day',
          title: `An average of ${r.count} views per day during the last 14 days`,
          addition: null != r.change && h.createElement(km, { value: r.change }),
        }),
        h.createElement(Tm, {
          headline: 'Average duration',
          value: Up(i.count).value,
          unit: Up(i.count).unit,
          title: `An average visit duration of ${Up(i.count).value}${Up(i.count).unit} per day during the last 14 days`,
          addition: null != i.change && h.createElement(km, { value: i.change }),
        }),
        h.createElement(Tm, { headline: 'Views today', value: ym(a), unit: gm(['views', 'view', 'views'], a) }),
        h.createElement(Tm, { headline: 'Views this month', value: ym(o), unit: gm(['views', 'view', 'views'], o) }),
        h.createElement(Tm, { headline: 'Views this year', value: ym(s), unit: gm(['views', 'view', 'views'], s) }),
      )
    }
  xm.propTypes = { hook: Ef.func.isRequired, hookArgs: Ef.array.isRequired }
  const Om = (e) => {
    const { value: t, status: n } = e.hook(...e.hookArgs),
      [r, i] = h.useState(' ')
    return h.createElement(
      'div',
      { className: Cf({ 'card': !0, 'card--wide': !0 === e.wide }) },
      h.createElement(
        'div',
        { className: 'card__inner' },
        h.createElement(Rf, { type: 'h2', size: 'medium', onClick: e.onMore }, e.headline),
        h.createElement(Nf, { type: 'div', spacing: !1 }, h.createElement(gp, n, r)),
        h.createElement(e.renderer, { ...e.rendererProps, items: t, setStatusLabel: i }),
      ),
    )
  }
  Om.propTypes = {
    wide: Ef.bool,
    headline: Ef.string.isRequired,
    onMore: Ef.func,
    hook: Ef.func.isRequired,
    hookArgs: Ef.array.isRequired,
    renderer: Ef.elementType.isRequired,
    rendererProps: Ef.object,
  }
  const Cm = (e) => {
      return ((t = Math.max.apply(Math, e)), 10 * Math.ceil(t / 10))
      var t
    },
    Rm = (e, t) => (0 === e && 0 === t ? 0 : (e / t) * 100),
    Nm = (e) =>
      h.createElement(
        'div',
        {
          className: Cf({
            'barChart__row': !0,
            'barChart__row--top': 'top' === e.position,
            'barChart__row--middle': 'middle' === e.position,
            'barChart__row--bottom': 'bottom' === e.position,
            'color-light': !0,
          }),
        },
        e.children,
      ),
    Dm = (e) =>
      h.createElement(
        'div',
        {
          className: Cf({
            'barChart__column': !0,
            'barChart__column--disabled': null == e.onClick,
            'active': e.active,
          }),
          onMouseEnter: e.onEnter,
          onMouseLeave: e.onLeave,
          onClick: e.onClick,
        },
        h.createElement('div', {
          'className': 'barChart__bar color-black',
          'style': { '--size': e.size },
          'data-label': e.label,
        }),
      ),
    Im = (e) => {
      return h.createElement(
        'div',
        { className: 'barChart' },
        h.createElement(
          'div',
          { className: 'barChart__axis' },
          h.createElement(Nm, { position: 'top' }, e.formatter(Cm(e.items))),
          h.createElement(Nm, { position: 'middle' }, e.formatter(((t = e.items), Cm(t) / 2))),
          h.createElement(Nm, { position: 'bottom' }, e.formatter(0)),
        ),
        h.createElement(
          'div',
          { className: 'barChart__columns' },
          e.items.map((t, n) =>
            h.createElement(Dm, {
              key: n,
              active: e.active === n,
              size: `${Rm(t, Cm(e.items))}%`,
              onEnter: () => e.onItemEnter(n),
              onLeave: () => e.onItemLeave(n),
              onClick: null == e.onItemClick ? void 0 : () => e.onItemClick(n),
              label: e.formatter(t),
            }),
          ),
        ),
      )
      var t
    }
  Im.propTypes = {
    items: Ef.arrayOf(Ef.number).isRequired,
    formatter: Ef.func.isRequired,
    onItemEnter: Ef.func.isRequired,
    onItemLeave: Ef.func.isRequired,
    onItemClick: Ef.func,
  }
  const Pm = (e) => {
    const [t, n] = h.useState(0),
      r = h.useCallback((e) => n(e), [n]),
      i = h.useCallback(() => n(0), [n]),
      a = ((e, t) => Mp(t)(e))(t, e.interval)
    return (
      h.useEffect(() => e.setStatusLabel(a), [a]),
      h.createElement(Im, {
        items: e.items,
        formatter: e.formatter,
        active: t,
        onItemEnter: r,
        onItemLeave: i,
        onItemClick: e.onItemClick,
      })
    )
  }
  Pm.propTypes = {
    items: Ef.array.isRequired,
    interval: Ef.string.isRequired,
    formatter: Ef.func.isRequired,
    setStatusLabel: Ef.func.isRequired,
    onItemClick: Ef.func,
  }
  var Fm = (e) => h.createElement(Pm, { ...e, formatter: ym })
  const Am = (e) => Up(e).toString()
  var Mm,
    Lm,
    qm = (e) => h.createElement(Pm, { ...e, formatter: Am })
  var zm = (function () {
      if (Lm) return Mm
      function e(e, t, n, r, i, a) {
        var o = Math.round(Math.abs(e) / t)
        return a ? (o <= 1 ? i : 'in ' + o + ' ' + n + 's') : o <= 1 ? r : o + ' ' + n + 's ago'
      }
      Lm = 1
      var t = [
        { max: 276e4, value: 6e4, name: 'minute', past: 'a minute ago', future: 'in a minute' },
        { max: 72e6, value: 36e5, name: 'hour', past: 'an hour ago', future: 'in an hour' },
        { max: 5184e5, value: 864e5, name: 'day', past: 'yesterday', future: 'tomorrow' },
        { max: 24192e5, value: 6048e5, name: 'week', past: 'last week', future: 'in a week' },
        { max: 28512e6, value: 2592e6, name: 'month', past: 'last month', future: 'in a month' },
      ]
      return (
        (Mm = function (n, r) {
          var i = Date.now() - n.getTime()
          if (Math.abs(i) < 6e4) return 'just now'
          for (var a = 0; a < t.length; a++)
            if (Math.abs(i) < t[a].max || (r && t[a].name === r))
              return e(i, t[a].value, t[a].name, t[a].past, t[a].future, i < 0)
          return e(i, 31536e6, 'year', 'last year', 'in a year', i < 0)
        }),
        Mm
      )
    })(),
    jm = t(zm),
    Vm = (e) => {
      const t = jm(e)
      return t.charAt(0).toUpperCase() + t.slice(1)
    },
    Qm = (e) => ({ [Oc]: 'Last 24 hours', [Cc]: 'Last 7 days', [Rc]: 'Last 30 days', [Nc]: 'Last 6 months' })[e]
  const $m = (e) => {
      const t = null != e.url,
        n = !0 === t ? 'a' : 'div',
        r = !0 === t ? { href: bp(e.url).href, target: '_blank', rel: 'noopener' } : {}
      return h.createElement(
        n,
        { className: 'flexList__row flexList__row--has-hover', onMouseEnter: e.onEnter, onMouseLeave: e.onLeave, ...r },
        h.createElement(
          'div',
          { className: 'flexList__column flexList__column--text-adjustment' },
          h.createElement('span', { className: 'flexList__truncated', title: e.text }, e.text),
        ),
      )
    },
    Um = (e) =>
      h.createElement(
        'div',
        { className: 'flexList' },
        h.createElement(
          'div',
          { className: 'flexList__inner' },
          e.items.map((t, n) =>
            h.createElement($m, {
              key: t.text + n,
              onEnter: () => e.onItemEnter(n),
              onLeave: () => e.onItemLeave(n),
              ...t,
            }),
          ),
        ),
      )
  Um.propTypes = {
    items: Ef.arrayOf(Ef.shape({ url: Ef.object, text: Ef.string.isRequired })).isRequired,
    onItemEnter: Ef.func.isRequired,
    onItemLeave: Ef.func.isRequired,
  }
  const Bm = (e) => {
    const [t, n] = h.useState(),
      r = h.useCallback((e) => n(e), [n]),
      i = h.useCallback(() => n(), [n]),
      a = ((o = e.items[t]), (s = e.range), (l = e.sorting === xc), o && o.date ? Vm(o.date) : l ? 'Recent' : Qm(s))
    var o, s, l
    return (
      h.useEffect(() => e.setStatusLabel(a), [a]),
      e.sorting === Sc
        ? h.createElement(_p, { items: e.items, formatter: Lp })
        : h.createElement(Um, { items: e.items, onItemEnter: r, onItemLeave: i })
    )
  }
  Bm.propTypes = {
    items: Ef.array.isRequired,
    sorting: Ef.string.isRequired,
    range: Ef.string.isRequired,
    setStatusLabel: Ef.func.isRequired,
  }
  const Wm = (e) => {
    const t = null == e.url,
      [n, r] = h.useState(t)
    return h.createElement('img', {
      className: Cf({ 'favicon': !0, 'favicon--missing': !0 === n }),
      src:
        !0 === n
          ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
          : e.url,
      onError: () => r(!0),
    })
  }
  Wm.propTypes = { url: Ef.string }
  const Km = (e) => {
      const t = null != e.barWidth
      return h.createElement(
        'div',
        { className: 'flexList__column flexList__column--spacing-right' },
        !0 === t &&
          h.createElement('div', {
            className: 'flexList__bar flexList__bar--favicon',
            style: { '--width': `${e.barWidth}%` },
          }),
        h.createElement(Wm, { url: e.faviconUrl }),
      )
    },
    Hm = (e) => {
      const t = e.url.hostname,
        n = e.url.pathname
      return h.createElement(
        'a',
        {
          className: 'flexList__row',
          href: bp(e.url).href,
          target: '_blank',
          rel: 'noopener',
          onMouseEnter: e.onEnter,
          onMouseLeave: e.onLeave,
        },
        h.createElement(Km, { barWidth: e.barWidth, faviconUrl: e.faviconUrl }),
        h.createElement(
          'div',
          { className: 'flexList__column flexList__column--text-adjustment' },
          h.createElement('span', {}, t),
          h.createElement('span', { className: 'flexList__obscured', title: n }, n),
        ),
      )
    },
    Gm = (e) =>
      h.createElement(
        'a',
        { className: 'flexList__row flexList__row--has-hover', onMouseEnter: e.onEnter, onMouseLeave: e.onLeave },
        h.createElement(Km, { barWidth: e.barWidth }),
        h.createElement(
          'div',
          { className: 'flexList__column flexList__column--text-adjustment' },
          h.createElement('span', { className: 'flexList__truncated', title: e.text }, e.text),
        ),
      ),
    Ym = (e) => {
      const t = e.items.reduce(Ep('count'), 0),
        n = !1 === Number.isNaN(t),
        r = ({ count: e }) => (e / t) * 100
      return h.createElement(
        'div',
        { className: 'flexList' },
        h.createElement(
          'div',
          { className: 'flexList__inner' },
          e.items.map((t, i) => {
            const a = {
              key: t.text + i,
              barWidth: !0 === n ? r(t) : void 0,
              onEnter: () => e.onItemEnter(i),
              onLeave: () => e.onItemLeave(i),
            }
            return null == t.url
              ? h.createElement(Gm, { ...a, text: t.text })
              : h.createElement(Hm, { ...a, faviconUrl: new URL('/favicon.ico', t.url).href, url: t.url })
          }),
        ),
      )
    }
  Ym.propTypes = {
    items: Ef.arrayOf(Ef.shape({ url: Ef.object, text: Ef.string.isRequired, count: Ef.number })).isRequired,
    onItemEnter: Ef.func.isRequired,
    onItemLeave: Ef.func.isRequired,
  }
  const Jm = (e) => {
    const [t, n] = h.useState(),
      r = h.useCallback((e) => n(e), [n]),
      i = h.useCallback(() => n(), [n]),
      a =
        ((o = e.items[t]),
        (s = e.range),
        (l = e.sorting === xc),
        (u = e.sorting === Tc),
        o && o.date
          ? Vm(o.date)
          : o && o.count
            ? `${o.count} ${1 === o.count ? 'visit' : 'visits'}`
            : l
              ? 'Recent'
              : u
                ? 'New'
                : Qm(s))
    var o, s, l, u
    return (
      h.useEffect(() => e.setStatusLabel(a), [a]),
      h.createElement(Ym, { items: e.items, onItemEnter: r, onItemLeave: i })
    )
  }
  Jm.propTypes = {
    items: Ef.array.isRequired,
    sorting: Ef.string.isRequired,
    range: Ef.string.isRequired,
    setStatusLabel: Ef.func.isRequired,
  }
  const Xm = (e) => (
    Ld(Oh, (e) => e?.facts, xh, { pollInterval: 5e3 }),
    h.createElement(
      h.Fragment,
      {},
      h.createElement(xm, { hook: Nh, hookArgs: [] }),
      h.createElement('div', { className: 'content__spacer' }),
      h.createElement(Om, {
        wide: !0,
        headline: 'Views',
        onMore: () => e.setRoute('/insights/views'),
        hook: Ph,
        hookArgs: [{ interval: Dc, type: Fc, limit: 14 }],
        renderer: Fm,
        rendererProps: {
          interval: Dc,
          onItemClick: (t) => e.addModal(tp, { index: t, interval: Dc, type: Fc, limit: 14 }),
        },
      }),
      h.createElement(Om, {
        wide: !0,
        headline: 'Durations',
        onMore: () => e.setRoute('/insights/durations'),
        hook: Mh,
        hookArgs: [{ interval: Dc, limit: 14 }],
        renderer: qm,
        rendererProps: { interval: Dc, onItemClick: (t) => e.addModal(np, { index: t, interval: Dc, limit: 14 }) },
      }),
      h.createElement(Om, {
        headline: 'Pages',
        onMore: () => e.setRoute('/insights/pages'),
        hook: Qh,
        hookArgs: [{ sorting: Sc, range: Oc }],
        renderer: Bm,
        rendererProps: { sorting: Sc, range: Oc },
      }),
      h.createElement(Om, {
        headline: 'Referrers',
        onMore: () => e.setRoute('/insights/referrers'),
        hook: Kh,
        hookArgs: [{ sorting: Sc, type: Mc, range: Oc }],
        renderer: Jm,
        rendererProps: { sorting: Sc, range: Oc },
      }),
      h.createElement('div', { className: 'content__spacer' }),
      h.createElement(Om, {
        headline: 'Systems',
        onMore: () => e.setRoute('/insights/systems'),
        hook: Jh,
        hookArgs: [{ sorting: Sc, type: Kc, range: Oc }],
        renderer: Bm,
        rendererProps: { sorting: Sc, range: Oc },
      }),
      h.createElement(Om, {
        headline: 'Devices',
        onMore: () => e.setRoute('/insights/devices'),
        hook: tm,
        hookArgs: [{ sorting: Sc, type: zc, range: Oc }],
        renderer: Bm,
        rendererProps: { sorting: Sc, range: Oc },
      }),
      h.createElement(Om, {
        headline: 'Browsers',
        onMore: () => e.setRoute('/insights/browsers'),
        hook: am,
        hookArgs: [{ sorting: Sc, type: jc, range: Oc }],
        renderer: Bm,
        rendererProps: { sorting: Sc, range: Oc },
      }),
      h.createElement(Om, {
        headline: 'Sizes',
        onMore: () => e.setRoute('/insights/sizes'),
        hook: um,
        hookArgs: [{ sorting: Sc, type: Qc, range: Oc }],
        renderer: Bm,
        rendererProps: { sorting: Sc, range: Oc },
      }),
      h.createElement(Om, {
        headline: 'Languages',
        onMore: () => e.setRoute('/insights/languages'),
        hook: mm,
        hookArgs: [{ sorting: Sc, range: Oc }],
        renderer: Bm,
        rendererProps: { sorting: Sc, range: Oc },
      }),
    )
  )
  Xm.propTypes = { setRoute: Ef.func.isRequired }
  const Zm = ds`
  query fetchActiveVisitors($id: ID!) {
  	domain(id: $id) {
  		id
  		facts {
  			id
  			activeVisitors
  		}
  	}
  }
`
  const ev = ds`
  query fetchFacts($id: ID!) {
  	domain(id: $id) {
  		id
  		facts {
  			...factsFields
  		}
  	}
  }

  ${Ch}
`
  var tv = (e) => Ld(ev, (e) => e?.domain.facts, xh, { variables: { id: e } })
  const nv = ds`
  query fetchViews($id: ID!, $interval: Interval!, $type: ViewType!, $limit: Int) {
  	domain(id: $id) {
  		id
  		statistics {
  			id
  			...viewsField
  		}
  	}
  }

  ${kp}
`
  var rv = (e, t) =>
    Ld(
      nv,
      (e) => e?.domain.statistics.views,
      (e) => Dh(e, t.limit),
      { variables: { ...t, id: e } },
    )
  const iv = ds`
  query fetchDurations($id: ID!, $interval: Interval!, $limit: Int) {
  	domain(id: $id) {
  		id
  		statistics {
  			id
  			...durationsField
  		}
  	}
  }

  ${zp}
`
  var av = (e, t) =>
    Ld(
      iv,
      (e) => e?.domain.statistics.durations,
      (e) => Fh(e, t.limit),
      { variables: { ...t, id: e } },
    )
  const ov = ds`
  query fetchPages($id: ID!, $sorting: Sorting!, $range: Range) {
  	domain(id: $id) {
  		id
  		statistics {
  			id
  			...pagesField
  		}
  	}
  }

  ${Lh}
`
  var sv = (e, t) => Ld(ov, (e) => e?.domain.statistics.pages, qh, { variables: { ...t, id: e } })
  const lv = ds`
  query fetchReferrers($id: ID!, $sorting: Sorting!, $type: ReferrerType!, $range: Range) {
  	domain(id: $id) {
  		id
  		statistics {
  			id
  			...referrersField
  		}
  	}
  }

  ${$h}
`
  var uv = (e, t) => Ld(lv, (e) => e?.domain.statistics.referrers, Bh, { variables: { ...t, id: e } })
  const cv = ds`
  query fetchSystems($id: ID!, $sorting: Sorting!, $type: SystemType!, $range: Range) {
  	domain(id: $id) {
  		id
  		statistics {
  			id
  			...systemsField
  		}
  	}
  }

  ${Hh}
`
  var fv = (e, t) => Ld(cv, (e) => e?.domain.statistics.systems, Gh, { variables: { ...t, id: e } })
  const dv = ds`
  query fetchDevices($id: ID!, $sorting: Sorting!, $type: DeviceType!, $range: Range) {
  	domain(id: $id) {
  		id
  		statistics {
  			id
  			...devicesField
  		}
  	}
  }

  ${Xh}
`
  var pv = (e, t) => Ld(dv, (e) => e?.domain.statistics.devices, Zh, { variables: { ...t, id: e } })
  const hv = ds`
  query fetchBrowsers($id: ID!, $sorting: Sorting!, $type: BrowserType!, $range: Range) {
  	domain(id: $id) {
  		id
  		statistics {
  			id
  			...browsersField
  		}
  	}
  }

  ${nm}
`
  var mv = (e, t) => Ld(hv, (e) => e?.domain.statistics.browsers, rm, { variables: { ...t, id: e } })
  const vv = ds`
  query fetchSizes($id: ID!, $sorting: Sorting!, $type: SizeType!, $range: Range) {
  	domain(id: $id) {
  		id
  		statistics {
  			id
  			...sizesField
  		}
  	}
  }

  ${om}
`
  var yv = (e, t) => Ld(vv, (e) => e?.domain.statistics.sizes, sm, { variables: { ...t, id: e } })
  const gv = ds`
  query fetchLanguages($id: ID!, $sorting: Sorting!, $range: Range) {
  	domain(id: $id) {
  		id
  		statistics {
  			id
  			...languagesField
  		}
  	}
  }

  ${cm}
`
  var bv = (e, t) => Ld(gv, (e) => e?.domain.statistics.languages, fm, { variables: { ...t, id: e } })
  const Ev = (e) => {
    const t = Qf(e.route).params.domainId
    return (
      Ld(Zm, (e) => e?.domain.facts, xh, { variables: { id: t }, pollInterval: 5e3 }),
      h.createElement(
        h.Fragment,
        {},
        h.createElement(xm, { hook: tv, hookArgs: [t] }),
        h.createElement('div', { className: 'content__spacer' }),
        h.createElement(Om, {
          wide: !0,
          headline: 'Views',
          onMore: () => e.setRoute('/insights/views'),
          hook: rv,
          hookArgs: [t, { interval: Dc, type: Fc, limit: 14 }],
          renderer: Fm,
          rendererProps: { interval: Dc },
        }),
        h.createElement(Om, {
          wide: !0,
          headline: 'Durations',
          onMore: () => e.setRoute('/insights/durations'),
          hook: av,
          hookArgs: [t, { interval: Dc, limit: 14 }],
          renderer: qm,
          rendererProps: { interval: Dc },
        }),
        h.createElement(Om, {
          headline: 'Pages',
          onMore: () => e.setRoute('/insights/pages'),
          hook: sv,
          hookArgs: [t, { sorting: Sc, range: Oc }],
          renderer: Bm,
          rendererProps: { sorting: Sc, range: Oc },
        }),
        h.createElement(Om, {
          headline: 'Referrers',
          onMore: () => e.setRoute('/insights/referrers'),
          hook: uv,
          hookArgs: [t, { sorting: Sc, type: Mc, range: Oc }],
          renderer: Jm,
          rendererProps: { sorting: Sc, range: Oc },
        }),
        h.createElement('div', { className: 'content__spacer' }),
        h.createElement(Om, {
          headline: 'Systems',
          onMore: () => e.setRoute('/insights/systems'),
          hook: fv,
          hookArgs: [t, { sorting: Sc, type: Kc, range: Oc }],
          renderer: Bm,
          rendererProps: { sorting: Sc, range: Oc },
        }),
        h.createElement(Om, {
          headline: 'Devices',
          onMore: () => e.setRoute('/insights/devices'),
          hook: pv,
          hookArgs: [t, { sorting: Sc, type: zc, range: Oc }],
          renderer: Bm,
          rendererProps: { sorting: Sc, range: Oc },
        }),
        h.createElement(Om, {
          headline: 'Browsers',
          onMore: () => e.setRoute('/insights/browsers'),
          hook: mv,
          hookArgs: [t, { sorting: Sc, type: jc, range: Oc }],
          renderer: Bm,
          rendererProps: { sorting: Sc, range: Oc },
        }),
        h.createElement(Om, {
          headline: 'Sizes',
          onMore: () => e.setRoute('/insights/sizes'),
          hook: yv,
          hookArgs: [t, { sorting: Sc, type: Qc, range: Oc }],
          renderer: Bm,
          rendererProps: { sorting: Sc, range: Oc },
        }),
        h.createElement(Om, {
          headline: 'Languages',
          onMore: () => e.setRoute('/insights/languages'),
          hook: bv,
          hookArgs: [t, { sorting: Sc, range: Oc }],
          renderer: Bm,
          rendererProps: { sorting: Sc, range: Oc },
        }),
      )
    )
  }
  Ev.propTypes = { route: Ef.string.isRequired, setRoute: Ef.func.isRequired }
  const wv = (e) => {
    const t = jd()
    return h.createElement(
      h.Fragment,
      {},
      h.createElement(Om, {
        wide: !0,
        headline: { [Fc]: 'Site Views', [Ac]: 'Page Views' }[e.filters.viewsType],
        hook: Ph,
        hookArgs: [{ interval: e.filters.interval, type: e.filters.viewsType, limit: 14 }],
        renderer: Fm,
        rendererProps: {
          interval: e.filters.interval,
          onItemClick: (t) =>
            e.addModal(tp, { index: t, interval: e.filters.interval, type: e.filters.viewsType, limit: 14 }),
        },
      }),
      t.value.map((t) =>
        h.createElement(Om, {
          key: t.id,
          headline: t.title,
          onMore: () => e.setRoute(`/domains/${t.id}`),
          hook: rv,
          hookArgs: [t.id, { interval: e.filters.interval, type: e.filters.viewsType, limit: 7 }],
          renderer: Fm,
          rendererProps: { interval: e.filters.interval },
        }),
      ),
    )
  }
  wv.propTypes = { setRoute: Ef.func.isRequired, filters: Ef.object.isRequired }
  const _v = (e) =>
    jd().value.map((t) =>
      h.createElement(Om, {
        key: t.id,
        headline: t.title,
        onMore: () => e.setRoute(`/domains/${t.id}`),
        hook: sv,
        hookArgs: [t.id, { sorting: e.filters.sorting, range: e.filters.range }],
        renderer: Bm,
        rendererProps: { sorting: e.filters.sorting, range: e.filters.range },
      }),
    )
  _v.propTypes = { setRoute: Ef.func.isRequired, filters: Ef.object.isRequired }
  const kv = (e) =>
    jd().value.map((t) =>
      h.createElement(Om, {
        key: t.id,
        headline: t.title,
        onMore: () => e.setRoute(`/domains/${t.id}`),
        hook: uv,
        hookArgs: [t.id, { sorting: e.filters.sorting, type: e.filters.referrersType, range: e.filters.range }],
        renderer: Jm,
        rendererProps: { sorting: e.filters.sorting, range: e.filters.range },
      }),
    )
  kv.propTypes = { setRoute: Ef.func.isRequired, filters: Ef.object.isRequired }
  const Sv = (e) => {
    const t = jd()
    return h.createElement(
      h.Fragment,
      {},
      h.createElement(Om, {
        wide: !0,
        headline: 'Durations',
        hook: Mh,
        hookArgs: [{ interval: e.filters.interval, limit: 14 }],
        renderer: qm,
        rendererProps: {
          interval: e.filters.interval,
          onItemClick: (t) => e.addModal(np, { index: t, interval: e.filters.interval, limit: 14 }),
        },
      }),
      t.value.map((t) =>
        h.createElement(Om, {
          key: t.id,
          headline: t.title,
          onMore: () => e.setRoute(`/domains/${t.id}`),
          hook: av,
          hookArgs: [t.id, { interval: e.filters.interval, limit: 7 }],
          renderer: qm,
          rendererProps: { interval: e.filters.interval },
        }),
      ),
    )
  }
  Sv.propTypes = { setRoute: Ef.func.isRequired, filters: Ef.object.isRequired }
  const Tv = ds`
  query fetchEvents {
  	events {
  		...eventFields
  	}
  }

  ${sh}
`
  var xv = () =>
      Ld(
        Tv,
        (e) => e?.events,
        (e = []) => e,
        { fetchPolicy: 'cache-first', nextFetchPolicy: 'cache-first' },
      ),
    Ov = ds`
  fragment chartField on EventStatistics {
  	chart(interval: $interval, type: $type, limit: $limit) {
  		id
  		count
  	}
  }
`
  const Cv = ds`
  query fetchEventChartEntries($id: ID!, $interval: Interval!, $type: EventChartType!, $limit: Int) {
  	event(id: $id) {
  		id
  		statistics {
  			id
  			...chartField
  		}
  	}
  }

  ${Ov}
`
  var Rv = (e, t) =>
      Ld(
        Cv,
        (e) => e?.event.statistics.chart,
        (e) =>
          ((e = [], t) =>
            Sp(t).map((t, n) => {
              const r = e[n]
              return null == r ? 0 : r.count
            }))(e, t.limit),
        { variables: { ...t, id: e } },
      ),
    Nv = ds`
  fragment listField on EventStatistics {
  	list(sorting: $sorting, type: $type, range: $range) {
  		id
  		value
  		count
  		created
  	}
  }
`,
    Dv = (e = []) =>
      e.map((e) => ({ text: e.value, count: e.count, date: null == e.created ? null : new Date(e.created) }))
  const Iv = ds`
  query fetchEventListEntries($id: ID!, $sorting: Sorting!, $type: EventListType!, $range: Range) {
  	event(id: $id) {
  		id
  		statistics {
  			id
  			...listField
  		}
  	}
  }

  ${Nv}
`
  var Pv = (e, t) => Ld(Iv, (e) => e?.event.statistics.list, Dv, { variables: { ...t, id: e } }),
    Fv = (e) => {
      const t = vm(e, (e) => Number.parseFloat(e).toFixed(2))
      return t.replace('.00', '')
    },
    Av = (e) => h.createElement(Pm, { ...e, formatter: Fv })
  const Mv = (e, t) => {
      switch (e.type) {
        case nh:
        case rh:
          return {
            hook: Rv,
            hookArgs: [e.id, { interval: t.filters.interval, type: e.type === rh ? 'AVERAGE' : 'TOTAL', limit: 7 }],
            renderer: Av,
            rendererProps: { interval: t.filters.interval },
          }
        case ih:
        case ah:
          return {
            hook: Pv,
            hookArgs: [
              e.id,
              { sorting: t.filters.sorting, type: e.type === ah ? 'AVERAGE' : 'TOTAL', range: t.filters.range },
            ],
            renderer: Bm,
            rendererProps: { sorting: t.filters.sorting, range: t.filters.range },
          }
        default:
          throw new Error(`Unknown event type '${e.type}'`)
      }
    },
    Lv = (e) => xv().value.map((t) => h.createElement(Om, { key: t.id, headline: t.title, ...Mv(t, e) }))
  Lv.propTypes = { filters: Ef.object.isRequired }
  const qv = (e) =>
    jd().value.map((t) =>
      h.createElement(Om, {
        key: t.id,
        headline: t.title,
        onMore: () => e.setRoute(`/domains/${t.id}`),
        hook: fv,
        hookArgs: [t.id, { sorting: e.filters.sorting, type: e.filters.systemsType, range: e.filters.range }],
        renderer: Bm,
        rendererProps: { sorting: e.filters.sorting, range: e.filters.range },
      }),
    )
  qv.propTypes = { setRoute: Ef.func.isRequired, filters: Ef.object.isRequired }
  const zv = (e) =>
    jd().value.map((t) =>
      h.createElement(Om, {
        key: t.id,
        headline: t.title,
        onMore: () => e.setRoute(`/domains/${t.id}`),
        hook: pv,
        hookArgs: [t.id, { sorting: e.filters.sorting, type: e.filters.devicesType, range: e.filters.range }],
        renderer: Bm,
        rendererProps: { sorting: e.filters.sorting, range: e.filters.range },
      }),
    )
  zv.propTypes = { setRoute: Ef.func.isRequired, filters: Ef.object.isRequired }
  const jv = (e) =>
    jd().value.map((t) =>
      h.createElement(Om, {
        key: t.id,
        headline: t.title,
        onMore: () => e.setRoute(`/domains/${t.id}`),
        hook: mv,
        hookArgs: [t.id, { sorting: e.filters.sorting, type: e.filters.browsersType, range: e.filters.range }],
        renderer: Bm,
        rendererProps: { sorting: e.filters.sorting, range: e.filters.range },
      }),
    )
  jv.propTypes = { setRoute: Ef.func.isRequired, filters: Ef.object.isRequired }
  const Vv = (e) =>
    jd().value.map((t) =>
      h.createElement(Om, {
        key: t.id,
        headline: t.title,
        onMore: () => e.setRoute(`/domains/${t.id}`),
        hook: yv,
        hookArgs: [t.id, { sorting: e.filters.sorting, type: e.filters.sizesType, range: e.filters.range }],
        renderer: Bm,
        rendererProps: { sorting: e.filters.sorting, range: e.filters.range },
      }),
    )
  Vv.propTypes = { setRoute: Ef.func.isRequired, filters: Ef.object.isRequired }
  const Qv = (e) =>
    jd().value.map((t) =>
      h.createElement(Om, {
        key: t.id,
        headline: t.title,
        onMore: () => e.setRoute(`/domains/${t.id}`),
        hook: bv,
        hookArgs: [t.id, { sorting: e.filters.sorting, range: e.filters.range }],
        renderer: Bm,
        rendererProps: { sorting: e.filters.sorting, range: e.filters.range },
      }),
    )
  Qv.propTypes = { setRoute: Ef.func.isRequired, filters: Ef.object.isRequired }
  const $v = ds`
  mutation deleteToken($id: ID!) {
  	deleteToken(id: $id) {
  		success
  	}
  }
`
  const Uv = ds`
  query permanentTokens {
  	permanentTokens {
  		...permanentTokenFields
  	}
  }

  ${mh}
`
  const Bv = (e) =>
    h.createElement(
      'div',
      { className: 'card card--wide' },
      h.createElement(
        'div',
        { className: 'card__inner' },
        h.createElement(Rf, { type: 'h2', size: 'medium' }, e.headline),
        h.createElement(Sf, { size: 1.6 }),
        e.children,
      ),
    )
  Bv.propTypes = { headline: Ef.string.isRequired, children: Ef.oneOfType([Ef.arrayOf(Ef.node), Ef.node]).isRequired }
  const Wv = (e) =>
    h.createElement(
      e.type,
      {
        onClick: e.onClick,
        href: e.href,
        target: e.target,
        className: Cf({ 'linkItem': !0, 'linkItem--disabled': !0 === e.disabled, 'link': !0 }),
      },
      h.createElement('span', {}, e.children),
      null != e.text && h.createElement('span', {}, e.text),
    )
  Wv.propTypes = {
    type: Ef.oneOf(['p', 'a', 'button']).isRequired,
    href: Ef.string,
    target: Ef.string,
    onClick: Ef.func,
    disabled: Ef.bool,
    text: Ef.string,
    children: Ef.node.isRequired,
  }
  const Kv = () => h.createElement('hr', { className: 'line' }),
    Hv = (e) => h.createElement(Df, { status: 'warning' }, `Loading ${e.label}...`),
    Gv = (e) => {
      const t = (() => {
          const [e, { loading: t, error: n }] = tl($v)
          return { mutate: e, loading: t, error: n }
        })(),
        n = jd(),
        r = xv(),
        i = Ld(
          Uv,
          (e) => e?.permanentTokens,
          (e = []) => e,
          { fetchPolicy: 'cache-first', nextFetchPolicy: 'cache-first' },
        ),
        a = (e, t, n, r) => [
          ...e.flatMap((e) => [
            h.createElement(Wv, { type: 'button', text: e.id, onClick: () => t(e) }, e.title),
            h.createElement(Kv),
          ]),
          h.createElement(Wv, { type: 'button', onClick: n }, r),
        ],
        o = h.createElement(Hv, { label: 'domains' }),
        s = h.createElement(Hv, { label: 'events' }),
        l = h.createElement(Hv, { label: 'permanent tokens' }),
        u = a(
          n.value,
          (t) => e.addModal(ip, t),
          () => e.addModal(rp),
          'New domain',
        ),
        c = a(
          r.value,
          (t) => e.addModal(op, t),
          () => e.addModal(ap),
          'New event',
        ),
        f = a(
          i.value,
          (t) => e.addModal(lp, t),
          () => e.addModal(sp),
          'New permanent token',
        )
      return h.createElement(
        h.Fragment,
        {},
        h.createElement(
          Bv,
          { headline: 'Account' },
          h.createElement(Wv, { type: 'p', disabled: !0, text: nu }, 'Version'),
          h.createElement(Kv),
          h.createElement(
            Wv,
            {
              type: 'button',
              onClick: async () => {
                ;(await t.mutate({ variables: { id: e.token } }), e.reset())
              },
            },
            'Sign Out',
          ),
        ),
        h.createElement(Bv, { headline: 'Domains' }, ...(!0 === n.status.isInitializing ? [o] : u)),
        h.createElement(Bv, { headline: 'Events' }, ...(!0 === r.status.isInitializing ? [s] : c)),
        h.createElement(Bv, { headline: 'Permanent Tokens' }, ...(!0 === i.status.isInitializing ? [l] : f)),
        h.createElement(
          Bv,
          { headline: 'Donate' },
          h.createElement(
            Wv,
            { type: 'a', href: 'https://github.com/sponsors/electerious', target: '_blank', rel: 'noopener' },
            'Become a GitHub sponsor',
          ),
          h.createElement(Kv),
          h.createElement(
            Wv,
            { type: 'a', href: 'https://www.buymeacoffee.com/electerious', target: '_blank', rel: 'noopener' },
            'Buy me a coffee',
          ),
          h.createElement(Kv),
          h.createElement(
            Wv,
            { type: 'a', href: 'https://paypal.me/electerious', target: '_blank', rel: 'noopener' },
            'Donate via PayPal',
          ),
        ),
        h.createElement(
          Bv,
          { headline: 'Help' },
          h.createElement(
            Wv,
            { type: 'a', href: 'https://ackee.electerious.com', target: '_blank', rel: 'noopener' },
            'Website and documentation',
          ),
          h.createElement(Kv),
          h.createElement(Wv, { type: 'a', href: ru, target: '_blank', rel: 'noopener' }, 'Ackee on GitHub'),
          h.createElement(Kv),
          h.createElement(
            Wv,
            { type: 'a', href: 'https://github.com/electerious/ackee-tracker', target: '_blank', rel: 'noopener' },
            'Add Ackee to your sites',
          ),
        ),
      )
    }
  Gv.propTypes = { reset: Ef.func.isRequired, token: Ef.string.isRequired, addModal: Ef.func.isRequired }
  const Yv = {
      [Ru]: Xm,
      [Nu]: Ev,
      [Du]: wv,
      [Iu]: _v,
      [Pu]: kv,
      [Fu]: Sv,
      [Au]: Lv,
      [Mu]: qv,
      [Lu]: zv,
      [qu]: jv,
      [zu]: Vv,
      [ju]: Qv,
      [Vu]: Gv,
    },
    Jv = (e) => {
      const t = Qf(e.route),
        n = jd()
      ;(Md('o', () => e.setRoute('/')),
        Md('v', () => e.setRoute('/insights/views')),
        Md('p', () => e.setRoute('/insights/pages')),
        Md('r', () => e.setRoute('/insights/referrers')),
        Md('d', () => e.setRoute('/insights/durations')),
        Md('e', () => e.setRoute('/insights/events')),
        Md('s', () => e.setRoute('/settings')),
        Md(
          '0,1,2,3,4,5,6,7,8,9',
          (t, { key: r }) =>
            ((e, t, n) => {
              const r = e[n]
              null != r && t(`/domains/${r.id}`)
            })(n.value, e.setRoute, r),
          [n.value],
        ))
      const r = n.value.length > 0,
        i = n.value.map((t, n) =>
          Zd(t.title, `/domains/${t.id}`, e.route, e.setRoute, ((e, t) => (e < t ? e : void 0))(n, 10)),
        ),
        a = [
          Zd('Views', '/insights/views', e.route, e.setRoute, 'v'),
          Zd('Pages', '/insights/pages', e.route, e.setRoute, 'p'),
          Zd('Referrers', '/insights/referrers', e.route, e.setRoute, 'r'),
          Zd('Durations', '/insights/durations', e.route, e.setRoute, 'd'),
          ep(),
          Zd('Events', '/insights/events', e.route, e.setRoute, 'e'),
          ep(),
          Zd('Systems', '/insights/systems', e.route, e.setRoute),
          Zd('Devices', '/insights/devices', e.route, e.setRoute),
          Zd('Browsers', '/insights/browsers', e.route, e.setRoute),
          Zd('Sizes', '/insights/sizes', e.route, e.setRoute),
          Zd('Languages', '/insights/languages', e.route, e.setRoute),
        ],
        o = [
          Jd('Overview', '/', e.route, e.setRoute),
          !0 === r ? Xd((e) => (null == e ? 'Domains' : e.label), i) : void 0,
          Xd((e) => (null == e ? 'Insights' : e.label), a),
          Jd('Settings', '/settings', e.route, e.setRoute),
        ].filter(Boolean)
      return h.createElement(
        'div',
        {},
        h.createElement(Sh, { modals: e.modals, removeModal: e.removeModal }),
        h.createElement(Yd, { loading: e.loading, items: o }),
        h.createElement(
          'main',
          { className: 'content' },
          h.createElement(Yv[t.key], {
            reset: e.reset,
            route: e.route,
            setRoute: e.setRoute,
            token: e.token,
            addModal: e.addModal,
            filters: e.filters,
          }),
        ),
      )
    },
    Xv = (e) => {
      const t = e.useErrors(),
        n = ((e, t, n) => !1 != (null != e) && (!0 !== t.some(mf) || (n(), !1)))(e.token, t, e.reset)
      if (!0 === (!1 === n)) return h.createElement(qf, { setToken: e.setToken })
      return !0 === t.length > 0
        ? h.createElement(If, { errors: t, reset: e.reset })
        : h.createElement(
            h.Fragment,
            {},
            h.createElement(cd, {
              filters: e.filters,
              setSortingFilter: e.setSortingFilter,
              setRangeFilter: e.setRangeFilter,
              setIntervalFilter: e.setIntervalFilter,
              setViewsTypeFilter: e.setViewsTypeFilter,
              setReferrersTypeFilter: e.setReferrersTypeFilter,
              setDevicesTypeFilter: e.setDevicesTypeFilter,
              setBrowsersTypeFilter: e.setBrowsersTypeFilter,
              setSizesTypeFilter: e.setSizesTypeFilter,
              setSystemsTypeFilter: e.setSystemsTypeFilter,
              route: e.route,
            }),
            h.createElement(Jv, e),
          )
    },
    Zv = class extends h.Component {
      constructor(e) {
        ;(super(e), (this.state = { error: void 0 }))
      }
      static getDerivedStateFromError(e) {
        return { error: e }
      }
      render() {
        return !0 === (null != this.state.error)
          ? h.createElement(If, { errors: [this.state.error], reset: this.props.reset })
          : this.props.children
      }
    }
  ;((Zv.propTypes = { reset: Ef.func.isRequired }),
    !0 === globalThis.env.isDemoMode && console.warn('Ackee runs in demo mode'))
  const {
      statusLink: ey,
      useLoading: ty,
      useErrors: ny,
    } = (() => {
      const { link: e, useApolloNetworkStatusReducer: t } = Zl.createNetworkStatusNotifier()
      return { statusLink: e, useLoading: () => t(eu, 0) > 0, useErrors: () => t(tu, []) }
    })(),
    ry =
      ((iy = [
        ey,
        ((ay = (e, { headers: t }) => ({ headers: { ...t, Authorization: `Bearer ${su()}` } })),
        new Xi(function (e, t) {
          var n = O(e, [])
          return new Xr(function (r) {
            var i,
              a = !1
            return (
              Promise.resolve(n)
                .then(function (t) {
                  return ay(t, e.getContext())
                })
                .then(e.setContext)
                .then(function () {
                  a ||
                    (i = t(e).subscribe({ next: r.next.bind(r), error: r.error.bind(r), complete: r.complete.bind(r) }))
                })
                .catch(r.error.bind(r)),
              function () {
                ;((a = !0), i && i.unsubscribe())
              }
            )
          })
        })),
        new mu({ uri: '/api', headers: { 'Time-Zone': vu } }),
      ]),
      new is({ link: ea(iy), cache: new Vo({}) }))
  var iy, ay
  const oy = document.querySelector('#main')
  k.createRoot(oy).render(
    h.createElement(() => {
      const [e, t] = h.useState(Date.now()),
        n = ty(),
        r = (() => {
          const e = h.useMemo(() => bu(), []),
            [t, n] = h.useState(Uu(e.location))
          return (
            h.useEffect(
              () =>
                e.listen(({ location: e }) => {
                  n(Uu(e))
                }),
              [e],
            ),
            {
              setRoute: h.useCallback(
                (t) => {
                  e.push({ pathname: t })
                },
                [e],
              ),
              route: t,
            }
          )
        })(),
        i = (() => {
          const [e, t] = h.useReducer(cu, su()),
            n = h.useCallback((e) => t({ type: au, token: e }), [t])
          return { token: e, setToken: n, resetToken: h.useCallback(() => t({ type: ou }), [t]) }
        })(),
        a = (() => {
          const [e, t] = h.useReducer(kc, _c),
            n = h.useCallback((e, n) => t({ type: bc, modalId: gc(), payload: { type: e, props: n } }), [t])
          return {
            modals: e,
            addModal: n,
            removeModal: h.useCallback((e) => t({ type: Ec, modalId: e }), [t]),
            resetModals: h.useCallback(() => t({ type: wc }), [t]),
          }
        })(),
        o = (() => {
          const [e, t] = h.useReducer(lf, af())
          return {
            filters: e,
            setSortingFilter: h.useCallback((e) => t({ type: Hc, payload: e }), [t]),
            setRangeFilter: h.useCallback((e) => t({ type: Gc, payload: e }), [t]),
            setIntervalFilter: h.useCallback((e) => t({ type: Yc, payload: e }), [t]),
            setViewsTypeFilter: h.useCallback((e) => t({ type: Jc, payload: e }), [t]),
            setReferrersTypeFilter: h.useCallback((e) => t({ type: Xc, payload: e }), [t]),
            setDevicesTypeFilter: h.useCallback((e) => t({ type: Zc, payload: e }), [t]),
            setBrowsersTypeFilter: h.useCallback((e) => t({ type: ef, payload: e }), [t]),
            setSizesTypeFilter: h.useCallback((e) => t({ type: tf, payload: e }), [t]),
            setSystemsTypeFilter: h.useCallback((e) => t({ type: nf, payload: e }), [t]),
            resetFilters: h.useCallback(() => t({ type: rf }), [t]),
          }
        })(),
        s = h.useCallback(() => {
          ;(i.resetToken(), a.resetModals(), o.resetFilters(), ry.clearStore(), t(Date.now()))
        }, [i.resetToken, a.resetModals, o.resetFilters, ry.resetStore, t])
      var l
      return (
        h.useEffect(() => {
          if (0 != (!0 === navigator.platform.includes('Win')))
            return (
              document.body.classList.add('customScrollbar'),
              () => document.body.classList.remove('customScrollbar')
            )
        }, []),
        (l = r.route),
        h.useEffect(() => {
          document.scrollingElement.scrollTop = 0
        }, [l]),
        h.createElement(
          _i,
          { client: ry },
          h.createElement(
            Zv,
            { reset: s },
            h.createElement(Xv, { key: e, reset: s, useErrors: ny, loading: n, ...status, ...r, ...i, ...a, ...o }),
          ),
        )
      )
    }),
  )
})()
