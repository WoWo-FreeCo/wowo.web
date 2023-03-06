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
  __name: "privacy",
  __ssrInlineRender: true,
  setup(__props) {
    useRuntimeConfig();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-27d59321><section class="page-header" data-v-27d59321><div class="container" data-v-27d59321><h1 data-v-27d59321>\u96B1\u79C1\u6B0A\u653F\u7B56</h1><ol class="breadcrumb" data-v-27d59321><li data-v-27d59321><a href="/" data-v-27d59321>Home</a></li><li class="active" data-v-27d59321> \u96B1\u79C1\u6B0A\u653F\u7B56 </li></ol></div></section><section class="section full_height html-container-root" data-v-27d59321><div class="html-container" data-v-27d59321></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/privacy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const privacy = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-27d59321"]]);

export { privacy as default };
//# sourceMappingURL=privacy.d0db4f0d.mjs.map
