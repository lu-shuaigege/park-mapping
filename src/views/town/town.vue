<template>
  <div class="mapping">
    <!-- 顶部banner -->
    <div class="bannertop" :style="{background: 'url('+bannertop_img.image+')'}">
      <!-- <img :src="bannertop_img.image" alt /> -->
    </div>
    <div class="content2">
      <!-- 标题 -->
      <div class="title_all">
        <span class="span"></span>
        <p>审批服务综合执法一体化平台</p>
      </div>
      <p
        class="title"
      >围绕地理信息、大数据、移动互联网、物联感知等新一代信息化技术，以城镇现有信息资源为支撑，打造智慧城镇综合管理解决方案，帮助经济发达镇全面推进并落实行政管理体制改革工作建设，创新长效化、精细化、智慧化的城镇管理模式，持续提升城镇社会治理水平。</p>
      <img class="word" src="../../assets/imgs/town/town2.png" alt />
      <div class="word_div">
        <img class="word word_img_bottom" src="../../assets/imgs/town/town1.png" alt />
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
    sessionStorage.setItem("add", "smart-town");
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
            // console.log(response.message); //请求失败，response为失败信息
          }
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
@import "town.scss";
</style>