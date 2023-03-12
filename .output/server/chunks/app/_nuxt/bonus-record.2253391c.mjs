import { _ as _sfc_main$1, a as _sfc_main$2 } from './ProfileSidebar.27f0e828.mjs';
import { b as useRouter, a as useAuthStore, u as useRuntimeConfig } from '../server.mjs';
import { ref, watchEffect, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { useMessage } from 'naive-ui';
import dayjs from 'dayjs';
import { G as GET_USER_BONUS_RECORDS, a as GET_PROFILE } from './requestURL.b597e65f.mjs';
import { B as BonusRecordActivity } from './common.2876555a.mjs';
import './pageStatusStore.607180d5.mjs';
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
  __name: "bonus-record",
  __ssrInlineRender: true,
  setup(__props) {
    useMessage();
    const router = useRouter();
    const authStore = useAuthStore();
    const runtimeConfig = useRuntimeConfig();
    const bonusRecords = ref([]);
    watchEffect(() => {
      if (!authStore.status.loggedIn) {
        router.push({
          path: "/login",
          query: {
            redirect: "/bonus-record"
          }
        });
      }
      fetchData();
    });
    async function fetchData() {
      try {
        const res = await $fetch(`${runtimeConfig.public.apiBase}/${GET_USER_BONUS_RECORDS}`, {
          headers: {
            authorization: "Bearer " + localStorage.getItem("accessToken")
          }
        });
        bonusRecords.value = res.data;
        console.log(res);
      } catch (error) {
        console.log(error);
      }
      updatePermission();
    }
    async function updatePermission() {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const refreshToken = localStorage.getItem("refreshToken");
        const res = await $fetch(`${runtimeConfig.public.apiBase}/${GET_PROFILE}`, {
          method: "GET",
          headers: { Authorization: "Bearer " + accessToken }
        });
        authStore.loginSuccess(accessToken, refreshToken);
        authStore.updateUser(res.data);
      } catch (error) {
        authStore.logout();
      }
    }
    function getFormattedData(date) {
      const _date = dayjs(date);
      return _date.format("YYYY/MM/DD A hh:mm");
    }
    function getActivityDescription(event) {
      switch (event) {
        case BonusRecordActivity.Redeem:
          return "\u4F7F\u7528\u7D05\u5229";
        case BonusRecordActivity.Reward:
          return "\u6D88\u8CBB\u56DE\u994B";
        case BonusRecordActivity.Upgrad:
          return "\u6703\u54E1\u5347\u7D1A";
        case BonusRecordActivity.Register:
          return "\u6703\u54E1\u8A3B\u518A";
        default:
          return "\u672A\u5B9A\u7FA9";
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UserProfile = _sfc_main$1;
      const _component_ProfileSidebar = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "full_height mt185ptb30 pt0" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UserProfile, null, null, _parent));
      _push(`<div class="row">`);
      _push(ssrRenderComponent(_component_ProfileSidebar, null, null, _parent));
      _push(`<div class="col-sm-9 pl20pr30"><h3 class="level_tl border_bottom pb20"><span>\u76EE\u524D\u53EF\u4F7F\u7528\u7D05\u5229\uFF1A</span>${ssrInterpolate((_a = unref(authStore).user) == null ? void 0 : _a.rewardCredit)}\u9EDE `);
      {
        _push(`<!---->`);
      }
      _push(`</h3><table class="member_table"><thead><tr><th> \u7570\u52D5\u65E5\u671F </th><th> \u7570\u52D5\u8AAA\u660E </th><th> \u9EDE\u6578 </th></tr></thead><tbody><!--[-->`);
      ssrRenderList(unref(bonusRecords), (record) => {
        _push(`<tr><td data-th="\u7570\u52D5\u65E5\u671F">${ssrInterpolate(getFormattedData(record == null ? void 0 : record.createdAt))}</td><td data-th="\u7570\u52D5\u8AAA\u660E">${ssrInterpolate(getActivityDescription(record == null ? void 0 : record.activityType))}</td><td data-th="\u9EDE\u6578">${ssrInterpolate(record == null ? void 0 : record.points)}</td></tr>`);
      });
      _push(`<!--]--></tbody></table>`);
      {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/bonus-record.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=bonus-record.2253391c.mjs.map
