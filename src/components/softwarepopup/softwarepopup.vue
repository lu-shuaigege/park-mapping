<template>
  <div class="sidebar">
    <div class="btn" v-show="active==0" @click="none(1)">
      <p>产</p>
      <p>品</p>
      <p>服</p>
      <p>务</p>
    </div>
    <div class="all" v-show="active==1" @click="none(0)"></div>
    <div class="popup" v-show="active==1">
      <div class="popuptop">{{popup.title}}</div>
      <div class="item" v-for="(item,index) of popupcontent" :key="index">
        <div class="item_top">
          <p class="item_title">{{item.name}}</p>
          <img
            v-show="isshow!=item.id"
            class="righticon"
            src="../../assets/imgs/Sidebarpopup/righticon.png"
            alt
            @click="listfn(item.id)"
          />
          <img
            v-show="isshow==item.id"
            class="bottomicon"
            src="../../assets/imgs/Sidebarpopup/bottomicon.png"
            alt
            @click="listfnover(item.id)"
          />
        </div>
        <p
          v-show="show==item.id"
          class="list"
          v-for="(item2,index) of list"
          :key="'a'+index"
          @click="detailsfn(item2.id)"
        >{{item2.title}}</p>
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
      list: [
        // {
        //   popupcontent: []
        // }
      ],
      active: 0,
      show: 0,
      isshow: 0,
      add: "",
      addid: ""
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
        "product-categories/" + this.add + "/categories",
        {
          // page: 1,
          // pageSize: 10
        },
        response => {
          if (response.status >= 200 && response.status < 300) {
            // console.log(response.data); //请求成功，response为成功信息参数
            this.popupcontent = response.data.data;
            // console.log(this.popupcontent);
          } else {
            // console.log(response.message); //请求失败，response为失败信息
          }
        }
      );
    },
    listfn: function(x) {
      this.addid = x;
      this.show = x;
      this.isshow = x;
      // console.log(this.addid);
      this.list = [];
      this.sidebarlist();
    },
    listfnover: function(params) {
      this.isshow = 0;
      this.list = [];
    },
    //axios请求
    sidebarlist: function() {
      // console.log(1111111111);
      this.$api.get(
        "products/category/" + this.addid,
        {
          // page: 1,
          // pageSize: 10
        },
        response => {
          if (response.status >= 200 && response.status < 300) {
            // console.log(response.data); //请求成功，response为成功信息参数
            this.list = response.data.data.data;
            // console.log(this.list);
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
@import "softwarepopup.scss";
</style>