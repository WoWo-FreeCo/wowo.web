import { c as useNuxtApp } from '../server.mjs';

function useHead(input, options) {
  return useNuxtApp()._useHead(input, options);
}

export { useHead as u };
//# sourceMappingURL=composables.ad0edea2.mjs.map
