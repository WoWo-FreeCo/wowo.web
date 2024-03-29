import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as _export_sfc, e as useRoute, u as useRouter, a as useRuntimeConfig, f as __nuxt_component_0$1 } from '../server.mjs';
import { u as useCartStore } from './cartStore.3ffb3293.mjs';
import { ref, resolveComponent, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createTextVNode, isRef, useSSRContext } from 'vue';
import { Autoplay, EffectCreative, Controller, Navigation } from 'swiper';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "product",
  __ssrInlineRender: true,
  setup(__props) {
    useCartStore();
    useRoute();
    useRouter();
    useRuntimeConfig();
    ref([]);
    const currentProduct = ref({});
    const loading = ref(true);
    const addingAmount = ref(1);
    const currentTag = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_n_input_number = resolveComponent("n-input-number");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-e6b621ec><section class="full_height mt185ptb30" data-v-e6b621ec><div class="container" data-v-e6b621ec><div class="row product_flex" data-v-e6b621ec><div class="col-md-6 col-sm-12 single-product-slider" data-v-e6b621ec><div class="product_frame" data-v-e6b621ec><span class="pagingInfo" data-v-e6b621ec></span><button class="add_like" data-v-e6b621ec><i class="far fa-heart" data-v-e6b621ec></i></button><div class="hot_sale" data-v-e6b621ec><span data-v-e6b621ec>${ssrInterpolate((_a = unref(currentProduct)) == null ? void 0 : _a.brief)}</span></div><div class="main_product" data-v-e6b621ec>`);
      _push(ssrRenderComponent(_component_Swiper, {
        class: "swiper-root",
        modules: [unref(Autoplay), unref(EffectCreative), unref(Controller), unref(Navigation)],
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
          var _a2, _b2;
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(((_a2 = unref(currentProduct)) == null ? void 0 : _a2.slideSet) || 5, (slide) => {
              _push2(ssrRenderComponent(_component_SwiperSlide, { key: slide }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", slide.img || "/products/p" + (unref(currentProduct).id - 10) + ".jpg")} alt="" data-v-e6b621ec${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: slide.img || "/products/p" + (unref(currentProduct).id - 10) + ".jpg",
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
              (openBlock(true), createBlock(Fragment, null, renderList(((_b2 = unref(currentProduct)) == null ? void 0 : _b2.slideSet) || 5, (slide) => {
                return openBlock(), createBlock(_component_SwiperSlide, { key: slide }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: slide.img || "/products/p" + (unref(currentProduct).id - 10) + ".jpg",
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
      _push(`</div></div></div><div class="col-md-6 col-sm-12 single-product-details" data-v-e6b621ec><ol class="breadcrumb" data-v-e6b621ec><li data-v-e6b621ec><a href="/" data-v-e6b621ec>Home</a></li><li data-v-e6b621ec><a href="/shop" data-v-e6b621ec>\u7522\u54C1\u4ECB\u7D39</a></li><li data-v-e6b621ec><a href="/shop" data-v-e6b621ec>\u7522\u54C1\u985E\u5225</a></li><li class="active" data-v-e6b621ec> \u7522\u54C1\u540D\u7A31 </li></ol><h2 class="prod-name" title="\u7522\u54C1\u540D\u7A31" data-v-e6b621ec>${ssrInterpolate((_b = unref(currentProduct)) == null ? void 0 : _b.name)}</h2><form id="productForm" action="javascript:;" data-v-e6b621ec><ul class="product-price mt-0" data-v-e6b621ec><li data-v-e6b621ec><span data-v-e6b621ec>\u5E02\u5834\u50F9</span><span class="m_icon" data-v-e6b621ec>$</span>${ssrInterpolate(((_c = unref(currentProduct)) == null ? void 0 : _c.price) || 0)}</li><li data-v-e6b621ec><span data-v-e6b621ec>\u6703\u54E1\u50F9</span><span class="m_icon" data-v-e6b621ec>$</span>${ssrInterpolate(((_d = unref(currentProduct)) == null ? void 0 : _d.memberPrice) || 0)}</li><li class="vip_price" data-v-e6b621ec><span data-v-e6b621ec>VIP\u50F9</span><span class="m_icon" data-v-e6b621ec>$</span>${ssrInterpolate(((_e = unref(currentProduct)) == null ? void 0 : _e.vipPrice) || 0)}</li><li class="vip_price" data-v-e6b621ec><span data-v-e6b621ec>SVIP\u50F9</span><span class="m_icon" data-v-e6b621ec>$</span>${ssrInterpolate(((_f = unref(currentProduct)) == null ? void 0 : _f.svipPrice) || 0)}</li></ul><span class="howup_vip" data-v-e6b621ec><i class="fa-regular fa-circle-up" data-v-e6b621ec></i>`);
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
      _push(`</span>`);
      _push(ssrRenderComponent(_component_n_input_number, {
        style: [
          !unref(loading) ? null : { display: "none" },
          { "width": "150px", "margin-top": "24px" }
        ],
        value: unref(addingAmount),
        "onUpdate:value": ($event) => isRef(addingAmount) ? addingAmount.value = $event : null,
        min: 1
      }, null, _parent));
      _push(`<div class="mt-20" data-v-e6b621ec><button class="btn btn-main btn-bag" data-v-e6b621ec><i class="fa-solid fa-cart-shopping" data-v-e6b621ec></i>\u52A0\u5165\u8CFC\u7269\u8ECA </button><button type="submit" class="go_cart btn btn-main btn-check" data-v-e6b621ec><i class="fa-solid fa-dollar-sign" data-v-e6b621ec></i> \u7ACB\u5373\u7D50\u5E33 </button></div></form></div></div><div class="product_tab mt-20" data-v-e6b621ec><ul class="nav nav-tabs" data-v-e6b621ec><li class="${ssrRenderClass({ active: unref(currentTag) === 0 })}" data-v-e6b621ec><a data-toggle="tab" href="javascript:;" aria-expanded="true" data-v-e6b621ec>\u5546\u54C1\u4ECB\u7D39</a></li><li class="${ssrRenderClass({ active: unref(currentTag) === 1 })}" data-v-e6b621ec><a href="javascript:;" data-v-e6b621ec>\u9801\u7C64 2</a></li><li class="${ssrRenderClass({ active: unref(currentTag) === 2 })}" data-v-e6b621ec><a href="javascript:;" data-v-e6b621ec>\u9801\u7C64 3</a></li><li class="${ssrRenderClass({ active: unref(currentTag) === 3 })}" data-v-e6b621ec><a href="javascript:;" data-v-e6b621ec>\u9801\u7C64 4</a></li></ul><div class="tab-content" data-v-e6b621ec><div id="details" class="tab-pane fade active in" data-v-e6b621ec> editor </div><div id="tab2" class="tab-pane fade" data-v-e6b621ec> 2 </div><div id="tab3" class="tab-pane fade" data-v-e6b621ec> 3 </div><div id="tab4" class="tab-pane fade" data-v-e6b621ec> 4 </div></div></div>`);
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
const product = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e6b621ec"]]);

export { product as default };
//# sourceMappingURL=product.77c297a1.mjs.map
