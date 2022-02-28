<template>
  <div>
    <Header />
    <div class="ui grid">
      <div class="sixteen wide column"></div>
      <div class="four wide column">
        <SideBar /> 
      </div>
      <div class="twelve wide column ">
        <router-view/>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import SideBar from "../components/SideBar.vue";

export default {
  name: "Home",
  components: {
    Footer,
    Header,
    SideBar,
  },
};
</script>
