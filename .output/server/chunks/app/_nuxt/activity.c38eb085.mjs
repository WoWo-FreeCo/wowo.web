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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "full_height mt185ptb30" }, _attrs))} data-v-7133fe4b><div class="container tabCommon" data-v-7133fe4b>`);
      if (unref(activity2).ongoing.isEnabled) {
        _push(`<div data-v-7133fe4b><h2 class="text-center" data-v-7133fe4b> \u6D3B\u52D5\u5373\u5C07\u958B\u59CB\uFF0C\u656C\u8ACB\u671F\u5F85 </h2>`);
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
        _push(`<div data-v-7133fe4b><h2 class="bid_tl border_top" data-v-7133fe4b> \u5373\u5C07\u958B\u59CB\u7684\u6D3B\u52D5 </h2><ul class="nav nav-tabs bbottom_none" data-v-7133fe4b><li class="active" data-v-7133fe4b><a href="#coming_bid" data-toggle="tab" aria-expanded="true" data-v-7133fe4b>WO\u7AF6\u62CD</a></li><li data-v-7133fe4b><a href="#coming_group_buying" data-toggle="tab" aria-expanded="false" data-v-7133fe4b>WO\u5718\u8CFC</a></li></ul><div class="tab-content" data-v-7133fe4b><div id="coming_bid" class="tab-pane fade active in" data-v-7133fe4b><div class="product_slide" data-v-7133fe4b><div class="product_frame bid_info" data-v-7133fe4b><div class="product_img" data-v-7133fe4b><button class="add_bell" data-v-7133fe4b><i class="fa-regular fa-bell" data-v-7133fe4b></i></button><a href="bid.html#bid_content" data-v-7133fe4b><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-7133fe4b></a></div><div class="row" data-v-7133fe4b><h3 data-v-7133fe4b><a href="bid.html#bid_content" data-v-7133fe4b> \u9CF3\u68A8\u916510\u500B\u88DD - \u4E2D\u79CB\u9650\u5B9A\u5305\u88DD </a></h3><div class="font14" data-v-7133fe4b> \u7AF6\u62CD\u65E5\u671F\uFF1A2022/08/01~2022/09/01 </div><div class="col-xs-6 text-left" data-v-7133fe4b><span class="bid_pricetxt" data-v-7133fe4b>\u8D77\u6A19\u50F9</span><span class="bid_price" data-v-7133fe4b><i class="fas fa-parking" data-v-7133fe4b></i>1 </span></div><div class="col-xs-6 text-right" data-v-7133fe4b> \u5DF2\u51FA\u50F9<span class="process_txt" data-v-7133fe4b>0</span>\u6B21 <a href="bid.html#bid_content" class="btn btn-main btn-check" data-v-7133fe4b>\u656C\u8ACB\u671F\u5F85</a></div></div></div></div></div><div id="coming_group_buying" class="tab-pane fade" data-v-7133fe4b><div class="product_slide" data-v-7133fe4b><div class="product_frame bid_info" data-v-7133fe4b><div class="product_img" data-v-7133fe4b><button class="add_bell" data-v-7133fe4b><i class="fa-regular fa-bell" data-v-7133fe4b></i></button><a href="group_buying.html#group_content" data-v-7133fe4b><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-7133fe4b></a></div><div class="row" data-v-7133fe4b><h3 data-v-7133fe4b><a href="group_buying.html#group_content" data-v-7133fe4b> \u9CF3\u68A8\u916510\u500B\u88DD - \u4E2D\u79CB\u9650\u5B9A\u5305\u88DD </a></h3><div class="font14" data-v-7133fe4b> \u6D3B\u52D5\u5373\u5C07\u958B\u59CB\uFF0C\u656C\u8ACB\u671F\u5F85\u3002 </div><div class="col-xs-6 text-left" data-v-7133fe4b><span class="bid_pricetxt" data-v-7133fe4b>\u5718\u8CFC\u50F9\u683C</span><span class="bid_price" data-v-7133fe4b><i class="fas fa-dollar" data-v-7133fe4b></i>***</span></div><div class="col-xs-6 text-right" data-v-7133fe4b> \u5718\u8CFC\u9032\u5EA6<span class="process_txt" data-v-7133fe4b>0</span>%<div class="process_bar" data-v-7133fe4b><div class="process_bar_bg" style="${ssrRenderStyle({ "width": "0%" })}" data-v-7133fe4b></div></div><a href="group_buying.html#group_content" class="btn btn-main btn-check" data-v-7133fe4b>\u656C\u8ACB\u671F\u5F85</a></div></div></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(activity2).ended.isEnabled) {
        _push(`<div data-v-7133fe4b><h2 class="bid_tl border_top" data-v-7133fe4b> \u5DF2\u7D50\u675F\u7684\u6D3B\u52D5 </h2><ul class="nav nav-tabs bbottom_none" data-v-7133fe4b><li class="active" data-v-7133fe4b><a href="#finished_bid" data-toggle="tab" aria-expanded="true" data-v-7133fe4b>WO\u7AF6\u62CD</a></li><li data-v-7133fe4b><a href="#finished_group_buying" data-toggle="tab" aria-expanded="false" data-v-7133fe4b>WO\u5718\u8CFC</a></li></ul><div class="tab-content" data-v-7133fe4b><div id="finished_bid" class="tab-pane fade active in" data-v-7133fe4b><div class="product_slide" data-v-7133fe4b><div class="product_frame bid_info" data-v-7133fe4b><div class="product_img" data-v-7133fe4b><button class="add_bell" data-v-7133fe4b><i class="fa-regular fa-bell" data-v-7133fe4b></i></button><a href="bid.html#bid_content" data-v-7133fe4b><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-7133fe4b></a></div><div class="row" data-v-7133fe4b><h3 data-v-7133fe4b><a href="bid.html#bid_content" data-v-7133fe4b> \u9CF3\u68A8\u916510\u500B\u88DD - \u4E2D\u79CB\u9650\u5B9A\u5305\u88DD </a></h3><div class="font14" data-v-7133fe4b> \u7AF6\u62CD\u65E5\u671F\uFF1A2022/08/01~2022/09/01 </div><div class="col-xs-6 text-left" data-v-7133fe4b><span class="bid_pricetxt" data-v-7133fe4b>\u5F97\u6A19\u50F9</span><span class="bid_price" data-v-7133fe4b><i class="fas fa-parking" data-v-7133fe4b></i>990 </span></div><div class="col-xs-6 text-right" data-v-7133fe4b> \u5DF2\u51FA\u50F9<span class="process_txt" data-v-7133fe4b>10</span>\u6B21 <a href="bid.html#bid_content" class="btn btn-main btn-check" data-v-7133fe4b>\u5DF2\u7D50\u675F</a></div></div></div></div></div><div id="finished_group_buying" class="tab-pane fade" data-v-7133fe4b><div class="product_slide" data-v-7133fe4b><div class="product_frame bid_info" data-v-7133fe4b><div class="product_img" data-v-7133fe4b><button class="add_bell" data-v-7133fe4b><i class="fa-regular fa-bell" data-v-7133fe4b></i></button><a href="group_buying.html#group_content" data-v-7133fe4b><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-7133fe4b></a></div><div class="row" data-v-7133fe4b><h3 data-v-7133fe4b><a href="group_buying.html#group_content" data-v-7133fe4b> \u9CF3\u68A8\u916510\u500B\u88DD - \u4E2D\u79CB\u9650\u5B9A\u5305\u88DD </a></h3><div class="font14" data-v-7133fe4b> \u6D3B\u52D5\u5DF2\u622A\u6B62\u3002 </div><div class="col-xs-6 text-left" data-v-7133fe4b><span class="bid_pricetxt" data-v-7133fe4b>\u5718\u8CFC\u50F9\u683C</span><span class="bid_price" data-v-7133fe4b><i class="fas fa-dollar" data-v-7133fe4b></i>123 </span></div><div class="col-xs-6 text-right" data-v-7133fe4b> \u5718\u8CFC\u9032\u5EA6<span class="process_txt" data-v-7133fe4b>90</span>%<div class="process_bar" data-v-7133fe4b><div class="process_bar_bg" style="${ssrRenderStyle({ "width": "90%" })}" data-v-7133fe4b></div></div><a href="group_buying.html#group_content" class="btn btn-main btn-check" data-v-7133fe4b>\u5DF2\u7D50\u675F</a></div></div></div></div></div></div></div>`);
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
const activity = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7133fe4b"]]);

export { activity as default };
//# sourceMappingURL=activity.c38eb085.mjs.map
