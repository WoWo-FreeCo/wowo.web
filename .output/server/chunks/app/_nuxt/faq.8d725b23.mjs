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
  __name: "faq",
  __ssrInlineRender: true,
  setup(__props) {
    useRuntimeConfig();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-eb2ecfc9><section class="page-header" data-v-eb2ecfc9><div class="container" data-v-eb2ecfc9><h1 data-v-eb2ecfc9>\u5E38\u898B\u554F\u984C</h1><ol class="breadcrumb" data-v-eb2ecfc9><li data-v-eb2ecfc9><a href="/" data-v-eb2ecfc9>Home</a></li><li class="active" data-v-eb2ecfc9> \u5E38\u898B\u554F\u984C </li></ol></div></section><div data-v-eb2ecfc9><iframe src="https://lovin.tw/wo-faq/" frameborder="0" data-v-eb2ecfc9></iframe></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const faq = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-eb2ecfc9"]]);

export { faq as default };
//# sourceMappingURL=faq.8d725b23.mjs.map
