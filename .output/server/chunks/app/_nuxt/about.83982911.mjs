import { ssrRenderAttrs } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-446592ee><section class="page-header" data-v-446592ee><div class="container" data-v-446592ee><h1 data-v-446592ee>\u95DC\u65BC\u6211\u5011</h1><ol class="breadcrumb" data-v-446592ee><li data-v-446592ee><a href="/" data-v-446592ee>Home</a></li><li class="active" data-v-446592ee> \u95DC\u65BC\u6211\u5011 </li></ol></div></section><section class="section full_height" data-v-446592ee><div class="container" data-v-446592ee> editor </div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-446592ee"]]);

export { about as default };
//# sourceMappingURL=about.83982911.mjs.map
