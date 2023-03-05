import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as _export_sfc, u as useRuntimeConfig, g as useCartStore, e as __nuxt_component_0$1 } from '../server.mjs';
import { ref, watch, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { u as useCookie } from './cookie.193cbb61.mjs';
import { Autoplay, EffectCreative } from 'swiper';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
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
import 'cookie-es';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRuntimeConfig();
    useCookie("emap_711", {
      maxAge: 60 * 60 * 24
    });
    const defaultCategory = {
      id: -1,
      name: "\u6240\u6709\u7522\u54C1"
    };
    const currentCategoryId = ref(defaultCategory.id);
    const prodCategories = ref([]);
    const products = ref([]);
    const homeBanner = ref([]);
    useCartStore();
    let currentProduct = ref([]);
    watch(currentCategoryId, (_new) => {
      if (_new === defaultCategory.id) {
        currentProduct = products.value;
        return;
      }
      currentProduct = products.value.filter((e) => e.categoryId === _new);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-da702541>`);
      if (unref(homeBanner)) {
        _push(ssrRenderComponent(_component_Swiper, {
          class: "swiper-root",
          modules: [unref(Autoplay), unref(EffectCreative)],
          "slides-per-view": 1,
          loop: true,
          effect: "creative",
          autoplay: {
            delay: 4e3,
            disableOnInteraction: true
          },
          "creative-effect": {
            prev: {
              shadow: false,
              translate: ["-20%", 0, -1]
            },
            next: {
              translate: ["100%", 0, 0]
            }
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(homeBanner), (slide) => {
                _push2(ssrRenderComponent(_component_SwiperSlide, {
                  key: slide.id
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_NuxtLink, {
                        to: `${slide.href}`
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<img${ssrRenderAttr("src", slide.img)} alt="" data-v-da702541${_scopeId3}>`);
                          } else {
                            return [
                              createVNode("img", {
                                src: slide.img,
                                alt: ""
                              }, null, 8, ["src"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_NuxtLink, {
                          to: `${slide.href}`
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: slide.img,
                              alt: ""
                            }, null, 8, ["src"])
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(homeBanner), (slide) => {
                  return openBlock(), createBlock(_component_SwiperSlide, {
                    key: slide.id
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtLink, {
                        to: `${slide.href}`
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: slide.img,
                            alt: ""
                          }, null, 8, ["src"])
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="text-center full_height" data-v-da702541><div class="sub_menubar" data-v-da702541><div class="container tabCommon" data-v-da702541><ul class="nav nav-tabs bbottom_none labels-flex" data-v-da702541><!--[-->`);
      ssrRenderList(unref(prodCategories), (category) => {
        _push(`<li class="${ssrRenderClass({ active: unref(currentCategoryId) === (category == null ? void 0 : category.id) })}" data-v-da702541><a href="javascript:;" data-toggle="tab" data-v-da702541>${ssrInterpolate(category.name)}</a></li>`);
      });
      _push(`<!--]--></ul></div></div><div class="container tabCommon" data-v-da702541><div class="tab-content text-left" data-v-da702541><div id="cate_1" class="tab-pane fade active in" data-v-da702541><div class="index_pslide" data-v-da702541><!--[-->`);
      ssrRenderList(unref(currentProduct), (item) => {
        _push(`<div class="product_frame" data-v-da702541><div style="${ssrRenderStyle((item == null ? void 0 : item.brief) ? null : { display: "none" })}" class="hot_sale2" data-v-da702541>${ssrInterpolate(item.brief)}</div><div class="product_img" data-v-da702541>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/product?id=${item == null ? void 0 : item.id}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", item == null ? void 0 : item.coverImg)} alt="" data-v-da702541${_scopeId}>`);
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
        _push(`</div><h3 data-v-da702541>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/product?id=${item == null ? void 0 : item.id}`
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
        _push(`</h3><ul data-v-da702541><li data-v-da702541> $${ssrInterpolate(item == null ? void 0 : item.price)} <span data-v-da702541>\u5E02\u5834\u50F9</span></li><li data-v-da702541> $${ssrInterpolate(item == null ? void 0 : item.memberPrice)} <span data-v-da702541>\u6703\u54E1\u50F9</span></li><li data-v-da702541> $${ssrInterpolate(item == null ? void 0 : item.vipPrice)} <span data-v-da702541>VIP\u50F9</span></li><li data-v-da702541> $${ssrInterpolate(item == null ? void 0 : item.svipPrice)} <span data-v-da702541>SVIP\u50F9</span></li><li data-v-da702541><button data-v-da702541><i class="fa-solid fa-cart-shopping" data-v-da702541></i></button></li></ul></div>`);
      });
      _push(`<!--]--><span style="${ssrRenderStyle(!unref(currentProduct).length ? null : { display: "none" })}" class="not-found" data-v-da702541>\u76EE\u524D\u6C92\u6709\u8A72\u985E\u5225\u7684\u7522\u54C1</span></div></div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/shop?category=-1",
        class: "btn btn-main btn-large btn-more mt-20 more-prod"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u66F4\u591A\u5546\u54C1 `);
          } else {
            return [
              createTextVNode(" \u66F4\u591A\u5546\u54C1 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-da702541"]]);

export { index as default };
//# sourceMappingURL=index.f059b586.mjs.map
