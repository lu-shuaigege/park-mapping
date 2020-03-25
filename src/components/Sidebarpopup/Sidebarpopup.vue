<template>
  <div class="sidebar">
    <div class="btn" v-show="active==0" @click="none(show)">
      <p>产</p>
      <p>品</p>
      <p>服</p>
      <p>务</p>
    </div>
    <div class="all" v-show="active==1" @click="none(0)"></div>
    <div class="popup" v-show="active==1">
      <div class="popuptop">{{popup.title}}</div>
      <div
        class="item"
        v-for="(item,index) of popupcontent"
        :key="index"
        @click="detailsfn(item.id)"
      >
        <p class="item_title">{{item.title}}</p>
        <img class="righticon" src="../../assets/imgs/Sidebarpopup/righticon.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popup: {
        title: "产品服务"
      },
      popupcontent: [],
      active: 0,
      add: "",
      show: 1
    };
  },
  created() {
    // console.log(sessionStorage.getItem("add"));
    this.add = sessionStorage.getItem("add");
    this.sidebar();
  },
  methods: {
    //axios请求
    sidebar: function() {
      this.$api.get(
        "products/category/" + this.add,
        {
          // page: 1,
          // pageSize: 10
        },
        response => {
          if (response.status >= 200 && response.status < 300) {
            // console.log(response.data); //请求成功，response为成功信息参数
            this.popupcontent = response.data.data.data;
            if (this.popupcontent == "") {
              this.active = 2;
              this.show = 0;
            }
          } else {
            // console.log(response.message); //请求失败，response为失败信息
          }
        }
      );
    },
    detailsfn: function(params) {
      //把页面要传的参数存到sessionStorage里面
      sessionStorage.setItem("details_id", params);
      //路由跳转携带参数
      this.$router.push({
        name: "details",
        query: {
          details: params
        }
      });
    },
    none: function(params) {
      this.active = params;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "Sidebarpopup.scss";
</style>