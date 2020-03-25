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
        <p>自然资源数据服务</p>
      </div>
      <p class="title">面向自然资源行业，构建完整的数据资源体系、制定统一的数据标准，提供全流程、全类型的数据调研、收集、加工、整理、建库、日常应用、分析挖掘服务。</p>
      <img class="word" src="../../assets/imgs/dataservice/dataservice1.png" alt />
    </div>
    <div class="content2">
      <!-- 标题 -->
      <div class="title_all">
        <span class="span"></span>
        <p>服务特色</p>
      </div>
      <div class="list">
        <div class="con2_left">
          <p class="title">全类别数据高效建库、统一标准、共享使用</p>
          <p
            class="word"
          >依托专业的数据服务团队，设计完善的数据标准、规范体系，并依此将自规划涉及的全类别、碎片化的存量数据进行批量整合、统一空间基准、数据格式标准、长效更新维护，提升数据质量。</p>
        </div>
        <div class="con2_right">
          <img class="con2_right_img1" src="../../assets/imgs/dataservice/dataservice2.png" alt />
        </div>
      </div>
      <div class="list list_2">
        <div class="con2_right">
          <img class="con2_right_img2" src="../../assets/imgs/dataservice/dataservice3.png" alt />
        </div>
        <div class="con2_left">
          <p class="title">全覆盖自然资源一张图，“一数一源”动态更新</p>
          <p
            class="word"
          >形成覆盖现状、规划、管理、社会经济的一张“底图”， 横向整合，纵向贯通各业务系统数据资源，通过多源数据冲突检测、处理与动态更新，使数据资源从散到聚、从有到用的链条管控。</p>
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
    sessionStorage.setItem("add", "data-service");
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
@import "dataservice.scss";
</style>