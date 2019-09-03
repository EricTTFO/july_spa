<template>
  <div class="home">
    <Menu />
    <div class="cover">
      <div class="content">
        <!-- <router-view /> -->
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from "../components/Menu";
import Footer from "../components/Footer";
export default {
  name: "home",
  components: {
    Menu,
    Footer
  }
};
</script>
