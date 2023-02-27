import { f as __nuxt_component_0$1 } from '../server.mjs';
import { u as useAuthStore } from './authStore.86d26292.mjs';
import { u as usePageStatusStore } from './pageStatusStore.546b6692.mjs';
import { computed, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = {
  __name: "UserProfile",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    usePageStatusStore();
    const authUser = computed(() => authStore == null ? void 0 : authStore.user);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "user_profile" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-2 col-md-3 col-sm-3 col-xs-4 col-xxs-5 relative p-5"><form><div class="slim preview img-wrapper" data-label="\u8ACB\u4E0A\u50B3\u500B\u4EBA\u982D\u50CF" data-ratio="1:1" style="${ssrRenderStyle({
        backgroundImage: `url('${(_c = (_b = (_a = unref(authStore)) == null ? void 0 : _a.user) == null ? void 0 : _b.avatar) == null ? void 0 : _c.url}')`
      })}"><input type="file" name="slim[]"></div></form></div><div class="col-lg-10 col-md-9 col-sm-9 col-xs-8 col-xxs-7 p-5"><ul class="user-profile-list"><li><h3>${ssrInterpolate((_e = (_d = unref(authStore)) == null ? void 0 : _d.user) == null ? void 0 : _e.nickname)}</h3><span class="badge_member badge_svip">${ssrInterpolate((_g = (_f = unref(authStore)) == null ? void 0 : _f.user) == null ? void 0 : _g.memberLevel)}</span></li><li><span>\u6211\u7684\u5E33\u865F\uFF1A${ssrInterpolate((_i = (_h = unref(authStore)) == null ? void 0 : _h.user) == null ? void 0 : _i.email)}</span></li><li><span>\u6211\u7684\u63A8\u85A6\u4EE3\u78BC\uFF1A${ssrInterpolate((_k = (_j = unref(authStore)) == null ? void 0 : _j.user) == null ? void 0 : _k.recommendCode)}</span></li><li style="${ssrRenderStyle({ "font-size": "12px", "color": "red" })}"><span>(\u4F7F\u7528\u63A8\u85A6\u4EE3\u78BC\u8A3B\u518A\u5F8C\uFF0C\u6210\u529F\u6D88\u8CBB\u7E3D\u91D1\u984D1%\uFF0C\u5C07\u6703\u56DE\u994B\u7D05\u5229\u9EDE\u6578\u7D66\u60A8\uFF0C\u63A8\u85A6\u8D8A\u591A\u4EBA\u8CFA\u8D8A\u591A!)</span></li><li><span>\u7D05\u5229\u9EDE\u6578\uFF1A${ssrInterpolate((_m = (_l = unref(authStore)) == null ? void 0 : _l.user) == null ? void 0 : _m.rewardCredit)}</span><i class="fas fa-parking"></i></li></ul></div></div><ul class="member_btnli"><li>`);
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
        _push(`<li><div class="btn btn-check"><i class="fa-regular fa-circle-up"></i>\u6211\u8981\u5347\u7B49 </div><a href="#" data-toggle="modal" data-target="#vipdesc" class="lvdesc_a">\u7B49\u7D1A\u8AAA\u660E</a></li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<li><a href="#" data-toggle="modal" data-target="#shareaccount" class="btn btn-check"><i class="fa-solid fa-share-nodes"></i>\u5206\u4EAB\u5E33\u865F</a></li></ul></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UserProfile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=UserProfile.99ebf9b8.mjs.map
