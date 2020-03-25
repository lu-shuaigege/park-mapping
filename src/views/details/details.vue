<template>
  <div class="details">
    <div class="details_con" v-html="details"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      details: "",
      id: ""
    };
  },
  created() {
    // this.id = sessionStorage.getItem("details_id");
    this.id = this.$route.query.details
    this.details_fn();
  },
  updated() {
    $(".details_con")
      .find("div")
      .css("width", "100%")
      .css("height", "");
    $(".details_con")
      .find("div")
      .find("p")
      .css("width", "100%")
      .css("height", "");
    $(".details_con")
      .find("div")
      .find("p")
      .find("span")
      .css("width", "100%")
      .css("height", "");
    $(".details_con")
      .find("div")
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
    details_fn: function() {
      this.$api.get(
        "products/" + this.id,
        {},
        response => {
          if (response.status >= 200 && response.status < 300) {
            // console.log(response.data); //请求成功，response为成功信息参数
            this.details = response.data.data.content;
          } else {
            // console.log(response.message); //请求失败，response为失败信息
          }
        }
      );
    }
    // detailsfn: function(params) {
    //   //把页面要传的参数存到sessionStorage里面
    //   sessionStorage.setItem("details_id", params);
    //   //路由跳转携带参数
    //   this.$router.push({
    //     name: "details",
    //     params: {
    //       details: params
    //     }
    //   });
    // }
  }
};
</script>

<style>
.details {
  padding: 1rem 0.4rem;
  box-sizing: border-box;
}
.details_con {
  width: 100% !important;
}
.details_con img{
  width: 100% !important;
}
.details_con p img{
  width: 100% !important;
}
</style>