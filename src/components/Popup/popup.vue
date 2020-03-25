<template>
  <div class="coupon-cartridge" ref="couponCartridge" @click="overdown">
    <div class="bg" ref="bg"></div>
    <div class="content" @click="nooverdown" ref="content">
      <div class="top">{{title}}</div>
      <div class="middle">
        <div class="item" v-for="(item,index) in lists" :key="index" @click="choice(item.id)">
          <div class="item_title">{{item.name}}</div>
          <div class="radius">
            <img v-if="active==item.id" src="../../static/ok.png" alt />
            <img v-if="active!=item.id" src="../../static/nook.png" alt />
          </div>
        </div>
      </div>
      <div class="bottom" @click="overdown">
        <div class="button">确定</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      title: "店铺优惠"
    };
  },
  props: {
    list: {
      type: Array,
      default: function() {
        return [];
      }
    },
    lists: {
      type: Array,
      default: function() {
        return [];
      }
    }
    // lists: Array
  },
  //   watch: {
  //     lists() {
  //       this.getlists();
  //     }
  //   },
  methods: {
    // getlists() {
    //   this.list = this.lists;
    // },
    choice: function(x) {
      // console.log(x);
      this.active = x;
    },
    overdown: function() {
      // 阻止浏览器的冒泡
      window.event ? (window.event.cancelBubble = true) : e.stopPropagation();
      this.$refs.couponCartridge.style.top = "100vh";
      this.$refs.bg.style.opacity = "0";
      this.$refs.content.style.bottom = "-40%";
    },
    nooverdown: function() {
      // 阻止浏览器的冒泡
      window.event ? (window.event.cancelBubble = true) : e.stopPropagation();
      this.$refs.couponCartridge.style.top = "0px";
      this.$refs.bg.style.opacity = "0.6";
    },
    up: function() {
      this.$refs.couponCartridge.style.top = "0px";
      this.$refs.bg.style.opacity = "0.6";
      this.$refs.content.style.bottom = "0";
      // console.log(this.lists);
    }
  }
};
</script>
<style scoped>
.coupon-cartridge {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 100vh;
  left: 0px;
  box-sizing: border-box;
  z-index: 999;
  /* background: rgba(0, 0, 0, 0.6); */
  transition: top 0s;
  -moz-transition: top 0s; /* Firefox 4 */
  -webkit-transition: top 0s; /* Safari 和 Chrome */
  -o-transition: top 0s;
}
.bg {
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.6;
  transition: opacity 0s;
  -moz-transition: opacity 0s; /* Firefox 4 */
  -webkit-transition: opacity 0s; /* Safari 和 Chrome */
  -o-transition: opacity 0s;
}
.content {
  width: 100%;
  max-height: 56%;
  /* margin-top: 80%; */
  position: absolute;
  bottom: -40%;
  border-radius: 20upx 20upx 0px 0px;
  background: #ffffff;
  transition: bottom 1s;
  -moz-transition: bottom 1s; /* Firefox 4 */
  -webkit-transition: bottom 1s; /* Safari 和 Chrome */
  -o-transition: bottom 1s;
}
.top {
  width: 100%;
  height: 100upx;
  /* position: absolute;
  top: 0px;
  left: 0px; */
  font-family: "微软雅黑";
  font-size: 32upx;
  line-height: 100upx;
  text-align: center;
}
.middle {
  width: 100%;
  max-height: 520upx;
  overflow: scroll;
}

.item {
  width: 100%;
  height: 94upx;
  font-size: 28upx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20upx;
  box-sizing: border-box;
}

.radius {
  width: 34upx;
  height: 34upx;
  border-radius: 50%;
}
.radius img {
  width: 100%;
  height: 100%;
}
.bottom {
  width: 100%;
  height: 112upx;
  display: flex;
  justify-content: center;
  align-items: center;
}
.button {
  width: 700upx;
  height: 80upx;
  border-radius: 40upx;
  font-size: 32upx;
  line-height: 80upx;
  text-align: center;
  color: rgb(255, 255, 255);
  background: #ff5d00;
}
</style>