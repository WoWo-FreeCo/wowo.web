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
  __name: "terms",
  __ssrInlineRender: true,
  setup(__props) {
    useRuntimeConfig();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-bd9b2324><section class="page-header" data-v-bd9b2324><div class="container" data-v-bd9b2324><h1 data-v-bd9b2324>\u6703\u54E1\u689D\u6B3E</h1><ol class="breadcrumb" data-v-bd9b2324><li data-v-bd9b2324><a href="/" data-v-bd9b2324>Home</a></li><li class="active" data-v-bd9b2324> \u6703\u54E1\u689D\u6B3E </li></ol></div></section><section class="section full_height html-container-root" data-v-bd9b2324><div class="html-container" data-v-bd9b2324></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/terms.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const terms = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bd9b2324"]]);

export { terms as default };
//# sourceMappingURL=terms.ae3235a2.mjs.map
