import { _ as _export_sfc, u as useRuntimeConfig, g as useRoute, a as useAuthStore, h as useCartStore, f as __nuxt_component_0$1 } from '../server.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { c as GET_ALL_PRODUCT } from './requestURL.9fc03ab5.mjs';
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
    const authStore = useAuthStore();
    const cartStore = useCartStore();
    const collapseToggle = ref(false);
    const fakeProds = Array.from({ length: 6 }, () => ({ type: "fake" }));
    const currentProduct = ref(fakeProds);
    async function fetchProd(props = { _categoryId: -1, _page: 1, mount: false }) {
      var _a, _b, _c, _d;
      const { _categoryId, _page, mount } = props;
      console.log(props);
      try {
        const categoryId = _categoryId || ((_a = route.query) == null ? void 0 : _a.category);
        const page = _page || ((_b = route.query) == null ? void 0 : _b.page) || 1;
        const take = 6;
        currentCategoryId.value = categoryId || -1;
        currentPage.value = page;
        let cidPattern = `categoryId=${categoryId}`;
        if (_categoryId == -1 || !((_c = route.query) == null ? void 0 : _c.category) || mount) {
          cidPattern = "";
        }
        console.log((_d = route.query) == null ? void 0 : _d.category);
        console.log("b", _categoryId);
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
    function isFavorite(item) {
      var _a;
      return (_a = cartStore.favMerch) == null ? void 0 : _a.find((e) => e.id === (item == null ? void 0 : item.id));
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "full_height mt-120" }, _attrs))} data-v-a1634a37><div class="row" data-v-a1634a37><div class="col-sm-3 p-0 bg_left2" data-v-a1634a37><div id="accordion" class="panel-group commonAccordion" role="tablist" aria-multiselectable="true" data-v-a1634a37><div class="panel panel-default" data-v-a1634a37><div id="headingOne" class="panel-heading" role="tab" data-v-a1634a37><h4 class="panel-title" data-v-a1634a37><a role="button" href="javascript:;" data-v-a1634a37> \u7522\u54C1\u985E\u5225 </a></h4></div><div id="tab-collapse-area" class="${ssrRenderClass([{ inactive: unref(collapseToggle) }, "panel-collapse collapse in"])}" role="tabpanel" aria-labelledby="headingOne" data-v-a1634a37><ul data-v-a1634a37><!--[-->`);
      ssrRenderList(unref(prodCategories), (category) => {
        var _a2;
        _push(`<li class="${ssrRenderClass({ active: ((_a2 = unref(route).query) == null ? void 0 : _a2.category) == category.id || unref(currentCategoryId) === category.id })}" data-v-a1634a37>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/shop?category=${category.id}`,
          onClick: ($event) => fetchProd({ _categoryId: category.id, _page: 1 })
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
      _push(`<!--]--></ul></div></div></div></div><div class="col-sm-9 pl20pr30" data-v-a1634a37><ol class="breadcrumb" data-v-a1634a37><li data-v-a1634a37><a href="/" data-v-a1634a37>Home</a></li><li data-v-a1634a37>\u7522\u54C1\u4ECB\u7D39</li><li class="active" data-v-a1634a37>${ssrInterpolate((_a = unref(prodCategories).find((item) => item.id === unref(currentCategoryId))) == null ? void 0 : _a.name)}</li></ol><div class="row" data-v-a1634a37><div class="flex-row col-lg-4 col-md-6 col-sm-12" data-v-a1634a37><!--[-->`);
      ssrRenderList(unref(currentProduct), (item) => {
        var _a2, _b, _c, _d, _e;
        _push(`<div style="${ssrRenderStyle(((_a2 = item == null ? void 0 : item.inventory) == null ? void 0 : _a2.quantity) >= 1 || (item == null ? void 0 : item.type) === "fake" ? null : { display: "none" })}" class="product_frame" data-v-a1634a37><button class="add_like" data-v-a1634a37><i class="${ssrRenderClass([{
          "fa-solid": isFavorite(item),
          "fa-heart": isFavorite(item)
        }, "far fa-heart"])}" data-v-a1634a37></i></button><div style="${ssrRenderStyle(item.brief ? null : { display: "none" })}" class="hot_sale2" data-v-a1634a37><span data-v-a1634a37>${ssrInterpolate(item.brief)}</span></div><div class="product_img" data-v-a1634a37><div class="skeleton" data-v-a1634a37></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/product?id=${item.id}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", item == null ? void 0 : item.coverImg)} alt="" data-v-a1634a37${_scopeId}>`);
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
        _push(`</div><h3 data-v-a1634a37>`);
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
        _push(`</h3><ul data-v-a1634a37><li class="${ssrRenderClass({
          "vip_price": !((_b = unref(authStore).user) == null ? void 0 : _b.memberLevel)
        })}" data-v-a1634a37> $${ssrInterpolate(item == null ? void 0 : item.price)} <span data-v-a1634a37>\u5E02\u50F9</span></li><li class="${ssrRenderClass({
          "vip_price": ((_c = unref(authStore).user) == null ? void 0 : _c.memberLevel) === "NORMAL"
        })}" data-v-a1634a37> $${ssrInterpolate(item == null ? void 0 : item.memberPrice)} <span data-v-a1634a37>\u6703\u54E1</span></li><li class="${ssrRenderClass({
          "vip_price": ((_d = unref(authStore).user) == null ? void 0 : _d.memberLevel) === "VIP"
        })}" data-v-a1634a37> $${ssrInterpolate(item == null ? void 0 : item.vipPrice)} <span data-v-a1634a37>VIP</span></li><li class="${ssrRenderClass({
          "vip_price": ((_e = unref(authStore).user) == null ? void 0 : _e.memberLevel) === "SVIP"
        })}" data-v-a1634a37> $${ssrInterpolate(item == null ? void 0 : item.svipPrice)} <span data-v-a1634a37>SVIP</span></li><li data-v-a1634a37><button data-v-a1634a37><i class="fa-solid fa-cart-shopping" data-v-a1634a37></i></button></li></ul></div>`);
      });
      _push(`<!--]--></div></div><span style="${ssrRenderStyle(!unref(currentProduct).length ? null : { display: "none" })}" class="not-found" data-v-a1634a37>\u76EE\u524D\u6C92\u6709\u8A72\u985E\u5225\u7684\u7522\u54C1</span><div class="text-center" data-v-a1634a37><ul class="pagination post-pagination" data-v-a1634a37><!--[-->`);
      ssrRenderList(unref(maxPage), (item) => {
        _push(`<li class="${ssrRenderClass({ active: unref(currentPage) == item })}" data-v-a1634a37>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/shop?category=${unref(currentCategoryId)}&page=${item}`,
          onClick: ($event) => fetchProd({ _categoryId: unref(currentCategoryId), _page: item })
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
const shop = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a1634a37"]]);

export { shop as default };
//# sourceMappingURL=shop.af0570a2.mjs.map