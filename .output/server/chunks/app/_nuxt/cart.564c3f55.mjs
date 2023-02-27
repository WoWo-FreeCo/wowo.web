import { e as useRoute, a as useRouter, f as __nuxt_component_0$1 } from '../server.mjs';
import { ref, watch, computed, resolveComponent, mergeProps, unref, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { u as useAuthStore } from './authStore.86d26292.mjs';
import { u as useCartStore } from './cartStore.6ef0e8af.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { P as ProductType } from './common.45dab837.mjs';
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
    const authStore = useAuthStore();
    const cartStore = useCartStore();
    const cartType = ref(ProductType.General);
    watch(routes, (_new) => {
      updateCartType();
    });
    const currentMerch = computed(() => {
      switch (cartType.value) {
        case ProductType.ColdChain:
          return cartStore == null ? void 0 : cartStore.merch.filter((e) => e.attribute === "COLD_CHAIN");
        default:
          return cartStore == null ? void 0 : cartStore.merch.filter((e) => e.attribute === "GENERAL");
      }
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
      var _a, _b;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_n_input_number = resolveComponent("n-input-number");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "full_height mt-30 mt185ptb30" }, _attrs))}><div class="cart_container mb-50"><ul class="list-inline dashboard-menu text-center"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/cart",
        class: { active: unref(cartType) === unref(ProductType).General }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u4E00\u822C\u5546\u54C1 `);
          } else {
            return [
              createTextVNode(" \u4E00\u822C\u5546\u54C1 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/cart?type=cold-chain",
        class: { active: unref(cartType) === unref(ProductType).ColdChain }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u51B7\u934A\u5546\u54C1 `);
          } else {
            return [
              createTextVNode(" \u51B7\u934A\u5546\u54C1 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul><div style="${ssrRenderStyle([
        !((_a = unref(cartStore)) == null ? void 0 : _a.merch.length) ? null : { display: "none" },
        { "margin": "72px 0" }
      ])}" class="text-center"><i class="fa-solid fa-cart-shopping"></i><h2 class="text-center"> \u8CFC\u7269\u8ECA\u6C92\u6709\u6771\u897F </h2>`);
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
      if ((_b = unref(cartStore)) == null ? void 0 : _b.merch.length) {
        _push(`<form method="post" action="javascript:;"><div>\u5171${ssrInterpolate(unref(currentMerch).length)}\u9805\u5546\u54C1</div><table class="cart_list"><tbody><!--[-->`);
        ssrRenderList(unref(currentMerch), (item) => {
          var _a2, _b2;
          _push(`<tr><td class="cart_img"><a href="/product" target="new"><img${ssrRenderAttr("src", ((_a2 = item == null ? void 0 : item.thumbnail) == null ? void 0 : _a2.url) || "/products/p" + (item.id - 10) + ".jpg")}></a></td><td class="cart_tl"><a href="/product" target="new"><h5>${ssrInterpolate(item == null ? void 0 : item.name)}</h5></a>`);
          _push(ssrRenderComponent(_component_n_input_number, {
            value: item.amount,
            "onUpdate:value": ($event) => item.amount = $event,
            min: 1,
            style: { width: "150px" }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span${_scopeId}>\u6EFF\u984D\u514D\u904B</span>`);
              } else {
                return [
                  createVNode("span", null, "\u6EFF\u984D\u514D\u904B")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</td><td class="cart_price text-right"><span>\u5E02\u50F9 $${ssrInterpolate((_b2 = item == null ? void 0 : item.price) == null ? void 0 : _b2.market)}</span> \u50F9\u9322 $${ssrInterpolate(getCurrentPriceByAuth(item))}</td><td class="cart_price text-right"><button type="button" class="del_btn"><i class="fa-solid fa-trash-can"></i></button></td></tr>`);
        });
        _push(`<!--]--></tbody></table><ul class="cart_check"><li> \u5546\u54C1\u91D1\u984D\u5C0F\u8A08 (\u5171${ssrInterpolate(unref(currentMerch).length)}\u9805\u5546\u54C1)\uFF1A<span>$${ssrInterpolate(unref(totalPrice))}</span></li></ul><div class="text-right mb-20 mt-20">`);
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
        _push(`<button type="submit" class="btn btn-main btn-check"> \u4E0B\u4E00\u6B65 </button></div></form>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div style="${ssrRenderStyle(unref(currentMerch).length ? null : { display: "none" })}" class="alert alert-warning alert-common" role="alert"> \u8CBC\u5FC3\u63D0\u9192: \u4E00\u822C\u5E38\u6EAB\u5546\u54C1,\u7121\u6CD5\u8207\u51B7\u934A\u5546\u54C1\u540C\u6642\u51FA\u8CA8, \u656C\u8ACB\u5206\u958B\u7D50\u5E33,\u8B1D\u8B1D\u60A8 </div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=cart.564c3f55.mjs.map
