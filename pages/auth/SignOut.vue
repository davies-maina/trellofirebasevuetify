<template>
  <div>
    <h1>Sign out</h1>
  </div>
</template>
<script>
export default {
  asyncData() {
    $nuxt.$fire.auth.signOut();
  },
};
</script>