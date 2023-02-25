import { _ as _export_sfc, u as useRouter, a as useRuntimeConfig } from '../server.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { u as useAuthStore } from './authStore.b053acfb.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "bonus-point",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const authStore = useAuthStore();
    useRuntimeConfig();
    const dailyCheck = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "full_height mt185ptb30 bg_left2" }, _attrs))} data-v-9bfb8bce><div class="container signpoint_content" data-v-9bfb8bce><h4 class="text-center mypoint" data-v-9bfb8bce><a href="mypoint.html" target="new" data-v-9bfb8bce> \u6211\u7684\u7D05\u5229 <i class="fas fa-parking" data-v-9bfb8bce></i> ${ssrInterpolate((_a = unref(authStore).user) == null ? void 0 : _a.rewardCredit)}</a></h4><div class="text-center" data-v-9bfb8bce> \u5DF2\u7D2F\u8A08\u7C3D\u5230\uFF1A${ssrInterpolate(0)}\u6B21 <div id="signpoint" data-v-9bfb8bce><div class="mb-20" data-v-9bfb8bce></div><ul class="signpoint_li" data-v-9bfb8bce><div data-v-9bfb8bce><!--[-->`);
      ssrRenderList(unref(dailyCheck), (day) => {
        _push(`<li data-v-9bfb8bce><span data-v-9bfb8bce>+1</span><a href="javascript:;" data-v-9bfb8bce><i class="fa-solid fa-p" data-v-9bfb8bce></i></a><span class="sign_day" data-v-9bfb8bce>\u7C3D\u5230</span></li>`);
      });
      _push(`<!--]--></div></ul><div class="mt-20" data-v-9bfb8bce></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/bonus-point.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bonusPoint = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9bfb8bce"]]);

export { bonusPoint as default };
//# sourceMappingURL=bonus-point.f347ff4c.mjs.map
