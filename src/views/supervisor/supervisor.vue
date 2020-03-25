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
        <p>测绘类项目监理服务</p>
      </div>
      <div class="con1_top">
        <p
          class="title"
        >提供自然资源调查、测绘监理工作计划和实施方案；实施监理业务，保障监理项目按既定的质量、进度和费用目标完成；强化技术管理，实地验证、跟踪、调查、测量；定期做好抽样检查，形成全过程的监理文件资料。</p>
        <img class="word" src="../../assets/imgs/supervisor/supervisor1.png" alt />
      </div>
      <div class="con1_bottom">
        <img src="../../assets/imgs/supervisor/supervisor2.png" alt />
        <img src="../../assets/imgs/supervisor/supervisor3.png" alt />
        <img src="../../assets/imgs/supervisor/supervisor4.png" alt />
      </div>
    </div>
    <div class="content2">
      <!-- 标题 -->
      <div class="title_all">
        <span class="span"></span>
        <p>数据类项目监理服务</p>
      </div>
      <img class="word" src="../../assets/imgs/supervisor/supervisor5.png" alt />
      <p class="title up">依托丰富的数据服务项目实施及管理经验，完善的项目监理制度，为客户的数据整理建库、专项数据加工类项目提供全过程监理服务。</p>
    </div>
    <div class="content2">
      <!-- 标题 -->
      <div class="title_all">
        <span class="span"></span>
        <p>软件类项目监理服务</p>
      </div>

      <p class="title up0">基于自身丰富的项目实施经验，在信息化项目建设过程中，为客户提供全过程监理服务。</p>

      <div class="word word_img">
        <img class="word_img_img" src="../../assets/imgs/supervisor/supervisor7.png" alt />
      </div>
    </div>
    <div class="content2">
      <!-- 标题 -->
      <div class="title_all">
        <span class="span"></span>
        <p>数据服务类项目咨询服务</p>
      </div>
      <img class="word " src="../../assets/imgs/supervisor/supervisor6.png" alt />
      <p
        class="title consultation_title"
      >依托20多年的测绘经验沉淀，十多年数字城市建设过程中数据资源建设及应用的业务知识积累，可以提供数据服务类项目的前期立项咨询服务，协助开展项目现状分析、项目需求分析、项目可行性分析、项目工作量评估、项目技术路线探索、项目概要方案设计等工作。</p>
    </div>
    <div class="content2">
      <!-- 标题 -->
      <div class="title_all">
        <span class="span"></span>
        <p>信息化项目咨询服务</p>
      </div>

      <p class="con2_title">在项目开展前期，为客户提供调研、分析、规划、设计等服务，最终完成项目的方案编制和评审汇报，顺利推进项目立项实施。</p>
      <img class="con2_word" src="../../assets/imgs/supervisor/supervisor8.png" alt />
    </div>
    <!-- 侧边按钮 -->
    <!-- <Sidebarpopup></Sidebarpopup> -->
  </div>
</template>

<script>
import Sidebarpopup from "../../components/Sidebarpopup/Sidebarpopup";
export default {
  data() {
    return {
      bannertop_img: "",
      fourimg: [
        {
          url: require("../../assets/imgs/mapping/mapping4.png"),
          title: "服务部门广、专业测绘精"
        },
        {
          url: require("../../assets/imgs/mapping/mapping5.png"),
          title: "一次测绘、成果共享"
        },
        {
          url: require("../../assets/imgs/mapping/mapping6.png"),
          title: "时效管控，限时办结"
        },
        {
          url: require("../../assets/imgs/mapping/mapping7.png"),
          title: "全生命周期跟踪服务"
        }
      ]
    };
  },
  components: { Sidebarpopup },
  created() {
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
@import "supervisor.scss";
</style>