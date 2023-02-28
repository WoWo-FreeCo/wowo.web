import { _ as _export_sfc, u as useRuntimeConfig, e as useRoute, f as __nuxt_component_0$1 } from '../server.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { u as useCartStore } from './cartStore.4cdae3c6.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { b as GET_ALL_PRODUCT } from './requestURL.ee907d97.mjs';
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
    const runtimeConfig = useRuntimeConfig();
    const route = useRoute();
    const defaultCategory = {
      id: -1,
      name: "\u6240\u6709\u7522\u54C1"
    };
    const currentCategoryId = ref(defaultCategory.id);
    const currentPage = ref(1);
    const allProd = ref([]);
    const maxPage = ref(1);
    const prodCategories = ref([]);
    const products = ref([]);
    useCartStore();
    const collapseToggle = ref(false);
    const currentProduct = ref([]);
    async function fetchProd(_categoryId, _page) {
      var _a, _b, _c, _d, _e;
      try {
        const categoryId = _categoryId || ((_a = route.query) == null ? void 0 : _a.category);
        const page = _page || ((_b = route.query) == null ? void 0 : _b.page) || 1;
        const take = 6;
        currentCategoryId.value = categoryId || -1;
        currentPage.value = page;
        let cidPattern = `categoryId=${categoryId}`;
        if (_categoryId === -1 || ((_c = route.query) == null ? void 0 : _c.category) === "-1" || !((_d = route.query) == null ? void 0 : _d.category)) {
          cidPattern = "";
        }
        console.log((_e = route.query) == null ? void 0 : _e.category);
        const res = await $fetch(`${runtimeConfig.public.apiBase}/${GET_ALL_PRODUCT}?take=${take}&${cidPattern}&skip=${(page - 1) * take}`);
        const { data } = res;
        products.value = data;
        currentProduct.value = data;
        const resProd = await $fetch(`${runtimeConfig.public.apiBase}/${GET_ALL_PRODUCT}?take=200&${cidPattern}`);
        allProd.value = resProd.data;
        maxPage.value = parseInt(allProd.value.length / 6) + 1;
      } catch (error) {
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "full_height mt-120" }, _attrs))} data-v-4dda3dfb><div class="row" data-v-4dda3dfb><div class="col-sm-3 p-0 bg_left2" data-v-4dda3dfb><div id="accordion" class="panel-group commonAccordion" role="tablist" aria-multiselectable="true" data-v-4dda3dfb><div class="panel panel-default" data-v-4dda3dfb><div id="headingOne" class="panel-heading" role="tab" data-v-4dda3dfb><h4 class="panel-title" data-v-4dda3dfb><a role="button" href="javascript:;" data-v-4dda3dfb> \u7522\u54C1\u985E\u5225 </a></h4></div><div id="tab-collapse-area" class="${ssrRenderClass([{ inactive: unref(collapseToggle) }, "panel-collapse collapse in"])}" role="tabpanel" aria-labelledby="headingOne" data-v-4dda3dfb><ul data-v-4dda3dfb><!--[-->`);
      ssrRenderList(unref(prodCategories), (category) => {
        var _a2;
        _push(`<li class="${ssrRenderClass({ active: ((_a2 = unref(route).query) == null ? void 0 : _a2.category) == category.id || unref(currentCategoryId) === category.id })}" data-v-4dda3dfb>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/shop?category=${category.id}`,
          onClick: ($event) => fetchProd(category.id, 1)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(category.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(category.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></div></div></div><div class="col-sm-9 pl20pr30" data-v-4dda3dfb><ol class="breadcrumb" data-v-4dda3dfb><li data-v-4dda3dfb><a href="/" data-v-4dda3dfb>Home</a></li><li data-v-4dda3dfb>\u7522\u54C1\u4ECB\u7D39</li><li class="active" data-v-4dda3dfb>${ssrInterpolate((_a = unref(prodCategories).find((item) => item.id === unref(currentCategoryId))) == null ? void 0 : _a.name)}</li></ol><div class="row" data-v-4dda3dfb><div class="flex-row col-lg-4 col-md-6 col-sm-12" data-v-4dda3dfb><!--[-->`);
      ssrRenderList(unref(currentProduct), (item) => {
        _push(`<div class="product_frame" data-v-4dda3dfb><div style="${ssrRenderStyle(item.brief ? null : { display: "none" })}" class="hot_sale2" data-v-4dda3dfb><span data-v-4dda3dfb>${ssrInterpolate(item.brief)}</span></div><div class="product_img" data-v-4dda3dfb>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/product?id=${item.id}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b;
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", ((_a2 = item == null ? void 0 : item.thumbnail) == null ? void 0 : _a2.url) || `https://picsum.photos/500/500?${item.id}`)} alt="" data-v-4dda3dfb${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: ((_b = item == null ? void 0 : item.thumbnail) == null ? void 0 : _b.url) || `https://picsum.photos/500/500?${item.id}`,
                  alt: ""
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><h3 data-v-4dda3dfb>`);
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
        _push(`</h3><ul data-v-4dda3dfb><li data-v-4dda3dfb> $${ssrInterpolate(item == null ? void 0 : item.price)} <span data-v-4dda3dfb>\u5E02\u5834\u50F9</span></li><li data-v-4dda3dfb> $${ssrInterpolate(item == null ? void 0 : item.memberPrice)} <span data-v-4dda3dfb>\u6703\u54E1\u50F9</span></li><li data-v-4dda3dfb> $${ssrInterpolate(item == null ? void 0 : item.vipPrice)} <span data-v-4dda3dfb>VIP\u50F9</span></li><li data-v-4dda3dfb> $${ssrInterpolate(item == null ? void 0 : item.svipPrice)} <span data-v-4dda3dfb>SVIP\u50F9</span></li><li data-v-4dda3dfb><button data-v-4dda3dfb><i class="fa-solid fa-cart-shopping" data-v-4dda3dfb></i></button></li></ul></div>`);
      });
      _push(`<!--]--></div></div><span style="${ssrRenderStyle(!unref(currentProduct).length ? null : { display: "none" })}" class="not-found" data-v-4dda3dfb>\u76EE\u524D\u6C92\u6709\u8A72\u985E\u5225\u7684\u7522\u54C1</span><div class="text-center" data-v-4dda3dfb><ul class="pagination post-pagination" data-v-4dda3dfb><!--[-->`);
      ssrRenderList(unref(maxPage), (item) => {
        _push(`<li class="${ssrRenderClass({ active: unref(currentPage) == item })}" data-v-4dda3dfb>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/shop?category=${unref(currentCategoryId)}&page=${item}`,
          onClick: ($event) => fetchProd(unref(currentCategoryId), item)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const shop = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4dda3dfb"]]);

export { shop as default };
//# sourceMappingURL=shop.dcfc6981.mjs.map
