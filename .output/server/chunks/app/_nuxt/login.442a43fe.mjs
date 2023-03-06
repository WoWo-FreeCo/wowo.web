import { _ as __nuxt_component_0 } from './client-only.6d8d71ff.mjs';
import { a as useRouter, u as useRuntimeConfig } from '../server.mjs';
import { ref, withCtx, unref, createVNode, createTextVNode, withDirectives, vModelText, useSSRContext } from 'vue';
import { u as useAuthStore } from './authStore.add3fcb6.mjs';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { A as ADMIN_LOGIN, G as GET_ADMIN_PROFILE } from './requestURL.ee907d97.mjs';
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
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const authStore = useAuthStore();
    const config = useRuntimeConfig();
    const inputField = ref({
      email: "",
      password: ""
    });
    async function tryLogin() {
      try {
        const res = await $fetch(`${config.public.apiBase}/${ADMIN_LOGIN}`, {
          method: "POST",
          body: inputField.value
        });
        setLoginResponse(res.data);
        console.log(res);
      } catch (error) {
        console.log(error);
        if (error.statusCode) {
          alert("\u8ACB\u8F38\u5165\u6B63\u78BA\u7684\u7BA1\u7406\u5E33\u865F\u53CA\u5BC6\u78BC");
        }
      }
    }
    async function setLoginResponse(data) {
      const { accessToken } = data;
      authStore.loginSuccess(accessToken);
      const res = await $fetch(`${config.public.apiBase}/${GET_ADMIN_PROFILE}`, {
        method: "GET",
        headers: { Authorization: "Bearer " + accessToken }
      });
      authStore.updateUser(res.data);
      rediectPath();
    }
    function rediectPath() {
      router.push("/admin");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0;
      _push(ssrRenderComponent(_component_client_only, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="full_height mt185ptb30"${_scopeId}><div class="container"${_scopeId}><h3 class="login_tl"${_scopeId}> \u7BA1\u7406\u8005\u767B\u5165<br${_scopeId}>Login </h3><div class="contact-form"${_scopeId}><form id="" method="post" action="javascript:;"${_scopeId}><div class="form-group"${_scopeId}><input id="input-field-email"${ssrRenderAttr("value", unref(inputField).email)} type="email" placeholder="Email*" class="form-control" name="" required${_scopeId}></div><div class="form-group"${_scopeId}><input id="input-field-password"${ssrRenderAttr("value", unref(inputField).password)} autocomplete="" type="password" placeholder="\u5BC6\u78BC*" class="form-control" name="" required${_scopeId}></div><div class="text-center"${_scopeId}><input id="input-field-submit" type="submit" class="btn btn-main btn-bag" value="\u7BA1\u7406\u8005\u767B\u5165"${_scopeId}></div></form></div></div></section>`);
          } else {
            return [
              createVNode("section", { class: "full_height mt185ptb30" }, [
                createVNode("div", { class: "container" }, [
                  createVNode("h3", { class: "login_tl" }, [
                    createTextVNode(" \u7BA1\u7406\u8005\u767B\u5165"),
                    createVNode("br"),
                    createTextVNode("Login ")
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
                          value: "\u7BA1\u7406\u8005\u767B\u5165",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login.442a43fe.mjs.map
