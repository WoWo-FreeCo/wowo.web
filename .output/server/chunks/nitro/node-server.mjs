globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'http';
import { Server } from 'https';
import destr from 'destr';
import { eventHandler, setHeaders, sendRedirect, defineEventHandler, handleCacheHeaders, createEvent, getRequestHeader, getRequestHeaders, setResponseHeader, createError, readBody, setCookie, createApp, createRouter as createRouter$1, lazyEventHandler, toNodeListener } from 'h3';
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

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routeRules":{"/__nuxt_error":{"cache":false}},"envPrefix":"NUXT_"},"public":{"baseUrl":"https://wo.wowo.tw","apiBase":"https://api.wowo.tw","googleClientId":"","googleSecret":"","device":{"enabled":true,"defaultUserAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36","refreshOnResize":false}},"apiSecret":""};
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
    "mtime": "2023-03-15T16:34:06.893Z",
    "size": 10244,
    "path": "../public/.DS_Store"
  },
  "/favicon.png": {
    "type": "image/png",
    "etag": "\"1dbf-s3I2R0kLu9ixED7iZwi0zbwJJeA\"",
    "mtime": "2023-03-15T16:34:06.893Z",
    "size": 7615,
    "path": "../public/favicon.png"
  },
  "/mockServiceWorker.js": {
    "type": "application/javascript",
    "etag": "\"1fc6-4FLWfauiVQGDWxZULJBwNxver/E\"",
    "mtime": "2023-03-15T16:34:06.892Z",
    "size": 8134,
    "path": "../public/mockServiceWorker.js"
  },
  "/nuxt3-logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"3e2-zrywS1vPCL9MD3e4wyCiVOux1NU\"",
    "mtime": "2023-03-15T16:34:06.892Z",
    "size": 994,
    "path": "../public/nuxt3-logo.svg"
  },
  "/_nuxt/1.3d691caf.jpg": {
    "type": "image/jpeg",
    "etag": "\"1a4ca-mlRkyPbBq8B0g2qvxQnpc92+H3I\"",
    "mtime": "2023-03-15T16:34:06.884Z",
    "size": 107722,
    "path": "../public/_nuxt/1.3d691caf.jpg"
  },
  "/_nuxt/1.8956a96f.js": {
    "type": "application/javascript",
    "etag": "\"4a-GTWKzUdbyzTfqVrE298noalma6I\"",
    "mtime": "2023-03-15T16:34:06.884Z",
    "size": 74,
    "path": "../public/_nuxt/1.8956a96f.js"
  },
  "/_nuxt/1.c672514a.jpg": {
    "type": "image/jpeg",
    "etag": "\"65792-hv/FKdwAgVwMw/MbA1qNlVcN0EM\"",
    "mtime": "2023-03-15T16:34:06.884Z",
    "size": 415634,
    "path": "../public/_nuxt/1.c672514a.jpg"
  },
  "/_nuxt/2009.5abd421b.js": {
    "type": "application/javascript",
    "etag": "\"4d-To5zLdNgyG4m2XSlVZ3tnXiRpsQ\"",
    "mtime": "2023-03-15T16:34:06.883Z",
    "size": 77,
    "path": "../public/_nuxt/2009.5abd421b.js"
  },
  "/_nuxt/2009.cb07c592.jpg": {
    "type": "image/jpeg",
    "etag": "\"16a75-7hEgN5Uz9MPVZ/UDkzmrLi+tbYE\"",
    "mtime": "2023-03-15T16:34:06.883Z",
    "size": 92789,
    "path": "../public/_nuxt/2009.cb07c592.jpg"
  },
  "/_nuxt/ProfileSidebar.61c3c95c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"ac-aZ3wnvLHeoDl5uzg0bN55hPCnJo\"",
    "mtime": "2023-03-15T16:34:06.883Z",
    "size": 172,
    "path": "../public/_nuxt/ProfileSidebar.61c3c95c.css"
  },
  "/_nuxt/ProfileSidebar.eee1f50d.js": {
    "type": "application/javascript",
    "etag": "\"10a5-qkA2rT8UmNZ37kIP909pW49q3kI\"",
    "mtime": "2023-03-15T16:34:06.883Z",
    "size": 4261,
    "path": "../public/_nuxt/ProfileSidebar.eee1f50d.js"
  },
  "/_nuxt/about.717decd0.js": {
    "type": "application/javascript",
    "etag": "\"3bc-yKZiIG40eJ1uDYXG36eNEMe8Sd8\"",
    "mtime": "2023-03-15T16:34:06.883Z",
    "size": 956,
    "path": "../public/_nuxt/about.717decd0.js"
  },
  "/_nuxt/about.acda05d1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7f-OwtlMu0vmOBmqrqLJALWpditMmw\"",
    "mtime": "2023-03-15T16:34:06.882Z",
    "size": 127,
    "path": "../public/_nuxt/about.acda05d1.css"
  },
  "/_nuxt/aboutlovin.61955868.js": {
    "type": "application/javascript",
    "etag": "\"17f-Aw+QhNLKehACRNtfdXYvDkPNyxg\"",
    "mtime": "2023-03-15T16:34:06.882Z",
    "size": 383,
    "path": "../public/_nuxt/aboutlovin.61955868.js"
  },
  "/_nuxt/aboutlovin.db61f6f7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"56-4t+kMYWRd0VqhYydQYoMd41LqGE\"",
    "mtime": "2023-03-15T16:34:06.882Z",
    "size": 86,
    "path": "../public/_nuxt/aboutlovin.db61f6f7.css"
  },
  "/_nuxt/activity.5c1d44b0.js": {
    "type": "application/javascript",
    "etag": "\"1a60-qQC8wuREBIxPew06fLsVQCJTCI8\"",
    "mtime": "2023-03-15T16:34:06.882Z",
    "size": 6752,
    "path": "../public/_nuxt/activity.5c1d44b0.js"
  },
  "/_nuxt/activity.cf145749.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"59-hmMmg2TJbXZHuHZ8LalyWXbLkxo\"",
    "mtime": "2023-03-15T16:34:06.882Z",
    "size": 89,
    "path": "../public/_nuxt/activity.cf145749.css"
  },
  "/_nuxt/admin.1cbe909e.js": {
    "type": "application/javascript",
    "etag": "\"23d-SWbbKkUMei9qqFSqjYcOK3wu0M0\"",
    "mtime": "2023-03-15T16:34:06.882Z",
    "size": 573,
    "path": "../public/_nuxt/admin.1cbe909e.js"
  },
  "/_nuxt/admin.b3d9343e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"c6-4Z8v+OYkJFv3AO1nDLXAYhly1+w\"",
    "mtime": "2023-03-15T16:34:06.881Z",
    "size": 198,
    "path": "../public/_nuxt/admin.b3d9343e.css"
  },
  "/_nuxt/api-and-store-example.7c8fcc2a.js": {
    "type": "application/javascript",
    "etag": "\"1b0f3-TjrQPRz2VTGsIfnGvoRw3nlfMrU\"",
    "mtime": "2023-03-15T16:34:06.880Z",
    "size": 110835,
    "path": "../public/_nuxt/api-and-store-example.7c8fcc2a.js"
  },
  "/_nuxt/api-and-store-example.dd64dcb9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2f5d-NIpUTfn7yt/WxzdOrVzCveZdbMs\"",
    "mtime": "2023-03-15T16:34:06.880Z",
    "size": 12125,
    "path": "../public/_nuxt/api-and-store-example.dd64dcb9.css"
  },
  "/_nuxt/bid.40b62a87.js": {
    "type": "application/javascript",
    "etag": "\"1aac-QFbBQNREJs1b0BOWvP+wfZxER74\"",
    "mtime": "2023-03-15T16:34:06.880Z",
    "size": 6828,
    "path": "../public/_nuxt/bid.40b62a87.js"
  },
  "/_nuxt/bonus-point.069e9381.js": {
    "type": "application/javascript",
    "etag": "\"b5a-CQouX7p97ensfT98DU2LFVQtocE\"",
    "mtime": "2023-03-15T16:34:06.879Z",
    "size": 2906,
    "path": "../public/_nuxt/bonus-point.069e9381.js"
  },
  "/_nuxt/bonus-point.3d354f20.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5ef-KuriBodQeAHrMumRTSEdP8s4D7c\"",
    "mtime": "2023-03-15T16:34:06.879Z",
    "size": 1519,
    "path": "../public/_nuxt/bonus-point.3d354f20.css"
  },
  "/_nuxt/bonus-record.41e967d7.js": {
    "type": "application/javascript",
    "etag": "\"6e1-6O3LaD3mvabvzbjyJkw10pkXoz0\"",
    "mtime": "2023-03-15T16:34:06.879Z",
    "size": 1761,
    "path": "../public/_nuxt/bonus-record.41e967d7.js"
  },
  "/_nuxt/cart.03cf13e7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3ed-0JYxlOyL80lVmh6dlIlSp6CWwOg\"",
    "mtime": "2023-03-15T16:34:06.879Z",
    "size": 1005,
    "path": "../public/_nuxt/cart.03cf13e7.css"
  },
  "/_nuxt/cart.1adaddf4.js": {
    "type": "application/javascript",
    "etag": "\"137f-dKyjPwOQdqio1oe6m3HY57e2cYw\"",
    "mtime": "2023-03-15T16:34:06.879Z",
    "size": 4991,
    "path": "../public/_nuxt/cart.1adaddf4.js"
  },
  "/_nuxt/checkout.1bb0ad9a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1c3-7x5nOXP2vPvrz+m1YBoFoWmYApA\"",
    "mtime": "2023-03-15T16:34:06.879Z",
    "size": 451,
    "path": "../public/_nuxt/checkout.1bb0ad9a.css"
  },
  "/_nuxt/checkout.cf3e2e8e.js": {
    "type": "application/javascript",
    "etag": "\"45f3-QdI90451NVyrzhfOkio4ZMyA0pI\"",
    "mtime": "2023-03-15T16:34:06.878Z",
    "size": 17907,
    "path": "../public/_nuxt/checkout.cf3e2e8e.js"
  },
  "/_nuxt/client-only.50bb6e23.js": {
    "type": "application/javascript",
    "etag": "\"1d9-vA1WExdjxDNkGI+jivFpap6aex4\"",
    "mtime": "2023-03-15T16:34:06.878Z",
    "size": 473,
    "path": "../public/_nuxt/client-only.50bb6e23.js"
  },
  "/_nuxt/composables.e8b6dbea.js": {
    "type": "application/javascript",
    "etag": "\"61-kGCC35z0QUzfE9R+TBzv1fzWCBg\"",
    "mtime": "2023-03-15T16:34:06.878Z",
    "size": 97,
    "path": "../public/_nuxt/composables.e8b6dbea.js"
  },
  "/_nuxt/contact.b787fd65.js": {
    "type": "application/javascript",
    "etag": "\"30c-bsKno/73HZYtXL1QJIVjyGjNrY4\"",
    "mtime": "2023-03-15T16:34:06.878Z",
    "size": 780,
    "path": "../public/_nuxt/contact.b787fd65.js"
  },
  "/_nuxt/contact.da4a15fd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"a5-NhIvxio0VPdp1JLRPCSIxl14aw8\"",
    "mtime": "2023-03-15T16:34:06.878Z",
    "size": 165,
    "path": "../public/_nuxt/contact.da4a15fd.css"
  },
  "/_nuxt/cvs_callback.e8aad19c.js": {
    "type": "application/javascript",
    "etag": "\"ab0-8yu4KNj20DhaionCuVcVcQZ7ZM0\"",
    "mtime": "2023-03-15T16:34:06.877Z",
    "size": 2736,
    "path": "../public/_nuxt/cvs_callback.e8aad19c.js"
  },
  "/_nuxt/dayjs.min.1d5c1d61.js": {
    "type": "application/javascript",
    "etag": "\"19be-aotagjyjmgX7msXE/fPeO4mqUr0\"",
    "mtime": "2023-03-15T16:34:06.877Z",
    "size": 6590,
    "path": "../public/_nuxt/dayjs.min.1d5c1d61.js"
  },
  "/_nuxt/default-avatar.145ff9f9.png": {
    "type": "image/png",
    "etag": "\"c851c-pGVLUUzQKR0Ee3QHQtvR7FsZmO4\"",
    "mtime": "2023-03-15T16:34:06.877Z",
    "size": 820508,
    "path": "../public/_nuxt/default-avatar.145ff9f9.png"
  },
  "/_nuxt/default.a49f1041.js": {
    "type": "application/javascript",
    "etag": "\"527e-1/+c2S1pAK0Z4Og9V2pi4RYFwlA\"",
    "mtime": "2023-03-15T16:34:06.876Z",
    "size": 21118,
    "path": "../public/_nuxt/default.a49f1041.js"
  },
  "/_nuxt/default.e45fc758.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"639-93JDugm2zbTZbJj4tod15ajxEM8\"",
    "mtime": "2023-03-15T16:34:06.876Z",
    "size": 1593,
    "path": "../public/_nuxt/default.e45fc758.css"
  },
  "/_nuxt/detail.57f08844.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"9c-yxCGrYmf/BSV+IRDAbbTv93fIgI\"",
    "mtime": "2023-03-15T16:34:06.876Z",
    "size": 156,
    "path": "../public/_nuxt/detail.57f08844.css"
  },
  "/_nuxt/detail.d6c06724.js": {
    "type": "application/javascript",
    "etag": "\"18ee-8dOG2jsRZXeUM8CAhcTrlBsFvsA\"",
    "mtime": "2023-03-15T16:34:06.876Z",
    "size": 6382,
    "path": "../public/_nuxt/detail.d6c06724.js"
  },
  "/_nuxt/entry.0cbc246d.js": {
    "type": "application/javascript",
    "etag": "\"1b2892-iWlJcsCPULUvP+i/wvaktc3N608\"",
    "mtime": "2023-03-15T16:34:06.875Z",
    "size": 1779858,
    "path": "../public/_nuxt/entry.0cbc246d.js"
  },
  "/_nuxt/entry.49fc20fd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"53af6-IUCK3hrnRJvJwOjtjoD9N3k54ug\"",
    "mtime": "2023-03-15T16:34:06.874Z",
    "size": 342774,
    "path": "../public/_nuxt/entry.49fc20fd.css"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2023-03-15T16:34:06.873Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-404.66206857.js": {
    "type": "application/javascript",
    "etag": "\"8fa-4Kowqi0lg0uQOSlbWBf33PWVWM4\"",
    "mtime": "2023-03-15T16:34:06.873Z",
    "size": 2298,
    "path": "../public/_nuxt/error-404.66206857.js"
  },
  "/_nuxt/error-500.664c88d9.js": {
    "type": "application/javascript",
    "etag": "\"7a2-zv9NiIX6RRqWwvKotUVeRsg+wks\"",
    "mtime": "2023-03-15T16:34:06.873Z",
    "size": 1954,
    "path": "../public/_nuxt/error-500.664c88d9.js"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2023-03-15T16:34:06.873Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/error-component.9f6b8269.js": {
    "type": "application/javascript",
    "etag": "\"545-0vH0CXMygh+fCSOam+lDmvFy0us\"",
    "mtime": "2023-03-15T16:34:06.873Z",
    "size": 1349,
    "path": "../public/_nuxt/error-component.9f6b8269.js"
  },
  "/_nuxt/fa-brands-400.2cd4cf89.ttf": {
    "type": "font/ttf",
    "etag": "\"2c410-+ldF1CHA/JCShia+mOn4z3WAsyc\"",
    "mtime": "2023-03-15T16:34:06.873Z",
    "size": 181264,
    "path": "../public/_nuxt/fa-brands-400.2cd4cf89.ttf"
  },
  "/_nuxt/fa-brands-400.967394d1.woff2": {
    "type": "font/woff2",
    "etag": "\"19a98-4hmvHju8Ihk1nT0JFuJjsnnEq/0\"",
    "mtime": "2023-03-15T16:34:06.872Z",
    "size": 105112,
    "path": "../public/_nuxt/fa-brands-400.967394d1.woff2"
  },
  "/_nuxt/fa-regular-400.52ec4d83.woff2": {
    "type": "font/woff2",
    "etag": "\"5ddc-96Cby9mW/WNARdTnm2UEyUVzBoY\"",
    "mtime": "2023-03-15T16:34:06.872Z",
    "size": 24028,
    "path": "../public/_nuxt/fa-regular-400.52ec4d83.woff2"
  },
  "/_nuxt/fa-regular-400.e2d44fc8.ttf": {
    "type": "font/ttf",
    "etag": "\"eb4c-mybXRaHmmyPXG36jbV3hIJyZeQE\"",
    "mtime": "2023-03-15T16:34:06.872Z",
    "size": 60236,
    "path": "../public/_nuxt/fa-regular-400.e2d44fc8.ttf"
  },
  "/_nuxt/fa-solid-900.52bbd916.woff2": {
    "type": "font/woff2",
    "etag": "\"25cd8-GXkSjouhUX2F9eTuUFq/SGxRVXw\"",
    "mtime": "2023-03-15T16:34:06.871Z",
    "size": 154840,
    "path": "../public/_nuxt/fa-solid-900.52bbd916.woff2"
  },
  "/_nuxt/fa-solid-900.5808ca8f.ttf": {
    "type": "font/ttf",
    "etag": "\"5f33c-4zOUAO9iFM+gd9AD2u0r+mWeKVY\"",
    "mtime": "2023-03-15T16:34:06.871Z",
    "size": 389948,
    "path": "../public/_nuxt/fa-solid-900.5808ca8f.ttf"
  },
  "/_nuxt/fa-v4compatibility.58ccbdf2.ttf": {
    "type": "font/ttf",
    "etag": "\"2764-P8FcgVT4vS170d/lWuWrHDPl5A8\"",
    "mtime": "2023-03-15T16:34:06.871Z",
    "size": 10084,
    "path": "../public/_nuxt/fa-v4compatibility.58ccbdf2.ttf"
  },
  "/_nuxt/fa-v4compatibility.b8f0081f.woff2": {
    "type": "font/woff2",
    "etag": "\"12a8-N6sqaggQ1abBCjVf4devAEK9aio\"",
    "mtime": "2023-03-15T16:34:06.870Z",
    "size": 4776,
    "path": "../public/_nuxt/fa-v4compatibility.b8f0081f.woff2"
  },
  "/_nuxt/faq.1b6eb67a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"ce-Cb0VNgT8bYAtH6dPdgkGZNULsQs\"",
    "mtime": "2023-03-15T16:34:06.870Z",
    "size": 206,
    "path": "../public/_nuxt/faq.1b6eb67a.css"
  },
  "/_nuxt/faq.d25c54c6.js": {
    "type": "application/javascript",
    "etag": "\"3b3-PKf6GK9R9/ubWBN0vUeoNAJFW6Q\"",
    "mtime": "2023-03-15T16:34:06.870Z",
    "size": 947,
    "path": "../public/_nuxt/faq.d25c54c6.js"
  },
  "/_nuxt/favorite.09cfaba3.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"208-wqpYEf0waE61+kISWoQQ5jWQ8yY\"",
    "mtime": "2023-03-15T16:34:06.870Z",
    "size": 520,
    "path": "../public/_nuxt/favorite.09cfaba3.css"
  },
  "/_nuxt/favorite.21d0cc71.js": {
    "type": "application/javascript",
    "etag": "\"cfa-ynl/T34GWXG29LaRNYqLlIYsqHs\"",
    "mtime": "2023-03-15T16:34:06.870Z",
    "size": 3322,
    "path": "../public/_nuxt/favorite.21d0cc71.js"
  },
  "/_nuxt/footer_bg.dbde9adb.jpg": {
    "type": "image/jpeg",
    "etag": "\"c11f-vjap9J1MStBQB+glBu5OzUIyIJ4\"",
    "mtime": "2023-03-15T16:34:06.869Z",
    "size": 49439,
    "path": "../public/_nuxt/footer_bg.dbde9adb.jpg"
  },
  "/_nuxt/forget.f426b5e2.js": {
    "type": "application/javascript",
    "etag": "\"7d1-IkLNTFuNQHrQ8SOXrHJHzQS4kgQ\"",
    "mtime": "2023-03-15T16:34:06.869Z",
    "size": 2001,
    "path": "../public/_nuxt/forget.f426b5e2.js"
  },
  "/_nuxt/index.10cffab2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"10c-jWxFOULRzSJfACrIouxVuhSlsS4\"",
    "mtime": "2023-03-15T16:34:06.869Z",
    "size": 268,
    "path": "../public/_nuxt/index.10cffab2.css"
  },
  "/_nuxt/index.80b581c0.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"248-ZEcPJ3wDsyzbSBvAMThkDpAxoJU\"",
    "mtime": "2023-03-15T16:34:06.869Z",
    "size": 584,
    "path": "../public/_nuxt/index.80b581c0.css"
  },
  "/_nuxt/index.9c174be1.js": {
    "type": "application/javascript",
    "etag": "\"13cf-ktxfbcWH3s48bhgnaKdcjKOWV0Q\"",
    "mtime": "2023-03-15T16:34:06.869Z",
    "size": 5071,
    "path": "../public/_nuxt/index.9c174be1.js"
  },
  "/_nuxt/index.9cc7aa56.js": {
    "type": "application/javascript",
    "etag": "\"1728-VazGkf5XXkBwa6Nffi7MJndYKaY\"",
    "mtime": "2023-03-15T16:34:06.869Z",
    "size": 5928,
    "path": "../public/_nuxt/index.9cc7aa56.js"
  },
  "/_nuxt/index.d4ee4003.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"53d-VksxP6Nih0u0Bu70QEWcK6jYmMo\"",
    "mtime": "2023-03-15T16:34:06.868Z",
    "size": 1341,
    "path": "../public/_nuxt/index.d4ee4003.css"
  },
  "/_nuxt/index.d8d87c98.js": {
    "type": "application/javascript",
    "etag": "\"2cec-JRif5C8lLni0zjl5n6wSGi9ZsFc\"",
    "mtime": "2023-03-15T16:34:06.868Z",
    "size": 11500,
    "path": "../public/_nuxt/index.d8d87c98.js"
  },
  "/_nuxt/login.1d5b85d5.js": {
    "type": "application/javascript",
    "etag": "\"ce1-7e2Muo9Vhh9+gdCJLFi1RZ0SSdk\"",
    "mtime": "2023-03-15T16:34:06.868Z",
    "size": 3297,
    "path": "../public/_nuxt/login.1d5b85d5.js"
  },
  "/_nuxt/logo.f02090fc.png": {
    "type": "image/png",
    "etag": "\"14c5-q4JfS/XRkEeWZ4Mp8C14M5GiOE0\"",
    "mtime": "2023-03-15T16:34:06.868Z",
    "size": 5317,
    "path": "../public/_nuxt/logo.f02090fc.png"
  },
  "/_nuxt/pageStatusStore.e285144a.js": {
    "type": "application/javascript",
    "etag": "\"1da-0FSCUS94nhkdYpdUGbFTj6gU6oQ\"",
    "mtime": "2023-03-15T16:34:06.868Z",
    "size": 474,
    "path": "../public/_nuxt/pageStatusStore.e285144a.js"
  },
  "/_nuxt/privacy.7c5ab4a6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7f-125+UlFMpCnctMvLSkYKD4JfEps\"",
    "mtime": "2023-03-15T16:34:06.868Z",
    "size": 127,
    "path": "../public/_nuxt/privacy.7c5ab4a6.css"
  },
  "/_nuxt/privacy.8dcf101c.js": {
    "type": "application/javascript",
    "etag": "\"3ad-agnCymO9fe7BfpAzq8mYmeTRPM8\"",
    "mtime": "2023-03-15T16:34:06.867Z",
    "size": 941,
    "path": "../public/_nuxt/privacy.8dcf101c.js"
  },
  "/_nuxt/product.4a474e5c.js": {
    "type": "application/javascript",
    "etag": "\"1846-Q8KPz8SIyQFcJkAfYMi2aCKnrWk\"",
    "mtime": "2023-03-15T16:34:06.867Z",
    "size": 6214,
    "path": "../public/_nuxt/product.4a474e5c.js"
  },
  "/_nuxt/product.b661d972.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"331-/6vV7KDsW31UijdQPH3/lEKZkxc\"",
    "mtime": "2023-03-15T16:34:06.867Z",
    "size": 817,
    "path": "../public/_nuxt/product.b661d972.css"
  },
  "/_nuxt/register.6750eb38.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"30-p3mymui4b4dFzi0ttEWkPjv3ayo\"",
    "mtime": "2023-03-15T16:34:06.867Z",
    "size": 48,
    "path": "../public/_nuxt/register.6750eb38.css"
  },
  "/_nuxt/register.8e0a027d.js": {
    "type": "application/javascript",
    "etag": "\"151d-JNU8eQEyZbVTTSWfpcDf43m8X8s\"",
    "mtime": "2023-03-15T16:34:06.867Z",
    "size": 5405,
    "path": "../public/_nuxt/register.8e0a027d.js"
  },
  "/_nuxt/return-help.12284b8b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7f-6UWM5sJ0XDGpnq57qwEUDzTFeE8\"",
    "mtime": "2023-03-15T16:34:06.867Z",
    "size": 127,
    "path": "../public/_nuxt/return-help.12284b8b.css"
  },
  "/_nuxt/return-help.2c4ea512.js": {
    "type": "application/javascript",
    "etag": "\"3cc-yXELm6DfFGdfsieNYlQHLS4rBlY\"",
    "mtime": "2023-03-15T16:34:06.866Z",
    "size": 972,
    "path": "../public/_nuxt/return-help.2c4ea512.js"
  },
  "/_nuxt/share_ad.31ea5396.jpg": {
    "type": "image/jpeg",
    "etag": "\"5c328-7SE9WGpmewcAyeUjDIaQ1UlhTYU\"",
    "mtime": "2023-03-15T16:34:06.866Z",
    "size": 377640,
    "path": "../public/_nuxt/share_ad.31ea5396.jpg"
  },
  "/_nuxt/shop.15f516c8.js": {
    "type": "application/javascript",
    "etag": "\"1761-3q8ks5766iogMrz1yZcTOYdDyrQ\"",
    "mtime": "2023-03-15T16:34:06.866Z",
    "size": 5985,
    "path": "../public/_nuxt/shop.15f516c8.js"
  },
  "/_nuxt/shop.b1855f4a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3ed-NUrCzYn8HiA48o/bNbS1fRWHhKU\"",
    "mtime": "2023-03-15T16:34:06.866Z",
    "size": 1005,
    "path": "../public/_nuxt/shop.b1855f4a.css"
  },
  "/_nuxt/swiper-vue.2e988726.js": {
    "type": "application/javascript",
    "etag": "\"29c91-CVKQsPETokbjQfItJuEfqXsr/nY\"",
    "mtime": "2023-03-15T16:34:06.866Z",
    "size": 171153,
    "path": "../public/_nuxt/swiper-vue.2e988726.js"
  },
  "/_nuxt/swiper-vue.c8055770.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3d25-bth6D78+Gf02QtW+pMUvNE/x1CI\"",
    "mtime": "2023-03-15T16:34:06.865Z",
    "size": 15653,
    "path": "../public/_nuxt/swiper-vue.c8055770.css"
  },
  "/_nuxt/terms.6e1e9baf.js": {
    "type": "application/javascript",
    "etag": "\"39a-wNz0EuZ4LRV7HSnMNfc0Jc86zrA\"",
    "mtime": "2023-03-15T16:34:06.865Z",
    "size": 922,
    "path": "../public/_nuxt/terms.6e1e9baf.js"
  },
  "/_nuxt/terms.f4d46697.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7f-WimIyjKUyLqesoWtySzWRBX1G3I\"",
    "mtime": "2023-03-15T16:34:06.865Z",
    "size": 127,
    "path": "../public/_nuxt/terms.f4d46697.css"
  },
  "/_nuxt/wo_treature.666886f2.jpg": {
    "type": "image/jpeg",
    "etag": "\"2a937-QdOewcGrXOz502xNbC+nXi3/kNw\"",
    "mtime": "2023-03-15T16:34:06.865Z",
    "size": 174391,
    "path": "../public/_nuxt/wo_treature.666886f2.jpg"
  },
  "/_nuxt/wobao.72d7716f.js": {
    "type": "application/javascript",
    "etag": "\"13ba-pvmI/M67KfvgqYMX9LRqqBY6uG0\"",
    "mtime": "2023-03-15T16:34:06.864Z",
    "size": 5050,
    "path": "../public/_nuxt/wobao.72d7716f.js"
  },
  "/products/p1.jpg": {
    "type": "image/jpeg",
    "etag": "\"b892-NxvTUlcbxPVQCHi+ovIhXMo0UKs\"",
    "mtime": "2023-03-15T16:34:06.891Z",
    "size": 47250,
    "path": "../public/products/p1.jpg"
  },
  "/products/p2.jpg": {
    "type": "image/jpeg",
    "etag": "\"13101-VDIk1g/BrGy5OSAdBmM8sRksMJ0\"",
    "mtime": "2023-03-15T16:34:06.891Z",
    "size": 78081,
    "path": "../public/products/p2.jpg"
  },
  "/products/p4.jpg": {
    "type": "image/jpeg",
    "etag": "\"11ffe-ErNoEzZV+VjO90r6l6F+TcRI42o\"",
    "mtime": "2023-03-15T16:34:06.890Z",
    "size": 73726,
    "path": "../public/products/p4.jpg"
  },
  "/products/p5.jpg": {
    "type": "image/jpeg",
    "etag": "\"b8d3-xbT46KeiHcy0u5QlYlbnWBhzm1k\"",
    "mtime": "2023-03-15T16:34:06.890Z",
    "size": 47315,
    "path": "../public/products/p5.jpg"
  },
  "/products/p6.jpg": {
    "type": "image/jpeg",
    "etag": "\"1368f-aoLSapnhqYsxmC5sJJvQqz4y4tQ\"",
    "mtime": "2023-03-15T16:34:06.890Z",
    "size": 79503,
    "path": "../public/products/p6.jpg"
  },
  "/script/script.js": {
    "type": "application/javascript",
    "etag": "\"1829-ACnG07B5O7rGH9AuOH1FAfsAQPQ\"",
    "mtime": "2023-03-15T16:34:06.887Z",
    "size": 6185,
    "path": "../public/script/script.js"
  },
  "/script/slick/slick.js": {
    "type": "application/javascript",
    "etag": "\"15b7b-CX9qG08RXptuvvpw122DBzO8ybo\"",
    "mtime": "2023-03-15T16:34:06.887Z",
    "size": 88955,
    "path": "../public/script/slick/slick.js"
  },
  "/script/slick/slick.min.js": {
    "type": "application/javascript",
    "etag": "\"ef82-3MkWFafkqejIEjMCxZl8EGciYHE\"",
    "mtime": "2023-03-15T16:34:06.886Z",
    "size": 61314,
    "path": "../public/script/slick/slick.min.js"
  },
  "/script/bootstrap/js/bootstrap.js": {
    "type": "application/javascript",
    "etag": "\"1104b-O5ZaNqawiFStbt3t+FxTGf05K0o\"",
    "mtime": "2023-03-15T16:34:06.889Z",
    "size": 69707,
    "path": "../public/script/bootstrap/js/bootstrap.js"
  },
  "/script/bootstrap/js/bootstrap.min.js": {
    "type": "application/javascript",
    "etag": "\"90b5-QwpEPXSDD+m+Ju/KQx9EjBs3QPk\"",
    "mtime": "2023-03-15T16:34:06.889Z",
    "size": 37045,
    "path": "../public/script/bootstrap/js/bootstrap.min.js"
  },
  "/script/bootstrap-touchspin/demo/demo.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1c44-xXcazkR0AUAU+twFD7pWuxPVtEU\"",
    "mtime": "2023-03-15T16:34:06.888Z",
    "size": 7236,
    "path": "../public/script/bootstrap-touchspin/demo/demo.css"
  },
  "/script/bootstrap-touchspin/demo/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"80dc-V4/bBRsusnw1PqCiXeAmkfBSUW8\"",
    "mtime": "2023-03-15T16:34:06.888Z",
    "size": 32988,
    "path": "../public/script/bootstrap-touchspin/demo/favicon.ico"
  },
  "/script/bootstrap-touchspin/demo/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"623d-ZRs41qd44/0EHOLURZcHCK9q7bc\"",
    "mtime": "2023-03-15T16:34:06.888Z",
    "size": 25149,
    "path": "../public/script/bootstrap-touchspin/demo/index.html"
  },
  "/script/bootstrap-touchspin/src/jquery.bootstrap-touchspin.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"304-K1mhvGZCEkb2QsG4ZqT+oHIQB1s\"",
    "mtime": "2023-03-15T16:34:06.888Z",
    "size": 772,
    "path": "../public/script/bootstrap-touchspin/src/jquery.bootstrap-touchspin.css"
  },
  "/script/bootstrap-touchspin/src/jquery.bootstrap-touchspin.js": {
    "type": "application/javascript",
    "etag": "\"4dc5-t2AXOLgf1ub3LI7EU2GCSYwmwaA\"",
    "mtime": "2023-03-15T16:34:06.887Z",
    "size": 19909,
    "path": "../public/script/bootstrap-touchspin/src/jquery.bootstrap-touchspin.js"
  },
  "/script/syo-timer/build/jquery.syotimer(1).js": {
    "type": "application/javascript",
    "etag": "\"26e4-PKc5lzRV0yAQ173y4F8HqxD3niw\"",
    "mtime": "2023-03-15T16:34:06.886Z",
    "size": 9956,
    "path": "../public/script/syo-timer/build/jquery.syotimer(1).js"
  },
  "/script/syo-timer/build/jquery.syotimer.js": {
    "type": "application/javascript",
    "etag": "\"26e4-PKc5lzRV0yAQ173y4F8HqxD3niw\"",
    "mtime": "2023-03-15T16:34:06.886Z",
    "size": 9956,
    "path": "../public/script/syo-timer/build/jquery.syotimer.js"
  },
  "/script/syo-timer/build/jquery.syotimer.min(1).js": {
    "type": "application/javascript",
    "etag": "\"15af-ipVy5+rLygkexJjap72SkqUb3Bw\"",
    "mtime": "2023-03-15T16:34:06.885Z",
    "size": 5551,
    "path": "../public/script/syo-timer/build/jquery.syotimer.min(1).js"
  },
  "/script/syo-timer/build/jquery.syotimer.min.js": {
    "type": "application/javascript",
    "etag": "\"15af-ipVy5+rLygkexJjap72SkqUb3Bw\"",
    "mtime": "2023-03-15T16:34:06.885Z",
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

const _UsfAIZ = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { storeid, storename, storeaddress, outside, ship, TempVar } = body;
    setCookie(event, "storeid", storeid);
    setCookie(event, "storename", storename);
    setCookie(event, "storeaddress", storeaddress);
    setCookie(event, "outside", outside);
    setCookie(event, "ship", ship);
    setCookie(event, "TempVar", TempVar);
    navigateTo("/");
    return { body };
  } catch (error) {
  }
});

const _lazy_hyw5vc = () => import('../handlers/renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '', handler: _UsfAIZ, lazy: false, middleware: true, method: undefined },
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
