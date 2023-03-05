import { _ as _sfc_main$1, a as _sfc_main$2 } from './ProfileSidebar.fe479263.mjs';
import { _ as _export_sfc, a as useRouter, f as useRoute, u as useRuntimeConfig, e as __nuxt_component_0$1 } from '../server.mjs';
import { u as useAuthStore } from './authStore.2479b6ea.mjs';
import { ref, computed, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { useMessage } from 'naive-ui';
import dayjs from 'dayjs';
import { P as ProductType } from './common.0260327a.mjs';
import './pageStatusStore.352a2d61.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    useMessage();
    useRouter();
    useRoute();
    useRuntimeConfig();
    const orders = ref([]);
    const curProdType = ref(ProductType.General);
    const curOrders = computed(() => {
      var _a, _b;
      switch (curProdType.value) {
        case ProductType.ColdChain:
          return (_a = orders.value) == null ? void 0 : _a.filter((e) => e.attribute === ProductType.ColdChain);
        default:
          return (_b = orders.value) == null ? void 0 : _b.filter((e) => e.attribute === ProductType.General);
      }
    });
    const orderStatus = (order) => {
      switch (order == null ? void 0 : order.orderStatus) {
        case "WAIT_PAYMENT":
          return "\u5F85\u4ED8\u6B3E";
        case "WAIT_DELIVER":
          return "\u904B\u9001\u4E2D";
        case "WAIT_RECEIVE":
          return "\u5F85\u53D6\u8CA8";
        case "COMPLETED":
          return "\u5DF2\u5B8C\u6210";
        case "CANCELLED":
          return "\u5DF2\u53D6\u6D88";
        case "REVOKED":
          return "\u9000\u8CA8";
        default:
          return curOrder.value.orderStatus;
      }
    };
    function getFormattedData(date) {
      const _date = dayjs(date);
      return _date.format("YYYY/MM/DD A hh:mm");
    }
    const orderAttr = (order) => {
      if ((order == null ? void 0 : order.attribute) === ProductType.General)
        return "\u4E00\u822C\u5546\u54C1";
      if ((order == null ? void 0 : order.attribute) === ProductType.ColdChain)
        return "\u51B7\u93C8\u5546\u54C1";
      else
        return order.attribute;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UserProfile = _sfc_main$1;
      const _component_ProfileSidebar = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-2bbca165><section class="full_height mt185ptb30 pt0" data-v-2bbca165>`);
      _push(ssrRenderComponent(_component_UserProfile, null, null, _parent));
      _push(`<div class="row" data-v-2bbca165>`);
      _push(ssrRenderComponent(_component_ProfileSidebar, null, null, _parent));
      _push(`<div class="col-sm-9 pl20pr30" data-v-2bbca165><ul class="list-inline dashboard-menu" data-v-2bbca165><li data-v-2bbca165><a class="${ssrRenderClass([{ active: unref(curProdType) === unref(ProductType).General }, "pointer"])}" data-v-2bbca165> \u4E00\u822C\u5546\u54C1 </a></li><li data-v-2bbca165><a class="${ssrRenderClass([{ active: unref(curProdType) === unref(ProductType).ColdChain }, "pointer"])}" data-v-2bbca165> \u51B7\u93C8\u5546\u54C1 </a></li></ul><div class="select r0t0" data-v-2bbca165><select data-v-2bbca165><option selected data-v-2bbca165> \u8A02\u55AE\u72C0\u614B </option><option value="" data-v-2bbca165> \u5F85\u4ED8\u6B3E </option><option value="" data-v-2bbca165> \u5DF2\u4ED8\u6B3E </option><option value="" data-v-2bbca165> \u5DF2\u51FA\u8CA8 </option><option value="" data-v-2bbca165> \u5DF2\u53D6\u6D88 </option></select></div><table class="member_table order_table" data-v-2bbca165><thead data-v-2bbca165><tr data-v-2bbca165><th data-v-2bbca165> \u8A02\u55AE\u7DE8\u865F </th><th data-v-2bbca165> \u8A02\u55AE\u65E5\u671F </th><th data-v-2bbca165> \u4ED8\u6B3E\u65B9\u5F0F </th><th data-v-2bbca165> \u8A02\u55AE\u91D1\u984D </th><th data-v-2bbca165> \u8A02\u55AE\u72C0\u614B </th><th data-v-2bbca165></th></tr></thead><tbody data-v-2bbca165><!--[-->`);
      ssrRenderList(unref(curOrders), (order) => {
        _push(`<tr data-v-2bbca165><td data-th="\u8A02\u55AE\u7DE8\u865F" data-v-2bbca165>${ssrInterpolate(order == null ? void 0 : order.id)}</td><td data-th="\u8A02\u55AE\u65E5\u671F" data-v-2bbca165>${ssrInterpolate(getFormattedData(order == null ? void 0 : order.createdAt))}</td><td data-th="\u8A02\u55AE\u985E\u578B" data-v-2bbca165>${ssrInterpolate(orderAttr(order))}</td><td data-th="\u8A02\u55AE\u91D1\u984D" data-v-2bbca165>${ssrInterpolate(order == null ? void 0 : order.price)}</td><td data-th="\u8A02\u55AE\u72C0\u614B" data-v-2bbca165>${ssrInterpolate(orderStatus(order))}</td><td data-v-2bbca165>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/order/detail?id=${order.id}`,
          class: "btn btn-orderdetial"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u67E5\u770B\u660E\u7D30 `);
            } else {
              return [
                createTextVNode(" \u67E5\u770B\u660E\u7D30 ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<button type="button" class="btn btn-orderdetial" data-v-2bbca165> \u53D6\u6D88\u8A02\u55AE </button></td></tr>`);
      });
      _push(`<!--]--></tbody></table><div style="${ssrRenderStyle({ display: "none" })}" class="text-center" data-v-2bbca165><ul class="pagination post-pagination" data-v-2bbca165><li data-v-2bbca165><a href="#!" data-v-2bbca165>\u4E0A\u4E00\u9801</a></li><li class="active" data-v-2bbca165><a href="#!" data-v-2bbca165>1</a></li><li data-v-2bbca165><a href="#!" data-v-2bbca165>2</a></li><li data-v-2bbca165><a href="#!" data-v-2bbca165>3</a></li><li data-v-2bbca165><a href="#!" data-v-2bbca165>4</a></li><li data-v-2bbca165><a href="#!" data-v-2bbca165>5</a></li><li data-v-2bbca165><a href="#!" data-v-2bbca165>\u4E0B\u4E00\u9801</a></li></ul></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/order/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2bbca165"]]);

export { index as default };
//# sourceMappingURL=index.5561c08e.mjs.map