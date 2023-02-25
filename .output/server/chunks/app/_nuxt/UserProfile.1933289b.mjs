import { f as __nuxt_component_0$1 } from '../server.mjs';
import { u as useAuthStore } from './authStore.b053acfb.mjs';
import { mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = {
  __name: "UserProfile",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "user_profile" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-2 col-md-3 col-sm-3 col-xs-4 col-xxs-5 relative p-5"><form><div class="slim preview img-wrapper" data-label="\u8ACB\u4E0A\u50B3\u500B\u4EBA\u982D\u50CF" data-ratio="1:1" style="${ssrRenderStyle({
        backgroundImage: `url('${(_c = (_b = (_a = unref(authStore)) == null ? void 0 : _a.user) == null ? void 0 : _b.avatar) == null ? void 0 : _c.url}')`
      })}"><input type="file" name="slim[]"></div></form></div><div class="col-lg-10 col-md-9 col-sm-9 col-xs-8 col-xxs-7 p-5"><ul class="user-profile-list"><li><h3>${ssrInterpolate((_e = (_d = unref(authStore)) == null ? void 0 : _d.user) == null ? void 0 : _e.nickname)}</h3><span class="badge_member badge_svip">${ssrInterpolate((_g = (_f = unref(authStore)) == null ? void 0 : _f.user) == null ? void 0 : _g.level)}</span></li><li><span>\u6211\u7684\u5E33\u865F\uFF1A${ssrInterpolate((_i = (_h = unref(authStore)) == null ? void 0 : _h.user) == null ? void 0 : _i.username)}</span></li><li><span>\u6211\u7684\u63A8\u85A6\u8005\uFF1A${ssrInterpolate((_k = (_j = unref(authStore)) == null ? void 0 : _j.user) == null ? void 0 : _k.recommendCode)}</span></li><li><span>\u7D05\u5229\u9EDE\u6578\uFF1A${ssrInterpolate((_m = (_l = unref(authStore)) == null ? void 0 : _l.user) == null ? void 0 : _m.rewardCredit)}</span><i class="fas fa-parking"></i></li></ul></div></div><ul class="member_btnli"><li><a href="signpoint.html" target="new" class="btn btn-check"><i class="fa-regular fa-calendar-check"></i>\u6211\u8981\u7C3D\u5230</a></li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/profile#member_vip",
        class: "btn btn-check"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fa-regular fa-circle-up"${_scopeId}></i>\u6211\u8981\u5347\u7B49 `);
          } else {
            return [
              createVNode("i", { class: "fa-regular fa-circle-up" }),
              createTextVNode("\u6211\u8981\u5347\u7B49 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="#" data-toggle="modal" data-target="#vipdesc" class="lvdesc_a">\u7B49\u7D1A\u8AAA\u660E</a></li><li><a href="#" data-toggle="modal" data-target="#shareaccount" class="btn btn-check"><i class="fa-solid fa-share-nodes"></i>\u5206\u4EAB\u5E33\u865F</a></li></ul></div></div>`);
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
//# sourceMappingURL=UserProfile.1933289b.mjs.map
