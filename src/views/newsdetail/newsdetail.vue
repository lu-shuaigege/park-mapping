<template>
  <div class="newsdetail">
    <div class="title">{{title}}</div>
    <div class="center">
      <div class="time">{{time}}</div>
      <div class="line"></div>
      <div class="num">浏览次数：{{views_pc}}</div>
    </div>
    <div class="content" v-html="content"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: 0,
      content: "",
      title: "",
      time: "",
      views_pc: ""
    };
  },
  created() {
    this.id = sessionStorage.getItem("newsdetailid", this.newsdetailid);
    this.banner();
  },
  updated() {
    $(".content")
      .find("p")
      .find("img")
      .css("width", "100%")
      .css("height", "");
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
        "news/" + this.id,
        {
          page: 1,
          pageSize: 10
        },
        response => {
          if (response.status >= 200 && response.status < 300) {
            // console.log(response.data); //请求成功，response为成功信息参数
            this.content = response.data.data.content;
            this.title = response.data.data.title;
            this.time = response.data.data.created_at;
            this.views_pc = response.data.data.views_pc;
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
@import "newsdetail.scss";
</style>