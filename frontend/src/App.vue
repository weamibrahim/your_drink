<template>
<NavbarApp/>
<router-view>
  
</router-view>

<FooterApp/>
</template>
<script>

import NavbarApp from './components/Navbar.vue';
import FooterApp from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    // parentApp,
    NavbarApp,
    FooterApp

  }
}
</script>

<style>


</style>
