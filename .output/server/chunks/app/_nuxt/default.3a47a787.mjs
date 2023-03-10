import { _ as _export_sfc, a as useAuthStore, h as useCartStore, b as useRouter, f as __nuxt_component_0$1 } from '../server.mjs';
import { u as usePageStatusStore } from './pageStatusStore.0ee7abdd.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref, computed, withCtx, createVNode, withDirectives, toDisplayString, vShow, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
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

const _imports_0$1 = "" + globalThis.__buildAssetsURL("logo.f02090fc.png");
const _sfc_main$5 = {
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "top_nav" }, _attrs))} data-v-668d5f35><div class="container2 relative p-0" data-v-668d5f35><div id="logo" class="logo" data-v-668d5f35>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-668d5f35${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0$1,
                alt: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><section class="top-header" data-v-668d5f35><ul id="top_member" class="top-menu" data-v-668d5f35><li data-v-668d5f35>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/favorite" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fa-regular fa-heart" data-v-668d5f35${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "fa-regular fa-heart" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="top_cart" data-v-668d5f35>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/cart" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(`<i class="fa-solid fa-cart-shopping" data-v-668d5f35${_scopeId}></i><span style="${ssrRenderStyle(((_a = unref(cartStore)) == null ? void 0 : _a.merch.length) > 0 ? null : { display: "none" })}" class="badge badge-pink" data-v-668d5f35${_scopeId}>${ssrInterpolate((_b = unref(cartStore)) == null ? void 0 : _b.merch.length)}</span>`);
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
      _push(`</li><li style="${ssrRenderStyle(unref(isLoggedIn) && false ? null : { display: "none" })}" class="top_bell" data-v-668d5f35><a href="javascript:;" data-v-668d5f35><i class="fa-regular fa-bell" data-v-668d5f35></i>`);
      if (unref(messagesAmount)) {
        _push(`<span class="badge badge-green bell_bounce" data-v-668d5f35>${ssrInterpolate(unref(messagesAmount))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</a></li>`);
      if (!unref(isLoggedIn)) {
        _push(`<li data-v-668d5f35>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/login" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="fa-regular fa-user" data-v-668d5f35${_scopeId}></i>`);
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
        _push(`<li class="dropdown dropdown-slide" data-v-668d5f35><a class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-v-668d5f35><i class="fa-regular fa-user" data-v-668d5f35></i></a><ul class="dropdown-menu" data-v-668d5f35><li data-v-668d5f35>`);
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
        _push(`</li><li data-v-668d5f35><a href="javascript:;" data-v-668d5f35>\u767B\u51FA</a></li></ul></li>`);
      }
      _push(`</ul></section><div id="menuToggle" data-v-668d5f35><input${ssrIncludeBooleanAttr(Array.isArray(unref(menuToggle)) ? ssrLooseContain(unref(menuToggle), null) : unref(menuToggle)) ? " checked" : ""} type="checkbox" data-v-668d5f35><span data-v-668d5f35></span><span data-v-668d5f35></span><span data-v-668d5f35></span><ul id="menu" data-v-668d5f35><li data-v-668d5f35>`);
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
      _push(`</li><li data-v-668d5f35>`);
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
      _push(`</li><li data-v-668d5f35>`);
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
      _push(`</li><li style="${ssrRenderStyle({ display: "none" })}" data-v-668d5f35>`);
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-668d5f35"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "BellMessage",
  __ssrInlineRender: true,
  setup(__props) {
    const currentTab = ref(0);
    usePageStatusStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "bell-message-container",
        class: "bell-message-container animate__fadeIn animate__animated animation-duration-1",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "bellCenterTitle"
      }, _attrs))} data-v-cdecec6e><div class="modal-dialog" role="document" data-v-cdecec6e><div class="modal-content" data-v-cdecec6e><div class="modal-body m-0 p-0" data-v-cdecec6e><ul class="nav nav-tabs message_tab" data-v-cdecec6e><li class="${ssrRenderClass({ active: unref(currentTab) === 0 })}" data-v-cdecec6e><a href="javascript:;" data-v-cdecec6e> WO\u5FEB\u8A0A <span class="badge2" data-v-cdecec6e>2</span></a></li><li class="${ssrRenderClass({ active: unref(currentTab) === 1 })}" data-v-cdecec6e><a href="javascript:;" data-v-cdecec6e> \u6211\u7684\u8FFD\u8E64 <span class="badge2" data-v-cdecec6e>2</span></a></li><li class="${ssrRenderClass({ active: unref(currentTab) === 2 })}" data-v-cdecec6e><a href="javascript:;" data-v-cdecec6e> \u7D05\u5229\u5FEB\u8A0A <span class="badge2" data-v-cdecec6e>1</span></a></li></ul><div class="tab-content message_content" data-v-cdecec6e><div style="${ssrRenderStyle(unref(currentTab) === 0 ? null : { display: "none" })}" id="bell_1" class="tab-panel" data-v-cdecec6e><ul data-v-cdecec6e><li data-v-cdecec6e> \u65B0\u589E\u4E00\u5247<a href="" target="new" data-v-cdecec6e>\u300C\u5718\u8CFC\u540D\u7A31\u300D</a>\uFF0C\u5FEB\u4F86\u8FFD\u8E64\u5427\uFF01 </li><li data-v-cdecec6e> \u606D\u559C\u60A8\u5F97\u6A19<a href="" target="new" data-v-cdecec6e>\u300C\u7AF6\u62CD\u540D\u7A31\u300D</a>\uFF0C\u8ACB\u5728\u671F\u9650\u5167\u78BA\u8A8D\u60A8\u7684\u5BC4\u9001\u8CC7\u8A0A\uFF0C\u903E\u671F\u5C07\u8996\u70BA\u68C4\u9818\uFF01<a href="/b_checkout" target="new" data-v-cdecec6e><u data-v-cdecec6e>\u9EDE\u6B64\u78BA\u8A8D</u></a></li></ul></div><div style="${ssrRenderStyle(unref(currentTab) === 1 ? null : { display: "none" })}" id="bell_2" class="tab-panel" data-v-cdecec6e><ul data-v-cdecec6e><li data-v-cdecec6e><a href="" target="new" data-v-cdecec6e>\u300C\u5718\u8CFC\u540D\u7A31\u300D</a>\u9032\u5EA6\u5DF2\u905490%\uFF01 </li><li data-v-cdecec6e><a href="" target="new" data-v-cdecec6e>\u300C\u7AF6\u62CD\u540D\u7A31\u300D</a>\u6709\u65B0\u7684\u51FA\u50F9\uFF0C\u524D\u5F80\u5BDF\u770B\uFF01 </li></ul></div><div style="${ssrRenderStyle(unref(currentTab) === 2 ? null : { display: "none" })}" id="bell_3" class="tab-panel" data-v-cdecec6e><ul data-v-cdecec6e><li data-v-cdecec6e> 2022/09/09\uFF0C\u7C3D\u5230\u6EFF30\u5929\uFF0C\u984D\u5916\u8D08\u900110\u9EDE\u7D05\u5229\u3002 </li></ul></div></div></div><div class="modal-footer" data-v-cdecec6e><button type="button" class="btn btn-check2" data-dismiss="modal" data-v-cdecec6e> \u95DC\u9589 </button></div></div></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BellMessage.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-cdecec6e"]]);
