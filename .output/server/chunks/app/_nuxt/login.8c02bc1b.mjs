import { _ as __nuxt_component_0 } from './client-only.6d8d71ff.mjs';
import { g as useRoute, b as useRouter, a as useAuthStore, u as useRuntimeConfig, f as __nuxt_component_0$1 } from '../server.mjs';
import { ref, withCtx, unref, createTextVNode, createVNode, withDirectives, vModelText, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { useMessage } from 'naive-ui';
import { U as USER_LOGIN, b as GET_PROFILE } from './requestURL.38b8c357.mjs';
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
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const routes = useRoute();
    const router = useRouter();
    const message = useMessage();
    const authStore = useAuthStore();
    const config = useRuntimeConfig();
    const inputField = ref({
      email: "",
      password: ""
    });
    function execGoogleLogin() {
      if (!google)
        return;
      google.accounts.id.prompt();
    }
    async function tryLogin() {
      try {
        const res = await $fetch(`${config.public.apiBase}/${USER_LOGIN}`, {
          method: "POST",
          body: inputField.value
        });
        setLoginResponse(res.data);
        message.success("\u767B\u5165\u6210\u529F");
      } catch (error) {
        if (error.statusCode) {
          message.error("\u8ACB\u8F38\u5165\u6B63\u78BA\u7684\u5E33\u865F\u53CA\u5BC6\u78BC");
        }
      }
    }
    async function setLoginResponse(data) {
      const { accessToken, refreshToken } = data;
      authStore.loginSuccess(accessToken, refreshToken);
      const res = await $fetch(`${config.public.apiBase}/${GET_PROFILE}`, {
        method: "GET",
        headers: { Authorization: "Bearer " + accessToken }
      });
      authStore.updateUser(res.data);
      rediectPath();
    }
    function rediectPath() {
      var _a;
      const redirectPath = (_a = routes.query) == null ? void 0 : _a.redirect;
      if (redirectPath) {
        const query = { ...routes.query };
        delete query.redirect;
        router.push({ path: redirectPath, query });
      } else {
        router.push({ path: "/profile" });
      }
    }
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_client_only, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="full_height mt185ptb30"${_scopeId}><div class="container"${_scopeId}><h3 class="login_tl"${_scopeId}> \u6703\u54E1\u767B\u5165<br${_scopeId}>Login </h3><div class="social_login"${_scopeId}> \u4F7F\u7528\uFF1A <button id="google-login" class="btn btn-check bg-google" style="${ssrRenderStyle({ "margin": "4px" })}"${_scopeId}><i class="fa-brands fa-google-plus-g"${_scopeId}></i> Google\u5E33\u865F\u767B\u5165 </button></div><div class="contact-form"${_scopeId}><form id="" method="post" action="javascript:;"${_scopeId}><div class="form-group"${_scopeId}><input id="input-field-email"${ssrRenderAttr("value", unref(inputField).email)} type="email" placeholder="Email*" class="form-control" name="" required${_scopeId}></div><div class="form-group"${_scopeId}><input id="input-field-password"${ssrRenderAttr("value", unref(inputField).password)} autocomplete="" type="password" placeholder="\u5BC6\u78BC*" class="form-control" name="" required${_scopeId}></div><div class="text-center"${_scopeId}><input id="input-field-submit" type="submit" class="btn btn-main btn-bag" value="\u6211\u8981\u767B\u5165"${_scopeId}></div></form><div class="other_function"${_scopeId}> \u6C92\u6709\u5E33\u865F? <div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              class: "btn btn-block btn-bag",
              to: "/register"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u6703\u54E1\u8A3B\u518A `);
                } else {
                  return [
                    createTextVNode(" \u6703\u54E1\u8A3B\u518A ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div></section>`);
          } else {
            return [
              createVNode("section", { class: "full_height mt185ptb30" }, [
                createVNode("div", { class: "container" }, [
                  createVNode("h3", { class: "login_tl" }, [
                    createTextVNode(" \u6703\u54E1\u767B\u5165"),
                    createVNode("br"),
                    createTextVNode("Login ")
                  ]),
                  createVNode("div", { class: "social_login" }, [
                    createTextVNode(" \u4F7F\u7528\uFF1A "),
                    createVNode("button", {
                      id: "google-login",
                      class: "btn btn-check bg-google",
                      style: { "margin": "4px" },
                      onClick: execGoogleLogin
                    }, [
                      createVNode("i", { class: "fa-brands fa-google-plus-g" }),
                      createTextVNode(" Google\u5E33\u865F\u767B\u5165 ")
                    ])
                  ]),
                  createVNode("div", { class: "contact-form" }, [
                    createVNode("form", {
                      id: "",
                      method: "post",
                      action: "javascript:;"
                    }, [
                      createVNode("div", { class: "form-group" }, [
                        withDirectives(createVNode("input", {
                          id: "input-field-email",
                          "onUpdate:modelValue": ($event) => unref(inputField).email = $event,
                          type: "email",
                          placeholder: "Email*",
                          class: "form-control",
                          name: "",
                          required: ""
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(inputField).email]
                        ])
                      ]),
                      createVNode("div", { class: "form-group" }, [
                        withDirectives(createVNode("input", {
                          id: "input-field-password",
                          "onUpdate:modelValue": ($event) => unref(inputField).password = $event,
                          autocomplete: "",
                          type: "password",
                          placeholder: "\u5BC6\u78BC*",
                          class: "form-control",
                          name: "",
                          required: ""
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(inputField).password]
                        ])
                      ]),
                      createVNode("div", { class: "text-center" }, [
                        createVNode("input", {
                          id: "input-field-submit",
                          type: "submit",
                          class: "btn btn-main btn-bag",
                          value: "\u6211\u8981\u767B\u5165",
                          onClick: tryLogin
                        })
                      ])
                    ]),
                    createVNode("div", { class: "other_function" }, [
                      createTextVNode(" \u6C92\u6709\u5E33\u865F? "),
                      createVNode("div", { onClick: scrollToTop }, [
                        createVNode(_component_NuxtLink, {
                          class: "btn btn-block btn-bag",
                          to: "/register"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u6703\u54E1\u8A3B\u518A ")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login.8c02bc1b.mjs.map
