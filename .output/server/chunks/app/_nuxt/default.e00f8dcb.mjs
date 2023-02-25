import { d as defineStore, _ as _export_sfc, u as useRouter, f as __nuxt_component_0$1 } from '../server.mjs';
import { u as useAuthStore } from './authStore.b053acfb.mjs';
import { u as useCartStore } from './cartStore.3ffb3293.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref, computed, withCtx, createVNode, withDirectives, toDisplayString, vShow, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
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

const initialState = {
  bellMessageToggle: false
};
const usePageStatusStore = defineStore({
  id: "pageStatus",
  state: () => initialState,
  getters: {},
  actions: {
    toggleBellMessage(_toggle) {
      this.bellMessageToggle = _toggle;
    }
  }
});
const _imports_0 = "" + globalThis.__buildAssetsURL("logo.f02090fc.png");
const _sfc_main$4 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    const cartStore = useCartStore();
    usePageStatusStore();
    useRouter();
    const messagesAmount = ref(5);
    const isLoggedIn = computed(() => authStore.status.loggedIn);
    const menuToggle = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "top_nav" }, _attrs))} data-v-40f62f38><div class="container2 relative p-0" data-v-40f62f38><div id="logo" class="logo" data-v-40f62f38>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="" data-v-40f62f38${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><section class="top-header" data-v-40f62f38><ul id="top_member" class="top-menu" data-v-40f62f38><li data-v-40f62f38>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/favorite" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fa-regular fa-heart" data-v-40f62f38${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "fa-regular fa-heart" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="top_cart" data-v-40f62f38>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/cart" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(`<i class="fa-solid fa-cart-shopping" data-v-40f62f38${_scopeId}></i><span style="${ssrRenderStyle(((_a = unref(cartStore)) == null ? void 0 : _a.merch.length) > 0 ? null : { display: "none" })}" class="badge badge-pink" data-v-40f62f38${_scopeId}>${ssrInterpolate((_b = unref(cartStore)) == null ? void 0 : _b.merch.length)}</span>`);
          } else {
            return [
              createVNode("i", { class: "fa-solid fa-cart-shopping" }),
              withDirectives(createVNode("span", { class: "badge badge-pink" }, toDisplayString((_c = unref(cartStore)) == null ? void 0 : _c.merch.length), 513), [
                [vShow, ((_d = unref(cartStore)) == null ? void 0 : _d.merch.length) > 0]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li style="${ssrRenderStyle(unref(isLoggedIn) ? null : { display: "none" })}" class="top_bell" data-v-40f62f38><a href="javascript:;" data-v-40f62f38><i class="fa-regular fa-bell" data-v-40f62f38></i>`);
      if (unref(messagesAmount)) {
        _push(`<span class="badge badge-green bell_bounce" data-v-40f62f38>${ssrInterpolate(unref(messagesAmount))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</a></li>`);
      if (!unref(isLoggedIn)) {
        _push(`<li data-v-40f62f38>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/login" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="fa-regular fa-user" data-v-40f62f38${_scopeId}></i>`);
            } else {
              return [
                createVNode("i", { class: "fa-regular fa-user" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
      } else {
        _push(`<li class="dropdown dropdown-slide" data-v-40f62f38><a class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-v-40f62f38><i class="fa-regular fa-user" data-v-40f62f38></i></a><ul class="dropdown-menu" data-v-40f62f38><li data-v-40f62f38>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/profile" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u6703\u54E1\u8CC7\u6599 `);
            } else {
              return [
                createTextVNode(" \u6703\u54E1\u8CC7\u6599 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-40f62f38><a href="javascript:;" data-v-40f62f38>\u767B\u51FA</a></li></ul></li>`);
      }
      _push(`</ul></section><div id="menuToggle" data-v-40f62f38><input${ssrIncludeBooleanAttr(Array.isArray(unref(menuToggle)) ? ssrLooseContain(unref(menuToggle), null) : unref(menuToggle)) ? " checked" : ""} type="checkbox" data-v-40f62f38><span data-v-40f62f38></span><span data-v-40f62f38></span><span data-v-40f62f38></span><ul id="menu" data-v-40f62f38><li data-v-40f62f38>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/aboutlovin" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u95DC\u65BCLOVIN\u6A02\u604B `);
          } else {
            return [
              createTextVNode(" \u95DC\u65BCLOVIN\u6A02\u604B ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-40f62f38>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/shop" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u7522\u54C1\u4ECB\u7D39 `);
          } else {
            return [
              createTextVNode(" \u7522\u54C1\u4ECB\u7D39 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-40f62f38>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/bonus-point" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u6211\u8981\u8CFA\u7D05\u5229 `);
          } else {
            return [
              createTextVNode(" \u6211\u8981\u8CFA\u7D05\u5229 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-40f62f38>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/activity" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` WO\u6D3B\u52D5 `);
          } else {
            return [
              createTextVNode(" WO\u6D3B\u52D5 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-40f62f38"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BellMessage",
  __ssrInlineRender: true,
  setup(__props) {
    const currentTab = ref(0);
    usePageStatusStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "bell-message-container",
        class: "bell-message-container",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "bellCenterTitle"
      }, _attrs))} data-v-ace0fe3a><div class="modal-dialog" role="document" data-v-ace0fe3a><div class="modal-content" data-v-ace0fe3a><div class="modal-body m-0 p-0" data-v-ace0fe3a><ul class="nav nav-tabs message_tab" data-v-ace0fe3a><li class="${ssrRenderClass({ active: unref(currentTab) === 0 })}" data-v-ace0fe3a><a href="javascript:;" data-v-ace0fe3a> WO\u5FEB\u8A0A <span class="badge2" data-v-ace0fe3a>2</span></a></li><li class="${ssrRenderClass({ active: unref(currentTab) === 1 })}" data-v-ace0fe3a><a href="javascript:;" data-v-ace0fe3a> \u6211\u7684\u8FFD\u8E64 <span class="badge2" data-v-ace0fe3a>2</span></a></li><li class="${ssrRenderClass({ active: unref(currentTab) === 2 })}" data-v-ace0fe3a><a href="javascript:;" data-v-ace0fe3a> \u7D05\u5229\u5FEB\u8A0A <span class="badge2" data-v-ace0fe3a>1</span></a></li></ul><div class="tab-content message_content" data-v-ace0fe3a><div style="${ssrRenderStyle(unref(currentTab) === 0 ? null : { display: "none" })}" id="bell_1" class="tab-panel" data-v-ace0fe3a><ul data-v-ace0fe3a><li data-v-ace0fe3a> \u65B0\u589E\u4E00\u5247<a href="" target="new" data-v-ace0fe3a>\u300C\u5718\u8CFC\u540D\u7A31\u300D</a>\uFF0C\u5FEB\u4F86\u8FFD\u8E64\u5427\uFF01 </li><li data-v-ace0fe3a> \u606D\u559C\u60A8\u5F97\u6A19<a href="" target="new" data-v-ace0fe3a>\u300C\u7AF6\u62CD\u540D\u7A31\u300D</a>\uFF0C\u8ACB\u5728\u671F\u9650\u5167\u78BA\u8A8D\u60A8\u7684\u5BC4\u9001\u8CC7\u8A0A\uFF0C\u903E\u671F\u5C07\u8996\u70BA\u68C4\u9818\uFF01<a href="/b_checkout" target="new" data-v-ace0fe3a><u data-v-ace0fe3a>\u9EDE\u6B64\u78BA\u8A8D</u></a></li></ul></div><div style="${ssrRenderStyle(unref(currentTab) === 1 ? null : { display: "none" })}" id="bell_2" class="tab-panel" data-v-ace0fe3a><ul data-v-ace0fe3a><li data-v-ace0fe3a><a href="" target="new" data-v-ace0fe3a>\u300C\u5718\u8CFC\u540D\u7A31\u300D</a>\u9032\u5EA6\u5DF2\u905490%\uFF01 </li><li data-v-ace0fe3a><a href="" target="new" data-v-ace0fe3a>\u300C\u7AF6\u62CD\u540D\u7A31\u300D</a>\u6709\u65B0\u7684\u51FA\u50F9\uFF0C\u524D\u5F80\u5BDF\u770B\uFF01 </li></ul></div><div style="${ssrRenderStyle(unref(currentTab) === 2 ? null : { display: "none" })}" id="bell_3" class="tab-panel" data-v-ace0fe3a><ul data-v-ace0fe3a><li data-v-ace0fe3a> 2022/09/09\uFF0C\u7C3D\u5230\u6EFF30\u5929\uFF0C\u984D\u5916\u8D08\u900110\u9EDE\u7D05\u5229\u3002 </li></ul></div></div></div><div class="modal-footer" data-v-ace0fe3a><button type="button" class="btn btn-check2" data-dismiss="modal" data-v-ace0fe3a> \u95DC\u9589 </button></div></div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BellMessage.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-ace0fe3a"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "videoModal",
    class: "modal fade",
    tabindex: "-1",
    role: "dialog",
    "aria-labelledby": "videoModalLabel",
    "aria-hidden": "true",
    "data-backdrop": "static"
  }, _attrs))}><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-body"><div class="embed-responsive embed-responsive-16by9"><iframe id="video" class="embed-responsive-item" src="" allowscriptaccess="always" allow="autoplay"></iframe></div></div><div class="modal-footer btn-close d_none"><button type="button" class="btn btn-default" data-dismiss="modal"> \u95DC\u9589 </button></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VideoDialogue.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer section" }, _attrs))}><div class="container2"> \u8A2A\u5BA2\u6578\uFF1A123\u4EBA | \u6703\u54E1\u6578\uFF1A123\u4EBA<div class="row"><div class="col-md-4 text-left"> \u540C\u8208\u5BE6\u696D\u80A1\u4EFD\u6709\u9650\u516C\u53F8<br> \u71DF\u696D\u6642\u9593\uFF1A\u9031\u4E8C\u81F3\u9031\u65E5 \u4E0A\u534811:00-\u665A\u959320:00<br> \u5BA2\u670D\u5C08\u7DDA\uFF1A022371110\u300102-23711183<br> \u806F\u7D61\u4FE1\u7BB1\uFF1Amlin@tonghsing.com.tw<br> \u516C\u53F8\u5730\u5740\uFF1A\u53F0\u5317\u5E02\u5EF6\u5E73\u5357\u8DEF85\u865F4\u6A13<br> Line ID\uFF1Atest123 </div><div class="col-md-8 text-right"><ul class="footer-menu"><li><a href="/order">\u6211\u7684\u8A02\u55AE\u67E5\u8A62</a></li><li><a href="/contact">\u806F\u7D61\u6211\u5011</a></li><li><a href="/about">\u95DC\u65BC\u6211\u5011</a></li><li><a href="/faq">\u5E38\u898B\u554F\u984C</a></li><li><a href="/faq">\u9000\u63DB\u8CA8\u8AAA\u660E</a></li><li><a href="/privacy">\u96B1\u79C1\u6B0A\u653F\u7B56</a></li><li><a href="/terms">\u6703\u54E1\u689D\u6B3E</a></li></ul><ul class="footer-menu social_icon"><li><a href=""><i class="fa-brands fa-instagram"></i></a></li><li><a href=""><i class="fa-brands fa-facebook-f"></i></a></li><li><a href=""><i class="fa-brands fa-line"></i></a></li><li><a href=""><i class="fa-brands fa-youtube"></i></a></li></ul></div></div><p>Copyright \xA92022 Developed by <a href="">Weshin</a></p></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const pageStatus = usePageStatusStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0;
      const _component_BellMessage = __nuxt_component_1;
      const _component_VideoDialogue = __nuxt_component_2;
      const _component_Footer = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout--default" }, _attrs))} data-v-682f8410>`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_BellMessage, {
        style: unref(pageStatus).bellMessageToggle ? null : { display: "none" }
      }, null, _parent));
      _push(ssrRenderComponent(_component_VideoDialogue, null, null, _parent));
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-682f8410"]]);

export { _default as default };
//# sourceMappingURL=default.e00f8dcb.mjs.map