const _sfc_main$3 = {
  __name: "VideoDialogue",
  __ssrInlineRender: true,
  setup(__props) {
    const countdown = ref(5);
    const pageStatus = usePageStatusStore();
    const videoURL = computed(() => {
      return pageStatus.dailyVideoURL;
    });
    function getYoutubeEmbedURL(_url) {
      const regex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const isValidUrl = regex.test(_url);
      if (!isValidUrl)
        return "";
      const match = _url.match(regex);
      let embedId = match && match[2].length === 11 ? match[2] : null;
      if (!embedId && _url.includes("shorts")) {
        const regex2 = /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm;
        embedId = regex2.exec(_url)[3];
      }
      return `https://www.youtube.com/embed/${embedId}`;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "videoModal",
        class: "video-dialog-container animate__fadeIn animate__animated animation-duration-1",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "videoModalLabel",
        "aria-hidden": "true",
        "data-backdrop": "static"
      }, _attrs))} data-v-58113b18><div class="modal-dialog" role="document" data-v-58113b18><div class="modal-content" data-v-58113b18><div class="modal-body" data-v-58113b18><div class="embed-responsive embed-responsive-16by9" data-v-58113b18><iframe id="yt-iframe" width="560" height="315"${ssrRenderAttr("src", getYoutubeEmbedURL(unref(videoURL)))} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen data-v-58113b18></iframe></div></div>`);
      if (unref(countdown) <= 0) {
        _push(`<div class="modal-footer btn-close" data-v-58113b18><button type="button" class="btn btn-default" data-v-58113b18> \u95DC\u9589 </button></div>`);
      } else {
        _push(`<div class="hint" data-v-58113b18> \u8ACB\u7B49\u5F85 ${ssrInterpolate(unref(countdown))} \u79D2... </div>`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VideoDialogue.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-58113b18"]]);
const _imports_0 = "" + globalThis.__buildAssetsURL("share_ad.31ea5396.jpg");
const _sfc_main$2 = {
  __name: "ShareAccount",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    usePageStatusStore();
    const shareURL = computed(() => {
      var _a;
      return `
  ${location.host}/register?recommend=${(_a = authStore.user) == null ? void 0 : _a.recommendCode}
