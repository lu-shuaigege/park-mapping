<template>
  <div class="home">
    <!-- 轮播图 -->
    <el-carousel class="banner" arrow="never" height="5.333rem" width="100%">
      <el-carousel-item v-for="(item, index) in imgs" :key="index">
        <a v-if="item.url !== ''" :href="item.url"><div
          class="banner_imgs"
          :style="{background: 'url('+item.image+')','background-repeat':'no-repeat','background-size':'cover','background-position-x':'center' }"
        ></div></a>
        <div v-if="item.url ==''"
          class="banner_imgs"
          :style="{background: 'url('+item.image+')','background-repeat':'no-repeat','background-size':'cover','background-position-x':'center' }"
        ></div>
        <!-- <img :src="item.image" style="width:100%;height:100%" alt /> -->
      </el-carousel-item>
    </el-carousel>
    <!-- 四图 -->
    <div class="fourimg">
      <!-- 标题 -->
      <div class="title_all">
        <span class="span"></span>
        <p>智慧城市整体解决方案</p>
        <router-link to="/product">
          <div class="more">
            <p>更多</p>
            <img src="../../assets/imgs/home/more.png" alt />
          </div>
        </router-link>
      </div>
      <div class="fourcontent">
        <div v-for="(item, index) of four" :key="index" class="four_item">
          <router-link :to="item.to">
            <img :src="item.url" alt />
            <p>{{ item.title }}</p>
          </router-link>
        </div>
      </div>
    </div>
    <!-- 新闻 -->
    <div class="news">
      <!-- 标题 -->
      <div class="title_all">
        <span class="span"></span>
        <p>新闻动态</p>
        <router-link to="/newsfocus">
          <div class="more">
            <p>更多</p>
            <img src="../../assets/imgs/home/more.png" alt />
          </div>
        </router-link>
      </div>
      <div class="newscontent">
        <div
          class="item"
          v-for="(item, index) of news"
          :key="index"
          @click="newsdetail(item.id)"
          v-show="index<3"
        >
          <div class="item_left">
            <div class="item_title">{{ item.title }}</div>
            <div class="item_updated_at">{{ item.updated_at }}</div>
          </div>
          <div class="item_right">
            <img :src="item.cover_image" alt />
          </div>
        </div>
      </div>
    </div>
    <!-- 联系我们 -->
    <div class="us">
      <div class="us_title">
        <span class="xian"></span>
        <p>联系我们</p>
        <span class="xian"></span>
      </div>
      <div class="us_content">
        <div class="content_left">
          <img src="../../assets/imgs/home/er.jpg" alt />
        </div>
        <div class="content_right">
          <p>苏州工业园区测绘地理信息有限公司</p>
          <div class="us_item">
            <img src="../../assets/imgs/home/add.png" alt />
            <div>苏州工业园区苏虹中路101号</div>
          </div>
          <div class="us_item">
            <img src="../../assets/imgs/home/phone.png" alt />
            <div>0512-67611188</div>
          </div>
          <div class="us_item">
            <img src="../../assets/imgs/home/email.png" alt />
            <div>hr@dpark.com.cn</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      imgs: [],
      four: [
        {
          url: require("../../assets/imgs/home/four1.jpg"),
          title: "自然资源空间信息服务解决方案",
          to: "natural"
        },
        {
          url: require("../../assets/imgs/home/four2.jpg"),
          title: "智慧交通解决方案",
          to: "traffic"
        },
        {
          url: require("../../assets/imgs/home/four3.png"),
          title: "资产智能化运营管理平台",
          to: "assetss"
        },
        {
          url: require("../../assets/imgs/home/four4.png"),
          title: "审批服务综合执法一体化平台",
          to: "town"
        },
        {
          url: require("../../assets/imgs/home/four5.png"),
          title: "智慧环保大数据平台",
          to: "environmentalprotection"
        },
        {
          url: require("../../assets/imgs/home/four6.png"),
          title: "综合行政执法智慧管理平台",
          to: "administrationlaw"
        }
      ],
      news: []
    };
  },
  components: {},
  created() {
    this.banner();
    this.newsfn();
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
        "banners/index",
        {
          page: 1,
          pageSize: 10
        },
        response => {
          if (response.status >= 200 && response.status < 300) {
            // console.log(response.data); //请求成功，response为成功信息参数
            this.imgs = response.data.data;
          } else {
            // console.log(response.message); //请求失败，response为失败信息
          }
        }
      );
    },
    //axios请求四图
    newsfn: function() {
      this.$api.get(
        "news",
        {
          page: 1,
          pageSize: 3
        },
        response => {
          if (response.status >= 200 && response.status < 300) {
            // console.log(response.data); //请求成功，response为成功信息参数
            this.news = response.data.data.data;
          } else {
            // console.log(response.message); //请求失败，response为失败信息
          }
        }
      );
    },
    newsdetail: function(x) {
      this.newsdetailid = x;
      //把页面要传的参数存到sessionStorage里面
      sessionStorage.setItem("newsdetailid", this.newsdetailid);
      //路由跳转携带参数
      this.$router.push({
        name: "newsdetail",
        params: {
          newsdetailid: this.newsdetailid
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./home.scss";
.home {
  background: #f8f8f8;
}
</style>
