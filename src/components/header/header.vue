<template>
  <!-- 导航 -->
  <div class="nav">
    <div class="navcontent">
      <div class="navimg_left">
        <router-link to="/home">
          <img @click="closeup(0)" src="../../assets/imgs/home/navlogo.png" />
        </router-link>
      </div>
      <div class="navimg_right">
        <img
          src="../../assets/imgs/home/index-menu.jpg"
          v-show="istrue == 0"
          @click="close(1)"
          class="img1"
        />
        <img
          src="../../assets/imgs/home/close.png"
          v-show="istrue == 1"
          @click="close_icon(0)"
          class="img2"
        />
      </div>
    </div>
    <div class="navlist" v-show="istrue == 1" @click="closeup(0)">
      <div class="list">
        <router-link to="/home">
          <div class="item" @click="closeup(0)">首页</div>
        </router-link>
        <router-link to="/about">
          <div class="item" @click="closeup(0)">关于我们</div>
        </router-link>
        <div class="item items">
          <div class="yeitem">
            <router-link to="/product">
              <div class="ye" @click="closeup(0)">产品服务</div>
            </router-link>
            <img
              src="../../assets/imgs/home/down.png"
              class="topimg"
              v-show="isshow == 0"
              @click="list(1)"
            />
            <img
              src="../../assets/imgs/home/topimg.png"
              class="topimg"
              v-show="isshow == 1"
              @click="list(0)"
            />
          </div>
          <div class="yelist" v-show="isshow == 1">
            <div class="itemlist" @click="closeup(0, 1)">
              <router-link to="/natural" @click="overe">
                <div class="itemlist_left">
                  <span class="reddian"></span>
                  <p class="listcontent">自然资源空间信息服务解决方案</p>
                </div>
              </router-link>

              <img
                src="../../assets/imgs/home/smalldown.png"
                class="listimg"
                v-show="smallisshow1 == 0"
                @click="small1(1)"
              />
              <img
                src="../../assets/imgs/home/smalltop.png"
                class="listimg"
                v-show="smallisshow1 == 1"
                @click="small1(0)"
              />
            </div>
            <div class="item_list" v-show="smallisshow1==1">
              <router-link to="/mapping">
                <div class="item_list_li" @click="close_item(0)">测绘服务</div>
              </router-link>
              <router-link to="/dataservice">
                <div class="item_list_li" @click="close_item(0)">数据服务</div>
              </router-link>
              <router-link to="/software">
                <div class="item_list_li" @click="close_item(0)">软件产品</div>
              </router-link>
              <router-link to="/supervisor">
                <div class="item_list_li li4" @click="close_item(0)">咨询监理</div>
              </router-link>
            </div>
            <div class="itemlist" @click="closeup(0, 2)">
              <router-link to="/traffic" @click="overe">
                <div class="itemlist_left">
                  <span class="reddian"></span>
                  <p class="listcontent">智慧交通解决方案</p>
                </div>
              </router-link>
              <img
                src="../../assets/imgs/home/smalldown.png"
                class="listimg"
                v-show="smallisshow2 == 0"
                @click="small2(1)"
              />
              <img
                src="../../assets/imgs/home/smalltop.png"
                class="listimg"
                v-show="smallisshow2 == 1"
                @click="small2(0)"
              />
            </div>
            <div class="item_list" v-show="smallisshow2==1">
              <router-link to="/transit">
                <div class="item_list_li" @click="close_item(0)">智慧公交</div>
              </router-link>
              <router-link to="/trafficmanagement">
                <div class="item_list_li" @click="close_item(0)">智慧交管</div>
              </router-link>
              <router-link to="/trafficplanning">
                <div class="item_list_li" @click="close_item(0)">智慧交通规划</div>
              </router-link>
              <router-link to="/trafficengineering">
                <div class="item_list_li li4" @click="close_item(0)">智慧交通工程</div>
              </router-link>
            </div>
            <div class="itemlist" @click="closeup(0, 3)">
              <router-link to="/town">
                <div class="itemlist_left">
                  <span class="reddian"></span>
                  <p class="listcontent">审批服务综合执法一体化平台</p>
                </div>
              </router-link>
            </div>
            <div class="itemlist" @click="closeup(0, 4)">
              <router-link to="/assetss" @click="overe">
                <div class="itemlist_left">
                  <span class="reddian"></span>
                  <p class="listcontent">资产智能化运营管理平台</p>
                </div>
              </router-link>
              <img
                src="../../assets/imgs/home/smalldown.png"
                class="listimg"
                v-show="smallisshow3 == 0"
                @click="small3(1)"
              />
              <img
                src="../../assets/imgs/home/smalltop.png"
                class="listimg"
                v-show="smallisshow3 == 1"
                @click="small3(0)"
              />
            </div>
            <div class="item_list" v-show="smallisshow3==1">
              <router-link to="/softwareproduct">
                <div class="item_list_li" @click="close_item(0)">软件产品</div>
              </router-link>
              <router-link to="/serviceproducts">
                <div class="item_list_li" @click="close_item(0)">服务产品</div>
              </router-link>
              <router-link to="/classiccase">
                <div class="item_list_li li4" @click="close_item(0)">经典案例</div>
              </router-link>
            </div>
            <div class="itemlist" @click="closeup(0, 5)">
              <router-link to="/environmentalprotection">
                <div class="itemlist_left">
                  <span class="reddian"></span>
                  <p class="listcontent">智慧环保大数据</p>
                </div>
              </router-link>
            </div>
            <div class="itemlist" @click="closeup(0, 6)">
              <router-link to="/administrationlaw">
                <div class="itemlist_left">
                  <span class="reddian"></span>
                  <p class="listcontent">综合行政执法智慧管理平台</p>
                </div>
              </router-link>
            </div>
            <!-- <div class="itemlist" @click="closeup(0, 4)">
              <router-link to="/assetss">
                <div class="itemlist_left">
                  <span class="reddian"></span>
                  <p class="listcontent">资产智能化运营管理平台</p>
                </div>
              </router-link>
            </div>-->
          </div>
        </div>
        <router-link to="/newsfocus">
          <div class="item" @click="closeup(0)">新闻聚焦</div>
        </router-link>
        <router-link to="/culture">
          <div class="item" @click="closeup(0)">企业文化</div>
        </router-link>
        <router-link to="/contactus">
          <div class="item" @click="closeup(0)">联系我们</div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //定义一下鼠标事件，否则会出现鼠标事件没有在原型链上定义的问题
      mouseover: "",
      mouseout: "",
      business_id: 0,
      business_list: [],
      active: 0,
      istrue: 0, //导航显示不显示
      isshow: 0, //产品服务下拉显示不显示
      navpx: 0,
      smallisshow1: 0, //自然资源下拉显示不显示
      smallisshow2: 0, //智慧交通下拉显示不显示
      smallisshow3: 0 //资产智能化运营管理平台
    };
  },
  created() {
    // this.toplist();
    // if (sessionStorage.getItem("titleactive") == null) {
    //   this.active = 0;
    // } else {
    //   this.active = sessionStorage.getItem("titleactive");
    // }
  },
  mounted() {
    this.navpx = document.getElementsByClassName("nav")[0].offsetHeight; //当前元素的高度
    this.$store.commit("nav", this.navpx);
    sessionStorage.setItem("navpx", this.navpx);
  },
  watch: {},
  methods: {
    //去除冒泡
    overe() {
      // 阻止浏览器的冒泡
      window.event ? (window.event.cancelBubble = true) : e.stopPropagation();
    },
    // 导航显示不显示
    close_item: function(x) {
      // 阻止浏览器的冒泡
      window.event ? (window.event.cancelBubble = true) : e.stopPropagation();
      this.istrue = x;
      $("#app")
        .css("height", "")
        .css("overflow", "hidden");
    },
    // 导航显示不显示
    close: function(x) {
      // 阻止浏览器的冒泡
      window.event ? (window.event.cancelBubble = true) : e.stopPropagation();
      this.istrue = x;
      $("#app")
        .css("height", "100vh")
        .css("overflow", "hidden");
    },
    close_icon: function(x) {
      // 阻止浏览器的冒泡
      window.event ? (window.event.cancelBubble = true) : e.stopPropagation();
      this.istrue = x;
      $("#app").css("height", "");
    },
    closeup: function(x, y) {
      // 阻止浏览器的冒泡
      window.event ? (window.event.cancelBubble = true) : e.stopPropagation();
      this.istrue = x;
      this.isshow = x;
      $("#app").css("height", "");
      // this.xiang(y);
    },
    //阻止浏览器的冒泡
    // stopbubble: function(e) {
    //   //如果提供了事件对象，则这是一个非IE浏览器
    //   if (e && e.stopPropagation) {
    //     //因此它支持W3C的stopPropagation()方法
    //     e.stopPropagation();
    //   } else {
    //     //否则，我们需要使用IE的方式来取消事件冒泡
    //     window.event.cancelBubble = true;
    //     return false;
    //   }
    // },
    // 列表下拉列表显示不显示
    list: function(y) {
      // 阻止浏览器的冒泡
      window.event ? (window.event.cancelBubble = true) : e.stopPropagation();
      this.isshow = y;
      // this.istrue = 1;
      console.log(y);
    },
    //自然资源下拉显示不显示
    small1: function(z) {
      // 阻止浏览器的冒泡
      window.event ? (window.event.cancelBubble = true) : e.stopPropagation();
      this.smallisshow1 = z;
      if (this.smallisshow1 == 1) {
        this.smallisshow2 = 0;
        this.smallisshow3 = 0;
      }
    },
    //智慧交通下拉显示不显示
    small2(n) {
      // 阻止浏览器的冒泡
      window.event ? (window.event.cancelBubble = true) : e.stopPropagation();
      this.smallisshow2 = n;
      if (this.smallisshow2 == 1) {
        this.smallisshow1 = 0;
        this.smallisshow3 = 0;
      }
    },
    //资产智能化运营管理平台
    small3(m) {
      // 阻止浏览器的冒泡
      window.event ? (window.event.cancelBubble = true) : e.stopPropagation();
      this.smallisshow3 = m;
      if (this.smallisshow3 == 1) {
        this.smallisshow1 = 0;
        this.smallisshow2 = 0;
      }
    },
    xiang(row) {
      // 阻止浏览器的冒泡
      // window.event ? (window.event.cancelBubble = true) : e.stopPropagation();、
      this.business_id = row;
      this.$store.commit("item_id", this.business_id);
      //把页面要传的参数存到sessionStorage里面
      sessionStorage.setItem("business_id", this.business_id);
      //路由跳转携带参数
      this.$router.push({
        name: "investment",
        params: {
          business_id: this.id
        }
      });
    },
    //axios请求
    toplist: function() {
      this.$api.get(
        "businesses",
        {
          page: 1,
          pageSize: 10
        },
        response => {
          if (response.status >= 200 && response.status < 300) {
            // console.log(response.data); //请求成功，response为成功信息参数
            this.business_list = response.data.data;
          } else {
            // console.log(response.message); //请求失败，response为失败信息
          }
        }
      );
    }
  }
};
</script>
<style scoped>
.nav {
  width: 10rem;
  height: 1.29rem;
  background-color: #ffffff;
  /* box-shadow: inset 0rem -0.013rem 0rem 0rem rgba(0, 0, 0, 0.1); */
  margin: 0px auto;
  z-index: initial;
  border-bottom: 1px solid #f8f8f8;
}
.navcontent {
  width: 9.2rem;
  height: 1.333rem;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navimg_left {
  width: 2.267rem;
  height: 0.6rem;
}
.navimg_left img {
  width: 100%;
  height: 100%;
}
.navimg_right .img1 {
  width: 0.48rem;
  height: 0.34rem;
}
.navimg_right .img2 {
  width: 0.45rem;
  height: 0.45rem;
}
.navlist {
  width: 10rem;
  min-height: 92.647vh;
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: 0rem 0.03rem 0.03rem 0rem rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 99;
  top: 1.3rem;
}
.list {
  width: 10rem;
  padding: 0px 0.4rem 0.72rem 0.4rem;
  box-sizing: border-box;
  background: #f8f8f8;
}
.list a:nth-child(6) div {
  border: 0;
}
.item {
  /* height: 1.33rem; */
  font-family: PingFang-SC-Medium;
  font-size: 0.37rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 1.33rem;
  letter-spacing: 0rem;
  color: #222222;
  border-bottom: 1px solid #ebeef5;
}
.yeitem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.33rem;
}
.yeitem a {
  width: 100%;
}
.ye {
  width: 100%;
  height: 1.33rem;
  line-height: 1.33rem;
}
.topimg {
  width: 0.45rem;
  height: 0.25rem;
  padding: 0.4rem 0.05rem 0.4rem 0.4rem;
}
.listimg {
  width: 0.32rem;
  height: 0.187rem;
  padding: 0.4rem 0.05rem 0.4rem 0.4rem;
}
.yelist {
  padding-left: 0.37rem;
  margin-bottom: 0.51rem;
}
.items {
  width: 100%;
  /* height: 1.33rem; */
}
.itemlist {
  height: 0.82rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.itemlist_left {
  display: flex;
  align-items: center;
}
.item_list {
  padding-left: 0.4rem;
  box-sizing: border-box;
}
.item_list_li {
  width: 100%;
  height: 0.84rem;
  font-family: PingFang-SC-Medium;
  font-size: 0.32rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 0.84rem;
  letter-spacing: 0rem;
  color: #666666;
  border-bottom: 0.013rem solid #e1e1e1;
}
.reddian {
  display: inline-block;
  width: 0.187rem;
  height: 0.187rem;
  background-color: #1280e1;
  border-radius: 0.053rem;
  margin-right: 0.2rem;
}
.listcontent {
  height: 0.33rem;
  font-family: PingFang-SC-Medium;
  font-size: 0.35rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 0.33rem;
  letter-spacing: 0rem;
  color: #222222;
}
.li4 {
  border: 0;
}
</style>
