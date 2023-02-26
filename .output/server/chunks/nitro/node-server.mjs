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
    "mtime": "2023-02-26T14:31:33.082Z",
    "size": 10244,
    "path": "../public/.DS_Store"
  },
  "/favicon.png": {
    "type": "image/png",
    "etag": "\"1dbf-s3I2R0kLu9ixED7iZwi0zbwJJeA\"",
    "mtime": "2023-02-26T14:31:33.081Z",
    "size": 7615,
    "path": "../public/favicon.png"
  },
  "/mockServiceWorker.js": {
    "type": "application/javascript",
    "etag": "\"1fc6-JHhgAamB9YhRG39J7peyvwFxMN0\"",
    "mtime": "2023-02-26T14:31:33.081Z",
    "size": 8134,
    "path": "../public/mockServiceWorker.js"
  },
  "/nuxt3-logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"3e2-zrywS1vPCL9MD3e4wyCiVOux1NU\"",
    "mtime": "2023-02-26T14:31:33.081Z",
    "size": 994,
    "path": "../public/nuxt3-logo.svg"
  },
  "/_nuxt/1.3d691caf.jpg": {
    "type": "image/jpeg",
    "etag": "\"1a4ca-mlRkyPbBq8B0g2qvxQnpc92+H3I\"",
    "mtime": "2023-02-26T14:31:33.072Z",
    "size": 107722,
    "path": "../public/_nuxt/1.3d691caf.jpg"
  },
  "/_nuxt/1.8956a96f.js": {
    "type": "application/javascript",
    "etag": "\"4a-GTWKzUdbyzTfqVrE298noalma6I\"",
    "mtime": "2023-02-26T14:31:33.072Z",
    "size": 74,
    "path": "../public/_nuxt/1.8956a96f.js"
  },
  "/_nuxt/1.bcb2cf70.jpg": {
    "type": "image/jpeg",
    "etag": "\"1aea0-3svT/8G2wzbM7UeRyPElFmeG4nU\"",
    "mtime": "2023-02-26T14:31:33.072Z",
    "size": 110240,
    "path": "../public/_nuxt/1.bcb2cf70.jpg"
  },
  "/_nuxt/1.c672514a.jpg": {
    "type": "image/jpeg",
    "etag": "\"65792-hv/FKdwAgVwMw/MbA1qNlVcN0EM\"",
    "mtime": "2023-02-26T14:31:33.071Z",
    "size": 415634,
    "path": "../public/_nuxt/1.c672514a.jpg"
  },
  "/_nuxt/2009.5abd421b.js": {
    "type": "application/javascript",
    "etag": "\"4d-To5zLdNgyG4m2XSlVZ3tnXiRpsQ\"",
    "mtime": "2023-02-26T14:31:33.071Z",
    "size": 77,
    "path": "../public/_nuxt/2009.5abd421b.js"
  },
  "/_nuxt/2009.cb07c592.jpg": {
    "type": "image/jpeg",
    "etag": "\"16a75-7hEgN5Uz9MPVZ/UDkzmrLi+tbYE\"",
    "mtime": "2023-02-26T14:31:33.070Z",
    "size": 92789,
    "path": "../public/_nuxt/2009.cb07c592.jpg"
  },
  "/_nuxt/UserProfile.e6be9791.js": {
    "type": "application/javascript",
    "etag": "\"99c-yVbYj2SM7EvLZCpAcQlKxrrmQKg\"",
    "mtime": "2023-02-26T14:31:33.070Z",
    "size": 2460,
    "path": "../public/_nuxt/UserProfile.e6be9791.js"
  },
  "/_nuxt/about.4eb9708a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"56-0azxroEVs/MhOGneMqzrTUQSJsA\"",
    "mtime": "2023-02-26T14:31:33.070Z",
    "size": 86,
    "path": "../public/_nuxt/about.4eb9708a.css"
  },
  "/_nuxt/about.b77ae9a0.js": {
    "type": "application/javascript",
    "etag": "\"2b1-apqTI2OqE+TyXdJvioOo2RCrA0Y\"",
    "mtime": "2023-02-26T14:31:33.070Z",
    "size": 689,
    "path": "../public/_nuxt/about.b77ae9a0.js"
  },
  "/_nuxt/aboutlovin.11f8ece2.js": {
    "type": "application/javascript",
    "etag": "\"2e2-O4J3opsLf51d904LeEUisycGnNI\"",
    "mtime": "2023-02-26T14:31:33.070Z",
    "size": 738,
    "path": "../public/_nuxt/aboutlovin.11f8ece2.js"
  },
  "/_nuxt/aboutlovin.c625bf29.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"56-NDca+x7ZzPS46XnJhJ3UzhPouiY\"",
    "mtime": "2023-02-26T14:31:33.069Z",
    "size": 86,
    "path": "../public/_nuxt/aboutlovin.c625bf29.css"
  },
  "/_nuxt/activity.15aa6758.js": {
    "type": "application/javascript",
    "etag": "\"1a6e-g3yXQ8hShF0qhsH4VfDYsk4cpxc\"",
    "mtime": "2023-02-26T14:31:33.069Z",
    "size": 6766,
    "path": "../public/_nuxt/activity.15aa6758.js"
  },
  "/_nuxt/activity.ca0d52fe.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"59-9lnxX9TJcfcFhcP5O3USoWs9U9s\"",
    "mtime": "2023-02-26T14:31:33.069Z",
    "size": 89,
    "path": "../public/_nuxt/activity.ca0d52fe.css"
  },
  "/_nuxt/admin.b3d9343e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"c6-4Z8v+OYkJFv3AO1nDLXAYhly1+w\"",
    "mtime": "2023-02-26T14:31:33.069Z",
    "size": 198,
    "path": "../public/_nuxt/admin.b3d9343e.css"
  },
  "/_nuxt/admin.fa287e63.js": {
    "type": "application/javascript",
    "etag": "\"23f-Elmws5i+nOx7/tTXa03DxzEn11g\"",
    "mtime": "2023-02-26T14:31:33.069Z",
    "size": 575,
    "path": "../public/_nuxt/admin.fa287e63.js"
  },
  "/_nuxt/api-and-store-example.dd64dcb9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2f5d-NIpUTfn7yt/WxzdOrVzCveZdbMs\"",
    "mtime": "2023-02-26T14:31:33.068Z",
    "size": 12125,
    "path": "../public/_nuxt/api-and-store-example.dd64dcb9.css"
  },
  "/_nuxt/api-and-store-example.e88e7eea.js": {
    "type": "application/javascript",
    "etag": "\"1b0f5-TtF+mLWEvsj6aY6OwY3YbIq0Mqo\"",
    "mtime": "2023-02-26T14:31:33.068Z",
    "size": 110837,
    "path": "../public/_nuxt/api-and-store-example.e88e7eea.js"
  },
  "/_nuxt/authStore.c5358098.js": {
    "type": "application/javascript",
    "etag": "\"190-neHIPWIpvKf8Y7K5Xpv45gaivd8\"",
    "mtime": "2023-02-26T14:31:33.068Z",
    "size": 400,
    "path": "../public/_nuxt/authStore.c5358098.js"
  },
  "/_nuxt/bid.0a44a829.js": {
    "type": "application/javascript",
    "etag": "\"1aad-ru5OYhXPI8t8/BOXDxBYHRpbQsA\"",
    "mtime": "2023-02-26T14:31:33.068Z",
    "size": 6829,
    "path": "../public/_nuxt/bid.0a44a829.js"
  },
  "/_nuxt/bonus-point.a3ecd803.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"99-rLdTEMs30JsSXIWnYzlGgswyw6Q\"",
    "mtime": "2023-02-26T14:31:33.067Z",
    "size": 153,
    "path": "../public/_nuxt/bonus-point.a3ecd803.css"
  },
  "/_nuxt/bonus-point.b9b28808.js": {
    "type": "application/javascript",
    "etag": "\"5e6-mvmMgdQS8PLgPrp3A/JXNuijsk0\"",
    "mtime": "2023-02-26T14:31:33.067Z",
    "size": 1510,
    "path": "../public/_nuxt/bonus-point.b9b28808.js"
  },
  "/_nuxt/cart.1ca5ea85.js": {
    "type": "application/javascript",
    "etag": "\"f9d-7Jr1d3axWUiSKNQJNkNvsi7kPnM\"",
    "mtime": "2023-02-26T14:31:33.067Z",
    "size": 3997,
    "path": "../public/_nuxt/cart.1ca5ea85.js"
  },
  "/_nuxt/cartStore.6a3468e0.js": {
    "type": "application/javascript",
    "etag": "\"90-4dcgk0dyLbmqNnptbRW1qt6Z7F0\"",
    "mtime": "2023-02-26T14:31:33.067Z",
    "size": 144,
    "path": "../public/_nuxt/cartStore.6a3468e0.js"
  },
  "/_nuxt/checkout.8f09fa05.js": {
    "type": "application/javascript",
    "etag": "\"1e8b-tzQve/arM9k1h0PmYV2tMAMgutM\"",
    "mtime": "2023-02-26T14:31:33.067Z",
    "size": 7819,
    "path": "../public/_nuxt/checkout.8f09fa05.js"
  },
  "/_nuxt/client-only.20a0edfa.js": {
    "type": "application/javascript",
    "etag": "\"1da-8vZmMYEL+SUh61yIUZ9+weglJHg\"",
    "mtime": "2023-02-26T14:31:33.067Z",
    "size": 474,
    "path": "../public/_nuxt/client-only.20a0edfa.js"
  },
  "/_nuxt/common.45dab837.js": {
    "type": "application/javascript",
    "etag": "\"53-o1tDSsaNi5fOGsklW2rIApRF06A\"",
    "mtime": "2023-02-26T14:31:33.066Z",
    "size": 83,
    "path": "../public/_nuxt/common.45dab837.js"
  },
  "/_nuxt/composables.e4d0f33e.js": {
    "type": "application/javascript",
    "etag": "\"61-sg0S0bLs4Jf4HpUS4miApDKMmoQ\"",
    "mtime": "2023-02-26T14:31:33.066Z",
    "size": 97,
    "path": "../public/_nuxt/composables.e4d0f33e.js"
  },
  "/_nuxt/default.5bb6b3c7.js": {
    "type": "application/javascript",
    "etag": "\"1f5d-gouDUW9xMyX3YgdhdqzCwoCHlf8\"",
    "mtime": "2023-02-26T14:31:33.066Z",
    "size": 8029,
    "path": "../public/_nuxt/default.5bb6b3c7.js"
  },
  "/_nuxt/default.f3de325a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"37d-0aUHOsnNsvD9LBj1ruQqHfqodCY\"",
    "mtime": "2023-02-26T14:31:33.066Z",
    "size": 893,
    "path": "../public/_nuxt/default.f3de325a.css"
  },
  "/_nuxt/entry.975454b2.js": {
    "type": "application/javascript",
    "etag": "\"1b06a8-bEWWOcJKkRtj0evYZvUi7Mx2ZZg\"",
    "mtime": "2023-02-26T14:31:33.066Z",
    "size": 1771176,
    "path": "../public/_nuxt/entry.975454b2.js"
  },
  "/_nuxt/entry.eac6d9f7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"53573-Zs9269Lu0Ou+5C4As3PokxF/Ums\"",
    "mtime": "2023-02-26T14:31:33.064Z",
    "size": 341363,
    "path": "../public/_nuxt/entry.eac6d9f7.css"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2023-02-26T14:31:33.063Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-404.3d7196b5.js": {
    "type": "application/javascript",
    "etag": "\"8fb-+XBOkUbnAurEg7e3NyPxdR9/Uj4\"",
    "mtime": "2023-02-26T14:31:33.063Z",
    "size": 2299,
    "path": "../public/_nuxt/error-404.3d7196b5.js"
  },
  "/_nuxt/error-500.631b44db.js": {
    "type": "application/javascript",
    "etag": "\"7a3-BtIHhtGOSODWu5XVayDe4azmFQs\"",
    "mtime": "2023-02-26T14:31:33.063Z",
    "size": 1955,
    "path": "../public/_nuxt/error-500.631b44db.js"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2023-02-26T14:31:33.063Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/error-component.6ee35609.js": {
    "type": "application/javascript",
    "etag": "\"544-8A+EQAWA0xy1sA0XErs4rjZLWx4\"",
    "mtime": "2023-02-26T14:31:33.063Z",
    "size": 1348,
    "path": "../public/_nuxt/error-component.6ee35609.js"
  },
  "/_nuxt/fa-brands-400.2cd4cf89.ttf": {
    "type": "font/ttf",
    "etag": "\"2c410-+ldF1CHA/JCShia+mOn4z3WAsyc\"",
    "mtime": "2023-02-26T14:31:33.062Z",
    "size": 181264,
    "path": "../public/_nuxt/fa-brands-400.2cd4cf89.ttf"
  },
  "/_nuxt/fa-brands-400.967394d1.woff2": {
    "type": "font/woff2",
    "etag": "\"19a98-4hmvHju8Ihk1nT0JFuJjsnnEq/0\"",
    "mtime": "2023-02-26T14:31:33.062Z",
    "size": 105112,
    "path": "../public/_nuxt/fa-brands-400.967394d1.woff2"
  },
  "/_nuxt/fa-regular-400.52ec4d83.woff2": {
    "type": "font/woff2",
    "etag": "\"5ddc-96Cby9mW/WNARdTnm2UEyUVzBoY\"",
    "mtime": "2023-02-26T14:31:33.062Z",
    "size": 24028,
    "path": "../public/_nuxt/fa-regular-400.52ec4d83.woff2"
  },
  "/_nuxt/fa-regular-400.e2d44fc8.ttf": {
    "type": "font/ttf",
    "etag": "\"eb4c-mybXRaHmmyPXG36jbV3hIJyZeQE\"",
    "mtime": "2023-02-26T14:31:33.062Z",
    "size": 60236,
    "path": "../public/_nuxt/fa-regular-400.e2d44fc8.ttf"
  },
  "/_nuxt/fa-solid-900.52bbd916.woff2": {
    "type": "font/woff2",
    "etag": "\"25cd8-GXkSjouhUX2F9eTuUFq/SGxRVXw\"",
    "mtime": "2023-02-26T14:31:33.061Z",
    "size": 154840,
    "path": "../public/_nuxt/fa-solid-900.52bbd916.woff2"
  },
  "/_nuxt/fa-solid-900.5808ca8f.ttf": {
    "type": "font/ttf",
    "etag": "\"5f33c-4zOUAO9iFM+gd9AD2u0r+mWeKVY\"",
    "mtime": "2023-02-26T14:31:33.061Z",
    "size": 389948,
    "path": "../public/_nuxt/fa-solid-900.5808ca8f.ttf"
  },
  "/_nuxt/fa-v4compatibility.58ccbdf2.ttf": {
    "type": "font/ttf",
    "etag": "\"2764-P8FcgVT4vS170d/lWuWrHDPl5A8\"",
    "mtime": "2023-02-26T14:31:33.061Z",
    "size": 10084,
    "path": "../public/_nuxt/fa-v4compatibility.58ccbdf2.ttf"
  },
  "/_nuxt/fa-v4compatibility.b8f0081f.woff2": {
    "type": "font/woff2",
    "etag": "\"12a8-N6sqaggQ1abBCjVf4devAEK9aio\"",
    "mtime": "2023-02-26T14:31:33.060Z",
    "size": 4776,
    "path": "../public/_nuxt/fa-v4compatibility.b8f0081f.woff2"
  },
  "/_nuxt/favorite.884f45bd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"95-SBniRb5uw0dnNaje2PV/Rt7hbRI\"",
    "mtime": "2023-02-26T14:31:33.060Z",
    "size": 149,
    "path": "../public/_nuxt/favorite.884f45bd.css"
  },
  "/_nuxt/favorite.93e29f66.js": {
    "type": "application/javascript",
    "etag": "\"1134-d2UihL6VlHajmVzcNnmjqcU5FgU\"",
    "mtime": "2023-02-26T14:31:33.060Z",
    "size": 4404,
    "path": "../public/_nuxt/favorite.93e29f66.js"
  },
  "/_nuxt/footer_bg.dbde9adb.jpg": {
    "type": "image/jpeg",
    "etag": "\"c11f-vjap9J1MStBQB+glBu5OzUIyIJ4\"",
    "mtime": "2023-02-26T14:31:33.060Z",
    "size": 49439,
    "path": "../public/_nuxt/footer_bg.dbde9adb.jpg"
  },
  "/_nuxt/index.1d5da809.js": {
    "type": "application/javascript",
    "etag": "\"f19-0ntAsLmjDQxzOKTVqT5HQGc4ows\"",
    "mtime": "2023-02-26T14:31:33.059Z",
    "size": 3865,
    "path": "../public/_nuxt/index.1d5da809.js"
  },
  "/_nuxt/index.84e86c22.js": {
    "type": "application/javascript",
    "etag": "\"fd1-qG7DFaf04wlaIS4l5RU+cz38N5c\"",
    "mtime": "2023-02-26T14:31:33.059Z",
    "size": 4049,
    "path": "../public/_nuxt/index.84e86c22.js"
  },
  "/_nuxt/index.9609aa7d.js": {
    "type": "application/javascript",
    "etag": "\"69f6-vGMPp0li+Cyox5jdE42AuNY0Q8M\"",
    "mtime": "2023-02-26T14:31:33.059Z",
    "size": 27126,
    "path": "../public/_nuxt/index.9609aa7d.js"
  },
  "/_nuxt/index.d3ad7d50.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"220-v78ULfHiEx9kIYpALkjWE+mvYBg\"",
    "mtime": "2023-02-26T14:31:33.059Z",
    "size": 544,
    "path": "../public/_nuxt/index.d3ad7d50.css"
  },
  "/_nuxt/index.dc21025b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4a-82xqJ9dQR0cIaYl/ssMzc0Yv1xw\"",
    "mtime": "2023-02-26T14:31:33.059Z",
    "size": 74,
    "path": "../public/_nuxt/index.dc21025b.css"
  },
  "/_nuxt/index.f14806eb.js": {
    "type": "application/javascript",
    "etag": "\"2b66-XIG7CPLI+PT8zDWj9NKExnLiB9c\"",
    "mtime": "2023-02-26T14:31:33.059Z",
    "size": 11110,
    "path": "../public/_nuxt/index.f14806eb.js"
  },
  "/_nuxt/index.f459705b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"83-qVcs8vVmRL9lBkn9On7yGgGp38Q\"",
    "mtime": "2023-02-26T14:31:33.058Z",
    "size": 131,
    "path": "../public/_nuxt/index.f459705b.css"
  },
  "/_nuxt/login.0fae5013.js": {
    "type": "application/javascript",
    "etag": "\"838-goP+OM6vDu3V6mjrIIRfP9dj6wY\"",
    "mtime": "2023-02-26T14:31:33.058Z",
    "size": 2104,
    "path": "../public/_nuxt/login.0fae5013.js"
  },
  "/_nuxt/login.48ce8f99.js": {
    "type": "application/javascript",
    "etag": "\"bd0-8X4dcRurW5Xf00viVVZ9v9RDkes\"",
    "mtime": "2023-02-26T14:31:33.058Z",
    "size": 3024,
    "path": "../public/_nuxt/login.48ce8f99.js"
  },
  "/_nuxt/logo.f02090fc.png": {
    "type": "image/png",
    "etag": "\"14c5-q4JfS/XRkEeWZ4Mp8C14M5GiOE0\"",
    "mtime": "2023-02-26T14:31:33.058Z",
    "size": 5317,
    "path": "../public/_nuxt/logo.f02090fc.png"
  },
  "/_nuxt/pageStatusStore.4e239b7c.js": {
    "type": "application/javascript",
    "etag": "\"105-pCWM662pfQMd2esoF5zn8uVoEn4\"",
    "mtime": "2023-02-26T14:31:33.058Z",
    "size": 261,
    "path": "../public/_nuxt/pageStatusStore.4e239b7c.js"
  },
  "/_nuxt/privacy.c1d6bc9d.js": {
    "type": "application/javascript",
    "etag": "\"20d-9SNshKt4KuAlLGTEkTpNUEKOZew\"",
    "mtime": "2023-02-26T14:31:33.057Z",
    "size": 525,
    "path": "../public/_nuxt/privacy.c1d6bc9d.js"
  },
  "/_nuxt/product.30d15dec.js": {
    "type": "application/javascript",
    "etag": "\"14c7-lOB3qIavgsnSJvG44a4JYIutVo4\"",
    "mtime": "2023-02-26T14:31:33.057Z",
    "size": 5319,
    "path": "../public/_nuxt/product.30d15dec.js"
  },
  "/_nuxt/product.78311068.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"15e-cfRiEkd8vvSJ1HH+iP6hKIGDmWQ\"",
    "mtime": "2023-02-26T14:31:33.057Z",
    "size": 350,
    "path": "../public/_nuxt/product.78311068.css"
  },
  "/_nuxt/register.1c449e0d.js": {
    "type": "application/javascript",
    "etag": "\"14ce-7nxP5i5Qz116qukLcPfwQK4jE7k\"",
    "mtime": "2023-02-26T14:31:33.057Z",
    "size": 5326,
    "path": "../public/_nuxt/register.1c449e0d.js"
  },
  "/_nuxt/requestURL.3a47c6b3.js": {
    "type": "application/javascript",
    "etag": "\"2d4-GtQRfVRG1RhJuddrZBuTrh3tTac\"",
    "mtime": "2023-02-26T14:31:33.056Z",
    "size": 724,
    "path": "../public/_nuxt/requestURL.3a47c6b3.js"
  },
  "/_nuxt/shop.208c7764.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1b0-eqnTldDT+GKvmrbRLt27cxEtwk0\"",
    "mtime": "2023-02-26T14:31:33.056Z",
    "size": 432,
    "path": "../public/_nuxt/shop.208c7764.css"
  },
  "/_nuxt/shop.442ec1de.js": {
    "type": "application/javascript",
    "etag": "\"fbe-ePmoIdTQ4QTZnkiWdo7ddthKC5A\"",
    "mtime": "2023-02-26T14:31:33.056Z",
    "size": 4030,
    "path": "../public/_nuxt/shop.442ec1de.js"
  },
  "/_nuxt/swiper-vue.9b7a244a.js": {
    "type": "application/javascript",
    "etag": "\"2974d-y9AT8J0VIibsP3KoykrnqGO+e+E\"",
    "mtime": "2023-02-26T14:31:33.056Z",
    "size": 169805,
    "path": "../public/_nuxt/swiper-vue.9b7a244a.js"
  },
  "/_nuxt/swiper-vue.c8055770.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3d25-bth6D78+Gf02QtW+pMUvNE/x1CI\"",
    "mtime": "2023-02-26T14:31:33.055Z",
    "size": 15653,
    "path": "../public/_nuxt/swiper-vue.c8055770.css"
  },
  "/_nuxt/terms.706fcabe.js": {
    "type": "application/javascript",
    "etag": "\"201-mRH+UHr/moXdmsiCQ69IUwbL3T4\"",
    "mtime": "2023-02-26T14:31:33.055Z",
    "size": 513,
    "path": "../public/_nuxt/terms.706fcabe.js"
  },
  "/_nuxt/wo_index_01.e0db537e.jpg": {
    "type": "image/jpeg",
    "etag": "\"376d9-XEN+FMW9rcfoL93JXIERqrSjPCU\"",
    "mtime": "2023-02-26T14:31:33.055Z",
    "size": 227033,
    "path": "../public/_nuxt/wo_index_01.e0db537e.jpg"
  },
  "/_nuxt/wo_index_02.8961332b.jpg": {
    "type": "image/jpeg",
    "etag": "\"2a204-KFq1C/E9y/VtZPamxDU38+xX2Rk\"",
    "mtime": "2023-02-26T14:31:33.054Z",
    "size": 172548,
    "path": "../public/_nuxt/wo_index_02.8961332b.jpg"
  },
  "/_nuxt/wo_index_03.96437aed.jpg": {
    "type": "image/jpeg",
    "etag": "\"3693d-RKbgt+Kxgj4EggxhrN7+jfncxYI\"",
    "mtime": "2023-02-26T14:31:33.054Z",
    "size": 223549,
    "path": "../public/_nuxt/wo_index_03.96437aed.jpg"
  },
  "/_nuxt/wo_index_04.d21a22fa.jpg": {
    "type": "image/jpeg",
    "etag": "\"34b47-+4p3/U8F+Pco2HI5psuUxtAehqo\"",
    "mtime": "2023-02-26T14:31:33.054Z",
    "size": 215879,
    "path": "../public/_nuxt/wo_index_04.d21a22fa.jpg"
  },
  "/_nuxt/wo_treature.666886f2.jpg": {
    "type": "image/jpeg",
    "etag": "\"2a937-QdOewcGrXOz502xNbC+nXi3/kNw\"",
    "mtime": "2023-02-26T14:31:33.053Z",
    "size": 174391,
    "path": "../public/_nuxt/wo_treature.666886f2.jpg"
  },
  "/_nuxt/wobao.ac5d4f57.js": {
    "type": "application/javascript",
    "etag": "\"13bb-wPj1KIsjHm/SfvmC47mAmUuzVns\"",
    "mtime": "2023-02-26T14:31:33.053Z",
    "size": 5051,
    "path": "../public/_nuxt/wobao.ac5d4f57.js"
  },
  "/products/p1.jpg": {
    "type": "image/jpeg",
    "etag": "\"b892-NxvTUlcbxPVQCHi+ovIhXMo0UKs\"",
    "mtime": "2023-02-26T14:31:33.081Z",
    "size": 47250,
    "path": "../public/products/p1.jpg"
  },
  "/products/p2.jpg": {
    "type": "image/jpeg",
    "etag": "\"13101-VDIk1g/BrGy5OSAdBmM8sRksMJ0\"",
    "mtime": "2023-02-26T14:31:33.080Z",
    "size": 78081,
    "path": "../public/products/p2.jpg"
  },
  "/products/p4.jpg": {
    "type": "image/jpeg",
    "etag": "\"11ffe-ErNoEzZV+VjO90r6l6F+TcRI42o\"",
    "mtime": "2023-02-26T14:31:33.080Z",
    "size": 73726,
    "path": "../public/products/p4.jpg"
  },
  "/products/p5.jpg": {
    "type": "image/jpeg",
    "etag": "\"b8d3-xbT46KeiHcy0u5QlYlbnWBhzm1k\"",
    "mtime": "2023-02-26T14:31:33.080Z",
    "size": 47315,
    "path": "../public/products/p5.jpg"
  },
  "/products/p6.jpg": {
    "type": "image/jpeg",
    "etag": "\"1368f-aoLSapnhqYsxmC5sJJvQqz4y4tQ\"",
    "mtime": "2023-02-26T14:31:33.080Z",
    "size": 79503,
    "path": "../public/products/p6.jpg"
  },
  "/script/script.js": {
    "type": "application/javascript",
    "etag": "\"1829-ACnG07B5O7rGH9AuOH1FAfsAQPQ\"",
    "mtime": "2023-02-26T14:31:33.076Z",
    "size": 6185,
    "path": "../public/script/script.js"
  },
  "/script/slick/slick.js": {
    "type": "application/javascript",
    "etag": "\"15b7b-CX9qG08RXptuvvpw122DBzO8ybo\"",
    "mtime": "2023-02-26T14:31:33.076Z",
    "size": 88955,
    "path": "../public/script/slick/slick.js"
  },
  "/script/slick/slick.min.js": {
    "type": "application/javascript",
    "etag": "\"ef82-3MkWFafkqejIEjMCxZl8EGciYHE\"",
    "mtime": "2023-02-26T14:31:33.076Z",
    "size": 61314,
    "path": "../public/script/slick/slick.min.js"
  },
  "/script/bootstrap/js/bootstrap.js": {
    "type": "application/javascript",
    "etag": "\"1104b-O5ZaNqawiFStbt3t+FxTGf05K0o\"",
    "mtime": "2023-02-26T14:31:33.079Z",
    "size": 69707,
    "path": "../public/script/bootstrap/js/bootstrap.js"
  },
  "/script/bootstrap/js/bootstrap.min.js": {
    "type": "application/javascript",
    "etag": "\"90b5-QwpEPXSDD+m+Ju/KQx9EjBs3QPk\"",
    "mtime": "2023-02-26T14:31:33.079Z",
    "size": 37045,
    "path": "../public/script/bootstrap/js/bootstrap.min.js"
  },
  "/script/bootstrap-touchspin/demo/demo.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1c44-xXcazkR0AUAU+twFD7pWuxPVtEU\"",
    "mtime": "2023-02-26T14:31:33.078Z",
    "size": 7236,
    "path": "../public/script/bootstrap-touchspin/demo/demo.css"
  },
  "/script/bootstrap-touchspin/demo/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"80dc-V4/bBRsusnw1PqCiXeAmkfBSUW8\"",
    "mtime": "2023-02-26T14:31:33.078Z",
    "size": 32988,
    "path": "../public/script/bootstrap-touchspin/demo/favicon.ico"
  },
  "/script/bootstrap-touchspin/demo/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"623d-ZRs41qd44/0EHOLURZcHCK9q7bc\"",
    "mtime": "2023-02-26T14:31:33.078Z",
    "size": 25149,
    "path": "../public/script/bootstrap-touchspin/demo/index.html"
  },
  "/script/bootstrap-touchspin/src/jquery.bootstrap-touchspin.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"304-K1mhvGZCEkb2QsG4ZqT+oHIQB1s\"",
    "mtime": "2023-02-26T14:31:33.077Z",
    "size": 772,
    "path": "../public/script/bootstrap-touchspin/src/jquery.bootstrap-touchspin.css"
  },
  "/script/bootstrap-touchspin/src/jquery.bootstrap-touchspin.js": {
    "type": "application/javascript",
    "etag": "\"4dc5-t2AXOLgf1ub3LI7EU2GCSYwmwaA\"",
    "mtime": "2023-02-26T14:31:33.077Z",
    "size": 19909,
    "path": "../public/script/bootstrap-touchspin/src/jquery.bootstrap-touchspin.js"
  },
  "/script/syo-timer/build/jquery.syotimer(1).js": {
    "type": "application/javascript",
    "etag": "\"26e4-PKc5lzRV0yAQ173y4F8HqxD3niw\"",
    "mtime": "2023-02-26T14:31:33.075Z",
    "size": 9956,
    "path": "../public/script/syo-timer/build/jquery.syotimer(1).js"
  },
  "/script/syo-timer/build/jquery.syotimer.js": {
    "type": "application/javascript",
    "etag": "\"26e4-PKc5lzRV0yAQ173y4F8HqxD3niw\"",
    "mtime": "2023-02-26T14:31:33.075Z",
    "size": 9956,
    "path": "../public/script/syo-timer/build/jquery.syotimer.js"
  },
  "/script/syo-timer/build/jquery.syotimer.min(1).js": {
    "type": "application/javascript",
    "etag": "\"15af-ipVy5+rLygkexJjap72SkqUb3Bw\"",
    "mtime": "2023-02-26T14:31:33.075Z",
    "size": 5551,
    "path": "../public/script/syo-timer/build/jquery.syotimer.min(1).js"
  },
  "/script/syo-timer/build/jquery.syotimer.min.js": {
    "type": "application/javascript",
    "etag": "\"15af-ipVy5+rLygkexJjap72SkqUb3Bw\"",
    "mtime": "2023-02-26T14:31:33.074Z",
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
