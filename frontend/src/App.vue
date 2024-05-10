<template>

<LoadingApp v-if="loading"/> 
  <div v-else>
    <NavbarApp />
    <router-view> </router-view>
    <FooterApp />
  </div>

</template>
<script>

import NavbarApp from "./components/Navbar.vue";
import FooterApp from "./components/Footer.vue";
import LoadingApp from "./components/Loading.vue";
import { onMounted, ref } from "vue";

export default {
  name: "App",
  components: {
    // parentApp,
    NavbarApp,
    FooterApp,
    LoadingApp,
  },
  setup() {
    const loading = ref(true);
    const loadingImage = () => {
      setTimeout(() => {
        loading.value = false;
      }, 1500);
    };

    onMounted(() => {
      loadingImage();
    });
    return {
      loading,
    };
  },
};
</script>

<style>
</style>
