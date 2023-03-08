import { _ as __nuxt_component_0 } from './client-only.6d8d71ff.mjs';
import { u as useAuthStore } from './authStore.f454b93f.mjs';
import { _ as _export_sfc, a as useRouter } from '../server.mjs';
import { useSSRContext, defineComponent, ref, h } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { NIcon } from 'naive-ui';
import { Person, EllipsisHorizontal } from '@vicons/ionicons5';
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
        label: "\u7BA1\u7406\u9801\u9762",
        key: "manager-list",
        icon: renderIcon(Person),
        children: [
          {
            icon: renderIcon(EllipsisHorizontal),
            label: "\u6240\u6709\u7522\u54C1\u5206\u985E",
            key: "product-category-management-all"
          },
          {
            icon: renderIcon(EllipsisHorizontal),
            label: "\u6240\u6709\u7522\u54C1",
            key: "product-management-all"
          },
          {
            icon: renderIcon(EllipsisHorizontal),
            label: "\u6240\u6709\u6A6B\u5E45",
            key: "home-banner-management-all"
          },
          {
            icon: renderIcon(EllipsisHorizontal),
            label: "\u9801\u5C3E\u8CC7\u8A0A",
            key: "web-page-management-all"
          },
          {
            icon: renderIcon(EllipsisHorizontal),
            label: "\u6240\u6709\u7528\u6236",
            key: "user-management-all"
          },
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-30bccd75"]]);

export { index as default };
//# sourceMappingURL=index.d7f47334.mjs.map
