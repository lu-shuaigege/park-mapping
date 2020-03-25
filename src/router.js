import Vue from "vue";
import Router from "vue-router";
import home from "./views/home/home.vue";
import about from "./views/about/about.vue";
import newsfocus from "./views/newsfocus/newsfocus.vue";
import newsdetail from "./views/newsdetail/newsdetail.vue";
import culture from "./views/culture/culture.vue";
import contactus from "./views/contactus/contactus.vue";
import product from "./views/product/product.vue";
import natural from "./views/natural/natural.vue";
import mapping from "./views/mapping/mapping.vue";
import details from "./views/details/details.vue";
import traffic from "./views/traffic/traffic.vue";
import dataservice from "./views/dataservice/dataservice.vue";
import software from "./views/software/software.vue";
import supervisor from "./views/supervisor/supervisor.vue";
import transit from "./views/transit/transit.vue";
import trafficmanagement from "./views/trafficmanagement/trafficmanagement.vue";
import town from "./views/town/town.vue";
import assetss from "./views/assetss/assetss.vue";
import softwareproduct from "./views/softwareproduct/softwareproduct.vue";
import serviceproducts from "./views/serviceproducts/serviceproducts.vue";
import classiccase from "./views/classiccase/classiccase.vue";
import administrationlaw from "./views/administrationlaw/administrationlaw.vue";










Vue.use(Router);

export const contentsRouter = [
  {
    path: "/",
    redirect: "home"
  },
  {
    path: "/home",
    name: "home",
    meta: {
      title: "主页"
    },
    component: () => import("./views/home/home.vue")
  },
  {
    path: "/about",
    name: "about",
    meta: {
      title: "关于我们"
    },
    component: () => import("./views/about/about.vue")
  },
  {
    path: "/newsfocus",
    name: "newsfocus",
    meta: {
      title: "新闻聚焦"
    },
    component: () => import("./views/newsfocus/newsfocus.vue")
  },
  {
    path: "/newsdetail",
    name: "newsdetail",
    meta: {
      title: "新闻详情"
    },
    component: () => import("./views/newsdetail/newsdetail.vue")
  },
  {
    path: "/culture",
    name: "culture",
    meta: {
      title: "企业文化"
    },
    component: () => import("./views/culture/culture.vue")
  },
  {
    path: "/contactus",
    name: "contactus",
    meta: {
      title: "联系我们"
    },
    component: () => import("./views/contactus/contactus.vue")
  },
  {
    path: "/product",
    name: "product",
    meta: {
      title: "产品服务"
    },
    component: () => import("./views/product/product.vue")
  }, {
    path: "/natural",
    name: "natural",
    meta: {
      title: "自然资源空间信息服务解决方案"
    },
    component: () => import("./views/natural/natural.vue")
  }, {
    path: "/mapping",
    name: "mapping",
    meta: {
      title: "测绘服务"
    },
    component: () => import("./views/mapping/mapping.vue")
  }, {
    path: "/details",
    name: "details",
    meta: {
      title: "产品详情"
    },
    component: () => import("./views/details/details.vue")
  }, {
    path: "/traffic",
    name: "traffic",
    meta: {
      title: "智慧交通解决方案"
    },
    component: () => import("./views/traffic/traffic.vue")
  }, {
    path: "/dataservice",
    name: "dataservice",
    meta: {
      title: "数据服务"
    },
    component: () => import("./views/dataservice/dataservice.vue")
  }, {
    path: "/software",
    name: "software",
    meta: {
      title: "软件产品"
    },
    component: () => import("./views/software/software.vue")
  }, {
    path: "/supervisor",
    name: "supervisor",
    meta: {
      title: "咨询监理"
    },
    component: () => import("./views/supervisor/supervisor.vue")
  }, {
    path: "/transit",
    name: "transit",
    meta: {
      title: "智慧公交"
    },
    component: () => import("./views/transit/transit.vue")
  }, {
    path: "/trafficmanagement",
    name: "trafficmanagement",
    meta: {
      title: "智慧交管"
    },
    component: () => import("./views/trafficmanagement/trafficmanagement.vue")
  }, {
    path: "/town",
    name: "town",
    meta: {
      title: "智慧城镇综合管理解决方案"
    },
    component: () => import("./views/town/town.vue")
  }, {
    path: "/assetss",
    name: "assetss",
    meta: {
      title: "资产智能化运营管理平台"
    },
    component: () => import("./views/assetss/assetss.vue")
  },{
    path: "/softwareproduct",
    name: "softwareproduct",
    meta: {
      title: "资产智能化运营管理平台-软件产品"
    },
    component: () => import("./views/softwareproduct/softwareproduct.vue")
  },{
    path: "/serviceproducts",
    name: "serviceproducts",
    meta: {
      title: "资产智能化运营管理平台-服务产品"
    },
    component: () => import("./views/serviceproducts/serviceproducts.vue")
  },{
    path: "/classiccase",
    name: "classiccase",
    meta: {
      title: "资产智能化运营管理平台-经典案例"
    },
    component: () => import("./views/classiccase/classiccase.vue")
  },{
    path: "/administrationlaw",
    name: "administrationlaw",
    meta: {
      title: "行政执法"
    },
    component: () => import("./views/administrationlaw/administrationlaw.vue")
  },{
    path: "/environmentalprotection",
    name: "environmentalprotection",
    meta: {
      title: "智慧环保"
    },
    component: () => import("./views/environmentalprotection/environmentalprotection.vue")
  },{
    path: "/trafficengineering",
    name: "trafficengineering",
    meta: {
      title: "交通工程"
    },
    component: () => import("./views/trafficengineering/trafficengineering.vue")
  },{
    path: "/trafficplanning",
    name: "trafficplanning",
    meta: {
      title: "交通规划"
    },
    component: () => import("./views/trafficplanning/trafficplanning.vue")
  },
];
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: contentsRouter
});
