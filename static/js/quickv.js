(function (w, y) {
  typeof exports == "object" && typeof module != "undefined"
    ? y(exports)
    : typeof define == "function" && define.amd
    ? define(["exports"], y)
    : ((w = typeof globalThis != "undefined" ? globalThis : w || self),
      y((w.quickv = {})));
})(this, function (w) {
  var ye, Ee, Me;
  ("use strict");
  var ft = Object.defineProperty;
  var qe = Object.getOwnPropertySymbols;
  var mt = Object.prototype.hasOwnProperty,
    gt = Object.prototype.propertyIsEnumerable;
  var Ce = (w, y, L) =>
      y in w
        ? ft(w, y, { enumerable: !0, configurable: !0, writable: !0, value: L })
        : (w[y] = L),
    I = (w, y) => {
      for (var L in y || (y = {})) mt.call(y, L) && Ce(w, L, y[L]);
      if (qe) for (var L of qe(y)) gt.call(y, L) && Ce(w, L, y[L]);
      return w;
    };
  const y = {
      default: "The :field is invalid",
      required: "The :field field is required",
      email: "Please enter a valid email address",
      maxlength: "The maximum number of characters allowed has been exceeded",
      minlength:
        "The minimum number of characters allowed has not been reached",
      min: "The :field field must be greater than or equal to ':min'",
      max: "The :field field must be less than or equal to ':max'",
      string: "Please enter a string of characters",
      between: "This field value must be in ':min' and ':max'",
      startWith: "The :field field must be started with ':startWith'",
      endWith: "The :field field must be ended with ':endWith'",
      contains: "The :field field must contain the value ':contains'",
      in: "Please choose a correct value for the :field field",
      integer: "The :field field must an integer",
      int: "The :field field must an integer",
      number: "This field must be a number",
      numeric: "This field must be a number",
      file: "This field must be a file",
      url: "This field must be a valid url",
      length: "The size of this must be :size",
      len: "The size of this must be :size",
      maxFileSize: "The file size must be smaller than :maxFileSize.",
      minFileSize: "The file size must be larger than :minFileSize.",
      size: "This field's size should be less than or equal to :size ",
      boolean: "This field must be a boolean (yes or no) included",
      startWithUpper: "This field must be started with capitale letter",
      startWithLower: "This field must be started with capitale letter",
      nullable: "",
      password:
        "The password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a digit, and a special character.",
      date: "This field must be a valid date",
      before: "The date must be before (:beforeDate)",
      after: "The date must be after (:afterDate)",
      same: "This field must be same as :same field value",
      requiredIf:
        "The :field is required once the :other have the current value",
      requiredWhen: "The :field is required when :otherFields are present",
      phone: "This phone number appears to be invalid.",
      time: "The :field must be a valid time",
      startWithLetter: "The :field must start with a letter.",
      excludes: "The :field field must not contain :excludes.",
      hasLetter: "The :field field must contain at least one letter.",
      regex: "This field is invalid",
      lower: "The :field input must be lower",
      upper: "The :field input must be upper",
    },
    L = {
      default: "Le champ :field est invalide",
      required: "Le champ :field est requis",
      email: "Veuillez entrer une adresse e-mail valide",
      maxlength: "Le nombre maximal de caractères autorisés a été dépassé",
      minlength:
        "Le nombre minimal de caractères autorisés n'a pas été atteint",
      min: "Le champ :field doit être supérieur ou égal à ':min'",
      max: "Le champ :field doit être inférieur ou égal à ':max'",
      string: "Veuillez entrer une chaîne de caractères",
      between:
        "La valeur de ce champ doit être comprise entre ':min' et ':max'",
      startWith: "Le champ :field doit commencer par ':startWith'",
      endWith: "Le champ :field doit se terminer par ':endWith'",
      contains: "Le champ :field doit contenir la valeur ':contains'",
      in: "Veuillez choisir une valeur correcte pour le champ :field",
      integer: "Le champ :field doit être un entier",
      int: "Le champ :field doit être un entier",
      number: "Ce champ doit être un nombre",
      numeric: "Ce champ doit être un nombre",
      file: "Ce champ doit être un fichier",
      url: "Ce champ doit être une URL valide",
      length: "La taille de ce champ doit être :size",
      len: "La taille de ce champ doit être :size",
      maxFileSize: "La taille du fichier doit être inférieure à :maxFileSize.",
      minFileSize: "La taille du fichier doit être supérieure à :minFileSize.",
      size: "La taille de ce champ doit être inférieure ou égale à :size",
      boolean: "Ce champ doit être un booléen (oui ou non)",
      startWithUpper: "Ce champ doit commencer par une lettre majuscule",
      startWithLower: "Ce champ doit commencer par une lettre minuscule",
      nullable: "",
      password:
        "Le mot de passe doit comporter au moins 8 caractères et inclure une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.",
      date: "Ce champ doit être une date valide",
      before: "La date doit être antérieure à (:beforeDate)",
      after: "La date doit être postérieure à (:afterDate)",
      same: "Ce champ doit être identique à la valeur du champ :same",
      requiredIf:
        "Le champ :field est requis lorsque le champ :other a la valeur actuelle",
      requiredWhen:
        "Le champ :field est requis lorsque les champs :otherFields sont présents",
      phone: "Ce numéro de téléphone semble être invalide",
      time: "Le champ :field doit être une heure valide.",
      startWithLetter: "Le champ :field doit commencer par une lettre",
      excludes: "Le champ :field ne doit pas contenir :excludes.",
      hasLetter: "Le champ :field doit conteni au moins une lettre",
      regex: "Le champ :field est invalide.",
      lower: "Le champ :field doit être en minuscule",
      upper: "Le champ :field doit être en majuscule",
    },
    T = class {
      static getMessages(t) {
        t = t != null ? t : T.DEFAULT_LANG;
        let e = T._message[t];
        return e || (e = T._message[T.DEFAULT_LANG]), e;
      }
      static getRuleMessage(t, e) {
        var i;
        const s = T.getMessages(e);
        return (i = s[t]) != null ? i : s.default;
      }
      static addMessage(t, e, s) {
        const i = T.getMessages(s);
        (i[t] = e), T.putMessages(i, s);
      }
      static putMessages(t, e) {
        (e = e || T.DEFAULT_LANG), (T._message[e] = t);
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
        T._message[t] = e;
      }
    };
  let $ = T;
  ($.DEFAULT_LANG = "en"),
    ($.LANG = T.DEFAULT_LANG),
    ($._message = { en: y, fr: L });
  const P = {
      invalidClass: "is-invalid",
      validClass: "",
      local: { lang: $.DEFAULT_LANG },
    },
    se = (t) => {
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
    A = (t, e = ",") =>
      typeof t != "string" ? [] : t.split(e).map((s) => s.trim()),
    j = (t) => {
      throw new Error(`Please provide <<${t}>> rule arguments`);
    };
  function he() {
    return new Date().toISOString();
  }
  class Ne {
    constructor(e) {
      this.messages = $.getMessages(e != null ? e : $.LANG);
    }
    getRulesMessages(e) {
      const s = [];
      for (const i of e)
        this.messages[i] ? s.push(this.messages[i]) : s.push("Invalid input");
      return s;
    }
    parseMessage(e, s, i, r) {
      let d = [e, ...A(r != null ? r : "")],
        o = i;
      return (
        o.includes(":field") || (d = d.slice(1)),
        (o = this._replace(i, o, d)),
        o
      );
    }
    setMessages(e) {
      return (this.messages = I(I({}, this.messages), e)), this;
    }
    _replace(e, s, i) {
      var d;
      const r = e.match(/:[a-zA-Z]+/g);
      if (r)
        for (let o = 0; o < r.length; o++) {
          const p = (d = i[o]) != null ? d : "";
          s = s.replace(r[o], p);
        }
      return s;
    }
  }
  class Ie {
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
          for (const d of r) this.messages[d] = this.messages[i];
        }
    }
    _sanitizeMessage() {
      const e = /{(\d+(?:,\s*\d+)*)}/g;
      this.messages = this.messages.map((s) => s.replace(e, ""));
    }
    convertAcoladeGroupToArray(e) {
      var r;
      const s = /{(\d+(?:,\s*\d+)*)}/g;
      return (r = [...e.matchAll(s)].map((d) =>
        d[1].split(",").map((o) => parseInt(o.trim()))
      )[0]) != null
        ? r
        : [];
    }
    getMessages() {
      return this.messages;
    }
  }
  class Se {
    constructor(e, s, i) {
      (this.config = P),
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
        }),
        (this.validator = new lt(this.param)),
        this.setConfig(s),
        this.setInputElement(e),
        this._setParams(i),
        this.setRules(i == null ? void 0 : i.rules),
        this.setInputName(),
        this.setFeedbackElement(),
        this.setShowMessage(),
        this.setInputValidationClass(),
        this._setErrors(),
        this._setEvent(i == null ? void 0 : i.events),
        this.validator.setParams(this.param);
    }
    setRules(e) {
      var i;
      let s = (i = this.inputElement.dataset.qvRules) != null ? i : "";
      if (s)
        for (const r of s.split("|"))
          if (Q.hasRule(se(r).ruleName)) this.rules.push(r);
          else
            throw new Error(
              `The validation rule ${r} is not supported by QuickV`
            );
      return (
        (this.rules = e != null ? e : this.rules),
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
      this.inputElement = e;
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
    setInputValidationClass() {
      var e, s, i, r;
      (this.invalidClass = (e = this.config.invalidClass) != null ? e : ""),
        (this.validClass = (s = this.config.validClass) != null ? s : ""),
        (this.invalidClass =
          (i = this.inputElement.dataset.qvInvalidClass) != null
            ? i
            : this.invalidClass),
        (this.validClass =
          (r = this.inputElement.dataset.qvValidClass) != null
            ? r
            : this.validClass);
    }
    setValidationClass(e) {
      const s = (r) => {
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
      for (let d = 0; d < this.rules.length; d++) {
        let o =
          (r = s == null ? void 0 : s.split("|").map((C) => C.trim())) != null
            ? r
            : [];
        o && (o = new Ie(this.rules, o).getMessages());
        const p = o !== void 0 ? o[d] : "",
          S = se(this.rules[d]).ruleName;
        typeof p == "string" && p.length > 0
          ? (i[S] = p)
          : (i[S] = $.getRuleMessage(S, $.LANG));
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
    setConfig(e) {
      (this.config = P),
        e && typeof e == "object" && (this.config = I(I({}, this.config), e));
    }
    _setParams(e) {
      typeof e == "object" &&
        typeof e != "undefined" &&
        (this.param = I(I({}, this.param), e));
    }
  }
  class Ae extends Se {
    constructor(e, s, i) {
      super(e, s, i);
    }
    validate() {
      const e = this.valid();
      return (
        this.setValidationClass(e),
        (this.errors = this.validator.getMessages()),
        this.emitChangeEvent(),
        e
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
      return (this.validator.value = this.getValue()), this.validator.passes();
    }
    emitChangeEvent() {
      this.param.emitEvent &&
        this.inputElement.dispatchEvent(
          new CustomEvent("qv.input.validated", {
            detail: {
              rules: this.rules,
              input: {},
              element: this.inputElement,
            },
            bubbles: !0,
          })
        );
    }
    getErrors() {
      return this.validator.getErrors();
    }
    fails() {
      return !this.valid();
    }
    destroy() {
      var e;
      (e = this.param.events) == null ||
        e.forEach((s) => {
          this.inputElement.removeEventListener(s, this.validate);
        });
    }
  }
  const x = (t) => t instanceof File || t instanceof Blob,
    Y = (t, e) => {
      if (x(t)) {
        const i = t.size;
        let r;
        const d =
          e == null ? void 0 : e.match(/^(\d+(\.\d+)?)\s*(B|KB|MB|GB)$/i);
        if (!d)
          throw new Error(
            "Invalid maxSize format. Please use valid format like '1KB', '1MB', etc."
          );
        const o = parseFloat(d[1]),
          p = d[3].toUpperCase();
        return (
          p === "KB"
            ? (r = o * 1024)
            : p === "MB"
            ? (r = o * 1024 * 1024)
            : p === "GB"
            ? (r = o * 1024 * 1024 * 1024)
            : (r = o),
          i <= r
        );
      } else return !1;
    },
    ie = (t, e) => {
      if (x(t)) {
        const i = t.size;
        let r;
        const d =
          e == null ? void 0 : e.match(/^(\d+(\.\d+)?)\s*(B|KB|MB|GB)$/i);
        if (!d)
          throw new Error(
            "Invalid minSize format. Please use valid format like '1KB', '1MB', etc."
          );
        const o = parseFloat(d[1]),
          p = d[3].toUpperCase();
        return (
          p === "KB"
            ? (r = o * 1024)
            : p === "MB"
            ? (r = o * 1024 * 1024)
            : p === "GB"
            ? (r = o * 1024 * 1024 * 1024)
            : (r = o),
          i >= r
        );
      } else return !1;
    };
  var De =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof window != "undefined"
      ? window
      : typeof global != "undefined"
      ? global
      : typeof self != "undefined"
      ? self
      : {};
  function xe(t) {
    return t &&
      t.__esModule &&
      Object.prototype.hasOwnProperty.call(t, "default")
      ? t.default
      : t;
  }
  var de = { exports: {} };
  (function (t, e) {
    (function (s, i) {
      t.exports = i();
    })(De, function () {
      var s = 1e3,
        i = 6e4,
        r = 36e5,
        d = "millisecond",
        o = "second",
        p = "minute",
        S = "hour",
        C = "day",
        J = "week",
        N = "month",
        $e = "quarter",
        O = "year",
        z = "date",
        Le = "Invalid Date",
        ut =
          /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
        ht =
          /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
        dt = {
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
        le = function (u, l, n) {
          var h = String(u);
          return !h || h.length >= l
            ? u
            : "" + Array(l + 1 - h.length).join(n) + u;
        },
        ct = {
          s: le,
          z: function (u) {
            var l = -u.utcOffset(),
              n = Math.abs(l),
              h = Math.floor(n / 60),
              a = n % 60;
            return (l <= 0 ? "+" : "-") + le(h, 2, "0") + ":" + le(a, 2, "0");
          },
          m: function u(l, n) {
            if (l.date() < n.date()) return -u(n, l);
            var h = 12 * (n.year() - l.year()) + (n.month() - l.month()),
              a = l.clone().add(h, N),
              f = n - a < 0,
              c = l.clone().add(h + (f ? -1 : 1), N);
            return +(-(h + (n - a) / (f ? a - c : c - a)) || 0);
          },
          a: function (u) {
            return u < 0 ? Math.ceil(u) || 0 : Math.floor(u);
          },
          p: function (u) {
            return (
              { M: N, y: O, w: J, d: C, D: z, h: S, m: p, s: o, ms: d, Q: $e }[
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
        G = "en",
        W = {};
      W[G] = dt;
      var oe = function (u) {
          return u instanceof ee;
        },
        X = function u(l, n, h) {
          var a;
          if (!l) return G;
          if (typeof l == "string") {
            var f = l.toLowerCase();
            W[f] && (a = f), n && ((W[f] = n), (a = f));
            var c = l.split("-");
            if (!a && c.length > 1) return u(c[0]);
          } else {
            var m = l.name;
            (W[m] = l), (a = m);
          }
          return !h && a && (G = a), a || (!h && G);
        },
        _ = function (u, l) {
          if (oe(u)) return u.clone();
          var n = typeof l == "object" ? l : {};
          return (n.date = u), (n.args = arguments), new ee(n);
        },
        g = ct;
      (g.l = X),
        (g.i = oe),
        (g.w = function (u, l) {
          return _(u, { locale: l.$L, utc: l.$u, x: l.$x, $offset: l.$offset });
        });
      var ee = (function () {
          function u(n) {
            (this.$L = X(n.locale, null, !0)), this.parse(n);
          }
          var l = u.prototype;
          return (
            (l.parse = function (n) {
              (this.$d = (function (h) {
                var a = h.date,
                  f = h.utc;
                if (a === null) return new Date(NaN);
                if (g.u(a)) return new Date();
                if (a instanceof Date) return new Date(a);
                if (typeof a == "string" && !/Z$/i.test(a)) {
                  var c = a.match(ut);
                  if (c) {
                    var m = c[2] - 1 || 0,
                      b = (c[7] || "0").substring(0, 3);
                    return f
                      ? new Date(
                          Date.UTC(
                            c[1],
                            m,
                            c[3] || 1,
                            c[4] || 0,
                            c[5] || 0,
                            c[6] || 0,
                            b
                          )
                        )
                      : new Date(
                          c[1],
                          m,
                          c[3] || 1,
                          c[4] || 0,
                          c[5] || 0,
                          c[6] || 0,
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
              return this.$d.toString() !== Le;
            }),
            (l.isSame = function (n, h) {
              var a = _(n);
              return this.startOf(h) <= a && a <= this.endOf(h);
            }),
            (l.isAfter = function (n, h) {
              return _(n) < this.startOf(h);
            }),
            (l.isBefore = function (n, h) {
              return this.endOf(h) < _(n);
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
                f = !!g.u(h) || h,
                c = g.p(n),
                m = function (k, M) {
                  var B = g.w(
                    a.$u ? Date.UTC(a.$y, M, k) : new Date(a.$y, M, k),
                    a
                  );
                  return f ? B : B.endOf(C);
                },
                b = function (k, M) {
                  return g.w(
                    a
                      .toDate()
                      [k].apply(
                        a.toDate("s"),
                        (f ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(M)
                      ),
                    a
                  );
                },
                v = this.$W,
                E = this.$M,
                R = this.$D,
                D = "set" + (this.$u ? "UTC" : "");
              switch (c) {
                case O:
                  return f ? m(1, 0) : m(31, 11);
                case N:
                  return f ? m(1, E) : m(0, E + 1);
                case J:
                  var U = this.$locale().weekStart || 0,
                    H = (v < U ? v + 7 : v) - U;
                  return m(f ? R - H : R + (6 - H), E);
                case C:
                case z:
                  return b(D + "Hours", 0);
                case S:
                  return b(D + "Minutes", 1);
                case p:
                  return b(D + "Seconds", 2);
                case o:
                  return b(D + "Milliseconds", 3);
                default:
                  return this.clone();
              }
            }),
            (l.endOf = function (n) {
              return this.startOf(n, !1);
            }),
            (l.$set = function (n, h) {
              var a,
                f = g.p(n),
                c = "set" + (this.$u ? "UTC" : ""),
                m = ((a = {}),
                (a[C] = c + "Date"),
                (a[z] = c + "Date"),
                (a[N] = c + "Month"),
                (a[O] = c + "FullYear"),
                (a[S] = c + "Hours"),
                (a[p] = c + "Minutes"),
                (a[o] = c + "Seconds"),
                (a[d] = c + "Milliseconds"),
                a)[f],
                b = f === C ? this.$D + (h - this.$W) : h;
              if (f === N || f === O) {
                var v = this.clone().set(z, 1);
                v.$d[m](b),
                  v.init(),
                  (this.$d = v.set(z, Math.min(this.$D, v.daysInMonth())).$d);
              } else m && this.$d[m](b);
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
                f = this;
              n = Number(n);
              var c = g.p(h),
                m = function (E) {
                  var R = _(f);
                  return g.w(R.date(R.date() + Math.round(E * n)), f);
                };
              if (c === N) return this.set(N, this.$M + n);
              if (c === O) return this.set(O, this.$y + n);
              if (c === C) return m(1);
              if (c === J) return m(7);
              var b = ((a = {}), (a[p] = i), (a[S] = r), (a[o] = s), a)[c] || 1,
                v = this.$d.getTime() + n * b;
              return g.w(v, this);
            }),
            (l.subtract = function (n, h) {
              return this.add(-1 * n, h);
            }),
            (l.format = function (n) {
              var h = this,
                a = this.$locale();
              if (!this.isValid()) return a.invalidDate || Le;
              var f = n || "YYYY-MM-DDTHH:mm:ssZ",
                c = g.z(this),
                m = this.$H,
                b = this.$m,
                v = this.$M,
                E = a.weekdays,
                R = a.months,
                D = function (M, B, ue, te) {
                  return (M && (M[B] || M(h, f))) || ue[B].slice(0, te);
                },
                U = function (M) {
                  return g.s(m % 12 || 12, M, "0");
                },
                H =
                  a.meridiem ||
                  function (M, B, ue) {
                    var te = M < 12 ? "AM" : "PM";
                    return ue ? te.toLowerCase() : te;
                  },
                k = {
                  YY: String(this.$y).slice(-2),
                  YYYY: this.$y,
                  M: v + 1,
                  MM: g.s(v + 1, 2, "0"),
                  MMM: D(a.monthsShort, v, R, 3),
                  MMMM: D(R, v),
                  D: this.$D,
                  DD: g.s(this.$D, 2, "0"),
                  d: String(this.$W),
                  dd: D(a.weekdaysMin, this.$W, E, 2),
                  ddd: D(a.weekdaysShort, this.$W, E, 3),
                  dddd: E[this.$W],
                  H: String(m),
                  HH: g.s(m, 2, "0"),
                  h: U(1),
                  hh: U(2),
                  a: H(m, b, !0),
                  A: H(m, b, !1),
                  m: String(b),
                  mm: g.s(b, 2, "0"),
                  s: String(this.$s),
                  ss: g.s(this.$s, 2, "0"),
                  SSS: g.s(this.$ms, 3, "0"),
                  Z: c,
                };
              return f.replace(ht, function (M, B) {
                return B || k[M] || c.replace(":", "");
              });
            }),
            (l.utcOffset = function () {
              return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
            }),
            (l.diff = function (n, h, a) {
              var f,
                c = g.p(h),
                m = _(n),
                b = (m.utcOffset() - this.utcOffset()) * i,
                v = this - m,
                E = g.m(this, m);
              return (
                (E =
                  ((f = {}),
                  (f[O] = E / 12),
                  (f[N] = E),
                  (f[$e] = E / 3),
                  (f[J] = (v - b) / 6048e5),
                  (f[C] = (v - b) / 864e5),
                  (f[S] = v / r),
                  (f[p] = v / i),
                  (f[o] = v / s),
                  f)[c] || v),
                a ? E : g.a(E)
              );
            }),
            (l.daysInMonth = function () {
              return this.endOf(N).$D;
            }),
            (l.$locale = function () {
              return W[this.$L];
            }),
            (l.locale = function (n, h) {
              if (!n) return this.$L;
              var a = this.clone(),
                f = X(n, h, !0);
              return f && (a.$L = f), a;
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
        Te = ee.prototype;
      return (
        (_.prototype = Te),
        [
          ["$ms", d],
          ["$s", o],
          ["$m", p],
          ["$H", S],
          ["$W", C],
          ["$M", N],
          ["$y", O],
          ["$D", z],
        ].forEach(function (u) {
          Te[u[1]] = function (l) {
            return this.$g(l, u[0], u[1]);
          };
        }),
        (_.extend = function (u, l) {
          return u.$i || (u(l, ee, _), (u.$i = !0)), _;
        }),
        (_.locale = X),
        (_.isDayjs = oe),
        (_.unix = function (u) {
          return _(1e3 * u);
        }),
        (_.en = W[G]),
        (_.Ls = W),
        (_.p = {}),
        _
      );
    });
  })(de);
  var Oe = de.exports;
  const re = xe(Oe),
    Re = (t) => re(t, void 0, !0).isValid(),
    ce = (t, e) => (e === "now" && (e = he()), re(t).isBefore(e)),
    fe = (t, e) => (e === "now" && (e = he()), re(t).isAfter(e)),
    Be = (t, e) => {
      e || j("dateBetween");
      const [s, i] = A(e != null ? e : "");
      return fe(t, s) && ce(t, i);
    },
    Fe = (t) => {
      if (t.split(":").length < 3) for (; t.split(":").length < 3; ) t += ":00";
      return /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/.test(t);
    },
    Z = (t, ...e) => !!t && t !== "",
    Ve = (t) => !0,
    We = (t, e) => (e || j("in"), A(e).includes(t)),
    Qe = (t, e) => (x(t) ? Y(t, e) : ne(t, e)),
    ze = (t) =>
      typeof t == "boolean" ||
      (typeof t == "string" &&
        ((t = t.toLowerCase()),
        t === "true" ||
          t === "false" ||
          t === "0" ||
          t === "1" ||
          t === "yes" ||
          t === "no")),
    ke = (t, e) => {
      var [s, i] = A(e != null ? e : "");
      return x(t)
        ? Y(t, i) && ie(t, s)
        : !q(t) && !x(t)
        ? Be(t, e)
        : ((s = Number(s)),
          (i = Number(i)),
          t !== void 0 && t !== Number && t !== "" && q(s) && q(i)
            ? ((t = Number(t)), q(t) ? be(t, i) && pe(t, s) : !1)
            : !1);
    },
    Pe = (t, e) => {
      if (!e) throw new Error("The regex rule argument must not be empty");
      return new RegExp(e).test(t);
    },
    je = (t, ...e) =>
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        t
      ),
    me = (t, e) => (t && F(t) ? t.length >= Number(e) : !1),
    ge = (t, e) => (t ? (F(t) ? t.length <= Number(e) : !1) : !0),
    F = (t) => typeof t == "string",
    Ge = (t) => /^(ftp|http|https):\/\/[^ "]+$/.test(t),
    Ue = (t) =>
      typeof t != "string" || t.length === 0 ? !1 : /^[A-Z]/.test(t),
    He = (t) =>
      typeof t != "string" || t.length === 0 ? !1 : /^[a-z]/.test(t),
    Ye = (t, e) => {
      e || j("startWith");
      const s = A(e != null ? e : "");
      return F(t) ? s.some((i) => t.startsWith(i)) : !1;
    },
    Ze = (t, e) => {
      e || j("endWith");
      const s = A(e != null ? e : "");
      return F(t) ? s.some((i) => t.endsWith(i)) : !1;
    },
    ve = (t, e) => {
      e || j("contains");
      const s = A(e != null ? e : "");
      return F(t) ? s.every((i) => t.includes(i)) : !1;
    },
    ne = (t, e) => {
      if (!q(e)) throw new Error("The length rule argument must be an integer");
      return (
        (e = parseInt(e)),
        typeof t == "string" || typeof t == "number"
          ? (t = t.toString().split(""))
          : typeof t == "object" && t !== null && t !== void 0 && (t = []),
        Array.isArray(t) ? t.length === e : !1
      );
    },
    Ke = (t) => {
      const s = /[A-Z]/.test(t),
        i = /[a-z]/.test(t),
        r = /\d/.test(t),
        d = /[!@#$%^&*(),.?":{}|<>]/.test(t);
      return !(t.length < 8 || !s || !i || !r || !d);
    },
    Je = (t) => (!F(t) || t.length === 0 ? !1 : /^[a-zA-Z]/.test(t)),
    Xe = (t) => (typeof t != "string" ? !1 : /[a-zA-Z]/.test(t)),
    et = (t, e) => !ve(t, e),
    tt = (t, e) => t === t.toLocaleUpperCase(),
    st = (t, e) => t === t.toLocaleLowerCase(),
    pe = (t, e) => {
      if (x(t)) return ie(t, e);
      if ((t == null && (t = 0), !q(e)))
        throw new Error("Min rule parameter must be an integer");
      return q(t) ? Number(t) >= Number(e) : me(t, e);
    },
    be = (t, e) => {
      if (x(t)) return Y(t, e);
      if (!q(e)) throw new Error("Min rule parameter must be an integer");
      return t == null && (t = 0), q(t) ? Number(t) <= Number(e) : ge(t, e);
    },
    _e = (t) => (q(t) ? Number.isInteger(Number(t)) : !1),
    q = (t) =>
      t === "" || t === null
        ? !1
        : t === "0" || t === 0 || t === "1" || t === 1
        ? !0
        : !isNaN(Number(t)) && typeof t != "boolean" && typeof t != "object";
  class it {
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
      if (typeof this.code == "string") {
        const e = [],
          s = this.code.split(",").map((i) => i.trim().toUpperCase());
        for (const i of s) {
          const r = `validate${i}`,
            d = this[r];
          if (typeof d == "function") e.push(d.call(this));
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
  const rt = (t, e) => new it(t, e).validPhoneNumber(),
    V = class {
      static rule(t, e, s) {
        V.addRule(t, e),
          V.addMessage(t, s != null ? s : "This input is invalide");
      }
      static addRule(t, e) {
        V.rules[t] = e;
      }
      static addMessage(t, e, s) {
        $.addMessage(t, e, s);
      }
      static hasRule(t) {
        return t in V.rules;
      }
      static getRule(t) {
        return V.rules[t];
      }
      static getMessage(t, e) {
        return $.getRuleMessage(t, e);
      }
      static allRules() {
        return V.rules;
      }
      static allMessages(t) {
        return $.getMessages(t);
      }
    };
  let Q = V;
  Q.rules = {
    required: Z,
    email: je,
    maxlength: ge,
    minlength: me,
    min: pe,
    max: be,
    string: F,
    between: ke,
    startWith: Ye,
    endWith: Ze,
    contains: ve,
    in: We,
    integer: _e,
    int: _e,
    number: q,
    numeric: q,
    url: Ge,
    length: ne,
    len: ne,
    file: x,
    maxFileSize: Y,
    minFileSize: ie,
    size: Qe,
    boolean: ze,
    startWithUpper: Ue,
    nullable: Ve,
    startWithLower: He,
    password: Ke,
    date: Re,
    before: ce,
    after: fe,
    phone: rt,
    time: Fe,
    startWithLetter: Je,
    excludes: et,
    hasLetter: Xe,
    regex: Pe,
    lower: st,
    upper: tt,
  };
  class K extends Ae {
    constructor(e, s, i) {
      super(e, s, i);
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
  }
  class nt {
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
  class at extends nt {
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
      const [i, ...r] = A(s != null ? s : "");
      if (i && r.length > 0) {
        const d = this.getInputValueByName(i);
        return r.includes(d) ? Z(e) : !0;
      }
      return !1;
    }
    requiredWhen(e, s) {
      const [i, ...r] = A(s != null ? s : "");
      return i && r.length > 0
        ? r.some((o) => (console.log(o), Z(this.getInputValueByName(o))))
          ? Z(e)
          : !0
        : !1;
    }
  }
  class ae {
    constructor(e, s) {
      (this._emitOnFails = !0),
        (this._emitOnPasses = !0),
        (this._qvInputs = []),
        (this.config = { auto: !0 }),
        this.setContainer(e),
        (this._formValidator = new at(this.container)),
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
        this.config.auto &&
          (this.disableButton(),
          this.validateOnChange(),
          this.validateOnQvValidated()),
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
      this.submitButton && this.submitButton.setAttribute("disabled", "true");
    }
    enableButton() {
      this.submitButton && this.submitButton.removeAttribute("disabled");
    }
    validateOnChange(e) {
      this.__call(e, this), this.on("change", this._handle.bind(this));
    }
    validateOnQvValidated(e) {
      this.__call(e, this),
        this.on("qv.input.validated", this._handle.bind(this));
    }
    _handle(e) {
      e.stopPropagation(),
        this.isValid()
          ? this._emitQvOnPassesEvent()
          : this._emitQvOnFailsEvent();
    }
    isValid() {
      return this._qvInputs.every((e) => e.valid());
    }
    _onSubmit() {
      this.on("submit", (e) => {
        this.container.querySelectorAll("[data-qv-rules]").forEach((s) => {
          new K(s, {}, { emitEvent: !1 }).validate();
        }),
          this.isValid()
            ? this._emitQvOnPassesEvent()
            : (this._emitQvOnFailsEvent(), e.preventDefault());
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
          ((this.config = I(I({}, this.config), e)), e.local))
      ) {
        const d = e.local;
        d.lang && (s = d.lang);
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
      this.emit("qv.input.validated");
    }
    onInit(e) {
      typeof e == "function" && this.__call(e, this);
    }
    _initQvInputs() {
      const e = Array.from(
        this.container.querySelectorAll("[data-qv-rules]")
      ).map((s) => new K(s));
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
        ["change", "qv.input.validated"].forEach((e) => {
          this.container.removeEventListener(e, this._handle);
        });
      for (const e of this._qvInputs) e.destroy();
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
  class we {
    constructor() {
      this.config = P;
    }
    init(e) {
      this.setConfig(e),
        document.querySelectorAll("form").forEach((s) => {
          new ae(s).init();
        });
    }
    rule(e, s, i) {
      Q.rule(e, s, i);
    }
    setConfig(e) {
      (this.config = P),
        e && typeof e == "object" && (this.config = I(I({}, this.config), e));
    }
  }
  class lt {
    constructor(e) {
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
        const { ruleName: i, params: r } = se(s),
          d = Q.getRule(i),
          o = this._makeRuleExcutedInstance(i);
        if (((o.params = r), !d))
          throw new Error(`The rule ${i} is not defined`);
        if (
          (o.wasRunWith(this._value)
            ? (o.passed = o.passed)
            : ((o.passed = d(this._value, r)),
              (o.valueTested = this._value),
              (o.run = !0)),
          this._failOnfirst)
        ) {
          if (!o.passed) {
            this._parseRuleMessage(o), this._addRuleExecuted(o);
            break;
          }
        } else
          o.passed ? (o.message = "") : this._parseRuleMessage(o),
            this._addRuleExecuted(o);
      }
      return !this.hasErrors();
    }
    getErrors() {
      var s;
      const e = {};
      for (const i of this._ruleExecuted)
        i.passed || (e[i.ruleName] = (s = i.message) != null ? s : "");
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
    _makeRuleExcutedInstance(e) {
      let s = this._ruleExecuted.find((i) => i.isNamed(e));
      return s != null ? s : new ot(e);
    }
    _addRuleExecuted(e) {
      this._ruleExecuted.includes(e) || this._ruleExecuted.push(e);
    }
    _parseRuleMessage(e) {
      const s = new Ne().setMessages(this._qvmessages),
        i = s.parseMessage(
          this._attr,
          e.ruleName,
          s.getRulesMessages([e.ruleName])[0],
          e.params
        );
      return (e.message = i), e;
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
      var s, i, r;
      (this._attr = (s = e.attribute) != null ? s : ""),
        (this._failOnfirst = e.failsOnfirst !== void 0 && e.failsOnfirst),
        (this._rules = (i = e.rules) != null ? i : []),
        (this._qvmessages = (r = e.errors) != null ? r : {});
    }
  }
  class ot {
    constructor(e) {
      (this.passed = !1),
        (this.message = null),
        (this.run = !1),
        (this.ruleName = e);
    }
    wasRunWith(e) {
      return this.valueTested === e && this.run;
    }
    isNamed(e) {
      return this.ruleName === e;
    }
  }
  typeof window != "undefined" &&
    ((window.QvInput = (ye = window.QvInput) != null ? ye : K),
    (window.QvForm = (Ee = window.QvForm) != null ? Ee : ae),
    (window.Quickv = (Me = window.Quickv) != null ? Me : we)),
    (w.Quickv = we),
    (w.QvConfig = P),
    (w.QvForm = ae),
    (w.QvInput = K),
    Object.defineProperty(w, Symbol.toStringTag, { value: "Module" });
});
