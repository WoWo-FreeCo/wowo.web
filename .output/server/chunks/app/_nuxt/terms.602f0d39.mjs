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
  _push(`<div${ssrRenderAttrs(_attrs)}><section class="page-header"><div class="container"><h1>\u6703\u54E1\u689D\u6B3E</h1><ol class="breadcrumb"><li><a href="/">Home</a></li><li class="active"> \u6703\u54E1\u689D\u6B3E </li></ol></div></section><section class="section full_height"><div class="container"> editor </div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/terms.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const terms = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { terms as default };
//# sourceMappingURL=terms.602f0d39.mjs.map
