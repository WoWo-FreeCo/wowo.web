import { _ as __nuxt_component_0 } from './client-only.6d8d71ff.mjs';
import { h as useRoute, b as useRouter, e as useAuthStore, f as useCartStore, u as useRuntimeConfig, k as USER_LOGIN } from '../server.mjs';
import { ref, withCtx, unref, createVNode, createTextVNode, withDirectives, vModelText, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "forget",
  __ssrInlineRender: true,
  setup(__props) {
    const routes = useRoute();
    const router = useRouter();
    const authStore = useAuthStore();
    useCartStore();
    const config = useRuntimeConfig();
    const inputField = ref({
      email: "",
      password: ""
    });
    async function tryLogin() {
      try {
        const res = await $fetch(`${config.public.apiBase}/${USER_LOGIN}`, {
          method: "POST",
          body: inputField.value
        });
        console.log(res);
        setLoginResponse(res.data);
      } catch (error) {
        if (error.statusCode) {
          alert("\u8ACB\u8F38\u5165\u6B63\u78BA\u7684\u5E33\u865F\u53CA\u5BC6\u78BC");
        }
      }
    }
    function setLoginResponse(data) {
      const { accessToken, refreshToken } = data;
      authStore.loginSuccess(accessToken, refreshToken);
      rediectPath();
    }
    function rediectPath() {
      var _a;
      const redirectPath = (_a = routes.query) == null ? void 0 : _a.redirect;
      if (redirectPath) {
        router.push({ path: redirectPath });
      } else {
        router.push({ path: "/profile" });
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0;
      _push(ssrRenderComponent(_component_client_only, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="full_height mt185ptb30"${_scopeId}><div class="container"${_scopeId}><h3 class="login_tl"${_scopeId}> \u5FD8\u8A18\u5BC6\u78BC<br${_scopeId}>Forget password </h3><div class="contact-form"${_scopeId}><form id="" method="post" action="javascript:;"${_scopeId}><div class="form-group"${_scopeId}><input id="input-field-email"${ssrRenderAttr("value", unref(inputField).email)} type="email" placeholder="Email*" class="form-control" name="" required${_scopeId}></div><div class="form-group"${_scopeId}><input id="input-field-password"${ssrRenderAttr("value", unref(inputField).password)} autocomplete="" type="password" placeholder="\u5BC6\u78BC*" class="form-control" name="" required${_scopeId}></div><div class="text-center"${_scopeId}><input id="input-field-submit" type="submit" class="btn btn-main btn-bag" value="\u9001\u51FA"${_scopeId}></div></form></div></div></section>`);
          } else {
            return [
              createVNode("section", { class: "full_height mt185ptb30" }, [
                createVNode("div", { class: "container" }, [
                  createVNode("h3", { class: "login_tl" }, [
                    createTextVNode(" \u5FD8\u8A18\u5BC6\u78BC"),
                    createVNode("br"),
                    createTextVNode("Forget password ")
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
                          value: "\u9001\u51FA",
                          onClick: tryLogin
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/forget.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=forget.6b8591b3.mjs.map
