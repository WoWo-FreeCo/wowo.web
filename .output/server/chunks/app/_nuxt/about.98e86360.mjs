import { _ as _export_sfc, u as useRuntimeConfig } from '../server.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'axios';
import 'naive-ui';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useRuntimeConfig();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-3e52662a><section class="page-header" data-v-3e52662a><div class="container" data-v-3e52662a><h1 data-v-3e52662a>\u95DC\u65BC\u6211\u5011</h1><ol class="breadcrumb" data-v-3e52662a><li data-v-3e52662a><a href="/" data-v-3e52662a>Home</a></li><li class="active" data-v-3e52662a> \u95DC\u65BC\u6211\u5011 </li></ol></div></section><div data-v-3e52662a><iframe src="https://lovin.tw/wo-aboutlovin/" frameborder="0" data-v-3e52662a></iframe></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3e52662a"]]);

export { about as default };
//# sourceMappingURL=about.98e86360.mjs.map