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
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-3a6bd38c><section class="page-header" data-v-3a6bd38c><div class="container" data-v-3a6bd38c><h1 data-v-3a6bd38c>\u9000\u63DB\u8CA8\u8AAA\u660E</h1><ol class="breadcrumb" data-v-3a6bd38c><li data-v-3a6bd38c><a href="/" data-v-3a6bd38c>Home</a></li><li class="active" data-v-3a6bd38c> \u9000\u63DB\u8CA8\u8AAA\u660E </li></ol></div></section><section class="section full_height html-container-root" data-v-3a6bd38c><div class="html-container" data-v-3a6bd38c></div></section><div data-v-3a6bd38c></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/return-help.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const returnHelp = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3a6bd38c"]]);

export { returnHelp as default };
//# sourceMappingURL=return-help.3c14e202.mjs.map
