import { _ as _export_sfc, g as useRoute, b as useRouter, u as useRuntimeConfig, f as __nuxt_component_0$1 } from '../server.mjs';
import { ref, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { useMessage } from 'naive-ui';
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
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useRouter();
    useRuntimeConfig();
    useMessage();
    const inputField = ref({
      recommendedAccount: "",
      email: "",
      password: "",
      nickname: "",
      cellphone: "",
      telephone: "",
      addressOne: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-bb733b1d><section class="full_height mt185ptb30" data-v-bb733b1d><div class="container" data-v-bb733b1d><h3 class="login_tl" data-v-bb733b1d> \u6703\u54E1\u8A3B\u518A<br data-v-bb733b1d>Register </h3><div class="contact-form" data-v-bb733b1d><form id="" action="javascript:;" role="form" data-v-bb733b1d><div class="form-group" data-v-bb733b1d><label data-v-bb733b1d>\u63A8\u85A6\u5E33\u865F</label><input id="wb-recommended-account"${ssrRenderAttr("value", unref(inputField).recommendedAccount)} type="text" placeholder="\u8ACB\u8F38\u5165\u63A8\u85A6\u5E33\u865F" class="form-control" name="wb-recommended-account" data-v-bb733b1d></div><div class="form-group" data-v-bb733b1d><label data-v-bb733b1d>\u59D3\u540D*</label><input id="wb-nickname"${ssrRenderAttr("value", unref(inputField).nickname)} type="text" placeholder="\u8ACB\u8F38\u5165\u771F\u5BE6\u59D3\u540D" class="form-control" name="" required data-v-bb733b1d></div><div class="form-group" data-v-bb733b1d><label data-v-bb733b1d>Email*</label><input id="wb-email"${ssrRenderAttr("value", unref(inputField).email)} type="email" placeholder="\u8ACB\u8F38\u5165 Email" class="form-control" name="" required data-v-bb733b1d><span class="level_tips" data-v-bb733b1d>\u6B64\u4FE1\u7BB1\u70BA\u767B\u5165\u5E33\u865F,\u53CA\u901A\u77E5\u9A57\u8A3C\u4F7F\u7528,\u8ACB\u78BA\u5BE6\u586B\u5BEB</span></div><div class="form-group" data-v-bb733b1d><label data-v-bb733b1d>\u5BC6\u78BC*</label><input id="wb-password"${ssrRenderAttr("value", unref(inputField).password)} type="password" placeholder="\u8ACB\u8F38\u5165\u5BC6\u78BC" class="form-control" name="" required autocomplete="" data-v-bb733b1d></div><div class="form-group" data-v-bb733b1d><label data-v-bb733b1d>\u624B\u6A5F*</label><input id="wb-cellphone"${ssrRenderAttr("value", unref(inputField).cellphone)} type="text" placeholder="\u8ACB\u8F38\u5165\u624B\u6A5F\u865F\u78BC" class="form-control" name="" required data-v-bb733b1d></div><div class="form-group" data-v-bb733b1d><label data-v-bb733b1d>\u9001\u8CA8\u5730\u5740*</label><input id="wb-address1"${ssrRenderAttr("value", unref(inputField).addressOne)} type="text" placeholder="\u8ACB\u8F38\u5165\u9001\u8CA8\u5730\u5740" class="form-control" name="" required data-v-bb733b1d></div><div class="text-center" data-v-bb733b1d><button type="reset" class="btn btn-main btn-default" data-v-bb733b1d> \u53D6\u6D88\u91CD\u586B </button><input id="wb-reg-confirm" type="submit" class="btn btn-main btn-bag" value="\u78BA\u8A8D\u9001\u51FA" data-v-bb733b1d></div></form><div class="other_function" data-v-bb733b1d> \u5DF2\u6709\u5E33\u865F? `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "btn btn-block btn-bag",
        to: "/login"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u6703\u54E1\u767B\u5165 `);
          } else {
            return [
              createTextVNode(" \u6703\u54E1\u767B\u5165 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const register = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bb733b1d"]]);

export { register as default };
//# sourceMappingURL=register.e3c94cc9.mjs.map
