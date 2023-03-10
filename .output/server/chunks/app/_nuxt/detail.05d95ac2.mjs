import { _ as _export_sfc, a as useAuthStore, g as useRoute, b as useRouter, u as useRuntimeConfig, f as __nuxt_component_0$1 } from '../server.mjs';
import { ref, computed, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import dayjs from 'dayjs';
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
  __name: "detail",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    useRoute();
    useRouter();
    useRuntimeConfig();
    useMessage();
    const curOrder = ref({});
    const orderStatus = computed(() => {
      var _a;
      switch ((_a = curOrder.value) == null ? void 0 : _a.orderStatus) {
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
          return "\u5DF2\u9000\u8CA8";
        default:
          return curOrder.value.orderStatus;
      }
    });
    const deliverFee = computed(() => {
      var _a, _b;
      const _item = (_b = (_a = curOrder.value) == null ? void 0 : _a.items) == null ? void 0 : _b.find((e) => e.productId === null && (e == null ? void 0 : e.name) !== "\u7D05\u5229\u6298\u62B5");
      if ((_item == null ? void 0 : _item.price) === 0)
        return "\u514D\u904B";
      return _item ? _item.price : "\u514D\u904B";
    });
    const totalPrice = computed(() => {
      var _a, _b;
      return (_b = (_a = curOrder.value) == null ? void 0 : _a.items) == null ? void 0 : _b.reduce(
        (total, cur) => total + cur.price * cur.quantity,
        0
      );
    });
    const realProd = computed(() => {
      var _a, _b;
      return (_b = (_a = curOrder.value) == null ? void 0 : _a.items) == null ? void 0 : _b.filter((e) => e.productId !== null);
    });
    const realProdPrice = computed(() => {
      var _a;
      return (_a = realProd.value) == null ? void 0 : _a.reduce(
        (total, cur) => total + cur.price * cur.quantity,
        0
      );
    });
    function getFormattedData(date) {
      const _date = dayjs(date);
      return _date.format("YYYY/MM/DD A hh:mm");
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-15ff073c><section class="full_height mt185ptb30" data-v-15ff073c><div class="container" data-v-15ff073c><div class="order_div" data-v-15ff073c><div class="order_tl" data-v-15ff073c> \u8A02\u55AE\u7DE8\u865F\uFF1A<span data-v-15ff073c>${ssrInterpolate((_a = unref(curOrder)) == null ? void 0 : _a.id)}</span><a href="#" data-toggle="modal" data-target="#back" class="back_span" data-v-15ff073c>\u7533\u8ACB\u53D6\u6D88\u8A02\u55AE</a></div><ul data-v-15ff073c><li data-v-15ff073c>\u8A02\u55AE\u72C0\u614B\uFF1A<span data-v-15ff073c>${ssrInterpolate(unref(orderStatus))}</span></li><li data-v-15ff073c>\u8A02\u55AE\u65E5\u671F\uFF1A<span data-v-15ff073c>${ssrInterpolate(getFormattedData((_b = unref(curOrder)) == null ? void 0 : _b.createdAt))}</span></li><li data-v-15ff073c>\u4ED8\u6B3E\u65B9\u5F0F\uFF1A<span data-v-15ff073c>${ssrInterpolate((_c = unref(curOrder)) == null ? void 0 : _c.paymentType)}</span></li><li data-v-15ff073c>\u5BC4\u9001\u65B9\u5F0F\uFF1A<span data-v-15ff073c>${ssrInterpolate()}</span></li><li data-v-15ff073c>\u4F4F \u5740\uFF1A<span data-v-15ff073c>${ssrInterpolate((_e = (_d = unref(curOrder)) == null ? void 0 : _d.consignee) == null ? void 0 : _e.addressDetailOne)}</span></li><li data-v-15ff073c>\u53EF\u6536\u8CA8\u65E5\uFF1A<span data-v-15ff073c>${ssrInterpolate("")}</span></li><li data-v-15ff073c>\u767C\u7968\u985E\u578B\uFF1A<span data-v-15ff073c>${ssrInterpolate("")}</span></li><li data-v-15ff073c>\u767C\u7968\u62AC\u982D\uFF1A<span data-v-15ff073c>${ssrInterpolate("")}</span></li><li data-v-15ff073c>\u767C\u7968\u7D71\u7DE8\uFF1A<span data-v-15ff073c>${ssrInterpolate("")}</span></li></ul></div><div class="order_tl" data-v-15ff073c> \u8CFC\u7269\u6E05\u55AE </div><table class="cart_list" data-v-15ff073c><tbody data-v-15ff073c><!--[-->`);
      ssrRenderList(unref(curOrder).items, (prod) => {
        _push(`<tr style="${ssrRenderStyle(prod.productId !== null ? null : { display: "none" })}" data-v-15ff073c><td class="cart_img" data-v-15ff073c>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/product?id=${prod == null ? void 0 : prod.productId}`,
          target: "new"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", prod == null ? void 0 : prod.coverImg)} data-v-15ff073c${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: prod == null ? void 0 : prod.coverImg
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</td><td class="cart_tl" data-v-15ff073c>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/product?id=${prod == null ? void 0 : prod.productId}`,
          target: "new"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h5 data-v-15ff073c${_scopeId}>${ssrInterpolate(prod.name)}</h5>`);
            } else {
              return [
                createVNode("h5", null, toDisplayString(prod.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="product-quantity" data-v-15ff073c> X ${ssrInterpolate(prod.quantity)}</div></td><td class="cart-price text-right" data-v-15ff073c><span data-v-15ff073c>$${ssrInterpolate((prod == null ? void 0 : prod.price) * (prod == null ? void 0 : prod.quantity))}</span></td></tr>`);
      });
      _push(`<!--]--></tbody></table><ul class="cart_check" data-v-15ff073c><li data-v-15ff073c> \u5546\u54C1\u91D1\u984D\u5C0F\u8A08 (\u5171${ssrInterpolate((_f = unref(realProd)) == null ? void 0 : _f.length)}\u9805\u5546\u54C1)\uFF1A$${ssrInterpolate(unref(realProdPrice))}</li><li data-v-15ff073c> \u904B\u8CBB\uFF1A${ssrInterpolate(unref(deliverFee))}</li><li data-v-15ff073c> \u7D05\u5229\u6263\u9EDE\uFF1A${ssrInterpolate(0)}</li><li class="border_top" data-v-15ff073c> \u8A02\u55AE\u7E3D\u91D1\u984D\uFF1A<span data-v-15ff073c>$${ssrInterpolate(unref(totalPrice))}</span></li></ul><div class="text-center mb-20 mt-20" data-v-15ff073c>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/order",
        type: "button",
        class: "btn btn-main btn-default"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u56DE\u4E0A\u4E00\u9801 `);
          } else {
            return [
              createTextVNode(" \u56DE\u4E0A\u4E00\u9801 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button style="${ssrRenderStyle(unref(orderStatus) !== `\u5DF2\u53D6\u6D88` ? null : { display: "none" })}" type="button" class="btn btn-main btn-default" data-toggle="modal" data-v-15ff073c> \u53D6\u6D88\u8A02\u55AE </button><button type="button" class="btn btn-main btn-check" data-v-15ff073c> \u7ACB\u5373\u4ED8\u6B3E </button></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/order/detail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const detail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-15ff073c"]]);

export { detail as default };
//# sourceMappingURL=detail.05d95ac2.mjs.map
