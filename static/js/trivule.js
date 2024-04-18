var Dt = Object.defineProperty;
var Ie = Object.getOwnPropertySymbols;
var At = Object.prototype.hasOwnProperty,
  Rt = Object.prototype.propertyIsEnumerable;
var xe = (w, y, b) =>
    y in w
      ? Dt(w, y, { enumerable: !0, configurable: !0, writable: !0, value: b })
      : (w[y] = b),
  D = (w, y) => {
    for (var b in y || (y = {})) At.call(y, b) && xe(w, b, y[b]);
    if (Ie) for (var b of Ie(y)) Rt.call(y, b) && xe(w, b, y[b]);
    return w;
  };
(function (w, y) {
  typeof exports == "object" && typeof module != "undefined"
    ? y(exports)
    : typeof define == "function" && define.amd
    ? define(["exports"], y)
    : ((w = typeof globalThis != "undefined" ? globalThis : w || self),
      y((w.trivule = {})));
})(this, function (w) {
  var Ne, Le, Ce, De, Ae;
  ("use strict");
  const y = (s) => {
      const e = /^(\w+):(.+)$/,
        t = s.match(e);
      if (t) {
        const r = t[1];
        let i = t[2];
        return { ruleName: r, params: i };
      } else {
        const [r, i] = s.split(":");
        return { ruleName: r, params: i };
      }
    },
    b = (s, e = ",") =>
      typeof s != "string" ? [] : s.split(e).map((t) => t.trim()),
    P = (s) => {
      throw new Error(`Please provide <<${s}>> rule arguments`);
    };
  function ce() {
    return new Date().toISOString();
  }
  class te {
    constructor(e) {
      (this.argument = e), (this._pipe = "&pip;"), (this._space = "&esp;");
    }
    replacePipes() {
      return this.argument.replace(new RegExp(this._pipe, "g"), "|");
    }
    replaceSpaces() {
      return this.argument.replace(new RegExp(this._space, "g"), " ");
    }
  }
  var Fe =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
      ? global
      : typeof self != "undefined"
      ? self
      : {};
  function Pe(s) {
    return s &&
      s.__esModule &&
      Object.prototype.hasOwnProperty.call(s, "default")
      ? s.default
      : s;
  }
  var de = { exports: {} };
  (function (s, e) {
    (function (t, r) {
      s.exports = r();
    })(Fe, function () {
      var t = 1e3,
        r = 6e4,
        i = 36e5,
        u = "millisecond",
        f = "second",
        m = "minute",
        O = "hour",
        R = "day",
        J = "week",
        B = "month",
        Re = "quarter",
        x = "year",
        z = "date",
        Be = "Invalid Date",
        $t =
          /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
        Nt =
          /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
        Lt = {
          name: "en",
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_"
            ),
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_"
            ),
          ordinal: function (h) {
            var l = ["th", "st", "nd", "rd"],
              n = h % 100;
            return "[" + h + (l[(n - 20) % 10] || l[n] || l[0]) + "]";
          },
        },
        he = function (h, l, n) {
          var o = String(h);
          return !o || o.length >= l
            ? h
            : "" + Array(l + 1 - o.length).join(n) + h;
        },
        Ct = {
          s: he,
          z: function (h) {
            var l = -h.utcOffset(),
              n = Math.abs(l),
              o = Math.floor(n / 60),
              a = n % 60;
            return (l <= 0 ? "+" : "-") + he(o, 2, "0") + ":" + he(a, 2, "0");
          },
          m: function h(l, n) {
            if (l.date() < n.date()) return -h(n, l);
            var o = 12 * (n.year() - l.year()) + (n.month() - l.month()),
              a = l.clone().add(o, B),
              c = n - a < 0,
              d = l.clone().add(o + (c ? -1 : 1), B);
            return +(-(o + (n - a) / (c ? a - d : d - a)) || 0);
          },
          a: function (h) {
            return h < 0 ? Math.ceil(h) || 0 : Math.floor(h);
          },
          p: function (h) {
            return (
              { M: B, y: x, w: J, d: R, D: z, h: O, m, s: f, ms: u, Q: Re }[
                h
              ] ||
              String(h || "")
                .toLowerCase()
                .replace(/s$/, "")
            );
          },
          u: function (h) {
            return h === void 0;
          },
        },
        U = "en",
        W = {};
      W[U] = Lt;
      var Oe = "$isDayjsObject",
        fe = function (h) {
          return h instanceof X || !(!h || !h[Oe]);
        },
        Q = function h(l, n, o) {
          var a;
          if (!l) return U;
          if (typeof l == "string") {
            var c = l.toLowerCase();
            W[c] && (a = c), n && ((W[c] = n), (a = c));
            var d = l.split("-");
            if (!a && d.length > 1) return h(d[0]);
          } else {
            var v = l.name;
            (W[v] = l), (a = v);
          }
          return !o && a && (U = a), a || (!o && U);
        },
        E = function (h, l) {
          if (fe(h)) return h.clone();
          var n = typeof l == "object" ? l : {};
          return (n.date = h), (n.args = arguments), new X(n);
        },
        g = Ct;
      (g.l = Q),
        (g.i = fe),
        (g.w = function (h, l) {
          return E(h, { locale: l.$L, utc: l.$u, x: l.$x, $offset: l.$offset });
        });
      var X = (function () {
          function h(n) {
            (this.$L = Q(n.locale, null, !0)),
              this.parse(n),
              (this.$x = this.$x || n.x || {}),
              (this[Oe] = !0);
          }
          var l = h.prototype;
          return (
            (l.parse = function (n) {
              (this.$d = (function (o) {
                var a = o.date,
                  c = o.utc;
                if (a === null) return new Date(NaN);
                if (g.u(a)) return new Date();
                if (a instanceof Date) return new Date(a);
                if (typeof a == "string" && !/Z$/i.test(a)) {
                  var d = a.match($t);
                  if (d) {
                    var v = d[2] - 1 || 0,
                      _ = (d[7] || "0").substring(0, 3);
                    return c
                      ? new Date(
                          Date.UTC(
                            d[1],
                            v,
                            d[3] || 1,
                            d[4] || 0,
                            d[5] || 0,
                            d[6] || 0,
                            _
                          )
                        )
                      : new Date(
                          d[1],
                          v,
                          d[3] || 1,
                          d[4] || 0,
                          d[5] || 0,
                          d[6] || 0,
                          _
                        );
                  }
                }
                return new Date(a);
              })(n)),
                this.init();
            }),
            (l.init = function () {
              var n = this.$d;
              (this.$y = n.getFullYear()),
                (this.$M = n.getMonth()),
                (this.$D = n.getDate()),
                (this.$W = n.getDay()),
                (this.$H = n.getHours()),
                (this.$m = n.getMinutes()),
                (this.$s = n.getSeconds()),
                (this.$ms = n.getMilliseconds());
            }),
            (l.$utils = function () {
              return g;
            }),
            (l.isValid = function () {
              return this.$d.toString() !== Be;
            }),
            (l.isSame = function (n, o) {
              var a = E(n);
              return this.startOf(o) <= a && a <= this.endOf(o);
            }),
            (l.isAfter = function (n, o) {
              return E(n) < this.startOf(o);
            }),
            (l.isBefore = function (n, o) {
              return this.endOf(o) < E(n);
            }),
            (l.$g = function (n, o, a) {
              return g.u(n) ? this[o] : this.set(a, n);
            }),
            (l.unix = function () {
              return Math.floor(this.valueOf() / 1e3);
            }),
            (l.valueOf = function () {
              return this.$d.getTime();
            }),
            (l.startOf = function (n, o) {
              var a = this,
                c = !!g.u(o) || o,
                d = g.p(n),
                v = function (j, N) {
                  var F = g.w(
                    a.$u ? Date.UTC(a.$y, N, j) : new Date(a.$y, N, j),
                    a
                  );
                  return c ? F : F.endOf(R);
                },
                _ = function (j, N) {
                  return g.w(
                    a
                      .toDate()
                      [j].apply(
                        a.toDate("s"),
                        (c ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(N)
                      ),
                    a
                  );
                },
                T = this.$W,
                $ = this.$M,
                A = this.$D,
                G = "set" + (this.$u ? "UTC" : "");
              switch (d) {
                case x:
                  return c ? v(1, 0) : v(31, 11);
                case B:
                  return c ? v(1, $) : v(0, $ + 1);
                case J:
                  var k = this.$locale().weekStart || 0,
                    H = (T < k ? T + 7 : T) - k;
                  return v(c ? A - H : A + (6 - H), $);
                case R:
                case z:
                  return _(G + "Hours", 0);
                case O:
                  return _(G + "Minutes", 1);
                case m:
                  return _(G + "Seconds", 2);
                case f:
                  return _(G + "Milliseconds", 3);
                default:
                  return this.clone();
              }
            }),
            (l.endOf = function (n) {
              return this.startOf(n, !1);
            }),
            (l.$set = function (n, o) {
              var a,
                c = g.p(n),
                d = "set" + (this.$u ? "UTC" : ""),
                v = ((a = {}),
                (a[R] = d + "Date"),
                (a[z] = d + "Date"),
                (a[B] = d + "Month"),
                (a[x] = d + "FullYear"),
                (a[O] = d + "Hours"),
                (a[m] = d + "Minutes"),
                (a[f] = d + "Seconds"),
                (a[u] = d + "Milliseconds"),
                a)[c],
                _ = c === R ? this.$D + (o - this.$W) : o;
              if (c === B || c === x) {
                var T = this.clone().set(z, 1);
                T.$d[v](_),
                  T.init(),
                  (this.$d = T.set(z, Math.min(this.$D, T.daysInMonth())).$d);
              } else v && this.$d[v](_);
              return this.init(), this;
            }),
            (l.set = function (n, o) {
              return this.clone().$set(n, o);
            }),
            (l.get = function (n) {
              return this[g.p(n)]();
            }),
            (l.add = function (n, o) {
              var a,
                c = this;
              n = Number(n);
              var d = g.p(o),
                v = function ($) {
                  var A = E(c);
                  return g.w(A.date(A.date() + Math.round($ * n)), c);
                };
              if (d === B) return this.set(B, this.$M + n);
              if (d === x) return this.set(x, this.$y + n);
              if (d === R) return v(1);
              if (d === J) return v(7);
              var _ = ((a = {}), (a[m] = r), (a[O] = i), (a[f] = t), a)[d] || 1,
                T = this.$d.getTime() + n * _;
              return g.w(T, this);
            }),
            (l.subtract = function (n, o) {
              return this.add(-1 * n, o);
            }),
            (l.format = function (n) {
              var o = this,
                a = this.$locale();
              if (!this.isValid()) return a.invalidDate || Be;
              var c = n || "YYYY-MM-DDTHH:mm:ssZ",
                d = g.z(this),
                v = this.$H,
                _ = this.$m,
                T = this.$M,
                $ = a.weekdays,
                A = a.months,
                G = a.meridiem,
                k = function (N, F, Y, ee) {
                  return (N && (N[F] || N(o, c))) || Y[F].slice(0, ee);
                },
                H = function (N) {
                  return g.s(v % 12 || 12, N, "0");
                },
                j =
                  G ||
                  function (N, F, Y) {
                    var ee = N < 12 ? "AM" : "PM";
                    return Y ? ee.toLowerCase() : ee;
                  };
              return c.replace(Nt, function (N, F) {
                return (
                  F ||
                  (function (Y) {
                    switch (Y) {
                      case "YY":
                        return String(o.$y).slice(-2);
                      case "YYYY":
                        return g.s(o.$y, 4, "0");
                      case "M":
                        return T + 1;
                      case "MM":
                        return g.s(T + 1, 2, "0");
                      case "MMM":
                        return k(a.monthsShort, T, A, 3);
                      case "MMMM":
                        return k(A, T);
                      case "D":
                        return o.$D;
                      case "DD":
                        return g.s(o.$D, 2, "0");
                      case "d":
                        return String(o.$W);
                      case "dd":
                        return k(a.weekdaysMin, o.$W, $, 2);
                      case "ddd":
                        return k(a.weekdaysShort, o.$W, $, 3);
                      case "dddd":
                        return $[o.$W];
                      case "H":
                        return String(v);
                      case "HH":
                        return g.s(v, 2, "0");
                      case "h":
                        return H(1);
                      case "hh":
                        return H(2);
                      case "a":
                        return j(v, _, !0);
                      case "A":
                        return j(v, _, !1);
                      case "m":
                        return String(_);
                      case "mm":
                        return g.s(_, 2, "0");
                      case "s":
                        return String(o.$s);
                      case "ss":
                        return g.s(o.$s, 2, "0");
                      case "SSS":
                        return g.s(o.$ms, 3, "0");
                      case "Z":
                        return d;
                    }
                    return null;
                  })(N) ||
                  d.replace(":", "")
                );
              });
            }),
            (l.utcOffset = function () {
              return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
            }),
            (l.diff = function (n, o, a) {
              var c,
                d = this,
                v = g.p(o),
                _ = E(n),
                T = (_.utcOffset() - this.utcOffset()) * r,
                $ = this - _,
                A = function () {
                  return g.m(d, _);
                };
              switch (v) {
                case x:
                  c = A() / 12;
                  break;
                case B:
                  c = A();
                  break;
                case Re:
                  c = A() / 3;
                  break;
                case J:
                  c = ($ - T) / 6048e5;
                  break;
                case R:
                  c = ($ - T) / 864e5;
                  break;
                case O:
                  c = $ / i;
                  break;
                case m:
                  c = $ / r;
                  break;
                case f:
                  c = $ / t;
                  break;
                default:
                  c = $;
              }
              return a ? c : g.a(c);
            }),
            (l.daysInMonth = function () {
              return this.endOf(B).$D;
            }),
            (l.$locale = function () {
              return W[this.$L];
            }),
            (l.locale = function (n, o) {
              if (!n) return this.$L;
              var a = this.clone(),
                c = Q(n, o, !0);
              return c && (a.$L = c), a;
            }),
            (l.clone = function () {
              return g.w(this.$d, this);
            }),
            (l.toDate = function () {
              return new Date(this.valueOf());
            }),
            (l.toJSON = function () {
              return this.isValid() ? this.toISOString() : null;
            }),
            (l.toISOString = function () {
              return this.$d.toISOString();
            }),
            (l.toString = function () {
              return this.$d.toUTCString();
            }),
            h
          );
        })(),
        Se = X.prototype;
      return (
        (E.prototype = Se),
        [
          ["$ms", u],
          ["$s", f],
          ["$m", m],
          ["$H", O],
          ["$W", R],
          ["$M", B],
          ["$y", x],
          ["$D", z],
        ].forEach(function (h) {
          Se[h[1]] = function (l) {
            return this.$g(l, h[0], h[1]);
          };
        }),
        (E.extend = function (h, l) {
          return h.$i || (h(l, X, E), (h.$i = !0)), E;
        }),
        (E.locale = Q),
        (E.isDayjs = fe),
        (E.unix = function (h) {
          return E(1e3 * h);
        }),
        (E.en = W[U]),
        (E.Ls = W),
        (E.p = {}),
        E
      );
    });
  })(de);
  var We = de.exports;
  const se = Pe(We),
    me = (s) => se(s, void 0, !0).isValid(),
    ge = (s, e) => (e === "now" && (e = ce()), se(s).isBefore(e)),
    pe = (s, e) => (e === "now" && (e = ce()), se(s).isAfter(e)),
    ke = (s, e) => {
      e || P("dateBetween");
      const [t, r] = b(e != null ? e : "");
      return pe(s, t) && ge(s, r);
    },
    je = (s) => {
      if (s.split(":").length < 3) for (; s.split(":").length < 3; ) s += ":00";
      return /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/.test(s);
    },
    Z = (s, ...e) => !!s && s !== "",
    qe = (s) => !0,
    Ve = (s, e) => (e || P("in"), b(e).includes(s)),
    ze = (s, e) => (S(s) ? K(s, e) : ne(s, e)),
    Ge = (s) =>
      typeof s == "boolean" ||
      (typeof s == "string" &&
        ((s = s.toLowerCase()),
        s === "true" ||
          s === "false" ||
          s === "0" ||
          s === "1" ||
          s === "yes" ||
          s === "no")),
    Ue = (s, e) => {
      var [t, r] = b(e != null ? e : "");
      return S(s)
        ? K(s, r) && ae(s, t)
        : !p(s) && !S(s)
        ? me(s)
          ? ke(s, e)
          : ve(s, e)
        : ((t = Number(t)),
          (r = Number(r)),
          s !== void 0 && s !== Number && s !== "" && p(t) && p(r)
            ? ((s = Number(s)), p(s) ? _e(s, r) && be(s, t) : !1)
            : !1);
    },
    He = (s, e) => {
      if (!e) throw new Error("The regex rule argument must not be empty");
      const t = new te(e);
      return new RegExp(t.replacePipes()).test(s);
    },
    Ye = (s, e) =>
      e === "string"
        ? !L(s) || s.length === 0
          ? !1
          : !/\d/.test(s)
        : e === "number"
        ? p(s)
        : !1,
    Ze = (s, e) => {
      if (!p(e)) throw new Error("Digit rule parameter must be a number");
      if (p(s)) {
        const t = String(s);
        return /^\d+$/.test(t) && t.length === Number(e);
      }
      return !1;
    },
    Ke = (s, e) => {
      if (!p(e)) throw new Error("Max_digit rule parameter must be a number");
      if (p(s)) {
        const t = String(s);
        return /^\d+$/.test(t) && t.length <= Number(e);
      }
      return !1;
    },
    Je = (s, e) => {
      if (!p(e)) throw new Error("Min_digit rule parameter must be a number");
      if (p(s)) {
        const t = String(s);
        return /^\d+$/.test(t) && t.length >= Number(e);
      }
      return !1;
    },
    Qe = (s, ...e) =>
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        s
      ),
    re = (s, e) => (s && L(s) ? s.length >= Number(e) : !1),
    ie = (s, e) => (s ? (L(s) ? s.length <= Number(e) : !1) : !0),
    L = (s) => typeof s == "string",
    Xe = (s) => /^(ftp|http|https):\/\/[^ "]+$/.test(s),
    et = (s) =>
      typeof s != "string" || s.length === 0 ? !1 : /^[A-Z]/.test(s),
    tt = (s) =>
      typeof s != "string" || s.length === 0 ? !1 : /^[a-z]/.test(s),
    st = (s, e) => {
      e || P("startWith");
      const t = b(e != null ? e : "");
      return L(s) ? t.some((r) => s.startsWith(r)) : !1;
    },
    rt = (s, e) => {
      e || P("endWith");
      const t = b(e != null ? e : "");
      return L(s) ? t.some((r) => s.endsWith(r)) : !1;
    },
    it = (s, e) => {
      e || P("contains");
      const t = b(e != null ? e : "");
      return L(s) ? t.every((r) => s.includes(new te(r).replaceSpaces())) : !1;
    },
    ne = (s, e) => {
      if (!p(e)) throw new Error("The length rule argument must be an integer");
      return (
        (e = parseInt(e)),
        typeof s == "string" || typeof s == "number"
          ? (s = s.toString().split(""))
          : typeof s == "object" && s !== null && s !== void 0 && (s = []),
        Array.isArray(s) ? s.length === e : !1
      );
    },
    nt = (s) => {
      const t = /[A-Z]/.test(s),
        r = /[a-z]/.test(s),
        i = /\d/.test(s),
        u = /[!@#$%^&*(),.?":{}|<>]/.test(s);
      return !(s.length < 8 || !t || !r || !i || !u);
    },
    at = (s) => (!L(s) || s.length === 0 ? !1 : /^[a-zA-Z]/.test(s)),
    lt = (s) => (!L(s) || s.length === 0 ? !1 : /[a-zA-Z]$/.test(s)),
    ut = (s) => (typeof s != "string" ? !1 : /[a-zA-Z]/.test(s)),
    ot = (s, e) => {
      const t = b(e);
      return (
        t.length || P("excludes"),
        L(s) ? !t.some((r) => s.includes(new te(r).replaceSpaces())) : !0
      );
    },
    ht = (s, e) => s === s.toLocaleUpperCase(),
    ft = (s, e) => s === s.toLocaleLowerCase(),
    ve = (s, e) => {
      const [t, r] = b(e != null ? e : "");
      return re(s, t) && ie(s, r);
    },
    S = (s) => s instanceof File || s instanceof Blob,
    K = (s, e) => {
      if (S(s)) {
        const r = s.size;
        let i;
        const u =
          e == null ? void 0 : e.match(/^(\d+(\.\d+)?)\s*(B|KB|MB|GB)$/i);
        if (!u)
          throw new Error(
            "Invalid maxSize format. Please use valid format like '1KB', '1MB', etc."
          );
        const f = parseFloat(u[1]),
          m = u[3].toUpperCase();
        return (
          m === "KB"
            ? (i = f * 1024)
            : m === "MB"
            ? (i = f * 1024 * 1024)
            : m === "GB"
            ? (i = f * 1024 * 1024 * 1024)
            : (i = f),
          r <= i
        );
      } else return !1;
    },
    ae = (s, e) => {
      if (S(s)) {
        const r = s.size;
        let i;
        const u =
          e == null ? void 0 : e.match(/^(\d+(\.\d+)?)\s*(B|KB|MB|GB)$/i);
        if (!u)
          throw new Error(
            "Invalid minSize format. Please use valid format like '1KB', '1MB', etc."
          );
        const f = parseFloat(u[1]),
          m = u[3].toUpperCase();
        return (
          m === "KB"
            ? (i = f * 1024)
            : m === "MB"
            ? (i = f * 1024 * 1024)
            : m === "GB"
            ? (i = f * 1024 * 1024 * 1024)
            : (i = f),
          r >= i
        );
      } else return !1;
    },
    ct = (s, e) => {
      var t;
      if ((e || P("mimes"), s instanceof File)) {
        const r = s;
        return (
          (t = e == null ? void 0 : e.split(",").map((u) => u.trim())) != null
            ? t
            : []
        ).some((u) => {
          if (((u = u.replace(/\s/g, "")), u === "*")) return !0;
          if (u.endsWith("/*")) {
            const f = u.slice(0, -2);
            return r.type.startsWith(f);
          } else if (u.startsWith("*.")) {
            const f = u.substring(2);
            return r.name.endsWith(f);
          } else return r.type === u;
        });
      } else return !1;
    },
    be = (s, e) => {
      if (S(s)) return ae(s, e);
      if ((s == null && (s = 0), !p(e)))
        throw new Error("Min rule parameter must be an integer");
      return p(s) ? Number(s) >= Number(e) : re(s, e);
    },
    _e = (s, e) => {
      if (S(s)) return K(s, e);
      if (!p(e)) throw new Error("Min rule parameter must be an integer");
      return s == null && (s = 0), p(s) ? Number(s) <= Number(e) : ie(s, e);
    },
    we = (s) => (p(s) ? Number.isInteger(Number(s)) : !1),
    p = (s) =>
      s === "" || s === null
        ? !1
        : s === "0" || s === 0 || s === "1" || s === 1
        ? !0
        : !isNaN(Number(s)) && typeof s != "boolean" && typeof s != "object",
    ye = (s, e) => {
      if (!p(e)) throw new Error("Modulo rule parameter must be an integer");
      return p(s) ? Number(s) % Number(e) === 0 : !1;
    },
    Ee = (s, e) => {
      if (!p(e)) throw new Error("Lessthan rule parameter must be a number");
      return p(s) ? Number(s) < Number(e) : !1;
    },
    Te = (s, e) => {
      if (!p(e)) throw new Error("Greaterthan rule parameter must be a number");
      return p(s) ? Number(s) > Number(e) : !1;
    },
    dt = {
      default: "This field is invalid",
      required: "This field is required",
      email: "Please enter a valid email address",
      maxlength: "The maximum number of allowed characters is: :arg0",
      minlength: "The minimum number of allowed characters is: :arg0",
      min: "The :field field must be greater than or equal to ':arg0'",
      max: "The :field field must be less than or equal to ':arg0'",
      string: "Please enter a string of characters",
      between: "The value of this field must be between ':arg0' and ':arg1'",
      startWith: "The :field field must start with ':arg0'",
      endWith: "The :field field must end with ':arg0'",
      contains: "The :field field must contain the value ':arg0'",
      in: "Please choose a correct value for the :field field",
      integer: "The :field field must be an integer",
      int: "The :field field must be an integer",
      number: "This field must be a number",
      numeric: "This field must be a number",
      file: "This field must be a file",
      url: "This field must be a valid URL",
      length: "The length of this field must be :arg0",
      len: "The length of this field must be :arg0",
      maxFileSize: "The file size must be less than :arg0.",
      minFileSize: "The file size must be greater than :arg0.",
      size: "The size of this field must be less than or equal to :arg0",
      boolean: "This field must be a boolean (yes or no)",
      startWithUpper: "This field must start with an uppercase letter",
      startWithLower: "This field must start with a lowercase letter",
      nullable: "",
      password:
        "The password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a digit, and a special character.",
      date: "This field must be a valid date",
      before: "The date must be before (:arg0)",
      after: "The date must be after (:arg0)",
      same: "This field must be identical to the value of the :arg0 field",
      requiredIf:
        "The :field field is required when the :arg0 field has the current value",
      requiredWhen:
        "The :field field is required when the :arg0 fields are present",
      phone: "This phone number seems to be invalid",
      time: "The :field field must be a valid time.",
      startWithLetter: "The :field field must start with a letter",
      endWithLetter: "The :field field must end with a letter",
      excludes: "The :field field must not contain :arg0.",
      hasLetter: "This field must contain at least one letter",
      regex: "This field is invalid.",
      lower: "This field must be lowercase",
      upper: "This field must be uppercase",
      fileBetween: "File size must be between :arg0 and :arg1",
      stringBetween:
        "The number of characters allowed must be between :arg0 and :arg1",
      modulo: "The value of :field field must be a multiple of :arg0",
      mod: "The value of :field field must be a multiple of :arg0",
      only: "The format of this field is not accepted, as it contains non-allowed characters",
      mimes: "This file format is not supported",
      digit: "This field must be a numeric value with exactly :arg0 digits",
      minDigit:
        "This field must be a numeric value with a minimum of :arg0 digits",
      maxDigit:
        "This field must be a numeric value with a maximum of :arg0 digits",
      lessThan: "This field must be a numeric value less than :arg0",
      lthan: "This field must be a numeric value less than :arg0",
      greaterThan: "This field must be a numeric value greater than :arg0",
      gthan: "This field must be a numeric value greater than :arg0",
    },
    V = class M {
      static getMessages(e) {
        e = e != null ? e : M.DEFAULT_LANG;
        let t = M._message[e];
        return t || (t = M._message[M.DEFAULT_LANG]), t;
      }
      static getRuleMessage(e, t) {
        var i;
        const r = M.getMessages(t);
        return (i = r[e]) != null ? i : r.default;
      }
      static addMessage(e, t, r) {
        if (t) {
          const i = M.getMessages(r);
          (i[e] = t), M.putMessages(i, r);
        }
      }
      static putMessages(e, t) {
        if (!e || Object.keys(e).length === 0)
          throw new Error("The 'messages' argument must be a non-empty object");
        t = t || M.DEFAULT_LANG;
        const r = M._message[t] || {},
          i = D(D({}, r), e);
        M._message[t] = i;
      }
      static translate(e, t) {
        if (typeof e != "string" || !e.length)
          throw new Error(
            "The first argument must be a string with one or more characters"
          );
        if (typeof t != "object" || typeof t === void 0)
          throw new Error(
            "The second argument must be a valid key/value pair object"
          );
        M._message[e] = D(D({}, M.getMessages(e)), t);
      }
      static rewrite(e, t, r) {
        M.addMessage(t, r, e);
      }
      static rewriteMany(e, t, r) {
        if (typeof e != "string" || !e.length)
          throw new Error(
            "The 'lang' argument must be a string with one or more characters"
          );
        if (!Array.isArray(t) || !Array.isArray(r))
          throw new Error(
            "The 'rules' and 'messages' arguments must be arrays"
          );
        if (t.length !== r.length)
          throw new Error(
            "The 'rules' and 'messages' arrays must have the same length"
          );
        for (let i = 0; i < t.length; i++) {
          const u = t[i],
            f = r[i];
          M.rewrite(e, u, f);
        }
      }
      static local(e) {
        if (!L(e) || !e.length)
          throw new Error("The language must be a valid string");
        M._useLang = e;
      }
      static getLocal() {
        var e;
        return (e = M._useLang) != null ? e : M.LANG;
      }
    };
  (V._useLang = null),
    (V.DEFAULT_LANG = "en"),
    (V.LANG = V.DEFAULT_LANG),
    (V._message = { en: dt });
  let C = V;
  const le = {
    invalidClass: "is-invalid",
    validClass: "",
    local: { lang: C.DEFAULT_LANG },
  };
  class mt {
    constructor(e) {
      this.messages = C.getMessages(e != null ? e : C.getLocal());
    }
    getRulesMessages(e) {
      const t = [];
      for (const r of e)
        this.messages[r]
          ? t.push(this.messages[r])
          : t.push("The input value is not valid");
      return t;
    }
    parseMessage(e, t, r, i) {
      const u = this._createParamObject(b(i != null ? i : ""));
      return (u.field = e), (r = this._replace(r, u)), r;
    }
    setMessages(e) {
      return (this.messages = D(D({}, this.messages), e)), this;
    }
    _replace(e, t) {
      for (const r in t)
        if (Object.prototype.hasOwnProperty.call(t, r)) {
          const i = t[r];
          e = e.replace(`:${r}`, i);
        }
      return (
        delete t.field, e.replace(/\.\.\.arg/, Object.values(t).join(", "))
      );
    }
    _createParamObject(e) {
      const t = {};
      for (let r = 0; r < e.length; r++) {
        const i = e[r],
          u = `arg${r}`;
        t[u] = i;
      }
      return t;
    }
  }
  class gt {
    constructor(e, t) {
      (this.rules = e),
        (this.messages = t),
        this._compensateMessages(),
        this._sanitizeMessage();
    }
    _compensateMessages() {
      var t;
      const e = this.rules.length;
      if (this.messages.length !== e)
        for (let r = 0; r < this.rules.length; r++) {
          const i = this.convertAcoladeGroupToArray(
            (t = this.messages[r]) != null ? t : ""
          );
          for (const u of i) this.messages[u] = this.messages[r];
        }
    }
    _sanitizeMessage() {
      const e = /{(\d+(?:,\s*\d+)*)}/g;
      this.messages = this.messages.map((t) => t.replace(e, ""));
    }
    convertAcoladeGroupToArray(e) {
      var i;
      const t = /{(\d+(?:,\s*\d+)*)}/g;
      return (i = [...e.matchAll(t)].map((u) =>
        u[1].split(",").map((f) => parseInt(f.trim()))
      )[0]) != null
        ? i
        : [];
    }
    getMessages() {
      return this.messages;
    }
  }
  class pt {
    constructor(e) {
      (this._nativeRules = [
        "required",
        "min",
        "max",
        "minlength",
        "maxlength",
      ]),
        (this._appliedRules = []),
        (this.inputElement = e),
        this.getNativeRulesApplied();
    }
    getNativeRulesApplied() {
      this._nativeRules.forEach((e) => {
        if (this.inputElement.hasAttribute(e)) {
          const t = this.inputElement.getAttribute(e);
          let r = e;
          t && (r = `${r}:${t}`), this._appliedRules.push(r);
        }
      });
    }
    merge(e) {
      const t = [...this._appliedRules];
      return (
        e.forEach((r) => {
          const i = t.findIndex((u) => u.startsWith(r.split(":")[0]));
          i !== -1 ? (t[i] = r) : t.push(r);
        }),
        t
      );
    }
  }
  class vt {
    constructor(e, t) {
      (this._passed = !1),
        (this.feedbackElement = null),
        (this.rules = []),
        (this.messages = {}),
        (this._errors = []),
        (this.name = ""),
        (this.showMessage = "first"),
        (this.showMessages = ["first", "full", "last"]),
        (this.validClass = ""),
        (this.invalidClass = "is-invalid"),
        (this.param = {
          emitEvent: !0,
          autoValidate: !0,
          failsOnfirst: !0,
          events: ["blur", "input", "change"],
          validClass: "",
          invalidClass: "is-invalid",
          type: "text",
        }),
        (this.validator = new Tt(this.param)),
        this.setInputElement(e),
        this._setParams(t),
        this.setRules(t == null ? void 0 : t.rules),
        this.setInputName(),
        this.setFeedbackElement(),
        this.setShowMessage(),
        this._setralidationClass(),
        this._setErrors(),
        this._setEvent(t == null ? void 0 : t.events),
        this.validator.setParams(this.param);
    }
    setRules(e) {
      var i;
      let t = (i = this.inputElement.dataset.trRules) != null ? i : "";
      if (t) {
        const u = t.split("|").filter((f) => f.length > 0);
        for (const f of u)
          if (I.hasRule(y(f).ruleName)) this.rules.push(f);
          else
            throw new Error(
              `The validation rule ${f} is not supported by Trivule`
            );
      }
      const r = new pt(this.inputElement);
      return (
        (this.rules = r.merge(e != null ? e : this.rules)),
        (this.param.rules = this.rules),
        this
      );
    }
    _setEvent(e) {
      const t = this.inputElement.dataset.trEvents;
      t &&
        (this.param.events = t.split("|").length
          ? t.split("|")
          : this.param.events),
        (this.param.events = e != null ? e : this.param.events);
    }
    setInputElement(e) {
      if (!(e instanceof Element)) {
        const t = document.querySelector(e);
        t && (e = t);
      }
      if (!(e instanceof Element))
        throw new Error(
          "The 'inputElement' parameter must be valide 'ValidatableInput' type."
        );
      (this.inputElement = e),
        (this.param.type = this.inputElement.type),
        this.inputElement.tagName.toLowerCase() === "textarea" &&
          (this.param.type = "text");
    }
    setInputName() {
      let e = this.inputElement.name;
      if (e == null || (typeof e == "string" && e.length < 0))
        throw new Error("The input name could not be empty or null");
      this.name = e;
      let t = this.name;
      this.inputElement.dataset.trName &&
        (t = this.inputElement.dataset.trName),
        (this.param.attribute = t);
    }
    set errors(e) {
      e && (this._errors = e != null ? e : []), this.showErrorMessages();
    }
    setFeedbackElement() {
      var i;
      let t = this.inputElement.parentElement,
        r = null;
      for (; t && !r; )
        (r = t.querySelector(`[data-tr-feedback='${this.name}']`)),
          (t = t.parentElement);
      (this.feedbackElement = r),
        (this.param.feedbackElement =
          (i = this.param.feedbackElement) != null ? i : r);
    }
    showErrorMessages() {
      if (
        (this.feedbackElement instanceof HTMLElement,
        this.feedbackElement instanceof HTMLElement)
      ) {
        let e = "";
        Array.isArray(this._errors) &&
          ((e = this._errors[0]),
          this.showMessage == "full"
            ? (e = this._errors.join("<br>"))
            : this.showMessage == "last" &&
              this._errors.length > 0 &&
              (e = this._errors[this._errors.length - 1])),
          (this.feedbackElement.innerHTML = e != null ? e : "");
      }
    }
    setShowMessage() {
      var e;
      (this.showMessage =
        (e = this.inputElement.dataset.trShow) != null ? e : "first"),
        (this.showMessage = this.showMessages.includes(this.showMessage)
          ? this.showMessage
          : "first");
    }
    _setralidationClass() {
      var e, t, r, i;
      (this.invalidClass =
        (e = this.inputElement.dataset.trInvalidClass) != null
          ? e
          : this.invalidClass),
        (this.validClass =
          (t = this.inputElement.dataset.trValidClass) != null
            ? t
            : this.validClass),
        (this.invalidClass =
          (r = this.param.invalidClass) != null ? r : this.invalidClass),
        (this.validClass =
          (i = this.param.validClass) != null ? i : this.validClass);
    }
    setralidationClass() {
      const e = this._passed,
        t = (i) => {
          i.length > 0 && this.inputElement.classList.remove(i);
        },
        r = (i) => {
          i.length > 0 && this.inputElement.classList.add(i);
        };
      e
        ? (this.invalidClass.split(" ").forEach(t),
          this.validClass.split(" ").forEach(r),
          this.inputElement.setAttribute("data-tr-valid", "1"))
        : (this.validClass.split(" ").forEach(t),
          this.invalidClass.split(" ").forEach(r),
          this.inputElement.setAttribute("data-tr-valid", "0"));
    }
    _setErrors(e) {
      var i;
      const t = this.inputElement.dataset.trMessages;
      let r = {};
      for (let u = 0; u < this.rules.length; u++) {
        let f =
          (i = t == null ? void 0 : t.split("|").map((R) => R.trim())) != null
            ? i
            : [];
        f && (f = new gt(this.rules, f).getMessages());
        const m = f !== void 0 ? f[u] : "",
          O = y(this.rules[u]).ruleName;
        typeof m == "string" && m.length > 0
          ? (r[O] = m)
          : (r[O] = C.getRuleMessage(O, C.getLocal()));
      }
      typeof e != "undefined" &&
      typeof e == "object" &&
      Object.values(e).length > 0
        ? (this.param.errors = e)
        : (this.param.errors = r);
    }
    getName() {
      return this.name;
    }
    getralue() {
      return this.inputElement.type.toLowerCase() == "file"
        ? this.inputElement.files
          ? this.inputElement.files[0]
          : null
        : this.inputElement.value;
    }
    _setParams(e) {
      typeof e == "object" &&
        typeof e != "undefined" &&
        (this.param = D(D({}, this.param), e));
    }
  }
  class bt extends vt {
    constructor(e, t) {
      super(e, t), (this._emitOnPasses = !0), (this._emitOnFails = !0);
    }
    validate(e = !0) {
      return (
        this.valid(),
        this.setralidationClass(),
        (this.errors = this.validator.getMessages()),
        e && this.emitChangeEvent(),
        this._passed
      );
    }
    getRules() {
      return this.rules;
    }
    hasRules() {
      return this.rules.length > 0;
    }
    getMessages() {
      return this.validator.getMessages();
    }
    valid() {
      return (
        (this.validator.value = this.getralue()),
        (this._passed = this.validator.passes())
      );
    }
    emit(e, t) {
      const r = new CustomEvent(e, { detail: t });
      this.inputElement.dispatchEvent(r);
    }
    on(e, t) {
      this.inputElement.addEventListener(e, t);
    }
    emitChangeEvent() {
      this.param.emitEvent &&
        (this._passed
          ? this._emitOnPasses &&
            (this.emit("tr.input.passes", {
              detail: {
                rules: this.rules,
                input: {},
                element: this.inputElement,
              },
            }),
            (this._emitOnPasses = !1),
            (this._emitOnFails = !0))
          : this._emitOnFails &&
            (this.emit("tr.input.fails", {
              detail: {
                rules: this.rules,
                input: {},
                element: this.inputElement,
              },
            }),
            (this._emitOnPasses = !0),
            (this._emitOnFails = !1)));
    }
    getErrors() {
      return this.validator.getErrors();
    }
    fails() {
      return !this.passes();
    }
    passes() {
      return this.valid();
    }
    __call(e, ...t) {
      typeof e == "function" && e(...t);
    }
  }
  class _t {
    constructor(e, t, r = null) {
      (this._value = this._trim(e)), (this.code = t), (this.attribute = r);
    }
    validateTG() {
      return /^(\+228|00228)\d{8}$/.test(this._value);
    }
    validateNE() {
      return /^(\+227|00227)\d{8}$/.test(this._value);
    }
    validateGW() {
      return /^(\+245|00245)\d{7,8}$/.test(this._value);
    }
    validateTD() {
      return /^(\+235|00235)\d{8}$/.test(this._value);
    }
    validateCM() {
      return /^(\+237|00237)\d{8}$/.test(this._value);
    }
    validateBF() {
      return /^(\+226|00226)\d{8}$/.test(this._value);
    }
    validateAO() {
      return /^(\+244|00244)[9,2][1-9]\d{7}$/.test(this._value);
    }
    validateBJ() {
      return /^(\+229|00229)\d{8}$/.test(this._value);
    }
    validateUS() {
      return /^(\+1|001)[2-9]\d{9}$/.test(this._value);
    }
    validateFR() {
      return /^(\+33|0033|0)[1-9](\d{2}){4}$/.test(this._value);
    }
    validPhoneNumber() {
      if (!(L(this._value) || p(this._value))) return !1;
      if (typeof this.code == "string") {
        const e = [],
          t = this.code.split(",").map((r) => r.trim().toUpperCase());
        for (const r of t) {
          const i = `validate${r}`,
            u = this[i];
          if (typeof u == "function") e.push(u.call(this));
          else throw new Error(`Validator method '${i}' does not exist.`);
        }
        return e.some((r) => r);
      }
      return this._validGlobally();
    }
    _validGlobally() {
      return /^(\+|00|0)[0-9]{1,3}[0-9]{1,4}[0-9]{6,13}$/.test(this._value);
    }
    _trim(e) {
      return (
        (e = typeof e != "string" ? e : String(e)),
        e.replace(/\s/g, "").replace(/-/g, "").replace(/\./g, "")
      );
    }
  }
  const wt = (s, e) => new _t(s, e).validPhoneNumber(),
    Me = class q {
      static rule(e, t, r, i) {
        q.addRule(e, t), q.addMessage(e, r, i);
      }
      static addRule(e, t) {
        q.rules[e] = t;
      }
      static addMessage(e, t, r) {
        C.addMessage(e, t, r);
      }
      static hasRule(e) {
        return e in q.rules;
      }
      static getRule(e) {
        return q.rules[e];
      }
      static getMessage(e, t) {
        return C.getRuleMessage(e, t);
      }
      static allRules() {
        return q.rules;
      }
      static allMessages(e) {
        return C.getMessages(e);
      }
    };
  Me.rules = {
    required: Z,
    email: Qe,
    maxlength: ie,
    minlength: re,
    min: be,
    max: _e,
    string: L,
    between: Ue,
    startWith: st,
    endWith: rt,
    contains: it,
    in: Ve,
    integer: we,
    int: we,
    modulo: ye,
    number: p,
    numeric: p,
    url: Xe,
    length: ne,
    len: ne,
    file: S,
    maxFileSize: K,
    minFileSize: ae,
    size: ze,
    boolean: Ge,
    startWithUpper: et,
    nullable: qe,
    startWithLower: tt,
    password: nt,
    date: me,
    before: ge,
    after: pe,
    phone: wt,
    time: je,
    startWithLetter: at,
    endWithLetter: lt,
    excludes: ot,
    hasLetter: ut,
    regex: He,
    lower: ft,
    upper: ht,
    stringBetween: ve,
    mod: ye,
    only: Ye,
    mimes: ct,
    digit: Ze,
    minDigit: Je,
    lessThan: Ee,
    lthan: Ee,
    maxDigit: Ke,
    greaterThan: Te,
    gthan: Te,
  };
  let I = Me;
  class ue extends bt {
    constructor(e, t) {
      super(e, t);
    }
    init() {
      var e;
      (e = this.param.events) == null ||
        e.forEach((t) => {
          this.inputElement.addEventListener(t, () => {
            this.validate();
          });
        });
    }
    rule(e, t, r) {
      I.rule(e, t, r);
    }
    with(e) {
      this._setParams(e), this.validator.setParams(this.param);
    }
    whereName(e) {
      return this.name === e;
    }
    onFails(e) {
      this.on("tr.input.fails", (t) => {
        this.__call(e);
      });
    }
    onPasses(e) {
      this.on("tr.input.passes", (t) => {
        this.__call(e);
      });
    }
    destroy() {
      var e;
      (e = this.param.events) == null ||
        e.forEach((t) => {
          this.inputElement.removeEventListener(t, () => {
            this.validate();
          });
        }),
        (this.param.events = []),
        (this.rules = []),
        (this.param.rules = []);
    }
    is(e) {
      return e === this.inputElement;
    }
  }
  class yt {
    constructor(e) {
      (this.form = e), (this.formRules = []);
    }
    getInputByName(e) {
      return this.form.querySelector(`[name=${e}]`);
    }
    getInputralueByName(e) {
      const t = this.getInputByName(e);
      return t ? t.value : void 0;
    }
    getFormRules() {
      return this.formRules;
    }
  }
  class Et extends yt {
    constructor(e) {
      super(e), this.register();
    }
    register() {
      this.formRules = [
        { ruleName: "same", call: this.same },
        { ruleName: "requiredIf", call: this.requiredIf },
        { ruleName: "requiredWhen", call: this.requiredWhen },
      ];
    }
    same(e, t) {
      return t ? e === this.getInputralueByName(t) : !1;
    }
    requiredIf(e, t) {
      const [r, ...i] = b(t != null ? t : "");
      if (r && i.length > 0) {
        const u = this.getInputralueByName(r);
        return i.includes(u) ? Z(e) : !0;
      }
      return !1;
    }
    requiredWhen(e, t) {
      const [r, ...i] = b(t != null ? t : "");
      return r && i.length > 0
        ? i.some((f) => Z(this.getInputralueByName(f)))
          ? Z(e)
          : !0
        : !1;
    }
  }
  class oe {
    constructor(e, t) {
      (this._passed = !1),
        (this._emitOnPasses = !0),
        (this._emitOnFails = !0),
        (this._trEnabledClass = "trEnabled"),
        (this._trDisabledClass = "trDisabled"),
        (this._triggerValidationEvents = ["change", "tr.form.updated"]),
        (this._trivuleInputs = []),
        (this.config = { auto: !0 }),
        this.setContainer(e),
        (this._formValidator = new Et(this.container)),
        this.setConfig(t),
        this._initTrivuleInputs();
    }
    setContainer(e) {
      if (!(e instanceof HTMLElement)) {
        const r = document.querySelector(e);
        r && (e = r);
      }
      if (!(e instanceof HTMLElement))
        throw new Error("The 'html container or html form' doesn't exist.");
      this.container = e;
      const t = this.container.querySelector("[data-tr-submit]");
      t && (this.submitButton = t);
    }
    init() {
      this.config.auto && (this.disableButton(), this.validateOnTrEvent()),
        this.emit("tr.form.init", this),
        this._onSubmit(),
        this.onFails((e) => {
          this.disableButton();
        }),
        this.onPasses((e) => {
          this.enableButton();
        });
    }
    disableButton() {
      var e;
      if (
        this.submitButton &&
        (this.submitButton.setAttribute("disabled", "true"),
        this._trDisabledClass)
      ) {
        const t = this._trEnabledClass.split(" ");
        for (const i of t) this.submitButton.classList.remove(i);
        this._trDisabledClass =
          (e = this.submitButton.dataset.trDisabledClass) != null
            ? e
            : "trDisabled";
        const r = this._trDisabledClass.split(" ");
        for (const i of r) this.submitButton.classList.add(i);
      }
    }
    enableButton() {
      var e;
      if (
        this.submitButton &&
        (this.submitButton.removeAttribute("disabled"), this._trEnabledClass)
      ) {
        const t = this._trDisabledClass.split(" ");
        for (const i of t) this.submitButton.classList.remove(i);
        this._trEnabledClass =
          (e = this.submitButton.dataset.trEnabledClass) != null
            ? e
            : "trEnabled";
        const r = this._trEnabledClass.split(" ");
        for (const i of r) this.submitButton.classList.add(i);
      }
    }
    validateOnTrEvent(e) {
      this.__call(e, this),
        this._triggerValidationEvents.forEach((t) => {
          this.on(t, (r) => {
            this._handle();
          });
        }),
        this._trivuleInputs.forEach((t) => {
          t.onFails(this._handle.bind(this)),
            t.onPasses(this._handle.bind(this));
        });
    }
    _handle() {
      (this._passed = this.isValid()),
        this._passed ? this._emitTrOnPassesEvent() : this._emitTrOnFailsEvent();
    }
    isValid() {
      return this._trivuleInputs.every((e) => e.passes());
    }
    passes() {
      return this.isValid();
    }
    _onSubmit() {
      this.submitButton &&
        this.submitButton.addEventListener("click", (e) => {
          if (!this._passed) {
            let t = [];
            for (const r of this._trivuleInputs) t.push(r.validate(!1));
            t.every((r) => r)
              ? this._emitTrOnPassesEvent()
              : (e.preventDefault(), this._emitTrOnFailsEvent());
          }
        });
    }
    rule(e, t, r) {
      I.rule(e, t, r);
    }
    setConfig(e) {
      var r, i;
      let t =
        ((r = document.querySelector("html")) == null
          ? void 0
          : r.getAttribute("data-tr-lang")) ||
        ((i = document.querySelector("html")) == null
          ? void 0
          : i.getAttribute("lang"));
      if (
        (this.container.dataset.trLang && (t = this.container.dataset.trLang),
        e &&
          typeof e == "object" &&
          ((this.config = D(D({}, this.config), e)), e.local))
      ) {
        const u = e.local;
        u.lang && (t = u.lang);
      }
      (C.LANG = t != null ? t : C.DEFAULT_LANG), this._syncRules();
    }
    on(e, t) {
      this.container.addEventListener(e, t);
    }
    emit(e, t) {
      const r = new CustomEvent(e, { detail: t });
      this.container.dispatchEvent(r);
    }
    onFails(e) {
      this.on("tr.form.fails", (t) => {
        this.__call(e, t.detail);
      });
    }
    onPasses(e) {
      this.on("tr.form.passes", (t) => {
        this.__call(e, t.detail);
      });
    }
    onValidate(e) {
      this.on("tr.form.validate", (t) => {
        this.__call(e, t.detail);
      });
    }
    observeChanges(e) {
      this.on("tr.form.updated", (t) => {
        this.destroyInputs(), this._initTrivuleInputs(), this.__call(e, this);
      });
    }
    update() {
      this.emit("tr.form.updated", this);
    }
    _initTrivuleInputs(e) {
      (this._trivuleInputs = []),
        (e =
          e || Array.from(this.container.querySelectorAll("[data-tr-rules]")));
      for (const t of e) {
        const r = new ue(t, {
          validClass: this.config.validClass,
          invalidClass: this.config.invalidClass,
        });
        r.init(), this._trivuleInputs.push(r);
      }
    }
    __call(e, ...t) {
      typeof e == "function" && e(...t);
    }
    destroy() {
      this.container.removeEventListener("submit", this._onSubmit),
        this._triggerValidationEvents
          .filter((t) => t !== "tr.form.updated")
          .forEach((t) => {
            this.container.removeEventListener(t, this._handle);
          }),
        this.destroyInputs(),
        (this._trivuleInputs = []),
        this.emit("tr.form.destroy");
    }
    _emitTrOnFailsEvent() {
      this._emitOnFails &&
        (this.emit("tr.form.fails", this),
        this.emit("tr.form.validate", this),
        (this._emitOnFails = !1),
        (this._emitOnPasses = !0));
    }
    _emitTrOnPassesEvent() {
      this._emitOnPasses &&
        (this.emit("tr.form.passes", this),
        this.emit("tr.form.validate", this),
        (this._emitOnPasses = !1),
        (this._emitOnFails = !0));
    }
    _syncRules() {
      this._formValidator.getFormRules().forEach((e) => {
        this.rule(e.ruleName, e.call.bind(this._formValidator));
      });
    }
    with(e, t) {
      const r = this._trivuleInputs.find((i) => i.whereName(e));
      if (r) {
        const i = this._trivuleInputs.indexOf(r);
        r.with(t), (this._trivuleInputs[i] = r);
      }
    }
    withMany(e) {
      for (const [t, r] of Object.entries(e)) this.with(t, r);
    }
    onInit(e) {
      this.on("tr.form.init", (t) => {
        this.__call(e, t.detail);
      });
    }
    onUpdate(e) {
      this.on("tr.form.updated", (t) => {
        this.__call(e, t.detail);
      });
    }
    destroyInputs() {
      for (const e of this._trivuleInputs) e.destroy();
    }
  }
  class $e {
    constructor() {
      this.config = le;
    }
    init(e) {
      this.setConfig(e),
        document.querySelectorAll("form").forEach((t) => {
          new oe(t).init();
        });
    }
    rule(e, t, r) {
      I.rule(e, t, r);
    }
    setConfig(e) {
      (this.config = le),
        e && typeof e == "object" && (this.config = D(D({}, this.config), e));
    }
    static Rule(e, t, r) {
      I.rule(e, t, r);
    }
  }
  class Tt {
    constructor(e) {
      (this._rulesToMap = ["min", "max", "between", "size"]),
        (this._rulesFromTypes = {
          min: {
            text: "minlength",
            file: "minFileSize",
            date: "beforeDate",
            "date-local": "beforeDate",
          },
          max: {
            text: "maxlength",
            file: "maxFileSize",
            date: "afterDate",
            "date-local": "afterDate",
          },
          between: {
            text: "stringBetween",
            file: "fileBetween",
            date: "dateBetween",
            "date-local": "dateBetween",
          },
          size: { text: "length" },
        }),
        (this._inputType = "text"),
        (this._rules = []),
        (this._value = void 0),
        (this._ruleExecuted = []),
        (this._failOnfirst = !0),
        (this._attr = ""),
        (this._trmessages = {}),
        e && this.setParams(e);
    }
    validate() {
      const e = this._rules;
      if (!Array.isArray(e))
        throw new Error("The rule provided must be an array of Rule");
      for (const t of e) {
        let { ruleName: r, params: i } = y(t),
          u = this._getRuleToRunName(r);
        const f = I.getRule(u),
          m = this._makeRuleExcutedInstance(u, r);
        if (((m.params = i), !f))
          throw new Error(`The rule ${r} is not defined`);
        if (
          (m.wasRunWith(this._value)
            ? (m.passed = m.passed)
            : ((m.passed = f(this._value, i)),
              (m.valueTested = this._value),
              (m.run = !0)),
          this._failOnfirst)
        ) {
          if (!m.passed) {
            this._parseRuleMessage(m), this._addRuleExecuted(m);
            break;
          }
        } else
          m.passed ? (m.message = "") : this._parseRuleMessage(m),
            this._addRuleExecuted(m);
      }
      return !this.hasErrors();
    }
    getErrors() {
      var t;
      const e = {};
      for (const r of this._ruleExecuted)
        r.passed || (e[r.orignalName] = (t = r.message) != null ? t : "");
      return e;
    }
    hasErrors() {
      return this._ruleExecuted.some((e) => !e.passed);
    }
    passes() {
      return !this.hasErrors();
    }
    setRules(e) {
      this._rules = e;
    }
    getRules() {
      return this._rules;
    }
    _makeRuleExcutedInstance(e, t) {
      let r = this._ruleExecuted.find((i) => i.isNamed(e));
      return r != null ? r : new Mt(e, t);
    }
    _addRuleExecuted(e) {
      this._ruleExecuted.includes(e) || this._ruleExecuted.push(e);
    }
    _parseRuleMessage(e) {
      const t = C.getRuleMessage(e.orignalName),
        r = this._trmessages[e.orignalName];
      r !== t
        ? (this._trmessages[e.ruleName] = r)
        : (this._trmessages[e.ruleName] = C.getRuleMessage(e.ruleName));
      const i = new mt().setMessages(this._trmessages),
        u = i.parseMessage(
          this._attr,
          e.ruleName,
          i.getRulesMessages([e.ruleName])[0],
          e.params
        );
      return (e.message = u), e;
    }
    getMessages() {
      return this._ruleExecuted.filter((t) => !t.passed).map((t) => t.message);
    }
    set value(e) {
      (this._value = e),
        this._rules.includes("nullable")
          ? (this._value || this._value === "0") && this.validate()
          : this.validate();
    }
    get value() {
      return this._value;
    }
    setParams(e) {
      var t, r, i, u;
      (this._attr = (t = e.attribute) != null ? t : ""),
        (this._failOnfirst = e.failsOnfirst !== void 0 && e.failsOnfirst),
        (this._rules = (r = e.rules) != null ? r : []),
        (this._trmessages = (i = e.errors) != null ? i : {}),
        (this._inputType = (u = e.type) != null ? u : this._inputType);
    }
    _getRuleToRunName(e) {
      let t = e;
      if (this._rulesToMap.includes(e)) {
        const r = this._rulesFromTypes[e];
        if (r) {
          const i = r[this._inputType];
          L(i) && i.length > 0 && (t = i);
        }
      }
      return t;
    }
  }
  class Mt {
    constructor(e, t) {
      (this.passed = !1),
        (this.message = null),
        (this.run = !1),
        (this.ruleName = e),
        (this.orignalName = t);
    }
    wasRunWith(e) {
      return this.valueTested === e && this.run;
    }
    isNamed(e) {
      return this.ruleName === e;
    }
  }
  typeof window != "undefined" &&
    ((window.TrivuleInput = (Ne = window.TrivuleInput) != null ? Ne : ue),
    (window.TrivuleForm = (Le = window.TrivuleForm) != null ? Le : oe),
    (window.Trivule = (Ce = window.Trivule) != null ? Ce : $e),
    (window.TrBag = (De = window.TrBag) != null ? De : I),
    (window.TrLocal = (Ae = window.TrLocal) != null ? Ae : C)),
    (w.TrBag = I),
    (w.TrConfig = le),
    (w.Trivule = $e),
    (w.TrivuleForm = oe),
    (w.TrivuleInput = ue),
    Object.defineProperty(w, Symbol.toStringTag, { value: "Module" });
});
