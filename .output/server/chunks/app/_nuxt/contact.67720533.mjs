import { ref, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
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
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    ref({
      name: "",
      email: "",
      brief: "",
      content: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-1d3a2276><section class="page-header" data-v-1d3a2276><div class="container" data-v-1d3a2276><h1 data-v-1d3a2276>\u806F\u7D61\u6211\u5011</h1><ol class="breadcrumb" data-v-1d3a2276><li data-v-1d3a2276><a href="/" data-v-1d3a2276>Home</a></li><li class="active" data-v-1d3a2276> \u806F\u7D61\u6211\u5011 </li></ol></div></section><div data-v-1d3a2276><iframe src="https://lovin.tw/wo-contact/" frameborder="0" data-v-1d3a2276></iframe></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1d3a2276"]]);

export { contact as default };
//# sourceMappingURL=contact.67720533.mjs.map
