<template>
  <div id="app">
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>
<script>
// import "../src/assets/rem";
import Header from "@/components/header/header.vue";
import Footer from "@/components/footer/footer.vue";
export default {
  data() {
    return {};
  },
  components: { Header, Footer }
};
</script>
<style lang="scss">
#app {
  margin: 0px;
  padding: 0px;
  background: #ffffff;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
  color: #222222;
}
.overHiden {
  position: fixed;

  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.bannertop {
  width: 10rem;
  height: 3.733rem;
  background-position: center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
}
.el-message-box__wrapper {
  width: 100% !important;
  height: 100% !important;
}
.el-message-box {
  width: 80% !important;
  height: 70%;
  overflow: scroll !important;
  z-index: 2002 !important;
}
.title_all {
  .span {
    margin-top: -2px;
  }
}
</style>
