<template>
  <div class="about">
    <!-- 顶部banner -->
    <div class="bannertop" :style="{background: 'url('+bannertop_img.image+')'}">
      <!-- <img :src="bannertop_img.image" alt /> -->
    </div>
    <!-- 公司简介 -->
    <div class="brief_introduction">
      <!-- 标题 -->
      <div class="title_all">
        <span class="span"></span>
        <p>公司简介</p>
      </div>
      <div class="brief_centent">
        <img class="img" src="../../assets/imgs/about/home.jpg" alt />
        <p class="brief_word" v-html="word" ref="brief_word"></p>
        <div class="addimg">
          <p @click="popup()">查看全部</p>
          <img src="../../assets/imgs/about/right.png" alt />
        </div>
      </div>
    </div>

    <!-- 弹框 -->
    <div class="popup" ref="popup" v-if="modalInfo">
      <div class="popup_con">
        <img @click="popdown()" src="../../assets/imgs/about/close.png" alt />
        <div class="popup_word" v-html="word"></div>
      </div>
    </div>
    <!-- 企业资质 -->
    <div class="qualifications">
      <!-- 标题 -->
      <div class="title_all">
        <span class="span"></span>
        <p>企业资质</p>
      </div>
      <div class="three">
        <div class="item" v-for="(item,index) of three" :key="index">
          <img :src="item.url" alt />
          <p class="title">{{item.title}}</p>
        </div>
      </div>
    </div>
    <!-- 发展历程 -->
    <div class="development">
      <!-- 标题 -->
      <div class="title_all">
        <span class="span"></span>
        <p>发展历程</p>
      </div>
      <img src="../../assets/imgs/about/development.png" alt />
    </div>
    <!-- 奖项与科研实力 -->
    <div class="prize">
      <!-- 标题 -->
      <div class="title_all">
        <span class="span"></span>
        <p>奖项与科研实力</p>
      </div>
      <div class="prize_content">
        <div class="prize1">
          <div class="prize1_title">
            <div class="bluediv"></div>
            <div class="blue_title">荣誉奖项</div>
          </div>
          <div class="list_con">
            <div class="list" v-for="(item,index) of win1" :key="index">
              <p>{{item.title}}</p>
            </div>
          </div>
          <div class="item_con">
            <div class="item" v-for="(item,indexs) of prize1" :key="indexs">
              <img :src="item.images[0]" alt />
            </div>
          </div>
        </div>
        <div class="prize2">
          <div class="prize2_title">
            <div class="bluediv"></div>
            <div class="blue_title">科研实力</div>
          </div>
          <div class="list_con">
            <div class="list" v-for="(item,indexd) of win2" :key="indexd">
              <p>{{item.title}}</p>
            </div>
          </div>
          <div class="item_con">
            <div class="item" v-for="(item,indexf) of researches" :key="indexf">
              <img :src="item.images[0]" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 子公司 -->
    <div class="subsidiary">
      <!-- 标题 -->
      <div class="title_all">
        <span class="span"></span>
        <p>子分公司</p>
      </div>
      <div class="list" v-for="(item,index) of subsidiary" :key="'o'+index">
        <div class="item_title">
          <div class="item_blue"></div>
          <div class="title">{{item.title}}</div>
        </div>
        <div class="add">
          <div class="add_con">地址：</div>
          <div class="add_word">{{item.add}}</div>
        </div>
        <div class="add">
          <div class="add_con">电话：</div>
          <div class="add_word">{{item.phone}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      //弹出框
      modalInfo: false,
      bannertop_img: "",
      word: "",
      popup_con: "",
      three: [
        {
          url: require("../../assets/imgs/about/book1.jpg"),
          title: "测绘甲级资质"
        },
        {
          url: require("../../assets/imgs/about/book2.jpg"),
          title: "高新技术企业"
        },
        {
          url: require("../../assets/imgs/about/book3.jpg"),
          title: "软件企业"
        }
      ],
      prize1: [],
      researches: [],
      subsidiary: [
        {
          title: "苏州工业园区格网信息科技有限公司",
          add: "江苏省苏州市苏州工业园区苏虹中路101号",
          phone: "0512-67611188"
        },
        {
          title: "苏州工业园区测绘地理信息有限公司宿迁分公司",
          add: "江苏省宿迁市紫金山路12号",
          phone: "0527-82868319"
        },
        {
          title: "滁州圆信苏滁测绘地理信息有限公司（苏滁现代产业园）",
          add: "中国安徽省滁州市扬子路888号",
          phone: "0550-3769309"
        },
        {
          title: "广西中马园区数字城市科技有限公司（中马钦州产业园）",
          add: "广西钦州市中马钦州产业园区中马大街1号",
          phone: "0777-5988579"
        },
        {
          title: "苏州工业园区测绘地理信息有限公司嘉善分公司",
          add: "浙江省嘉兴市嘉善县魏塘街道智里路33号1号楼北侧",
          phone: "0573-84841277"
        },
        {
          title: "苏州工业园区测绘地理信息有限公司银川分公司",
          add: "宁夏回族自治区银川市兴庆区京河大道智慧研发大楼10楼1005室",
          phone: "18061992296"
        }
      ],
      win1: [
        {
          title: "中国地理信息百强"
        },
        {
          title: "中国地理信息产业优秀工程奖金奖"
        }
      ],
      win2: [
        {
          title: "江苏省地理空间信息技术工程中心SZCORS分中心"
        },
        {
          title: "园区博士后工作站测绘公司分站"
        },
        {
          title: "武汉大学研究生工作站"
        }
      ]
    };
  },
  components: {},
  created() {
    this.banner();
    this.wordfn();
    this.prizefn();
    this.researchesfn();
  },
  updated() {
  },
  mounted() {
    this.$router.afterEach((from, next) => {
      window.scrollTo(0, 0);
    });
    $("brief_centent > p > strong > p> strong > img").css("display", "none");
  },
  methods: {
    //axios请求轮播图
    banner: function() {
      this.$api.get(
        "banners/about-us",
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
    },
    //axios请求公司简介
    wordfn: function() {
      this.$api.get(
        "company-profile",
        {
          page: 1,
          pageSize: 3
        },
        response => {
          if (response.status >= 200 && response.status < 300) {
            // console.log(response.data); //请求成功，response为成功信息参数
            this.word = response.data.data.content;
          } else {
            // console.log(response.message); //请求失败，response为失败信息
          }
        }
      );
    },
    //axios请求公司奖项
    prizefn: function() {
      this.$api.get(
        "awards",
        {
          // page: 1,
          // pageSize: 3
        },
        response => {
          if (response.status >= 200 && response.status < 300) {
            // console.log(response.data); //请求成功，response为成功信息参数
            this.prize1 = response.data.data.data;
          } else {
            // console.log(response.message); //请求失败，response为失败信息
          }
        }
      );
    },
    //axios请求公司奖项
    researchesfn: function() {
      this.$api.get(
        "researches",
        {
          // page: 1,
          // pageSize: 3
        },
        response => {
          if (response.status >= 200 && response.status < 300) {
            // console.log(response.data); //请求成功，response为成功信息参数
            this.researches = response.data.data.data;
          } else {
            // console.log(response.message); //请求失败，response为失败信息
          }
        }
      );
    },

    popup() {
      this.modalInfo = true;
      $("html,body").addClass("overHiden");
      // 阻止浏览器的冒泡
      window.event ? (window.event.cancelBubble = true) : e.stopPropagation();
    },
    //弹框关闭
    popdown() {
      this.modalInfo = false;
      $("html,body").removeClass("overHiden");
      // 阻止浏览器的冒泡
      window.event ? (window.event.cancelBubble = true) : e.stopPropagation();
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./about.scss";
.about {
  background: #f8f8f8;
}
</style>
