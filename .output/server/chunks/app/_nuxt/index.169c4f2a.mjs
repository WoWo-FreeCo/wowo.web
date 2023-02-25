import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as _export_sfc, a as useRuntimeConfig, f as __nuxt_component_0$1 } from '../server.mjs';
import { ref, watch, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { u as useCartStore } from './cartStore.3ffb3293.mjs';
import { Autoplay, EffectCreative } from 'swiper';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'defu';
import 'node:fs';
import 'node:url';
import 'pathe';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'axios';
import 'naive-ui';

const _imports_0 = "" + globalThis.__buildAssetsURL("1.bcb2cf70.jpg");
const slide1 = "" + globalThis.__buildAssetsURL("wo_index_01.e0db537e.jpg");
const slide2 = "" + globalThis.__buildAssetsURL("wo_index_02.8961332b.jpg");
const slide3 = "" + globalThis.__buildAssetsURL("wo_index_03.96437aed.jpg");
const slide4 = "" + globalThis.__buildAssetsURL("wo_index_04.d21a22fa.jpg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRuntimeConfig();
    const slideItems = [
      { id: 0, url: "/bonus-point", img: slide1 },
      { id: 1, url: "/", img: slide2 },
      { id: 2, url: "/", img: slide3 },
      { id: 3, url: "/", img: slide4 }
    ];
    const defaultCategory = {
      id: -1,
      name: "\u6240\u6709\u7522\u54C1"
    };
    const currentCategory = ref(defaultCategory.name);
    const prodCategories = ref([]);
    const products = ref([]);
    useCartStore();
    let currentProduct = ref([]);
    watch(currentCategory, (_new) => {
      if (_new === defaultCategory.name) {
        currentProduct = products.value;
        return;
      }
      currentProduct = products.value.filter((e) => e.category === _new);
      console.log(products.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-130bb3df>`);
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
            ssrRenderList(slideItems, (slide) => {
              _push2(ssrRenderComponent(_component_SwiperSlide, { key: slide }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtLink, {
                      to: `${slide.url}`
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<img${ssrRenderAttr("src", slide.img)} alt="" data-v-130bb3df${_scopeId3}>`);
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
                        to: `${slide.url}`
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
              (openBlock(), createBlock(Fragment, null, renderList(slideItems, (slide) => {
                return createVNode(_component_SwiperSlide, { key: slide }, {
                  default: withCtx(() => [
                    createVNode(_component_NuxtLink, {
                      to: `${slide.url}`
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
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="text-center full_height" data-v-130bb3df><div class="sub_menubar" data-v-130bb3df><div class="container tabCommon" data-v-130bb3df><ul class="nav nav-tabs bbottom_none labels-flex" data-v-130bb3df><!--[-->`);
      ssrRenderList(unref(prodCategories), (category) => {
        _push(`<li class="${ssrRenderClass({ active: unref(currentCategory) === (category == null ? void 0 : category.name) })}" data-v-130bb3df><a href="javascript:;" data-toggle="tab" data-v-130bb3df>${ssrInterpolate(category.name)}</a></li>`);
      });
      _push(`<!--]--></ul></div></div><div class="container tabCommon" data-v-130bb3df><div class="tab-content text-left" data-v-130bb3df><div id="cate_1" class="tab-pane fade active in" data-v-130bb3df><div class="index_pslide" data-v-130bb3df><!--[-->`);
      ssrRenderList(unref(currentProduct), (item) => {
        _push(`<div class="product_frame" data-v-130bb3df><div style="${ssrRenderStyle((item == null ? void 0 : item.brief) ? null : { display: "none" })}" class="hot_sale2" data-v-130bb3df>${ssrInterpolate(item.brief)}</div><div class="product_img" data-v-130bb3df>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/product?id=${item == null ? void 0 : item.id}`,
          target: "_blank"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a, _b;
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", ((_a = item == null ? void 0 : item.thumbnail) == null ? void 0 : _a.url) || "/products/p" + (item.id - 10) + ".jpg")} alt="" data-v-130bb3df${_scopeId}>`);
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
        _push(`</div><h3 data-v-130bb3df>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/product?id=${item == null ? void 0 : item.id}`,
          target: "_blank"
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
        _push(`</h3><ul data-v-130bb3df><li data-v-130bb3df> $${ssrInterpolate(item == null ? void 0 : item.price)} <span data-v-130bb3df>\u5E02\u5834\u50F9</span></li><li data-v-130bb3df> $${ssrInterpolate(item == null ? void 0 : item.memberPrice)} <span data-v-130bb3df>\u6703\u54E1\u50F9</span></li><li data-v-130bb3df> $${ssrInterpolate(item == null ? void 0 : item.vipPrice)} <span data-v-130bb3df>VIP\u50F9</span></li><li data-v-130bb3df> $${ssrInterpolate(item == null ? void 0 : item.svipPrice)} <span data-v-130bb3df>SVIP\u50F9</span></li><li data-v-130bb3df><button data-v-130bb3df><i class="fa-solid fa-cart-shopping" data-v-130bb3df></i></button></li></ul></div>`);
      });
      _push(`<!--]--><span style="${ssrRenderStyle(!unref(currentProduct).length ? null : { display: "none" })}" class="not-found" data-v-130bb3df>\u76EE\u524D\u6C92\u6709\u8A72\u985E\u5225\u7684\u7522\u54C1</span></div></div></div><a href="/shop" class="btn btn-main btn-large btn-more mt-50" data-v-130bb3df>\u66F4\u591A\u5546\u54C1</a></div></section><div class="index_ad" data-v-130bb3df><a href="/bid" target="new" data-v-130bb3df><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-130bb3df></a><a href="/bid" target="new" data-v-130bb3df><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-130bb3df></a></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-130bb3df"]]);

export { index as default };
//# sourceMappingURL=index.169c4f2a.mjs.map
