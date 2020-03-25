<template>
  <div class="mapping">
    <!-- 顶部banner -->
    <div class="bannertop" :style="{background: 'url('+bannertop_img.image+')'}">
      <!-- <img :src="bannertop_img.image" alt /> -->
    </div>
    <div class="content1">
      <!-- 标题 -->
      <div class="title_all">
        <span class="span"></span>
        <p>经典案例</p>
      </div>
      <div class="word">
        <img class="word_img" src="../../assets/imgs/assetss/assetss4.png" alt />
      </div>
    </div>
    <!-- 侧边按钮 -->
    <Sidebarpopup></Sidebarpopup>
  </div>
</template>

<script>
import Sidebarpopup from "../../components/Sidebarpopup/Sidebarpopup";
export default {
  data() {
    return {
      bannertop_img: ""
    };
  },
  components: { Sidebarpopup },
  created() {
    sessionStorage.setItem("add", "classic-case");
    this.banner();
    // this.productsfn();
  },
  mounted() {
    this.$router.afterEach((from, next) => {
      window.scrollTo(0, 0);
    });
  },
  methods: {
    //axios请求轮播图
    banner: function() {
      this.$api.get(
        "banners/product-child",
        {
          page: 1,
          pageSize: 10
        },
        response => {
          if (response.status >= 200 && response.status < 300) {
            // console.log(response.data); //请求成功，response为成功信息参数
            this.bannertop_img = response.data.data[0];
          } else {
            console.log(response.message); //请求失败，response为失败信息
          }
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
@import "classiccase.scss";
</style>