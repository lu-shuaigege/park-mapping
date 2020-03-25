<template>
  <div class="traffic">
    <!-- 顶部banner -->
    <div class="bannertop" :style="{background: 'url('+bannertop_img.image+')'}">
      <!-- <img :src="bannertop_img.image" alt /> -->
    </div>
    <div class="content1">
      <!-- 标题 -->
      <div class="title_all">
        <span class="span"></span>
        <p>智慧交通解决方案</p>
      </div>
      <div class="con1_word">园区测绘致力于智慧大交通全流程解决方案，规划、交管、公交、停车等角度，打造集项目咨询、软件开发、运营服务、工程建设于一体的全流程行业解决方案。</div>
      <!-- 蓝标 -->
      <div class="title_blue_all">
        <span class="blue_span"></span>
        <p>4-4-3专业技术服务体系</p>
      </div>
      <div class="item1" v-for="(item,index) of list1" :key="index">
        <div class="item1_title">{{item.title}}</div>
        <div class="item1_word">{{item.word}}</div>
      </div>
    </div>
    <!-- 四图 -->
    <div class="content2">
      <div class="item2" v-for="(item,index) of list2" :key="'a'+index">
        <router-link :to="item.to">
          <div class="item2_title">{{item.title}}</div>
          <div class="four_div">
            <img :src="item.url" class="item2_word" />
          </div>
        </router-link>
      </div>
    </div>
    <!-- 分类 -->
    <div class="content3">
      <div class="list" v-for="(item,index) of list3" :key="'b'+index">
        <div class="con3_title">{{item.title}}</div>
        <div class="con3_list" v-for="(item,index) of item.list" :key="'c'+index">
          <div class="con3_item">
            <div class="item_blue"></div>
            <div class="item_title">{{item.blue_title}}</div>
          </div>
          <div class="con3_word">{{item.word}}</div>
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
      list1: [
        {
          title: "4大专业领域",
          word: "交通规则、交通管理、公共交通、智慧停车"
        },
        {
          title: "4个阶段",
          word: "规划、设计、建设、运营"
        },
        { title: "3类产品", word: "服务、软件、工程" }
      ],
      list2: [
        {
          title: "智慧交通规划",
          url: require("../../assets/imgs/traffic/traffic1.png"),
          to: "trafficplanning"
        },
        {
          title: "智慧交管",
          url: require("../../assets/imgs/traffic/traffic2.png"),
          to: "/trafficmanagement"
        },
        {
          title: "智慧公交",
          url: require("../../assets/imgs/traffic/traffic3.png"),
          to: "/transit"
        },
        {
          title: "智慧停车",
          url: require("../../assets/imgs/traffic/traffic4.png"),
          to: "trafficengineering"
        }
      ],
      list3: [
        {
          title: "智慧交通规划",
          list: [
            {
              blue_title: "服务产品",
              word: "数据服务、技术服务、项目咨询服务"
            },
            {
              blue_title: "软件产品",
              word: "智慧规划决策支撑系统、城市交通模型"
            }
          ]
        },
        {
          title: "智慧交管",
          list: [
            {
              blue_title: "服务产品",
              word: "数据服务、专业运营服务、项目咨询服务"
            },
            {
              blue_title: "软件产品",
              word:
                "智能交通数据共享平台、交通OD分析系统、交通安全（事故）分析系统、路口档案系统、工程项目管理系统、设备运维管理系统、智能交通仿真决策支持系统、高速公路网格化集成指挥调度系统"
            },
            {
              blue_title: "工程产品",
              word:
                "智能交通集成平台、诱导发布系统、智慧交通工程"
            }
          ]
        },
        {
          title: "智慧公交",
          list: [
            {
              blue_title: "服务产品",
              word: "数据服务、专业运营服务、项目咨询服务"
            },
            {
              blue_title: "软件产品",
              word:
                "公交规划管理应用系统、公交指挥调度系统、智慧公交大数据系统、公交行业效益监管应用系统"
            },
            {
              blue_title: "工程产品",
              word:
                "公交行业安全监管平台、公交出行信息服务应用系统、场站管理应用系统、智慧公交工程"
            }
          ]
        },
        {
          title: "智慧停车",
          list: [
            {
              blue_title: "工程产品",
              word: "停车收费管理系统、智慧停车工程"
            }
          ]
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
@import "traffic.scss";
</style>