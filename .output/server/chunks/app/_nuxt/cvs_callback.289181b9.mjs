import { useSSRContext } from 'vue';
import { u as useCookie } from './cookie.a938cd90.mjs';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { useMessage } from 'naive-ui';
import 'cookie-es';
import 'h3';
import 'destr';
import 'ohash';
import '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'axios';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main = {
  __name: "cvs_callback",
  __ssrInlineRender: true,
  setup(__props) {
    useMessage();
    useCookie("storeid");
    useCookie("storename");
    useCookie("storeaddress");
    useCookie("outside");
    useCookie("ship");
    useCookie("TempVar");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cvs_callback.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=cvs_callback.289181b9.mjs.map
