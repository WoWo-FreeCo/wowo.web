import { _ as __nuxt_component_0 } from './client-only.6d8d71ff.mjs';
import { u as useAuthStore } from './authStore.b053acfb.mjs';
import { _ as _export_sfc, u as useRouter } from '../server.mjs';
import { useSSRContext, defineComponent, ref, h } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { NIcon } from 'naive-ui';
import { Person, EllipsisHorizontal, Cart, Book } from '@vicons/ionicons5';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    useRouter();
    ref(true);
    function renderIcon(icon) {
      return () => h(NIcon, null, { default: () => h(icon) });
    }
    ref([
      {
        label: "\u6703\u54E1\u7BA1\u7406",
        key: "account-management",
        icon: renderIcon(Person),
        disabled: true,
        children: [
          {
            icon: renderIcon(EllipsisHorizontal),
            label: "\u6240\u6709\u7528\u6236",
            key: "account-management-all"
          }
        ]
      },
      {
        label: "\u7522\u54C1\u7BA1\u7406",
        key: "product-management",
        icon: renderIcon(Cart),
        children: [
          {
            icon: renderIcon(EllipsisHorizontal),
            label: "\u6240\u6709\u7522\u54C1",
            key: "product-management-all"
          }
        ]
      },
      {
        label: "\u8A02\u55AE\u7BA1\u7406",
        key: "order-management",
        icon: renderIcon(Book),
        children: [
          {
            icon: renderIcon(EllipsisHorizontal),
            label: "\u6240\u6709\u8A02\u55AE",
            key: "order-management-all"
          }
        ]
      }
    ]);
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0;
      _push(ssrRenderComponent(_component_client_only, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6421318c"]]);

export { index as default };
//# sourceMappingURL=index.8e2ac3f5.mjs.map
