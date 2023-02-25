// import { getMountains } from '@/apis/mountain.api';

import APIService from '~~/apis/service.api';

export default defineNuxtPlugin(() => {
  // const api = {
  //   mountain: { getMountains }
  // };
  const config = useRuntimeConfig();
  const api = new APIService(config.public.apiBase);
  return {
    provide: {
      api
    }
  };
});
