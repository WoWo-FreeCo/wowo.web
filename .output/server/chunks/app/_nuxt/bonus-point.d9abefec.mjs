import { _ as _export_sfc, a as useRouter, u as useRuntimeConfig, e as __nuxt_component_0$1 } from '../server.mjs';
import { ref, computed, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { u as useAuthStore } from './authStore.f454b93f.mjs';
import { u as usePageStatusStore } from './pageStatusStore.20077863.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
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
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "full_height mt185ptb30 bg_left2" }, _attrs))} data-v-d403fa9d><div class="container signpoint_content" data-v-d403fa9d><h4 class="text-center mypoint" data-v-d403fa9d>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/bonus-point" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(` \u6211\u7684\u7D05\u5229 <i class="fas fa-parking" data-v-d403fa9d${_scopeId}></i> ${ssrInterpolate((_a = unref(authStore).user) == null ? void 0 : _a.rewardCredit)}`);
          } else {
            return [
              createTextVNode(" \u6211\u7684\u7D05\u5229 "),
              createVNode("i", { class: "fas fa-parking" }),
              createTextVNode(" " + toDisplayString((_b = unref(authStore).user) == null ? void 0 : _b.rewardCredit), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h4><div class="text-center" data-v-d403fa9d> \u5DF2\u7D2F\u8A08\u7C3D\u5230\uFF1A${ssrInterpolate(unref(acceptedCount))}\u6B21 <div id="signpoint" data-v-d403fa9d><div class="mb-20" data-v-d403fa9d></div><ul class="signpoint_li" data-v-d403fa9d><!--[-->`);
      ssrRenderList(unref(dailyCheck), (day) => {
        _push(`<li class="${ssrRenderClass([{
          sign: day.accepted,
          "no-cursor": day.accepted || day.index !== unref(nextDayIndex),
          "inactive": day.index > unref(nextDayIndex),
          "mission": day.isMission,
          "mission-accepted": day.accepted && day.isMission
        }, "day-slot"])}" data-v-d403fa9d><span data-v-d403fa9d>+${ssrInterpolate(day.credit)}</span><a href="javascript:;" data-v-d403fa9d><i class="${ssrRenderClass([{
          "fa-p": !day.isMission,
          "fa-lock": day.isMission,
          "fa-unlock": day.accepted && day.isMission
        }, "fa-solid"])}" data-v-d403fa9d></i></a><span class="sign_day" data-v-d403fa9d>${ssrInterpolate(dayText(day))}</span></li>`);
      });
      _push(`<!--]--></ul><div class="mt-20" data-v-d403fa9d></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/bonus-point.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bonusPoint = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d403fa9d"]]);

export { bonusPoint as default };
//# sourceMappingURL=bonus-point.d9abefec.mjs.map