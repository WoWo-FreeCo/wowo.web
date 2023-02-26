import { _ as _sfc_main$1 } from './UserProfile.20177f26.mjs';
import { _ as _export_sfc, u as useRouter, f as __nuxt_component_0$1 } from '../server.mjs';
import { u as useAuthStore } from './authStore.0cac3de7.mjs';
import { withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './2009.5abd421b.mjs';
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
    useAuthStore();
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UserProfile = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-1bf43183><section class="full_height mt185ptb30 pt0" data-v-1bf43183>`);
      _push(ssrRenderComponent(_component_UserProfile, null, null, _parent));
      _push(`<div class="row" data-v-1bf43183><div class="col-sm-3 p-0 bg_left" data-v-1bf43183><div id="member_menu" class="panel-group commonAccordion" data-v-1bf43183><div class="panel panel-default" data-v-1bf43183><div id="headingOne" class="panel-heading" role="tab" data-v-1bf43183><h4 class="panel-title" data-v-1bf43183><a role="button" data-toggle="collapse" data-parent="#member_menu" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne" data-v-1bf43183> \u6703\u54E1\u8CC7\u6599 </a></h4></div><div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne" data-v-1bf43183><ul data-v-1bf43183><li data-v-1bf43183>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/profile" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u57FA\u672C\u8CC7\u6599\u7BA1\u7406 `);
          } else {
            return [
              createTextVNode(" \u57FA\u672C\u8CC7\u6599\u7BA1\u7406 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="active" data-v-1bf43183>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/favorite" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u6211\u7684\u6700\u611B `);
          } else {
            return [
              createTextVNode(" \u6211\u7684\u6700\u611B ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div></div></div><div class="col-sm-9 pl20pr30" data-v-1bf43183><h3 class="h3_tl border_bottom" data-v-1bf43183> \u6309\u8B9A\u597D\u7269 </h3><div class="total_love" data-v-1bf43183> \u51711\u9805\u5546\u54C1 </div><div class="row favs-row" data-v-1bf43183><div class="col-lg-4 col-md-6 col-sm-12" data-v-1bf43183><div class="product_frame" data-v-1bf43183><div class="hot_sale2" data-v-1bf43183> \u71B1\u92B7<span data-v-1bf43183>30</span>\u7D44 </div><div class="product_img" data-v-1bf43183><a href="/product" target="_blank" data-v-1bf43183><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-1bf43183></a></div><h3 data-v-1bf43183><a href="/product" target="_blank" data-v-1bf43183>\u7522\u54C1\u540D\u7A31\u7522\u54C1\u540D\u7A31\u7522\u54C1\u540D\u7A31\u7522\u54C1\u540D\u7A31\u7522\u54C1\u540D\u7A31\u7522\u54C1\u540D\u7A311</a></h3><ul data-v-1bf43183><li data-v-1bf43183> $130 <span data-v-1bf43183>\u5E02\u5834\u50F9</span></li><li data-v-1bf43183> $130 <span data-v-1bf43183>\u6703\u54E1\u50F9</span></li><li data-v-1bf43183> $130 <span data-v-1bf43183>VIP\u50F9</span></li><li data-v-1bf43183> $130 <span data-v-1bf43183>SVIP\u50F9</span></li><li data-v-1bf43183><button data-v-1bf43183><i class="fa-solid fa-cart-shopping" data-v-1bf43183></i></button></li></ul></div></div></div><div class="text-center" data-v-1bf43183><ul class="pagination post-pagination" data-v-1bf43183><li data-v-1bf43183><a href="#!" data-v-1bf43183>\u4E0A\u4E00\u9801</a></li><li class="active" data-v-1bf43183><a href="#!" data-v-1bf43183>1</a></li><li data-v-1bf43183><a href="#!" data-v-1bf43183>2</a></li><li data-v-1bf43183><a href="#!" data-v-1bf43183>3</a></li><li data-v-1bf43183><a href="#!" data-v-1bf43183>4</a></li><li data-v-1bf43183><a href="#!" data-v-1bf43183>5</a></li><li data-v-1bf43183><a href="#!" data-v-1bf43183>\u4E0B\u4E00\u9801</a></li></ul></div><h3 class="h3_tl border_top pt-20" data-v-1bf43183> \u5DF2\u8CB7\u904E\u5546\u54C1 </h3><div class="product_slide2" data-v-1bf43183><div class="product_frame" data-v-1bf43183><div class="hot_sale2" data-v-1bf43183> \u71B1\u92B7<span data-v-1bf43183>30</span>\u7D44 </div><div class="product_img" data-v-1bf43183><a href="/product" target="_blank" data-v-1bf43183><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-1bf43183></a></div><h3 data-v-1bf43183><a href="/product" target="_blank" data-v-1bf43183>\u7522\u54C1\u540D\u7A31\u7522\u54C1\u540D\u7A31\u7522\u54C1\u540D\u7A31\u7522\u54C1\u540D\u7A31\u7522\u54C1\u540D\u7A31\u7522\u54C1\u540D\u7A311</a></h3><ul data-v-1bf43183><li data-v-1bf43183> $130 <span data-v-1bf43183>\u5E02\u5834\u50F9</span></li><li data-v-1bf43183> $130 <span data-v-1bf43183>\u6703\u54E1\u50F9</span></li><li data-v-1bf43183> $130 <span data-v-1bf43183>VIP\u50F9</span></li><li data-v-1bf43183> $130 <span data-v-1bf43183>SVIP\u50F9</span></li><li data-v-1bf43183><button data-v-1bf43183><i class="fa-solid fa-cart-shopping" data-v-1bf43183></i></button></li></ul></div></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/favorite.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const favorite = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1bf43183"]]);

export { favorite as default };
//# sourceMappingURL=favorite.57a0f19c.mjs.map
