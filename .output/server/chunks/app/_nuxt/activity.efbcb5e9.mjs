import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_0 } from './2009.5abd421b.mjs';
import { _ as _export_sfc } from '../server.mjs';
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
  __name: "activity",
  __ssrInlineRender: true,
  setup(__props) {
    const activity2 = ref({
      ongoing: {
        isEnabled: true
      },
      upcoming: {
        isEnabled: false
      },
      ended: {
        isEnabled: false
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "full_height mt185ptb30" }, _attrs))} data-v-48eba8a7><div class="container tabCommon" data-v-48eba8a7>`);
      if (unref(activity2).ongoing.isEnabled) {
        _push(`<div data-v-48eba8a7><h2 class="text-center" data-v-48eba8a7> \u76EE\u524D\u7AD9\u5167\u6C92\u6709\u4EFB\u4F55\u9032\u884C\u4E2D\u6D3B\u52D5\uFF01 </h2>`);
        {
          _push(`<!---->`);
        }
        {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(activity2).upcoming.isEnabled) {
        _push(`<div data-v-48eba8a7><h2 class="bid_tl border_top" data-v-48eba8a7> \u5373\u5C07\u958B\u59CB\u7684\u6D3B\u52D5 </h2><ul class="nav nav-tabs bbottom_none" data-v-48eba8a7><li class="active" data-v-48eba8a7><a href="#coming_bid" data-toggle="tab" aria-expanded="true" data-v-48eba8a7>WO\u7AF6\u62CD</a></li><li data-v-48eba8a7><a href="#coming_group_buying" data-toggle="tab" aria-expanded="false" data-v-48eba8a7>WO\u5718\u8CFC</a></li></ul><div class="tab-content" data-v-48eba8a7><div id="coming_bid" class="tab-pane fade active in" data-v-48eba8a7><div class="product_slide" data-v-48eba8a7><div class="product_frame bid_info" data-v-48eba8a7><div class="product_img" data-v-48eba8a7><button class="add_bell" data-v-48eba8a7><i class="fa-regular fa-bell" data-v-48eba8a7></i></button><a href="bid.html#bid_content" data-v-48eba8a7><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-48eba8a7></a></div><div class="row" data-v-48eba8a7><h3 data-v-48eba8a7><a href="bid.html#bid_content" data-v-48eba8a7> \u9CF3\u68A8\u916510\u500B\u88DD - \u4E2D\u79CB\u9650\u5B9A\u5305\u88DD </a></h3><div class="font14" data-v-48eba8a7> \u7AF6\u62CD\u65E5\u671F\uFF1A2022/08/01~2022/09/01 </div><div class="col-xs-6 text-left" data-v-48eba8a7><span class="bid_pricetxt" data-v-48eba8a7>\u8D77\u6A19\u50F9</span><span class="bid_price" data-v-48eba8a7><i class="fas fa-parking" data-v-48eba8a7></i>1 </span></div><div class="col-xs-6 text-right" data-v-48eba8a7> \u5DF2\u51FA\u50F9<span class="process_txt" data-v-48eba8a7>0</span>\u6B21 <a href="bid.html#bid_content" class="btn btn-main btn-check" data-v-48eba8a7>\u656C\u8ACB\u671F\u5F85</a></div></div></div></div></div><div id="coming_group_buying" class="tab-pane fade" data-v-48eba8a7><div class="product_slide" data-v-48eba8a7><div class="product_frame bid_info" data-v-48eba8a7><div class="product_img" data-v-48eba8a7><button class="add_bell" data-v-48eba8a7><i class="fa-regular fa-bell" data-v-48eba8a7></i></button><a href="group_buying.html#group_content" data-v-48eba8a7><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-48eba8a7></a></div><div class="row" data-v-48eba8a7><h3 data-v-48eba8a7><a href="group_buying.html#group_content" data-v-48eba8a7> \u9CF3\u68A8\u916510\u500B\u88DD - \u4E2D\u79CB\u9650\u5B9A\u5305\u88DD </a></h3><div class="font14" data-v-48eba8a7> \u6D3B\u52D5\u5373\u5C07\u958B\u59CB\uFF0C\u656C\u8ACB\u671F\u5F85\u3002 </div><div class="col-xs-6 text-left" data-v-48eba8a7><span class="bid_pricetxt" data-v-48eba8a7>\u5718\u8CFC\u50F9\u683C</span><span class="bid_price" data-v-48eba8a7><i class="fas fa-dollar" data-v-48eba8a7></i>***</span></div><div class="col-xs-6 text-right" data-v-48eba8a7> \u5718\u8CFC\u9032\u5EA6<span class="process_txt" data-v-48eba8a7>0</span>%<div class="process_bar" data-v-48eba8a7><div class="process_bar_bg" style="${ssrRenderStyle({ "width": "0%" })}" data-v-48eba8a7></div></div><a href="group_buying.html#group_content" class="btn btn-main btn-check" data-v-48eba8a7>\u656C\u8ACB\u671F\u5F85</a></div></div></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(activity2).ended.isEnabled) {
        _push(`<div data-v-48eba8a7><h2 class="bid_tl border_top" data-v-48eba8a7> \u5DF2\u7D50\u675F\u7684\u6D3B\u52D5 </h2><ul class="nav nav-tabs bbottom_none" data-v-48eba8a7><li class="active" data-v-48eba8a7><a href="#finished_bid" data-toggle="tab" aria-expanded="true" data-v-48eba8a7>WO\u7AF6\u62CD</a></li><li data-v-48eba8a7><a href="#finished_group_buying" data-toggle="tab" aria-expanded="false" data-v-48eba8a7>WO\u5718\u8CFC</a></li></ul><div class="tab-content" data-v-48eba8a7><div id="finished_bid" class="tab-pane fade active in" data-v-48eba8a7><div class="product_slide" data-v-48eba8a7><div class="product_frame bid_info" data-v-48eba8a7><div class="product_img" data-v-48eba8a7><button class="add_bell" data-v-48eba8a7><i class="fa-regular fa-bell" data-v-48eba8a7></i></button><a href="bid.html#bid_content" data-v-48eba8a7><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-48eba8a7></a></div><div class="row" data-v-48eba8a7><h3 data-v-48eba8a7><a href="bid.html#bid_content" data-v-48eba8a7> \u9CF3\u68A8\u916510\u500B\u88DD - \u4E2D\u79CB\u9650\u5B9A\u5305\u88DD </a></h3><div class="font14" data-v-48eba8a7> \u7AF6\u62CD\u65E5\u671F\uFF1A2022/08/01~2022/09/01 </div><div class="col-xs-6 text-left" data-v-48eba8a7><span class="bid_pricetxt" data-v-48eba8a7>\u5F97\u6A19\u50F9</span><span class="bid_price" data-v-48eba8a7><i class="fas fa-parking" data-v-48eba8a7></i>990 </span></div><div class="col-xs-6 text-right" data-v-48eba8a7> \u5DF2\u51FA\u50F9<span class="process_txt" data-v-48eba8a7>10</span>\u6B21 <a href="bid.html#bid_content" class="btn btn-main btn-check" data-v-48eba8a7>\u5DF2\u7D50\u675F</a></div></div></div></div></div><div id="finished_group_buying" class="tab-pane fade" data-v-48eba8a7><div class="product_slide" data-v-48eba8a7><div class="product_frame bid_info" data-v-48eba8a7><div class="product_img" data-v-48eba8a7><button class="add_bell" data-v-48eba8a7><i class="fa-regular fa-bell" data-v-48eba8a7></i></button><a href="group_buying.html#group_content" data-v-48eba8a7><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-48eba8a7></a></div><div class="row" data-v-48eba8a7><h3 data-v-48eba8a7><a href="group_buying.html#group_content" data-v-48eba8a7> \u9CF3\u68A8\u916510\u500B\u88DD - \u4E2D\u79CB\u9650\u5B9A\u5305\u88DD </a></h3><div class="font14" data-v-48eba8a7> \u6D3B\u52D5\u5DF2\u622A\u6B62\u3002 </div><div class="col-xs-6 text-left" data-v-48eba8a7><span class="bid_pricetxt" data-v-48eba8a7>\u5718\u8CFC\u50F9\u683C</span><span class="bid_price" data-v-48eba8a7><i class="fas fa-dollar" data-v-48eba8a7></i>123 </span></div><div class="col-xs-6 text-right" data-v-48eba8a7> \u5718\u8CFC\u9032\u5EA6<span class="process_txt" data-v-48eba8a7>90</span>%<div class="process_bar" data-v-48eba8a7><div class="process_bar_bg" style="${ssrRenderStyle({ "width": "90%" })}" data-v-48eba8a7></div></div><a href="group_buying.html#group_content" class="btn btn-main btn-check" data-v-48eba8a7>\u5DF2\u7D50\u675F</a></div></div></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/activity.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const activity = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-48eba8a7"]]);

export { activity as default };
//# sourceMappingURL=activity.efbcb5e9.mjs.map
