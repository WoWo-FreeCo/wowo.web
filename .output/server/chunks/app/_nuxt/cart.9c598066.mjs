import { _ as _export_sfc, g as useRoute, b as useRouter, a as useAuthStore, h as useCartStore, f as __nuxt_component_0$1 } from '../server.mjs';
import { ref, watch, computed, resolveComponent, mergeProps, unref, withCtx, createTextVNode, withDirectives, createVNode, toDisplayString, vShow, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { P as ProductType } from './common.cb49f5bd.mjs';
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
  __name: "cart",
  __ssrInlineRender: true,
  setup(__props) {
    const routes = useRoute();
    useRouter();
    useRoute();
    const authStore = useAuthStore();
    const cartStore = useCartStore();
    const cartType = ref(ProductType.General);
    watch(routes, (_new) => {
      updateCartType();
    });
    const currentMerch = computed(() => {
      switch (cartType.value) {
        case ProductType.ColdChain:
          return cartStore == null ? void 0 : cartStore.merch.filter((e) => e.attribute === ProductType.ColdChain);
        default:
          return cartStore == null ? void 0 : cartStore.merch.filter((e) => e.attribute === ProductType.General);
      }
    });
    const coldMerch = computed(() => {
      return cartStore == null ? void 0 : cartStore.merch.filter((e) => e.attribute === ProductType.ColdChain);
    });
    const generalMerch = computed(() => {
      return cartStore == null ? void 0 : cartStore.merch.filter((e) => e.attribute === ProductType.General);
    });
    const totalPrice = computed({
      get: () => {
        return currentMerch.value.reduce(
          (total, cur) => total + getCurrentPriceByAuth(cur) * cur.amount,
          0
        );
      },
      set: (_new) => {
        totalPrice.value = _new;
      }
    });
    const getCurrentPriceByAuth = (item) => {
      var _a, _b;
      if (((_a = authStore == null ? void 0 : authStore.user) == null ? void 0 : _a.memberLevel) === "SVIP") {
        return item == null ? void 0 : item.svipPrice;
      }
      if (((_b = authStore == null ? void 0 : authStore.user) == null ? void 0 : _b.memberLevel) === "VIP") {
        return item == null ? void 0 : item.vipPrice;
      }
      if (authStore.status.loggedIn) {
        return item == null ? void 0 : item.memberPrice;
      }
      return item == null ? void 0 : item.price;
    };
    function updateCartType() {
      switch (routes.query.type) {
        case "cold-chain":
          cartType.value = ProductType.ColdChain;
          break;
        default:
          cartType.value = ProductType.General;
          break;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_n_input_number = resolveComponent("n-input-number");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "full_height mt-30 mt185ptb30" }, _attrs))} data-v-9f734aee><div class="cart_container mb-50" data-v-9f734aee><ul class="list-inline dashboard-menu text-center" data-v-9f734aee><li data-v-9f734aee>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/cart",
        class: ["type-name", { active: unref(cartType) === unref(ProductType).General }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u4E00\u822C\u7269\u6D41\u5546\u54C1 <span style="${ssrRenderStyle(unref(generalMerch).length ? null : { display: "none" })}" class="cart-amount" data-v-9f734aee${_scopeId}>${ssrInterpolate(unref(generalMerch).length)}</span>`);
          } else {
            return [
              createTextVNode(" \u4E00\u822C\u7269\u6D41\u5546\u54C1 "),
              withDirectives(createVNode("span", { class: "cart-amount" }, toDisplayString(unref(generalMerch).length), 513), [
                [vShow, unref(generalMerch).length]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-9f734aee>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/cart?type=cold-chain",
        class: ["type-name", { active: unref(cartType) === unref(ProductType).ColdChain }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u7279\u6B8A\u7269\u6D41\u5546\u54C1 <span style="${ssrRenderStyle(unref(coldMerch).length ? null : { display: "none" })}" class="cart-amount" data-v-9f734aee${_scopeId}>${ssrInterpolate(unref(coldMerch).length)}</span>`);
          } else {
            return [
              createTextVNode(" \u7279\u6B8A\u7269\u6D41\u5546\u54C1 "),
              withDirectives(createVNode("span", { class: "cart-amount" }, toDisplayString(unref(coldMerch).length), 513), [
                [vShow, unref(coldMerch).length]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul><div style="${ssrRenderStyle([
        !unref(currentMerch).length ? null : { display: "none" },
        { "margin": "72px 0" }
      ])}" class="text-center" data-v-9f734aee><i class="fa-solid fa-cart-shopping" data-v-9f734aee></i><h2 class="text-center" data-v-9f734aee> \u8CFC\u7269\u8ECA\u6C92\u6709\u6771\u897F </h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/shop" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u8D95\u7DCA\u53BB\u6DFB\u52A0 `);
          } else {
            return [
              createTextVNode(" \u8D95\u7DCA\u53BB\u6DFB\u52A0 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(currentMerch).length) {
        _push(`<form method="post" action="javascript:;" data-v-9f734aee><div data-v-9f734aee>\u5171${ssrInterpolate(unref(currentMerch).length)}\u9805\u5546\u54C1</div><table class="cart_list" data-v-9f734aee><tbody data-v-9f734aee><!--[-->`);
        ssrRenderList(unref(currentMerch), (item) => {
          var _a, _b;
          _push(`<tr class="prod-tr" data-v-9f734aee><td class="cart_img" data-v-9f734aee><a${ssrRenderAttr("href", `/product?id=${item.id}`)} data-v-9f734aee><img${ssrRenderAttr("src", item == null ? void 0 : item.coverImg)} data-v-9f734aee></a></td><td class="cart_tl" data-v-9f734aee><a${ssrRenderAttr("href", `/product?id=${item.id}`)} data-v-9f734aee><h5 data-v-9f734aee>${ssrInterpolate(item == null ? void 0 : item.name)}</h5></a>`);
          _push(ssrRenderComponent(_component_n_input_number, {
            value: item.amount,
            "onUpdate:value": ($event) => item.amount = $event,
            min: 1,
            style: { width: "150px" }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span data-v-9f734aee${_scopeId}>\u6EFF\u984D\u514D\u904B</span>`);
              } else {
                return [
                  createVNode("span", null, "\u6EFF\u984D\u514D\u904B")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</td><td class="cart_price text-right" data-v-9f734aee><span style="${ssrRenderStyle(((_a = unref(authStore).user) == null ? void 0 : _a.memberLevel) && ((_b = unref(authStore).user) == null ? void 0 : _b.memberLevel) !== "NORMAL" ? null : { display: "none" })}" data-v-9f734aee> \u5E02\u50F9 $${ssrInterpolate(item == null ? void 0 : item.price)}</span> \u50F9\u9322 $${ssrInterpolate(getCurrentPriceByAuth(item))}</td><td class="cart_price text-right" data-v-9f734aee><button type="button" class="del_btn" data-v-9f734aee><i class="fa-solid fa-trash-can" data-v-9f734aee></i></button></td></tr>`);
        });
        _push(`<!--]--></tbody></table><ul class="cart_check" data-v-9f734aee><li data-v-9f734aee> \u5546\u54C1\u91D1\u984D\u5C0F\u8A08 (\u5171${ssrInterpolate(unref(currentMerch).length)}\u9805\u5546\u54C1)\uFF1A<span data-v-9f734aee>$${ssrInterpolate(unref(totalPrice))}</span></li></ul><div class="text-right mb-20 mt-20" data-v-9f734aee>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          type: "button",
          class: "btn btn-main btn-bag",
          to: "/shop"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u7E7C\u7E8C\u8CFC\u7269 `);
            } else {
              return [
                createTextVNode(" \u7E7C\u7E8C\u8CFC\u7269 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<button type="submit" class="btn btn-main btn-check"${ssrIncludeBooleanAttr(unref(currentMerch).length <= 0) ? " disabled" : ""} data-v-9f734aee> \u4E0B\u4E00\u6B65 </button></div></form>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div style="${ssrRenderStyle(unref(currentMerch).length ? null : { display: "none" })}" class="alert alert-warning alert-common" role="alert" data-v-9f734aee> \u8CBC\u5FC3\u63D0\u9192: \u4E00\u822C\u5E38\u6EAB\u5546\u54C1,\u7121\u6CD5\u8207\u51B7\u934A\u5546\u54C1\u540C\u6642\u51FA\u8CA8, \u656C\u8ACB\u5206\u958B\u7D50\u5E33,\u8B1D\u8B1D\u60A8 </div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cart = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9f734aee"]]);

export { cart as default };
//# sourceMappingURL=cart.9c598066.mjs.map
