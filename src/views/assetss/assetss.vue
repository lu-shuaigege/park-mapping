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
        <p>建设目标</p>
      </div>
      <!-- <p class="title">
        通过融入智能科技，整合GIS、IoT和机器学习等技术，为地产与建筑资产构建统一、高效的资产智能化管理链，提供资产信息采集、运维、统计分析、可视化和决策分析一体化的解决方案。
        基于对资产运营过程的全面洞悉，用户可聚焦业务发展痛点，并以数据驱动的方式来实现在商业地产租售、工业厂房租赁及设备设施管理等领域的管理节流和运营增收。
      </p> -->
      <img class="word" src="../../assets/imgs/assetss/assetss5.png" alt />
    </div>
    <div class="content2">
      <!-- 标题 -->
      <div class="title_all">
        <span class="span"></span>
        <p>产品特色</p>
      </div>
      <img class="word" src="../../assets/imgs/assetss/assetss6.png" alt />
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
    sessionStorage.setItem("add", "assets");
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
@import "assetss.scss";
</style>