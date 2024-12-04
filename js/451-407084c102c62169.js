(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[451], {
  485: function(e, t, r) {
      "use strict";
      r.r(t),
      r.d(t, {
          Headers: function() {
              return s
          },
          Request: function() {
              return o
          },
          Response: function() {
              return a
          },
          fetch: function() {
              return i
          }
      });
      var n = function() {
          if ("undefined" != typeof self)
              return self;
          if ("undefined" != typeof window)
              return window;
          if (void 0 !== r.g)
              return r.g;
          throw Error("unable to locate global object")
      }();
      let i = n.fetch;
      t.default = n.fetch.bind(n);
      let s = n.Headers
        , o = n.Request
        , a = n.Response
  },
  5257: function(e, t, r) {
      "use strict";
      var n = this && this.__importDefault || function(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      ;
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      let i = n(r(485))
        , s = n(r(3038));
      class o {
          constructor(e) {
              this.shouldThrowOnError = !1,
              this.method = e.method,
              this.url = e.url,
              this.headers = e.headers,
              this.schema = e.schema,
              this.body = e.body,
              this.shouldThrowOnError = e.shouldThrowOnError,
              this.signal = e.signal,
              this.isMaybeSingle = e.isMaybeSingle,
              e.fetch ? this.fetch = e.fetch : "undefined" == typeof fetch ? this.fetch = i.default : this.fetch = fetch
          }
          throwOnError() {
              return this.shouldThrowOnError = !0,
              this
          }
          setHeader(e, t) {
              return this.headers = Object.assign({}, this.headers),
              this.headers[e] = t,
              this
          }
          then(e, t) {
              void 0 === this.schema || (["GET", "HEAD"].includes(this.method) ? this.headers["Accept-Profile"] = this.schema : this.headers["Content-Profile"] = this.schema),
              "GET" !== this.method && "HEAD" !== this.method && (this.headers["Content-Type"] = "application/json");
              let r = (0,
              this.fetch)(this.url.toString(), {
                  method: this.method,
                  headers: this.headers,
                  body: JSON.stringify(this.body),
                  signal: this.signal
              }).then(async e => {
                  var t, r, n;
                  let i = null
                    , o = null
                    , a = null
                    , l = e.status
                    , u = e.statusText;
                  if (e.ok) {
                      if ("HEAD" !== this.method) {
                          let t = await e.text();
                          "" === t || (o = "text/csv" === this.headers.Accept ? t : this.headers.Accept && this.headers.Accept.includes("application/vnd.pgrst.plan+text") ? t : JSON.parse(t))
                      }
                      let n = null === (t = this.headers.Prefer) || void 0 === t ? void 0 : t.match(/count=(exact|planned|estimated)/)
                        , s = null === (r = e.headers.get("content-range")) || void 0 === r ? void 0 : r.split("/");
                      n && s && s.length > 1 && (a = parseInt(s[1])),
                      this.isMaybeSingle && "GET" === this.method && Array.isArray(o) && (o.length > 1 ? (i = {
                          code: "PGRST116",
                          details: `Results contain ${o.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                          hint: null,
                          message: "JSON object requested, multiple (or no) rows returned"
                      },
                      o = null,
                      a = null,
                      l = 406,
                      u = "Not Acceptable") : o = 1 === o.length ? o[0] : null)
                  } else {
                      let t = await e.text();
                      try {
                          i = JSON.parse(t),
                          Array.isArray(i) && 404 === e.status && (o = [],
                          i = null,
                          l = 200,
                          u = "OK")
                      } catch (r) {
                          404 === e.status && "" === t ? (l = 204,
                          u = "No Content") : i = {
                              message: t
                          }
                      }
                      if (i && this.isMaybeSingle && (null === (n = null == i ? void 0 : i.details) || void 0 === n ? void 0 : n.includes("0 rows")) && (i = null,
                      l = 200,
                      u = "OK"),
                      i && this.shouldThrowOnError)
                          throw new s.default(i)
                  }
                  return {
                      error: i,
                      data: o,
                      count: a,
                      status: l,
                      statusText: u
                  }
              }
              );
              return this.shouldThrowOnError || (r = r.catch(e => {
                  var t, r, n;
                  return {
                      error: {
                          message: `${null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : "FetchError"}: ${null == e ? void 0 : e.message}`,
                          details: `${null !== (r = null == e ? void 0 : e.stack) && void 0 !== r ? r : ""}`,
                          hint: "",
                          code: `${null !== (n = null == e ? void 0 : e.code) && void 0 !== n ? n : ""}`
                      },
                      data: null,
                      count: null,
                      status: 0,
                      statusText: ""
                  }
              }
              )),
              r.then(e, t)
          }
      }
      t.default = o
  },
  9590: function(e, t, r) {
      "use strict";
      var n = this && this.__importDefault || function(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      ;
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      let i = n(r(9824))
        , s = n(r(2495))
        , o = r(2168);
      class a {
          constructor(e, {headers: t={}, schema: r, fetch: n}={}) {
              this.url = e,
              this.headers = Object.assign(Object.assign({}, o.DEFAULT_HEADERS), t),
              this.schemaName = r,
              this.fetch = n
          }
          from(e) {
              let t = new URL(`${this.url}/${e}`);
              return new i.default(t,{
                  headers: Object.assign({}, this.headers),
                  schema: this.schemaName,
                  fetch: this.fetch
              })
          }
          schema(e) {
              return new a(this.url,{
                  headers: this.headers,
                  schema: e,
                  fetch: this.fetch
              })
          }
          rpc(e, t={}, {head: r=!1, get: n=!1, count: i}={}) {
              let o, a;
              let l = new URL(`${this.url}/rpc/${e}`);
              r || n ? (o = r ? "HEAD" : "GET",
              Object.entries(t).filter( ([e,t]) => void 0 !== t).map( ([e,t]) => [e, Array.isArray(t) ? `{${t.join(",")}}` : `${t}`]).forEach( ([e,t]) => {
                  l.searchParams.append(e, t)
              }
              )) : (o = "POST",
              a = t);
              let u = Object.assign({}, this.headers);
              return i && (u.Prefer = `count=${i}`),
              new s.default({
                  method: o,
                  url: l,
                  headers: u,
                  schema: this.schemaName,
                  body: a,
                  fetch: this.fetch,
                  allowEmpty: !1
              })
          }
      }
      t.default = a
  },
  3038: function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      class r extends Error {
          constructor(e) {
              super(e.message),
              this.name = "PostgrestError",
              this.details = e.details,
              this.hint = e.hint,
              this.code = e.code
          }
      }
      t.default = r
  },
  2495: function(e, t, r) {
      "use strict";
      var n = this && this.__importDefault || function(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      ;
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      let i = n(r(3377));
      class s extends i.default {
          eq(e, t) {
              return this.url.searchParams.append(e, `eq.${t}`),
              this
          }
          neq(e, t) {
              return this.url.searchParams.append(e, `neq.${t}`),
              this
          }
          gt(e, t) {
              return this.url.searchParams.append(e, `gt.${t}`),
              this
          }
          gte(e, t) {
              return this.url.searchParams.append(e, `gte.${t}`),
              this
          }
          lt(e, t) {
              return this.url.searchParams.append(e, `lt.${t}`),
              this
          }
          lte(e, t) {
              return this.url.searchParams.append(e, `lte.${t}`),
              this
          }
          like(e, t) {
              return this.url.searchParams.append(e, `like.${t}`),
              this
          }
          likeAllOf(e, t) {
              return this.url.searchParams.append(e, `like(all).{${t.join(",")}}`),
              this
          }
          likeAnyOf(e, t) {
              return this.url.searchParams.append(e, `like(any).{${t.join(",")}}`),
              this
          }
          ilike(e, t) {
              return this.url.searchParams.append(e, `ilike.${t}`),
              this
          }
          ilikeAllOf(e, t) {
              return this.url.searchParams.append(e, `ilike(all).{${t.join(",")}}`),
              this
          }
          ilikeAnyOf(e, t) {
              return this.url.searchParams.append(e, `ilike(any).{${t.join(",")}}`),
              this
          }
          is(e, t) {
              return this.url.searchParams.append(e, `is.${t}`),
              this
          }
          in(e, t) {
              let r = Array.from(new Set(t)).map(e => "string" == typeof e && RegExp("[,()]").test(e) ? `"${e}"` : `${e}`).join(",");
              return this.url.searchParams.append(e, `in.(${r})`),
              this
          }
          contains(e, t) {
              return "string" == typeof t ? this.url.searchParams.append(e, `cs.${t}`) : Array.isArray(t) ? this.url.searchParams.append(e, `cs.{${t.join(",")}}`) : this.url.searchParams.append(e, `cs.${JSON.stringify(t)}`),
              this
          }
          containedBy(e, t) {
              return "string" == typeof t ? this.url.searchParams.append(e, `cd.${t}`) : Array.isArray(t) ? this.url.searchParams.append(e, `cd.{${t.join(",")}}`) : this.url.searchParams.append(e, `cd.${JSON.stringify(t)}`),
              this
          }
          rangeGt(e, t) {
              return this.url.searchParams.append(e, `sr.${t}`),
              this
          }
          rangeGte(e, t) {
              return this.url.searchParams.append(e, `nxl.${t}`),
              this
          }
          rangeLt(e, t) {
              return this.url.searchParams.append(e, `sl.${t}`),
              this
          }
          rangeLte(e, t) {
              return this.url.searchParams.append(e, `nxr.${t}`),
              this
          }
          rangeAdjacent(e, t) {
              return this.url.searchParams.append(e, `adj.${t}`),
              this
          }
          overlaps(e, t) {
              return "string" == typeof t ? this.url.searchParams.append(e, `ov.${t}`) : this.url.searchParams.append(e, `ov.{${t.join(",")}}`),
              this
          }
          textSearch(e, t, {config: r, type: n}={}) {
              let i = "";
              "plain" === n ? i = "pl" : "phrase" === n ? i = "ph" : "websearch" === n && (i = "w");
              let s = void 0 === r ? "" : `(${r})`;
              return this.url.searchParams.append(e, `${i}fts${s}.${t}`),
              this
          }
          match(e) {
              return Object.entries(e).forEach( ([e,t]) => {
                  this.url.searchParams.append(e, `eq.${t}`)
              }
              ),
              this
          }
          not(e, t, r) {
              return this.url.searchParams.append(e, `not.${t}.${r}`),
              this
          }
          or(e, {foreignTable: t, referencedTable: r=t}={}) {
              let n = r ? `${r}.or` : "or";
              return this.url.searchParams.append(n, `(${e})`),
              this
          }
          filter(e, t, r) {
              return this.url.searchParams.append(e, `${t}.${r}`),
              this
          }
      }
      t.default = s
  },
  9824: function(e, t, r) {
      "use strict";
      var n = this && this.__importDefault || function(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      ;
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      let i = n(r(2495));
      class s {
          constructor(e, {headers: t={}, schema: r, fetch: n}) {
              this.url = e,
              this.headers = t,
              this.schema = r,
              this.fetch = n
          }
          select(e, {head: t=!1, count: r}={}) {
              let n = !1
                , s = (null != e ? e : "*").split("").map(e => /\s/.test(e) && !n ? "" : ('"' === e && (n = !n),
              e)).join("");
              return this.url.searchParams.set("select", s),
              r && (this.headers.Prefer = `count=${r}`),
              new i.default({
                  method: t ? "HEAD" : "GET",
                  url: this.url,
                  headers: this.headers,
                  schema: this.schema,
                  fetch: this.fetch,
                  allowEmpty: !1
              })
          }
          insert(e, {count: t, defaultToNull: r=!0}={}) {
              let n = [];
              if (this.headers.Prefer && n.push(this.headers.Prefer),
              t && n.push(`count=${t}`),
              r || n.push("missing=default"),
              this.headers.Prefer = n.join(","),
              Array.isArray(e)) {
                  let t = e.reduce( (e, t) => e.concat(Object.keys(t)), []);
                  if (t.length > 0) {
                      let e = [...new Set(t)].map(e => `"${e}"`);
                      this.url.searchParams.set("columns", e.join(","))
                  }
              }
              return new i.default({
                  method: "POST",
                  url: this.url,
                  headers: this.headers,
                  schema: this.schema,
                  body: e,
                  fetch: this.fetch,
                  allowEmpty: !1
              })
          }
          upsert(e, {onConflict: t, ignoreDuplicates: r=!1, count: n, defaultToNull: s=!0}={}) {
              let o = [`resolution=${r ? "ignore" : "merge"}-duplicates`];
              if (void 0 !== t && this.url.searchParams.set("on_conflict", t),
              this.headers.Prefer && o.push(this.headers.Prefer),
              n && o.push(`count=${n}`),
              s || o.push("missing=default"),
              this.headers.Prefer = o.join(","),
              Array.isArray(e)) {
                  let t = e.reduce( (e, t) => e.concat(Object.keys(t)), []);
                  if (t.length > 0) {
                      let e = [...new Set(t)].map(e => `"${e}"`);
                      this.url.searchParams.set("columns", e.join(","))
                  }
              }
              return new i.default({
                  method: "POST",
                  url: this.url,
                  headers: this.headers,
                  schema: this.schema,
                  body: e,
                  fetch: this.fetch,
                  allowEmpty: !1
              })
          }
          update(e, {count: t}={}) {
              let r = [];
              return this.headers.Prefer && r.push(this.headers.Prefer),
              t && r.push(`count=${t}`),
              this.headers.Prefer = r.join(","),
              new i.default({
                  method: "PATCH",
                  url: this.url,
                  headers: this.headers,
                  schema: this.schema,
                  body: e,
                  fetch: this.fetch,
                  allowEmpty: !1
              })
          }
          delete({count: e}={}) {
              let t = [];
              return e && t.push(`count=${e}`),
              this.headers.Prefer && t.unshift(this.headers.Prefer),
              this.headers.Prefer = t.join(","),
              new i.default({
                  method: "DELETE",
                  url: this.url,
                  headers: this.headers,
                  schema: this.schema,
                  fetch: this.fetch,
                  allowEmpty: !1
              })
          }
      }
      t.default = s
  },
  3377: function(e, t, r) {
      "use strict";
      var n = this && this.__importDefault || function(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      ;
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      let i = n(r(5257));
      class s extends i.default {
          select(e) {
              let t = !1
                , r = (null != e ? e : "*").split("").map(e => /\s/.test(e) && !t ? "" : ('"' === e && (t = !t),
              e)).join("");
              return this.url.searchParams.set("select", r),
              this.headers.Prefer && (this.headers.Prefer += ","),
              this.headers.Prefer += "return=representation",
              this
          }
          order(e, {ascending: t=!0, nullsFirst: r, foreignTable: n, referencedTable: i=n}={}) {
              let s = i ? `${i}.order` : "order"
                , o = this.url.searchParams.get(s);
              return this.url.searchParams.set(s, `${o ? `${o},` : ""}${e}.${t ? "asc" : "desc"}${void 0 === r ? "" : r ? ".nullsfirst" : ".nullslast"}`),
              this
          }
          limit(e, {foreignTable: t, referencedTable: r=t}={}) {
              let n = void 0 === r ? "limit" : `${r}.limit`;
              return this.url.searchParams.set(n, `${e}`),
              this
          }
          range(e, t, {foreignTable: r, referencedTable: n=r}={}) {
              let i = void 0 === n ? "offset" : `${n}.offset`
                , s = void 0 === n ? "limit" : `${n}.limit`;
              return this.url.searchParams.set(i, `${e}`),
              this.url.searchParams.set(s, `${t - e + 1}`),
              this
          }
          abortSignal(e) {
              return this.signal = e,
              this
          }
          single() {
              return this.headers.Accept = "application/vnd.pgrst.object+json",
              this
          }
          maybeSingle() {
              return "GET" === this.method ? this.headers.Accept = "application/json" : this.headers.Accept = "application/vnd.pgrst.object+json",
              this.isMaybeSingle = !0,
              this
          }
          csv() {
              return this.headers.Accept = "text/csv",
              this
          }
          geojson() {
              return this.headers.Accept = "application/geo+json",
              this
          }
          explain({analyze: e=!1, verbose: t=!1, settings: r=!1, buffers: n=!1, wal: i=!1, format: s="text"}={}) {
              var o;
              let a = [e ? "analyze" : null, t ? "verbose" : null, r ? "settings" : null, n ? "buffers" : null, i ? "wal" : null].filter(Boolean).join("|")
                , l = null !== (o = this.headers.Accept) && void 0 !== o ? o : "application/json";
              return this.headers.Accept = `application/vnd.pgrst.plan+${s}; for="${l}"; options=${a};`,
              this
          }
          rollback() {
              var e;
              return (null !== (e = this.headers.Prefer) && void 0 !== e ? e : "").trim().length > 0 ? this.headers.Prefer += ",tx=rollback" : this.headers.Prefer = "tx=rollback",
              this
          }
          returns() {
              return this
          }
      }
      t.default = s
  },
  2168: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      t.DEFAULT_HEADERS = void 0;
      let n = r(1780);
      t.DEFAULT_HEADERS = {
          "X-Client-Info": `postgrest-js/${n.version}`
      }
  },
  9640: function(e, t, r) {
      "use strict";
      var n = this && this.__importDefault || function(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      ;
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      t.PostgrestError = t.PostgrestBuilder = t.PostgrestTransformBuilder = t.PostgrestFilterBuilder = t.PostgrestQueryBuilder = t.PostgrestClient = void 0;
      let i = n(r(9590));
      t.PostgrestClient = i.default;
      let s = n(r(9824));
      t.PostgrestQueryBuilder = s.default;
      let o = n(r(2495));
      t.PostgrestFilterBuilder = o.default;
      let a = n(r(3377));
      t.PostgrestTransformBuilder = a.default;
      let l = n(r(5257));
      t.PostgrestBuilder = l.default;
      let u = n(r(3038));
      t.PostgrestError = u.default,
      t.default = {
          PostgrestClient: i.default,
          PostgrestQueryBuilder: s.default,
          PostgrestFilterBuilder: o.default,
          PostgrestTransformBuilder: a.default,
          PostgrestBuilder: l.default,
          PostgrestError: u.default
      }
  },
  1780: function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      t.version = void 0,
      t.version = "0.0.0-automated"
  },
  3777: function(e, t, r) {
      "use strict";
      r.d(t, {
          eI: function() {
              return tR
          }
      });
      let n = e => {
          let t;
          return e ? t = e : "undefined" == typeof fetch ? t = (...e) => Promise.resolve().then(r.bind(r, 485)).then( ({default: t}) => t(...e)) : t = fetch,
          (...e) => t(...e)
      }
      ;
      class i extends Error {
          constructor(e, t="FunctionsError", r) {
              super(e),
              this.name = t,
              this.context = r
          }
      }
      class s extends i {
          constructor(e) {
              super("Failed to send a request to the Edge Function", "FunctionsFetchError", e)
          }
      }
      class o extends i {
          constructor(e) {
              super("Relay Error invoking the Edge Function", "FunctionsRelayError", e)
          }
      }
      class a extends i {
          constructor(e) {
              super("Edge Function returned a non-2xx status code", "FunctionsHttpError", e)
          }
      }
      (F = W || (W = {})).Any = "any",
      F.ApNortheast1 = "ap-northeast-1",
      F.ApNortheast2 = "ap-northeast-2",
      F.ApSouth1 = "ap-south-1",
      F.ApSoutheast1 = "ap-southeast-1",
      F.ApSoutheast2 = "ap-southeast-2",
      F.CaCentral1 = "ca-central-1",
      F.EuCentral1 = "eu-central-1",
      F.EuWest1 = "eu-west-1",
      F.EuWest2 = "eu-west-2",
      F.EuWest3 = "eu-west-3",
      F.SaEast1 = "sa-east-1",
      F.UsEast1 = "us-east-1",
      F.UsWest1 = "us-west-1",
      F.UsWest2 = "us-west-2";
      class l {
          constructor(e, {headers: t={}, customFetch: r, region: i=W.Any}={}) {
              this.url = e,
              this.headers = t,
              this.region = i,
              this.fetch = n(r)
          }
          setAuth(e) {
              this.headers.Authorization = `Bearer ${e}`
          }
          invoke(e, t={}) {
              var r, n, i, l, u;
              return n = this,
              i = void 0,
              l = void 0,
              u = function*() {
                  try {
                      let n;
                      let {headers: i, method: l, body: u} = t
                        , c = {}
                        , {region: d} = t;
                      d || (d = this.region),
                      d && "any" !== d && (c["x-region"] = d),
                      u && (i && !Object.prototype.hasOwnProperty.call(i, "Content-Type") || !i) && ("undefined" != typeof Blob && u instanceof Blob || u instanceof ArrayBuffer ? (c["Content-Type"] = "application/octet-stream",
                      n = u) : "string" == typeof u ? (c["Content-Type"] = "text/plain",
                      n = u) : "undefined" != typeof FormData && u instanceof FormData ? n = u : (c["Content-Type"] = "application/json",
                      n = JSON.stringify(u)));
                      let h = yield this.fetch(`${this.url}/${e}`, {
                          method: l || "POST",
                          headers: Object.assign(Object.assign(Object.assign({}, c), this.headers), i),
                          body: n
                      }).catch(e => {
                          throw new s(e)
                      }
                      )
                        , f = h.headers.get("x-relay-error");
                      if (f && "true" === f)
                          throw new o(h);
                      if (!h.ok)
                          throw new a(h);
                      let p = (null !== (r = h.headers.get("Content-Type")) && void 0 !== r ? r : "text/plain").split(";")[0].trim();
                      return {
                          data: "application/json" === p ? yield h.json() : "application/octet-stream" === p ? yield h.blob() : "text/event-stream" === p ? h : "multipart/form-data" === p ? yield h.formData() : yield h.text(),
                          error: null
                      }
                  } catch (e) {
                      return {
                          data: null,
                          error: e
                      }
                  }
              }
              ,
              new (l || (l = Promise))(function(e, t) {
                  function r(e) {
                      try {
                          o(u.next(e))
                      } catch (e) {
                          t(e)
                      }
                  }
                  function s(e) {
                      try {
                          o(u.throw(e))
                      } catch (e) {
                          t(e)
                      }
                  }
                  function o(t) {
                      var n;
                      t.done ? e(t.value) : ((n = t.value)instanceof l ? n : new l(function(e) {
                          e(n)
                      }
                      )).then(r, s)
                  }
                  o((u = u.apply(n, i || [])).next())
              }
              )
          }
      }
      let {PostgrestClient: u, PostgrestQueryBuilder: c, PostgrestFilterBuilder: d, PostgrestTransformBuilder: h, PostgrestBuilder: f} = r(9640)
        , p = {
          "X-Client-Info": "realtime-js/2.10.9"
      };
      (ee = q || (q = {}))[ee.connecting = 0] = "connecting",
      ee[ee.open = 1] = "open",
      ee[ee.closing = 2] = "closing",
      ee[ee.closed = 3] = "closed",
      (et = K || (K = {})).closed = "closed",
      et.errored = "errored",
      et.joined = "joined",
      et.joining = "joining",
      et.leaving = "leaving",
      (er = G || (G = {})).close = "phx_close",
      er.error = "phx_error",
      er.join = "phx_join",
      er.reply = "phx_reply",
      er.leave = "phx_leave",
      er.access_token = "access_token",
      (H || (H = {})).websocket = "websocket",
      (en = J || (J = {})).Connecting = "connecting",
      en.Open = "open",
      en.Closing = "closing",
      en.Closed = "closed";
      class g {
          constructor() {
              this.HEADER_LENGTH = 1
          }
          decode(e, t) {
              return e.constructor === ArrayBuffer ? t(this._binaryDecode(e)) : "string" == typeof e ? t(JSON.parse(e)) : t({})
          }
          _binaryDecode(e) {
              let t = new DataView(e)
                , r = new TextDecoder;
              return this._decodeBroadcast(e, t, r)
          }
          _decodeBroadcast(e, t, r) {
              let n = t.getUint8(1)
                , i = t.getUint8(2)
                , s = this.HEADER_LENGTH + 2
                , o = r.decode(e.slice(s, s + n));
              s += n;
              let a = r.decode(e.slice(s, s + i));
              return s += i,
              {
                  ref: null,
                  topic: o,
                  event: a,
                  payload: JSON.parse(r.decode(e.slice(s, e.byteLength)))
              }
          }
      }
      class m {
          constructor(e, t) {
              this.callback = e,
              this.timerCalc = t,
              this.timer = void 0,
              this.tries = 0,
              this.callback = e,
              this.timerCalc = t
          }
          reset() {
              this.tries = 0,
              clearTimeout(this.timer)
          }
          scheduleTimeout() {
              clearTimeout(this.timer),
              this.timer = setTimeout( () => {
                  this.tries = this.tries + 1,
                  this.callback()
              }
              , this.timerCalc(this.tries + 1))
          }
      }
      (ei = V || (V = {})).abstime = "abstime",
      ei.bool = "bool",
      ei.date = "date",
      ei.daterange = "daterange",
      ei.float4 = "float4",
      ei.float8 = "float8",
      ei.int2 = "int2",
      ei.int4 = "int4",
      ei.int4range = "int4range",
      ei.int8 = "int8",
      ei.int8range = "int8range",
      ei.json = "json",
      ei.jsonb = "jsonb",
      ei.money = "money",
      ei.numeric = "numeric",
      ei.oid = "oid",
      ei.reltime = "reltime",
      ei.text = "text",
      ei.time = "time",
      ei.timestamp = "timestamp",
      ei.timestamptz = "timestamptz",
      ei.timetz = "timetz",
      ei.tsrange = "tsrange",
      ei.tstzrange = "tstzrange";
      let v = (e, t, r={}) => {
          var n;
          let i = null !== (n = r.skipTypes) && void 0 !== n ? n : [];
          return Object.keys(t).reduce( (r, n) => (r[n] = y(n, e, t, i),
          r), {})
      }
        , y = (e, t, r, n) => {
          let i = t.find(t => t.name === e)
            , s = null == i ? void 0 : i.type
            , o = r[e];
          return s && !n.includes(s) ? b(s, o) : w(o)
      }
        , b = (e, t) => {
          if ("_" === e.charAt(0))
              return x(t, e.slice(1, e.length));
          switch (e) {
          case V.bool:
              return _(t);
          case V.float4:
          case V.float8:
          case V.int2:
          case V.int4:
          case V.int8:
          case V.numeric:
          case V.oid:
              return E(t);
          case V.json:
          case V.jsonb:
              return k(t);
          case V.timestamp:
              return S(t);
          case V.abstime:
          case V.date:
          case V.daterange:
          case V.int4range:
          case V.int8range:
          case V.money:
          case V.reltime:
          case V.text:
          case V.time:
          case V.timestamptz:
          case V.timetz:
          case V.tsrange:
          case V.tstzrange:
          default:
              return w(t)
          }
      }
        , w = e => e
        , _ = e => {
          switch (e) {
          case "t":
              return !0;
          case "f":
              return !1;
          default:
              return e
          }
      }
        , E = e => {
          if ("string" == typeof e) {
              let t = parseFloat(e);
              if (!Number.isNaN(t))
                  return t
          }
          return e
      }
        , k = e => {
          if ("string" == typeof e)
              try {
                  return JSON.parse(e)
              } catch (e) {
                  console.log(`JSON parse error: ${e}`)
              }
          return e
      }
        , x = (e, t) => {
          if ("string" != typeof e)
              return e;
          let r = e.length - 1
            , n = e[r];
          if ("{" === e[0] && "}" === n) {
              let n;
              let i = e.slice(1, r);
              try {
                  n = JSON.parse("[" + i + "]")
              } catch (e) {
                  n = i ? i.split(",") : []
              }
              return n.map(e => b(t, e))
          }
          return e
      }
        , S = e => "string" == typeof e ? e.replace(" ", "T") : e
        , T = e => {
          let t = e;
          return (t = (t = t.replace(/^ws/i, "http")).replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, "")).replace(/\/+$/, "")
      }
      ;
      class j {
          constructor(e, t, r={}, n=1e4) {
              this.channel = e,
              this.event = t,
              this.payload = r,
              this.timeout = n,
              this.sent = !1,
              this.timeoutTimer = void 0,
              this.ref = "",
              this.receivedResp = null,
              this.recHooks = [],
              this.refEvent = null
          }
          resend(e) {
              this.timeout = e,
              this._cancelRefEvent(),
              this.ref = "",
              this.refEvent = null,
              this.receivedResp = null,
              this.sent = !1,
              this.send()
          }
          send() {
              this._hasReceived("timeout") || (this.startTimeout(),
              this.sent = !0,
              this.channel.socket.push({
                  topic: this.channel.topic,
                  event: this.event,
                  payload: this.payload,
                  ref: this.ref,
                  join_ref: this.channel._joinRef()
              }))
          }
          updatePayload(e) {
              this.payload = Object.assign(Object.assign({}, this.payload), e)
          }
          receive(e, t) {
              var r;
              return this._hasReceived(e) && t(null === (r = this.receivedResp) || void 0 === r ? void 0 : r.response),
              this.recHooks.push({
                  status: e,
                  callback: t
              }),
              this
          }
          startTimeout() {
              this.timeoutTimer || (this.ref = this.channel.socket._makeRef(),
              this.refEvent = this.channel._replyEventName(this.ref),
              this.channel._on(this.refEvent, {}, e => {
                  this._cancelRefEvent(),
                  this._cancelTimeout(),
                  this.receivedResp = e,
                  this._matchReceive(e)
              }
              ),
              this.timeoutTimer = setTimeout( () => {
                  this.trigger("timeout", {})
              }
              , this.timeout))
          }
          trigger(e, t) {
              this.refEvent && this.channel._trigger(this.refEvent, {
                  status: e,
                  response: t
              })
          }
          destroy() {
              this._cancelRefEvent(),
              this._cancelTimeout()
          }
          _cancelRefEvent() {
              this.refEvent && this.channel._off(this.refEvent, {})
          }
          _cancelTimeout() {
              clearTimeout(this.timeoutTimer),
              this.timeoutTimer = void 0
          }
          _matchReceive({status: e, response: t}) {
              this.recHooks.filter(t => t.status === e).forEach(e => e.callback(t))
          }
          _hasReceived(e) {
              return this.receivedResp && this.receivedResp.status === e
          }
      }
      (es = Y || (Y = {})).SYNC = "sync",
      es.JOIN = "join",
      es.LEAVE = "leave";
      class P {
          constructor(e, t) {
              this.channel = e,
              this.state = {},
              this.pendingDiffs = [],
              this.joinRef = null,
              this.caller = {
                  onJoin: () => {}
                  ,
                  onLeave: () => {}
                  ,
                  onSync: () => {}
              };
              let r = (null == t ? void 0 : t.events) || {
                  state: "presence_state",
                  diff: "presence_diff"
              };
              this.channel._on(r.state, {}, e => {
                  let {onJoin: t, onLeave: r, onSync: n} = this.caller;
                  this.joinRef = this.channel._joinRef(),
                  this.state = P.syncState(this.state, e, t, r),
                  this.pendingDiffs.forEach(e => {
                      this.state = P.syncDiff(this.state, e, t, r)
                  }
                  ),
                  this.pendingDiffs = [],
                  n()
              }
              ),
              this.channel._on(r.diff, {}, e => {
                  let {onJoin: t, onLeave: r, onSync: n} = this.caller;
                  this.inPendingSyncState() ? this.pendingDiffs.push(e) : (this.state = P.syncDiff(this.state, e, t, r),
                  n())
              }
              ),
              this.onJoin( (e, t, r) => {
                  this.channel._trigger("presence", {
                      event: "join",
                      key: e,
                      currentPresences: t,
                      newPresences: r
                  })
              }
              ),
              this.onLeave( (e, t, r) => {
                  this.channel._trigger("presence", {
                      event: "leave",
                      key: e,
                      currentPresences: t,
                      leftPresences: r
                  })
              }
              ),
              this.onSync( () => {
                  this.channel._trigger("presence", {
                      event: "sync"
                  })
              }
              )
          }
          static syncState(e, t, r, n) {
              let i = this.cloneDeep(e)
                , s = this.transformState(t)
                , o = {}
                , a = {};
              return this.map(i, (e, t) => {
                  s[e] || (a[e] = t)
              }
              ),
              this.map(s, (e, t) => {
                  let r = i[e];
                  if (r) {
                      let n = t.map(e => e.presence_ref)
                        , i = r.map(e => e.presence_ref)
                        , s = t.filter(e => 0 > i.indexOf(e.presence_ref))
                        , l = r.filter(e => 0 > n.indexOf(e.presence_ref));
                      s.length > 0 && (o[e] = s),
                      l.length > 0 && (a[e] = l)
                  } else
                      o[e] = t
              }
              ),
              this.syncDiff(i, {
                  joins: o,
                  leaves: a
              }, r, n)
          }
          static syncDiff(e, t, r, n) {
              let {joins: i, leaves: s} = {
                  joins: this.transformState(t.joins),
                  leaves: this.transformState(t.leaves)
              };
              return r || (r = () => {}
              ),
              n || (n = () => {}
              ),
              this.map(i, (t, n) => {
                  var i;
                  let s = null !== (i = e[t]) && void 0 !== i ? i : [];
                  if (e[t] = this.cloneDeep(n),
                  s.length > 0) {
                      let r = e[t].map(e => e.presence_ref)
                        , n = s.filter(e => 0 > r.indexOf(e.presence_ref));
                      e[t].unshift(...n)
                  }
                  r(t, s, n)
              }
              ),
              this.map(s, (t, r) => {
                  let i = e[t];
                  if (!i)
                      return;
                  let s = r.map(e => e.presence_ref);
                  i = i.filter(e => 0 > s.indexOf(e.presence_ref)),
                  e[t] = i,
                  n(t, i, r),
                  0 === i.length && delete e[t]
              }
              ),
              e
          }
          static map(e, t) {
              return Object.getOwnPropertyNames(e).map(r => t(r, e[r]))
          }
          static transformState(e) {
              return Object.getOwnPropertyNames(e = this.cloneDeep(e)).reduce( (t, r) => {
                  let n = e[r];
                  return "metas"in n ? t[r] = n.metas.map(e => (e.presence_ref = e.phx_ref,
                  delete e.phx_ref,
                  delete e.phx_ref_prev,
                  e)) : t[r] = n,
                  t
              }
              , {})
          }
          static cloneDeep(e) {
              return JSON.parse(JSON.stringify(e))
          }
          onJoin(e) {
              this.caller.onJoin = e
          }
          onLeave(e) {
              this.caller.onLeave = e
          }
          onSync(e) {
              this.caller.onSync = e
          }
          inPendingSyncState() {
              return !this.joinRef || this.joinRef !== this.channel._joinRef()
          }
      }
      (eo = X || (X = {})).ALL = "*",
      eo.INSERT = "INSERT",
      eo.UPDATE = "UPDATE",
      eo.DELETE = "DELETE",
      (ea = Z || (Z = {})).BROADCAST = "broadcast",
      ea.PRESENCE = "presence",
      ea.POSTGRES_CHANGES = "postgres_changes",
      ea.SYSTEM = "system",
      (el = Q || (Q = {})).SUBSCRIBED = "SUBSCRIBED",
      el.TIMED_OUT = "TIMED_OUT",
      el.CLOSED = "CLOSED",
      el.CHANNEL_ERROR = "CHANNEL_ERROR";
      class C {
          constructor(e, t={
              config: {}
          }, r) {
              this.topic = e,
              this.params = t,
              this.socket = r,
              this.bindings = {},
              this.state = K.closed,
              this.joinedOnce = !1,
              this.pushBuffer = [],
              this.subTopic = e.replace(/^realtime:/i, ""),
              this.params.config = Object.assign({
                  broadcast: {
                      ack: !1,
                      self: !1
                  },
                  presence: {
                      key: ""
                  },
                  private: !1
              }, t.config),
              this.timeout = this.socket.timeout,
              this.joinPush = new j(this,G.join,this.params,this.timeout),
              this.rejoinTimer = new m( () => this._rejoinUntilConnected(),this.socket.reconnectAfterMs),
              this.joinPush.receive("ok", () => {
                  this.state = K.joined,
                  this.rejoinTimer.reset(),
                  this.pushBuffer.forEach(e => e.send()),
                  this.pushBuffer = []
              }
              ),
              this._onClose( () => {
                  this.rejoinTimer.reset(),
                  this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`),
                  this.state = K.closed,
                  this.socket._remove(this)
              }
              ),
              this._onError(e => {
                  this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, e),
                  this.state = K.errored,
                  this.rejoinTimer.scheduleTimeout())
              }
              ),
              this.joinPush.receive("timeout", () => {
                  this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout),
                  this.state = K.errored,
                  this.rejoinTimer.scheduleTimeout())
              }
              ),
              this._on(G.reply, {}, (e, t) => {
                  this._trigger(this._replyEventName(t), e)
              }
              ),
              this.presence = new P(this),
              this.broadcastEndpointURL = T(this.socket.endPoint) + "/api/broadcast",
              this.private = this.params.config.private || !1
          }
          subscribe(e, t=this.timeout) {
              var r, n;
              if (this.socket.isConnected() || this.socket.connect(),
              this.joinedOnce)
                  throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
              {
                  let {config: {broadcast: i, presence: s, private: o}} = this.params;
                  this._onError(t => e && e("CHANNEL_ERROR", t)),
                  this._onClose( () => e && e("CLOSED"));
                  let a = {}
                    , l = {
                      broadcast: i,
                      presence: s,
                      postgres_changes: null !== (n = null === (r = this.bindings.postgres_changes) || void 0 === r ? void 0 : r.map(e => e.filter)) && void 0 !== n ? n : [],
                      private: o
                  };
                  this.socket.accessToken && (a.access_token = this.socket.accessToken),
                  this.updateJoinPayload(Object.assign({
                      config: l
                  }, a)),
                  this.joinedOnce = !0,
                  this._rejoin(t),
                  this.joinPush.receive("ok", ({postgres_changes: t}) => {
                      var r;
                      if (this.socket.accessToken && this.socket.setAuth(this.socket.accessToken),
                      void 0 === t) {
                          e && e("SUBSCRIBED");
                          return
                      }
                      {
                          let n = this.bindings.postgres_changes
                            , i = null !== (r = null == n ? void 0 : n.length) && void 0 !== r ? r : 0
                            , s = [];
                          for (let r = 0; r < i; r++) {
                              let i = n[r]
                                , {filter: {event: o, schema: a, table: l, filter: u}} = i
                                , c = t && t[r];
                              if (c && c.event === o && c.schema === a && c.table === l && c.filter === u)
                                  s.push(Object.assign(Object.assign({}, i), {
                                      id: c.id
                                  }));
                              else {
                                  this.unsubscribe(),
                                  e && e("CHANNEL_ERROR", Error("mismatch between server and client bindings for postgres changes"));
                                  return
                              }
                          }
                          this.bindings.postgres_changes = s,
                          e && e("SUBSCRIBED");
                          return
                      }
                  }
                  ).receive("error", t => {
                      e && e("CHANNEL_ERROR", Error(JSON.stringify(Object.values(t).join(", ") || "error")))
                  }
                  ).receive("timeout", () => {
                      e && e("TIMED_OUT")
                  }
                  )
              }
              return this
          }
          presenceState() {
              return this.presence.state
          }
          async track(e, t={}) {
              return await this.send({
                  type: "presence",
                  event: "track",
                  payload: e
              }, t.timeout || this.timeout)
          }
          async untrack(e={}) {
              return await this.send({
                  type: "presence",
                  event: "untrack"
              }, e)
          }
          on(e, t, r) {
              return this._on(e, t, r)
          }
          async send(e, t={}) {
              var r, n;
              if (this._canPush() || "broadcast" !== e.type)
                  return new Promise(r => {
                      var n, i, s;
                      let o = this._push(e.type, e, t.timeout || this.timeout);
                      "broadcast" !== e.type || (null === (s = null === (i = null === (n = this.params) || void 0 === n ? void 0 : n.config) || void 0 === i ? void 0 : i.broadcast) || void 0 === s ? void 0 : s.ack) || r("ok"),
                      o.receive("ok", () => r("ok")),
                      o.receive("error", () => r("error")),
                      o.receive("timeout", () => r("timed out"))
                  }
                  );
              {
                  let {event: i, payload: s} = e
                    , o = {
                      method: "POST",
                      headers: {
                          Authorization: this.socket.accessToken ? `Bearer ${this.socket.accessToken}` : "",
                          apikey: this.socket.apiKey ? this.socket.apiKey : "",
                          "Content-Type": "application/json"
                      },
                      body: JSON.stringify({
                          messages: [{
                              topic: this.subTopic,
                              event: i,
                              payload: s,
                              private: this.private
                          }]
                      })
                  };
                  try {
                      let e = await this._fetchWithTimeout(this.broadcastEndpointURL, o, null !== (r = t.timeout) && void 0 !== r ? r : this.timeout);
                      return await (null === (n = e.body) || void 0 === n ? void 0 : n.cancel()),
                      e.ok ? "ok" : "error"
                  } catch (e) {
                      if ("AbortError" === e.name)
                          return "timed out";
                      return "error"
                  }
              }
          }
          updateJoinPayload(e) {
              this.joinPush.updatePayload(e)
          }
          unsubscribe(e=this.timeout) {
              this.state = K.leaving;
              let t = () => {
                  this.socket.log("channel", `leave ${this.topic}`),
                  this._trigger(G.close, "leave", this._joinRef())
              }
              ;
              return this.rejoinTimer.reset(),
              this.joinPush.destroy(),
              new Promise(r => {
                  let n = new j(this,G.leave,{},e);
                  n.receive("ok", () => {
                      t(),
                      r("ok")
                  }
                  ).receive("timeout", () => {
                      t(),
                      r("timed out")
                  }
                  ).receive("error", () => {
                      r("error")
                  }
                  ),
                  n.send(),
                  this._canPush() || n.trigger("ok", {})
              }
              )
          }
          async _fetchWithTimeout(e, t, r) {
              let n = new AbortController
                , i = setTimeout( () => n.abort(), r)
                , s = await this.socket.fetch(e, Object.assign(Object.assign({}, t), {
                  signal: n.signal
              }));
              return clearTimeout(i),
              s
          }
          _push(e, t, r=this.timeout) {
              if (!this.joinedOnce)
                  throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
              let n = new j(this,e,t,r);
              return this._canPush() ? n.send() : (n.startTimeout(),
              this.pushBuffer.push(n)),
              n
          }
          _onMessage(e, t, r) {
              return t
          }
          _isMember(e) {
              return this.topic === e
          }
          _joinRef() {
              return this.joinPush.ref
          }
          _trigger(e, t, r) {
              var n, i;
              let s = e.toLocaleLowerCase()
                , {close: o, error: a, leave: l, join: u} = G;
              if (r && [o, a, l, u].indexOf(s) >= 0 && r !== this._joinRef())
                  return;
              let c = this._onMessage(s, t, r);
              if (t && !c)
                  throw "channel onMessage callbacks must return the payload, modified or unmodified";
              ["insert", "update", "delete"].includes(s) ? null === (n = this.bindings.postgres_changes) || void 0 === n || n.filter(e => {
                  var t, r, n;
                  return (null === (t = e.filter) || void 0 === t ? void 0 : t.event) === "*" || (null === (n = null === (r = e.filter) || void 0 === r ? void 0 : r.event) || void 0 === n ? void 0 : n.toLocaleLowerCase()) === s
              }
              ).map(e => e.callback(c, r)) : null === (i = this.bindings[s]) || void 0 === i || i.filter(e => {
                  var r, n, i, o, a, l;
                  if (!["broadcast", "presence", "postgres_changes"].includes(s))
                      return e.type.toLocaleLowerCase() === s;
                  if ("id"in e) {
                      let s = e.id
                        , o = null === (r = e.filter) || void 0 === r ? void 0 : r.event;
                      return s && (null === (n = t.ids) || void 0 === n ? void 0 : n.includes(s)) && ("*" === o || (null == o ? void 0 : o.toLocaleLowerCase()) === (null === (i = t.data) || void 0 === i ? void 0 : i.type.toLocaleLowerCase()))
                  }
                  {
                      let r = null === (a = null === (o = null == e ? void 0 : e.filter) || void 0 === o ? void 0 : o.event) || void 0 === a ? void 0 : a.toLocaleLowerCase();
                      return "*" === r || r === (null === (l = null == t ? void 0 : t.event) || void 0 === l ? void 0 : l.toLocaleLowerCase())
                  }
              }
              ).map(e => {
                  if ("object" == typeof c && "ids"in c) {
                      let e = c.data
                        , {schema: t, table: r, commit_timestamp: n, type: i, errors: s} = e;
                      c = Object.assign(Object.assign({}, {
                          schema: t,
                          table: r,
                          commit_timestamp: n,
                          eventType: i,
                          new: {},
                          old: {},
                          errors: s
                      }), this._getPayloadRecords(e))
                  }
                  e.callback(c, r)
              }
              )
          }
          _isClosed() {
              return this.state === K.closed
          }
          _isJoined() {
              return this.state === K.joined
          }
          _isJoining() {
              return this.state === K.joining
          }
          _isLeaving() {
              return this.state === K.leaving
          }
          _replyEventName(e) {
              return `chan_reply_${e}`
          }
          _on(e, t, r) {
              let n = e.toLocaleLowerCase()
                , i = {
                  type: n,
                  filter: t,
                  callback: r
              };
              return this.bindings[n] ? this.bindings[n].push(i) : this.bindings[n] = [i],
              this
          }
          _off(e, t) {
              let r = e.toLocaleLowerCase();
              return this.bindings[r] = this.bindings[r].filter(e => {
                  var n;
                  return !((null === (n = e.type) || void 0 === n ? void 0 : n.toLocaleLowerCase()) === r && C.isEqual(e.filter, t))
              }
              ),
              this
          }
          static isEqual(e, t) {
              if (Object.keys(e).length !== Object.keys(t).length)
                  return !1;
              for (let r in e)
                  if (e[r] !== t[r])
                      return !1;
              return !0
          }
          _rejoinUntilConnected() {
              this.rejoinTimer.scheduleTimeout(),
              this.socket.isConnected() && this._rejoin()
          }
          _onClose(e) {
              this._on(G.close, {}, e)
          }
          _onError(e) {
              this._on(G.error, {}, t => e(t))
          }
          _canPush() {
              return this.socket.isConnected() && this._isJoined()
          }
          _rejoin(e=this.timeout) {
              this._isLeaving() || (this.socket._leaveOpenTopic(this.topic),
              this.state = K.joining,
              this.joinPush.resend(e))
          }
          _getPayloadRecords(e) {
              let t = {
                  new: {},
                  old: {}
              };
              return ("INSERT" === e.type || "UPDATE" === e.type) && (t.new = v(e.columns, e.record)),
              ("UPDATE" === e.type || "DELETE" === e.type) && (t.old = v(e.columns, e.old_record)),
              t
          }
      }
      let O = () => {}
        , A = "undefined" != typeof WebSocket
        , R = `
addEventListener("message", (e) => {
  if (e.data.event === "start") {
    setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
  }
});`;
      class I {
          constructor(e, t) {
              var n;
              this.accessToken = null,
              this.apiKey = null,
              this.channels = [],
              this.endPoint = "",
              this.httpEndpoint = "",
              this.headers = p,
              this.params = {},
              this.timeout = 1e4,
              this.heartbeatIntervalMs = 3e4,
              this.heartbeatTimer = void 0,
              this.pendingHeartbeatRef = null,
              this.ref = 0,
              this.logger = O,
              this.conn = null,
              this.sendBuffer = [],
              this.serializer = new g,
              this.stateChangeCallbacks = {
                  open: [],
                  close: [],
                  error: [],
                  message: []
              },
              this._resolveFetch = e => {
                  let t;
                  return e ? t = e : "undefined" == typeof fetch ? t = (...e) => Promise.resolve().then(r.bind(r, 485)).then( ({default: t}) => t(...e)) : t = fetch,
                  (...e) => t(...e)
              }
              ,
              this.endPoint = `${e}/${H.websocket}`,
              this.httpEndpoint = T(e),
              (null == t ? void 0 : t.transport) ? this.transport = t.transport : this.transport = null,
              (null == t ? void 0 : t.params) && (this.params = t.params),
              (null == t ? void 0 : t.headers) && (this.headers = Object.assign(Object.assign({}, this.headers), t.headers)),
              (null == t ? void 0 : t.timeout) && (this.timeout = t.timeout),
              (null == t ? void 0 : t.logger) && (this.logger = t.logger),
              (null == t ? void 0 : t.heartbeatIntervalMs) && (this.heartbeatIntervalMs = t.heartbeatIntervalMs);
              let i = null === (n = null == t ? void 0 : t.params) || void 0 === n ? void 0 : n.apikey;
              if (i && (this.accessToken = i,
              this.apiKey = i),
              this.reconnectAfterMs = (null == t ? void 0 : t.reconnectAfterMs) ? t.reconnectAfterMs : e => [1e3, 2e3, 5e3, 1e4][e - 1] || 1e4,
              this.encode = (null == t ? void 0 : t.encode) ? t.encode : (e, t) => t(JSON.stringify(e)),
              this.decode = (null == t ? void 0 : t.decode) ? t.decode : this.serializer.decode.bind(this.serializer),
              this.reconnectTimer = new m(async () => {
                  this.disconnect(),
                  this.connect()
              }
              ,this.reconnectAfterMs),
              this.fetch = this._resolveFetch(null == t ? void 0 : t.fetch),
              null == t ? void 0 : t.worker) {
                  if ("undefined" != typeof window && !window.Worker)
                      throw Error("Web Worker is not supported");
                  this.worker = (null == t ? void 0 : t.worker) || !1,
                  this.workerUrl = null == t ? void 0 : t.workerUrl
              }
          }
          connect() {
              if (!this.conn) {
                  if (this.transport) {
                      this.conn = new this.transport(this._endPointURL(),void 0,{
                          headers: this.headers
                      });
                      return
                  }
                  if (A) {
                      this.conn = new WebSocket(this._endPointURL()),
                      this.setupConnection();
                      return
                  }
                  this.conn = new $(this._endPointURL(),void 0,{
                      close: () => {
                          this.conn = null
                      }
                  }),
                  r.e(223).then(r.t.bind(r, 5223, 23)).then( ({default: e}) => {
                      this.conn = new e(this._endPointURL(),void 0,{
                          headers: this.headers
                      }),
                      this.setupConnection()
                  }
                  )
              }
          }
          disconnect(e, t) {
              this.conn && (this.conn.onclose = function() {}
              ,
              e ? this.conn.close(e, null != t ? t : "") : this.conn.close(),
              this.conn = null,
              this.heartbeatTimer && clearInterval(this.heartbeatTimer),
              this.reconnectTimer.reset())
          }
          getChannels() {
              return this.channels
          }
          async removeChannel(e) {
              let t = await e.unsubscribe();
              return 0 === this.channels.length && this.disconnect(),
              t
          }
          async removeAllChannels() {
              let e = await Promise.all(this.channels.map(e => e.unsubscribe()));
              return this.disconnect(),
              e
          }
          log(e, t, r) {
              this.logger(e, t, r)
          }
          connectionState() {
              switch (this.conn && this.conn.readyState) {
              case q.connecting:
                  return J.Connecting;
              case q.open:
                  return J.Open;
              case q.closing:
                  return J.Closing;
              default:
                  return J.Closed
              }
          }
          isConnected() {
              return this.connectionState() === J.Open
          }
          channel(e, t={
              config: {}
          }) {
              let r = new C(`realtime:${e}`,t,this);
              return this.channels.push(r),
              r
          }
          push(e) {
              let {topic: t, event: r, payload: n, ref: i} = e
                , s = () => {
                  this.encode(e, e => {
                      var t;
                      null === (t = this.conn) || void 0 === t || t.send(e)
                  }
                  )
              }
              ;
              this.log("push", `${t} ${r} (${i})`, n),
              this.isConnected() ? s() : this.sendBuffer.push(s)
          }
          setAuth(e) {
              if (e) {
                  let t = null;
                  try {
                      t = JSON.parse(atob(e.split(".")[1]))
                  } catch (e) {}
                  if (t && t.exp && !(Math.floor(Date.now() / 1e3) - t.exp < 0)) {
                      this.log("auth", `InvalidJWTToken: Invalid value for JWT claim "exp" with value ${t.exp}`);
                      return
                  }
              }
              this.accessToken = e,
              this.channels.forEach(t => {
                  e && t.updateJoinPayload({
                      access_token: e
                  }),
                  t.joinedOnce && t._isJoined() && t._push(G.access_token, {
                      access_token: e
                  })
              }
              )
          }
          _makeRef() {
              let e = this.ref + 1;
              return e === this.ref ? this.ref = 0 : this.ref = e,
              this.ref.toString()
          }
          _leaveOpenTopic(e) {
              let t = this.channels.find(t => t.topic === e && (t._isJoined() || t._isJoining()));
              t && (this.log("transport", `leaving duplicate topic "${e}"`),
              t.unsubscribe())
          }
          _remove(e) {
              this.channels = this.channels.filter(t => t._joinRef() !== e._joinRef())
          }
          setupConnection() {
              this.conn && (this.conn.binaryType = "arraybuffer",
              this.conn.onopen = () => this._onConnOpen(),
              this.conn.onerror = e => this._onConnError(e),
              this.conn.onmessage = e => this._onConnMessage(e),
              this.conn.onclose = e => this._onConnClose(e))
          }
          _endPointURL() {
              return this._appendParams(this.endPoint, Object.assign({}, this.params, {
                  vsn: "1.0.0"
              }))
          }
          _onConnMessage(e) {
              this.decode(e.data, e => {
                  let {topic: t, event: r, payload: n, ref: i} = e;
                  (i && i === this.pendingHeartbeatRef || r === (null == n ? void 0 : n.type)) && (this.pendingHeartbeatRef = null),
                  this.log("receive", `${n.status || ""} ${t} ${r} ${i && "(" + i + ")" || ""}`, n),
                  this.channels.filter(e => e._isMember(t)).forEach(e => e._trigger(r, n, i)),
                  this.stateChangeCallbacks.message.forEach(t => t(e))
              }
              )
          }
          async _onConnOpen() {
              if (this.log("transport", `connected to ${this._endPointURL()}`),
              this._flushSendBuffer(),
              this.reconnectTimer.reset(),
              this.worker) {
                  this.workerUrl ? this.log("worker", `starting worker for from ${this.workerUrl}`) : this.log("worker", "starting default worker");
                  let e = this._workerObjectUrl(this.workerUrl);
                  this.workerRef = new Worker(e),
                  this.workerRef.onerror = e => {
                      this.log("worker", "worker error", e.message),
                      this.workerRef.terminate()
                  }
                  ,
                  this.workerRef.onmessage = e => {
                      "keepAlive" === e.data.event && this._sendHeartbeat()
                  }
                  ,
                  this.workerRef.postMessage({
                      event: "start",
                      interval: this.heartbeatIntervalMs
                  })
              } else
                  this.heartbeatTimer && clearInterval(this.heartbeatTimer),
                  this.heartbeatTimer = setInterval( () => this._sendHeartbeat(), this.heartbeatIntervalMs);
              this.stateChangeCallbacks.open.forEach(e => e())
          }
          _onConnClose(e) {
              this.log("transport", "close", e),
              this._triggerChanError(),
              this.heartbeatTimer && clearInterval(this.heartbeatTimer),
              this.reconnectTimer.scheduleTimeout(),
              this.stateChangeCallbacks.close.forEach(t => t(e))
          }
          _onConnError(e) {
              this.log("transport", e.message),
              this._triggerChanError(),
              this.stateChangeCallbacks.error.forEach(t => t(e))
          }
          _triggerChanError() {
              this.channels.forEach(e => e._trigger(G.error))
          }
          _appendParams(e, t) {
              if (0 === Object.keys(t).length)
                  return e;
              let r = e.match(/\?/) ? "&" : "?"
                , n = new URLSearchParams(t);
              return `${e}${r}${n}`
          }
          _flushSendBuffer() {
              this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach(e => e()),
              this.sendBuffer = [])
          }
          _sendHeartbeat() {
              var e;
              if (this.isConnected()) {
                  if (this.pendingHeartbeatRef) {
                      this.pendingHeartbeatRef = null,
                      this.log("transport", "heartbeat timeout. Attempting to re-establish connection"),
                      null === (e = this.conn) || void 0 === e || e.close(1e3, "hearbeat timeout");
                      return
                  }
                  this.pendingHeartbeatRef = this._makeRef(),
                  this.push({
                      topic: "phoenix",
                      event: "heartbeat",
                      payload: {},
                      ref: this.pendingHeartbeatRef
                  }),
                  this.setAuth(this.accessToken)
              }
          }
          _workerObjectUrl(e) {
              let t;
              if (e)
                  t = e;
              else {
                  let e = new Blob([R],{
                      type: "application/javascript"
                  });
                  t = URL.createObjectURL(e)
              }
              return t
          }
      }
      class $ {
          constructor(e, t, r) {
              this.binaryType = "arraybuffer",
              this.onclose = () => {}
              ,
              this.onerror = () => {}
              ,
              this.onmessage = () => {}
              ,
              this.onopen = () => {}
              ,
              this.readyState = q.connecting,
              this.send = () => {}
              ,
              this.url = null,
              this.url = e,
              this.close = r.close
          }
      }
      class L extends Error {
          constructor(e) {
              super(e),
              this.__isStorageError = !0,
              this.name = "StorageError"
          }
      }
      function N(e) {
          return "object" == typeof e && null !== e && "__isStorageError"in e
      }
      class M extends L {
          constructor(e, t) {
              super(e),
              this.name = "StorageApiError",
              this.status = t
          }
          toJSON() {
              return {
                  name: this.name,
                  message: this.message,
                  status: this.status
              }
          }
      }
      class D extends L {
          constructor(e, t) {
              super(e),
              this.name = "StorageUnknownError",
              this.originalError = t
          }
      }
      let U = e => {
          let t;
          return e ? t = e : "undefined" == typeof fetch ? t = (...e) => Promise.resolve().then(r.bind(r, 485)).then( ({default: t}) => t(...e)) : t = fetch,
          (...e) => t(...e)
      }
        , B = () => {
          var e, t, n, i;
          return e = void 0,
          t = void 0,
          n = void 0,
          i = function*() {
              return "undefined" == typeof Response ? (yield Promise.resolve().then(r.bind(r, 485))).Response : Response
          }
          ,
          new (n || (n = Promise))(function(r, s) {
              function o(e) {
                  try {
                      l(i.next(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function a(e) {
                  try {
                      l(i.throw(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function l(e) {
                  var t;
                  e.done ? r(e.value) : ((t = e.value)instanceof n ? t : new n(function(e) {
                      e(t)
                  }
                  )).then(o, a)
              }
              l((i = i.apply(e, t || [])).next())
          }
          )
      }
        , z = e => {
          if (Array.isArray(e))
              return e.map(e => z(e));
          if ("function" == typeof e || e !== Object(e))
              return e;
          let t = {};
          return Object.entries(e).forEach( ([e,r]) => {
              t[e.replace(/([-_][a-z])/gi, e => e.toUpperCase().replace(/[-_]/g, ""))] = z(r)
          }
          ),
          t
      }
      ;
      var F, W, q, K, G, H, J, V, Y, X, Z, Q, ee, et, er, en, ei, es, eo, ea, el, eu = function(e, t, r, n) {
          return new (r || (r = Promise))(function(i, s) {
              function o(e) {
                  try {
                      l(n.next(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function a(e) {
                  try {
                      l(n.throw(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function l(e) {
                  var t;
                  e.done ? i(e.value) : ((t = e.value)instanceof r ? t : new r(function(e) {
                      e(t)
                  }
                  )).then(o, a)
              }
              l((n = n.apply(e, t || [])).next())
          }
          )
      };
      let ec = e => e.msg || e.message || e.error_description || e.error || JSON.stringify(e)
        , ed = (e, t, r) => eu(void 0, void 0, void 0, function*() {
          e instanceof (yield B()) && !(null == r ? void 0 : r.noResolveJson) ? e.json().then(r => {
              t(new M(ec(r),e.status || 500))
          }
          ).catch(e => {
              t(new D(ec(e),e))
          }
          ) : t(new D(ec(e),e))
      })
        , eh = (e, t, r, n) => {
          let i = {
              method: e,
              headers: (null == t ? void 0 : t.headers) || {}
          };
          return "GET" === e ? i : (i.headers = Object.assign({
              "Content-Type": "application/json"
          }, null == t ? void 0 : t.headers),
          n && (i.body = JSON.stringify(n)),
          Object.assign(Object.assign({}, i), r))
      }
      ;
      function ef(e, t, r, n, i, s) {
          return eu(this, void 0, void 0, function*() {
              return new Promise( (o, a) => {
                  e(r, eh(t, n, i, s)).then(e => {
                      if (!e.ok)
                          throw e;
                      return (null == n ? void 0 : n.noResolveJson) ? e : e.json()
                  }
                  ).then(e => o(e)).catch(e => ed(e, a, n))
              }
              )
          })
      }
      function ep(e, t, r, n) {
          return eu(this, void 0, void 0, function*() {
              return ef(e, "GET", t, r, n)
          })
      }
      function eg(e, t, r, n, i) {
          return eu(this, void 0, void 0, function*() {
              return ef(e, "POST", t, n, i, r)
          })
      }
      function em(e, t, r, n, i) {
          return eu(this, void 0, void 0, function*() {
              return ef(e, "DELETE", t, n, i, r)
          })
      }
      var ev = r(6434).Buffer
        , ey = function(e, t, r, n) {
          return new (r || (r = Promise))(function(i, s) {
              function o(e) {
                  try {
                      l(n.next(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function a(e) {
                  try {
                      l(n.throw(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function l(e) {
                  var t;
                  e.done ? i(e.value) : ((t = e.value)instanceof r ? t : new r(function(e) {
                      e(t)
                  }
                  )).then(o, a)
              }
              l((n = n.apply(e, t || [])).next())
          }
          )
      };
      let eb = {
          limit: 100,
          offset: 0,
          sortBy: {
              column: "name",
              order: "asc"
          }
      }
        , ew = {
          cacheControl: "3600",
          contentType: "text/plain;charset=UTF-8",
          upsert: !1
      };
      class e_ {
          constructor(e, t={}, r, n) {
              this.url = e,
              this.headers = t,
              this.bucketId = r,
              this.fetch = U(n)
          }
          uploadOrUpdate(e, t, r, n) {
              return ey(this, void 0, void 0, function*() {
                  try {
                      let i;
                      let s = Object.assign(Object.assign({}, ew), n)
                        , o = Object.assign(Object.assign({}, this.headers), "POST" === e && {
                          "x-upsert": String(s.upsert)
                      })
                        , a = s.metadata;
                      "undefined" != typeof Blob && r instanceof Blob ? ((i = new FormData).append("cacheControl", s.cacheControl),
                      a && i.append("metadata", this.encodeMetadata(a)),
                      i.append("", r)) : "undefined" != typeof FormData && r instanceof FormData ? ((i = r).append("cacheControl", s.cacheControl),
                      a && i.append("metadata", this.encodeMetadata(a))) : (i = r,
                      o["cache-control"] = `max-age=${s.cacheControl}`,
                      o["content-type"] = s.contentType,
                      a && (o["x-metadata"] = this.toBase64(this.encodeMetadata(a)))),
                      (null == n ? void 0 : n.headers) && (o = Object.assign(Object.assign({}, o), n.headers));
                      let l = this._removeEmptyFolders(t)
                        , u = this._getFinalPath(l)
                        , c = yield this.fetch(`${this.url}/object/${u}`, Object.assign({
                          method: e,
                          body: i,
                          headers: o
                      }, (null == s ? void 0 : s.duplex) ? {
                          duplex: s.duplex
                      } : {}))
                        , d = yield c.json();
                      if (c.ok)
                          return {
                              data: {
                                  path: l,
                                  id: d.Id,
                                  fullPath: d.Key
                              },
                              error: null
                          };
                      return {
                          data: null,
                          error: d
                      }
                  } catch (e) {
                      if (N(e))
                          return {
                              data: null,
                              error: e
                          };
                      throw e
                  }
              })
          }
          upload(e, t, r) {
              return ey(this, void 0, void 0, function*() {
                  return this.uploadOrUpdate("POST", e, t, r)
              })
          }
          uploadToSignedUrl(e, t, r, n) {
              return ey(this, void 0, void 0, function*() {
                  let i = this._removeEmptyFolders(e)
                    , s = this._getFinalPath(i)
                    , o = new URL(this.url + `/object/upload/sign/${s}`);
                  o.searchParams.set("token", t);
                  try {
                      let e;
                      let t = Object.assign({
                          upsert: ew.upsert
                      }, n)
                        , s = Object.assign(Object.assign({}, this.headers), {
                          "x-upsert": String(t.upsert)
                      });
                      "undefined" != typeof Blob && r instanceof Blob ? ((e = new FormData).append("cacheControl", t.cacheControl),
                      e.append("", r)) : "undefined" != typeof FormData && r instanceof FormData ? (e = r).append("cacheControl", t.cacheControl) : (e = r,
                      s["cache-control"] = `max-age=${t.cacheControl}`,
                      s["content-type"] = t.contentType);
                      let a = yield this.fetch(o.toString(), {
                          method: "PUT",
                          body: e,
                          headers: s
                      })
                        , l = yield a.json();
                      if (a.ok)
                          return {
                              data: {
                                  path: i,
                                  fullPath: l.Key
                              },
                              error: null
                          };
                      return {
                          data: null,
                          error: l
                      }
                  } catch (e) {
                      if (N(e))
                          return {
                              data: null,
                              error: e
                          };
                      throw e
                  }
              })
          }
          createSignedUploadUrl(e, t) {
              return ey(this, void 0, void 0, function*() {
                  try {
                      let r = this._getFinalPath(e)
                        , n = Object.assign({}, this.headers);
                      (null == t ? void 0 : t.upsert) && (n["x-upsert"] = "true");
                      let i = yield eg(this.fetch, `${this.url}/object/upload/sign/${r}`, {}, {
                          headers: n
                      })
                        , s = new URL(this.url + i.url)
                        , o = s.searchParams.get("token");
                      if (!o)
                          throw new L("No token returned by API");
                      return {
                          data: {
                              signedUrl: s.toString(),
                              path: e,
                              token: o
                          },
                          error: null
                      }
                  } catch (e) {
                      if (N(e))
                          return {
                              data: null,
                              error: e
                          };
                      throw e
                  }
              })
          }
          update(e, t, r) {
              return ey(this, void 0, void 0, function*() {
                  return this.uploadOrUpdate("PUT", e, t, r)
              })
          }
          move(e, t, r) {
              return ey(this, void 0, void 0, function*() {
                  try {
                      return {
                          data: yield eg(this.fetch, `${this.url}/object/move`, {
                              bucketId: this.bucketId,
                              sourceKey: e,
                              destinationKey: t,
                              destinationBucket: null == r ? void 0 : r.destinationBucket
                          }, {
                              headers: this.headers
                          }),
                          error: null
                      }
                  } catch (e) {
                      if (N(e))
                          return {
                              data: null,
                              error: e
                          };
                      throw e
                  }
              })
          }
          copy(e, t, r) {
              return ey(this, void 0, void 0, function*() {
                  try {
                      return {
                          data: {
                              path: (yield eg(this.fetch, `${this.url}/object/copy`, {
                                  bucketId: this.bucketId,
                                  sourceKey: e,
                                  destinationKey: t,
                                  destinationBucket: null == r ? void 0 : r.destinationBucket
                              }, {
                                  headers: this.headers
                              })).Key
                          },
                          error: null
                      }
                  } catch (e) {
                      if (N(e))
                          return {
                              data: null,
                              error: e
                          };
                      throw e
                  }
              })
          }
          createSignedUrl(e, t, r) {
              return ey(this, void 0, void 0, function*() {
                  try {
                      let n = this._getFinalPath(e)
                        , i = yield eg(this.fetch, `${this.url}/object/sign/${n}`, Object.assign({
                          expiresIn: t
                      }, (null == r ? void 0 : r.transform) ? {
                          transform: r.transform
                      } : {}), {
                          headers: this.headers
                      })
                        , s = (null == r ? void 0 : r.download) ? `&download=${!0 === r.download ? "" : r.download}` : "";
                      return {
                          data: i = {
                              signedUrl: encodeURI(`${this.url}${i.signedURL}${s}`)
                          },
                          error: null
                      }
                  } catch (e) {
                      if (N(e))
                          return {
                              data: null,
                              error: e
                          };
                      throw e
                  }
              })
          }
          createSignedUrls(e, t, r) {
              return ey(this, void 0, void 0, function*() {
                  try {
                      let n = yield eg(this.fetch, `${this.url}/object/sign/${this.bucketId}`, {
                          expiresIn: t,
                          paths: e
                      }, {
                          headers: this.headers
                      })
                        , i = (null == r ? void 0 : r.download) ? `&download=${!0 === r.download ? "" : r.download}` : "";
                      return {
                          data: n.map(e => Object.assign(Object.assign({}, e), {
                              signedUrl: e.signedURL ? encodeURI(`${this.url}${e.signedURL}${i}`) : null
                          })),
                          error: null
                      }
                  } catch (e) {
                      if (N(e))
                          return {
                              data: null,
                              error: e
                          };
                      throw e
                  }
              })
          }
          download(e, t) {
              return ey(this, void 0, void 0, function*() {
                  let r = void 0 !== (null == t ? void 0 : t.transform)
                    , n = this.transformOptsToQueryString((null == t ? void 0 : t.transform) || {})
                    , i = n ? `?${n}` : "";
                  try {
                      let t = this._getFinalPath(e)
                        , n = yield ep(this.fetch, `${this.url}/${r ? "render/image/authenticated" : "object"}/${t}${i}`, {
                          headers: this.headers,
                          noResolveJson: !0
                      });
                      return {
                          data: yield n.blob(),
                          error: null
                      }
                  } catch (e) {
                      if (N(e))
                          return {
                              data: null,
                              error: e
                          };
                      throw e
                  }
              })
          }
          info(e) {
              return ey(this, void 0, void 0, function*() {
                  let t = this._getFinalPath(e);
                  try {
                      let e = yield ep(this.fetch, `${this.url}/object/info/${t}`, {
                          headers: this.headers
                      });
                      return {
                          data: z(e),
                          error: null
                      }
                  } catch (e) {
                      if (N(e))
                          return {
                              data: null,
                              error: e
                          };
                      throw e
                  }
              })
          }
          exists(e) {
              return ey(this, void 0, void 0, function*() {
                  let t = this._getFinalPath(e);
                  try {
                      return yield function(e, t, r, n) {
                          return eu(this, void 0, void 0, function*() {
                              return ef(e, "HEAD", t, Object.assign(Object.assign({}, r), {
                                  noResolveJson: !0
                              }), void 0)
                          })
                      }(this.fetch, `${this.url}/object/${t}`, {
                          headers: this.headers
                      }),
                      {
                          data: !0,
                          error: null
                      }
                  } catch (e) {
                      if (N(e) && e instanceof D) {
                          let t = e.originalError;
                          if ([400, 404].includes(null == t ? void 0 : t.status))
                              return {
                                  data: !1,
                                  error: e
                              }
                      }
                      throw e
                  }
              })
          }
          getPublicUrl(e, t) {
              let r = this._getFinalPath(e)
                , n = []
                , i = (null == t ? void 0 : t.download) ? `download=${!0 === t.download ? "" : t.download}` : "";
              "" !== i && n.push(i);
              let s = void 0 !== (null == t ? void 0 : t.transform)
                , o = this.transformOptsToQueryString((null == t ? void 0 : t.transform) || {});
              "" !== o && n.push(o);
              let a = n.join("&");
              return "" !== a && (a = `?${a}`),
              {
                  data: {
                      publicUrl: encodeURI(`${this.url}/${s ? "render/image" : "object"}/public/${r}${a}`)
                  }
              }
          }
          remove(e) {
              return ey(this, void 0, void 0, function*() {
                  try {
                      return {
                          data: yield em(this.fetch, `${this.url}/object/${this.bucketId}`, {
                              prefixes: e
                          }, {
                              headers: this.headers
                          }),
                          error: null
                      }
                  } catch (e) {
                      if (N(e))
                          return {
                              data: null,
                              error: e
                          };
                      throw e
                  }
              })
          }
          list(e, t, r) {
              return ey(this, void 0, void 0, function*() {
                  try {
                      let n = Object.assign(Object.assign(Object.assign({}, eb), t), {
                          prefix: e || ""
                      });
                      return {
                          data: yield eg(this.fetch, `${this.url}/object/list/${this.bucketId}`, n, {
                              headers: this.headers
                          }, r),
                          error: null
                      }
                  } catch (e) {
                      if (N(e))
                          return {
                              data: null,
                              error: e
                          };
                      throw e
                  }
              })
          }
          encodeMetadata(e) {
              return JSON.stringify(e)
          }
          toBase64(e) {
              return void 0 !== ev ? ev.from(e).toString("base64") : btoa(e)
          }
          _getFinalPath(e) {
              return `${this.bucketId}/${e}`
          }
          _removeEmptyFolders(e) {
              return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/")
          }
          transformOptsToQueryString(e) {
              let t = [];
              return e.width && t.push(`width=${e.width}`),
              e.height && t.push(`height=${e.height}`),
              e.resize && t.push(`resize=${e.resize}`),
              e.format && t.push(`format=${e.format}`),
              e.quality && t.push(`quality=${e.quality}`),
              t.join("&")
          }
      }
      let eE = {
          "X-Client-Info": "storage-js/2.7.1"
      };
      var ek = function(e, t, r, n) {
          return new (r || (r = Promise))(function(i, s) {
              function o(e) {
                  try {
                      l(n.next(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function a(e) {
                  try {
                      l(n.throw(e))
                  } catch (e) {
                      s(e)
                  }
              }
              function l(e) {
                  var t;
                  e.done ? i(e.value) : ((t = e.value)instanceof r ? t : new r(function(e) {
                      e(t)
                  }
                  )).then(o, a)
              }
              l((n = n.apply(e, t || [])).next())
          }
          )
      };
      class ex {
          constructor(e, t={}, r) {
              this.url = e,
              this.headers = Object.assign(Object.assign({}, eE), t),
              this.fetch = U(r)
          }
          listBuckets() {
              return ek(this, void 0, void 0, function*() {
                  try {
                      return {
                          data: yield ep(this.fetch, `${this.url}/bucket`, {
                              headers: this.headers
                          }),
                          error: null
                      }
                  } catch (e) {
                      if (N(e))
                          return {
                              data: null,
                              error: e
                          };
                      throw e
                  }
              })
          }
          getBucket(e) {
              return ek(this, void 0, void 0, function*() {
                  try {
                      return {
                          data: yield ep(this.fetch, `${this.url}/bucket/${e}`, {
                              headers: this.headers
                          }),
                          error: null
                      }
                  } catch (e) {
                      if (N(e))
                          return {
                              data: null,
                              error: e
                          };
                      throw e
                  }
              })
          }
          createBucket(e, t={
              public: !1
          }) {
              return ek(this, void 0, void 0, function*() {
                  try {
                      return {
                          data: yield eg(this.fetch, `${this.url}/bucket`, {
                              id: e,
                              name: e,
                              public: t.public,
                              file_size_limit: t.fileSizeLimit,
                              allowed_mime_types: t.allowedMimeTypes
                          }, {
                              headers: this.headers
                          }),
                          error: null
                      }
                  } catch (e) {
                      if (N(e))
                          return {
                              data: null,
                              error: e
                          };
                      throw e
                  }
              })
          }
          updateBucket(e, t) {
              return ek(this, void 0, void 0, function*() {
                  try {
                      return {
                          data: yield function(e, t, r, n, i) {
                              return eu(this, void 0, void 0, function*() {
                                  return ef(e, "PUT", t, n, void 0, r)
                              })
                          }(this.fetch, `${this.url}/bucket/${e}`, {
                              id: e,
                              name: e,
                              public: t.public,
                              file_size_limit: t.fileSizeLimit,
                              allowed_mime_types: t.allowedMimeTypes
                          }, {
                              headers: this.headers
                          }),
                          error: null
                      }
                  } catch (e) {
                      if (N(e))
                          return {
                              data: null,
                              error: e
                          };
                      throw e
                  }
              })
          }
          emptyBucket(e) {
              return ek(this, void 0, void 0, function*() {
                  try {
                      return {
                          data: yield eg(this.fetch, `${this.url}/bucket/${e}/empty`, {}, {
                              headers: this.headers
                          }),
                          error: null
                      }
                  } catch (e) {
                      if (N(e))
                          return {
                              data: null,
                              error: e
                          };
                      throw e
                  }
              })
          }
          deleteBucket(e) {
              return ek(this, void 0, void 0, function*() {
                  try {
                      return {
                          data: yield em(this.fetch, `${this.url}/bucket/${e}`, {}, {
                              headers: this.headers
                          }),
                          error: null
                      }
                  } catch (e) {
                      if (N(e))
                          return {
                              data: null,
                              error: e
                          };
                      throw e
                  }
              })
          }
      }
      class eS extends ex {
          constructor(e, t={}, r) {
              super(e, t, r)
          }
          from(e) {
              return new e_(this.url,this.headers,e,this.fetch)
          }
      }
      let eT = "";
      "undefined" != typeof Deno ? eT = "deno" : "undefined" != typeof document ? eT = "web" : "undefined" != typeof navigator && "ReactNative" === navigator.product ? eT = "react-native" : eT = "node";
      let ej = {
          headers: {
              "X-Client-Info": `supabase-js-${eT}/2.46.2`
          }
      }
        , eP = {
          schema: "public"
      }
        , eC = {
          autoRefreshToken: !0,
          persistSession: !0,
          detectSessionInUrl: !0,
          flowType: "implicit"
      }
        , eO = {};
      var eA = r(485);
      let eR = e => {
          let t;
          return e ? t = e : "undefined" == typeof fetch ? t = eA.default : t = fetch,
          (...e) => t(...e)
      }
        , eI = () => "undefined" == typeof Headers ? eA.Headers : Headers
        , e$ = (e, t, r) => {
          let n = eR(r)
            , i = eI();
          return (r, s) => {
              var o, a, l, u;
              return o = void 0,
              a = void 0,
              l = void 0,
              u = function*() {
                  var o;
                  let a = null !== (o = yield t()) && void 0 !== o ? o : e
                    , l = new i(null == s ? void 0 : s.headers);
                  return l.has("apikey") || l.set("apikey", e),
                  l.has("Authorization") || l.set("Authorization", `Bearer ${a}`),
                  n(r, Object.assign(Object.assign({}, s), {
                      headers: l
                  }))
              }
              ,
              new (l || (l = Promise))(function(e, t) {
                  function r(e) {
                      try {
                          i(u.next(e))
                      } catch (e) {
                          t(e)
                      }
                  }
                  function n(e) {
                      try {
                          i(u.throw(e))
                      } catch (e) {
                          t(e)
                      }
                  }
                  function i(t) {
                      var i;
                      t.done ? e(t.value) : ((i = t.value)instanceof l ? i : new l(function(e) {
                          e(i)
                      }
                      )).then(r, n)
                  }
                  i((u = u.apply(o, a || [])).next())
              }
              )
          }
      }
        , eL = "2.65.1"
        , eN = {
          "X-Client-Info": `gotrue-js/${eL}`
      }
        , eM = "X-Supabase-Api-Version"
        , eD = {
          "2024-01-01": {
              timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
              name: "2024-01-01"
          }
      }
        , eU = () => "undefined" != typeof document
        , eB = {
          tested: !1,
          writable: !1
      }
        , ez = () => {
          if (!eU())
              return !1;
          try {
              if ("object" != typeof globalThis.localStorage)
                  return !1
          } catch (e) {
              return !1
          }
          if (eB.tested)
              return eB.writable;
          let e = `lswt-${Math.random()}${Math.random()}`;
          try {
              globalThis.localStorage.setItem(e, e),
              globalThis.localStorage.removeItem(e),
              eB.tested = !0,
              eB.writable = !0
          } catch (e) {
              eB.tested = !0,
              eB.writable = !1
          }
          return eB.writable
      }
      ;
      function eF(e) {
          let t = {}
            , r = new URL(e);
          if (r.hash && "#" === r.hash[0])
              try {
                  new URLSearchParams(r.hash.substring(1)).forEach( (e, r) => {
                      t[r] = e
                  }
                  )
              } catch (e) {}
          return r.searchParams.forEach( (e, r) => {
              t[r] = e
          }
          ),
          t
      }
      let eW = e => {
          let t;
          return e ? t = e : "undefined" == typeof fetch ? t = (...e) => Promise.resolve().then(r.bind(r, 485)).then( ({default: t}) => t(...e)) : t = fetch,
          (...e) => t(...e)
      }
        , eq = e => "object" == typeof e && null !== e && "status"in e && "ok"in e && "json"in e && "function" == typeof e.json
        , eK = async (e, t, r) => {
          await e.setItem(t, JSON.stringify(r))
      }
        , eG = async (e, t) => {
          let r = await e.getItem(t);
          if (!r)
              return null;
          try {
              return JSON.parse(r)
          } catch (e) {
              return r
          }
      }
        , eH = async (e, t) => {
          await e.removeItem(t)
      }
      ;
      class eJ {
          constructor() {
              this.promise = new eJ.promiseConstructor( (e, t) => {
                  this.resolve = e,
                  this.reject = t
              }
              )
          }
      }
      function eV(e) {
          let t = e.split(".");
          if (3 !== t.length)
              throw Error("JWT is not valid: not a JWT structure");
          if (!/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i.test(t[1]))
              throw Error("JWT is not valid: payload is not in base64url format");
          return JSON.parse(function(e) {
              let t, r, n, i, s, o, a;
              let l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                , u = ""
                , c = 0;
              for (e = e.replace("-", "+").replace("_", "/"); c < e.length; )
                  i = l.indexOf(e.charAt(c++)),
                  s = l.indexOf(e.charAt(c++)),
                  o = l.indexOf(e.charAt(c++)),
                  a = l.indexOf(e.charAt(c++)),
                  t = i << 2 | s >> 4,
                  r = (15 & s) << 4 | o >> 2,
                  n = (3 & o) << 6 | a,
                  u += String.fromCharCode(t),
                  64 != o && 0 != r && (u += String.fromCharCode(r)),
                  64 != a && 0 != n && (u += String.fromCharCode(n));
              return u
          }(t[1]))
      }
      async function eY(e) {
          return await new Promise(t => {
              setTimeout( () => t(null), e)
          }
          )
      }
      function eX(e) {
          return ("0" + e.toString(16)).substr(-2)
      }
      async function eZ(e) {
          let t = new TextEncoder().encode(e);
          return Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", t))).map(e => String.fromCharCode(e)).join("")
      }
      async function eQ(e) {
          return "undefined" != typeof crypto && void 0 !== crypto.subtle && "undefined" != typeof TextEncoder ? btoa(await eZ(e)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") : (console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),
          e)
      }
      async function e0(e, t, r=!1) {
          let n = function() {
              let e = new Uint32Array(56);
              if ("undefined" == typeof crypto) {
                  let e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~"
                    , t = e.length
                    , r = "";
                  for (let n = 0; n < 56; n++)
                      r += e.charAt(Math.floor(Math.random() * t));
                  return r
              }
              return crypto.getRandomValues(e),
              Array.from(e, eX).join("")
          }()
            , i = n;
          r && (i += "/PASSWORD_RECOVERY"),
          await eK(e, `${t}-code-verifier`, i);
          let s = await eQ(n)
            , o = n === s ? "plain" : "s256";
          return [s, o]
      }
      eJ.promiseConstructor = Promise;
      let e1 = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
      class e2 extends Error {
          constructor(e, t, r) {
              super(e),
              this.__isAuthError = !0,
              this.name = "AuthError",
              this.status = t,
              this.code = r
          }
      }
      function e8(e) {
          return "object" == typeof e && null !== e && "__isAuthError"in e
      }
      class e6 extends e2 {
          constructor(e, t, r) {
              super(e, t, r),
              this.name = "AuthApiError",
              this.status = t,
              this.code = r
          }
      }
      class e4 extends e2 {
          constructor(e, t) {
              super(e),
              this.name = "AuthUnknownError",
              this.originalError = t
          }
      }
      class e5 extends e2 {
          constructor(e, t, r, n) {
              super(e, r, n),
              this.name = t,
              this.status = r
          }
      }
      class e3 extends e5 {
          constructor() {
              super("Auth session missing!", "AuthSessionMissingError", 400, void 0)
          }
      }
      class e7 extends e5 {
          constructor() {
              super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0)
          }
      }
      class e9 extends e5 {
          constructor(e) {
              super(e, "AuthInvalidCredentialsError", 400, void 0)
          }
      }
      class te extends e5 {
          constructor(e, t=null) {
              super(e, "AuthImplicitGrantRedirectError", 500, void 0),
              this.details = null,
              this.details = t
          }
          toJSON() {
              return {
                  name: this.name,
                  message: this.message,
                  status: this.status,
                  details: this.details
              }
          }
      }
      class tt extends e5 {
          constructor(e, t=null) {
              super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0),
              this.details = null,
              this.details = t
          }
          toJSON() {
              return {
                  name: this.name,
                  message: this.message,
                  status: this.status,
                  details: this.details
              }
          }
      }
      class tr extends e5 {
          constructor(e, t) {
              super(e, "AuthRetryableFetchError", t, void 0)
          }
      }
      function tn(e) {
          return e8(e) && "AuthRetryableFetchError" === e.name
      }
      class ti extends e5 {
          constructor(e, t, r) {
              super(e, "AuthWeakPasswordError", t, "weak_password"),
              this.reasons = r
          }
      }
      var ts = function(e, t) {
          var r = {};
          for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
              for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                  0 > t.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
          return r
      };
      let to = e => e.msg || e.message || e.error_description || e.error || JSON.stringify(e)
        , ta = [502, 503, 504];
      async function tl(e) {
          var t;
          let r, n;
          if (!eq(e))
              throw new tr(to(e),0);
          if (ta.includes(e.status))
              throw new tr(to(e),e.status);
          try {
              r = await e.json()
          } catch (e) {
              throw new e4(to(e),e)
          }
          let i = function(e) {
              let t = e.headers.get(eM);
              if (!t || !t.match(e1))
                  return null;
              try {
                  return new Date(`${t}T00:00:00.0Z`)
              } catch (e) {
                  return null
              }
          }(e);
          if (i && i.getTime() >= eD["2024-01-01"].timestamp && "object" == typeof r && r && "string" == typeof r.code ? n = r.code : "object" == typeof r && r && "string" == typeof r.error_code && (n = r.error_code),
          n) {
              if ("weak_password" === n)
                  throw new ti(to(r),e.status,(null === (t = r.weak_password) || void 0 === t ? void 0 : t.reasons) || []);
              if ("session_not_found" === n)
                  throw new e3
          } else if ("object" == typeof r && r && "object" == typeof r.weak_password && r.weak_password && Array.isArray(r.weak_password.reasons) && r.weak_password.reasons.length && r.weak_password.reasons.reduce( (e, t) => e && "string" == typeof t, !0))
              throw new ti(to(r),e.status,r.weak_password.reasons);
          throw new e6(to(r),e.status || 500,n)
      }
      let tu = (e, t, r, n) => {
          let i = {
              method: e,
              headers: (null == t ? void 0 : t.headers) || {}
          };
          return "GET" === e ? i : (i.headers = Object.assign({
              "Content-Type": "application/json;charset=UTF-8"
          }, null == t ? void 0 : t.headers),
          i.body = JSON.stringify(n),
          Object.assign(Object.assign({}, i), r))
      }
      ;
      async function tc(e, t, r, n) {
          var i;
          let s = Object.assign({}, null == n ? void 0 : n.headers);
          s[eM] || (s[eM] = eD["2024-01-01"].name),
          (null == n ? void 0 : n.jwt) && (s.Authorization = `Bearer ${n.jwt}`);
          let o = null !== (i = null == n ? void 0 : n.query) && void 0 !== i ? i : {};
          (null == n ? void 0 : n.redirectTo) && (o.redirect_to = n.redirectTo);
          let a = Object.keys(o).length ? "?" + new URLSearchParams(o).toString() : ""
            , l = await td(e, t, r + a, {
              headers: s,
              noResolveJson: null == n ? void 0 : n.noResolveJson
          }, {}, null == n ? void 0 : n.body);
          return (null == n ? void 0 : n.xform) ? null == n ? void 0 : n.xform(l) : {
              data: Object.assign({}, l),
              error: null
          }
      }
      async function td(e, t, r, n, i, s) {
          let o;
          let a = tu(t, n, i, s);
          try {
              o = await e(r, Object.assign({}, a))
          } catch (e) {
              throw console.error(e),
              new tr(to(e),0)
          }
          if (o.ok || await tl(o),
          null == n ? void 0 : n.noResolveJson)
              return o;
          try {
              return await o.json()
          } catch (e) {
              await tl(e)
          }
      }
      function th(e) {
          var t, r;
          let n = null;
          return e.access_token && e.refresh_token && e.expires_in && (n = Object.assign({}, e),
          !e.expires_at) && (n.expires_at = (r = e.expires_in,
          Math.round(Date.now() / 1e3) + r)),
          {
              data: {
                  session: n,
                  user: null !== (t = e.user) && void 0 !== t ? t : e
              },
              error: null
          }
      }
      function tf(e) {
          let t = th(e);
          return !t.error && e.weak_password && "object" == typeof e.weak_password && Array.isArray(e.weak_password.reasons) && e.weak_password.reasons.length && e.weak_password.message && "string" == typeof e.weak_password.message && e.weak_password.reasons.reduce( (e, t) => e && "string" == typeof t, !0) && (t.data.weak_password = e.weak_password),
          t
      }
      function tp(e) {
          var t;
          return {
              data: {
                  user: null !== (t = e.user) && void 0 !== t ? t : e
              },
              error: null
          }
      }
      function tg(e) {
          return {
              data: e,
              error: null
          }
      }
      function tm(e) {
          let {action_link: t, email_otp: r, hashed_token: n, redirect_to: i, verification_type: s} = e;
          return {
              data: {
                  properties: {
                      action_link: t,
                      email_otp: r,
                      hashed_token: n,
                      redirect_to: i,
                      verification_type: s
                  },
                  user: Object.assign({}, ts(e, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]))
              },
              error: null
          }
      }
      function tv(e) {
          return e
      }
      var ty = function(e, t) {
          var r = {};
          for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
              for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                  0 > t.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
          return r
      };
      class tb {
          constructor({url: e="", headers: t={}, fetch: r}) {
              this.url = e,
              this.headers = t,
              this.fetch = eW(r),
              this.mfa = {
                  listFactors: this._listFactors.bind(this),
                  deleteFactor: this._deleteFactor.bind(this)
              }
          }
          async signOut(e, t="global") {
              try {
                  return await tc(this.fetch, "POST", `${this.url}/logout?scope=${t}`, {
                      headers: this.headers,
                      jwt: e,
                      noResolveJson: !0
                  }),
                  {
                      data: null,
                      error: null
                  }
              } catch (e) {
                  if (e8(e))
                      return {
                          data: null,
                          error: e
                      };
                  throw e
              }
          }
          async inviteUserByEmail(e, t={}) {
              try {
                  return await tc(this.fetch, "POST", `${this.url}/invite`, {
                      body: {
                          email: e,
                          data: t.data
                      },
                      headers: this.headers,
                      redirectTo: t.redirectTo,
                      xform: tp
                  })
              } catch (e) {
                  if (e8(e))
                      return {
                          data: {
                              user: null
                          },
                          error: e
                      };
                  throw e
              }
          }
          async generateLink(e) {
              try {
                  let {options: t} = e
                    , r = ty(e, ["options"])
                    , n = Object.assign(Object.assign({}, r), t);
                  return "newEmail"in r && (n.new_email = null == r ? void 0 : r.newEmail,
                  delete n.newEmail),
                  await tc(this.fetch, "POST", `${this.url}/admin/generate_link`, {
                      body: n,
                      headers: this.headers,
                      xform: tm,
                      redirectTo: null == t ? void 0 : t.redirectTo
                  })
              } catch (e) {
                  if (e8(e))
                      return {
                          data: {
                              properties: null,
                              user: null
                          },
                          error: e
                      };
                  throw e
              }
          }
          async createUser(e) {
              try {
                  return await tc(this.fetch, "POST", `${this.url}/admin/users`, {
                      body: e,
                      headers: this.headers,
                      xform: tp
                  })
              } catch (e) {
                  if (e8(e))
                      return {
                          data: {
                              user: null
                          },
                          error: e
                      };
                  throw e
              }
          }
          async listUsers(e) {
              var t, r, n, i, s, o, a;
              try {
                  let l = {
                      nextPage: null,
                      lastPage: 0,
                      total: 0
                  }
                    , u = await tc(this.fetch, "GET", `${this.url}/admin/users`, {
                      headers: this.headers,
                      noResolveJson: !0,
                      query: {
                          page: null !== (r = null === (t = null == e ? void 0 : e.page) || void 0 === t ? void 0 : t.toString()) && void 0 !== r ? r : "",
                          per_page: null !== (i = null === (n = null == e ? void 0 : e.perPage) || void 0 === n ? void 0 : n.toString()) && void 0 !== i ? i : ""
                      },
                      xform: tv
                  });
                  if (u.error)
                      throw u.error;
                  let c = await u.json()
                    , d = null !== (s = u.headers.get("x-total-count")) && void 0 !== s ? s : 0
                    , h = null !== (a = null === (o = u.headers.get("link")) || void 0 === o ? void 0 : o.split(",")) && void 0 !== a ? a : [];
                  return h.length > 0 && (h.forEach(e => {
                      let t = parseInt(e.split(";")[0].split("=")[1].substring(0, 1))
                        , r = JSON.parse(e.split(";")[1].split("=")[1]);
                      l[`${r}Page`] = t
                  }
                  ),
                  l.total = parseInt(d)),
                  {
                      data: Object.assign(Object.assign({}, c), l),
                      error: null
                  }
              } catch (e) {
                  if (e8(e))
                      return {
                          data: {
                              users: []
                          },
                          error: e
                      };
                  throw e
              }
          }
          async getUserById(e) {
              try {
                  return await tc(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
                      headers: this.headers,
                      xform: tp
                  })
              } catch (e) {
                  if (e8(e))
                      return {
                          data: {
                              user: null
                          },
                          error: e
                      };
                  throw e
              }
          }
          async updateUserById(e, t) {
              try {
                  return await tc(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
                      body: t,
                      headers: this.headers,
                      xform: tp
                  })
              } catch (e) {
                  if (e8(e))
                      return {
                          data: {
                              user: null
                          },
                          error: e
                      };
                  throw e
              }
          }
          async deleteUser(e, t=!1) {
              try {
                  return await tc(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
                      headers: this.headers,
                      body: {
                          should_soft_delete: t
                      },
                      xform: tp
                  })
              } catch (e) {
                  if (e8(e))
                      return {
                          data: {
                              user: null
                          },
                          error: e
                      };
                  throw e
              }
          }
          async _listFactors(e) {
              try {
                  let {data: t, error: r} = await tc(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/factors`, {
                      headers: this.headers,
                      xform: e => ({
                          data: {
                              factors: e
                          },
                          error: null
                      })
                  });
                  return {
                      data: t,
                      error: r
                  }
              } catch (e) {
                  if (e8(e))
                      return {
                          data: null,
                          error: e
                      };
                  throw e
              }
          }
          async _deleteFactor(e) {
              try {
                  return {
                      data: await tc(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/factors/${e.id}`, {
                          headers: this.headers
                      }),
                      error: null
                  }
              } catch (e) {
                  if (e8(e))
                      return {
                          data: null,
                          error: e
                      };
                  throw e
              }
          }
      }
      let tw = {
          getItem: e => ez() ? globalThis.localStorage.getItem(e) : null,
          setItem: (e, t) => {
              ez() && globalThis.localStorage.setItem(e, t)
          }
          ,
          removeItem: e => {
              ez() && globalThis.localStorage.removeItem(e)
          }
      };
      function t_(e={}) {
          return {
              getItem: t => e[t] || null,
              setItem: (t, r) => {
                  e[t] = r
              }
              ,
              removeItem: t => {
                  delete e[t]
              }
          }
      }
      let tE = {
          debug: !!(globalThis && ez() && globalThis.localStorage && "true" === globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug"))
      };
      class tk extends Error {
          constructor(e) {
              super(e),
              this.isAcquireTimeout = !0
          }
      }
      class tx extends tk {
      }
      async function tS(e, t, r) {
          tE.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", e, t);
          let n = new globalThis.AbortController;
          return t > 0 && setTimeout( () => {
              n.abort(),
              tE.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", e)
          }
          , t),
          await globalThis.navigator.locks.request(e, 0 === t ? {
              mode: "exclusive",
              ifAvailable: !0
          } : {
              mode: "exclusive",
              signal: n.signal
          }, async n => {
              if (n) {
                  tE.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", e, n.name);
                  try {
                      return await r()
                  } finally {
                      tE.debug && console.log("@supabase/gotrue-js: navigatorLock: released", e, n.name)
                  }
              } else {
                  if (0 === t)
                      throw tE.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", e),
                      new tx(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);
                  if (tE.debug)
                      try {
                          let e = await globalThis.navigator.locks.query();
                          console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(e, null, "  "))
                      } catch (e) {
                          console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", e)
                      }
                  return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),
                  await r()
              }
          }
          )
      }
      !function() {
          if ("object" != typeof globalThis)
              try {
                  Object.defineProperty(Object.prototype, "__magic__", {
                      get: function() {
                          return this
                      },
                      configurable: !0
                  }),
                  __magic__.globalThis = __magic__,
                  delete Object.prototype.__magic__
              } catch (e) {
                  "undefined" != typeof self && (self.globalThis = self)
              }
      }();
      let tT = {
          url: "http://localhost:9999",
          storageKey: "supabase.auth.token",
          autoRefreshToken: !0,
          persistSession: !0,
          detectSessionInUrl: !0,
          headers: eN,
          flowType: "implicit",
          debug: !1,
          hasCustomAuthorizationHeader: !1
      };
      async function tj(e, t, r) {
          return await r()
      }
      class tP {
          constructor(e) {
              var t, r;
              this.memoryStorage = null,
              this.stateChangeEmitters = new Map,
              this.autoRefreshTicker = null,
              this.visibilityChangedCallback = null,
              this.refreshingDeferred = null,
              this.initializePromise = null,
              this.detectSessionInUrl = !0,
              this.hasCustomAuthorizationHeader = !1,
              this.suppressGetSessionWarning = !1,
              this.lockAcquired = !1,
              this.pendingInLock = [],
              this.broadcastChannel = null,
              this.logger = console.log,
              this.instanceID = tP.nextInstanceID,
              tP.nextInstanceID += 1,
              this.instanceID > 0 && eU() && console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");
              let n = Object.assign(Object.assign({}, tT), e);
              if (this.logDebugMessages = !!n.debug,
              "function" == typeof n.debug && (this.logger = n.debug),
              this.persistSession = n.persistSession,
              this.storageKey = n.storageKey,
              this.autoRefreshToken = n.autoRefreshToken,
              this.admin = new tb({
                  url: n.url,
                  headers: n.headers,
                  fetch: n.fetch
              }),
              this.url = n.url,
              this.headers = n.headers,
              this.fetch = eW(n.fetch),
              this.lock = n.lock || tj,
              this.detectSessionInUrl = n.detectSessionInUrl,
              this.flowType = n.flowType,
              this.hasCustomAuthorizationHeader = n.hasCustomAuthorizationHeader,
              n.lock ? this.lock = n.lock : eU() && (null === (t = null == globalThis ? void 0 : globalThis.navigator) || void 0 === t ? void 0 : t.locks) ? this.lock = tS : this.lock = tj,
              this.mfa = {
                  verify: this._verify.bind(this),
                  enroll: this._enroll.bind(this),
                  unenroll: this._unenroll.bind(this),
                  challenge: this._challenge.bind(this),
                  listFactors: this._listFactors.bind(this),
                  challengeAndVerify: this._challengeAndVerify.bind(this),
                  getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this)
              },
              this.persistSession ? n.storage ? this.storage = n.storage : ez() ? this.storage = tw : (this.memoryStorage = {},
              this.storage = t_(this.memoryStorage)) : (this.memoryStorage = {},
              this.storage = t_(this.memoryStorage)),
              eU() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
                  try {
                      this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey)
                  } catch (e) {
                      console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", e)
                  }
                  null === (r = this.broadcastChannel) || void 0 === r || r.addEventListener("message", async e => {
                      this._debug("received broadcast notification from other tab or client", e),
                      await this._notifyAllSubscribers(e.data.event, e.data.session, !1)
                  }
                  )
              }
              this.initialize()
          }
          _debug(...e) {
              return this.logDebugMessages && this.logger(`GoTrueClient@${this.instanceID} (${eL}) ${new Date().toISOString()}`, ...e),
              this
          }
          async initialize() {
              return this.initializePromise || (this.initializePromise = (async () => await this._acquireLock(-1, async () => await this._initialize()))()),
              await this.initializePromise
          }
          async _initialize() {
              try {
                  let e = !!eU() && await this._isPKCEFlow();
                  if (this._debug("#_initialize()", "begin", "is PKCE flow", e),
                  e || this.detectSessionInUrl && this._isImplicitGrantFlow()) {
                      let {data: t, error: r} = await this._getSessionFromURL(e);
                      if (r) {
                          if (this._debug("#_initialize()", "error detecting session from URL", r),
                          (null == r ? void 0 : r.code) === "identity_already_exists")
                              return {
                                  error: r
                              };
                          return await this._removeSession(),
                          {
                              error: r
                          }
                      }
                      let {session: n, redirectType: i} = t;
                      return this._debug("#_initialize()", "detected session in URL", n, "redirect type", i),
                      await this._saveSession(n),
                      setTimeout(async () => {
                          "recovery" === i ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", n) : await this._notifyAllSubscribers("SIGNED_IN", n)
                      }
                      , 0),
                      {
                          error: null
                      }
                  }
                  return await this._recoverAndRefresh(),
                  {
                      error: null
                  }
              } catch (e) {
                  if (e8(e))
                      return {
                          error: e
                      };
                  return {
                      error: new e4("Unexpected error during initialization",e)
                  }
              } finally {
                  await this._handleVisibilityChange(),
                  this._debug("#_initialize()", "end")
              }
          }
          async signInAnonymously(e) {
              var t, r, n;
              try {
                  let {data: i, error: s} = await tc(this.fetch, "POST", `${this.url}/signup`, {
                      headers: this.headers,
                      body: {
                          data: null !== (r = null === (t = null == e ? void 0 : e.options) || void 0 === t ? void 0 : t.data) && void 0 !== r ? r : {},
                          gotrue_meta_security: {
                              captcha_token: null === (n = null == e ? void 0 : e.options) || void 0 === n ? void 0 : n.captchaToken
                          }
                      },
                      xform: th
                  });
                  if (s || !i)
                      return {
                          data: {
                              user: null,
                              session: null
                          },
                          error: s
                      };
                  let o = i.session
                    , a = i.user;
                  return i.session && (await this._saveSession(i.session),
                  await this._notifyAllSubscribers("SIGNED_IN", o)),
                  {
                      data: {
                          user: a,
                          session: o
                      },
                      error: null
                  }
              } catch (e) {
                  if (e8(e))
                      return {
                          data: {
                              user: null,
                              session: null
                          },
                          error: e
                      };
                  throw e
              }
          }
          async signUp(e) {
              var t, r, n;
              try {
                  let i;
                  if ("email"in e) {
                      let {email: r, password: n, options: s} = e
                        , o = null
                        , a = null;
                      "pkce" === this.flowType && ([o,a] = await e0(this.storage, this.storageKey)),
                      i = await tc(this.fetch, "POST", `${this.url}/signup`, {
                          headers: this.headers,
                          redirectTo: null == s ? void 0 : s.emailRedirectTo,
                          body: {
                              email: r,
                              password: n,
                              data: null !== (t = null == s ? void 0 : s.data) && void 0 !== t ? t : {},
                              gotrue_meta_security: {
                                  captcha_token: null == s ? void 0 : s.captchaToken
                              },
                              code_challenge: o,
                              code_challenge_method: a
                          },
                          xform: th
                      })
                  } else if ("phone"in e) {
                      let {phone: t, password: s, options: o} = e;
                      i = await tc(this.fetch, "POST", `${this.url}/signup`, {
                          headers: this.headers,
                          body: {
                              phone: t,
                              password: s,
                              data: null !== (r = null == o ? void 0 : o.data) && void 0 !== r ? r : {},
                              channel: null !== (n = null == o ? void 0 : o.channel) && void 0 !== n ? n : "sms",
                              gotrue_meta_security: {
                                  captcha_token: null == o ? void 0 : o.captchaToken
                              }
                          },
                          xform: th
                      })
                  } else
                      throw new e9("You must provide either an email or phone number and a password");
                  let {data: s, error: o} = i;
                  if (o || !s)
                      return {
                          data: {
                              user: null,
                              session: null
                          },
                          error: o
                      };
                  let a = s.session
                    , l = s.user;
                  return s.session && (await this._saveSession(s.session),
                  await this._notifyAllSubscribers("SIGNED_IN", a)),
                  {
                      data: {
                          user: l,
                          session: a
                      },
                      error: null
                  }
              } catch (e) {
                  if (e8(e))
                      return {
                          data: {
                              user: null,
                              session: null
                          },
                          error: e
                      };
                  throw e
              }
          }
          async signInWithPassword(e) {
              try {
                  let t;
                  if ("email"in e) {
                      let {email: r, password: n, options: i} = e;
                      t = await tc(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                          headers: this.headers,
                          body: {
                              email: r,
                              password: n,
                              gotrue_meta_security: {
                                  captcha_token: null == i ? void 0 : i.captchaToken
                              }
                          },
                          xform: tf
                      })
                  } else if ("phone"in e) {
                      let {phone: r, password: n, options: i} = e;
                      t = await tc(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                          headers: this.headers,
                          body: {
                              phone: r,
                              password: n,
                              gotrue_meta_security: {
                                  captcha_token: null == i ? void 0 : i.captchaToken
                              }
                          },
                          xform: tf
                      })
                  } else
                      throw new e9("You must provide either an email or phone number and a password");
                  let {data: r, error: n} = t;
                  if (n)
                      return {
                          data: {
                              user: null,
                              session: null
                          },
                          error: n
                      };
                  if (!r || !r.session || !r.user)
                      return {
                          data: {
                              user: null,
                              session: null
                          },
                          error: new e7
                      };
                  return r.session && (await this._saveSession(r.session),
                  await this._notifyAllSubscribers("SIGNED_IN", r.session)),
                  {
                      data: Object.assign({
                          user: r.user,
                          session: r.session
                      }, r.weak_password ? {
                          weakPassword: r.weak_password
                      } : null),
                      error: n
                  }
              } catch (e) {
                  if (e8(e))
                      return {
                          data: {
                              user: null,
                              session: null
                          },
                          error: e
                      };
                  throw e
              }
          }
          async signInWithOAuth(e) {
              var t, r, n, i;
              return await this._handleProviderSignIn(e.provider, {
                  redirectTo: null === (t = e.options) || void 0 === t ? void 0 : t.redirectTo,
                  scopes: null === (r = e.options) || void 0 === r ? void 0 : r.scopes,
                  queryParams: null === (n = e.options) || void 0 === n ? void 0 : n.queryParams,
                  skipBrowserRedirect: null === (i = e.options) || void 0 === i ? void 0 : i.skipBrowserRedirect
              })
          }
          async exchangeCodeForSession(e) {
              return await this.initializePromise,
              this._acquireLock(-1, async () => this._exchangeCodeForSession(e))
          }
          async _exchangeCodeForSession(e) {
              let t = await eG(this.storage, `${this.storageKey}-code-verifier`)
                , [r,n] = (null != t ? t : "").split("/");
              try {
                  let {data: t, error: i} = await tc(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
                      headers: this.headers,
                      body: {
                          auth_code: e,
                          code_verifier: r
                      },
                      xform: th
                  });
                  if (await eH(this.storage, `${this.storageKey}-code-verifier`),
                  i)
                      throw i;
                  if (!t || !t.session || !t.user)
                      return {
                          data: {
                              user: null,
                              session: null,
                              redirectType: null
                          },
                          error: new e7
                      };
                  return t.session && (await this._saveSession(t.session),
                  await this._notifyAllSubscribers("SIGNED_IN", t.session)),
                  {
                      data: Object.assign(Object.assign({}, t), {
                          redirectType: null != n ? n : null
                      }),
                      error: i
                  }
              } catch (e) {
                  if (e8(e))
                      return {
                          data: {
                              user: null,
                              session: null,
                              redirectType: null
                          },
                          error: e
                      };
                  throw e
              }
          }
          async signInWithIdToken(e) {
              try {
                  let {options: t, provider: r, token: n, access_token: i, nonce: s} = e
                    , {data: o, error: a} = await tc(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
                      headers: this.headers,
                      body: {
                          provider: r,
                          id_token: n,
                          access_token: i,
                          nonce: s,
                          gotrue_meta_security: {
                              captcha_token: null == t ? void 0 : t.captchaToken
                          }
                      },
                      xform: th
                  });
                  if (a)
                      return {
                          data: {
                              user: null,
                              session: null
                          },
                          error: a
                      };
                  if (!o || !o.session || !o.user)
                      return {
                          data: {
                              user: null,
                              session: null
                          },
                          error: new e7
                      };
                  return o.session && (await this._saveSession(o.session),
                  await this._notifyAllSubscribers("SIGNED_IN", o.session)),
                  {
                      data: o,
                      error: a
                  }
              } catch (e) {
                  if (e8(e))
                      return {
                          data: {
                              user: null,
                              session: null
                          },
                          error: e
                      };
                  throw e
              }
          }
          async signInWithOtp(e) {
              var t, r, n, i, s;
              try {
                  if ("email"in e) {
                      let {email: n, options: i} = e
                        , s = null
                        , o = null;
                      "pkce" === this.flowType && ([s,o] = await e0(this.storage, this.storageKey));
                      let {error: a} = await tc(this.fetch, "POST", `${this.url}/otp`, {
                          headers: this.headers,
                          body: {
                              email: n,
                              data: null !== (t = null == i ? void 0 : i.data) && void 0 !== t ? t : {},
                              create_user: null === (r = null == i ? void 0 : i.shouldCreateUser) || void 0 === r || r,
                              gotrue_meta_security: {
                                  captcha_token: null == i ? void 0 : i.captchaToken
                              },
                              code_challenge: s,
                              code_challenge_method: o
                          },
                          redirectTo: null == i ? void 0 : i.emailRedirectTo
                      });
                      return {
                          data: {
                              user: null,
                              session: null
                          },
                          error: a
                      }
                  }
                  if ("phone"in e) {
                      let {phone: t, options: r} = e
                        , {data: o, error: a} = await tc(this.fetch, "POST", `${this.url}/otp`, {
                          headers: this.headers,
                          body: {
                              phone: t,
                              data: null !== (n = null == r ? void 0 : r.data) && void 0 !== n ? n : {},
                              create_user: null === (i = null == r ? void 0 : r.shouldCreateUser) || void 0 === i || i,
                              gotrue_meta_security: {
                                  captcha_token: null == r ? void 0 : r.captchaToken
                              },
                              channel: null !== (s = null == r ? void 0 : r.channel) && void 0 !== s ? s : "sms"
                          }
                      });
                      return {
                          data: {
                              user: null,
                              session: null,
                              messageId: null == o ? void 0 : o.message_id
                          },
                          error: a
                      }
                  }
                  throw new e9("You must provide either an email or phone number.")
              } catch (e) {
                  if (e8(e))
                      return {
                          data: {
                              user: null,
                              session: null
                          },
                          error: e
                      };
                  throw e
              }
          }
          async verifyOtp(e) {
              var t, r;
              try {
                  let n, i;
                  "options"in e && (n = null === (t = e.options) || void 0 === t ? void 0 : t.redirectTo,
                  i = null === (r = e.options) || void 0 === r ? void 0 : r.captchaToken);
                  let {data: s, error: o} = await tc(this.fetch, "POST", `${this.url}/verify`, {
                      headers: this.headers,
                      body: Object.assign(Object.assign({}, e), {
                          gotrue_meta_security: {
                              captcha_token: i
                          }
                      }),
                      redirectTo: n,
                      xform: th
                  });
                  if (o)
                      throw o;
                  if (!s)
                      throw Error("An error occurred on token verification.");
                  let a = s.session
                    , l = s.user;
                  return (null == a ? void 0 : a.access_token) && (await this._saveSession(a),
                  await this._notifyAllSubscribers("recovery" == e.type ? "PASSWORD_RECOVERY" : "SIGNED_IN", a)),
                  {
                      data: {
                          user: l,
                          session: a
                      },
                      error: null
                  }
              } catch (e) {
                  if (e8(e))
                      return {
                          data: {
                              user: null,
                              session: null
                          },
                          error: e
                      };
                  throw e
              }
          }
          async signInWithSSO(e) {
              var t, r, n;
              try {
                  let i = null
                    , s = null;
                  return "pkce" === this.flowType && ([i,s] = await e0(this.storage, this.storageKey)),
                  await tc(this.fetch, "POST", `${this.url}/sso`, {
                      body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId"in e ? {
                          provider_id: e.providerId
                      } : null), "domain"in e ? {
                          domain: e.domain
                      } : null), {
                          redirect_to: null !== (r = null === (t = e.options) || void 0 === t ? void 0 : t.redirectTo) && void 0 !== r ? r : void 0
                      }), (null === (n = null == e ? void 0 : e.options) || void 0 === n ? void 0 : n.captchaToken) ? {
                          gotrue_meta_security: {
                              captcha_token: e.options.captchaToken
                          }
                      } : null), {
                          skip_http_redirect: !0,
                          code_challenge: i,
                          code_challenge_method: s
                      }),
                      headers: this.headers,
                      xform: tg
                  })
              } catch (e) {
                  if (e8(e))
                      return {
                          data: null,
                          error: e
                      };
                  throw e
              }
          }
          async reauthenticate() {
              return await this.initializePromise,
              await this._acquireLock(-1, async () => await this._reauthenticate())
          }
          async _reauthenticate() {
              try {
                  return await this._useSession(async e => {
                      let {data: {session: t}, error: r} = e;
                      if (r)
                          throw r;
                      if (!t)
                          throw new e3;
                      let {error: n} = await tc(this.fetch, "GET", `${this.url}/reauthenticate`, {
                          headers: this.headers,
                          jwt: t.access_token
                      });
                      return {
                          data: {
                              user: null,
                              session: null
                          },
                          error: n
                      }
                  }
                  )
              } catch (e) {
                  if (e8(e))
                      return {
                          data: {
                              user: null,
                              session: null
                          },
                          error: e
                      };
                  throw e
              }
          }
          async resend(e) {
              try {
                  let t = `${this.url}/resend`;
                  if ("email"in e) {
                      let {email: r, type: n, options: i} = e
                        , {error: s} = await tc(this.fetch, "POST", t, {
                          headers: this.headers,
                          body: {
                              email: r,
                              type: n,
                              gotrue_meta_security: {
                                  captcha_token: null == i ? void 0 : i.captchaToken
                              }
                          },
                          redirectTo: null == i ? void 0 : i.emailRedirectTo
                      });
                      return {
                          data: {
                              user: null,
                              session: null
                          },
                          error: s
                      }
                  }
                  if ("phone"in e) {
                      let {phone: r, type: n, options: i} = e
                        , {data: s, error: o} = await tc(this.fetch, "POST", t, {
                          headers: this.headers,
                          body: {
                              phone: r,
                              type: n,
                              gotrue_meta_security: {
                                  captcha_token: null == i ? void 0 : i.captchaToken
                              }
                          }
                      });
                      return {
                          data: {
                              user: null,
                              session: null,
                              messageId: null == s ? void 0 : s.message_id
                          },
                          error: o
                      }
                  }
                  throw new e9("You must provide either an email or phone number and a type")
              } catch (e) {
                  if (e8(e))
                      return {
                          data: {
                              user: null,
                              session: null
                          },
                          error: e
                      };
                  throw e
              }
          }
          async getSession() {
              return await this.initializePromise,
              await this._acquireLock(-1, async () => this._useSession(async e => e))
          }
          async _acquireLock(e, t) {
              this._debug("#_acquireLock", "begin", e);
              try {
                  if (this.lockAcquired) {
                      let e = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve()
                        , r = (async () => (await e,
                      await t()))();
                      return this.pendingInLock.push((async () => {
                          try {
                              await r
                          } catch (e) {}
                      }
                      )()),
                      r
                  }
                  return await this.lock(`lock:${this.storageKey}`, e, async () => {
                      this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
                      try {
                          this.lockAcquired = !0;
                          let e = t();
                          for (this.pendingInLock.push((async () => {
                              try {
                                  await e
                              } catch (e) {}
                          }
                          )()),
                          await e; this.pendingInLock.length; ) {
                              let e = [...this.pendingInLock];
                              await Promise.all(e),
                              this.pendingInLock.splice(0, e.length)
                          }
                          return await e
                      } finally {
                          this._debug("#_acquireLock", "lock released for storage key", this.storageKey),
                          this.lockAcquired = !1
                      }
                  }
                  )
              } finally {
                  this._debug("#_acquireLock", "end")
              }
          }
          async _useSession(e) {
              this._debug("#_useSession", "begin");
              try {
                  let t = await this.__loadSession();
                  return await e(t)
              } finally {
                  this._debug("#_useSession", "end")
              }
          }
          async __loadSession() {
              this._debug("#__loadSession()", "begin"),
              this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", Error().stack);
              try {
                  let e = null
                    , t = await eG(this.storage, this.storageKey);
                  if (this._debug("#getSession()", "session from storage", t),
                  null !== t && (this._isValidSession(t) ? e = t : (this._debug("#getSession()", "session from storage is not valid"),
                  await this._removeSession())),
                  !e)
                      return {
                          data: {
                              session: null
                          },
                          error: null
                      };
                  let r = !!e.expires_at && e.expires_at <= Date.now() / 1e3;
                  if (this._debug("#__loadSession()", `session has${r ? "" : " not"} expired`, "expires_at", e.expires_at),
                  !r) {
                      if (this.storage.isServer) {
                          let t = this.suppressGetSessionWarning;
                          e = new Proxy(e,{
                              get: (e, r, n) => (t || "user" !== r || (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and many not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),
                              t = !0,
                              this.suppressGetSessionWarning = !0),
                              Reflect.get(e, r, n))
                          })
                      }
                      return {
                          data: {
                              session: e
                          },
                          error: null
                      }
                  }
                  let {session: n, error: i} = await this._callRefreshToken(e.refresh_token);
                  if (i)
                      return {
                          data: {
                              session: null
                          },
                          error: i
                      };
                  return {
                      data: {
                          session: n
                      },
                      error: null
                  }
              } finally {
                  this._debug("#__loadSession()", "end")
              }
          }
          async getUser(e) {
              return e ? await this._getUser(e) : (await this.initializePromise,
              await this._acquireLock(-1, async () => await this._getUser()))
          }
          async _getUser(e) {
              try {
                  if (e)
                      return await tc(this.fetch, "GET", `${this.url}/user`, {
                          headers: this.headers,
                          jwt: e,
                          xform: tp
                      });
                  return await this._useSession(async e => {
                      var t, r, n;
                      let {data: i, error: s} = e;
                      if (s)
                          throw s;
                      return (null === (t = i.session) || void 0 === t ? void 0 : t.access_token) || this.hasCustomAuthorizationHeader ? await tc(this.fetch, "GET", `${this.url}/user`, {
                          headers: this.headers,
                          jwt: null !== (n = null === (r = i.session) || void 0 === r ? void 0 : r.access_token) && void 0 !== n ? n : void 0,
                          xform: tp
                      }) : {
                          data: {
                              user: null
                          },
                          error: new e3
                      }
                  }
                  )
              } catch (e) {
                  if (e8(e))
                      return e8(e) && "AuthSessionMissingError" === e.name && (await this._removeSession(),
                      await eH(this.storage, `${this.storageKey}-code-verifier`)),
                      {
                          data: {
                              user: null
                          },
                          error: e
                      };
                  throw e
              }
          }
          async updateUser(e, t={}) {
              return await this.initializePromise,
              await this._acquireLock(-1, async () => await this._updateUser(e, t))
          }
          async _updateUser(e, t={}) {
              try {
                  return await this._useSession(async r => {
                      let {data: n, error: i} = r;
                      if (i)
                          throw i;
                      if (!n.session)
                          throw new e3;
                      let s = n.session
                        , o = null
                        , a = null;
                      "pkce" === this.flowType && null != e.email && ([o,a] = await e0(this.storage, this.storageKey));
                      let {data: l, error: u} = await tc(this.fetch, "PUT", `${this.url}/user`, {
                          headers: this.headers,
                          redirectTo: null == t ? void 0 : t.emailRedirectTo,
                          body: Object.assign(Object.assign({}, e), {
                              code_challenge: o,
                              code_challenge_method: a
                          }),
                          jwt: s.access_token,
                          xform: tp
                      });
                      if (u)
                          throw u;
                      return s.user = l.user,
                      await this._saveSession(s),
                      await this._notifyAllSubscribers("USER_UPDATED", s),
                      {
                          data: {
                              user: s.user
                          },
                          error: null
                      }
                  }
                  )
              } catch (e) {
                  if (e8(e))
                      return {
                          data: {
                              user: null
                          },
                          error: e
                      };
                  throw e
              }
          }
          _decodeJWT(e) {
              return eV(e)
          }
          async setSession(e) {
              return await this.initializePromise,
              await this._acquireLock(-1, async () => await this._setSession(e))
          }
          async _setSession(e) {
              try {
                  if (!e.access_token || !e.refresh_token)
                      throw new e3;
                  let t = Date.now() / 1e3
                    , r = t
                    , n = !0
                    , i = null
                    , s = eV(e.access_token);
                  if (s.exp && (n = (r = s.exp) <= t),
                  n) {
                      let {session: t, error: r} = await this._callRefreshToken(e.refresh_token);
                      if (r)
                          return {
                              data: {
                                  user: null,
                                  session: null
                              },
                              error: r
                          };
                      if (!t)
                          return {
                              data: {
                                  user: null,
                                  session: null
                              },
                              error: null
                          };
                      i = t
                  } else {
                      let {data: n, error: s} = await this._getUser(e.access_token);
                      if (s)
                          throw s;
                      i = {
                          access_token: e.access_token,
                          refresh_token: e.refresh_token,
                          user: n.user,
                          token_type: "bearer",
                          expires_in: r - t,
                          expires_at: r
                      },
                      await this._saveSession(i),
                      await this._notifyAllSubscribers("SIGNED_IN", i)
                  }
                  return {
                      data: {
                          user: i.user,
                          session: i
                      },
                      error: null
                  }
              } catch (e) {
                  if (e8(e))
                      return {
                          data: {
                              session: null,
                              user: null
                          },
                          error: e
                      };
                  throw e
              }
          }
          async refreshSession(e) {
              return await this.initializePromise,
              await this._acquireLock(-1, async () => await this._refreshSession(e))
          }
          async _refreshSession(e) {
              try {
                  return await this._useSession(async t => {
                      var r;
                      if (!e) {
                          let {data: n, error: i} = t;
                          if (i)
                              throw i;
                          e = null !== (r = n.session) && void 0 !== r ? r : void 0
                      }
                      if (!(null == e ? void 0 : e.refresh_token))
                          throw new e3;
                      let {session: n, error: i} = await this._callRefreshToken(e.refresh_token);
                      return i ? {
                          data: {
                              user: null,
                              session: null
                          },
                          error: i
                      } : n ? {
                          data: {
                              user: n.user,
                              session: n
                          },
                          error: null
                      } : {
                          data: {
                              user: null,
                              session: null
                          },
                          error: null
                      }
                  }
                  )
              } catch (e) {
                  if (e8(e))
                      return {
                          data: {
                              user: null,
                              session: null
                          },
                          error: e
                      };
                  throw e
              }
          }
          async _getSessionFromURL(e) {
              try {
                  if (!eU())
                      throw new te("No browser detected.");
                  if ("implicit" !== this.flowType || this._isImplicitGrantFlow()) {
                      if ("pkce" == this.flowType && !e)
                          throw new tt("Not a valid PKCE flow url.")
                  } else
                      throw new te("Not a valid implicit grant flow url.");
                  let t = eF(window.location.href);
                  if (e) {
                      if (!t.code)
                          throw new tt("No code detected.");
                      let {data: e, error: r} = await this._exchangeCodeForSession(t.code);
                      if (r)
                          throw r;
                      let n = new URL(window.location.href);
                      return n.searchParams.delete("code"),
                      window.history.replaceState(window.history.state, "", n.toString()),
                      {
                          data: {
                              session: e.session,
                              redirectType: null
                          },
                          error: null
                      }
                  }
                  if (t.error || t.error_description || t.error_code)
                      throw new te(t.error_description || "Error in URL with unspecified error_description",{
                          error: t.error || "unspecified_error",
                          code: t.error_code || "unspecified_code"
                      });
                  let {provider_token: r, provider_refresh_token: n, access_token: i, refresh_token: s, expires_in: o, expires_at: a, token_type: l} = t;
                  if (!i || !o || !s || !l)
                      throw new te("No session defined in URL");
                  let u = Math.round(Date.now() / 1e3)
                    , c = parseInt(o)
                    , d = u + c;
                  a && (d = parseInt(a));
                  let h = d - u;
                  1e3 * h <= 3e4 && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${h}s, should have been closer to ${c}s`);
                  let f = d - c;
                  u - f >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", f, d, u) : u - f < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", f, d, u);
                  let {data: p, error: g} = await this._getUser(i);
                  if (g)
                      throw g;
                  let m = {
                      provider_token: r,
                      provider_refresh_token: n,
                      access_token: i,
                      expires_in: c,
                      expires_at: d,
                      refresh_token: s,
                      token_type: l,
                      user: p.user
                  };
                  return window.location.hash = "",
                  this._debug("#_getSessionFromURL()", "clearing window.location.hash"),
                  {
                      data: {
                          session: m,
                          redirectType: t.type
                      },
                      error: null
                  }
              } catch (e) {
                  if (e8(e))
                      return {
                          data: {
                              session: null,
                              redirectType: null
                          },
                          error: e
                      };
                  throw e
              }
          }
          _isImplicitGrantFlow() {
              let e = eF(window.location.href);
              return !!(eU() && (e.access_token || e.error_description))
          }
          async _isPKCEFlow() {
              let e = eF(window.location.href)
                , t = await eG(this.storage, `${this.storageKey}-code-verifier`);
              return !!(e.code && t)
          }
          async signOut(e={
              scope: "global"
          }) {
              return await this.initializePromise,
              await this._acquireLock(-1, async () => await this._signOut(e))
          }
          async _signOut({scope: e}={
              scope: "global"
          }) {
              return await this._useSession(async t => {
                  var r;
                  let {data: n, error: i} = t;
                  if (i)
                      return {
                          error: i
                      };
                  let s = null === (r = n.session) || void 0 === r ? void 0 : r.access_token;
                  if (s) {
                      let {error: t} = await this.admin.signOut(s, e);
                      if (t && !(e8(t) && "AuthApiError" === t.name && (404 === t.status || 401 === t.status || 403 === t.status)))
                          return {
                              error: t
                          }
                  }
                  return "others" !== e && (await this._removeSession(),
                  await eH(this.storage, `${this.storageKey}-code-verifier`)),
                  {
                      error: null
                  }
              }
              )
          }
          onAuthStateChange(e) {
              let t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                  let t = 16 * Math.random() | 0;
                  return ("x" == e ? t : 3 & t | 8).toString(16)
              })
                , r = {
                  id: t,
                  callback: e,
                  unsubscribe: () => {
                      this._debug("#unsubscribe()", "state change callback with id removed", t),
                      this.stateChangeEmitters.delete(t)
                  }
              };
              return this._debug("#onAuthStateChange()", "registered callback with id", t),
              this.stateChangeEmitters.set(t, r),
              (async () => {
                  await this.initializePromise,
                  await this._acquireLock(-1, async () => {
                      this._emitInitialSession(t)
                  }
                  )
              }
              )(),
              {
                  data: {
                      subscription: r
                  }
              }
          }
          async _emitInitialSession(e) {
              return await this._useSession(async t => {
                  var r, n;
                  try {
                      let {data: {session: n}, error: i} = t;
                      if (i)
                          throw i;
                      await (null === (r = this.stateChangeEmitters.get(e)) || void 0 === r ? void 0 : r.callback("INITIAL_SESSION", n)),
                      this._debug("INITIAL_SESSION", "callback id", e, "session", n)
                  } catch (t) {
                      await (null === (n = this.stateChangeEmitters.get(e)) || void 0 === n ? void 0 : n.callback("INITIAL_SESSION", null)),
                      this._debug("INITIAL_SESSION", "callback id", e, "error", t),
                      console.error(t)
                  }
              }
              )
          }
          async resetPasswordForEmail(e, t={}) {
              let r = null
                , n = null;
              "pkce" === this.flowType && ([r,n] = await e0(this.storage, this.storageKey, !0));
              try {
                  return await tc(this.fetch, "POST", `${this.url}/recover`, {
                      body: {
                          email: e,
                          code_challenge: r,
                          code_challenge_method: n,
                          gotrue_meta_security: {
                              captcha_token: t.captchaToken
                          }
                      },
                      headers: this.headers,
                      redirectTo: t.redirectTo
                  })
              } catch (e) {
                  if (e8(e))
                      return {
                          data: null,
                          error: e
                      };
                  throw e
              }
          }
          async getUserIdentities() {
              var e;
              try {
                  let {data: t, error: r} = await this.getUser();
                  if (r)
                      throw r;
                  return {
                      data: {
                          identities: null !== (e = t.user.identities) && void 0 !== e ? e : []
                      },
                      error: null
                  }
              } catch (e) {
                  if (e8(e))
                      return {
                          data: null,
                          error: e
                      };
                  throw e
              }
          }
          async linkIdentity(e) {
              var t;
              try {
                  let {data: r, error: n} = await this._useSession(async t => {
                      var r, n, i, s, o;
                      let {data: a, error: l} = t;
                      if (l)
                          throw l;
                      let u = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, e.provider, {
                          redirectTo: null === (r = e.options) || void 0 === r ? void 0 : r.redirectTo,
                          scopes: null === (n = e.options) || void 0 === n ? void 0 : n.scopes,
                          queryParams: null === (i = e.options) || void 0 === i ? void 0 : i.queryParams,
                          skipBrowserRedirect: !0
                      });
                      return await tc(this.fetch, "GET", u, {
                          headers: this.headers,
                          jwt: null !== (o = null === (s = a.session) || void 0 === s ? void 0 : s.access_token) && void 0 !== o ? o : void 0
                      })
                  }
                  );
                  if (n)
                      throw n;
                  return !eU() || (null === (t = e.options) || void 0 === t ? void 0 : t.skipBrowserRedirect) || window.location.assign(null == r ? void 0 : r.url),
                  {
                      data: {
                          provider: e.provider,
                          url: null == r ? void 0 : r.url
                      },
                      error: null
                  }
              } catch (t) {
                  if (e8(t))
                      return {
                          data: {
                              provider: e.provider,
                              url: null
                          },
                          error: t
                      };
                  throw t
              }
          }
          async unlinkIdentity(e) {
              try {
                  return await this._useSession(async t => {
                      var r, n;
                      let {data: i, error: s} = t;
                      if (s)
                          throw s;
                      return await tc(this.fetch, "DELETE", `${this.url}/user/identities/${e.identity_id}`, {
                          headers: this.headers,
                          jwt: null !== (n = null === (r = i.session) || void 0 === r ? void 0 : r.access_token) && void 0 !== n ? n : void 0
                      })
                  }
                  )
              } catch (e) {
                  if (e8(e))
                      return {
                          data: null,
                          error: e
                      };
                  throw e
              }
          }
          async _refreshAccessToken(e) {
              let t = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
              this._debug(t, "begin");
              try {
                  var r, n;
                  let i = Date.now();
                  return await (r = async r => (r > 0 && await eY(200 * Math.pow(2, r - 1)),
                  this._debug(t, "refreshing attempt", r),
                  await tc(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
                      body: {
                          refresh_token: e
                      },
                      headers: this.headers,
                      xform: th
                  })),
                  n = (e, t) => t && tn(t) && Date.now() + 200 * Math.pow(2, e) - i < 3e4,
                  new Promise( (e, t) => {
                      (async () => {
                          for (let i = 0; i < 1 / 0; i++)
                              try {
                                  let t = await r(i);
                                  if (!n(i, null, t)) {
                                      e(t);
                                      return
                                  }
                              } catch (e) {
                                  if (!n(i, e)) {
                                      t(e);
                                      return
                                  }
                              }
                      }
                      )()
                  }
                  ))
              } catch (e) {
                  if (this._debug(t, "error", e),
                  e8(e))
                      return {
                          data: {
                              session: null,
                              user: null
                          },
                          error: e
                      };
                  throw e
              } finally {
                  this._debug(t, "end")
              }
          }
          _isValidSession(e) {
              return "object" == typeof e && null !== e && "access_token"in e && "refresh_token"in e && "expires_at"in e
          }
          async _handleProviderSignIn(e, t) {
              let r = await this._getUrlForProvider(`${this.url}/authorize`, e, {
                  redirectTo: t.redirectTo,
                  scopes: t.scopes,
                  queryParams: t.queryParams
              });
              return this._debug("#_handleProviderSignIn()", "provider", e, "options", t, "url", r),
              eU() && !t.skipBrowserRedirect && window.location.assign(r),
              {
                  data: {
                      provider: e,
                      url: r
                  },
                  error: null
              }
          }
          async _recoverAndRefresh() {
              var e;
              let t = "#_recoverAndRefresh()";
              this._debug(t, "begin");
              try {
                  let r = await eG(this.storage, this.storageKey);
                  if (this._debug(t, "session from storage", r),
                  !this._isValidSession(r)) {
                      this._debug(t, "session is not valid"),
                      null !== r && await this._removeSession();
                      return
                  }
                  let n = Math.round(Date.now() / 1e3)
                    , i = (null !== (e = r.expires_at) && void 0 !== e ? e : 1 / 0) < n + 10;
                  if (this._debug(t, `session has${i ? "" : " not"} expired with margin of 10s`),
                  i) {
                      if (this.autoRefreshToken && r.refresh_token) {
                          let {error: e} = await this._callRefreshToken(r.refresh_token);
                          e && (console.error(e),
                          tn(e) || (this._debug(t, "refresh failed with a non-retryable error, removing the session", e),
                          await this._removeSession()))
                      }
                  } else
                      await this._notifyAllSubscribers("SIGNED_IN", r)
              } catch (e) {
                  this._debug(t, "error", e),
                  console.error(e);
                  return
              } finally {
                  this._debug(t, "end")
              }
          }
          async _callRefreshToken(e) {
              var t, r;
              if (!e)
                  throw new e3;
              if (this.refreshingDeferred)
                  return this.refreshingDeferred.promise;
              let n = `#_callRefreshToken(${e.substring(0, 5)}...)`;
              this._debug(n, "begin");
              try {
                  this.refreshingDeferred = new eJ;
                  let {data: t, error: r} = await this._refreshAccessToken(e);
                  if (r)
                      throw r;
                  if (!t.session)
                      throw new e3;
                  await this._saveSession(t.session),
                  await this._notifyAllSubscribers("TOKEN_REFRESHED", t.session);
                  let n = {
                      session: t.session,
                      error: null
                  };
                  return this.refreshingDeferred.resolve(n),
                  n
              } catch (e) {
                  if (this._debug(n, "error", e),
                  e8(e)) {
                      let r = {
                          session: null,
                          error: e
                      };
                      return tn(e) || await this._removeSession(),
                      null === (t = this.refreshingDeferred) || void 0 === t || t.resolve(r),
                      r
                  }
                  throw null === (r = this.refreshingDeferred) || void 0 === r || r.reject(e),
                  e
              } finally {
                  this.refreshingDeferred = null,
                  this._debug(n, "end")
              }
          }
          async _notifyAllSubscribers(e, t, r=!0) {
              let n = `#_notifyAllSubscribers(${e})`;
              this._debug(n, "begin", t, `broadcast = ${r}`);
              try {
                  this.broadcastChannel && r && this.broadcastChannel.postMessage({
                      event: e,
                      session: t
                  });
                  let n = []
                    , i = Array.from(this.stateChangeEmitters.values()).map(async r => {
                      try {
                          await r.callback(e, t)
                      } catch (e) {
                          n.push(e)
                      }
                  }
                  );
                  if (await Promise.all(i),
                  n.length > 0) {
                      for (let e = 0; e < n.length; e += 1)
                          console.error(n[e]);
                      throw n[0]
                  }
              } finally {
                  this._debug(n, "end")
              }
          }
          async _saveSession(e) {
              this._debug("#_saveSession()", e),
              this.suppressGetSessionWarning = !0,
              await eK(this.storage, this.storageKey, e)
          }
          async _removeSession() {
              this._debug("#_removeSession()"),
              await eH(this.storage, this.storageKey),
              await this._notifyAllSubscribers("SIGNED_OUT", null)
          }
          _removeVisibilityChangedCallback() {
              this._debug("#_removeVisibilityChangedCallback()");
              let e = this.visibilityChangedCallback;
              this.visibilityChangedCallback = null;
              try {
                  e && eU() && (null == window ? void 0 : window.removeEventListener) && window.removeEventListener("visibilitychange", e)
              } catch (e) {
                  console.error("removing visibilitychange callback failed", e)
              }
          }
          async _startAutoRefresh() {
              await this._stopAutoRefresh(),
              this._debug("#_startAutoRefresh()");
              let e = setInterval( () => this._autoRefreshTokenTick(), 3e4);
              this.autoRefreshTicker = e,
              e && "object" == typeof e && "function" == typeof e.unref ? e.unref() : "undefined" != typeof Deno && "function" == typeof Deno.unrefTimer && Deno.unrefTimer(e),
              setTimeout(async () => {
                  await this.initializePromise,
                  await this._autoRefreshTokenTick()
              }
              , 0)
          }
          async _stopAutoRefresh() {
              this._debug("#_stopAutoRefresh()");
              let e = this.autoRefreshTicker;
              this.autoRefreshTicker = null,
              e && clearInterval(e)
          }
          async startAutoRefresh() {
              this._removeVisibilityChangedCallback(),
              await this._startAutoRefresh()
          }
          async stopAutoRefresh() {
              this._removeVisibilityChangedCallback(),
              await this._stopAutoRefresh()
          }
          async _autoRefreshTokenTick() {
              this._debug("#_autoRefreshTokenTick()", "begin");
              try {
                  await this._acquireLock(0, async () => {
                      try {
                          let e = Date.now();
                          try {
                              return await this._useSession(async t => {
                                  let {data: {session: r}} = t;
                                  if (!r || !r.refresh_token || !r.expires_at) {
                                      this._debug("#_autoRefreshTokenTick()", "no session");
                                      return
                                  }
                                  let n = Math.floor((1e3 * r.expires_at - e) / 3e4);
                                  this._debug("#_autoRefreshTokenTick()", `access token expires in ${n} ticks, a tick lasts 30000ms, refresh threshold is 3 ticks`),
                                  n <= 3 && await this._callRefreshToken(r.refresh_token)
                              }
                              )
                          } catch (e) {
                              console.error("Auto refresh tick failed with error. This is likely a transient error.", e)
                          }
                      } finally {
                          this._debug("#_autoRefreshTokenTick()", "end")
                      }
                  }
                  )
              } catch (e) {
                  if (e.isAcquireTimeout || e instanceof tk)
                      this._debug("auto refresh token tick lock not available");
                  else
                      throw e
              }
          }
          async _handleVisibilityChange() {
              if (this._debug("#_handleVisibilityChange()"),
              !eU() || !(null == window ? void 0 : window.addEventListener))
                  return this.autoRefreshToken && this.startAutoRefresh(),
                  !1;
              try {
                  this.visibilityChangedCallback = async () => await this._onVisibilityChanged(!1),
                  null == window || window.addEventListener("visibilitychange", this.visibilityChangedCallback),
                  await this._onVisibilityChanged(!0)
              } catch (e) {
                  console.error("_handleVisibilityChange", e)
              }
          }
          async _onVisibilityChanged(e) {
              let t = `#_onVisibilityChanged(${e})`;
              this._debug(t, "visibilityState", document.visibilityState),
              "visible" === document.visibilityState ? (this.autoRefreshToken && this._startAutoRefresh(),
              e || (await this.initializePromise,
              await this._acquireLock(-1, async () => {
                  if ("visible" !== document.visibilityState) {
                      this._debug(t, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
                      return
                  }
                  await this._recoverAndRefresh()
              }
              ))) : "hidden" === document.visibilityState && this.autoRefreshToken && this._stopAutoRefresh()
          }
          async _getUrlForProvider(e, t, r) {
              let n = [`provider=${encodeURIComponent(t)}`];
              if ((null == r ? void 0 : r.redirectTo) && n.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),
              (null == r ? void 0 : r.scopes) && n.push(`scopes=${encodeURIComponent(r.scopes)}`),
              "pkce" === this.flowType) {
                  let[e,t] = await e0(this.storage, this.storageKey)
                    , r = new URLSearchParams({
                      code_challenge: `${encodeURIComponent(e)}`,
                      code_challenge_method: `${encodeURIComponent(t)}`
                  });
                  n.push(r.toString())
              }
              if (null == r ? void 0 : r.queryParams) {
                  let e = new URLSearchParams(r.queryParams);
                  n.push(e.toString())
              }
              return (null == r ? void 0 : r.skipBrowserRedirect) && n.push(`skip_http_redirect=${r.skipBrowserRedirect}`),
              `${e}?${n.join("&")}`
          }
          async _unenroll(e) {
              try {
                  return await this._useSession(async t => {
                      var r;
                      let {data: n, error: i} = t;
                      return i ? {
                          data: null,
                          error: i
                      } : await tc(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
                          headers: this.headers,
                          jwt: null === (r = null == n ? void 0 : n.session) || void 0 === r ? void 0 : r.access_token
                      })
                  }
                  )
              } catch (e) {
                  if (e8(e))
                      return {
                          data: null,
                          error: e
                      };
                  throw e
              }
          }
          async _enroll(e) {
              try {
                  return await this._useSession(async t => {
                      var r, n;
                      let {data: i, error: s} = t;
                      if (s)
                          return {
                              data: null,
                              error: s
                          };
                      let o = Object.assign({
                          friendly_name: e.friendlyName,
                          factor_type: e.factorType
                      }, "phone" === e.factorType ? {
                          phone: e.phone
                      } : {
                          issuer: e.issuer
                      })
                        , {data: a, error: l} = await tc(this.fetch, "POST", `${this.url}/factors`, {
                          body: o,
                          headers: this.headers,
                          jwt: null === (r = null == i ? void 0 : i.session) || void 0 === r ? void 0 : r.access_token
                      });
                      return l ? {
                          data: null,
                          error: l
                      } : ("totp" === e.factorType && (null === (n = null == a ? void 0 : a.totp) || void 0 === n ? void 0 : n.qr_code) && (a.totp.qr_code = `data:image/svg+xml;utf-8,${a.totp.qr_code}`),
                      {
                          data: a,
                          error: null
                      })
                  }
                  )
              } catch (e) {
                  if (e8(e))
                      return {
                          data: null,
                          error: e
                      };
                  throw e
              }
          }
          async _verify(e) {
              return this._acquireLock(-1, async () => {
                  try {
                      return await this._useSession(async t => {
                          var r;
                          let {data: n, error: i} = t;
                          if (i)
                              return {
                                  data: null,
                                  error: i
                              };
                          let {data: s, error: o} = await tc(this.fetch, "POST", `${this.url}/factors/${e.factorId}/verify`, {
                              body: {
                                  code: e.code,
                                  challenge_id: e.challengeId
                              },
                              headers: this.headers,
                              jwt: null === (r = null == n ? void 0 : n.session) || void 0 === r ? void 0 : r.access_token
                          });
                          return o ? {
                              data: null,
                              error: o
                          } : (await this._saveSession(Object.assign({
                              expires_at: Math.round(Date.now() / 1e3) + s.expires_in
                          }, s)),
                          await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", s),
                          {
                              data: s,
                              error: o
                          })
                      }
                      )
                  } catch (e) {
                      if (e8(e))
                          return {
                              data: null,
                              error: e
                          };
                      throw e
                  }
              }
              )
          }
          async _challenge(e) {
              return this._acquireLock(-1, async () => {
                  try {
                      return await this._useSession(async t => {
                          var r;
                          let {data: n, error: i} = t;
                          return i ? {
                              data: null,
                              error: i
                          } : await tc(this.fetch, "POST", `${this.url}/factors/${e.factorId}/challenge`, {
                              body: {
                                  channel: e.channel
                              },
                              headers: this.headers,
                              jwt: null === (r = null == n ? void 0 : n.session) || void 0 === r ? void 0 : r.access_token
                          })
                      }
                      )
                  } catch (e) {
                      if (e8(e))
                          return {
                              data: null,
                              error: e
                          };
                      throw e
                  }
              }
              )
          }
          async _challengeAndVerify(e) {
              let {data: t, error: r} = await this._challenge({
                  factorId: e.factorId
              });
              return r ? {
                  data: null,
                  error: r
              } : await this._verify({
                  factorId: e.factorId,
                  challengeId: t.id,
                  code: e.code
              })
          }
          async _listFactors() {
              let {data: {user: e}, error: t} = await this.getUser();
              if (t)
                  return {
                      data: null,
                      error: t
                  };
              let r = (null == e ? void 0 : e.factors) || []
                , n = r.filter(e => "totp" === e.factor_type && "verified" === e.status)
                , i = r.filter(e => "phone" === e.factor_type && "verified" === e.status);
              return {
                  data: {
                      all: r,
                      totp: n,
                      phone: i
                  },
                  error: null
              }
          }
          async _getAuthenticatorAssuranceLevel() {
              return this._acquireLock(-1, async () => await this._useSession(async e => {
                  var t, r;
                  let {data: {session: n}, error: i} = e;
                  if (i)
                      return {
                          data: null,
                          error: i
                      };
                  if (!n)
                      return {
                          data: {
                              currentLevel: null,
                              nextLevel: null,
                              currentAuthenticationMethods: []
                          },
                          error: null
                      };
                  let s = this._decodeJWT(n.access_token)
                    , o = null;
                  s.aal && (o = s.aal);
                  let a = o;
                  return (null !== (r = null === (t = n.user.factors) || void 0 === t ? void 0 : t.filter(e => "verified" === e.status)) && void 0 !== r ? r : []).length > 0 && (a = "aal2"),
                  {
                      data: {
                          currentLevel: o,
                          nextLevel: a,
                          currentAuthenticationMethods: s.amr || []
                      },
                      error: null
                  }
              }
              ))
          }
      }
      tP.nextInstanceID = 0;
      var tC = tP;
      class tO extends tC {
          constructor(e) {
              super(e)
          }
      }
      class tA {
          constructor(e, t, r) {
              var n, i, s;
              if (this.supabaseUrl = e,
              this.supabaseKey = t,
              !e)
                  throw Error("supabaseUrl is required.");
              if (!t)
                  throw Error("supabaseKey is required.");
              let o = e.replace(/\/$/, "");
              this.realtimeUrl = `${o}/realtime/v1`.replace(/^http/i, "ws"),
              this.authUrl = `${o}/auth/v1`,
              this.storageUrl = `${o}/storage/v1`,
              this.functionsUrl = `${o}/functions/v1`;
              let a = `sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`
                , l = function(e, t) {
                  let {db: r, auth: n, realtime: i, global: s} = e
                    , {db: o, auth: a, realtime: l, global: u} = t
                    , c = {
                      db: Object.assign(Object.assign({}, o), r),
                      auth: Object.assign(Object.assign({}, a), n),
                      realtime: Object.assign(Object.assign({}, l), i),
                      global: Object.assign(Object.assign({}, u), s),
                      accessToken: () => {
                          var e, t, r, n;
                          return e = this,
                          t = void 0,
                          n = function*() {
                              return ""
                          }
                          ,
                          new (r = void 0,
                          r = Promise)(function(i, s) {
                              function o(e) {
                                  try {
                                      l(n.next(e))
                                  } catch (e) {
                                      s(e)
                                  }
                              }
                              function a(e) {
                                  try {
                                      l(n.throw(e))
                                  } catch (e) {
                                      s(e)
                                  }
                              }
                              function l(e) {
                                  var t;
                                  e.done ? i(e.value) : ((t = e.value)instanceof r ? t : new r(function(e) {
                                      e(t)
                                  }
                                  )).then(o, a)
                              }
                              l((n = n.apply(e, t || [])).next())
                          }
                          )
                      }
                  };
                  return e.accessToken ? c.accessToken = e.accessToken : delete c.accessToken,
                  c
              }(null != r ? r : {}, {
                  db: eP,
                  realtime: eO,
                  auth: Object.assign(Object.assign({}, eC), {
                      storageKey: a
                  }),
                  global: ej
              });
              this.storageKey = null !== (n = l.auth.storageKey) && void 0 !== n ? n : "",
              this.headers = null !== (i = l.global.headers) && void 0 !== i ? i : {},
              l.accessToken ? (this.accessToken = l.accessToken,
              this.auth = new Proxy({},{
                  get: (e, t) => {
                      throw Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(t)} is not possible`)
                  }
              })) : this.auth = this._initSupabaseAuthClient(null !== (s = l.auth) && void 0 !== s ? s : {}, this.headers, l.global.fetch),
              this.fetch = e$(t, this._getAccessToken.bind(this), l.global.fetch),
              this.realtime = this._initRealtimeClient(Object.assign({
                  headers: this.headers
              }, l.realtime)),
              this.rest = new u(`${o}/rest/v1`,{
                  headers: this.headers,
                  schema: l.db.schema,
                  fetch: this.fetch
              }),
              l.accessToken || this._listenForAuthEvents()
          }
          get functions() {
              return new l(this.functionsUrl,{
                  headers: this.headers,
                  customFetch: this.fetch
              })
          }
          get storage() {
              return new eS(this.storageUrl,this.headers,this.fetch)
          }
          from(e) {
              return this.rest.from(e)
          }
          schema(e) {
              return this.rest.schema(e)
          }
          rpc(e, t={}, r={}) {
              return this.rest.rpc(e, t, r)
          }
          channel(e, t={
              config: {}
          }) {
              return this.realtime.channel(e, t)
          }
          getChannels() {
              return this.realtime.getChannels()
          }
          removeChannel(e) {
              return this.realtime.removeChannel(e)
          }
          removeAllChannels() {
              return this.realtime.removeAllChannels()
          }
          _getAccessToken() {
              var e, t, r, n, i, s;
              return r = this,
              n = void 0,
              i = void 0,
              s = function*() {
                  if (this.accessToken)
                      return yield this.accessToken();
                  let {data: r} = yield this.auth.getSession();
                  return null !== (t = null === (e = r.session) || void 0 === e ? void 0 : e.access_token) && void 0 !== t ? t : null
              }
              ,
              new (i || (i = Promise))(function(e, t) {
                  function o(e) {
                      try {
                          l(s.next(e))
                      } catch (e) {
                          t(e)
                      }
                  }
                  function a(e) {
                      try {
                          l(s.throw(e))
                      } catch (e) {
                          t(e)
                      }
                  }
                  function l(t) {
                      var r;
                      t.done ? e(t.value) : ((r = t.value)instanceof i ? r : new i(function(e) {
                          e(r)
                      }
                      )).then(o, a)
                  }
                  l((s = s.apply(r, n || [])).next())
              }
              )
          }
          _initSupabaseAuthClient({autoRefreshToken: e, persistSession: t, detectSessionInUrl: r, storage: n, storageKey: i, flowType: s, lock: o, debug: a}, l, u) {
              var c;
              let d = {
                  Authorization: `Bearer ${this.supabaseKey}`,
                  apikey: `${this.supabaseKey}`
              };
              return new tO({
                  url: this.authUrl,
                  headers: Object.assign(Object.assign({}, d), l),
                  storageKey: i,
                  autoRefreshToken: e,
                  persistSession: t,
                  detectSessionInUrl: r,
                  storage: n,
                  flowType: s,
                  lock: o,
                  debug: a,
                  fetch: u,
                  hasCustomAuthorizationHeader: "Authorization"in this.headers
              })
          }
          _initRealtimeClient(e) {
              return new I(this.realtimeUrl,Object.assign(Object.assign({}, e), {
                  params: Object.assign({
                      apikey: this.supabaseKey
                  }, null == e ? void 0 : e.params)
              }))
          }
          _listenForAuthEvents() {
              return this.auth.onAuthStateChange( (e, t) => {
                  this._handleTokenChanged(e, "CLIENT", null == t ? void 0 : t.access_token)
              }
              )
          }
          _handleTokenChanged(e, t, r) {
              ("TOKEN_REFRESHED" === e || "SIGNED_IN" === e) && this.changedAccessToken !== r ? (this.realtime.setAuth(null != r ? r : null),
              this.changedAccessToken = r) : "SIGNED_OUT" === e && (this.realtime.setAuth(this.supabaseKey),
              "STORAGE" == t && this.auth.signOut(),
              this.changedAccessToken = void 0)
          }
      }
      let tR = (e, t, r) => new tA(e,t,r)
  },
  1607: function(e, t, r) {
      "use strict";
      r.d(t, {
          Z: function() {
              return l
          }
      });
      var n = r(2265);
      let i = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
        , s = function() {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
              t[r] = arguments[r];
          return t.filter( (e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t).join(" ").trim()
      };
      var o = {
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round"
      };
      let a = (0,
      n.forwardRef)( (e, t) => {
          let {color: r="currentColor", size: i=24, strokeWidth: a=2, absoluteStrokeWidth: l, className: u="", children: c, iconNode: d, ...h} = e;
          return (0,
          n.createElement)("svg", {
              ref: t,
              ...o,
              width: i,
              height: i,
              stroke: r,
              strokeWidth: l ? 24 * Number(a) / Number(i) : a,
              className: s("lucide", u),
              ...h
          }, [...d.map(e => {
              let[t,r] = e;
              return (0,
              n.createElement)(t, r)
          }
          ), ...Array.isArray(c) ? c : [c]])
      }
      )
        , l = ( (e, t) => {
          let r = (0,
          n.forwardRef)( (r, o) => {
              let {className: l, ...u} = r;
              return (0,
              n.createElement)(a, {
                  ref: o,
                  iconNode: t,
                  className: s("lucide-".concat(i(e)), l),
                  ...u
              })
          }
          );
          return r.displayName = "".concat(e),
          r
      }
      )("X", [["path", {
          d: "M18 6 6 18",
          key: "1bl5f8"
      }], ["path", {
          d: "m6 6 12 12",
          key: "d8bk6v"
      }]])
  },
  3145: function(e, t, r) {
      "use strict";
      r.d(t, {
          default: function() {
              return i.a
          }
      });
      var n = r(8461)
        , i = r.n(n)
  },
  2119: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "$", {
          enumerable: !0,
          get: function() {
              return i
          }
      });
      let n = r(3079);
      function i(e) {
          let {createServerReference: t} = r(6671);
          return t(e, n.callServer)
      }
  },
  5878: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function() {
              return b
          }
      });
      let n = r(7043)
        , i = r(3099)
        , s = r(7437)
        , o = i._(r(2265))
        , a = n._(r(4887))
        , l = n._(r(8293))
        , u = r(5346)
        , c = r(128)
        , d = r(2589);
      r(1765);
      let h = r(5523)
        , f = n._(r(5084))
        , p = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !0
      };
      function g(e, t, r, n, i, s, o) {
          let a = null == e ? void 0 : e.src;
          e && e["data-loaded-src"] !== a && (e["data-loaded-src"] = a,
          ("decode"in e ? e.decode() : Promise.resolve()).catch( () => {}
          ).then( () => {
              if (e.parentElement && e.isConnected) {
                  if ("empty" !== t && i(!0),
                  null == r ? void 0 : r.current) {
                      let t = new Event("load");
                      Object.defineProperty(t, "target", {
                          writable: !1,
                          value: e
                      });
                      let n = !1
                        , i = !1;
                      r.current({
                          ...t,
                          nativeEvent: t,
                          currentTarget: e,
                          target: e,
                          isDefaultPrevented: () => n,
                          isPropagationStopped: () => i,
                          persist: () => {}
                          ,
                          preventDefault: () => {
                              n = !0,
                              t.preventDefault()
                          }
                          ,
                          stopPropagation: () => {
                              i = !0,
                              t.stopPropagation()
                          }
                      })
                  }
                  (null == n ? void 0 : n.current) && n.current(e)
              }
          }
          ))
      }
      function m(e) {
          return o.use ? {
              fetchPriority: e
          } : {
              fetchpriority: e
          }
      }
      "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
      let v = (0,
      o.forwardRef)( (e, t) => {
          let {src: r, srcSet: n, sizes: i, height: a, width: l, decoding: u, className: c, style: d, fetchPriority: h, placeholder: f, loading: p, unoptimized: v, fill: y, onLoadRef: b, onLoadingCompleteRef: w, setBlurComplete: _, setShowAltText: E, sizesInput: k, onLoad: x, onError: S, ...T} = e;
          return (0,
          s.jsx)("img", {
              ...T,
              ...m(h),
              loading: p,
              width: l,
              height: a,
              decoding: u,
              "data-nimg": y ? "fill" : "1",
              className: c,
              style: d,
              sizes: i,
              srcSet: n,
              src: r,
              ref: (0,
              o.useCallback)(e => {
                  t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)),
                  e && (S && (e.src = e.src),
                  e.complete && g(e, f, b, w, _, v, k))
              }
              , [r, f, b, w, _, S, v, k, t]),
              onLoad: e => {
                  g(e.currentTarget, f, b, w, _, v, k)
              }
              ,
              onError: e => {
                  E(!0),
                  "empty" !== f && _(!0),
                  S && S(e)
              }
          })
      }
      );
      function y(e) {
          let {isAppRouter: t, imgAttributes: r} = e
            , n = {
              as: "image",
              imageSrcSet: r.srcSet,
              imageSizes: r.sizes,
              crossOrigin: r.crossOrigin,
              referrerPolicy: r.referrerPolicy,
              ...m(r.fetchPriority)
          };
          return t && a.default.preload ? (a.default.preload(r.src, n),
          null) : (0,
          s.jsx)(l.default, {
              children: (0,
              s.jsx)("link", {
                  rel: "preload",
                  href: r.srcSet ? void 0 : r.src,
                  ...n
              }, "__nimg-" + r.src + r.srcSet + r.sizes)
          })
      }
      let b = (0,
      o.forwardRef)( (e, t) => {
          let r = (0,
          o.useContext)(h.RouterContext)
            , n = (0,
          o.useContext)(d.ImageConfigContext)
            , i = (0,
          o.useMemo)( () => {
              let e = p || n || c.imageConfigDefault
                , t = [...e.deviceSizes, ...e.imageSizes].sort( (e, t) => e - t)
                , r = e.deviceSizes.sort( (e, t) => e - t);
              return {
                  ...e,
                  allSizes: t,
                  deviceSizes: r
              }
          }
          , [n])
            , {onLoad: a, onLoadingComplete: l} = e
            , g = (0,
          o.useRef)(a);
          (0,
          o.useEffect)( () => {
              g.current = a
          }
          , [a]);
          let m = (0,
          o.useRef)(l);
          (0,
          o.useEffect)( () => {
              m.current = l
          }
          , [l]);
          let[b,w] = (0,
          o.useState)(!1)
            , [_,E] = (0,
          o.useState)(!1)
            , {props: k, meta: x} = (0,
          u.getImgProps)(e, {
              defaultLoader: f.default,
              imgConf: i,
              blurComplete: b,
              showAltText: _
          });
          return (0,
          s.jsxs)(s.Fragment, {
              children: [(0,
              s.jsx)(v, {
                  ...k,
                  unoptimized: x.unoptimized,
                  placeholder: x.placeholder,
                  fill: x.fill,
                  onLoadRef: g,
                  onLoadingCompleteRef: m,
                  setBlurComplete: w,
                  setShowAltText: E,
                  sizesInput: e.sizes,
                  ref: t
              }), x.priority ? (0,
              s.jsx)(y, {
                  isAppRouter: !r,
                  imgAttributes: k
              }) : null]
          })
      }
      );
      ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
          value: !0
      }),
      Object.assign(t.default, t),
      e.exports = t.default)
  },
  6434: function(e) {
      !function() {
          var t = {
              675: function(e, t) {
                  "use strict";
                  t.byteLength = function(e) {
                      var t = l(e)
                        , r = t[0]
                        , n = t[1];
                      return (r + n) * 3 / 4 - n
                  }
                  ,
                  t.toByteArray = function(e) {
                      var t, r, s = l(e), o = s[0], a = s[1], u = new i((o + a) * 3 / 4 - a), c = 0, d = a > 0 ? o - 4 : o;
                      for (r = 0; r < d; r += 4)
                          t = n[e.charCodeAt(r)] << 18 | n[e.charCodeAt(r + 1)] << 12 | n[e.charCodeAt(r + 2)] << 6 | n[e.charCodeAt(r + 3)],
                          u[c++] = t >> 16 & 255,
                          u[c++] = t >> 8 & 255,
                          u[c++] = 255 & t;
                      return 2 === a && (t = n[e.charCodeAt(r)] << 2 | n[e.charCodeAt(r + 1)] >> 4,
                      u[c++] = 255 & t),
                      1 === a && (t = n[e.charCodeAt(r)] << 10 | n[e.charCodeAt(r + 1)] << 4 | n[e.charCodeAt(r + 2)] >> 2,
                      u[c++] = t >> 8 & 255,
                      u[c++] = 255 & t),
                      u
                  }
                  ,
                  t.fromByteArray = function(e) {
                      for (var t, n = e.length, i = n % 3, s = [], o = 0, a = n - i; o < a; o += 16383)
                          s.push(function(e, t, n) {
                              for (var i, s = [], o = t; o < n; o += 3)
                                  s.push(r[(i = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (255 & e[o + 2])) >> 18 & 63] + r[i >> 12 & 63] + r[i >> 6 & 63] + r[63 & i]);
                              return s.join("")
                          }(e, o, o + 16383 > a ? a : o + 16383));
                      return 1 === i ? s.push(r[(t = e[n - 1]) >> 2] + r[t << 4 & 63] + "==") : 2 === i && s.push(r[(t = (e[n - 2] << 8) + e[n - 1]) >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "="),
                      s.join("")
                  }
                  ;
                  for (var r = [], n = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, a = s.length; o < a; ++o)
                      r[o] = s[o],
                      n[s.charCodeAt(o)] = o;
                  function l(e) {
                      var t = e.length;
                      if (t % 4 > 0)
                          throw Error("Invalid string. Length must be a multiple of 4");
                      var r = e.indexOf("=");
                      -1 === r && (r = t);
                      var n = r === t ? 0 : 4 - r % 4;
                      return [r, n]
                  }
                  n["-".charCodeAt(0)] = 62,
                  n["_".charCodeAt(0)] = 63
              },
              72: function(e, t, r) {
                  "use strict";
                  var n = r(675)
                    , i = r(783)
                    , s = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
                  function o(e) {
                      if (e > 2147483647)
                          throw RangeError('The value "' + e + '" is invalid for option "size"');
                      var t = new Uint8Array(e);
                      return Object.setPrototypeOf(t, a.prototype),
                      t
                  }
                  function a(e, t, r) {
                      if ("number" == typeof e) {
                          if ("string" == typeof t)
                              throw TypeError('The "string" argument must be of type string. Received type number');
                          return c(e)
                      }
                      return l(e, t, r)
                  }
                  function l(e, t, r) {
                      if ("string" == typeof e)
                          return function(e, t) {
                              if (("string" != typeof t || "" === t) && (t = "utf8"),
                              !a.isEncoding(t))
                                  throw TypeError("Unknown encoding: " + t);
                              var r = 0 | f(e, t)
                                , n = o(r)
                                , i = n.write(e, t);
                              return i !== r && (n = n.slice(0, i)),
                              n
                          }(e, t);
                      if (ArrayBuffer.isView(e))
                          return d(e);
                      if (null == e)
                          throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
                      if (C(e, ArrayBuffer) || e && C(e.buffer, ArrayBuffer) || "undefined" != typeof SharedArrayBuffer && (C(e, SharedArrayBuffer) || e && C(e.buffer, SharedArrayBuffer)))
                          return function(e, t, r) {
                              var n;
                              if (t < 0 || e.byteLength < t)
                                  throw RangeError('"offset" is outside of buffer bounds');
                              if (e.byteLength < t + (r || 0))
                                  throw RangeError('"length" is outside of buffer bounds');
                              return Object.setPrototypeOf(n = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e,t) : new Uint8Array(e,t,r), a.prototype),
                              n
                          }(e, t, r);
                      if ("number" == typeof e)
                          throw TypeError('The "value" argument must not be of type number. Received type number');
                      var n = e.valueOf && e.valueOf();
                      if (null != n && n !== e)
                          return a.from(n, t, r);
                      var i = function(e) {
                          if (a.isBuffer(e)) {
                              var t, r = 0 | h(e.length), n = o(r);
                              return 0 === n.length || e.copy(n, 0, 0, r),
                              n
                          }
                          return void 0 !== e.length ? "number" != typeof e.length || (t = e.length) != t ? o(0) : d(e) : "Buffer" === e.type && Array.isArray(e.data) ? d(e.data) : void 0
                      }(e);
                      if (i)
                          return i;
                      if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive])
                          return a.from(e[Symbol.toPrimitive]("string"), t, r);
                      throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
                  }
                  function u(e) {
                      if ("number" != typeof e)
                          throw TypeError('"size" argument must be of type number');
                      if (e < 0)
                          throw RangeError('The value "' + e + '" is invalid for option "size"')
                  }
                  function c(e) {
                      return u(e),
                      o(e < 0 ? 0 : 0 | h(e))
                  }
                  function d(e) {
                      for (var t = e.length < 0 ? 0 : 0 | h(e.length), r = o(t), n = 0; n < t; n += 1)
                          r[n] = 255 & e[n];
                      return r
                  }
                  function h(e) {
                      if (e >= 2147483647)
                          throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
                      return 0 | e
                  }
                  function f(e, t) {
                      if (a.isBuffer(e))
                          return e.length;
                      if (ArrayBuffer.isView(e) || C(e, ArrayBuffer))
                          return e.byteLength;
                      if ("string" != typeof e)
                          throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
                      var r = e.length
                        , n = arguments.length > 2 && !0 === arguments[2];
                      if (!n && 0 === r)
                          return 0;
                      for (var i = !1; ; )
                          switch (t) {
                          case "ascii":
                          case "latin1":
                          case "binary":
                              return r;
                          case "utf8":
                          case "utf-8":
                              return S(e).length;
                          case "ucs2":
                          case "ucs-2":
                          case "utf16le":
                          case "utf-16le":
                              return 2 * r;
                          case "hex":
                              return r >>> 1;
                          case "base64":
                              return j(e).length;
                          default:
                              if (i)
                                  return n ? -1 : S(e).length;
                              t = ("" + t).toLowerCase(),
                              i = !0
                          }
                  }
                  function p(e, t, r) {
                      var i, s, o = !1;
                      if ((void 0 === t || t < 0) && (t = 0),
                      t > this.length || ((void 0 === r || r > this.length) && (r = this.length),
                      r <= 0 || (r >>>= 0) <= (t >>>= 0)))
                          return "";
                      for (e || (e = "utf8"); ; )
                          switch (e) {
                          case "hex":
                              return function(e, t, r) {
                                  var n = e.length;
                                  (!t || t < 0) && (t = 0),
                                  (!r || r < 0 || r > n) && (r = n);
                                  for (var i = "", s = t; s < r; ++s)
                                      i += O[e[s]];
                                  return i
                              }(this, t, r);
                          case "utf8":
                          case "utf-8":
                              return y(this, t, r);
                          case "ascii":
                              return function(e, t, r) {
                                  var n = "";
                                  r = Math.min(e.length, r);
                                  for (var i = t; i < r; ++i)
                                      n += String.fromCharCode(127 & e[i]);
                                  return n
                              }(this, t, r);
                          case "latin1":
                          case "binary":
                              return function(e, t, r) {
                                  var n = "";
                                  r = Math.min(e.length, r);
                                  for (var i = t; i < r; ++i)
                                      n += String.fromCharCode(e[i]);
                                  return n
                              }(this, t, r);
                          case "base64":
                              return i = t,
                              s = r,
                              0 === i && s === this.length ? n.fromByteArray(this) : n.fromByteArray(this.slice(i, s));
                          case "ucs2":
                          case "ucs-2":
                          case "utf16le":
                          case "utf-16le":
                              return function(e, t, r) {
                                  for (var n = e.slice(t, r), i = "", s = 0; s < n.length; s += 2)
                                      i += String.fromCharCode(n[s] + 256 * n[s + 1]);
                                  return i
                              }(this, t, r);
                          default:
                              if (o)
                                  throw TypeError("Unknown encoding: " + e);
                              e = (e + "").toLowerCase(),
                              o = !0
                          }
                  }
                  function g(e, t, r) {
                      var n = e[t];
                      e[t] = e[r],
                      e[r] = n
                  }
                  function m(e, t, r, n, i) {
                      var s;
                      if (0 === e.length)
                          return -1;
                      if ("string" == typeof r ? (n = r,
                      r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648),
                      (s = r = +r) != s && (r = i ? 0 : e.length - 1),
                      r < 0 && (r = e.length + r),
                      r >= e.length) {
                          if (i)
                              return -1;
                          r = e.length - 1
                      } else if (r < 0) {
                          if (!i)
                              return -1;
                          r = 0
                      }
                      if ("string" == typeof t && (t = a.from(t, n)),
                      a.isBuffer(t))
                          return 0 === t.length ? -1 : v(e, t, r, n, i);
                      if ("number" == typeof t)
                          return (t &= 255,
                          "function" == typeof Uint8Array.prototype.indexOf) ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : v(e, [t], r, n, i);
                      throw TypeError("val must be string, number or Buffer")
                  }
                  function v(e, t, r, n, i) {
                      var s, o = 1, a = e.length, l = t.length;
                      if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                          if (e.length < 2 || t.length < 2)
                              return -1;
                          o = 2,
                          a /= 2,
                          l /= 2,
                          r /= 2
                      }
                      function u(e, t) {
                          return 1 === o ? e[t] : e.readUInt16BE(t * o)
                      }
                      if (i) {
                          var c = -1;
                          for (s = r; s < a; s++)
                              if (u(e, s) === u(t, -1 === c ? 0 : s - c)) {
                                  if (-1 === c && (c = s),
                                  s - c + 1 === l)
                                      return c * o
                              } else
                                  -1 !== c && (s -= s - c),
                                  c = -1
                      } else
                          for (r + l > a && (r = a - l),
                          s = r; s >= 0; s--) {
                              for (var d = !0, h = 0; h < l; h++)
                                  if (u(e, s + h) !== u(t, h)) {
                                      d = !1;
                                      break
                                  }
                              if (d)
                                  return s
                          }
                      return -1
                  }
                  function y(e, t, r) {
                      r = Math.min(e.length, r);
                      for (var n = [], i = t; i < r; ) {
                          var s, o, a, l, u = e[i], c = null, d = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                          if (i + d <= r)
                              switch (d) {
                              case 1:
                                  u < 128 && (c = u);
                                  break;
                              case 2:
                                  (192 & (s = e[i + 1])) == 128 && (l = (31 & u) << 6 | 63 & s) > 127 && (c = l);
                                  break;
                              case 3:
                                  s = e[i + 1],
                                  o = e[i + 2],
                                  (192 & s) == 128 && (192 & o) == 128 && (l = (15 & u) << 12 | (63 & s) << 6 | 63 & o) > 2047 && (l < 55296 || l > 57343) && (c = l);
                                  break;
                              case 4:
                                  s = e[i + 1],
                                  o = e[i + 2],
                                  a = e[i + 3],
                                  (192 & s) == 128 && (192 & o) == 128 && (192 & a) == 128 && (l = (15 & u) << 18 | (63 & s) << 12 | (63 & o) << 6 | 63 & a) > 65535 && l < 1114112 && (c = l)
                              }
                          null === c ? (c = 65533,
                          d = 1) : c > 65535 && (c -= 65536,
                          n.push(c >>> 10 & 1023 | 55296),
                          c = 56320 | 1023 & c),
                          n.push(c),
                          i += d
                      }
                      return function(e) {
                          var t = e.length;
                          if (t <= 4096)
                              return String.fromCharCode.apply(String, e);
                          for (var r = "", n = 0; n < t; )
                              r += String.fromCharCode.apply(String, e.slice(n, n += 4096));
                          return r
                      }(n)
                  }
                  function b(e, t, r) {
                      if (e % 1 != 0 || e < 0)
                          throw RangeError("offset is not uint");
                      if (e + t > r)
                          throw RangeError("Trying to access beyond buffer length")
                  }
                  function w(e, t, r, n, i, s) {
                      if (!a.isBuffer(e))
                          throw TypeError('"buffer" argument must be a Buffer instance');
                      if (t > i || t < s)
                          throw RangeError('"value" argument is out of bounds');
                      if (r + n > e.length)
                          throw RangeError("Index out of range")
                  }
                  function _(e, t, r, n, i, s) {
                      if (r + n > e.length || r < 0)
                          throw RangeError("Index out of range")
                  }
                  function E(e, t, r, n, s) {
                      return t = +t,
                      r >>>= 0,
                      s || _(e, t, r, 4, 34028234663852886e22, -34028234663852886e22),
                      i.write(e, t, r, n, 23, 4),
                      r + 4
                  }
                  function k(e, t, r, n, s) {
                      return t = +t,
                      r >>>= 0,
                      s || _(e, t, r, 8, 17976931348623157e292, -17976931348623157e292),
                      i.write(e, t, r, n, 52, 8),
                      r + 8
                  }
                  t.Buffer = a,
                  t.SlowBuffer = function(e) {
                      return +e != e && (e = 0),
                      a.alloc(+e)
                  }
                  ,
                  t.INSPECT_MAX_BYTES = 50,
                  t.kMaxLength = 2147483647,
                  a.TYPED_ARRAY_SUPPORT = function() {
                      try {
                          var e = new Uint8Array(1)
                            , t = {
                              foo: function() {
                                  return 42
                              }
                          };
                          return Object.setPrototypeOf(t, Uint8Array.prototype),
                          Object.setPrototypeOf(e, t),
                          42 === e.foo()
                      } catch (e) {
                          return !1
                      }
                  }(),
                  a.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),
                  Object.defineProperty(a.prototype, "parent", {
                      enumerable: !0,
                      get: function() {
                          if (a.isBuffer(this))
                              return this.buffer
                      }
                  }),
                  Object.defineProperty(a.prototype, "offset", {
                      enumerable: !0,
                      get: function() {
                          if (a.isBuffer(this))
                              return this.byteOffset
                      }
                  }),
                  a.poolSize = 8192,
                  a.from = function(e, t, r) {
                      return l(e, t, r)
                  }
                  ,
                  Object.setPrototypeOf(a.prototype, Uint8Array.prototype),
                  Object.setPrototypeOf(a, Uint8Array),
                  a.alloc = function(e, t, r) {
                      return (u(e),
                      e <= 0) ? o(e) : void 0 !== t ? "string" == typeof r ? o(e).fill(t, r) : o(e).fill(t) : o(e)
                  }
                  ,
                  a.allocUnsafe = function(e) {
                      return c(e)
                  }
                  ,
                  a.allocUnsafeSlow = function(e) {
                      return c(e)
                  }
                  ,
                  a.isBuffer = function(e) {
                      return null != e && !0 === e._isBuffer && e !== a.prototype
                  }
                  ,
                  a.compare = function(e, t) {
                      if (C(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)),
                      C(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)),
                      !a.isBuffer(e) || !a.isBuffer(t))
                          throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                      if (e === t)
                          return 0;
                      for (var r = e.length, n = t.length, i = 0, s = Math.min(r, n); i < s; ++i)
                          if (e[i] !== t[i]) {
                              r = e[i],
                              n = t[i];
                              break
                          }
                      return r < n ? -1 : n < r ? 1 : 0
                  }
                  ,
                  a.isEncoding = function(e) {
                      switch (String(e).toLowerCase()) {
                      case "hex":
                      case "utf8":
                      case "utf-8":
                      case "ascii":
                      case "latin1":
                      case "binary":
                      case "base64":
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                          return !0;
                      default:
                          return !1
                      }
                  }
                  ,
                  a.concat = function(e, t) {
                      if (!Array.isArray(e))
                          throw TypeError('"list" argument must be an Array of Buffers');
                      if (0 === e.length)
                          return a.alloc(0);
                      if (void 0 === t)
                          for (r = 0,
                          t = 0; r < e.length; ++r)
                              t += e[r].length;
                      var r, n = a.allocUnsafe(t), i = 0;
                      for (r = 0; r < e.length; ++r) {
                          var s = e[r];
                          if (C(s, Uint8Array) && (s = a.from(s)),
                          !a.isBuffer(s))
                              throw TypeError('"list" argument must be an Array of Buffers');
                          s.copy(n, i),
                          i += s.length
                      }
                      return n
                  }
                  ,
                  a.byteLength = f,
                  a.prototype._isBuffer = !0,
                  a.prototype.swap16 = function() {
                      var e = this.length;
                      if (e % 2 != 0)
                          throw RangeError("Buffer size must be a multiple of 16-bits");
                      for (var t = 0; t < e; t += 2)
                          g(this, t, t + 1);
                      return this
                  }
                  ,
                  a.prototype.swap32 = function() {
                      var e = this.length;
                      if (e % 4 != 0)
                          throw RangeError("Buffer size must be a multiple of 32-bits");
                      for (var t = 0; t < e; t += 4)
                          g(this, t, t + 3),
                          g(this, t + 1, t + 2);
                      return this
                  }
                  ,
                  a.prototype.swap64 = function() {
                      var e = this.length;
                      if (e % 8 != 0)
                          throw RangeError("Buffer size must be a multiple of 64-bits");
                      for (var t = 0; t < e; t += 8)
                          g(this, t, t + 7),
                          g(this, t + 1, t + 6),
                          g(this, t + 2, t + 5),
                          g(this, t + 3, t + 4);
                      return this
                  }
                  ,
                  a.prototype.toString = function() {
                      var e = this.length;
                      return 0 === e ? "" : 0 == arguments.length ? y(this, 0, e) : p.apply(this, arguments)
                  }
                  ,
                  a.prototype.toLocaleString = a.prototype.toString,
                  a.prototype.equals = function(e) {
                      if (!a.isBuffer(e))
                          throw TypeError("Argument must be a Buffer");
                      return this === e || 0 === a.compare(this, e)
                  }
                  ,
                  a.prototype.inspect = function() {
                      var e = ""
                        , r = t.INSPECT_MAX_BYTES;
                      return e = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(),
                      this.length > r && (e += " ... "),
                      "<Buffer " + e + ">"
                  }
                  ,
                  s && (a.prototype[s] = a.prototype.inspect),
                  a.prototype.compare = function(e, t, r, n, i) {
                      if (C(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)),
                      !a.isBuffer(e))
                          throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
                      if (void 0 === t && (t = 0),
                      void 0 === r && (r = e ? e.length : 0),
                      void 0 === n && (n = 0),
                      void 0 === i && (i = this.length),
                      t < 0 || r > e.length || n < 0 || i > this.length)
                          throw RangeError("out of range index");
                      if (n >= i && t >= r)
                          return 0;
                      if (n >= i)
                          return -1;
                      if (t >= r)
                          return 1;
                      if (t >>>= 0,
                      r >>>= 0,
                      n >>>= 0,
                      i >>>= 0,
                      this === e)
                          return 0;
                      for (var s = i - n, o = r - t, l = Math.min(s, o), u = this.slice(n, i), c = e.slice(t, r), d = 0; d < l; ++d)
                          if (u[d] !== c[d]) {
                              s = u[d],
                              o = c[d];
                              break
                          }
                      return s < o ? -1 : o < s ? 1 : 0
                  }
                  ,
                  a.prototype.includes = function(e, t, r) {
                      return -1 !== this.indexOf(e, t, r)
                  }
                  ,
                  a.prototype.indexOf = function(e, t, r) {
                      return m(this, e, t, r, !0)
                  }
                  ,
                  a.prototype.lastIndexOf = function(e, t, r) {
                      return m(this, e, t, r, !1)
                  }
                  ,
                  a.prototype.write = function(e, t, r, n) {
                      if (void 0 === t)
                          n = "utf8",
                          r = this.length,
                          t = 0;
                      else if (void 0 === r && "string" == typeof t)
                          n = t,
                          r = this.length,
                          t = 0;
                      else if (isFinite(t))
                          t >>>= 0,
                          isFinite(r) ? (r >>>= 0,
                          void 0 === n && (n = "utf8")) : (n = r,
                          r = void 0);
                      else
                          throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                      var i, s, o, a, l, u, c, d, h, f, p, g, m = this.length - t;
                      if ((void 0 === r || r > m) && (r = m),
                      e.length > 0 && (r < 0 || t < 0) || t > this.length)
                          throw RangeError("Attempt to write outside buffer bounds");
                      n || (n = "utf8");
                      for (var v = !1; ; )
                          switch (n) {
                          case "hex":
                              return function(e, t, r, n) {
                                  r = Number(r) || 0;
                                  var i = e.length - r;
                                  n ? (n = Number(n)) > i && (n = i) : n = i;
                                  var s = t.length;
                                  n > s / 2 && (n = s / 2);
                                  for (var o = 0; o < n; ++o) {
                                      var a = parseInt(t.substr(2 * o, 2), 16);
                                      if (a != a)
                                          break;
                                      e[r + o] = a
                                  }
                                  return o
                              }(this, e, t, r);
                          case "utf8":
                          case "utf-8":
                              return l = t,
                              u = r,
                              P(S(e, this.length - l), this, l, u);
                          case "ascii":
                              return c = t,
                              d = r,
                              P(T(e), this, c, d);
                          case "latin1":
                          case "binary":
                              return i = this,
                              s = e,
                              o = t,
                              a = r,
                              P(T(s), i, o, a);
                          case "base64":
                              return h = t,
                              f = r,
                              P(j(e), this, h, f);
                          case "ucs2":
                          case "ucs-2":
                          case "utf16le":
                          case "utf-16le":
                              return p = t,
                              g = r,
                              P(function(e, t) {
                                  for (var r, n, i = [], s = 0; s < e.length && !((t -= 2) < 0); ++s)
                                      n = (r = e.charCodeAt(s)) >> 8,
                                      i.push(r % 256),
                                      i.push(n);
                                  return i
                              }(e, this.length - p), this, p, g);
                          default:
                              if (v)
                                  throw TypeError("Unknown encoding: " + n);
                              n = ("" + n).toLowerCase(),
                              v = !0
                          }
                  }
                  ,
                  a.prototype.toJSON = function() {
                      return {
                          type: "Buffer",
                          data: Array.prototype.slice.call(this._arr || this, 0)
                      }
                  }
                  ,
                  a.prototype.slice = function(e, t) {
                      var r = this.length;
                      e = ~~e,
                      t = void 0 === t ? r : ~~t,
                      e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
                      t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
                      t < e && (t = e);
                      var n = this.subarray(e, t);
                      return Object.setPrototypeOf(n, a.prototype),
                      n
                  }
                  ,
                  a.prototype.readUIntLE = function(e, t, r) {
                      e >>>= 0,
                      t >>>= 0,
                      r || b(e, t, this.length);
                      for (var n = this[e], i = 1, s = 0; ++s < t && (i *= 256); )
                          n += this[e + s] * i;
                      return n
                  }
                  ,
                  a.prototype.readUIntBE = function(e, t, r) {
                      e >>>= 0,
                      t >>>= 0,
                      r || b(e, t, this.length);
                      for (var n = this[e + --t], i = 1; t > 0 && (i *= 256); )
                          n += this[e + --t] * i;
                      return n
                  }
                  ,
                  a.prototype.readUInt8 = function(e, t) {
                      return e >>>= 0,
                      t || b(e, 1, this.length),
                      this[e]
                  }
                  ,
                  a.prototype.readUInt16LE = function(e, t) {
                      return e >>>= 0,
                      t || b(e, 2, this.length),
                      this[e] | this[e + 1] << 8
                  }
                  ,
                  a.prototype.readUInt16BE = function(e, t) {
                      return e >>>= 0,
                      t || b(e, 2, this.length),
                      this[e] << 8 | this[e + 1]
                  }
                  ,
                  a.prototype.readUInt32LE = function(e, t) {
                      return e >>>= 0,
                      t || b(e, 4, this.length),
                      (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
                  }
                  ,
                  a.prototype.readUInt32BE = function(e, t) {
                      return e >>>= 0,
                      t || b(e, 4, this.length),
                      16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
                  }
                  ,
                  a.prototype.readIntLE = function(e, t, r) {
                      e >>>= 0,
                      t >>>= 0,
                      r || b(e, t, this.length);
                      for (var n = this[e], i = 1, s = 0; ++s < t && (i *= 256); )
                          n += this[e + s] * i;
                      return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)),
                      n
                  }
                  ,
                  a.prototype.readIntBE = function(e, t, r) {
                      e >>>= 0,
                      t >>>= 0,
                      r || b(e, t, this.length);
                      for (var n = t, i = 1, s = this[e + --n]; n > 0 && (i *= 256); )
                          s += this[e + --n] * i;
                      return s >= (i *= 128) && (s -= Math.pow(2, 8 * t)),
                      s
                  }
                  ,
                  a.prototype.readInt8 = function(e, t) {
                      return (e >>>= 0,
                      t || b(e, 1, this.length),
                      128 & this[e]) ? -((255 - this[e] + 1) * 1) : this[e]
                  }
                  ,
                  a.prototype.readInt16LE = function(e, t) {
                      e >>>= 0,
                      t || b(e, 2, this.length);
                      var r = this[e] | this[e + 1] << 8;
                      return 32768 & r ? 4294901760 | r : r
                  }
                  ,
                  a.prototype.readInt16BE = function(e, t) {
                      e >>>= 0,
                      t || b(e, 2, this.length);
                      var r = this[e + 1] | this[e] << 8;
                      return 32768 & r ? 4294901760 | r : r
                  }
                  ,
                  a.prototype.readInt32LE = function(e, t) {
                      return e >>>= 0,
                      t || b(e, 4, this.length),
                      this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
                  }
                  ,
                  a.prototype.readInt32BE = function(e, t) {
                      return e >>>= 0,
                      t || b(e, 4, this.length),
                      this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
                  }
                  ,
                  a.prototype.readFloatLE = function(e, t) {
                      return e >>>= 0,
                      t || b(e, 4, this.length),
                      i.read(this, e, !0, 23, 4)
                  }
                  ,
                  a.prototype.readFloatBE = function(e, t) {
                      return e >>>= 0,
                      t || b(e, 4, this.length),
                      i.read(this, e, !1, 23, 4)
                  }
                  ,
                  a.prototype.readDoubleLE = function(e, t) {
                      return e >>>= 0,
                      t || b(e, 8, this.length),
                      i.read(this, e, !0, 52, 8)
                  }
                  ,
                  a.prototype.readDoubleBE = function(e, t) {
                      return e >>>= 0,
                      t || b(e, 8, this.length),
                      i.read(this, e, !1, 52, 8)
                  }
                  ,
                  a.prototype.writeUIntLE = function(e, t, r, n) {
                      if (e = +e,
                      t >>>= 0,
                      r >>>= 0,
                      !n) {
                          var i = Math.pow(2, 8 * r) - 1;
                          w(this, e, t, r, i, 0)
                      }
                      var s = 1
                        , o = 0;
                      for (this[t] = 255 & e; ++o < r && (s *= 256); )
                          this[t + o] = e / s & 255;
                      return t + r
                  }
                  ,
                  a.prototype.writeUIntBE = function(e, t, r, n) {
                      if (e = +e,
                      t >>>= 0,
                      r >>>= 0,
                      !n) {
                          var i = Math.pow(2, 8 * r) - 1;
                          w(this, e, t, r, i, 0)
                      }
                      var s = r - 1
                        , o = 1;
                      for (this[t + s] = 255 & e; --s >= 0 && (o *= 256); )
                          this[t + s] = e / o & 255;
                      return t + r
                  }
                  ,
                  a.prototype.writeUInt8 = function(e, t, r) {
                      return e = +e,
                      t >>>= 0,
                      r || w(this, e, t, 1, 255, 0),
                      this[t] = 255 & e,
                      t + 1
                  }
                  ,
                  a.prototype.writeUInt16LE = function(e, t, r) {
                      return e = +e,
                      t >>>= 0,
                      r || w(this, e, t, 2, 65535, 0),
                      this[t] = 255 & e,
                      this[t + 1] = e >>> 8,
                      t + 2
                  }
                  ,
                  a.prototype.writeUInt16BE = function(e, t, r) {
                      return e = +e,
                      t >>>= 0,
                      r || w(this, e, t, 2, 65535, 0),
                      this[t] = e >>> 8,
                      this[t + 1] = 255 & e,
                      t + 2
                  }
                  ,
                  a.prototype.writeUInt32LE = function(e, t, r) {
                      return e = +e,
                      t >>>= 0,
                      r || w(this, e, t, 4, 4294967295, 0),
                      this[t + 3] = e >>> 24,
                      this[t + 2] = e >>> 16,
                      this[t + 1] = e >>> 8,
                      this[t] = 255 & e,
                      t + 4
                  }
                  ,
                  a.prototype.writeUInt32BE = function(e, t, r) {
                      return e = +e,
                      t >>>= 0,
                      r || w(this, e, t, 4, 4294967295, 0),
                      this[t] = e >>> 24,
                      this[t + 1] = e >>> 16,
                      this[t + 2] = e >>> 8,
                      this[t + 3] = 255 & e,
                      t + 4
                  }
                  ,
                  a.prototype.writeIntLE = function(e, t, r, n) {
                      if (e = +e,
                      t >>>= 0,
                      !n) {
                          var i = Math.pow(2, 8 * r - 1);
                          w(this, e, t, r, i - 1, -i)
                      }
                      var s = 0
                        , o = 1
                        , a = 0;
                      for (this[t] = 255 & e; ++s < r && (o *= 256); )
                          e < 0 && 0 === a && 0 !== this[t + s - 1] && (a = 1),
                          this[t + s] = (e / o >> 0) - a & 255;
                      return t + r
                  }
                  ,
                  a.prototype.writeIntBE = function(e, t, r, n) {
                      if (e = +e,
                      t >>>= 0,
                      !n) {
                          var i = Math.pow(2, 8 * r - 1);
                          w(this, e, t, r, i - 1, -i)
                      }
                      var s = r - 1
                        , o = 1
                        , a = 0;
                      for (this[t + s] = 255 & e; --s >= 0 && (o *= 256); )
                          e < 0 && 0 === a && 0 !== this[t + s + 1] && (a = 1),
                          this[t + s] = (e / o >> 0) - a & 255;
                      return t + r
                  }
                  ,
                  a.prototype.writeInt8 = function(e, t, r) {
                      return e = +e,
                      t >>>= 0,
                      r || w(this, e, t, 1, 127, -128),
                      e < 0 && (e = 255 + e + 1),
                      this[t] = 255 & e,
                      t + 1
                  }
                  ,
                  a.prototype.writeInt16LE = function(e, t, r) {
                      return e = +e,
                      t >>>= 0,
                      r || w(this, e, t, 2, 32767, -32768),
                      this[t] = 255 & e,
                      this[t + 1] = e >>> 8,
                      t + 2
                  }
                  ,
                  a.prototype.writeInt16BE = function(e, t, r) {
                      return e = +e,
                      t >>>= 0,
                      r || w(this, e, t, 2, 32767, -32768),
                      this[t] = e >>> 8,
                      this[t + 1] = 255 & e,
                      t + 2
                  }
                  ,
                  a.prototype.writeInt32LE = function(e, t, r) {
                      return e = +e,
                      t >>>= 0,
                      r || w(this, e, t, 4, 2147483647, -2147483648),
                      this[t] = 255 & e,
                      this[t + 1] = e >>> 8,
                      this[t + 2] = e >>> 16,
                      this[t + 3] = e >>> 24,
                      t + 4
                  }
                  ,
                  a.prototype.writeInt32BE = function(e, t, r) {
                      return e = +e,
                      t >>>= 0,
                      r || w(this, e, t, 4, 2147483647, -2147483648),
                      e < 0 && (e = 4294967295 + e + 1),
                      this[t] = e >>> 24,
                      this[t + 1] = e >>> 16,
                      this[t + 2] = e >>> 8,
                      this[t + 3] = 255 & e,
                      t + 4
                  }
                  ,
                  a.prototype.writeFloatLE = function(e, t, r) {
                      return E(this, e, t, !0, r)
                  }
                  ,
                  a.prototype.writeFloatBE = function(e, t, r) {
                      return E(this, e, t, !1, r)
                  }
                  ,
                  a.prototype.writeDoubleLE = function(e, t, r) {
                      return k(this, e, t, !0, r)
                  }
                  ,
                  a.prototype.writeDoubleBE = function(e, t, r) {
                      return k(this, e, t, !1, r)
                  }
                  ,
                  a.prototype.copy = function(e, t, r, n) {
                      if (!a.isBuffer(e))
                          throw TypeError("argument should be a Buffer");
                      if (r || (r = 0),
                      n || 0 === n || (n = this.length),
                      t >= e.length && (t = e.length),
                      t || (t = 0),
                      n > 0 && n < r && (n = r),
                      n === r || 0 === e.length || 0 === this.length)
                          return 0;
                      if (t < 0)
                          throw RangeError("targetStart out of bounds");
                      if (r < 0 || r >= this.length)
                          throw RangeError("Index out of range");
                      if (n < 0)
                          throw RangeError("sourceEnd out of bounds");
                      n > this.length && (n = this.length),
                      e.length - t < n - r && (n = e.length - t + r);
                      var i = n - r;
                      if (this === e && "function" == typeof Uint8Array.prototype.copyWithin)
                          this.copyWithin(t, r, n);
                      else if (this === e && r < t && t < n)
                          for (var s = i - 1; s >= 0; --s)
                              e[s + t] = this[s + r];
                      else
                          Uint8Array.prototype.set.call(e, this.subarray(r, n), t);
                      return i
                  }
                  ,
                  a.prototype.fill = function(e, t, r, n) {
                      if ("string" == typeof e) {
                          if ("string" == typeof t ? (n = t,
                          t = 0,
                          r = this.length) : "string" == typeof r && (n = r,
                          r = this.length),
                          void 0 !== n && "string" != typeof n)
                              throw TypeError("encoding must be a string");
                          if ("string" == typeof n && !a.isEncoding(n))
                              throw TypeError("Unknown encoding: " + n);
                          if (1 === e.length) {
                              var i, s = e.charCodeAt(0);
                              ("utf8" === n && s < 128 || "latin1" === n) && (e = s)
                          }
                      } else
                          "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
                      if (t < 0 || this.length < t || this.length < r)
                          throw RangeError("Out of range index");
                      if (r <= t)
                          return this;
                      if (t >>>= 0,
                      r = void 0 === r ? this.length : r >>> 0,
                      e || (e = 0),
                      "number" == typeof e)
                          for (i = t; i < r; ++i)
                              this[i] = e;
                      else {
                          var o = a.isBuffer(e) ? e : a.from(e, n)
                            , l = o.length;
                          if (0 === l)
                              throw TypeError('The value "' + e + '" is invalid for argument "value"');
                          for (i = 0; i < r - t; ++i)
                              this[i + t] = o[i % l]
                      }
                      return this
                  }
                  ;
                  var x = /[^+/0-9A-Za-z-_]/g;
                  function S(e, t) {
                      t = t || 1 / 0;
                      for (var r, n = e.length, i = null, s = [], o = 0; o < n; ++o) {
                          if ((r = e.charCodeAt(o)) > 55295 && r < 57344) {
                              if (!i) {
                                  if (r > 56319 || o + 1 === n) {
                                      (t -= 3) > -1 && s.push(239, 191, 189);
                                      continue
                                  }
                                  i = r;
                                  continue
                              }
                              if (r < 56320) {
                                  (t -= 3) > -1 && s.push(239, 191, 189),
                                  i = r;
                                  continue
                              }
                              r = (i - 55296 << 10 | r - 56320) + 65536
                          } else
                              i && (t -= 3) > -1 && s.push(239, 191, 189);
                          if (i = null,
                          r < 128) {
                              if ((t -= 1) < 0)
                                  break;
                              s.push(r)
                          } else if (r < 2048) {
                              if ((t -= 2) < 0)
                                  break;
                              s.push(r >> 6 | 192, 63 & r | 128)
                          } else if (r < 65536) {
                              if ((t -= 3) < 0)
                                  break;
                              s.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                          } else if (r < 1114112) {
                              if ((t -= 4) < 0)
                                  break;
                              s.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                          } else
                              throw Error("Invalid code point")
                      }
                      return s
                  }
                  function T(e) {
                      for (var t = [], r = 0; r < e.length; ++r)
                          t.push(255 & e.charCodeAt(r));
                      return t
                  }
                  function j(e) {
                      return n.toByteArray(function(e) {
                          if ((e = (e = e.split("=")[0]).trim().replace(x, "")).length < 2)
                              return "";
                          for (; e.length % 4 != 0; )
                              e += "=";
                          return e
                      }(e))
                  }
                  function P(e, t, r, n) {
                      for (var i = 0; i < n && !(i + r >= t.length) && !(i >= e.length); ++i)
                          t[i + r] = e[i];
                      return i
                  }
                  function C(e, t) {
                      return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
                  }
                  var O = function() {
                      for (var e = "0123456789abcdef", t = Array(256), r = 0; r < 16; ++r)
                          for (var n = 16 * r, i = 0; i < 16; ++i)
                              t[n + i] = e[r] + e[i];
                      return t
                  }()
              },
              783: function(e, t) {
                  t.read = function(e, t, r, n, i) {
                      var s, o, a = 8 * i - n - 1, l = (1 << a) - 1, u = l >> 1, c = -7, d = r ? i - 1 : 0, h = r ? -1 : 1, f = e[t + d];
                      for (d += h,
                      s = f & (1 << -c) - 1,
                      f >>= -c,
                      c += a; c > 0; s = 256 * s + e[t + d],
                      d += h,
                      c -= 8)
                          ;
                      for (o = s & (1 << -c) - 1,
                      s >>= -c,
                      c += n; c > 0; o = 256 * o + e[t + d],
                      d += h,
                      c -= 8)
                          ;
                      if (0 === s)
                          s = 1 - u;
                      else {
                          if (s === l)
                              return o ? NaN : 1 / 0 * (f ? -1 : 1);
                          o += Math.pow(2, n),
                          s -= u
                      }
                      return (f ? -1 : 1) * o * Math.pow(2, s - n)
                  }
                  ,
                  t.write = function(e, t, r, n, i, s) {
                      var o, a, l, u = 8 * s - i - 1, c = (1 << u) - 1, d = c >> 1, h = 23 === i ? 5960464477539062e-23 : 0, f = n ? 0 : s - 1, p = n ? 1 : -1, g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                      for (isNaN(t = Math.abs(t)) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0,
                      o = c) : (o = Math.floor(Math.log(t) / Math.LN2),
                      t * (l = Math.pow(2, -o)) < 1 && (o--,
                      l *= 2),
                      o + d >= 1 ? t += h / l : t += h * Math.pow(2, 1 - d),
                      t * l >= 2 && (o++,
                      l /= 2),
                      o + d >= c ? (a = 0,
                      o = c) : o + d >= 1 ? (a = (t * l - 1) * Math.pow(2, i),
                      o += d) : (a = t * Math.pow(2, d - 1) * Math.pow(2, i),
                      o = 0)); i >= 8; e[r + f] = 255 & a,
                      f += p,
                      a /= 256,
                      i -= 8)
                          ;
                      for (o = o << i | a,
                      u += i; u > 0; e[r + f] = 255 & o,
                      f += p,
                      o /= 256,
                      u -= 8)
                          ;
                      e[r + f - p] |= 128 * g
                  }
              }
          }
            , r = {};
          function n(e) {
              var i = r[e];
              if (void 0 !== i)
                  return i.exports;
              var s = r[e] = {
                  exports: {}
              }
                , o = !0;
              try {
                  t[e](s, s.exports, n),
                  o = !1
              } finally {
                  o && delete r[e]
              }
              return s.exports
          }
          n.ab = "//";
          var i = n(72);
          e.exports = i
      }()
  },
  1436: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function() {
              return n
          }
      });
      let n = r(7043)._(r(2265)).default.createContext({})
  },
  3964: function(e, t) {
      "use strict";
      function r(e) {
          let {ampFirst: t=!1, hybrid: r=!1, hasQuery: n=!1} = void 0 === e ? {} : e;
          return t || r && n
      }
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function() {
              return r
          }
      })
  },
  5346: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function() {
              return a
          }
      }),
      r(1765);
      let n = r(6496)
        , i = r(128);
      function s(e) {
          return void 0 !== e.default
      }
      function o(e) {
          return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
      }
      function a(e, t) {
          var r;
          let a, l, u, {src: c, sizes: d, unoptimized: h=!1, priority: f=!1, loading: p, className: g, quality: m, width: v, height: y, fill: b=!1, style: w, overrideSrc: _, onLoad: E, onLoadingComplete: k, placeholder: x="empty", blurDataURL: S, fetchPriority: T, decoding: j="async", layout: P, objectFit: C, objectPosition: O, lazyBoundary: A, lazyRoot: R, ...I} = e, {imgConf: $, showAltText: L, blurComplete: N, defaultLoader: M} = t, D = $ || i.imageConfigDefault;
          if ("allSizes"in D)
              a = D;
          else {
              let e = [...D.deviceSizes, ...D.imageSizes].sort( (e, t) => e - t)
                , t = D.deviceSizes.sort( (e, t) => e - t);
              a = {
                  ...D,
                  allSizes: e,
                  deviceSizes: t
              }
          }
          if (void 0 === M)
              throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");
          let U = I.loader || M;
          delete I.loader,
          delete I.srcSet;
          let B = "__next_img_default"in U;
          if (B) {
              if ("custom" === a.loader)
                  throw Error('Image with src "' + c + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
          } else {
              let e = U;
              U = t => {
                  let {config: r, ...n} = t;
                  return e(n)
              }
          }
          if (P) {
              "fill" === P && (b = !0);
              let e = {
                  intrinsic: {
                      maxWidth: "100%",
                      height: "auto"
                  },
                  responsive: {
                      width: "100%",
                      height: "auto"
                  }
              }[P];
              e && (w = {
                  ...w,
                  ...e
              });
              let t = {
                  responsive: "100vw",
                  fill: "100vw"
              }[P];
              t && !d && (d = t)
          }
          let z = ""
            , F = o(v)
            , W = o(y);
          if ("object" == typeof (r = c) && (s(r) || void 0 !== r.src)) {
              let e = s(c) ? c.default : c;
              if (!e.src)
                  throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e));
              if (!e.height || !e.width)
                  throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e));
              if (l = e.blurWidth,
              u = e.blurHeight,
              S = S || e.blurDataURL,
              z = e.src,
              !b) {
                  if (F || W) {
                      if (F && !W) {
                          let t = F / e.width;
                          W = Math.round(e.height * t)
                      } else if (!F && W) {
                          let t = W / e.height;
                          F = Math.round(e.width * t)
                      }
                  } else
                      F = e.width,
                      W = e.height
              }
          }
          let q = !f && ("lazy" === p || void 0 === p);
          (!(c = "string" == typeof c ? c : z) || c.startsWith("data:") || c.startsWith("blob:")) && (h = !0,
          q = !1),
          a.unoptimized && (h = !0),
          B && c.endsWith(".svg") && !a.dangerouslyAllowSVG && (h = !0),
          f && (T = "high");
          let K = o(m)
            , G = Object.assign(b ? {
              position: "absolute",
              height: "100%",
              width: "100%",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              objectFit: C,
              objectPosition: O
          } : {}, L ? {} : {
              color: "transparent"
          }, w)
            , H = N || "empty" === x ? null : "blur" === x ? 'url("data:image/svg+xml;charset=utf-8,' + (0,
          n.getImageBlurSvg)({
              widthInt: F,
              heightInt: W,
              blurWidth: l,
              blurHeight: u,
              blurDataURL: S || "",
              objectFit: G.objectFit
          }) + '")' : 'url("' + x + '")'
            , J = H ? {
              backgroundSize: G.objectFit || "cover",
              backgroundPosition: G.objectPosition || "50% 50%",
              backgroundRepeat: "no-repeat",
              backgroundImage: H
          } : {}
            , V = function(e) {
              let {config: t, src: r, unoptimized: n, width: i, quality: s, sizes: o, loader: a} = e;
              if (n)
                  return {
                      src: r,
                      srcSet: void 0,
                      sizes: void 0
                  };
              let {widths: l, kind: u} = function(e, t, r) {
                  let {deviceSizes: n, allSizes: i} = e;
                  if (r) {
                      let e = /(^|\s)(1?\d?\d)vw/g
                        , t = [];
                      for (let n; n = e.exec(r); n)
                          t.push(parseInt(n[2]));
                      if (t.length) {
                          let e = .01 * Math.min(...t);
                          return {
                              widths: i.filter(t => t >= n[0] * e),
                              kind: "w"
                          }
                      }
                      return {
                          widths: i,
                          kind: "w"
                      }
                  }
                  return "number" != typeof t ? {
                      widths: n,
                      kind: "w"
                  } : {
                      widths: [...new Set([t, 2 * t].map(e => i.find(t => t >= e) || i[i.length - 1]))],
                      kind: "x"
                  }
              }(t, i, o)
                , c = l.length - 1;
              return {
                  sizes: o || "w" !== u ? o : "100vw",
                  srcSet: l.map( (e, n) => a({
                      config: t,
                      src: r,
                      quality: s,
                      width: e
                  }) + " " + ("w" === u ? e : n + 1) + u).join(", "),
                  src: a({
                      config: t,
                      src: r,
                      quality: s,
                      width: l[c]
                  })
              }
          }({
              config: a,
              src: c,
              unoptimized: h,
              width: F,
              quality: K,
              sizes: d,
              loader: U
          });
          return {
              props: {
                  ...I,
                  loading: q ? "lazy" : p,
                  fetchPriority: T,
                  width: F,
                  height: W,
                  decoding: j,
                  className: g,
                  style: {
                      ...G,
                      ...J
                  },
                  sizes: V.sizes,
                  srcSet: V.srcSet,
                  src: _ || V.src
              },
              meta: {
                  unoptimized: h,
                  priority: f,
                  placeholder: x,
                  fill: b
              }
          }
      }
  },
  8293: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      function(e, t) {
          for (var r in t)
              Object.defineProperty(e, r, {
                  enumerable: !0,
                  get: t[r]
              })
      }(t, {
          default: function() {
              return g
          },
          defaultHead: function() {
              return d
          }
      });
      let n = r(7043)
        , i = r(3099)
        , s = r(7437)
        , o = i._(r(2265))
        , a = n._(r(7421))
        , l = r(1436)
        , u = r(8701)
        , c = r(3964);
      function d(e) {
          void 0 === e && (e = !1);
          let t = [(0,
          s.jsx)("meta", {
              charSet: "utf-8"
          })];
          return e || t.push((0,
          s.jsx)("meta", {
              name: "viewport",
              content: "width=device-width"
          })),
          t
      }
      function h(e, t) {
          return "string" == typeof t || "number" == typeof t ? e : t.type === o.default.Fragment ? e.concat(o.default.Children.toArray(t.props.children).reduce( (e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
      }
      r(1765);
      let f = ["name", "httpEquiv", "charSet", "itemProp"];
      function p(e, t) {
          let {inAmpMode: r} = t;
          return e.reduce(h, []).reverse().concat(d(r).reverse()).filter(function() {
              let e = new Set
                , t = new Set
                , r = new Set
                , n = {};
              return i => {
                  let s = !0
                    , o = !1;
                  if (i.key && "number" != typeof i.key && i.key.indexOf("$") > 0) {
                      o = !0;
                      let t = i.key.slice(i.key.indexOf("$") + 1);
                      e.has(t) ? s = !1 : e.add(t)
                  }
                  switch (i.type) {
                  case "title":
                  case "base":
                      t.has(i.type) ? s = !1 : t.add(i.type);
                      break;
                  case "meta":
                      for (let e = 0, t = f.length; e < t; e++) {
                          let t = f[e];
                          if (i.props.hasOwnProperty(t)) {
                              if ("charSet" === t)
                                  r.has(t) ? s = !1 : r.add(t);
                              else {
                                  let e = i.props[t]
                                    , r = n[t] || new Set;
                                  ("name" !== t || !o) && r.has(e) ? s = !1 : (r.add(e),
                                  n[t] = r)
                              }
                          }
                      }
                  }
                  return s
              }
          }()).reverse().map( (e, t) => {
              let n = e.key || t;
              if (!r && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(t => e.props.href.startsWith(t))) {
                  let t = {
                      ...e.props || {}
                  };
                  return t["data-href"] = t.href,
                  t.href = void 0,
                  t["data-optimized-fonts"] = !0,
                  o.default.cloneElement(e, t)
              }
              return o.default.cloneElement(e, {
                  key: n
              })
          }
          )
      }
      let g = function(e) {
          let {children: t} = e
            , r = (0,
          o.useContext)(l.AmpStateContext)
            , n = (0,
          o.useContext)(u.HeadManagerContext);
          return (0,
          s.jsx)(a.default, {
              reduceComponentsToState: p,
              headManager: n,
              inAmpMode: (0,
              c.isInAmpMode)(r),
              children: t
          })
      };
      ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
          value: !0
      }),
      Object.assign(t.default, t),
      e.exports = t.default)
  },
  6496: function(e, t) {
      "use strict";
      function r(e) {
          let {widthInt: t, heightInt: r, blurWidth: n, blurHeight: i, blurDataURL: s, objectFit: o} = e
            , a = n ? 40 * n : t
            , l = i ? 40 * i : r
            , u = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
          return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + u + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (u ? "none" : "contain" === o ? "xMidYMid" : "cover" === o ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + s + "'/%3E%3C/svg%3E"
      }
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function() {
              return r
          }
      })
  },
  2589: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      Object.defineProperty(t, "ImageConfigContext", {
          enumerable: !0,
          get: function() {
              return s
          }
      });
      let n = r(7043)._(r(2265))
        , i = r(128)
        , s = n.default.createContext(i.imageConfigDefault)
  },
  128: function(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      function(e, t) {
          for (var r in t)
              Object.defineProperty(e, r, {
                  enumerable: !0,
                  get: t[r]
              })
      }(t, {
          VALID_LOADERS: function() {
              return r
          },
          imageConfigDefault: function() {
              return n
          }
      });
      let r = ["default", "imgix", "cloudinary", "akamai", "custom"]
        , n = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "inline",
          localPatterns: void 0,
          remotePatterns: [],
          unoptimized: !1
      }
  },
  8461: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      function(e, t) {
          for (var r in t)
              Object.defineProperty(e, r, {
                  enumerable: !0,
                  get: t[r]
              })
      }(t, {
          default: function() {
              return l
          },
          getImageProps: function() {
              return a
          }
      });
      let n = r(7043)
        , i = r(5346)
        , s = r(5878)
        , o = n._(r(5084));
      function a(e) {
          let {props: t} = (0,
          i.getImgProps)(e, {
              defaultLoader: o.default,
              imgConf: {
                  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                  path: "/_next/image",
                  loader: "default",
                  dangerouslyAllowSVG: !1,
                  unoptimized: !0
              }
          });
          for (let[e,r] of Object.entries(t))
              void 0 === r && delete t[e];
          return {
              props: t
          }
      }
      let l = s.Image
  },
  5084: function(e, t) {
      "use strict";
      function r(e) {
          let {config: t, src: r, width: n, quality: i} = e;
          return t.path + "?url=" + encodeURIComponent(r) + "&w=" + n + "&q=" + (i || 75)
      }
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function() {
              return n
          }
      }),
      r.__next_img_default = !0;
      let n = r
  },
  5523: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      Object.defineProperty(t, "RouterContext", {
          enumerable: !0,
          get: function() {
              return n
          }
      });
      let n = r(7043)._(r(2265)).default.createContext(null)
  },
  7421: function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function() {
              return a
          }
      });
      let n = r(2265)
        , i = "undefined" == typeof window
        , s = i ? () => {}
      : n.useLayoutEffect
        , o = i ? () => {}
      : n.useEffect;
      function a(e) {
          let {headManager: t, reduceComponentsToState: r} = e;
          function a() {
              if (t && t.mountedInstances) {
                  let i = n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                  t.updateHead(r(i, e))
              }
          }
          if (i) {
              var l;
              null == t || null == (l = t.mountedInstances) || l.add(e.children),
              a()
          }
          return s( () => {
              var r;
              return null == t || null == (r = t.mountedInstances) || r.add(e.children),
              () => {
                  var r;
                  null == t || null == (r = t.mountedInstances) || r.delete(e.children)
              }
          }
          ),
          s( () => (t && (t._pendingUpdate = a),
          () => {
              t && (t._pendingUpdate = a)
          }
          )),
          o( () => (t && t._pendingUpdate && (t._pendingUpdate(),
          t._pendingUpdate = null),
          () => {
              t && t._pendingUpdate && (t._pendingUpdate(),
              t._pendingUpdate = null)
          }
          )),
          null
      }
  },
  6741: function(e, t, r) {
      "use strict";
      function n(e, t, {checkForDefaultPrevented: r=!0}={}) {
          return function(n) {
              if (e?.(n),
              !1 === r || !n.defaultPrevented)
                  return t?.(n)
          }
      }
      r.d(t, {
          M: function() {
              return n
          }
      })
  },
  8575: function(e, t, r) {
      "use strict";
      r.d(t, {
          F: function() {
              return i
          },
          e: function() {
              return s
          }
      });
      var n = r(2265);
      function i(...e) {
          return t => e.forEach(e => {
              "function" == typeof e ? e(t) : null != e && (e.current = t)
          }
          )
      }
      function s(...e) {
          return n.useCallback(i(...e), e)
      }
  },
  3966: function(e, t, r) {
      "use strict";
      r.d(t, {
          b: function() {
              return o
          },
          k: function() {
              return s
          }
      });
      var n = r(2265)
        , i = r(7437);
      function s(e, t) {
          let r = n.createContext(t)
            , s = e => {
              let {children: t, ...s} = e
                , o = n.useMemo( () => s, Object.values(s));
              return (0,
              i.jsx)(r.Provider, {
                  value: o,
                  children: t
              })
          }
          ;
          return s.displayName = e + "Provider",
          [s, function(i) {
              let s = n.useContext(r);
              if (s)
                  return s;
              if (void 0 !== t)
                  return t;
              throw Error(`\`${i}\` must be used within \`${e}\``)
          }
          ]
      }
      function o(e, t=[]) {
          let r = []
            , s = () => {
              let t = r.map(e => n.createContext(e));
              return function(r) {
                  let i = r?.[e] || t;
                  return n.useMemo( () => ({
                      [`__scope${e}`]: {
                          ...r,
                          [e]: i
                      }
                  }), [r, i])
              }
          }
          ;
          return s.scopeName = e,
          [function(t, s) {
              let o = n.createContext(s)
                , a = r.length;
              r = [...r, s];
              let l = t => {
                  let {scope: r, children: s, ...l} = t
                    , u = r?.[e]?.[a] || o
                    , c = n.useMemo( () => l, Object.values(l));
                  return (0,
                  i.jsx)(u.Provider, {
                      value: c,
                      children: s
                  })
              }
              ;
              return l.displayName = t + "Provider",
              [l, function(r, i) {
                  let l = i?.[e]?.[a] || o
                    , u = n.useContext(l);
                  if (u)
                      return u;
                  if (void 0 !== s)
                      return s;
                  throw Error(`\`${r}\` must be used within \`${t}\``)
              }
              ]
          }
          , function(...e) {
              let t = e[0];
              if (1 === e.length)
                  return t;
              let r = () => {
                  let r = e.map(e => ({
                      useScope: e(),
                      scopeName: e.scopeName
                  }));
                  return function(e) {
                      let i = r.reduce( (t, {useScope: r, scopeName: n}) => {
                          let i = r(e)[`__scope${n}`];
                          return {
                              ...t,
                              ...i
                          }
                      }
                      , {});
                      return n.useMemo( () => ({
                          [`__scope${t.scopeName}`]: i
                      }), [i])
                  }
              }
              ;
              return r.scopeName = t.scopeName,
              r
          }(s, ...t)]
      }
  },
  4182: function(e, t, r) {
      "use strict";
      let n;
      r.d(t, {
          x8: function() {
              return to
          },
          VY: function() {
              return tn
          },
          dk: function() {
              return ts
          },
          aV: function() {
              return tr
          },
          h_: function() {
              return tt
          },
          fC: function() {
              return e9
          },
          Dx: function() {
              return ti
          },
          xz: function() {
              return te
          }
      });
      var i, s, o, a, l, u, c, d = r(2265), h = r.t(d, 2), f = r(6741), p = r(8575), g = r(3966), m = r(1188), v = h["useId".toString()] || ( () => void 0), y = 0;
      function b(e) {
          let[t,r] = d.useState(v());
          return (0,
          m.b)( () => {
              e || r(e => e ?? String(y++))
          }
          , [e]),
          e || (t ? `radix-${t}` : "")
      }
      var w = r(886)
        , _ = r(5278)
        , E = r(6840)
        , k = r(6606)
        , x = r(7437)
        , S = "focusScope.autoFocusOnMount"
        , T = "focusScope.autoFocusOnUnmount"
        , j = {
          bubbles: !1,
          cancelable: !0
      }
        , P = d.forwardRef( (e, t) => {
          let {loop: r=!1, trapped: n=!1, onMountAutoFocus: i, onUnmountAutoFocus: s, ...o} = e
            , [a,l] = d.useState(null)
            , u = (0,
          k.W)(i)
            , c = (0,
          k.W)(s)
            , h = d.useRef(null)
            , f = (0,
          p.e)(t, e => l(e))
            , g = d.useRef({
              paused: !1,
              pause() {
                  this.paused = !0
              },
              resume() {
                  this.paused = !1
              }
          }).current;
          d.useEffect( () => {
              if (n) {
                  let e = function(e) {
                      if (g.paused || !a)
                          return;
                      let t = e.target;
                      a.contains(t) ? h.current = t : A(h.current, {
                          select: !0
                      })
                  }
                    , t = function(e) {
                      if (g.paused || !a)
                          return;
                      let t = e.relatedTarget;
                      null === t || a.contains(t) || A(h.current, {
                          select: !0
                      })
                  };
                  document.addEventListener("focusin", e),
                  document.addEventListener("focusout", t);
                  let r = new MutationObserver(function(e) {
                      if (document.activeElement === document.body)
                          for (let t of e)
                              t.removedNodes.length > 0 && A(a)
                  }
                  );
                  return a && r.observe(a, {
                      childList: !0,
                      subtree: !0
                  }),
                  () => {
                      document.removeEventListener("focusin", e),
                      document.removeEventListener("focusout", t),
                      r.disconnect()
                  }
              }
          }
          , [n, a, g.paused]),
          d.useEffect( () => {
              if (a) {
                  R.add(g);
                  let e = document.activeElement;
                  if (!a.contains(e)) {
                      let t = new CustomEvent(S,j);
                      a.addEventListener(S, u),
                      a.dispatchEvent(t),
                      t.defaultPrevented || (function(e) {
                          let {select: t=!1} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                            , r = document.activeElement;
                          for (let n of e)
                              if (A(n, {
                                  select: t
                              }),
                              document.activeElement !== r)
                                  return
                      }(C(a).filter(e => "A" !== e.tagName), {
                          select: !0
                      }),
                      document.activeElement === e && A(a))
                  }
                  return () => {
                      a.removeEventListener(S, u),
                      setTimeout( () => {
                          let t = new CustomEvent(T,j);
                          a.addEventListener(T, c),
                          a.dispatchEvent(t),
                          t.defaultPrevented || A(null != e ? e : document.body, {
                              select: !0
                          }),
                          a.removeEventListener(T, c),
                          R.remove(g)
                      }
                      , 0)
                  }
              }
          }
          , [a, u, c, g]);
          let m = d.useCallback(e => {
              if (!r && !n || g.paused)
                  return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey
                , i = document.activeElement;
              if (t && i) {
                  let t = e.currentTarget
                    , [n,s] = function(e) {
                      let t = C(e);
                      return [O(t, e), O(t.reverse(), e)]
                  }(t);
                  n && s ? e.shiftKey || i !== s ? e.shiftKey && i === n && (e.preventDefault(),
                  r && A(s, {
                      select: !0
                  })) : (e.preventDefault(),
                  r && A(n, {
                      select: !0
                  })) : i === t && e.preventDefault()
              }
          }
          , [r, n, g.paused]);
          return (0,
          x.jsx)(E.WV.div, {
              tabIndex: -1,
              ...o,
              ref: f,
              onKeyDown: m
          })
      }
      );
      function C(e) {
          let t = []
            , r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
              acceptNode: e => {
                  let t = "INPUT" === e.tagName && "hidden" === e.type;
                  return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
              }
          });
          for (; r.nextNode(); )
              t.push(r.currentNode);
          return t
      }
      function O(e, t) {
          for (let r of e)
              if (!function(e, t) {
                  let {upTo: r} = t;
                  if ("hidden" === getComputedStyle(e).visibility)
                      return !0;
                  for (; e && (void 0 === r || e !== r); ) {
                      if ("none" === getComputedStyle(e).display)
                          return !0;
                      e = e.parentElement
                  }
                  return !1
              }(r, {
                  upTo: t
              }))
                  return r
      }
      function A(e) {
          let {select: t=!1} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (e && e.focus) {
              var r;
              let n = document.activeElement;
              e.focus({
                  preventScroll: !0
              }),
              e !== n && (r = e)instanceof HTMLInputElement && "select"in r && t && e.select()
          }
      }
      P.displayName = "FocusScope";
      var R = (n = [],
      {
          add(e) {
              let t = n[0];
              e !== t && (null == t || t.pause()),
              (n = I(n, e)).unshift(e)
          },
          remove(e) {
              var t;
              null === (t = (n = I(n, e))[0]) || void 0 === t || t.resume()
          }
      });
      function I(e, t) {
          let r = [...e]
            , n = r.indexOf(t);
          return -1 !== n && r.splice(n, 1),
          r
      }
      var $ = r(3832)
        , L = r(1599)
        , N = 0;
      function M() {
          let e = document.createElement("span");
          return e.setAttribute("data-radix-focus-guard", ""),
          e.tabIndex = 0,
          e.style.outline = "none",
          e.style.opacity = "0",
          e.style.position = "fixed",
          e.style.pointerEvents = "none",
          e
      }
      var D = function() {
          return (D = Object.assign || function(e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in t = arguments[r])
                      Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e
          }
          ).apply(this, arguments)
      };
      function U(e, t) {
          var r = {};
          for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
              for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                  0 > t.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
          return r
      }
      "function" == typeof SuppressedError && SuppressedError;
      var B = "right-scroll-bar-position"
        , z = "width-before-scroll-bar";
      function F(e, t) {
          return "function" == typeof e ? e(t) : e && (e.current = t),
          e
      }
      var W = "undefined" != typeof window ? d.useLayoutEffect : d.useEffect
        , q = new WeakMap
        , K = (void 0 === i && (i = {}),
      (void 0 === s && (s = function(e) {
          return e
      }
      ),
      o = [],
      a = !1,
      l = {
          read: function() {
              if (a)
                  throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
              return o.length ? o[o.length - 1] : null
          },
          useMedium: function(e) {
              var t = s(e, a);
              return o.push(t),
              function() {
                  o = o.filter(function(e) {
                      return e !== t
                  })
              }
          },
          assignSyncMedium: function(e) {
              for (a = !0; o.length; ) {
                  var t = o;
                  o = [],
                  t.forEach(e)
              }
              o = {
                  push: function(t) {
                      return e(t)
                  },
                  filter: function() {
                      return o
                  }
              }
          },
          assignMedium: function(e) {
              a = !0;
              var t = [];
              if (o.length) {
                  var r = o;
                  o = [],
                  r.forEach(e),
                  t = o
              }
              var n = function() {
                  var r = t;
                  t = [],
                  r.forEach(e)
              }
                , i = function() {
                  return Promise.resolve().then(n)
              };
              i(),
              o = {
                  push: function(e) {
                      t.push(e),
                      i()
                  },
                  filter: function(e) {
                      return t = t.filter(e),
                      o
                  }
              }
          }
      }).options = D({
          async: !0,
          ssr: !1
      }, i),
      l)
        , G = function() {}
        , H = d.forwardRef(function(e, t) {
          var r, n, i, s, o = d.useRef(null), a = d.useState({
              onScrollCapture: G,
              onWheelCapture: G,
              onTouchMoveCapture: G
          }), l = a[0], u = a[1], c = e.forwardProps, h = e.children, f = e.className, p = e.removeScrollBar, g = e.enabled, m = e.shards, v = e.sideCar, y = e.noIsolation, b = e.inert, w = e.allowPinchZoom, _ = e.as, E = e.gapMode, k = U(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), x = (r = [o, t],
          n = function(e) {
              return r.forEach(function(t) {
                  return F(t, e)
              })
          }
          ,
          (i = (0,
          d.useState)(function() {
              return {
                  value: null,
                  callback: n,
                  facade: {
                      get current() {
                          return i.value
                      },
                      set current(value) {
                          var e = i.value;
                          e !== value && (i.value = value,
                          i.callback(value, e))
                      }
                  }
              }
          })[0]).callback = n,
          s = i.facade,
          W(function() {
              var e = q.get(s);
              if (e) {
                  var t = new Set(e)
                    , n = new Set(r)
                    , i = s.current;
                  t.forEach(function(e) {
                      n.has(e) || F(e, null)
                  }),
                  n.forEach(function(e) {
                      t.has(e) || F(e, i)
                  })
              }
              q.set(s, r)
          }, [r]),
          s), S = D(D({}, k), l);
          return d.createElement(d.Fragment, null, g && d.createElement(v, {
              sideCar: K,
              removeScrollBar: p,
              shards: m,
              noIsolation: y,
              inert: b,
              setCallbacks: u,
              allowPinchZoom: !!w,
              lockRef: o,
              gapMode: E
          }), c ? d.cloneElement(d.Children.only(h), D(D({}, S), {
              ref: x
          })) : d.createElement(void 0 === _ ? "div" : _, D({}, S, {
              className: f,
              ref: x
          }), h))
      });
      H.defaultProps = {
          enabled: !0,
          removeScrollBar: !0,
          inert: !1
      },
      H.classNames = {
          fullWidth: z,
          zeroRight: B
      };
      var J = function(e) {
          var t = e.sideCar
            , r = U(e, ["sideCar"]);
          if (!t)
              throw Error("Sidecar: please provide `sideCar` property to import the right car");
          var n = t.read();
          if (!n)
              throw Error("Sidecar medium not found");
          return d.createElement(n, D({}, r))
      };
      J.isSideCarExport = !0;
      var V = function() {
          var e = 0
            , t = null;
          return {
              add: function(n) {
                  if (0 == e && (t = function() {
                      if (!document)
                          return null;
                      var e = document.createElement("style");
                      e.type = "text/css";
                      var t = c || r.nc;
                      return t && e.setAttribute("nonce", t),
                      e
                  }())) {
                      var i, s;
                      (i = t).styleSheet ? i.styleSheet.cssText = n : i.appendChild(document.createTextNode(n)),
                      s = t,
                      (document.head || document.getElementsByTagName("head")[0]).appendChild(s)
                  }
                  e++
              },
              remove: function() {
                  --e || !t || (t.parentNode && t.parentNode.removeChild(t),
                  t = null)
              }
          }
      }
        , Y = function() {
          var e = V();
          return function(t, r) {
              d.useEffect(function() {
                  return e.add(t),
                  function() {
                      e.remove()
                  }
              }, [t && r])
          }
      }
        , X = function() {
          var e = Y();
          return function(t) {
              return e(t.styles, t.dynamic),
              null
          }
      }
        , Z = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
      }
        , Q = function(e) {
          return parseInt(e || "", 10) || 0
      }
        , ee = function(e) {
          var t = window.getComputedStyle(document.body)
            , r = t["padding" === e ? "paddingLeft" : "marginLeft"]
            , n = t["padding" === e ? "paddingTop" : "marginTop"]
            , i = t["padding" === e ? "paddingRight" : "marginRight"];
          return [Q(r), Q(n), Q(i)]
      }
        , et = function(e) {
          if (void 0 === e && (e = "margin"),
          "undefined" == typeof window)
              return Z;
          var t = ee(e)
            , r = document.documentElement.clientWidth
            , n = window.innerWidth;
          return {
              left: t[0],
              top: t[1],
              right: t[2],
              gap: Math.max(0, n - r + t[2] - t[0])
          }
      }
        , er = X()
        , en = "data-scroll-locked"
        , ei = function(e, t, r, n) {
          var i = e.left
            , s = e.top
            , o = e.right
            , a = e.gap;
          return void 0 === r && (r = "margin"),
          "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(n, ";\n   padding-right: ").concat(a, "px ").concat(n, ";\n  }\n  body[").concat(en, "] {\n    overflow: hidden ").concat(n, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(n, ";"), "margin" === r && "\n    padding-left: ".concat(i, "px;\n    padding-top: ").concat(s, "px;\n    padding-right: ").concat(o, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(a, "px ").concat(n, ";\n    "), "padding" === r && "padding-right: ".concat(a, "px ").concat(n, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(B, " {\n    right: ").concat(a, "px ").concat(n, ";\n  }\n  \n  .").concat(z, " {\n    margin-right: ").concat(a, "px ").concat(n, ";\n  }\n  \n  .").concat(B, " .").concat(B, " {\n    right: 0 ").concat(n, ";\n  }\n  \n  .").concat(z, " .").concat(z, " {\n    margin-right: 0 ").concat(n, ";\n  }\n  \n  body[").concat(en, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(a, "px;\n  }\n")
      }
        , es = function() {
          var e = parseInt(document.body.getAttribute(en) || "0", 10);
          return isFinite(e) ? e : 0
      }
        , eo = function() {
          d.useEffect(function() {
              return document.body.setAttribute(en, (es() + 1).toString()),
              function() {
                  var e = es() - 1;
                  e <= 0 ? document.body.removeAttribute(en) : document.body.setAttribute(en, e.toString())
              }
          }, [])
      }
        , ea = function(e) {
          var t = e.noRelative
            , r = e.noImportant
            , n = e.gapMode
            , i = void 0 === n ? "margin" : n;
          eo();
          var s = d.useMemo(function() {
              return et(i)
          }, [i]);
          return d.createElement(er, {
              styles: ei(s, !t, i, r ? "" : "!important")
          })
      }
        , el = !1;
      if ("undefined" != typeof window)
          try {
              var eu = Object.defineProperty({}, "passive", {
                  get: function() {
                      return el = !0,
                      !0
                  }
              });
              window.addEventListener("test", eu, eu),
              window.removeEventListener("test", eu, eu)
          } catch (e) {
              el = !1
          }
      var ec = !!el && {
          passive: !1
      }
        , ed = function(e, t) {
          if (!(e instanceof Element))
              return !1;
          var r = window.getComputedStyle(e);
          return "hidden" !== r[t] && !(r.overflowY === r.overflowX && "TEXTAREA" !== e.tagName && "visible" === r[t])
      }
        , eh = function(e, t) {
          var r = t.ownerDocument
            , n = t;
          do {
              if ("undefined" != typeof ShadowRoot && n instanceof ShadowRoot && (n = n.host),
              ef(e, n)) {
                  var i = ep(e, n);
                  if (i[1] > i[2])
                      return !0
              }
              n = n.parentNode
          } while (n && n !== r.body);
          return !1
      }
        , ef = function(e, t) {
          return "v" === e ? ed(t, "overflowY") : ed(t, "overflowX")
      }
        , ep = function(e, t) {
          return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
      }
        , eg = function(e, t, r, n, i) {
          var s, o = (s = window.getComputedStyle(t).direction,
          "h" === e && "rtl" === s ? -1 : 1), a = o * n, l = r.target, u = t.contains(l), c = !1, d = a > 0, h = 0, f = 0;
          do {
              var p = ep(e, l)
                , g = p[0]
                , m = p[1] - p[2] - o * g;
              (g || m) && ef(e, l) && (h += m,
              f += g),
              l instanceof ShadowRoot ? l = l.host : l = l.parentNode
          } while (!u && l !== document.body || u && (t.contains(l) || t === l));
          return d && (i && 1 > Math.abs(h) || !i && a > h) ? c = !0 : !d && (i && 1 > Math.abs(f) || !i && -a > f) && (c = !0),
          c
      }
        , em = function(e) {
          return "changedTouches"in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
      }
        , ev = function(e) {
          return [e.deltaX, e.deltaY]
      }
        , ey = function(e) {
          return e && "current"in e ? e.current : e
      }
        , eb = 0
        , ew = []
        , e_ = (u = function(e) {
          var t = d.useRef([])
            , r = d.useRef([0, 0])
            , n = d.useRef()
            , i = d.useState(eb++)[0]
            , s = d.useState(X)[0]
            , o = d.useRef(e);
          d.useEffect(function() {
              o.current = e
          }, [e]),
          d.useEffect(function() {
              if (e.inert) {
                  document.body.classList.add("block-interactivity-".concat(i));
                  var t = (function(e, t, r) {
                      if (r || 2 == arguments.length)
                          for (var n, i = 0, s = t.length; i < s; i++)
                              !n && i in t || (n || (n = Array.prototype.slice.call(t, 0, i)),
                              n[i] = t[i]);
                      return e.concat(n || Array.prototype.slice.call(t))
                  }
                  )([e.lockRef.current], (e.shards || []).map(ey), !0).filter(Boolean);
                  return t.forEach(function(e) {
                      return e.classList.add("allow-interactivity-".concat(i))
                  }),
                  function() {
                      document.body.classList.remove("block-interactivity-".concat(i)),
                      t.forEach(function(e) {
                          return e.classList.remove("allow-interactivity-".concat(i))
                      })
                  }
              }
          }, [e.inert, e.lockRef.current, e.shards]);
          var a = d.useCallback(function(e, t) {
              if ("touches"in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey)
                  return !o.current.allowPinchZoom;
              var i, s = em(e), a = r.current, l = "deltaX"in e ? e.deltaX : a[0] - s[0], u = "deltaY"in e ? e.deltaY : a[1] - s[1], c = e.target, d = Math.abs(l) > Math.abs(u) ? "h" : "v";
              if ("touches"in e && "h" === d && "range" === c.type)
                  return !1;
              var h = eh(d, c);
              if (!h)
                  return !0;
              if (h ? i = d : (i = "v" === d ? "h" : "v",
              h = eh(d, c)),
              !h)
                  return !1;
              if (!n.current && "changedTouches"in e && (l || u) && (n.current = i),
              !i)
                  return !0;
              var f = n.current || i;
              return eg(f, t, e, "h" === f ? l : u, !0)
          }, [])
            , l = d.useCallback(function(e) {
              if (ew.length && ew[ew.length - 1] === s) {
                  var r = "deltaY"in e ? ev(e) : em(e)
                    , n = t.current.filter(function(t) {
                      var n;
                      return t.name === e.type && (t.target === e.target || e.target === t.shadowParent) && (n = t.delta)[0] === r[0] && n[1] === r[1]
                  })[0];
                  if (n && n.should) {
                      e.cancelable && e.preventDefault();
                      return
                  }
                  if (!n) {
                      var i = (o.current.shards || []).map(ey).filter(Boolean).filter(function(t) {
                          return t.contains(e.target)
                      });
                      (i.length > 0 ? a(e, i[0]) : !o.current.noIsolation) && e.cancelable && e.preventDefault()
                  }
              }
          }, [])
            , u = d.useCallback(function(e, r, n, i) {
              var s = {
                  name: e,
                  delta: r,
                  target: n,
                  should: i,
                  shadowParent: function(e) {
                      for (var t = null; null !== e; )
                          e instanceof ShadowRoot && (t = e.host,
                          e = e.host),
                          e = e.parentNode;
                      return t
                  }(n)
              };
              t.current.push(s),
              setTimeout(function() {
                  t.current = t.current.filter(function(e) {
                      return e !== s
                  })
              }, 1)
          }, [])
            , c = d.useCallback(function(e) {
              r.current = em(e),
              n.current = void 0
          }, [])
            , h = d.useCallback(function(t) {
              u(t.type, ev(t), t.target, a(t, e.lockRef.current))
          }, [])
            , f = d.useCallback(function(t) {
              u(t.type, em(t), t.target, a(t, e.lockRef.current))
          }, []);
          d.useEffect(function() {
              return ew.push(s),
              e.setCallbacks({
                  onScrollCapture: h,
                  onWheelCapture: h,
                  onTouchMoveCapture: f
              }),
              document.addEventListener("wheel", l, ec),
              document.addEventListener("touchmove", l, ec),
              document.addEventListener("touchstart", c, ec),
              function() {
                  ew = ew.filter(function(e) {
                      return e !== s
                  }),
                  document.removeEventListener("wheel", l, ec),
                  document.removeEventListener("touchmove", l, ec),
                  document.removeEventListener("touchstart", c, ec)
              }
          }, []);
          var p = e.removeScrollBar
            , g = e.inert;
          return d.createElement(d.Fragment, null, g ? d.createElement(s, {
              styles: "\n  .block-interactivity-".concat(i, " {pointer-events: none;}\n  .allow-interactivity-").concat(i, " {pointer-events: all;}\n")
          }) : null, p ? d.createElement(ea, {
              gapMode: e.gapMode
          }) : null)
      }
      ,
      K.useMedium(u),
      J)
        , eE = d.forwardRef(function(e, t) {
          return d.createElement(H, D({}, e, {
              ref: t,
              sideCar: e_
          }))
      });
      eE.classNames = H.classNames;
      var ek = new WeakMap
        , ex = new WeakMap
        , eS = {}
        , eT = 0
        , ej = function(e) {
          return e && (e.host || ej(e.parentNode))
      }
        , eP = function(e, t, r, n) {
          var i = (Array.isArray(e) ? e : [e]).map(function(e) {
              if (t.contains(e))
                  return e;
              var r = ej(e);
              return r && t.contains(r) ? r : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"),
              null)
          }).filter(function(e) {
              return !!e
          });
          eS[r] || (eS[r] = new WeakMap);
          var s = eS[r]
            , o = []
            , a = new Set
            , l = new Set(i)
            , u = function(e) {
              !e || a.has(e) || (a.add(e),
              u(e.parentNode))
          };
          i.forEach(u);
          var c = function(e) {
              !e || l.has(e) || Array.prototype.forEach.call(e.children, function(e) {
                  if (a.has(e))
                      c(e);
                  else
                      try {
                          var t = e.getAttribute(n)
                            , i = null !== t && "false" !== t
                            , l = (ek.get(e) || 0) + 1
                            , u = (s.get(e) || 0) + 1;
                          ek.set(e, l),
                          s.set(e, u),
                          o.push(e),
                          1 === l && i && ex.set(e, !0),
                          1 === u && e.setAttribute(r, "true"),
                          i || e.setAttribute(n, "true")
                      } catch (t) {
                          console.error("aria-hidden: cannot operate on ", e, t)
                      }
              })
          };
          return c(t),
          a.clear(),
          eT++,
          function() {
              o.forEach(function(e) {
                  var t = ek.get(e) - 1
                    , i = s.get(e) - 1;
                  ek.set(e, t),
                  s.set(e, i),
                  t || (ex.has(e) || e.removeAttribute(n),
                  ex.delete(e)),
                  i || e.removeAttribute(r)
              }),
              --eT || (ek = new WeakMap,
              ek = new WeakMap,
              ex = new WeakMap,
              eS = {})
          }
      }
        , eC = function(e, t, r) {
          void 0 === r && (r = "data-aria-hidden");
          var n = Array.from(Array.isArray(e) ? e : [e])
            , i = t || ("undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
          return i ? (n.push.apply(n, Array.from(i.querySelectorAll("[aria-live]"))),
          eP(n, i, r, "aria-hidden")) : function() {
              return null
          }
      }
        , eO = r(7053)
        , eA = "Dialog"
        , [eR,eI] = (0,
      g.b)(eA)
        , [e$,eL] = eR(eA)
        , eN = e => {
          let {__scopeDialog: t, children: r, open: n, defaultOpen: i, onOpenChange: s, modal: o=!0} = e
            , a = d.useRef(null)
            , l = d.useRef(null)
            , [u=!1,c] = (0,
          w.T)({
              prop: n,
              defaultProp: i,
              onChange: s
          });
          return (0,
          x.jsx)(e$, {
              scope: t,
              triggerRef: a,
              contentRef: l,
              contentId: b(),
              titleId: b(),
              descriptionId: b(),
              open: u,
              onOpenChange: c,
              onOpenToggle: d.useCallback( () => c(e => !e), [c]),
              modal: o,
              children: r
          })
      }
      ;
      eN.displayName = eA;
      var eM = "DialogTrigger"
        , eD = d.forwardRef( (e, t) => {
          let {__scopeDialog: r, ...n} = e
            , i = eL(eM, r)
            , s = (0,
          p.e)(t, i.triggerRef);
          return (0,
          x.jsx)(E.WV.button, {
              type: "button",
              "aria-haspopup": "dialog",
              "aria-expanded": i.open,
              "aria-controls": i.contentId,
              "data-state": e8(i.open),
              ...n,
              ref: s,
              onClick: (0,
              f.M)(e.onClick, i.onOpenToggle)
          })
      }
      );
      eD.displayName = eM;
      var eU = "DialogPortal"
        , [eB,ez] = eR(eU, {
          forceMount: void 0
      })
        , eF = e => {
          let {__scopeDialog: t, forceMount: r, children: n, container: i} = e
            , s = eL(eU, t);
          return (0,
          x.jsx)(eB, {
              scope: t,
              forceMount: r,
              children: d.Children.map(n, e => (0,
              x.jsx)(L.z, {
                  present: r || s.open,
                  children: (0,
                  x.jsx)($.h, {
                      asChild: !0,
                      container: i,
                      children: e
                  })
              }))
          })
      }
      ;
      eF.displayName = eU;
      var eW = "DialogOverlay"
        , eq = d.forwardRef( (e, t) => {
          let r = ez(eW, e.__scopeDialog)
            , {forceMount: n=r.forceMount, ...i} = e
            , s = eL(eW, e.__scopeDialog);
          return s.modal ? (0,
          x.jsx)(L.z, {
              present: n || s.open,
              children: (0,
              x.jsx)(eK, {
                  ...i,
                  ref: t
              })
          }) : null
      }
      );
      eq.displayName = eW;
      var eK = d.forwardRef( (e, t) => {
          let {__scopeDialog: r, ...n} = e
            , i = eL(eW, r);
          return (0,
          x.jsx)(eE, {
              as: eO.g7,
              allowPinchZoom: !0,
              shards: [i.contentRef],
              children: (0,
              x.jsx)(E.WV.div, {
                  "data-state": e8(i.open),
                  ...n,
                  ref: t,
                  style: {
                      pointerEvents: "auto",
                      ...n.style
                  }
              })
          })
      }
      )
        , eG = "DialogContent"
        , eH = d.forwardRef( (e, t) => {
          let r = ez(eG, e.__scopeDialog)
            , {forceMount: n=r.forceMount, ...i} = e
            , s = eL(eG, e.__scopeDialog);
          return (0,
          x.jsx)(L.z, {
              present: n || s.open,
              children: s.modal ? (0,
              x.jsx)(eJ, {
                  ...i,
                  ref: t
              }) : (0,
              x.jsx)(eV, {
                  ...i,
                  ref: t
              })
          })
      }
      );
      eH.displayName = eG;
      var eJ = d.forwardRef( (e, t) => {
          let r = eL(eG, e.__scopeDialog)
            , n = d.useRef(null)
            , i = (0,
          p.e)(t, r.contentRef, n);
          return d.useEffect( () => {
              let e = n.current;
              if (e)
                  return eC(e)
          }
          , []),
          (0,
          x.jsx)(eY, {
              ...e,
              ref: i,
              trapFocus: r.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0,
              f.M)(e.onCloseAutoFocus, e => {
                  var t;
                  e.preventDefault(),
                  null === (t = r.triggerRef.current) || void 0 === t || t.focus()
              }
              ),
              onPointerDownOutside: (0,
              f.M)(e.onPointerDownOutside, e => {
                  let t = e.detail.originalEvent
                    , r = 0 === t.button && !0 === t.ctrlKey;
                  (2 === t.button || r) && e.preventDefault()
              }
              ),
              onFocusOutside: (0,
              f.M)(e.onFocusOutside, e => e.preventDefault())
          })
      }
      )
        , eV = d.forwardRef( (e, t) => {
          let r = eL(eG, e.__scopeDialog)
            , n = d.useRef(!1)
            , i = d.useRef(!1);
          return (0,
          x.jsx)(eY, {
              ...e,
              ref: t,
              trapFocus: !1,
              disableOutsidePointerEvents: !1,
              onCloseAutoFocus: t => {
                  var s, o;
                  null === (s = e.onCloseAutoFocus) || void 0 === s || s.call(e, t),
                  t.defaultPrevented || (n.current || null === (o = r.triggerRef.current) || void 0 === o || o.focus(),
                  t.preventDefault()),
                  n.current = !1,
                  i.current = !1
              }
              ,
              onInteractOutside: t => {
                  var s, o;
                  null === (s = e.onInteractOutside) || void 0 === s || s.call(e, t),
                  t.defaultPrevented || (n.current = !0,
                  "pointerdown" !== t.detail.originalEvent.type || (i.current = !0));
                  let a = t.target;
                  (null === (o = r.triggerRef.current) || void 0 === o ? void 0 : o.contains(a)) && t.preventDefault(),
                  "focusin" === t.detail.originalEvent.type && i.current && t.preventDefault()
              }
          })
      }
      )
        , eY = d.forwardRef( (e, t) => {
          let {__scopeDialog: r, trapFocus: n, onOpenAutoFocus: i, onCloseAutoFocus: s, ...o} = e
            , a = eL(eG, r)
            , l = d.useRef(null)
            , u = (0,
          p.e)(t, l);
          return d.useEffect( () => {
              var e, t;
              let r = document.querySelectorAll("[data-radix-focus-guard]");
              return document.body.insertAdjacentElement("afterbegin", null !== (e = r[0]) && void 0 !== e ? e : M()),
              document.body.insertAdjacentElement("beforeend", null !== (t = r[1]) && void 0 !== t ? t : M()),
              N++,
              () => {
                  1 === N && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()),
                  N--
              }
          }
          , []),
          (0,
          x.jsxs)(x.Fragment, {
              children: [(0,
              x.jsx)(P, {
                  asChild: !0,
                  loop: !0,
                  trapped: n,
                  onMountAutoFocus: i,
                  onUnmountAutoFocus: s,
                  children: (0,
                  x.jsx)(_.XB, {
                      role: "dialog",
                      id: a.contentId,
                      "aria-describedby": a.descriptionId,
                      "aria-labelledby": a.titleId,
                      "data-state": e8(a.open),
                      ...o,
                      ref: u,
                      onDismiss: () => a.onOpenChange(!1)
                  })
              }), (0,
              x.jsxs)(x.Fragment, {
                  children: [(0,
                  x.jsx)(e3, {
                      titleId: a.titleId
                  }), (0,
                  x.jsx)(e7, {
                      contentRef: l,
                      descriptionId: a.descriptionId
                  })]
              })]
          })
      }
      )
        , eX = "DialogTitle"
        , eZ = d.forwardRef( (e, t) => {
          let {__scopeDialog: r, ...n} = e
            , i = eL(eX, r);
          return (0,
          x.jsx)(E.WV.h2, {
              id: i.titleId,
              ...n,
              ref: t
          })
      }
      );
      eZ.displayName = eX;
      var eQ = "DialogDescription"
        , e0 = d.forwardRef( (e, t) => {
          let {__scopeDialog: r, ...n} = e
            , i = eL(eQ, r);
          return (0,
          x.jsx)(E.WV.p, {
              id: i.descriptionId,
              ...n,
              ref: t
          })
      }
      );
      e0.displayName = eQ;
      var e1 = "DialogClose"
        , e2 = d.forwardRef( (e, t) => {
          let {__scopeDialog: r, ...n} = e
            , i = eL(e1, r);
          return (0,
          x.jsx)(E.WV.button, {
              type: "button",
              ...n,
              ref: t,
              onClick: (0,
              f.M)(e.onClick, () => i.onOpenChange(!1))
          })
      }
      );
      function e8(e) {
          return e ? "open" : "closed"
      }
      e2.displayName = e1;
      var e6 = "DialogTitleWarning"
        , [e4,e5] = (0,
      g.k)(e6, {
          contentName: eG,
          titleName: eX,
          docsSlug: "dialog"
      })
        , e3 = e => {
          let {titleId: t} = e
            , r = e5(e6)
            , n = "`".concat(r.contentName, "` requires a `").concat(r.titleName, "` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(r.titleName, "`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(r.docsSlug);
          return d.useEffect( () => {
              t && !document.getElementById(t) && console.error(n)
          }
          , [n, t]),
          null
      }
        , e7 = e => {
          let {contentRef: t, descriptionId: r} = e
            , n = e5("DialogDescriptionWarning")
            , i = "Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(n.contentName, "}.");
          return d.useEffect( () => {
              var e;
              let n = null === (e = t.current) || void 0 === e ? void 0 : e.getAttribute("aria-describedby");
              r && n && !document.getElementById(r) && console.warn(i)
          }
          , [i, t, r]),
          null
      }
        , e9 = eN
        , te = eD
        , tt = eF
        , tr = eq
        , tn = eH
        , ti = eZ
        , ts = e0
        , to = e2
  },
  5278: function(e, t, r) {
      "use strict";
      r.d(t, {
          I0: function() {
              return v
          },
          XB: function() {
              return h
          },
          fC: function() {
              return m
          }
      });
      var n, i = r(2265), s = r(6741), o = r(6840), a = r(8575), l = r(6606), u = r(7437), c = "dismissableLayer.update", d = i.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
      }), h = i.forwardRef( (e, t) => {
          var r, h;
          let {disableOutsidePointerEvents: f=!1, onEscapeKeyDown: m, onPointerDownOutside: v, onFocusOutside: y, onInteractOutside: b, onDismiss: w, ..._} = e
            , E = i.useContext(d)
            , [k,x] = i.useState(null)
            , S = null !== (h = null == k ? void 0 : k.ownerDocument) && void 0 !== h ? h : null === (r = globalThis) || void 0 === r ? void 0 : r.document
            , [,T] = i.useState({})
            , j = (0,
          a.e)(t, e => x(e))
            , P = Array.from(E.layers)
            , [C] = [...E.layersWithOutsidePointerEventsDisabled].slice(-1)
            , O = P.indexOf(C)
            , A = k ? P.indexOf(k) : -1
            , R = E.layersWithOutsidePointerEventsDisabled.size > 0
            , I = A >= O
            , $ = function(e) {
              var t;
              let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === (t = globalThis) || void 0 === t ? void 0 : t.document
                , n = (0,
              l.W)(e)
                , s = i.useRef(!1)
                , o = i.useRef( () => {}
              );
              return i.useEffect( () => {
                  let e = e => {
                      if (e.target && !s.current) {
                          let t = function() {
                              g("dismissableLayer.pointerDownOutside", n, i, {
                                  discrete: !0
                              })
                          }
                            , i = {
                              originalEvent: e
                          };
                          "touch" === e.pointerType ? (r.removeEventListener("click", o.current),
                          o.current = t,
                          r.addEventListener("click", o.current, {
                              once: !0
                          })) : t()
                      } else
                          r.removeEventListener("click", o.current);
                      s.current = !1
                  }
                    , t = window.setTimeout( () => {
                      r.addEventListener("pointerdown", e)
                  }
                  , 0);
                  return () => {
                      window.clearTimeout(t),
                      r.removeEventListener("pointerdown", e),
                      r.removeEventListener("click", o.current)
                  }
              }
              , [r, n]),
              {
                  onPointerDownCapture: () => s.current = !0
              }
          }(e => {
              let t = e.target
                , r = [...E.branches].some(e => e.contains(t));
              !I || r || (null == v || v(e),
              null == b || b(e),
              e.defaultPrevented || null == w || w())
          }
          , S)
            , L = function(e) {
              var t;
              let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === (t = globalThis) || void 0 === t ? void 0 : t.document
                , n = (0,
              l.W)(e)
                , s = i.useRef(!1);
              return i.useEffect( () => {
                  let e = e => {
                      e.target && !s.current && g("dismissableLayer.focusOutside", n, {
                          originalEvent: e
                      }, {
                          discrete: !1
                      })
                  }
                  ;
                  return r.addEventListener("focusin", e),
                  () => r.removeEventListener("focusin", e)
              }
              , [r, n]),
              {
                  onFocusCapture: () => s.current = !0,
                  onBlurCapture: () => s.current = !1
              }
          }(e => {
              let t = e.target;
              [...E.branches].some(e => e.contains(t)) || (null == y || y(e),
              null == b || b(e),
              e.defaultPrevented || null == w || w())
          }
          , S);
          return !function(e, t=globalThis?.document) {
              let r = (0,
              l.W)(e);
              i.useEffect( () => {
                  let e = e => {
                      "Escape" === e.key && r(e)
                  }
                  ;
                  return t.addEventListener("keydown", e, {
                      capture: !0
                  }),
                  () => t.removeEventListener("keydown", e, {
                      capture: !0
                  })
              }
              , [r, t])
          }(e => {
              A !== E.layers.size - 1 || (null == m || m(e),
              !e.defaultPrevented && w && (e.preventDefault(),
              w()))
          }
          , S),
          i.useEffect( () => {
              if (k)
                  return f && (0 === E.layersWithOutsidePointerEventsDisabled.size && (n = S.body.style.pointerEvents,
                  S.body.style.pointerEvents = "none"),
                  E.layersWithOutsidePointerEventsDisabled.add(k)),
                  E.layers.add(k),
                  p(),
                  () => {
                      f && 1 === E.layersWithOutsidePointerEventsDisabled.size && (S.body.style.pointerEvents = n)
                  }
          }
          , [k, S, f, E]),
          i.useEffect( () => () => {
              k && (E.layers.delete(k),
              E.layersWithOutsidePointerEventsDisabled.delete(k),
              p())
          }
          , [k, E]),
          i.useEffect( () => {
              let e = () => T({});
              return document.addEventListener(c, e),
              () => document.removeEventListener(c, e)
          }
          , []),
          (0,
          u.jsx)(o.WV.div, {
              ..._,
              ref: j,
              style: {
                  pointerEvents: R ? I ? "auto" : "none" : void 0,
                  ...e.style
              },
              onFocusCapture: (0,
              s.M)(e.onFocusCapture, L.onFocusCapture),
              onBlurCapture: (0,
              s.M)(e.onBlurCapture, L.onBlurCapture),
              onPointerDownCapture: (0,
              s.M)(e.onPointerDownCapture, $.onPointerDownCapture)
          })
      }
      );
      h.displayName = "DismissableLayer";
      var f = i.forwardRef( (e, t) => {
          let r = i.useContext(d)
            , n = i.useRef(null)
            , s = (0,
          a.e)(t, n);
          return i.useEffect( () => {
              let e = n.current;
              if (e)
                  return r.branches.add(e),
                  () => {
                      r.branches.delete(e)
                  }
          }
          , [r.branches]),
          (0,
          u.jsx)(o.WV.div, {
              ...e,
              ref: s
          })
      }
      );
      function p() {
          let e = new CustomEvent(c);
          document.dispatchEvent(e)
      }
      function g(e, t, r, n) {
          let {discrete: i} = n
            , s = r.originalEvent.target
            , a = new CustomEvent(e,{
              bubbles: !1,
              cancelable: !0,
              detail: r
          });
          t && s.addEventListener(e, t, {
              once: !0
          }),
          i ? (0,
          o.jH)(s, a) : s.dispatchEvent(a)
      }
      f.displayName = "DismissableLayerBranch";
      var m = h
        , v = f
  },
  3832: function(e, t, r) {
      "use strict";
      r.d(t, {
          h: function() {
              return l
          }
      });
      var n = r(2265)
        , i = r(4887)
        , s = r(6840)
        , o = r(1188)
        , a = r(7437)
        , l = n.forwardRef( (e, t) => {
          var r, l;
          let {container: u, ...c} = e
            , [d,h] = n.useState(!1);
          (0,
          o.b)( () => h(!0), []);
          let f = u || d && (null === (l = globalThis) || void 0 === l ? void 0 : null === (r = l.document) || void 0 === r ? void 0 : r.body);
          return f ? i.createPortal((0,
          a.jsx)(s.WV.div, {
              ...c,
              ref: t
          }), f) : null
      }
      );
      l.displayName = "Portal"
  },
  1599: function(e, t, r) {
      "use strict";
      r.d(t, {
          z: function() {
              return o
          }
      });
      var n = r(2265)
        , i = r(8575)
        , s = r(1188)
        , o = e => {
          var t, r;
          let o, l;
          let {present: u, children: c} = e
            , d = function(e) {
              var t, r;
              let[i,o] = n.useState()
                , l = n.useRef({})
                , u = n.useRef(e)
                , c = n.useRef("none")
                , [d,h] = (t = e ? "mounted" : "unmounted",
              r = {
                  mounted: {
                      UNMOUNT: "unmounted",
                      ANIMATION_OUT: "unmountSuspended"
                  },
                  unmountSuspended: {
                      MOUNT: "mounted",
                      ANIMATION_END: "unmounted"
                  },
                  unmounted: {
                      MOUNT: "mounted"
                  }
              },
              n.useReducer( (e, t) => {
                  let n = r[e][t];
                  return null != n ? n : e
              }
              , t));
              return n.useEffect( () => {
                  let e = a(l.current);
                  c.current = "mounted" === d ? e : "none"
              }
              , [d]),
              (0,
              s.b)( () => {
                  let t = l.current
                    , r = u.current;
                  if (r !== e) {
                      let n = c.current
                        , i = a(t);
                      e ? h("MOUNT") : "none" === i || (null == t ? void 0 : t.display) === "none" ? h("UNMOUNT") : r && n !== i ? h("ANIMATION_OUT") : h("UNMOUNT"),
                      u.current = e
                  }
              }
              , [e, h]),
              (0,
              s.b)( () => {
                  if (i) {
                      var e;
                      let t;
                      let r = null !== (e = i.ownerDocument.defaultView) && void 0 !== e ? e : window
                        , n = e => {
                          let n = a(l.current).includes(e.animationName);
                          if (e.target === i && n && (h("ANIMATION_END"),
                          !u.current)) {
                              let e = i.style.animationFillMode;
                              i.style.animationFillMode = "forwards",
                              t = r.setTimeout( () => {
                                  "forwards" === i.style.animationFillMode && (i.style.animationFillMode = e)
                              }
                              )
                          }
                      }
                        , s = e => {
                          e.target === i && (c.current = a(l.current))
                      }
                      ;
                      return i.addEventListener("animationstart", s),
                      i.addEventListener("animationcancel", n),
                      i.addEventListener("animationend", n),
                      () => {
                          r.clearTimeout(t),
                          i.removeEventListener("animationstart", s),
                          i.removeEventListener("animationcancel", n),
                          i.removeEventListener("animationend", n)
                      }
                  }
                  h("ANIMATION_END")
              }
              , [i, h]),
              {
                  isPresent: ["mounted", "unmountSuspended"].includes(d),
                  ref: n.useCallback(e => {
                      e && (l.current = getComputedStyle(e)),
                      o(e)
                  }
                  , [])
              }
          }(u)
            , h = "function" == typeof c ? c({
              present: d.isPresent
          }) : n.Children.only(c)
            , f = (0,
          i.e)(d.ref, (o = null === (t = Object.getOwnPropertyDescriptor(h.props, "ref")) || void 0 === t ? void 0 : t.get) && "isReactWarning"in o && o.isReactWarning ? h.ref : (o = null === (r = Object.getOwnPropertyDescriptor(h, "ref")) || void 0 === r ? void 0 : r.get) && "isReactWarning"in o && o.isReactWarning ? h.props.ref : h.props.ref || h.ref);
          return "function" == typeof c || d.isPresent ? n.cloneElement(h, {
              ref: f
          }) : null
      }
      ;
      function a(e) {
          return (null == e ? void 0 : e.animationName) || "none"
      }
      o.displayName = "Presence"
  },
  6840: function(e, t, r) {
      "use strict";
      r.d(t, {
          WV: function() {
              return a
          },
          jH: function() {
              return l
          }
      });
      var n = r(2265)
        , i = r(4887)
        , s = r(7053)
        , o = r(7437)
        , a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce( (e, t) => {
          let r = n.forwardRef( (e, r) => {
              let {asChild: n, ...i} = e
                , a = n ? s.g7 : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0),
              (0,
              o.jsx)(a, {
                  ...i,
                  ref: r
              })
          }
          );
          return r.displayName = `Primitive.${t}`,
          {
              ...e,
              [t]: r
          }
      }
      , {});
      function l(e, t) {
          e && i.flushSync( () => e.dispatchEvent(t))
      }
  },
  7053: function(e, t, r) {
      "use strict";
      r.d(t, {
          g7: function() {
              return o
          }
      });
      var n = r(2265)
        , i = r(8575)
        , s = r(7437)
        , o = n.forwardRef( (e, t) => {
          let {children: r, ...i} = e
            , o = n.Children.toArray(r)
            , l = o.find(u);
          if (l) {
              let e = l.props.children
                , r = o.map(t => t !== l ? t : n.Children.count(e) > 1 ? n.Children.only(null) : n.isValidElement(e) ? e.props.children : null);
              return (0,
              s.jsx)(a, {
                  ...i,
                  ref: t,
                  children: n.isValidElement(e) ? n.cloneElement(e, void 0, r) : null
              })
          }
          return (0,
          s.jsx)(a, {
              ...i,
              ref: t,
              children: r
          })
      }
      );
      o.displayName = "Slot";
      var a = n.forwardRef( (e, t) => {
          let {children: r, ...s} = e;
          if (n.isValidElement(r)) {
              let e, o;
              let a = (e = Object.getOwnPropertyDescriptor(r.props, "ref")?.get) && "isReactWarning"in e && e.isReactWarning ? r.ref : (e = Object.getOwnPropertyDescriptor(r, "ref")?.get) && "isReactWarning"in e && e.isReactWarning ? r.props.ref : r.props.ref || r.ref;
              return n.cloneElement(r, {
                  ...function(e, t) {
                      let r = {
                          ...t
                      };
                      for (let n in t) {
                          let i = e[n]
                            , s = t[n];
                          /^on[A-Z]/.test(n) ? i && s ? r[n] = (...e) => {
                              s(...e),
                              i(...e)
                          }
                          : i && (r[n] = i) : "style" === n ? r[n] = {
                              ...i,
                              ...s
                          } : "className" === n && (r[n] = [i, s].filter(Boolean).join(" "))
                      }
                      return {
                          ...e,
                          ...r
                      }
                  }(s, r.props),
                  ref: t ? (0,
                  i.F)(t, a) : a
              })
          }
          return n.Children.count(r) > 1 ? n.Children.only(null) : null
      }
      );
      a.displayName = "SlotClone";
      var l = ({children: e}) => (0,
      s.jsx)(s.Fragment, {
          children: e
      });
      function u(e) {
          return n.isValidElement(e) && e.type === l
      }
  },
  4230: function(e, t, r) {
      "use strict";
      r.d(t, {
          aU: function() {
              return et
          },
          x8: function() {
              return er
          },
          dk: function() {
              return ee
          },
          zt: function() {
              return Y
          },
          fC: function() {
              return Z
          },
          Dx: function() {
              return Q
          },
          l_: function() {
              return X
          }
      });
      var n = r(2265)
        , i = r(4887)
        , s = r(6741)
        , o = r(8575)
        , a = r(7437)
        , l = r(7053)
        , u = r(3966)
        , c = r(5278)
        , d = r(3832)
        , h = r(1599)
        , f = r(6840)
        , p = r(6606)
        , g = r(886)
        , m = r(1188)
        , v = n.forwardRef( (e, t) => (0,
      a.jsx)(f.WV.span, {
          ...e,
          ref: t,
          style: {
              position: "absolute",
              border: 0,
              width: 1,
              height: 1,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              wordWrap: "normal",
              ...e.style
          }
      }));
      v.displayName = "VisuallyHidden";
      var y = "ToastProvider"
        , [b,w,_] = function(e) {
          let t = e + "CollectionProvider"
            , [r,i] = function(e, t=[]) {
              let r = []
                , i = () => {
                  let t = r.map(e => n.createContext(e));
                  return function(r) {
                      let i = r?.[e] || t;
                      return n.useMemo( () => ({
                          [`__scope${e}`]: {
                              ...r,
                              [e]: i
                          }
                      }), [r, i])
                  }
              }
              ;
              return i.scopeName = e,
              [function(t, i) {
                  let s = n.createContext(i)
                    , o = r.length;
                  function l(t) {
                      let {scope: r, children: i, ...l} = t
                        , u = r?.[e][o] || s
                        , c = n.useMemo( () => l, Object.values(l));
                      return (0,
                      a.jsx)(u.Provider, {
                          value: c,
                          children: i
                      })
                  }
                  return r = [...r, i],
                  l.displayName = t + "Provider",
                  [l, function(r, a) {
                      let l = a?.[e][o] || s
                        , u = n.useContext(l);
                      if (u)
                          return u;
                      if (void 0 !== i)
                          return i;
                      throw Error(`\`${r}\` must be used within \`${t}\``)
                  }
                  ]
              }
              , function(...e) {
                  let t = e[0];
                  if (1 === e.length)
                      return t;
                  let r = () => {
                      let r = e.map(e => ({
                          useScope: e(),
                          scopeName: e.scopeName
                      }));
                      return function(e) {
                          let i = r.reduce( (t, {useScope: r, scopeName: n}) => {
                              let i = r(e)[`__scope${n}`];
                              return {
                                  ...t,
                                  ...i
                              }
                          }
                          , {});
                          return n.useMemo( () => ({
                              [`__scope${t.scopeName}`]: i
                          }), [i])
                      }
                  }
                  ;
                  return r.scopeName = t.scopeName,
                  r
              }(i, ...t)]
          }(t)
            , [s,u] = r(t, {
              collectionRef: {
                  current: null
              },
              itemMap: new Map
          })
            , c = e => {
              let {scope: t, children: r} = e
                , i = n.useRef(null)
                , o = n.useRef(new Map).current;
              return (0,
              a.jsx)(s, {
                  scope: t,
                  itemMap: o,
                  collectionRef: i,
                  children: r
              })
          }
          ;
          c.displayName = t;
          let d = e + "CollectionSlot"
            , h = n.forwardRef( (e, t) => {
              let {scope: r, children: n} = e
                , i = u(d, r)
                , s = (0,
              o.e)(t, i.collectionRef);
              return (0,
              a.jsx)(l.g7, {
                  ref: s,
                  children: n
              })
          }
          );
          h.displayName = d;
          let f = e + "CollectionItemSlot"
            , p = "data-radix-collection-item"
            , g = n.forwardRef( (e, t) => {
              let {scope: r, children: i, ...s} = e
                , c = n.useRef(null)
                , d = (0,
              o.e)(t, c)
                , h = u(f, r);
              return n.useEffect( () => (h.itemMap.set(c, {
                  ref: c,
                  ...s
              }),
              () => void h.itemMap.delete(c))),
              (0,
              a.jsx)(l.g7, {
                  [p]: "",
                  ref: d,
                  children: i
              })
          }
          );
          return g.displayName = f,
          [{
              Provider: c,
              Slot: h,
              ItemSlot: g
          }, function(t) {
              let r = u(e + "CollectionConsumer", t);
              return n.useCallback( () => {
                  let e = r.collectionRef.current;
                  if (!e)
                      return [];
                  let t = Array.from(e.querySelectorAll("[".concat(p, "]")));
                  return Array.from(r.itemMap.values()).sort( (e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current))
              }
              , [r.collectionRef, r.itemMap])
          }
          , i]
      }("Toast")
        , [E,k] = (0,
      u.b)("Toast", [_])
        , [x,S] = E(y)
        , T = e => {
          let {__scopeToast: t, label: r="Notification", duration: i=5e3, swipeDirection: s="right", swipeThreshold: o=50, children: l} = e
            , [u,c] = n.useState(null)
            , [d,h] = n.useState(0)
            , f = n.useRef(!1)
            , p = n.useRef(!1);
          return r.trim() || console.error("Invalid prop `label` supplied to `".concat(y, "`. Expected non-empty `string`.")),
          (0,
          a.jsx)(b.Provider, {
              scope: t,
              children: (0,
              a.jsx)(x, {
                  scope: t,
                  label: r,
                  duration: i,
                  swipeDirection: s,
                  swipeThreshold: o,
                  toastCount: d,
                  viewport: u,
                  onViewportChange: c,
                  onToastAdd: n.useCallback( () => h(e => e + 1), []),
                  onToastRemove: n.useCallback( () => h(e => e - 1), []),
                  isFocusedToastEscapeKeyDownRef: f,
                  isClosePausedRef: p,
                  children: l
              })
          })
      }
      ;
      T.displayName = y;
      var j = "ToastViewport"
        , P = ["F8"]
        , C = "toast.viewportPause"
        , O = "toast.viewportResume"
        , A = n.forwardRef( (e, t) => {
          let {__scopeToast: r, hotkey: i=P, label: s="Notifications ({hotkey})", ...l} = e
            , u = S(j, r)
            , d = w(r)
            , h = n.useRef(null)
            , p = n.useRef(null)
            , g = n.useRef(null)
            , m = n.useRef(null)
            , v = (0,
          o.e)(t, m, u.onViewportChange)
            , y = i.join("+").replace(/Key/g, "").replace(/Digit/g, "")
            , _ = u.toastCount > 0;
          n.useEffect( () => {
              let e = e => {
                  var t;
                  0 !== i.length && i.every(t => e[t] || e.code === t) && (null === (t = m.current) || void 0 === t || t.focus())
              }
              ;
              return document.addEventListener("keydown", e),
              () => document.removeEventListener("keydown", e)
          }
          , [i]),
          n.useEffect( () => {
              let e = h.current
                , t = m.current;
              if (_ && e && t) {
                  let r = () => {
                      if (!u.isClosePausedRef.current) {
                          let e = new CustomEvent(C);
                          t.dispatchEvent(e),
                          u.isClosePausedRef.current = !0
                      }
                  }
                    , n = () => {
                      if (u.isClosePausedRef.current) {
                          let e = new CustomEvent(O);
                          t.dispatchEvent(e),
                          u.isClosePausedRef.current = !1
                      }
                  }
                    , i = t => {
                      e.contains(t.relatedTarget) || n()
                  }
                    , s = () => {
                      e.contains(document.activeElement) || n()
                  }
                  ;
                  return e.addEventListener("focusin", r),
                  e.addEventListener("focusout", i),
                  e.addEventListener("pointermove", r),
                  e.addEventListener("pointerleave", s),
                  window.addEventListener("blur", r),
                  window.addEventListener("focus", n),
                  () => {
                      e.removeEventListener("focusin", r),
                      e.removeEventListener("focusout", i),
                      e.removeEventListener("pointermove", r),
                      e.removeEventListener("pointerleave", s),
                      window.removeEventListener("blur", r),
                      window.removeEventListener("focus", n)
                  }
              }
          }
          , [_, u.isClosePausedRef]);
          let E = n.useCallback(e => {
              let {tabbingDirection: t} = e
                , r = d().map(e => {
                  let r = e.ref.current
                    , n = [r, ...function(e) {
                      let t = []
                        , r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                          acceptNode: e => {
                              let t = "INPUT" === e.tagName && "hidden" === e.type;
                              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                          }
                      });
                      for (; r.nextNode(); )
                          t.push(r.currentNode);
                      return t
                  }(r)];
                  return "forwards" === t ? n : n.reverse()
              }
              );
              return ("forwards" === t ? r.reverse() : r).flat()
          }
          , [d]);
          return n.useEffect( () => {
              let e = m.current;
              if (e) {
                  let t = t => {
                      let r = t.altKey || t.ctrlKey || t.metaKey;
                      if ("Tab" === t.key && !r) {
                          var n, i, s;
                          let r = document.activeElement
                            , o = t.shiftKey;
                          if (t.target === e && o) {
                              null === (n = p.current) || void 0 === n || n.focus();
                              return
                          }
                          let a = E({
                              tabbingDirection: o ? "backwards" : "forwards"
                          })
                            , l = a.findIndex(e => e === r);
                          V(a.slice(l + 1)) ? t.preventDefault() : o ? null === (i = p.current) || void 0 === i || i.focus() : null === (s = g.current) || void 0 === s || s.focus()
                      }
                  }
                  ;
                  return e.addEventListener("keydown", t),
                  () => e.removeEventListener("keydown", t)
              }
          }
          , [d, E]),
          (0,
          a.jsxs)(c.I0, {
              ref: h,
              role: "region",
              "aria-label": s.replace("{hotkey}", y),
              tabIndex: -1,
              style: {
                  pointerEvents: _ ? void 0 : "none"
              },
              children: [_ && (0,
              a.jsx)(I, {
                  ref: p,
                  onFocusFromOutsideViewport: () => {
                      V(E({
                          tabbingDirection: "forwards"
                      }))
                  }
              }), (0,
              a.jsx)(b.Slot, {
                  scope: r,
                  children: (0,
                  a.jsx)(f.WV.ol, {
                      tabIndex: -1,
                      ...l,
                      ref: v
                  })
              }), _ && (0,
              a.jsx)(I, {
                  ref: g,
                  onFocusFromOutsideViewport: () => {
                      V(E({
                          tabbingDirection: "backwards"
                      }))
                  }
              })]
          })
      }
      );
      A.displayName = j;
      var R = "ToastFocusProxy"
        , I = n.forwardRef( (e, t) => {
          let {__scopeToast: r, onFocusFromOutsideViewport: n, ...i} = e
            , s = S(R, r);
          return (0,
          a.jsx)(v, {
              "aria-hidden": !0,
              tabIndex: 0,
              ...i,
              ref: t,
              style: {
                  position: "fixed"
              },
              onFocus: e => {
                  var t;
                  let r = e.relatedTarget;
                  (null === (t = s.viewport) || void 0 === t ? void 0 : t.contains(r)) || n()
              }
          })
      }
      );
      I.displayName = R;
      var $ = "Toast"
        , L = n.forwardRef( (e, t) => {
          let {forceMount: r, open: n, defaultOpen: i, onOpenChange: o, ...l} = e
            , [u=!0,c] = (0,
          g.T)({
              prop: n,
              defaultProp: i,
              onChange: o
          });
          return (0,
          a.jsx)(h.z, {
              present: r || u,
              children: (0,
              a.jsx)(D, {
                  open: u,
                  ...l,
                  ref: t,
                  onClose: () => c(!1),
                  onPause: (0,
                  p.W)(e.onPause),
                  onResume: (0,
                  p.W)(e.onResume),
                  onSwipeStart: (0,
                  s.M)(e.onSwipeStart, e => {
                      e.currentTarget.setAttribute("data-swipe", "start")
                  }
                  ),
                  onSwipeMove: (0,
                  s.M)(e.onSwipeMove, e => {
                      let {x: t, y: r} = e.detail.delta;
                      e.currentTarget.setAttribute("data-swipe", "move"),
                      e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", "".concat(t, "px")),
                      e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", "".concat(r, "px"))
                  }
                  ),
                  onSwipeCancel: (0,
                  s.M)(e.onSwipeCancel, e => {
                      e.currentTarget.setAttribute("data-swipe", "cancel"),
                      e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                      e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                      e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                      e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
                  }
                  ),
                  onSwipeEnd: (0,
                  s.M)(e.onSwipeEnd, e => {
                      let {x: t, y: r} = e.detail.delta;
                      e.currentTarget.setAttribute("data-swipe", "end"),
                      e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                      e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                      e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", "".concat(t, "px")),
                      e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", "".concat(r, "px")),
                      c(!1)
                  }
                  )
              })
          })
      }
      );
      L.displayName = $;
      var [N,M] = E($, {
          onClose() {}
      })
        , D = n.forwardRef( (e, t) => {
          let {__scopeToast: r, type: l="foreground", duration: u, open: d, onClose: h, onEscapeKeyDown: g, onPause: m, onResume: v, onSwipeStart: y, onSwipeMove: w, onSwipeCancel: _, onSwipeEnd: E, ...k} = e
            , x = S($, r)
            , [T,j] = n.useState(null)
            , P = (0,
          o.e)(t, e => j(e))
            , A = n.useRef(null)
            , R = n.useRef(null)
            , I = u || x.duration
            , L = n.useRef(0)
            , M = n.useRef(I)
            , D = n.useRef(0)
            , {onToastAdd: B, onToastRemove: z} = x
            , F = (0,
          p.W)( () => {
              var e;
              (null == T ? void 0 : T.contains(document.activeElement)) && (null === (e = x.viewport) || void 0 === e || e.focus()),
              h()
          }
          )
            , W = n.useCallback(e => {
              e && e !== 1 / 0 && (window.clearTimeout(D.current),
              L.current = new Date().getTime(),
              D.current = window.setTimeout(F, e))
          }
          , [F]);
          n.useEffect( () => {
              let e = x.viewport;
              if (e) {
                  let t = () => {
                      W(M.current),
                      null == v || v()
                  }
                    , r = () => {
                      let e = new Date().getTime() - L.current;
                      M.current = M.current - e,
                      window.clearTimeout(D.current),
                      null == m || m()
                  }
                  ;
                  return e.addEventListener(C, r),
                  e.addEventListener(O, t),
                  () => {
                      e.removeEventListener(C, r),
                      e.removeEventListener(O, t)
                  }
              }
          }
          , [x.viewport, I, m, v, W]),
          n.useEffect( () => {
              d && !x.isClosePausedRef.current && W(I)
          }
          , [d, I, x.isClosePausedRef, W]),
          n.useEffect( () => (B(),
          () => z()), [B, z]);
          let q = n.useMemo( () => T ? function e(t) {
              let r = [];
              return Array.from(t.childNodes).forEach(t => {
                  if (t.nodeType === t.TEXT_NODE && t.textContent && r.push(t.textContent),
                  t.nodeType === t.ELEMENT_NODE) {
                      let n = t.ariaHidden || t.hidden || "none" === t.style.display
                        , i = "" === t.dataset.radixToastAnnounceExclude;
                      if (!n) {
                          if (i) {
                              let e = t.dataset.radixToastAnnounceAlt;
                              e && r.push(e)
                          } else
                              r.push(...e(t))
                      }
                  }
              }
              ),
              r
          }(T) : null, [T]);
          return x.viewport ? (0,
          a.jsxs)(a.Fragment, {
              children: [q && (0,
              a.jsx)(U, {
                  __scopeToast: r,
                  role: "status",
                  "aria-live": "foreground" === l ? "assertive" : "polite",
                  "aria-atomic": !0,
                  children: q
              }), (0,
              a.jsx)(N, {
                  scope: r,
                  onClose: F,
                  children: i.createPortal((0,
                  a.jsx)(b.ItemSlot, {
                      scope: r,
                      children: (0,
                      a.jsx)(c.fC, {
                          asChild: !0,
                          onEscapeKeyDown: (0,
                          s.M)(g, () => {
                              x.isFocusedToastEscapeKeyDownRef.current || F(),
                              x.isFocusedToastEscapeKeyDownRef.current = !1
                          }
                          ),
                          children: (0,
                          a.jsx)(f.WV.li, {
                              role: "status",
                              "aria-live": "off",
                              "aria-atomic": !0,
                              tabIndex: 0,
                              "data-state": d ? "open" : "closed",
                              "data-swipe-direction": x.swipeDirection,
                              ...k,
                              ref: P,
                              style: {
                                  userSelect: "none",
                                  touchAction: "none",
                                  ...e.style
                              },
                              onKeyDown: (0,
                              s.M)(e.onKeyDown, e => {
                                  "Escape" !== e.key || (null == g || g(e.nativeEvent),
                                  e.nativeEvent.defaultPrevented || (x.isFocusedToastEscapeKeyDownRef.current = !0,
                                  F()))
                              }
                              ),
                              onPointerDown: (0,
                              s.M)(e.onPointerDown, e => {
                                  0 === e.button && (A.current = {
                                      x: e.clientX,
                                      y: e.clientY
                                  })
                              }
                              ),
                              onPointerMove: (0,
                              s.M)(e.onPointerMove, e => {
                                  if (!A.current)
                                      return;
                                  let t = e.clientX - A.current.x
                                    , r = e.clientY - A.current.y
                                    , n = !!R.current
                                    , i = ["left", "right"].includes(x.swipeDirection)
                                    , s = ["left", "up"].includes(x.swipeDirection) ? Math.min : Math.max
                                    , o = i ? s(0, t) : 0
                                    , a = i ? 0 : s(0, r)
                                    , l = "touch" === e.pointerType ? 10 : 2
                                    , u = {
                                      x: o,
                                      y: a
                                  }
                                    , c = {
                                      originalEvent: e,
                                      delta: u
                                  };
                                  n ? (R.current = u,
                                  H("toast.swipeMove", w, c, {
                                      discrete: !1
                                  })) : J(u, x.swipeDirection, l) ? (R.current = u,
                                  H("toast.swipeStart", y, c, {
                                      discrete: !1
                                  }),
                                  e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > l || Math.abs(r) > l) && (A.current = null)
                              }
                              ),
                              onPointerUp: (0,
                              s.M)(e.onPointerUp, e => {
                                  let t = R.current
                                    , r = e.target;
                                  if (r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId),
                                  R.current = null,
                                  A.current = null,
                                  t) {
                                      let r = e.currentTarget
                                        , n = {
                                          originalEvent: e,
                                          delta: t
                                      };
                                      J(t, x.swipeDirection, x.swipeThreshold) ? H("toast.swipeEnd", E, n, {
                                          discrete: !0
                                      }) : H("toast.swipeCancel", _, n, {
                                          discrete: !0
                                      }),
                                      r.addEventListener("click", e => e.preventDefault(), {
                                          once: !0
                                      })
                                  }
                              }
                              )
                          })
                      })
                  }), x.viewport)
              })]
          }) : null
      }
      )
        , U = e => {
          let {__scopeToast: t, children: r, ...i} = e
            , s = S($, t)
            , [o,l] = n.useState(!1)
            , [u,c] = n.useState(!1);
          return function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {}
                , t = (0,
              p.W)(e);
              (0,
              m.b)( () => {
                  let e = 0
                    , r = 0;
                  return e = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
                  () => {
                      window.cancelAnimationFrame(e),
                      window.cancelAnimationFrame(r)
                  }
              }
              , [t])
          }( () => l(!0)),
          n.useEffect( () => {
              let e = window.setTimeout( () => c(!0), 1e3);
              return () => window.clearTimeout(e)
          }
          , []),
          u ? null : (0,
          a.jsx)(d.h, {
              asChild: !0,
              children: (0,
              a.jsx)(v, {
                  ...i,
                  children: o && (0,
                  a.jsxs)(a.Fragment, {
                      children: [s.label, " ", r]
                  })
              })
          })
      }
        , B = n.forwardRef( (e, t) => {
          let {__scopeToast: r, ...n} = e;
          return (0,
          a.jsx)(f.WV.div, {
              ...n,
              ref: t
          })
      }
      );
      B.displayName = "ToastTitle";
      var z = n.forwardRef( (e, t) => {
          let {__scopeToast: r, ...n} = e;
          return (0,
          a.jsx)(f.WV.div, {
              ...n,
              ref: t
          })
      }
      );
      z.displayName = "ToastDescription";
      var F = "ToastAction"
        , W = n.forwardRef( (e, t) => {
          let {altText: r, ...n} = e;
          return r.trim() ? (0,
          a.jsx)(G, {
              altText: r,
              asChild: !0,
              children: (0,
              a.jsx)(K, {
                  ...n,
                  ref: t
              })
          }) : (console.error("Invalid prop `altText` supplied to `".concat(F, "`. Expected non-empty `string`.")),
          null)
      }
      );
      W.displayName = F;
      var q = "ToastClose"
        , K = n.forwardRef( (e, t) => {
          let {__scopeToast: r, ...n} = e
            , i = M(q, r);
          return (0,
          a.jsx)(G, {
              asChild: !0,
              children: (0,
              a.jsx)(f.WV.button, {
                  type: "button",
                  ...n,
                  ref: t,
                  onClick: (0,
                  s.M)(e.onClick, i.onClose)
              })
          })
      }
      );
      K.displayName = q;
      var G = n.forwardRef( (e, t) => {
          let {__scopeToast: r, altText: n, ...i} = e;
          return (0,
          a.jsx)(f.WV.div, {
              "data-radix-toast-announce-exclude": "",
              "data-radix-toast-announce-alt": n || void 0,
              ...i,
              ref: t
          })
      }
      );
      function H(e, t, r, n) {
          let {discrete: i} = n
            , s = r.originalEvent.currentTarget
            , o = new CustomEvent(e,{
              bubbles: !0,
              cancelable: !0,
              detail: r
          });
          t && s.addEventListener(e, t, {
              once: !0
          }),
          i ? (0,
          f.jH)(s, o) : s.dispatchEvent(o)
      }
      var J = function(e, t) {
          let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
            , n = Math.abs(e.x)
            , i = Math.abs(e.y)
            , s = n > i;
          return "left" === t || "right" === t ? s && n > r : !s && i > r
      };
      function V(e) {
          let t = document.activeElement;
          return e.some(e => e === t || (e.focus(),
          document.activeElement !== t))
      }
      var Y = T
        , X = A
        , Z = L
        , Q = B
        , ee = z
        , et = W
        , er = K
  },
  6606: function(e, t, r) {
      "use strict";
      r.d(t, {
          W: function() {
              return i
          }
      });
      var n = r(2265);
      function i(e) {
          let t = n.useRef(e);
          return n.useEffect( () => {
              t.current = e
          }
          ),
          n.useMemo( () => (...e) => t.current?.(...e), [])
      }
  },
  886: function(e, t, r) {
      "use strict";
      r.d(t, {
          T: function() {
              return s
          }
      });
      var n = r(2265)
        , i = r(6606);
      function s({prop: e, defaultProp: t, onChange: r= () => {}
      }) {
          let[s,o] = function({defaultProp: e, onChange: t}) {
              let r = n.useState(e)
                , [s] = r
                , o = n.useRef(s)
                , a = (0,
              i.W)(t);
              return n.useEffect( () => {
                  o.current !== s && (a(s),
                  o.current = s)
              }
              , [s, o, a]),
              r
          }({
              defaultProp: t,
              onChange: r
          })
            , a = void 0 !== e
            , l = a ? e : s
            , u = (0,
          i.W)(r);
          return [l, n.useCallback(t => {
              if (a) {
                  let r = "function" == typeof t ? t(e) : t;
                  r !== e && u(r)
              } else
                  o(t)
          }
          , [a, e, o, u])]
      }
  },
  1188: function(e, t, r) {
      "use strict";
      r.d(t, {
          b: function() {
              return i
          }
      });
      var n = r(2265)
        , i = globalThis?.document ? n.useLayoutEffect : () => {}
  },
  535: function(e, t, r) {
      "use strict";
      r.d(t, {
          j: function() {
              return o
          }
      });
      var n = r(1994);
      let i = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e
        , s = n.W
        , o = (e, t) => r => {
          var n;
          if ((null == t ? void 0 : t.variants) == null)
              return s(e, null == r ? void 0 : r.class, null == r ? void 0 : r.className);
          let {variants: o, defaultVariants: a} = t
            , l = Object.keys(o).map(e => {
              let t = null == r ? void 0 : r[e]
                , n = null == a ? void 0 : a[e];
              if (null === t)
                  return null;
              let s = i(t) || i(n);
              return o[e][s]
          }
          )
            , u = r && Object.entries(r).reduce( (e, t) => {
              let[r,n] = t;
              return void 0 === n || (e[r] = n),
              e
          }
          , {});
          return s(e, l, null == t ? void 0 : null === (n = t.compoundVariants) || void 0 === n ? void 0 : n.reduce( (e, t) => {
              let {class: r, className: n, ...i} = t;
              return Object.entries(i).every(e => {
                  let[t,r] = e;
                  return Array.isArray(r) ? r.includes({
                      ...a,
                      ...u
                  }[t]) : ({
                      ...a,
                      ...u
                  })[t] === r
              }
              ) ? [...e, r, n] : e
          }
          , []), null == r ? void 0 : r.class, null == r ? void 0 : r.className)
      }
  },
  1994: function(e, t, r) {
      "use strict";
      function n() {
          for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++)
              (e = arguments[r]) && (t = function e(t) {
                  var r, n, i = "";
                  if ("string" == typeof t || "number" == typeof t)
                      i += t;
                  else if ("object" == typeof t) {
                      if (Array.isArray(t)) {
                          var s = t.length;
                          for (r = 0; r < s; r++)
                              t[r] && (n = e(t[r])) && (i && (i += " "),
                              i += n)
                      } else
                          for (n in t)
                              t[n] && (i && (i += " "),
                              i += n)
                  }
                  return i
              }(e)) && (n && (n += " "),
              n += t);
          return n
      }
      r.d(t, {
          W: function() {
              return n
          }
      })
  },
  3335: function(e, t, r) {
      "use strict";
      r.d(t, {
          m6: function() {
              return V
          }
      });
      let n = e => {
          let t = a(e)
            , {conflictingClassGroups: r, conflictingClassGroupModifiers: n} = e;
          return {
              getClassGroupId: e => {
                  let r = e.split("-");
                  return "" === r[0] && 1 !== r.length && r.shift(),
                  i(r, t) || o(e)
              }
              ,
              getConflictingClassGroupIds: (e, t) => {
                  let i = r[e] || [];
                  return t && n[e] ? [...i, ...n[e]] : i
              }
          }
      }
        , i = (e, t) => {
          if (0 === e.length)
              return t.classGroupId;
          let r = e[0]
            , n = t.nextPart.get(r)
            , s = n ? i(e.slice(1), n) : void 0;
          if (s)
              return s;
          if (0 === t.validators.length)
              return;
          let o = e.join("-");
          return t.validators.find( ({validator: e}) => e(o))?.classGroupId
      }
        , s = /^\[(.+)\]$/
        , o = e => {
          if (s.test(e)) {
              let t = s.exec(e)[1]
                , r = t?.substring(0, t.indexOf(":"));
              if (r)
                  return "arbitrary.." + r
          }
      }
        , a = e => {
          let {theme: t, prefix: r} = e
            , n = {
              nextPart: new Map,
              validators: []
          };
          return d(Object.entries(e.classGroups), r).forEach( ([e,r]) => {
              l(r, n, e, t)
          }
          ),
          n
      }
        , l = (e, t, r, n) => {
          e.forEach(e => {
              if ("string" == typeof e) {
                  ("" === e ? t : u(t, e)).classGroupId = r;
                  return
              }
              if ("function" == typeof e) {
                  if (c(e)) {
                      l(e(n), t, r, n);
                      return
                  }
                  t.validators.push({
                      validator: e,
                      classGroupId: r
                  });
                  return
              }
              Object.entries(e).forEach( ([e,i]) => {
                  l(i, u(t, e), r, n)
              }
              )
          }
          )
      }
        , u = (e, t) => {
          let r = e;
          return t.split("-").forEach(e => {
              r.nextPart.has(e) || r.nextPart.set(e, {
                  nextPart: new Map,
                  validators: []
              }),
              r = r.nextPart.get(e)
          }
          ),
          r
      }
        , c = e => e.isThemeGetter
        , d = (e, t) => t ? e.map( ([e,r]) => [e, r.map(e => "string" == typeof e ? t + e : "object" == typeof e ? Object.fromEntries(Object.entries(e).map( ([e,r]) => [t + e, r])) : e)]) : e
        , h = e => {
          if (e < 1)
              return {
                  get: () => void 0,
                  set: () => {}
              };
          let t = 0
            , r = new Map
            , n = new Map
            , i = (i, s) => {
              r.set(i, s),
              ++t > e && (t = 0,
              n = r,
              r = new Map)
          }
          ;
          return {
              get(e) {
                  let t = r.get(e);
                  return void 0 !== t ? t : void 0 !== (t = n.get(e)) ? (i(e, t),
                  t) : void 0
              },
              set(e, t) {
                  r.has(e) ? r.set(e, t) : i(e, t)
              }
          }
      }
        , f = e => {
          let {separator: t, experimentalParseClassName: r} = e
            , n = 1 === t.length
            , i = t[0]
            , s = t.length
            , o = e => {
              let r;
              let o = []
                , a = 0
                , l = 0;
              for (let u = 0; u < e.length; u++) {
                  let c = e[u];
                  if (0 === a) {
                      if (c === i && (n || e.slice(u, u + s) === t)) {
                          o.push(e.slice(l, u)),
                          l = u + s;
                          continue
                      }
                      if ("/" === c) {
                          r = u;
                          continue
                      }
                  }
                  "[" === c ? a++ : "]" === c && a--
              }
              let u = 0 === o.length ? e : e.substring(l)
                , c = u.startsWith("!")
                , d = c ? u.substring(1) : u;
              return {
                  modifiers: o,
                  hasImportantModifier: c,
                  baseClassName: d,
                  maybePostfixModifierPosition: r && r > l ? r - l : void 0
              }
          }
          ;
          return r ? e => r({
              className: e,
              parseClassName: o
          }) : o
      }
        , p = e => {
          if (e.length <= 1)
              return e;
          let t = []
            , r = [];
          return e.forEach(e => {
              "[" === e[0] ? (t.push(...r.sort(), e),
              r = []) : r.push(e)
          }
          ),
          t.push(...r.sort()),
          t
      }
        , g = e => ({
          cache: h(e.cacheSize),
          parseClassName: f(e),
          ...n(e)
      })
        , m = /\s+/
        , v = (e, t) => {
          let {parseClassName: r, getClassGroupId: n, getConflictingClassGroupIds: i} = t
            , s = []
            , o = e.trim().split(m)
            , a = "";
          for (let e = o.length - 1; e >= 0; e -= 1) {
              let t = o[e]
                , {modifiers: l, hasImportantModifier: u, baseClassName: c, maybePostfixModifierPosition: d} = r(t)
                , h = !!d
                , f = n(h ? c.substring(0, d) : c);
              if (!f) {
                  if (!h || !(f = n(c))) {
                      a = t + (a.length > 0 ? " " + a : a);
                      continue
                  }
                  h = !1
              }
              let g = p(l).join(":")
                , m = u ? g + "!" : g
                , v = m + f;
              if (s.includes(v))
                  continue;
              s.push(v);
              let y = i(f, h);
              for (let e = 0; e < y.length; ++e) {
                  let t = y[e];
                  s.push(m + t)
              }
              a = t + (a.length > 0 ? " " + a : a)
          }
          return a
      }
      ;
      function y() {
          let e, t, r = 0, n = "";
          for (; r < arguments.length; )
              (e = arguments[r++]) && (t = b(e)) && (n && (n += " "),
              n += t);
          return n
      }
      let b = e => {
          let t;
          if ("string" == typeof e)
              return e;
          let r = "";
          for (let n = 0; n < e.length; n++)
              e[n] && (t = b(e[n])) && (r && (r += " "),
              r += t);
          return r
      }
        , w = e => {
          let t = t => t[e] || [];
          return t.isThemeGetter = !0,
          t
      }
        , _ = /^\[(?:([a-z-]+):)?(.+)\]$/i
        , E = /^\d+\/\d+$/
        , k = new Set(["px", "full", "screen"])
        , x = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
        , S = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
        , T = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
        , j = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
        , P = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
        , C = e => A(e) || k.has(e) || E.test(e)
        , O = e => q(e, "length", K)
        , A = e => !!e && !Number.isNaN(Number(e))
        , R = e => q(e, "number", A)
        , I = e => !!e && Number.isInteger(Number(e))
        , $ = e => e.endsWith("%") && A(e.slice(0, -1))
        , L = e => _.test(e)
        , N = e => x.test(e)
        , M = new Set(["length", "size", "percentage"])
        , D = e => q(e, M, G)
        , U = e => q(e, "position", G)
        , B = new Set(["image", "url"])
        , z = e => q(e, B, J)
        , F = e => q(e, "", H)
        , W = () => !0
        , q = (e, t, r) => {
          let n = _.exec(e);
          return !!n && (n[1] ? "string" == typeof t ? n[1] === t : t.has(n[1]) : r(n[2]))
      }
        , K = e => S.test(e) && !T.test(e)
        , G = () => !1
        , H = e => j.test(e)
        , J = e => P.test(e)
        , V = function(e, ...t) {
          let r, n, i;
          let s = function(a) {
              return n = (r = g(t.reduce( (e, t) => t(e), e()))).cache.get,
              i = r.cache.set,
              s = o,
              o(a)
          };
          function o(e) {
              let t = n(e);
              if (t)
                  return t;
              let s = v(e, r);
              return i(e, s),
              s
          }
          return function() {
              return s(y.apply(null, arguments))
          }
      }( () => {
          let e = w("colors")
            , t = w("spacing")
            , r = w("blur")
            , n = w("brightness")
            , i = w("borderColor")
            , s = w("borderRadius")
            , o = w("borderSpacing")
            , a = w("borderWidth")
            , l = w("contrast")
            , u = w("grayscale")
            , c = w("hueRotate")
            , d = w("invert")
            , h = w("gap")
            , f = w("gradientColorStops")
            , p = w("gradientColorStopPositions")
            , g = w("inset")
            , m = w("margin")
            , v = w("opacity")
            , y = w("padding")
            , b = w("saturate")
            , _ = w("scale")
            , E = w("sepia")
            , k = w("skew")
            , x = w("space")
            , S = w("translate")
            , T = () => ["auto", "contain", "none"]
            , j = () => ["auto", "hidden", "clip", "visible", "scroll"]
            , P = () => ["auto", L, t]
            , M = () => [L, t]
            , B = () => ["", C, O]
            , q = () => ["auto", A, L]
            , K = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
            , G = () => ["solid", "dashed", "dotted", "double", "none"]
            , H = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
            , J = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
            , V = () => ["", "0", L]
            , Y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
            , X = () => [A, L];
          return {
              cacheSize: 500,
              separator: ":",
              theme: {
                  colors: [W],
                  spacing: [C, O],
                  blur: ["none", "", N, L],
                  brightness: X(),
                  borderColor: [e],
                  borderRadius: ["none", "", "full", N, L],
                  borderSpacing: M(),
                  borderWidth: B(),
                  contrast: X(),
                  grayscale: V(),
                  hueRotate: X(),
                  invert: V(),
                  gap: M(),
                  gradientColorStops: [e],
                  gradientColorStopPositions: [$, O],
                  inset: P(),
                  margin: P(),
                  opacity: X(),
                  padding: M(),
                  saturate: X(),
                  scale: X(),
                  sepia: V(),
                  skew: X(),
                  space: M(),
                  translate: M()
              },
              classGroups: {
                  aspect: [{
                      aspect: ["auto", "square", "video", L]
                  }],
                  container: ["container"],
                  columns: [{
                      columns: [N]
                  }],
                  "break-after": [{
                      "break-after": Y()
                  }],
                  "break-before": [{
                      "break-before": Y()
                  }],
                  "break-inside": [{
                      "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                  }],
                  "box-decoration": [{
                      "box-decoration": ["slice", "clone"]
                  }],
                  box: [{
                      box: ["border", "content"]
                  }],
                  display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                  float: [{
                      float: ["right", "left", "none", "start", "end"]
                  }],
                  clear: [{
                      clear: ["left", "right", "both", "none", "start", "end"]
                  }],
                  isolation: ["isolate", "isolation-auto"],
                  "object-fit": [{
                      object: ["contain", "cover", "fill", "none", "scale-down"]
                  }],
                  "object-position": [{
                      object: [...K(), L]
                  }],
                  overflow: [{
                      overflow: j()
                  }],
                  "overflow-x": [{
                      "overflow-x": j()
                  }],
                  "overflow-y": [{
                      "overflow-y": j()
                  }],
                  overscroll: [{
                      overscroll: T()
                  }],
                  "overscroll-x": [{
                      "overscroll-x": T()
                  }],
                  "overscroll-y": [{
                      "overscroll-y": T()
                  }],
                  position: ["static", "fixed", "absolute", "relative", "sticky"],
                  inset: [{
                      inset: [g]
                  }],
                  "inset-x": [{
                      "inset-x": [g]
                  }],
                  "inset-y": [{
                      "inset-y": [g]
                  }],
                  start: [{
                      start: [g]
                  }],
                  end: [{
                      end: [g]
                  }],
                  top: [{
                      top: [g]
                  }],
                  right: [{
                      right: [g]
                  }],
                  bottom: [{
                      bottom: [g]
                  }],
                  left: [{
                      left: [g]
                  }],
                  visibility: ["visible", "invisible", "collapse"],
                  z: [{
                      z: ["auto", I, L]
                  }],
                  basis: [{
                      basis: P()
                  }],
                  "flex-direction": [{
                      flex: ["row", "row-reverse", "col", "col-reverse"]
                  }],
                  "flex-wrap": [{
                      flex: ["wrap", "wrap-reverse", "nowrap"]
                  }],
                  flex: [{
                      flex: ["1", "auto", "initial", "none", L]
                  }],
                  grow: [{
                      grow: V()
                  }],
                  shrink: [{
                      shrink: V()
                  }],
                  order: [{
                      order: ["first", "last", "none", I, L]
                  }],
                  "grid-cols": [{
                      "grid-cols": [W]
                  }],
                  "col-start-end": [{
                      col: ["auto", {
                          span: ["full", I, L]
                      }, L]
                  }],
                  "col-start": [{
                      "col-start": q()
                  }],
                  "col-end": [{
                      "col-end": q()
                  }],
                  "grid-rows": [{
                      "grid-rows": [W]
                  }],
                  "row-start-end": [{
                      row: ["auto", {
                          span: [I, L]
                      }, L]
                  }],
                  "row-start": [{
                      "row-start": q()
                  }],
                  "row-end": [{
                      "row-end": q()
                  }],
                  "grid-flow": [{
                      "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                  }],
                  "auto-cols": [{
                      "auto-cols": ["auto", "min", "max", "fr", L]
                  }],
                  "auto-rows": [{
                      "auto-rows": ["auto", "min", "max", "fr", L]
                  }],
                  gap: [{
                      gap: [h]
                  }],
                  "gap-x": [{
                      "gap-x": [h]
                  }],
                  "gap-y": [{
                      "gap-y": [h]
                  }],
                  "justify-content": [{
                      justify: ["normal", ...J()]
                  }],
                  "justify-items": [{
                      "justify-items": ["start", "end", "center", "stretch"]
                  }],
                  "justify-self": [{
                      "justify-self": ["auto", "start", "end", "center", "stretch"]
                  }],
                  "align-content": [{
                      content: ["normal", ...J(), "baseline"]
                  }],
                  "align-items": [{
                      items: ["start", "end", "center", "baseline", "stretch"]
                  }],
                  "align-self": [{
                      self: ["auto", "start", "end", "center", "stretch", "baseline"]
                  }],
                  "place-content": [{
                      "place-content": [...J(), "baseline"]
                  }],
                  "place-items": [{
                      "place-items": ["start", "end", "center", "baseline", "stretch"]
                  }],
                  "place-self": [{
                      "place-self": ["auto", "start", "end", "center", "stretch"]
                  }],
                  p: [{
                      p: [y]
                  }],
                  px: [{
                      px: [y]
                  }],
                  py: [{
                      py: [y]
                  }],
                  ps: [{
                      ps: [y]
                  }],
                  pe: [{
                      pe: [y]
                  }],
                  pt: [{
                      pt: [y]
                  }],
                  pr: [{
                      pr: [y]
                  }],
                  pb: [{
                      pb: [y]
                  }],
                  pl: [{
                      pl: [y]
                  }],
                  m: [{
                      m: [m]
                  }],
                  mx: [{
                      mx: [m]
                  }],
                  my: [{
                      my: [m]
                  }],
                  ms: [{
                      ms: [m]
                  }],
                  me: [{
                      me: [m]
                  }],
                  mt: [{
                      mt: [m]
                  }],
                  mr: [{
                      mr: [m]
                  }],
                  mb: [{
                      mb: [m]
                  }],
                  ml: [{
                      ml: [m]
                  }],
                  "space-x": [{
                      "space-x": [x]
                  }],
                  "space-x-reverse": ["space-x-reverse"],
                  "space-y": [{
                      "space-y": [x]
                  }],
                  "space-y-reverse": ["space-y-reverse"],
                  w: [{
                      w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", L, t]
                  }],
                  "min-w": [{
                      "min-w": [L, t, "min", "max", "fit"]
                  }],
                  "max-w": [{
                      "max-w": [L, t, "none", "full", "min", "max", "fit", "prose", {
                          screen: [N]
                      }, N]
                  }],
                  h: [{
                      h: [L, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                  }],
                  "min-h": [{
                      "min-h": [L, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                  }],
                  "max-h": [{
                      "max-h": [L, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                  }],
                  size: [{
                      size: [L, t, "auto", "min", "max", "fit"]
                  }],
                  "font-size": [{
                      text: ["base", N, O]
                  }],
                  "font-smoothing": ["antialiased", "subpixel-antialiased"],
                  "font-style": ["italic", "not-italic"],
                  "font-weight": [{
                      font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", R]
                  }],
                  "font-family": [{
                      font: [W]
                  }],
                  "fvn-normal": ["normal-nums"],
                  "fvn-ordinal": ["ordinal"],
                  "fvn-slashed-zero": ["slashed-zero"],
                  "fvn-figure": ["lining-nums", "oldstyle-nums"],
                  "fvn-spacing": ["proportional-nums", "tabular-nums"],
                  "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                  tracking: [{
                      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", L]
                  }],
                  "line-clamp": [{
                      "line-clamp": ["none", A, R]
                  }],
                  leading: [{
                      leading: ["none", "tight", "snug", "normal", "relaxed", "loose", C, L]
                  }],
                  "list-image": [{
                      "list-image": ["none", L]
                  }],
                  "list-style-type": [{
                      list: ["none", "disc", "decimal", L]
                  }],
                  "list-style-position": [{
                      list: ["inside", "outside"]
                  }],
                  "placeholder-color": [{
                      placeholder: [e]
                  }],
                  "placeholder-opacity": [{
                      "placeholder-opacity": [v]
                  }],
                  "text-alignment": [{
                      text: ["left", "center", "right", "justify", "start", "end"]
                  }],
                  "text-color": [{
                      text: [e]
                  }],
                  "text-opacity": [{
                      "text-opacity": [v]
                  }],
                  "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                  "text-decoration-style": [{
                      decoration: [...G(), "wavy"]
                  }],
                  "text-decoration-thickness": [{
                      decoration: ["auto", "from-font", C, O]
                  }],
                  "underline-offset": [{
                      "underline-offset": ["auto", C, L]
                  }],
                  "text-decoration-color": [{
                      decoration: [e]
                  }],
                  "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                  "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                  "text-wrap": [{
                      text: ["wrap", "nowrap", "balance", "pretty"]
                  }],
                  indent: [{
                      indent: M()
                  }],
                  "vertical-align": [{
                      align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", L]
                  }],
                  whitespace: [{
                      whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                  }],
                  break: [{
                      break: ["normal", "words", "all", "keep"]
                  }],
                  hyphens: [{
                      hyphens: ["none", "manual", "auto"]
                  }],
                  content: [{
                      content: ["none", L]
                  }],
                  "bg-attachment": [{
                      bg: ["fixed", "local", "scroll"]
                  }],
                  "bg-clip": [{
                      "bg-clip": ["border", "padding", "content", "text"]
                  }],
                  "bg-opacity": [{
                      "bg-opacity": [v]
                  }],
                  "bg-origin": [{
                      "bg-origin": ["border", "padding", "content"]
                  }],
                  "bg-position": [{
                      bg: [...K(), U]
                  }],
                  "bg-repeat": [{
                      bg: ["no-repeat", {
                          repeat: ["", "x", "y", "round", "space"]
                      }]
                  }],
                  "bg-size": [{
                      bg: ["auto", "cover", "contain", D]
                  }],
                  "bg-image": [{
                      bg: ["none", {
                          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                      }, z]
                  }],
                  "bg-color": [{
                      bg: [e]
                  }],
                  "gradient-from-pos": [{
                      from: [p]
                  }],
                  "gradient-via-pos": [{
                      via: [p]
                  }],
                  "gradient-to-pos": [{
                      to: [p]
                  }],
                  "gradient-from": [{
                      from: [f]
                  }],
                  "gradient-via": [{
                      via: [f]
                  }],
                  "gradient-to": [{
                      to: [f]
                  }],
                  rounded: [{
                      rounded: [s]
                  }],
                  "rounded-s": [{
                      "rounded-s": [s]
                  }],
                  "rounded-e": [{
                      "rounded-e": [s]
                  }],
                  "rounded-t": [{
                      "rounded-t": [s]
                  }],
                  "rounded-r": [{
                      "rounded-r": [s]
                  }],
                  "rounded-b": [{
                      "rounded-b": [s]
                  }],
                  "rounded-l": [{
                      "rounded-l": [s]
                  }],
                  "rounded-ss": [{
                      "rounded-ss": [s]
                  }],
                  "rounded-se": [{
                      "rounded-se": [s]
                  }],
                  "rounded-ee": [{
                      "rounded-ee": [s]
                  }],
                  "rounded-es": [{
                      "rounded-es": [s]
                  }],
                  "rounded-tl": [{
                      "rounded-tl": [s]
                  }],
                  "rounded-tr": [{
                      "rounded-tr": [s]
                  }],
                  "rounded-br": [{
                      "rounded-br": [s]
                  }],
                  "rounded-bl": [{
                      "rounded-bl": [s]
                  }],
                  "border-w": [{
                      border: [a]
                  }],
                  "border-w-x": [{
                      "border-x": [a]
                  }],
                  "border-w-y": [{
                      "border-y": [a]
                  }],
                  "border-w-s": [{
                      "border-s": [a]
                  }],
                  "border-w-e": [{
                      "border-e": [a]
                  }],
                  "border-w-t": [{
                      "border-t": [a]
                  }],
                  "border-w-r": [{
                      "border-r": [a]
                  }],
                  "border-w-b": [{
                      "border-b": [a]
                  }],
                  "border-w-l": [{
                      "border-l": [a]
                  }],
                  "border-opacity": [{
                      "border-opacity": [v]
                  }],
                  "border-style": [{
                      border: [...G(), "hidden"]
                  }],
                  "divide-x": [{
                      "divide-x": [a]
                  }],
                  "divide-x-reverse": ["divide-x-reverse"],
                  "divide-y": [{
                      "divide-y": [a]
                  }],
                  "divide-y-reverse": ["divide-y-reverse"],
                  "divide-opacity": [{
                      "divide-opacity": [v]
                  }],
                  "divide-style": [{
                      divide: G()
                  }],
                  "border-color": [{
                      border: [i]
                  }],
                  "border-color-x": [{
                      "border-x": [i]
                  }],
                  "border-color-y": [{
                      "border-y": [i]
                  }],
                  "border-color-s": [{
                      "border-s": [i]
                  }],
                  "border-color-e": [{
                      "border-e": [i]
                  }],
                  "border-color-t": [{
                      "border-t": [i]
                  }],
                  "border-color-r": [{
                      "border-r": [i]
                  }],
                  "border-color-b": [{
                      "border-b": [i]
                  }],
                  "border-color-l": [{
                      "border-l": [i]
                  }],
                  "divide-color": [{
                      divide: [i]
                  }],
                  "outline-style": [{
                      outline: ["", ...G()]
                  }],
                  "outline-offset": [{
                      "outline-offset": [C, L]
                  }],
                  "outline-w": [{
                      outline: [C, O]
                  }],
                  "outline-color": [{
                      outline: [e]
                  }],
                  "ring-w": [{
                      ring: B()
                  }],
                  "ring-w-inset": ["ring-inset"],
                  "ring-color": [{
                      ring: [e]
                  }],
                  "ring-opacity": [{
                      "ring-opacity": [v]
                  }],
                  "ring-offset-w": [{
                      "ring-offset": [C, O]
                  }],
                  "ring-offset-color": [{
                      "ring-offset": [e]
                  }],
                  shadow: [{
                      shadow: ["", "inner", "none", N, F]
                  }],
                  "shadow-color": [{
                      shadow: [W]
                  }],
                  opacity: [{
                      opacity: [v]
                  }],
                  "mix-blend": [{
                      "mix-blend": [...H(), "plus-lighter", "plus-darker"]
                  }],
                  "bg-blend": [{
                      "bg-blend": H()
                  }],
                  filter: [{
                      filter: ["", "none"]
                  }],
                  blur: [{
                      blur: [r]
                  }],
                  brightness: [{
                      brightness: [n]
                  }],
                  contrast: [{
                      contrast: [l]
                  }],
                  "drop-shadow": [{
                      "drop-shadow": ["", "none", N, L]
                  }],
                  grayscale: [{
                      grayscale: [u]
                  }],
                  "hue-rotate": [{
                      "hue-rotate": [c]
                  }],
                  invert: [{
                      invert: [d]
                  }],
                  saturate: [{
                      saturate: [b]
                  }],
                  sepia: [{
                      sepia: [E]
                  }],
                  "backdrop-filter": [{
                      "backdrop-filter": ["", "none"]
                  }],
                  "backdrop-blur": [{
                      "backdrop-blur": [r]
                  }],
                  "backdrop-brightness": [{
                      "backdrop-brightness": [n]
                  }],
                  "backdrop-contrast": [{
                      "backdrop-contrast": [l]
                  }],
                  "backdrop-grayscale": [{
                      "backdrop-grayscale": [u]
                  }],
                  "backdrop-hue-rotate": [{
                      "backdrop-hue-rotate": [c]
                  }],
                  "backdrop-invert": [{
                      "backdrop-invert": [d]
                  }],
                  "backdrop-opacity": [{
                      "backdrop-opacity": [v]
                  }],
                  "backdrop-saturate": [{
                      "backdrop-saturate": [b]
                  }],
                  "backdrop-sepia": [{
                      "backdrop-sepia": [E]
                  }],
                  "border-collapse": [{
                      border: ["collapse", "separate"]
                  }],
                  "border-spacing": [{
                      "border-spacing": [o]
                  }],
                  "border-spacing-x": [{
                      "border-spacing-x": [o]
                  }],
                  "border-spacing-y": [{
                      "border-spacing-y": [o]
                  }],
                  "table-layout": [{
                      table: ["auto", "fixed"]
                  }],
                  caption: [{
                      caption: ["top", "bottom"]
                  }],
                  transition: [{
                      transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", L]
                  }],
                  duration: [{
                      duration: X()
                  }],
                  ease: [{
                      ease: ["linear", "in", "out", "in-out", L]
                  }],
                  delay: [{
                      delay: X()
                  }],
                  animate: [{
                      animate: ["none", "spin", "ping", "pulse", "bounce", L]
                  }],
                  transform: [{
                      transform: ["", "gpu", "none"]
                  }],
                  scale: [{
                      scale: [_]
                  }],
                  "scale-x": [{
                      "scale-x": [_]
                  }],
                  "scale-y": [{
                      "scale-y": [_]
                  }],
                  rotate: [{
                      rotate: [I, L]
                  }],
                  "translate-x": [{
                      "translate-x": [S]
                  }],
                  "translate-y": [{
                      "translate-y": [S]
                  }],
                  "skew-x": [{
                      "skew-x": [k]
                  }],
                  "skew-y": [{
                      "skew-y": [k]
                  }],
                  "transform-origin": [{
                      origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", L]
                  }],
                  accent: [{
                      accent: ["auto", e]
                  }],
                  appearance: [{
                      appearance: ["none", "auto"]
                  }],
                  cursor: [{
                      cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", L]
                  }],
                  "caret-color": [{
                      caret: [e]
                  }],
                  "pointer-events": [{
                      "pointer-events": ["none", "auto"]
                  }],
                  resize: [{
                      resize: ["none", "y", "x", ""]
                  }],
                  "scroll-behavior": [{
                      scroll: ["auto", "smooth"]
                  }],
                  "scroll-m": [{
                      "scroll-m": M()
                  }],
                  "scroll-mx": [{
                      "scroll-mx": M()
                  }],
                  "scroll-my": [{
                      "scroll-my": M()
                  }],
                  "scroll-ms": [{
                      "scroll-ms": M()
                  }],
                  "scroll-me": [{
                      "scroll-me": M()
                  }],
                  "scroll-mt": [{
                      "scroll-mt": M()
                  }],
                  "scroll-mr": [{
                      "scroll-mr": M()
                  }],
                  "scroll-mb": [{
                      "scroll-mb": M()
                  }],
                  "scroll-ml": [{
                      "scroll-ml": M()
                  }],
                  "scroll-p": [{
                      "scroll-p": M()
                  }],
                  "scroll-px": [{
                      "scroll-px": M()
                  }],
                  "scroll-py": [{
                      "scroll-py": M()
                  }],
                  "scroll-ps": [{
                      "scroll-ps": M()
                  }],
                  "scroll-pe": [{
                      "scroll-pe": M()
                  }],
                  "scroll-pt": [{
                      "scroll-pt": M()
                  }],
                  "scroll-pr": [{
                      "scroll-pr": M()
                  }],
                  "scroll-pb": [{
                      "scroll-pb": M()
                  }],
                  "scroll-pl": [{
                      "scroll-pl": M()
                  }],
                  "snap-align": [{
                      snap: ["start", "end", "center", "align-none"]
                  }],
                  "snap-stop": [{
                      snap: ["normal", "always"]
                  }],
                  "snap-type": [{
                      snap: ["none", "x", "y", "both"]
                  }],
                  "snap-strictness": [{
                      snap: ["mandatory", "proximity"]
                  }],
                  touch: [{
                      touch: ["auto", "none", "manipulation"]
                  }],
                  "touch-x": [{
                      "touch-pan": ["x", "left", "right"]
                  }],
                  "touch-y": [{
                      "touch-pan": ["y", "up", "down"]
                  }],
                  "touch-pz": ["touch-pinch-zoom"],
                  select: [{
                      select: ["none", "text", "all", "auto"]
                  }],
                  "will-change": [{
                      "will-change": ["auto", "scroll", "contents", "transform", L]
                  }],
                  fill: [{
                      fill: [e, "none"]
                  }],
                  "stroke-w": [{
                      stroke: [C, O, R]
                  }],
                  stroke: [{
                      stroke: [e, "none"]
                  }],
                  sr: ["sr-only", "not-sr-only"],
                  "forced-color-adjust": [{
                      "forced-color-adjust": ["auto", "none"]
                  }]
              },
              conflictingClassGroups: {
                  overflow: ["overflow-x", "overflow-y"],
                  overscroll: ["overscroll-x", "overscroll-y"],
                  inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                  "inset-x": ["right", "left"],
                  "inset-y": ["top", "bottom"],
                  flex: ["basis", "grow", "shrink"],
                  gap: ["gap-x", "gap-y"],
                  p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                  px: ["pr", "pl"],
                  py: ["pt", "pb"],
                  m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                  mx: ["mr", "ml"],
                  my: ["mt", "mb"],
                  size: ["w", "h"],
                  "font-size": ["leading"],
                  "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                  "fvn-ordinal": ["fvn-normal"],
                  "fvn-slashed-zero": ["fvn-normal"],
                  "fvn-figure": ["fvn-normal"],
                  "fvn-spacing": ["fvn-normal"],
                  "fvn-fraction": ["fvn-normal"],
                  "line-clamp": ["display", "overflow"],
                  rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                  "rounded-s": ["rounded-ss", "rounded-es"],
                  "rounded-e": ["rounded-se", "rounded-ee"],
                  "rounded-t": ["rounded-tl", "rounded-tr"],
                  "rounded-r": ["rounded-tr", "rounded-br"],
                  "rounded-b": ["rounded-br", "rounded-bl"],
                  "rounded-l": ["rounded-tl", "rounded-bl"],
                  "border-spacing": ["border-spacing-x", "border-spacing-y"],
                  "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                  "border-w-x": ["border-w-r", "border-w-l"],
                  "border-w-y": ["border-w-t", "border-w-b"],
                  "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                  "border-color-x": ["border-color-r", "border-color-l"],
                  "border-color-y": ["border-color-t", "border-color-b"],
                  "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                  "scroll-mx": ["scroll-mr", "scroll-ml"],
                  "scroll-my": ["scroll-mt", "scroll-mb"],
                  "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                  "scroll-px": ["scroll-pr", "scroll-pl"],
                  "scroll-py": ["scroll-pt", "scroll-pb"],
                  touch: ["touch-x", "touch-y", "touch-pz"],
                  "touch-x": ["touch"],
                  "touch-y": ["touch"],
                  "touch-pz": ["touch"]
              },
              conflictingClassGroupModifiers: {
                  "font-size": ["leading"]
              }
          }
      }
      )
  }
}]);
