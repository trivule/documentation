var Ss = Object.defineProperty;
var Ve = Object.getOwnPropertySymbols;
var Ds = Object.prototype.hasOwnProperty,
  Rs = Object.prototype.propertyIsEnumerable;
var We = (_, y, b) =>
    y in _
      ? Ss(_, y, { enumerable: !0, configurable: !0, writable: !0, value: b })
      : (_[y] = b),
  S = (_, y) => {
    for (var b in y || (y = {})) Ds.call(y, b) && We(_, b, y[b]);
    if (Ve) for (var b of Ve(y)) Rs.call(y, b) && We(_, b, y[b]);
    return _;
  };
(function (_, y) {
  typeof exports == "object" && typeof module != "undefined"
    ? y(exports)
    : typeof define == "function" && define.amd
    ? define(["exports"], y)
    : ((_ = typeof globalThis != "undefined" ? globalThis : _ || self),
      y((_.trivule = {})));
})(this, function (_) {
  var Ae, Oe, Ie, Se, De;
  ("use strict");
  const y = (s) => {
      const e = /^(\w+):(.+)$/,
        t = s.match(e);
      if (t) {
        const r = t[1];
        let a = t[2];
        return { ruleName: r, params: a };
      } else {
        const [r, a] = s.split(":");
        return { ruleName: r, params: a };
      }
    },
    b = (s, e = ",") =>
      typeof s != "string" ? [] : s.split(e).map((t) => t.trim()),
    V = (s) => {
      throw new Error(`Please provide <<${s}>> rule arguments`);
    };
  function pe() {
    return new Date().toISOString();
  }
  function ve(s, e, t = null, r = !1) {
    if (!s) return t;
    let a = s.getAttribute(`data-${e}`);
    if (a && r)
      try {
        a = JSON.parse(a);
      } catch (u) {
        return t;
      }
    return a || (O(a) && a != null && a.length) ? a : t;
  }
  function R(s, e, t = null, r = !1) {
    return ve(s, `tr-${e}`, t, r);
  }
  class re {
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
  var ke =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
      ? global
      : typeof self != "undefined"
      ? self
      : {};
  function je(s) {
    return s &&
      s.__esModule &&
      Object.prototype.hasOwnProperty.call(s, "default")
      ? s.default
      : s;
  }
  var be = { exports: {} };
  (function (s, e) {
    (function (t, r) {
      s.exports = r();
    })(ke, function () {
      var t = 1e3,
        r = 6e4,
        a = 36e5,
        u = "millisecond",
        h = "second",
        v = "minute",
        $ = "hour",
        C = "day",
        N = "week",
        L = "month",
        Re = "quarter",
        F = "year",
        z = "date",
        xe = "Invalid Date",
        Cs =
          /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
        As =
          /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
        Os = {
          name: "en",
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_"
            ),
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_"
            ),
          ordinal: function (f) {
            var l = ["th", "st", "nd", "rd"],
              i = f % 100;
            return "[" + f + (l[(i - 20) % 10] || l[i] || l[0]) + "]";
          },
        },
        me = function (f, l, i) {
          var o = String(f);
          return !o || o.length >= l
            ? f
            : "" + Array(l + 1 - o.length).join(i) + f;
        },
        Is = {
          s: me,
          z: function (f) {
            var l = -f.utcOffset(),
              i = Math.abs(l),
              o = Math.floor(i / 60),
              n = i % 60;
            return (l <= 0 ? "+" : "-") + me(o, 2, "0") + ":" + me(n, 2, "0");
          },
          m: function f(l, i) {
            if (l.date() < i.date()) return -f(i, l);
            var o = 12 * (i.year() - l.year()) + (i.month() - l.month()),
              n = l.clone().add(o, L),
              c = i - n < 0,
              d = l.clone().add(o + (c ? -1 : 1), L);
            return +(-(o + (i - n) / (c ? n - d : d - n)) || 0);
          },
          a: function (f) {
            return f < 0 ? Math.ceil(f) || 0 : Math.floor(f);
          },
          p: function (f) {
            return (
              { M: L, y: F, w: N, d: C, D: z, h: $, m: v, s: h, ms: u, Q: Re }[
                f
              ] ||
              String(f || "")
                .toLowerCase()
                .replace(/s$/, "")
            );
          },
          u: function (f) {
            return f === void 0;
          },
        },
        Z = "en",
        W = {};
      W[Z] = Os;
      var Fe = "$isDayjsObject",
        ge = function (f) {
          return f instanceof se || !(!f || !f[Fe]);
        },
        ee = function f(l, i, o) {
          var n;
          if (!l) return Z;
          if (typeof l == "string") {
            var c = l.toLowerCase();
            W[c] && (n = c), i && ((W[c] = i), (n = c));
            var d = l.split("-");
            if (!n && d.length > 1) return f(d[0]);
          } else {
            var p = l.name;
            (W[p] = l), (n = p);
          }
          return !o && n && (Z = n), n || (!o && Z);
        },
        E = function (f, l) {
          if (ge(f)) return f.clone();
          var i = typeof l == "object" ? l : {};
          return (i.date = f), (i.args = arguments), new se(i);
        },
        m = Is;
      (m.l = ee),
        (m.i = ge),
        (m.w = function (f, l) {
          return E(f, { locale: l.$L, utc: l.$u, x: l.$x, $offset: l.$offset });
        });
      var se = (function () {
          function f(i) {
            (this.$L = ee(i.locale, null, !0)),
              this.parse(i),
              (this.$x = this.$x || i.x || {}),
              (this[Fe] = !0);
          }
          var l = f.prototype;
          return (
            (l.parse = function (i) {
              (this.$d = (function (o) {
                var n = o.date,
                  c = o.utc;
                if (n === null) return new Date(NaN);
                if (m.u(n)) return new Date();
                if (n instanceof Date) return new Date(n);
                if (typeof n == "string" && !/Z$/i.test(n)) {
                  var d = n.match(Cs);
                  if (d) {
                    var p = d[2] - 1 || 0,
                      w = (d[7] || "0").substring(0, 3);
                    return c
                      ? new Date(
                          Date.UTC(
                            d[1],
                            p,
                            d[3] || 1,
                            d[4] || 0,
                            d[5] || 0,
                            d[6] || 0,
                            w
                          )
                        )
                      : new Date(
                          d[1],
                          p,
                          d[3] || 1,
                          d[4] || 0,
                          d[5] || 0,
                          d[6] || 0,
                          w
                        );
                  }
                }
                return new Date(n);
              })(i)),
                this.init();
            }),
            (l.init = function () {
              var i = this.$d;
              (this.$y = i.getFullYear()),
                (this.$M = i.getMonth()),
                (this.$D = i.getDate()),
                (this.$W = i.getDay()),
                (this.$H = i.getHours()),
                (this.$m = i.getMinutes()),
                (this.$s = i.getSeconds()),
                (this.$ms = i.getMilliseconds());
            }),
            (l.$utils = function () {
              return m;
            }),
            (l.isValid = function () {
              return this.$d.toString() !== xe;
            }),
            (l.isSame = function (i, o) {
              var n = E(i);
              return this.startOf(o) <= n && n <= this.endOf(o);
            }),
            (l.isAfter = function (i, o) {
              return E(i) < this.startOf(o);
            }),
            (l.isBefore = function (i, o) {
              return this.endOf(o) < E(i);
            }),
            (l.$g = function (i, o, n) {
              return m.u(i) ? this[o] : this.set(n, i);
            }),
            (l.unix = function () {
              return Math.floor(this.valueOf() / 1e3);
            }),
            (l.valueOf = function () {
              return this.$d.getTime();
            }),
            (l.startOf = function (i, o) {
              var n = this,
                c = !!m.u(o) || o,
                d = m.p(i),
                p = function (j, A) {
                  var P = m.w(
                    n.$u ? Date.UTC(n.$y, A, j) : new Date(n.$y, A, j),
                    n
                  );
                  return c ? P : P.endOf(C);
                },
                w = function (j, A) {
                  return m.w(
                    n
                      .toDate()
                      [j].apply(
                        n.toDate("s"),
                        (c ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(A)
                      ),
                    n
                  );
                },
                T = this.$W,
                B = this.$M,
                D = this.$D,
                Y = "set" + (this.$u ? "UTC" : "");
              switch (d) {
                case F:
                  return c ? p(1, 0) : p(31, 11);
                case L:
                  return c ? p(1, B) : p(0, B + 1);
                case N:
                  var k = this.$locale().weekStart || 0,
                    J = (T < k ? T + 7 : T) - k;
                  return p(c ? D - J : D + (6 - J), B);
                case C:
                case z:
                  return w(Y + "Hours", 0);
                case $:
                  return w(Y + "Minutes", 1);
                case v:
                  return w(Y + "Seconds", 2);
                case h:
                  return w(Y + "Milliseconds", 3);
                default:
                  return this.clone();
              }
            }),
            (l.endOf = function (i) {
              return this.startOf(i, !1);
            }),
            (l.$set = function (i, o) {
              var n,
                c = m.p(i),
                d = "set" + (this.$u ? "UTC" : ""),
                p = ((n = {}),
                (n[C] = d + "Date"),
                (n[z] = d + "Date"),
                (n[L] = d + "Month"),
                (n[F] = d + "FullYear"),
                (n[$] = d + "Hours"),
                (n[v] = d + "Minutes"),
                (n[h] = d + "Seconds"),
                (n[u] = d + "Milliseconds"),
                n)[c],
                w = c === C ? this.$D + (o - this.$W) : o;
              if (c === L || c === F) {
                var T = this.clone().set(z, 1);
                T.$d[p](w),
                  T.init(),
                  (this.$d = T.set(z, Math.min(this.$D, T.daysInMonth())).$d);
              } else p && this.$d[p](w);
              return this.init(), this;
            }),
            (l.set = function (i, o) {
              return this.clone().$set(i, o);
            }),
            (l.get = function (i) {
              return this[m.p(i)]();
            }),
            (l.add = function (i, o) {
              var n,
                c = this;
              i = Number(i);
              var d = m.p(o),
                p = function (B) {
                  var D = E(c);
                  return m.w(D.date(D.date() + Math.round(B * i)), c);
                };
              if (d === L) return this.set(L, this.$M + i);
              if (d === F) return this.set(F, this.$y + i);
              if (d === C) return p(1);
              if (d === N) return p(7);
              var w = ((n = {}), (n[v] = r), (n[$] = a), (n[h] = t), n)[d] || 1,
                T = this.$d.getTime() + i * w;
              return m.w(T, this);
            }),
            (l.subtract = function (i, o) {
              return this.add(-1 * i, o);
            }),
            (l.format = function (i) {
              var o = this,
                n = this.$locale();
              if (!this.isValid()) return n.invalidDate || xe;
              var c = i || "YYYY-MM-DDTHH:mm:ssZ",
                d = m.z(this),
                p = this.$H,
                w = this.$m,
                T = this.$M,
                B = n.weekdays,
                D = n.months,
                Y = n.meridiem,
                k = function (A, P, K, te) {
                  return (A && (A[P] || A(o, c))) || K[P].slice(0, te);
                },
                J = function (A) {
                  return m.s(p % 12 || 12, A, "0");
                },
                j =
                  Y ||
                  function (A, P, K) {
                    var te = A < 12 ? "AM" : "PM";
                    return K ? te.toLowerCase() : te;
                  };
              return c.replace(As, function (A, P) {
                return (
                  P ||
                  (function (K) {
                    switch (K) {
                      case "YY":
                        return String(o.$y).slice(-2);
                      case "YYYY":
                        return m.s(o.$y, 4, "0");
                      case "M":
                        return T + 1;
                      case "MM":
                        return m.s(T + 1, 2, "0");
                      case "MMM":
                        return k(n.monthsShort, T, D, 3);
                      case "MMMM":
                        return k(D, T);
                      case "D":
                        return o.$D;
                      case "DD":
                        return m.s(o.$D, 2, "0");
                      case "d":
                        return String(o.$W);
                      case "dd":
                        return k(n.weekdaysMin, o.$W, B, 2);
                      case "ddd":
                        return k(n.weekdaysShort, o.$W, B, 3);
                      case "dddd":
                        return B[o.$W];
                      case "H":
                        return String(p);
                      case "HH":
                        return m.s(p, 2, "0");
                      case "h":
                        return J(1);
                      case "hh":
                        return J(2);
                      case "a":
                        return j(p, w, !0);
                      case "A":
                        return j(p, w, !1);
                      case "m":
                        return String(w);
                      case "mm":
                        return m.s(w, 2, "0");
                      case "s":
                        return String(o.$s);
                      case "ss":
                        return m.s(o.$s, 2, "0");
                      case "SSS":
                        return m.s(o.$ms, 3, "0");
                      case "Z":
                        return d;
                    }
                    return null;
                  })(A) ||
                  d.replace(":", "")
                );
              });
            }),
            (l.utcOffset = function () {
              return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
            }),
            (l.diff = function (i, o, n) {
              var c,
                d = this,
                p = m.p(o),
                w = E(i),
                T = (w.utcOffset() - this.utcOffset()) * r,
                B = this - w,
                D = function () {
                  return m.m(d, w);
                };
              switch (p) {
                case F:
                  c = D() / 12;
                  break;
                case L:
                  c = D();
                  break;
                case Re:
                  c = D() / 3;
                  break;
                case N:
                  c = (B - T) / 6048e5;
                  break;
                case C:
                  c = (B - T) / 864e5;
                  break;
                case $:
                  c = B / a;
                  break;
                case v:
                  c = B / r;
                  break;
                case h:
                  c = B / t;
                  break;
                default:
                  c = B;
              }
              return n ? c : m.a(c);
            }),
            (l.daysInMonth = function () {
              return this.endOf(L).$D;
            }),
            (l.$locale = function () {
              return W[this.$L];
            }),
            (l.locale = function (i, o) {
              if (!i) return this.$L;
              var n = this.clone(),
                c = ee(i, o, !0);
              return c && (n.$L = c), n;
            }),
            (l.clone = function () {
              return m.w(this.$d, this);
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
            f
          );
        })(),
        Pe = se.prototype;
      return (
        (E.prototype = Pe),
        [
          ["$ms", u],
          ["$s", h],
          ["$m", v],
          ["$H", $],
          ["$W", C],
          ["$M", L],
          ["$y", F],
          ["$D", z],
        ].forEach(function (f) {
          Pe[f[1]] = function (l) {
            return this.$g(l, f[0], f[1]);
          };
        }),
        (E.extend = function (f, l) {
          return f.$i || (f(l, se, E), (f.$i = !0)), E;
        }),
        (E.locale = ee),
        (E.isDayjs = ge),
        (E.unix = function (f) {
          return E(1e3 * f);
        }),
        (E.en = W[Z]),
        (E.Ls = W),
        (E.p = {}),
        E
      );
    });
  })(be);
  var qe = be.exports;
  const ae = je(qe),
    G = (s) => {
      const e = ae(new Date(s), void 0, !0);
      return s
        ? e.isValid()
          ? { passes: !0, value: e.toISOString(), type: "date" }
          : { passes: !1, value: s }
        : { passes: !1, value: s };
    },
    we = (s, e) => {
      if ((e === "now" && (e = pe()), !G(s).passes))
        return { passes: !1, value: s };
      if (!G(e).passes)
        throw new Error("Pease provide a valid argument for dateBefore rule");
      return { passes: ae(s).isBefore(e), value: s };
    },
    _e = (s, e) => {
      if ((e === "now" && (e = pe()), !G(s).passes))
        return { passes: !1, value: s };
      if (!G(e).passes)
        throw new Error("Pease provide a valid argument for dateAfter rule");
      return { passes: ae(s).isAfter(e), value: G(s).value };
    },
    ye = (s, e) => {
      e || V("dateBetween");
      const [t, r] = b(e != null ? e : "");
      return { passes: _e(s, t).passes && we(s, r).passes, value: s };
    },
    Ge = (s) => {
      if (s.split(":").length < 3) for (; s.split(":").length < 3; ) s += ":00";
      return {
        passes: /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/.test(s),
        value: s,
      };
    },
    Q = (s, ...e) => ({ passes: !!s && s !== "", value: s }),
    Ue = (s) => ({ passes: !0, value: s }),
    He = (s, e) => {
      e || V("in");
      const t = b(e);
      return { passes: t.includes(s), value: t };
    },
    ze = (s, e) =>
      U(s).passes
        ? { passes: X(s, e).passes, value: s, alias: "maxFileSize" }
        : { passes: le(s, e).passes, value: s, alias: "length" },
    Ye = (s) =>
      typeof s == "boolean"
        ? { passes: !0, value: !!s }
        : typeof s == "string" &&
          ((s = s.toLowerCase()),
          s === "true" ||
            s === "false" ||
            s === "0" ||
            s === "1" ||
            s === "yes" ||
            s === "no")
        ? { passes: !0, value: s == "true" || s == "1" || s == "yes" }
        : { passes: !1, value: s },
    Ze = (s, e, t) => {
      var [r, a] = b(e != null ? e : "");
      return t === "file"
        ? { passes: Te(s, e).passes, value: s, alias: "fileBetween" }
        : t == "date" || t == "date-local"
        ? { passes: ye(s, e).passes, value: s, alias: "dateBetween" }
        : t == "number" &&
          ((r = Number(r)),
          (a = Number(a)),
          s !== void 0 &&
            s !== Number &&
            s !== "" &&
            g(r).passes &&
            g(a).passes)
        ? g(s).passes
          ? {
              passes: he(s, a).passes && oe(s, r).passes,
              value: Number(s),
              alias: "numberBetween",
            }
          : { passes: !1, value: s }
        : { passes: Ee(s, e).passes, value: s, alias: "stringBetween" };
    },
    Je = (s, e) => {
      if (!e) throw new Error("The regex rule argument must not be empty");
      const t = new re(e);
      return { passes: new RegExp(t.replacePipes()).test(s), value: s };
    },
    Ke = (s, e) => {
      let t = !1;
      return (
        e === "string"
          ? !O(s).passes || s.length === 0
            ? (t = !1)
            : (t = !/\d/.test(s))
          : e === "number" && (t = g(s).passes),
        { passes: t, value: s }
      );
    },
    Qe = (s, e) => {
      if (!g(e).passes)
        throw new Error("Digit rule parameter must be a number");
      let t = !1;
      if (g(s).passes) {
        const r = String(s);
        t = /^\d+$/.test(r) && r.length === Number(e);
      }
      return { passes: t, value: s };
    },
    Xe = (s, e) => {
      if (!g(e).passes)
        throw new Error("Max_digit rule parameter must be a number");
      let t = !1;
      if (g(s).passes) {
        const r = String(s);
        t = /^\d+$/.test(r) && r.length <= Number(e);
      }
      return { passes: t, value: s };
    },
    es = (s, e, t) => {
      if (!g(e).passes)
        throw new Error("Min_digit rule parameter must be a number");
      let r = !1;
      if (g(s).passes) {
        const a = String(s);
        r = /^\d+$/.test(a) && a.length >= Number(e);
      }
      return { passes: r, value: s };
    },
    ss = (s, ...e) => ({
      passes:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          s
        ),
      value: s,
    }),
    ie = (s, e) => ({
      passes: O(s).passes ? s.length >= Number(e) : !1,
      value: s,
    }),
    ne = (s, e) => ({
      passes: O(s).passes ? s.length <= Number(e) : !0,
      value: s,
    }),
    O = (s) => ({ passes: typeof s == "string", value: s }),
    ts = (s) => ({ passes: /^(ftp|http|https):\/\/[^ "]+$/.test(s), value: s }),
    rs = (s, e = "EN") =>
      typeof s != "string" || s.length === 0
        ? { passes: !1, value: s }
        : { passes: /^[A-Z]/.test(s), value: s },
    as = (s) =>
      typeof s != "string" || s.length === 0 || s.charAt(0) === " "
        ? { passes: !1, value: s }
        : { passes: s[0] == s[0].toLocaleLowerCase(), value: s },
    is = (s, e) => {
      e || V("startWith");
      const t = b(e != null ? e : "");
      return O(s).passes
        ? { passes: t.some((r) => s.startsWith(r)), value: s }
        : { passes: !1, value: s };
    },
    ns = (s, e) => {
      e || V("endWith");
      const t = b(e != null ? e : "");
      return O(s).passes
        ? { passes: t.some((r) => s.endsWith(r)), value: s }
        : { passes: !1, value: s };
    },
    ls = (s, e) => {
      e || V("contains");
      const t = b(e != null ? e : "");
      return O(s).passes
        ? {
            passes: t.every((a) => s.includes(new re(a).replaceSpaces())),
            value: s,
          }
        : { passes: !1, value: s };
    },
    le = (s, e) => {
      if (!g(e).passes)
        throw new Error("The length rule argument must be an integer");
      (e = parseInt(e)),
        typeof s == "string" || typeof s == "number"
          ? (s = s.toString().split(""))
          : typeof s == "object" && s !== null && s !== void 0 && (s = []);
      let t = !1;
      return Array.isArray(s) && (t = s.length === e), { passes: t, value: s };
    },
    us = (s) => {
      const t = /[A-Z]/.test(s),
        r = /[a-z]/.test(s),
        a = /\d/.test(s),
        u = /[!@#$%^&*(),.?":{}|<>]/.test(s);
      return s.length < 8 || !t || !r || !a || !u
        ? { passes: !1, value: s }
        : { passes: !0, value: s };
    },
    os = (s) =>
      !O(s).passes || s.length === 0 || s.charAt(0) === " "
        ? { passes: !1, value: s }
        : { passes: !/^[0-9]/.test(s), value: s },
    hs = (s) =>
      !O(s).passes || s.length === 0
        ? { passes: !1, value: s }
        : { passes: !/[0-9]$/.test(s), value: s },
    fs = (s) =>
      typeof s != "string"
        ? { passes: !1, value: s }
        : { passes: !/^[0-9]$/.test(s), value: s },
    cs = (s, e) => {
      const t = b(e);
      return (
        t.length || V("excludes"),
        O(s).passes
          ? {
              passes: !t.some((r) => s.includes(new re(r).replaceSpaces())),
              value: s,
            }
          : { passes: !0, value: s }
      );
    },
    ds = (s, e) => ({ passes: s === s.toLocaleUpperCase(), value: s }),
    ms = (s, e) => ({ passes: s === s.toLocaleLowerCase(), value: s }),
    Ee = (s, e) => {
      const [t, r] = b(e != null ? e : "");
      return { passes: ie(s, t).passes && ne(s, r).passes, value: s };
    },
    U = (s) => ({ passes: s instanceof File || s instanceof Blob, value: s }),
    X = (s, e) => {
      if (U(s).passes) {
        const r = s.size;
        let a;
        const u =
          e == null ? void 0 : e.match(/^(\d+(\.\d+)?)\s*(B|KB|MB|GB)$/i);
        if (!u)
          throw new Error(
            "Invalid maxSize format. Please use valid format like '1KB', '1MB', etc."
          );
        const h = parseFloat(u[1]),
          v = u[3].toUpperCase();
        return (
          v === "KB"
            ? (a = h * 1024)
            : v === "MB"
            ? (a = h * 1024 * 1024)
            : v === "GB"
            ? (a = h * 1024 * 1024 * 1024)
            : (a = h),
          { passes: r <= a, value: s }
        );
      } else return { passes: !1, value: s };
    },
    ue = (s, e) => {
      if (U(s)) {
        const r = s.size;
        let a;
        const u =
          e == null ? void 0 : e.match(/^(\d+(\.\d+)?)\s*(B|KB|MB|GB)$/i);
        if (!u)
          throw new Error(
            "Invalid minSize format. Please use valid format like '1KB', '1MB', etc."
          );
        const h = parseFloat(u[1]),
          v = u[3].toUpperCase();
        return (
          v === "KB"
            ? (a = h * 1024)
            : v === "MB"
            ? (a = h * 1024 * 1024)
            : v === "GB"
            ? (a = h * 1024 * 1024 * 1024)
            : (a = h),
          { passes: r >= a, value: s }
        );
      } else return { passes: !1, value: s };
    },
    Te = (s, e) => {
      const [t, r] = b(e != null ? e : "");
      return { passes: X(s, r).passes && ue(s, t).passes, value: s };
    },
    gs = (s, e) => {
      var t;
      if ((e || V("mimes"), s instanceof File)) {
        const r = s;
        return {
          passes: ((t =
            e == null ? void 0 : e.split(",").map((h) => h.trim())) != null
            ? t
            : []
          ).some((h) => {
            if (((h = h.replace(/\s/g, "")), h === "*")) return !0;
            if (h.endsWith("/*")) {
              const v = h.slice(0, -2);
              return r.type.startsWith(v);
            } else if (h.startsWith("*.")) {
              const v = h.substring(2);
              return r.name.endsWith(v);
            } else return r.type === h;
          }),
          value: s,
        };
      } else return { passes: !1, value: s };
    },
    oe = (s, e, t) => {
      if (!g(e).passes)
        throw new Error("Min rule parameter must be an integer");
      return U(s).passes || t == "file"
        ? { passes: ue(s, e).passes, value: s }
        : (s == null && (s = 0),
          g(s).passes
            ? { passes: Number(s) >= Number(e), value: Number(s) }
            : { passes: ie(s, e).passes, value: s, alias: "minlength" });
    },
    he = (s, e, t) => {
      if (!g(e).passes)
        throw new Error("Min rule parameter must be an integer");
      return U(s).passes || t == "file"
        ? { passes: X(s, e).passes, value: s, alias: "maxFileSize" }
        : (s == null && (s = 0),
          g(s).passes
            ? { passes: Number(s) <= Number(e), value: Number(s) }
            : { passes: ne(s, e).passes, value: s, alias: "maxlength" });
    },
    Me = (s) => {
      const e = g(s);
      return e.passes
        ? {
            passes: Number.isInteger(e.value),
            value: parseInt(e.value),
            type: e.type,
          }
        : { passes: !1, value: s };
    },
    g = (s) =>
      s === "" || s === null || s === void 0
        ? { passes: !1, value: s }
        : s === "0" || s === 0
        ? { passes: !0, value: 0, type: "number" }
        : s === "1" || s === 1
        ? { passes: !0, value: 1, type: "number" }
        : {
            passes:
              !isNaN(Number(s)) &&
              typeof s != "boolean" &&
              typeof s != "object",
            value: Number(s),
            type: "number",
          },
    $e = (s, e) => {
      if (!g(e).passes)
        throw new Error("Modulo rule parameter must be an integer");
      return g(s).passes
        ? { passes: Number(s) % Number(e) === 0, value: Number(s) }
        : { passes: !1, value: s };
    },
    Ne = (s, e) => {
      if (!g(e).passes)
        throw new Error("Lessthan rule parameter must be a number");
      return g(s).passes
        ? { passes: Number(s) < Number(e), value: s }
        : { passes: !1, value: s };
    },
    Le = (s, e) => {
      if (!g(e).passes)
        throw new Error("Greaterthan rule parameter must be a number");
      return g(s).passes
        ? { passes: Number(s) > Number(e), value: s }
        : { passes: !1, value: s };
    },
    ps = (s, e) => {
      if (!g(s).passes) return { passes: !1, value: s };
      const [t, r] = b(e),
        a = Number(s);
      return { passes: oe(s, t).passes && he(s, r).passes, value: a };
    },
    vs = {
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
      dateBetween: "The date must be between :arg0 and :arg1",
      numberBetween:
        "This field must be a numeric value between :arg0 and :arg1",
    },
    H = class M {
      static getMessages(e) {
        e = e != null ? e : M.DEFAULT_LANG;
        let t = M._message[e];
        return t || (t = M._message[M.DEFAULT_LANG]), t;
      }
      static getRuleMessage(e, t) {
        var a;
        const r = M.getMessages(t);
        return (a = r[e]) != null ? a : r.default;
      }
      static addMessage(e, t, r) {
        if (t) {
          const a = M.getMessages(r);
          (a[e] = t), M.putMessages(a, r);
        }
      }
      static putMessages(e, t) {
        if (!e || Object.keys(e).length === 0)
          throw new Error("The 'messages' argument must be a non-empty object");
        t = t || M.DEFAULT_LANG;
        const r = M._message[t] || {},
          a = S(S({}, r), e);
        M._message[t] = a;
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
        M._message[e] = S(S({}, M.getMessages(e)), t);
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
        for (let a = 0; a < t.length; a++) {
          const u = t[a],
            h = r[a];
          M.rewrite(e, u, h);
        }
      }
      static local(e) {
        if (!O(e) || !e.length)
          throw new Error("The language must be a valid string");
        M._useLang = e;
      }
      static getLocal() {
        var e;
        return (e = M._useLang) != null ? e : M.LANG;
      }
    };
  (H._useLang = null),
    (H.DEFAULT_LANG = "en"),
    (H.LANG = H.DEFAULT_LANG),
    (H._message = { en: vs });
  let I = H;
  const fe = {
    invalidClass: "is-invalid",
    validClass: "",
    local: { lang: I.DEFAULT_LANG },
  };
  class bs {
    constructor(e) {
      this.messages = I.getMessages(e != null ? e : I.getLocal());
    }
    getRulesMessages(e) {
      const t = [];
      for (const r of e)
        this.messages[r]
          ? t.push(this.messages[r])
          : t.push("The input value is not valid");
      return t;
    }
    parseMessage(e, t, r, a) {
      const u = this._createParamObject(b(a != null ? a : ""));
      return (u.field = e), (r = this._replace(r, u)), r;
    }
    setMessages(e) {
      return (this.messages = S(S({}, this.messages), e)), this;
    }
    _replace(e, t) {
      for (const r in t)
        if (Object.prototype.hasOwnProperty.call(t, r)) {
          const a = t[r];
          e = e.replace(`:${r}`, a);
        }
      return (
        delete t.field, e.replace(/\.\.\.arg/, Object.values(t).join(", "))
      );
    }
    _createParamObject(e) {
      const t = {};
      for (let r = 0; r < e.length; r++) {
        const a = e[r],
          u = `arg${r}`;
        t[u] = a;
      }
      return t;
    }
  }
  class ws {
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
          const a = this.convertAcoladeGroupToArray(
            (t = this.messages[r]) != null ? t : ""
          );
          for (const u of a) this.messages[u] = this.messages[r];
        }
    }
    _sanitizeMessage() {
      const e = /{(\d+(?:,\s*\d+)*)}/g;
      this.messages = this.messages.map((t) => t.replace(e, ""));
    }
    convertAcoladeGroupToArray(e) {
      var a;
      const t = /{(\d+(?:,\s*\d+)*)}/g;
      return (a = [...e.matchAll(t)].map((u) =>
        u[1].split(",").map((h) => parseInt(h.trim()))
      )[0]) != null
        ? a
        : [];
    }
    getMessages() {
      return this.messages;
    }
  }
  class _s {
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
          const a = t.findIndex((u) => u.startsWith(r.split(":")[0]));
          a !== -1 ? (t[a] = r) : t.push(r);
        }),
        t
      );
    }
  }
  class ys {
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
        (this.validator = new Ls(this.param)),
        this.setInputElement(e),
        this._setParams(t),
        this.setRules(t == null ? void 0 : t.rules),
        this.setInputName(),
        this.setFeedbackElement(),
        this.setShowMessage(),
        this._setTrValidationClass(),
        this._setErrors(),
        this._setEvent(t == null ? void 0 : t.events),
        this.validator.setParams(this.param);
    }
    setRules(e) {
      let t = R(this.inputElement, "rules", this.param.rules);
      if (t) {
        const a = t.split("|").filter((u) => u.length > 0);
        for (const u of a)
          if (x.hasRule(y(u).ruleName)) this.rules.push(u);
          else
            throw new Error(
              `The validation rule ${u} is not supported by Trivule`
            );
      }
      const r = new _s(this.inputElement);
      return (
        (this.rules = r.merge(e != null ? e : this.rules)),
        (this.param.rules = this.rules),
        this
      );
    }
    _setEvent(e) {
      const t = R(this.inputElement, "events", "");
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
      var r;
      let e = this.inputElement.name;
      if (e == null || (typeof e == "string" && e.length < 0))
        throw new Error("The input name could not be empty or null");
      this.name = e;
      let t = (r = R(this.inputElement, "name")) != null ? r : this.name;
      this.param.attribute = t;
    }
    set errors(e) {
      e && (this._errors = e != null ? e : []), this.showErrorMessages();
    }
    setFeedbackElement() {
      var a;
      let t = this.inputElement.parentElement,
        r = null;
      for (; t && !r; )
        (r = t.querySelector(`[data-tr-feedback='${this.name}']`)),
          (t = t.parentElement);
      (this.feedbackElement = r),
        (this.param.feedbackElement =
          (a = this.param.feedbackElement) != null ? a : r);
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
      (this.showMessage = R(this.inputElement, "show", "first")),
        (this.showMessage = this.showMessages.includes(this.showMessage)
          ? this.showMessage
          : "first");
    }
    _setTrValidationClass() {
      var e, t;
      (this.invalidClass =
        (e = this.param.invalidClass) != null ? e : this.invalidClass),
        (this.validClass =
          (t = this.param.validClass) != null ? t : this.validClass),
        (this.invalidClass = R(
          this.inputElement,
          "invalid-class",
          this.invalidClass
        )),
        (this.validClass = R(
          this.inputElement,
          "valid-class",
          this.validClass
        ));
    }
    setralidationClass() {
      const e = this._passed,
        t = (a) => {
          a.length > 0 && this.inputElement.classList.remove(a);
        },
        r = (a) => {
          a.length > 0 && this.inputElement.classList.add(a);
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
      var a;
      const t = R(this.inputElement, "messages", "");
      let r = {};
      for (let u = 0; u < this.rules.length; u++) {
        let h =
          (a = t == null ? void 0 : t.split("|").map((C) => C.trim())) != null
            ? a
            : [];
        h && (h = new ws(this.rules, h).getMessages());
        const v = h !== void 0 ? h[u] : "",
          $ = y(this.rules[u]).ruleName;
        typeof v == "string" && v.length > 0
          ? (r[$] = v)
          : (r[$] = I.getRuleMessage($, I.getLocal()));
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
    getValue() {
      return this.inputElement.type.toLowerCase() == "file"
        ? this.inputElement.files
          ? this.inputElement.files[0]
          : null
        : this.inputElement.value;
    }
    _setParams(e) {
      typeof e == "object" &&
        typeof e != "undefined" &&
        (this.param = S(S({}, this.param), e));
      const t = ve(this.inputElement, "tr", null, !0);
      t && (this.param = Object.assign(this.param, t));
    }
  }
  class Es extends ys {
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
        (this.validator.value = this.getValue()),
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
    getRuleExecuted() {
      return this.validator.getRuleExecuted();
    }
  }
  class Ts {
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
      if (!(O(this._value) || g(this._value))) return !1;
      if (typeof this.code == "string") {
        const e = [],
          t = this.code.split(",").map((r) => r.trim().toUpperCase());
        for (const r of t) {
          const a = `validate${r}`,
            u = this[a];
          if (typeof u == "function") e.push(u.call(this));
          else throw new Error(`Validator method '${a}' does not exist.`);
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
  const Ms = (s, e) => ({ passes: new Ts(s, e).validPhoneNumber(), value: s }),
    Be = class q {
      static rule(e, t, r, a) {
        q.addRule(e, t), q.addMessage(e, r, a);
      }
      static addRule(e, t) {
        q.rules[e] = t;
      }
      static addMessage(e, t, r) {
        I.addMessage(e, t, r);
      }
      static hasRule(e) {
        return e in q.rules;
      }
      static getRule(e) {
        return q.rules[e];
      }
      static getMessage(e, t) {
        return I.getRuleMessage(e, t);
      }
      static allRules() {
        return q.rules;
      }
      static allMessages(e) {
        return I.getMessages(e);
      }
    };
  Be.rules = {
    required: Q,
    email: ss,
    maxlength: ne,
    minlength: ie,
    min: oe,
    max: he,
    string: O,
    between: Ze,
    startWith: is,
    endWith: ns,
    contains: ls,
    in: He,
    integer: Me,
    int: Me,
    modulo: $e,
    number: g,
    numeric: g,
    url: ts,
    length: le,
    len: le,
    file: U,
    maxFileSize: X,
    minFileSize: ue,
    size: ze,
    boolean: Ye,
    startWithUpper: rs,
    nullable: Ue,
    startWithLower: as,
    password: us,
    date: G,
    before: we,
    after: _e,
    phone: Ms,
    time: Ge,
    startWithLetter: os,
    endWithLetter: hs,
    excludes: cs,
    hasLetter: fs,
    regex: Je,
    lower: ms,
    upper: ds,
    stringBetween: Ee,
    mod: $e,
    only: Ke,
    mimes: gs,
    digit: Qe,
    minDigit: es,
    lessThan: Ne,
    lthan: Ne,
    maxDigit: Xe,
    greaterThan: Le,
    gthan: Le,
    fileBetween: Te,
    dateBetween: ye,
    numberBetween: ps,
  };
  let x = Be;
  class ce extends Es {
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
      x.rule(e, t, r);
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
  class $s {
    constructor(e) {
      (this.form = e), (this.formRules = []);
    }
    getInputByName(e) {
      return this.form.querySelector(`[name=${e}]`);
    }
    getInpuTrValueByName(e) {
      const t = this.getInputByName(e);
      return t ? t.value : void 0;
    }
    getFormRules() {
      return this.formRules;
    }
  }
  class Ns extends $s {
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
      return t
        ? { passes: e === this.getInpuTrValueByName(t), value: e }
        : { passes: !1, value: e };
    }
    requiredIf(e, t) {
      const [r, ...a] = b(t != null ? t : "");
      if (r && a.length > 0) {
        const u = this.getInpuTrValueByName(r);
        return a.includes(u) ? Q(e) : { passes: !0, value: e };
      }
      return { passes: !1, value: e };
    }
    requiredWhen(e, t) {
      const [r, ...a] = b(t != null ? t : "");
      return r && a.length > 0
        ? a.some((h) => Q(this.getInpuTrValueByName(h)).passes)
          ? Q(e)
          : { passes: !0, value: e }
        : { passes: !1, value: e };
    }
  }
  class de {
    constructor(e, t) {
      (this._passed = !1),
        (this._emitOnPasses = !0),
        (this._emitOnFails = !0),
        (this._trEnabledClass = "enabled-class"),
        (this._trDisabledClass = "tr-disabled"),
        (this._triggerValidationEvents = ["change", "tr.form.updated"]),
        (this._trivuleInputs = []),
        (this.config = { auto: !0 }),
        this.setContainer(e),
        (this._formValidator = new Ns(this.container)),
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
      if (
        this.submitButton &&
        (this.submitButton.setAttribute("disabled", "true"),
        this._trDisabledClass)
      ) {
        const e = this._trEnabledClass.split(" ");
        for (const r of e) this.submitButton.classList.remove(r);
        this._trDisabledClass = R(
          this.submitButton,
          "disabled-class",
          this._trDisabledClass
        );
        const t = this._trDisabledClass.split(" ");
        for (const r of t) this.submitButton.classList.add(r);
      }
    }
    enableButton() {
      if (
        this.submitButton &&
        (this.submitButton.removeAttribute("disabled"), this._trEnabledClass)
      ) {
        const e = this._trDisabledClass.split(" ");
        for (const r of e) this.submitButton.classList.remove(r);
        this._trEnabledClass = R(
          this.submitButton,
          "enabled-class",
          this._trEnabledClass
        );
        const t = this._trEnabledClass.split(" ");
        for (const r of t) this.submitButton.classList.add(r);
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
    inputs(e = !0) {
      return e
        ? this._trivuleInputs.map(this.getInputsMap)
        : this._trivuleInputs;
    }
    validated(e = !1) {
      return e
        ? this._trivuleInputs.filter((t) => t.passes()).map(this.getInputsMap)
        : this._trivuleInputs.filter((t) => t.passes());
    }
    failed(e = !1) {
      return e
        ? this._trivuleInputs.filter((t) => t.fails()).map(this.getInputsMap)
        : this._trivuleInputs.filter((t) => t.fails());
    }
    getInputsMap(e) {
      return {
        name: e.getName(),
        value: e.getValue(),
        valid: e.passes(),
        rules: e.getRules(),
        ruleExecuted: e
          .getRuleExecuted()
          .map((t) => ({ rule: t.ruleName, passed: t.passed })),
      };
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
      x.rule(e, t, r);
    }
    setConfig(e) {
      var r;
      let t =
        R(document.querySelector("html"), "lang") ||
        ((r = document.querySelector("html")) == null
          ? void 0
          : r.getAttribute("lang"));
      if (
        ((t = R(this.container, "lang", t)),
        e &&
          typeof e == "object" &&
          ((this.config = S(S({}, this.config), e)), e.local))
      ) {
        const a = e.local;
        a.lang && (t = a.lang);
      }
      (I.LANG = t != null ? t : I.DEFAULT_LANG), this._syncRules();
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
        const r = new ce(t, {
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
        (this._emitOnFails = !1),
        (this._emitOnPasses = !0)),
        this.emit("tr.form.validate", this);
    }
    _emitTrOnPassesEvent() {
      this._emitOnPasses &&
        (this.emit("tr.form.passes", this),
        (this._emitOnPasses = !1),
        (this._emitOnFails = !0)),
        this.emit("tr.form.validate", this);
    }
    _syncRules() {
      this._formValidator.getFormRules().forEach((e) => {
        this.rule(e.ruleName, e.call.bind(this._formValidator));
      });
    }
    with(e, t) {
      const r = this._trivuleInputs.find((a) => a.whereName(e));
      if (r) {
        const a = this._trivuleInputs.indexOf(r);
        r.with(t), (this._trivuleInputs[a] = r);
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
  class Ce {
    constructor() {
      (this._trForms = []), (this.config = fe);
    }
    init(e) {
      this.setConfig(e),
        document.querySelectorAll("form").forEach((t) => {
          const r = new de(t, this.config);
          r.init(), this._trForms.push(r);
        });
    }
    rule(e, t, r) {
      x.rule(e, t, r);
    }
    forms() {
      return this._trForms;
    }
    setConfig(e) {
      (this.config = fe),
        e && typeof e == "object" && (this.config = S(S({}, this.config), e));
    }
    static Rule(e, t, r) {
      x.rule(e, t, r);
    }
  }
  class Ls {
    constructor(e) {
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
      var r, a;
      const e = this._rules;
      if (!Array.isArray(e))
        throw new Error("The rule provided must be an array of Rule");
      let t = this._inputType;
      for (const u of e) {
        let { ruleName: h, params: v } = y(u),
          $ = h;
        const C = x.getRule($),
          N = this._makeRuleExcutedInstance($, h);
        if (((N.params = v), !C))
          throw new Error(`The rule ${h} is not defined`);
        const L = C(this._value, v, t);
        if (
          ((N.passed = L.passes),
          (this._value = L.value),
          (t = (r = L.type) != null ? r : t),
          ($ = (a = L.alias) != null ? a : h),
          (N.valueTested = this._value),
          (N.run = !0),
          this._failOnfirst)
        ) {
          if (!N.passed) {
            this._parseRuleMessage(N, $), this._addRuleExecuted(N);
            break;
          }
        } else
          N.passed ? (N.message = "") : this._parseRuleMessage(N, $),
            this._addRuleExecuted(N);
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
      let r = this._ruleExecuted.find((a) => a.isNamed(e));
      return r != null ? r : new Bs(e, t);
    }
    _addRuleExecuted(e) {
      this._ruleExecuted.includes(e) || this._ruleExecuted.push(e);
    }
    _parseRuleMessage(e, t) {
      const r = I.getRuleMessage(e.orignalName),
        a = this._trmessages[e.orignalName];
      a !== r
        ? (this._trmessages[e.ruleName] = a)
        : (this._trmessages[e.ruleName] = I.getRuleMessage(
            t != null ? t : e.ruleName
          ));
      const u = new bs().setMessages(this._trmessages),
        h = u.parseMessage(
          this._attr,
          e.ruleName,
          u.getRulesMessages([e.ruleName])[0],
          e.params
        );
      return (e.message = h), e;
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
      var t, r, a, u;
      (this._attr = (t = e.attribute) != null ? t : ""),
        (this._failOnfirst = e.failsOnfirst !== void 0 && e.failsOnfirst),
        (this._rules = (r = e.rules) != null ? r : []),
        (this._trmessages = (a = e.errors) != null ? a : {}),
        (this._inputType = (u = e.type) != null ? u : this._inputType);
    }
    getRuleExecuted() {
      return this._ruleExecuted;
    }
  }
  class Bs {
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
    ((window.TrivuleInput = (Ae = window.TrivuleInput) != null ? Ae : ce),
    (window.TrivuleForm = (Oe = window.TrivuleForm) != null ? Oe : de),
    (window.Trivule = (Ie = window.Trivule) != null ? Ie : Ce),
    (window.TrBag = (Se = window.TrBag) != null ? Se : x),
    (window.TrLocal = (De = window.TrLocal) != null ? De : I)),
    (_.TrBag = x),
    (_.TrConfig = fe),
    (_.Trivule = Ce),
    (_.TrivuleForm = de),
    (_.TrivuleInput = ce),
    Object.defineProperty(_, Symbol.toStringTag, { value: "Module" });
});
