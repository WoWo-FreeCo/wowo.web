import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as _export_sfc, h as useCartStore, g as useRoute, b as useRouter, u as useRuntimeConfig, f as __nuxt_component_0$1 } from '../server.mjs';
import { ref, computed, resolveComponent, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createTextVNode, isRef, useSSRContext } from 'vue';
import { Autoplay, EffectCreative, Controller, Navigation } from 'swiper';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "product",
  __ssrInlineRender: true,
  setup(__props) {
    const cartStore = useCartStore();
    useRoute();
    useRouter();
    useRuntimeConfig();
    ref([]);
    const currentProduct = ref({});
    const loading = ref(true);
    const addingAmount = ref(1);
    const currentTag = ref(0);
    const isFavorite = computed(() => {
      var _a;
      return (_a = cartStore.favMerch) == null ? void 0 : _a.find((e) => e.id === currentProduct.value.id);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_n_input_number = resolveComponent("n-input-number");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-cf2cdd33><section class="full_height mt185ptb30" data-v-cf2cdd33><div class="container" data-v-cf2cdd33><div class="row product_flex" data-v-cf2cdd33><div class="col-md-6 col-sm-12 single-product-slider" data-v-cf2cdd33><div class="product_frame" data-v-cf2cdd33><button class="add_like" data-v-cf2cdd33><i class="${ssrRenderClass([{
        "fa-solid": unref(isFavorite),
        "fa-heart": unref(isFavorite)
      }, "far fa-heart"])}" data-v-cf2cdd33></i></button><div style="${ssrRenderStyle(((_a = unref(currentProduct)) == null ? void 0 : _a.brief) ? null : { display: "none" })}" class="hot_sale" data-v-cf2cdd33><span data-v-cf2cdd33>${ssrInterpolate((_b = unref(currentProduct)) == null ? void 0 : _b.brief)}</span></div><div class="main_product" data-v-cf2cdd33>`);
      _push(ssrRenderComponent(_component_Swiper, {
        class: "swiper-root swiper-prod",
        modules: [unref(Autoplay), unref(EffectCreative), unref(Controller), unref(Navigation)],
        "slides-per-view": 1,
        loop: true,
        "initial-slide": 1,
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
          var _a2, _b2;
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList((_a2 = unref(currentProduct)) == null ? void 0 : _a2.images, (slide) => {
              _push2(ssrRenderComponent(_component_SwiperSlide, {
                key: slide == null ? void 0 : slide.img,
                class: "swiper-prod-slide"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", slide.img)} alt="" data-v-cf2cdd33${_scopeId2}>`);
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
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList((_b2 = unref(currentProduct)) == null ? void 0 : _b2.images, (slide) => {
                return openBlock(), createBlock(_component_SwiperSlide, {
                  key: slide == null ? void 0 : slide.img,
                  class: "swiper-prod-slide"
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: slide.img,
                      alt: ""
                    }, null, 8, ["src"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="col-md-6 col-sm-12 single-product-details" data-v-cf2cdd33><ol class="breadcrumb" data-v-cf2cdd33><li data-v-cf2cdd33><a href="/" data-v-cf2cdd33>Home</a></li><li data-v-cf2cdd33><a href="/shop" data-v-cf2cdd33>\u7522\u54C1\u4ECB\u7D39</a></li></ol><h2 class="prod-name" title="\u7522\u54C1\u540D\u7A31" data-v-cf2cdd33>${ssrInterpolate((_c = unref(currentProduct)) == null ? void 0 : _c.name)}</h2><form id="productForm" action="javascript:;" data-v-cf2cdd33><ul class="product-price mt-0" data-v-cf2cdd33><li data-v-cf2cdd33><span data-v-cf2cdd33>\u5E02\u50F9</span><span class="m_icon" data-v-cf2cdd33>$</span>${ssrInterpolate(((_d = unref(currentProduct)) == null ? void 0 : _d.price) || 0)}</li><li data-v-cf2cdd33><span data-v-cf2cdd33>\u6703\u54E1</span><span class="m_icon" data-v-cf2cdd33>$</span>${ssrInterpolate(((_e = unref(currentProduct)) == null ? void 0 : _e.memberPrice) || 0)}</li><li class="vip_price" data-v-cf2cdd33><span data-v-cf2cdd33>VIP</span><span class="m_icon" data-v-cf2cdd33>$</span>${ssrInterpolate(((_f = unref(currentProduct)) == null ? void 0 : _f.vipPrice) || 0)}</li><li class="vip_price" data-v-cf2cdd33><span data-v-cf2cdd33>SVIP</span><span class="m_icon" data-v-cf2cdd33>$</span>${ssrInterpolate(((_g = unref(currentProduct)) == null ? void 0 : _g.svipPrice) || 0)}</li></ul><span class="howup_vip" data-v-cf2cdd33><i class="fa-regular fa-circle-up" data-v-cf2cdd33></i>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/profile" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u6211\u8981\u5347\u7B49`);
          } else {
            return [
              createTextVNode("\u6211\u8981\u5347\u7B49")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span><div class="nums" data-v-cf2cdd33>`);
      _push(ssrRenderComponent(_component_n_input_number, {
        style: [
          !unref(loading) ? null : { display: "none" },
          { "width": "150px" }
        ],
        value: unref(addingAmount),
        "onUpdate:value": ($event) => isRef(addingAmount) ? addingAmount.value = $event : null,
        min: 1
      }, null, _parent));
      _push(`<span data-v-cf2cdd33>\u5EAB\u5B58\uFF1A${ssrInterpolate(((_i = (_h = unref(currentProduct)) == null ? void 0 : _h.inventory) == null ? void 0 : _i.quantity) || 0)}</span></div><div class="mt-20 btns" data-v-cf2cdd33><button class="btn btn-main btn-bag" data-v-cf2cdd33><i class="fa-solid fa-cart-shopping" data-v-cf2cdd33></i>\u52A0\u5165\u8CFC\u7269\u8ECA </button><button type="submit" class="go_cart btn btn-main btn-check" data-v-cf2cdd33><i class="fa-solid fa-dollar-sign" data-v-cf2cdd33></i> \u7ACB\u5373\u7D50\u5E33 </button></div></form></div></div><div class="product_tab mt-20" data-v-cf2cdd33><ul class="nav nav-tabs" data-v-cf2cdd33><!--[-->`);
      ssrRenderList((_j = unref(currentProduct)) == null ? void 0 : _j.markdownInfos, (slot, index) => {
        _push(`<li class="${ssrRenderClass({ active: unref(currentTag) === index })}" data-v-cf2cdd33><a data-toggle="tab" href="javascript:;" aria-expanded="true" data-v-cf2cdd33>${ssrInterpolate(slot.title)}</a></li>`);
      });
      _push(`<!--]--></ul><div class="tab-content" data-v-cf2cdd33><div id="details" class="tab-pane fade active in" data-v-cf2cdd33><div class="html-container" data-v-cf2cdd33></div></div><div id="tab2" class="tab-pane fade" data-v-cf2cdd33> 2 </div><div id="tab3" class="tab-pane fade" data-v-cf2cdd33> 3 </div><div id="tab4" class="tab-pane fade" data-v-cf2cdd33> 4 </div></div></div>`);
      {
        _push(`<!---->`);
      }
      _push(`</div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const product = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cf2cdd33"]]);

export { product as default };
//# sourceMappingURL=product.a0853ca6.mjs.map
