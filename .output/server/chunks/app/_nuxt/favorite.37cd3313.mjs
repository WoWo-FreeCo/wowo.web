import { _ as _sfc_main$1, a as _sfc_main$2 } from './ProfileSidebar.ac4d0497.mjs';
import { u as useAuthStore } from './authStore.473121f5.mjs';
import { _ as _export_sfc, a as useRouter } from '../server.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './2009.5abd421b.mjs';
import './pageStatusStore.be2d5fb7.mjs';
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
      const _component_ProfileSidebar = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-1c77f78f><section class="full_height mt185ptb30 pt0" data-v-1c77f78f>`);
      _push(ssrRenderComponent(_component_UserProfile, null, null, _parent));
      _push(`<div class="row" data-v-1c77f78f>`);
      _push(ssrRenderComponent(_component_ProfileSidebar, null, null, _parent));
      _push(`<div class="col-sm-9 pl20pr30" data-v-1c77f78f><h3 class="h3_tl border_bottom" data-v-1c77f78f> \u6309\u8B9A\u597D\u7269 </h3><div class="total_love" data-v-1c77f78f> \u51711\u9805\u5546\u54C1 </div><div class="row favs-row" data-v-1c77f78f><div class="col-lg-4 col-md-6 col-sm-12" data-v-1c77f78f><div class="product_frame" data-v-1c77f78f><div class="hot_sale2" data-v-1c77f78f> \u71B1\u92B7<span data-v-1c77f78f>30</span>\u7D44 </div><div class="product_img" data-v-1c77f78f><a href="/product" target="_blank" data-v-1c77f78f><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-1c77f78f></a></div><h3 data-v-1c77f78f><a href="/product" target="_blank" data-v-1c77f78f>\u7522\u54C1\u540D\u7A31\u7522\u54C1\u540D\u7A31\u7522\u54C1\u540D\u7A31\u7522\u54C1\u540D\u7A31\u7522\u54C1\u540D\u7A31\u7522\u54C1\u540D\u7A311</a></h3><ul data-v-1c77f78f><li data-v-1c77f78f> $130 <span data-v-1c77f78f>\u5E02\u5834\u50F9</span></li><li data-v-1c77f78f> $130 <span data-v-1c77f78f>\u6703\u54E1\u50F9</span></li><li data-v-1c77f78f> $130 <span data-v-1c77f78f>VIP\u50F9</span></li><li data-v-1c77f78f> $130 <span data-v-1c77f78f>SVIP\u50F9</span></li><li data-v-1c77f78f><button data-v-1c77f78f><i class="fa-solid fa-cart-shopping" data-v-1c77f78f></i></button></li></ul></div></div></div><div class="text-center" data-v-1c77f78f><ul class="pagination post-pagination" data-v-1c77f78f><li data-v-1c77f78f><a href="#!" data-v-1c77f78f>\u4E0A\u4E00\u9801</a></li><li class="active" data-v-1c77f78f><a href="#!" data-v-1c77f78f>1</a></li><li data-v-1c77f78f><a href="#!" data-v-1c77f78f>2</a></li><li data-v-1c77f78f><a href="#!" data-v-1c77f78f>3</a></li><li data-v-1c77f78f><a href="#!" data-v-1c77f78f>4</a></li><li data-v-1c77f78f><a href="#!" data-v-1c77f78f>5</a></li><li data-v-1c77f78f><a href="#!" data-v-1c77f78f>\u4E0B\u4E00\u9801</a></li></ul></div><h3 class="h3_tl border_top pt-20" data-v-1c77f78f> \u5DF2\u8CB7\u904E\u5546\u54C1 </h3><div class="product_slide2" data-v-1c77f78f><div class="product_frame" data-v-1c77f78f><div class="hot_sale2" data-v-1c77f78f> \u71B1\u92B7<span data-v-1c77f78f>30</span>\u7D44 </div><div class="product_img" data-v-1c77f78f><a href="/product" target="_blank" data-v-1c77f78f><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-1c77f78f></a></div><h3 data-v-1c77f78f><a href="/product" target="_blank" data-v-1c77f78f>\u7522\u54C1\u540D\u7A31\u7522\u54C1\u540D\u7A31\u7522\u54C1\u540D\u7A31\u7522\u54C1\u540D\u7A31\u7522\u54C1\u540D\u7A31\u7522\u54C1\u540D\u7A311</a></h3><ul data-v-1c77f78f><li data-v-1c77f78f> $130 <span data-v-1c77f78f>\u5E02\u5834\u50F9</span></li><li data-v-1c77f78f> $130 <span data-v-1c77f78f>\u6703\u54E1\u50F9</span></li><li data-v-1c77f78f> $130 <span data-v-1c77f78f>VIP\u50F9</span></li><li data-v-1c77f78f> $130 <span data-v-1c77f78f>SVIP\u50F9</span></li><li data-v-1c77f78f><button data-v-1c77f78f><i class="fa-solid fa-cart-shopping" data-v-1c77f78f></i></button></li></ul></div></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/favorite.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const favorite = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1c77f78f"]]);

export { favorite as default };
//# sourceMappingURL=favorite.37cd3313.mjs.map
