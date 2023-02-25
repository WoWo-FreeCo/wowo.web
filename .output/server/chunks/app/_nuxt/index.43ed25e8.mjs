import { _ as _sfc_main$1 } from './UserProfile.1933289b.mjs';
import { _ as _export_sfc, u as useRouter, a as useRuntimeConfig, f as __nuxt_component_0$1 } from '../server.mjs';
import { u as useAuthStore } from './authStore.b053acfb.mjs';
import { computed, ref, mergeProps, withCtx, createTextVNode, unref, createVNode, withDirectives, vShow, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { P as POST_USER_ACTIVATATION, a as GET_PROFILE } from './requestURL.0620ad9b.mjs';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    useRouter();
    const runtimeConfig = useRuntimeConfig();
    const config = useRuntimeConfig();
    const authUser = computed(() => authStore == null ? void 0 : authStore.user);
    const clickedFB = ref(false);
    const clickedYT = ref(false);
    const clickedIG = ref(false);
    const igURL = ref("https://www.instagram.com/lovin.520/");
    const youtubeURL = ref("https://youtu.be/9RITDp0BBUw");
    const fbURL = ref("https://www.facebook.com/LOVIN2022");
    const inputVIPCode = ref("");
    const inputSVIPCode = ref("");
    const currentLevel = computed(() => {
      if (authUser.value.SVIPActivated)
        return "SVIP";
      else if (authUser.value.VIPActivated)
        return "VIP";
      else
        return "\u666E\u901A\u6703\u54E1";
    });
    async function updatePermission() {
      var _a, _b;
      try {
        const accessToken = localStorage.getItem("accessToken");
        const res = await $fetch(`${config.public.apiBase}/${GET_PROFILE}`, {
          method: "GET",
          headers: { Authorization: "Bearer " + accessToken }
        });
        authStore.loginSuccess(accessToken);
        authStore.updateUser(res.data);
        clickedFB.value = (_a = res.data) == null ? void 0 : _a.FacebookGroupActivated;
        clickedYT.value = (_b = res.data) == null ? void 0 : _b.YouTubeChannelActivated;
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
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "full_height mt185ptb30 pt0" }, _attrs))} data-v-b8aa4ddc>`);
      _push(ssrRenderComponent(_component_UserProfile, null, null, _parent));
      _push(`<div class="row" data-v-b8aa4ddc><div class="col-sm-3 p-0 bg_left" data-v-b8aa4ddc><div id="member_menu" class="panel-group commonAccordion" data-v-b8aa4ddc><div class="panel panel-default" data-v-b8aa4ddc><div id="headingOne" class="panel-heading" role="tab" data-v-b8aa4ddc><h4 class="panel-title" data-v-b8aa4ddc><a role="button" data-toggle="collapse" data-parent="#member_menu" href="#collapseOne" aria-expanded="f" aria-controls="collapseOne" data-v-b8aa4ddc> \u6703\u54E1\u8CC7\u6599 </a></h4></div><div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne" data-v-b8aa4ddc><ul data-v-b8aa4ddc><li class="active" data-v-b8aa4ddc>`);
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
      _push(`</li><li data-v-b8aa4ddc>`);
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
      _push(`</li></ul></div></div></div></div><div class="col-sm-9 pl20pr30" data-v-b8aa4ddc><div class="contact-form" data-v-b8aa4ddc><form id="" method="post" action="" data-v-b8aa4ddc><h4 class="mb-20" data-v-b8aa4ddc> \u6703\u54E1\u57FA\u672C\u8CC7\u8A0A </h4><div class="form-group" data-v-b8aa4ddc><label data-v-b8aa4ddc>\u59D3\u540D*</label><input id="auth-realname"${ssrRenderAttr("value", unref(authUser).realname)} type="text" placeholder="\u59D3\u540D*" class="form-control" name="" required data-v-b8aa4ddc></div><div class="form-group" data-v-b8aa4ddc><label data-v-b8aa4ddc>\u66B1\u7A31*</label><input id="auth-nickname"${ssrRenderAttr("value", unref(authUser).nickname)} type="text" placeholder="\u66B1\u7A31*" class="form-control" name="" required data-v-b8aa4ddc></div><div class="form-group" data-v-b8aa4ddc><label data-v-b8aa4ddc>Email*</label><input id="auth-email"${ssrRenderAttr("value", unref(authUser).email)} type="email" placeholder="Email*" class="form-control" name="" required data-v-b8aa4ddc><span class="level_tips" data-v-b8aa4ddc>\u6B64\u4FE1\u7BB1\u70BA\u6703\u54E1\u8B58\u5225\u6191\u8B49\u53CA\u901A\u77E5\u7528\uFF0C\u4E00\u65E6\u8A3B\u518A\u6210\u529F\u5C07\u7121\u6CD5\u518D\u505A\u4FEE\u6539\uFF0C\u8ACB\u78BA\u8A8D\u5F8C\u586B\u5BEB\u3002</span></div><div class="form-group" data-v-b8aa4ddc><label data-v-b8aa4ddc>\u5BC6\u78BC*</label><input id="auth-password"${ssrRenderAttr("value", unref(authUser).password)} type="password" placeholder="\u5BC6\u78BC*" class="form-control" name="" required autocomplete="" data-v-b8aa4ddc></div><div class="form-group" data-v-b8aa4ddc><label data-v-b8aa4ddc>\u624B\u6A5F*</label><input id="auth-mobile"${ssrRenderAttr("value", unref(authUser).telephone)} type="text" placeholder="\u624B\u6A5F*" class="form-control" name="" required data-v-b8aa4ddc></div><div class="form-group" data-v-b8aa4ddc><label data-v-b8aa4ddc>\u5E02\u8A71*</label><input id="auth-tele"${ssrRenderAttr("value", unref(authUser).telephone)} type="text" placeholder="\u5E02\u8A71*" class="form-control" name="" required data-v-b8aa4ddc></div><div class="form-group" data-v-b8aa4ddc><label data-v-b8aa4ddc>\u9001\u8CA8\u5730\u5740*</label><input id="auth-address1"${ssrRenderAttr("value", unref(authUser).addressOne)} type="text" placeholder="\u9001\u8CA8\u5730\u5740*" class="form-control" name="" required data-v-b8aa4ddc></div><div class="form-group" data-v-b8aa4ddc><label data-v-b8aa4ddc>\u9001\u8CA8\u5730\u57402</label><input id="auth-address2"${ssrRenderAttr("value", unref(authUser).addressTwo)} type="text" placeholder="\u9001\u8CA8\u5730\u57402" class="form-control" name="" data-v-b8aa4ddc></div><div class="form-group" data-v-b8aa4ddc><label data-v-b8aa4ddc>\u9001\u8CA8\u5730\u57403</label><input id="auth-address3"${ssrRenderAttr("value", unref(authUser).addressThree)} type="text" placeholder="\u9001\u8CA8\u5730\u57403" class="form-control" name="" data-v-b8aa4ddc></div><div class="text-center" data-v-b8aa4ddc><button type="reset" class="btn btn-main btn-default" data-v-b8aa4ddc> \u53D6\u6D88\u91CD\u586B </button><input id="edit-confirm" type="submit" class="btn btn-main btn-bag" value="\u78BA\u8A8D\u9001\u51FA" data-v-b8aa4ddc></div></form></div></div></div><div class="bg_left2" data-v-b8aa4ddc><div id="member_vip" class="level_frame" data-v-b8aa4ddc><h3 class="level_tl" data-v-b8aa4ddc><span data-v-b8aa4ddc>\u76EE\u524D\u7D1A\u5225\uFF1A</span>${ssrInterpolate(unref(currentLevel))} <a href="#" data-toggle="modal" data-target="#vipdesc" data-v-b8aa4ddc><i class="fa-solid fa-circle-question" data-v-b8aa4ddc></i> <u data-v-b8aa4ddc>\u67E5\u770B\u5347\u7B49\u65B9\u5F0F</u></a></h3><div class="row level_content" data-v-b8aa4ddc>`);
      if (!unref(authUser).VIPActivated) {
        _push(`<div data-v-b8aa4ddc><h4 data-v-b8aa4ddc>\u6211\u8981\u89E3\u9396\u6210\u70BA<span data-v-b8aa4ddc>VIP</span>\uFF1A<span class="level_tips" data-v-b8aa4ddc>\u300EA.\u7D81\u5B9AVIP\u63A8\u85A6\u4EBA\u300F+\u300EB.\u6309\u8B9AWO\u7C89\u7D72\u5718\u6216C.\u8A02\u95B1WO\u983B\u9053\u300F\uFF0C\u5373\u53EF\u6210\u70BAVIP!</span></h4></div>`);
      } else {
        _push(`<div data-v-b8aa4ddc><h4 data-v-b8aa4ddc>\u6211\u8981\u89E3\u9396\u6210\u70BA<span data-v-b8aa4ddc>SVIP</span>\uFF1A<span class="level_tips" data-v-b8aa4ddc>\u300ED.\u7D81\u5B9ASVIP\u6FC0\u6D3B\u78BC\u300F\u6216\u300EB.\u6309\u8B9AWO\u7C89\u7D72\u5718+C.\u8A02\u95B1WO\u983B\u9053\u300F\uFF0C\u5373\u53EF\u6210\u70BASVIP!</span></h4></div>`);
      }
      if (!unref(authUser).VIPActivated) {
        _push(`<div class="col-sm-6 border-right" data-v-b8aa4ddc><h5 data-v-b8aa4ddc>A.VIP\u63A8\u85A6\u4EBA<span class="level_tips" data-v-b8aa4ddc>(\u7D81\u5B9A\u63A8\u85A6\u4EBA\u5E33\u865F\u5F8C\u5C07\u7121\u6CD5\u89E3\u9396\uFF01)</span></h5><form id="vip_rec" action="javascript:;" class="form-group" data-v-b8aa4ddc><input style="${ssrRenderStyle(!unref(authUser).VIPActivated ? null : { display: "none" })}"${ssrRenderAttr("value", unref(inputVIPCode))} type="text" placeholder="\u8ACB\u8F38\u5165VIP\u63A8\u85A6\u5E33\u865F (\u6703\u54E1\u5E33\u865F)" class="form-control" data-v-b8aa4ddc><button type="button" class="${ssrRenderClass([{ "btn-check": !unref(authUser).VIPActivated, "btn-default": unref(authUser).VIPActivated }, "btn btn-block"])}"${ssrIncludeBooleanAttr(unref(authUser).VIPActivated) ? " disabled" : ""} data-v-b8aa4ddc><i style="${ssrRenderStyle(unref(authUser).VIPActivated ? null : { display: "none" })}" class="fa-solid fa-circle-check" data-v-b8aa4ddc></i> ${ssrInterpolate(!unref(authUser).VIPActivated ? "\u524D\u5F80\u7D81\u5B9A" : "\u5DF2\u7D81\u5B9A")}</button></form></div>`);
      } else {
        _push(`<div class="col-sm-6 border-right" data-v-b8aa4ddc><h5 data-v-b8aa4ddc>D.SVIP\u6FC0\u6D3B\u78BC<span class="level_tips" data-v-b8aa4ddc>(\u7D81\u5B9A\u63A8\u85A6\u4EBA\u5E33\u865F\u5F8C\u5C07\u7121\u6CD5\u89E3\u9396\uFF01)</span></h5><form id="svip_rec" action="javascript:;" class="form-group" data-v-b8aa4ddc><input style="${ssrRenderStyle(!unref(authUser).SVIPActivated ? null : { display: "none" })}"${ssrRenderAttr("value", unref(inputSVIPCode))} type="text" placeholder="\u8ACB\u8F38\u5165SVIP\u6FC0\u6D3B\u78BC" class="form-control" data-v-b8aa4ddc><button type="button" class="${ssrRenderClass([{ "btn-check": !unref(authUser).SVIPActivated, "btn-default": unref(authUser).SVIPActivated }, "btn btn-block"])}"${ssrIncludeBooleanAttr(unref(authUser).SVIPActivated) ? " disabled" : ""} data-v-b8aa4ddc><i style="${ssrRenderStyle(unref(authUser).SVIPActivated ? null : { display: "none" })}" class="fa-solid fa-circle-check" data-v-b8aa4ddc></i> ${ssrInterpolate(!unref(authUser).SVIPActivated ? "\u524D\u5F80\u7D81\u5B9A" : "\u5DF2\u7D81\u5B9A")}</button></form></div>`);
      }
      _push(`<div class="col-sm-6" data-v-b8aa4ddc><form data-v-b8aa4ddc><h5 data-v-b8aa4ddc>B.FB\u7C89\u7D72\u7D81\u5B9A<span class="level_tips" data-v-b8aa4ddc>(\u6309\u8B9AWO\u7C89\u7D72\u5718)</span></h5>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        target: "_blank",
        to: unref(fbURL),
        onClick: ($event) => activateProfileByType("fb")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button type="button" class="${ssrRenderClass([{ "btn-check": !unref(clickedFB), "btn-default": unref(clickedFB) }, "btn btn-block"])}"${ssrIncludeBooleanAttr(unref(clickedFB)) ? " disabled" : ""} data-v-b8aa4ddc${_scopeId}><i style="${ssrRenderStyle(unref(clickedFB) ? null : { display: "none" })}" class="fa-solid fa-circle-check" data-v-b8aa4ddc${_scopeId}></i> ${ssrInterpolate(!unref(clickedFB) ? "\u524D\u5F80\u7D81\u5B9A" : "\u5DF2\u7D81\u5B9A")}</button>`);
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
      _push(`</form><form class="mt-10" data-v-b8aa4ddc><h5 data-v-b8aa4ddc>C.Youtube\u983B\u9053\u7D81\u5B9A<span class="level_tips" data-v-b8aa4ddc>(\u8A02\u95B1WO\u983B\u9053)</span></h5>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        target: "_blank",
        to: unref(youtubeURL),
        onClick: ($event) => activateProfileByType("yt")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button type="button" class="${ssrRenderClass([{ "btn-check": !unref(clickedYT), "btn-default": unref(clickedYT) }, "btn btn-block"])}"${ssrIncludeBooleanAttr(unref(clickedYT)) ? " disabled" : ""} data-v-b8aa4ddc${_scopeId}><i style="${ssrRenderStyle(unref(clickedYT) ? null : { display: "none" })}" class="fa-solid fa-circle-check" data-v-b8aa4ddc${_scopeId}></i> ${ssrInterpolate(!unref(clickedYT) ? "\u524D\u5F80\u7D81\u5B9A" : "\u5DF2\u7D81\u5B9A")}</button>`);
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
      _push(`</form><form class="mt-10" data-v-b8aa4ddc><h5 data-v-b8aa4ddc>D.IG\u8FFD\u8E64\u7D81\u5B9A<span class="level_tips" data-v-b8aa4ddc>(\u8A02\u95B1WO IG)</span></h5>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        target: "_blank",
        to: unref(igURL),
        onClick: ($event) => activateProfileByType("ig")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button type="button" class="${ssrRenderClass([{ "btn-check": !unref(clickedIG), "btn-default": unref(clickedIG) }, "btn btn-block"])}"${ssrIncludeBooleanAttr(unref(clickedIG)) ? " disabled" : ""} data-v-b8aa4ddc${_scopeId}><i style="${ssrRenderStyle(unref(clickedIG) ? null : { display: "none" })}" class="fa-solid fa-circle-check" data-v-b8aa4ddc${_scopeId}></i> ${ssrInterpolate(!unref(clickedIG) ? "\u524D\u5F80\u7D81\u5B9A" : "\u5DF2\u7D81\u5B9A")}</button>`);
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b8aa4ddc"]]);

export { index as default };
//# sourceMappingURL=index.43ed25e8.mjs.map
