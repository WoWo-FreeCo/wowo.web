import { _ as _export_sfc, a as useRouter, u as useRuntimeConfig } from '../server.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { u as useAuthStore } from './authStore.86d26292.mjs';
import { u as usePageStatusStore } from './pageStatusStore.546b6692.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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
  __name: "bonus-point",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const authStore = useAuthStore();
    usePageStatusStore();
    useRuntimeConfig();
    const dailyCheck = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "full_height mt185ptb30 bg_left2" }, _attrs))} data-v-e5ff65dd><div class="container signpoint_content" data-v-e5ff65dd><h4 class="text-center mypoint" data-v-e5ff65dd><a href="mypoint.html" target="new" data-v-e5ff65dd> \u6211\u7684\u7D05\u5229 <i class="fas fa-parking" data-v-e5ff65dd></i> ${ssrInterpolate((_a = unref(authStore).user) == null ? void 0 : _a.rewardCredit)}</a></h4><div class="text-center" data-v-e5ff65dd> \u5DF2\u7D2F\u8A08\u7C3D\u5230\uFF1A${ssrInterpolate(0)}\u6B21 <div id="signpoint" data-v-e5ff65dd><div class="mb-20" data-v-e5ff65dd></div><ul class="signpoint_li" data-v-e5ff65dd><div data-v-e5ff65dd><!--[-->`);
      ssrRenderList(unref(dailyCheck), (day) => {
        _push(`<li data-v-e5ff65dd><span data-v-e5ff65dd>+1</span><a href="javascript:;" data-v-e5ff65dd><i class="fa-solid fa-p" data-v-e5ff65dd></i></a><span class="sign_day" data-v-e5ff65dd>\u7C3D\u5230</span></li>`);
      });
      _push(`<!--]--></div></ul><div class="mt-20" data-v-e5ff65dd></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/bonus-point.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bonusPoint = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e5ff65dd"]]);

export { bonusPoint as default };
//# sourceMappingURL=bonus-point.eda47dfa.mjs.map
