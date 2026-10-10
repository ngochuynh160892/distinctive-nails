var gp = Object.create;
var {
  getPrototypeOf: wp,
  defineProperty: gl,
  getOwnPropertyNames: yp,
} = Object;
var kp = Object.prototype.hasOwnProperty;
function xp(e) {
  return this[e];
}
var bp,
  Sp,
  Ne = (e, t, r) => {
    var n = e != null && typeof e === "object";
    if (n) {
      var o = t ? (bp ??= new WeakMap()) : (Sp ??= new WeakMap()),
        l = o.get(e);
      if (l) return l;
    }
    r = e != null ? gp(wp(e)) : {};
    let i =
      t || !e || !e.__esModule
        ? gl(r, "default", { value: e, enumerable: !0 })
        : r;
    for (let u of yp(e))
      if (!kp.call(i, u)) gl(i, u, { get: xp.bind(e, u), enumerable: !0 });
    if (n) o.set(e, i);
    return i;
  };
var $n = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var Ep = (e) => e;
function Np(e, t) {
  this[e] = Ep.bind(null, t);
}
var Cp = (e, t) => {
  for (var r in t)
    gl(e, r, {
      get: t[r],
      enumerable: !0,
      configurable: !0,
      set: Np.bind(t, r),
    });
};
var _p = (e, t) => () => (e && (t = e((e = 0))), t);
var De = $n((Qp) => {
  var Dr = Symbol.for("react.element"),
    zp = Symbol.for("react.portal"),
    Lp = Symbol.for("react.fragment"),
    Tp = Symbol.for("react.strict_mode"),
    Pp = Symbol.for("react.profiler"),
    Rp = Symbol.for("react.provider"),
    Mp = Symbol.for("react.context"),
    Op = Symbol.for("react.forward_ref"),
    Up = Symbol.for("react.suspense"),
    Fp = Symbol.for("react.memo"),
    Ap = Symbol.for("react.lazy"),
    nu = Symbol.iterator;
  function Bp(e) {
    if (e === null || typeof e !== "object") return null;
    return (
      (e = (nu && e[nu]) || e["@@iterator"]),
      typeof e === "function" ? e : null
    );
  }
  var iu = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    au = Object.assign,
    uu = {};
  function rr(e, t, r) {
    ((this.props = e),
      (this.context = t),
      (this.refs = uu),
      (this.updater = r || iu));
  }
  rr.prototype.isReactComponent = {};
  rr.prototype.setState = function (e, t) {
    if (typeof e !== "object" && typeof e !== "function" && e != null)
      throw Error(
        "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
      );
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  rr.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function su() {}
  su.prototype = rr.prototype;
  function yl(e, t, r) {
    ((this.props = e),
      (this.context = t),
      (this.refs = uu),
      (this.updater = r || iu));
  }
  var kl = (yl.prototype = new su());
  kl.constructor = yl;
  au(kl, rr.prototype);
  kl.isPureReactComponent = !0;
  var ou = Array.isArray,
    cu = Object.prototype.hasOwnProperty,
    xl = { current: null },
    du = { key: !0, ref: !0, __self: !0, __source: !0 };
  function pu(e, t, r) {
    var n,
      o = {},
      l = null,
      i = null;
    if (t != null)
      for (n in (t.ref !== void 0 && (i = t.ref),
      t.key !== void 0 && (l = "" + t.key),
      t))
        cu.call(t, n) && !du.hasOwnProperty(n) && (o[n] = t[n]);
    var u = arguments.length - 2;
    if (u === 1) o.children = r;
    else if (1 < u) {
      for (var s = Array(u), f = 0; f < u; f++) s[f] = arguments[f + 2];
      o.children = s;
    }
    if (e && e.defaultProps)
      for (n in ((u = e.defaultProps), u)) o[n] === void 0 && (o[n] = u[n]);
    return {
      $$typeof: Dr,
      type: e,
      key: l,
      ref: i,
      props: o,
      _owner: xl.current,
    };
  }
  function Dp(e, t) {
    return {
      $$typeof: Dr,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner,
    };
  }
  function bl(e) {
    return typeof e === "object" && e !== null && e.$$typeof === Dr;
  }
  function Wp(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
      "$" +
      e.replace(/[=:]/g, function (r) {
        return t[r];
      })
    );
  }
  var lu = /\/+/g;
  function wl(e, t) {
    return typeof e === "object" && e !== null && e.key != null
      ? Wp("" + e.key)
      : t.toString(36);
  }
  function Qn(e, t, r, n, o) {
    var l = typeof e;
    if (l === "undefined" || l === "boolean") e = null;
    var i = !1;
    if (e === null) i = !0;
    else
      switch (l) {
        case "string":
        case "number":
          i = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case Dr:
            case zp:
              i = !0;
          }
      }
    if (i)
      return (
        (i = e),
        (o = o(i)),
        (e = n === "" ? "." + wl(i, 0) : n),
        ou(o)
          ? ((r = ""),
            e != null && (r = e.replace(lu, "$&/") + "/"),
            Qn(o, t, r, "", function (f) {
              return f;
            }))
          : o != null &&
            (bl(o) &&
              (o = Dp(
                o,
                r +
                  (!o.key || (i && i.key === o.key)
                    ? ""
                    : ("" + o.key).replace(lu, "$&/") + "/") +
                  e,
              )),
            t.push(o)),
        1
      );
    if (((i = 0), (n = n === "" ? "." : n + ":"), ou(e)))
      for (var u = 0; u < e.length; u++) {
        l = e[u];
        var s = n + wl(l, u);
        i += Qn(l, t, r, s, o);
      }
    else if (((s = Bp(e)), typeof s === "function"))
      for (e = s.call(e), u = 0; !(l = e.next()).done;)
        ((l = l.value), (s = n + wl(l, u++)), (i += Qn(l, t, r, s, o)));
    else if (l === "object")
      throw (
        (t = String(e)),
        Error(
          "Objects are not valid as a React child (found: " +
            (t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return i;
  }
  function Vn(e, t, r) {
    if (e == null) return e;
    var n = [],
      o = 0;
    return (
      Qn(e, n, "", "", function (l) {
        return t.call(r, l, o++);
      }),
      n
    );
  }
  function $p(e) {
    if (e._status === -1) {
      var t = e._result;
      ((t = t()),
        t.then(
          function (r) {
            if (e._status === 0 || e._status === -1)
              ((e._status = 1), (e._result = r));
          },
          function (r) {
            if (e._status === 0 || e._status === -1)
              ((e._status = 2), (e._result = r));
          },
        ),
        e._status === -1 && ((e._status = 0), (e._result = t)));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var me = { current: null },
    Hn = { transition: null },
    Vp = {
      ReactCurrentDispatcher: me,
      ReactCurrentBatchConfig: Hn,
      ReactCurrentOwner: xl,
    };
  function fu() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  Qp.Children = {
    map: Vn,
    forEach: function (e, t, r) {
      Vn(
        e,
        function () {
          t.apply(this, arguments);
        },
        r,
      );
    },
    count: function (e) {
      var t = 0;
      return (
        Vn(e, function () {
          t++;
        }),
        t
      );
    },
    toArray: function (e) {
      return (
        Vn(e, function (t) {
          return t;
        }) || []
      );
    },
    only: function (e) {
      if (!bl(e))
        throw Error(
          "React.Children.only expected to receive a single React element child.",
        );
      return e;
    },
  };
  Qp.Component = rr;
  Qp.Fragment = Lp;
  Qp.Profiler = Pp;
  Qp.PureComponent = yl;
  Qp.StrictMode = Tp;
  Qp.Suspense = Up;
  Qp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vp;
  Qp.act = fu;
  Qp.cloneElement = function (e, t, r) {
    if (e === null || e === void 0)
      throw Error(
        "React.cloneElement(...): The argument must be a React element, but you passed " +
          e +
          ".",
      );
    var n = au({}, e.props),
      o = e.key,
      l = e.ref,
      i = e._owner;
    if (t != null) {
      if (
        (t.ref !== void 0 && ((l = t.ref), (i = xl.current)),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
      )
        var u = e.type.defaultProps;
      for (s in t)
        cu.call(t, s) &&
          !du.hasOwnProperty(s) &&
          (n[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
    }
    var s = arguments.length - 2;
    if (s === 1) n.children = r;
    else if (1 < s) {
      u = Array(s);
      for (var f = 0; f < s; f++) u[f] = arguments[f + 2];
      n.children = u;
    }
    return { $$typeof: Dr, type: e.type, key: o, ref: l, props: n, _owner: i };
  };
  Qp.createContext = function (e) {
    return (
      (e = {
        $$typeof: Mp,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      }),
      (e.Provider = { $$typeof: Rp, _context: e }),
      (e.Consumer = e)
    );
  };
  Qp.createElement = pu;
  Qp.createFactory = function (e) {
    var t = pu.bind(null, e);
    return ((t.type = e), t);
  };
  Qp.createRef = function () {
    return { current: null };
  };
  Qp.forwardRef = function (e) {
    return { $$typeof: Op, render: e };
  };
  Qp.isValidElement = bl;
  Qp.lazy = function (e) {
    return { $$typeof: Ap, _payload: { _status: -1, _result: e }, _init: $p };
  };
  Qp.memo = function (e, t) {
    return { $$typeof: Fp, type: e, compare: t === void 0 ? null : t };
  };
  Qp.startTransition = function (e) {
    var t = Hn.transition;
    Hn.transition = {};
    try {
      e();
    } finally {
      Hn.transition = t;
    }
  };
  Qp.unstable_act = fu;
  Qp.useCallback = function (e, t) {
    return me.current.useCallback(e, t);
  };
  Qp.useContext = function (e) {
    return me.current.useContext(e);
  };
  Qp.useDebugValue = function () {};
  Qp.useDeferredValue = function (e) {
    return me.current.useDeferredValue(e);
  };
  Qp.useEffect = function (e, t) {
    return me.current.useEffect(e, t);
  };
  Qp.useId = function () {
    return me.current.useId();
  };
  Qp.useImperativeHandle = function (e, t, r) {
    return me.current.useImperativeHandle(e, t, r);
  };
  Qp.useInsertionEffect = function (e, t) {
    return me.current.useInsertionEffect(e, t);
  };
  Qp.useLayoutEffect = function (e, t) {
    return me.current.useLayoutEffect(e, t);
  };
  Qp.useMemo = function (e, t) {
    return me.current.useMemo(e, t);
  };
  Qp.useReducer = function (e, t, r) {
    return me.current.useReducer(e, t, r);
  };
  Qp.useRef = function (e) {
    return me.current.useRef(e);
  };
  Qp.useState = function (e) {
    return me.current.useState(e);
  };
  Qp.useSyncExternalStore = function (e, t, r) {
    return me.current.useSyncExternalStore(e, t, r);
  };
  Qp.useTransition = function () {
    return me.current.useTransition();
  };
  Qp.version = "18.3.1";
});
var ku = $n((zf) => {
  function El(e, t) {
    var r = e.length;
    e.push(t);
    e: for (; 0 < r;) {
      var n = (r - 1) >>> 1,
        o = e[n];
      if (0 < Kn(o, t)) ((e[n] = t), (e[r] = o), (r = n));
      else break e;
    }
  }
  function We(e) {
    return e.length === 0 ? null : e[0];
  }
  function Gn(e) {
    if (e.length === 0) return null;
    var t = e[0],
      r = e.pop();
    if (r !== t) {
      e[0] = r;
      e: for (var n = 0, o = e.length, l = o >>> 1; n < l;) {
        var i = 2 * (n + 1) - 1,
          u = e[i],
          s = i + 1,
          f = e[s];
        if (0 > Kn(u, r))
          s < o && 0 > Kn(f, u)
            ? ((e[n] = f), (e[s] = r), (n = s))
            : ((e[n] = u), (e[i] = r), (n = i));
        else if (s < o && 0 > Kn(f, r)) ((e[n] = f), (e[s] = r), (n = s));
        else break e;
      }
    }
    return t;
  }
  function Kn(e, t) {
    var r = e.sortIndex - t.sortIndex;
    return r !== 0 ? r : e.id - t.id;
  }
  if (typeof performance === "object" && typeof performance.now === "function")
    ((Nl = performance),
      (zf.unstable_now = function () {
        return Nl.now();
      }));
  else
    ((Yn = Date),
      (Cl = Yn.now()),
      (zf.unstable_now = function () {
        return Yn.now() - Cl;
      }));
  var Nl,
    Yn,
    Cl,
    Ie = [],
    vt = [],
    _f = 1,
    Te = null,
    se = 3,
    Jn = !1,
    Wt = !1,
    $r = !1,
    hu = typeof setTimeout === "function" ? setTimeout : null,
    vu = typeof clearTimeout === "function" ? clearTimeout : null,
    mu = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function _l(e) {
    for (var t = We(vt); t !== null;) {
      if (t.callback === null) Gn(vt);
      else if (t.startTime <= e)
        (Gn(vt), (t.sortIndex = t.expirationTime), El(Ie, t));
      else break;
      t = We(vt);
    }
  }
  function Ll(e) {
    if ((($r = !1), _l(e), !Wt))
      if (We(Ie) !== null) ((Wt = !0), Pl(Tl));
      else {
        var t = We(vt);
        t !== null && Rl(Ll, t.startTime - e);
      }
  }
  function Tl(e, t) {
    ((Wt = !1), $r && (($r = !1), vu(Vr), (Vr = -1)), (Jn = !0));
    var r = se;
    try {
      _l(t);
      for (
        Te = We(Ie);
        Te !== null && (!(Te.expirationTime > t) || (e && !yu()));
      ) {
        var n = Te.callback;
        if (typeof n === "function") {
          ((Te.callback = null), (se = Te.priorityLevel));
          var o = n(Te.expirationTime <= t);
          ((t = zf.unstable_now()),
            typeof o === "function"
              ? (Te.callback = o)
              : Te === We(Ie) && Gn(Ie),
            _l(t));
        } else Gn(Ie);
        Te = We(Ie);
      }
      if (Te !== null) var l = !0;
      else {
        var i = We(vt);
        (i !== null && Rl(Ll, i.startTime - t), (l = !1));
      }
      return l;
    } finally {
      ((Te = null), (se = r), (Jn = !1));
    }
  }
  var qn = !1,
    Xn = null,
    Vr = -1,
    gu = 5,
    wu = -1;
  function yu() {
    return zf.unstable_now() - wu < gu ? !1 : !0;
  }
  function Sl() {
    if (Xn !== null) {
      var e = zf.unstable_now();
      wu = e;
      var t = !0;
      try {
        t = Xn(!0, e);
      } finally {
        t ? Wr() : ((qn = !1), (Xn = null));
      }
    } else qn = !1;
  }
  var Wr;
  if (typeof mu === "function")
    Wr = function () {
      mu(Sl);
    };
  else if (typeof MessageChannel < "u")
    ((Zn = new MessageChannel()),
      (zl = Zn.port2),
      (Zn.port1.onmessage = Sl),
      (Wr = function () {
        zl.postMessage(null);
      }));
  else
    Wr = function () {
      hu(Sl, 0);
    };
  var Zn, zl;
  function Pl(e) {
    ((Xn = e), qn || ((qn = !0), Wr()));
  }
  function Rl(e, t) {
    Vr = hu(function () {
      e(zf.unstable_now());
    }, t);
  }
  zf.unstable_IdlePriority = 5;
  zf.unstable_ImmediatePriority = 1;
  zf.unstable_LowPriority = 4;
  zf.unstable_NormalPriority = 3;
  zf.unstable_Profiling = null;
  zf.unstable_UserBlockingPriority = 2;
  zf.unstable_cancelCallback = function (e) {
    e.callback = null;
  };
  zf.unstable_continueExecution = function () {
    Wt || Jn || ((Wt = !0), Pl(Tl));
  };
  zf.unstable_forceFrameRate = function (e) {
    0 > e || 125 < e
      ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
        )
      : (gu = 0 < e ? Math.floor(1000 / e) : 5);
  };
  zf.unstable_getCurrentPriorityLevel = function () {
    return se;
  };
  zf.unstable_getFirstCallbackNode = function () {
    return We(Ie);
  };
  zf.unstable_next = function (e) {
    switch (se) {
      case 1:
      case 2:
      case 3:
        var t = 3;
        break;
      default:
        t = se;
    }
    var r = se;
    se = t;
    try {
      return e();
    } finally {
      se = r;
    }
  };
  zf.unstable_pauseExecution = function () {};
  zf.unstable_requestPaint = function () {};
  zf.unstable_runWithPriority = function (e, t) {
    switch (e) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        e = 3;
    }
    var r = se;
    se = e;
    try {
      return t();
    } finally {
      se = r;
    }
  };
  zf.unstable_scheduleCallback = function (e, t, r) {
    var n = zf.unstable_now();
    switch (
      (typeof r === "object" && r !== null
        ? ((r = r.delay), (r = typeof r === "number" && 0 < r ? n + r : n))
        : (r = n),
      e)
    ) {
      case 1:
        var o = -1;
        break;
      case 2:
        o = 250;
        break;
      case 5:
        o = 1073741823;
        break;
      case 4:
        o = 1e4;
        break;
      default:
        o = 5000;
    }
    return (
      (o = r + o),
      (e = {
        id: _f++,
        callback: t,
        priorityLevel: e,
        startTime: r,
        expirationTime: o,
        sortIndex: -1,
      }),
      r > n
        ? ((e.sortIndex = r),
          El(vt, e),
          We(Ie) === null &&
            e === We(vt) &&
            ($r ? (vu(Vr), (Vr = -1)) : ($r = !0), Rl(Ll, r - n)))
        : ((e.sortIndex = o), El(Ie, e), Wt || Jn || ((Wt = !0), Pl(Tl))),
      e
    );
  };
  zf.unstable_shouldYield = yu;
  zf.unstable_wrapCallback = function (e) {
    var t = se;
    return function () {
      var r = se;
      se = t;
      try {
        return e.apply(this, arguments);
      } finally {
        se = r;
      }
    };
  };
});
var Ba = {};
Cp(Ba, {
  version: () => Od,
  unstable_renderSubtreeIntoContainer: () => Md,
  unstable_batchedUpdates: () => Rd,
  unmountComponentAtNode: () => Pd,
  render: () => Td,
  hydrateRoot: () => Ld,
  hydrate: () => zd,
  flushSync: () => _d,
  findDOMNode: () => Cd,
  createRoot: () => Nd,
  createPortal: () => Ed,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => Sd,
});
function b(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1;
    r < arguments.length;
    r++
  )
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
function er(e, t) {
  (Er(e, t), Er(e + "Capture", t));
}
function Er(e, t) {
  mn[e] = t;
  for (e = 0; e < t.length; e++) Cs.add(t[e]);
}
function Zf(e) {
  if (ei.call(bu, e)) return !0;
  if (ei.call(xu, e)) return !1;
  if (Xf.test(e)) return (bu[e] = !0);
  return ((xu[e] = !0), !1);
}
function Gf(e, t, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      if (n) return !1;
      if (r !== null) return !r.acceptsBooleans;
      return (
        (e = e.toLowerCase().slice(0, 5)),
        e !== "data-" && e !== "aria-"
      );
    default:
      return !1;
  }
}
function Jf(e, t, r, n) {
  if (t === null || typeof t > "u" || Gf(e, t, r, n)) return !0;
  if (n) return !1;
  if (r !== null)
    switch (r.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ge(e, t, r, n, o, l, i) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = o),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = i));
}
function Gi(e) {
  return e[1].toUpperCase();
}
function Ji(e, t, r, n) {
  var o = ue.hasOwnProperty(t) ? ue[t] : null;
  if (
    o !== null
      ? o.type !== 0
      : n ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")
  )
    (Jf(t, r, o, n) && (r = null),
      n || o === null
        ? Zf(t) &&
          (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
        : o.mustUseProperty
          ? (e[o.propertyName] = r === null ? (o.type === 3 ? !1 : "") : r)
          : ((t = o.attributeName),
            (n = o.attributeNamespace),
            r === null
              ? e.removeAttribute(t)
              : ((o = o.type),
                (r = o === 3 || (o === 4 && r === !0) ? "" : "" + r),
                n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
function Qr(e) {
  if (e === null || typeof e !== "object") return null;
  return (
    (e = (Su && e[Su]) || e["@@iterator"]),
    typeof e === "function" ? e : null
  );
}
function Jr(e) {
  if (Ml === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      Ml = (t && t[1]) || "";
    }
  return (
    `
` +
    Ml +
    e
  );
}
function Ul(e, t) {
  if (!e || Ol) return "";
  Ol = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect === "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (f) {
          var n = f;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (f) {
          n = f;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (f) {
        n = f;
      }
      e();
    }
  } catch (f) {
    if (f && n && typeof f.stack === "string") {
      for (
        var o = f.stack.split(`
`),
          l = n.stack.split(`
`),
          i = o.length - 1,
          u = l.length - 1;
        1 <= i && 0 <= u && o[i] !== l[u];
      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (o[i] !== l[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || o[i] !== l[u])) {
                var s =
                  `
` + o[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    ((Ol = !1), (Error.prepareStackTrace = r));
  }
  return (e = e ? e.displayName || e.name : "") ? Jr(e) : "";
}
function qf(e) {
  switch (e.tag) {
    case 5:
      return Jr(e.type);
    case 16:
      return Jr("Lazy");
    case 13:
      return Jr("Suspense");
    case 19:
      return Jr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Ul(e.type, !1)), e);
    case 11:
      return ((e = Ul(e.type.render, !1)), e);
    case 1:
      return ((e = Ul(e.type, !0)), e);
    default:
      return "";
  }
}
function oi(e) {
  if (e == null) return null;
  if (typeof e === "function") return e.displayName || e.name || null;
  if (typeof e === "string") return e;
  switch (e) {
    case ar:
      return "Fragment";
    case ir:
      return "Portal";
    case ti:
      return "Profiler";
    case qi:
      return "StrictMode";
    case ri:
      return "Suspense";
    case ni:
      return "SuspenseList";
  }
  if (typeof e === "object")
    switch (e.$$typeof) {
      case zs:
        return (e.displayName || "Context") + ".Consumer";
      case _s:
        return (e._context.displayName || "Context") + ".Provider";
      case Ii:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ji:
        return (
          (t = e.displayName || null),
          t !== null ? t : oi(e.type) || "Memo"
        );
      case wt:
        ((t = e._payload), (e = e._init));
        try {
          return oi(e(t));
        } catch (r) {}
    }
  return null;
}
function If(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return oi(t);
    case 8:
      return t === qi ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t === "function") return t.displayName || t.name || null;
      if (typeof t === "string") return t;
  }
  return null;
}
function Rt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ts(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function jf(e) {
  var t = Ts(e) ? "checked" : "value",
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof r < "u" &&
    typeof r.get === "function" &&
    typeof r.set === "function"
  ) {
    var { get: o, set: l } = r;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (i) {
          ((n = "" + i), l.call(this, i));
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (i) {
          n = "" + i;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function jn(e) {
  e._valueTracker || (e._valueTracker = jf(e));
}
function Ps(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    n = "";
  return (
    e && (n = Ts(e) ? (e.checked ? "true" : "false") : e.value),
    (e = n),
    e !== r ? (t.setValue(e), !0) : !1
  );
}
function No(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch (t) {
    return e.body;
  }
}
function li(e, t) {
  var r = t.checked;
  return J({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r != null ? r : e._wrapperState.initialChecked,
  });
}
function Eu(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked;
  ((r = Rt(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function Rs(e, t) {
  ((t = t.checked), t != null && Ji(e, "checked", t, !1));
}
function ii(e, t) {
  Rs(e, t);
  var r = Rt(t.value),
    n = t.type;
  if (r != null)
    if (n === "number") {
      if ((r === 0 && e.value === "") || e.value != r) e.value = "" + r;
    } else e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? ai(e, t.type, r)
    : t.hasOwnProperty("defaultValue") && ai(e, t.type, Rt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Nu(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (!(
      (n !== "submit" && n !== "reset") ||
      (t.value !== void 0 && t.value !== null)
    ))
      return;
    ((t = "" + e._wrapperState.initialValue),
      r || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((r = e.name),
    r !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== "" && (e.name = r));
}
function ai(e, t, r) {
  if (t !== "number" || No(e.ownerDocument) !== e)
    r == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + r && (e.defaultValue = "" + r);
}
function wr(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < r.length; o++) t["$" + r[o]] = !0;
    for (r = 0; r < e.length; r++)
      ((o = t.hasOwnProperty("$" + e[r].value)),
        e[r].selected !== o && (e[r].selected = o),
        o && n && (e[r].defaultSelected = !0));
  } else {
    ((r = "" + Rt(r)), (t = null));
    for (o = 0; o < e.length; o++) {
      if (e[o].value === r) {
        ((e[o].selected = !0), n && (e[o].defaultSelected = !0));
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ui(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(b(91));
  return J({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Cu(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(b(92));
      if (qr(r)) {
        if (1 < r.length) throw Error(b(93));
        r = r[0];
      }
      t = r;
    }
    (t == null && (t = ""), (r = t));
  }
  e._wrapperState = { initialValue: Rt(r) };
}
function Ms(e, t) {
  var r = Rt(t.value),
    n = Rt(t.defaultValue);
  (r != null &&
    ((r = "" + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = "" + n));
}
function _u(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Os(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function si(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Os(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
function hn(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
function Fs(e, t, r) {
  return t == null || typeof t === "boolean" || t === ""
    ? ""
    : r || typeof t !== "number" || t === 0 || (on.hasOwnProperty(e) && on[e])
      ? ("" + t).trim()
      : t + "px";
}
function As(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0,
        o = Fs(r, t[r], n);
      (r === "float" && (r = "cssFloat"), n ? e.setProperty(r, o) : (e[r] = o));
    }
}
function ci(e, t) {
  if (t) {
    if (tm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(b(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(b(60));
      if (
        typeof t.dangerouslySetInnerHTML !== "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(b(61));
    }
    if (t.style != null && typeof t.style !== "object") throw Error(b(62));
  }
}
function di(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is === "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
function ea(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
function zu(e) {
  if ((e = Mn(e))) {
    if (typeof fi !== "function") throw Error(b(280));
    var t = e.stateNode;
    t && ((t = jo(t)), fi(e.stateNode, e.type, t));
  }
}
function Bs(e) {
  yr ? (kr ? kr.push(e) : (kr = [e])) : (yr = e);
}
function Ds() {
  if (yr) {
    var e = yr,
      t = kr;
    if (((kr = yr = null), zu(e), t)) for (e = 0; e < t.length; e++) zu(t[e]);
  }
}
function Ws(e, t) {
  return e(t);
}
function $s() {}
function Vs(e, t, r) {
  if (Fl) return e(t, r);
  Fl = !0;
  try {
    return Ws(e, t, r);
  } finally {
    if (((Fl = !1), yr !== null || kr !== null)) ($s(), Ds());
  }
}
function vn(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = jo(r);
  if (n === null) return null;
  r = n[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((n = !n.disabled) ||
        ((e = e.type),
        (n = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !n));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r !== "function") throw Error(b(231, t, typeof r));
  return r;
}
function rm(e, t, r, n, o, l, i, u, s) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, f);
  } catch (h) {
    this.onError(h);
  }
}
function om(e, t, r, n, o, l, i, u, s) {
  ((ln = !1), (Co = null), rm.apply(nm, arguments));
}
function lm(e, t, r, n, o, l, i, u, s) {
  if ((om.apply(this, arguments), ln)) {
    if (ln) {
      var f = Co;
      ((ln = !1), (Co = null));
    } else throw Error(b(198));
    _o || ((_o = !0), (hi = f));
  }
}
function tr(e) {
  var t = e,
    r = e;
  if (e.alternate) for (; t.return;) t = t.return;
  else {
    e = t;
    do ((t = e), (t.flags & 4098) !== 0 && (r = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function Qs(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Lu(e) {
  if (tr(e) !== e) throw Error(b(188));
}
function im(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = tr(e)), t === null)) throw Error(b(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ;) {
    var o = r.return;
    if (o === null) break;
    var l = o.alternate;
    if (l === null) {
      if (((n = o.return), n !== null)) {
        r = n;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l;) {
        if (l === r) return (Lu(o), e);
        if (l === n) return (Lu(o), t);
        l = l.sibling;
      }
      throw Error(b(188));
    }
    if (r.return !== n.return) ((r = o), (n = l));
    else {
      for (var i = !1, u = o.child; u;) {
        if (u === r) {
          ((i = !0), (r = o), (n = l));
          break;
        }
        if (u === n) {
          ((i = !0), (n = o), (r = l));
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = l.child; u;) {
          if (u === r) {
            ((i = !0), (r = l), (n = o));
            break;
          }
          if (u === n) {
            ((i = !0), (n = l), (r = o));
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(b(189));
      }
    }
    if (r.alternate !== n) throw Error(b(190));
  }
  if (r.tag !== 3) throw Error(b(188));
  return r.stateNode.current === r ? e : t;
}
function Hs(e) {
  return ((e = im(e)), e !== null ? Ks(e) : null);
}
function Ks(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null;) {
    var t = Ks(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
function dm(e) {
  if (rt && typeof rt.onCommitFiberRoot === "function")
    try {
      rt.onCommitFiberRoot(Go, e, void 0, (e.current.flags & 128) === 128);
    } catch (t) {}
}
function mm(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((pm(e) / fm) | 0)) | 0);
}
function Ir(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Lo(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    i = r & 268435455;
  if (i !== 0) {
    var u = i & ~o;
    u !== 0 ? (n = Ir(u)) : ((l &= i), l !== 0 && (n = Ir(l)));
  } else ((i = r & ~o), i !== 0 ? (n = Ir(i)) : l !== 0 && (n = Ir(l)));
  if (n === 0) return 0;
  if (
    t !== 0 &&
    t !== n &&
    (t & o) === 0 &&
    ((o = n & -n), (l = t & -t), o >= l || (o === 16 && (l & 4194240) !== 0))
  )
    return t;
  if (((n & 4) !== 0 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= n; 0 < t;)
      ((r = 31 - Ke(t)), (o = 1 << r), (n |= e[r]), (t &= ~o));
  return n;
}
function hm(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5000;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function vm(e, t) {
  for (
    var {
      suspendedLanes: r,
      pingedLanes: n,
      expirationTimes: o,
      pendingLanes: l,
    } = e;
    0 < l;
  ) {
    var i = 31 - Ke(l),
      u = 1 << i,
      s = o[i];
    if (s === -1) {
      if ((u & r) === 0 || (u & n) !== 0) o[i] = hm(u, t);
    } else s <= t && (e.expiredLanes |= u);
    l &= ~u;
  }
}
function vi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Gs() {
  var e = to;
  return ((to <<= 1), (to & 4194240) === 0 && (to = 64), e);
}
function Al(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function Pn(e, t, r) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ke(t)),
    (e[t] = r));
}
function gm(e, t) {
  var r = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r;) {
    var o = 31 - Ke(r),
      l = 1 << o;
    ((t[o] = 0), (n[o] = -1), (e[o] = -1), (r &= ~l));
  }
}
function ra(e, t) {
  var r = (e.entangledLanes |= t);
  for (e = e.entanglements; r;) {
    var n = 31 - Ke(r),
      o = 1 << n;
    ((o & t) | (e[n] & t) && (e[n] |= t), (r &= ~o));
  }
}
function Js(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
  );
}
function Pu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Et = null;
      break;
    case "dragenter":
    case "dragleave":
      Nt = null;
      break;
    case "mouseover":
    case "mouseout":
      Ct = null;
      break;
    case "pointerover":
    case "pointerout":
      gn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      wn.delete(t.pointerId);
  }
}
function Hr(e, t, r, n, o, l) {
  if (e === null || e.nativeEvent !== l)
    return (
      (e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = Mn(t)), t !== null && na(t)),
      e
    );
  return (
    (e.eventSystemFlags |= n),
    (t = e.targetContainers),
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e
  );
}
function ym(e, t, r, n, o) {
  switch (t) {
    case "focusin":
      return ((Et = Hr(Et, e, t, r, n, o)), !0);
    case "dragenter":
      return ((Nt = Hr(Nt, e, t, r, n, o)), !0);
    case "mouseover":
      return ((Ct = Hr(Ct, e, t, r, n, o)), !0);
    case "pointerover":
      var l = o.pointerId;
      return (gn.set(l, Hr(gn.get(l) || null, e, t, r, n, o)), !0);
    case "gotpointercapture":
      return (
        (l = o.pointerId),
        wn.set(l, Hr(wn.get(l) || null, e, t, r, n, o)),
        !0
      );
  }
  return !1;
}
function tc(e) {
  var t = Ht(e.target);
  if (t !== null) {
    var r = tr(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = Qs(r)), t !== null)) {
          ((e.blockedOn = t),
            ec(e.priority, function () {
              Is(r);
            }));
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function mo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length;) {
    var r = wi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      ((pi = n), r.target.dispatchEvent(n), (pi = null));
    } else return ((t = Mn(r)), t !== null && na(t), (e.blockedOn = r), !1);
    t.shift();
  }
  return !0;
}
function Ru(e, t, r) {
  mo(e) && r.delete(t);
}
function km() {
  ((gi = !1),
    Et !== null && mo(Et) && (Et = null),
    Nt !== null && mo(Nt) && (Nt = null),
    Ct !== null && mo(Ct) && (Ct = null),
    gn.forEach(Ru),
    wn.forEach(Ru));
}
function Kr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    gi ||
      ((gi = !0), X.unstable_scheduleCallback(X.unstable_NormalPriority, km)));
}
function yn(e) {
  function t(o) {
    return Kr(o, e);
  }
  if (0 < no.length) {
    Kr(no[0], e);
    for (var r = 1; r < no.length; r++) {
      var n = no[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  (Et !== null && Kr(Et, e),
    Nt !== null && Kr(Nt, e),
    Ct !== null && Kr(Ct, e),
    gn.forEach(t),
    wn.forEach(t));
  for (r = 0; r < kt.length; r++)
    ((n = kt[r]), n.blockedOn === e && (n.blockedOn = null));
  for (; 0 < kt.length && ((r = kt[0]), r.blockedOn === null);)
    (tc(r), r.blockedOn === null && kt.shift());
}
function xm(e, t, r, n) {
  var o = W,
    l = xr.transition;
  xr.transition = null;
  try {
    ((W = 1), oa(e, t, r, n));
  } finally {
    ((W = o), (xr.transition = l));
  }
}
function bm(e, t, r, n) {
  var o = W,
    l = xr.transition;
  xr.transition = null;
  try {
    ((W = 4), oa(e, t, r, n));
  } finally {
    ((W = o), (xr.transition = l));
  }
}
function oa(e, t, r, n) {
  if (To) {
    var o = wi(e, t, r, n);
    if (o === null) (Ql(e, t, n, Po, r), Pu(e, n));
    else if (ym(o, e, t, r, n)) n.stopPropagation();
    else if ((Pu(e, n), t & 4 && -1 < wm.indexOf(e))) {
      for (; o !== null;) {
        var l = Mn(o);
        if (
          (l !== null && qs(l),
          (l = wi(e, t, r, n)),
          l === null && Ql(e, t, n, Po, r),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && n.stopPropagation();
    } else Ql(e, t, n, null, r);
  }
}
function wi(e, t, r, n) {
  if (((Po = null), (e = ea(n)), (e = Ht(e)), e !== null))
    if (((t = tr(e)), t === null)) e = null;
    else if (((r = t.tag), r === 13)) {
      if (((e = Qs(t)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((Po = e), null);
}
function rc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (sm()) {
        case ta:
          return 1;
        case Xs:
          return 4;
        case zo:
        case cm:
          return 16;
        case Zs:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
function nc() {
  if (ho) return ho;
  var e,
    t = la,
    r = t.length,
    n,
    o = "value" in bt ? bt.value : bt.textContent,
    l = o.length;
  for (e = 0; e < r && t[e] === o[e]; e++);
  var i = r - e;
  for (n = 1; n <= i && t[r - n] === o[l - n]; n++);
  return (ho = o.slice(e, 1 < n ? 1 - n : void 0));
}
function vo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function oo() {
  return !0;
}
function Mu() {
  return !1;
}
function Le(e) {
  function t(r, n, o, l, i) {
    ((this._reactName = r),
      (this._targetInst = o),
      (this.type = n),
      (this.nativeEvent = l),
      (this.target = i),
      (this.currentTarget = null));
    for (var u in e)
      e.hasOwnProperty(u) && ((r = e[u]), (this[u] = r ? r(l) : l[u]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? oo
        : Mu),
      (this.isPropagationStopped = Mu),
      this
    );
  }
  return (
    J(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue !== "unknown" && (r.returnValue = !1),
          (this.isDefaultPrevented = oo));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble !== "unknown" && (r.cancelBubble = !0),
          (this.isPropagationStopped = oo));
      },
      persist: function () {},
      isPersistent: oo,
    }),
    t
  );
}
function Um(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Om[e]) ? !!t[e] : !1;
}
function aa() {
  return Um;
}
function lc(e, t) {
  switch (e) {
    case "keyup":
      return Km.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ic(e) {
  return ((e = e.detail), typeof e === "object" && "data" in e ? e.data : null);
}
function Xm(e, t) {
  switch (e) {
    case "compositionend":
      return ic(t);
    case "keypress":
      if (t.which !== 32) return null;
      return ((Bu = !0), Au);
    case "textInput":
      return ((e = t.data), e === Au && Bu ? null : e);
    default:
      return null;
  }
}
function Zm(e, t) {
  if (ur)
    return e === "compositionend" || (!ua && lc(e, t))
      ? ((e = nc()), (ho = la = bt = null), (ur = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return oc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
function Du(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Gm[e.type] : t === "textarea" ? !0 : !1;
}
function ac(e, t, r, n) {
  (Bs(n),
    (t = Ro(t, "onChange")),
    0 < t.length &&
      ((r = new ia("onChange", "change", null, r, n)),
      e.push({ event: r, listeners: t })));
}
function Jm(e) {
  wc(e, 0);
}
function qo(e) {
  var t = dr(e);
  if (Ps(t)) return e;
}
function qm(e, t) {
  if (e === "change") return t;
}
function Wu() {
  un && (un.detachEvent("onpropertychange", sc), (kn = un = null));
}
function sc(e) {
  if (e.propertyName === "value" && qo(kn)) {
    var t = [];
    (ac(t, kn, e, ea(e)), Vs(Jm, t));
  }
}
function Im(e, t, r) {
  e === "focusin"
    ? (Wu(), (un = t), (kn = r), un.attachEvent("onpropertychange", sc))
    : e === "focusout" && Wu();
}
function jm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return qo(kn);
}
function eh(e, t) {
  if (e === "click") return qo(t);
}
function th(e, t) {
  if (e === "input" || e === "change") return qo(t);
}
function rh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
function xn(e, t) {
  if (Xe(e, t)) return !0;
  if (
    typeof e !== "object" ||
    e === null ||
    typeof t !== "object" ||
    t === null
  )
    return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var o = r[n];
    if (!ei.call(t, o) || !Xe(e[o], t[o])) return !1;
  }
  return !0;
}
function $u(e) {
  for (; e && e.firstChild;) e = e.firstChild;
  return e;
}
function Vu(e, t) {
  var r = $u(e);
  e = 0;
  for (var n; r;) {
    if (r.nodeType === 3) {
      if (((n = e + r.textContent.length), e <= t && n >= t))
        return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r;) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = $u(r);
  }
}
function cc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? cc(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function dc() {
  for (var e = window, t = No(); t instanceof e.HTMLIFrameElement;) {
    try {
      var r = typeof t.contentWindow.location.href === "string";
    } catch (n) {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = No(e.document);
  }
  return t;
}
function sa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function nh(e) {
  var t = dc(),
    r = e.focusedElem,
    n = e.selectionRange;
  if (
    t !== r &&
    r &&
    r.ownerDocument &&
    cc(r.ownerDocument.documentElement, r)
  ) {
    if (n !== null && sa(r)) {
      if (
        ((t = n.start),
        (e = n.end),
        e === void 0 && (e = t),
        "selectionStart" in r)
      )
        ((r.selectionStart = t),
          (r.selectionEnd = Math.min(e, r.value.length)));
      else if (
        ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = r.textContent.length,
          l = Math.min(n.start, o);
        ((n = n.end === void 0 ? l : Math.min(n.end, o)),
          !e.extend && l > n && ((o = n), (n = l), (l = o)),
          (o = Vu(r, l)));
        var i = Vu(r, n);
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          l > n
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    t = [];
    for (e = r; (e = e.parentNode);)
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    typeof r.focus === "function" && r.focus();
    for (r = 0; r < t.length; r++)
      ((e = t[r]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
function Qu(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  ki ||
    sr == null ||
    sr !== No(n) ||
    ((n = sr),
    "selectionStart" in n && sa(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = (
          (n.ownerDocument && n.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (sn && xn(sn, n)) ||
      ((sn = n),
      (n = Ro(yi, "onSelect")),
      0 < n.length &&
        ((t = new ia("onSelect", "select", null, t, r)),
        e.push({ event: t, listeners: n }),
        (t.target = sr))));
}
function lo(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r["Webkit" + e] = "webkit" + t),
    (r["Moz" + e] = "moz" + t),
    r
  );
}
function Io(e) {
  if ($l[e]) return $l[e];
  if (!cr[e]) return e;
  var t = cr[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in pc) return ($l[e] = t[r]);
  return e;
}
function Ot(e, t) {
  (gc.set(e, t), er(t, [e]));
}
function Ku(e, t, r) {
  var n = e.type || "unknown-event";
  ((e.currentTarget = r), lm(n, t, void 0, e), (e.currentTarget = null));
}
function wc(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      o = n.event;
    n = n.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var i = n.length - 1; 0 <= i; i--) {
          var u = n[i],
            s = u.instance,
            f = u.currentTarget;
          if (((u = u.listener), s !== l && o.isPropagationStopped())) break e;
          (Ku(o, u, f), (l = s));
        }
      else
        for (i = 0; i < n.length; i++) {
          if (
            ((u = n[i]),
            (s = u.instance),
            (f = u.currentTarget),
            (u = u.listener),
            s !== l && o.isPropagationStopped())
          )
            break e;
          (Ku(o, u, f), (l = s));
        }
    }
  }
  if (_o) throw ((e = hi), (_o = !1), (hi = null), e);
}
function V(e, t) {
  var r = t[_i];
  r === void 0 && (r = t[_i] = new Set());
  var n = e + "__bubble";
  r.has(n) || (yc(t, e, 2, !1), r.add(n));
}
function Vl(e, t, r) {
  var n = 0;
  (t && (n |= 4), yc(r, e, n, t));
}
function bn(e) {
  if (!e[io]) {
    ((e[io] = !0),
      Cs.forEach(function (r) {
        r !== "selectionchange" && (lh.has(r) || Vl(r, !1, e), Vl(r, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[io] || ((t[io] = !0), Vl("selectionchange", !1, t));
  }
}
function yc(e, t, r, n) {
  switch (rc(t)) {
    case 1:
      var o = xm;
      break;
    case 4:
      o = bm;
      break;
    default:
      o = oa;
  }
  ((r = o.bind(null, t, r, e)),
    (o = void 0),
    !mi ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    n
      ? o !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: o })
        : e.addEventListener(t, r, !0)
      : o !== void 0
        ? e.addEventListener(t, r, { passive: o })
        : e.addEventListener(t, r, !1));
}
function Ql(e, t, r, n, o) {
  var l = n;
  if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
    e: for (;;) {
      if (n === null) return;
      var i = n.tag;
      if (i === 3 || i === 4) {
        var u = n.stateNode.containerInfo;
        if (u === o || (u.nodeType === 8 && u.parentNode === o)) break;
        if (i === 4)
          for (i = n.return; i !== null;) {
            var s = i.tag;
            if (s === 3 || s === 4) {
              if (
                ((s = i.stateNode.containerInfo),
                s === o || (s.nodeType === 8 && s.parentNode === o))
              )
                return;
            }
            i = i.return;
          }
        for (; u !== null;) {
          if (((i = Ht(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            n = l = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      n = n.return;
    }
  Vs(function () {
    var f = l,
      h = ea(r),
      w = [];
    e: {
      var y = gc.get(e);
      if (y !== void 0) {
        var S = ia,
          N = e;
        switch (e) {
          case "keypress":
            if (vo(r) === 0) break e;
          case "keydown":
          case "keyup":
            S = Am;
            break;
          case "focusin":
            ((N = "focus"), (S = Wl));
            break;
          case "focusout":
            ((N = "blur"), (S = Wl));
            break;
          case "beforeblur":
          case "afterblur":
            S = Wl;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            S = Ou;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = Nm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = Wm;
            break;
          case fc:
          case mc:
          case hc:
            S = zm;
            break;
          case vc:
            S = Vm;
            break;
          case "scroll":
            S = Sm;
            break;
          case "wheel":
            S = Hm;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = Tm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = Fu;
        }
        var E = (t & 4) !== 0,
          R = !E && e === "scroll",
          p = E ? (y !== null ? y + "Capture" : null) : y;
        E = [];
        for (var d = f, m; d !== null;) {
          m = d;
          var x = m.stateNode;
          if (
            (m.tag === 5 &&
              x !== null &&
              ((m = x),
              p !== null && ((x = vn(d, p)), x != null && E.push(Sn(d, x, m)))),
            R)
          )
            break;
          d = d.return;
        }
        0 < E.length &&
          ((y = new S(y, N, null, r, h)), w.push({ event: y, listeners: E }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (
          ((y = e === "mouseover" || e === "pointerover"),
          (S = e === "mouseout" || e === "pointerout"),
          y &&
            r !== pi &&
            (N = r.relatedTarget || r.fromElement) &&
            (Ht(N) || N[ct]))
        )
          break e;
        if (S || y) {
          if (
            ((y =
              h.window === h
                ? h
                : (y = h.ownerDocument)
                  ? y.defaultView || y.parentWindow
                  : window),
            S)
          ) {
            if (
              ((N = r.relatedTarget || r.toElement),
              (S = f),
              (N = N ? Ht(N) : null),
              N !== null &&
                ((R = tr(N)), N !== R || (N.tag !== 5 && N.tag !== 6)))
            )
              N = null;
          } else ((S = null), (N = f));
          if (S !== N) {
            if (
              ((E = Ou),
              (x = "onMouseLeave"),
              (p = "onMouseEnter"),
              (d = "mouse"),
              e === "pointerout" || e === "pointerover")
            )
              ((E = Fu),
                (x = "onPointerLeave"),
                (p = "onPointerEnter"),
                (d = "pointer"));
            if (
              ((R = S == null ? y : dr(S)),
              (m = N == null ? y : dr(N)),
              (y = new E(x, d + "leave", S, r, h)),
              (y.target = R),
              (y.relatedTarget = m),
              (x = null),
              Ht(h) === f &&
                ((E = new E(p, d + "enter", N, r, h)),
                (E.target = m),
                (E.relatedTarget = R),
                (x = E)),
              (R = x),
              S && N)
            )
              t: {
                ((E = S), (p = N), (d = 0));
                for (m = E; m; m = or(m)) d++;
                m = 0;
                for (x = p; x; x = or(x)) m++;
                for (; 0 < d - m;) ((E = or(E)), d--);
                for (; 0 < m - d;) ((p = or(p)), m--);
                for (; d--;) {
                  if (E === p || (p !== null && E === p.alternate)) break t;
                  ((E = or(E)), (p = or(p)));
                }
                E = null;
              }
            else E = null;
            (S !== null && Yu(w, y, S, E, !1),
              N !== null && R !== null && Yu(w, R, N, E, !0));
          }
        }
      }
      e: {
        if (
          ((y = f ? dr(f) : window),
          (S = y.nodeName && y.nodeName.toLowerCase()),
          S === "select" || (S === "input" && y.type === "file"))
        )
          var z = qm;
        else if (Du(y))
          if (uc) z = th;
          else {
            z = jm;
            var P = Im;
          }
        else
          (S = y.nodeName) &&
            S.toLowerCase() === "input" &&
            (y.type === "checkbox" || y.type === "radio") &&
            (z = eh);
        if (z && (z = z(e, f))) {
          ac(w, z, r, h);
          break e;
        }
        (P && P(e, y, f),
          e === "focusout" &&
            (P = y._wrapperState) &&
            P.controlled &&
            y.type === "number" &&
            ai(y, "number", y.value));
      }
      switch (((P = f ? dr(f) : window), e)) {
        case "focusin":
          if (Du(P) || P.contentEditable === "true")
            ((sr = P), (yi = f), (sn = null));
          break;
        case "focusout":
          sn = yi = sr = null;
          break;
        case "mousedown":
          ki = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((ki = !1), Qu(w, r, h));
          break;
        case "selectionchange":
          if (oh) break;
        case "keydown":
        case "keyup":
          Qu(w, r, h);
      }
      var M;
      if (ua)
        e: {
          switch (e) {
            case "compositionstart":
              var O = "onCompositionStart";
              break e;
            case "compositionend":
              O = "onCompositionEnd";
              break e;
            case "compositionupdate":
              O = "onCompositionUpdate";
              break e;
          }
          O = void 0;
        }
      else
        ur
          ? lc(e, r) && (O = "onCompositionEnd")
          : e === "keydown" && r.keyCode === 229 && (O = "onCompositionStart");
      if (
        (O &&
          (oc &&
            r.locale !== "ko" &&
            (ur || O !== "onCompositionStart"
              ? O === "onCompositionEnd" && ur && (M = nc())
              : ((bt = h),
                (la = "value" in bt ? bt.value : bt.textContent),
                (ur = !0))),
          (P = Ro(f, O)),
          0 < P.length &&
            ((O = new Uu(O, e, null, r, h)),
            w.push({ event: O, listeners: P }),
            M ? (O.data = M) : ((M = ic(r)), M !== null && (O.data = M)))),
        (M = Ym ? Xm(e, r) : Zm(e, r)))
      )
        ((f = Ro(f, "onBeforeInput")),
          0 < f.length &&
            ((h = new Uu("onBeforeInput", "beforeinput", null, r, h)),
            w.push({ event: h, listeners: f }),
            (h.data = M)));
    }
    wc(w, t);
  });
}
function Sn(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function Ro(e, t) {
  for (var r = t + "Capture", n = []; e !== null;) {
    var o = e,
      l = o.stateNode;
    (o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = vn(e, r)),
      l != null && n.unshift(Sn(e, l, o)),
      (l = vn(e, t)),
      l != null && n.push(Sn(e, l, o))),
      (e = e.return));
  }
  return n;
}
function or(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e ? e : null;
}
function Yu(e, t, r, n, o) {
  for (var l = t._reactName, i = []; r !== null && r !== n;) {
    var u = r,
      s = u.alternate,
      f = u.stateNode;
    if (s !== null && s === n) break;
    (u.tag === 5 &&
      f !== null &&
      ((u = f),
      o
        ? ((s = vn(r, l)), s != null && i.unshift(Sn(r, s, u)))
        : o || ((s = vn(r, l)), s != null && i.push(Sn(r, s, u)))),
      (r = r.return));
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
function Xu(e) {
  return (typeof e === "string" ? e : "" + e)
    .replace(
      ih,
      `
`,
    )
    .replace(ah, "");
}
function ao(e, t, r) {
  if (((t = Xu(t)), Xu(e) !== t && r)) throw Error(b(425));
}
function Mo() {}
function Ni(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children === "string" ||
    typeof t.children === "number" ||
    (typeof t.dangerouslySetInnerHTML === "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
function ch(e) {
  setTimeout(function () {
    throw e;
  });
}
function Hl(e, t) {
  var r = t,
    n = 0;
  do {
    var o = r.nextSibling;
    if ((e.removeChild(r), o && o.nodeType === 8))
      if (((r = o.data), r === "/$")) {
        if (n === 0) {
          (e.removeChild(o), yn(t));
          return;
        }
        n--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
    r = o;
  } while (r);
  yn(t);
}
function _t(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Gu(e) {
  e = e.previousSibling;
  for (var t = 0; e;) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e;
        t--;
      } else r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
function Ht(e) {
  var t = e[tt];
  if (t) return t;
  for (var r = e.parentNode; r;) {
    if ((t = r[ct] || r[tt])) {
      if (
        ((r = t.alternate),
        t.child !== null || (r !== null && r.child !== null))
      )
        for (e = Gu(e); e !== null;) {
          if ((r = e[tt])) return r;
          e = Gu(e);
        }
      return t;
    }
    ((e = r), (r = e.parentNode));
  }
  return null;
}
function Mn(e) {
  return (
    (e = e[tt] || e[ct]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function dr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(b(33));
}
function jo(e) {
  return e[En] || null;
}
function Ut(e) {
  return { current: e };
}
function Q(e) {
  0 > pr || ((e.current = zi[pr]), (zi[pr] = null), pr--);
}
function $(e, t) {
  (pr++, (zi[pr] = e.current), (e.current = t));
}
function Nr(e, t) {
  var r = e.type.contextTypes;
  if (!r) return Mt;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    l;
  for (l in r) o[l] = t[l];
  return (
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function be(e) {
  return ((e = e.childContextTypes), e !== null && e !== void 0);
}
function Oo() {
  (Q(xe), Q(fe));
}
function Ju(e, t, r) {
  if (fe.current !== Mt) throw Error(b(168));
  ($(fe, t), $(xe, r));
}
function kc(e, t, r) {
  var n = e.stateNode;
  if (((t = t.childContextTypes), typeof n.getChildContext !== "function"))
    return r;
  n = n.getChildContext();
  for (var o in n) if (!(o in t)) throw Error(b(108, If(e) || "Unknown", o));
  return J({}, r, n);
}
function Uo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Mt),
    (Gt = fe.current),
    $(fe, e),
    $(xe, xe.current),
    !0
  );
}
function qu(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(b(169));
  (r
    ? ((e = kc(e, t, Gt)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      Q(xe),
      Q(fe),
      $(fe, e))
    : Q(xe),
    $(xe, r));
}
function xc(e) {
  lt === null ? (lt = [e]) : lt.push(e);
}
function fh(e) {
  ((el = !0), xc(e));
}
function Ft() {
  if (!Kl && lt !== null) {
    Kl = !0;
    var e = 0,
      t = W;
    try {
      var r = lt;
      for (W = 1; e < r.length; e++) {
        var n = r[e];
        do n = n(!0);
        while (n !== null);
      }
      ((lt = null), (el = !1));
    } catch (o) {
      throw (lt !== null && (lt = lt.slice(e + 1)), Ys(ta, Ft), o);
    } finally {
      ((W = t), (Kl = !1));
    }
  }
  return null;
}
function Vt(e, t) {
  ((fr[mr++] = Ao), (fr[mr++] = Fo), (Fo = e), (Ao = t));
}
function bc(e, t, r) {
  ((Pe[Re++] = it), (Pe[Re++] = at), (Pe[Re++] = Jt), (Jt = e));
  var n = it;
  e = at;
  var o = 32 - Ke(n) - 1;
  ((n &= ~(1 << o)), (r += 1));
  var l = 32 - Ke(t) + o;
  if (30 < l) {
    var i = o - (o % 5);
    ((l = (n & ((1 << i) - 1)).toString(32)),
      (n >>= i),
      (o -= i),
      (it = (1 << (32 - Ke(t) + o)) | (r << o) | n),
      (at = l + e));
  } else ((it = (1 << l) | (r << o) | n), (at = e));
}
function ca(e) {
  e.return !== null && (Vt(e, 1), bc(e, 1, 0));
}
function da(e) {
  for (; e === Fo;)
    ((Fo = fr[--mr]), (fr[mr] = null), (Ao = fr[--mr]), (fr[mr] = null));
  for (; e === Jt;)
    ((Jt = Pe[--Re]),
      (Pe[Re] = null),
      (at = Pe[--Re]),
      (Pe[Re] = null),
      (it = Pe[--Re]),
      (Pe[Re] = null));
}
function Sc(e, t) {
  var r = Me(5, null, null, 0);
  ((r.elementType = "DELETED"),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r));
}
function Iu(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (t =
          t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ze = e), (_e = _t(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ze = e), (_e = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = Jt !== null ? { id: it, overflow: at } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = Me(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (ze = e),
            (_e = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Li(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ti(e) {
  if (Y) {
    var t = _e;
    if (t) {
      var r = t;
      if (!Iu(e, t)) {
        if (Li(e)) throw Error(b(418));
        t = _t(r.nextSibling);
        var n = ze;
        t && Iu(e, t)
          ? Sc(n, r)
          : ((e.flags = (e.flags & -4097) | 2), (Y = !1), (ze = e));
      }
    } else {
      if (Li(e)) throw Error(b(418));
      ((e.flags = (e.flags & -4097) | 2), (Y = !1), (ze = e));
    }
  }
}
function ju(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
    e = e.return;
  ze = e;
}
function uo(e) {
  if (e !== ze) return !1;
  if (!Y) return (ju(e), (Y = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ni(e.type, e.memoizedProps))),
    t && (t = _e))
  ) {
    if (Li(e)) throw (Ec(), Error(b(418)));
    for (; t;) (Sc(e, t), (t = _t(t.nextSibling)));
  }
  if ((ju(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(b(317));
    e: {
      e = e.nextSibling;
      for (t = 0; e;) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              _e = _t(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      _e = null;
    }
  } else _e = ze ? _t(e.stateNode.nextSibling) : null;
  return !0;
}
function Ec() {
  for (var e = _e; e;) e = _t(e.nextSibling);
}
function Cr() {
  ((_e = ze = null), (Y = !1));
}
function pa(e) {
  He === null ? (He = [e]) : He.push(e);
}
function Xr(e, t, r) {
  if (
    ((e = r.ref),
    e !== null && typeof e !== "function" && typeof e !== "object")
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(b(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(b(147, e));
      var o = n,
        l = "" + e;
      if (
        t !== null &&
        t.ref !== null &&
        typeof t.ref === "function" &&
        t.ref._stringRef === l
      )
        return t.ref;
      return (
        (t = function (i) {
          var u = o.refs;
          i === null ? delete u[l] : (u[l] = i);
        }),
        (t._stringRef = l),
        t
      );
    }
    if (typeof e !== "string") throw Error(b(284));
    if (!r._owner) throw Error(b(290, e));
  }
  return e;
}
function so(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      b(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function es(e) {
  var t = e._init;
  return t(e._payload);
}
function Nc(e) {
  function t(p, d) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [d]), (p.flags |= 16)) : m.push(d);
    }
  }
  function r(p, d) {
    if (!e) return null;
    for (; d !== null;) (t(p, d), (d = d.sibling));
    return null;
  }
  function n(p, d) {
    for (p = new Map(); d !== null;)
      (d.key !== null ? p.set(d.key, d) : p.set(d.index, d), (d = d.sibling));
    return p;
  }
  function o(p, d) {
    return ((p = Pt(p, d)), (p.index = 0), (p.sibling = null), p);
  }
  function l(p, d, m) {
    if (((p.index = m), !e)) return ((p.flags |= 1048576), d);
    if (((m = p.alternate), m !== null))
      return ((m = m.index), m < d ? ((p.flags |= 2), d) : m);
    return ((p.flags |= 2), d);
  }
  function i(p) {
    return (e && p.alternate === null && (p.flags |= 2), p);
  }
  function u(p, d, m, x) {
    if (d === null || d.tag !== 6)
      return ((d = Il(m, p.mode, x)), (d.return = p), d);
    return ((d = o(d, m)), (d.return = p), d);
  }
  function s(p, d, m, x) {
    var z = m.type;
    if (z === ar) return h(p, d, m.props.children, x, m.key);
    if (
      d !== null &&
      (d.elementType === z ||
        (typeof z === "object" &&
          z !== null &&
          z.$$typeof === wt &&
          es(z) === d.type))
    )
      return ((x = o(d, m.props)), (x.ref = Xr(p, d, m)), (x.return = p), x);
    return (
      (x = Eo(m.type, m.key, m.props, null, p.mode, x)),
      (x.ref = Xr(p, d, m)),
      (x.return = p),
      x
    );
  }
  function f(p, d, m, x) {
    if (
      d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== m.containerInfo ||
      d.stateNode.implementation !== m.implementation
    )
      return ((d = jl(m, p.mode, x)), (d.return = p), d);
    return ((d = o(d, m.children || [])), (d.return = p), d);
  }
  function h(p, d, m, x, z) {
    if (d === null || d.tag !== 7)
      return ((d = Zt(m, p.mode, x, z)), (d.return = p), d);
    return ((d = o(d, m)), (d.return = p), d);
  }
  function w(p, d, m) {
    if ((typeof d === "string" && d !== "") || typeof d === "number")
      return ((d = Il("" + d, p.mode, m)), (d.return = p), d);
    if (typeof d === "object" && d !== null) {
      switch (d.$$typeof) {
        case In:
          return (
            (m = Eo(d.type, d.key, d.props, null, p.mode, m)),
            (m.ref = Xr(p, null, d)),
            (m.return = p),
            m
          );
        case ir:
          return ((d = jl(d, p.mode, m)), (d.return = p), d);
        case wt:
          var x = d._init;
          return w(p, x(d._payload), m);
      }
      if (qr(d) || Qr(d))
        return ((d = Zt(d, p.mode, m, null)), (d.return = p), d);
      so(p, d);
    }
    return null;
  }
  function y(p, d, m, x) {
    var z = d !== null ? d.key : null;
    if ((typeof m === "string" && m !== "") || typeof m === "number")
      return z !== null ? null : u(p, d, "" + m, x);
    if (typeof m === "object" && m !== null) {
      switch (m.$$typeof) {
        case In:
          return m.key === z ? s(p, d, m, x) : null;
        case ir:
          return m.key === z ? f(p, d, m, x) : null;
        case wt:
          return ((z = m._init), y(p, d, z(m._payload), x));
      }
      if (qr(m) || Qr(m)) return z !== null ? null : h(p, d, m, x, null);
      so(p, m);
    }
    return null;
  }
  function S(p, d, m, x, z) {
    if ((typeof x === "string" && x !== "") || typeof x === "number")
      return ((p = p.get(m) || null), u(d, p, "" + x, z));
    if (typeof x === "object" && x !== null) {
      switch (x.$$typeof) {
        case In:
          return (
            (p = p.get(x.key === null ? m : x.key) || null),
            s(d, p, x, z)
          );
        case ir:
          return (
            (p = p.get(x.key === null ? m : x.key) || null),
            f(d, p, x, z)
          );
        case wt:
          var P = x._init;
          return S(p, d, m, P(x._payload), z);
      }
      if (qr(x) || Qr(x)) return ((p = p.get(m) || null), h(d, p, x, z, null));
      so(d, x);
    }
    return null;
  }
  function N(p, d, m, x) {
    for (
      var z = null, P = null, M = d, O = (d = 0), I = null;
      M !== null && O < m.length;
      O++
    ) {
      M.index > O ? ((I = M), (M = null)) : (I = M.sibling);
      var A = y(p, M, m[O], x);
      if (A === null) {
        M === null && (M = I);
        break;
      }
      (e && M && A.alternate === null && t(p, M),
        (d = l(A, d, O)),
        P === null ? (z = A) : (P.sibling = A),
        (P = A),
        (M = I));
    }
    if (O === m.length) return (r(p, M), Y && Vt(p, O), z);
    if (M === null) {
      for (; O < m.length; O++)
        ((M = w(p, m[O], x)),
          M !== null &&
            ((d = l(M, d, O)),
            P === null ? (z = M) : (P.sibling = M),
            (P = M)));
      return (Y && Vt(p, O), z);
    }
    for (M = n(p, M); O < m.length; O++)
      ((I = S(M, p, O, m[O], x)),
        I !== null &&
          (e && I.alternate !== null && M.delete(I.key === null ? O : I.key),
          (d = l(I, d, O)),
          P === null ? (z = I) : (P.sibling = I),
          (P = I)));
    return (
      e &&
        M.forEach(function (Je) {
          return t(p, Je);
        }),
      Y && Vt(p, O),
      z
    );
  }
  function E(p, d, m, x) {
    var z = Qr(m);
    if (typeof z !== "function") throw Error(b(150));
    if (((m = z.call(m)), m == null)) throw Error(b(151));
    for (
      var P = (z = null), M = d, O = (d = 0), I = null, A = m.next();
      M !== null && !A.done;
      O++, A = m.next()
    ) {
      M.index > O ? ((I = M), (M = null)) : (I = M.sibling);
      var Je = y(p, M, A.value, x);
      if (Je === null) {
        M === null && (M = I);
        break;
      }
      (e && M && Je.alternate === null && t(p, M),
        (d = l(Je, d, O)),
        P === null ? (z = Je) : (P.sibling = Je),
        (P = Je),
        (M = I));
    }
    if (A.done) return (r(p, M), Y && Vt(p, O), z);
    if (M === null) {
      for (; !A.done; O++, A = m.next())
        ((A = w(p, A.value, x)),
          A !== null &&
            ((d = l(A, d, O)),
            P === null ? (z = A) : (P.sibling = A),
            (P = A)));
      return (Y && Vt(p, O), z);
    }
    for (M = n(p, M); !A.done; O++, A = m.next())
      ((A = S(M, p, O, A.value, x)),
        A !== null &&
          (e && A.alternate !== null && M.delete(A.key === null ? O : A.key),
          (d = l(A, d, O)),
          P === null ? (z = A) : (P.sibling = A),
          (P = A)));
    return (
      e &&
        M.forEach(function (fl) {
          return t(p, fl);
        }),
      Y && Vt(p, O),
      z
    );
  }
  function R(p, d, m, x) {
    if (
      (typeof m === "object" &&
        m !== null &&
        m.type === ar &&
        m.key === null &&
        (m = m.props.children),
      typeof m === "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case In:
          e: {
            for (var z = m.key, P = d; P !== null;) {
              if (P.key === z) {
                if (((z = m.type), z === ar)) {
                  if (P.tag === 7) {
                    (r(p, P.sibling),
                      (d = o(P, m.props.children)),
                      (d.return = p),
                      (p = d));
                    break e;
                  }
                } else if (
                  P.elementType === z ||
                  (typeof z === "object" &&
                    z !== null &&
                    z.$$typeof === wt &&
                    es(z) === P.type)
                ) {
                  (r(p, P.sibling),
                    (d = o(P, m.props)),
                    (d.ref = Xr(p, P, m)),
                    (d.return = p),
                    (p = d));
                  break e;
                }
                r(p, P);
                break;
              } else t(p, P);
              P = P.sibling;
            }
            m.type === ar
              ? ((d = Zt(m.props.children, p.mode, x, m.key)),
                (d.return = p),
                (p = d))
              : ((x = Eo(m.type, m.key, m.props, null, p.mode, x)),
                (x.ref = Xr(p, d, m)),
                (x.return = p),
                (p = x));
          }
          return i(p);
        case ir:
          e: {
            for (P = m.key; d !== null;) {
              if (d.key === P)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === m.containerInfo &&
                  d.stateNode.implementation === m.implementation
                ) {
                  (r(p, d.sibling),
                    (d = o(d, m.children || [])),
                    (d.return = p),
                    (p = d));
                  break e;
                } else {
                  r(p, d);
                  break;
                }
              else t(p, d);
              d = d.sibling;
            }
            ((d = jl(m, p.mode, x)), (d.return = p), (p = d));
          }
          return i(p);
        case wt:
          return ((P = m._init), R(p, d, P(m._payload), x));
      }
      if (qr(m)) return N(p, d, m, x);
      if (Qr(m)) return E(p, d, m, x);
      so(p, m);
    }
    return (typeof m === "string" && m !== "") || typeof m === "number"
      ? ((m = "" + m),
        d !== null && d.tag === 6
          ? (r(p, d.sibling), (d = o(d, m)), (d.return = p), (p = d))
          : (r(p, d), (d = Il(m, p.mode, x)), (d.return = p), (p = d)),
        i(p))
      : r(p, d);
  }
  return R;
}
function ma() {
  fa = hr = Do = null;
}
function ha(e) {
  var t = Bo.current;
  (Q(Bo), (e._currentValue = t));
}
function Pi(e, t, r) {
  for (; e !== null;) {
    var n = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
        : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
      e === r)
    )
      break;
    e = e.return;
  }
}
function br(e, t) {
  ((Do = e),
    (fa = hr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) !== 0 && (ke = !0), (e.firstContext = null)));
}
function Ue(e) {
  var t = e._currentValue;
  if (fa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), hr === null)) {
      if (Do === null) throw Error(b(308));
      ((hr = e), (Do.dependencies = { lanes: 0, firstContext: e }));
    } else hr = hr.next = e;
  return t;
}
function va(e) {
  Kt === null ? (Kt = [e]) : Kt.push(e);
}
function _c(e, t, r, n) {
  var o = t.interleaved;
  return (
    o === null ? ((r.next = r), va(t)) : ((r.next = o.next), (o.next = r)),
    (t.interleaved = r),
    dt(e, n)
  );
}
function dt(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), (r = e));
  for (e = e.return; e !== null;)
    ((e.childLanes |= t),
      (r = e.alternate),
      r !== null && (r.childLanes |= t),
      (r = e),
      (e = e.return));
  return r.tag === 3 ? r.stateNode : null;
}
function ga(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function zc(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function ut(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function zt(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (((n = n.shared), (B & 2) !== 0)) {
    var o = n.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (n.pending = t),
      dt(e, r)
    );
  }
  return (
    (o = n.interleaved),
    o === null ? ((t.next = t), va(n)) : ((t.next = o.next), (o.next = t)),
    (n.interleaved = t),
    dt(e, r)
  );
}
function wo(e, t, r) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
  ) {
    var n = t.lanes;
    ((n &= e.pendingLanes), (r |= n), (t.lanes = r), ra(e, r));
  }
}
function ts(e, t) {
  var { updateQueue: r, alternate: n } = e;
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var o = null,
      l = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var i = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        (l === null ? (o = l = i) : (l = l.next = i), (r = r.next));
      } while (r !== null);
      l === null ? (o = l = t) : (l = l.next = t);
    } else o = l = t;
    ((r = {
      baseState: n.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: l,
      shared: n.shared,
      effects: n.effects,
    }),
      (e.updateQueue = r));
    return;
  }
  ((e = r.lastBaseUpdate),
    e === null ? (r.firstBaseUpdate = t) : (e.next = t),
    (r.lastBaseUpdate = t));
}
function Wo(e, t, r, n) {
  var o = e.updateQueue;
  yt = !1;
  var { firstBaseUpdate: l, lastBaseUpdate: i } = o,
    u = o.shared.pending;
  if (u !== null) {
    o.shared.pending = null;
    var s = u,
      f = s.next;
    ((s.next = null), i === null ? (l = f) : (i.next = f), (i = s));
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== i &&
        (u === null ? (h.firstBaseUpdate = f) : (u.next = f),
        (h.lastBaseUpdate = s)));
  }
  if (l !== null) {
    var w = o.baseState;
    ((i = 0), (h = f = s = null), (u = l));
    do {
      var { lane: y, eventTime: S } = u;
      if ((n & y) === y) {
        h !== null &&
          (h = h.next =
            {
              eventTime: S,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var N = e,
            E = u;
          switch (((y = t), (S = r), E.tag)) {
            case 1:
              if (((N = E.payload), typeof N === "function")) {
                w = N.call(S, w, y);
                break e;
              }
              w = N;
              break e;
            case 3:
              N.flags = (N.flags & -65537) | 128;
            case 0:
              if (
                ((N = E.payload),
                (y = typeof N === "function" ? N.call(S, w, y) : N),
                y === null || y === void 0)
              )
                break e;
              w = J({}, w, y);
              break e;
            case 2:
              yt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (y = o.effects),
          y === null ? (o.effects = [u]) : y.push(u));
      } else
        ((S = {
          eventTime: S,
          lane: y,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((f = h = S), (s = w)) : (h = h.next = S),
          (i |= y));
      if (((u = u.next), u === null))
        if (((u = o.shared.pending), u === null)) break;
        else
          ((y = u),
            (u = y.next),
            (y.next = null),
            (o.lastBaseUpdate = y),
            (o.shared.pending = null));
    } while (1);
    if (
      (h === null && (s = w),
      (o.baseState = s),
      (o.firstBaseUpdate = f),
      (o.lastBaseUpdate = h),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do ((i |= o.lane), (o = o.next));
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    ((It |= i), (e.lanes = i), (e.memoizedState = w));
  }
}
function rs(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        o = n.callback;
      if (o !== null) {
        if (((n.callback = null), (n = r), typeof o !== "function"))
          throw Error(b(191, o));
        o.call(n);
      }
    }
}
function Yt(e) {
  if (e === On) throw Error(b(174));
  return e;
}
function wa(e, t) {
  switch (($(Cn, t), $(Nn, e), $(nt, On), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : si(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = si(t, e)));
  }
  (Q(nt), $(nt, t));
}
function zr() {
  (Q(nt), Q(Nn), Q(Cn));
}
function Lc(e) {
  Yt(Cn.current);
  var t = Yt(nt.current),
    r = si(t, e.type);
  t !== r && ($(Nn, e), $(nt, r));
}
function ya(e) {
  Nn.current === e && (Q(nt), Q(Nn));
}
function $o(e) {
  for (var t = e; t !== null;) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (
        r !== null &&
        ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.flags & 128) !== 0) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null;) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
function ka() {
  for (var e = 0; e < Yl.length; e++)
    Yl[e]._workInProgressVersionPrimary = null;
  Yl.length = 0;
}
function ce() {
  throw Error(b(321));
}
function xa(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!Xe(e[r], t[r])) return !1;
  return !0;
}
function ba(e, t, r, n, o, l) {
  if (
    ((qt = l),
    (G = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (yo.current = e === null || e.memoizedState === null ? yh : kh),
    (e = r(n, o)),
    cn)
  ) {
    l = 0;
    do {
      if (((cn = !1), (_n = 0), 25 <= l)) throw Error(b(301));
      ((l += 1),
        (oe = te = null),
        (t.updateQueue = null),
        (yo.current = xh),
        (e = r(n, o)));
    } while (cn);
  }
  if (
    ((yo.current = Qo),
    (t = te !== null && te.next !== null),
    (qt = 0),
    (oe = te = G = null),
    (Vo = !1),
    t)
  )
    throw Error(b(300));
  return e;
}
function Sa() {
  var e = _n !== 0;
  return ((_n = 0), e);
}
function et() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (oe === null ? (G.memoizedState = oe = e) : (oe = oe.next = e), oe);
}
function Fe() {
  if (te === null) {
    var e = G.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = te.next;
  var t = oe === null ? G.memoizedState : oe.next;
  if (t !== null) ((oe = t), (te = e));
  else {
    if (e === null) throw Error(b(310));
    ((te = e),
      (e = {
        memoizedState: te.memoizedState,
        baseState: te.baseState,
        baseQueue: te.baseQueue,
        queue: te.queue,
        next: null,
      }),
      oe === null ? (G.memoizedState = oe = e) : (oe = oe.next = e));
  }
  return oe;
}
function zn(e, t) {
  return typeof t === "function" ? t(e) : t;
}
function Zl(e) {
  var t = Fe(),
    r = t.queue;
  if (r === null) throw Error(b(311));
  r.lastRenderedReducer = e;
  var n = te,
    o = n.baseQueue,
    l = r.pending;
  if (l !== null) {
    if (o !== null) {
      var i = o.next;
      ((o.next = l.next), (l.next = i));
    }
    ((n.baseQueue = o = l), (r.pending = null));
  }
  if (o !== null) {
    ((l = o.next), (n = n.baseState));
    var u = (i = null),
      s = null,
      f = l;
    do {
      var h = f.lane;
      if ((qt & h) === h)
        (s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: f.action,
              hasEagerState: f.hasEagerState,
              eagerState: f.eagerState,
              next: null,
            }),
          (n = f.hasEagerState ? f.eagerState : e(n, f.action)));
      else {
        var w = {
          lane: h,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null,
        };
        (s === null ? ((u = s = w), (i = n)) : (s = s.next = w),
          (G.lanes |= h),
          (It |= h));
      }
      f = f.next;
    } while (f !== null && f !== l);
    (s === null ? (i = n) : (s.next = u),
      Xe(n, t.memoizedState) || (ke = !0),
      (t.memoizedState = n),
      (t.baseState = i),
      (t.baseQueue = s),
      (r.lastRenderedState = n));
  }
  if (((e = r.interleaved), e !== null)) {
    o = e;
    do ((l = o.lane), (G.lanes |= l), (It |= l), (o = o.next));
    while (o !== e);
  } else o === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function Gl(e) {
  var t = Fe(),
    r = t.queue;
  if (r === null) throw Error(b(311));
  r.lastRenderedReducer = e;
  var { dispatch: n, pending: o } = r,
    l = t.memoizedState;
  if (o !== null) {
    r.pending = null;
    var i = (o = o.next);
    do ((l = e(l, i.action)), (i = i.next));
    while (i !== o);
    (Xe(l, t.memoizedState) || (ke = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (r.lastRenderedState = l));
  }
  return [l, n];
}
function Tc() {}
function Pc(e, t) {
  var r = G,
    n = Fe(),
    o = t(),
    l = !Xe(n.memoizedState, o);
  if (
    (l && ((n.memoizedState = o), (ke = !0)),
    (n = n.queue),
    Ea(Oc.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || l || (oe !== null && oe.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      Ln(9, Mc.bind(null, r, n, o, t), void 0, null),
      le === null)
    )
      throw Error(b(349));
    (qt & 30) !== 0 || Rc(r, t, o);
  }
  return o;
}
function Rc(e, t, r) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = G.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (G.updateQueue = t),
        (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e)));
}
function Mc(e, t, r, n) {
  ((t.value = r), (t.getSnapshot = n), Uc(t) && Fc(e));
}
function Oc(e, t, r) {
  return r(function () {
    Uc(t) && Fc(e);
  });
}
function Uc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !Xe(e, r);
  } catch (n) {
    return !0;
  }
}
function Fc(e) {
  var t = dt(e, 1);
  t !== null && Ye(t, e, 1, -1);
}
function ns(e) {
  var t = et();
  return (
    typeof e === "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: zn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = wh.bind(null, G, e)),
    [t.memoizedState, e]
  );
}
function Ln(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    (t = G.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (G.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
    e
  );
}
function Ac() {
  return Fe().memoizedState;
}
function ko(e, t, r, n) {
  var o = et();
  ((G.flags |= e),
    (o.memoizedState = Ln(1 | t, r, void 0, n === void 0 ? null : n)));
}
function tl(e, t, r, n) {
  var o = Fe();
  n = n === void 0 ? null : n;
  var l = void 0;
  if (te !== null) {
    var i = te.memoizedState;
    if (((l = i.destroy), n !== null && xa(n, i.deps))) {
      o.memoizedState = Ln(t, r, l, n);
      return;
    }
  }
  ((G.flags |= e), (o.memoizedState = Ln(1 | t, r, l, n)));
}
function os(e, t) {
  return ko(8390656, 8, e, t);
}
function Ea(e, t) {
  return tl(2048, 8, e, t);
}
function Bc(e, t) {
  return tl(4, 2, e, t);
}
function Dc(e, t) {
  return tl(4, 4, e, t);
}
function Wc(e, t) {
  if (typeof t === "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t !== null && t !== void 0)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function $c(e, t, r) {
  return (
    (r = r !== null && r !== void 0 ? r.concat([e]) : null),
    tl(4, 4, Wc.bind(null, t, e), r)
  );
}
function Na() {}
function Vc(e, t) {
  var r = Fe();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  if (n !== null && t !== null && xa(t, n[1])) return n[0];
  return ((r.memoizedState = [e, t]), e);
}
function Qc(e, t) {
  var r = Fe();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  if (n !== null && t !== null && xa(t, n[1])) return n[0];
  return ((e = e()), (r.memoizedState = [e, t]), e);
}
function Hc(e, t, r) {
  if ((qt & 21) === 0)
    return (
      e.baseState && ((e.baseState = !1), (ke = !0)),
      (e.memoizedState = r)
    );
  return (
    Xe(r, t) || ((r = Gs()), (G.lanes |= r), (It |= r), (e.baseState = !0)),
    t
  );
}
function vh(e, t) {
  var r = W;
  ((W = r !== 0 && 4 > r ? r : 4), e(!0));
  var n = Xl.transition;
  Xl.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((W = r), (Xl.transition = n));
  }
}
function Kc() {
  return Fe().memoizedState;
}
function gh(e, t, r) {
  var n = Tt(e);
  if (
    ((r = {
      lane: n,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Yc(e))
  )
    Xc(t, r);
  else if (((r = _c(e, t, r, n)), r !== null)) {
    var o = ve();
    (Ye(r, e, n, o), Zc(r, t, n));
  }
}
function wh(e, t, r) {
  var n = Tt(e),
    o = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (Yc(e)) Xc(t, o);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = l(i, r);
        if (((o.hasEagerState = !0), (o.eagerState = u), Xe(u, i))) {
          var s = t.interleaved;
          (s === null
            ? ((o.next = o), va(t))
            : ((o.next = s.next), (s.next = o)),
            (t.interleaved = o));
          return;
        }
      } catch (f) {
      } finally {
      }
    ((r = _c(e, t, o, n)),
      r !== null && ((o = ve()), Ye(r, e, n, o), Zc(r, t, n)));
  }
}
function Yc(e) {
  var t = e.alternate;
  return e === G || (t !== null && t === G);
}
function Xc(e, t) {
  cn = Vo = !0;
  var r = e.pending;
  (r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
    (e.pending = t));
}
function Zc(e, t, r) {
  if ((r & 4194240) !== 0) {
    var n = t.lanes;
    ((n &= e.pendingLanes), (r |= n), (t.lanes = r), ra(e, r));
  }
}
function Ve(e, t) {
  if (e && e.defaultProps) {
    ((t = J({}, t)), (e = e.defaultProps));
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
function Ri(e, t, r, n) {
  ((t = e.memoizedState),
    (r = r(n, t)),
    (r = r === null || r === void 0 ? t : J({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r));
}
function ls(e, t, r, n, o, l, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate === "function"
      ? e.shouldComponentUpdate(n, l, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !xn(r, n) || !xn(o, l)
        : !0
  );
}
function Gc(e, t, r) {
  var n = !1,
    o = Mt,
    l = t.contextType;
  return (
    typeof l === "object" && l !== null
      ? (l = Ue(l))
      : ((o = be(t) ? Gt : fe.current),
        (n = t.contextTypes),
        (l = (n = n !== null && n !== void 0) ? Nr(e, o) : Mt)),
    (t = new t(r, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = rl),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function is(e, t, r, n) {
  ((e = t.state),
    typeof t.componentWillReceiveProps === "function" &&
      t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps === "function" &&
      t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && rl.enqueueReplaceState(t, t.state, null));
}
function Mi(e, t, r, n) {
  var o = e.stateNode;
  ((o.props = r), (o.state = e.memoizedState), (o.refs = {}), ga(e));
  var l = t.contextType;
  (typeof l === "object" && l !== null
    ? (o.context = Ue(l))
    : ((l = be(t) ? Gt : fe.current), (o.context = Nr(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l === "function" && (Ri(e, t, l, r), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps === "function" ||
      typeof o.getSnapshotBeforeUpdate === "function" ||
      (typeof o.UNSAFE_componentWillMount !== "function" &&
        typeof o.componentWillMount !== "function") ||
      ((t = o.state),
      typeof o.componentWillMount === "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount === "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && rl.enqueueReplaceState(o, o.state, null),
      Wo(e, r, o, n),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount === "function" && (e.flags |= 4194308));
}
function Lr(e, t) {
  try {
    var r = "",
      n = t;
    do ((r += qf(n)), (n = n.return));
    while (n);
    var o = r;
  } catch (l) {
    o =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Jl(e, t, r) {
  return {
    value: e,
    source: null,
    stack: r != null ? r : null,
    digest: t != null ? t : null,
  };
}
function Oi(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
function Jc(e, t, r) {
  ((r = ut(-1, r)), (r.tag = 3), (r.payload = { element: null }));
  var n = t.value;
  return (
    (r.callback = function () {
      (Ko || ((Ko = !0), (Hi = n)), Oi(e, t));
    }),
    r
  );
}
function qc(e, t, r) {
  ((r = ut(-1, r)), (r.tag = 3));
  var n = e.type.getDerivedStateFromError;
  if (typeof n === "function") {
    var o = t.value;
    ((r.payload = function () {
      return n(o);
    }),
      (r.callback = function () {
        Oi(e, t);
      }));
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch === "function" &&
      (r.callback = function () {
        (Oi(e, t),
          typeof n !== "function" &&
            (Lt === null ? (Lt = new Set([this])) : Lt.add(this)));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    r
  );
}
function as(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new bh();
    var o = new Set();
    n.set(t, o);
  } else ((o = n.get(t)), o === void 0 && ((o = new Set()), n.set(t, o)));
  o.has(r) || (o.add(r), (e = Fh.bind(null, e, t, r)), t.then(e, e));
}
function us(e) {
  do {
    var t;
    if ((t = e.tag === 13))
      ((t = e.memoizedState),
        (t = t !== null ? (t.dehydrated !== null ? !0 : !1) : !0));
    if (t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ss(e, t, r, n, o) {
  if ((e.mode & 1) === 0)
    return (
      e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null
              ? (r.tag = 17)
              : ((t = ut(-1, 1)), (t.tag = 2), zt(r, t, 1))),
          (r.lanes |= 1)),
      e
    );
  return ((e.flags |= 65536), (e.lanes = o), e);
}
function he(e, t, r, n) {
  t.child = e === null ? Cc(t, null, r, n) : _r(t, e.child, r, n);
}
function cs(e, t, r, n, o) {
  r = r.render;
  var l = t.ref;
  if ((br(t, o), (n = ba(e, t, r, n, l, o)), (r = Sa()), e !== null && !ke))
    return (
      (t.updateQueue = e.updateQueue),
      (t.flags &= -2053),
      (e.lanes &= ~o),
      pt(e, t, o)
    );
  return (Y && r && ca(t), (t.flags |= 1), he(e, t, n, o), t.child);
}
function ds(e, t, r, n, o) {
  if (e === null) {
    var l = r.type;
    if (
      typeof l === "function" &&
      !Ma(l) &&
      l.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
    )
      return ((t.tag = 15), (t.type = l), Ic(e, t, l, n, o));
    return (
      (e = Eo(r.type, null, n, t, t.mode, o)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  if (((l = e.child), (e.lanes & o) === 0)) {
    var i = l.memoizedProps;
    if (
      ((r = r.compare), (r = r !== null ? r : xn), r(i, n) && e.ref === t.ref)
    )
      return pt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Pt(l, n)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ic(e, t, r, n, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (xn(l, n) && e.ref === t.ref)
      if (((ke = !1), (t.pendingProps = n = l), (e.lanes & o) !== 0))
        (e.flags & 131072) !== 0 && (ke = !0);
      else return ((t.lanes = e.lanes), pt(e, t, o));
  }
  return Ui(e, t, r, n, o);
}
function jc(e, t, r) {
  var n = t.pendingProps,
    o = n.children,
    l = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if ((t.mode & 1) === 0)
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        $(gr, Ce),
        (Ce |= r));
    else {
      if ((r & 1073741824) === 0)
        return (
          (e = l !== null ? l.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          $(gr, Ce),
          (Ce |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = l !== null ? l.baseLanes : r),
        $(gr, Ce),
        (Ce |= n));
    }
  else
    (l !== null ? ((n = l.baseLanes | r), (t.memoizedState = null)) : (n = r),
      $(gr, Ce),
      (Ce |= n));
  return (he(e, t, o, r), t.child);
}
function ed(e, t) {
  var r = t.ref;
  if ((e === null && r !== null) || (e !== null && e.ref !== r))
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ui(e, t, r, n, o) {
  var l = be(r) ? Gt : fe.current;
  if (
    ((l = Nr(t, l)),
    br(t, o),
    (r = ba(e, t, r, n, l, o)),
    (n = Sa()),
    e !== null && !ke)
  )
    return (
      (t.updateQueue = e.updateQueue),
      (t.flags &= -2053),
      (e.lanes &= ~o),
      pt(e, t, o)
    );
  return (Y && n && ca(t), (t.flags |= 1), he(e, t, r, o), t.child);
}
function ps(e, t, r, n, o) {
  if (be(r)) {
    var l = !0;
    Uo(t);
  } else l = !1;
  if ((br(t, o), t.stateNode === null))
    (xo(e, t), Gc(t, r, n), Mi(t, r, n, o), (n = !0));
  else if (e === null) {
    var { stateNode: i, memoizedProps: u } = t;
    i.props = u;
    var s = i.context,
      f = r.contextType;
    typeof f === "object" && f !== null
      ? (f = Ue(f))
      : ((f = be(r) ? Gt : fe.current), (f = Nr(t, f)));
    var h = r.getDerivedStateFromProps,
      w =
        typeof h === "function" ||
        typeof i.getSnapshotBeforeUpdate === "function";
    (w ||
      (typeof i.UNSAFE_componentWillReceiveProps !== "function" &&
        typeof i.componentWillReceiveProps !== "function") ||
      ((u !== n || s !== f) && is(t, i, n, f)),
      (yt = !1));
    var y = t.memoizedState;
    ((i.state = y),
      Wo(t, n, i, o),
      (s = t.memoizedState),
      u !== n || y !== s || xe.current || yt
        ? (typeof h === "function" && (Ri(t, r, h, n), (s = t.memoizedState)),
          (u = yt || ls(t, r, u, n, y, s, f))
            ? (w ||
                (typeof i.UNSAFE_componentWillMount !== "function" &&
                  typeof i.componentWillMount !== "function") ||
                (typeof i.componentWillMount === "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount === "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount === "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount === "function" &&
                (t.flags |= 4194308),
              (t.memoizedProps = n),
              (t.memoizedState = s)),
          (i.props = n),
          (i.state = s),
          (i.context = f),
          (n = u))
        : (typeof i.componentDidMount === "function" && (t.flags |= 4194308),
          (n = !1)));
  } else {
    ((i = t.stateNode),
      zc(e, t),
      (u = t.memoizedProps),
      (f = t.type === t.elementType ? u : Ve(t.type, u)),
      (i.props = f),
      (w = t.pendingProps),
      (y = i.context),
      (s = r.contextType),
      typeof s === "object" && s !== null
        ? (s = Ue(s))
        : ((s = be(r) ? Gt : fe.current), (s = Nr(t, s))));
    var S = r.getDerivedStateFromProps;
    ((h =
      typeof S === "function" ||
      typeof i.getSnapshotBeforeUpdate === "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps !== "function" &&
        typeof i.componentWillReceiveProps !== "function") ||
      ((u !== w || y !== s) && is(t, i, n, s)),
      (yt = !1),
      (y = t.memoizedState),
      (i.state = y),
      Wo(t, n, i, o));
    var N = t.memoizedState;
    u !== w || y !== N || xe.current || yt
      ? (typeof S === "function" && (Ri(t, r, S, n), (N = t.memoizedState)),
        (f = yt || ls(t, r, f, n, y, N, s) || !1)
          ? (h ||
              (typeof i.UNSAFE_componentWillUpdate !== "function" &&
                typeof i.componentWillUpdate !== "function") ||
              (typeof i.componentWillUpdate === "function" &&
                i.componentWillUpdate(n, N, s),
              typeof i.UNSAFE_componentWillUpdate === "function" &&
                i.UNSAFE_componentWillUpdate(n, N, s)),
            typeof i.componentDidUpdate === "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate === "function" &&
              (t.flags |= 1024))
          : (typeof i.componentDidUpdate !== "function" ||
              (u === e.memoizedProps && y === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate !== "function" ||
              (u === e.memoizedProps && y === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = n),
            (t.memoizedState = N)),
        (i.props = n),
        (i.state = N),
        (i.context = s),
        (n = f))
      : (typeof i.componentDidUpdate !== "function" ||
          (u === e.memoizedProps && y === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate !== "function" ||
          (u === e.memoizedProps && y === e.memoizedState) ||
          (t.flags |= 1024),
        (n = !1));
  }
  return Fi(e, t, r, n, l, o);
}
function Fi(e, t, r, n, o, l) {
  ed(e, t);
  var i = (t.flags & 128) !== 0;
  if (!n && !i) return (o && qu(t, r, !1), pt(e, t, l));
  ((n = t.stateNode), (Sh.current = t));
  var u =
    i && typeof r.getDerivedStateFromError !== "function" ? null : n.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = _r(t, e.child, null, l)), (t.child = _r(t, null, u, l)))
      : he(e, t, u, l),
    (t.memoizedState = n.state),
    o && qu(t, r, !0),
    t.child
  );
}
function td(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Ju(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ju(e, t.context, !1),
    wa(e, t.containerInfo));
}
function fs(e, t, r, n, o) {
  return (Cr(), pa(o), (t.flags |= 256), he(e, t, r, n), t.child);
}
function Bi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function rd(e, t, r) {
  var n = t.pendingProps,
    o = Z.current,
    l = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    u)
  )
    ((l = !0), (t.flags &= -129));
  else if (e === null || e.memoizedState !== null) o |= 1;
  if (($(Z, o & 1), e === null)) {
    if (
      (Ti(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null))
    )
      return (
        (t.mode & 1) === 0
          ? (t.lanes = 1)
          : e.data === "$!"
            ? (t.lanes = 8)
            : (t.lanes = 1073741824),
        null
      );
    return (
      (i = n.children),
      (e = n.fallback),
      l
        ? ((n = t.mode),
          (l = t.child),
          (i = { mode: "hidden", children: i }),
          (n & 1) === 0 && l !== null
            ? ((l.childLanes = 0), (l.pendingProps = i))
            : (l = ll(i, n, 0, null)),
          (e = Zt(e, n, r, null)),
          (l.return = t),
          (e.return = t),
          (l.sibling = e),
          (t.child = l),
          (t.child.memoizedState = Bi(r)),
          (t.memoizedState = Ai),
          e)
        : Ca(t, i)
    );
  }
  if (((o = e.memoizedState), o !== null && ((u = o.dehydrated), u !== null)))
    return Eh(e, t, i, n, u, o, r);
  if (l) {
    ((l = n.fallback), (i = t.mode), (o = e.child), (u = o.sibling));
    var s = { mode: "hidden", children: n.children };
    return (
      (i & 1) === 0 && t.child !== o
        ? ((n = t.child),
          (n.childLanes = 0),
          (n.pendingProps = s),
          (t.deletions = null))
        : ((n = Pt(o, s)), (n.subtreeFlags = o.subtreeFlags & 14680064)),
      u !== null ? (l = Pt(u, l)) : ((l = Zt(l, i, r, null)), (l.flags |= 2)),
      (l.return = t),
      (n.return = t),
      (n.sibling = l),
      (t.child = n),
      (n = l),
      (l = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Bi(r)
          : {
              baseLanes: i.baseLanes | r,
              cachePool: null,
              transitions: i.transitions,
            }),
      (l.memoizedState = i),
      (l.childLanes = e.childLanes & ~r),
      (t.memoizedState = Ai),
      n
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (n = Pt(l, { mode: "visible", children: n.children })),
    (t.mode & 1) === 0 && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((r = t.deletions),
      r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = n),
    (t.memoizedState = null),
    n
  );
}
function Ca(e, t) {
  return (
    (t = ll({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function co(e, t, r, n) {
  return (
    n !== null && pa(n),
    _r(t, e.child, null, r),
    (e = Ca(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Eh(e, t, r, n, o, l, i) {
  if (r) {
    if (t.flags & 256)
      return ((t.flags &= -257), (n = Jl(Error(b(422)))), co(e, t, i, n));
    if (t.memoizedState !== null)
      return ((t.child = e.child), (t.flags |= 128), null);
    return (
      (l = n.fallback),
      (o = t.mode),
      (n = ll({ mode: "visible", children: n.children }, o, 0, null)),
      (l = Zt(l, o, i, null)),
      (l.flags |= 2),
      (n.return = t),
      (l.return = t),
      (n.sibling = l),
      (t.child = n),
      (t.mode & 1) !== 0 && _r(t, e.child, null, i),
      (t.child.memoizedState = Bi(i)),
      (t.memoizedState = Ai),
      l
    );
  }
  if ((t.mode & 1) === 0) return co(e, t, i, null);
  if (o.data === "$!") {
    if (((n = o.nextSibling && o.nextSibling.dataset), n)) var u = n.dgst;
    return (
      (n = u),
      (l = Error(b(419))),
      (n = Jl(l, n, void 0)),
      co(e, t, i, n)
    );
  }
  if (((u = (i & e.childLanes) !== 0), ke || u)) {
    if (((n = le), n !== null)) {
      switch (i & -i) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      ((o = (o & (n.suspendedLanes | i)) !== 0 ? 0 : o),
        o !== 0 &&
          o !== l.retryLane &&
          ((l.retryLane = o), dt(e, o), Ye(n, e, o, -1)));
    }
    return (Ra(), (n = Jl(Error(b(421)))), co(e, t, i, n));
  }
  if (o.data === "$?")
    return (
      (t.flags |= 128),
      (t.child = e.child),
      (t = Ah.bind(null, e)),
      (o._reactRetry = t),
      null
    );
  return (
    (e = l.treeContext),
    (_e = _t(o.nextSibling)),
    (ze = t),
    (Y = !0),
    (He = null),
    e !== null &&
      ((Pe[Re++] = it),
      (Pe[Re++] = at),
      (Pe[Re++] = Jt),
      (it = e.id),
      (at = e.overflow),
      (Jt = t)),
    (t = Ca(t, n.children)),
    (t.flags |= 4096),
    t
  );
}
function ms(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  (n !== null && (n.lanes |= t), Pi(e.return, t, r));
}
function ql(e, t, r, n, o) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: o,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = n),
      (l.tail = r),
      (l.tailMode = o));
}
function nd(e, t, r) {
  var n = t.pendingProps,
    o = n.revealOrder,
    l = n.tail;
  if ((he(e, t, n.children, r), (n = Z.current), (n & 2) !== 0))
    ((n = (n & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null;) {
        if (e.tag === 13) e.memoizedState !== null && ms(e, r, t);
        else if (e.tag === 19) ms(e, r, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    n &= 1;
  }
  if (($(Z, n), (t.mode & 1) === 0)) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        r = t.child;
        for (o = null; r !== null;)
          ((e = r.alternate),
            e !== null && $o(e) === null && (o = r),
            (r = r.sibling));
        ((r = o),
          r === null
            ? ((o = t.child), (t.child = null))
            : ((o = r.sibling), (r.sibling = null)),
          ql(t, !1, o, r, l));
        break;
      case "backwards":
        ((r = null), (o = t.child));
        for (t.child = null; o !== null;) {
          if (((e = o.alternate), e !== null && $o(e) === null)) {
            t.child = o;
            break;
          }
          ((e = o.sibling), (o.sibling = r), (r = o), (o = e));
        }
        ql(t, !0, r, null, l);
        break;
      case "together":
        ql(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function xo(e, t) {
  (t.mode & 1) === 0 &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function pt(e, t, r) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (It |= t.lanes),
    (r & t.childLanes) === 0)
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(b(153));
  if (t.child !== null) {
    ((e = t.child), (r = Pt(e, e.pendingProps)), (t.child = r));
    for (r.return = t; e.sibling !== null;)
      ((e = e.sibling),
        (r = r.sibling = Pt(e, e.pendingProps)),
        (r.return = t));
    r.sibling = null;
  }
  return t.child;
}
function Nh(e, t, r) {
  switch (t.tag) {
    case 3:
      (td(t), Cr());
      break;
    case 5:
      Lc(t);
      break;
    case 1:
      be(t.type) && Uo(t);
      break;
    case 4:
      wa(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context,
        o = t.memoizedProps.value;
      ($(Bo, n._currentValue), (n._currentValue = o));
      break;
    case 13:
      if (((n = t.memoizedState), n !== null)) {
        if (n.dehydrated !== null)
          return ($(Z, Z.current & 1), (t.flags |= 128), null);
        if ((r & t.child.childLanes) !== 0) return rd(e, t, r);
        return (
          $(Z, Z.current & 1),
          (e = pt(e, t, r)),
          e !== null ? e.sibling : null
        );
      }
      $(Z, Z.current & 1);
      break;
    case 19:
      if (((n = (r & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
        if (n) return nd(e, t, r);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        $(Z, Z.current),
        n)
      )
        break;
      else return null;
    case 22:
    case 23:
      return ((t.lanes = 0), jc(e, t, r));
  }
  return pt(e, t, r);
}
function Zr(e, t) {
  if (!Y)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null;)
          (t.alternate !== null && (r = t), (t = t.sibling));
        r === null ? (e.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = e.tail;
        for (var n = null; r !== null;)
          (r.alternate !== null && (n = r), (r = r.sibling));
        n === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (n.sibling = null);
    }
}
function de(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    n = 0;
  if (t)
    for (var o = e.child; o !== null;)
      ((r |= o.lanes | o.childLanes),
        (n |= o.subtreeFlags & 14680064),
        (n |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling));
  else
    for (o = e.child; o !== null;)
      ((r |= o.lanes | o.childLanes),
        (n |= o.subtreeFlags),
        (n |= o.flags),
        (o.return = e),
        (o = o.sibling));
  return ((e.subtreeFlags |= n), (e.childLanes = r), t);
}
function Ch(e, t, r) {
  var n = t.pendingProps;
  switch ((da(t), t.tag)) {
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
      return (de(t), null);
    case 1:
      return (be(t.type) && Oo(), de(t), null);
    case 3:
      if (
        ((n = t.stateNode),
        zr(),
        Q(xe),
        Q(fe),
        ka(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        e === null || e.child === null)
      )
        uo(t)
          ? (t.flags |= 4)
          : e === null ||
            (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
            ((t.flags |= 1024), He !== null && (Xi(He), (He = null)));
      return (Di(e, t), de(t), null);
    case 5:
      ya(t);
      var o = Yt(Cn.current);
      if (((r = t.type), e !== null && t.stateNode != null))
        (ld(e, t, r, n, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(b(166));
          return (de(t), null);
        }
        if (((e = Yt(nt.current)), uo(t))) {
          ((n = t.stateNode), (r = t.type));
          var l = t.memoizedProps;
          switch (((n[tt] = t), (n[En] = l), (e = (t.mode & 1) !== 0), r)) {
            case "dialog":
              (V("cancel", n), V("close", n));
              break;
            case "iframe":
            case "object":
            case "embed":
              V("load", n);
              break;
            case "video":
            case "audio":
              for (o = 0; o < nn.length; o++) V(nn[o], n);
              break;
            case "source":
              V("error", n);
              break;
            case "img":
            case "image":
            case "link":
              (V("error", n), V("load", n));
              break;
            case "details":
              V("toggle", n);
              break;
            case "input":
              (Eu(n, l), V("invalid", n));
              break;
            case "select":
              ((n._wrapperState = { wasMultiple: !!l.multiple }),
                V("invalid", n));
              break;
            case "textarea":
              (Cu(n, l), V("invalid", n));
          }
          (ci(r, l), (o = null));
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var u = l[i];
              i === "children"
                ? typeof u === "string"
                  ? n.textContent !== u &&
                    (l.suppressHydrationWarning !== !0 &&
                      ao(n.textContent, u, e),
                    (o = ["children", u]))
                  : typeof u === "number" &&
                    n.textContent !== "" + u &&
                    (l.suppressHydrationWarning !== !0 &&
                      ao(n.textContent, u, e),
                    (o = ["children", "" + u]))
                : mn.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  V("scroll", n);
            }
          switch (r) {
            case "input":
              (jn(n), Nu(n, l, !0));
              break;
            case "textarea":
              (jn(n), _u(n));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick === "function" && (n.onclick = Mo);
          }
          ((n = o), (t.updateQueue = n), n !== null && (t.flags |= 4));
        } else {
          ((i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Os(r)),
            e === "http://www.w3.org/1999/xhtml"
              ? r === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof n.is === "string"
                  ? (e = i.createElement(r, { is: n.is }))
                  : ((e = i.createElement(r)),
                    r === "select" &&
                      ((i = e),
                      n.multiple
                        ? (i.multiple = !0)
                        : n.size && (i.size = n.size)))
              : (e = i.createElementNS(e, r)),
            (e[tt] = t),
            (e[En] = n),
            od(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((i = di(r, n)), r)) {
              case "dialog":
                (V("cancel", e), V("close", e), (o = n));
                break;
              case "iframe":
              case "object":
              case "embed":
                (V("load", e), (o = n));
                break;
              case "video":
              case "audio":
                for (o = 0; o < nn.length; o++) V(nn[o], e);
                o = n;
                break;
              case "source":
                (V("error", e), (o = n));
                break;
              case "img":
              case "image":
              case "link":
                (V("error", e), V("load", e), (o = n));
                break;
              case "details":
                (V("toggle", e), (o = n));
                break;
              case "input":
                (Eu(e, n), (o = li(e, n)), V("invalid", e));
                break;
              case "option":
                o = n;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!n.multiple }),
                  (o = J({}, n, { value: void 0 })),
                  V("invalid", e));
                break;
              case "textarea":
                (Cu(e, n), (o = ui(e, n)), V("invalid", e));
                break;
              default:
                o = n;
            }
            (ci(r, o), (u = o));
            for (l in u)
              if (u.hasOwnProperty(l)) {
                var s = u[l];
                l === "style"
                  ? As(e, s)
                  : l === "dangerouslySetInnerHTML"
                    ? ((s = s ? s.__html : void 0), s != null && Us(e, s))
                    : l === "children"
                      ? typeof s === "string"
                        ? (r !== "textarea" || s !== "") && hn(e, s)
                        : typeof s === "number" && hn(e, "" + s)
                      : l !== "suppressContentEditableWarning" &&
                        l !== "suppressHydrationWarning" &&
                        l !== "autoFocus" &&
                        (mn.hasOwnProperty(l)
                          ? s != null && l === "onScroll" && V("scroll", e)
                          : s != null && Ji(e, l, s, i));
              }
            switch (r) {
              case "input":
                (jn(e), Nu(e, n, !1));
                break;
              case "textarea":
                (jn(e), _u(e));
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + Rt(n.value));
                break;
              case "select":
                ((e.multiple = !!n.multiple),
                  (l = n.value),
                  l != null
                    ? wr(e, !!n.multiple, l, !1)
                    : n.defaultValue != null &&
                      wr(e, !!n.multiple, n.defaultValue, !0));
                break;
              default:
                typeof o.onClick === "function" && (e.onclick = Mo);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (de(t), null);
    case 6:
      if (e && t.stateNode != null) id(e, t, e.memoizedProps, n);
      else {
        if (typeof n !== "string" && t.stateNode === null) throw Error(b(166));
        if (((r = Yt(Cn.current)), Yt(nt.current), uo(t))) {
          if (
            ((n = t.stateNode),
            (r = t.memoizedProps),
            (n[tt] = t),
            (l = n.nodeValue !== r))
          ) {
            if (((e = ze), e !== null))
              switch (e.tag) {
                case 3:
                  ao(n.nodeValue, r, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    ao(n.nodeValue, r, (e.mode & 1) !== 0);
              }
          }
          l && (t.flags |= 4);
        } else
          ((n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
            (n[tt] = t),
            (t.stateNode = n));
      }
      return (de(t), null);
    case 13:
      if (
        (Q(Z),
        (n = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Y && _e !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
          (Ec(), Cr(), (t.flags |= 98560), (l = !1));
        else if (((l = uo(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(b(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(b(317));
            l[tt] = t;
          } else
            (Cr(),
              (t.flags & 128) === 0 && (t.memoizedState = null),
              (t.flags |= 4));
          (de(t), (l = !1));
        } else (He !== null && (Xi(He), (He = null)), (l = !0));
        if (!l) return t.flags & 65536 ? t : null;
      }
      if ((t.flags & 128) !== 0) return ((t.lanes = r), t);
      return (
        (n = n !== null),
        n !== (e !== null && e.memoizedState !== null) &&
          n &&
          ((t.child.flags |= 8192),
          (t.mode & 1) !== 0 &&
            (e === null || (Z.current & 1) !== 0
              ? re === 0 && (re = 3)
              : Ra())),
        t.updateQueue !== null && (t.flags |= 4),
        de(t),
        null
      );
    case 4:
      return (
        zr(),
        Di(e, t),
        e === null && bn(t.stateNode.containerInfo),
        de(t),
        null
      );
    case 10:
      return (ha(t.type._context), de(t), null);
    case 17:
      return (be(t.type) && Oo(), de(t), null);
    case 19:
      if ((Q(Z), (l = t.memoizedState), l === null)) return (de(t), null);
      if (((n = (t.flags & 128) !== 0), (i = l.rendering), i === null))
        if (n) Zr(l, !1);
        else {
          if (re !== 0 || (e !== null && (e.flags & 128) !== 0))
            for (e = t.child; e !== null;) {
              if (((i = $o(e)), i !== null)) {
                ((t.flags |= 128),
                  Zr(l, !1),
                  (n = i.updateQueue),
                  n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                  (t.subtreeFlags = 0),
                  (n = r));
                for (r = t.child; r !== null;)
                  ((l = r),
                    (e = n),
                    (l.flags &= 14680066),
                    (i = l.alternate),
                    i === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = i.childLanes),
                        (l.lanes = i.lanes),
                        (l.child = i.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = i.memoizedProps),
                        (l.memoizedState = i.memoizedState),
                        (l.updateQueue = i.updateQueue),
                        (l.type = i.type),
                        (e = i.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (r = r.sibling));
                return ($(Z, (Z.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          l.tail !== null &&
            j() > Tr &&
            ((t.flags |= 128), (n = !0), Zr(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!n)
          if (((e = $o(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              Zr(l, !0),
              l.tail === null && l.tailMode === "hidden" && !i.alternate && !Y)
            )
              return (de(t), null);
          } else
            2 * j() - l.renderingStartTime > Tr &&
              r !== 1073741824 &&
              ((t.flags |= 128), (n = !0), Zr(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((r = l.last),
            r !== null ? (r.sibling = i) : (t.child = i),
            (l.last = i));
      }
      if (l.tail !== null)
        return (
          (t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = j()),
          (t.sibling = null),
          (r = Z.current),
          $(Z, n ? (r & 1) | 2 : r & 1),
          t
        );
      return (de(t), null);
    case 22:
    case 23:
      return (
        Pa(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && (t.mode & 1) !== 0
          ? (Ce & 1073741824) !== 0 &&
            (de(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : de(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(b(156, t.tag));
}
function _h(e, t) {
  switch ((da(t), t.tag)) {
    case 1:
      return (
        be(t.type) && Oo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        zr(),
        Q(xe),
        Q(fe),
        ka(),
        (e = t.flags),
        (e & 65536) !== 0 && (e & 128) === 0
          ? ((t.flags = (e & -65537) | 128), t)
          : null
      );
    case 5:
      return (ya(t), null);
    case 13:
      if ((Q(Z), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(b(340));
        Cr();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (Q(Z), null);
    case 4:
      return (zr(), null);
    case 10:
      return (ha(t.type._context), null);
    case 22:
    case 23:
      return (Pa(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
function vr(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r === "function")
      try {
        r(null);
      } catch (n) {
        q(e, t, n);
      }
    else r.current = null;
}
function Wi(e, t, r) {
  try {
    r();
  } catch (n) {
    q(e, t, n);
  }
}
function Lh(e, t) {
  if (((Si = To), (e = dc()), sa(e))) {
    if ("selectionStart" in e)
      var r = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window;
        var n = r.getSelection && r.getSelection();
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode;
          var { anchorOffset: o, focusNode: l } = n;
          n = n.focusOffset;
          try {
            (r.nodeType, l.nodeType);
          } catch (x) {
            r = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            f = 0,
            h = 0,
            w = e,
            y = null;
          t: for (;;) {
            for (var S; ;) {
              if (
                (w !== r || (o !== 0 && w.nodeType !== 3) || (u = i + o),
                w !== l || (n !== 0 && w.nodeType !== 3) || (s = i + n),
                w.nodeType === 3 && (i += w.nodeValue.length),
                (S = w.firstChild) === null)
              )
                break;
              ((y = w), (w = S));
            }
            for (;;) {
              if (w === e) break t;
              if (
                (y === r && ++f === o && (u = i),
                y === l && ++h === n && (s = i),
                (S = w.nextSibling) !== null)
              )
                break;
              ((w = y), (y = w.parentNode));
            }
            w = S;
          }
          r = u === -1 || s === -1 ? null : { start: u, end: s };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  ((Ei = { focusedElem: e, selectionRange: r }), (To = !1));
  for (L = t; L !== null;)
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (L = e));
    else
      for (; L !== null;) {
        t = L;
        try {
          var N = t.alternate;
          if ((t.flags & 1024) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (N !== null) {
                  var { memoizedProps: E, memoizedState: R } = N,
                    p = t.stateNode,
                    d = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? E : Ve(t.type, E),
                      R,
                    );
                  p.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(b(163));
            }
        } catch (x) {
          q(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (L = e));
          break;
        }
        L = t.return;
      }
  return ((N = hs), (hs = !1), N);
}
function dn(e, t, r) {
  var n = t.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var o = (n = n.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        ((o.destroy = void 0), l !== void 0 && Wi(t, r, l));
      }
      o = o.next;
    } while (o !== n);
  }
}
function nl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var r = (t = t.next);
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function $i(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t === "function" ? t(e) : (t.current = e);
  }
}
function ad(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), ad(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[tt], delete t[En], delete t[_i], delete t[dh], delete t[ph])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function ud(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function vs(e) {
  e: for (;;) {
    for (; e.sibling === null;) {
      if (e.return === null || ud(e.return)) return null;
      e = e.return;
    }
    e.sibling.return = e.return;
    for (e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
      if (e.flags & 2) continue e;
      if (e.child === null || e.tag === 4) continue e;
      else ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Vi(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    ((e = e.stateNode),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8
            ? ((t = r.parentNode), t.insertBefore(e, r))
            : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          (r !== null && r !== void 0) ||
            t.onclick !== null ||
            (t.onclick = Mo)));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Vi(e, t, r), e = e.sibling; e !== null;)
      (Vi(e, t, r), (e = e.sibling));
}
function Qi(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    ((e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Qi(e, t, r), e = e.sibling; e !== null;)
      (Qi(e, t, r), (e = e.sibling));
}
function gt(e, t, r) {
  for (r = r.child; r !== null;) (sd(e, t, r), (r = r.sibling));
}
function sd(e, t, r) {
  if (rt && typeof rt.onCommitFiberUnmount === "function")
    try {
      rt.onCommitFiberUnmount(Go, r);
    } catch (u) {}
  switch (r.tag) {
    case 5:
      pe || vr(r, t);
    case 6:
      var n = ie,
        o = Qe;
      ((ie = null),
        gt(e, t, r),
        (ie = n),
        (Qe = o),
        ie !== null &&
          (Qe
            ? ((e = ie),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : ie.removeChild(r.stateNode)));
      break;
    case 18:
      ie !== null &&
        (Qe
          ? ((e = ie),
            (r = r.stateNode),
            e.nodeType === 8
              ? Hl(e.parentNode, r)
              : e.nodeType === 1 && Hl(e, r),
            yn(e))
          : Hl(ie, r.stateNode));
      break;
    case 4:
      ((n = ie),
        (o = Qe),
        (ie = r.stateNode.containerInfo),
        (Qe = !0),
        gt(e, t, r),
        (ie = n),
        (Qe = o));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !pe &&
        ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
      ) {
        o = n = n.next;
        do {
          var l = o,
            i = l.destroy;
          ((l = l.tag),
            i !== void 0 &&
              ((l & 2) !== 0 ? Wi(r, t, i) : (l & 4) !== 0 && Wi(r, t, i)),
            (o = o.next));
        } while (o !== n);
      }
      gt(e, t, r);
      break;
    case 1:
      if (
        !pe &&
        (vr(r, t),
        (n = r.stateNode),
        typeof n.componentWillUnmount === "function")
      )
        try {
          ((n.props = r.memoizedProps),
            (n.state = r.memoizedState),
            n.componentWillUnmount());
        } catch (u) {
          q(r, t, u);
        }
      gt(e, t, r);
      break;
    case 21:
      gt(e, t, r);
      break;
    case 22:
      r.mode & 1
        ? ((pe = (n = pe) || r.memoizedState !== null), gt(e, t, r), (pe = n))
        : gt(e, t, r);
      break;
    default:
      gt(e, t, r);
  }
}
function gs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    (r === null && (r = e.stateNode = new zh()),
      t.forEach(function (n) {
        var o = Bh.bind(null, e, n);
        r.has(n) || (r.add(n), n.then(o, o));
      }));
  }
}
function $e(e, t) {
  var r = t.deletions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var o = r[n];
      try {
        var l = e,
          i = t,
          u = i;
        e: for (; u !== null;) {
          switch (u.tag) {
            case 5:
              ((ie = u.stateNode), (Qe = !1));
              break e;
            case 3:
              ((ie = u.stateNode.containerInfo), (Qe = !0));
              break e;
            case 4:
              ((ie = u.stateNode.containerInfo), (Qe = !0));
              break e;
          }
          u = u.return;
        }
        if (ie === null) throw Error(b(160));
        (sd(l, i, o), (ie = null), (Qe = !1));
        var s = o.alternate;
        (s !== null && (s.return = null), (o.return = null));
      } catch (f) {
        q(o, t, f);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null;) (cd(t, e), (t = t.sibling));
}
function cd(e, t) {
  var { alternate: r, flags: n } = e;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (($e(t, e), je(e), n & 4)) {
        try {
          (dn(3, e, e.return), nl(3, e));
        } catch (E) {
          q(e, e.return, E);
        }
        try {
          dn(5, e, e.return);
        } catch (E) {
          q(e, e.return, E);
        }
      }
      break;
    case 1:
      ($e(t, e), je(e), n & 512 && r !== null && vr(r, r.return));
      break;
    case 5:
      if (
        ($e(t, e),
        je(e),
        n & 512 && r !== null && vr(r, r.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          hn(o, "");
        } catch (E) {
          q(e, e.return, E);
        }
      }
      if (n & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          i = r !== null ? r.memoizedProps : l,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            (u === "input" && l.type === "radio" && l.name != null && Rs(o, l),
              di(u, i));
            var f = di(u, l);
            for (i = 0; i < s.length; i += 2) {
              var h = s[i],
                w = s[i + 1];
              h === "style"
                ? As(o, w)
                : h === "dangerouslySetInnerHTML"
                  ? Us(o, w)
                  : h === "children"
                    ? hn(o, w)
                    : Ji(o, h, w, f);
            }
            switch (u) {
              case "input":
                ii(o, l);
                break;
              case "textarea":
                Ms(o, l);
                break;
              case "select":
                var y = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var S = l.value;
                S != null
                  ? wr(o, !!l.multiple, S, !1)
                  : y !== !!l.multiple &&
                    (l.defaultValue != null
                      ? wr(o, !!l.multiple, l.defaultValue, !0)
                      : wr(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[En] = l;
          } catch (E) {
            q(e, e.return, E);
          }
      }
      break;
    case 6:
      if (($e(t, e), je(e), n & 4)) {
        if (e.stateNode === null) throw Error(b(162));
        ((o = e.stateNode), (l = e.memoizedProps));
        try {
          o.nodeValue = l;
        } catch (E) {
          q(e, e.return, E);
        }
      }
      break;
    case 3:
      if (
        ($e(t, e), je(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          yn(t.containerInfo);
        } catch (E) {
          q(e, e.return, E);
        }
      break;
    case 4:
      ($e(t, e), je(e));
      break;
    case 13:
      ($e(t, e),
        je(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (La = j())),
        n & 4 && gs(e));
      break;
    case 22:
      if (
        ((h = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((pe = (f = pe) || h), $e(t, e), (pe = f)) : $e(t, e),
        je(e),
        n & 8192)
      ) {
        if (
          ((f = e.memoizedState !== null),
          (e.stateNode.isHidden = f) && !h && (e.mode & 1) !== 0)
        )
          for (L = e, h = e.child; h !== null;) {
            for (w = L = h; L !== null;) {
              switch (((y = L), (S = y.child), y.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  dn(4, y, y.return);
                  break;
                case 1:
                  vr(y, y.return);
                  var N = y.stateNode;
                  if (typeof N.componentWillUnmount === "function") {
                    ((n = y), (r = y.return));
                    try {
                      ((t = n),
                        (N.props = t.memoizedProps),
                        (N.state = t.memoizedState),
                        N.componentWillUnmount());
                    } catch (E) {
                      q(n, r, E);
                    }
                  }
                  break;
                case 5:
                  vr(y, y.return);
                  break;
                case 22:
                  if (y.memoizedState !== null) {
                    ys(w);
                    continue;
                  }
              }
              S !== null ? ((S.return = y), (L = S)) : ys(w);
            }
            h = h.sibling;
          }
        e: for (h = null, w = e; ;) {
          if (w.tag === 5) {
            if (h === null) {
              h = w;
              try {
                ((o = w.stateNode),
                  f
                    ? ((l = o.style),
                      typeof l.setProperty === "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((u = w.stateNode),
                      (s = w.memoizedProps.style),
                      (i =
                        s !== void 0 &&
                        s !== null &&
                        s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = Fs("display", i))));
              } catch (E) {
                q(e, e.return, E);
              }
            }
          } else if (w.tag === 6) {
            if (h === null)
              try {
                w.stateNode.nodeValue = f ? "" : w.memoizedProps;
              } catch (E) {
                q(e, e.return, E);
              }
          } else if (
            ((w.tag !== 22 && w.tag !== 23) ||
              w.memoizedState === null ||
              w === e) &&
            w.child !== null
          ) {
            ((w.child.return = w), (w = w.child));
            continue;
          }
          if (w === e) break e;
          for (; w.sibling === null;) {
            if (w.return === null || w.return === e) break e;
            (h === w && (h = null), (w = w.return));
          }
          (h === w && (h = null),
            (w.sibling.return = w.return),
            (w = w.sibling));
        }
      }
      break;
    case 19:
      ($e(t, e), je(e), n & 4 && gs(e));
      break;
    case 21:
      break;
    default:
      ($e(t, e), je(e));
  }
}
function je(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null;) {
          if (ud(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(b(160));
      }
      switch (n.tag) {
        case 5:
          var o = n.stateNode;
          n.flags & 32 && (hn(o, ""), (n.flags &= -33));
          var l = vs(e);
          Qi(e, l, o);
          break;
        case 3:
        case 4:
          var i = n.stateNode.containerInfo,
            u = vs(e);
          Vi(e, u, i);
          break;
        default:
          throw Error(b(161));
      }
    } catch (s) {
      q(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Th(e, t, r) {
  ((L = e), dd(e, t, r));
}
function dd(e, t, r) {
  for (var n = (e.mode & 1) !== 0; L !== null;) {
    var o = L,
      l = o.child;
    if (o.tag === 22 && n) {
      var i = o.memoizedState !== null || po;
      if (!i) {
        var u = o.alternate,
          s = (u !== null && u.memoizedState !== null) || pe;
        u = po;
        var f = pe;
        if (((po = i), (pe = s) && !f))
          for (L = o; L !== null;)
            ((i = L),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? ks(o)
                : s !== null
                  ? ((s.return = i), (L = s))
                  : ks(o));
        for (; l !== null;) ((L = l), dd(l, t, r), (l = l.sibling));
        ((L = o), (po = u), (pe = f));
      }
      ws(e, t, r);
    } else
      (o.subtreeFlags & 8772) !== 0 && l !== null
        ? ((l.return = o), (L = l))
        : ws(e, t, r);
  }
}
function ws(e) {
  for (; L !== null;) {
    var t = L;
    if ((t.flags & 8772) !== 0) {
      var r = t.alternate;
      try {
        if ((t.flags & 8772) !== 0)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              pe || nl(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !pe)
                if (r === null) n.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? r.memoizedProps
                      : Ve(t.type, r.memoizedProps);
                  n.componentDidUpdate(
                    o,
                    r.memoizedState,
                    n.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var l = t.updateQueue;
              l !== null && rs(t, l, n);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode;
                      break;
                    case 1:
                      r = t.child.stateNode;
                  }
                rs(t, i, r);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (r === null && t.flags & 4) {
                r = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && r.focus();
                    break;
                  case "img":
                    s.src && (r.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var f = t.alternate;
                if (f !== null) {
                  var h = f.memoizedState;
                  if (h !== null) {
                    var w = h.dehydrated;
                    w !== null && yn(w);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(b(163));
          }
        pe || (t.flags & 512 && $i(t));
      } catch (y) {
        q(t, t.return, y);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((r = t.sibling), r !== null)) {
      ((r.return = t.return), (L = r));
      break;
    }
    L = t.return;
  }
}
function ys(e) {
  for (; L !== null;) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      ((r.return = t.return), (L = r));
      break;
    }
    L = t.return;
  }
}
function ks(e) {
  for (; L !== null;) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            nl(4, t);
          } catch (s) {
            q(t, r, s);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount === "function") {
            var o = t.return;
            try {
              n.componentDidMount();
            } catch (s) {
              q(t, o, s);
            }
          }
          var l = t.return;
          try {
            $i(t);
          } catch (s) {
            q(t, l, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            $i(t);
          } catch (s) {
            q(t, i, s);
          }
      }
    } catch (s) {
      q(t, t.return, s);
    }
    if (t === e) {
      L = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      ((u.return = t.return), (L = u));
      break;
    }
    L = t.return;
  }
}
function ve() {
  return (B & 6) !== 0 ? j() : bo !== -1 ? bo : (bo = j());
}
function Tt(e) {
  if ((e.mode & 1) === 0) return 1;
  if ((B & 2) !== 0 && ae !== 0) return ae & -ae;
  if (mh.transition !== null) return (So === 0 && (So = Gs()), So);
  if (((e = W), e !== 0)) return e;
  return ((e = window.event), (e = e === void 0 ? 16 : rc(e.type)), e);
}
function Ye(e, t, r, n) {
  if (50 < fn) throw ((fn = 0), (Ki = null), Error(b(185)));
  if ((Pn(e, r, n), (B & 2) === 0 || e !== le))
    (e === le && ((B & 2) === 0 && (ol |= r), re === 4 && xt(e, ae)),
      Se(e, n),
      r === 1 &&
        B === 0 &&
        (t.mode & 1) === 0 &&
        ((Tr = j() + 500), el && Ft()));
}
function Se(e, t) {
  var r = e.callbackNode;
  vm(e, t);
  var n = Lo(e, e === le ? ae : 0);
  if (n === 0)
    (r !== null && Tu(r), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && Tu(r), t === 1))
      (e.tag === 0 ? fh(xs.bind(null, e)) : xc(xs.bind(null, e)),
        sh(function () {
          (B & 6) === 0 && Ft();
        }),
        (r = null));
    else {
      switch (Js(n)) {
        case 1:
          r = ta;
          break;
        case 4:
          r = Xs;
          break;
        case 16:
          r = zo;
          break;
        case 536870912:
          r = Zs;
          break;
        default:
          r = zo;
      }
      r = yd(r, pd.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = r));
  }
}
function pd(e, t) {
  if (((bo = -1), (So = 0), (B & 6) !== 0)) throw Error(b(327));
  var r = e.callbackNode;
  if (Sr() && e.callbackNode !== r) return null;
  var n = Lo(e, e === le ? ae : 0);
  if (n === 0) return null;
  if ((n & 30) !== 0 || (n & e.expiredLanes) !== 0 || t) t = Xo(e, n);
  else {
    t = n;
    var o = B;
    B |= 2;
    var l = md();
    if (le !== e || ae !== t) ((ot = null), (Tr = j() + 500), Xt(e, t));
    do
      try {
        Oh();
        break;
      } catch (u) {
        fd(e, u);
      }
    while (1);
    (ma(),
      (Ho.current = l),
      (B = o),
      ee !== null ? (t = 0) : ((le = null), (ae = 0), (t = re)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = vi(e)), o !== 0 && ((n = o), (t = Yi(e, o)))), t === 1)
    )
      throw ((r = Tn), Xt(e, 0), xt(e, n), Se(e, j()), r);
    if (t === 6) xt(e, n);
    else {
      if (
        ((o = e.current.alternate),
        (n & 30) === 0 &&
          !Rh(o) &&
          ((t = Xo(e, n)),
          t === 2 && ((l = vi(e)), l !== 0 && ((n = l), (t = Yi(e, l)))),
          t === 1))
      )
        throw ((r = Tn), Xt(e, 0), xt(e, n), Se(e, j()), r);
      switch (((e.finishedWork = o), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(b(345));
        case 2:
          Qt(e, ye, ot);
          break;
        case 3:
          if (
            (xt(e, n), (n & 130023424) === n && ((t = La + 500 - j()), 10 < t))
          ) {
            if (Lo(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & n) !== n)) {
              (ve(), (e.pingedLanes |= e.suspendedLanes & o));
              break;
            }
            e.timeoutHandle = Ci(Qt.bind(null, e, ye, ot), t);
            break;
          }
          Qt(e, ye, ot);
          break;
        case 4:
          if ((xt(e, n), (n & 4194240) === n)) break;
          t = e.eventTimes;
          for (o = -1; 0 < n;) {
            var i = 31 - Ke(n);
            ((l = 1 << i), (i = t[i]), i > o && (o = i), (n &= ~l));
          }
          if (
            ((n = o),
            (n = j() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                  ? 480
                  : 1080 > n
                    ? 1080
                    : 1920 > n
                      ? 1920
                      : 3000 > n
                        ? 3000
                        : 4320 > n
                          ? 4320
                          : 1960 * Ph(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = Ci(Qt.bind(null, e, ye, ot), n);
            break;
          }
          Qt(e, ye, ot);
          break;
        case 5:
          Qt(e, ye, ot);
          break;
        default:
          throw Error(b(329));
      }
    }
  }
  return (Se(e, j()), e.callbackNode === r ? pd.bind(null, e) : null);
}
function Yi(e, t) {
  var r = pn;
  return (
    e.current.memoizedState.isDehydrated && (Xt(e, t).flags |= 256),
    (e = Xo(e, t)),
    e !== 2 && ((t = ye), (ye = r), t !== null && Xi(t)),
    e
  );
}
function Xi(e) {
  ye === null ? (ye = e) : ye.push.apply(ye, e);
}
function Rh(e) {
  for (var t = e; ;) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var o = r[n],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!Xe(l(), o)) return !1;
          } catch (i) {
            return !1;
          }
        }
    }
    if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
      ((r.return = t), (t = r));
    else {
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function xt(e, t) {
  ((t &= ~za), (t &= ~ol), (e.suspendedLanes |= t), (e.pingedLanes &= ~t));
  for (e = e.expirationTimes; 0 < t;) {
    var r = 31 - Ke(t),
      n = 1 << r;
    ((e[r] = -1), (t &= ~n));
  }
}
function xs(e) {
  if ((B & 6) !== 0) throw Error(b(327));
  Sr();
  var t = Lo(e, 0);
  if ((t & 1) === 0) return (Se(e, j()), null);
  var r = Xo(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = vi(e);
    n !== 0 && ((t = n), (r = Yi(e, n)));
  }
  if (r === 1) throw ((r = Tn), Xt(e, 0), xt(e, t), Se(e, j()), r);
  if (r === 6) throw Error(b(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Qt(e, ye, ot),
    Se(e, j()),
    null
  );
}
function Ta(e, t) {
  var r = B;
  B |= 1;
  try {
    return e(t);
  } finally {
    ((B = r), B === 0 && ((Tr = j() + 500), el && Ft()));
  }
}
function jt(e) {
  St !== null && St.tag === 0 && (B & 6) === 0 && Sr();
  var t = B;
  B |= 1;
  var r = Oe.transition,
    n = W;
  try {
    if (((Oe.transition = null), (W = 1), e)) return e();
  } finally {
    ((W = n), (Oe.transition = r), (B = t), (B & 6) === 0 && Ft());
  }
}
function Pa() {
  ((Ce = gr.current), Q(gr));
}
function Xt(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), uh(r)), ee !== null))
    for (r = ee.return; r !== null;) {
      var n = r;
      switch ((da(n), n.tag)) {
        case 1:
          ((n = n.type.childContextTypes), n !== null && n !== void 0 && Oo());
          break;
        case 3:
          (zr(), Q(xe), Q(fe), ka());
          break;
        case 5:
          ya(n);
          break;
        case 4:
          zr();
          break;
        case 13:
          Q(Z);
          break;
        case 19:
          Q(Z);
          break;
        case 10:
          ha(n.type._context);
          break;
        case 22:
        case 23:
          Pa();
      }
      r = r.return;
    }
  if (
    ((le = e),
    (ee = e = Pt(e.current, null)),
    (ae = Ce = t),
    (re = 0),
    (Tn = null),
    (za = ol = It = 0),
    (ye = pn = null),
    Kt !== null)
  ) {
    for (t = 0; t < Kt.length; t++)
      if (((r = Kt[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null;
        var o = n.next,
          l = r.pending;
        if (l !== null) {
          var i = l.next;
          ((l.next = o), (n.next = i));
        }
        r.pending = n;
      }
    Kt = null;
  }
  return e;
}
function fd(e, t) {
  do {
    var r = ee;
    try {
      if ((ma(), (yo.current = Qo), Vo)) {
        for (var n = G.memoizedState; n !== null;) {
          var o = n.queue;
          (o !== null && (o.pending = null), (n = n.next));
        }
        Vo = !1;
      }
      if (
        ((qt = 0),
        (oe = te = G = null),
        (cn = !1),
        (_n = 0),
        (_a.current = null),
        r === null || r.return === null)
      ) {
        ((re = 1), (Tn = t), (ee = null));
        break;
      }
      e: {
        var l = e,
          i = r.return,
          u = r,
          s = t;
        if (
          ((t = ae),
          (u.flags |= 32768),
          s !== null && typeof s === "object" && typeof s.then === "function")
        ) {
          var f = s,
            h = u,
            w = h.tag;
          if ((h.mode & 1) === 0 && (w === 0 || w === 11 || w === 15)) {
            var y = h.alternate;
            y
              ? ((h.updateQueue = y.updateQueue),
                (h.memoizedState = y.memoizedState),
                (h.lanes = y.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var S = us(i);
          if (S !== null) {
            ((S.flags &= -257),
              ss(S, i, u, l, t),
              S.mode & 1 && as(l, f, t),
              (t = S),
              (s = f));
            var N = t.updateQueue;
            if (N === null) {
              var E = new Set();
              (E.add(s), (t.updateQueue = E));
            } else N.add(s);
            break e;
          } else {
            if ((t & 1) === 0) {
              (as(l, f, t), Ra());
              break e;
            }
            s = Error(b(426));
          }
        } else if (Y && u.mode & 1) {
          var R = us(i);
          if (R !== null) {
            ((R.flags & 65536) === 0 && (R.flags |= 256),
              ss(R, i, u, l, t),
              pa(Lr(s, u)));
            break e;
          }
        }
        ((l = s = Lr(s, u)),
          re !== 4 && (re = 2),
          pn === null ? (pn = [l]) : pn.push(l),
          (l = i));
        do {
          switch (l.tag) {
            case 3:
              ((l.flags |= 65536), (t &= -t), (l.lanes |= t));
              var p = Jc(l, s, t);
              ts(l, p);
              break e;
            case 1:
              u = s;
              var { type: d, stateNode: m } = l;
              if (
                (l.flags & 128) === 0 &&
                (typeof d.getDerivedStateFromError === "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch === "function" &&
                    (Lt === null || !Lt.has(m))))
              ) {
                ((l.flags |= 65536), (t &= -t), (l.lanes |= t));
                var x = qc(l, u, t);
                ts(l, x);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      vd(r);
    } catch (z) {
      ((t = z), ee === r && r !== null && (ee = r = r.return));
      continue;
    }
    break;
  } while (1);
}
function md() {
  var e = Ho.current;
  return ((Ho.current = Qo), e === null ? Qo : e);
}
function Ra() {
  if (re === 0 || re === 3 || re === 2) re = 4;
  le === null ||
    ((It & 268435455) === 0 && (ol & 268435455) === 0) ||
    xt(le, ae);
}
function Xo(e, t) {
  var r = B;
  B |= 2;
  var n = md();
  if (le !== e || ae !== t) ((ot = null), Xt(e, t));
  do
    try {
      Mh();
      break;
    } catch (o) {
      fd(e, o);
    }
  while (1);
  if ((ma(), (B = r), (Ho.current = n), ee !== null)) throw Error(b(261));
  return ((le = null), (ae = 0), re);
}
function Mh() {
  for (; ee !== null;) hd(ee);
}
function Oh() {
  for (; ee !== null && !am();) hd(ee);
}
function hd(e) {
  var t = wd(e.alternate, e, Ce);
  ((e.memoizedProps = e.pendingProps),
    t === null ? vd(e) : (ee = t),
    (_a.current = null));
}
function vd(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), (t.flags & 32768) === 0)) {
      if (((r = Ch(r, t, Ce)), r !== null)) {
        ee = r;
        return;
      }
    } else {
      if (((r = _h(r, t)), r !== null)) {
        ((r.flags &= 32767), (ee = r));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((re = 6), (ee = null));
        return;
      }
    }
    if (((t = t.sibling), t !== null)) {
      ee = t;
      return;
    }
    ee = t = e;
  } while (t !== null);
  re === 0 && (re = 5);
}
function Qt(e, t, r) {
  var n = W,
    o = Oe.transition;
  try {
    ((Oe.transition = null), (W = 1), Uh(e, t, r, n));
  } finally {
    ((Oe.transition = o), (W = n));
  }
  return null;
}
function Uh(e, t, r, n) {
  do Sr();
  while (St !== null);
  if ((B & 6) !== 0) throw Error(b(327));
  r = e.finishedWork;
  var o = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(b(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var l = r.lanes | r.childLanes;
  if (
    (gm(e, l),
    e === le && ((ee = le = null), (ae = 0)),
    ((r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0) ||
      fo ||
      ((fo = !0),
      yd(zo, function () {
        return (Sr(), null);
      })),
    (l = (r.flags & 15990) !== 0),
    (r.subtreeFlags & 15990) !== 0 || l)
  ) {
    ((l = Oe.transition), (Oe.transition = null));
    var i = W;
    W = 1;
    var u = B;
    ((B |= 4),
      (_a.current = null),
      Lh(e, r),
      cd(r, e),
      nh(Ei),
      (To = !!Si),
      (Ei = Si = null),
      (e.current = r),
      Th(r, e, o),
      um(),
      (B = u),
      (W = i),
      (Oe.transition = l));
  } else e.current = r;
  if (
    (fo && ((fo = !1), (St = e), (Yo = o)),
    (l = e.pendingLanes),
    l === 0 && (Lt = null),
    dm(r.stateNode, n),
    Se(e, j()),
    t !== null)
  )
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      ((o = t[r]), n(o.value, { componentStack: o.stack, digest: o.digest }));
  if (Ko) throw ((Ko = !1), (e = Hi), (Hi = null), e);
  return (
    (Yo & 1) !== 0 && e.tag !== 0 && Sr(),
    (l = e.pendingLanes),
    (l & 1) !== 0 ? (e === Ki ? fn++ : ((fn = 0), (Ki = e))) : (fn = 0),
    Ft(),
    null
  );
}
function Sr() {
  if (St !== null) {
    var e = Js(Yo),
      t = Oe.transition,
      r = W;
    try {
      if (((Oe.transition = null), (W = 16 > e ? 16 : e), St === null))
        var n = !1;
      else {
        if (((e = St), (St = null), (Yo = 0), (B & 6) !== 0))
          throw Error(b(331));
        var o = B;
        B |= 4;
        for (L = e.current; L !== null;) {
          var l = L,
            i = l.child;
          if ((L.flags & 16) !== 0) {
            var u = l.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var f = u[s];
                for (L = f; L !== null;) {
                  var h = L;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      dn(8, h, l);
                  }
                  var w = h.child;
                  if (w !== null) ((w.return = h), (L = w));
                  else
                    for (; L !== null;) {
                      h = L;
                      var { sibling: y, return: S } = h;
                      if ((ad(h), h === f)) {
                        L = null;
                        break;
                      }
                      if (y !== null) {
                        ((y.return = S), (L = y));
                        break;
                      }
                      L = S;
                    }
                }
              }
              var N = l.alternate;
              if (N !== null) {
                var E = N.child;
                if (E !== null) {
                  N.child = null;
                  do {
                    var R = E.sibling;
                    ((E.sibling = null), (E = R));
                  } while (E !== null);
                }
              }
              L = l;
            }
          }
          if ((l.subtreeFlags & 2064) !== 0 && i !== null)
            ((i.return = l), (L = i));
          else
            e: for (; L !== null;) {
              if (((l = L), (l.flags & 2048) !== 0))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    dn(9, l, l.return);
                }
              var p = l.sibling;
              if (p !== null) {
                ((p.return = l.return), (L = p));
                break e;
              }
              L = l.return;
            }
        }
        var d = e.current;
        for (L = d; L !== null;) {
          i = L;
          var m = i.child;
          if ((i.subtreeFlags & 2064) !== 0 && m !== null)
            ((m.return = i), (L = m));
          else
            e: for (i = d; L !== null;) {
              if (((u = L), (u.flags & 2048) !== 0))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      nl(9, u);
                  }
                } catch (z) {
                  q(u, u.return, z);
                }
              if (u === i) {
                L = null;
                break e;
              }
              var x = u.sibling;
              if (x !== null) {
                ((x.return = u.return), (L = x));
                break e;
              }
              L = u.return;
            }
        }
        if (
          ((B = o), Ft(), rt && typeof rt.onPostCommitFiberRoot === "function")
        )
          try {
            rt.onPostCommitFiberRoot(Go, e);
          } catch (z) {}
        n = !0;
      }
      return n;
    } finally {
      ((W = r), (Oe.transition = t));
    }
  }
  return !1;
}
function bs(e, t, r) {
  ((t = Lr(r, t)),
    (t = Jc(e, t, 1)),
    (e = zt(e, t, 1)),
    (t = ve()),
    e !== null && (Pn(e, 1, t), Se(e, t)));
}
function q(e, t, r) {
  if (e.tag === 3) bs(e, e, r);
  else
    for (; t !== null;) {
      if (t.tag === 3) {
        bs(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError === "function" ||
          (typeof n.componentDidCatch === "function" &&
            (Lt === null || !Lt.has(n)))
        ) {
          ((e = Lr(r, e)),
            (e = qc(t, e, 1)),
            (t = zt(t, e, 1)),
            (e = ve()),
            t !== null && (Pn(t, 1, e), Se(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function Fh(e, t, r) {
  var n = e.pingCache;
  (n !== null && n.delete(t),
    (t = ve()),
    (e.pingedLanes |= e.suspendedLanes & r),
    le === e &&
      (ae & r) === r &&
      (re === 4 || (re === 3 && (ae & 130023424) === ae && 500 > j() - La)
        ? Xt(e, 0)
        : (za |= r)),
    Se(e, t));
}
function gd(e, t) {
  t === 0 &&
    ((e.mode & 1) === 0
      ? (t = 1)
      : ((t = ro), (ro <<= 1), (ro & 130023424) === 0 && (ro = 4194304)));
  var r = ve();
  ((e = dt(e, t)), e !== null && (Pn(e, t, r), Se(e, r)));
}
function Ah(e) {
  var t = e.memoizedState,
    r = 0;
  (t !== null && (r = t.retryLane), gd(e, r));
}
function Bh(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var { stateNode: n, memoizedState: o } = e;
      o !== null && (r = o.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(b(314));
  }
  (n !== null && n.delete(t), gd(e, r));
}
function yd(e, t) {
  return Ys(e, t);
}
function Dh(e, t, r, n) {
  ((this.tag = e),
    (this.key = r),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function Me(e, t, r, n) {
  return new Dh(e, t, r, n);
}
function Ma(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function Wh(e) {
  if (typeof e === "function") return Ma(e) ? 1 : 0;
  if (e !== void 0 && e !== null) {
    if (((e = e.$$typeof), e === Ii)) return 11;
    if (e === ji) return 14;
  }
  return 2;
}
function Pt(e, t) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = Me(e.tag, t, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = t),
        (r.type = e.type),
        (r.flags = 0),
        (r.subtreeFlags = 0),
        (r.deletions = null)),
    (r.flags = e.flags & 14680064),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  );
}
function Eo(e, t, r, n, o, l) {
  var i = 2;
  if (((n = e), typeof e === "function")) Ma(e) && (i = 1);
  else if (typeof e === "string") i = 5;
  else
    e: switch (e) {
      case ar:
        return Zt(r.children, o, l, t);
      case qi:
        ((i = 8), (o |= 8));
        break;
      case ti:
        return (
          (e = Me(12, r, t, o | 2)),
          (e.elementType = ti),
          (e.lanes = l),
          e
        );
      case ri:
        return ((e = Me(13, r, t, o)), (e.elementType = ri), (e.lanes = l), e);
      case ni:
        return ((e = Me(19, r, t, o)), (e.elementType = ni), (e.lanes = l), e);
      case Ls:
        return ll(r, o, l, t);
      default:
        if (typeof e === "object" && e !== null)
          switch (e.$$typeof) {
            case _s:
              i = 10;
              break e;
            case zs:
              i = 9;
              break e;
            case Ii:
              i = 11;
              break e;
            case ji:
              i = 14;
              break e;
            case wt:
              ((i = 16), (n = null));
              break e;
          }
        throw Error(b(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Me(i, r, t, o)),
    (t.elementType = e),
    (t.type = n),
    (t.lanes = l),
    t
  );
}
function Zt(e, t, r, n) {
  return ((e = Me(7, e, n, t)), (e.lanes = r), e);
}
function ll(e, t, r, n) {
  return (
    (e = Me(22, e, n, t)),
    (e.elementType = Ls),
    (e.lanes = r),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Il(e, t, r) {
  return ((e = Me(6, e, null, t)), (e.lanes = r), e);
}
function jl(e, t, r) {
  return (
    (t = Me(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function $h(e, t, r, n, o) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Al(0)),
    (this.expirationTimes = Al(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Al(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null));
}
function Oa(e, t, r, n, o, l, i, u, s) {
  return (
    (e = new $h(e, t, r, u, s)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Me(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ga(l),
    e
  );
}
function Vh(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ir,
    key: n == null ? null : "" + n,
    children: e,
    containerInfo: t,
    implementation: r,
  };
}
function kd(e) {
  if (!e) return Mt;
  e = e._reactInternals;
  e: {
    if (tr(e) !== e || e.tag !== 1) throw Error(b(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (be(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(b(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (be(r)) return kc(e, r, t);
  }
  return t;
}
function xd(e, t, r, n, o, l, i, u, s) {
  return (
    (e = Oa(r, n, !0, e, o, l, i, u, s)),
    (e.context = kd(null)),
    (r = e.current),
    (n = ve()),
    (o = Tt(r)),
    (l = ut(n, o)),
    (l.callback = t !== void 0 && t !== null ? t : null),
    zt(r, l, o),
    (e.current.lanes = o),
    Pn(e, o, n),
    Se(e, n),
    e
  );
}
function il(e, t, r, n) {
  var o = t.current,
    l = ve(),
    i = Tt(o);
  return (
    (r = kd(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = ut(l, i)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    (e = zt(o, t, i)),
    e !== null && (Ye(e, o, i, l), wo(e, o, i)),
    i
  );
}
function Zo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ss(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function Ua(e, t) {
  (Ss(e, t), (e = e.alternate) && Ss(e, t));
}
function Qh() {
  return null;
}
function Fa(e) {
  this._internalRoot = e;
}
function al(e) {
  this._internalRoot = e;
}
function Aa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ul(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Es() {}
function Hh(e, t, r, n, o) {
  if (o) {
    if (typeof n === "function") {
      var l = n;
      n = function () {
        var f = Zo(i);
        l.call(f);
      };
    }
    var i = xd(t, n, e, 0, null, !1, !1, "", Es);
    return (
      (e._reactRootContainer = i),
      (e[ct] = i.current),
      bn(e.nodeType === 8 ? e.parentNode : e),
      jt(),
      i
    );
  }
  for (; (o = e.lastChild);) e.removeChild(o);
  if (typeof n === "function") {
    var u = n;
    n = function () {
      var f = Zo(s);
      u.call(f);
    };
  }
  var s = Oa(e, 0, !1, null, null, !1, !1, "", Es);
  return (
    (e._reactRootContainer = s),
    (e[ct] = s.current),
    bn(e.nodeType === 8 ? e.parentNode : e),
    jt(function () {
      il(t, s, r, n);
    }),
    s
  );
}
function sl(e, t, r, n, o) {
  var l = r._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o === "function") {
      var u = o;
      o = function () {
        var s = Zo(i);
        u.call(s);
      };
    }
    il(t, i, e, o);
  } else i = Hh(r, t, e, o, n);
  return Zo(i);
}
var Ns,
  X,
  Cs,
  mn,
  st,
  ei,
  Xf,
  xu,
  bu,
  ue,
  Zi,
  ft,
  In,
  ir,
  ar,
  qi,
  ti,
  _s,
  zs,
  Ii,
  ri,
  ni,
  ji,
  wt,
  Ls,
  Su,
  J,
  Ml,
  Ol = !1,
  qr,
  eo,
  Us,
  on,
  em,
  tm,
  pi = null,
  fi = null,
  yr = null,
  kr = null,
  Fl = !1,
  mi = !1,
  $t,
  ln = !1,
  Co = null,
  _o = !1,
  hi = null,
  nm,
  Ys,
  Tu,
  am,
  um,
  j,
  sm,
  ta,
  Xs,
  zo,
  cm,
  Zs,
  Go = null,
  rt = null,
  Ke,
  pm,
  fm,
  to = 64,
  ro = 4194304,
  W = 0,
  qs,
  na,
  Is,
  js,
  ec,
  gi = !1,
  no,
  Et = null,
  Nt = null,
  Ct = null,
  gn,
  wn,
  kt,
  wm,
  xr,
  To = !0,
  Po = null,
  bt = null,
  la = null,
  ho = null,
  Pr,
  ia,
  Rn,
  Sm,
  Bl,
  Dl,
  Yr,
  Jo,
  Ou,
  Em,
  Nm,
  Cm,
  Wl,
  _m,
  zm,
  Lm,
  Tm,
  Pm,
  Uu,
  Rm,
  Mm,
  Om,
  Fm,
  Am,
  Bm,
  Fu,
  Dm,
  Wm,
  $m,
  Vm,
  Qm,
  Hm,
  Km,
  ua,
  an = null,
  Ym,
  oc,
  Au,
  Bu = !1,
  ur = !1,
  Gm,
  un = null,
  kn = null,
  uc = !1,
  jr,
  en,
  go,
  Xe,
  oh,
  sr = null,
  yi = null,
  sn = null,
  ki = !1,
  cr,
  $l,
  pc,
  fc,
  mc,
  hc,
  vc,
  gc,
  Hu,
  rn,
  xi,
  bi,
  tn,
  nn,
  lh,
  io,
  ih,
  ah,
  Si = null,
  Ei = null,
  Ci,
  uh,
  Zu,
  sh,
  Rr,
  tt,
  En,
  ct,
  _i,
  dh,
  ph,
  zi,
  pr = -1,
  Mt,
  fe,
  xe,
  Gt,
  lt = null,
  el = !1,
  Kl = !1,
  fr,
  mr = 0,
  Fo = null,
  Ao = 0,
  Pe,
  Re = 0,
  Jt = null,
  it = 1,
  at = "",
  ze = null,
  _e = null,
  Y = !1,
  He = null,
  mh,
  _r,
  Cc,
  Bo,
  Do = null,
  hr = null,
  fa = null,
  Kt = null,
  yt = !1,
  On,
  nt,
  Nn,
  Cn,
  Z,
  Yl,
  yo,
  Xl,
  qt = 0,
  G = null,
  te = null,
  oe = null,
  Vo = !1,
  cn = !1,
  _n = 0,
  hh = 0,
  Qo,
  yh,
  kh,
  xh,
  rl,
  bh,
  Sh,
  ke = !1,
  Ai,
  od,
  Di,
  ld,
  id,
  po = !1,
  pe = !1,
  zh,
  L = null,
  hs = !1,
  ie = null,
  Qe = !1,
  Ph,
  Ho,
  _a,
  Oe,
  B = 0,
  le = null,
  ee = null,
  ae = 0,
  Ce = 0,
  gr,
  re = 0,
  Tn = null,
  It = 0,
  ol = 0,
  za = 0,
  pn = null,
  ye = null,
  La = 0,
  Tr = 1 / 0,
  ot = null,
  Ko = !1,
  Hi = null,
  Lt = null,
  fo = !1,
  St = null,
  Yo = 0,
  fn = 0,
  Ki = null,
  bo = -1,
  So = 0,
  wd,
  bd,
  Kh,
  Gr,
  Yh,
  lr,
  Sd,
  Ed = function (e, t) {
    var r =
      2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Aa(t)) throw Error(b(200));
    return Vh(e, t, null, r);
  },
  Nd = function (e, t) {
    if (!Aa(e)) throw Error(b(299));
    var r = !1,
      n = "",
      o = bd;
    return (
      t !== null &&
        t !== void 0 &&
        (t.unstable_strictMode === !0 && (r = !0),
        t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
      (t = Oa(e, 1, !1, null, null, r, !1, n, o)),
      (e[ct] = t.current),
      bn(e.nodeType === 8 ? e.parentNode : e),
      new Fa(t)
    );
  },
  Cd = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) {
      if (typeof e.render === "function") throw Error(b(188));
      throw ((e = Object.keys(e).join(",")), Error(b(268, e)));
    }
    return ((e = Hs(t)), (e = e === null ? null : e.stateNode), e);
  },
  _d = function (e) {
    return jt(e);
  },
  zd = function (e, t, r) {
    if (!ul(t)) throw Error(b(200));
    return sl(null, e, t, !0, r);
  },
  Ld = function (e, t, r) {
    if (!Aa(e)) throw Error(b(405));
    var n = (r != null && r.hydratedSources) || null,
      o = !1,
      l = "",
      i = bd;
    if (
      (r !== null &&
        r !== void 0 &&
        (r.unstable_strictMode === !0 && (o = !0),
        r.identifierPrefix !== void 0 && (l = r.identifierPrefix),
        r.onRecoverableError !== void 0 && (i = r.onRecoverableError)),
      (t = xd(t, null, e, 1, r != null ? r : null, o, !1, l, i)),
      (e[ct] = t.current),
      bn(e),
      n)
    )
      for (e = 0; e < n.length; e++)
        ((r = n[e]),
          (o = r._getVersion),
          (o = o(r._source)),
          t.mutableSourceEagerHydrationData == null
            ? (t.mutableSourceEagerHydrationData = [r, o])
            : t.mutableSourceEagerHydrationData.push(r, o));
    return new al(t);
  },
  Td = function (e, t, r) {
    if (!ul(t)) throw Error(b(200));
    return sl(null, e, t, !1, r);
  },
  Pd = function (e) {
    if (!ul(e)) throw Error(b(40));
    return e._reactRootContainer
      ? (jt(function () {
          sl(null, null, e, !1, function () {
            ((e._reactRootContainer = null), (e[ct] = null));
          });
        }),
        !0)
      : !1;
  },
  Rd,
  Md = function (e, t, r, n) {
    if (!ul(r)) throw Error(b(200));
    if (e == null || e._reactInternals === void 0) throw Error(b(38));
    return sl(e, t, r, !1, n);
  },
  Od = "18.3.1-next-f1338f8080-20240426";
var Ud = _p(() => {
  ((Ns = Ne(De(), 1)), (X = Ne(ku(), 1)));
  ((Cs = new Set()), (mn = {}));
  ((st = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  )),
    (ei = Object.prototype.hasOwnProperty),
    (Xf =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/),
    (xu = {}),
    (bu = {}));
  ue = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      ue[e] = new ge(e, 0, !1, e, null, !1, !1);
    });
  [
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
  ].forEach(function (e) {
    var t = e[0];
    ue[t] = new ge(t, 1, !1, e[1], null, !1, !1);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    ue[e] = new ge(e, 2, !1, e.toLowerCase(), null, !1, !1);
  });
  [
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
  ].forEach(function (e) {
    ue[e] = new ge(e, 2, !1, e, null, !1, !1);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
      ue[e] = new ge(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
  ["checked", "multiple", "muted", "selected"].forEach(function (e) {
    ue[e] = new ge(e, 3, !0, e, null, !1, !1);
  });
  ["capture", "download"].forEach(function (e) {
    ue[e] = new ge(e, 4, !1, e, null, !1, !1);
  });
  ["cols", "rows", "size", "span"].forEach(function (e) {
    ue[e] = new ge(e, 6, !1, e, null, !1, !1);
  });
  ["rowSpan", "start"].forEach(function (e) {
    ue[e] = new ge(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  Zi = /[\-:]([a-z])/g;
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(Zi, Gi);
      ue[t] = new ge(t, 1, !1, e, null, !1, !1);
    });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(Zi, Gi);
      ue[t] = new ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
  ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Zi, Gi);
    ue[t] = new ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  });
  ["tabIndex", "crossOrigin"].forEach(function (e) {
    ue[e] = new ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
  });
  ue.xlinkHref = new ge(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1,
  );
  ["src", "href", "action", "formAction"].forEach(function (e) {
    ue[e] = new ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  ((ft = Ns.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED),
    (In = Symbol.for("react.element")),
    (ir = Symbol.for("react.portal")),
    (ar = Symbol.for("react.fragment")),
    (qi = Symbol.for("react.strict_mode")),
    (ti = Symbol.for("react.profiler")),
    (_s = Symbol.for("react.provider")),
    (zs = Symbol.for("react.context")),
    (Ii = Symbol.for("react.forward_ref")),
    (ri = Symbol.for("react.suspense")),
    (ni = Symbol.for("react.suspense_list")),
    (ji = Symbol.for("react.memo")),
    (wt = Symbol.for("react.lazy")),
    (Ls = Symbol.for("react.offscreen")),
    (Su = Symbol.iterator));
  J = Object.assign;
  qr = Array.isArray;
  Us = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, r, n, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      ((eo = eo || document.createElement("div")),
        (eo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>"));
      for (t = eo.firstChild; e.firstChild;) e.removeChild(e.firstChild);
      for (; t.firstChild;) e.appendChild(t.firstChild);
    }
  });
  ((on = {
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
  }),
    (em = ["Webkit", "ms", "Moz", "O"]));
  Object.keys(on).forEach(function (e) {
    em.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (on[t] = on[e]));
    });
  });
  tm = J(
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
  );
  if (st)
    try {
      (($t = {}),
        Object.defineProperty($t, "passive", {
          get: function () {
            mi = !0;
          },
        }),
        window.addEventListener("test", $t, $t),
        window.removeEventListener("test", $t, $t));
    } catch (e) {
      mi = !1;
    }
  nm = {
    onError: function (e) {
      ((ln = !0), (Co = e));
    },
  };
  ((Ys = X.unstable_scheduleCallback),
    (Tu = X.unstable_cancelCallback),
    (am = X.unstable_shouldYield),
    (um = X.unstable_requestPaint),
    (j = X.unstable_now),
    (sm = X.unstable_getCurrentPriorityLevel),
    (ta = X.unstable_ImmediatePriority),
    (Xs = X.unstable_UserBlockingPriority),
    (zo = X.unstable_NormalPriority),
    (cm = X.unstable_LowPriority),
    (Zs = X.unstable_IdlePriority));
  ((Ke = Math.clz32 ? Math.clz32 : mm), (pm = Math.log), (fm = Math.LN2));
  ((no = []),
    (gn = new Map()),
    (wn = new Map()),
    (kt = []),
    (wm =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      )));
  xr = ft.ReactCurrentBatchConfig;
  ((Pr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  }),
    (ia = Le(Pr)),
    (Rn = J({}, Pr, { view: 0, detail: 0 })),
    (Sm = Le(Rn)),
    (Jo = J({}, Rn, {
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
      getModifierState: aa,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        if ("movementX" in e) return e.movementX;
        return (
          e !== Yr &&
            (Yr && e.type === "mousemove"
              ? ((Bl = e.screenX - Yr.screenX), (Dl = e.screenY - Yr.screenY))
              : (Dl = Bl = 0),
            (Yr = e)),
          Bl
        );
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Dl;
      },
    })),
    (Ou = Le(Jo)),
    (Em = J({}, Jo, { dataTransfer: 0 })),
    (Nm = Le(Em)),
    (Cm = J({}, Rn, { relatedTarget: 0 })),
    (Wl = Le(Cm)),
    (_m = J({}, Pr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
    (zm = Le(_m)),
    (Lm = J({}, Pr, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    })),
    (Tm = Le(Lm)),
    (Pm = J({}, Pr, { data: 0 })),
    (Uu = Le(Pm)),
    (Rm = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    }),
    (Mm = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    }),
    (Om = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    }));
  ((Fm = J({}, Rn, {
    key: function (e) {
      if (e.key) {
        var t = Rm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = vo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Mm[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: aa,
    charCode: function (e) {
      return e.type === "keypress" ? vo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? vo(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  })),
    (Am = Le(Fm)),
    (Bm = J({}, Jo, {
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
    })),
    (Fu = Le(Bm)),
    (Dm = J({}, Rn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: aa,
    })),
    (Wm = Le(Dm)),
    ($m = J({}, Pr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
    (Vm = Le($m)),
    (Qm = J({}, Jo, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    })),
    (Hm = Le(Qm)),
    (Km = [9, 13, 27, 32]),
    (ua = st && "CompositionEvent" in window));
  st && "documentMode" in document && (an = document.documentMode);
  ((Ym = st && "TextEvent" in window && !an),
    (oc = st && (!ua || (an && 8 < an && 11 >= an))),
    (Au = String.fromCharCode(32)));
  Gm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  if (st) {
    if (st) {
      if (((en = "oninput" in document), !en))
        ((go = document.createElement("div")),
          go.setAttribute("oninput", "return;"),
          (en = typeof go.oninput === "function"));
      jr = en;
    } else jr = !1;
    uc = jr && (!document.documentMode || 9 < document.documentMode);
  }
  Xe = typeof Object.is === "function" ? Object.is : rh;
  oh = st && "documentMode" in document && 11 >= document.documentMode;
  ((cr = {
    animationend: lo("Animation", "AnimationEnd"),
    animationiteration: lo("Animation", "AnimationIteration"),
    animationstart: lo("Animation", "AnimationStart"),
    transitionend: lo("Transition", "TransitionEnd"),
  }),
    ($l = {}),
    (pc = {}));
  st &&
    ((pc = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete cr.animationend.animation,
      delete cr.animationiteration.animation,
      delete cr.animationstart.animation),
    "TransitionEvent" in window || delete cr.transitionend.transition);
  ((fc = Io("animationend")),
    (mc = Io("animationiteration")),
    (hc = Io("animationstart")),
    (vc = Io("transitionend")),
    (gc = new Map()),
    (Hu =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      )));
  for (tn = 0; tn < Hu.length; tn++)
    ((rn = Hu[tn]),
      (xi = rn.toLowerCase()),
      (bi = rn[0].toUpperCase() + rn.slice(1)),
      Ot(xi, "on" + bi));
  Ot(fc, "onAnimationEnd");
  Ot(mc, "onAnimationIteration");
  Ot(hc, "onAnimationStart");
  Ot("dblclick", "onDoubleClick");
  Ot("focusin", "onFocus");
  Ot("focusout", "onBlur");
  Ot(vc, "onTransitionEnd");
  Er("onMouseEnter", ["mouseout", "mouseover"]);
  Er("onMouseLeave", ["mouseout", "mouseover"]);
  Er("onPointerEnter", ["pointerout", "pointerover"]);
  Er("onPointerLeave", ["pointerout", "pointerover"]);
  er(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
      " ",
    ),
  );
  er(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " ",
    ),
  );
  er("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  er(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" "),
  );
  er(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" "),
  );
  er(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
  );
  ((nn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    )),
    (lh = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(nn),
    )));
  io = "_reactListening" + Math.random().toString(36).slice(2);
  ((ih = /\r\n?/g), (ah = /\u0000|\uFFFD/g));
  ((Ci = typeof setTimeout === "function" ? setTimeout : void 0),
    (uh = typeof clearTimeout === "function" ? clearTimeout : void 0),
    (Zu = typeof Promise === "function" ? Promise : void 0),
    (sh =
      typeof queueMicrotask === "function"
        ? queueMicrotask
        : typeof Zu < "u"
          ? function (e) {
              return Zu.resolve(null).then(e).catch(ch);
            }
          : Ci));
  ((Rr = Math.random().toString(36).slice(2)),
    (tt = "__reactFiber$" + Rr),
    (En = "__reactProps$" + Rr),
    (ct = "__reactContainer$" + Rr),
    (_i = "__reactEvents$" + Rr),
    (dh = "__reactListeners$" + Rr),
    (ph = "__reactHandles$" + Rr));
  zi = [];
  ((Mt = {}), (fe = Ut(Mt)), (xe = Ut(!1)), (Gt = Mt));
  ((fr = []), (Pe = []));
  mh = ft.ReactCurrentBatchConfig;
  ((_r = Nc(!0)), (Cc = Nc(!1)), (Bo = Ut(null)));
  ((On = {}), (nt = Ut(On)), (Nn = Ut(On)), (Cn = Ut(On)));
  Z = Ut(0);
  Yl = [];
  ((yo = ft.ReactCurrentDispatcher), (Xl = ft.ReactCurrentBatchConfig));
  ((Qo = {
    readContext: Ue,
    useCallback: ce,
    useContext: ce,
    useEffect: ce,
    useImperativeHandle: ce,
    useInsertionEffect: ce,
    useLayoutEffect: ce,
    useMemo: ce,
    useReducer: ce,
    useRef: ce,
    useState: ce,
    useDebugValue: ce,
    useDeferredValue: ce,
    useTransition: ce,
    useMutableSource: ce,
    useSyncExternalStore: ce,
    useId: ce,
    unstable_isNewReconciler: !1,
  }),
    (yh = {
      readContext: Ue,
      useCallback: function (e, t) {
        return ((et().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Ue,
      useEffect: os,
      useImperativeHandle: function (e, t, r) {
        return (
          (r = r !== null && r !== void 0 ? r.concat([e]) : null),
          ko(4194308, 4, Wc.bind(null, t, e), r)
        );
      },
      useLayoutEffect: function (e, t) {
        return ko(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return ko(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var r = et();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (r.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, r) {
        var n = et();
        return (
          (t = r !== void 0 ? r(t) : t),
          (n.memoizedState = n.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (n.queue = e),
          (e = e.dispatch = gh.bind(null, G, e)),
          [n.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = et();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: ns,
      useDebugValue: Na,
      useDeferredValue: function (e) {
        return (et().memoizedState = e);
      },
      useTransition: function () {
        var e = ns(!1),
          t = e[0];
        return ((e = vh.bind(null, e[1])), (et().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var n = G,
          o = et();
        if (Y) {
          if (r === void 0) throw Error(b(407));
          r = r();
        } else {
          if (((r = t()), le === null)) throw Error(b(349));
          (qt & 30) !== 0 || Rc(n, t, r);
        }
        o.memoizedState = r;
        var l = { value: r, getSnapshot: t };
        return (
          (o.queue = l),
          os(Oc.bind(null, n, l, e), [e]),
          (n.flags |= 2048),
          Ln(9, Mc.bind(null, n, l, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = et(),
          t = le.identifierPrefix;
        if (Y) {
          var r = at,
            n = it;
          ((r = (n & ~(1 << (32 - Ke(n) - 1))).toString(32) + r),
            (t = ":" + t + "R" + r),
            (r = _n++),
            0 < r && (t += "H" + r.toString(32)),
            (t += ":"));
        } else ((r = hh++), (t = ":" + t + "r" + r.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    }),
    (kh = {
      readContext: Ue,
      useCallback: Vc,
      useContext: Ue,
      useEffect: Ea,
      useImperativeHandle: $c,
      useInsertionEffect: Bc,
      useLayoutEffect: Dc,
      useMemo: Qc,
      useReducer: Zl,
      useRef: Ac,
      useState: function () {
        return Zl(zn);
      },
      useDebugValue: Na,
      useDeferredValue: function (e) {
        var t = Fe();
        return Hc(t, te.memoizedState, e);
      },
      useTransition: function () {
        var e = Zl(zn)[0],
          t = Fe().memoizedState;
        return [e, t];
      },
      useMutableSource: Tc,
      useSyncExternalStore: Pc,
      useId: Kc,
      unstable_isNewReconciler: !1,
    }),
    (xh = {
      readContext: Ue,
      useCallback: Vc,
      useContext: Ue,
      useEffect: Ea,
      useImperativeHandle: $c,
      useInsertionEffect: Bc,
      useLayoutEffect: Dc,
      useMemo: Qc,
      useReducer: Gl,
      useRef: Ac,
      useState: function () {
        return Gl(zn);
      },
      useDebugValue: Na,
      useDeferredValue: function (e) {
        var t = Fe();
        return te === null ? (t.memoizedState = e) : Hc(t, te.memoizedState, e);
      },
      useTransition: function () {
        var e = Gl(zn)[0],
          t = Fe().memoizedState;
        return [e, t];
      },
      useMutableSource: Tc,
      useSyncExternalStore: Pc,
      useId: Kc,
      unstable_isNewReconciler: !1,
    }));
  rl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? tr(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var n = ve(),
        o = Tt(e),
        l = ut(n, o);
      ((l.payload = t),
        r !== void 0 && r !== null && (l.callback = r),
        (t = zt(e, l, o)),
        t !== null && (Ye(t, e, o, n), wo(t, e, o)));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var n = ve(),
        o = Tt(e),
        l = ut(n, o);
      ((l.tag = 1),
        (l.payload = t),
        r !== void 0 && r !== null && (l.callback = r),
        (t = zt(e, l, o)),
        t !== null && (Ye(t, e, o, n), wo(t, e, o)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = ve(),
        n = Tt(e),
        o = ut(r, n);
      ((o.tag = 2),
        t !== void 0 && t !== null && (o.callback = t),
        (t = zt(e, o, n)),
        t !== null && (Ye(t, e, n, r), wo(t, e, n)));
    },
  };
  bh = typeof WeakMap === "function" ? WeakMap : Map;
  Sh = ft.ReactCurrentOwner;
  Ai = { dehydrated: null, treeContext: null, retryLane: 0 };
  od = function (e, t) {
    for (var r = t.child; r !== null;) {
      if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
      else if (r.tag !== 4 && r.child !== null) {
        ((r.child.return = r), (r = r.child));
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null;) {
        if (r.return === null || r.return === t) return;
        r = r.return;
      }
      ((r.sibling.return = r.return), (r = r.sibling));
    }
  };
  Di = function () {};
  ld = function (e, t, r, n) {
    var o = e.memoizedProps;
    if (o !== n) {
      ((e = t.stateNode), Yt(nt.current));
      var l = null;
      switch (r) {
        case "input":
          ((o = li(e, o)), (n = li(e, n)), (l = []));
          break;
        case "select":
          ((o = J({}, o, { value: void 0 })),
            (n = J({}, n, { value: void 0 })),
            (l = []));
          break;
        case "textarea":
          ((o = ui(e, o)), (n = ui(e, n)), (l = []));
          break;
        default:
          typeof o.onClick !== "function" &&
            typeof n.onClick === "function" &&
            (e.onclick = Mo);
      }
      ci(r, n);
      var i;
      r = null;
      for (f in o)
        if (!n.hasOwnProperty(f) && o.hasOwnProperty(f) && o[f] != null)
          if (f === "style") {
            var u = o[f];
            for (i in u) u.hasOwnProperty(i) && (r || (r = {}), (r[i] = ""));
          } else
            f !== "dangerouslySetInnerHTML" &&
              f !== "children" &&
              f !== "suppressContentEditableWarning" &&
              f !== "suppressHydrationWarning" &&
              f !== "autoFocus" &&
              (mn.hasOwnProperty(f)
                ? l || (l = [])
                : (l = l || []).push(f, null));
      for (f in n) {
        var s = n[f];
        if (
          ((u = o != null ? o[f] : void 0),
          n.hasOwnProperty(f) && s !== u && (s != null || u != null))
        )
          if (f === "style")
            if (u) {
              for (i in u)
                !u.hasOwnProperty(i) ||
                  (s && s.hasOwnProperty(i)) ||
                  (r || (r = {}), (r[i] = ""));
              for (i in s)
                s.hasOwnProperty(i) &&
                  u[i] !== s[i] &&
                  (r || (r = {}), (r[i] = s[i]));
            } else (r || (l || (l = []), l.push(f, r)), (r = s));
          else
            f === "dangerouslySetInnerHTML"
              ? ((s = s ? s.__html : void 0),
                (u = u ? u.__html : void 0),
                s != null && u !== s && (l = l || []).push(f, s))
              : f === "children"
                ? (typeof s !== "string" && typeof s !== "number") ||
                  (l = l || []).push(f, "" + s)
                : f !== "suppressContentEditableWarning" &&
                  f !== "suppressHydrationWarning" &&
                  (mn.hasOwnProperty(f)
                    ? (s != null && f === "onScroll" && V("scroll", e),
                      l || u === s || (l = []))
                    : (l = l || []).push(f, s));
      }
      r && (l = l || []).push("style", r);
      var f = l;
      if ((t.updateQueue = f)) t.flags |= 4;
    }
  };
  id = function (e, t, r, n) {
    r !== n && (t.flags |= 4);
  };
  zh = typeof WeakSet === "function" ? WeakSet : Set;
  ((Ph = Math.ceil),
    (Ho = ft.ReactCurrentDispatcher),
    (_a = ft.ReactCurrentOwner),
    (Oe = ft.ReactCurrentBatchConfig),
    (gr = Ut(0)));
  wd = function (e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || xe.current) ke = !0;
      else {
        if ((e.lanes & r) === 0 && (t.flags & 128) === 0)
          return ((ke = !1), Nh(e, t, r));
        ke = (e.flags & 131072) !== 0 ? !0 : !1;
      }
    else ((ke = !1), Y && (t.flags & 1048576) !== 0 && bc(t, Ao, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var n = t.type;
        (xo(e, t), (e = t.pendingProps));
        var o = Nr(t, fe.current);
        (br(t, r), (o = ba(null, t, n, e, o, r)));
        var l = Sa();
        return (
          (t.flags |= 1),
          typeof o === "object" &&
          o !== null &&
          typeof o.render === "function" &&
          o.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              be(n) ? ((l = !0), Uo(t)) : (l = !1),
              (t.memoizedState =
                o.state !== null && o.state !== void 0 ? o.state : null),
              ga(t),
              (o.updater = rl),
              (t.stateNode = o),
              (o._reactInternals = t),
              Mi(t, n, e, r),
              (t = Fi(null, t, n, !0, l, r)))
            : ((t.tag = 0), Y && l && ca(t), he(null, t, o, r), (t = t.child)),
          t
        );
      case 16:
        n = t.elementType;
        e: {
          switch (
            (xo(e, t),
            (e = t.pendingProps),
            (o = n._init),
            (n = o(n._payload)),
            (t.type = n),
            (o = t.tag = Wh(n)),
            (e = Ve(n, e)),
            o)
          ) {
            case 0:
              t = Ui(null, t, n, e, r);
              break e;
            case 1:
              t = ps(null, t, n, e, r);
              break e;
            case 11:
              t = cs(null, t, n, e, r);
              break e;
            case 14:
              t = ds(null, t, n, Ve(n.type, e), r);
              break e;
          }
          throw Error(b(306, n, ""));
        }
        return t;
      case 0:
        return (
          (n = t.type),
          (o = t.pendingProps),
          (o = t.elementType === n ? o : Ve(n, o)),
          Ui(e, t, n, o, r)
        );
      case 1:
        return (
          (n = t.type),
          (o = t.pendingProps),
          (o = t.elementType === n ? o : Ve(n, o)),
          ps(e, t, n, o, r)
        );
      case 3:
        e: {
          if ((td(t), e === null)) throw Error(b(387));
          ((n = t.pendingProps),
            (l = t.memoizedState),
            (o = l.element),
            zc(e, t),
            Wo(t, n, null, r));
          var i = t.memoizedState;
          if (((n = i.element), l.isDehydrated))
            if (
              ((l = {
                element: n,
                isDehydrated: !1,
                cache: i.cache,
                pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                transitions: i.transitions,
              }),
              (t.updateQueue.baseState = l),
              (t.memoizedState = l),
              t.flags & 256)
            ) {
              ((o = Lr(Error(b(423)), t)), (t = fs(e, t, n, r, o)));
              break e;
            } else if (n !== o) {
              ((o = Lr(Error(b(424)), t)), (t = fs(e, t, n, r, o)));
              break e;
            } else
              for (
                _e = _t(t.stateNode.containerInfo.firstChild),
                  ze = t,
                  Y = !0,
                  He = null,
                  r = Cc(t, null, n, r),
                  t.child = r;
                r;
              )
                ((r.flags = (r.flags & -3) | 4096), (r = r.sibling));
          else {
            if ((Cr(), n === o)) {
              t = pt(e, t, r);
              break e;
            }
            he(e, t, n, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Lc(t),
          e === null && Ti(t),
          (n = t.type),
          (o = t.pendingProps),
          (l = e !== null ? e.memoizedProps : null),
          (i = o.children),
          Ni(n, o) ? (i = null) : l !== null && Ni(n, l) && (t.flags |= 32),
          ed(e, t),
          he(e, t, i, r),
          t.child
        );
      case 6:
        return (e === null && Ti(t), null);
      case 13:
        return rd(e, t, r);
      case 4:
        return (
          wa(t, t.stateNode.containerInfo),
          (n = t.pendingProps),
          e === null ? (t.child = _r(t, null, n, r)) : he(e, t, n, r),
          t.child
        );
      case 11:
        return (
          (n = t.type),
          (o = t.pendingProps),
          (o = t.elementType === n ? o : Ve(n, o)),
          cs(e, t, n, o, r)
        );
      case 7:
        return (he(e, t, t.pendingProps, r), t.child);
      case 8:
        return (he(e, t, t.pendingProps.children, r), t.child);
      case 12:
        return (he(e, t, t.pendingProps.children, r), t.child);
      case 10:
        e: {
          if (
            ((n = t.type._context),
            (o = t.pendingProps),
            (l = t.memoizedProps),
            (i = o.value),
            $(Bo, n._currentValue),
            (n._currentValue = i),
            l !== null)
          )
            if (Xe(l.value, i)) {
              if (l.children === o.children && !xe.current) {
                t = pt(e, t, r);
                break e;
              }
            } else
              for (l = t.child, l !== null && (l.return = t); l !== null;) {
                var u = l.dependencies;
                if (u !== null) {
                  i = l.child;
                  for (var s = u.firstContext; s !== null;) {
                    if (s.context === n) {
                      if (l.tag === 1) {
                        ((s = ut(-1, r & -r)), (s.tag = 2));
                        var f = l.updateQueue;
                        if (f !== null) {
                          f = f.shared;
                          var h = f.pending;
                          (h === null
                            ? (s.next = s)
                            : ((s.next = h.next), (h.next = s)),
                            (f.pending = s));
                        }
                      }
                      ((l.lanes |= r),
                        (s = l.alternate),
                        s !== null && (s.lanes |= r),
                        Pi(l.return, r, t),
                        (u.lanes |= r));
                      break;
                    }
                    s = s.next;
                  }
                } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
                else if (l.tag === 18) {
                  if (((i = l.return), i === null)) throw Error(b(341));
                  ((i.lanes |= r),
                    (u = i.alternate),
                    u !== null && (u.lanes |= r),
                    Pi(i, r, t),
                    (i = l.sibling));
                } else i = l.child;
                if (i !== null) i.return = l;
                else
                  for (i = l; i !== null;) {
                    if (i === t) {
                      i = null;
                      break;
                    }
                    if (((l = i.sibling), l !== null)) {
                      ((l.return = i.return), (i = l));
                      break;
                    }
                    i = i.return;
                  }
                l = i;
              }
          (he(e, t, o.children, r), (t = t.child));
        }
        return t;
      case 9:
        return (
          (o = t.type),
          (n = t.pendingProps.children),
          br(t, r),
          (o = Ue(o)),
          (n = n(o)),
          (t.flags |= 1),
          he(e, t, n, r),
          t.child
        );
      case 14:
        return (
          (n = t.type),
          (o = Ve(n, t.pendingProps)),
          (o = Ve(n.type, o)),
          ds(e, t, n, o, r)
        );
      case 15:
        return Ic(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (n = t.type),
          (o = t.pendingProps),
          (o = t.elementType === n ? o : Ve(n, o)),
          xo(e, t),
          (t.tag = 1),
          be(n) ? ((e = !0), Uo(t)) : (e = !1),
          br(t, r),
          Gc(t, n, o),
          Mi(t, n, o, r),
          Fi(null, t, n, !0, e, r)
        );
      case 19:
        return nd(e, t, r);
      case 22:
        return jc(e, t, r);
    }
    throw Error(b(156, t.tag));
  };
  bd =
    typeof reportError === "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  al.prototype.render = Fa.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(b(409));
    il(e, t, null, null);
  };
  al.prototype.unmount = Fa.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      (jt(function () {
        il(null, e, null, null);
      }),
        (t[ct] = null));
    }
  };
  al.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = js();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < kt.length && t !== 0 && t < kt[r].priority; r++);
      (kt.splice(r, 0, e), r === 0 && tc(e));
    }
  };
  qs = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = Ir(t.pendingLanes);
          r !== 0 &&
            (ra(t, r | 1),
            Se(t, j()),
            (B & 6) === 0 && ((Tr = j() + 500), Ft()));
        }
        break;
      case 13:
        (jt(function () {
          var n = dt(e, 1);
          if (n !== null) {
            var o = ve();
            Ye(n, e, 1, o);
          }
        }),
          Ua(e, 1));
    }
  };
  na = function (e) {
    if (e.tag === 13) {
      var t = dt(e, 134217728);
      if (t !== null) {
        var r = ve();
        Ye(t, e, 134217728, r);
      }
      Ua(e, 134217728);
    }
  };
  Is = function (e) {
    if (e.tag === 13) {
      var t = Tt(e),
        r = dt(e, t);
      if (r !== null) {
        var n = ve();
        Ye(r, e, t, n);
      }
      Ua(e, t);
    }
  };
  js = function () {
    return W;
  };
  ec = function (e, t) {
    var r = W;
    try {
      return ((W = e), t());
    } finally {
      W = r;
    }
  };
  fi = function (e, t, r) {
    switch (t) {
      case "input":
        if ((ii(e, r), (t = r.name), r.type === "radio" && t != null)) {
          for (r = e; r.parentNode;) r = r.parentNode;
          r = r.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          );
          for (t = 0; t < r.length; t++) {
            var n = r[t];
            if (n !== e && n.form === e.form) {
              var o = jo(n);
              if (!o) throw Error(b(90));
              (Ps(n), ii(n, o));
            }
          }
        }
        break;
      case "textarea":
        Ms(e, r);
        break;
      case "select":
        ((t = r.value), t != null && wr(e, !!r.multiple, t, !1));
    }
  };
  Ws = Ta;
  $s = jt;
  ((Kh = { usingClientEntryPoint: !1, Events: [Mn, dr, jo, Bs, Ds, Ta] }),
    (Gr = {
      findFiberByHostInstance: Ht,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    }),
    (Yh = {
      bundleType: Gr.bundleType,
      version: Gr.version,
      rendererPackageName: Gr.rendererPackageName,
      rendererConfig: Gr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: ft.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = Hs(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: Gr.findFiberByHostInstance || Qh,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    }));
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    if (
      ((lr = __REACT_DEVTOOLS_GLOBAL_HOOK__),
      !lr.isDisabled && lr.supportsFiber)
    )
      try {
        ((Go = lr.inject(Yh)), (rt = lr));
      } catch (e) {}
  }
  ((Sd = Kh), (Rd = Ta));
});
var Bd = $n((z0, Ad) => {
  Ud();
  function Fd() {
    if (
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function"
    )
      return;
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fd);
    } catch (e) {
      console.error(e);
    }
  }
  (Fd(), (Ad.exports = Ba));
});
var Dd = $n((Zh) => {
  var Un = Ne(Bd());
  ((Zh.createRoot = Un.createRoot), (Zh.hydrateRoot = Un.hydrateRoot));
  var Xh;
});
var Gd = Ne(De(), 1),
  Jd = Ne(Dd(), 1);
var ne = Ne(De(), 1);
var Wd = Ne(De(), 1),
  Gh = Symbol.for("react.element"),
  Jh = Symbol.for("react.fragment"),
  qh = Object.prototype.hasOwnProperty,
  Ih = Wd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  jh = { key: !0, ref: !0, __self: !0, __source: !0 };
function $d(e, t, r) {
  var n,
    o = {},
    l = null,
    i = null;
  (r !== void 0 && (l = "" + r),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (i = t.ref));
  for (n in t) qh.call(t, n) && !jh.hasOwnProperty(n) && (o[n] = t[n]);
  if (e && e.defaultProps)
    for (n in ((t = e.defaultProps), t)) o[n] === void 0 && (o[n] = t[n]);
  return {
    $$typeof: Gh,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: Ih.current,
  };
}
var Ae = Jh,
  a = $d,
  g = $d;
var e0 = () => ({ imageUrl: "", description: "", alt: "" }),
  An = () => ({ name: "", price: "", description: "" }),
  Da = () => ({ name: "", description: "", items: [An()] }),
  t0 = () => ({ name: "", description: "", groups: [Da()] });
function r0(e) {
  if (!e || typeof e !== "object")
    return {
      eyebrow: "",
      title: "",
      subtitle: "",
      imageUrl: "",
      imageUrlDesktop: "",
      imageUrlMobile: "",
    };
  return {
    ...e,
    imageUrl: String(e.imageUrl ?? "").trim(),
    imageUrlDesktop: String(e.imageUrlDesktop ?? "").trim(),
    imageUrlMobile: String(e.imageUrlMobile ?? "").trim(),
  };
}
function At(e) {
  let t = e || {},
    r = Array.isArray(t.folders) ? t.folders : [],
    n = Array.isArray(t.images) ? t.images : [];
  return {
    ...t,
    profileUrl: String(t.profileUrl ?? ""),
    folders: r.map((o, l) => ({
      id: String(o?.id ?? `folder-${l + 1}`),
      name: String(o?.name ?? "").trim() || `Folder ${l + 1}`,
      designType: String(o?.designType ?? "").trim(),
      parentId: String(o?.parentId ?? ""),
    })),
    images: n.map((o) => ({
      imageUrl: String(o?.imageUrl ?? ""),
      alt: String(o?.alt ?? ""),
      folderId: String(o?.folderId ?? ""),
      showOnHome: !!o?.showOnHome,
    })),
  };
}
function n0(e, t) {
  let r = new Set(),
    n = [],
    o = e;
  while (o && !r.has(o)) {
    r.add(o);
    let l = t.get(o);
    if (!l) break;
    (n.unshift(l.name), (o = l.parentId || ""));
  }
  return n.join(" / ");
}
function Ze(e) {
  let t = e;
  if (!Array.isArray(e?.services)) {
    let n = Array.isArray(e?.items) ? e.items : [];
    t = {
      ...e,
      services: [
        { name: e?.modalTitle || "Service", description: "", items: n },
      ],
    };
  }
  let r = (t.services || []).map((n) => {
    if (Array.isArray(n?.groups) && n.groups.length > 0)
      return {
        ...n,
        groups: n.groups.map((l) => ({
          name: l?.name ?? "",
          description: l?.description ?? "",
          items:
            Array.isArray(l?.items) && l.items.length > 0 ? l.items : [An()],
        })),
      };
    let o = Array.isArray(n?.items) && n.items.length > 0 ? n.items : [An()];
    return { ...n, groups: [{ name: "", description: "", items: o }] };
  });
  return { ...t, services: r };
}
async function Mr(e) {
  let t = new FormData();
  t.append("file", e);
  let r = await fetch("/api/upload", {
      method: "POST",
      body: t,
      credentials: "include",
    }),
    n = await r.json();
  if (!r.ok) throw Error(n.error || "Upload thß║Ñt bß║íi");
  return n.url;
}
function U({ label: e, children: t }) {
  return g("label", {
    className: "block",
    children: [
      a("span", {
        className: "text-sm font-medium text-charcoal mb-1 block",
        children: e,
      }),
      t,
    ],
  });
}
function Fn({ src: e, alt: t }) {
  if (!e?.trim()) return null;
  return a("div", {
    className: "mt-2",
    children: a("img", {
      src: e,
      alt: t,
      className:
        "w-full max-w-[280px] h-36 rounded-xl border border-sand/70 object-cover bg-cream",
    }),
  });
}
function Or({
  id: e,
  label: t,
  accept: r = "image/*",
  multiple: n = !1,
  onPick: o,
}) {
  return g(Ae, {
    children: [
      a("input", {
        id: e,
        type: "file",
        accept: r,
        multiple: n,
        className: "hidden",
        onChange: async (l) => {
          let i = Array.from(l.target.files || []);
          if (i.length > 0) await o(i);
          l.target.value = "";
        },
      }),
      g("label", {
        htmlFor: e,
        className:
          "inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/20 bg-white px-4 py-2.5 text-sm font-medium text-charcoal hover:bg-cream hover:border-charcoal transition-colors cursor-pointer whitespace-nowrap",
        children: [
          a("span", { "aria-hidden": "true", children: "\uD83D\uDCF7" }),
          a("span", { children: t }),
        ],
      }),
    ],
  });
}
function Wa() {
  let [e, t] = ne.useState(!1),
    [r, n] = ne.useState(!1),
    [o, l] = ne.useState(""),
    [i, u] = ne.useState(""),
    [s, f] = ne.useState(""),
    [h, w] = ne.useState(null),
    [y, S] = ne.useState(""),
    [N, E] = ne.useState(!1),
    [R, p] = ne.useState(""),
    [d, m] = ne.useState("general"),
    [x, z] = ne.useState({}),
    [P, M] = ne.useState({}),
    [O, I] = ne.useState("all"),
    A = ne.useCallback(async () => {
      S("");
      try {
        let c = await fetch("/api/content");
        if (!c.ok) throw Error("Kh├┤ng tß║úi ─æ╞░ß╗úc dß╗» liß╗çu");
        let v = await c.json();
        w({
          ...v,
          hero: r0(v.hero),
          instagram: At(v.instagram),
          pricing: Ze(v.pricing || {}),
        });
      } catch (c) {
        S(c.message ?? "Lß╗ùi");
      }
    }, []);
  (ne.useEffect(() => {
    fetch("/api/auth/me", { credentials: "include" })
      .then((c) => c.json())
      .then((c) => {
        (n(!!c.authenticated), t(!0));
      })
      .catch(() => t(!0));
  }, []),
    ne.useEffect(() => {
      if (r) A();
    }, [r, A]));
  async function Je(c) {
    (c.preventDefault(), f(""));
    let v = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ username: o, password: i }),
    });
    if (!v.ok) {
      let k = await v.json().catch(() => ({}));
      f(k.error || "─É─âng nhß║¡p thß║Ñt bß║íi");
      return;
    }
    (n(!0), u(""));
  }
  async function fl() {
    (await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
    }),
      n(!1),
      w(null));
  }
  async function qd(c) {
    if ((c.preventDefault(), !h)) return;
    (E(!0), p(""));
    try {
      let v = await fetch("/api/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(h),
      });
      if (v.status === 401) {
        (n(!1), p("Phi├¬n ─æ─âng nhß║¡p hß║┐t hß║ín."));
        return;
      }
      if (!v.ok) throw Error("L╞░u thß║Ñt bß║íi");
      p("─É├ú l╞░u th├ánh c├┤ng.");
    } catch (v) {
      p(v.message ?? "Lß╗ùi l╞░u");
    } finally {
      E(!1);
    }
  }
  function we(c) {
    w((v) => ({ ...v, site: { ...v.site, ...c } }));
  }
  function Bt(c) {
    w((v) => ({ ...v, hero: { ...v.hero, ...c } }));
  }
  function Dn(c) {
    w((v) => ({ ...v, aboutSlider: { ...v.aboutSlider, ...c } }));
  }
  function Ur(c) {
    w((v) => ({ ...v, testimonial: { ...(v.testimonial || {}), ...c } }));
  }
  function ja(c) {
    w((v) => ({ ...v, pricing: { ...v.pricing, ...c } }));
  }
  function Id(c) {
    w((v) => ({ ...v, instagram: { ...(v.instagram || {}), ...c } }));
  }
  function Wn(c, v) {
    w((k) => {
      let _ = [...k.slides];
      return ((_[c] = { ..._[c], ...v }), { ...k, slides: _ });
    });
  }
  function jd() {
    w((c) => ({ ...c, slides: [...c.slides, e0()] }));
  }
  function ep(c) {
    w((v) => ({ ...v, slides: v.slides.filter((k, _) => _ !== c) }));
  }
  function eu(c, v) {
    w((k) => {
      let _ = Ze(k.pricing),
        C = [..._.services];
      return (
        (C[c] = { ...C[c], ...v }),
        { ...k, pricing: { ..._, services: C } }
      );
    });
  }
  function tp() {
    w((c) => {
      let v = Ze(c.pricing);
      return { ...c, pricing: { ...v, services: [...v.services, t0()] } };
    });
  }
  function rp(c) {
    (z((v) => {
      let k = {};
      for (let _ of Object.keys(v)) {
        let C = Number(_);
        if (Number.isNaN(C)) continue;
        if (C < c) k[_] = v[_];
        else if (C > c) k[String(C - 1)] = v[_];
      }
      return k;
    }),
      M((v) => {
        let k = {};
        for (let [_, C] of Object.entries(v)) {
          let [T, F] = _.split("-").map(Number);
          if (Number.isNaN(T) || Number.isNaN(F)) continue;
          if (T < c) k[_] = C;
          else if (T > c) k[`${T - 1}-${F}`] = C;
        }
        return k;
      }),
      w((v) => {
        let k = Ze(v.pricing);
        return {
          ...v,
          pricing: { ...k, services: k.services.filter((_, C) => C !== c) },
        };
      }));
  }
  function tu(c, v, k) {
    w((_) => {
      let C = Ze(_.pricing),
        T = [...C.services],
        F = [...(T[c].groups || [])];
      return (
        (F[v] = { ...F[v], ...k }),
        (T[c] = { ...T[c], groups: F }),
        { ..._, pricing: { ...C, services: T } }
      );
    });
  }
  function np(c) {
    w((v) => {
      let k = Ze(v.pricing),
        _ = [...k.services],
        C = [...(_[c].groups || []), Da()];
      return (
        (_[c] = { ..._[c], groups: C }),
        { ...v, pricing: { ...k, services: _ } }
      );
    });
  }
  function op(c, v) {
    (M((k) => {
      let _ = {};
      for (let [C, T] of Object.entries(k)) {
        let [F, D] = C.split("-").map(Number);
        if (Number.isNaN(F) || Number.isNaN(D)) continue;
        if (F !== c) {
          _[C] = T;
          continue;
        }
        if (D < v) _[C] = T;
        else if (D > v) _[`${F}-${D - 1}`] = T;
      }
      return _;
    }),
      w((k) => {
        let _ = Ze(k.pricing),
          C = [..._.services],
          T = (C[c].groups || []).filter((F, D) => D !== v);
        return (
          (C[c] = { ...C[c], groups: T.length > 0 ? T : [Da()] }),
          { ...k, pricing: { ..._, services: C } }
        );
      }));
  }
  function ml(c, v, k, _) {
    w((C) => {
      let T = Ze(C.pricing),
        F = [...T.services],
        D = [...(F[c].groups || [])],
        K = [...(D[v].items || [])];
      return (
        (K[k] = { ...K[k], ..._ }),
        (D[v] = { ...D[v], items: K }),
        (F[c] = { ...F[c], groups: D }),
        { ...C, pricing: { ...T, services: F } }
      );
    });
  }
  function lp(c, v) {
    w((k) => {
      let _ = Ze(k.pricing),
        C = [..._.services],
        T = [...(C[c].groups || [])],
        F = [...(T[v].items || []), An()];
      return (
        (T[v] = { ...T[v], items: F }),
        (C[c] = { ...C[c], groups: T }),
        { ...k, pricing: { ..._, services: C } }
      );
    });
  }
  function ip(c, v, k) {
    w((_) => {
      let C = Ze(_.pricing),
        T = [...C.services],
        F = [...(T[c].groups || [])],
        D = (F[v].items || []).filter((K, qe) => qe !== k);
      return (
        (F[v] = { ...F[v], items: D.length > 0 ? D : [An()] }),
        (T[c] = { ...T[c], groups: F }),
        { ..._, pricing: { ...C, services: T } }
      );
    });
  }
  function ap(c) {
    z((v) => ({ ...v, [c]: v[c] !== !0 }));
  }
  function up(c, v) {
    let k = `${c}-${v}`;
    M((_) => ({ ..._, [k]: _[k] !== !0 }));
  }
  function sp(c) {
    return x[c] !== !0;
  }
  function cp(c, v) {
    return P[`${c}-${v}`] !== !0;
  }
  if (!e)
    return a("div", {
      className:
        "min-h-screen bg-cream flex items-center justify-center text-warm",
      children: "─Éang tß║úiΓÇª",
    });
  if (!r)
    return a("div", {
      className: "min-h-screen bg-cream flex items-center justify-center px-4",
      children: g("form", {
        onSubmit: Je,
        className:
          "w-full max-w-md rounded-2xl border border-sand/70 bg-white p-8 shadow-lg",
        children: [
          a("h1", {
            className: "font-serif text-2xl text-charcoal mb-6 text-center",
            children: "Admin Best Nails",
          }),
          g("div", {
            className: "space-y-4",
            children: [
              a(U, {
                label: "T├ái khoß║ún",
                children: a("input", {
                  className:
                    "w-full rounded-xl border border-sand px-4 py-2.5 text-charcoal",
                  value: o,
                  onChange: (c) => l(c.target.value),
                  autoComplete: "username",
                }),
              }),
              a(U, {
                label: "Mß║¡t khß║⌐u",
                children: a("input", {
                  type: "password",
                  className:
                    "w-full rounded-xl border border-sand px-4 py-2.5 text-charcoal",
                  value: i,
                  onChange: (c) => u(c.target.value),
                  autoComplete: "current-password",
                }),
              }),
              s && a("p", { className: "text-sm text-red-700", children: s }),
              a("button", {
                type: "submit",
                className:
                  "w-full rounded-full bg-charcoal text-cream py-3 font-medium hover:bg-warm transition-colors cursor-pointer",
                children: "─É─âng nhß║¡p",
              }),
            ],
          }),
          a("p", {
            className: "mt-6 text-center text-sm text-warm",
            children: a("a", {
              href: "/",
              className: "text-rose hover:underline cursor-pointer",
              children: "Vß╗ü trang chß╗º",
            }),
          }),
        ],
      }),
    });
  if (!h)
    return a("div", {
      className: "min-h-screen bg-cream px-4 py-12",
      children: a("p", {
        className: "text-center text-warm",
        children: y || "─Éang tß║úi dß╗» liß╗çuΓÇª",
      }),
    });
  let hl = Ze(h.pricing),
    Ee = At(h.instagram),
    dp = new Map((Ee.folders || []).map((c) => [c.id, c])),
    Dt = O === "all" || (Ee.folders || []).some((c) => c.id === O) ? O : "all",
    ru =
      Dt === "all"
        ? (Ee.images || []).map((c, v) => ({ ...c, _index: v }))
        : (Ee.images || [])
            .map((c, v) => ({ ...c, _index: v }))
            .filter((c) => (c?.folderId || "") === Dt);
  function pp(c) {
    w((v) => {
      let k = At(v.instagram);
      return {
        ...v,
        instagram: { ...k, images: (k.images || []).filter((_, C) => C !== c) },
      };
    });
  }
  function fp(c, v) {
    w((k) => {
      let _ = At(k.instagram),
        C = [...(_.images || [])];
      if (!C[c]) return k;
      return (
        (C[c] = { ...C[c], ...v }),
        { ...k, instagram: { ..._, images: C } }
      );
    });
  }
  function vl(c, v) {
    w((k) => {
      let _ = At(k.instagram),
        C = [...(_.folders || [])];
      return (
        (C[c] = { ...C[c], ...v }),
        { ...k, instagram: { ..._, folders: C } }
      );
    });
  }
  function mp() {
    w((c) => {
      let v = At(c.instagram),
        k =
          typeof crypto < "u" && crypto.randomUUID
            ? crypto.randomUUID()
            : `folder-${Date.now()}`;
      return {
        ...c,
        instagram: {
          ...v,
          folders: [
            ...(v.folders || []),
            {
              id: k,
              name: `New folder ${(v.folders || []).length + 1}`,
              designType: "",
              parentId: "",
            },
          ],
        },
      };
    });
  }
  function hp(c) {
    w((v) => {
      let k = At(v.instagram),
        _ = k.folders[c],
        C = (k.folders || []).filter((K, qe) => qe !== c),
        T = _?.id || "",
        F = (K) => {
          if (!T) return K;
          return K.parentId === T ? { ...K, parentId: "" } : K;
        },
        D = (k.images || []).map((K) =>
          _ && K.folderId === _.id ? { ...K, folderId: "" } : K,
        );
      return { ...v, instagram: { ...k, folders: C.map(F), images: D } };
    });
  }
  let ht = {
      enabled: !0,
      title: "",
      imageUrl: "",
      description: "",
      ...(h.promotion || {}),
    },
    Fr = {
      label: "What clients say",
      heading: "Kind words",
      quote:
        "Best Nails feels like a treat every time. The team is so warm and the results are always perfect. I won't go anywhere else.",
      author: "Maria K.",
      role: "Regular client",
      ...(h.testimonial || {}),
    };
  function Ar(c) {
    w((v) => ({ ...v, promotion: { ...ht, ...c } }));
  }
  function vp() {
    return [
      { key: "home", label: "Home", href: "/", enabled: !0 },
      { key: "about", label: "About Us", href: "#about-us", enabled: !0 },
      { key: "services", label: "Services", href: "#services", enabled: !0 },
      { key: "gallery", label: "Gallery", href: "#instagram", enabled: !0 },
      {
        key: "promotion",
        label: "Promotion",
        href: "#promotion",
        enabled: !!ht.enabled,
      },
      { key: "contact", label: "Contact Us", href: "#book", enabled: !0 },
    ];
  }
  return g("div", {
    className: "min-h-screen bg-cream text-charcoal",
    children: [
      a("header", {
        className: "border-b border-sand/70 bg-white sticky top-0 z-10",
        children: g("div", {
          className:
            "max-w-3xl mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-4",
          children: [
            a("h1", {
              className: "font-serif text-xl font-semibold",
              children: "Quß║ún trß╗ï nß╗Öi dung",
            }),
            g("div", {
              className: "flex items-center gap-3",
              children: [
                a("a", {
                  href: "/",
                  className:
                    "text-sm text-warm hover:text-charcoal cursor-pointer",
                  children: "Xem website",
                }),
                a("button", {
                  type: "button",
                  onClick: fl,
                  className:
                    "text-sm rounded-full border border-sand px-4 py-2 hover:bg-cream cursor-pointer",
                  children: "─É─âng xuß║Ñt",
                }),
              ],
            }),
          ],
        }),
      }),
      a("form", {
        onSubmit: qd,
        className: "max-w-5xl mx-auto px-4 py-10 pb-24",
        children: g("div", {
          className: "grid lg:grid-cols-[220px_1fr] gap-6",
          children: [
            g("aside", {
              className:
                "lg:sticky lg:top-24 h-fit rounded-2xl border border-sand/70 bg-white p-3 shadow-sm",
              children: [
                a("p", {
                  className:
                    "text-xs font-medium uppercase tracking-wide text-warm px-2 pb-2",
                  children: "Menu chß╗ënh sß╗¡a",
                }),
                a("div", {
                  className: "grid grid-cols-2 lg:grid-cols-1 gap-2",
                  children: [
                    { id: "general", label: "Chung", icon: "\uD83C\uDFE2" },
                    { id: "menu", label: "Menu", icon: "\uD83E\uDDED" },
                    { id: "hero", label: "Hero", icon: "\uD83D\uDDBC∩╕Å" },
                    { id: "slides", label: "Slide", icon: "\uD83C\uDF9E∩╕Å" },
                    { id: "pricing", label: "Bß║úng gi├í", icon: "\uD83D\uDCB2" },
                    {
                      id: "promotion",
                      label: "Promotion",
                      icon: "\uD83C\uDFF7∩╕Å",
                    },
                    {
                      id: "testimonial",
                      label: "Testimonial",
                      icon: "\uD83D\uDCAC",
                    },
                    {
                      id: "instagram",
                      label: "Instagram",
                      icon: "\uD83D\uDCF8",
                    },
                  ].map((c) =>
                    g(
                      "button",
                      {
                        type: "button",
                        onClick: () => m(c.id),
                        className: `flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm transition-colors cursor-pointer ${d === c.id ? "bg-charcoal text-cream" : "bg-cream text-charcoal hover:bg-sand/50"}`,
                        children: [
                          a("span", {
                            "aria-hidden": "true",
                            children: c.icon,
                          }),
                          a("span", { children: c.label }),
                        ],
                      },
                      c.id,
                    ),
                  ),
                }),
              ],
            }),
            g("div", {
              className: "space-y-6",
              children: [
                g("section", {
                  className: `rounded-2xl border border-sand/70 bg-white p-6 shadow-sm space-y-4 ${d === "general" ? "block" : "hidden"}`,
                  children: [
                    a("h2", {
                      className:
                        "font-serif text-lg font-semibold border-b border-sand/60 pb-2",
                      children: "Th├┤ng tin chung & li├¬n hß╗ç",
                    }),
                    g(U, {
                      label: "Logo (URL hoß║╖c upload)",
                      children: [
                        g("div", {
                          className: "flex flex-col sm:flex-row gap-2",
                          children: [
                            a("input", {
                              className:
                                "flex-1 rounded-xl border border-sand px-4 py-2.5",
                              value: h.site.logoUrl,
                              onChange: (c) => we({ logoUrl: c.target.value }),
                              placeholder: "https://...",
                            }),
                            a(Or, {
                              id: "upload-logo",
                              label: "Choose image",
                              onPick: async (c) => {
                                let v = c[0];
                                if (!v) return;
                                try {
                                  let k = await Mr(v);
                                  we({ logoUrl: k });
                                } catch (k) {
                                  alert(k.message);
                                }
                              },
                            }),
                          ],
                        }),
                        a(Fn, { src: h.site.logoUrl, alt: "Logo preview" }),
                      ],
                    }),
                    a(U, {
                      label: "Ti├¬u ─æß╗ü trang (title)",
                      children: a("input", {
                        className:
                          "w-full rounded-xl border border-sand px-4 py-2.5",
                        value: h.site.title,
                        onChange: (c) => we({ title: c.target.value }),
                      }),
                    }),
                    a(U, {
                      label: "M├┤ tß║ú SEO (meta description)",
                      children: a("textarea", {
                        className:
                          "w-full rounded-xl border border-sand px-4 py-2.5 min-h-[80px]",
                        value: h.site.description,
                        onChange: (c) => we({ description: c.target.value }),
                      }),
                    }),
                    a(U, {
                      label: "T├¬n th╞░╞íng hiß╗çu (header/footer)",
                      children: a("input", {
                        className:
                          "w-full rounded-xl border border-sand px-4 py-2.5",
                        value: h.site.brandName,
                        onChange: (c) => we({ brandName: c.target.value }),
                      }),
                    }),
                    a(U, {
                      label: "─Éiß╗çn thoß║íi (hiß╗ân thß╗ï)",
                      children: a("input", {
                        className:
                          "w-full rounded-xl border border-sand px-4 py-2.5",
                        value: h.site.phone,
                        onChange: (c) => we({ phone: c.target.value }),
                      }),
                    }),
                    a(U, {
                      label: "Sß╗æ gß╗ìi (tel: v├¡ dß╗Ñ +84901234567)",
                      children: a("input", {
                        className:
                          "w-full rounded-xl border border-sand px-4 py-2.5",
                        value: h.site.phoneTel,
                        onChange: (c) => we({ phoneTel: c.target.value }),
                      }),
                    }),
                    a(U, {
                      label: "Email",
                      children: a("input", {
                        type: "email",
                        className:
                          "w-full rounded-xl border border-sand px-4 py-2.5",
                        value: h.site.email,
                        onChange: (c) => we({ email: c.target.value }),
                      }),
                    }),
                    a(U, {
                      label: "─Éß╗ïa chß╗ë",
                      children: a("textarea", {
                        className:
                          "w-full rounded-xl border border-sand px-4 py-2.5 min-h-[72px]",
                        value: h.site.address,
                        onChange: (c) => we({ address: c.target.value }),
                      }),
                    }),
                    a(U, {
                      label: "Link booking (URL)",
                      children: a("input", {
                        className:
                          "w-full rounded-xl border border-sand px-4 py-2.5",
                        value: h.site.bookingUrl || "",
                        onChange: (c) => we({ bookingUrl: c.target.value }),
                        placeholder: "https://...",
                      }),
                    }),
                    a(U, {
                      label: "D├▓ng ch├ón trang (copyright)",
                      children: a("input", {
                        className:
                          "w-full rounded-xl border border-sand px-4 py-2.5",
                        value: h.site.footerTagline,
                        onChange: (c) => we({ footerTagline: c.target.value }),
                      }),
                    }),
                    g(U, {
                      label: "Google Ads (gtag.js)",
                      children: [
                        a("textarea", {
                          className:
                            "w-full rounded-xl border border-sand px-4 py-2.5 min-h-[160px] font-mono text-xs",
                          value: h.site.googleAdsScript || "",
                          onChange: (c) =>
                            we({ googleAdsScript: c.target.value }),
                          placeholder: `<script async src="https://www.googletagmanager.com/gtag/js?id=AW-..."></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-...');
</script>`,
                        }),
                        a("p", {
                          className: "mt-1.5 text-xs text-warm",
                          children:
                            "D├ín m├ú ─æo l╞░ß╗¥ng Google Ads. Script chß║íy tr├¬n trang c├┤ng khai (kh├┤ng ├íp dß╗Ñng cho admin).",
                        }),
                      ],
                    }),
                    g(U, {
                      label: "Google Analytics (gtag.js)",
                      children: [
                        a("textarea", {
                          className:
                            "w-full rounded-xl border border-sand px-4 py-2.5 min-h-[160px] font-mono text-xs",
                          value: h.site.googleAnalyticsScript || "",
                          onChange: (c) =>
                            we({ googleAnalyticsScript: c.target.value }),
                          placeholder: `<script async src="https://www.googletagmanager.com/gtag/js?id=G-..."></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-...');
</script>`,
                        }),
                        a("p", {
                          className: "mt-1.5 text-xs text-warm",
                          children:
                            "D├ín m├ú Google Analytics (GA4). Script chß║íy tr├¬n trang c├┤ng khai (kh├┤ng ├íp dß╗Ñng cho admin).",
                        }),
                      ],
                    }),
                  ],
                }),
                g("section", {
                  className: `rounded-2xl border border-sand/70 bg-white p-6 shadow-sm space-y-4 ${d === "menu" ? "block" : "hidden"}`,
                  children: [
                    a("h2", {
                      className:
                        "font-serif text-lg font-semibold border-b border-sand/60 pb-2",
                      children: "Menu header (─æß╗òi t├¬n/tß║»t-bß║¡t/th├¬m mß╗Ñc)",
                    }),
                    (() => {
                      let c = Array.isArray(h?.site?.menu) ? h.site.menu : vp();
                      function v(T) {
                        we({ menu: T });
                      }
                      function k(T, F) {
                        let D = [...c];
                        ((D[T] = { ...D[T], ...F }), v(D));
                      }
                      function _(T) {
                        let F = c.filter((D, K) => K !== T);
                        v(F);
                      }
                      function C() {
                        let T = {
                          key:
                            (typeof crypto < "u" && crypto?.randomUUID?.()) ||
                            `menu-${Date.now()}`,
                          label: "New menu item",
                          href: "",
                          enabled: !0,
                        };
                        v([...c, T]);
                      }
                      return g("div", {
                        className: "space-y-4",
                        children: [
                          g("p", {
                            className: "text-sm text-warm",
                            children: [
                              "Nhß║¡p link dß║íng anchor nh╞░ ",
                              a("span", {
                                className: "font-mono",
                                children: "#services",
                              }),
                              ", hoß║╖c link ngo├ái.",
                            ],
                          }),
                          a("div", {
                            className: "space-y-3",
                            children: c.map((T, F) =>
                              g(
                                "div",
                                {
                                  className:
                                    "rounded-xl border border-sand/60 p-4 space-y-3 relative bg-cream/20",
                                  children: [
                                    a("button", {
                                      type: "button",
                                      onClick: () => _(F),
                                      className:
                                        "absolute top-3 right-3 text-xs text-red-700 hover:underline cursor-pointer",
                                      children: "X├│a",
                                    }),
                                    a("div", {
                                      className:
                                        "flex flex-wrap items-center gap-4",
                                      children: g("label", {
                                        className:
                                          "inline-flex items-center gap-2 text-sm text-charcoal",
                                        children: [
                                          a("input", {
                                            type: "checkbox",
                                            checked: T.enabled !== !1,
                                            onChange: (D) =>
                                              k(F, {
                                                enabled: D.target.checked,
                                              }),
                                          }),
                                          "Enabled",
                                        ],
                                      }),
                                    }),
                                    a(U, {
                                      label: `T├¬n item menu (${F + 1})`,
                                      children: a("input", {
                                        className:
                                          "w-full rounded-xl border border-sand px-4 py-2.5",
                                        value: T.label || "",
                                        onChange: (D) =>
                                          k(F, { label: D.target.value }),
                                      }),
                                    }),
                                    a(U, {
                                      label: "Link (href)",
                                      children: a("input", {
                                        className:
                                          "w-full rounded-xl border border-sand px-4 py-2.5",
                                        value: T.href || "",
                                        onChange: (D) =>
                                          k(F, { href: D.target.value }),
                                      }),
                                    }),
                                  ],
                                },
                                T.key ?? F,
                              ),
                            ),
                          }),
                          a("button", {
                            type: "button",
                            onClick: C,
                            className:
                              "rounded-full border border-charcoal px-4 py-2 text-sm hover:bg-cream cursor-pointer",
                            children: "+ Th├¬m mß╗Ñc menu",
                          }),
                        ],
                      });
                    })(),
                  ],
                }),
                g("section", {
                  className: `rounded-2xl border border-sand/70 bg-white p-6 shadow-sm space-y-4 ${d === "hero" ? "block" : "hidden"}`,
                  children: [
                    a("h2", {
                      className:
                        "font-serif text-lg font-semibold border-b border-sand/60 pb-2",
                      children: "Hero (trang ─æß║ºu)",
                    }),
                    a(U, {
                      label: "D├▓ng phß╗Ñ (italic)",
                      children: a("input", {
                        className:
                          "w-full rounded-xl border border-sand px-4 py-2.5",
                        value: h.hero.eyebrow,
                        onChange: (c) => Bt({ eyebrow: c.target.value }),
                      }),
                    }),
                    a(U, {
                      label: "Ti├¬u ─æß╗ü ch├¡nh",
                      children: a("input", {
                        className:
                          "w-full rounded-xl border border-sand px-4 py-2.5",
                        value: h.hero.title,
                        onChange: (c) => Bt({ title: c.target.value }),
                      }),
                    }),
                    a(U, {
                      label: "─Éoß║ín m├┤ tß║ú",
                      children: a("textarea", {
                        className:
                          "w-full rounded-xl border border-sand px-4 py-2.5 min-h-[100px]",
                        value: h.hero.subtitle,
                        onChange: (c) => Bt({ subtitle: c.target.value }),
                      }),
                    }),
                    a("p", {
                      className: "text-xs text-warm leading-relaxed",
                      children:
                        "Desktop tß╗½ 768px trß╗ƒ l├¬n; mobile tß╗½ 767px trß╗ƒ xuß╗æng. ─Éß╗â trß╗æng mobile sß║╜ d├╣ng ß║únh desktop. Nß║┐u ch╞░a ─æiß╗ün desktop, site vß║½n d├╣ng ß║únh hero ─æ├ú l╞░u tr╞░ß╗¢c ─æ├│ (mß╗Öt ß║únh chung).",
                    }),
                    g(U, {
                      label: "ß║ónh hero ΓÇö Desktop (URL hoß║╖c upload)",
                      children: [
                        g("div", {
                          className: "flex flex-col sm:flex-row gap-2",
                          children: [
                            a("input", {
                              className:
                                "flex-1 rounded-xl border border-sand px-4 py-2.5",
                              value: h.hero.imageUrlDesktop,
                              onChange: (c) =>
                                Bt({ imageUrlDesktop: c.target.value }),
                              placeholder: h.hero.imageUrl || "https://ΓÇª",
                            }),
                            a(Or, {
                              id: "upload-hero-desktop",
                              label: "Upload desktop",
                              onPick: async (c) => {
                                let v = c[0];
                                if (!v) return;
                                try {
                                  let k = await Mr(v);
                                  Bt({ imageUrlDesktop: k });
                                } catch (k) {
                                  alert(k.message);
                                }
                              },
                            }),
                          ],
                        }),
                        a(Fn, {
                          src: h.hero.imageUrlDesktop || h.hero.imageUrl,
                          alt: "Hero desktop preview",
                        }),
                      ],
                    }),
                    g(U, {
                      label: "ß║ónh hero ΓÇö Mobile (URL hoß║╖c upload)",
                      children: [
                        g("div", {
                          className: "flex flex-col sm:flex-row gap-2",
                          children: [
                            a("input", {
                              className:
                                "flex-1 rounded-xl border border-sand px-4 py-2.5",
                              value: h.hero.imageUrlMobile,
                              onChange: (c) =>
                                Bt({ imageUrlMobile: c.target.value }),
                            }),
                            a(Or, {
                              id: "upload-hero-mobile",
                              label: "Upload mobile",
                              onPick: async (c) => {
                                let v = c[0];
                                if (!v) return;
                                try {
                                  let k = await Mr(v);
                                  Bt({ imageUrlMobile: k });
                                } catch (k) {
                                  alert(k.message);
                                }
                              },
                            }),
                          ],
                        }),
                        a(Fn, {
                          src:
                            h.hero.imageUrlMobile ||
                            h.hero.imageUrlDesktop ||
                            h.hero.imageUrl,
                          alt: "Hero mobile preview",
                        }),
                      ],
                    }),
                  ],
                }),
                g("section", {
                  className: `rounded-2xl border border-sand/70 bg-white p-6 shadow-sm space-y-4 ${d === "slides" ? "block" : "hidden"}`,
                  children: [
                    a("h2", {
                      className:
                        "font-serif text-lg font-semibold border-b border-sand/60 pb-2",
                      children: "Slide ΓÇ£About usΓÇ¥",
                    }),
                    a("div", {
                      className: "space-y-6",
                      children: h.slides.map((c, v) =>
                        g(
                          "div",
                          {
                            className:
                              "rounded-xl border border-sand/60 p-4 space-y-3 relative",
                            children: [
                              a("button", {
                                type: "button",
                                onClick: () => ep(v),
                                className:
                                  "absolute top-2 right-2 text-sm text-red-700 hover:underline cursor-pointer",
                                children: "X├│a",
                              }),
                              g(U, {
                                label: `Slide ${v + 1} ΓÇö ß║únh (URL)`,
                                children: [
                                  g("div", {
                                    className:
                                      "flex flex-col sm:flex-row gap-2",
                                    children: [
                                      a("input", {
                                        className:
                                          "flex-1 rounded-xl border border-sand px-4 py-2.5",
                                        value: c.imageUrl,
                                        onChange: (k) =>
                                          Wn(v, { imageUrl: k.target.value }),
                                      }),
                                      a(Or, {
                                        id: `upload-slide-${v}`,
                                        label: "Choose image",
                                        onPick: async (k) => {
                                          let _ = k[0];
                                          if (!_) return;
                                          try {
                                            let C = await Mr(_);
                                            Wn(v, { imageUrl: C });
                                          } catch (C) {
                                            alert(C.message);
                                          }
                                        },
                                      }),
                                    ],
                                  }),
                                  a(Fn, {
                                    src: c.imageUrl,
                                    alt: `Slide ${v + 1} preview`,
                                  }),
                                ],
                              }),
                              a(U, {
                                label: "M├┤ tß║ú / caption",
                                children: a("textarea", {
                                  className:
                                    "w-full rounded-xl border border-sand px-4 py-2.5 min-h-[60px]",
                                  value: c.description,
                                  onChange: (k) =>
                                    Wn(v, { description: k.target.value }),
                                }),
                              }),
                              a(U, {
                                label: "Alt (SEO)",
                                children: a("input", {
                                  className:
                                    "w-full rounded-xl border border-sand px-4 py-2.5",
                                  value: c.alt,
                                  onChange: (k) =>
                                    Wn(v, { alt: k.target.value }),
                                }),
                              }),
                            ],
                          },
                          v,
                        ),
                      ),
                    }),
                    a("button", {
                      type: "button",
                      onClick: jd,
                      className:
                        "rounded-full border border-charcoal px-4 py-2 text-sm hover:bg-cream cursor-pointer",
                      children: "+ Th├¬m slide",
                    }),
                    a("h3", {
                      className: "font-medium pt-4",
                      children: "Nß╗Öi dung chß╗» b├¬n cß║ính slide",
                    }),
                    a(U, {
                      label: "Nh├ún (About us)",
                      children: a("input", {
                        className:
                          "w-full rounded-xl border border-sand px-4 py-2.5",
                        value: h.aboutSlider.label,
                        onChange: (c) => Dn({ label: c.target.value }),
                      }),
                    }),
                    a(U, {
                      label: "Ti├¬u ─æß╗ü",
                      children: a("input", {
                        className:
                          "w-full rounded-xl border border-sand px-4 py-2.5",
                        value: h.aboutSlider.heading,
                        onChange: (c) => Dn({ heading: c.target.value }),
                      }),
                    }),
                    a(U, {
                      label: "─Éoß║ín 1",
                      children: a("textarea", {
                        className:
                          "w-full rounded-xl border border-sand px-4 py-2.5 min-h-[80px]",
                        value: h.aboutSlider.paragraph1,
                        onChange: (c) => Dn({ paragraph1: c.target.value }),
                      }),
                    }),
                    a(U, {
                      label: "─Éoß║ín 2",
                      children: a("textarea", {
                        className:
                          "w-full rounded-xl border border-sand px-4 py-2.5 min-h-[80px]",
                        value: h.aboutSlider.paragraph2,
                        onChange: (c) => Dn({ paragraph2: c.target.value }),
                      }),
                    }),
                  ],
                }),
                g("section", {
                  className: `rounded-2xl border border-sand/70 bg-white p-6 shadow-sm space-y-4 ${d === "pricing" ? "block" : "hidden"}`,
                  children: [
                    a("h2", {
                      className:
                        "font-serif text-lg font-semibold border-b border-sand/60 pb-2",
                      children: "Bß║úng gi├í (menu trong Services)",
                    }),
                    a(U, {
                      label: "D├▓ng phß╗Ñ popup",
                      children: a("input", {
                        className:
                          "w-full rounded-xl border border-sand px-4 py-2.5",
                        value: hl.modalSubtitle,
                        onChange: (c) => ja({ modalSubtitle: c.target.value }),
                      }),
                    }),
                    a(U, {
                      label: "Ti├¬u ─æß╗ü popup",
                      children: a("input", {
                        className:
                          "w-full rounded-xl border border-sand px-4 py-2.5",
                        value: hl.modalTitle,
                        onChange: (c) => ja({ modalTitle: c.target.value }),
                      }),
                    }),
                    a("div", {
                      className: "space-y-4",
                      children: hl.services.map((c, v) => {
                        let k = sp(v),
                          _ = (c.groups || []).length;
                        return g(
                          "div",
                          {
                            className:
                              "rounded-xl border border-sand/60 overflow-hidden relative bg-white",
                            children: [
                              g("div", {
                                className:
                                  "flex items-center gap-2 border-b border-sand/55 bg-cream/35 px-3 py-2.5 pr-24",
                                children: [
                                  a("button", {
                                    type: "button",
                                    onClick: () => ap(v),
                                    className:
                                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-sand/80 bg-white text-charcoal hover:bg-cream transition-colors cursor-pointer",
                                    "aria-expanded": k,
                                    "aria-label": k
                                      ? "Thu gß╗ìn service"
                                      : "Mß╗ƒ rß╗Öng service",
                                    children: a("span", {
                                      className: `inline-block text-[10px] leading-none transition-transform duration-200 ${k ? "rotate-90" : ""}`,
                                      "aria-hidden": !0,
                                      children: "Γû╢",
                                    }),
                                  }),
                                  g("div", {
                                    className: "min-w-0 flex-1",
                                    children: [
                                      g("span", {
                                        className:
                                          "text-[11px] font-semibold uppercase tracking-wide text-warm",
                                        children: ["Service ", v + 1],
                                      }),
                                      a("p", {
                                        className:
                                          "truncate text-sm font-medium text-charcoal",
                                        children:
                                          c.name?.trim() || "Ch╞░a ─æß║╖t t├¬n",
                                      }),
                                      g("p", {
                                        className: "text-xs text-warm/85",
                                        children: [_, " nh├│m con"],
                                      }),
                                    ],
                                  }),
                                  a("button", {
                                    type: "button",
                                    onClick: () => rp(v),
                                    className:
                                      "absolute top-2 right-2 text-sm text-red-700 hover:underline cursor-pointer",
                                    children: "X├│a service",
                                  }),
                                ],
                              }),
                              k
                                ? g("div", {
                                    className: "space-y-4 p-4",
                                    children: [
                                      a(U, {
                                        label: `Service ${v + 1} - T├¬n`,
                                        children: a("input", {
                                          className:
                                            "w-full rounded-xl border border-sand px-4 py-2.5",
                                          value: c.name,
                                          onChange: (C) =>
                                            eu(v, { name: C.target.value }),
                                        }),
                                      }),
                                      a(U, {
                                        label: "M├┤ tß║ú service (tuß╗│ chß╗ìn)",
                                        children: a("textarea", {
                                          className:
                                            "w-full rounded-xl border border-sand px-4 py-2.5 min-h-[60px]",
                                          value: c.description || "",
                                          onChange: (C) =>
                                            eu(v, {
                                              description: C.target.value,
                                            }),
                                        }),
                                      }),
                                      g("div", {
                                        className:
                                          "mt-1 ml-2 sm:ml-4 space-y-4 rounded-r-lg border-l-[3px] border-rose/35 bg-cream/60 py-4 pl-4 sm:pl-5 pr-3",
                                        children: [
                                          a("p", {
                                            className:
                                              "text-xs font-medium uppercase tracking-wide text-warm/90",
                                            children:
                                              "Nh├│m con (vd: MANICURE / PEDICURE) ΓÇö mß╗ùi nh├│m c├│ danh s├ích gi├í",
                                          }),
                                          (c.groups || []).map((C, T) => {
                                            let F = cp(v, T),
                                              D = (C.items || []).length;
                                            return g(
                                              "div",
                                              {
                                                className: `relative rounded-xl border border-sand/55 border-l-[4px] border-l-rose/45 bg-white/90 shadow-sm ${T > 0 ? "border-t border-dashed border-sand/70 pt-5 mt-1" : ""}`,
                                                children: [
                                                  g("div", {
                                                    className:
                                                      "flex items-center gap-2 border-b border-sand/45 px-3 py-2.5 pr-24",
                                                    children: [
                                                      a("button", {
                                                        type: "button",
                                                        onClick: () => up(v, T),
                                                        className:
                                                          "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-sand/80 bg-cream/80 text-charcoal hover:bg-cream transition-colors cursor-pointer",
                                                        "aria-expanded": F,
                                                        "aria-label": F
                                                          ? "Thu gß╗ìn nh├│m"
                                                          : "Mß╗ƒ rß╗Öng nh├│m",
                                                        children: a("span", {
                                                          className: `inline-block text-[10px] leading-none transition-transform duration-200 ${F ? "rotate-90" : ""}`,
                                                          "aria-hidden": !0,
                                                          children: "Γû╢",
                                                        }),
                                                      }),
                                                      g("div", {
                                                        className:
                                                          "min-w-0 flex-1",
                                                        children: [
                                                          g("span", {
                                                            className:
                                                              "text-[11px] font-semibold uppercase tracking-wide text-charcoal/60",
                                                            children: [
                                                              "Nh├│m ",
                                                              T + 1,
                                                            ],
                                                          }),
                                                          a("p", {
                                                            className:
                                                              "truncate text-sm font-medium text-charcoal",
                                                            children:
                                                              C.name?.trim() ||
                                                              "Ch╞░a ─æß║╖t t├¬n",
                                                          }),
                                                          g("p", {
                                                            className:
                                                              "text-xs text-warm/85",
                                                            children: [
                                                              D,
                                                              " d├▓ng gi├í",
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                      a("button", {
                                                        type: "button",
                                                        onClick: () => op(v, T),
                                                        className:
                                                          "absolute top-2 right-2 text-xs text-red-700 hover:underline cursor-pointer",
                                                        children: "X├│a nh├│m",
                                                      }),
                                                    ],
                                                  }),
                                                  F
                                                    ? g("div", {
                                                        className:
                                                          "space-y-3 p-4",
                                                        children: [
                                                          g("div", {
                                                            className:
                                                              "pr-2 sm:pr-12",
                                                            children: [
                                                              a(U, {
                                                                label: `Nh├│m ${T + 1} ΓÇö T├¬n (vd: MANICURE)`,
                                                                children: a(
                                                                  "input",
                                                                  {
                                                                    className:
                                                                      "w-full rounded-xl border border-sand px-4 py-2.5",
                                                                    value:
                                                                      C.name ||
                                                                      "",
                                                                    onChange: (
                                                                      K,
                                                                    ) =>
                                                                      tu(v, T, {
                                                                        name: K
                                                                          .target
                                                                          .value,
                                                                      }),
                                                                  },
                                                                ),
                                                              }),
                                                              a(U, {
                                                                label:
                                                                  "M├┤ tß║ú nh├│m (tuß╗│ chß╗ìn)",
                                                                children: a(
                                                                  "textarea",
                                                                  {
                                                                    className:
                                                                      "w-full rounded-xl border border-sand px-4 py-2.5 min-h-[48px]",
                                                                    value:
                                                                      C.description ||
                                                                      "",
                                                                    onChange: (
                                                                      K,
                                                                    ) =>
                                                                      tu(v, T, {
                                                                        description:
                                                                          K
                                                                            .target
                                                                            .value,
                                                                      }),
                                                                  },
                                                                ),
                                                              }),
                                                            ],
                                                          }),
                                                          g("div", {
                                                            className:
                                                              "border-t border-sand/65 pt-4 mt-1",
                                                            children: [
                                                              a("p", {
                                                                className:
                                                                  "mb-3 text-[11px] font-semibold uppercase tracking-wide text-charcoal/55",
                                                                children:
                                                                  "D├▓ng gi├í trong nh├│m",
                                                              }),
                                                              a("div", {
                                                                className:
                                                                  "ml-1 space-y-3 border-l-[3px] border-charcoal/20 pl-4 sm:ml-2 sm:pl-5",
                                                                children: (
                                                                  C.items || []
                                                                ).map((K, qe) =>
                                                                  g(
                                                                    "div",
                                                                    {
                                                                      className:
                                                                        "relative rounded-lg border border-sand/65 bg-cream/50 py-3 pl-4 sm:pl-5 pr-3 space-y-2",
                                                                      children:
                                                                        [
                                                                          a(
                                                                            "button",
                                                                            {
                                                                              type: "button",
                                                                              onClick:
                                                                                () =>
                                                                                  ip(
                                                                                    v,
                                                                                    T,
                                                                                    qe,
                                                                                  ),
                                                                              className:
                                                                                "absolute top-2 right-2 text-xs text-red-700 hover:underline cursor-pointer",
                                                                              children:
                                                                                "X├│a item",
                                                                            },
                                                                          ),
                                                                          a(U, {
                                                                            label: `Item ${qe + 1} ΓÇö T├¬n`,
                                                                            children:
                                                                              a(
                                                                                "input",
                                                                                {
                                                                                  className:
                                                                                    "w-full rounded-xl border border-sand px-4 py-2.5",
                                                                                  value:
                                                                                    K.name,
                                                                                  onChange:
                                                                                    (
                                                                                      Br,
                                                                                    ) =>
                                                                                      ml(
                                                                                        v,
                                                                                        T,
                                                                                        qe,
                                                                                        {
                                                                                          name: Br
                                                                                            .target
                                                                                            .value,
                                                                                        },
                                                                                      ),
                                                                                },
                                                                              ),
                                                                          }),
                                                                          a(U, {
                                                                            label:
                                                                              "Gi├í",
                                                                            children:
                                                                              a(
                                                                                "input",
                                                                                {
                                                                                  className:
                                                                                    "w-full rounded-xl border border-sand px-4 py-2.5",
                                                                                  value:
                                                                                    K.price,
                                                                                  onChange:
                                                                                    (
                                                                                      Br,
                                                                                    ) =>
                                                                                      ml(
                                                                                        v,
                                                                                        T,
                                                                                        qe,
                                                                                        {
                                                                                          price:
                                                                                            Br
                                                                                              .target
                                                                                              .value,
                                                                                        },
                                                                                      ),
                                                                                },
                                                                              ),
                                                                          }),
                                                                          a(U, {
                                                                            label:
                                                                              "M├┤ tß║ú item (tuß╗│ chß╗ìn)",
                                                                            children:
                                                                              a(
                                                                                "textarea",
                                                                                {
                                                                                  className:
                                                                                    "w-full rounded-xl border border-sand px-4 py-2.5 min-h-[60px]",
                                                                                  value:
                                                                                    K.description,
                                                                                  onChange:
                                                                                    (
                                                                                      Br,
                                                                                    ) =>
                                                                                      ml(
                                                                                        v,
                                                                                        T,
                                                                                        qe,
                                                                                        {
                                                                                          description:
                                                                                            Br
                                                                                              .target
                                                                                              .value,
                                                                                        },
                                                                                      ),
                                                                                },
                                                                              ),
                                                                          }),
                                                                        ],
                                                                    },
                                                                    qe,
                                                                  ),
                                                                ),
                                                              }),
                                                              a("button", {
                                                                type: "button",
                                                                onClick: () =>
                                                                  lp(v, T),
                                                                className:
                                                                  "mt-2 rounded-full border border-charcoal/30 bg-white px-4 py-2 text-sm text-charcoal hover:bg-cream cursor-pointer",
                                                                children:
                                                                  "+ Th├¬m item trong nh├│m n├áy",
                                                              }),
                                                            ],
                                                          }),
                                                        ],
                                                      })
                                                    : null,
                                                ],
                                              },
                                              T,
                                            );
                                          }),
                                          a("button", {
                                            type: "button",
                                            onClick: () => np(v),
                                            className:
                                              "rounded-full border border-charcoal px-4 py-2 text-sm hover:bg-cream cursor-pointer",
                                            children:
                                              "+ Th├¬m nh├│m con (MANICURE / PEDICUREΓÇª)",
                                          }),
                                        ],
                                      }),
                                    ],
                                  })
                                : null,
                            ],
                          },
                          v,
                        );
                      }),
                    }),
                    a("button", {
                      type: "button",
                      onClick: tp,
                      className:
                        "rounded-full border border-charcoal px-4 py-2 text-sm hover:bg-cream cursor-pointer",
                      children: "+ Th├¬m service",
                    }),
                  ],
                }),
                g("section", {
                  className: `rounded-2xl border border-sand/70 bg-white p-6 shadow-sm space-y-4 ${d === "promotion" ? "block" : "hidden"}`,
                  children: [
                    a("h2", {
                      className:
                        "font-serif text-lg font-semibold border-b border-sand/60 pb-2",
                      children: "Promotions",
                    }),
                    g("label", {
                      className:
                        "inline-flex items-center gap-2 text-sm text-charcoal",
                      children: [
                        a("input", {
                          type: "checkbox",
                          checked: !!ht.enabled,
                          onChange: (c) => Ar({ enabled: c.target.checked }),
                        }),
                        "Enable promotion section",
                      ],
                    }),
                    a(U, {
                      label: "Ti├¬u ─æß╗ü",
                      children: a("input", {
                        className:
                          "w-full rounded-xl border border-sand px-4 py-2.5",
                        value: ht.title,
                        onChange: (c) => Ar({ title: c.target.value }),
                      }),
                    }),
                    g(U, {
                      label: "H├¼nh ß║únh (URL hoß║╖c upload)",
                      children: [
                        g("div", {
                          className: "flex flex-col sm:flex-row gap-2",
                          children: [
                            a("input", {
                              className:
                                "flex-1 rounded-xl border border-sand px-4 py-2.5",
                              value: ht.imageUrl,
                              onChange: (c) => Ar({ imageUrl: c.target.value }),
                            }),
                            a(Or, {
                              id: "upload-promotion",
                              label: "Choose image",
                              onPick: async (c) => {
                                let v = c[0];
                                if (!v) return;
                                try {
                                  let k = await Mr(v);
                                  Ar({ imageUrl: k });
                                } catch (k) {
                                  alert(
                                    k.message ||
                                      "Upload promotion image failed",
                                  );
                                }
                              },
                            }),
                          ],
                        }),
                        a(Fn, {
                          src: ht.imageUrl,
                          alt: ht.title || "Promotion",
                        }),
                      ],
                    }),
                    a(U, {
                      label: "M├┤ tß║ú",
                      children: a("textarea", {
                        className:
                          "w-full rounded-xl border border-sand px-4 py-2.5 min-h-[90px]",
                        value: ht.description,
                        onChange: (c) => Ar({ description: c.target.value }),
                      }),
                    }),
                  ],
                }),
                g("section", {
                  className: `rounded-2xl border border-sand/70 bg-white p-6 shadow-sm space-y-4 ${d === "testimonial" ? "block" : "hidden"}`,
                  children: [
                    a("h2", {
                      className:
                        "font-serif text-lg font-semibold border-b border-sand/60 pb-2",
                      children: "What clients say",
                    }),
                    a(U, {
                      label: "Label",
                      children: a("input", {
                        className:
                          "w-full rounded-xl border border-sand px-4 py-2.5",
                        value: Fr.label,
                        onChange: (c) => Ur({ label: c.target.value }),
                      }),
                    }),
                    a(U, {
                      label: "Heading",
                      children: a("input", {
                        className:
                          "w-full rounded-xl border border-sand px-4 py-2.5",
                        value: Fr.heading,
                        onChange: (c) => Ur({ heading: c.target.value }),
                      }),
                    }),
                    a(U, {
                      label: "Quote",
                      children: a("textarea", {
                        className:
                          "w-full rounded-xl border border-sand px-4 py-2.5 min-h-[120px]",
                        value: Fr.quote,
                        onChange: (c) => Ur({ quote: c.target.value }),
                      }),
                    }),
                    a(U, {
                      label: "Author",
                      children: a("input", {
                        className:
                          "w-full rounded-xl border border-sand px-4 py-2.5",
                        value: Fr.author,
                        onChange: (c) => Ur({ author: c.target.value }),
                      }),
                    }),
                    a(U, {
                      label: "Role",
                      children: a("input", {
                        className:
                          "w-full rounded-xl border border-sand px-4 py-2.5",
                        value: Fr.role,
                        onChange: (c) => Ur({ role: c.target.value }),
                      }),
                    }),
                  ],
                }),
                g("section", {
                  className: `rounded-2xl border border-sand/70 bg-white p-6 shadow-sm space-y-4 ${d === "instagram" ? "block" : "hidden"}`,
                  children: [
                    a("h2", {
                      className:
                        "font-serif text-lg font-semibold border-b border-sand/60 pb-2",
                      children: "Instagram Gallery",
                    }),
                    a(U, {
                      label: "Link Instagram",
                      children: a("input", {
                        className:
                          "w-full rounded-xl border border-sand px-4 py-2.5",
                        value: Ee.profileUrl || "",
                        onChange: (c) => Id({ profileUrl: c.target.value }),
                        placeholder: "https://instagram.com/your_account",
                      }),
                    }),
                    g("div", {
                      className:
                        "rounded-xl border border-sand/60 p-4 space-y-3 bg-cream/30",
                      children: [
                        g("div", {
                          className: "flex items-center justify-between gap-3",
                          children: [
                            a("h3", {
                              className: "font-medium text-charcoal",
                              children:
                                "Folders (computer style: parent / child)",
                            }),
                            a("button", {
                              type: "button",
                              onClick: mp,
                              className:
                                "rounded-full border border-charcoal px-3.5 py-1.5 text-sm hover:bg-cream cursor-pointer",
                              children: "+ Create folder",
                            }),
                          ],
                        }),
                        (Ee.folders || []).length > 0
                          ? a("div", {
                              className: "space-y-3",
                              children: (Ee.folders || []).map((c, v) =>
                                g(
                                  "div",
                                  {
                                    className:
                                      "rounded-lg border border-sand/60 bg-white p-3 relative grid md:grid-cols-3 gap-3",
                                    children: [
                                      a("button", {
                                        type: "button",
                                        onClick: () => hp(v),
                                        className:
                                          "absolute top-2 right-2 text-xs text-red-700 hover:underline cursor-pointer",
                                        children: "X├│a folder",
                                      }),
                                      a(U, {
                                        label: "Folder name",
                                        children: a("input", {
                                          className:
                                            "w-full rounded-xl border border-sand px-4 py-2.5",
                                          value: c.name || "",
                                          onChange: (k) =>
                                            vl(v, { name: k.target.value }),
                                        }),
                                      }),
                                      a(U, {
                                        label: "Parent folder",
                                        children: g("select", {
                                          className:
                                            "w-full rounded-xl border border-sand px-4 py-2.5 bg-white",
                                          value: c.parentId || "",
                                          onChange: (k) =>
                                            vl(v, { parentId: k.target.value }),
                                          children: [
                                            a("option", {
                                              value: "",
                                              children: "(root)",
                                            }),
                                            (Ee.folders || [])
                                              .filter((k) => k.id !== c.id)
                                              .map((k) =>
                                                a(
                                                  "option",
                                                  {
                                                    value: k.id,
                                                    children: n0(k.id, dp),
                                                  },
                                                  k.id,
                                                ),
                                              ),
                                          ],
                                        }),
                                      }),
                                      a(U, {
                                        label: "Design type",
                                        children: a("input", {
                                          className:
                                            "w-full rounded-xl border border-sand px-4 py-2.5",
                                          value: c.designType || "",
                                          onChange: (k) =>
                                            vl(v, {
                                              designType: k.target.value,
                                            }),
                                          placeholder:
                                            "e.g. Ombre, French, Cat Eye",
                                        }),
                                      }),
                                    ],
                                  },
                                  c.id || v,
                                ),
                              ),
                            })
                          : a("p", {
                              className: "text-sm text-warm",
                              children:
                                "Ch╞░a c├│ folder. Tß║ío folder v├á chß╗ìn parent ─æß╗â c├│ cß║Ñu tr├║c th╞░ mß╗Ñc con giß╗æng m├íy t├¡nh.",
                            }),
                      ],
                    }),
                    g("div", {
                      className:
                        "rounded-xl border border-sand/60 p-4 bg-white space-y-3",
                      children: [
                        a("p", {
                          className:
                            "text-xs font-medium uppercase tracking-wide text-warm/90",
                          children: "Xem ß║únh theo folder",
                        }),
                        g("div", {
                          className: "flex flex-wrap gap-2",
                          children: [
                            g("button", {
                              type: "button",
                              onClick: () => I("all"),
                              className: `rounded-full border px-3.5 py-1.5 text-sm cursor-pointer ${Dt === "all" ? "bg-charcoal border-charcoal text-cream" : "bg-cream/50 border-sand/70 text-charcoal hover:bg-cream"}`,
                              children: [
                                "All images (",
                                (Ee.images || []).length,
                                ")",
                              ],
                            }),
                            (Ee.folders || []).map((c) => {
                              let v = c.id || "",
                                k = (Ee.images || []).filter(
                                  (_) => (_?.folderId || "") === v,
                                ).length;
                              return g(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => I(v),
                                  className: `rounded-full border px-3.5 py-1.5 text-sm cursor-pointer ${Dt === v ? "bg-charcoal border-charcoal text-cream" : "bg-cream/50 border-sand/70 text-charcoal hover:bg-cream"}`,
                                  children: [c.name || "Folder", " (", k, ")"],
                                },
                                v,
                              );
                            }),
                          ],
                        }),
                        a("div", {
                          className: "pt-1",
                          children: a(Or, {
                            id: "upload-instagram-by-folder",
                            label: "Th├¬m nhiß╗üu ß║únh v├áo folder ─æang chß╗ìn",
                            multiple: !0,
                            onPick: async (c) => {
                              if (c.length === 0) return;
                              if (
                                (Ee.folders || []).length > 0 &&
                                Dt === "all"
                              ) {
                                alert(
                                  "Vui l├▓ng chß╗ìn folder tr╞░ß╗¢c khi tß║úi ß║únh.",
                                );
                                return;
                              }
                              let v = Dt === "all" ? "" : Dt;
                              try {
                                let k = [];
                                for (let _ of c) {
                                  let C = await Mr(_);
                                  k.push({
                                    imageUrl: C,
                                    alt: _.name?.replace(/\.[^/.]+$/, "") || "",
                                    folderId: v,
                                    showOnHome: !1,
                                  });
                                }
                                w((_) => {
                                  let C = At(_.instagram);
                                  return {
                                    ..._,
                                    instagram: {
                                      ...C,
                                      images: [...(C.images || []), ...k],
                                    },
                                  };
                                });
                              } catch (k) {
                                alert(
                                  k.message || "Upload Instagram images failed",
                                );
                              }
                            },
                          }),
                        }),
                      ],
                    }),
                    g("div", {
                      className: "space-y-4",
                      children: [
                        a("div", {
                          className:
                            "flex items-center justify-between gap-3 flex-wrap",
                          children: g("p", {
                            className: "text-sm text-warm",
                            children: [
                              "─É├ính dß║Ñu ß║únh ─æß╗â hiß╗çn ß╗ƒ trang chß╗º (Salon moments). ─É├ú chß╗ìn:",
                              " ",
                              a("span", {
                                className: "font-medium text-charcoal",
                                children: (Ee.images || []).filter(
                                  (c) => c.showOnHome,
                                ).length,
                              }),
                              " ",
                              "/ 6 khuyß║┐n nghß╗ï",
                            ],
                          }),
                        }),
                        ru.length === 0
                          ? a("div", {
                              className:
                                "rounded-xl border border-dashed border-sand/70 bg-cream/20 p-4 text-sm text-warm",
                              children: "Folder n├áy ch╞░a c├│ ß║únh.",
                            })
                          : a("div", {
                              className:
                                "grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-3",
                              children: ru.map((c, v) =>
                                g(
                                  "div",
                                  {
                                    className: `group relative overflow-hidden rounded-xl border bg-cream/30 aspect-[4/5] ${c.showOnHome ? "border-charcoal ring-2 ring-charcoal/20" : "border-sand/60"}`,
                                    children: [
                                      a("img", {
                                        src: c.imageUrl,
                                        alt:
                                          c.alt || `Instagram image ${v + 1}`,
                                        className: "w-full h-full object-cover",
                                        loading: "lazy",
                                      }),
                                      g("label", {
                                        className:
                                          "absolute top-2 left-2 inline-flex items-center gap-1.5 rounded-full bg-white/95 border border-sand px-2 py-1 text-xs text-charcoal cursor-pointer shadow-sm",
                                        children: [
                                          a("input", {
                                            type: "checkbox",
                                            checked: !!c.showOnHome,
                                            onChange: (k) =>
                                              fp(c._index, {
                                                showOnHome: k.target.checked,
                                              }),
                                          }),
                                          a("span", { children: "Home" }),
                                        ],
                                      }),
                                      a("button", {
                                        type: "button",
                                        onClick: () => pp(c._index),
                                        className:
                                          "absolute top-2 right-2 rounded-full bg-white/90 border border-sand px-2 py-1 text-xs text-red-700 hover:bg-white cursor-pointer",
                                        children: "X├│a",
                                      }),
                                    ],
                                  },
                                  c._index ?? v,
                                ),
                              ),
                            }),
                      ],
                    }),
                    a("p", {
                      className: "text-sm text-warm",
                      children:
                        'Tick "Home" tr├¬n ß║únh muß╗æn hiß╗çn ß╗ƒ section Salon moments. Album (/album) vß║½n hiß╗çn tß║Ñt cß║ú ß║únh. Bß║Ñm "L╞░u tß║Ñt cß║ú" ─æß╗â ├íp dß╗Ñng.',
                    }),
                  ],
                }),
                g("div", {
                  className:
                    "flex flex-wrap items-center gap-4 sticky bottom-4 bg-cream/95 py-3 rounded-xl border border-sand/60 px-4",
                  children: [
                    a("button", {
                      type: "submit",
                      disabled: N,
                      className:
                        "rounded-full bg-charcoal text-cream px-8 py-3 font-medium hover:bg-warm transition-colors cursor-pointer disabled:opacity-50",
                      children: N ? "─Éang l╞░uΓÇª" : "L╞░u tß║Ñt cß║ú",
                    }),
                    R &&
                      a("span", {
                        className: "text-sm text-warm",
                        children: R,
                      }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
var Be = Ne(De(), 1);
var Vd = Be.createContext(null);
function $a({ children: e }) {
  let [t, r] = Be.useState(null),
    [n, o] = Be.useState(!0),
    [l, i] = Be.useState(null),
    u = Be.useCallback(() => {
      (o(!0),
        i(null),
        fetch("/api/content")
          .then((s) => {
            if (!s.ok) throw Error("Kh├┤ng tß║úi ─æ╞░ß╗úc nß╗Öi dung");
            return s.json();
          })
          .then(r)
          .catch((s) => i(s.message ?? "Lß╗ùi mß║íng"))
          .finally(() => o(!1)));
    }, []);
  return (
    Be.useEffect(() => {
      u();
    }, [u]),
    a(Vd.Provider, {
      value: { content: t, loading: n, error: l, reload: u },
      children: e,
    })
  );
}
function H() {
  let e = Be.useContext(Vd);
  if (!e) throw Error("useSite must be used within SiteProvider");
  return e;
}
var Va = Ne(De(), 1);
function o0(e, t) {
  let r = document.createElement("div");
  r.innerHTML = e.trim();
  let n = [];
  return (
    r.querySelectorAll("script").forEach((o) => {
      let l = document.createElement("script");
      for (let i of o.attributes) l.setAttribute(i.name, i.value);
      if ((l.setAttribute("data-bn-tracking", t), o.textContent))
        l.textContent = o.textContent;
      (document.head.appendChild(l), n.push(l));
    }),
    n
  );
}
function Qd(e, t, r) {
  Va.useEffect(() => {
    if (!e) return;
    if (document.querySelector(`script[data-bn-tracking="${t}"]`)) return;
    let n = document.head?.innerHTML || "";
    if (r && n.includes(r)) return;
    let o = o0(e, t);
    return () => {
      o.forEach((l) => l.remove());
    };
  }, [e, t, r]);
}
function cl() {
  let { content: e } = H(),
    t = e?.site?.googleAdsScript?.trim() || "",
    r = e?.site?.googleAnalyticsScript?.trim() || "";
  return (
    Va.useEffect(() => {
      if (!e?.site) return;
      document.title = e.site.title;
      let n = document.querySelector('meta[name="description"]');
      if (n) n.setAttribute("content", e.site.description);
    }, [e]),
    Qd(t, "google-ads", "google-ads-start"),
    Qd(r, "google-analytics", "google-analytics-start"),
    null
  );
}
var mt = Ne(De(), 1);
function Hd() {
  return a("svg", {
    className: "w-4 h-4",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "aria-hidden": "true",
    children: a("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M3 5a2 2 0 012-2h3.3a1 1 0 01.95.68l1.4 4.2a1 1 0 01-.24 1.02L8.7 10.6a16 16 0 006.7 6.7l1.7-1.7a1 1 0 011.02-.24l4.2 1.4a1 1 0 01.68.95V21a2 2 0 01-2 2h-1C10.3 23 1 13.7 1 2V1a2 2 0 012-2z",
    }),
  });
}
function l0() {
  return g("svg", {
    className: "w-4 h-4",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "aria-hidden": "true",
    children: [
      a("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M3 6h18v12H3z",
      }),
      a("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M3 7l9 7 9-7",
      }),
    ],
  });
}
function i0() {
  return g("svg", {
    className: "w-4 h-4",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "aria-hidden": "true",
    children: [
      a("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M12 21s7-5.6 7-11a7 7 0 10-14 0c0 5.4 7 11 7 11z",
      }),
      a("circle", { cx: "12", cy: "10", r: "2.5", strokeWidth: "2" }),
    ],
  });
}
function a0({ className: e = "w-[22px] h-[22px]" }) {
  return a("svg", {
    className: e,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "aria-hidden": "true",
    children: a("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.35",
      d: "M5.5 8h13M5.5 12h13M5.5 16h13",
    }),
  });
}
function u0({ className: e = "w-[18px] h-[18px]" }) {
  return a("svg", {
    className: e,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "aria-hidden": "true",
    children: a("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.35",
      d: "M7 7l10 10M17 7L7 17",
    }),
  });
}
function s0(e) {
  return [
    { key: "home", label: "Home", href: "/", enabled: !0 },
    { key: "about", label: "About Us", href: "#about-us", enabled: !0 },
    { key: "services", label: "Services", href: "#services", enabled: !0 },
    { key: "gallery", label: "Gallery", href: "#instagram", enabled: !0 },
    { key: "promotion", label: "Promotion", href: "#promotion", enabled: !!e },
    { key: "contact", label: "Contact Us", href: "#book", enabled: !0 },
  ];
}
function dl() {
  let { content: e } = H(),
    { site: t } = e,
    r = { enabled: !0, ...(e.promotion || {}) },
    n = t.logoUrl?.trim(),
    o = t.phone?.trim(),
    l = t.phoneTel?.trim(),
    i = t.email?.trim(),
    u = t.bookingUrl?.trim() || "#book",
    [s, f] = mt.useState(!1),
    [h, w] = mt.useState(!1),
    y = mt.useRef(null);
  (mt.useLayoutEffect(() => {
    let R = y.current;
    if (!R) return;
    function p() {
      let m = Math.ceil(R.getBoundingClientRect().height);
      document.documentElement.style.setProperty("--header-offset", `${m}px`);
    }
    p();
    let d = new ResizeObserver(p);
    return (
      d.observe(R),
      window.addEventListener("resize", p, { passive: !0 }),
      () => {
        (d.disconnect(),
          window.removeEventListener("resize", p),
          document.documentElement.style.removeProperty("--header-offset"));
      }
    );
  }, []),
    mt.useEffect(() => {
      let R = () => {
        w(window.scrollY > 10);
      };
      return (
        R(),
        window.addEventListener("scroll", R, { passive: !0 }),
        () => window.removeEventListener("scroll", R)
      );
    }, []));
  let S = Array.isArray(t.menu) ? t.menu : null,
    E = (S?.length ? S : s0(r.enabled))
      .map((R) => ({
        key: R?.key,
        label: (R?.label ?? "").toString(),
        href: (R?.href ?? "").toString().trim(),
        enabled: R?.enabled ?? !0,
      }))
      .map((R) =>
        R.href === "#promotion"
          ? { ...R, enabled: !!R.enabled && !!r.enabled }
          : R,
      )
      .filter((R) => R.label.trim() && R.enabled !== !1 && R.href.trim());
  return g("header", {
    ref: y,
    className:
      "fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-[env(safe-area-inset-top,0px)]",
    children: [
      g("div", {
        className: "max-w-6xl mx-auto pt-3",
        children: [
          a("div", {
            className: `px-4 py-2 rounded-2xl bg-cream/95 backdrop-blur-sm transition-all duration-300 overflow-hidden ${h ? "max-h-0 opacity-0 pointer-events-none" : "max-h-32 opacity-100"}`,
            "aria-hidden": h,
            children: g("div", {
              className:
                "flex flex-wrap items-center justify-center md:justify-between gap-x-4 gap-y-1 text-xs md:text-sm text-warm",
              children: [
                o
                  ? l
                    ? g("a", {
                        href: `tel:${l}`,
                        className:
                          "inline-flex items-center gap-1.5 hover:text-charcoal transition-colors",
                        children: [a(Hd, {}), a("span", { children: o })],
                      })
                    : g("span", {
                        className: "inline-flex items-center gap-1.5",
                        children: [a(Hd, {}), a("span", { children: o })],
                      })
                  : null,
                i
                  ? g("a", {
                      href: `mailto:${i}`,
                      className:
                        "inline-flex items-center gap-1.5 hover:text-charcoal transition-colors",
                      children: [a(l0, {}), a("span", { children: i })],
                    })
                  : null,
                t.address
                  ? g("span", {
                      className: "inline-flex items-center gap-1.5 text-center",
                      children: [a(i0, {}), a("span", { children: t.address })],
                    })
                  : null,
              ],
            }),
          }),
          g("nav", {
            className:
              "py-3 px-5 rounded-2xl bg-cream/95 backdrop-blur-sm flex items-center justify-between",
            children: [
              g("a", {
                href: "#",
                className:
                  "flex items-center gap-3 font-serif text-2xl font-semibold text-charcoal tracking-tight",
                children: [
                  n
                    ? a("img", {
                        src: n,
                        alt: "",
                        className: "h-9 w-auto object-contain max-w-[140px]",
                      })
                    : null,
                  a("span", { children: t.brandName }),
                ],
              }),
              g("div", {
                className:
                  "hidden md:flex items-center gap-3 md:gap-6 text-sm md:text-base",
                children: [
                  E.map((R, p) =>
                    a(
                      "a",
                      {
                        href: R.href,
                        className:
                          "text-warm hover:text-charcoal transition-colors duration-200 whitespace-nowrap",
                        children: R.label,
                      },
                      R.key ?? p,
                    ),
                  ),
                  a("a", {
                    href: u,
                    className:
                      "inline-flex items-center justify-center px-4 md:px-5 py-2 rounded-full bg-charcoal text-cream font-medium text-sm hover:bg-warm transition-colors duration-200 cursor-pointer whitespace-nowrap",
                    children: "Booking Now",
                  }),
                ],
              }),
              a("button", {
                type: "button",
                className:
                  "md:hidden group inline-flex items-center justify-center w-11 h-11 rounded-full border border-charcoal/12 text-charcoal bg-white/95 shadow-[0_1px_2px_rgba(44,40,38,0.06)] hover:border-charcoal/22 hover:shadow-[0_4px_14px_rgba(44,40,38,0.1)] active:scale-[0.97] transition-all duration-300",
                "aria-label": "Open menu",
                onClick: () => f(!0),
                children: a(a0, {
                  className:
                    "w-[22px] h-[22px] text-charcoal/90 group-hover:text-charcoal transition-colors duration-300",
                }),
              }),
            ],
          }),
        ],
      }),
      g("div", {
        className: `md:hidden fixed inset-0 z-[70] transition-opacity duration-300 ${s ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`,
        children: [
          a("button", {
            type: "button",
            className: "absolute inset-0 bg-charcoal/55 backdrop-blur-[1px]",
            "aria-label": "Close menu overlay",
            onClick: () => f(!1),
          }),
          a("aside", {
            className: `absolute top-0 right-0 h-full w-[84%] max-w-[360px] bg-cream/95 backdrop-blur-xl border-l border-sand/60 shadow-2xl transition-transform duration-300 ease-out ${s ? "translate-x-0" : "translate-x-full"}`,
            children: g("div", {
              className: "h-full p-5 flex flex-col",
              children: [
                g("div", {
                  className: "flex items-center justify-between mb-5",
                  children: [
                    a("span", {
                      className: "font-serif text-xl text-charcoal",
                      children: t.brandName,
                    }),
                    a("button", {
                      type: "button",
                      className:
                        "inline-flex items-center justify-center w-10 h-10 rounded-full border border-charcoal/12 text-charcoal bg-white/95 shadow-[0_1px_2px_rgba(44,40,38,0.06)] hover:border-charcoal/22 hover:shadow-[0_4px_14px_rgba(44,40,38,0.1)] active:scale-[0.97] transition-all duration-300",
                      "aria-label": "Close menu",
                      onClick: () => f(!1),
                      children: a(u0, {
                        className: "w-[18px] h-[18px] text-charcoal/85",
                      }),
                    }),
                  ],
                }),
                a("nav", {
                  className: "grid gap-2 text-[15px]",
                  children: E.map((R, p) =>
                    a(
                      "a",
                      {
                        href: R.href,
                        className:
                          "px-3 py-2.5 rounded-xl hover:bg-white/70 text-charcoal",
                        onClick: () => f(!1),
                        children: R.label,
                      },
                      R.key ?? p,
                    ),
                  ),
                }),
                a("a", {
                  href: u,
                  className:
                    "mt-auto inline-flex items-center justify-center px-4 py-3 rounded-full bg-charcoal text-cream font-medium",
                  onClick: () => f(!1),
                  children: "Booking Now",
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function c0() {
  return a("svg", {
    className: "w-5 h-5",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    children: a("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    }),
  });
}
var Kd = null;
function Qa() {
  let { content: e } = H(),
    t = e.hero,
    r = e.site?.bookingUrl?.trim() || "#book",
    n = (t.imageUrl || "").trim(),
    o = (t.imageUrlDesktop || "").trim() || n,
    l = (t.imageUrlMobile || "").trim() || o;
  return g("section", {
    className:
      "relative min-h-[85vh] flex flex-col justify-center px-4 md:px-8 overflow-hidden",
    children: [
      a("div", {
        className: "absolute inset-0",
        "aria-hidden": "true",
        children: g("picture", {
          className: "absolute inset-0 block",
          children: [
            a("source", { media: "(max-width: 767px)", srcSet: l }),
            a("img", {
              src: o,
              alt: "",
              className: "absolute inset-0 w-full h-full object-cover",
            }),
          ],
        }),
      }),
      Kd &&
        a("div", {
          className: "absolute inset-0",
          "aria-hidden": "true",
          children: a("video", {
            className: "absolute inset-0 w-full h-full object-cover",
            src: Kd,
            autoPlay: !0,
            muted: !0,
            loop: !0,
            playsInline: !0,
          }),
        }),
      a("div", {
        className:
          "absolute inset-0 bg-charcoal/50 bg-gradient-to-br from-charcoal/60 via-charcoal/40 to-rose/30",
        "aria-hidden": "true",
      }),
      a("div", {
        className:
          "absolute top-1/4 right-0 w-96 h-96 rounded-full bg-rose/20 blur-3xl",
        "aria-hidden": "true",
      }),
      a("div", {
        className:
          "absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-gold/10 blur-3xl",
        "aria-hidden": "true",
      }),
      g("div", {
        className: "relative max-w-6xl mx-auto text-center",
        children: [
          a("p", {
            className:
              "font-serif text-cream/90 text-lg md:text-xl italic mb-4",
            children: t.eyebrow,
          }),
          a("h1", {
            className:
              "font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-cream tracking-tight leading-tight mb-6",
            children: t.title,
          }),
          a("p", {
            className:
              "text-sand/95 text-lg md:text-xl max-w-2xl mx-auto mb-10",
            children: t.subtitle,
          }),
          g("div", {
            className: "flex flex-col sm:flex-row gap-4 justify-center",
            children: [
              g("a", {
                href: r,
                className:
                  "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold text-charcoal font-medium text-base hover:bg-amber-600 transition-colors duration-200 cursor-pointer shadow-lg",
                children: [a(c0, {}), "Book your visit"],
              }),
              a("a", {
                href: "#services",
                className:
                  "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-cream/60 text-cream font-medium text-base hover:bg-cream/10 transition-colors duration-200 cursor-pointer",
                children: "See services",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var Bn = Ne(De(), 1);
function Ha() {
  let { content: e } = H(),
    { slides: t, aboutSlider: r } = e,
    n = e.site?.bookingUrl?.trim() || "#book",
    [o, l] = Bn.useState(0),
    i = t.length || 1;
  (Bn.useEffect(() => {
    if (t.length <= 1) return;
    let f = setInterval(() => {
      l((h) => (h + 1) % t.length);
    }, 3500);
    return () => clearInterval(f);
  }, [t.length]),
    Bn.useEffect(() => {
      l(0);
    }, [t.length]));
  let u = () => {
      l((f) => (f - 1 + i) % i);
    },
    s = () => {
      l((f) => (f + 1) % i);
    };
  return a("section", {
    id: "about-us",
    className: "py-20 md:py-28 px-4 md:px-8 bg-white",
    children: g("div", {
      className:
        "max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-14 items-center",
      children: [
        g("div", {
          children: [
            a("p", {
              className: "font-serif text-rose text-lg italic mb-2",
              children: r.label,
            }),
            a("h2", {
              className:
                "font-serif text-3xl md:text-4xl font-semibold text-charcoal mb-5",
              children: r.heading,
            }),
            a("p", {
              className: "text-warm text-base md:text-lg leading-relaxed mb-5",
              children: r.paragraph1,
            }),
            a("p", {
              className: "text-warm text-base md:text-lg leading-relaxed mb-8",
              children: r.paragraph2,
            }),
            a("a", {
              href: n,
              className:
                "inline-flex items-center justify-center px-6 py-3 rounded-full bg-charcoal text-cream font-medium text-sm hover:bg-warm transition-colors duration-200 cursor-pointer",
              children: "Book now",
            }),
          ],
        }),
        g("div", {
          className: "relative",
          children: [
            g("div", {
              className:
                "relative overflow-hidden rounded-3xl border border-sand/60 shadow-xl shadow-charcoal/10 aspect-[4/3] bg-cream",
              children: [
                t.map((f, h) =>
                  a(
                    "img",
                    {
                      src: f.imageUrl,
                      alt: f.alt || "",
                      className: `absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${h === o ? "opacity-100" : "opacity-0"}`,
                      loading: h === 0 ? "eager" : "lazy",
                    },
                    `${f.imageUrl}-${h}`,
                  ),
                ),
                a("div", {
                  className:
                    "absolute inset-0 bg-gradient-to-t from-charcoal/25 to-transparent",
                }),
                t[o]?.description
                  ? a("p", {
                      className:
                        "absolute bottom-0 left-0 right-0 px-4 py-3 text-sm text-cream/95 bg-charcoal/45 backdrop-blur-[2px]",
                      children: t[o].description,
                    })
                  : null,
                a("button", {
                  type: "button",
                  onClick: u,
                  "aria-label": "Previous image",
                  className:
                    "absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/85 text-charcoal hover:bg-white transition-colors cursor-pointer",
                  children: "ΓÇ╣",
                }),
                a("button", {
                  type: "button",
                  onClick: s,
                  "aria-label": "Next image",
                  className:
                    "absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/85 text-charcoal hover:bg-white transition-colors cursor-pointer",
                  children: "ΓÇ║",
                }),
              ],
            }),
            a("div", {
              className: "flex items-center justify-center gap-2 mt-4",
              children: t.map((f, h) =>
                a(
                  "button",
                  {
                    type: "button",
                    onClick: () => l(h),
                    "aria-label": `Go to slide ${h + 1}`,
                    className: `h-2.5 rounded-full transition-all duration-200 cursor-pointer ${h === o ? "w-8 bg-charcoal" : "w-2.5 bg-sand"}`,
                  },
                  `dot-${f.imageUrl}-${h}`,
                ),
              ),
            }),
          ],
        }),
      ],
    }),
  });
}
var Yd = Ne(De(), 1);
function d0(e) {
  if (Array.isArray(e?.groups) && e.groups.length > 0)
    return e.groups.map((r) => ({
      name: (r?.name ?? "").trim(),
      description: (r?.description ?? "").trim(),
      items: Array.isArray(r?.items) ? r.items : [],
    }));
  return [
    {
      name: "",
      description: "",
      items: Array.isArray(e?.items) ? e.items : [],
    },
  ];
}
function Ka() {
  let { content: e } = H(),
    { pricing: t } = e,
    r = e.site?.bookingUrl?.trim() || "#book",
    [n, o] = Yd.useState(0),
    l = Array.isArray(t?.services)
      ? t
      : {
          ...t,
          services: [
            {
              name: t?.modalTitle || "Service",
              description: "",
              items: Array.isArray(t?.items) ? t.items : [],
            },
          ],
        },
    i = Array.isArray(l?.services) && l.services[n] ? l.services[n] : null,
    u = i ? d0(i) : [];
  return a("section", {
    id: "services",
    className: "py-20 md:py-28 px-4 md:px-8 bg-white",
    children: g("div", {
      className: "max-w-6xl mx-auto",
      children: [
        a("p", {
          className: "font-serif text-rose text-lg italic mb-2",
          children: l.modalSubtitle || "Price Menu",
        }),
        a("h2", {
          className:
            "font-serif text-3xl md:text-4xl font-semibold text-charcoal mb-4",
          children: l.modalTitle || "Service Menu",
        }),
        g("div", {
          className:
            "mt-10 rounded-2xl border border-sand/60 bg-cream/10 p-4 md:p-6",
          children: [
            a("div", {
              className: "flex items-center justify-between gap-4 flex-wrap",
              children: a("div", {
                className: "flex-1",
                children: a("p", {
                  className:
                    "text-xs font-medium uppercase tracking-wide text-warm/90",
                  children: "Choose service",
                }),
              }),
            }),
            a("div", {
              className: "mt-3 flex flex-wrap gap-2",
              children: (l.services || []).map((s, f) => {
                let h = s?.name || `Service ${f + 1}`,
                  w = f === n;
                return a(
                  "button",
                  {
                    type: "button",
                    onClick: () => o(f),
                    className: `rounded-full border px-4 py-2 text-sm whitespace-nowrap transition-colors cursor-pointer ${w ? "bg-charcoal border-charcoal text-cream" : "bg-white/60 border-sand/70 text-charcoal hover:bg-cream"}`,
                    "aria-current": w ? "page" : void 0,
                    children: h,
                  },
                  `${h}-${f}`,
                );
              }),
            }),
            a("div", {
              className: "mt-6",
              children: i
                ? g(Ae, {
                    children: [
                      g("div", {
                        className:
                          "flex flex-col gap-2 md:flex-row md:items-start md:justify-between",
                        children: [
                          a("h3", {
                            className:
                              "font-serif text-2xl font-semibold text-charcoal",
                            children: i.name || `Service ${n + 1}`,
                          }),
                          i.description
                            ? a("p", {
                                className:
                                  "text-warm text-sm md:text-base leading-relaxed md:max-w-[52ch] md:text-right",
                                children: i.description,
                              })
                            : null,
                        ],
                      }),
                      a("div", {
                        className: "mt-8 space-y-10",
                        children: u.map((s, f) =>
                          g(
                            "div",
                            {
                              children: [
                                s.name
                                  ? a("h4", {
                                      className:
                                        "font-serif text-xl font-semibold text-charcoal mb-1 border-b border-sand/60 pb-2",
                                      children: s.name,
                                    })
                                  : null,
                                s.description
                                  ? a("p", {
                                      className:
                                        "text-warm text-sm leading-relaxed mb-4",
                                      children: s.description,
                                    })
                                  : null,
                                a("div", {
                                  className: "mt-4 space-y-3",
                                  children: s.items.length
                                    ? s.items.map((h, w) =>
                                        g(
                                          "div",
                                          {
                                            className:
                                              "ml-2 sm:ml-4 pl-4 sm:pl-5 pr-4 border-l-[3px] border-rose/30 bg-cream/55 rounded-r-lg py-3",
                                            children: [
                                              g("div", {
                                                className:
                                                  "flex items-start justify-between gap-6",
                                                children: [
                                                  a("h5", {
                                                    className:
                                                      "font-medium text-charcoal leading-7",
                                                    children:
                                                      h?.name ||
                                                      `Item ${w + 1}`,
                                                  }),
                                                  h?.price
                                                    ? a("span", {
                                                        className:
                                                          "text-lg font-semibold text-charcoal shrink-0 leading-7",
                                                        children: h.price,
                                                      })
                                                    : null,
                                                ],
                                              }),
                                              h?.description
                                                ? a("p", {
                                                    className:
                                                      "text-warm text-sm leading-relaxed mt-2",
                                                    children: h.description,
                                                  })
                                                : null,
                                            ],
                                          },
                                          `${h?.name || "item"}-${f}-${w}`,
                                        ),
                                      )
                                    : a("p", {
                                        className: "text-warm text-sm py-2",
                                        children:
                                          "Ch╞░a c├│ mß╗Ñc gi├í trong nh├│m n├áy.",
                                      }),
                                }),
                              ],
                            },
                            f,
                          ),
                        ),
                      }),
                    ],
                  })
                : a("p", {
                    className: "text-warm text-sm py-6",
                    children: "Ch╞░a c├│ dß╗» liß╗çu bß║úng gi├í.",
                  }),
            }),
          ],
        }),
        a("div", {
          className: "mt-12 text-center",
          children: a("a", {
            href: r,
            className:
              "inline-flex items-center justify-center px-6 py-3 rounded-full bg-charcoal text-cream font-medium text-sm hover:bg-warm transition-colors duration-200 cursor-pointer",
            children: "Book your appointment",
          }),
        }),
      ],
    }),
  });
}
function p0() {
  return a("svg", {
    className: "w-5 h-5 text-rose",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    children: a("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    }),
  });
}
function f0() {
  return a("svg", {
    className: "w-5 h-5 text-gold",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    children: a("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    }),
  });
}
function m0() {
  return a("svg", {
    className: "w-5 h-5 text-charcoal",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    children: a("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    }),
  });
}
function h0() {
  return a("svg", {
    className: "w-5 h-5 text-rose",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    children: a("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    }),
  });
}
var v0 = [
  {
    title: "Clean & safe",
    description: "Sterilized tools and single-use where it matters.",
    icon: p0,
    iconBg: "bg-rose/20",
  },
  {
    title: "Premium products",
    description: "Long-lasting polish and gentle care for your nails.",
    icon: f0,
    iconBg: "bg-gold/20",
  },
  {
    title: "No rush",
    description: "We take our time so you leave feeling truly pampered.",
    icon: m0,
    iconBg: "bg-charcoal/10",
  },
  {
    title: "Welcoming space",
    description: "Relax in a calm, beautiful environment.",
    icon: h0,
    iconBg: "bg-rose/20",
  },
];
function Ya() {
  return a("section", {
    id: "about",
    className: "py-20 md:py-28 px-4 md:px-8 bg-cream",
    children: g("div", {
      className: "max-w-6xl mx-auto",
      children: [
        a("p", {
          className: "font-serif text-rose text-lg italic mb-2",
          children: "Why choose us",
        }),
        a("h2", {
          className:
            "font-serif text-3xl md:text-4xl font-semibold text-charcoal mb-4",
          children: "Luxurious & friendly",
        }),
        a("p", {
          className: "text-warm text-lg max-w-2xl mb-14",
          children:
            "We believe great nail care is both premium and personal. Clean tools, quality products, and a team that remembers your name.",
        }),
        a("div", {
          className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-8",
          children: v0.map((e) => {
            let t = e.icon;
            return g(
              "div",
              {
                className: "flex flex-col items-start",
                children: [
                  a("div", {
                    className: `w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${e.iconBg}`,
                    children: a(t, {}),
                  }),
                  a("h3", {
                    className:
                      "font-serif text-lg font-semibold text-charcoal mb-1",
                    children: e.title,
                  }),
                  a("p", {
                    className: "text-warm text-sm",
                    children: e.description,
                  }),
                ],
              },
              e.title,
            );
          }),
        }),
      ],
    }),
  });
}
function Xd() {
  return g("svg", {
    className: "w-5 h-5",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    children: [
      a("rect", {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "5",
        ry: "5",
      }),
      a("circle", { cx: "12", cy: "12", r: "4.2" }),
      a("circle", { cx: "17", cy: "7", r: "1.2" }),
    ],
  });
}
function Xa() {
  let { content: e } = H(),
    t = e.instagram || {},
    r = t.profileUrl?.trim() || "https://instagram.com",
    n = Array.isArray(t.images) ? t.images : [],
    o = n.filter((i) => i?.showOnHome && i?.imageUrl),
    l = (o.length > 0 ? o : n).slice(0, 6);
  return a("section", {
    id: "instagram",
    className: "py-20 md:py-28 px-4 md:px-8 bg-cream border-y border-sand/60",
    children: g("div", {
      className: "max-w-6xl mx-auto",
      children: [
        g("div", {
          className:
            "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10",
          children: [
            g("div", {
              children: [
                a("p", {
                  className: "font-serif text-rose text-lg italic mb-2",
                  children: "From our Instagram",
                }),
                a("h2", {
                  className:
                    "font-serif text-3xl md:text-4xl font-semibold text-charcoal mb-3",
                  children: "Salon moments",
                }),
                a("p", {
                  className: "text-warm text-sm md:text-base max-w-xl",
                  children:
                    "A peek inside the studio: fresh sets, color stories, and tiny details we love.",
                }),
              ],
            }),
            g("a", {
              href: r,
              target: "_blank",
              rel: "noreferrer",
              className:
                "inline-flex items-center justify-center gap-2 self-start px-4 py-2.5 rounded-full border border-charcoal/20 text-charcoal text-sm font-medium hover:border-charcoal hover:bg-charcoal/5 transition-colors duration-200 cursor-pointer",
              children: [a(Xd, {}), a("span", { children: "Open Instagram" })],
            }),
          ],
        }),
        l.length > 0
          ? g("div", {
              className: "space-y-6",
              children: [
                a("div", {
                  className:
                    "grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-5",
                  children: l.map((i, u) =>
                    g(
                      "a",
                      {
                        href: r,
                        target: "_blank",
                        rel: "noreferrer",
                        className:
                          "group relative block overflow-hidden rounded-2xl bg-sand/40 aspect-[4/5] cursor-pointer",
                        children: [
                          a("img", {
                            src: i.imageUrl,
                            alt: i.alt || `Instagram photo ${u + 1}`,
                            className:
                              "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105",
                            loading: "lazy",
                          }),
                          a("div", {
                            className:
                              "absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                          }),
                          g("div", {
                            className:
                              "absolute bottom-3 left-3 right-3 flex items-center justify-between text-cream text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                            children: [
                              a("span", {
                                className: "truncate",
                                children: "View on Instagram",
                              }),
                              a(Xd, {}),
                            ],
                          }),
                        ],
                      },
                      `${i.imageUrl || "instagram"}-${u}`,
                    ),
                  ),
                }),
                a("div", {
                  className: "flex justify-center",
                  children: a("a", {
                    href: "/album",
                    className:
                      "inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-charcoal text-cream text-sm font-medium hover:bg-warm transition-colors duration-200 cursor-pointer",
                    children: a("span", { children: "View all album" }),
                  }),
                }),
              ],
            })
          : a("div", {
              className:
                "rounded-2xl border border-dashed border-sand/80 bg-white p-8 text-center text-warm text-sm",
              children:
                "Ch╞░a c├│ ß║únh Instagram. V├áo Admin ΓåÆ Instagram ─æß╗â tß║úi ß║únh.",
            }),
      ],
    }),
  });
}
var Ge = Ne(De(), 1);
function g0(e) {
  let t = e || {},
    r = Array.isArray(t.folders) ? t.folders : [],
    n = Array.isArray(t.images) ? t.images : [];
  return {
    profileUrl: t.profileUrl?.trim() || "https://instagram.com",
    folders: r.map((o, l) => ({
      id: (o?.id ?? `folder-${l + 1}`).toString(),
      name: (o?.name ?? "").toString().trim() || `Folder ${l + 1}`,
      designType: (o?.designType ?? "").toString().trim(),
      parentId: (o?.parentId ?? "").toString(),
    })),
    images: n.map((o) => ({
      imageUrl: (o?.imageUrl ?? "").toString(),
      alt: (o?.alt ?? "").toString(),
      folderId: (o?.folderId ?? "").toString(),
      showOnHome: !!o?.showOnHome,
    })),
  };
}
function Zd(e, t) {
  let r = new Set(),
    n = [],
    o = e;
  while (o && !r.has(o)) {
    r.add(o);
    let l = t.get(o);
    if (!l) break;
    (n.unshift(l.name), (o = l.parentId || ""));
  }
  return n.join(" / ");
}
function Za() {
  let { content: e } = H(),
    t = g0(e.instagram),
    [r, n] = Ge.useState("newest"),
    [o, l] = Ge.useState("all"),
    [i, u] = Ge.useState(1),
    [s, f] = Ge.useState(null),
    h = Ge.useMemo(() => {
      let p = new Map();
      return (t.folders.forEach((d) => p.set(d.id, d)), p);
    }, [t.folders]),
    w = Ge.useMemo(
      () =>
        t.images
          .map((p, d) => ({ ...p, _idx: d }))
          .filter((p) => p.imageUrl.trim()),
      [t.images],
    ),
    y = Ge.useMemo(() => {
      let d = [...(o === "all" ? w : w.filter((m) => m.folderId === o))];
      if (r === "oldest") d.sort((m, x) => m._idx - x._idx);
      else if (r === "name")
        d.sort((m, x) => (m.alt || "").localeCompare(x.alt || ""));
      else if (r === "folder")
        d.sort((m, x) => {
          let z = m.folderId ? Zd(m.folderId, h) : "",
            P = x.folderId ? Zd(x.folderId, h) : "";
          return z.localeCompare(P);
        });
      else if (r === "designType")
        d.sort((m, x) => {
          let z = h.get(m.folderId)?.designType || "",
            P = h.get(x.folderId)?.designType || "";
          return z.localeCompare(P);
        });
      else d.sort((m, x) => x._idx - m._idx);
      return d;
    }, [w, r, h, o]);
  Ge.useEffect(() => {
    u(1);
  }, [o, r]);
  let S = 8,
    N = Math.max(1, Math.ceil(y.length / S)),
    E = Math.min(i, N),
    R = y.slice((E - 1) * S, E * S);
  return g("main", {
    className: "pt-[var(--header-offset)]",
    children: [
      a("section", {
        className:
          "py-16 md:py-20 px-4 md:px-8 bg-cream border-y border-sand/60 min-h-[70vh]",
        children: g("div", {
          className: "max-w-6xl mx-auto",
          children: [
            g("div", {
              className:
                "flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8",
              children: [
                g("div", {
                  children: [
                    a("p", {
                      className: "font-serif text-rose text-lg italic mb-2",
                      children: "Gallery",
                    }),
                    a("h1", {
                      className:
                        "font-serif text-3xl md:text-4xl font-semibold text-charcoal mb-2",
                      children: "All Salon Albums",
                    }),
                    a("p", {
                      className: "text-warm text-sm md:text-base",
                      children:
                        "Browse all uploaded designs by folder and style type.",
                    }),
                  ],
                }),
                a("a", {
                  href: t.profileUrl,
                  target: "_blank",
                  rel: "noreferrer",
                  className:
                    "inline-flex items-center justify-center px-4 py-2.5 rounded-full border border-charcoal/20 text-charcoal text-sm font-medium hover:border-charcoal hover:bg-charcoal/5 transition-colors",
                  children: "Open Instagram",
                }),
              ],
            }),
            g("div", {
              className:
                "rounded-2xl border border-sand/60 bg-white p-4 md:p-5 mb-6 space-y-3",
              children: [
                g("div", {
                  className: "flex flex-wrap gap-2",
                  children: [
                    a("button", {
                      type: "button",
                      onClick: () => l("all"),
                      className: `rounded-full border px-3.5 py-2 text-sm transition-colors ${o === "all" ? "bg-charcoal border-charcoal text-cream" : "bg-cream/60 border-sand/70 text-charcoal hover:bg-cream"}`,
                      children: "All",
                    }),
                    t.folders.map((p) =>
                      a(
                        "button",
                        {
                          type: "button",
                          onClick: () => l(p.id),
                          className: `rounded-full border px-3.5 py-2 text-sm transition-colors ${o === p.id ? "bg-charcoal border-charcoal text-cream" : "bg-cream/60 border-sand/70 text-charcoal hover:bg-cream"}`,
                          children: p.name,
                        },
                        p.id,
                      ),
                    ),
                  ],
                }),
                g("label", {
                  className: "text-sm text-warm inline-flex items-center gap-2",
                  children: [
                    a("span", { children: "Sort" }),
                    g("select", {
                      className:
                        "rounded-lg border border-sand px-3 py-2 text-charcoal bg-white",
                      value: r,
                      onChange: (p) => n(p.target.value),
                      children: [
                        a("option", {
                          value: "newest",
                          children: "Newest first",
                        }),
                        a("option", {
                          value: "oldest",
                          children: "Oldest first",
                        }),
                        a("option", { value: "name", children: "Name (A-Z)" }),
                        a("option", {
                          value: "folder",
                          children: "Folder (A-Z)",
                        }),
                        a("option", {
                          value: "designType",
                          children: "Design type (A-Z)",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            y.length > 0
              ? g(Ae, {
                  children: [
                    a("div", {
                      className:
                        "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4",
                      children: R.map((p, d) => {
                        let m = (E - 1) * S + d;
                        return a(
                          "button",
                          {
                            type: "button",
                            onClick: () => f(p),
                            className:
                              "group rounded-2xl overflow-hidden bg-sand/40 text-left cursor-zoom-in",
                            children: a("div", {
                              className: "aspect-[4/5]",
                              children: a("img", {
                                src: p.imageUrl,
                                alt: p.alt || `Album image ${m + 1}`,
                                className:
                                  "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105",
                                loading: "lazy",
                              }),
                            }),
                          },
                          `${p.imageUrl}-${m}`,
                        );
                      }),
                    }),
                    N > 1
                      ? g("div", {
                          className:
                            "mt-6 flex items-center justify-center gap-2",
                          children: [
                            a("button", {
                              type: "button",
                              onClick: () => u((p) => Math.max(1, p - 1)),
                              disabled: E === 1,
                              className:
                                "rounded-full border border-sand px-3 py-1.5 text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-cream",
                              children: "Prev",
                            }),
                            g("span", {
                              className: "text-sm text-warm",
                              children: [E, " / ", N],
                            }),
                            a("button", {
                              type: "button",
                              onClick: () => u((p) => Math.min(N, p + 1)),
                              disabled: E === N,
                              className:
                                "rounded-full border border-sand px-3 py-1.5 text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-cream",
                              children: "Next",
                            }),
                          ],
                        })
                      : null,
                  ],
                })
              : a("div", {
                  className:
                    "rounded-2xl border border-dashed border-sand/80 bg-white p-8 text-center text-warm text-sm",
                  children: "No images yet.",
                }),
          ],
        }),
      }),
      s
        ? g("div", {
            className:
              "fixed inset-0 z-[120] bg-charcoal/85 flex items-center justify-center p-4",
            role: "dialog",
            "aria-modal": "true",
            onClick: () => f(null),
            children: [
              a("button", {
                type: "button",
                className:
                  "absolute top-4 right-4 rounded-full bg-white/90 border border-sand px-3 py-1.5 text-sm text-charcoal hover:bg-white",
                onClick: () => f(null),
                children: "Close",
              }),
              a("img", {
                src: s.imageUrl,
                alt: s.alt || "Album image",
                className:
                  "max-w-[95vw] max-h-[90vh] object-contain rounded-xl shadow-2xl",
                onClick: (p) => p.stopPropagation(),
              }),
            ],
          })
        : null,
    ],
  });
}
function Ga() {
  let { content: e } = H(),
    t = {
      label: "What clients say",
      heading: "Kind words",
      quote:
        "Best Nails feels like a treat every time. The team is so warm and the results are always perfect. I won't go anywhere else.",
      author: "Maria K.",
      role: "Regular client",
      ...(e.testimonial || {}),
    };
  return a("section", {
    className: "py-20 md:py-28 px-4 md:px-8 bg-white",
    children: g("div", {
      className: "max-w-4xl mx-auto text-center",
      children: [
        a("p", {
          className: "font-serif text-rose text-lg italic mb-2",
          children: t.label,
        }),
        a("h2", {
          className:
            "font-serif text-3xl md:text-4xl font-semibold text-charcoal mb-10",
          children: t.heading,
        }),
        g("blockquote", {
          className:
            "font-serif text-2xl md:text-3xl text-charcoal leading-relaxed mb-8",
          children: ["ΓÇ£", t.quote, "ΓÇ¥"],
        }),
        g("p", {
          className: "text-warm font-medium",
          children: ["ΓÇö ", t.author],
        }),
        a("p", { className: "text-warm text-sm", children: t.role }),
      ],
    }),
  });
}
function Ja() {
  let { content: e } = H(),
    t = { enabled: !0, ...(e.promotion || {}) };
  if (!t.enabled) return null;
  return a("section", {
    id: "promotion",
    className: "py-20 md:py-28 px-4 md:px-8 bg-white",
    children: g("div", {
      className: "max-w-6xl mx-auto",
      children: [
        a("p", {
          className: "font-serif text-rose text-lg italic mb-2",
          children: "Special offer",
        }),
        a("h2", {
          className:
            "font-serif text-3xl md:text-4xl font-semibold text-charcoal mb-6",
          children: t.title || "Promotion",
        }),
        g("div", {
          className:
            "rounded-3xl border border-sand/70 bg-cream overflow-hidden md:grid md:grid-cols-2",
          children: [
            t.imageUrl
              ? a("img", {
                  src: t.imageUrl,
                  alt: t.title || "Promotion",
                  className: "w-full h-64 md:h-full object-cover",
                  loading: "lazy",
                })
              : a("div", { className: "h-64 md:h-full bg-sand/40" }),
            a("div", {
              className: "p-6 md:p-8",
              children: a("p", {
                className: "text-warm leading-relaxed whitespace-pre-line",
                children: t.description || "Ch╞░a c├│ nß╗Öi dung promotion.",
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
function w0() {
  return a("svg", {
    className: "w-5 h-5",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    children: a("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    }),
  });
}
function qa() {
  let { content: e } = H(),
    { phone: t, phoneTel: r, address: n } = e.site,
    o = r?.replace(/^tel:/i, "").trim(),
    l = e.site?.bookingUrl?.trim() || "#book",
    i = n
      ? `https://www.google.com/maps?q=${encodeURIComponent(n)}&output=embed`
      : "https://www.google.com/maps?q=Best+Nails&output=embed";
  return a("section", {
    id: "book",
    className: "py-20 md:py-28 px-4 md:px-8 bg-charcoal",
    children: g("div", {
      className: "max-w-5xl mx-auto text-center",
      children: [
        a("h2", {
          className:
            "font-serif text-3xl md:text-4xl font-semibold text-cream mb-4",
          children: "Ready to treat yourself?",
        }),
        a("p", {
          className: "text-sand text-lg mb-10",
          children:
            "Book your appointment online ΓÇö choose your service and a time that works for you.",
        }),
        g("a", {
          href: l,
          className:
            "inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-gold text-charcoal font-semibold text-base hover:bg-amber-600 transition-colors duration-200 cursor-pointer shadow-lg",
          children: [a(w0, {}), "Book your visit"],
        }),
        g("p", {
          className: "text-sand/80 text-sm mt-6",
          children: [
            "Or call us:",
            " ",
            o
              ? a("a", {
                  href: `tel:${o}`,
                  className: "text-gold hover:underline cursor-pointer",
                  children: t,
                })
              : a("span", { className: "text-gold", children: t }),
          ],
        }),
        a("div", {
          className:
            "mt-10 rounded-2xl overflow-hidden border border-sand/30 bg-cream/10",
          children: a("iframe", {
            title: "Google Map",
            src: i,
            className: "w-full h-[320px] md:h-[380px]",
            loading: "lazy",
            referrerPolicy: "no-referrer-when-downgrade",
          }),
        }),
      ],
    }),
  });
}
function pl() {
  let { content: e } = H(),
    { site: t } = e,
    r = t.phoneTel?.trim() || "",
    n = t.bookingUrl?.trim() || "#book";
  return g("footer", {
    className: "py-12 px-4 md:px-8 bg-charcoal border-t border-sand/20",
    children: [
      g("div", {
        className:
          "max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6",
        children: [
          a("span", {
            className: "font-serif text-xl font-semibold text-cream",
            children: t.brandName,
          }),
          g("div", {
            className: "flex gap-8 text-sand/90 text-sm",
            children: [
              a("a", {
                href: "#services",
                className:
                  "hover:text-cream transition-colors duration-200 cursor-pointer",
                children: "Services",
              }),
              a("a", {
                href: "#about-us",
                className:
                  "hover:text-cream transition-colors duration-200 cursor-pointer",
                children: "About",
              }),
              a("a", {
                href: n,
                className:
                  "hover:text-cream transition-colors duration-200 cursor-pointer",
                children: "Book",
              }),
            ],
          }),
        ],
      }),
      g("div", {
        className:
          "max-w-6xl mx-auto mt-8 space-y-2 text-sand/70 text-sm text-center md:text-left",
        children: [
          g("p", {
            children: [
              a("a", {
                href: `mailto:${t.email}`,
                className: "hover:text-cream transition-colors cursor-pointer",
                children: t.email,
              }),
              r
                ? g(Ae, {
                    children: [
                      " ┬╖ ",
                      a("a", {
                        href: `tel:${r}`,
                        className:
                          "hover:text-cream transition-colors cursor-pointer",
                        children: t.phone,
                      }),
                    ],
                  })
                : null,
            ],
          }),
          a("p", { children: t.address }),
          g("p", {
            className: "text-sand/60",
            children: ["┬⌐ ", t.brandName, ". ", t.footerTagline],
          }),
        ],
      }),
    ],
  });
}
function y0() {
  let { loading: e, error: t, content: r } = H();
  if (t)
    return g("div", {
      className:
        "min-h-screen flex flex-col items-center justify-center gap-2 px-6 bg-cream text-warm text-center",
      children: [
        a("p", { children: t }),
        g("p", {
          className: "text-sm mt-2",
          children: [
            "Chß║íy server bß║▒ng:",
            " ",
            a("code", {
              className: "bg-sand/50 px-2 py-0.5 rounded text-charcoal",
              children: "bun run dev",
            }),
          ],
        }),
      ],
    });
  if (e || !r)
    return a("div", {
      className:
        "min-h-screen flex items-center justify-center bg-cream text-warm",
      children: g("div", {
        className: "flex flex-col items-center gap-3",
        children: [
          g("svg", {
            className: "w-10 h-10 animate-spin text-warm/70",
            viewBox: "0 0 24 24",
            fill: "none",
            "aria-hidden": "true",
            children: [
              a("circle", {
                cx: "12",
                cy: "12",
                r: "9",
                stroke: "currentColor",
                strokeWidth: "3",
                opacity: "0.25",
              }),
              a("path", {
                d: "M21 12a9 9 0 0 0-9-9",
                stroke: "currentColor",
                strokeWidth: "3",
                strokeLinecap: "round",
              }),
            ],
          }),
          a("span", { className: "sr-only", children: "Loading" }),
        ],
      }),
    });
  return g(Ae, {
    children: [
      a(cl, {}),
      a(dl, {}),
      g("main", {
        className: "pt-[var(--header-offset)]",
        children: [
          a(Qa, {}),
          a(Ha, {}),
          a(Ka, {}),
          a(Xa, {}),
          a(Ja, {}),
          a(Ya, {}),
          a(Ga, {}),
          a(qa, {}),
        ],
      }),
      a(pl, {}),
    ],
  });
}
function k0() {
  let { loading: e, error: t, content: r } = H();
  if (t)
    return g("div", {
      className:
        "min-h-screen flex flex-col items-center justify-center gap-2 px-6 bg-cream text-warm text-center",
      children: [
        a("p", { children: t }),
        g("p", {
          className: "text-sm mt-2",
          children: [
            "Chß║íy server bß║▒ng:",
            " ",
            a("code", {
              className: "bg-sand/50 px-2 py-0.5 rounded text-charcoal",
              children: "bun run dev",
            }),
          ],
        }),
      ],
    });
  if (e || !r)
    return a("div", {
      className:
        "min-h-screen flex items-center justify-center bg-cream text-warm",
      children: g("div", {
        className: "flex flex-col items-center gap-3",
        children: [
          g("svg", {
            className: "w-10 h-10 animate-spin text-warm/70",
            viewBox: "0 0 24 24",
            fill: "none",
            "aria-hidden": "true",
            children: [
              a("circle", {
                cx: "12",
                cy: "12",
                r: "9",
                stroke: "currentColor",
                strokeWidth: "3",
                opacity: "0.25",
              }),
              a("path", {
                d: "M21 12a9 9 0 0 0-9-9",
                stroke: "currentColor",
                strokeWidth: "3",
                strokeLinecap: "round",
              }),
            ],
          }),
          a("span", { className: "sr-only", children: "Loading" }),
        ],
      }),
    });
  return g(Ae, { children: [a(cl, {}), a(dl, {}), a(Za, {}), a(pl, {})] });
}
function Ia() {
  let e = typeof window < "u" ? window.location.pathname : "/";
  if (e.startsWith("/admin")) return a(Wa, {});
  if (e === "/album") return a($a, { children: a(k0, {}) });
  return a($a, { children: a(y0, {}) });
}
var x0 = Jd.createRoot(document.getElementById("root"));
x0.render(a(Gd.default.StrictMode, { children: a(Ia, {}) }));

//# debugId=18CF9CBC8A4E404F64756E2164756E21
//# sourceMappingURL=/chunk-w4m9zfva.js.map
