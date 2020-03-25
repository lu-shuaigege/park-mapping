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
        <p>综合行政执法智慧管理平台</p>
      </div>
      <p class="title">本产品为贯彻落实《中共中央国务院关于深入推进城市执法体制改革改进城市管理工作的指导意见》（中发（2015）37号文件），配合各地区城市执法体制改革，支持相关领域职能的综合划转，设计研发了综合行政执法智慧管理平台。</p>
    </div>
    <div class="content2">
      <!-- 标题 -->
      <div class="title_all">
        <span class="span"></span>
        <p>平台框架</p>
      </div>
      <img class="word" style="margin-top:0.3rem" src="../../assets/imgs/administrationlaw/img1.png" alt />
    </div>
    <div class="content2">
      <!-- 标题 -->
      <div class="title_all">
        <span class="span"></span>
        <p>解决问题</p>
      </div>
      <img class="img2" src="../../assets/imgs/administrationlaw/img2.png" alt />
      <p class="title1">利用移动设备、物联设备等，通过物联、大数据等技术手段，辅助完善执法程序、提升执法效能、创新执法模式。</p>
      <p class="title1">创新执法管理方式，实现双随机执法，避免多头执法扰民，推进依法行政，严格规范公正文明执法。</p>
    </div>
    <div class="content2">
      <!-- 标题 -->
      <div class="title_all">
        <span class="span"></span>
        <p>产品特色</p>
      </div>
      <p class="title2">执法办案无纸化、自动化、即时化、精准化，对执法行为全过程记录，有据可查</p>
      <p class="title2">自由裁量行为标准化</p>
      <p class="title2">实现网络审批、便捷操作、规范执法办案程序、提高执法工作效率</p>
      <p class="title2">实现标准化的实时考核和指标分析</p>
      <p class="title2">大数据分析、风险预警、分析研判、决策支持</p>
      <img class="img2" style="margin-top:0.2rem" src="../../assets/imgs/administrationlaw/img3.png" alt />
    </div>
    <div class="content2">
      <!-- 标题 -->
      <div class="title_all">
        <span class="span"></span>
        <p>产品介绍</p>
      </div>
      <div class="environment_second">
        <div class="environment_second_list" v-for="item in list" :key="item">
          <div class="img">
            <img :src="item.cover_image" alt="">
          </div>
          <p>{{item.title}}</p>
          <button @click="toDetail(item.id)">查看更多>></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannertop_img: "",
      list:[]
    };
  },
  components: { },
  created() {
    sessionStorage.setItem("add", "slaw-enforcement-platform");
    this.api();
    // this.productsfn();
  },
  mounted() {
    this.$router.afterEach((from, next) => {
      window.scrollTo(0, 0);
    });
  },
  methods: {
    api: function() {
      //axios请求轮播图
      this.$api.get(
        "banners/product-child",{},
        response => {
          if (response.status >= 200 && response.status < 300) {
            // console.log(response.data); //请求成功，response为成功信息参数
            this.bannertop_img = response.data.data[0];
          } else {
            // console.log(response.message); //请求失败，response为失败信息
          }
        }
      );
       //请求列表
      this.$api.get(
        "products/category/law-enforcement-platform",{},
        response => {
          if (response.status >= 200 && response.status < 300) {
            this.list = response.data.data.data;
          }
        }
      );
    },
    toDetail: function(id) {
      //把页面要传的参数存到sessionStorage里面
      sessionStorage.setItem("details_id", id);
      //路由跳转携带参数
      this.$router.push({
        name: "details",
        params: {
          details: id
        }
      });
    },
  }
};
</script>

<style lang="scss" scoped>
@import "administrationlaw.scss";
</style>