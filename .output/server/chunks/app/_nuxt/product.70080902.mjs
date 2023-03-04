import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as _export_sfc, e as useRoute, a as useRouter, u as useRuntimeConfig, f as __nuxt_component_0$1 } from '../server.mjs';
import { u as useCartStore } from './cartStore.e615b64d.mjs';
import { ref, resolveComponent, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createTextVNode, isRef, useSSRContext } from 'vue';
import { Autoplay, EffectCreative, Controller, Navigation } from 'swiper';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
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
    useCartStore();
    useRoute();
    useRouter();
    useRuntimeConfig();
    ref([]);
    const currentProduct = ref({});
    const loading = ref(true);
    const addingAmount = ref(1);
    const currentTag = ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g;
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_n_input_number = resolveComponent("n-input-number");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-5c341f53><section class="full_height mt185ptb30" data-v-5c341f53><div class="container" data-v-5c341f53><div class="row product_flex" data-v-5c341f53><div class="col-md-6 col-sm-12 single-product-slider" data-v-5c341f53><div class="product_frame" data-v-5c341f53><span class="pagingInfo" data-v-5c341f53></span><button class="add_like" data-v-5c341f53><i class="far fa-heart" data-v-5c341f53></i></button><div class="hot_sale" data-v-5c341f53><span data-v-5c341f53>${ssrInterpolate((_a = unref(currentProduct)) == null ? void 0 : _a.brief)}</span></div><div class="main_product" data-v-5c341f53>`);
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
            ssrRenderList(((_a2 = unref(currentProduct)) == null ? void 0 : _a2.slideSet) || 5, (slide, index) => {
              _push2(ssrRenderComponent(_component_SwiperSlide, { key: slide }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", slide.img || `https://picsum.photos/500/500?${index}`)} alt="" data-v-5c341f53${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: slide.img || `https://picsum.photos/500/500?${index}`,
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
              (openBlock(true), createBlock(Fragment, null, renderList(((_b2 = unref(currentProduct)) == null ? void 0 : _b2.slideSet) || 5, (slide, index) => {
                return openBlock(), createBlock(_component_SwiperSlide, { key: slide }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: slide.img || `https://picsum.photos/500/500?${index}`,
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
      _push(`</div></div></div><div class="col-md-6 col-sm-12 single-product-details" data-v-5c341f53><ol class="breadcrumb" data-v-5c341f53><li data-v-5c341f53><a href="/" data-v-5c341f53>Home</a></li><li data-v-5c341f53><a href="/shop" data-v-5c341f53>\u7522\u54C1\u4ECB\u7D39</a></li></ol><h2 class="prod-name" title="\u7522\u54C1\u540D\u7A31" data-v-5c341f53>${ssrInterpolate((_b = unref(currentProduct)) == null ? void 0 : _b.name)}</h2><form id="productForm" action="javascript:;" data-v-5c341f53><ul class="product-price mt-0" data-v-5c341f53><li data-v-5c341f53><span data-v-5c341f53>\u5E02\u5834\u50F9</span><span class="m_icon" data-v-5c341f53>$</span>${ssrInterpolate(((_c = unref(currentProduct)) == null ? void 0 : _c.price) || 0)}</li><li data-v-5c341f53><span data-v-5c341f53>\u6703\u54E1\u50F9</span><span class="m_icon" data-v-5c341f53>$</span>${ssrInterpolate(((_d = unref(currentProduct)) == null ? void 0 : _d.memberPrice) || 0)}</li><li class="vip_price" data-v-5c341f53><span data-v-5c341f53>VIP\u50F9</span><span class="m_icon" data-v-5c341f53>$</span>${ssrInterpolate(((_e = unref(currentProduct)) == null ? void 0 : _e.vipPrice) || 0)}</li><li class="vip_price" data-v-5c341f53><span data-v-5c341f53>SVIP\u50F9</span><span class="m_icon" data-v-5c341f53>$</span>${ssrInterpolate(((_f = unref(currentProduct)) == null ? void 0 : _f.svipPrice) || 0)}</li></ul><span class="howup_vip" data-v-5c341f53><i class="fa-regular fa-circle-up" data-v-5c341f53></i>`);
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
      _push(`<div class="mt-20" data-v-5c341f53><button class="btn btn-main btn-bag" data-v-5c341f53><i class="fa-solid fa-cart-shopping" data-v-5c341f53></i>\u52A0\u5165\u8CFC\u7269\u8ECA </button><button type="submit" class="go_cart btn btn-main btn-check" data-v-5c341f53><i class="fa-solid fa-dollar-sign" data-v-5c341f53></i> \u7ACB\u5373\u7D50\u5E33 </button></div></form></div></div><div class="product_tab mt-20" data-v-5c341f53><ul class="nav nav-tabs" data-v-5c341f53><!--[-->`);
      ssrRenderList((_g = unref(currentProduct)) == null ? void 0 : _g.markdownInfos, (slot) => {
        _push(`<li class="${ssrRenderClass({ active: unref(currentTag) === slot.index })}" data-v-5c341f53><a data-toggle="tab" href="javascript:;" aria-expanded="true" data-v-5c341f53>${ssrInterpolate(slot.title)}</a></li>`);
      });
      _push(`<!--]--></ul><div class="tab-content" data-v-5c341f53><div id="details" class="tab-pane fade active in" data-v-5c341f53><div class="html-container" data-v-5c341f53></div></div><div id="tab2" class="tab-pane fade" data-v-5c341f53> 2 </div><div id="tab3" class="tab-pane fade" data-v-5c341f53> 3 </div><div id="tab4" class="tab-pane fade" data-v-5c341f53> 4 </div></div></div>`);
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
const product = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5c341f53"]]);

export { product as default };
//# sourceMappingURL=product.70080902.mjs.map
