<template>
  <div class="product">
    <!-- 顶部banner -->
    <div class="bannertop" :style="{background: 'url('+bannertop_img.image+')'}">
      <!-- <img :src="bannertop_img.image" alt /> -->
    </div>
    <div class="content">
      <div class="list" v-for="(item,index) of products" :key="index">
        <div class="left">
          <img class="left_img" :src="item.url" alt />
        </div>

        <div class="right">
          <div class="title"><b>{{item.title}}</b></div>
          <div class="word">{{item.word}}</div>
          <router-link :to="item.to">
            <div class="btn">查看更多</div>
          </router-link>
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
      products: [
        {
          url: require("../../assets/imgs/product/product1.jpg"),
          to: "natural",
          title: "自然资源空间信息服务解决方案",
          word:
            "园区测绘致力于为自然资源行业提供测绘地理信息全套服务，打造从数据采集（测绘、调查）、数据加工建库、数据融合应用，到软件系统开发的完整解决方案。"
        },
        {
          url: require("../../assets/imgs/product/product2.jpg"),
          to: "traffic",

          title: "智慧交通解决方案",
          word:
            "园区测绘致力于智慧大交通全流程解决方案，从规划、交管、公交、停车等角度，打造集项目咨询、软件开发、运营服务、工程建设于一体的全流程行业解决方案。深耕城市大交通各领域规划、设计、实施和运营等环节，在软件平台、工程建设、运营服务四大业务方向累积了丰富的经验，为客户提供智慧交通全系列产品及解决方案，打造全流程大交通服务体系。"
        },
        {
          url: require("../../assets/imgs/product/product3.png"),
          to: "assetss",

          title: "资产智能化运营管理平台",
          word:
            "通过融入智能科技，整合GIS、IoT和机器学习等技术，为地产与建筑资产构建统一、高效的资产智能化管理链，提供资产信息采集、运维、统计分析、可视化和决策分析一体化的解决方案。"
        },
        {
          url: require("../../assets/imgs/product/product4.png"),
          to: "town",

          title: "审批服务综合执法一体化平台",
          word:
            "围绕基层工作特点及便民服务需要，建设集党建引领、审批服务、综合执法、网格管理、指挥调度、经济发展于一体的乡镇（街道）审批服务综合执法一体化平台，支撑配套基层“1+4”改革。"
        },
        {
          url: require("../../assets/imgs/product/product5.png"),
          to: "environmentalprotection",

          title: "智慧环保大数据平台",
          word:
            "针对城市环境中空气、水、固废等污染物，开展实时监测、智能分析、智慧化管理的综合大数据分析平台。通过物联网传感器网络，采集、存储、归档各项污染物浓度的时空分布大数据，完成对各项环境指标的实时动态监测。"
        },
        {
          url: require("../../assets/imgs/product/product6.png"),
          to: "administrationlaw",

          title: "综合行政执法智慧管理平台",
          word:
            "感知、分析、服务、指挥、监察，五位一体；大集中、大整合、大共享，通过物联、大数据等技术手段，辅助完善执法程序、提升执法效能、创新执法模式，提升公共服务水平。"
        }
      ]
    };
  },
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
        "banners/product",
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
    // //axios请求轮播图
    // productsfn: function() {
    //   this.$api.get(
    //     "products",
    //     {
    //       page: 1,
    //       pageSize: 10
    //     },
    //     response => {
    //       if (response.status >= 200 && response.status < 300) {
    //         // console.log(response.data); //请求成功，response为成功信息参数
    //         this.products = response.data.data;
    //       } else {
    //         console.log(response.message); //请求失败，response为失败信息
    //       }
    //     }
    //   );
    // }
  }
};
</script>

<style lang="scss" scoped>
@import "product.scss";
</style>