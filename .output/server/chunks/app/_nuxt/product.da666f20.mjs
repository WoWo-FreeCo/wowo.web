import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as _export_sfc, h as useCartStore, a as useAuthStore, g as useRoute, b as useRouter, u as useRuntimeConfig, f as __nuxt_component_0$1 } from '../server.mjs';
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
    const authStore = useAuthStore();
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
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_n_input_number = resolveComponent("n-input-number");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-d8404eb0><section class="full_height mt185ptb30" data-v-d8404eb0><div class="container" data-v-d8404eb0><div class="row product_flex" data-v-d8404eb0><div class="col-md-6 col-sm-12 single-product-slider" data-v-d8404eb0><div class="product_frame" data-v-d8404eb0><button class="add_like" data-v-d8404eb0><i class="${ssrRenderClass([{
        "fa-solid": unref(isFavorite),
        "fa-heart": unref(isFavorite)
      }, "far fa-heart"])}" data-v-d8404eb0></i></button><div style="${ssrRenderStyle(((_a = unref(currentProduct)) == null ? void 0 : _a.brief) ? null : { display: "none" })}" class="hot_sale" data-v-d8404eb0><span data-v-d8404eb0>${ssrInterpolate((_b = unref(currentProduct)) == null ? void 0 : _b.brief)}</span></div><div class="main_product" data-v-d8404eb0>`);
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
                    _push3(`<img${ssrRenderAttr("src", slide.img)} alt="" data-v-d8404eb0${_scopeId2}>`);
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
      _push(`</div></div></div><div class="col-md-6 col-sm-12 single-product-details" data-v-d8404eb0><ol class="breadcrumb" data-v-d8404eb0><li data-v-d8404eb0><a href="/" data-v-d8404eb0>Home</a></li><li data-v-d8404eb0><a href="/shop" data-v-d8404eb0>\u7522\u54C1\u4ECB\u7D39</a></li></ol><h2 class="prod-name" title="\u7522\u54C1\u540D\u7A31" data-v-d8404eb0>${ssrInterpolate((_c = unref(currentProduct)) == null ? void 0 : _c.name)}</h2><form id="productForm" action="javascript:;" data-v-d8404eb0><ul class="product-price mt-0" data-v-d8404eb0><li class="${ssrRenderClass({
        "vip_price": !((_d = unref(authStore).user) == null ? void 0 : _d.memberLevel)
      })}" data-v-d8404eb0><span class="price-title" data-v-d8404eb0>\u5E02\u50F9</span><span class="m_icon" data-v-d8404eb0>$</span>${ssrInterpolate(((_e = unref(currentProduct)) == null ? void 0 : _e.price) || 0)}</li><li class="${ssrRenderClass({
        "vip_price": ((_f = unref(authStore).user) == null ? void 0 : _f.memberLevel) === "NORMAL"
      })}" data-v-d8404eb0><span class="price-title" data-v-d8404eb0>\u6703\u54E1</span><span class="m_icon" data-v-d8404eb0>$</span>${ssrInterpolate(((_g = unref(currentProduct)) == null ? void 0 : _g.memberPrice) || 0)}</li><li class="${ssrRenderClass({
        "vip_price": ((_h = unref(authStore).user) == null ? void 0 : _h.memberLevel) === "VIP"
      })}" data-v-d8404eb0><span class="price-title" data-v-d8404eb0>VIP</span><span class="m_icon" data-v-d8404eb0>$</span>${ssrInterpolate(((_i = unref(currentProduct)) == null ? void 0 : _i.vipPrice) || 0)}</li><li class="${ssrRenderClass({
        "vip_price": ((_j = unref(authStore).user) == null ? void 0 : _j.memberLevel) === "SVIP"
      })}" data-v-d8404eb0><span class="price-title" data-v-d8404eb0>SVIP</span><span class="m_icon" data-v-d8404eb0>$</span>${ssrInterpolate(((_k = unref(currentProduct)) == null ? void 0 : _k.svipPrice) || 0)}</li></ul><span class="howup_vip" data-v-d8404eb0><i class="fa-regular fa-circle-up" data-v-d8404eb0></i>`);
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
      _push(`</span><div class="nums" data-v-d8404eb0>`);
      _push(ssrRenderComponent(_component_n_input_number, {
        style: [
          !unref(loading) ? null : { display: "none" },
          { "width": "150px" }
        ],
        value: unref(addingAmount),
        "onUpdate:value": ($event) => isRef(addingAmount) ? addingAmount.value = $event : null,
        min: 1
      }, null, _parent));
      _push(`<span data-v-d8404eb0>\u5EAB\u5B58\uFF1A${ssrInterpolate(((_m = (_l = unref(currentProduct)) == null ? void 0 : _l.inventory) == null ? void 0 : _m.quantity) || 0)}</span></div><div class="mt-20 btns" data-v-d8404eb0><button class="btn btn-main btn-bag" data-v-d8404eb0><i class="fa-solid fa-cart-shopping" data-v-d8404eb0></i>\u52A0\u5165\u8CFC\u7269\u8ECA </button><button type="submit" class="go_cart btn btn-main btn-check" data-v-d8404eb0><i class="fa-solid fa-dollar-sign" data-v-d8404eb0></i> \u7ACB\u5373\u7D50\u5E33 </button></div></form></div></div><div class="product_tab mt-20" data-v-d8404eb0><ul class="nav nav-tabs" data-v-d8404eb0><!--[-->`);
      ssrRenderList((_n = unref(currentProduct)) == null ? void 0 : _n.markdownInfos, (slot, index) => {
        _push(`<li class="${ssrRenderClass({ active: unref(currentTag) === index })}" data-v-d8404eb0><a data-toggle="tab" href="javascript:;" aria-expanded="true" data-v-d8404eb0>${ssrInterpolate(slot.title)}</a></li>`);
      });
      _push(`<!--]--></ul><div class="tab-content" data-v-d8404eb0><div id="details" class="tab-pane fade active in" data-v-d8404eb0><div class="html-container" data-v-d8404eb0></div></div><div id="tab2" class="tab-pane fade" data-v-d8404eb0> 2 </div><div id="tab3" class="tab-pane fade" data-v-d8404eb0> 3 </div><div id="tab4" class="tab-pane fade" data-v-d8404eb0> 4 </div></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const product = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d8404eb0"]]);

export { product as default };
//# sourceMappingURL=product.da666f20.mjs.map
