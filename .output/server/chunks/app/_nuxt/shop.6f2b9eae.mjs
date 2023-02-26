import { _ as _export_sfc, a as useRuntimeConfig, f as __nuxt_component_0$1 } from '../server.mjs';
import { ref, watch, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { u as useCartStore } from './cartStore.871358b9.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "shop",
  __ssrInlineRender: true,
  setup(__props) {
    useRuntimeConfig();
    const defaultCategory = {
      id: -1,
      name: "\u6240\u6709\u7522\u54C1"
    };
    const currentCategoryId = ref(defaultCategory.id);
    const prodCategories = ref([]);
    const products = ref([]);
    useCartStore();
    const collapseToggle = ref(false);
    const currentProduct = ref([]);
    watch(currentCategoryId, (_new) => {
      if (_new === defaultCategory.id) {
        currentProduct.value = products.value;
        return;
      }
      currentProduct.value = products.value.filter((e) => e.categoryId === _new);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "full_height mt-120" }, _attrs))} data-v-efab3794><div class="row" data-v-efab3794><div class="col-sm-3 p-0 bg_left2" data-v-efab3794><div id="accordion" class="panel-group commonAccordion" role="tablist" aria-multiselectable="true" data-v-efab3794><div class="panel panel-default" data-v-efab3794><div id="headingOne" class="panel-heading" role="tab" data-v-efab3794><h4 class="panel-title" data-v-efab3794><a role="button" href="javascript:;" data-v-efab3794> \u7522\u54C1\u985E\u5225 </a></h4></div><div id="tab-collapse-area" class="${ssrRenderClass([{ inactive: unref(collapseToggle) }, "panel-collapse collapse in"])}" role="tabpanel" aria-labelledby="headingOne" data-v-efab3794><ul data-v-efab3794><!--[-->`);
      ssrRenderList(unref(prodCategories), (category) => {
        _push(`<li class="${ssrRenderClass({ active: unref(currentCategoryId) === category.id })}" data-v-efab3794><a href="javascript:;" data-v-efab3794>${ssrInterpolate(category.name)}</a></li>`);
      });
      _push(`<!--]--></ul></div></div></div></div><div class="col-sm-9 pl20pr30" data-v-efab3794><ol class="breadcrumb" data-v-efab3794><li data-v-efab3794><a href="/" data-v-efab3794>Home</a></li><li data-v-efab3794>\u7522\u54C1\u4ECB\u7D39</li><li class="active" data-v-efab3794> \u985E\u5225\u540D\u7A31 </li></ol><div class="row" data-v-efab3794><div class="flex-row col-lg-4 col-md-6 col-sm-12" data-v-efab3794><!--[-->`);
      ssrRenderList(unref(currentProduct), (item) => {
        _push(`<div class="product_frame" data-v-efab3794><div style="${ssrRenderStyle(item.brief ? null : { display: "none" })}" class="hot_sale2" data-v-efab3794><span data-v-efab3794>${ssrInterpolate(item.brief)}</span></div><div class="product_img" data-v-efab3794>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/product?id=${item.id}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a, _b;
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", ((_a = item == null ? void 0 : item.thumbnail) == null ? void 0 : _a.url) || "/products/p" + (item.id - 10) + ".jpg")} alt="" data-v-efab3794${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: ((_b = item == null ? void 0 : item.thumbnail) == null ? void 0 : _b.url) || "/products/p" + (item.id - 10) + ".jpg",
                  alt: ""
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><h3 data-v-efab3794>`);
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
        _push(`</h3><ul data-v-efab3794><li data-v-efab3794> $${ssrInterpolate(item == null ? void 0 : item.price)} <span data-v-efab3794>\u5E02\u5834\u50F9</span></li><li data-v-efab3794> $${ssrInterpolate(item == null ? void 0 : item.memberPrice)} <span data-v-efab3794>\u6703\u54E1\u50F9</span></li><li data-v-efab3794> $${ssrInterpolate(item == null ? void 0 : item.vipPrice)} <span data-v-efab3794>VIP\u50F9</span></li><li data-v-efab3794> $${ssrInterpolate(item == null ? void 0 : item.svipPrice)} <span data-v-efab3794>SVIP\u50F9</span></li><li data-v-efab3794><button data-v-efab3794><i class="fa-solid fa-cart-shopping" data-v-efab3794></i></button></li></ul></div>`);
      });
      _push(`<!--]--></div></div><span style="${ssrRenderStyle(!unref(currentProduct).length ? null : { display: "none" })}" class="not-found" data-v-efab3794>\u76EE\u524D\u6C92\u6709\u8A72\u985E\u5225\u7684\u7522\u54C1</span><div class="text-center" data-v-efab3794><ul class="pagination post-pagination" data-v-efab3794><li data-v-efab3794><a href="#!" data-v-efab3794>\u4E0A\u4E00\u9801</a></li><li class="active" data-v-efab3794><a href="#!" data-v-efab3794>1</a></li><li data-v-efab3794><a href="#!" data-v-efab3794>2</a></li><li data-v-efab3794><a href="#!" data-v-efab3794>3</a></li><li data-v-efab3794><a href="#!" data-v-efab3794>4</a></li><li data-v-efab3794><a href="#!" data-v-efab3794>5</a></li><li data-v-efab3794><a href="#!" data-v-efab3794>\u4E0B\u4E00\u9801</a></li></ul></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const shop = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-efab3794"]]);

export { shop as default };
//# sourceMappingURL=shop.6f2b9eae.mjs.map
