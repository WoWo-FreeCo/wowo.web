import { e as useAuthStore, b as useRouter, _ as _export_sfc, g as __nuxt_component_0$1, h as useRoute } from '../server.mjs';
import { u as usePageStatusStore } from './pageStatusStore.a554ae79.mjs';
import { computed, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';

const _imports_0 = "" + globalThis.__buildAssetsURL("default-avatar.145ff9f9.png");
const _sfc_main$1 = {
  __name: "UserProfile",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    usePageStatusStore();
    const authUser = computed(() => authStore == null ? void 0 : authStore.user);
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "user_profile" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-2 col-md-3 col-sm-3 col-xs-4 col-xxs-5 relative p-5"><img class="slim preview img-wrapper"${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="col-lg-10 col-md-9 col-sm-9 col-xs-8 col-xxs-7 p-5"><ul class="user-profile-list"><li><h3>${ssrInterpolate((_b = (_a = unref(authStore)) == null ? void 0 : _a.user) == null ? void 0 : _b.nickname)}</h3><span class="badge_member badge_svip">${ssrInterpolate(((_d = (_c = unref(authStore)) == null ? void 0 : _c.user) == null ? void 0 : _d.memberLevel) === "NORMAL" ? "\u666E\u901A\u6703\u54E1" : (_f = (_e = unref(authStore)) == null ? void 0 : _e.user) == null ? void 0 : _f.memberLevel)}</span></li><li><span>\u6211\u7684\u5E33\u865F\uFF1A${ssrInterpolate((_h = (_g = unref(authStore)) == null ? void 0 : _g.user) == null ? void 0 : _h.email)}</span></li><li><span>\u6211\u7684\u63A8\u85A6\u4EE3\u78BC\uFF1A${ssrInterpolate((_j = (_i = unref(authStore)) == null ? void 0 : _i.user) == null ? void 0 : _j.recommendCode)}</span></li><li style="${ssrRenderStyle({ "font-size": "12px", "color": "red" })}"><span>\uFF08\u6B64\u78BC\u662F\u6210\u70BAVIP\u7684\u5FC5\u8981\u689D\u4EF6\uFF0C\u4ED6\u4EBA\u8F38\u5165\u60A8\u7684\u300E\u63A8\u85A6\u4EE3\u78BC\u300F\u5F8C\uFF0C\u5176\u6D88\u8CBB\u91D1\u984D5%\u5C07\u6210\u70BA\u60A8\u7684\u7D05\u5229\u9EDE\u6578\uFF1B <br>\u5B98\u65B9\u4E5F\u5C07\u6703\u914D\u5408\u7279\u6B8A\u6D3B\u52D5\u8ABF\u6574%\u4E0A\u9650\uFF09</span></li><li><span>\u7D05\u5229\u9EDE\u6578\uFF1A${ssrInterpolate((_l = (_k = unref(authStore)) == null ? void 0 : _k.user) == null ? void 0 : _l.rewardCredit)}</span><i class="fas fa-parking"></i></li></ul></div></div><ul class="member_btnli"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/bonus-point",
        class: "btn btn-check"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fa-regular fa-calendar-check"${_scopeId}></i>\u6211\u8981\u7C3D\u5230 `);
          } else {
            return [
              createVNode("i", { class: "fa-regular fa-calendar-check" }),
              createTextVNode("\u6211\u8981\u7C3D\u5230 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li>`);
      if (unref(authUser).memberLevel !== "SVIP") {
        _push(`<li><div class="btn btn-check"><i class="fa-regular fa-circle-up"></i>\u6211\u8981\u5347\u7B49 </div></li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<li><a href="#" data-toggle="modal" data-target="#shareaccount" class="btn btn-check"><i class="fa-solid fa-share-nodes"></i>\u5206\u4EAB\u6211\u7684\u63A8\u85A6\u4EE3\u78BC</a></li></ul></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UserProfile.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "ProfileSidebar",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const path = computed(() => route.path);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-sm-3 p-0 bg_left" }, _attrs))} data-v-e69f2949><div id="member_menu" class="panel-group commonAccordion" data-v-e69f2949><div class="panel panel-default" data-v-e69f2949><div id="headingOne" class="panel-heading" role="tab" data-v-e69f2949><h4 class="panel-title" data-v-e69f2949><div class="panel-title-div" data-v-e69f2949> \u6703\u54E1\u8CC7\u6599 </div></h4></div><div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne" data-v-e69f2949><ul data-v-e69f2949><li class="${ssrRenderClass({ active: (_a = unref(path)) == null ? void 0 : _a.toLowerCase().includes("/profile") })}" data-v-e69f2949>`);
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
      _push(`</li><li class="${ssrRenderClass({ active: (_b = unref(path)) == null ? void 0 : _b.toLowerCase().includes("/bonus-record") })}" data-v-e69f2949>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/bonus-record" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u6211\u7684\u7D05\u5229\u9EDE\u6578 `);
          } else {
            return [
              createTextVNode(" \u6211\u7684\u7D05\u5229\u9EDE\u6578 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="${ssrRenderClass({ active: (_c = unref(path)) == null ? void 0 : _c.toLowerCase().includes("/favorite") })}" data-v-e69f2949>`);
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
      _push(`</li><li class="${ssrRenderClass({ active: (_d = unref(path)) == null ? void 0 : _d.toLowerCase().includes("/order") })}" data-v-e69f2949>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/order" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u8A02\u55AE\u67E5\u8A62 `);
          } else {
            return [
              createTextVNode(" \u8A02\u55AE\u67E5\u8A62 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProfileSidebar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e69f2949"]]);

export { _sfc_main$1 as _, __nuxt_component_1 as a };
//# sourceMappingURL=ProfileSidebar.91bde4bb.mjs.map
