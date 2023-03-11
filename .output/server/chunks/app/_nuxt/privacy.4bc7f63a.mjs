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
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-b61fc945><section class="page-header" data-v-b61fc945><div class="container" data-v-b61fc945><h1 data-v-b61fc945>\u96B1\u79C1\u6B0A\u653F\u7B56</h1><ol class="breadcrumb" data-v-b61fc945><li data-v-b61fc945><a href="/" data-v-b61fc945>Home</a></li><li class="active" data-v-b61fc945> \u96B1\u79C1\u6B0A\u653F\u7B56 </li></ol></div></section><section class="section full_height html-container-root" data-v-b61fc945><div class="html-container" data-v-b61fc945></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/privacy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const privacy = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b61fc945"]]);

export { privacy as default };
//# sourceMappingURL=privacy.4bc7f63a.mjs.map
