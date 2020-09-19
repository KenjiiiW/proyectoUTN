<template>
<div>
  <v-app>
  <Navbar  @click-enviado="cambiarDrawer" /> <!-- aqui se utiliza el evento emitido en navbar -->
  <menu-nav ref="menu"/> <!-- hago referencia a un menu que luego se utiliza en el metodo cambiarDrawer -->
  <Footer />
  <v-main>
      <router-view></router-view>
  </v-main>
  </v-app>
</div>


</template>

<script>
import Navbar from './components/Navbar.vue'
import MenuNav from './components/MenuNav.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',

  components: {
    Navbar,
    MenuNav,
    Footer
  },

  data() {
    return {
    }
  },
  methods: {
    cambiarDrawer (){
      this.$refs.menu.ocultarDrawer()  //este metodo hace que se ejecute el metodo en el componente menunav
    }
  }
};
</script>

<style scoped>
  #app {
    background-image: url('./assets/facultad.jpg');
    background-size: 1920px 1000px;
    background-attachment: fixed;
    position: relative;
  }
</style>
