(function (M, y) {
  typeof exports == "object" && typeof module != "undefined"
    ? y(exports)
    : typeof define == "function" && define.amd
    ? define(["exports"], y)
    : ((M = typeof globalThis != "undefined" ? globalThis : M || self),
      y((M.quickv = {})));
})(this, function (M) {
  var be, we, ye;
  ("use strict");
  var mt = Object.defineProperty;
  var Te = Object.getOwnPropertySymbols;
  var gt = Object.prototype.hasOwnProperty,
    vt = Object.prototype.propertyIsEnumerable;
  var qe = (M, y, _) =>
      y in M
        ? mt(M, y, { enumerable: !0, configurable: !0, writable: !0, value: _ })
        : (M[y] = _),
    C = (M, y) => {
      for (var _ in y || (y = {})) gt.call(y, _) && qe(M, _, y[_]);
      if (Te) for (var _ of Te(y)) vt.call(y, _) && qe(M, _, y[_]);
      return M;
    };
  const y = (t) => {
      const e = /^(\w+):(.+)$/,
        s = t.match(e);
      if (s) {
        const i = s[1];
        let r = s[2];
        return { ruleName: i, params: r };
      } else {
        const [i, r] = t.split(":");
        return { ruleName: i, params: r };
      }
    },
    _ = (t, e = ",") =>
      typeof t != "string" ? [] : t.split(e).map((s) => s.trim()),
    j = (t) => {
      throw new Error(`Please provide <<${t}>> rule arguments`);
    };
  function oe() {
    return new Date().toISOString();
  }
  var Le =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
      ? global
      : typeof self != "undefined"
      ? self
      : {};
  function Ce(t) {
    return t &&
      t.__esModule &&
      Object.prototype.hasOwnProperty.call(t, "default")
      ? t.default
      : t;
  }
  var ue = { exports: {} };
  (function (t, e) {
    (function (s, i) {
      t.exports = i();
    })(Le, function () {
      var s = 1e3,
        i = 6e4,
        r = 36e5,
        o = "millisecond",
        m = "second",
        f = "minute",
        D = "hour",
        N = "day",
        Y = "week",
        A = "month",
        Ee = "quarter",
        B = "year",
        W = "date",
        Me = "Invalid Date",
        ht =
          /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
        dt =
          /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
        ct = {
          name: "en",
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_"
            ),
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_"
            ),
          ordinal: function (u) {
            var l = ["th", "st", "nd", "rd"],
              n = u % 100;
            return "[" + u + (l[(n - 20) % 10] || l[n] || l[0]) + "]";
          },
        },
        ne = function (u, l, n) {
          var h = String(u);
          return !h || h.length >= l
            ? u
            : "" + Array(l + 1 - h.length).join(n) + u;
        },
        ft = {
          s: ne,
          z: function (u) {
            var l = -u.utcOffset(),
              n = Math.abs(l),
              h = Math.floor(n / 60),
              a = n % 60;
            return (l <= 0 ? "+" : "-") + ne(h, 2, "0") + ":" + ne(a, 2, "0");
          },
          m: function u(l, n) {
            if (l.date() < n.date()) return -u(n, l);
            var h = 12 * (n.year() - l.year()) + (n.month() - l.month()),
              a = l.clone().add(h, A),
              c = n - a < 0,
              d = l.clone().add(h + (c ? -1 : 1), A);
            return +(-(h + (n - a) / (c ? a - d : d - a)) || 0);
          },
          a: function (u) {
            return u < 0 ? Math.ceil(u) || 0 : Math.floor(u);
          },
          p: function (u) {
            return (
              { M: A, y: B, w: Y, d: N, D: W, h: D, m: f, s: m, ms: o, Q: Ee }[
                u
              ] ||
              String(u || "")
                .toLowerCase()
                .replace(/s$/, "")
            );
          },
          u: function (u) {
            return u === void 0;
          },
        },
        k = "en",
        V = {};
      V[k] = ct;
      var ae = function (u) {
          return u instanceof K;
        },
        Z = function u(l, n, h) {
          var a;
          if (!l) return k;
          if (typeof l == "string") {
            var c = l.toLowerCase();
            V[c] && (a = c), n && ((V[c] = n), (a = c));
            var d = l.split("-");
            if (!a && d.length > 1) return u(d[0]);
          } else {
            var v = l.name;
            (V[v] = l), (a = v);
          }
          return !h && a && (k = a), a || (!h && k);
        },
        E = function (u, l) {
          if (ae(u)) return u.clone();
          var n = typeof l == "object" ? l : {};
          return (n.date = u), (n.args = arguments), new K(n);
        },
        g = ft;
      (g.l = Z),
        (g.i = ae),
        (g.w = function (u, l) {
          return E(u, { locale: l.$L, utc: l.$u, x: l.$x, $offset: l.$offset });
        });
      var K = (function () {
          function u(n) {
            (this.$L = Z(n.locale, null, !0)), this.parse(n);
          }
          var l = u.prototype;
          return (
            (l.parse = function (n) {
              (this.$d = (function (h) {
                var a = h.date,
                  c = h.utc;
                if (a === null) return new Date(NaN);
                if (g.u(a)) return new Date();
                if (a instanceof Date) return new Date(a);
                if (typeof a == "string" && !/Z$/i.test(a)) {
                  var d = a.match(ht);
                  if (d) {
                    var v = d[2] - 1 || 0,
                      b = (d[7] || "0").substring(0, 3);
                    return c
                      ? new Date(
                          Date.UTC(
                            d[1],
                            v,
                            d[3] || 1,
                            d[4] || 0,
                            d[5] || 0,
                            d[6] || 0,
                            b
                          )
                        )
                      : new Date(
                          d[1],
                          v,
                          d[3] || 1,
                          d[4] || 0,
                          d[5] || 0,
                          d[6] || 0,
                          b
                        );
                  }
                }
                return new Date(a);
              })(n)),
                (this.$x = n.x || {}),
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
              return this.$d.toString() !== Me;
            }),
            (l.isSame = function (n, h) {
              var a = E(n);
              return this.startOf(h) <= a && a <= this.endOf(h);
            }),
            (l.isAfter = function (n, h) {
              return E(n) < this.startOf(h);
            }),
            (l.isBefore = function (n, h) {
              return this.endOf(h) < E(n);
            }),
            (l.$g = function (n, h, a) {
              return g.u(n) ? this[h] : this.set(a, n);
            }),
            (l.unix = function () {
              return Math.floor(this.valueOf() / 1e3);
            }),
            (l.valueOf = function () {
              return this.$d.getTime();
            }),
            (l.startOf = function (n, h) {
              var a = this,
                c = !!g.u(h) || h,
                d = g.p(n),
                v = function (P, q) {
                  var x = g.w(
                    a.$u ? Date.UTC(a.$y, q, P) : new Date(a.$y, q, P),
                    a
                  );
                  return c ? x : x.endOf(N);
                },
                b = function (P, q) {
                  return g.w(
                    a
                      .toDate()
                      [P].apply(
                        a.toDate("s"),
                        (c ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(q)
                      ),
                    a
                  );
                },
                p = this.$W,
                T = this.$M,
                S = this.$D,
                I = "set" + (this.$u ? "UTC" : "");
              switch (d) {
                case B:
                  return c ? v(1, 0) : v(31, 11);
                case A:
                  return c ? v(1, T) : v(0, T + 1);
                case Y:
                  var z = this.$locale().weekStart || 0,
                    U = (p < z ? p + 7 : p) - z;
                  return v(c ? S - U : S + (6 - U), T);
                case N:
                case W:
                  return b(I + "Hours", 0);
                case D:
                  return b(I + "Minutes", 1);
                case f:
                  return b(I + "Seconds", 2);
                case m:
                  return b(I + "Milliseconds", 3);
                default:
                  return this.clone();
              }
            }),
            (l.endOf = function (n) {
              return this.startOf(n, !1);
            }),
            (l.$set = function (n, h) {
              var a,
                c = g.p(n),
                d = "set" + (this.$u ? "UTC" : ""),
                v = ((a = {}),
                (a[N] = d + "Date"),
                (a[W] = d + "Date"),
                (a[A] = d + "Month"),
                (a[B] = d + "FullYear"),
                (a[D] = d + "Hours"),
                (a[f] = d + "Minutes"),
                (a[m] = d + "Seconds"),
                (a[o] = d + "Milliseconds"),
                a)[c],
                b = c === N ? this.$D + (h - this.$W) : h;
              if (c === A || c === B) {
                var p = this.clone().set(W, 1);
                p.$d[v](b),
                  p.init(),
                  (this.$d = p.set(W, Math.min(this.$D, p.daysInMonth())).$d);
              } else v && this.$d[v](b);
              return this.init(), this;
            }),
            (l.set = function (n, h) {
              return this.clone().$set(n, h);
            }),
            (l.get = function (n) {
              return this[g.p(n)]();
            }),
            (l.add = function (n, h) {
              var a,
                c = this;
              n = Number(n);
              var d = g.p(h),
                v = function (T) {
                  var S = E(c);
                  return g.w(S.date(S.date() + Math.round(T * n)), c);
                };
              if (d === A) return this.set(A, this.$M + n);
              if (d === B) return this.set(B, this.$y + n);
              if (d === N) return v(1);
              if (d === Y) return v(7);
              var b = ((a = {}), (a[f] = i), (a[D] = r), (a[m] = s), a)[d] || 1,
                p = this.$d.getTime() + n * b;
              return g.w(p, this);
            }),
            (l.subtract = function (n, h) {
              return this.add(-1 * n, h);
            }),
            (l.format = function (n) {
              var h = this,
                a = this.$locale();
              if (!this.isValid()) return a.invalidDate || Me;
              var c = n || "YYYY-MM-DDTHH:mm:ssZ",
                d = g.z(this),
                v = this.$H,
                b = this.$m,
                p = this.$M,
                T = a.weekdays,
                S = a.months,
                I = function (q, x, le, J) {
                  return (q && (q[x] || q(h, c))) || le[x].slice(0, J);
                },
                z = function (q) {
                  return g.s(v % 12 || 12, q, "0");
                },
                U =
                  a.meridiem ||
                  function (q, x, le) {
                    var J = q < 12 ? "AM" : "PM";
                    return le ? J.toLowerCase() : J;
                  },
                P = {
                  YY: String(this.$y).slice(-2),
                  YYYY: g.s(this.$y, 4, "0"),
                  M: p + 1,
                  MM: g.s(p + 1, 2, "0"),
                  MMM: I(a.monthsShort, p, S, 3),
                  MMMM: I(S, p),
                  D: this.$D,
                  DD: g.s(this.$D, 2, "0"),
                  d: String(this.$W),
                  dd: I(a.weekdaysMin, this.$W, T, 2),
                  ddd: I(a.weekdaysShort, this.$W, T, 3),
                  dddd: T[this.$W],
                  H: String(v),
                  HH: g.s(v, 2, "0"),
                  h: z(1),
                  hh: z(2),
                  a: U(v, b, !0),
                  A: U(v, b, !1),
                  m: String(b),
                  mm: g.s(b, 2, "0"),
                  s: String(this.$s),
                  ss: g.s(this.$s, 2, "0"),
                  SSS: g.s(this.$ms, 3, "0"),
                  Z: d,
                };
              return c.replace(dt, function (q, x) {
                return x || P[q] || d.replace(":", "");
              });
            }),
            (l.utcOffset = function () {
              return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
            }),
            (l.diff = function (n, h, a) {
              var c,
                d = g.p(h),
                v = E(n),
                b = (v.utcOffset() - this.utcOffset()) * i,
                p = this - v,
                T = g.m(this, v);
              return (
                (T =
                  ((c = {}),
                  (c[B] = T / 12),
                  (c[A] = T),
                  (c[Ee] = T / 3),
                  (c[Y] = (p - b) / 6048e5),
                  (c[N] = (p - b) / 864e5),
                  (c[D] = p / r),
                  (c[f] = p / i),
                  (c[m] = p / s),
                  c)[d] || p),
                a ? T : g.a(T)
              );
            }),
            (l.daysInMonth = function () {
              return this.endOf(A).$D;
            }),
            (l.$locale = function () {
              return V[this.$L];
            }),
            (l.locale = function (n, h) {
              if (!n) return this.$L;
              var a = this.clone(),
                c = Z(n, h, !0);
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
            u
          );
        })(),
        $e = K.prototype;
      return (
        (E.prototype = $e),
        [
          ["$ms", o],
          ["$s", m],
          ["$m", f],
          ["$H", D],
          ["$W", N],
          ["$M", A],
          ["$y", B],
          ["$D", W],
        ].forEach(function (u) {
          $e[u[1]] = function (l) {
            return this.$g(l, u[0], u[1]);
          };
        }),
        (E.extend = function (u, l) {
          return u.$i || (u(l, K, E), (u.$i = !0)), E;
        }),
        (E.locale = Z),
        (E.isDayjs = ae),
        (E.unix = function (u) {
          return E(1e3 * u);
        }),
        (E.en = V[k]),
        (E.Ls = V),
        (E.p = {}),
        E
      );
    });
  })(ue);
  var Ne = ue.exports;
  const X = Ce(Ne),
    Ae = (t) => X(t, void 0, !0).isValid(),
    he = (t, e) => (e === "now" && (e = oe()), X(t).isBefore(e)),
    de = (t, e) => (e === "now" && (e = oe()), X(t).isAfter(e)),
    Oe = (t, e) => {
      e || j("dateBetween");
      const [s, i] = _(e != null ? e : "");
      return de(t, s) && he(t, i);
    },
    De = (t) => {
      if (t.split(":").length < 3) for (; t.split(":").length < 3; ) t += ":00";
      return /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/.test(t);
    },
    G = (t, ...e) => !!t && t !== "",
    Ie = (t) => !0,
    Re = (t, e) => (e || j("in"), _(e).includes(t)),
    Be = (t, e) => (R(t) ? H(t, e) : ee(t, e)),
    Se = (t) =>
      typeof t == "boolean" ||
      (typeof t == "string" &&
        ((t = t.toLowerCase()),
        t === "true" ||
          t === "false" ||
          t === "0" ||
          t === "1" ||
          t === "yes" ||
          t === "no")),
    xe = (t, e) => {
      var [s, i] = _(e != null ? e : "");
      return R(t)
        ? H(t, i) && te(t, s)
        : !L(t) && !R(t)
        ? Oe(t, e)
        : ((s = Number(s)),
          (i = Number(i)),
          t !== void 0 && t !== Number && t !== "" && L(s) && L(i)
            ? ((t = Number(t)), L(t) ? ve(t, i) && ge(t, s) : !1)
            : !1);
    },
    Fe = (t, e) => {
      if (!e) throw new Error("The regex rule argument must not be empty");
      return new RegExp(e).test(t);
    },
    Ve = (t, ...e) =>
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        t
      ),
    ce = (t, e) => (t && O(t) ? t.length >= Number(e) : !1),
    fe = (t, e) => (t ? (O(t) ? t.length <= Number(e) : !1) : !0),
    O = (t) => typeof t == "string",
    Qe = (t) => /^(ftp|http|https):\/\/[^ "]+$/.test(t),
    We = (t) =>
      typeof t != "string" || t.length === 0 ? !1 : /^[A-Z]/.test(t),
    Pe = (t) =>
      typeof t != "string" || t.length === 0 ? !1 : /^[a-z]/.test(t),
    je = (t, e) => {
      e || j("startWith");
      const s = _(e != null ? e : "");
      return O(t) ? s.some((i) => t.startsWith(i)) : !1;
    },
    ke = (t, e) => {
      e || j("endWith");
      const s = _(e != null ? e : "");
      return O(t) ? s.some((i) => t.endsWith(i)) : !1;
    },
    me = (t, e) => {
      e || j("contains");
      const s = _(e != null ? e : "");
      return O(t) ? s.every((i) => t.includes(i)) : !1;
    },
    ee = (t, e) => {
      if (!L(e)) throw new Error("The length rule argument must be an integer");
      return (
        (e = parseInt(e)),
        typeof t == "string" || typeof t == "number"
          ? (t = t.toString().split(""))
          : typeof t == "object" && t !== null && t !== void 0 && (t = []),
        Array.isArray(t) ? t.length === e : !1
      );
    },
    ze = (t) => {
      const s = /[A-Z]/.test(t),
        i = /[a-z]/.test(t),
        r = /\d/.test(t),
        o = /[!@#$%^&*(),.?":{}|<>]/.test(t);
      return !(t.length < 8 || !s || !i || !r || !o);
    },
    Ue = (t) => (!O(t) || t.length === 0 ? !1 : /^[a-zA-Z]/.test(t)),
    Ge = (t) => (typeof t != "string" ? !1 : /[a-zA-Z]/.test(t)),
    He = (t, e) => !me(t, e),
    Ye = (t, e) => t === t.toLocaleUpperCase(),
    Ze = (t, e) => t === t.toLocaleLowerCase(),
    R = (t) => t instanceof File || t instanceof Blob,
    H = (t, e) => {
      if (R(t)) {
        const i = t.size;
        let r;
        const o =
          e == null ? void 0 : e.match(/^(\d+(\.\d+)?)\s*(B|KB|MB|GB)$/i);
        if (!o)
          throw new Error(
            "Invalid maxSize format. Please use valid format like '1KB', '1MB', etc."
          );
        const m = parseFloat(o[1]),
          f = o[3].toUpperCase();
        return (
          f === "KB"
            ? (r = m * 1024)
            : f === "MB"
            ? (r = m * 1024 * 1024)
            : f === "GB"
            ? (r = m * 1024 * 1024 * 1024)
            : (r = m),
          i <= r
        );
      } else return !1;
    },
    te = (t, e) => {
      if (R(t)) {
        const i = t.size;
        let r;
        const o =
          e == null ? void 0 : e.match(/^(\d+(\.\d+)?)\s*(B|KB|MB|GB)$/i);
        if (!o)
          throw new Error(
            "Invalid minSize format. Please use valid format like '1KB', '1MB', etc."
          );
        const m = parseFloat(o[1]),
          f = o[3].toUpperCase();
        return (
          f === "KB"
            ? (r = m * 1024)
            : f === "MB"
            ? (r = m * 1024 * 1024)
            : f === "GB"
            ? (r = m * 1024 * 1024 * 1024)
            : (r = m),
          i >= r
        );
      } else return !1;
    },
    ge = (t, e) => {
      if (R(t)) return te(t, e);
      if ((t == null && (t = 0), !L(e)))
        throw new Error("Min rule parameter must be an integer");
      return L(t) ? Number(t) >= Number(e) : ce(t, e);
    },
    ve = (t, e) => {
      if (R(t)) return H(t, e);
      if (!L(e)) throw new Error("Min rule parameter must be an integer");
      return t == null && (t = 0), L(t) ? Number(t) <= Number(e) : fe(t, e);
    },
    pe = (t) => (L(t) ? Number.isInteger(Number(t)) : !1),
    L = (t) =>
      t === "" || t === null
        ? !1
        : t === "0" || t === 0 || t === "1" || t === 1
        ? !0
        : !isNaN(Number(t)) && typeof t != "boolean" && typeof t != "object",
    Ke = {
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
      excludes: "The :field field must not contain :arg0.",
      hasLetter: "This field must contain at least one letter",
      regex: "This field is invalid.",
      lower: "This field must be lowercase",
      upper: "This field must be uppercase",
      fileBetween: "File size must be between :arg0 and :arg1",
      stringBetween: "The length of this field must be between :arg0 and :arg1",
    },
    Je = {
      default: "Ce champ est invalide",
      required: "Ce champ est requis",
      email: "Veuillez entrer une adresse e-mail valide",
      maxlength: "Le nombre maximal de caractères autorisés est: :arg0",
      minlength: "Le nombre minimal de caractères autorisés est: :arg0",
      min: "Le champ :field doit être supérieur ou égal à ':arg0'",
      max: "Le champ :field doit être inférieur ou égal à ':arg0'",
      string: "Veuillez entrer une chaîne de caractères",
      between:
        "La valeur de ce champ doit être comprise entre ':arg0' et ':arg1'",
      startWith: "Le champ :field doit commencer par ':arg0'",
      endWith: "Le champ :field doit se terminer par ':arg0'",
      contains: "Le champ :field doit contenir la valeur ':arg0'",
      in: "Veuillez choisir une valeur correcte pour le champ :field",
      integer: "Le champ :field doit être un entier",
      int: "Le champ :field doit être un entier",
      number: "Ce champ doit être un nombre",
      numeric: "Ce champ doit être un nombre",
      file: "Ce champ doit être un fichier",
      url: "Ce champ doit être une URL valide",
      length: "La taille de ce champ doit être :arg0",
      len: "La taille de ce champ doit être :arg0",
      maxFileSize: "La taille du fichier doit être inférieure à :arg0.",
      minFileSize: "La taille du fichier doit être supérieure à :arg0.",
      size: "La taille de ce champ doit être inférieure ou égale à :arg0",
      boolean: "Ce champ doit être un booléen (oui ou non)",
      startWithUpper: "Ce champ doit commencer par une lettre majuscule",
      startWithLower: "Ce champ doit commencer par une lettre minuscule",
      nullable: "",
      password:
        "Le mot de passe doit comporter au moins 8 caractères et inclure une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.",
      date: "Ce champ doit être une date valide",
      before: "La date doit être antérieure à (:arg0)",
      after: "La date doit être postérieure à (:arg0)",
      same: "Ce champ doit être identique à la valeur du champ :arg0",
      requiredIf:
        "Le champ :field est requis lorsque le champ :arg0 a la valeur actuelle",
      requiredWhen:
        "Le champ :field est requis lorsque les champs :arg0 sont présents",
      phone: "Ce numéro de téléphone semble être invalide",
      time: "Le champ :field doit être une heure valide.",
      startWithLetter: "Le champ :field doit commencer par une lettre",
      excludes: "Le champ :field ne doit pas contenir :arg0.",
      hasLetter: "Ce champ doit contenir au moins une lettre",
      regex: "Ce champ est invalide.",
      lower: "Ce champ doit être en minuscule",
      upper: "Ce champ doit être en majuscule",
      fileBetween:
        "La taille du fichier doit être comprise entre :arg0 et :arg1",
      stringBetween:
        "La longueur de ce champ doit être comprise entre :arg0 et :arg1",
    },
    w = class {
      static getMessages(t) {
        t = t != null ? t : w.DEFAULT_LANG;
        let e = w._message[t];
        return e || (e = w._message[w.DEFAULT_LANG]), e;
      }
      static getRuleMessage(t, e) {
        var i;
        const s = w.getMessages(e);
        return (i = s[t]) != null ? i : s.default;
      }
      static addMessage(t, e, s) {
        const i = w.getMessages(s);
        (i[t] = e), w.putMessages(i, s);
      }
      static putMessages(t, e) {
        if (!t || Object.keys(t).length === 0)
          throw new Error("The 'messages' argument must be a non-empty object");
        e = e || w.DEFAULT_LANG;
        const s = w._message[e] || {},
          i = C(C({}, s), t);
        w._message[e] = i;
      }
      static translate(t, e) {
        if (typeof t != "string" || !t.length)
          throw new Error(
            "The first argument must be a string with one or more characters"
          );
        if (typeof e != "object" || typeof e === void 0)
          throw new Error(
            "The second argument must be a valid key/value pair object"
          );
        w._message[t] = C(C({}, w.getMessages(t)), e);
      }
      static rewrite(t, e, s) {
        w.addMessage(e, s, t);
      }
      static rewriteMany(t, e, s) {
        if (typeof t != "string" || !t.length)
          throw new Error(
            "The 'lang' argument must be a string with one or more characters"
          );
        if (!Array.isArray(e) || !Array.isArray(s))
          throw new Error(
            "The 'rules' and 'messages' arguments must be arrays"
          );
        if (e.length !== s.length)
          throw new Error(
            "The 'rules' and 'messages' arrays must have the same length"
          );
        for (let i = 0; i < e.length; i++) {
          const r = e[i],
            o = s[i];
          w.rewrite(t, r, o);
        }
      }
      static local(t) {
        if (!O(t) || !t.length)
          throw new Error("The language must be a valid string");
        w._useLang = t;
      }
      static getLocal() {
        var t;
        return (t = w._useLang) != null ? t : w.LANG;
      }
    };
  let $ = w;
  ($._useLang = null),
    ($.DEFAULT_LANG = "en"),
    ($.LANG = w.DEFAULT_LANG),
    ($._message = { en: Ke, fr: Je });
  const se = {
    invalidClass: "is-invalid",
    validClass: "",
    local: { lang: $.DEFAULT_LANG },
  };
  class Xe {
    constructor(e) {
      this.messages = $.getMessages(e != null ? e : $.getLocal());
    }
    getRulesMessages(e) {
      const s = [];
      for (const i of e)
        this.messages[i]
          ? s.push(this.messages[i])
          : s.push("The input value is not valid");
      return s;
    }
    parseMessage(e, s, i, r) {
      const o = this._createParamObject(_(r != null ? r : ""));
      return (o.field = e), (i = this._replace(i, o)), i;
    }
    setMessages(e) {
      return (this.messages = C(C({}, this.messages), e)), this;
    }
    _replace(e, s) {
      for (const i in s)
        if (Object.prototype.hasOwnProperty.call(s, i)) {
          const r = s[i];
          e = e.replace(`:${i}`, r);
        }
      return (
        delete s.field, e.replace(/\.\.\.arg/, Object.values(s).join(", "))
      );
    }
    _createParamObject(e) {
      const s = {};
      for (let i = 0; i < e.length; i++) {
        const r = e[i],
          o = `arg${i}`;
        s[o] = r;
      }
      return s;
    }
  }
  class et {
    constructor(e, s) {
      (this.rules = e),
        (this.messages = s),
        this._compensateMessages(),
        this._sanitizeMessage();
    }
    _compensateMessages() {
      var s;
      const e = this.rules.length;
      if (this.messages.length !== e)
        for (let i = 0; i < this.rules.length; i++) {
          const r = this.convertAcoladeGroupToArray(
            (s = this.messages[i]) != null ? s : ""
          );
          for (const o of r) this.messages[o] = this.messages[i];
        }
    }
    _sanitizeMessage() {
      const e = /{(\d+(?:,\s*\d+)*)}/g;
      this.messages = this.messages.map((s) => s.replace(e, ""));
    }
    convertAcoladeGroupToArray(e) {
      var r;
      const s = /{(\d+(?:,\s*\d+)*)}/g;
      return (r = [...e.matchAll(s)].map((o) =>
        o[1].split(",").map((m) => parseInt(m.trim()))
      )[0]) != null
        ? r
        : [];
    }
    getMessages() {
      return this.messages;
    }
  }
  class tt {
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
          const s = this.inputElement.getAttribute(e);
          let i = e;
          s && (i = `${i}:${s}`), this._appliedRules.push(i);
        }
      });
    }
    merge(e) {
      const s = [...this._appliedRules];
      return (
        e.forEach((i) => {
          const r = s.findIndex((o) => o.startsWith(i.split(":")[0]));
          r !== -1 ? (s[r] = i) : s.push(i);
        }),
        s
      );
    }
  }
  class st {
    constructor(e, s) {
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
        (this.validator = new ot(this.param)),
        this.setInputElement(e),
        this._setParams(s),
        this.setRules(s == null ? void 0 : s.rules),
        this.setInputName(),
        this.setFeedbackElement(),
        this.setShowMessage(),
        this._setValidationClass(),
        this._setErrors(),
        this._setEvent(s == null ? void 0 : s.events),
        this.validator.setParams(this.param);
    }
    setRules(e) {
      var r;
      let s = (r = this.inputElement.dataset.qvRules) != null ? r : "";
      if (s)
        for (const o of s.split("|"))
          if (Q.hasRule(y(o).ruleName)) this.rules.push(o);
          else
            throw new Error(
              `The validation rule ${o} is not supported by QuickV`
            );
      const i = new tt(this.inputElement);
      return (
        (this.rules = i.merge(e != null ? e : this.rules)),
        (this.param.rules = this.rules),
        this
      );
    }
    _setEvent(e) {
      const s = this.inputElement.dataset.qvEvents;
      s &&
        (this.param.events = s.split("|").length
          ? s.split("|")
          : this.param.events),
        (this.param.events = e != null ? e : this.param.events);
    }
    setInputElement(e) {
      if (!(e instanceof Element)) {
        const s = document.querySelector(e);
        s && (e = s);
      }
      if (!(e instanceof Element))
        throw new Error(
          "The 'inputElement' parameter must be valide 'ValidatableInput' type."
        );
      (this.inputElement = e), (this.param.type = this.inputElement.type);
    }
    setInputName() {
      let e = this.inputElement.name;
      if (e == null || (typeof e == "string" && e.length < 0))
        throw new Error("The input name could not be empty or null");
      this.name = e;
      let s = this.name;
      this.inputElement.dataset.qvName &&
        (s = this.inputElement.dataset.qvName),
        (this.param.attribute = s);
    }
    set errors(e) {
      e && (this._errors = e != null ? e : []), this.showErrorMessages();
    }
    setFeedbackElement() {
      var r;
      let s = this.inputElement.parentElement,
        i = null;
      for (; s && !i; )
        (i = s.querySelector(`[data-qv-feedback='${this.name}']`)),
          (s = s.parentElement);
      (this.feedbackElement = i),
        (this.param.feedbackElement =
          (r = this.param.feedbackElement) != null ? r : i);
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
        (e = this.inputElement.dataset.qvShow) != null ? e : "first"),
        (this.showMessage = this.showMessages.includes(this.showMessage)
          ? this.showMessage
          : "first");
    }
    _setValidationClass() {
      var e, s, i, r;
      (this.invalidClass =
        (e = this.inputElement.dataset.qvInvalidClass) != null
          ? e
          : this.invalidClass),
        (this.validClass =
          (s = this.inputElement.dataset.qvValidClass) != null
            ? s
            : this.validClass),
        (this.invalidClass =
          (i = this.param.invalidClass) != null ? i : this.invalidClass),
        (this.validClass =
          (r = this.param.validClass) != null ? r : this.validClass);
    }
    setValidationClass() {
      const e = this._passed,
        s = (r) => {
          r.length > 0 && this.inputElement.classList.remove(r);
        },
        i = (r) => {
          r.length > 0 && this.inputElement.classList.add(r);
        };
      e
        ? (this.invalidClass.split(" ").forEach(s),
          this.validClass.split(" ").forEach(i),
          this.inputElement.setAttribute("data-qv-valid", "1"))
        : (this.validClass.split(" ").forEach(s),
          this.invalidClass.split(" ").forEach(i),
          this.inputElement.setAttribute("data-qv-valid", "0"));
    }
    _setErrors(e) {
      var r;
      const s = this.inputElement.dataset.qvMessages;
      let i = {};
      for (let o = 0; o < this.rules.length; o++) {
        let m =
          (r = s == null ? void 0 : s.split("|").map((N) => N.trim())) != null
            ? r
            : [];
        m && (m = new et(this.rules, m).getMessages());
        const f = m !== void 0 ? m[o] : "",
          D = y(this.rules[o]).ruleName;
        typeof f == "string" && f.length > 0
          ? (i[D] = f)
          : (i[D] = $.getRuleMessage(D, $.getLocal()));
      }
      typeof e != "undefined" &&
      typeof e == "object" &&
      Object.values(e).length > 0
        ? (this.param.errors = e)
        : (this.param.errors = i);
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
        (this.param = C(C({}, this.param), e));
    }
  }
  class it extends st {
    constructor(e, s) {
      super(e, s), (this._emitOnPasses = !0), (this._emitOnFails = !0);
    }
    validate(e = !0) {
      return (
        this.valid(),
        this.setValidationClass(),
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
    emit(e, s) {
      const i = new CustomEvent(e, { detail: s });
      this.inputElement.dispatchEvent(i);
    }
    on(e, s) {
      this.inputElement.addEventListener(e, s);
    }
    emitChangeEvent() {
      this.param.emitEvent &&
        (this._passed
          ? this._emitOnPasses &&
            (this.emit("qv.input.passes", {
              detail: {
                rules: this.rules,
                input: {},
                element: this.inputElement,
              },
            }),
            (this._emitOnPasses = !1),
            (this._emitOnFails = !0))
          : this._emitOnFails &&
            (this.emit("qv.input.fails", {
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
      return this._passed;
    }
    __call(e, ...s) {
      typeof e == "function" && e(...s);
    }
  }
  class rt {
    constructor(e, s, i = null) {
      (this._value = this._trim(e)), (this.code = s), (this.attribute = i);
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
      if (!(O(this._value) || L(this._value))) return !1;
      if (typeof this.code == "string") {
        const e = [],
          s = this.code.split(",").map((i) => i.trim().toUpperCase());
        for (const i of s) {
          const r = `validate${i}`,
            o = this[r];
          if (typeof o == "function") e.push(o.call(this));
          else throw new Error(`Validator method '${r}' does not exist.`);
        }
        return e.some((i) => i);
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
  const nt = (t, e) => new rt(t, e).validPhoneNumber(),
    F = class {
      static rule(t, e, s) {
        F.addRule(t, e),
          F.addMessage(t, s != null ? s : "This input is invalide");
      }
      static addRule(t, e) {
        F.rules[t] = e;
      }
      static addMessage(t, e, s) {
        $.addMessage(t, e, s);
      }
      static hasRule(t) {
        return t in F.rules;
      }
      static getRule(t) {
        return F.rules[t];
      }
      static getMessage(t, e) {
        return $.getRuleMessage(t, e);
      }
      static allRules() {
        return F.rules;
      }
      static allMessages(t) {
        return $.getMessages(t);
      }
    };
  let Q = F;
  Q.rules = {
    required: G,
    email: Ve,
    maxlength: fe,
    minlength: ce,
    min: ge,
    max: ve,
    string: O,
    between: xe,
    startWith: je,
    endWith: ke,
    contains: me,
    in: Re,
    integer: pe,
    int: pe,
    number: L,
    numeric: L,
    url: Qe,
    length: ee,
    len: ee,
    file: R,
    maxFileSize: H,
    minFileSize: te,
    size: Be,
    boolean: Se,
    startWithUpper: We,
    nullable: Ie,
    startWithLower: Pe,
    password: ze,
    date: Ae,
    before: he,
    after: de,
    phone: nt,
    time: De,
    startWithLetter: Ue,
    excludes: He,
    hasLetter: Ge,
    regex: Fe,
    lower: Ze,
    upper: Ye,
  };
  class ie extends it {
    constructor(e, s) {
      super(e, s);
    }
    init() {
      var e;
      (e = this.param.events) == null ||
        e.forEach((s) => {
          this.inputElement.addEventListener(s, () => {
            this.validate();
          });
        });
    }
    rule(e, s, i) {
      Q.rule(e, s, i);
    }
    with(e) {
      this._setParams(e), this.validator.setParams(this.param);
    }
    whereName(e) {
      return this.name === e;
    }
    onFails(e) {
      this.on("qv.input.fails", (s) => {
        this.__call(e);
      });
    }
    onPasses(e) {
      this.on("qv.input.passes", (s) => {
        this.__call(e);
      });
    }
    destroy() {
      (this.param.events = []), (this.rules = []), (this.param.rules = []);
    }
  }
  class at {
    constructor(e) {
      (this.form = e), (this.formRules = []);
    }
    getInputByName(e) {
      return this.form.querySelector(`[name=${e}]`);
    }
    getInputValueByName(e) {
      const s = this.getInputByName(e);
      return s ? s.value : void 0;
    }
    getFormRules() {
      return this.formRules;
    }
  }
  class lt extends at {
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
    same(e, s) {
      return s ? e === this.getInputValueByName(s) : !1;
    }
    requiredIf(e, s) {
      const [i, ...r] = _(s != null ? s : "");
      if (i && r.length > 0) {
        const o = this.getInputValueByName(i);
        return r.includes(o) ? G(e) : !0;
      }
      return !1;
    }
    requiredWhen(e, s) {
      const [i, ...r] = _(s != null ? s : "");
      return i && r.length > 0
        ? r.some((m) => (console.log(m), G(this.getInputValueByName(m))))
          ? G(e)
          : !0
        : !1;
    }
  }
  class re {
    constructor(e, s) {
      (this._passed = !1),
        (this._emitOnPasses = !0),
        (this._emitOnFails = !0),
        (this._qvEnabledClass = "qvEnabled"),
        (this._qvDisabledClass = "qvDisabled"),
        (this._triggerValidationEvents = ["change", "qv.form.validate"]),
        (this._qvInputs = []),
        (this.config = { auto: !0 }),
        this.setContainer(e),
        (this._formValidator = new lt(this.container)),
        this.setConfig(s),
        this._initQvInputs();
    }
    setContainer(e) {
      if (!(e instanceof HTMLElement)) {
        const i = document.querySelector(e);
        i && (e = i);
      }
      if (!(e instanceof HTMLElement))
        throw new Error(
          "The 'container' parameter must be of type HTMLElement."
        );
      this.container = e;
      const s = this.container.querySelector("[data-qv-submit]");
      s && (this.submitButton = s);
    }
    init() {
      this._runQvInputs(),
        this.config.auto && (this.disableButton(), this.validateOnQvEvent()),
        this._onSubmit(),
        this.onFails((e) => {
          this.disableButton();
        }),
        this.onPasses((e) => {
          this.enableButton();
        }),
        this.emit("qv.form.init");
    }
    disableButton() {
      var e;
      if (
        this.submitButton &&
        (this.submitButton.setAttribute("disabled", "true"),
        this._qvDisabledClass)
      ) {
        const s = this._qvEnabledClass.split(" ");
        for (const r of s) this.submitButton.classList.remove(r);
        this._qvDisabledClass =
          (e = this.submitButton.dataset.qvDisabledClass) != null
            ? e
            : "qvDisabled";
        const i = this._qvDisabledClass.split(" ");
        for (const r of i) this.submitButton.classList.add(r);
      }
    }
    enableButton() {
      var e;
      if (
        this.submitButton &&
        (this.submitButton.removeAttribute("disabled"), this._qvEnabledClass)
      ) {
        const s = this._qvDisabledClass.split(" ");
        for (const r of s) this.submitButton.classList.remove(r);
        this._qvEnabledClass =
          (e = this.submitButton.dataset.qvEnabledClass) != null
            ? e
            : "qvEnabled";
        const i = this._qvEnabledClass.split(" ");
        for (const r of i) this.submitButton.classList.add(r);
      }
    }
    validateOnQvEvent(e) {
      this.__call(e, this),
        this._triggerValidationEvents.forEach((s) => {
          this.on(s, (i) => {
            this._handle();
          });
        }),
        this._qvInputs.forEach((s) => {
          s.onFails(this._handle.bind(this)),
            s.onPasses(this._handle.bind(this));
        });
    }
    _handle() {
      (this._passed = this.isValid()),
        this._passed ? this._emitQvOnPassesEvent() : this._emitQvOnFailsEvent();
    }
    isValid() {
      return this._qvInputs.every((e) => e.passes());
    }
    _onSubmit() {
      this.on("submit", (e) => {
        if (!this._passed) {
          let s = [];
          for (const i of this._qvInputs) s.push(i.validate(!1));
          s.every((i) => i)
            ? this._emitQvOnPassesEvent()
            : (e.preventDefault(), this._emitQvOnFailsEvent());
        }
      });
    }
    rule(e, s, i) {
      Q.rule(e, s, i);
    }
    setConfig(e) {
      var i, r;
      let s =
        ((i = document.querySelector("html")) == null
          ? void 0
          : i.getAttribute("data-qv-lang")) ||
        ((r = document.querySelector("html")) == null
          ? void 0
          : r.getAttribute("lang"));
      if (
        (this.container.dataset.qvLang && (s = this.container.dataset.qvLang),
        e &&
          typeof e == "object" &&
          ((this.config = C(C({}, this.config), e)), e.local))
      ) {
        const o = e.local;
        o.lang && (s = o.lang);
      }
      ($.LANG = s != null ? s : $.DEFAULT_LANG), this._syncRules();
    }
    on(e, s) {
      this.container.addEventListener(e, s);
    }
    emit(e, s) {
      const i = new CustomEvent(e, { detail: s });
      this.container.dispatchEvent(i);
    }
    onFails(e) {
      this.on("qv.form.fails", e);
    }
    onPasses(e) {
      this.on("qv.form.passes", e);
    }
    observeChanges(e) {
      this.on("qv.form.updated", (s) => {
        this.destroy(),
          this.setContainer(this.container),
          this._initQvInputs(),
          this._runQvInputs(),
          this.__call(e, this);
      });
    }
    validate() {
      this.emit("qv.form.validate");
    }
    _initQvInputs() {
      const e = Array.from(
        this.container.querySelectorAll("[data-qv-rules]")
      ).map((s) => new ie(s));
      this._qvInputs.push(...e);
    }
    _runQvInputs() {
      for (const e of this._qvInputs) e.init();
    }
    __call(e, ...s) {
      typeof e == "function" && e(...s);
    }
    destroy() {
      this.container.removeEventListener("submit", this._onSubmit),
        this._triggerValidationEvents
          .filter((s) => s !== "qv.form.validate")
          .forEach((s) => {
            this.container.removeEventListener(s, this._handle);
          });
      for (const s of this._qvInputs) s.destroy();
      (this._qvInputs = []), this.emit("qv.form.destroy");
    }
    _emitQvOnFailsEvent() {
      this._emitOnFails &&
        (this.emit("qv.form.fails"),
        (this._emitOnFails = !1),
        (this._emitOnPasses = !0));
    }
    _emitQvOnPassesEvent() {
      this._emitOnPasses &&
        (this.emit("qv.form.passes"),
        (this._emitOnPasses = !1),
        (this._emitOnFails = !0));
    }
    _syncRules() {
      this._formValidator.getFormRules().forEach((e) => {
        this.rule(e.ruleName, e.call.bind(this._formValidator));
      });
    }
    with(e, s) {
      const i = this._qvInputs.find((r) => r.whereName(e));
      if (i) {
        const r = this._qvInputs.indexOf(i);
        i.with(s), (this._qvInputs[r] = i);
      }
    }
    withMany(e) {
      for (const [s, i] of Object.entries(e)) this.with(s, i);
    }
  }
  class _e {
    constructor() {
      this.config = se;
    }
    init(e) {
      this.setConfig(e),
        document.querySelectorAll("form").forEach((s) => {
          new re(s).init();
        });
    }
    rule(e, s, i) {
      Q.rule(e, s, i);
    }
    setConfig(e) {
      (this.config = se),
        e && typeof e == "object" && (this.config = C(C({}, this.config), e));
    }
  }
  class ot {
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
        (this._qvmessages = {}),
        e && this.setParams(e);
    }
    validate() {
      const e = this._rules;
      if (!Array.isArray(e))
        throw new Error("The rule provided must be an array of Rule");
      for (const s of e) {
        let { ruleName: i, params: r } = y(s),
          o = this._getRuleToRunName(i);
        const m = Q.getRule(o),
          f = this._makeRuleExcutedInstance(o, i);
        if (((f.params = r), !m))
          throw new Error(`The rule ${i} is not defined`);
        if (
          (f.wasRunWith(this._value)
            ? (f.passed = f.passed)
            : ((f.passed = m(this._value, r)),
              (f.valueTested = this._value),
              (f.run = !0)),
          this._failOnfirst)
        ) {
          if (!f.passed) {
            this._parseRuleMessage(f), this._addRuleExecuted(f);
            break;
          }
        } else
          f.passed ? (f.message = "") : this._parseRuleMessage(f),
            this._addRuleExecuted(f);
      }
      return !this.hasErrors();
    }
    getErrors() {
      var s;
      const e = {};
      for (const i of this._ruleExecuted)
        i.passed || (e[i.orignalName] = (s = i.message) != null ? s : "");
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
    _makeRuleExcutedInstance(e, s) {
      let i = this._ruleExecuted.find((r) => r.isNamed(e));
      return i != null ? i : new ut(e, s);
    }
    _addRuleExecuted(e) {
      this._ruleExecuted.includes(e) || this._ruleExecuted.push(e);
    }
    _parseRuleMessage(e) {
      const s = $.getRuleMessage(e.orignalName),
        i = this._qvmessages[e.orignalName];
      i !== s
        ? (this._qvmessages[e.ruleName] = i)
        : (this._qvmessages[e.ruleName] = $.getRuleMessage(e.ruleName));
      const r = new Xe().setMessages(this._qvmessages),
        o = r.parseMessage(
          this._attr,
          e.ruleName,
          r.getRulesMessages([e.ruleName])[0],
          e.params
        );
      return (e.message = o), e;
    }
    getMessages() {
      return this._ruleExecuted.filter((s) => !s.passed).map((s) => s.message);
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
      var s, i, r, o;
      (this._attr = (s = e.attribute) != null ? s : ""),
        (this._failOnfirst = e.failsOnfirst !== void 0 && e.failsOnfirst),
        (this._rules = (i = e.rules) != null ? i : []),
        (this._qvmessages = (r = e.errors) != null ? r : {}),
        (this._inputType = (o = e.type) != null ? o : this._inputType);
    }
    _getRuleToRunName(e) {
      let s = e;
      if (this._rulesToMap.includes(e)) {
        const i = this._rulesFromTypes[e];
        if (i) {
          const r = i[this._inputType];
          O(r) && r.length > 0 && (s = r);
        }
      }
      return s;
    }
  }
  class ut {
    constructor(e, s) {
      (this.passed = !1),
        (this.message = null),
        (this.run = !1),
        (this.ruleName = e),
        (this.orignalName = s);
    }
    wasRunWith(e) {
      return this.valueTested === e && this.run;
    }
    isNamed(e) {
      return this.ruleName === e;
    }
  }
  typeof window != "undefined" &&
    ((window.QvInput = (be = window.QvInput) != null ? be : ie),
    (window.QvForm = (we = window.QvForm) != null ? we : re),
    (window.Quickv = (ye = window.Quickv) != null ? ye : _e)),
    (M.Quickv = _e),
    (M.QvConfig = se),
    (M.QvForm = re),
    (M.QvInput = ie),
    Object.defineProperty(M, Symbol.toStringTag, { value: "Module" });
});
