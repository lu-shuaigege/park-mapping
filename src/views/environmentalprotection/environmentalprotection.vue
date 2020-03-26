<template>
    <div class="mapping">
        <!-- 顶部banner -->
        <div class="bannertop" :style="{background: 'url('+bannertop_img.image+')'}">
            <!-- <img :src="bannertop_img.image" alt /> -->
        </div>
        <div class="content2">
            <!-- 标题 -->
            <div class="title_all">
                <span class="span"></span>
                <p>智慧环保大数据分析平台</p>
            </div>
            <p
                class="title"
            >智慧环保大数据分析平台是一款针对城市环境中空气、水、固废等污染物，开展实时监测、智能分析、智慧化管理的综合大数据分析平台。通过物联网传感器网络，实时采集、存储、归档各项污染物浓度的时空分布大数据，完成对各项环境指标的实时动态监测。平台将城市生态环境、地理环境、气象环境、污染监测、污染企业、居住人口等数据汇聚起来，赋予自身实时报警、应急处置、智能化预警、情景还原、污染溯源、决策支持等能力。</p>
            <!-- <img class="word" src="../../assets/imgs/environmentalprotection/img1.png" alt /> -->
            <!-- <img class="word" src="../../assets/切图/园区测绘移动端/3x/资源 1@3x.png" alt /> -->
        </div>
        <div class="content2">
            <!-- 标题 -->
            <div class="title_all">
                <span class="span"></span>
                <p>建设目标</p>
            </div>
            <div class="environment_first">
                <div class="environment_first_l">
                    <img src="../../assets/imgs/environmentalprotection/img2.png" alt />
                    <p class="title1">环保部门</p>
                    <p class="con1">通过构建空气和水体指标的监测、预警和溯源的监控体系，为环保部门的决策提供依据。</p>
                </div>
                <div class="environment_first_l">
                    <img src="../../assets/imgs/environmentalprotection/img3.png" alt />
                    <p class="title1">厂方（污染物源）</p>
                    <p class="con1">当监测站检测到相关污染物的浓度超过阈值时，平台会通过短信、电话等方式对相关负责人发送报警信息</p>
                </div>
            </div>
        </div>
        <div class="content2">
            <!-- 标题 -->
            <div class="title_all">
                <span class="span"></span>
                <p>解决问题</p>
            </div>
            <img class="word" src="../../assets/imgs/environmentalprotection/img4.png" alt />
        </div>
        <div class="content2">
            <!-- 标题 -->
            <div class="title_all">
                <span class="span"></span>
                <p>产品特色</p>
            </div>
            <img class="word" src="../../assets/imgs/environmentalprotection/img5.png" alt />
        </div>
        <div class="content2">
            <!-- 标题 -->
            <div class="title_all">
                <span class="span"></span>
                <p>产品介绍</p>
            </div>
            <div class="environment_second">
                <div class="environment_second_list" v-for="item in list" :key="item">
                    <div class="img">
                        <img :src="item.cover_image" alt />
                    </div>
                    <p>{{item.title}}</p>
                    <button @click="toDetail(item.id)">查看更多>></button>
                </div>
            </div>
        </div>
        <!-- 侧边按钮 -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            bannertop_img: "",
            list: []
        };
    },
    components: {},
    created() {
        sessionStorage.setItem("add", "inteenvi-bigdata-platform");
        this.api();
    },
    mounted() {
        this.$router.afterEach((from, next) => {
            window.scrollTo(0, 0);
        });
    },
    methods: {
        api: function() {
            //axios请求轮播图
            this.$api.get("banners/product-child", {}, response => {
                if (response.status >= 200 && response.status < 300) {
                    // console.log(response.data); //请求成功，response为成功信息参数
                    this.bannertop_img = response.data.data[0];
                } else {
                    // console.log(response.message); //请求失败，response为失败信息
                }
            });
            //请求列表
            this.$api.get(
                "products/category/inteenvi-bigdata-platform",
                {},
                response => {
                    if (response.status >= 200 && response.status < 300) {
                        this.list = response.data.data.data;
                    }
                }
            );
        },
        toDetail: function(id) {
            //把页面要传的参数存到sessionStorage里面
            sessionStorage.setItem("details_id", id);
            //路由跳转携带参数
            this.$router.push({
                name: "details",
                query: {
                    details: id
                }
            });
        }
    }
};
</script>

<style lang="scss" scoped>
@import "environmentalprotection.scss";
</style>