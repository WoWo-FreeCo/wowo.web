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
  __name: "return-help",
  __ssrInlineRender: true,
  setup(__props) {
    useRuntimeConfig();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-96a5c901><section class="page-header" data-v-96a5c901><div class="container" data-v-96a5c901><h1 data-v-96a5c901>\u9000\u63DB\u8CA8\u8AAA\u660E</h1><ol class="breadcrumb" data-v-96a5c901><li data-v-96a5c901><a href="/" data-v-96a5c901>Home</a></li><li class="active" data-v-96a5c901> \u9000\u63DB\u8CA8\u8AAA\u660E </li></ol></div></section><section class="section full_height html-container-root" data-v-96a5c901><div class="html-container" data-v-96a5c901></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/return-help.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const returnHelp = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-96a5c901"]]);

export { returnHelp as default };
//# sourceMappingURL=return-help.997872f7.mjs.map
