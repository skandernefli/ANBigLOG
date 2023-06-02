<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
  </div>
</template>
<script>
export default {
  beforeRouteUpdate(to, from, next) {
    // Force the component to reload when navigating to the same route with different props
    if (to.fullPath === from.fullPath) {
      // Force a full component reload
      next(vm => vm.$destroy());
    } else {
      next();
    }
  },
};
</script>