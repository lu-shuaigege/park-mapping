<template>
  <div class="natural">
    <!-- 顶部banner -->
    <div class="bannertop" :style="{background: 'url('+bannertop_img.image+')'}">
      <!-- <img :src="bannertop_img.image" alt /> -->
    </div>
    <div class="content1">
      <div class="con1_title">自然资源空间信息服务解决方案</div>
      <div class="con1_word">园区测绘致力于为自然资源行业提供测绘地理信息全套服务，打造从数据采集（测绘、调查）、数据加工建库、数据融合应用，到软件系统开发</div>
      <div class="title">
        <div class="blue"></div>
        <div class="titlecon">我们的优势</div>
      </div>
      <div class="list">
        <div class="item">
          <div class="top">
            <img class="left" src="../../assets/imgs/natural/icon1.png" alt />
            <div class="right">
              <p class="right_title">深耕业务</p>
              <p class="right_word">行业服务25年经验，深刻理解行业需求，熟悉业务流程</p>
            </div>
          </div>
          <div class="bottom"></div>
        </div>
        <div class="item">
          <div class="top">
            <img class="left" src="../../assets/imgs/natural/icon2.png" alt />
            <div class="right">
              <p class="right_title">规范化流程</p>
              <p class="right_word">规范技术流程，对标行业标准、保障服务质量</p>
            </div>
          </div>
          <div class="bottom"></div>
        </div>
        <div class="item">
          <div class="top">
            <img class="left" src="../../assets/imgs/natural/icon3.png" alt />
            <div class="right">
              <p class="right_title">全链条覆盖</p>
              <p class="right_word">跟踪测绘、数据加工、软件开发，全链条服务能力保障</p>
            </div>
          </div>
          <div class="bottom"></div>
        </div>
        <div class="item">
          <div class="top">
            <img class="left" src="../../assets/imgs/natural/icon4.png" alt />
            <div class="right">
              <p class="right_title">规模化团队</p>
              <p class="right_word">规模化专业团队技术支撑，提供高效优质服务</p>
            </div>
          </div>
          <div class="bottom"></div>
        </div>
        <div class="item">
          <div class="top">
            <img class="left" src="../../assets/imgs/natural/icon5.png" alt />
            <div class="right">
              <p class="right_title">定制化服务</p>
              <p class="right_word">支持定制化服务，贴合用户需求，融合本地特色</p>
            </div>
          </div>
          <div class="bottom"></div>
        </div>
        <div class="item">
          <div class="top">
            <img class="left" src="../../assets/imgs/natural/icon6.png" alt />
            <div class="right">
              <p class="right_title">本地化服务</p>
              <p class="right_word">即时响应用户需求，可提供驻场服务</p>
            </div>
          </div>
          <!-- <div class="bottom"></div> -->
        </div>
      </div>
    </div>
    <div class="content2">
      <!-- 标题 -->
      <div class="title_all">
        <span class="span"></span>
        <p>提供的服务/产品</p>
      </div>
      <router-link to="/mapping">
        <div class="list">
          <img class="left" src="../../assets/imgs/natural/icon7.png" alt />
          <div class="center">
            <p class="center_title">测绘服务</p>
            <p class="center_word">
              -“多测合一”跟踪服务
              <br />-自然资源调查监测服务
            </p>
          </div>
          <img class="righticon" src="../../assets/imgs/natural/icon11.png" alt />
        </div>
      </router-link>
      <router-link to="/supervisor">
        <div class="list">
          <img class="left" src="../../assets/imgs/natural/icon8.png" alt />
          <div class="center">
            <p class="center_title">咨询监理</p>
            <p class="center_word">
              -咨询服务
              <br />-监理服务
            </p>
          </div>
          <img class="righticon" src="../../assets/imgs/natural/icon11.png" alt />
        </div>
      </router-link>
      <router-link to="/dataservice">
        <div class="list">
          <img class="left" src="../../assets/imgs/natural/icon9.png" alt />
          <div class="center">
            <p class="center_title">数据服务</p>
            <p class="center_word">
              -综合数据建库
              <br />-专项数据加工
              <br />-专项数据分析
              <br />-日常数据应用
            </p>
          </div>
          <img class="righticon" src="../../assets/imgs/natural/icon11.png" alt />
        </div>
      </router-link>
      <router-link to="/software">
        <div class="list">
          <img class="left" src="../../assets/imgs/natural/icon10.png" alt />
          <div class="center">
            <p class="center_title">软件产品</p>
            <p class="center_word">
              -动态智能监管系统
              <br />-动态巡查监管系统
              <br />-住房保障管理系统
              <br />-土地储备管理系统
              <br />-国土空间用途管制系统
              <br />-自然资源权限登记系统
              <br />-工程建设规划管理系统
              <br />-国土空间基础信息平台
              <br />-国土空间规划“一张图”实施监督信息系统
            </p>
          </div>
          <img class="righticon" src="../../assets/imgs/natural/icon11.png" alt />
        </div>
      </router-link>
    </div>
    <div class="content3">
      <!-- 标题 -->
      <div class="title_all">
        <span class="span"></span>
        <p>自然资源空间信息服务体系</p>
      </div>
      <img class="word" src="../../assets/imgs/natural/word.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannertop_img: ""
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
@import "natural.scss";
</style>