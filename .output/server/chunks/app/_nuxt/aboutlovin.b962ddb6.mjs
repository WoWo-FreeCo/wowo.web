import { ssrRenderAttrs } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'defu';
import 'node:fs';
import 'node:url';
import 'pathe';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'axios';
import 'naive-ui';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-073972fe><section class="page-header" data-v-073972fe><div class="container" data-v-073972fe><h1 data-v-073972fe>\u95DC\u65BCLOVIN\u6A02\u604B</h1><ol class="breadcrumb" data-v-073972fe><li data-v-073972fe><a href="/" data-v-073972fe>Home</a></li><li class="active" data-v-073972fe> \u95DC\u65BCLOVIN\u6A02\u604B </li></ol></div></section><section class="section full_height" data-v-073972fe><div class="container" data-v-073972fe> \u5167\u5BB9\u6B63\u5728\u6574\u7406\u4E2D... </div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/aboutlovin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aboutlovin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-073972fe"]]);

export { aboutlovin as default };
//# sourceMappingURL=aboutlovin.b962ddb6.mjs.map
