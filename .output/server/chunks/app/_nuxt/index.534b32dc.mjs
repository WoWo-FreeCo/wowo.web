import { _ as _sfc_main$1, a as _sfc_main$2 } from './ProfileSidebar.a05d62d9.mjs';
import { _ as _export_sfc, a as useAuthStore, b as useRouter, u as useRuntimeConfig, f as __nuxt_component_0$1 } from '../server.mjs';
import { computed, ref, mergeProps, unref, withCtx, createVNode, withDirectives, vShow, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { useMessage } from 'naive-ui';
import { P as POST_USER_ACTIVATATION, b as GET_PROFILE } from './requestURL.38b8c357.mjs';
import './pageStatusStore.55ffe7a8.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'axios';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b, _c;
    const authStore = useAuthStore();
    useRouter();
    const runtimeConfig = useRuntimeConfig();
    const config = useRuntimeConfig();
    useMessage();
    const authUser = computed(() => authStore == null ? void 0 : authStore.user);
    const clickedFB = ref(false);
    const clickedYT = ref(false);
    const clickedIG = ref(false);
    const igURL = ref("https://www.instagram.com/lovin.520/");
    const youtubeURL = ref("https://www.youtube.com/watch?v=9RlTDp0BBUw");
    const fbURL = ref("https://www.facebook.com/LOVIN2022");
    const inputVIPCode = ref("");
    const inputSVIPCode = ref("");
    const currentLevel = computed(() => {
      var _a2;
      switch ((_a2 = authUser.value) == null ? void 0 : _a2.memberLevel) {
        case "VIP":
          return "VIP";
        case "SVIP":
          return "SVIP";
        default:
          return "\u666E\u901A\u6703\u54E1";
      }
    });
    const inputField = ref({
      nickname: (_a = authStore.user) == null ? void 0 : _a.nickname,
      cellphone: (_b = authStore.user) == null ? void 0 : _b.cellphone,
      addressOne: (_c = authStore.user) == null ? void 0 : _c.addressOne
    });
    async function updatePermission() {
      var _a2, _b2, _c2;
      try {
        const accessToken = localStorage.getItem("accessToken");
        const refreshToken = localStorage.getItem("refreshToken");
        const res = await $fetch(`${config.public.apiBase}/${GET_PROFILE}`, {
          method: "GET",
          headers: { Authorization: "Bearer " + accessToken }
        });
        authStore.loginSuccess(accessToken, refreshToken);
        authStore.updateUser(res.data);
        clickedFB.value = (_a2 = res.data) == null ? void 0 : _a2.FacebookGroupActivated;
        clickedYT.value = (_b2 = res.data) == null ? void 0 : _b2.YouTubeChannelActivated;
        clickedIG.value = (_c2 = res.data) == null ? void 0 : _c2.IGFollowActivated;
      } catch (error) {
        authStore.logout();
      }
      console.log("updated permission");
    }
    async function activateProfileByType(type) {
      if (type === "fb") {
        try {
          await $fetch(`${runtimeConfig.public.apiBase}/${POST_USER_ACTIVATATION}`, {
            method: "POST",
            body: {
              kind: "B"
            },
            headers: {
              authorization: "Bearer " + localStorage.getItem("accessToken")
            }
          });
          clickedFB.value = true;
        } catch (error) {
          alert("\u7D81\u5B9A\u5931\u6557\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u4E00\u6B21");
        }
      } else if (type === "yt") {
        try {
          await $fetch(`${runtimeConfig.public.apiBase}/${POST_USER_ACTIVATATION}`, {
            method: "POST",
            body: {
              kind: "C"
            },
            headers: {
              authorization: "Bearer " + localStorage.getItem("accessToken")
            }
          });
          clickedYT.value = true;
        } catch (error) {
          alert("\u7D81\u5B9A\u5931\u6557\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u4E00\u6B21");
        }
      } else if (type === "ig") {
        try {
          await $fetch(`${runtimeConfig.public.apiBase}/${POST_USER_ACTIVATATION}`, {
            method: "POST",
            body: {
              kind: "D"
            },
            headers: {
              authorization: "Bearer " + localStorage.getItem("accessToken")
            }
          });
          clickedYT.value = true;
        } catch (error) {
          alert("\u7D81\u5B9A\u5931\u6557\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u4E00\u6B21");
        }
      } else if (type === "vip") {
        try {
          console.log(inputVIPCode.value);
          await $fetch(`${runtimeConfig.public.apiBase}/${POST_USER_ACTIVATATION}`, {
            method: "POST",
            body: {
              kind: "A",
              code: inputVIPCode.value
            },
            headers: {
              authorization: "Bearer " + localStorage.getItem("accessToken")
            }
          });
          authStore.user.VIPActivated = true;
          alert("VIP\u63A8\u85A6\u78BC\u5DF2\u6FC0\u6D3B\uFF01\uFF01");
        } catch (error) {
          alert("\u8ACB\u8F38\u5165\u6B63\u78BA\u7684\u63A8\u85A6\u5E33\u865F");
        }
      } else if (type === "svip") {
        try {
          await $fetch(`${runtimeConfig.public.apiBase}/${POST_USER_ACTIVATATION}`, {
            method: "POST",
            body: {
              kind: "E",
              code: inputSVIPCode.value
            },
            headers: {
              authorization: "Bearer " + localStorage.getItem("accessToken")
            }
          });
        } catch (error) {
          alert("\u7D81\u5B9A\u5931\u6557\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u4E00\u6B21");
        }
      }
      updatePermission();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UserProfile = _sfc_main$1;
      const _component_ProfileSidebar = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "full_height mt185ptb30 pt0" }, _attrs))} data-v-dc88ad17>`);
      _push(ssrRenderComponent(_component_UserProfile, null, null, _parent));
      _push(`<div class="row" data-v-dc88ad17>`);
      _push(ssrRenderComponent(_component_ProfileSidebar, null, null, _parent));
      _push(`<div class="col-sm-9 pl20pr30" data-v-dc88ad17><div class="contact-form" data-v-dc88ad17><form id="" action="javascript:;" data-v-dc88ad17><h4 class="mb-20" data-v-dc88ad17> \u6703\u54E1\u57FA\u672C\u8CC7\u8A0A </h4><div class="form-group" data-v-dc88ad17><label data-v-dc88ad17>\u59D3\u540D*</label><input id="auth-realname"${ssrRenderAttr("value", unref(inputField).nickname)} type="text" placeholder="\u8ACB\u8F38\u5165\u59D3\u540D" class="form-control" name="" required data-v-dc88ad17></div><div class="form-group" data-v-dc88ad17><label data-v-dc88ad17>\u624B\u6A5F*</label><input id="auth-mobile"${ssrRenderAttr("value", unref(inputField).cellphone)} type="text" placeholder="\u8ACB\u8F38\u5165\u624B\u6A5F\u865F\u78BC" class="form-control" name="" required data-v-dc88ad17></div><div class="form-group" data-v-dc88ad17><label data-v-dc88ad17>\u5730\u5740*</label><input id="auth-address1"${ssrRenderAttr("value", unref(inputField).addressOne)} type="text" placeholder="\u8ACB\u8F38\u5165\u5730\u5740" class="form-control" name="" required data-v-dc88ad17></div><div class="text-center" data-v-dc88ad17><button type="reset" class="btn btn-main btn-default" data-v-dc88ad17> \u53D6\u6D88\u91CD\u586B </button><input id="edit-confirm" type="submit" class="btn btn-main btn-bag" value="\u78BA\u8A8D\u9001\u51FA" data-v-dc88ad17></div></form></div></div></div><div id="member_vip_root" class="bg_left2" data-v-dc88ad17><div id="member_vip" class="level_frame" data-v-dc88ad17><h3 class="level_tl" data-v-dc88ad17><span data-v-dc88ad17>\u76EE\u524D\u7D1A\u5225\uFF1A</span>${ssrInterpolate(unref(currentLevel))} </h3><div class="row level_content" data-v-dc88ad17>`);
      if (unref(authUser).memberLevel === "NORMAL") {
        _push(`<div data-v-dc88ad17><h4 data-v-dc88ad17>\u6211\u8981\u89E3\u9396\u6210\u70BA<span data-v-dc88ad17>VIP</span>\uFF1A<span class="level_tips" data-v-dc88ad17>\u300EA.\u7D81\u5B9AVIP\u63A8\u85A6\u4EBA\u300F+\u300EB.\u6309\u8B9AWO\u7C89\u7D72\u5718\u6216C.\u8A02\u95B1WO\u983B\u9053\u300F\uFF0C\u5373\u53EF\u6210\u70BAVIP!</span></h4></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(authUser).memberLevel === "VIP") {
        _push(`<div data-v-dc88ad17><h4 data-v-dc88ad17>\u6211\u8981\u89E3\u9396\u6210\u70BA<span data-v-dc88ad17>SVIP</span>\uFF1A<span class="level_tips" data-v-dc88ad17>\u300ED.\u7D81\u5B9ASVIP\u6FC0\u6D3B\u78BC\u300F\u6216\u300EB.\u6309\u8B9AWO\u7C89\u7D72\u5718+C.\u8A02\u95B1WO\u983B\u9053\u300F\uFF0C\u5373\u53EF\u6210\u70BASVIP!</span></h4></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(authUser).memberLevel === "NORMAL") {
        _push(`<div class="col-sm-6 border-right" data-v-dc88ad17><h5 data-v-dc88ad17>A.VIP\u63A8\u85A6\u4EBA<span class="level_tips" data-v-dc88ad17>(\u7D81\u5B9A\u63A8\u85A6\u4EBA\u5E33\u865F\u5F8C\u5C07\u7121\u6CD5\u89E3\u9396\uFF01)</span></h5><form id="vip_rec" action="javascript:;" class="form-group" data-v-dc88ad17><input style="${ssrRenderStyle(!unref(authUser).VIPActivated ? null : { display: "none" })}"${ssrRenderAttr("value", unref(inputVIPCode))} type="text" placeholder="\u8ACB\u8F38\u5165VIP\u63A8\u85A6\u5E33\u865F (\u6703\u54E1\u5E33\u865F)" class="form-control" data-v-dc88ad17><button type="button" class="${ssrRenderClass([{ "btn-check": !unref(authUser).VIPActivated, "btn-default": unref(authUser).VIPActivated }, "btn btn-block"])}"${ssrIncludeBooleanAttr(unref(authUser).VIPActivated) ? " disabled" : ""} data-v-dc88ad17><i style="${ssrRenderStyle(unref(authUser).VIPActivated ? null : { display: "none" })}" class="fa-solid fa-circle-check" data-v-dc88ad17></i> ${ssrInterpolate(!unref(authUser).VIPActivated ? "\u524D\u5F80\u7D81\u5B9A" : "\u5DF2\u7D81\u5B9A")}</button></form></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([{
        "display-none": unref(authUser).memberLevel === "NORMAL"
      }, "col-sm-6 border-right svip-code"])}" data-v-dc88ad17><h5 data-v-dc88ad17>A.SVIP\u6FC0\u6D3B\u78BC<span class="level_tips" data-v-dc88ad17>(\u7D81\u5B9A\u63A8\u85A6\u4EBA\u5E33\u865F\u5F8C\u5C07\u7121\u6CD5\u89E3\u9396\uFF01)</span></h5><form id="svip_rec" action="javascript:;" class="form-group" data-v-dc88ad17><input style="${ssrRenderStyle(!unref(authUser).SVIPActivated ? null : { display: "none" })}"${ssrRenderAttr("value", unref(inputSVIPCode))} type="text" placeholder="\u8ACB\u8F38\u5165SVIP\u6FC0\u6D3B\u78BC" class="form-control"${ssrIncludeBooleanAttr(unref(authUser).memberLevel === "SVIP") ? " disabled" : ""} data-v-dc88ad17><button type="button" class="${ssrRenderClass([{
        "btn-check": !unref(authUser).SVIPActivated,
        "btn-default": unref(authUser).SVIPActivated
      }, "btn btn-block"])}"${ssrIncludeBooleanAttr(unref(authUser).SVIPActivated || unref(authUser).memberLevel === "SVIP") ? " disabled" : ""} data-v-dc88ad17><i style="${ssrRenderStyle(unref(authUser).SVIPActivated ? null : { display: "none" })}" class="fa-solid fa-circle-check" data-v-dc88ad17></i> ${ssrInterpolate(!unref(authUser).SVIPActivated ? "\u524D\u5F80\u7D81\u5B9A" : "\u5DF2\u7D81\u5B9A")}</button></form></div><div class="col-sm-6" data-v-dc88ad17><form data-v-dc88ad17><h5 data-v-dc88ad17>B.FB\u7C89\u7D72\u7D81\u5B9A<span class="level_tips" data-v-dc88ad17>(\u6309\u8B9AWO\u7C89\u7D72\u5718)</span></h5>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        target: "_blank",
        to: unref(fbURL),
        onClick: ($event) => activateProfileByType("fb")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button type="button" class="${ssrRenderClass([{ "btn-check": !unref(clickedFB), "btn-default": unref(clickedFB) }, "btn btn-block"])}"${ssrIncludeBooleanAttr(unref(clickedFB)) ? " disabled" : ""} data-v-dc88ad17${_scopeId}><i style="${ssrRenderStyle(unref(clickedFB) ? null : { display: "none" })}" class="fa-solid fa-circle-check" data-v-dc88ad17${_scopeId}></i> ${ssrInterpolate(!unref(clickedFB) ? "\u524D\u5F80\u7D81\u5B9A" : "\u5DF2\u7D81\u5B9A")}</button>`);
          } else {
            return [
              createVNode("button", {
                type: "button",
                class: ["btn btn-block", { "btn-check": !unref(clickedFB), "btn-default": unref(clickedFB) }],
                disabled: unref(clickedFB)
              }, [
                withDirectives(createVNode("i", { class: "fa-solid fa-circle-check" }, null, 512), [
                  [vShow, unref(clickedFB)]
                ]),
                createTextVNode(" " + toDisplayString(!unref(clickedFB) ? "\u524D\u5F80\u7D81\u5B9A" : "\u5DF2\u7D81\u5B9A"), 1)
              ], 10, ["disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form><form class="mt-10" data-v-dc88ad17><h5 data-v-dc88ad17>C.Youtube\u983B\u9053\u7D81\u5B9A<span class="level_tips" data-v-dc88ad17>(\u8A02\u95B1WO\u983B\u9053)</span></h5>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        target: "_blank",
        to: unref(youtubeURL),
        onClick: ($event) => activateProfileByType("yt")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button type="button" class="${ssrRenderClass([{ "btn-check": !unref(clickedYT), "btn-default": unref(clickedYT) }, "btn btn-block"])}"${ssrIncludeBooleanAttr(unref(clickedYT)) ? " disabled" : ""} data-v-dc88ad17${_scopeId}><i style="${ssrRenderStyle(unref(clickedYT) ? null : { display: "none" })}" class="fa-solid fa-circle-check" data-v-dc88ad17${_scopeId}></i> ${ssrInterpolate(!unref(clickedYT) ? "\u524D\u5F80\u7D81\u5B9A" : "\u5DF2\u7D81\u5B9A")}</button>`);
          } else {
            return [
              createVNode("button", {
                type: "button",
                class: ["btn btn-block", { "btn-check": !unref(clickedYT), "btn-default": unref(clickedYT) }],
                disabled: unref(clickedYT)
              }, [
                withDirectives(createVNode("i", { class: "fa-solid fa-circle-check" }, null, 512), [
                  [vShow, unref(clickedYT)]
                ]),
                createTextVNode(" " + toDisplayString(!unref(clickedYT) ? "\u524D\u5F80\u7D81\u5B9A" : "\u5DF2\u7D81\u5B9A"), 1)
              ], 10, ["disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form><form class="mt-10" data-v-dc88ad17><h5 data-v-dc88ad17>D.IG\u8FFD\u8E64\u7D81\u5B9A<span class="level_tips" data-v-dc88ad17>(\u8A02\u95B1WO IG)</span></h5>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        target: "_blank",
        to: unref(igURL),
        onClick: ($event) => activateProfileByType("ig")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button type="button" class="${ssrRenderClass([{ "btn-check": !unref(clickedIG), "btn-default": unref(clickedIG) }, "btn btn-block"])}"${ssrIncludeBooleanAttr(unref(clickedIG)) ? " disabled" : ""} data-v-dc88ad17${_scopeId}><i style="${ssrRenderStyle(unref(clickedIG) ? null : { display: "none" })}" class="fa-solid fa-circle-check" data-v-dc88ad17${_scopeId}></i> ${ssrInterpolate(!unref(clickedIG) ? "\u524D\u5F80\u7D81\u5B9A" : "\u5DF2\u7D81\u5B9A")}</button>`);
          } else {
            return [
              createVNode("button", {
                type: "button",
                class: ["btn btn-block", { "btn-check": !unref(clickedIG), "btn-default": unref(clickedIG) }],
                disabled: unref(clickedIG)
              }, [
                withDirectives(createVNode("i", { class: "fa-solid fa-circle-check" }, null, 512), [
                  [vShow, unref(clickedIG)]
                ]),
                createTextVNode(" " + toDisplayString(!unref(clickedIG) ? "\u524D\u5F80\u7D81\u5B9A" : "\u5DF2\u7D81\u5B9A"), 1)
              ], 10, ["disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div></div></div>`);
      {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dc88ad17"]]);

export { index as default };
//# sourceMappingURL=index.534b32dc.mjs.map
