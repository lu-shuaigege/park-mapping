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
        <p>国土空间规划基础信息平台</p>
      </div>
      <p
        class="title"
      >面向业务应用服务需求，构建集业务服务、大数据管理于一体的自然资源数据中台——国土空间基础信息平台，统一国土空间工作“底图”、“底板”、“底线”，提高数据服务与应用能力，保障自然资源统一应用管理。</p>
      <img class="word word_top_img" src="../../assets/imgs/software/software1.png" alt />
    </div>
    <div class="content2">
      <!-- 标题 -->
      <div class="title_all">
        <span class="span"></span>
        <p>产品特色</p>
      </div>
      <img class="word" src="../../assets/imgs/software/software2.png" alt />
    </div>
    <div class="content1">
      <!-- 标题 -->
      <div class="title_all">
        <span class="span"></span>
        <p>国土空间规划“一张图”实施监督信息系统</p>
      </div>
      <p
        class="title"
      >根据《中共中央国务院关于建立国土空间规划体系并监督实施的若干意见》，依托云计算、大数据、地 理信息等信息技术，围绕国土空间规划编制、审批、实施监管、监测评估预警等业务，构建国土空间规 划“一张蓝图”、三大体系（标准规范体系、数据资源体系、应用体系），整体提升国土空间规划“五大能 力” ，即大数据集成能力、规划编制智能分析能力、空间规划执行动态监测能力、监测评估精准能力、 全生命周期闭环管理能力。</p>
      <img class="word word_bottom_img" src="../../assets/imgs/software/software3.png" alt />
    </div>
    <!-- 侧边按钮 -->
    <softwarepopup></softwarepopup>
  </div>
</template>

<script>
import softwarepopup from "../../components/softwarepopup/softwarepopup";
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
  components: { softwarepopup },
  created() {
    sessionStorage.setItem("add", "software");
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
@import "software.scss";
</style>