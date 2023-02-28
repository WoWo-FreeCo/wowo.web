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

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routeRules":{"/__nuxt_error":{"cache":false}},"envPrefix":"NUXT_"},"public":{"baseUrl":"https://wo.wowo.tw","apiBase":"https://api.wowo.tw","device":{"enabled":true,"defaultUserAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36","refreshOnResize":false}},"apiSecret":""};
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
    "mtime": "2023-02-28T00:04:09.013Z",
    "size": 10244,
    "path": "../public/.DS_Store"
  },
  "/favicon.png": {
    "type": "image/png",
    "etag": "\"1dbf-s3I2R0kLu9ixED7iZwi0zbwJJeA\"",
    "mtime": "2023-02-28T00:04:09.013Z",
    "size": 7615,
    "path": "../public/favicon.png"
  },
  "/mockServiceWorker.js": {
    "type": "application/javascript",
    "etag": "\"1fc6-4FLWfauiVQGDWxZULJBwNxver/E\"",
    "mtime": "2023-02-28T00:04:09.012Z",
    "size": 8134,
    "path": "../public/mockServiceWorker.js"
  },
  "/nuxt3-logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"3e2-zrywS1vPCL9MD3e4wyCiVOux1NU\"",
    "mtime": "2023-02-28T00:04:09.012Z",
    "size": 994,
    "path": "../public/nuxt3-logo.svg"
  },
  "/_nuxt/1.3d691caf.jpg": {
    "type": "image/jpeg",
    "etag": "\"1a4ca-mlRkyPbBq8B0g2qvxQnpc92+H3I\"",
    "mtime": "2023-02-28T00:04:09.002Z",
    "size": 107722,
    "path": "../public/_nuxt/1.3d691caf.jpg"
  },
  "/_nuxt/1.8956a96f.js": {
    "type": "application/javascript",
    "etag": "\"4a-GTWKzUdbyzTfqVrE298noalma6I\"",
    "mtime": "2023-02-28T00:04:09.002Z",
    "size": 74,
    "path": "../public/_nuxt/1.8956a96f.js"
  },
  "/_nuxt/1.bcb2cf70.jpg": {
    "type": "image/jpeg",
    "etag": "\"1aea0-3svT/8G2wzbM7UeRyPElFmeG4nU\"",
    "mtime": "2023-02-28T00:04:09.002Z",
    "size": 110240,
    "path": "../public/_nuxt/1.bcb2cf70.jpg"
  },
  "/_nuxt/1.c672514a.jpg": {
    "type": "image/jpeg",
    "etag": "\"65792-hv/FKdwAgVwMw/MbA1qNlVcN0EM\"",
    "mtime": "2023-02-28T00:04:09.001Z",
    "size": 415634,
    "path": "../public/_nuxt/1.c672514a.jpg"
  },
  "/_nuxt/2009.5abd421b.js": {
    "type": "application/javascript",
    "etag": "\"4d-To5zLdNgyG4m2XSlVZ3tnXiRpsQ\"",
    "mtime": "2023-02-28T00:04:09.000Z",
    "size": 77,
    "path": "../public/_nuxt/2009.5abd421b.js"
  },
  "/_nuxt/2009.cb07c592.jpg": {
    "type": "image/jpeg",
    "etag": "\"16a75-7hEgN5Uz9MPVZ/UDkzmrLi+tbYE\"",
    "mtime": "2023-02-28T00:04:09.000Z",
    "size": 92789,
    "path": "../public/_nuxt/2009.cb07c592.jpg"
  },
  "/_nuxt/ProfileSidebar.5140fc5b.js": {
    "type": "application/javascript",
    "etag": "\"fdf-YWkHIjkIZz1KcDxOjCLOKy1jVmM\"",
    "mtime": "2023-02-28T00:04:09.000Z",
    "size": 4063,
    "path": "../public/_nuxt/ProfileSidebar.5140fc5b.js"
  },
  "/_nuxt/about.6db8193d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7f-pTTiHNzzQefDNJp6DECD0Ik/lQo\"",
    "mtime": "2023-02-28T00:04:08.999Z",
    "size": 127,
    "path": "../public/_nuxt/about.6db8193d.css"
  },
  "/_nuxt/about.b6d4f107.js": {
    "type": "application/javascript",
    "etag": "\"3c5-NoFjic9MjxnxOOwG5Yw01iX0qLw\"",
    "mtime": "2023-02-28T00:04:08.999Z",
    "size": 965,
    "path": "../public/_nuxt/about.b6d4f107.js"
  },
  "/_nuxt/aboutlovin.3b68e28b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"a5-NkvfStxnMQ9AvxiCFNi/YV3W4Xg\"",
    "mtime": "2023-02-28T00:04:08.999Z",
    "size": 165,
    "path": "../public/_nuxt/aboutlovin.3b68e28b.css"
  },
  "/_nuxt/aboutlovin.be25a93c.js": {
    "type": "application/javascript",
    "etag": "\"17f-DmuWiCbker162558WJwO/c8+w7A\"",
    "mtime": "2023-02-28T00:04:08.999Z",
    "size": 383,
    "path": "../public/_nuxt/aboutlovin.be25a93c.js"
  },
  "/_nuxt/activity.cf145749.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"59-hmMmg2TJbXZHuHZ8LalyWXbLkxo\"",
    "mtime": "2023-02-28T00:04:08.998Z",
    "size": 89,
    "path": "../public/_nuxt/activity.cf145749.css"
  },
  "/_nuxt/activity.fec54112.js": {
    "type": "application/javascript",
    "etag": "\"1a60-DjNFFO1NZL8gbAGH47T6WnfyZIU\"",
    "mtime": "2023-02-28T00:04:08.998Z",
    "size": 6752,
    "path": "../public/_nuxt/activity.fec54112.js"
  },
  "/_nuxt/admin.26657194.js": {
    "type": "application/javascript",
    "etag": "\"23d-ufkP24MFqVScqepk4lEH/K5p2PU\"",
    "mtime": "2023-02-28T00:04:08.998Z",
    "size": 573,
    "path": "../public/_nuxt/admin.26657194.js"
  },
  "/_nuxt/admin.b3d9343e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"c6-4Z8v+OYkJFv3AO1nDLXAYhly1+w\"",
    "mtime": "2023-02-28T00:04:08.998Z",
    "size": 198,
    "path": "../public/_nuxt/admin.b3d9343e.css"
  },
  "/_nuxt/api-and-store-example.42ae277f.js": {
    "type": "application/javascript",
    "etag": "\"1b0f3-scc8hBw9K5FR32LElRM2BMPHQuc\"",
    "mtime": "2023-02-28T00:04:08.998Z",
    "size": 110835,
    "path": "../public/_nuxt/api-and-store-example.42ae277f.js"
  },
  "/_nuxt/api-and-store-example.dd64dcb9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2f5d-NIpUTfn7yt/WxzdOrVzCveZdbMs\"",
    "mtime": "2023-02-28T00:04:08.997Z",
    "size": 12125,
    "path": "../public/_nuxt/api-and-store-example.dd64dcb9.css"
  },
  "/_nuxt/authStore.163d7370.js": {
    "type": "application/javascript",
    "etag": "\"190-174iy9e6pADrEBVOtHgTZJYsC14\"",
    "mtime": "2023-02-28T00:04:08.997Z",
    "size": 400,
    "path": "../public/_nuxt/authStore.163d7370.js"
  },
  "/_nuxt/bid.ecfb764d.js": {
    "type": "application/javascript",
    "etag": "\"1aac-wgXUN6cbkP3j6kfNiSFufEGBfqg\"",
    "mtime": "2023-02-28T00:04:08.997Z",
    "size": 6828,
    "path": "../public/_nuxt/bid.ecfb764d.js"
  },
  "/_nuxt/bonus-point.9369f6b0.js": {
    "type": "application/javascript",
    "etag": "\"bee-YTe4uVuXTEIgdfatsaIHp2oo2TE\"",
    "mtime": "2023-02-28T00:04:08.996Z",
    "size": 3054,
    "path": "../public/_nuxt/bonus-point.9369f6b0.js"
  },
  "/_nuxt/bonus-point.e4e6a63c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"220-S1hbYhRnDtJ31KaKeyz0DkfDbKs\"",
    "mtime": "2023-02-28T00:04:08.996Z",
    "size": 544,
    "path": "../public/_nuxt/bonus-point.e4e6a63c.css"
  },
  "/_nuxt/cart.cc66753c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"12f-A1TxMRT3FxwpA8iD/elejydKl78\"",
    "mtime": "2023-02-28T00:04:08.996Z",
    "size": 303,
    "path": "../public/_nuxt/cart.cc66753c.css"
  },
  "/_nuxt/cart.cd68b2a0.js": {
    "type": "application/javascript",
    "etag": "\"11cd-1I2BC41J7yiyiz+vej3uHNKoTac\"",
    "mtime": "2023-02-28T00:04:08.996Z",
    "size": 4557,
    "path": "../public/_nuxt/cart.cd68b2a0.js"
  },
  "/_nuxt/cartStore.42d3b07f.js": {
    "type": "application/javascript",
    "etag": "\"90-Lz54ZnonUTsdz/Q4J0pHbLiRYmc\"",
    "mtime": "2023-02-28T00:04:08.995Z",
    "size": 144,
    "path": "../public/_nuxt/cartStore.42d3b07f.js"
  },
  "/_nuxt/checkout.8345d1e2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"a7-IoreBkBCIPQ0ZBoxByLQpePNx7w\"",
    "mtime": "2023-02-28T00:04:08.995Z",
    "size": 167,
    "path": "../public/_nuxt/checkout.8345d1e2.css"
  },
  "/_nuxt/checkout.fb2f2fe8.js": {
    "type": "application/javascript",
    "etag": "\"2b2c-9KBf5VxlRbnrRCIJuHxK4fzOuyA\"",
    "mtime": "2023-02-28T00:04:08.995Z",
    "size": 11052,
    "path": "../public/_nuxt/checkout.fb2f2fe8.js"
  },
  "/_nuxt/client-only.448648bc.js": {
    "type": "application/javascript",
    "etag": "\"1d9-ROKNZFLrx1w1N0tgQMzLJYj6kT4\"",
    "mtime": "2023-02-28T00:04:08.995Z",
    "size": 473,
    "path": "../public/_nuxt/client-only.448648bc.js"
  },
  "/_nuxt/common.b877c4b5.js": {
    "type": "application/javascript",
    "etag": "\"e0-JfezHTjYARxsyPeyvu+zFv+i87M\"",
    "mtime": "2023-02-28T00:04:08.994Z",
    "size": 224,
    "path": "../public/_nuxt/common.b877c4b5.js"
  },
  "/_nuxt/composables.fd94adfa.js": {
    "type": "application/javascript",
    "etag": "\"61-A9A4XFgaHDAGpZogbQN6WktAP+I\"",
    "mtime": "2023-02-28T00:04:08.994Z",
    "size": 97,
    "path": "../public/_nuxt/composables.fd94adfa.js"
  },
  "/_nuxt/contact.9c5c094b.js": {
    "type": "application/javascript",
    "etag": "\"30c-7pcE4QSoBzJMO+9Kz81hecR9ICE\"",
    "mtime": "2023-02-28T00:04:08.994Z",
    "size": 780,
    "path": "../public/_nuxt/contact.9c5c094b.js"
  },
  "/_nuxt/contact.da4a15fd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"a5-NhIvxio0VPdp1JLRPCSIxl14aw8\"",
    "mtime": "2023-02-28T00:04:08.994Z",
    "size": 165,
    "path": "../public/_nuxt/contact.da4a15fd.css"
  },
  "/_nuxt/cookie.b23b16b5.js": {
    "type": "application/javascript",
    "etag": "\"850-g4kcEDxHbLBzASy1n+R6KlybSkc\"",
    "mtime": "2023-02-28T00:04:08.993Z",
    "size": 2128,
    "path": "../public/_nuxt/cookie.b23b16b5.js"
  },
  "/_nuxt/cvs_callback.71a781c4.js": {
    "type": "application/javascript",
    "etag": "\"2da-Fp6l8Nwwwn/DTNBUn9C5Cc4Cf0s\"",
    "mtime": "2023-02-28T00:04:08.993Z",
    "size": 730,
    "path": "../public/_nuxt/cvs_callback.71a781c4.js"
  },
  "/_nuxt/default.2a9fc91f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"536-74hpzEWSj1wOfvd+uIctf42fgRY\"",
    "mtime": "2023-02-28T00:04:08.993Z",
    "size": 1334,
    "path": "../public/_nuxt/default.2a9fc91f.css"
  },
  "/_nuxt/default.d485da3d.js": {
    "type": "application/javascript",
    "etag": "\"28c4-D1+Y/8d1o4ycAe4qwB+yCppdffA\"",
    "mtime": "2023-02-28T00:04:08.992Z",
    "size": 10436,
    "path": "../public/_nuxt/default.d485da3d.js"
  },
  "/_nuxt/detail.90ae6c19.js": {
    "type": "application/javascript",
    "etag": "\"12e9-VSRYrsyVLkwmB/DHITMj+I33a8Y\"",
    "mtime": "2023-02-28T00:04:08.992Z",
    "size": 4841,
    "path": "../public/_nuxt/detail.90ae6c19.js"
  },
  "/_nuxt/detail.a273e0c1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3a-u1eE7KBiSyZhkGDZqUv3DtBcGlM\"",
    "mtime": "2023-02-28T00:04:08.992Z",
    "size": 58,
    "path": "../public/_nuxt/detail.a273e0c1.css"
  },
  "/_nuxt/entry.27c155a0.js": {
    "type": "application/javascript",
    "etag": "\"1b1665-Ocvl2HDIoucBvmZQc0t8K/Rq2qU\"",
    "mtime": "2023-02-28T00:04:08.992Z",
    "size": 1775205,
    "path": "../public/_nuxt/entry.27c155a0.js"
  },
  "/_nuxt/entry.c1f74cc0.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"538fd-ItMTllBsE1a5PVaXr4xb2K0fx9M\"",
    "mtime": "2023-02-28T00:04:08.990Z",
    "size": 342269,
    "path": "../public/_nuxt/entry.c1f74cc0.css"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2023-02-28T00:04:08.989Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-404.ee41f897.js": {
    "type": "application/javascript",
    "etag": "\"8fa-emlwcuRIH3Lf4ccebdWr00MQKdY\"",
    "mtime": "2023-02-28T00:04:08.989Z",
    "size": 2298,
    "path": "../public/_nuxt/error-404.ee41f897.js"
  },
  "/_nuxt/error-500.7eda6e31.js": {
    "type": "application/javascript",
    "etag": "\"7a2-QGhcu/sJOey4LJ/oTddE7iZFTH4\"",
    "mtime": "2023-02-28T00:04:08.989Z",
    "size": 1954,
    "path": "../public/_nuxt/error-500.7eda6e31.js"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2023-02-28T00:04:08.988Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/error-component.c142c364.js": {
    "type": "application/javascript",
    "etag": "\"545-/7kATah5EU0L+I0sTjHp0w3HEgM\"",
    "mtime": "2023-02-28T00:04:08.988Z",
    "size": 1349,
    "path": "../public/_nuxt/error-component.c142c364.js"
  },
  "/_nuxt/fa-brands-400.2cd4cf89.ttf": {
    "type": "font/ttf",
    "etag": "\"2c410-+ldF1CHA/JCShia+mOn4z3WAsyc\"",
    "mtime": "2023-02-28T00:04:08.988Z",
    "size": 181264,
    "path": "../public/_nuxt/fa-brands-400.2cd4cf89.ttf"
  },
  "/_nuxt/fa-brands-400.967394d1.woff2": {
    "type": "font/woff2",
    "etag": "\"19a98-4hmvHju8Ihk1nT0JFuJjsnnEq/0\"",
    "mtime": "2023-02-28T00:04:08.987Z",
    "size": 105112,
    "path": "../public/_nuxt/fa-brands-400.967394d1.woff2"
  },
  "/_nuxt/fa-regular-400.52ec4d83.woff2": {
    "type": "font/woff2",
    "etag": "\"5ddc-96Cby9mW/WNARdTnm2UEyUVzBoY\"",
    "mtime": "2023-02-28T00:04:08.987Z",
    "size": 24028,
    "path": "../public/_nuxt/fa-regular-400.52ec4d83.woff2"
  },
  "/_nuxt/fa-regular-400.e2d44fc8.ttf": {
    "type": "font/ttf",
    "etag": "\"eb4c-mybXRaHmmyPXG36jbV3hIJyZeQE\"",
    "mtime": "2023-02-28T00:04:08.987Z",
    "size": 60236,
    "path": "../public/_nuxt/fa-regular-400.e2d44fc8.ttf"
  },
  "/_nuxt/fa-solid-900.52bbd916.woff2": {
    "type": "font/woff2",
    "etag": "\"25cd8-GXkSjouhUX2F9eTuUFq/SGxRVXw\"",
    "mtime": "2023-02-28T00:04:08.986Z",
    "size": 154840,
    "path": "../public/_nuxt/fa-solid-900.52bbd916.woff2"
  },
  "/_nuxt/fa-solid-900.5808ca8f.ttf": {
    "type": "font/ttf",
    "etag": "\"5f33c-4zOUAO9iFM+gd9AD2u0r+mWeKVY\"",
    "mtime": "2023-02-28T00:04:08.986Z",
    "size": 389948,
    "path": "../public/_nuxt/fa-solid-900.5808ca8f.ttf"
  },
  "/_nuxt/fa-v4compatibility.58ccbdf2.ttf": {
    "type": "font/ttf",
    "etag": "\"2764-P8FcgVT4vS170d/lWuWrHDPl5A8\"",
    "mtime": "2023-02-28T00:04:08.985Z",
    "size": 10084,
    "path": "../public/_nuxt/fa-v4compatibility.58ccbdf2.ttf"
  },
  "/_nuxt/fa-v4compatibility.b8f0081f.woff2": {
    "type": "font/woff2",
    "etag": "\"12a8-N6sqaggQ1abBCjVf4devAEK9aio\"",
    "mtime": "2023-02-28T00:04:08.985Z",
    "size": 4776,
    "path": "../public/_nuxt/fa-v4compatibility.b8f0081f.woff2"
  },
  "/_nuxt/faq.1b6eb67a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"ce-Cb0VNgT8bYAtH6dPdgkGZNULsQs\"",
    "mtime": "2023-02-28T00:04:08.985Z",
    "size": 206,
    "path": "../public/_nuxt/faq.1b6eb67a.css"
  },
  "/_nuxt/faq.9f68c4f6.js": {
    "type": "application/javascript",
    "etag": "\"3d9-IasLciwU6tvVT44bjvHK+X025kI\"",
    "mtime": "2023-02-28T00:04:08.984Z",
    "size": 985,
    "path": "../public/_nuxt/faq.9f68c4f6.js"
  },
  "/_nuxt/favorite.9d8e4879.js": {
    "type": "application/javascript",
    "etag": "\"e03-e2Q7QH81YyvridxWl/nPK81byZQ\"",
    "mtime": "2023-02-28T00:04:08.984Z",
    "size": 3587,
    "path": "../public/_nuxt/favorite.9d8e4879.js"
  },
  "/_nuxt/favorite.d928748d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"95-6f3cFm+933Xw6K1yKos/azps/9M\"",
    "mtime": "2023-02-28T00:04:08.984Z",
    "size": 149,
    "path": "../public/_nuxt/favorite.d928748d.css"
  },
  "/_nuxt/footer_bg.dbde9adb.jpg": {
    "type": "image/jpeg",
    "etag": "\"c11f-vjap9J1MStBQB+glBu5OzUIyIJ4\"",
    "mtime": "2023-02-28T00:04:08.983Z",
    "size": 49439,
    "path": "../public/_nuxt/footer_bg.dbde9adb.jpg"
  },
  "/_nuxt/forget.c7635158.js": {
    "type": "application/javascript",
    "etag": "\"86d-+irEyu78YDLqdPMS0DoJu4S5fsA\"",
    "mtime": "2023-02-28T00:04:08.983Z",
    "size": 2157,
    "path": "../public/_nuxt/forget.c7635158.js"
  },
  "/_nuxt/index.06eaeea8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2a-Vh7NGN7K3yVkAfxkh8dg97wqYxw\"",
    "mtime": "2023-02-28T00:04:08.983Z",
    "size": 42,
    "path": "../public/_nuxt/index.06eaeea8.css"
  },
  "/_nuxt/index.1530fa25.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"220-hc+8/IWpJlhoDudlabQvmE1GnAc\"",
    "mtime": "2023-02-28T00:04:08.982Z",
    "size": 544,
    "path": "../public/_nuxt/index.1530fa25.css"
  },
  "/_nuxt/index.43514cda.js": {
    "type": "application/javascript",
    "etag": "\"113f-N9/dk6dFFssj+7d8uQt/VIHR7ZQ\"",
    "mtime": "2023-02-28T00:04:08.982Z",
    "size": 4415,
    "path": "../public/_nuxt/index.43514cda.js"
  },
  "/_nuxt/index.5893fd7c.js": {
    "type": "application/javascript",
    "etag": "\"101b-oPglUctqLYnt8FO5LW+erdfQ3fs\"",
    "mtime": "2023-02-28T00:04:08.981Z",
    "size": 4123,
    "path": "../public/_nuxt/index.5893fd7c.js"
  },
  "/_nuxt/index.5fe09e2c.js": {
    "type": "application/javascript",
    "etag": "\"2a50-qtJ62eGKFF2Ue9rjhjynrLpxaTE\"",
    "mtime": "2023-02-28T00:04:08.981Z",
    "size": 10832,
    "path": "../public/_nuxt/index.5fe09e2c.js"
  },
  "/_nuxt/index.a01d6d3b.js": {
    "type": "application/javascript",
    "etag": "\"555fc-ywLtbrll1nPk7ShzyW9feaTKxwk\"",
    "mtime": "2023-02-28T00:04:08.980Z",
    "size": 349692,
    "path": "../public/_nuxt/index.a01d6d3b.js"
  },
  "/_nuxt/index.dea47e47.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6e2-63t0bSphZ9xIANU1sUtoFAuFw1w\"",
    "mtime": "2023-02-28T00:04:08.979Z",
    "size": 1762,
    "path": "../public/_nuxt/index.dea47e47.css"
  },
  "/_nuxt/index.dfba0fe6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"83-2cyvMA+uFTUYi+24DpKYj4gDngU\"",
    "mtime": "2023-02-28T00:04:08.979Z",
    "size": 131,
    "path": "../public/_nuxt/index.dfba0fe6.css"
  },
  "/_nuxt/login.5efb2890.js": {
    "type": "application/javascript",
    "etag": "\"a6d-2FnZmSRztdP6pZcj9VhVFuYdZWw\"",
    "mtime": "2023-02-28T00:04:08.978Z",
    "size": 2669,
    "path": "../public/_nuxt/login.5efb2890.js"
  },
  "/_nuxt/login.dd900388.js": {
    "type": "application/javascript",
    "etag": "\"83a-4ap+nmTDiEgh+V/+6Z85rWZKyJ4\"",
    "mtime": "2023-02-28T00:04:08.978Z",
    "size": 2106,
    "path": "../public/_nuxt/login.dd900388.js"
  },
  "/_nuxt/logo.f02090fc.png": {
    "type": "image/png",
    "etag": "\"14c5-q4JfS/XRkEeWZ4Mp8C14M5GiOE0\"",
    "mtime": "2023-02-28T00:04:08.978Z",
    "size": 5317,
    "path": "../public/_nuxt/logo.f02090fc.png"
  },
  "/_nuxt/pageStatusStore.63a4484b.js": {
    "type": "application/javascript",
    "etag": "\"18b-yxtwkI+HKj/E12B8u/Aks2osnr0\"",
    "mtime": "2023-02-28T00:04:08.977Z",
    "size": 395,
    "path": "../public/_nuxt/pageStatusStore.63a4484b.js"
  },
  "/_nuxt/privacy.067cf92a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7f-Jm2WQUCONGZE4rDTkn74hB9zRgg\"",
    "mtime": "2023-02-28T00:04:08.977Z",
    "size": 127,
    "path": "../public/_nuxt/privacy.067cf92a.css"
  },
  "/_nuxt/privacy.d8e8f749.js": {
    "type": "application/javascript",
    "etag": "\"3ce-KjeONOPOX7upr5I23hZiSKQFf1k\"",
    "mtime": "2023-02-28T00:04:08.976Z",
    "size": 974,
    "path": "../public/_nuxt/privacy.d8e8f749.js"
  },
  "/_nuxt/product.722e281f.js": {
    "type": "application/javascript",
    "etag": "\"13f6-O3fLfe/a0mj/l9BB5+m6bsAN5Zk\"",
    "mtime": "2023-02-28T00:04:08.976Z",
    "size": 5110,
    "path": "../public/_nuxt/product.722e281f.js"
  },
  "/_nuxt/product.af0df37b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"15e-5sYHlfgbfvgSSRoa6mZlZn2znMk\"",
    "mtime": "2023-02-28T00:04:08.976Z",
    "size": 350,
    "path": "../public/_nuxt/product.af0df37b.css"
  },
  "/_nuxt/register.ef2c828b.js": {
    "type": "application/javascript",
    "etag": "\"121f-2PZoxAewU0EwGvyw3Vq1PRK7/HI\"",
    "mtime": "2023-02-28T00:04:08.975Z",
    "size": 4639,
    "path": "../public/_nuxt/register.ef2c828b.js"
  },
  "/_nuxt/requestURL.06cc9186.js": {
    "type": "application/javascript",
    "etag": "\"3d4-xwXlFOlMvmgmpHn9BD3RPKv4UUc\"",
    "mtime": "2023-02-28T00:04:08.975Z",
    "size": 980,
    "path": "../public/_nuxt/requestURL.06cc9186.js"
  },
  "/_nuxt/return-help.c4ffe3f3.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7f-92g8lGy4qUFPOzekBjNso/2H9Pw\"",
    "mtime": "2023-02-28T00:04:08.975Z",
    "size": 127,
    "path": "../public/_nuxt/return-help.c4ffe3f3.css"
  },
  "/_nuxt/return-help.f3fc37f8.js": {
    "type": "application/javascript",
    "etag": "\"3d2-xNDxVfqM/+98MgjYolMM4+JJuWM\"",
    "mtime": "2023-02-28T00:04:08.974Z",
    "size": 978,
    "path": "../public/_nuxt/return-help.f3fc37f8.js"
  },
  "/_nuxt/share_ad.31ea5396.jpg": {
    "type": "image/jpeg",
    "etag": "\"5c328-7SE9WGpmewcAyeUjDIaQ1UlhTYU\"",
    "mtime": "2023-02-28T00:04:08.974Z",
    "size": 377640,
    "path": "../public/_nuxt/share_ad.31ea5396.jpg"
  },
  "/_nuxt/shop.61da7194.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1b0-JSxNCfsC24juWIbrsTVCxNN56SE\"",
    "mtime": "2023-02-28T00:04:08.973Z",
    "size": 432,
    "path": "../public/_nuxt/shop.61da7194.css"
  },
  "/_nuxt/shop.7de5d7a2.js": {
    "type": "application/javascript",
    "etag": "\"ffb-XeFlXPBqLZviIAw7kfrscOTVteU\"",
    "mtime": "2023-02-28T00:04:08.973Z",
    "size": 4091,
    "path": "../public/_nuxt/shop.7de5d7a2.js"
  },
  "/_nuxt/swiper-vue.ba6f8b0a.js": {
    "type": "application/javascript",
    "etag": "\"29911-fgdBzlPBJPq0zR3bqm1wEGU4Fdk\"",
    "mtime": "2023-02-28T00:04:08.973Z",
    "size": 170257,
    "path": "../public/_nuxt/swiper-vue.ba6f8b0a.js"
  },
  "/_nuxt/swiper-vue.c8055770.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3d25-bth6D78+Gf02QtW+pMUvNE/x1CI\"",
    "mtime": "2023-02-28T00:04:08.972Z",
    "size": 15653,
    "path": "../public/_nuxt/swiper-vue.c8055770.css"
  },
  "/_nuxt/terms.9d9c8b4f.js": {
    "type": "application/javascript",
    "etag": "\"3c0-oMI0G2hysiKpJw/bO5DXg7wYmzM\"",
    "mtime": "2023-02-28T00:04:08.972Z",
    "size": 960,
    "path": "../public/_nuxt/terms.9d9c8b4f.js"
  },
  "/_nuxt/terms.ff182d63.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7f-M+9IvEC0x4fi5qCyhF4tQK2kirQ\"",
    "mtime": "2023-02-28T00:04:08.972Z",
    "size": 127,
    "path": "../public/_nuxt/terms.ff182d63.css"
  },
  "/_nuxt/wo_treature.666886f2.jpg": {
    "type": "image/jpeg",
    "etag": "\"2a937-QdOewcGrXOz502xNbC+nXi3/kNw\"",
    "mtime": "2023-02-28T00:04:08.971Z",
    "size": 174391,
    "path": "../public/_nuxt/wo_treature.666886f2.jpg"
  },
  "/_nuxt/wobao.2d9b54fb.js": {
    "type": "application/javascript",
    "etag": "\"13ba-zrfHP2dznW42zFU55YOJ5bHtP0I\"",
    "mtime": "2023-02-28T00:04:08.971Z",
    "size": 5050,
    "path": "../public/_nuxt/wobao.2d9b54fb.js"
  },
  "/products/p1.jpg": {
    "type": "image/jpeg",
    "etag": "\"b892-NxvTUlcbxPVQCHi+ovIhXMo0UKs\"",
    "mtime": "2023-02-28T00:04:09.011Z",
    "size": 47250,
    "path": "../public/products/p1.jpg"
  },
  "/products/p2.jpg": {
    "type": "image/jpeg",
    "etag": "\"13101-VDIk1g/BrGy5OSAdBmM8sRksMJ0\"",
    "mtime": "2023-02-28T00:04:09.011Z",
    "size": 78081,
    "path": "../public/products/p2.jpg"
  },
  "/products/p4.jpg": {
    "type": "image/jpeg",
    "etag": "\"11ffe-ErNoEzZV+VjO90r6l6F+TcRI42o\"",
    "mtime": "2023-02-28T00:04:09.011Z",
    "size": 73726,
    "path": "../public/products/p4.jpg"
  },
  "/products/p5.jpg": {
    "type": "image/jpeg",
    "etag": "\"b8d3-xbT46KeiHcy0u5QlYlbnWBhzm1k\"",
    "mtime": "2023-02-28T00:04:09.010Z",
    "size": 47315,
    "path": "../public/products/p5.jpg"
  },
  "/products/p6.jpg": {
    "type": "image/jpeg",
    "etag": "\"1368f-aoLSapnhqYsxmC5sJJvQqz4y4tQ\"",
    "mtime": "2023-02-28T00:04:09.010Z",
    "size": 79503,
    "path": "../public/products/p6.jpg"
  },
  "/script/script.js": {
    "type": "application/javascript",
    "etag": "\"1829-ACnG07B5O7rGH9AuOH1FAfsAQPQ\"",
    "mtime": "2023-02-28T00:04:09.006Z",
    "size": 6185,
    "path": "../public/script/script.js"
  },
  "/script/slick/slick.js": {
    "type": "application/javascript",
    "etag": "\"15b7b-CX9qG08RXptuvvpw122DBzO8ybo\"",
    "mtime": "2023-02-28T00:04:09.006Z",
    "size": 88955,
    "path": "../public/script/slick/slick.js"
  },
  "/script/slick/slick.min.js": {
    "type": "application/javascript",
    "etag": "\"ef82-3MkWFafkqejIEjMCxZl8EGciYHE\"",
    "mtime": "2023-02-28T00:04:09.006Z",
    "size": 61314,
    "path": "../public/script/slick/slick.min.js"
  },
  "/script/bootstrap/js/bootstrap.js": {
    "type": "application/javascript",
    "etag": "\"1104b-O5ZaNqawiFStbt3t+FxTGf05K0o\"",
    "mtime": "2023-02-28T00:04:09.009Z",
    "size": 69707,
    "path": "../public/script/bootstrap/js/bootstrap.js"
  },
  "/script/bootstrap/js/bootstrap.min.js": {
    "type": "application/javascript",
    "etag": "\"90b5-QwpEPXSDD+m+Ju/KQx9EjBs3QPk\"",
    "mtime": "2023-02-28T00:04:09.009Z",
    "size": 37045,
    "path": "../public/script/bootstrap/js/bootstrap.min.js"
  },
  "/script/bootstrap-touchspin/demo/demo.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1c44-xXcazkR0AUAU+twFD7pWuxPVtEU\"",
    "mtime": "2023-02-28T00:04:09.008Z",
    "size": 7236,
    "path": "../public/script/bootstrap-touchspin/demo/demo.css"
  },
  "/script/bootstrap-touchspin/demo/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"80dc-V4/bBRsusnw1PqCiXeAmkfBSUW8\"",
    "mtime": "2023-02-28T00:04:09.008Z",
    "size": 32988,
    "path": "../public/script/bootstrap-touchspin/demo/favicon.ico"
  },
  "/script/bootstrap-touchspin/demo/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"623d-ZRs41qd44/0EHOLURZcHCK9q7bc\"",
    "mtime": "2023-02-28T00:04:09.008Z",
    "size": 25149,
    "path": "../public/script/bootstrap-touchspin/demo/index.html"
  },
  "/script/bootstrap-touchspin/src/jquery.bootstrap-touchspin.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"304-K1mhvGZCEkb2QsG4ZqT+oHIQB1s\"",
    "mtime": "2023-02-28T00:04:09.007Z",
    "size": 772,
    "path": "../public/script/bootstrap-touchspin/src/jquery.bootstrap-touchspin.css"
  },
  "/script/bootstrap-touchspin/src/jquery.bootstrap-touchspin.js": {
    "type": "application/javascript",
    "etag": "\"4dc5-t2AXOLgf1ub3LI7EU2GCSYwmwaA\"",
    "mtime": "2023-02-28T00:04:09.007Z",
    "size": 19909,
    "path": "../public/script/bootstrap-touchspin/src/jquery.bootstrap-touchspin.js"
  },
  "/script/syo-timer/build/jquery.syotimer(1).js": {
    "type": "application/javascript",
    "etag": "\"26e4-PKc5lzRV0yAQ173y4F8HqxD3niw\"",
    "mtime": "2023-02-28T00:04:09.005Z",
    "size": 9956,
    "path": "../public/script/syo-timer/build/jquery.syotimer(1).js"
  },
  "/script/syo-timer/build/jquery.syotimer.js": {
    "type": "application/javascript",
    "etag": "\"26e4-PKc5lzRV0yAQ173y4F8HqxD3niw\"",
    "mtime": "2023-02-28T00:04:09.005Z",
    "size": 9956,
    "path": "../public/script/syo-timer/build/jquery.syotimer.js"
  },
  "/script/syo-timer/build/jquery.syotimer.min(1).js": {
    "type": "application/javascript",
    "etag": "\"15af-ipVy5+rLygkexJjap72SkqUb3Bw\"",
    "mtime": "2023-02-28T00:04:09.004Z",
    "size": 5551,
    "path": "../public/script/syo-timer/build/jquery.syotimer.min(1).js"
  },
  "/script/syo-timer/build/jquery.syotimer.min.js": {
    "type": "application/javascript",
    "etag": "\"15af-ipVy5+rLygkexJjap72SkqUb3Bw\"",
    "mtime": "2023-02-28T00:04:09.004Z",
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
