globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'http';
import { Server } from 'https';
import destr from 'destr';
import { eventHandler, setHeaders, sendRedirect, defineEventHandler, handleCacheHeaders, createEvent, getRequestHeader, getRequestHeaders, setResponseHeader, createError, createApp, createRouter as createRouter$1, lazyEventHandler, toNodeListener } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { hash } from 'ohash';
import { parseURL, withQuery, joinURL, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage } from 'unstorage';
import defu from 'defu';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routeRules":{"/__nuxt_error":{"cache":false}},"envPrefix":"NUXT_"},"public":{"apiBase":"","device":{"enabled":true,"defaultUserAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36","refreshOnResize":false}},"apiSecret":""};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config$1 = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config$1;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
const timingMiddleware = eventHandler((event) => {
  const start = globalTiming.start();
  const _end = event.res.end;
  event.res.end = function(chunk, encoding, cb) {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!event.res.headersSent) {
      event.res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(event.res, chunk, encoding, cb);
    return this;
  }.bind(event.res);
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(createRouter({ routes: config.nitro.routeRules }));
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(event, routeRules.redirect.to, routeRules.redirect.statusCode);
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(path);
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      if (!pending[key]) {
        entry.value = void 0;
        entry.integrity = void 0;
        entry.mtime = void 0;
        entry.expires = void 0;
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      if (validate(entry)) {
        useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      const url = event.req.originalUrl || event.req.url;
      const friendlyName = decodeURI(parseURL(url).pathname).replace(/[^a-zA-Z0-9]/g, "").substring(0, 16);
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    let _resSendBody;
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      },
      end(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      write(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      writeHead(statusCode, headers2) {
        this.statusCode = statusCode;
        if (headers2) {
          for (const header in headers2) {
            this.setHeader(header, headers2[header]);
          }
        }
        return this;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event) || _resSendBody;
    const headers = event.res.getHeaders();
    headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
    headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["cache-control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.node.res.statusCode = errorObject.statusCode !== 200 && errorObject.statusCode || 500;
  if (errorObject.statusMessage) {
    event.node.res.statusMessage = errorObject.statusMessage;
  }
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    event.node.res.setHeader("Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  if (res.status && res.status !== 200) {
    event.node.res.statusCode = res.status;
  }
  if (res.statusText) {
    event.node.res.statusMessage = res.statusText;
  }
  event.node.res.end(await res.text());
});

const assets = {
  "/.DS_Store": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"2804-ZiHFwvetZqazkY0cw/tPtwsCSAE\"",
    "mtime": "2023-02-27T00:47:47.113Z",
    "size": 10244,
    "path": "../public/.DS_Store"
  },
  "/favicon.png": {
    "type": "image/png",
    "etag": "\"1dbf-s3I2R0kLu9ixED7iZwi0zbwJJeA\"",
    "mtime": "2023-02-27T00:47:47.112Z",
    "size": 7615,
    "path": "../public/favicon.png"
  },
  "/mockServiceWorker.js": {
    "type": "application/javascript",
    "etag": "\"1fc6-4FLWfauiVQGDWxZULJBwNxver/E\"",
    "mtime": "2023-02-27T00:47:47.112Z",
    "size": 8134,
    "path": "../public/mockServiceWorker.js"
  },
  "/nuxt3-logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"3e2-zrywS1vPCL9MD3e4wyCiVOux1NU\"",
    "mtime": "2023-02-27T00:47:47.112Z",
    "size": 994,
    "path": "../public/nuxt3-logo.svg"
  },
  "/_nuxt/1.3d691caf.jpg": {
    "type": "image/jpeg",
    "etag": "\"1a4ca-mlRkyPbBq8B0g2qvxQnpc92+H3I\"",
    "mtime": "2023-02-27T00:47:47.103Z",
    "size": 107722,
    "path": "../public/_nuxt/1.3d691caf.jpg"
  },
  "/_nuxt/1.8956a96f.js": {
    "type": "application/javascript",
    "etag": "\"4a-GTWKzUdbyzTfqVrE298noalma6I\"",
    "mtime": "2023-02-27T00:47:47.103Z",
    "size": 74,
    "path": "../public/_nuxt/1.8956a96f.js"
  },
  "/_nuxt/1.bcb2cf70.jpg": {
    "type": "image/jpeg",
    "etag": "\"1aea0-3svT/8G2wzbM7UeRyPElFmeG4nU\"",
    "mtime": "2023-02-27T00:47:47.103Z",
    "size": 110240,
    "path": "../public/_nuxt/1.bcb2cf70.jpg"
  },
  "/_nuxt/1.c672514a.jpg": {
    "type": "image/jpeg",
    "etag": "\"65792-hv/FKdwAgVwMw/MbA1qNlVcN0EM\"",
    "mtime": "2023-02-27T00:47:47.102Z",
    "size": 415634,
    "path": "../public/_nuxt/1.c672514a.jpg"
  },
  "/_nuxt/2009.5abd421b.js": {
    "type": "application/javascript",
    "etag": "\"4d-To5zLdNgyG4m2XSlVZ3tnXiRpsQ\"",
    "mtime": "2023-02-27T00:47:47.102Z",
    "size": 77,
    "path": "../public/_nuxt/2009.5abd421b.js"
  },
  "/_nuxt/2009.cb07c592.jpg": {
    "type": "image/jpeg",
    "etag": "\"16a75-7hEgN5Uz9MPVZ/UDkzmrLi+tbYE\"",
    "mtime": "2023-02-27T00:47:47.101Z",
    "size": 92789,
    "path": "../public/_nuxt/2009.cb07c592.jpg"
  },
  "/_nuxt/UserProfile.1b0038fe.js": {
    "type": "application/javascript",
    "etag": "\"9fd-pnuJQoqQyfgJWa23J/B5Zqvlz+4\"",
    "mtime": "2023-02-27T00:47:47.101Z",
    "size": 2557,
    "path": "../public/_nuxt/UserProfile.1b0038fe.js"
  },
  "/_nuxt/about.52ad0743.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7f-w2v3ic0V6vAkKHgLiuInmTN8s4g\"",
    "mtime": "2023-02-27T00:47:47.101Z",
    "size": 127,
    "path": "../public/_nuxt/about.52ad0743.css"
  },
  "/_nuxt/about.b0bfc3a6.js": {
    "type": "application/javascript",
    "etag": "\"3b2-9/SZRjtCabmSAiWecMNW3dhCnKg\"",
    "mtime": "2023-02-27T00:47:47.101Z",
    "size": 946,
    "path": "../public/_nuxt/about.b0bfc3a6.js"
  },
  "/_nuxt/aboutlovin.53ff872e.js": {
    "type": "application/javascript",
    "etag": "\"2e2-B2p/C6n4BlykhTHmxhnyPXfAvqA\"",
    "mtime": "2023-02-27T00:47:47.100Z",
    "size": 738,
    "path": "../public/_nuxt/aboutlovin.53ff872e.js"
  },
  "/_nuxt/aboutlovin.c625bf29.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"56-NDca+x7ZzPS46XnJhJ3UzhPouiY\"",
    "mtime": "2023-02-27T00:47:47.100Z",
    "size": 86,
    "path": "../public/_nuxt/aboutlovin.c625bf29.css"
  },
  "/_nuxt/activity.7352f43d.js": {
    "type": "application/javascript",
    "etag": "\"1a6e-QShPEO+QVFWNNWNkXbblCbEBZWg\"",
    "mtime": "2023-02-27T00:47:47.100Z",
    "size": 6766,
    "path": "../public/_nuxt/activity.7352f43d.js"
  },
  "/_nuxt/activity.ca0d52fe.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"59-9lnxX9TJcfcFhcP5O3USoWs9U9s\"",
    "mtime": "2023-02-27T00:47:47.100Z",
    "size": 89,
    "path": "../public/_nuxt/activity.ca0d52fe.css"
  },
  "/_nuxt/admin.b3d9343e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"c6-4Z8v+OYkJFv3AO1nDLXAYhly1+w\"",
    "mtime": "2023-02-27T00:47:47.099Z",
    "size": 198,
    "path": "../public/_nuxt/admin.b3d9343e.css"
  },
  "/_nuxt/admin.db949e01.js": {
    "type": "application/javascript",
    "etag": "\"23f-2ZlmexcvubKC+18kVBqaFrQdvXk\"",
    "mtime": "2023-02-27T00:47:47.099Z",
    "size": 575,
    "path": "../public/_nuxt/admin.db949e01.js"
  },
  "/_nuxt/api-and-store-example.dd64dcb9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2f5d-NIpUTfn7yt/WxzdOrVzCveZdbMs\"",
    "mtime": "2023-02-27T00:47:47.099Z",
    "size": 12125,
    "path": "../public/_nuxt/api-and-store-example.dd64dcb9.css"
  },
  "/_nuxt/api-and-store-example.e0299c5c.js": {
    "type": "application/javascript",
    "etag": "\"1b0f5-w8E0zWqTmyv+TTLKk3EkGC6OD8k\"",
    "mtime": "2023-02-27T00:47:47.098Z",
    "size": 110837,
    "path": "../public/_nuxt/api-and-store-example.e0299c5c.js"
  },
  "/_nuxt/authStore.bb8876e2.js": {
    "type": "application/javascript",
    "etag": "\"190-uIzr7kPBp/YnhyufN2mDEszehNQ\"",
    "mtime": "2023-02-27T00:47:47.098Z",
    "size": 400,
    "path": "../public/_nuxt/authStore.bb8876e2.js"
  },
  "/_nuxt/bid.ddc5fa05.js": {
    "type": "application/javascript",
    "etag": "\"1aad-kZJIiZjJdfsQLI7ZAnVKR9hnrjk\"",
    "mtime": "2023-02-27T00:47:47.098Z",
    "size": 6829,
    "path": "../public/_nuxt/bid.ddc5fa05.js"
  },
  "/_nuxt/bonus-point.5f7a380f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"99-+wSqUkfIYyztPYbOJIspyQzRtTw\"",
    "mtime": "2023-02-27T00:47:47.098Z",
    "size": 153,
    "path": "../public/_nuxt/bonus-point.5f7a380f.css"
  },
  "/_nuxt/bonus-point.747d549b.js": {
    "type": "application/javascript",
    "etag": "\"661-rkCuBRejfHBBBMhuJ6Ga2iS2nT0\"",
    "mtime": "2023-02-27T00:47:47.097Z",
    "size": 1633,
    "path": "../public/_nuxt/bonus-point.747d549b.js"
  },
  "/_nuxt/cart.f28421e9.js": {
    "type": "application/javascript",
    "etag": "\"f9d-l1JxNNs69I26Tz5ZN6KY4IBdpis\"",
    "mtime": "2023-02-27T00:47:47.097Z",
    "size": 3997,
    "path": "../public/_nuxt/cart.f28421e9.js"
  },
  "/_nuxt/cartStore.9a9bfd0e.js": {
    "type": "application/javascript",
    "etag": "\"90-hLzKIJkgzbsvzOcQ8pPkK1NFll8\"",
    "mtime": "2023-02-27T00:47:47.097Z",
    "size": 144,
    "path": "../public/_nuxt/cartStore.9a9bfd0e.js"
  },
  "/_nuxt/checkout.38296f03.js": {
    "type": "application/javascript",
    "etag": "\"1ea5-2dFfOjHc3wsUXcQh+LC18aZCG/M\"",
    "mtime": "2023-02-27T00:47:47.097Z",
    "size": 7845,
    "path": "../public/_nuxt/checkout.38296f03.js"
  },
  "/_nuxt/client-only.535fc844.js": {
    "type": "application/javascript",
    "etag": "\"1da-1kwnJvtf+jgOl6TwXGDvAuFfNe8\"",
    "mtime": "2023-02-27T00:47:47.096Z",
    "size": 474,
    "path": "../public/_nuxt/client-only.535fc844.js"
  },
  "/_nuxt/common.45dab837.js": {
    "type": "application/javascript",
    "etag": "\"53-o1tDSsaNi5fOGsklW2rIApRF06A\"",
    "mtime": "2023-02-27T00:47:47.096Z",
    "size": 83,
    "path": "../public/_nuxt/common.45dab837.js"
  },
  "/_nuxt/composables.1254d040.js": {
    "type": "application/javascript",
    "etag": "\"61-tZYRLA0ZMrjBfHLYJ83RlqJ6+2w\"",
    "mtime": "2023-02-27T00:47:47.096Z",
    "size": 97,
    "path": "../public/_nuxt/composables.1254d040.js"
  },
  "/_nuxt/default.7032877f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"536-HDgXnOFi63wjH7eEuvB7vkwg3XA\"",
    "mtime": "2023-02-27T00:47:47.095Z",
    "size": 1334,
    "path": "../public/_nuxt/default.7032877f.css"
  },
  "/_nuxt/default.9b517bf2.js": {
    "type": "application/javascript",
    "etag": "\"285e-HJoinVHbCm225aLdhn/ZCqiDAa8\"",
    "mtime": "2023-02-27T00:47:47.095Z",
    "size": 10334,
    "path": "../public/_nuxt/default.9b517bf2.js"
  },
  "/_nuxt/entry.8faf5d1d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"536b2-/J7FRnQMqMIG/T5oorcZuf83DL0\"",
    "mtime": "2023-02-27T00:47:47.094Z",
    "size": 341682,
    "path": "../public/_nuxt/entry.8faf5d1d.css"
  },
  "/_nuxt/entry.c15e215c.js": {
    "type": "application/javascript",
    "etag": "\"1b0c43-ui7H0ECySjUXYQqGlIPjVXSprwc\"",
    "mtime": "2023-02-27T00:47:47.094Z",
    "size": 1772611,
    "path": "../public/_nuxt/entry.c15e215c.js"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2023-02-27T00:47:47.092Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-404.7b6164d6.js": {
    "type": "application/javascript",
    "etag": "\"8fb-ty6XoV1EpeyFsXlwfNJv8cNmrEw\"",
    "mtime": "2023-02-27T00:47:47.092Z",
    "size": 2299,
    "path": "../public/_nuxt/error-404.7b6164d6.js"
  },
  "/_nuxt/error-500.874e9a8a.js": {
    "type": "application/javascript",
    "etag": "\"7a3-6XXfZjQfOqLQjM3C1QeAd5XcI1g\"",
    "mtime": "2023-02-27T00:47:47.091Z",
    "size": 1955,
    "path": "../public/_nuxt/error-500.874e9a8a.js"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2023-02-27T00:47:47.091Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/error-component.7fbbca94.js": {
    "type": "application/javascript",
    "etag": "\"544-0/UxgAhePQOslHLyYi6ChKtfysU\"",
    "mtime": "2023-02-27T00:47:47.091Z",
    "size": 1348,
    "path": "../public/_nuxt/error-component.7fbbca94.js"
  },
  "/_nuxt/fa-brands-400.2cd4cf89.ttf": {
    "type": "font/ttf",
    "etag": "\"2c410-+ldF1CHA/JCShia+mOn4z3WAsyc\"",
    "mtime": "2023-02-27T00:47:47.091Z",
    "size": 181264,
    "path": "../public/_nuxt/fa-brands-400.2cd4cf89.ttf"
  },
  "/_nuxt/fa-brands-400.967394d1.woff2": {
    "type": "font/woff2",
    "etag": "\"19a98-4hmvHju8Ihk1nT0JFuJjsnnEq/0\"",
    "mtime": "2023-02-27T00:47:47.090Z",
    "size": 105112,
    "path": "../public/_nuxt/fa-brands-400.967394d1.woff2"
  },
  "/_nuxt/fa-regular-400.52ec4d83.woff2": {
    "type": "font/woff2",
    "etag": "\"5ddc-96Cby9mW/WNARdTnm2UEyUVzBoY\"",
    "mtime": "2023-02-27T00:47:47.090Z",
    "size": 24028,
    "path": "../public/_nuxt/fa-regular-400.52ec4d83.woff2"
  },
  "/_nuxt/fa-regular-400.e2d44fc8.ttf": {
    "type": "font/ttf",
    "etag": "\"eb4c-mybXRaHmmyPXG36jbV3hIJyZeQE\"",
    "mtime": "2023-02-27T00:47:47.089Z",
    "size": 60236,
    "path": "../public/_nuxt/fa-regular-400.e2d44fc8.ttf"
  },
  "/_nuxt/fa-solid-900.52bbd916.woff2": {
    "type": "font/woff2",
    "etag": "\"25cd8-GXkSjouhUX2F9eTuUFq/SGxRVXw\"",
    "mtime": "2023-02-27T00:47:47.089Z",
    "size": 154840,
    "path": "../public/_nuxt/fa-solid-900.52bbd916.woff2"
  },
  "/_nuxt/fa-solid-900.5808ca8f.ttf": {
    "type": "font/ttf",
    "etag": "\"5f33c-4zOUAO9iFM+gd9AD2u0r+mWeKVY\"",
    "mtime": "2023-02-27T00:47:47.089Z",
    "size": 389948,
    "path": "../public/_nuxt/fa-solid-900.5808ca8f.ttf"
  },
  "/_nuxt/fa-v4compatibility.58ccbdf2.ttf": {
    "type": "font/ttf",
    "etag": "\"2764-P8FcgVT4vS170d/lWuWrHDPl5A8\"",
    "mtime": "2023-02-27T00:47:47.088Z",
    "size": 10084,
    "path": "../public/_nuxt/fa-v4compatibility.58ccbdf2.ttf"
  },
  "/_nuxt/fa-v4compatibility.b8f0081f.woff2": {
    "type": "font/woff2",
    "etag": "\"12a8-N6sqaggQ1abBCjVf4devAEK9aio\"",
    "mtime": "2023-02-27T00:47:47.088Z",
    "size": 4776,
    "path": "../public/_nuxt/fa-v4compatibility.b8f0081f.woff2"
  },
  "/_nuxt/faq.5ddfc8fa.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7f-u5gVbWpBtGp1bxecebbUf/eJ4sw\"",
    "mtime": "2023-02-27T00:47:47.087Z",
    "size": 127,
    "path": "../public/_nuxt/faq.5ddfc8fa.css"
  },
  "/_nuxt/faq.ec8c087a.js": {
    "type": "application/javascript",
    "etag": "\"3b0-v+rM5d7BsyW5ZMFrvoRCXItXEsE\"",
    "mtime": "2023-02-27T00:47:47.087Z",
    "size": 944,
    "path": "../public/_nuxt/faq.ec8c087a.js"
  },
  "/_nuxt/favorite.2dfa2d6e.js": {
    "type": "application/javascript",
    "etag": "\"115a-MVzRgl+S/TYfkmmaz5CsZeWQSkM\"",
    "mtime": "2023-02-27T00:47:47.087Z",
    "size": 4442,
    "path": "../public/_nuxt/favorite.2dfa2d6e.js"
  },
  "/_nuxt/favorite.884f45bd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"95-SBniRb5uw0dnNaje2PV/Rt7hbRI\"",
    "mtime": "2023-02-27T00:47:47.087Z",
    "size": 149,
    "path": "../public/_nuxt/favorite.884f45bd.css"
  },
  "/_nuxt/footer_bg.dbde9adb.jpg": {
    "type": "image/jpeg",
    "etag": "\"c11f-vjap9J1MStBQB+glBu5OzUIyIJ4\"",
    "mtime": "2023-02-27T00:47:47.086Z",
    "size": 49439,
    "path": "../public/_nuxt/footer_bg.dbde9adb.jpg"
  },
  "/_nuxt/index.21fcdc68.js": {
    "type": "application/javascript",
    "etag": "\"fd1-kMbtxIO2Pmvqa68wE5CpFds5iBY\"",
    "mtime": "2023-02-27T00:47:47.086Z",
    "size": 4049,
    "path": "../public/_nuxt/index.21fcdc68.js"
  },
  "/_nuxt/index.655592f5.js": {
    "type": "application/javascript",
    "etag": "\"2d59-Llt33opNnurXm6mgx1xDwNdHGXU\"",
    "mtime": "2023-02-27T00:47:47.086Z",
    "size": 11609,
    "path": "../public/_nuxt/index.655592f5.js"
  },
  "/_nuxt/index.7d410600.js": {
    "type": "application/javascript",
    "etag": "\"f3f-OJGXpHi9TtB1XhbrNpuX+mDV9+0\"",
    "mtime": "2023-02-27T00:47:47.086Z",
    "size": 3903,
    "path": "../public/_nuxt/index.7d410600.js"
  },
  "/_nuxt/index.9bb57d21.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6e2-BUBmta8lAPSK7n5cIQZOaAmisuc\"",
    "mtime": "2023-02-27T00:47:47.085Z",
    "size": 1762,
    "path": "../public/_nuxt/index.9bb57d21.css"
  },
  "/_nuxt/index.b40b87b9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"83-cdqjHkadlakNR+zZyyvUA9PqwCY\"",
    "mtime": "2023-02-27T00:47:47.085Z",
    "size": 131,
    "path": "../public/_nuxt/index.b40b87b9.css"
  },
  "/_nuxt/index.c8e2c2b8.js": {
    "type": "application/javascript",
    "etag": "\"6841f-6yKjuq89rPwRJpW73ESkEVZCtTk\"",
    "mtime": "2023-02-27T00:47:47.085Z",
    "size": 427039,
    "path": "../public/_nuxt/index.c8e2c2b8.js"
  },
  "/_nuxt/index.e372fe72.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"220-bVTU7IXHt8do31EeFWSKQQgtCPQ\"",
    "mtime": "2023-02-27T00:47:47.084Z",
    "size": 544,
    "path": "../public/_nuxt/index.e372fe72.css"
  },
  "/_nuxt/login.44517fbd.js": {
    "type": "application/javascript",
    "etag": "\"bd0-0wtofRgD7GsqvmFi8si3sFpMGwc\"",
    "mtime": "2023-02-27T00:47:47.084Z",
    "size": 3024,
    "path": "../public/_nuxt/login.44517fbd.js"
  },
  "/_nuxt/login.b9775fd0.js": {
    "type": "application/javascript",
    "etag": "\"838-RbT12DvxcXYSuLfkNDbqjaj0ITE\"",
    "mtime": "2023-02-27T00:47:47.083Z",
    "size": 2104,
    "path": "../public/_nuxt/login.b9775fd0.js"
  },
  "/_nuxt/logo.f02090fc.png": {
    "type": "image/png",
    "etag": "\"14c5-q4JfS/XRkEeWZ4Mp8C14M5GiOE0\"",
    "mtime": "2023-02-27T00:47:47.083Z",
    "size": 5317,
    "path": "../public/_nuxt/logo.f02090fc.png"
  },
  "/_nuxt/pageStatusStore.b45bbdc6.js": {
    "type": "application/javascript",
    "etag": "\"18b-mOwMiCTlTuDoJwG8h3lG3KCDGd4\"",
    "mtime": "2023-02-27T00:47:47.083Z",
    "size": 395,
    "path": "../public/_nuxt/pageStatusStore.b45bbdc6.js"
  },
  "/_nuxt/privacy.9f389021.js": {
    "type": "application/javascript",
    "etag": "\"3c0-2EnIn0RsaRRdGPhfpbUrbsZcRvU\"",
    "mtime": "2023-02-27T00:47:47.083Z",
    "size": 960,
    "path": "../public/_nuxt/privacy.9f389021.js"
  },
  "/_nuxt/privacy.c877d874.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7f-PUwFhEpkgCLkKumrXQ5ckv/0QXk\"",
    "mtime": "2023-02-27T00:47:47.082Z",
    "size": 127,
    "path": "../public/_nuxt/privacy.c877d874.css"
  },
  "/_nuxt/product.56c22fd5.js": {
    "type": "application/javascript",
    "etag": "\"14c7-WRJrclGI6a+uLf9Ek5BmzzQ0lZw\"",
    "mtime": "2023-02-27T00:47:47.082Z",
    "size": 5319,
    "path": "../public/_nuxt/product.56c22fd5.js"
  },
  "/_nuxt/product.78311068.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"15e-cfRiEkd8vvSJ1HH+iP6hKIGDmWQ\"",
    "mtime": "2023-02-27T00:47:47.082Z",
    "size": 350,
    "path": "../public/_nuxt/product.78311068.css"
  },
  "/_nuxt/register.be44f0c9.js": {
    "type": "application/javascript",
    "etag": "\"14c9-jSc+YtWg1j3K0rTHTMUiOXVXc1o\"",
    "mtime": "2023-02-27T00:47:47.081Z",
    "size": 5321,
    "path": "../public/_nuxt/register.be44f0c9.js"
  },
  "/_nuxt/requestURL.5272b7f6.js": {
    "type": "application/javascript",
    "etag": "\"30a-KPHq+xk3PeeD0Jwybk6lj8Q+bDg\"",
    "mtime": "2023-02-27T00:47:47.081Z",
    "size": 778,
    "path": "../public/_nuxt/requestURL.5272b7f6.js"
  },
  "/_nuxt/return-help.e201e118.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7f-9sqPtSFqX9Q6NVykaNl4t+6jj2M\"",
    "mtime": "2023-02-27T00:47:47.081Z",
    "size": 127,
    "path": "../public/_nuxt/return-help.e201e118.css"
  },
  "/_nuxt/return-help.e3b6bcc6.js": {
    "type": "application/javascript",
    "etag": "\"3c4-gBdNU3zJSAB9H+p0UpGurWHipdo\"",
    "mtime": "2023-02-27T00:47:47.081Z",
    "size": 964,
    "path": "../public/_nuxt/return-help.e3b6bcc6.js"
  },
  "/_nuxt/share_ad.31ea5396.jpg": {
    "type": "image/jpeg",
    "etag": "\"5c328-7SE9WGpmewcAyeUjDIaQ1UlhTYU\"",
    "mtime": "2023-02-27T00:47:47.080Z",
    "size": 377640,
    "path": "../public/_nuxt/share_ad.31ea5396.jpg"
  },
  "/_nuxt/shop.208c7764.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1b0-eqnTldDT+GKvmrbRLt27cxEtwk0\"",
    "mtime": "2023-02-27T00:47:47.080Z",
    "size": 432,
    "path": "../public/_nuxt/shop.208c7764.css"
  },
  "/_nuxt/shop.6c36c26e.js": {
    "type": "application/javascript",
    "etag": "\"fbe-L1BX5r8adlvLh9B0WHeAJ06bbVg\"",
    "mtime": "2023-02-27T00:47:47.079Z",
    "size": 4030,
    "path": "../public/_nuxt/shop.6c36c26e.js"
  },
  "/_nuxt/swiper-vue.c8055770.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3d25-bth6D78+Gf02QtW+pMUvNE/x1CI\"",
    "mtime": "2023-02-27T00:47:47.079Z",
    "size": 15653,
    "path": "../public/_nuxt/swiper-vue.c8055770.css"
  },
  "/_nuxt/swiper-vue.db7c70f4.js": {
    "type": "application/javascript",
    "etag": "\"29832-ddWu5OWhaEH/F6ANRJlieJliFWU\"",
    "mtime": "2023-02-27T00:47:47.079Z",
    "size": 170034,
    "path": "../public/_nuxt/swiper-vue.db7c70f4.js"
  },
  "/_nuxt/terms.3ad73bf2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7f-i4PFeFMUMAZkWd4Tlit3WSi+S8U\"",
    "mtime": "2023-02-27T00:47:47.079Z",
    "size": 127,
    "path": "../public/_nuxt/terms.3ad73bf2.css"
  },
  "/_nuxt/terms.a83131f1.js": {
    "type": "application/javascript",
    "etag": "\"3b2-+JtL7dj3y/Is6SG2ERC5m/jd9f4\"",
    "mtime": "2023-02-27T00:47:47.078Z",
    "size": 946,
    "path": "../public/_nuxt/terms.a83131f1.js"
  },
  "/_nuxt/wo_treature.666886f2.jpg": {
    "type": "image/jpeg",
    "etag": "\"2a937-QdOewcGrXOz502xNbC+nXi3/kNw\"",
    "mtime": "2023-02-27T00:47:47.078Z",
    "size": 174391,
    "path": "../public/_nuxt/wo_treature.666886f2.jpg"
  },
  "/_nuxt/wobao.ab2e5981.js": {
    "type": "application/javascript",
    "etag": "\"13bb-XwtAWx0scaXMP+oau47jjhTCr6o\"",
    "mtime": "2023-02-27T00:47:47.078Z",
    "size": 5051,
    "path": "../public/_nuxt/wobao.ab2e5981.js"
  },
  "/products/p1.jpg": {
    "type": "image/jpeg",
    "etag": "\"b892-NxvTUlcbxPVQCHi+ovIhXMo0UKs\"",
    "mtime": "2023-02-27T00:47:47.112Z",
    "size": 47250,
    "path": "../public/products/p1.jpg"
  },
  "/products/p2.jpg": {
    "type": "image/jpeg",
    "etag": "\"13101-VDIk1g/BrGy5OSAdBmM8sRksMJ0\"",
    "mtime": "2023-02-27T00:47:47.111Z",
    "size": 78081,
    "path": "../public/products/p2.jpg"
  },
  "/products/p4.jpg": {
    "type": "image/jpeg",
    "etag": "\"11ffe-ErNoEzZV+VjO90r6l6F+TcRI42o\"",
    "mtime": "2023-02-27T00:47:47.111Z",
    "size": 73726,
    "path": "../public/products/p4.jpg"
  },
  "/products/p5.jpg": {
    "type": "image/jpeg",
    "etag": "\"b8d3-xbT46KeiHcy0u5QlYlbnWBhzm1k\"",
    "mtime": "2023-02-27T00:47:47.110Z",
    "size": 47315,
    "path": "../public/products/p5.jpg"
  },
  "/products/p6.jpg": {
    "type": "image/jpeg",
    "etag": "\"1368f-aoLSapnhqYsxmC5sJJvQqz4y4tQ\"",
    "mtime": "2023-02-27T00:47:47.110Z",
    "size": 79503,
    "path": "../public/products/p6.jpg"
  },
  "/script/script.js": {
    "type": "application/javascript",
    "etag": "\"1829-ACnG07B5O7rGH9AuOH1FAfsAQPQ\"",
    "mtime": "2023-02-27T00:47:47.107Z",
    "size": 6185,
    "path": "../public/script/script.js"
  },
  "/script/slick/slick.js": {
    "type": "application/javascript",
    "etag": "\"15b7b-CX9qG08RXptuvvpw122DBzO8ybo\"",
    "mtime": "2023-02-27T00:47:47.106Z",
    "size": 88955,
    "path": "../public/script/slick/slick.js"
  },
  "/script/slick/slick.min.js": {
    "type": "application/javascript",
    "etag": "\"ef82-3MkWFafkqejIEjMCxZl8EGciYHE\"",
    "mtime": "2023-02-27T00:47:47.106Z",
    "size": 61314,
    "path": "../public/script/slick/slick.min.js"
  },
  "/script/bootstrap/js/bootstrap.js": {
    "type": "application/javascript",
    "etag": "\"1104b-O5ZaNqawiFStbt3t+FxTGf05K0o\"",
    "mtime": "2023-02-27T00:47:47.110Z",
    "size": 69707,
    "path": "../public/script/bootstrap/js/bootstrap.js"
  },
  "/script/bootstrap/js/bootstrap.min.js": {
    "type": "application/javascript",
    "etag": "\"90b5-QwpEPXSDD+m+Ju/KQx9EjBs3QPk\"",
    "mtime": "2023-02-27T00:47:47.109Z",
    "size": 37045,
    "path": "../public/script/bootstrap/js/bootstrap.min.js"
  },
  "/script/bootstrap-touchspin/demo/demo.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1c44-xXcazkR0AUAU+twFD7pWuxPVtEU\"",
    "mtime": "2023-02-27T00:47:47.109Z",
    "size": 7236,
    "path": "../public/script/bootstrap-touchspin/demo/demo.css"
  },
  "/script/bootstrap-touchspin/demo/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"80dc-V4/bBRsusnw1PqCiXeAmkfBSUW8\"",
    "mtime": "2023-02-27T00:47:47.109Z",
    "size": 32988,
    "path": "../public/script/bootstrap-touchspin/demo/favicon.ico"
  },
  "/script/bootstrap-touchspin/demo/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"623d-ZRs41qd44/0EHOLURZcHCK9q7bc\"",
    "mtime": "2023-02-27T00:47:47.108Z",
    "size": 25149,
    "path": "../public/script/bootstrap-touchspin/demo/index.html"
  },
  "/script/bootstrap-touchspin/src/jquery.bootstrap-touchspin.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"304-K1mhvGZCEkb2QsG4ZqT+oHIQB1s\"",
    "mtime": "2023-02-27T00:47:47.108Z",
    "size": 772,
    "path": "../public/script/bootstrap-touchspin/src/jquery.bootstrap-touchspin.css"
  },
  "/script/bootstrap-touchspin/src/jquery.bootstrap-touchspin.js": {
    "type": "application/javascript",
    "etag": "\"4dc5-t2AXOLgf1ub3LI7EU2GCSYwmwaA\"",
    "mtime": "2023-02-27T00:47:47.107Z",
    "size": 19909,
    "path": "../public/script/bootstrap-touchspin/src/jquery.bootstrap-touchspin.js"
  },
  "/script/syo-timer/build/jquery.syotimer(1).js": {
    "type": "application/javascript",
    "etag": "\"26e4-PKc5lzRV0yAQ173y4F8HqxD3niw\"",
    "mtime": "2023-02-27T00:47:47.105Z",
    "size": 9956,
    "path": "../public/script/syo-timer/build/jquery.syotimer(1).js"
  },
  "/script/syo-timer/build/jquery.syotimer.js": {
    "type": "application/javascript",
    "etag": "\"26e4-PKc5lzRV0yAQ173y4F8HqxD3niw\"",
    "mtime": "2023-02-27T00:47:47.105Z",
    "size": 9956,
    "path": "../public/script/syo-timer/build/jquery.syotimer.js"
  },
  "/script/syo-timer/build/jquery.syotimer.min(1).js": {
    "type": "application/javascript",
    "etag": "\"15af-ipVy5+rLygkexJjap72SkqUb3Bw\"",
    "mtime": "2023-02-27T00:47:47.105Z",
    "size": 5551,
    "path": "../public/script/syo-timer/build/jquery.syotimer.min(1).js"
  },
  "/script/syo-timer/build/jquery.syotimer.min.js": {
    "type": "application/javascript",
    "etag": "\"15af-ipVy5+rLygkexJjap72SkqUb3Bw\"",
    "mtime": "2023-02-27T00:47:47.104Z",
    "size": 5551,
    "path": "../public/script/syo-timer/build/jquery.syotimer.min.js"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = [];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  const encodingHeader = String(event.req.headers["accept-encoding"] || "");
  const encodings = encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort().concat([""]);
  if (encodings.length > 1) {
    event.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end();
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end();
      return;
    }
  }
  if (asset.type && !event.res.getHeader("Content-Type")) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.res.getHeader("ETag")) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.res.getHeader("Last-Modified")) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  if (asset.encoding && !event.res.getHeader("Content-Encoding")) {
    event.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size && !event.res.getHeader("Content-Length")) {
    event.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_hyw5vc = () => import('../handlers/renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_hyw5vc, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_hyw5vc, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(h.route.replace(/:\w+|\*\*/g, "_"));
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection] " + err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException] " + err));
}
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
