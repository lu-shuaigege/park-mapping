<template>
  <div class="contactus">
    <!-- 顶部banner -->
    <div class="bannertop" :style="{background: 'url('+bannertop_img.image+')'}">
      <!-- <img :src="bannertop_img.image" alt /> -->
    </div>
    <div class="content">
      <img src="../../assets/imgs/contentus/map.jpg" alt />
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
  data() {
    return {
      bannertop_img: "",
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
      ]
    };
  },
  created() {
    this.banner();
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
        "banners/contact-us",
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
@import "contactus.scss";
</style>