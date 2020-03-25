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
        <p>“多测合一”跟踪服务</p>
      </div>
      <p
        class="title"
      >为贯彻落实党中央和国务院关于深化“放管服”改革，配合机关、职能部门构建科学、便捷、高效的工程建设项目审批和管理体系，助力“最多跑一次”改革进行到底。园区测绘致力于为工程建设项目行政审批提供“多测合一”跟踪服务，提升政府服务效率，营造亲商环境，激发市场活力和社会创造力。</p>
      <img class="word" src="../../assets/imgs/mapping/mapping1.png" alt />
    </div>
    <div class="content2">
      <!-- 标题 -->
      <div class="title_all">
        <span class="span"></span>
        <p>服务目标</p>
      </div>
      <p
        class="title"
      >整合规划、土地、房产、园林、人防、消防等行业测量技术规范和标准，建立协调统一的工程建设项目综合测量技术标准和工作机制，实现“一次委托、统一测绘、成果共享” ，避免重复测绘，减轻企业负担，为工程建设项目行政并联审批、联合验收提供技术支持，助力行政审批效能提升，优化营商环境。</p>
      <img class="word" src="../../assets/imgs/mapping/mapping2.png" alt />
    </div>
    <div class="content3">
      <!-- 标题 -->
      <div class="title_all">
        <span class="span"></span>
        <p>服务内容</p>
      </div>
      <div class="title">“多测合一”跟踪服务体系整体架构</div>
      <img class="word" src="../../assets/imgs/mapping/mapping3.png" alt />
      <div class="title">“多测合一”跟踪服务体系服务内容</div>
      <img class="word word_botttom" src="../../assets/imgs/mapping/mapping8.png" alt />
    </div>
    <div class="content4">
      <!-- 标题 -->
      <div class="title_all">
        <span class="span"></span>
        <p>服务特色</p>
      </div>
      <div class="fourimg">
        <div class="item" v-for="(item,index) of fourimg" :key="index">
          <img class="fourimg" :src="item.url" alt />
          <p class="fourtitle">{{item.title}}</p>
        </div>
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
    sessionStorage.setItem("add", "surveying-service");
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
@import "mapping.scss";
</style>