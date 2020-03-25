<template>
  <div class="culture">
    <!-- 顶部banner -->
    <div class="bannertop" :style="{background: 'url('+bannertop_img.image+')'}">
      <!-- <img :src="bannertop_img.image" alt /> -->
    </div>
    <!-- 切换按钮 -->
    <div class="btn">
      <div
        class="btn_left"
        v-for="(item,index) of culture_columns"
        @click="news_item(item.id)"
        :key="index"
        :style="{background:item.id==active?'#1280e1':'#f1f1f1',color:item.id==active?'#ffffff':'#999999'}"
      >
        <div :class="item.id!=active&&index<2?'right1':''">{{item.title}}</div>
      </div>
    </div>
    <!-- 新闻列表 -->
    <div class="list">
      <div class="item" v-for="(item,index) of news" :key="'a'+index" @click="newsdetail(item.id)">
        <img class="img" :src="item.cover_image" alt />
        <div class="right">
          <div class="title">{{item.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bannertop_img: "", //顶部banner
      culture_columns: [], //新闻栏目
      active: 0,
      culture_columnsid: 0, //栏目id
      news: [],
      newsdetailid: 0
    };
  },
  created() {
    this.banner();
    this.columnsfn();
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
        "banners/culture",
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
    //axios请求新闻栏目
    columnsfn: function() {
      this.$api.get(
        "culture-categories",
        {
          page: 1,
          pageSize: 10
        },
        response => {
          if (response.status >= 200 && response.status < 300) {
            // console.log(response.data); //请求成功，response为成功信息参数
            this.culture_columns = response.data.data;
            this.active = response.data.data[0].id;
            this.culture_columnsid = response.data.data[0].id;
            this.item_columnsfn();
          } else {
            // console.log(response.message); //请求失败，response为失败信息
          }
        }
      );
    },
    //axios请求新闻列表
    item_columnsfn: function() {
      this.$api.get(
        "culture-categories/" + this.culture_columnsid + "/cultures",
        {
          page: 1
          //   pageSize: 3
        },
        response => {
          if (response.status >= 200 && response.status < 300) {
            // console.log(response.data); //请求成功，response为成功信息参数
            this.news = response.data.data.data;
            // console.log(this.news);
          } else {
            // console.log(response.message); //请求失败，response为失败信息
          }
        }
      );
    },
    //切换列表
    news_item: function(x) {
      this.culture_columnsid = x;
      this.active = x;
      this.item_columnsfn();
    }
    // newsdetail: function(x) {
    //   this.newsdetailid = x;
    //   //把页面要传的参数存到sessionStorage里面
    //   sessionStorage.setItem("newsdetailid", this.newsdetailid);
    //   //路由跳转携带参数
    //   this.$router.push({
    //     name: "newsdetail",
    //     params: {
    //       newsdetailid: this.newsdetailid
    //     }
    //   });
    // }
  }
};
</script>
<style lang="scss" scoped>
@import "culture.scss";
</style>