`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "shareaccount",
        class: "modal share-account-container"
      }, _attrs))} data-v-e3ffdbdf><div class="modal-dialog" role="document" data-v-e3ffdbdf><div class="modal-content" data-v-e3ffdbdf><div class="modal-title" data-v-e3ffdbdf><h4 data-v-e3ffdbdf>\u6211\u7684\u597D\u53CB,\u9001\u4F60\u4E00\u5247\u597D\u5EB7</h4></div><div class="modal-body" data-v-e3ffdbdf><img class="main-img"${ssrRenderAttr("src", _imports_0)} alt="" data-v-e3ffdbdf> \u597D\u6771\u897F,\u7576\u7136\u8981\u518D\u5206\u4EAB\u7D66\u53E3\u888B\u540D\u55AE!<br data-v-e3ffdbdf> \u5206\u4EAB\u9019\u5247\u512A\u60E0\u7D66\u597D\u53CB,\u4E5F\u8B93\u597D\u53CB\u4E00\u8D77\u62FF\u5230\u8D85\u4F4E\u512A\u60E0\u50F9<br data-v-e3ffdbdf><br data-v-e3ffdbdf> \u65B9\u5F0F\uFF1A\u9EDE\u9078\u4E0B\u65B9\u6309\u9215\u514D\u8CBB\u52A0\u5165\u6703\u54E1, \u5B8C\u6210\u6D41\u7A0B\u5F8C, \u5C31\u80FD\u4EAB\u53D7VIP \u548CSVIP\u7684\u8D85\u4F4E\u7279\u60E0\u50F9 <div class="text-center" data-v-e3ffdbdf> \u5206\u4EAB<br data-v-e3ffdbdf><a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2FLOVIN2022" target="_blank" data-v-e3ffdbdf><i class="fa-brands fa-facebook" style="${ssrRenderStyle({ "font-size": "28px" })}" data-v-e3ffdbdf></i></a><br data-v-e3ffdbdf><a id="copy-btn" class="btn btn-main btn-check"${ssrRenderAttr("data-clipboard-text", unref(shareURL))} data-v-e3ffdbdf>\u8907\u88FD\u5206\u4EAB\u7DB2\u5740</a></div></div><div class="modal-footer" data-v-e3ffdbdf><button type="button" class="btn btn-check2" data-v-e3ffdbdf> \u95DC\u9589 </button></div></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ShareAccount.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e3ffdbdf"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer section" }, _attrs))}><div class="container2"> \u8A2A\u5BA2\u6578\uFF1A1,435,538\u4EBA | \u6703\u54E1\u6578\uFF1A12,380\u4EBA<div class="row"><div class="col-md-4 text-left"> \u5168\u53F0\u6700\u5927\u5805\u679C\u96FB\u5546\u5E73\u53F0 \u4F60\u4ECA\u5929WO\u4E86\u6C92<br> \u540C\u8208\u5BE6\u696D\u80A1\u4EFD\u6709\u9650\u516C\u53F8<br> \u5BA2\u670D\u5C08\u7DDA\uFF1A022371110\u300102-23711183<br> \u5BA2\u670D\u4FE1\u7BB1\uFF1Amlin@tonghsing.com.tw<br> \u516C\u53F8\u5730\u5740\uFF1A\u53F0\u5317\u5E02\u5EF6\u5E73\u5357\u8DEF85\u865F4\u6A13<br></div><div class="col-md-8 text-right"><ul class="footer-menu"><li><a href="/order">\u6211\u7684\u8A02\u55AE\u67E5\u8A62</a></li><li><a href="/contact">\u806F\u7D61\u6211\u5011</a></li><li><a href="/about">\u95DC\u65BC\u6211\u5011</a></li><li><a href="/faq">\u5E38\u898B\u554F\u984C</a></li><li><a href="/return-help">\u9000\u63DB\u8CA8\u8AAA\u660E</a></li><li><a href="/privacy">\u96B1\u79C1\u6B0A\u653F\u7B56</a></li><li><a href="/terms">\u6703\u54E1\u689D\u6B3E</a></li></ul><ul class="footer-menu social_icon"><li><a href="https://www.instagram.com/p/Co1EeQHpvmD/?igshid=MDJmNzVkMjY=" target="_blank"><i class="fa-brands fa-instagram"></i></a></li><li><a href="https://www.facebook.com/LOVIN2022" target="_blank"><i class="fa-brands fa-facebook-f"></i></a></li><li><a href=" https://youtu.be/9RlTDp0BBUw" target="_blank"><i class="fa-brands fa-youtube"></i></a></li></ul></div></div><p>Copyright \xA92023 Developed by <a href="">Weshin</a></p></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const pageStatus = usePageStatusStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0;
      const _component_BellMessage = __nuxt_component_1;
      const _component_VideoDialogue = __nuxt_component_2;
      const _component_ShareAccount = __nuxt_component_3;
      const _component_Footer = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout--default" }, _attrs))} data-v-46ba932e>`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      if (unref(pageStatus).bellMessageToggle) {
        _push(ssrRenderComponent(_component_BellMessage, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(pageStatus).videoDialogToggle) {
        _push(ssrRenderComponent(_component_VideoDialogue, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(pageStatus).shareAccountToggle) {
        _push(ssrRenderComponent(_component_ShareAccount, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
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
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-46ba932e"]]);

export { _default as default };
//# sourceMappingURL=default.3a47a787.mjs.map
