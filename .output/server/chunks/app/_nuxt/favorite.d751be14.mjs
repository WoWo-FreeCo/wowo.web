import { _ as _sfc_main$1, a as _sfc_main$2 } from './ProfileSidebar.e76e50a3.mjs';
import { _ as _export_sfc, a as useAuthStore, h as useCartStore, b as useRouter, g as useRoute, f as __nuxt_component_0$1 } from '../server.mjs';
import { computed, ref, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import './pageStatusStore.49fe501e.mjs';
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
  __name: "favorite",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    const cartStore = useCartStore();
    useRouter();
    useRoute();
    const favProduct = computed(() => cartStore.favMerch);
    ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UserProfile = _sfc_main$1;
      const _component_ProfileSidebar = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-c597e354><section class="full_height mt185ptb30 pt0" data-v-c597e354>`);
      _push(ssrRenderComponent(_component_UserProfile, null, null, _parent));
      _push(`<div class="row" data-v-c597e354>`);
      _push(ssrRenderComponent(_component_ProfileSidebar, null, null, _parent));
      _push(`<div class="col-sm-9 pl20pr30" data-v-c597e354><h3 class="h3_tl border_bottom" data-v-c597e354> \u6309\u8B9A\u597D\u7269 </h3>`);
      if (unref(favProduct).length) {
        _push(`<div class="total_love" data-v-c597e354> \u5171 ${ssrInterpolate(unref(favProduct).length)} \u9805\u5546\u54C1 </div>`);
      } else {
        _push(`<div class="empty-hint" data-v-c597e354> \u76EE\u524D\u9084\u6C92\u6709\u6700\u611B\u5546\u54C1\u54E6 <br data-v-c597e354>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/shop?category=-1",
          class: "btn btn-main btn-large btn-more mt-20 more-prod"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u4F86\u53BB\u901B\u901B `);
            } else {
              return [
                createTextVNode(" \u4F86\u53BB\u901B\u901B ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`<div class="row" data-v-c597e354><div class="flex-row col-lg-4 col-md-6 col-sm-12" data-v-c597e354><!--[-->`);
      ssrRenderList(unref(favProduct), (item) => {
        var _a, _b, _c, _d;
        _push(`<div class="product_frame" data-v-c597e354><div style="${ssrRenderStyle(item.brief ? null : { display: "none" })}" class="hot_sale2" data-v-c597e354><span data-v-c597e354>${ssrInterpolate(item.brief)}</span></div><div class="product_img" data-v-c597e354>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/product?id=${item.id}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", item == null ? void 0 : item.coverImg)} alt="" data-v-c597e354${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: item == null ? void 0 : item.coverImg,
                  alt: ""
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><h3 data-v-c597e354>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/product?id=${item.id}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</h3><ul data-v-c597e354><li class="${ssrRenderClass({
          "vip_price": !((_a = unref(authStore).user) == null ? void 0 : _a.memberLevel)
        })}" data-v-c597e354> $${ssrInterpolate(item == null ? void 0 : item.price)} <span data-v-c597e354>\u5E02\u50F9</span></li><li class="${ssrRenderClass({
          "vip_price": ((_b = unref(authStore).user) == null ? void 0 : _b.memberLevel) === "NORMAL"
        })}" data-v-c597e354> $${ssrInterpolate(item == null ? void 0 : item.memberPrice)} <span data-v-c597e354>\u6703\u54E1</span></li><li class="${ssrRenderClass({
          "vip_price": ((_c = unref(authStore).user) == null ? void 0 : _c.memberLevel) === "VIP"
        })}" data-v-c597e354> $${ssrInterpolate(item == null ? void 0 : item.vipPrice)} <span data-v-c597e354>VIP</span></li><li class="${ssrRenderClass({
          "vip_price": ((_d = unref(authStore).user) == null ? void 0 : _d.memberLevel) === "SVIP"
        })}" data-v-c597e354> $${ssrInterpolate(item == null ? void 0 : item.svipPrice)} <span data-v-c597e354>SVIP</span></li><li data-v-c597e354><button data-v-c597e354><i class="fa-solid fa-cart-shopping" data-v-c597e354></i></button></li></ul></div>`);
      });
      _push(`<!--]--></div></div>`);
      {
        _push(`<!---->`);
      }
      _push(`</div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/favorite.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const favorite = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c597e354"]]);

export { favorite as default };
//# sourceMappingURL=favorite.d751be14.mjs.map
