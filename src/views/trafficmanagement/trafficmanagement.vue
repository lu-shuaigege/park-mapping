<template>
    <div class="mapping">
        <!-- 顶部banner -->
        <div class="bannertop" :style="{background: 'url('+bannertop_img.image+')'}">
            <!-- <img :src="bannertop_img.image" alt /> -->
        </div>
        <!-- <div class="content1"> -->
        <!-- 标题 -->
        <!-- <div class="title_all">
                <span class="span"></span>
                <p>产品特色</p>
            </div>
            <div class="word">
                <img
                    class="word_img"
                    src="../../assets/imgs/trafficmanagement/trafficmanagement1.png"
                />
            </div>
        </div>-->
        <div class="content1">
            <div class="content1-con">
                <img src="../../assets/imgs/trafficmanagement/productserviceb.png" />
                <img src="../../assets/imgs/trafficmanagement/productservicea.png" />
            </div>
            <!-- 标题 -->
            <!-- <div class="title_all">
                <span class="span"></span>
                <p>经典案例</p>
            </div>
            <div class="content_title">
                <div class="blue"></div>
                <div class="title_word">
                    <span class="blue_title">苏州市交警支队</span>
                    <span>-智慧交通建设与运营服务</span>
                </div>
            </div>
            <p class="title">
                <b>服务内容：</b>苏州交警智慧交通主要包含软件建设和运营服务两大内容，软件建设包括：智慧交通数据共享平台、高速公路网格化集成智慧调度系统等，运营服务包括交通信号优化及评价、交通投诉分析处理、交通综合分析研判、交通建模及仿真、汇报及宣传材料制作等工作。
            </p>
            <div class="word word_img2">
                <img
                    class="word_img"
                    src="../../assets/imgs/trafficmanagement/trafficmanagement2.png"
                />
            </div>
            <div class="content_title">
                <div class="blue"></div>
                <div class="title_word">
                    <span class="blue_title">苏州工业园区交警大队</span>
                    <span>-智能交通建设与运营服务</span>
                </div>
            </div>
            <p class="title">
                <b>服务内容：</b>
                园区交警大队智能交通主要包含软件建设和运营服务两大内容，软件建设包括：交通信息诱导平台、路口档案昔日、交通OD分析系统等；运营服务包括：设计阶段的交通咨询、项目管理、招投标；建设与运营阶段的项目管理、软件集成、交通服务、专题分析、勤务工作、地理信息相关资源维护、秩序投诉回复、交通值守、信号系统维护与管理、设备巡检、技术文档整理与汇总、各类汇报PPT和材料整理。
            </p>
            <div class="word word_img2">
                <img
                    class="word_img"
                    src="../../assets/imgs/trafficmanagement/trafficmanagement3.png"
                />
            </div>-->
        </div>
        <!-- 侧边按钮 -->
        <Sidebarpopup></Sidebarpopup>
    </div>
</template>

<script>
import Sidebarpopup from "../../components/Sidebarpopup/Sidebarpopup";
export default {
    data() {
        return {
            bannertop_img: "",
            fourimg: [
                {
                    url: require("../../assets/imgs/mapping/mapping4.png"),
                    title: "服务部门广、专业测绘精"
                },
                {
                    url: require("../../assets/imgs/mapping/mapping5.png"),
                    title: "一次测绘、成果共享"
                },
                {
                    url: require("../../assets/imgs/mapping/mapping6.png"),
                    title: "时效管控，限时办结"
                },
                {
                    url: require("../../assets/imgs/mapping/mapping7.png"),
                    title: "全生命周期跟踪服务"
                }
            ]
        };
    },
    components: { Sidebarpopup },
    created() {
        sessionStorage.setItem("add", "smart-traffic");
        this.banner();
        // this.productsfn();
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
                "banners/product-child",
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
@import "trafficmanagement.scss";
</style>