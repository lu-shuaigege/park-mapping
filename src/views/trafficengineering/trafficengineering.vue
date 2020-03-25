<template>
    <div class="mapping">
        <!-- 顶部banner -->
        <div class="bannertop" :style="{background: 'url('+bannertop_img.image+')'}">
            <!-- <img :src="bannertop_img.image" alt /> -->
        </div>
        <div class="content1">
            <img
                class="content1-conImg"
                src="../../assets/imgs/trafficengineering/trafficengineeringa.png"
            />
            <img
                class="content1-conImg"
                src="../../assets/imgs/trafficengineering/trafficengineeringb.png"
            />

            <!-- 标题 -->
            <!-- <div class="title_all">
                <span class="span"></span>
                <p>智慧停车</p>
            </div>
            <p class="title">以公司整体资源为依托，秉持优质高效的服务理念，打造工程建设、系统集成及软件服务体系，提供专业持续的品质服务。</p>-->
        </div>
        <!-- <div class="content1"> -->
        <!-- 标题 -->
        <!-- <div class="title_all">
                <span class="span"></span>
                <p>客户</p>
            </div>
            <div class="trafficengineering-first">
                <div class="trafficengineering-firstone">
                    <img src="../../assets/imgs/trafficengineering/img1.png" alt />
                    <p class="title1">交警部门</p>
                    <p class="con">智慧交管工程、交通安全设施</p>
                </div>
                <div class="trafficengineering-firstone">
                    <img src="../../assets/imgs/trafficengineering/img1.png" alt />
                    <p class="title1">公交部门</p>
                    <p class="con">智慧公交工程、交通安全设施</p>
                </div>
            </div>
            <div class="trafficengineering-second">
                <img src="../../assets/imgs/trafficengineering/img3.png" alt />
                <p class="title1">住建局、交管局、开发公司</p>
                <p class="con">智慧交管工程、智慧公交工程、智慧停车工程、智慧建筑工程、交通安全设施、系统集成。</p>
            </div>
        </div>
        <div class="content1">-->
        <!-- 标题 -->
        <!-- <div class="title_all">
                <span class="span"></span>
                <p>解决问题</p>
            </div>
            <div class="word">
                <img class="word_img" src="../../assets/imgs/trafficengineering/img4.png" alt />
            </div>
            <p
                class="title"
            >智慧工程以用户体验为核心，运用先进的信息、通讯、传感、控制、GIS、计算机等技术，实现城市全面感知、互联、分析、预警、控制等能力，提升城市的运行效率、管理水平，努力打造一个高效、舒适、便捷的人性化环境。</p>
        </div>
        <div class="content1" style="padding-bottom:0.4rem">-->
        <!-- 标题 -->
        <!-- <div class="title_all">
                <span class="span"></span>
                <p>产品特色</p>
            </div>
            <div class="word">
                <img class="word_img" src="../../assets/imgs/trafficengineering/img5.png" alt />
            </div>
        </div>-->
        <!-- 侧边按钮 -->
        <Sidebarpopup></Sidebarpopup>
    </div>
</template>

<script>
import Sidebarpopup from "../../components/Sidebarpopup/Sidebarpopup";
export default {
    data() {
        return {
            bannertop_img: ""
        };
    },
    components: { Sidebarpopup },
    created() {
        sessionStorage.setItem("add", "smart-parking");
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
@import "trafficengineering.scss";
</style>