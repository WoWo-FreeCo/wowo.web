export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$router.options.scrollBehavior = () => {
    document.body.scrollTop = 0;
    // hacking fix
  };
});
