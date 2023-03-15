import { _ as _sfc_main$1, a as __nuxt_component_1 } from './ProfileSidebar.78eb37b2.mjs';
import { _ as _export_sfc, e as useAuthStore, b as useRouter, h as useRoute, u as useRuntimeConfig, P as ProductType, O as OrderStatus, g as __nuxt_component_0$1 } from '../server.mjs';
import { ref, computed, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { useMessage } from 'naive-ui';
import dayjs from 'dayjs';
import './pageStatusStore.d7879605.mjs';
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
    const selectStatus = ref(-1);
    const curProdType = ref(ProductType.General);
    const curOrders = computed(() => {
      var _a, _b;
      let _orders = [];
      switch (curProdType.value) {
        case ProductType.ColdChain:
          _orders = [...(_a = orders.value) == null ? void 0 : _a.filter((e) => e.attribute === ProductType.ColdChain)];
          break;
        default:
          _orders = [...(_b = orders.value) == null ? void 0 : _b.filter((e) => e.attribute === ProductType.General)];
          break;
      }
      switch (selectStatus.value) {
        case OrderStatus.WaitPayment:
          return _orders == null ? void 0 : _orders.filter((e) => e.orderStatus === OrderStatus.WaitPayment);
        case OrderStatus.WaitDeliver:
          return _orders == null ? void 0 : _orders.filter((e) => e.orderStatus === OrderStatus.WaitDeliver);
        case OrderStatus.WaitReceive:
          return _orders == null ? void 0 : _orders.filter((e) => e.orderStatus === OrderStatus.WaitReceive);
        case OrderStatus.Completed:
          return _orders == null ? void 0 : _orders.filter((e) => e.orderStatus === OrderStatus.Completed);
        case OrderStatus.Cancelled:
          return _orders == null ? void 0 : _orders.filter((e) => e.orderStatus === OrderStatus.Cancelled);
        case OrderStatus.Revoked:
          return _orders == null ? void 0 : _orders.filter((e) => e.orderStatus === OrderStatus.Revoked);
        default:
          return _orders;
      }
    });
    const orderStatus = (order) => {
      switch (order == null ? void 0 : order.orderStatus) {
        case OrderStatus.WaitPayment:
          return "\u5F85\u4ED8\u6B3E";
        case OrderStatus.WaitDeliver:
          return "\u5F85\u51FA\u8CA8";
        case OrderStatus.WaitReceive:
          return "\u5DF2\u51FA\u8CA8";
        case OrderStatus.Completed:
          return "\u5DF2\u5B8C\u6210";
        case OrderStatus.Cancelled:
          return "\u5DF2\u53D6\u6D88";
        case OrderStatus.Revoked:
          return "\u5DF2\u9000\u8CA8";
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
        return "\u4E00\u822C\u7269\u6D41\u5546\u54C1";
      if ((order == null ? void 0 : order.attribute) === ProductType.ColdChain)
        return "\u7279\u6B8A\u7269\u6D41\u5546\u54C1";
      else
        return order.attribute;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UserProfile = _sfc_main$1;
      const _component_ProfileSidebar = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-d7d0f699><section class="full_height mt185ptb30 pt0" data-v-d7d0f699>`);
      _push(ssrRenderComponent(_component_UserProfile, null, null, _parent));
      _push(`<div class="row" data-v-d7d0f699>`);
      _push(ssrRenderComponent(_component_ProfileSidebar, null, null, _parent));
      _push(`<div class="col-sm-9 pl20pr30" data-v-d7d0f699><ul class="list-inline dashboard-menu" data-v-d7d0f699><li data-v-d7d0f699><a class="${ssrRenderClass([{ active: unref(curProdType) === unref(ProductType).General }, "pointer"])}" data-v-d7d0f699> \u4E00\u822C\u7269\u6D41\u5546\u54C1 </a></li><li data-v-d7d0f699><a class="${ssrRenderClass([{ active: unref(curProdType) === unref(ProductType).ColdChain }, "pointer"])}" data-v-d7d0f699> \u7279\u6B8A\u7269\u6D41\u5546\u54C1 </a></li></ul><div class="select r0t0" data-v-d7d0f699><select data-v-d7d0f699><option value="-1" data-v-d7d0f699> \u8A02\u55AE\u72C0\u614B </option><option${ssrRenderAttr("value", unref(OrderStatus).WaitPayment)} data-v-d7d0f699> \u5F85\u4ED8\u6B3E </option><option${ssrRenderAttr("value", unref(OrderStatus).WaitDeliver)} data-v-d7d0f699> \u904B\u9001\u4E2D </option><option${ssrRenderAttr("value", unref(OrderStatus).WaitReceive)} data-v-d7d0f699> \u5F85\u53D6\u8CA8 </option><option${ssrRenderAttr("value", unref(OrderStatus).Completed)} data-v-d7d0f699> \u5DF2\u5B8C\u6210 </option><option${ssrRenderAttr("value", unref(OrderStatus).Cancelled)} data-v-d7d0f699> \u5DF2\u53D6\u6D88 </option><option${ssrRenderAttr("value", unref(OrderStatus).Revoked)} data-v-d7d0f699> \u9000\u8CA8 </option></select></div><table class="member_table order_table" data-v-d7d0f699><thead data-v-d7d0f699><tr data-v-d7d0f699><th data-v-d7d0f699> \u8A02\u55AE\u7DE8\u865F </th><th data-v-d7d0f699> \u8A02\u55AE\u65E5\u671F </th><th data-v-d7d0f699> \u4ED8\u6B3E\u65B9\u5F0F </th><th data-v-d7d0f699> \u8A02\u55AE\u91D1\u984D </th><th data-v-d7d0f699> \u8A02\u55AE\u72C0\u614B </th><th data-v-d7d0f699></th></tr></thead><tbody data-v-d7d0f699><!--[-->`);
      ssrRenderList(unref(curOrders), (order) => {
        _push(`<tr data-v-d7d0f699><td data-th="\u8A02\u55AE\u7DE8\u865F" data-v-d7d0f699>${ssrInterpolate(order == null ? void 0 : order.id)}</td><td data-th="\u8A02\u55AE\u65E5\u671F" data-v-d7d0f699>${ssrInterpolate(getFormattedData(order == null ? void 0 : order.createdAt))}</td><td data-th="\u8A02\u55AE\u985E\u578B" data-v-d7d0f699>${ssrInterpolate(orderAttr(order))}</td><td data-th="\u8A02\u55AE\u91D1\u984D" data-v-d7d0f699>${ssrInterpolate(order == null ? void 0 : order.price)}</td><td data-th="\u8A02\u55AE\u72C0\u614B" data-v-d7d0f699>${ssrInterpolate(orderStatus(order))}</td><td class="action-btns" data-v-d7d0f699>`);
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
        if (order.orderStatus !== "CANCELLED") {
          _push(`<button type="button" class="btn btn-orderdetial cancel-btn" data-v-d7d0f699> \u53D6\u6D88\u8A02\u55AE </button>`);
        } else {
          _push(`<!---->`);
        }
        if (order.orderStatus !== "WAIT_PAYMENT" && order.orderStatus !== "CANCELLED") {
          _push(`<button type="button" class="btn btn-orderdetial cancel-btn" data-v-d7d0f699> \u7533\u8ACB\u9000\u8CA8 </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</td></tr>`);
      });
      _push(`<!--]--></tbody></table><div style="${ssrRenderStyle({ display: "none" })}" class="text-center" data-v-d7d0f699><ul class="pagination post-pagination" data-v-d7d0f699><li data-v-d7d0f699><a href="#!" data-v-d7d0f699>\u4E0A\u4E00\u9801</a></li><li class="active" data-v-d7d0f699><a href="#!" data-v-d7d0f699>1</a></li><li data-v-d7d0f699><a href="#!" data-v-d7d0f699>2</a></li><li data-v-d7d0f699><a href="#!" data-v-d7d0f699>3</a></li><li data-v-d7d0f699><a href="#!" data-v-d7d0f699>4</a></li><li data-v-d7d0f699><a href="#!" data-v-d7d0f699>5</a></li><li data-v-d7d0f699><a href="#!" data-v-d7d0f699>\u4E0B\u4E00\u9801</a></li></ul></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/order/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d7d0f699"]]);

export { index as default };
//# sourceMappingURL=index.a85f4f20.mjs.map
