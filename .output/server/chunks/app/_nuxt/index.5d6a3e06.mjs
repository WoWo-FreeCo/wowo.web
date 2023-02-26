import { _ as _sfc_main$1 } from './UserProfile.20177f26.mjs';
import { _ as _export_sfc, f as __nuxt_component_0$1 } from '../server.mjs';
import { withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './authStore.0cac3de7.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UserProfile = _sfc_main$1;
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(_attrs)}><section class="full_height mt185ptb30 pt0">`);
  _push(ssrRenderComponent(_component_UserProfile, null, null, _parent));
  _push(`<div class="row"><div class="col-sm-3 p-0 bg_left"><div id="member_menu" class="panel-group commonAccordion"><div class="panel panel-default"><div id="headingOne" class="panel-heading" role="tab"><h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#member_menu" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne"> \u6703\u54E1\u8CC7\u6599 </a></h4></div><div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne"><ul><li>`);
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
  _push(`</li><li class="active">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/order" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u6211\u7684\u6D88\u8CBB\u7D00\u9304 `);
      } else {
        return [
          createTextVNode(" \u6211\u7684\u6D88\u8CBB\u7D00\u9304 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
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
  _push(`</li></ul></div></div></div></div><div class="col-sm-9 pl20pr30"><ul class="list-inline dashboard-menu"><li><a href="order.html" class="active">\u4E00\u822C\u5546\u54C1</a></li><li><a href="border.html">\u7AF6\u62CD\u6D3B\u52D5</a></li><li><a href="gorder.html">\u5718\u8CFC\u6D3B\u52D5</a></li></ul><div class="select r0t0"><select><option selected> \u8A02\u55AE\u72C0\u614B </option><option value=""> \u5F85\u4ED8\u6B3E </option><option value=""> \u5DF2\u4ED8\u6B3E </option><option value=""> \u5DF2\u51FA\u8CA8 </option><option value=""> \u5DF2\u53D6\u6D88 </option></select></div><table class="member_table order_table"><thead><tr><th> \u8A02\u55AE\u7DE8\u865F </th><th> \u8A02\u55AE\u65E5\u671F </th><th> \u4ED8\u6B3E\u65B9\u5F0F </th><th> \u8A02\u55AE\u91D1\u984D </th><th> \u8A02\u55AE\u72C0\u614B </th><th></th></tr></thead><tbody><tr><td data-th="\u8A02\u55AE\u7DE8\u865F"> 22060629636237 </td><td data-th="\u8A02\u55AE\u65E5\u671F"> 2022/06/06 </td><td data-th="\u4ED8\u6B3E\u65B9\u5F0F"> \u4FE1\u7528\u5361+\u7D05\u5229\u9EDE\u6578 </td><td data-th="\u8A02\u55AE\u91D1\u984D"> $680 </td><td data-th="\u8A02\u55AE\u72C0\u614B"> \u5DF2\u4ED8\u6B3E </td><td><button type="button" class="btn btn-orderdetial" onclick="location.href=&#39;order_info.html&#39;"> \u67E5\u770B\u660E\u7D30 </button><button type="button" class="btn btn-orderdetial" data-toggle="modal" data-target="#cancel"> \u53D6\u6D88\u8A02\u55AE </button></td></tr><tr><td data-th="\u8A02\u55AE\u7DE8\u865F"> 22060629636237 </td><td data-th="\u8A02\u55AE\u65E5\u671F"> 2022/06/06 </td><td data-th="\u4ED8\u6B3E\u65B9\u5F0F"> \u4FE1\u7528\u5361 </td><td data-th="\u8A02\u55AE\u91D1\u984D"> $680 </td><td data-th="\u8A02\u55AE\u72C0\u614B"> \u5DF2\u51FA\u8CA8 </td><td><button type="button" class="btn btn-orderdetial" onclick="location.href=&#39;order_info.html&#39;"> \u67E5\u770B\u660E\u7D30 </button><button type="button" class="btn btn-orderdetial" data-toggle="modal" data-target="#back"> \u6211\u8981\u9000\u8CA8 </button></td></tr></tbody></table><div class="text-center"><ul class="pagination post-pagination"><li><a href="#!">\u4E0A\u4E00\u9801</a></li><li class="active"><a href="#!">1</a></li><li><a href="#!">2</a></li><li><a href="#!">3</a></li><li><a href="#!">4</a></li><li><a href="#!">5</a></li><li><a href="#!">\u4E0B\u4E00\u9801</a></li></ul></div></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/order/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.5d6a3e06.mjs.map
