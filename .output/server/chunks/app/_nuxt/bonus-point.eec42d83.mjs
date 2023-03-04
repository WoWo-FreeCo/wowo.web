import { _ as _export_sfc, a as useRouter, u as useRuntimeConfig } from '../server.mjs';
import { ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { u as useAuthStore } from './authStore.a0d3dca8.mjs';
import { u as usePageStatusStore } from './pageStatusStore.e411f954.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { useMessage } from 'naive-ui';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'axios';
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
    useMessage();
    useRouter();
    const authStore = useAuthStore();
    usePageStatusStore();
    useRuntimeConfig();
    const dailyCheck = ref([]);
    const acceptedCount = computed(() => {
      return dailyCheck.value.reduce((total, cur) => total + ((cur == null ? void 0 : cur.accepted) ? 1 : 0), 0);
    });
    const nextDayIndex = computed(() => acceptedCount.value);
    const dayText = (day) => {
      if (day == null ? void 0 : day.accepted) {
        if (day == null ? void 0 : day.isMission)
          return "\u4EFB\u52D9\u5DF2\u89E3\u9396";
        else
          return "\u5DF2\u7C3D\u5230";
      } else if (day == null ? void 0 : day.isMission)
        return "\u4EFB\u52D9\u89E3\u9396";
      else
        return "\u7C3D\u5230";
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "full_height mt185ptb30 bg_left2" }, _attrs))} data-v-a3abfbd5><div class="container signpoint_content" data-v-a3abfbd5><h4 class="text-center mypoint" data-v-a3abfbd5><a href="mypoint.html" target="new" data-v-a3abfbd5> \u6211\u7684\u7D05\u5229 <i class="fas fa-parking" data-v-a3abfbd5></i> ${ssrInterpolate((_a = unref(authStore).user) == null ? void 0 : _a.rewardCredit)}</a></h4><div class="text-center" data-v-a3abfbd5> \u5DF2\u7D2F\u8A08\u7C3D\u5230\uFF1A${ssrInterpolate(unref(acceptedCount))}\u6B21 <div id="signpoint" data-v-a3abfbd5><div class="mb-20" data-v-a3abfbd5></div><ul class="signpoint_li" data-v-a3abfbd5><!--[-->`);
      ssrRenderList(unref(dailyCheck), (day) => {
        _push(`<li class="${ssrRenderClass([{
          sign: day.accepted,
          "no-cursor": day.accepted || day.index !== unref(nextDayIndex),
          "inactive": day.index > unref(nextDayIndex),
          "mission": day.isMission,
          "mission-accepted": day.accepted && day.isMission
        }, "day-slot"])}" data-v-a3abfbd5><span data-v-a3abfbd5>+${ssrInterpolate(day.credit)}</span><a href="javascript:;" data-v-a3abfbd5><i class="${ssrRenderClass([{
          "fa-p": !day.isMission,
          "fa-lock": day.isMission,
          "fa-unlock": day.accepted && day.isMission
        }, "fa-solid"])}" data-v-a3abfbd5></i></a><span class="sign_day" data-v-a3abfbd5>${ssrInterpolate(dayText(day))}</span></li>`);
      });
      _push(`<!--]--></ul><div class="mt-20" data-v-a3abfbd5></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/bonus-point.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bonusPoint = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a3abfbd5"]]);

export { bonusPoint as default };
//# sourceMappingURL=bonus-point.eec42d83.mjs.map
