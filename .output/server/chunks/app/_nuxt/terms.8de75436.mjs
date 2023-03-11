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
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-5ed7d215><section class="page-header" data-v-5ed7d215><div class="container" data-v-5ed7d215><h1 data-v-5ed7d215>\u6703\u54E1\u689D\u6B3E</h1><ol class="breadcrumb" data-v-5ed7d215><li data-v-5ed7d215><a href="/" data-v-5ed7d215>Home</a></li><li class="active" data-v-5ed7d215> \u6703\u54E1\u689D\u6B3E </li></ol></div></section><section class="section full_height html-container-root" data-v-5ed7d215><div class="html-container" data-v-5ed7d215></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/terms.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const terms = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5ed7d215"]]);

export { terms as default };
//# sourceMappingURL=terms.8de75436.mjs.map
